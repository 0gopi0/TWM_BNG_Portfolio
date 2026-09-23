import {
  LuClapperboard,
  LuCode,
  LuMegaphone,
  LuMonitorSmartphone,
  LuMousePointerClick,
  LuSearch,
  LuShare2,
  LuShoppingBag,
  LuTarget,
  LuTrendingUp,
} from 'react-icons/lu'
import { SERVICE_FLOATERS } from '../../data/welcome'

const ICONS = {
  search: LuSearch,
  megaphone: LuMegaphone,
  clapper: LuClapperboard,
  code: LuCode,
  trend: LuTrendingUp,
  cart: LuShoppingBag,
  monitor: LuMonitorSmartphone,
  share: LuShare2,
  target: LuTarget,
  cursor: LuMousePointerClick,
}

export default function Floaters() {
  return (
    <div className="wl-floaters" aria-hidden="true">
      {SERVICE_FLOATERS.map((item, i) => {
        const Icon = ICONS[item.icon]

        return (
          <span
            key={`${item.side}-${item.icon}`}
            className={`wl-floater ${i % 2 === 0 ? 'is-hot' : 'is-white'}`}
            style={{
              top: item.top,
              [item.side]: `calc(50% - 560px - ${item.offset}px)`,
              width: item.size,
              height: item.size,
              '--fd': `${item.delay}ms`,
            }}
          >
            <Icon />
          </span>
        )
      })}
    </div>
  )
}
