const POST = 'M160 58V304'
const GROUND = 'M104 304h112'
const SIGN_A = 'M170 92h102l22 18-22 18H170z'
const SIGN_A_TEXT = 'M188 110h62'
const SIGN_B = 'M150 152H48l-22 18 22 18h102z'
const SIGN_B_TEXT = 'M62 170h70'
const SIGN_C = 'M170 214h102l22 18-22 18H170z'
const SIGN_C_TEXT = 'M188 232h62'

const DRAWS = [
  { d: POST, delay: 0, hot: false },
  { d: GROUND, delay: 250, hot: false },
  { d: SIGN_A, delay: 500, hot: false },
  { d: SIGN_A_TEXT, delay: 950, hot: true },
  { d: SIGN_B, delay: 1200, hot: false },
  { d: SIGN_B_TEXT, delay: 1650, hot: true },
  { d: SIGN_C, delay: 1900, hot: false },
  { d: SIGN_C_TEXT, delay: 2350, hot: true },
]

const SPARKS = [
  { x: 268, y: 62, scale: 1, delay: 3000 },
  { x: 46, y: 236, scale: 0.85, delay: 3700 },
  { x: 292, y: 268, scale: 0.7, delay: 4400 },
]

const SPARK =
  'M0 6C-3 3 -6 1 -6 -2 -6 -4.5 -4.5 -6 -3 -6 -1.8 -6 -.9 -5.4 0 -4 .9 -5.4 1.8 -6 3 -6 4.5 -6 6 -4.5 6 -2 6 1 3 3 0 6Z'

export default function Signpost() {
  return (
    <svg
      viewBox="0 0 320 340"
      fill="none"
      role="img"
      aria-label="Animation of a signpost drawing itself, with signs pointing to different services"
    >
      {DRAWS.map((item) => (
        <path
          key={item.d}
          className={`wl-draw${item.hot ? ' is-hot' : ''}`}
          d={item.d}
          pathLength="100"
          style={{ '--d': `${item.delay}ms` }}
        />
      ))}

      {SPARKS.map((spark) => (
        <g key={`${spark.x}-${spark.y}`} transform={`translate(${spark.x} ${spark.y}) scale(${spark.scale})`}>
          <path className="wl-spark" d={SPARK} style={{ '--hd': `${spark.delay}ms` }} />
        </g>
      ))}
    </svg>
  )
}
