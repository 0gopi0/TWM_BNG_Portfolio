const CODE = [
  [
    ['k', 'const'],
    ['', ' build '],
    ['p', '= {'],
  ],
  [
    ['', '  '],
    ['i', 'platforms'],
    ['p', ': ['],
  ],
  [
    ['', '    '],
    ['s', "'WordPress'"],
    ['p', ', '],
    ['s', "'Shopify'"],
    ['p', ','],
  ],
  [
    ['', '    '],
    ['s', "'Custom'"],
    ['p', '],'],
  ],
  [
    ['', '  '],
    ['i', 'stack'],
    ['p', ': ['],
    ['s', "'Node'"],
    ['p', ', '],
    ['s', "'Next.js'"],
    ['p', ','],
  ],
  [
    ['', '    '],
    ['s', "'TanStack'"],
    ['p', ', '],
    ['s', "'React'"],
    ['p', '],'],
  ],
  [
    ['', '  '],
    ['i', 'stages'],
    ['p', ': '],
    ['n', '5'],
    ['p', ', '],
    ['i', 'weeks'],
    ['p', ': '],
    ['n', '6'],
    ['p', ','],
  ],
  [
    ['', '  '],
    ['i', 'handover'],
    ['p', ': '],
    ['s', "'yours'"],
    ['p', ','],
  ],
  [['p', '}']],
]

export default function CodePanel() {
  return (
    <figure className="webdev-panel">
      <div className="webdev-panel-bar">
        <span className="webdev-dots" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="webdev-tab">build.config.ts</span>
        <span className="webdev-chip">ts</span>
      </div>
      <ol className="webdev-code">
        {CODE.map((line, i) => (
          <li key={i}>
            <span className="ln">{i + 1}</span>
            <span className="lc">
              {line.map(([type, text], j) => (
                <span key={j} className={`tok-${type}`}>
                  {text}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
