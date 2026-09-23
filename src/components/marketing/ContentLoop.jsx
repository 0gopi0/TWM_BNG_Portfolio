const PHONE = 'M116 40h88a20 20 0 0 1 20 20v210a20 20 0 0 1-20 20h-88a20 20 0 0 1-20-20V60a20 20 0 0 1 20-20z'
const NOTCH = 'M148 56h24'
const FRAME =
  'M122 74h76a12 12 0 0 1 12 12v68a12 12 0 0 1-12 12h-76a12 12 0 0 1-12-12V86a12 12 0 0 1 12-12z'
const HILLS = 'M112 158l26-34 20 24 16-18 34 28'
const SUN = 'M190 89a9 9 0 1 0 .1 0z'
const LINE_1 = 'M112 190h96'
const LINE_2 = 'M112 206h70'
const LINE_3 = 'M112 222h46'

const HEART =
  'M124 272c-6-6-13-12-13-19 0-5 4-8 8-8 2 0 4 1 5 3 1-2 3-3 5-3 4 0 8 3 8 8 0 7-7 13-13 19z'
const BUBBLE =
  'M150 246h28a7 7 0 0 1 7 7v12a7 7 0 0 1-7 7h-18l-9 8v-8h-1a7 7 0 0 1-7-7v-12a7 7 0 0 1 7-7z'
const ARROW = 'M198 250l16 12-16 12v-8h-10v-8h10z'

const SPARK =
  'M0 6C-3 3 -6 1 -6 -2 -6 -4.5 -4.5 -6 -3 -6 -1.8 -6 -.9 -5.4 0 -4 .9 -5.4 1.8 -6 3 -6 4.5 -6 6 -4.5 6 -2 6 1 3 3 0 6Z'

const DRAWS = [
  { d: PHONE, delay: 0, hot: false },
  { d: NOTCH, delay: 350, hot: false },
  { d: FRAME, delay: 600, hot: false },
  { d: HILLS, delay: 1000, hot: true },
  { d: SUN, delay: 1250, hot: true },
  { d: LINE_1, delay: 1500, hot: false },
  { d: LINE_2, delay: 1750, hot: false },
  { d: LINE_3, delay: 2000, hot: false },
  { d: HEART, delay: 2300, hot: true },
  { d: BUBBLE, delay: 2550, hot: false },
  { d: ARROW, delay: 2800, hot: true },
]

const SPARKS = [
  { x: 244, y: 132, scale: 1, delay: 3200 },
  { x: 262, y: 92, scale: 0.8, delay: 3900 },
  { x: 232, y: 62, scale: 1.15, delay: 4600 },
]

export default function ContentLoop() {
  return (
    <svg
      viewBox="0 0 320 340"
      fill="none"
      role="img"
      aria-label="Animation of a phone filling with content: a photo, a caption, and engagement"
    >
      {DRAWS.map((item) => (
        <path
          key={item.d}
          className={`dm-draw${item.hot ? ' is-hot' : ''}`}
          d={item.d}
          pathLength="100"
          style={{ '--d': `${item.delay}ms` }}
        />
      ))}

      {SPARKS.map((spark) => (
        <g key={`${spark.x}-${spark.y}`} transform={`translate(${spark.x} ${spark.y}) scale(${spark.scale})`}>
          <path className="dm-spark" d={SPARK} style={{ '--hd': `${spark.delay}ms` }} />
        </g>
      ))}
    </svg>
  )
}
