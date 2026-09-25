import { LuArrowRight, LuLayoutGrid } from 'react-icons/lu'
import Floaters from './Floaters'
import TechTiles from './TechTiles'
import HeroSearch from './HeroSearch'

export default function WelcomeHero() {
  return (
    <section className="wl-hero" id="top">
      <div className="wl-hero-bg" aria-hidden="true">
        <span className="wl-dots"></span>
        <span className="wl-orb a"></span>
        <span className="wl-orb b"></span>
      </div>

      <TechTiles />

      <Floaters />

      <div className="wrap wl-hero-inner">
        <div className="wl-hero-head">
          <h1 className="wl-headline wl-anim" style={{ '--d': '0ms' }}>
            Whatever you searched, you’re in the <span className="hl">right place.</span>
          </h1>
          <p className="wl-sub wl-anim" style={{ '--d': '120ms' }}>
            Young creative team for all your business solutions.
          </p>
        </div>

        <div className="wl-hero-panel wl-anim" style={{ '--d': '240ms' }}>
          <HeroSearch />
        </div>

        <div className="hero-actions wl-actions wl-anim" style={{ '--d': '360ms' }}>
          <a className="btn btn-glow" href="#wl-contact">
            Talk to an expert
            <span className="btn-glow-icon" aria-hidden="true">
              <LuArrowRight />
            </span>
          </a>
          <a className="btn btn-soft" href="#paths">
            Explore our services
            <span className="btn-soft-icon" aria-hidden="true">
              <LuLayoutGrid />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
