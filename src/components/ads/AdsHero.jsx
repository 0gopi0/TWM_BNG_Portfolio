import { ACCOUNT, SIGNALS } from '../../data/ads'
import { barRects, linePath } from '../../utils'

const W = 320
const H = 120

const DOMAIN = { min: 0, max: Math.max(...ACCOUNT.revenue, ...ACCOUNT.spend) }
const REVENUE_PATH = linePath(ACCOUNT.revenue, W, H, 12, DOMAIN)
const SPEND_BARS = barRects(ACCOUNT.spend, W, H, 12, DOMAIN, 0.5)
const AREA_PATH = `${REVENUE_PATH} L${W} ${H} L0 ${H} Z`

export default function AdsHero() {
  return (
    <section className="ads-hero" id="top">
      <div className="wrap">
        <div className="ads-hero-grid">
          <div className="ads-hero-copy">
            <p className="ads-num">Paid media · Google + Meta</p>
            <h1>
              We get <span className="hl">orders,</span> not clicks.
            </h1>
            <p className="ads-lede">
              Two platforms, one question: what did the last lakh of spend come back with? Google and Meta, managed
              against that number every week.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#ads-contact">
                Get a spend review
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 13L13 3M13 3H6M13 3v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="btn btn-ghost" href="#channels">
                See how we run it
              </a>
            </div>

            <ul className="ads-signals">
              {SIGNALS.map((signal) => (
                <li key={signal.key}>
                  <span>{signal.key}</span>
                  <b>{signal.value}</b>
                </li>
              ))}
            </ul>
          </div>

          <aside className="ads-panel" aria-label="Sample campaign dashboard">
            <header className="ads-panel-head">
              <span className="ads-live">
                <i></i> Live view
              </span>
              <span className="ads-panel-label">{ACCOUNT.label}</span>
            </header>

            <div className="ads-tiles">
              {ACCOUNT.tiles.map((tile) => (
                <div className="ads-tile" key={tile.label}>
                  <span>{tile.label}</span>
                  <b>{tile.value}</b>
                  <small>{tile.note}</small>
                </div>
              ))}
            </div>

            <div className="ads-chart">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="none"
                role="img"
                aria-label="Daily attributed revenue against daily spend, last thirty days"
              >
                <defs>
                  <linearGradient id="adsArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#3DDC84" stopOpacity="0.28" />
                    <stop offset="1" stopColor="#3DDC84" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={AREA_PATH} fill="url(#adsArea)" />
                <path
                  className="ads-chart-line"
                  d={REVENUE_PATH}
                  fill="none"
                  stroke="#3DDC84"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                <g className="ads-chart-spend" fill="#6F7788" opacity="0.5">
                  {SPEND_BARS.map((bar, i) => (
                    <rect key={i} x={bar.x} y={bar.y} width={bar.w} height={bar.h} rx="1" />
                  ))}
                </g>
              </svg>
              <div className="ads-chart-legend">
                <span className="is-rev">Attributed revenue</span>
                <span className="is-spend">Spend</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
