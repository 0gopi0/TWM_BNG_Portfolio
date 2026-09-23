import { BRANDS } from '../../data/ads'

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
              {brand}
            </span>
          ))}
          {BRANDS.map((brand) => (
            <span className="ads-brand" key={`b-${brand}`} aria-hidden="true">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
