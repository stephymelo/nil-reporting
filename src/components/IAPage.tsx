import { useState } from 'react'
import './IAPage.css'

// ── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string
  children: string[]
}

interface IASection {
  id: string
  label: string
  icon: string
  color: string
  children: { label: string; items: string[] }[]
}

// ── Current nav data (from existing site) ───────────────────────────────────

const currentNav: NavItem[] = [
  {
    label: 'For Women',
    children: ['Hair Toppers', 'Wigs', 'Hair Extensions', 'Clip-Ins', 'Synthetic Hair'],
  },
  {
    label: 'For Men',
    children: ['Hair Systems', 'Toupees', 'Hair Pieces', 'Lace Units', 'Skin Units'],
  },
  {
    label: 'Accessories',
    children: ['Tapes & Adhesives', 'Removal Solutions', 'Styling Tools', 'Maintenance Kits'],
  },
  {
    label: 'Hair Care',
    children: ['Shampoos', 'Conditioners', 'Scalp Treatments', 'Leave-In Products'],
  },
  {
    label: 'Sale',
    children: ['Clearance', 'Bundle Deals', 'Last Chance'],
  },
]

// ── Proposed new IA by audience ──────────────────────────────────────────────

const proposedIA: IASection[] = [
  {
    id: 'consumers-women',
    label: 'Women 40+',
    icon: '♀',
    color: '#c084fc',
    children: [
      {
        label: 'Hair Thinning Solutions',
        items: ['Hair Toppers', 'Crown Fillers', 'Volume Enhancers'],
      },
      {
        label: 'Full Coverage',
        items: ['Wigs', 'Lace Front Wigs', 'Synthetic Wigs', 'Human Hair Wigs'],
      },
      {
        label: 'Extensions & Add-Ons',
        items: ['Clip-In Extensions', 'Tape-In Extensions', 'Halo Extensions'],
      },
      {
        label: 'Hair Care',
        items: ['Scalp Treatments', 'Thinning Hair Shampoos', 'Strengthening Conditioners'],
      },
    ],
  },
  {
    id: 'consumers-men',
    label: 'Men 40+',
    icon: '♂',
    color: '#60a5fa',
    children: [
      {
        label: 'Hair Loss Solutions',
        items: ['Hair Systems', 'Skin Units', 'Lace Units', 'Mono Units'],
      },
      {
        label: 'Hair Pieces',
        items: ['Toupees', 'Partial Pieces', 'Crown Pieces'],
      },
      {
        label: 'Hair Care',
        items: ['Scalp Treatments', 'Hair Regrowth', 'Strengthening Shampoos'],
      },
      {
        label: 'Application & Maintenance',
        items: ['Tapes & Adhesives', 'Removal Solutions', 'Maintenance Kits'],
      },
    ],
  },
  {
    id: 'wholesalers',
    label: 'Wholesalers & Pros',
    icon: '✂',
    color: '#34d399',
    children: [
      {
        label: 'Wholesale Catalog',
        items: ["Women's Hair Systems", "Men's Hair Systems", 'Bulk Hair Pieces', 'Synthetic & Human Hair'],
      },
      {
        label: 'Professional Supplies',
        items: ['Pro-Grade Adhesives', 'Application Tools', 'Removal Kits', 'Maintenance Bundles'],
      },
      {
        label: 'Wholesale Account',
        items: ['Account Registration', 'Bulk Pricing Tiers', 'Order History', 'Net Terms'],
      },
      {
        label: 'Pro Resources',
        items: ['Application Guides', 'Video Tutorials', 'Product Certifications', 'Client Consultation Sheets'],
      },
    ],
  },
]

// ── Shared nav items (both audiences) ────────────────────────────────────────

const sharedNav = ['Accessories', 'Sale / Clearance', 'Blog & Education', 'Find a Pro / Studio Locator']

// ── Component ─────────────────────────────────────────────────────────────────

