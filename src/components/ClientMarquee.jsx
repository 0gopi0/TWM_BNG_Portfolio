import { CLIENTS } from '../data/clients'
import { initials } from '../utils'

function Chip({ client, hot }) {
  return (
    <span className={`orb-chip${hot ? ' hot' : ''}`}>
      <em>{initials(client.name)}</em>
      {client.name}
    </span>
  )
}

export default function ClientMarquee() {
  return (
    <div className="marquee">
      <p>Clients in this portfolio</p>
      <div className="track" id="track">
        {CLIENTS.map((c, i) => (
          <Chip key={`a-${c.dom}`} client={c} hot={i === 0} />
        ))}
        {CLIENTS.map((c, i) => (
          <Chip key={`b-${c.dom}`} client={c} hot={i === 0} />
        ))}
      </div>
    </div>
  )
}
