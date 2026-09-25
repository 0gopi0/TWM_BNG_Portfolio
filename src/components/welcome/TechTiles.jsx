import { useEffect, useRef, useState } from 'react'
import { LuClapperboard, LuCode, LuMegaphone, LuSearch, LuTarget, LuTrendingUp } from 'react-icons/lu'

// Mobile-only hero background: a faint grid with tiles that slide between cells.
const CELL = 44
const MOBILE = '(max-width: 760px)'
const ICONS = [LuSearch, LuCode, LuMegaphone, LuClapperboard, LuTrendingUp, LuTarget]
const PLAIN_TILES = 10
const SHUFFLE_MS = 1600

function randomLayout(cols, rows) {
  const cells = []
  for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) cells.push([c, r])
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cells[i], cells[j]] = [cells[j], cells[i]]
  }
  const count = Math.min(ICONS.length + PLAIN_TILES, cells.length)
  return cells.slice(0, count).map(([col, row], i) => ({ id: i, col, row }))
}

export default function TechTiles() {
  const ref = useRef(null)
  const [grid, setGrid] = useState(null)
  const [tiles, setTiles] = useState([])

  useEffect(() => {
    const el = ref.current
    const mq = window.matchMedia(MOBILE)
    if (!el) return

    let last = ''
    function measure() {
      if (!mq.matches) {
        last = ''
        return setGrid(null)
      }
      const cols = Math.ceil(el.clientWidth / CELL)
      const rows = Math.ceil(el.clientHeight / CELL)
      if (`${cols}x${rows}` === last) return
      last = `${cols}x${rows}`
      setGrid({ cols, rows })
      setTiles(randomLayout(cols, rows))
    }

    const ro = new ResizeObserver(measure)
    ro.observe(el)
    mq.addEventListener('change', measure)
    return () => {
      ro.disconnect()
      mq.removeEventListener('change', measure)
    }
  }, [])

  useEffect(() => {
    if (!grid) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setInterval(() => {
      setTiles((current) => {
        const taken = new Set(current.map((t) => `${t.col}-${t.row}`))
        const next = current.slice()
        for (let n = 0; n < 3; n++) {
          const i = Math.floor(Math.random() * next.length)
          const t = next[i]
          // Slide one cell in a random direction, staying on the grid and off other tiles.
          const moves = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ].filter(([dc, dr]) => {
            const c = t.col + dc
            const r = t.row + dr
            return c >= 0 && r >= 0 && c < grid.cols && r < grid.rows && !taken.has(`${c}-${r}`)
          })
          if (!moves.length) continue
          const [dc, dr] = moves[Math.floor(Math.random() * moves.length)]
          taken.delete(`${t.col}-${t.row}`)
          next[i] = { ...t, col: t.col + dc, row: t.row + dr }
          taken.add(`${next[i].col}-${next[i].row}`)
        }
        return next
      })
    }, SHUFFLE_MS)
    return () => clearInterval(timer)
  }, [grid])

  return (
    <div className="wl-tiles" ref={ref} aria-hidden="true">
      {grid &&
        tiles.map((t) => {
          const Icon = ICONS[t.id]
          return (
            <span
              key={t.id}
              className={`wl-tile${Icon ? ' is-hot' : ''}`}
              style={{ transform: `translate(${t.col * CELL}px, ${t.row * CELL}px)`, '--td': `${t.id * 370}ms` }}
            >
              {Icon && <Icon />}
            </span>
          )
        })}
    </div>
  )
}
