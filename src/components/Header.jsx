import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import StatFlip from './StatFlip'

const PAGE_LINKS = [
  { to: '/', label: 'Welcome', end: true },
  { to: '/seo', label: 'SEO' },
  { to: '/ads', label: 'Advertize' },
  { to: '/digital-marketing', label: 'Digital Marketing' },
  { to: '/web-development', label: 'Web & Apps' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    function onKeydown(e) {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [menuOpen])

  useEffect(() => {
    if (document.querySelector('.overlay.on')) return
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header className={`site${menuOpen ? ' is-open' : ''}`} id="siteHeader">
      <div className="nav-shell">
        <div className="logo">
          <img
            src="https://thewebsitemakers.in/wp-content/uploads/2025/06/TWM-Logo_20260225_233339_0000.gif"
            alt="The Website Makers"
            width="170"
            height="40"
          />
        </div>
        <nav className="nav-links" id="navLinks" aria-label="Primary">
          {PAGE_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <StatFlip />
        <button
          className="menu-btn"
          id="menuBtn"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
        </button>
      </div>
    </header>
  )
}
