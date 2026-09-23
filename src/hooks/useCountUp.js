import { useEffect, useRef, useState } from 'react'
import { formatNumber } from '../utils'

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useCountUp(end, { suffix = '', dec = 0 } = {}) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(
    (dec ? (0).toFixed(dec) : '0') + suffix,
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          io.unobserve(entry.target)

          if (reduceMotion) {
            setDisplay(
              (dec ? end.toFixed(dec) : formatNumber(Math.round(end))) + suffix,
            )
            return
          }

          let t0 = null
          function step(t) {
            if (!t0) t0 = t
            const p = Math.min((t - t0) / 1200, 1)
            const v = end * (1 - Math.pow(1 - p, 3))
            setDisplay((dec ? v.toFixed(dec) : formatNumber(Math.round(v))) + suffix)
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, suffix, dec])

  return [ref, display]
}
