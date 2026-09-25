import { BRANDS } from '../../data/ads'

// Monogram from the capitalised words, so 'Souvenirs of India' becomes SI.
const initials = (name) =>
  name
    .split(' ')
    .filter((word) => /^[A-Z0-9]/.test(word))
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function BrandMarquee() {
  return (
    <section className="ads-brands" aria-label="Brands we work with">
      <div className="wrap">
        <p className="ads-brands-label">Brands we work with</p>
      </div>
      <div className="ads-brands-track">
        <div className="track">
          {BRANDS.map((brand) => (
            <span className="ads-brand" key={`a-${brand}`}>
              <i aria-hidden="true">{initials(brand)}</i>
              {brand}
            </span>
          ))}
          {BRANDS.map((brand) => (
            <span className="ads-brand" key={`b-${brand}`} aria-hidden="true">
              <i aria-hidden="true">{initials(brand)}</i>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
