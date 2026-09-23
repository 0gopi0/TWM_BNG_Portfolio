import { useReveal } from '../../hooks/useReveal'
import { RHYTHM } from '../../data/ads'

export default function WeeklyRhythm() {
  const headRef = useReveal()
  const listRef = useReveal()

  return (
    <section id="rhythm">
      <div className="wrap">
        <div className="ads-head reveal" ref={headRef}>
          <p className="ads-num">03 / Operating rhythm</p>
          <h2>What happens every week</h2>
          <p>Accounts do not improve in monthly meetings. This is the loop, and you can watch it run.</p>
        </div>

        <ol className="ads-week reveal" ref={listRef}>
          {RHYTHM.map((day) => (
            <li className="ads-day" key={day.day}>
              <span className="ads-day-tag">{day.day}</span>
              <div className="ads-day-body">
                <h3>{day.title}</h3>
                <p>{day.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
