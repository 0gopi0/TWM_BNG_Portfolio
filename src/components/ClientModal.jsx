import { useEffect, useRef } from 'react'
import RowList from './RowList'
import { formatNumber } from '../utils'

const DEVICE_COLORS = {
  Mobile: 'var(--orange)',
  Desktop: 'rgba(255,255,255,.45)',
  Tablet: 'rgba(154,163,181,.9)',
}

export default function ClientModal({ client, onClose }) {
  const overlayRef = useRef(null)
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!client) return
    closeBtnRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [client])

  useEffect(() => {
    if (!client) return

    function trapTab(e) {
      if (e.key !== 'Tab') return
      const nodes = overlayRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      const focusable = Array.from(nodes).filter(
        (el) => !el.hasAttribute('disabled') && el.offsetParent !== null,
      )
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

    function onKeydown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      trapTab(e)
    }

    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [client, onClose])

  if (!client) return null

  const total = Object.values(client.device).reduce((a, b) => a + b, 0)

  return (
    <div
      className="overlay on"
      id="overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mTitle"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div className="modal" role="document">
        <div className="mh">
          <button
            className="close"
            id="close"
            type="button"
            aria-label="Close case detail"
            onClick={onClose}
            ref={closeBtnRef}
          >
            &times;
          </button>
          <h3 id="mTitle">{client.name}</h3>
          <p id="mMeta">
            {client.dom} · {client.sector} · live since {client.since}
          </p>
          <div className="mstats" id="mStats">
            <div>
              <b>{formatNumber(client.clicks)}</b>
              <small>Clicks</small>
            </div>
            <div>
              <b>{formatNumber(client.impr)}</b>
              <small>Impressions</small>
            </div>
            <div>
              <b>{client.ctr}</b>
              <small>CTR</small>
            </div>
            <div>
              <b>{client.pos}</b>
              <small>Avg position</small>
            </div>
            <div>
              <b>{formatNumber(client.d90)}</b>
              <small>Last 90 days</small>
            </div>
          </div>
        </div>
        <div className="mb">
          <div className="take" id="mTake">
            {client.take}
          </div>
          <div className="cols">
            <div>
              <h4 className="lbl">Top queries</h4>
              <RowList rows={client.queries} />
            </div>
            <div>
              <h4 className="lbl">Top landing pages</h4>
              <RowList rows={client.pages} />
            </div>
          </div>
          <div className="cols" style={{ marginTop: 32 }}>
            <div>
              <h4 className="lbl">Top markets</h4>
              <RowList rows={client.markets} />
            </div>
            <div>
              <h4 className="lbl">Device split</h4>
              <div className="dev" id="mD">
                {Object.keys(client.device).map((k) => (
                  <i
                    key={k}
                    style={{
                      width: `${total ? (client.device[k] / total) * 100 : 0}%`,
                      background: DEVICE_COLORS[k] || 'var(--orange)',
                    }}
                  ></i>
                ))}
              </div>
              <div className="devleg" id="mDL">
                {Object.keys(client.device).map((k) => (
                  <span key={k}>
                    {k} {Math.round((total ? client.device[k] / total : 0) * 100)}% (
                    {formatNumber(client.device[k])})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
