import {
  LuAtom,
  LuChartLine,
  LuCode,
  LuCompass,
  LuInstagram,
  LuLayoutTemplate,
  LuPalette,
  LuSearch,
  LuServer,
  LuShare2,
  LuShoppingBag,
  LuSmartphone,
  LuTarget,
  LuVideo,
} from 'react-icons/lu'
import { SERVICE_ROWS } from '../../data/welcome'

const ICONS = {
  search: LuSearch,
  target: LuTarget,
  instagram: LuInstagram,
  share: LuShare2,
  video: LuVideo,
  palette: LuPalette,
  compass: LuCompass,
  atom: LuAtom,
  code: LuCode,
  smartphone: LuSmartphone,
  template: LuLayoutTemplate,
  bag: LuShoppingBag,
  server: LuServer,
  chart: LuChartLine,
}

function Service({ item, dup }) {
  const Icon = ICONS[item.icon]

  return (
    <li className={`wl-svc${dup ? ' is-dup' : ''}`} aria-hidden={dup || undefined}>
      <span className="wl-svc-icon">
        <Icon />
      </span>
      <span className="wl-svc-label">{item.label}</span>
    </li>
  )
}

function Row({ items, reverse }) {
  return (
    <div className="wl-svc-track">
      <ul className={`wl-svc-row${reverse ? ' is-rev' : ''}`}>
        {items.map((item) => (
          <Service key={item.label} item={item} />
        ))}
        {items.map((item) => (
          <Service key={`dup-${item.label}`} item={item} dup />
        ))}
      </ul>
    </div>
  )
}

export default function ServiceCarousel() {
  return (
    <section className="wl-svc-section">
      <p className="wl-eyebrow wl-svc-eyebrow">Every service, one team</p>
      <div className="wl-svc-carousel">
        {SERVICE_ROWS.map((items, i) => (
          <Row key={i} items={items} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
