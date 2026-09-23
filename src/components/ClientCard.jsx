import { useReveal } from '../hooks/useReveal'
import { formatNumber } from '../utils'

export default function ClientCard({ client, maxClicks, onOpen }) {
  const ref = useReveal()
  const w = (client.clicks / maxClicks) * 100
  const r = (client.d90 / maxClicks) * 100
  const earlier = Math.max(w - r, 0)

  return (
    <button className="card reveal" type="button" ref={ref} onClick={onOpen}>
      <div className="cb">
        <div className="crow">
          <div>
            <div className="cname">{client.name}</div>
            <div className="cmeta">
              {client.dom} · live since {client.since}
            </div>
          </div>
          <div className="sector">{client.sector}</div>
        </div>
        <div className="bar">
          <i style={{ width: `${earlier}%` }}></i>
          <i className="recent" style={{ width: `${r}%` }}></i>
        </div>
        <div className="barleg">
          <s>Earlier clicks</s>
          <s className="r">Last 90 days</s>
        </div>
        <div className="mini">
          <div>
            <b>{formatNumber(client.clicks)}</b>
            <small>Clicks</small>
          </div>
          <div>
            <b>{formatNumber(client.impr)}</b>
            <small>Impr.</small>
          </div>
          <div>
            <b>{client.ctr}</b>
            <small>CTR</small>
          </div>
          <div>
            <b>{client.pos}</b>
            <small>Avg pos</small>
          </div>
        </div>
        <span className="hint">
          Open the case
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </button>
  )
}
