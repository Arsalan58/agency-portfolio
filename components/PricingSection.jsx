'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$2,499',
    period: '/project',
    desc: 'Perfect for small businesses and startups ready to make their mark online.',
    features: [
      '5-page responsive website',
      'Custom UI design',
      'Mobile optimization',
      'Basic SEO setup',
      'Contact form',
      '2 rounds of revisions',
      '30-day support',
    ],
    cta: 'Get Started',
    featured: false,
    delay: '',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$5,999',
    period: '/project',
    desc: 'For growing businesses that need a powerful digital presence and performance.',
    features: [
      'Up to 15 pages',
      'Advanced UI/UX design',
      'CMS integration',
      'Full SEO optimization',
      'Analytics dashboard',
      'E-commerce ready',
      '4 rounds of revisions',
      '90-day support',
    ],
    cta: 'Get Started',
    featured: true,
    delay: 'reveal-delay-1',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: null,
    desc: 'Tailored solutions for large organizations with complex requirements and scale.',
    features: [
      'Unlimited pages',
      'Custom web application',
      'API integrations',
      'Advanced analytics',
      'Dedicated team',
      'Priority support',
      'Unlimited revisions',
      '12-month SLA',
    ],
    cta: 'Contact Us',
    featured: false,
    delay: 'reveal-delay-2',
  },
]

export default function PricingSection() {
  useScrollReveal()

  return (
    <section id="pricing">
      <div className="section-tag">Investment</div>
      <h2 className="section-title reveal">Transparent Pricing</h2>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card reveal ${plan.delay} ${plan.featured ? 'featured' : ''}`}
          >
            <div className="pricing-plan">{plan.name}</div>
            <div className="pricing-price">
              {plan.price}
              {plan.period && <span>{plan.period}</span>}
            </div>
            <div className="pricing-desc">{plan.desc}</div>

            <ul className="pricing-features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <a href="#contact" className="btn-pricing">{plan.cta}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
