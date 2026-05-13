'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We dive deep into your business, audience, and goals. Competitor analysis, user research, and strategic planning lay the foundation for everything that follows.',
    delay: '',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'From wireframes to high-fidelity mockups. We design in rapid iterations, presenting multiple directions and refining based on your feedback.',
    delay: 'reveal-delay-1',
  },
  {
    num: '03',
    title: 'Build & Develop',
    desc: 'Clean code, performant architecture. We build with modern stacks ensuring your product is fast, scalable, and maintainable long-term.',
    delay: 'reveal-delay-2',
  },
  {
    num: '04',
    title: 'Launch & Grow',
    desc: 'Rigorous QA, smooth launch, and ongoing support. We monitor performance and continuously optimize to maximize your results post-launch.',
    delay: 'reveal-delay-3',
  },
]

export default function ProcessSection() {
  useScrollReveal()

  return (
    <section id="process">
      <div className="section-tag">How We Work</div>
      <h2 className="section-title reveal">Our Proven<br />Design Process</h2>

      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.num} className={`process-step reveal ${step.delay}`}>
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
