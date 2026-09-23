import { useReveal } from '../../hooks/useReveal'
import { useScrollFade } from '../../hooks/useScrollFade'
import { JOURNEY } from '../../data/marketing'

function Step({ step }) {
  const revealRef = useReveal()
  const fadeRef = useScrollFade()

  return (
    <li
      className="dm-step reveal"
      ref={(el) => {
        revealRef.current = el
        fadeRef.current = el
      }}
    >
      <span className="dm-step-dot" aria-hidden="true"></span>
      <div className="dm-card">
        <span className="dm-step-num" aria-hidden="true">
          {step.num}
        </span>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </div>
    </li>
  )
}

export default function CreativeJourney() {
  const asideRef = useReveal()

  return (
    <section id="journey" className="dm-journey-section">
      <div className="wrap dm-journey">
        <div className="dm-journey-aside reveal" ref={asideRef}>
          <p className="dm-eyebrow">Our creative journey</p>
          <h2>Four hours of your time, every month</h2>
          <p>
            The process we follow to help you grow and sell on social, built around your calendar rather than ours.
          </p>
          <a className="btn dm-btn-ghost" href="#dm-contact">
            Get started
          </a>
        </div>

        <ol className="dm-steps">
          {JOURNEY.map((step) => (
            <Step key={step.num} step={step} />
          ))}
        </ol>
      </div>
    </section>
  )
}
