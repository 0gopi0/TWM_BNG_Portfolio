import Floaters from './Floaters'
import Signpost from './Signpost'

export default function WelcomeHero() {
  return (
    <section className="wl-hero" id="top">
      <div className="wl-hero-bg" aria-hidden="true">
        <span className="wl-dots"></span>
        <span className="wl-orb a"></span>
        <span className="wl-orb b"></span>
      </div>

      <Floaters />

      <div className="wrap wl-hero-inner">
        <div className="wl-hero-copy">
          <p className="wl-eyebrow wl-anim" style={{ '--d': '0ms' }}>
            Welcome · The Website Makers
          </p>

          <h1 className="wl-headline wl-anim" style={{ '--d': '90ms' }}>
            You are in the <span className="wl-mark">right place.</span>
          </h1>

          <p className="wl-lede wl-anim" style={{ '--d': '200ms' }}>
            Four things we do well. Pick the one that sounds like your problem, or skip to the section you came for.
          </p>

          <div className="hero-actions wl-actions wl-anim" style={{ '--d': '300ms' }}>
            <a className="btn btn-primary" href="#paths">
              Show me the four
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 13L13 3M13 3H6M13 3v7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="wl-art wl-anim" style={{ '--d': '520ms' }}>
          <Signpost />
        </div>
      </div>
    </section>
  )
}
