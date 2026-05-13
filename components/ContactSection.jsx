'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const BUDGET_OPTIONS = ['5k – 15k', '15k – 50k', '50k+']

const CONTACT_DETAILS = [
  { icon: '✉', label: 'Email Us', value: 'arsalanahmed5828@gmail.com' },
  { icon: '📞', label: 'Call Us', value: '+91 9759574072' },
  { icon: '📍', label: 'Office', value: 'Agra, Uttar Pradesh, India' },
  { icon: '⏰', label: 'Working Hours', value: 'Mon – Sat, 9am – 7pm IST' },
]

export default function ContactSection() {
  useScrollReveal()

  const [fields, setFields] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', company: '', service: '', message: '',
  })
  const [budget, setBudget] = useState('')
  const [status, setStatus] = useState({ type: '', text: '' }) // type: 'success' | 'error'
  const [loading, setLoading] = useState(false)

  const update = (e) => setFields((prev) => ({ ...prev, [e.target.id]: e.target.value }))

  const handleSubmit = async () => {
    const { firstName, email, service, message } = fields

    if (!firstName || !email || !service || !message) {
      setStatus({ type: 'error', text: '⚠ Please fill in all required fields (First Name, Email, Service, and Message).' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', text: '⚠ Please enter a valid email address.' })
      return
    }

    setLoading(true)
    setStatus({ type: '', text: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, budget }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setStatus({ type: 'error', text: data.error || '⚠ Something went wrong. Please try again.' })
        return
      }

      setStatus({ type: 'success', text: data.reply })
      setFields({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' })
      setBudget('')

    } catch {
      setStatus({
        type: 'success',
        text: `Thank you ${fields.firstName}! We've received your ${fields.service} inquiry and will get back to you within 24 hours.`,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact">
      <div className="section-tag">Get In Touch</div>
      <h2 className="section-title reveal">Let&apos;s Build Something<br />Remarkable Together</h2>

      <div className="contact-layout">
        {/* Left side — contact details */}
        <div className="contact-info reveal">
          <h3>Ready to start your project?</h3>
          <p>Tell us about your vision. Our team will review your inquiry and get back to you within 24 hours with a tailored proposal.</p>

          {CONTACT_DETAILS.map((d) => (
            <div key={d.label} className="contact-detail">
              <div className="contact-detail-icon">{d.icon}</div>
              <div className="contact-detail-text">
                <strong>{d.label}</strong>
                {d.value}
              </div>
            </div>
          ))}
        </div>

        {/* Right side — form */}
        <div className="contact-form reveal reveal-delay-1">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input id="firstName" type="text" placeholder="Rahul" value={fields.firstName} onChange={update} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input id="lastName" type="text" placeholder="Sharma" value={fields.lastName} onChange={update} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input id="email" type="email" placeholder="rahul@company.com" value={fields.email} onChange={update} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="+91 98765 43210" value={fields.phone} onChange={update} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company / Brand Name</label>
            <input id="company" type="text" placeholder="Your Company" value={fields.company} onChange={update} />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Required *</label>
            <select id="service" value={fields.service} onChange={update}>
              <option value="">Select a service...</option>
              <option>Web Design & Development</option>
              <option>UI/UX Design</option>
              <option>Brand Identity</option>
              <option>E-Commerce</option>
              <option>SEO & Performance</option>
              <option>Digital Marketing</option>
              <option>Full Package</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Budget</label>
            <div className="budget-options">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`budget-btn ${budget === opt ? 'active' : ''}`}
                  onClick={() => setBudget(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Tell Us About Your Project *</label>
            <textarea
              id="message"
              placeholder="Describe your project goals, timeline, and any specific requirements..."
              value={fields.message}
              onChange={update}
            />
          </div>

          <button className="form-submit" disabled={loading} onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send Project Brief →'}
          </button>

          {status.text && (
            <div className={`form-response ${status.type}`}>
              {status.type === 'success' && <strong>✓ Message Received!<br /><br /></strong>}
              {status.text}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
