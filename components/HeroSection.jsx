export default function HeroSection() {
  const stats = [
    { num: '30+', label: 'Projects Delivered' },
    { num: '98%', label: 'Client Satisfaction' },
    { num: '5yrs', label: 'Experience' },
  ];

  return (
      <section
          id="hero"
          className="flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-24"
      >
        <div className="hero-grid" />

        {/* FORCE layout control */}
        <div className="w-full max-w-6xl mx-auto flex flex-col">

          {/* Content */}
          <div className="hero-content w-full text-center lg:text-left">
            <div className="hero-tag text-xs sm:text-sm">
              Digital Design Studio — Est. 2023
            </div>

            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              We Build<br />
              <span className="line2 block">Digital</span>
              <span className="line3 block">Experiences.</span>
            </h1>

            <p className="hero-sub mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
              Award-winning web design and development studio. We craft high-performance
              digital products that convert visitors into customers.
            </p>

            {/* Buttons */}
            <div className="hero-actions flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary w-full sm:w-auto text-center">
                Start a Project
              </a>
              <a href="#work" className="btn-ghost w-full sm:w-auto text-center">
                View Our Work
              </a>
            </div>
          </div>

          {/* Stats — FORCE override absolute positioning */}
          <div className="
  hero-stats
  static mt-10 flex flex-col items-center gap-6
  sm:flex-row sm:justify-center
  lg:absolute lg:right-16 lg:bottom-16 lg:mt-0 lg:items-start lg:justify-start
">            {stats.map((s) => (
                <div key={s.label} className="stat text-center lg:text-left">
                  <div className="stat-num text-2xl sm:text-3xl">
                    {s.num}
                  </div>
                  <div className="stat-label text-xs sm:text-sm">
                    {s.label}
                  </div>
                </div>
            ))}
          </div>

        </div>
      </section>
  );
}