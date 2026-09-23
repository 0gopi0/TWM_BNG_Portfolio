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
            <span>WordPress, Shopify, or fully custom-coded —</span>
            <span>Node, Next.js, TanStack, and React under the hood.</span>
          </p>

          <div className="hero-actions">
            <a href="#stack" className="btn btn-primary">
              See the stack
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#webdev-contact" className="btn btn-ghost">
              Book a strategy call
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
