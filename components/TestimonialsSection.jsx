'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    id: 1,
    quote: '"CODEARA completely transformed our online presence. Our conversion rate increased by 340% within 3 months of launch. Absolutely exceptional work."',
    name: 'Arjun Kapoor',
    role: 'CEO, TechVenture India',
    initials: 'AK',
    avatarStyle: { background: 'rgba(200,255,0,0.1)', color: '#c8ff00' },
    delay: '',
  },
  {
    id: 2,
    quote: '"The team at CODEARA understood our vision from day one. They delivered a website that not only looks stunning but performs incredibly well."',
    name: 'Sarah Mitchell',
    role: 'Founder, Bloom Co.',
    initials: 'SM',
    avatarStyle: { background: 'rgba(255,77,109,0.1)', color: '#ff4d6d' },
    delay: 'reveal-delay-1',
  },
  {
    id: 3,
    quote: '"From wireframes to launch in 6 weeks. The process was seamless, communication was excellent, and the results exceeded every expectation."',
    name: 'Rohan Gupta',
    role: 'Director, Apex Systems',
    initials: 'RG',
    avatarStyle: { background: 'rgba(122,255,185,0.1)', color: '#7affb9' },
    delay: 'reveal-delay-2',
  },
]

export default function TestimonialsSection() {
  useScrollReveal()

  return (
    <section id="testimonials">
      <div className="section-tag">Reviews</div>
      <h2 className="section-title reveal">What Clients Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className={`testimonial-card reveal ${t.delay}`}>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-quote">{t.quote}</div>
            <div className="testimonial-author">
              <div className="author-avatar" style={t.avatarStyle}>{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
