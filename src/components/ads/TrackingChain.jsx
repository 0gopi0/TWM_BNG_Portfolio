import { useReveal } from '../../hooks/useReveal'
import { TRACKING } from '../../data/ads'

export default function TrackingChain() {
  const headRef = useReveal()
  const chainRef = useReveal()

  return (
    <section id="tracking">
      <div className="wrap">
        <div className="ads-head reveal" ref={headRef}>
          <p className="ads-num">05 / Measurement</p>
          <h2>If the tracking is wrong, every number after it is a guess</h2>
          <p>
            Platform dashboards flatter themselves. We wire the full path from click to closed sale, then reconcile it
            against your own numbers every week.
          </p>
        </div>

        <ol className="ads-chain reveal" ref={chainRef}>
          {TRACKING.map((step, i) => (
            <li className="ads-chain-step" key={step}>
              <span className="ads-chain-num">{String(i + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
