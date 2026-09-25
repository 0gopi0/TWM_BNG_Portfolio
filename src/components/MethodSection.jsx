import { useReveal } from '../hooks/useReveal'

export default function MethodSection() {
  const headRef = useReveal()
  const boardRef = useReveal()

  return (
    <section id="method">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef}>
          <p className="num">/03 — Method</p>
          <h2>How these numbers were built</h2>
          <p>Exactly what is counted, how it is counted, and over which window.</p>
        </div>
        <div className="method-board reveal" ref={boardRef}>
          <div className="method-toolbar">
            <b>
              <i></i>Performance on Search results
            </b>
          </div>
          <div className="method-grid">
            <div className="m-stack">
              <article className="m-card">
                <div className="ico" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="3" />
                    <path d="M8 2v4M16 2v4M3 10h18" />
                  </svg>
                </div>
                <h3>Reporting window</h3>
                <p>
                  Each property is measured in the Performance on Search results view, across a 16-month window (27
                  Aug 2025 to 12 Aug 2026 at the widest), search type: Web.
                </p>
              </article>
              <article className="m-card">
                <div className="ico" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 19V5M4 19h16" />
                    <path d="M8 15l3-4 3 3 5-7" />
                  </svg>
                </div>
                <h3>How the portfolio is totalled</h3>
                <p>
                  Portfolio totals are the exact sums of each property's device-level breakdown, not rounded
                  headline figures. Portfolio CTR is total clicks divided by total impressions, not an average of
                  the per-site rates.
                </p>
              </article>
            </div>
            <div className="m-stack">
              <article className="m-card">
                <div className="ico" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 6h16M4 12h10M4 18h13" />
                  </svg>
                </div>
                <h3>Queries, pages, and runway</h3>
                <p>
                  Query and page tables show the top ten rows per property. Several sites go much deeper:
                  Pharmaclinix, Souvenirs of India, and VScrapIt each surface over 1,000 distinct queries. Live
                  since is the first date with recorded impressions, so newer sites are compared on a shorter
                  runway.
                </p>
              </article>
              <article className="m-card warn">
                <div className="ico" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v5M12 16h.01" />
                  </svg>
                </div>
                <h3>Left out of this view</h3>
                <p>
                  Three further properties sit on the account but are not yet verified, so they have no performance
                  data and are excluded here.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
