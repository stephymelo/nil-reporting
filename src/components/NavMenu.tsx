import { useState } from 'react'
import './NavMenu.css'

const links: { href: string; label: string }[] = [
  { href: '#/', label: 'IA Planning' },
  { href: '#/campaign', label: '3-Month Campaign' },
  { href: '#/pr-campaign', label: 'PR Campaign — NIL + Onrite Merge' },
  { href: '#/b2b-policy', label: 'Wholesale Account Policy' },
  { href: '#/landing-project', label: 'Landing Page Project' },
]

export default function NavMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="nav-burger"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`nav-overlay ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`nav-panel ${open ? 'is-open' : ''}`}>
        <div className="nav-panel__head">
          <span className="nav-panel__logo">HL</span>
          <button
            className="nav-panel__close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="nav-panel__links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-panel__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-panel__foot">Hairloss.com · Planning</div>
      </aside>
    </>
  )
}
