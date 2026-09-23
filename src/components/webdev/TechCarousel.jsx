import { TECH_STACK } from '../../data/techStack'
import { TECH_ICONS } from './techIcons'

function Chip({ item }) {
  const Icon = TECH_ICONS[item.key]
  return (
    <span className="orb-chip">
      <em>
        <Icon />
      </em>
      {item.name}
    </span>
  )
}

export default function TechCarousel() {
  return (
    <div className="marquee tech-marquee">
      <p>Built with</p>
      <div className="track">
        {TECH_STACK.map((item) => (
          <Chip item={item} key={`a-${item.key}`} />
        ))}
        {TECH_STACK.map((item) => (
          <Chip item={item} key={`b-${item.key}`} />
        ))}
      </div>
    </div>
  )
}
