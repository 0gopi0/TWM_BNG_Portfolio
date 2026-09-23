import { useEffect, useRef } from 'react'

const CELL = 84
const GAP = 3
const SPARK_LIFETIME = 900

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

export default function BlocksHoverField() {
  const wrapRef = useRef(null)
  const baseRef = useRef(null)
  const sparkRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const base = baseRef.current
    const spark = sparkRef.current
    const baseCtx = base.getContext('2d')
    const sparkCtx = spark.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let cols = 0
    let rows = 0
    let sparks = []
    let raf = null
    let pointer = null
    let lastSpawn = 0
    let nextAmbient = performance.now() + 600

    function drawBase() {
      baseCtx.clearRect(0, 0, width, height)
      baseCtx.fillStyle = '#0b0d13'
      baseCtx.fillRect(0, 0, width, height)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CELL
          const y = r * CELL
          const w = CELL - GAP
          const h = CELL - GAP
          const grad = baseCtx.createLinearGradient(x, y, x + w, y + h)
          grad.addColorStop(0, 'rgba(255,255,255,.06)')
          grad.addColorStop(0.5, 'rgba(255,255,255,.015)')
          grad.addColorStop(1, 'rgba(0,0,0,.4)')
          baseCtx.fillStyle = grad
          roundRect(baseCtx, x, y, w, h, 6)
          baseCtx.fill()
        }
      }
    }

    function resize() {
      const rect = wrap.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      ;[base, spark].forEach((canvas) => {
        canvas.width = width * dpr
        canvas.height = height * dpr
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
      })
      baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
      sparkCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(width / CELL) + 1
      rows = Math.ceil(height / CELL) + 1
      drawBase()
    }

    function spawnSpark(px, py) {
      const col = Math.floor(px / CELL)
      const row = Math.floor(py / CELL)
      const edges = ['top', 'right', 'bottom', 'left']
      const edge = edges[Math.floor(Math.random() * edges.length)]
      sparks.push({ col, row, edge, born: performance.now() })
      if (sparks.length > 48) sparks.shift()
    }

    function drawSparks(now) {
      sparkCtx.clearRect(0, 0, width, height)
      sparks = sparks.filter((s) => now - s.born < SPARK_LIFETIME)
      sparks.forEach((s) => {
        const age = (now - s.born) / SPARK_LIFETIME
        const alpha = age < 0.25 ? age / 0.25 : 1 - (age - 0.25) / 0.75
        const x = s.col * CELL
        const y = s.row * CELL
        const w = CELL - GAP
        const h = CELL - GAP
        sparkCtx.strokeStyle = `rgba(255,140,80,${Math.max(alpha, 0) * 0.9})`
        sparkCtx.lineWidth = 2
        sparkCtx.shadowColor = 'rgba(255,90,31,.85)'
        sparkCtx.shadowBlur = 9
        sparkCtx.beginPath()
        if (s.edge === 'top') {
          sparkCtx.moveTo(x, y)
          sparkCtx.lineTo(x + w, y)
        } else if (s.edge === 'bottom') {
          sparkCtx.moveTo(x, y + h)
          sparkCtx.lineTo(x + w, y + h)
        } else if (s.edge === 'left') {
          sparkCtx.moveTo(x, y)
          sparkCtx.lineTo(x, y + h)
        } else {
          sparkCtx.moveTo(x + w, y)
          sparkCtx.lineTo(x + w, y + h)
        }
        sparkCtx.stroke()
      })
      sparkCtx.shadowBlur = 0
    }

    function loop(now) {
      if (pointer && now - lastSpawn > 55) {
        spawnSpark(pointer.x, pointer.y)
        lastSpawn = now
      }
      if (now > nextAmbient) {
        spawnSpark(Math.random() * width, Math.random() * height)
        nextAmbient = now + 900 + Math.random() * 1200
      }
      drawSparks(now)
      raf = requestAnimationFrame(loop)
    }

    function onMove(e) {
      const rect = wrap.getBoundingClientRect()
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    function onLeave() {
      pointer = null
    }

    const section = wrap.closest('section') || wrap

    resize()
    window.addEventListener('resize', resize)
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)

    if (reduceMotion) {
      drawSparks(performance.now())
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      window.removeEventListener('resize', resize)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="webdev-blocks" ref={wrapRef} aria-hidden="true">
      <canvas ref={baseRef} className="webdev-blocks-layer"></canvas>
      <canvas ref={sparkRef} className="webdev-blocks-layer"></canvas>
    </div>
  )
}
