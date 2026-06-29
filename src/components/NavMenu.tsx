import { useState, useEffect, useRef } from 'react'
import './NavMenu.css'

// Light client-side gating. The plaintext password is NOT stored — only its
// SHA-256 hash — so it can't be read out of the source or the built bundle.
// (This still isn't real security: a determined user can bypass any client-side
// gate. To change the password, replace the hash with the SHA-256 of the new one.)
const PASSWORD_HASH = 'cc069c2e5935632b69f408ddfa0c0bfb1c50452c24d241d138d0a693110f06da'
const STORAGE_KEY = 'hl-nav-unlocked'

async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

const links: { href: string; label: string }[] = [
  { href: '#/', label: 'IA Planning' },
  { href: '#/campaign', label: '3-Month Campaign' },
  { href: '#/merge-hl', label: 'PR Campaign — NIL + OnRite Merge' },
  { href: '#/sales-pr-campaign', label: 'Sales PR Campaign — Presentation' },
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

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    let ok = false
    try {
      ok = (await sha256Hex(pw)) === PASSWORD_HASH
    } catch {
      ok = false
    }
    if (ok) {
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
