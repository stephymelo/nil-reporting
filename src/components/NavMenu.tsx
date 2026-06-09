import { useState, useEffect, useRef } from 'react'
import './NavMenu.css'

// Change this to set the menu password. Note: this is light client-side
// gating only — the value ships in the built code, so it deters casual
// navigation but is not real security.
const PASSWORD = 'steph'
const STORAGE_KEY = 'hl-nav-unlocked'

const links: { href: string; label: string }[] = [
  { href: '#/', label: 'IA Planning' },
  { href: '#/campaign', label: '3-Month Campaign' },
  { href: '#/merge-hl', label: 'PR Campaign — NIL + Onrite Merge' },
  { href: '#/b2b-policy', label: 'Wholesale Account Policy' },
  { href: '#/landing-project', label: 'Landing Page Project' },
]

export default function NavMenu() {
  const [open, setOpen] = useState(false)
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })
  const [pw, setPw] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && !unlocked) inputRef.current?.focus()
  }, [open, unlocked])

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (pw === PASSWORD) {
      setUnlocked(true)
      setError(false)
      setPw('')
      try {
        sessionStorage.setItem(STORAGE_KEY, '1')
      } catch {
        /* ignore */
      }
    } else {
      setError(true)
    }
  }

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

        {unlocked ? (
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
        ) : (
          <form className="nav-panel__lock" onSubmit={submit}>
            <div className="nav-panel__lock-icon">🔒</div>
            <p className="nav-panel__lock-label">Enter the password to access the menu</p>
            <input
              ref={inputRef}
              type="password"
              className={`nav-panel__lock-input ${error ? 'is-error' : ''}`}
              value={pw}
              onChange={(e) => {
                setPw(e.target.value)
                setError(false)
              }}
              placeholder="Password"
            />
            {error && <p className="nav-panel__lock-error">Incorrect password</p>}
            <button type="submit" className="nav-panel__lock-btn">
              Unlock
            </button>
          </form>
        )}

        <div className="nav-panel__foot">Hairloss.com · Planning</div>
      </aside>
    </>
  )
}
