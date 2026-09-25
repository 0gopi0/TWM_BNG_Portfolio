import { LuPlus } from 'react-icons/lu'
import { useReveal } from '../hooks/useReveal'

// `eyebrowClass` matches the section labels of the page it sits on.
export default function Faq({ items, eyebrow = 'FAQs', eyebrowClass = 'num', heading = 'Before you ask.' }) {
  const ref = useReveal()

  return (
    <div className="faq reveal" ref={ref}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2>{heading}</h2>
      <div className="faq-list">
        {/* A shared name lets only one answer stay open at a time. */}
        {items.map((item, i) => (
          <details className="faq-item" name="faq" key={item.q} open={i === 0}>
            <summary>
              {item.q}
              <LuPlus aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
