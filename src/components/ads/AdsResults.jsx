import { useRef, useState } from 'react'
import { SiGoogleads, SiMeta } from 'react-icons/si'
import { useReveal } from '../../hooks/useReveal'
import { AD_CLIENTS } from '../../data/adsClients'
import { formatNumber } from '../../utils'

const MARKS = { google: SiGoogleads, meta: SiMeta }

function money(value) {
  return Number.isInteger(value)
    ? formatNumber(value)
    : value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function rowSummary(row) {
  if (row.results) {
    const plural = row.results === 1 ? 'result' : 'results'
    return `${formatNumber(row.results)} ${plural} · ₹${money(row.cost)} each`
  }
  if (row.impressions) return `${formatNumber(row.impressions)} impressions`
  if (row.clicks) return `${formatNumber(row.clicks)} link clicks`
  return ''
}

export default function AdsResults() {
  const headRef = useReveal()
  const boardRef = useReveal()
  const tabRefs = useRef([])
  const [activeId, setActiveId] = useState(AD_CLIENTS[0].id)

  const index = AD_CLIENTS.findIndex((c) => c.id === activeId)
  const client = AD_CLIENTS[index]

  function move(step) {
    const next = (index + step + AD_CLIENTS.length) % AD_CLIENTS.length
    setActiveId(AD_CLIENTS[next].id)
    tabRefs.current[next]?.focus()
  }

  // The panel remounts per account, so hand focus back to the arrow that was pressed.
  function step(direction, buttonId) {
    setActiveId(AD_CLIENTS[(index + direction + AD_CLIENTS.length) % AD_CLIENTS.length].id)
    requestAnimationFrame(() => document.getElementById(buttonId)?.focus())
  }

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section id="results">
      <div className="wrap">
        <div className="ads-head reveal" ref={headRef}>
          <p className="ads-num">01 / Results</p>
          <h2>Pick an account, see the whole story</h2>
          <p>
            Five live Meta accounts, pulled straight from Ads Manager. What we spent, how many leads or conversations
            came back, and what each one cost.
          </p>
        </div>

        <div className="ads-results reveal" ref={boardRef}>
          <div className="ads-watchlist" role="tablist" aria-label="Client accounts" aria-orientation="vertical">
            {AD_CLIENTS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`rt-${item.id}`}
                aria-controls={`rp-${item.id}`}
                aria-selected={item.id === activeId}
                tabIndex={item.id === activeId ? 0 : -1}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                className="ads-watch-row"
                onClick={() => setActiveId(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault()
                    move(1)
                  }
                  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault()
                    move(-1)
                  }
                }}
              >
                <span className="ads-watch-top">
                  <span className="ads-watch-name">{item.name}</span>
                  <b className="ads-watch-kpi">₹{money(item.primary.cost)}</b>
                </span>
                <span className="ads-watch-bottom">
                  <span className="ads-watch-marks" aria-hidden="true">
                    {item.platforms.map((p) => {
                      const Mark = MARKS[p]
                      return <Mark key={p} />
                    })}
                  </span>
                  <span className="ads-watch-spend">₹{money(item.spend)} total</span>
                </span>
              </button>
            ))}
          </div>

          <div
            className="ads-detail"
            role="tabpanel"
            id={`rp-${client.id}`}
            aria-labelledby={`rt-${client.id}`}
            key={client.id}
          >
            <header className="ads-detail-head">
              <div>
                <h3>{client.name}</h3>
                <p>
                  {client.sector} · {client.period} · Meta Ads Manager
                </p>
              </div>
              <div className="ads-detail-side">
                <span className="ads-detail-marks" aria-hidden="true">
                  {client.platforms.map((p) => {
                    const Mark = MARKS[p]
                    return (
                      <span className={`ads-mark is-${p}`} key={p}>
                        <Mark />
                      </span>
                    )
                  })}
                </span>
                <div className="ads-detail-nav">
                  <button
                    className="icon-btn"
                    type="button"
                    id="resultsPrev"
                    aria-label="Previous account"
                    onClick={() => step(-1, 'resultsPrev')}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <span>
                    {pad(index + 1)} / {pad(AD_CLIENTS.length)}
                  </span>
                  <button
                    className="icon-btn"
                    type="button"
                    id="resultsNext"
                    aria-label="Next account"
                    onClick={() => step(1, 'resultsNext')}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            <div className="ads-detail-tiles">
              <div>
                <span>Ad spend</span>
                <b>₹{money(client.spend)}</b>
                <small>{client.period}</small>
              </div>
              <div>
                <span>Results</span>
                <b>{formatNumber(client.primary.count)}</b>
                <small>{client.primary.label}</small>
              </div>
              <div>
                <span>Cost per result</span>
                <b>₹{money(client.primary.cost)}</b>
                <small>{client.primary.label.toLowerCase()}</small>
              </div>
              <div>
                <span>Reach</span>
                <b>{formatNumber(client.reach)}</b>
                <small>{formatNumber(client.impressions)} impressions</small>
              </div>
            </div>

            <div className="ads-detail-strip">
              {(client.extras || []).map((extra) => (
                <span className="ads-chip is-hot" key={extra.label}>
                  {formatNumber(extra.count)} {extra.label} · ₹{money(extra.cost)} each
                </span>
              ))}
              {client.stats.map((stat) => (
                <span className="ads-chip" key={stat.label}>
                  {stat.label} {stat.value}
                </span>
              ))}
            </div>

            <div className="ads-breakdown">
              <p className="ads-break-title">Campaign breakdown</p>
              {client.breakdown.map((row) => (
                <div className="ads-break-row" key={row.name}>
                  <span className="ads-break-name">{row.name}</span>
                  <span className="ads-break-spend">₹{money(row.spend)}</span>
                  <span className="ads-break-bar" aria-hidden="true">
                    <i style={{ width: `${Math.round((row.spend / client.spend) * 100)}%` }} />
                  </span>
                  <span className="ads-break-sub">{rowSummary(row)}</span>
                  <span className="ads-break-reach">{formatNumber(row.reach)} reach</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
