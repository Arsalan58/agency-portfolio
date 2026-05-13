export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import transporter from "@/services/nodemailer/transporter";
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, phone, company, service, budget, message } = body;

        // Validation
        if (!firstName || !email || !service || !message) {
            return NextResponse.json(
                { success: false, error: "Please fill in all required fields." },
                { status: 400 }
            );
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { success: false, error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        // 1️⃣ Generate AI reply via Anthropic
        const prompt = `You are a friendly and professional project coordinator at CODEARA Digital Design Studio. A potential client just submitted an inquiry through the website. Here are their details:

Name: ${firstName} ${lastName}
Email: ${email}
${phone ? "Phone: " + phone : ""}
${company ? "Company: " + company : ""}
Service Interested In: ${service}
${budget ? "Budget Range: " + budget : ""}
Message: ${message}

Write a brief, warm, personalized acknowledgment response (3–4 sentences) that:
1. Thanks them by their first name
2. Confirms which service they're interested in
3. Mentions we'll review their project and get back within 24 hours
4. Ends with enthusiasm about potentially working together

Keep it professional but friendly. Do not use generic templates.`

        let aiReply = `Thank you ${firstName}! We've received your ${service} inquiry and our team will review it and reach out to you at ${email} within 24 hours. We're excited about the possibility of working together!`

        try {
            const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.ANTHROPIC_API_KEY!,
                    "anthropic-version": "2023-06-01",
                },
                body: JSON.stringify({
                    model: "claude-sonnet-4-20250514",
                    max_tokens: 1000,
                    messages: [{ role: "user", content: prompt }],
                }),
            });
            const aiData = await aiRes.json();
            aiReply = aiData.content?.[0]?.text || aiReply;
        } catch (aiError) {
            console.error("AI reply failed, using fallback:", aiError);
            // fallback reply already set above
        }

        // 2️⃣ Send notification email to your agency
        await transporter.sendMail({
            from: `"CODEARA Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `🚀 New Inquiry: ${service} — ${firstName} ${lastName}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #333;">
          <h2 style="background:#000; color:#fff; padding:16px 24px; margin:0;">New Project Inquiry</h2>
          <div style="padding: 24px; border: 1px solid #eee;">
            <table style="width:100%; border-collapse:collapse;">
              <tr><td style="padding:8px 0; font-weight:bold; width:140px;">Name</td><td>${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0; font-weight:bold;">Email</td><td>${email}</td></tr>
              ${phone ? `<tr><td style="padding:8px 0; font-weight:bold;">Phone</td><td>${phone}</td></tr>` : ""}
              ${company ? `<tr><td style="padding:8px 0; font-weight:bold;">Company</td><td>${company}</td></tr>` : ""}
              <tr><td style="padding:8px 0; font-weight:bold;">Service</td><td>${service}</td></tr>
              ${budget ? `<tr><td style="padding:8px 0; font-weight:bold;">Budget</td><td>${budget}</td></tr>` : ""}
            </table>
            <hr style="margin: 16px 0;" />
            <p style="font-weight:bold;">Message:</p>
            <p style="line-height:1.7; color:#555;">${message}</p>
          </div>
          <p style="padding: 16px 24px; font-size:12px; color:#999;">CODEARA Digital Design Studio</p>
        </div>
      `,
        });

        // 3️⃣ Send confirmation email to client
        await transporter.sendMail({
            from: `"CODEARA Studio" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `We've received your inquiry, ${firstName}! ✅`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #333;">
          <h2 style="background:#000; color:#fff; padding:16px 24px; margin:0;">CODEARA Digital Design Studio</h2>
          <div style="padding: 24px;">
            <p style="font-size:16px; line-height:1.7;">${aiReply}</p>
            <hr style="margin: 24px 0;" />
            <p style="font-size:13px; color:#999;">
              📧 arsalanahmed5828@gmail.com &nbsp;|&nbsp; 📞 +91 9759574072<br/>
              📍 Agra, Uttar Pradesh, India &nbsp;|&nbsp; ⏰ Mon–Sat, 9am–7pm IST
            </p>
          </div>
        </div>
      `,
        });

        return NextResponse.json({ success: true, reply: aiReply }, { status: 200 });

    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { success: false, error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}