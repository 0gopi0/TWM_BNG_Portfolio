import { useReveal } from '../../hooks/useReveal'
import { TECH_ICONS } from './techIcons'

function TechCard({ item }) {
  const ref = useReveal()
  const Icon = TECH_ICONS[item.key]
  return (
    <article className="tech-card reveal" ref={ref}>
      <div className="tech-badge">
        <Icon />
      </div>
      <span className="tech-tag">{item.tag}</span>
      <h3>{item.name}</h3>
      <p>{item.blurb}</p>
    </article>
  )
}

export default function TechGrid({ items }) {
  return (
    <div className="tech-grid">
      {items.map((item) => (
        <TechCard item={item} key={item.key} />
      ))}
    </div>
  )
}
