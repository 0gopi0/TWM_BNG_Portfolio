import { useEffect, useRef, useState } from 'react'
import { SiInstagram, SiThreads, SiX, SiYoutube } from 'react-icons/si'
import { useReveal } from '../../hooks/useReveal'
import { STORIES, SAMPLE_STORIES } from '../../data/marketing'

const PLATFORM_ICONS = { instagram: SiInstagram, youtube: SiYoutube, x: SiX, threads: SiThreads }

export default function Testimonials() {
  const headRef = useReveal()
  const revealRef = useReveal()
  const railRef = useRef(null)
  const [rail, setRail] = useState({ atStart: true, atEnd: false, progress: 0 })

  function sync() {
    const el = railRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const left = el.scrollLeft
    setRail({ atStart: left <= 4, atEnd: left >= max - 4, progress: max > 0 ? left / max : 0 })
  }

  function step(direction) {
    const el = railRef.current
    if (!el) return
    const card = el.querySelector('.dm-quote')
    const amount = card ? card.getBoundingClientRect().width + 18 : 380
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: direction * amount, behavior: reduce ? 'auto' : 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  return (
    <section id="stories">
      <div className="wrap">
        <div className="dm-head dm-head-row reveal" ref={headRef}>
          <div className="dm-head-copy">
            <p className="dm-eyebrow">
              Hear it from our clients
              {SAMPLE_STORIES && <span className="dm-chip">Sample stories</span>}
            </p>
            <h2>What founders say after ninety days</h2>
            <svg className="dm-squiggle" viewBox="0 0 240 16" aria-hidden="true">
              <path d="M4 6c30-4 58 3 88-1s56-4 84 0 34 2 60-2" />
              <path className="is-soft" d="M12 13c28-3 54 2 82-1s52-3 78 0 30 1 50-1" />
            </svg>
          </div>

          <div className="dm-rail-nav">
            <button
              className="icon-btn"
              type="button"
              onClick={() => step(-1)}
              disabled={rail.atStart}
              aria-label="Previous stories"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="icon-btn"
              type="button"
              onClick={() => step(1)}
              disabled={rail.atEnd}
              aria-label="Next stories"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="dm-rail">
        <ul
          className="dm-quotes reveal"
          ref={(el) => {
            revealRef.current = el
            railRef.current = el
          }}
          tabIndex={0}
          role="group"
          aria-label="Client stories"
          onScroll={sync}
        >
          {STORIES.map((story, i) =>
            story.kind === 'quote' ? (
              <li className="dm-quote" key={`q-${i}`}>
                <div className="dm-quote-top">
                  <span className="dm-quote-glyph" aria-hidden="true">
                    &ldquo;
                  </span>
                  <span className="dm-quote-mark" aria-hidden="true">
                    {story.mark}
                  </span>
                </div>
                <p className="dm-quote-text">{story.quote}</p>
                <div className="dm-quote-foot">
                  {story.result && <span className="dm-quote-result">{story.result}</span>}
                  <b>{story.name}</b>
                  <span className="dm-quote-role">{story.role}</span>
                </div>
              </li>
            ) : (
              <li className="dm-quote is-person" key={`p-${i}`}>
                <span className="dm-person-mark" aria-hidden="true">
                  {story.mark}
                </span>
                <div className="dm-person-copy">
                  <b>{story.name}</b>
                  <span>{story.role}</span>
                  <p>{story.note}</p>
                </div>
                <div className="dm-person-tags" aria-hidden="true">
                  {story.platforms.map((platform) => {
                    const Icon = PLATFORM_ICONS[platform]
                    return <Icon key={platform} />
                  })}
                </div>
              </li>
            ),
          )}
        </ul>

        <div className="dm-rail-track" aria-hidden="true">
          <span style={{ transform: `scaleX(${rail.progress})` }}></span>
        </div>
      </div>
    </section>
  )
}
