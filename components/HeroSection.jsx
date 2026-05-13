// Hero is static markup — animations are handled purely by CSS keyframes.
export default function HeroSection() {
  const stats = [
    { num: '30+', label: 'Projects Delivered' },
    { num: '98%',  label: 'Client Satisfaction' },
    { num: '5yrs', label: 'Experience' },
  ]

  return (
    <section id="hero">
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-tag">Digital Design Studio — Est. 2023</div>

        <h1 className="hero-title">
          We Build<br />
          <span className="line2">Digital</span>
          <span className="line3">Experiences.</span>
        </h1>

        <p className="hero-sub">
          Award-winning web design and development studio. We craft high-performance
          digital products that convert visitors into customers.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Start a Project</a>
          <a href="#work" className="btn-ghost">View Our Work</a>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
