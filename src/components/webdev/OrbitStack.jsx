import { TECH_ICONS } from './techIcons'

const RINGS = [
  {
    radius: 205,
    duration: 22,
    items: [
      { key: 'wordpress', angle: 0 },
      { key: 'shopify', angle: 90 },
      { key: 'custom', angle: 180 },
      { key: 'apps', angle: 270 },
    ],
  },
  {
    radius: 252,
    duration: 34,
    items: [
      { key: 'node', angle: 40 },
      { key: 'next', angle: 160 },
      { key: 'tanstack', angle: 280 },
    ],
  },
]

export default function OrbitStack() {
  return (
    <div className="orbit-bound" aria-hidden="true">
      <div className="orbit-stack">
        <div className="orbit-glow"></div>
        {RINGS.map((ring) => (
          <div
            className="orbit-track"
            key={ring.radius}
            style={{ width: ring.radius * 2, height: ring.radius * 2 }}
          ></div>
        ))}
        {RINGS.map((ring) =>
          ring.items.map((item) => {
            const Icon = TECH_ICONS[item.key]
            const delay = -((item.angle / 360) * ring.duration)
            return (
              <div
                className="orbit-pivot"
                key={item.key}
                style={{ animationDuration: `${ring.duration}s`, animationDelay: `${delay}s` }}
              >
                <div
                  className="orbit-satellite"
                  style={{
                    '--r': `${ring.radius}px`,
                    animationDuration: `${ring.duration}s`,
                    animationDelay: `${delay}s`,
                  }}
                >
                  <div className="orbit-satellite-inner">
                    <Icon />
                  </div>
                </div>
              </div>
            )
          }),
        )}
      </div>
    </div>
  )
}
