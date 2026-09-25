import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuArrowRight, LuSearch } from 'react-icons/lu'
import { HERO_SEARCH } from '../../data/welcome'

const TYPE_MS = 55
const DELETE_MS = 22
const HOLD_MS = 2400
const START_MS = 900

// Alternate services so consecutive queries light up different results.
const ORDER = [0, 3, 1, 2, 0, 1, 3]
const PLAYLIST = ORDER.map((service, i) => {
  const { queries } = HERO_SEARCH[service]
  const repeat = ORDER.slice(0, i).filter((s) => s === service).length
  return { service, query: queries[repeat % queries.length] }
})
const REST = { text: PLAYLIST[0].query, active: PLAYLIST[0].service }

function bestMatch(input) {
  const q = input.toLowerCase().trim()
  if (!q) return -1
  let best = -1
  let bestScore = 0
  HERO_SEARCH.forEach((item, i) => {
    const score = item.keywords.reduce((sum, k) => (q.includes(k) ? sum + k.length : sum), 0)
    if (score > bestScore) {
      best = i
      bestScore = score
    }
  })
  return best
}

const wait = (ms, signal) =>
  new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms)
    signal.addEventListener('abort', () => {
      clearTimeout(t)
      reject(signal.reason)
    })
  })

export default function HeroSearch() {
  const navigate = useNavigate()
  const [still] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [text, setText] = useState(still ? REST.text : '')
  // The previous match stays lit while the next query types, so the list never jumps.
  const [active, setActive] = useState(REST.active)
  const [typing, setTyping] = useState(!still)

  // Type the playlist out, one query at a time, until the visitor takes over.
  useEffect(() => {
    if (!typing) return

    const ctrl = new AbortController()
    const { signal } = ctrl
    ;(async () => {
      await wait(START_MS, signal)
      for (let n = 0; ; n = (n + 1) % PLAYLIST.length) {
        const { service, query } = PLAYLIST[n]
        for (let i = 1; i <= query.length; i++) {
          setText(query.slice(0, i))
          await wait(TYPE_MS + Math.random() * 45, signal)
        }
        setActive(service)
        await wait(HOLD_MS, signal)
        for (let i = query.length - 1; i >= 0; i--) {
          setText(query.slice(0, i))
          await wait(DELETE_MS, signal)
        }
        await wait(350, signal)
      }
    })().catch(() => {})

    return () => ctrl.abort()
  }, [typing])

  // The typed text is only a demo, so the visitor starts from an empty box.
  function takeOver() {
    if (!typing && !(still && text === REST.text)) return
    setTyping(false)
    setText('')
  }

  function onChange(e) {
    setText(e.target.value)
    setActive(bestMatch(e.target.value))
  }

  function onBlur() {
    if (text.trim()) return
    setActive(REST.active)
    if (still) setText(REST.text)
    else setTyping(true)
  }

  function onSubmit(e) {
    e.preventDefault()
    if (active >= 0) navigate(HERO_SEARCH[active].to)
  }

  return (
    <div className="wl-search-panel">
      <form className="wl-search" role="search" onSubmit={onSubmit}>
        <label htmlFor="wl-q" className="wl-search-label">
          What do you need help with?
        </label>
        <div className="wl-search-box">
          <LuSearch className="wl-search-icon" aria-hidden="true" />
          <div className="wl-search-field">
            <input
              id="wl-q"
              type="search"
              value={text}
              placeholder="Type what you need"
              autoComplete="off"
              enterKeyHint="go"
              onFocus={takeOver}
              onChange={onChange}
              onBlur={onBlur}
            />
            {typing && (
              <span className="wl-search-mirror" aria-hidden="true">
                <span>{text}</span>
                <i className="wl-caret" />
              </span>
            )}
          </div>
          <button type="submit" className="wl-search-go" disabled={active < 0} aria-label="Open the matching service">
            <LuArrowRight aria-hidden="true" />
          </button>
        </div>
      </form>

      <ul className={`wl-results${active >= 0 ? ' has-match' : ''}`}>
        {HERO_SEARCH.map((item, i) => (
          <li key={item.to}>
            <Link to={item.to} className={`wl-result${i === active ? ' is-match' : ''}`}>
              <span className="wl-result-url">
                thewebsitemakers.in <span>› {item.to.slice(1)}</span>
              </span>
              <span className="wl-result-title">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      {!typing && text.trim() && active < 0 && (
        <p className="wl-search-empty" role="status">
          No exact match. <a href="#wl-contact">Describe it to us</a> and we’ll point you to the right service.
        </p>
      )}
    </div>
  )
}
