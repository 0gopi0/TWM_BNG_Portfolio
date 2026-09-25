import { LuCalendarDays } from 'react-icons/lu'
import BlocksHoverField from './BlocksHoverField'
import CodePanel from './CodePanel'
import OrbitStack from './OrbitStack'

const PROOF = [
  'Fixed quote before we build',
  'Six weeks on a typical build',
  'Repo, domain and hosting in your name',
]

export default function WebDevHero() {
  return (
    <section className="hero webdev-hero" id="top">
      <div className="webdev-plate" aria-hidden="true">
        <BlocksHoverField />
        <span className="webdev-veil"></span>
      </div>

      <div className="wrap webdev-grid">
        <div className="webdev-copy">
          <p className="webdev-eyebrow">
            <i aria-hidden="true"></i> Web &amp; apps · Bengaluru
          </p>

          <h1 className="webdev-headline">
            <span>Websites and apps,</span>
            <span>
              built to <span className="hl">scale.</span>
            </span>
          </h1>

          <p className="webdev-sub">
            <span>WordPress, Shopify, or fully custom-coded —</span>
            <span>Node, Next.js, TanStack, and React under the hood.</span>
          </p>

          <div className="hero-actions">
            <a href="#stack" className="btn btn-glow">
              See the stack
              <span className="btn-glow-icon">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a className="btn btn-soft" href="#webdev-contact">
              Book a strategy call
              <span className="btn-soft-icon" aria-hidden="true">
                <LuCalendarDays />
              </span>
            </a>
          </div>

          <ul className="webdev-proof">
            {PROOF.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="webdev-visual">
          <OrbitStack />
          <CodePanel />
        </div>
      </div>
    </section>
  )
}
