import { FaPlay } from 'react-icons/fa6'
import { LuLayoutGrid } from 'react-icons/lu'
import { PROMISES } from '../../data/marketing'
import ContentLoop from './ContentLoop'

export default function MarketingHero() {
  return (
    <section className="dm-hero" id="top">
      <div className="dm-hero-bg" aria-hidden="true">
        <span className="dm-dots"></span>
        <span className="dm-orb a"></span>
        <span className="dm-orb b"></span>
      </div>

      <div className="wrap dm-hero-inner">
        <div className="dm-hero-copy">
          <p className="dm-eyebrow dm-anim" style={{ '--d': '0ms' }}>
            Digital marketing · Content and social
          </p>

          <h1 className="dm-headline">
            <span className="dm-line dm-anim" style={{ '--d': '90ms' }}>
              Crafting c
              <span className="dm-badge" aria-hidden="true">
                <FaPlay />
              </span>
              <span className="sr-only">o</span>
              ntent that{' '}
            </span>
            <span className="dm-line dm-anim" style={{ '--d': '190ms' }}>
              actually <span className="dm-pill">makes money</span>
            </span>
          </h1>

          <p className="dm-lede dm-anim" style={{ '--d': '300ms' }}>
            We grow personal brands two to five times over and build inbound and outbound lead systems for founders and
            service businesses in 90 to 120 days. <span className="dm-guarantee">Guaranteed</span>
          </p>

          <div className="hero-actions dm-actions dm-anim" style={{ '--d': '400ms' }}>
            <a className="btn btn-glow" href="#dm-contact">
              Get started
              <span className="btn-glow-icon">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a className="btn btn-soft" href="#work">
              Our work
              <span className="btn-soft-icon" aria-hidden="true">
                <LuLayoutGrid />
              </span>
            </a>
          </div>
        </div>

        <div className="dm-art dm-anim" style={{ '--d': '620ms' }}>
          <ContentLoop />
        </div>

        <ul className="dm-promises dm-anim" style={{ '--d': '520ms' }}>
          {PROMISES.map((promise) => (
            <li key={promise.value}>
              <b>{promise.value}</b>
              <span>{promise.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
