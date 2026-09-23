import { useCallback, useEffect, useRef, useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { WORK_TABS } from '../../data/marketing'

const PAGE_SIZE = 6

function Slot({ tab, index }) {
  return (
    <div className="dm-slot" style={{ '--ratio': tab.ratio, '--i': index }}>
      <span className="dm-slot-plus" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="dm-slot-label">Add {tab.slot}</span>
      <span className="dm-slot-hint">{tab.format}</span>
    </div>
  )
}

function Tile({ item, tab, index, onOpen }) {
  return (
    <button
      className="dm-tile"
      type="button"
      style={{ '--ratio': tab.ratio, '--i': index }}
      onClick={() => onOpen(item)}
    >
      {tab.kind === 'video' ? (
        <video src={item.src} poster={item.poster} muted loop playsInline preload="none" />
      ) : (
        <img
          className={tab.kind === 'carousel' ? 'is-pan' : undefined}
          src={item.src}
          alt={item.title}
          loading="lazy"
        />
      )}
      {tab.kind === 'video' && (
        <span className="dm-tile-play" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M5 3.5l8 4.5-8 4.5v-9z" fill="currentColor" />
          </svg>
        </span>
      )}
      {item.panels > 1 && (
        <span className="dm-tile-count" aria-hidden="true">
          {item.panels} slides
        </span>
      )}
      <span className="dm-tile-meta">
        <b>{item.title}</b>
        {item.client && <small>{item.client}</small>}
      </span>
    </button>
  )
}

function Lightbox({ item, kind, onClose }) {
  const overlayRef = useRef(null)
  const closeRef = useRef(null)
  const railRef = useRef(null)
  const [panel, setPanel] = useState(0)

  const panels = item.panels || 0

  const step = useCallback(
    (direction) => {
      const el = railRef.current
      if (!el || panels < 2) return
      const amount = el.scrollWidth / panels
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollBy({ left: direction * amount, behavior: reduce ? 'auto' : 'smooth' })
      setPanel((p) => Math.min(panels - 1, Math.max(0, p + direction)))
    },
    [panels],
  )

  useEffect(() => {
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    function onKeydown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'ArrowRight' && panels > 1) step(1)
      if (e.key === 'ArrowLeft' && panels > 1) step(-1)
      if (e.key !== 'Tab') return
      const nodes = overlayRef.current.querySelectorAll(
        'button, [href], video, [tabindex]:not([tabindex="-1"])',
      )
      const focusable = Array.from(nodes).filter((el) => el.offsetParent !== null)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeydown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeydown)
    }
  }, [onClose, panels, step])

  function onRailScroll() {
    const el = railRef.current
    if (!el || panels < 2) return
    const width = el.scrollWidth / panels
    setPanel(Math.min(panels - 1, Math.round(el.scrollLeft / width)))
  }

  return (
    <div
      className="overlay on dm-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div className="dm-lightbox-panel">
        <button
          className="close"
          type="button"
          aria-label="Close preview"
          onClick={onClose}
          ref={closeRef}
        >
          &times;
        </button>

        {kind === 'video' ? (
          <video src={item.src} poster={item.poster} controls autoPlay muted playsInline />
        ) : panels > 1 ? (
          <div className="dm-lightbox-rail" ref={railRef} onScroll={onRailScroll} tabIndex={0}>
            <img src={item.src} alt={`${item.title} — ${panels} slide carousel`} />
          </div>
        ) : (
          <img src={item.src} alt={item.title} />
        )}

        <div className="dm-lightbox-foot">
          <div className="dm-lightbox-copy">
            <b>{item.title}</b>
            {item.client && <span>{item.client}</span>}
          </div>

          {panels > 1 && (
            <div className="dm-lightbox-nav">
              <button
                className="icon-btn"
                type="button"
                onClick={() => step(-1)}
                disabled={panel === 0}
                aria-label="Previous slide"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="dm-lightbox-count">
                {panel + 1} / {panels}
              </span>
              <button
                className="icon-btn"
                type="button"
                onClick={() => step(1)}
                disabled={panel === panels - 1}
                aria-label="Next slide"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function WorkTabs() {
  const headRef = useReveal()
  const [activeKey, setActiveKey] = useState(WORK_TABS[0].key)
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [open, setOpen] = useState(null)

  const tab = WORK_TABS.find((t) => t.key === activeKey)
  const shown = tab.items.slice(0, visible)
  const remaining = tab.items.length - shown.length

  function selectTab(key) {
    setActiveKey(key)
    setVisible(PAGE_SIZE)
    setOpen(null)
  }

  return (
    <section id="work" className="dm-work-section">
      <div className="wrap">
        <div className="dm-head reveal" ref={headRef}>
          <p className="dm-eyebrow">Our work</p>
          <h2>Posters, carousels, motion and edits</h2>
          <p>
            Everything we make for a client lives in one of these four formats. Pick a format to see the pieces we have
            shipped in it.
          </p>
        </div>

        <div className="dm-work-tabs" role="group" aria-label="Filter work by format">
          {WORK_TABS.map((item) => (
            <button
              key={item.key}
              className="dm-work-tab"
              type="button"
              aria-pressed={item.key === activeKey}
              onClick={() => selectTab(item.key)}
            >
              {item.label}
              <b>{item.items.length}</b>
            </button>
          ))}
        </div>

        <div className="dm-work-grid" key={tab.key}>
          {shown.length
            ? shown.map((item, i) => (
                <Tile key={item.id} item={item} tab={tab} index={i} onOpen={setOpen} />
              ))
            : Array.from({ length: tab.slots }, (_, i) => <Slot key={`slot-${i}`} tab={tab} index={i} />)}
        </div>

        {remaining > 0 && (
          <div className="dm-work-more">
            <button className="btn dm-btn-ghost" type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              View more
              <b>{remaining} left</b>
            </button>
          </div>
        )}
      </div>

      {open && <Lightbox item={open} kind={tab.kind} onClose={() => setOpen(null)} />}
    </section>
  )
}
