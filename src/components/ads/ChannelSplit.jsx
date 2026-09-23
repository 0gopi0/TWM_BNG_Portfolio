import { SiGoogleads, SiMeta } from 'react-icons/si'
import { useReveal } from '../../hooks/useReveal'
import { CHANNELS } from '../../data/ads'

const MARKS = { google: SiGoogleads, meta: SiMeta }

export default function ChannelSplit() {
  const headRef = useReveal()
  const splitRef = useReveal()

  return (
    <section id="channels">
      <div className="wrap">
        <div className="ads-head reveal" ref={headRef}>
          <p className="ads-num">01 / Channels</p>
          <h2>Search captures demand. Social creates it.</h2>
          <p>
            Most accounts starve one and overfeed the other. We split the budget by what each platform is actually good
            at, then move it as the numbers come in.
          </p>
        </div>

        <div className="ads-split reveal" ref={splitRef}>
          {CHANNELS.map((channel) => {
            const Mark = MARKS[channel.key]
            return (
              <article className={`ads-side is-${channel.key}`} key={channel.key}>
                <header className="ads-side-head">
                  <span className="ads-mark" aria-hidden="true">
                    <Mark />
                  </span>
                  <div>
                    <h3>{channel.name}</h3>
                    <p>{channel.focus}</p>
                  </div>
                </header>

                <p className="ads-side-lede">{channel.lede}</p>

                <ul className="ads-runs">
                  {channel.runs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <ul className="ads-kpis">
                  {channel.kpis.map((kpi) => (
                    <li key={kpi}>{kpi}</li>
                  ))}
                </ul>
              </article>
            )
          })}

          <p className="ads-merge">
            <span aria-hidden="true"></span>
            One budget, split by evidence
            <span aria-hidden="true"></span>
          </p>
        </div>
      </div>
    </section>
  )
}
