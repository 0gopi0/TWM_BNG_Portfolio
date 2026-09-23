import { formatNumber } from '../utils'

export default function RowList({ rows }) {
  const max = rows.reduce((m, r) => (r[1] > m ? r[1] : m), 0)

  return (
    <div className="rowlist">
      {rows.map(([label, value]) => {
        const pct = max ? (value / max) * 100 : 0
        return (
          <div className="rl" key={label}>
            <div className="rl-top">
              <span title={label}>{label}</span>
              <b>{formatNumber(value)}</b>
            </div>
            <div className="rl-bar" aria-hidden="true">
              <i style={{ width: `${pct}%` }}></i>
            </div>
          </div>
        )
      })}
    </div>
  )
}
