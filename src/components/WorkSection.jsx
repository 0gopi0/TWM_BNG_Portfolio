import { useReveal } from '../hooks/useReveal'
import { CLIENTS, CAT } from '../data/clients'
import ClientCard from './ClientCard'

const FILTERS = [
  { key: 'all', label: 'All 11 clients' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'food', label: 'Food & FMCG' },
  { key: 'travel', label: 'Travel' },
  { key: 'services', label: 'Services' },
  { key: 'b2b', label: 'B2B' },
]

const MAX_CLICKS = Math.max(...CLIENTS.map((c) => c.clicks))

export default function WorkSection({ filter, setFilter, onOpenClient }) {
  const headRef = useReveal()
  const filtersRef = useReveal()

  const visible = CLIENTS.filter((c) => filter === 'all' || (CAT[c.dom] || 'ecommerce') === filter)

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef}>
          <p className="num">/01 — Rankings</p>
          <h2>Client work</h2>
          <p>Filter by sector, then open a client to see ranking queries, top landing pages, and where the traffic comes from.</p>
        </div>
        <div className="filters reveal" role="group" aria-label="Filter clients by sector" ref={filtersRef}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className="chip"
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid" id="grid">
          {visible.map((c) => {
            const i = CLIENTS.indexOf(c)
            return (
              <ClientCard
                key={c.dom}
                client={c}
                maxClicks={MAX_CLICKS}
                onOpen={(e) => onOpenClient(i, e.currentTarget)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