export default function IAPage() {
  const [openCurrentItem, setOpenCurrentItem] = useState<string | null>(null)
  const [openProposedSection, setOpenProposedSection] = useState<string | null>(null)

  const toggleCurrent = (label: string) =>
    setOpenCurrentItem((prev) => (prev === label ? null : label))

  const toggleProposed = (id: string) =>
    setOpenProposedSection((prev) => (prev === id ? null : id))

  return (
    <div className="ia-page">
      {/* ── Header ── */}
      <header className="ia-header">
        <div className="ia-header-inner">
          <p className="ia-header-eyebrow">UX Planning</p>
          <h1 className="ia-header-title">Hairloss.com Website Flow</h1>
          <p className="ia-header-subtitle">
            Information Architecture &amp; User Flow Mapping
          </p>
        </div>
      </header>

      <main className="ia-main">
        {/* ── Section 1: Current IA ── */}
        <section className="ia-section">
          <div className="ia-section-label">
            <span className="ia-badge ia-badge--current">Current</span>
            <h2>Existing Navigation Structure</h2>
            <p className="ia-section-desc">
              The current site organises all content under five top-level nav items, each with
              dropdown sub-pages. There is no distinction between end consumers and trade
              (wholesale) buyers.
            </p>
          </div>

          <div className="ia-current-grid">
            {currentNav.map((item) => {
              const isOpen = openCurrentItem === item.label
              return (
                <div key={item.label} className={`ia-nav-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="ia-nav-card__header"
                    onClick={() => toggleCurrent(item.label)}
                    aria-expanded={isOpen}
                  >
                    <span className="ia-nav-card__label">{item.label}</span>
                    <span className="ia-nav-card__chevron">{isOpen ? '▲' : '▼'}</span>
                  </button>
                  {isOpen && (
                    <ul className="ia-nav-card__list">
                      {item.children.map((child) => (
                        <li key={child}>{child}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>

          <div className="ia-problem-box">
            <strong>Problem:</strong> A 45-year-old woman experiencing hair thinning and a
            professional barber restocking supplies land on the same homepage with identical
            navigation — creating friction for both audiences.
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="ia-divider">
          <span>↓ Proposed Redesign</span>
        </div>

        {/* ── Section 2: Audience split ── */}
        <section className="ia-section">
          <div className="ia-section-label">
            <span className="ia-badge ia-badge--new">Proposed</span>
            <h2>Audience-First Information Architecture</h2>
            <p className="ia-section-desc">
              Split the site by user type at the homepage level. Each audience gets a tailored
              navigation path, language, and product focus.
            </p>
          </div>

          {/* Audience entry point diagram */}
          <div className="ia-entry-diagram">
            <div className="ia-entry-root">
              <div className="ia-entry-root__label">Hairloss.com</div>
              <div className="ia-entry-root__sub">Homepage — "Who are you shopping for?"</div>
            </div>
            <div className="ia-entry-connectors">
              <div className="ia-entry-connector ia-entry-connector--left" />
              <div className="ia-entry-connector ia-entry-connector--right" />
            </div>
            <div className="ia-entry-paths">
              <div className="ia-entry-path ia-entry-path--consumer">
                <div className="ia-entry-path__icon">👤</div>
                <div className="ia-entry-path__title">For You</div>
                <div className="ia-entry-path__desc">
                  Personal use — men &amp; women 40+ experiencing hair thinning or loss
                </div>
              </div>
              <div className="ia-entry-path ia-entry-path--wholesale">
                <div className="ia-entry-path__icon">✂️</div>
                <div className="ia-entry-path__title">For Professionals</div>
                <div className="ia-entry-path__desc">
                  Wholesale — stylists, barbers &amp; hair replacement studios
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Proposed IA detail ── */}
        <section className="ia-section">
          <div className="ia-section-label">
            <h2>Proposed Navigation by Audience</h2>
            <p className="ia-section-desc">
              Click an audience to explore its navigation structure.
            </p>
          </div>

          <div className="ia-proposed-grid">
            {proposedIA.map((section) => {
              const isOpen = openProposedSection === section.id
              return (
                <div
                  key={section.id}
                  className={`ia-proposed-card ${isOpen ? 'is-open' : ''}`}
                  style={{ '--accent': section.color } as React.CSSProperties}
                >
                  <button
                    className="ia-proposed-card__header"
                    onClick={() => toggleProposed(section.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="ia-proposed-card__icon">{section.icon}</span>
                    <span className="ia-proposed-card__label">{section.label}</span>
                    <span className="ia-proposed-card__chevron">{isOpen ? '▲' : '▼'}</span>
                  </button>

                  {isOpen && (
                    <div className="ia-proposed-card__body">
                      {section.children.map((group) => (
                        <div key={group.label} className="ia-proposed-group">
                          <h4 className="ia-proposed-group__title">{group.label}</h4>
                          <ul className="ia-proposed-group__list">
                            {group.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Section 4: Shared nav ── */}
        <section className="ia-section">
          <div className="ia-section-label">
            <h2>Shared Navigation (All Audiences)</h2>
            <p className="ia-section-desc">
              These sections appear in both consumer and wholesale experiences.
            </p>
          </div>
          <div className="ia-shared-grid">
            {sharedNav.map((item) => (
              <div key={item} className="ia-shared-card">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 5: User flow summary ── */}
        <section className="ia-section">
          <div className="ia-section-label">
            <span className="ia-badge ia-badge--flow">User Flows</span>
            <h2>Key User Flows — Next Steps</h2>
          </div>
          <div className="ia-flows-grid">
            <div className="ia-flow-card">
              <div className="ia-flow-card__num">01</div>
              <h3>Consumer Discovery Flow</h3>
              <ol>
                <li>Homepage → "For You"</li>
                <li>Gender selector (Women / Men)</li>
                <li>Concern selector (Thinning / Full Loss / Extensions)</li>
                <li>Product listing → PDP</li>
                <li>Add to cart → Checkout</li>
              </ol>
            </div>
            <div className="ia-flow-card">
              <div className="ia-flow-card__num">02</div>
              <h3>Wholesale Onboarding Flow</h3>
              <ol>
                <li>Homepage → "For Professionals"</li>
                <li>Create wholesale account</li>
                <li>Browse wholesale catalog</li>
                <li>Bulk product selection</li>
                <li>Net terms / bulk checkout</li>
              </ol>
            </div>
            <div className="ia-flow-card">
              <div className="ia-flow-card__num">03</div>
              <h3>Returning Consumer Flow</h3>
              <ol>
                <li>Homepage → "For You"</li>
                <li>Log in → saved profile</li>
                <li>Reorder previous solution</li>
                <li>Or explore new products</li>
                <li>Loyalty rewards at checkout</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer className="ia-footer">
        Hairloss.com · IA &amp; User Flow Planning · {new Date().getFullYear()}
      </footer>
    </div>
  )
}
