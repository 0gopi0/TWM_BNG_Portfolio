import { useEffect, useRef } from 'react'

export function useScrollFade({ rootMargin = '-12% 0px -12% 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('is-past')
          el.classList.add('is-near')
          return
        }
        const above = entry.rootBounds ? entry.boundingClientRect.bottom <= entry.rootBounds.top : false
        el.classList.remove('is-near')
        el.classList.toggle('is-past', above)
      },
      { threshold: 0, rootMargin },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return ref
}
