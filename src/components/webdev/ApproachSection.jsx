import { useReveal } from '../../hooks/useReveal'
import { TECH_ICONS } from './techIcons'

const STAGES = [
  {
    num: '01',
    title: 'Discovery',
    body: 'Scope, sitemap and a fixed quote. You approve the plan before anything gets built.',
    gets: ['Sitemap', 'Fixed quote', 'Delivery dates'],
  },
  {
    num: '02',
    title: 'Design',
    body: 'Home, one inner page and the mobile layout designed in Figma before a line of code.',
    gets: ['Figma file', 'Two revision rounds', 'Mobile screens'],
  },
  {
    num: '03',
    title: 'Build',
    body: 'Built on a staging link you can open any time, with the CMS wired for your team to edit.',
    gets: ['Staging link', 'Friday update', 'CMS walkthrough'],
  },
  {
    num: '04',
    title: 'QA and launch',
    body: 'Device testing, redirects, analytics and page speed checked before DNS moves.',
    gets: ['Launch checklist', 'Redirect map', 'Analytics setup'],
  },
  {
    num: '05',
    title: 'Handover',
    body: 'Repo, domain and hosting in your name, plus recordings showing how to edit the site.',
    gets: ['Repo access', 'Recordings', '30-day fix window'],
  },
]

const STACK_RULES = [
  {
    label: 'WordPress or Shopify',
    icons: ['wordpress', 'shopify'],
    rule: 'When your team publishes weekly and the CMS is the point.',
  },
  {
    label: 'Headless with Next.js',
    icons: ['next'],
    rule: 'When the front end has to be fast and marketing still wants a familiar CMS.',
  },
  {
    label: 'Custom with Node and React',
    icons: ['node', 'react'],
    rule: 'When a template runs out: portals, dashboards, bookings, pricing logic.',
  },
  {
    label: 'Cross-platform apps',
    icons: ['apps'],
    rule: 'When the phone matters as much as the browser, on one shared codebase.',
  },
]

export default function ApproachSection() {
  const headRef = useReveal()
  const listRef = useReveal()
  const rulesRef = useReveal()

  return (
    <section id="approach">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef}>
          <p className="num">/03 — Approach</p>
          <h2>A process you can hold us to</h2>
          <p>Five stages, six weeks on a typical build, and every deliverable named in the quote before we start.</p>
        </div>

        <h3 className="subhead reveal">How a build runs</h3>
        <ol className="stage-list reveal" ref={listRef}>
          {STAGES.map((stage) => (
            <li className="stage" key={stage.num}>
              <span className="stage-num" aria-hidden="true">
                {stage.num}
              </span>
              <div className="stage-body">
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
                <div className="stage-out">
                  <span className="stage-out-label">You get</span>
                  <ul className="stage-tags">
                    {stage.gets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="stack-rules reveal" ref={rulesRef}>
          <h3>How we pick the stack</h3>
          <p>The job decides the tool, whether that is a five page brochure site or a booking platform.</p>
          <div className="stack-list">
            {STACK_RULES.map((rule) => (
              <div className="stack-rule" key={rule.label}>
                <span className="stack-rule-icons" aria-hidden="true">
                  {rule.icons.map((key) => {
                    const Icon = TECH_ICONS[key]
                    return <Icon key={key} />
                  })}
                </span>
                <div className="stack-rule-copy">
                  <span className="stack-rule-label">{rule.label}</span>
                  <p>{rule.rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
