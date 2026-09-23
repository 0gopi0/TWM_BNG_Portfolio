import { useEffect, useState } from 'react'

const STATS = [
  { value: '2K+', label: 'Websites completed' },
  { value: '1K+', label: 'Websites SEO completed' },
  { value: '800+', label: 'Socials handled' },
]

const HOLD_MS = 3200
const TURN_MS = 300

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function StatFlip() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState('idle')
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduceMotion || paused) return
    const id = setTimeout(() => setPhase('out'), HOLD_MS)
    return () => clearTimeout(id)
  }, [index, paused])

  useEffect(() => {
    if (phase !== 'out') return
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % STATS.length)
      setPhase('in')
    }, TURN_MS)
    return () => clearTimeout(id)
  }, [phase])

  useEffect(() => {
    if (phase !== 'in') return
    let inner
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setPhase('idle'))
    })
    return () => {
      cancelAnimationFrame(outer)
      if (inner) cancelAnimationFrame(inner)
    }
  }, [phase])

  const stat = STATS[index]

  return (
    <div
      className={`flip-stat nav-cta${paused ? ' is-paused' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flip-view">
        <div key={index} className={`flip-face${phase === 'idle' ? '' : ` is-${phase}`}`}>
          <b>{stat.value}</b>
          <small>{stat.label}</small>
        </div>
      </div>
      <span className="flip-ticks" aria-hidden="true">
        {STATS.map((s, i) => (
          <i key={s.label} className={i === index ? 'on' : ''} />
        ))}
      </span>
    </div>
  )
}
