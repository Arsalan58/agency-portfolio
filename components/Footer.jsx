// Static footer — no client state needed here.
const footerLinks = {
  Services: [
    { label: 'Web Design', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Branding', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'SEO', href: '#services' },
  ],
  Company: [
    { label: 'Portfolio', href: '#work' },
    { label: 'Process', href: '#process' },
    // { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href:   '#testimonials' },
  ],
  Contact: [
    { label: 'Email Us', href: 'mailto:arsalanahmed5828@gmail.com' },
    { label: 'Get a Quote', href: '#contact' },
    { label: 'Start Project', href: '#contact' },
  ],
}

const socials = [
  { label: 'in', href: '#' },
  { label: 'tw', href: '#' },
  { label: 'ig', href: '#' },
  { label: 'be', href: '#' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">CODE<span>ARA</span></div>
          <p className="footer-tagline">
            Award-winning digital design studio creating remarkable web experiences since 2019.
          </p>
        </div>

        <div className="footer-links">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer-col">
              <h4>{heading}</h4>
              {links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2025 CODEARA Digital Studio. All rights reserved.</div>
        <div className="footer-social">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="social-btn">{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
