import { Link } from 'react-router-dom'
import { LuClapperboard, LuCode, LuMegaphone, LuSearch } from 'react-icons/lu'
import { useReveal } from '../../hooks/useReveal'
import { PATHS } from '../../data/welcome'

const ICONS = {
  search: LuSearch,
  megaphone: LuMegaphone,
  clapper: LuClapperboard,
  code: LuCode,
}

function PathCard({ path, index }) {
  const ref = useReveal()
  const Icon = ICONS[path.icon]

  function trackPointer(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <li className="wl-path reveal" ref={ref} style={{ '--d': `${index * 80}ms` }}>
      <Link className="wl-path-link" to={path.to} onMouseMove={trackPointer}>
        <span className="wl-path-top">
          <span className="wl-path-icon">
            <Icon />
          </span>
          <span className="wl-path-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="M3 13L13 3M13 3H6M13 3v7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>

        <h3>{path.title}</h3>
        <p>{path.body}</p>
        <span className="wl-path-meta">{path.meta}</span>
      </Link>
    </li>
  )
}

export default function PathCards() {
  const headRef = useReveal()

  return (
    <section id="paths" className="wl-paths-section">
      <div className="wrap">
        <div className="wl-head reveal" ref={headRef}>
          <p className="wl-eyebrow">Start here</p>
          <h2>What do you need?</h2>
        </div>

        <ul className="wl-paths">
          {PATHS.map((path, i) => (
            <PathCard key={path.key} path={path} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
