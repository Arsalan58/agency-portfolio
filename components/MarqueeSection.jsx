// Items are duplicated so the CSS marquee animation loops seamlessly.
const ITEMS = [
  'UI/UX Design',
  'Web Development',
  'Brand Identity',
  'SEO Optimization',
  'E-Commerce',
  'Mobile Apps',
  'Motion Design',
  'Conversion Optimization',
]

export default function MarqueeSection() {
  // Duplicate the list so the scrolling track is long enough to loop
  const track = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  )
}
