import { useReveal } from '../../hooks/useReveal'
import { METRICS } from '../../data/ads'

export default function MetricWatch() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="metrics">
      <div className="wrap">
        <div className="ads-head reveal" ref={headRef}>
          <p className="ads-num">04 / Diagnostics</p>
          <h2>Six numbers, and what we do when they slip</h2>
          <p>Anyone can send you a dashboard. The useful part is the decision that follows it.</p>
        </div>

        <div className="ads-metrics reveal" ref={gridRef}>
          {METRICS.map((metric) => (
            <article className="ads-metric" key={metric.name}>
              <span className="ads-metric-name">{metric.name}</span>
              <p className="ads-metric-question">{metric.question}</p>
              <p className="ads-metric-action">
                <span>When it slips</span>
                {metric.action}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
