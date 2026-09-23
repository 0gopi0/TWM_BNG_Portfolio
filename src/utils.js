export function formatNumber(v) {
  return v.toLocaleString('en-IN')
}

export function formatLakh(v) {
  return `₹${(v / 100000).toFixed(1)} L`
}

export function linePath(values, width, height, pad = 12, domain) {
  const max = domain ? domain.max : Math.max(...values)
  const min = domain ? domain.min : Math.min(...values)
  const span = max - min || 1
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width
      const y = height - ((v - min) / span) * (height - pad * 2) - pad
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
}

export function barRects(values, width, height, pad = 12, domain, ratio = 0.55) {
  const max = domain ? domain.max : Math.max(...values)
  const min = domain ? domain.min : Math.min(...values)
  const span = max - min || 1
  const slot = width / values.length
  const w = slot * ratio
  return values.map((v, i) => {
    const y = height - ((v - min) / span) * (height - pad * 2) - pad
    return { x: i * slot + (slot - w) / 2, y, w, h: height - pad - y }
  })
}

export function initials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
