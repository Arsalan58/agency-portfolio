'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  {
    num: '01',
    title: 'Web Design & Development',
    desc: 'Pixel-perfect, responsive websites built with cutting-edge technology. From concept to launch, we create digital experiences that perform.',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="28" rx="3" stroke="#c8ff00" strokeWidth="1.5"/>
        <path d="M4 32h40" stroke="#c8ff00" strokeWidth="1.5"/>
        <circle cx="24" cy="42" r="2" fill="#c8ff00"/>
        <path d="M17 42h14" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 18l5 5-5 5" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 28h10" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'User-centered design that converts. We research, prototype, and test to create interfaces your users will love to interact with.',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="4" width="20" height="34" rx="3" stroke="#c8ff00" strokeWidth="1.5"/>
        <circle cx="24" cy="34" r="2" fill="#c8ff00"/>
        <path d="M19 10h10M19 15h6" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="2" y="14" width="10" height="16" rx="2" stroke="#c8ff00" strokeWidth="1.5"/>
        <rect x="36" y="14" width="10" height="16" rx="2" stroke="#c8ff00" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Brand Identity',
    desc: 'Strategic brand systems that stand out. Logo design, visual identity, color systems, and brand guidelines that grow with you.',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="10" stroke="#c8ff00" strokeWidth="1.5"/>
        <path d="M24 14v-8M24 42v-8M14 24H6M42 24h-8" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" fill="#c8ff00" opacity="0.3"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'SEO & Performance',
    desc: 'Top rankings, lightning-fast speeds. Technical SEO, Core Web Vitals optimization, and conversion rate optimization that drives real results.',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 36l10-10 8 6 10-14 8 8" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="40" height="40" rx="3" stroke="#c8ff00" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'E-Commerce',
    desc: 'Online stores that sell. Custom Shopify, WooCommerce, and headless commerce solutions designed for maximum conversion and revenue.',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="40" height="28" rx="3" stroke="#c8ff00" strokeWidth="1.5"/>
        <path d="M14 20h8M14 24h6M14 28h10" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="28" y="17" width="10" height="15" rx="2" stroke="#c8ff00" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that deliver ROI. Social media, PPC, content strategy, and email marketing orchestrated for measurable growth.',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20c0-8.837 7.163-16 16-16s16 7.163 16 16c0 5.5-2.78 10.363-7 13.31" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 36a8 8 0 1016 0" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="36" r="3" fill="#c8ff00"/>
      </svg>
    ),
  },
]

// Stagger delay classes cycle through 3 slots so every row feels fresh
const delayClass = (i) => {
  const delays = ['', 'reveal-delay-1', 'reveal-delay-2']
  return delays[i % 3]
}

export default function ServicesSection() {
  useScrollReveal()

  return (
    <section id="services">
      <div className="section-tag">What We Do</div>
      <h2 className="section-title reveal">Crafting Exceptional<br />Digital Solutions</h2>

      <div className="services-grid">
        {services.map((service, i) => (
          <div key={service.num} className={`service-card reveal ${delayClass(i)}`}>
            <div className="service-num">{service.num}</div>
            {service.icon}
            <div className="service-title">{service.title}</div>
            <div className="service-desc">{service.desc}</div>
            <div className="service-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  )
}
