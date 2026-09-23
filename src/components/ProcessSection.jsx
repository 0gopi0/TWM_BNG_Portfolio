import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const STEPS = [
  { num: '01', title: 'Audit', body: 'A technical crawl, keyword-gap analysis, and competitor review — delivered as a written report you can act on.' },
  { num: '02', title: 'Roadmap', body: 'A keyword map, page priorities, and a quarterly content calendar — agreed before anything ships.' },
  { num: '03', title: 'Execution', body: 'On-page fixes, new content, internal links, and authority links — shipped every week.' },
  { num: '04', title: 'Reporting', body: 'A monthly report on clicks, impressions, positions, and enquiries, with next month\'s plan attached.' },
]

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function pad(n) {
  return (n < 10 ? '0' : '') + n
}

export default function ProcessSection() {
  const headRef = useReveal()
  const procRef = useReveal()
  const [i, setI] = useState(0)
  const timerRef = useRef(null)
  const uiRef = useRef(null)
  const tabRefs = useRef([])

  function go(next) {
    setI(((next % STEPS.length) + STEPS.length) % STEPS.length)
  }

  function restart() {
    if (timerRef.current) clearInterval(timerRef.current)
    if (reduceMotion) return
    timerRef.current = setInterval(() => {
      setI((cur) => (cur + 1) % STEPS.length)
    }, 5500)
  }

  useEffect(() => {
    restart()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function goUser(next) {
    go(next)
    restart()
  }

  function pause() {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  return (
    <section id="process">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef}>
          <p className="num">/02 — Strategy</p>
          <h2>How a retainer runs</h2>
          <p>No black box. You approve the plan before we write a word, then see Search Console numbers every month after.</p>
        </div>
        <div
          className="process reveal"
          id="processUI"
          ref={(el) => {
            procRef.current = el
            uiRef.current = el
          }}
          onMouseEnter={pause}
          onMouseLeave={restart}
          onFocus={pause}
          onBlur={(e) => {
            if (!uiRef.current.contains(e.relatedTarget)) restart()
          }}
        >
          <div className="process-tabs" role="tablist" aria-label="Retainer stages">
            {STEPS.map((s, idx) => (
              <button
                key={s.num}
                className="step-tab"
                type="button"
                role="tab"
                id={`pt${idx}`}
                aria-controls={`pp${idx}`}
                aria-selected={i === idx}
                tabIndex={i === idx ? 0 : -1}
                ref={(el) => (tabRefs.current[idx] = el)}
                onClick={() => goUser(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    e.preventDefault()
                    goUser(i + 1)
                    tabRefs.current[(i + 1 + STEPS.length) % STEPS.length]?.focus()
                  }
                  if (e.key === 'ArrowLeft') {
                    e.preventDefault()
                    goUser(i - 1)
                    tabRefs.current[(i - 1 + STEPS.length) % STEPS.length]?.focus()
                  }
                }}
              >
                <em>{s.num}</em>
                <strong>{s.title}</strong>
              </button>
            ))}
          </div>
          <div className="process-track" aria-hidden="true">
            <i id="processFill" style={{ width: `${((i + 1) / STEPS.length) * 100}%` }}></i>
          </div>
          <div className="process-stage">
            {STEPS.map((s, idx) => (
              <div
                key={s.num}
                className={`process-panel${i === idx ? ' is-on' : ''}`}
                role="tabpanel"
                id={`pp${idx}`}
                aria-labelledby={`pt${idx}`}
              >
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
            <div className="process-bar">
              <button
                className="icon-btn"
                type="button"
                id="processPrev"
                aria-label="Previous stage"
                onClick={() => goUser(i - 1)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span id="processPos">
                {pad(i + 1)} / {pad(STEPS.length)}
              </span>
              <button
                className="icon-btn"
                type="button"
                id="processNext"
                aria-label="Next stage"
                onClick={() => goUser(i + 1)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
