import { LuArrowRight, LuLayoutGrid } from 'react-icons/lu'
import { useCountUp } from '../hooks/useCountUp'
import { useReveal } from '../hooks/useReveal'
import ClientMarquee from './ClientMarquee'

function SideStat({ end, suffix, dec, accent, label, align }) {
  const [ref, display] = useCountUp(end, { suffix, dec })
  return (
    <div className={`side-stat ${align}`}>
      <b className={accent ? 'accent' : ''} ref={ref}>
        {display}
      </b>
      <small>{label}</small>
    </div>
  )
}

function Stat({ end, suffix, dec, accent, label, arcWidth }) {
  const [ref, display] = useCountUp(end, { suffix, dec })
  return (
    <div className="stat">
      <b className={accent ? 'accent' : ''} ref={ref}>
        {display}
      </b>
      <small>{label}</small>
      <div className="arc" aria-hidden="true">
        <i style={arcWidth ? { width: arcWidth } : undefined}></i>
      </div>
    </div>
  )
}

export default function Hero() {
  const statsRef = useReveal()

  return (
    <section className="hero" id="top">
      <div className="orb" aria-hidden="true"></div>
      <div className="ribbon" aria-hidden="true"></div>
      <div className="wrap hero-inner">
        <div className="hero-stage">
          <SideStat end={1300000} accent label="Organic clicks across all properties" align="left" />

          <div className="hero-copy">
            <p className="kicker">
              <b></b> Organic search · Bengaluru
            </p>
            <h1>
              50 lakh search appearances across <span className="hl">11 client sites.</span>
            </h1>
            <p className="lede">
              Technical SEO, content and local search that turn rankings into enquiries. Open any client to see the
              proof.
            </p>
            <div className="hero-actions">
              <a className="btn btn-glow" href="#contact">
                Book a strategy call
                <span className="btn-glow-icon" aria-hidden="true">
                  <LuArrowRight />
                </span>
              </a>
              <a className="btn btn-soft" href="#work">
                Explore the work
                <span className="btn-soft-icon" aria-hidden="true">
                  <LuLayoutGrid />
                </span>
              </a>
            </div>
            <p className="src">Combined organic performance · 16-month window to 12 Aug 2026 · Search type: Web</p>
          </div>

          <SideStat end={5000000} label="Search impressions" align="right" />
        </div>

        <div className="stats reveal" ref={statsRef}>
          <Stat end={26.0} suffix="%" dec={1} accent label="Portfolio click-through rate" />
          <Stat end={582200} label="Last 90 days of clicks" arcWidth="58%" />
        </div>

        <ClientMarquee />
      </div>
    </section>
  )
}
