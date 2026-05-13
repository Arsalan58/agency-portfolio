// Static navbar — no client-side state needed.
// If you add a mobile hamburger menu later, add 'use client' and useState.
export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        CODE<span>ARA</span>
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        {/*<a href="#pricing">Pricing</a>*/}
        <a href="#contact" className="nav-cta">Get Started</a>
      </div>
    </nav>
  )
}
