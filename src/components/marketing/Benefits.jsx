import { FaBullseye, FaChartLine, FaMagnet, FaRegClock, FaShareNodes, FaShieldHalved } from 'react-icons/fa6'
import { useReveal } from '../../hooks/useReveal'
import { BENEFITS } from '../../data/marketing'

const ICONS = {
  growth: FaChartLine,
  strategy: FaBullseye,
  time: FaRegClock,
  leads: FaMagnet,
  platforms: FaShareNodes,
  guarantee: FaShieldHalved,
}

function Benefit({ item, index }) {
  const ref = useReveal()
  const Icon = ICONS[item.icon]

  return (
    <li className="dm-benefit" ref={ref} style={{ '--d': `${index * 70}ms` }}>
      <span className="dm-benefit-ico" aria-hidden="true">
        <Icon />
      </span>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </li>
  )
}

export default function Benefits() {
  const headRef = useReveal()

  return (
    <section id="benefits">
      <div className="wrap">
        <div className="dm-head reveal" ref={headRef}>
          <p className="dm-eyebrow">Exclusive benefits</p>
          <h2>What you actually get out of it</h2>
        </div>

        <ul className="dm-benefits">
          {BENEFITS.map((item, i) => (
            <Benefit key={item.title} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
