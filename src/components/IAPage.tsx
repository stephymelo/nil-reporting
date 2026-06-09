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
    id: 'for-women',
    label: 'For Women',
    icon: '♀',
    color: '#c084fc',
    children: [
      {
        label: 'Shop by Base',
        items: ['Wigs', 'Toppers'],
      },
      {
        label: 'Shop by Hair Type',
        items: ['Human Hair', 'Synthetic Hair'],
      },
      {
        label: 'Hair Fibers',
        items: ['Hair Fibers', 'Fiber Accessories'],
      },
      {
        label: 'Brands',
        items: ['TressAllure', 'Hairloss.com'],
      },
    ],
  },
  {
    id: 'for-men',
    label: 'For Men',
    icon: '♂',
    color: '#60a5fa',
    children: [
      {
        label: 'Shop by Base',
        items: ['Skin Base', 'Lace Base', 'Fine Mono Base'],
      },
      {
        label: 'Shop by Hair Loss Area',
        items: ['Top of the Head', 'Full Cap'],
      },
      {
        label: 'Hair Fibers',
        items: ['Hair Fibers', 'Fiber Accessories'],
      },
      {
        label: 'Brands',
        items: ['Hairloss.com'],
      },
    ],
  },
  {
    id: 'hair-system-application',
    label: 'Hair System Application',
    icon: '🧰',
    color: '#a78bfa',
    children: [
      {
        label: 'Adhesives',
        items: ['Tapes', 'Liquid Adhesives', 'Hard Bonds'],
      },
      {
        label: 'Kits & Bundles',
        items: ['Application Kits', 'Starter Kits', 'Barber Kits'],
      },
      {
        label: 'Removers',
        items: ['Adhesive Removers', 'Cleaners'],
      },
    ],
  },
  {
    id: 'accessories-hair-care',
    label: 'Accessories & Hair Care',
    icon: '🧴',
    color: '#34d399',
    children: [
      {
        label: 'Tools',
        items: ['Combs & Brushes', 'Heat Styling Tools', 'Clips & Pins'],
      },
      {
        label: 'Human Hair Care',
        items: ['Shampoo', 'Conditioner', 'Serums, Oils & Lotions', 'Bundles'],
      },
      {
        label: 'Wig Care',
        items: ['Wig Shampoo', 'Wig Conditioner', 'Wig Stand & Storage'],
      },
    ],
  },
]

// ── Accessories restructure comparison data ──────────────────────────────────

interface AccessoryItem {
  label: string
  isNew?: boolean
}

interface AccessoryGroup {
  label: string
  items: AccessoryItem[]
  changeType?: 'renamed' | 'split' | 'unchanged' | 'promoted'
  changeNote?: string
}

interface TopLevelNav {
  label: string
  groups: AccessoryGroup[]
  changeType?: 'promoted' | 'renamed' | 'unchanged'
  changeNote?: string
}

// Current: everything buried under a single "Accessories" nav item
const currentAccessories: { label: string; items: string[] }[] = [
  {
    label: 'Hair Unit Application',
    items: ['Application Kit', 'Tape', 'Liquid Adhesive'],
  },
  {
    label: 'Wig Care',
    items: ['Human Hair Wig', 'Synthetic Wig'],
  },
  {
    label: 'Hair Styling Tools',
    items: ['Brushes', 'Styling Tools'],
  },
  {
    label: 'Hair Fibers',
    items: ['Hair Fibers'],
  },
]

// Proposed: split into TWO distinct top-level nav items
const proposedTopLevels: TopLevelNav[] = [
  {
    label: 'Hair System Application',
    changeType: 'promoted',
    changeNote: 'Promoted to its own top-level nav — application is a key task, not an "accessory"',
    groups: [
      {
        label: 'Adhesives',
        changeType: 'split',
        items: [
          { label: 'Tapes' },
          { label: 'Liquid Adhesives' },
          { label: 'Hard Bonds', isNew: true },
        ],
      },
      {
        label: 'Kits & Bundles',
        changeType: 'renamed',
        items: [
          { label: 'Application Kits' },
          { label: 'Starter Kits', isNew: true },
          { label: 'Barber Kits', isNew: true },
        ],
      },
      {
        label: 'Removers',
        changeType: 'split',
        items: [
          { label: 'Adhesive Removers', isNew: true },
          { label: 'Cleaners', isNew: true },
        ],
      },
    ],
  },
  {
    label: 'Accessories & Hair Care',
    changeType: 'renamed',
    changeNote: 'Merged "Accessories" + "Hair Care" — care products now live next to the tools that use them',
    groups: [
      {
        label: 'Tools',
        changeType: 'renamed',
        items: [
          { label: 'Combs & Brushes' },
          { label: 'Heat Styling Tools' },
          { label: 'Clips & Pins', isNew: true },
        ],
      },
      {
        label: 'Human Hair Care',
        changeType: 'split',
        items: [
          { label: 'Shampoo' },
          { label: 'Conditioner' },
          { label: 'Serums, Oils & Lotions', isNew: true },
          { label: 'Bundles', isNew: true },
        ],
      },
      {
        label: 'Wig Care',
        changeType: 'unchanged',
        items: [
          { label: 'Wig Shampoo' },
          { label: 'Wig Conditioner' },
          { label: 'Wig Stand & Storage', isNew: true },
        ],
      },
    ],
  },
]

// ── Shared nav items (both audiences) ────────────────────────────────────────

// ── New proposed nav additions (beyond the four product top-levels) ──────────

interface NavAddition {
  label: string
  description: string
  audience: 'both' | 'consumer' | 'pro'
  isNew: boolean
}

const proposedNavAdditions: NavAddition[] = [
  {
    label: 'Education',
    description: 'Hair loss guides, application how-tos, care routines, causes & treatments',
    audience: 'both',
    isNew: true,
  },
  {
    label: 'Help Me Choose',
    description: 'Guided quiz → base, hair type, coverage level. Reduces decision anxiety for 40+ first-time buyers',
    audience: 'consumer',
    isNew: true,
  },
  {
    label: 'Text A Stylist',
    description: 'Direct SMS consultation — low-friction alternative to a phone call for a hesitant audience',
    audience: 'both',
    isNew: true,
  },
  {
    label: 'Community',
    description: 'Before/afters, testimonials, user stories — trust-building for a sensitive purchase',
    audience: 'consumer',
    isNew: true,
  },
  {
    label: 'Sale',
    description: 'Clearance, bundle deals, last chance',
    audience: 'both',
    isNew: false,
  },
]

// ── Footer comparison data ────────────────────────────────────────────────────

interface FooterColumn {
  title: string
  items: string[]
  isNew?: boolean
}

const currentFooter: FooterColumn[] = [
  {
    title: 'Hairloss.com',
    items: ['South Florida-based and rooted in the U.S., we offer the highest quality solutions for hair loss from trusted brands.'],
  },
  {
    title: 'About',
    items: ['About Us', 'Blog', 'Ambassador Program', 'Affiliate Program', 'Affiliate Login', 'Salons and Stylists'],
  },
  {
    title: 'Shop',
    items: ['Hair Extensions', 'Hair Fibers', 'Hair & Scalp Care', 'Hair Tools & Accessories'],
  },
  {
    title: 'Support',
    items: ['Shipping & Refund Policy', 'Returns', 'Privacy Policy', 'Terms of Service', 'Contact Us'],
  },
]

const proposedFooter: FooterColumn[] = [
  {
    title: 'Hairloss.com',
    items: ['South Florida-based and rooted in the U.S., we offer the highest quality solutions for hair loss from trusted brands.'],
  },
  {
    title: 'For Professionals',
    isNew: true,
    items: [
      'Wholesale Account',
      'Salons & Stylists',
      'Barber Kits',
      'Pro Application Guides',
      'Apply for Net Terms',
    ],
  },
  {
    title: 'Shop',
    items: [
      'For Women',
      'For Men',
      'Hair System Application',
      'Accessories & Hair Care',
      'Hair Fibers',
      'Sale',
    ],
  },
  {
    title: 'Learn',
    isNew: true,
    items: ['Education Hub', 'Help Me Choose', 'Blog', 'Video Tutorials', 'Before & After'],
  },
  {
    title: 'Company',
    items: ['About Us', 'Ambassador Program', 'Affiliate Program', 'Affiliate Login', 'Contact Us'],
  },
  {
    title: 'Support',
    items: ['Shipping & Refund Policy', 'Returns', 'Privacy Policy', 'Terms of Service'],
  },
]

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

        {/* ── Section: Accessories Restructure ── */}
        <section className="ia-section">
          <div className="ia-section-label">
            <span className="ia-badge ia-badge--accessories">Accessories Deep-Dive</span>
            <h2>Restructuring "Accessories" for Clarity</h2>
            <p className="ia-section-desc">
              The current "Accessories" umbrella buries key decision points — users hunting for
              tape vs. liquid adhesive have to dig through a mixed category. Splitting it into
              focused, named sections reduces friction.
            </p>
          </div>

          <div className="ia-acc-comparison">
            {/* Current column */}
            <div className="ia-acc-col">
              <div className="ia-acc-col__header ia-acc-col__header--current">
                <span className="ia-badge ia-badge--current">Current</span>
                <span className="ia-acc-col__title">"Accessories" (one catch-all)</span>
              </div>
              <div className="ia-acc-col__body">
                {currentAccessories.map((group) => (
                  <div key={group.label} className="ia-acc-group ia-acc-group--current">
                    <div className="ia-acc-group__label">{group.label}</div>
                    <ul className="ia-acc-group__list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="ia-acc-arrow">→</div>

            {/* Proposed column - now two promoted top-level nav items */}
            <div className="ia-acc-col">
              <div className="ia-acc-col__header ia-acc-col__header--proposed">
                <span className="ia-badge ia-badge--new">Proposed</span>
                <span className="ia-acc-col__title">Two focused top-level nav items</span>
              </div>
              <div className="ia-acc-col__body">
                {proposedTopLevels.map((topLevel) => (
                  <div key={topLevel.label} className="ia-acc-toplevel">
                    <div className="ia-acc-toplevel__header">
                      <span className="ia-acc-toplevel__label">{topLevel.label}</span>
                      {topLevel.changeType === 'promoted' && (
                        <span className="ia-acc-tag ia-acc-tag--promoted">Promoted to top-level</span>
                      )}
                      {topLevel.changeType === 'renamed' && (
                        <span className="ia-acc-tag ia-acc-tag--renamed">Renamed & merged</span>
                      )}
                    </div>
                    {topLevel.changeNote && (
                      <p className="ia-acc-toplevel__note">{topLevel.changeNote}</p>
                    )}
                    <div className="ia-acc-toplevel__groups">
                      {topLevel.groups.map((group) => (
                        <div
                          key={group.label}
                          className={`ia-acc-group ia-acc-group--proposed ia-acc-group--${group.changeType ?? 'unchanged'}`}
                        >
                          <div className="ia-acc-group__label">{group.label}</div>
                          <ul className="ia-acc-group__list">
                            {group.items.map((item) => (
                              <li key={item.label} className={item.isNew ? 'is-new' : ''}>
                                {item.label}
                                {item.isNew && <span className="ia-acc-new-dot">New</span>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="ia-acc-legend">
            <span className="ia-acc-legend__item">
              <span className="ia-acc-tag ia-acc-tag--promoted">Promoted</span> Lifted to top-level nav
            </span>
            <span className="ia-acc-legend__item">
              <span className="ia-acc-tag ia-acc-tag--renamed">Renamed</span> Label changed / merged
            </span>
            <span className="ia-acc-legend__item">
              <span className="ia-acc-new-dot">New</span> Item added
            </span>
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

        {/* ── Section 4: New top-level nav additions ── */}
        <section className="ia-section">
          <div className="ia-section-label">
            <span className="ia-badge ia-badge--new">Proposed Additions</span>
            <h2>New Top-Level Nav Items</h2>
            <p className="ia-section-desc">
              Beyond the four product categories, these entries solve specific pain points
              for a hair-loss audience — decision anxiety, trust-building, and education.
              Inspired in part by Luxy Hair's nav patterns.
            </p>
          </div>
          <div className="ia-additions-grid">
            {proposedNavAdditions.map((item) => (
              <div
                key={item.label}
                className={`ia-addition-card ${item.isNew ? 'is-new' : ''}`}
              >
                <div className="ia-addition-card__header">
                  <span className="ia-addition-card__label">{item.label}</span>
                  {item.isNew && <span className="ia-acc-new-dot">New</span>}
                  <span className={`ia-addition-card__audience ia-addition-card__audience--${item.audience}`}>
                    {item.audience === 'both' && 'Both audiences'}
                    {item.audience === 'consumer' && 'Consumer'}
                    {item.audience === 'pro' && 'Pro'}
                  </span>
                </div>
                <p className="ia-addition-card__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section: Footer Restructure ── */}
        <section className="ia-section">
          <div className="ia-section-label">
            <span className="ia-badge ia-badge--accessories">Footer Redesign</span>
            <h2>Footer Restructure — Home for "For Professionals"</h2>
            <p className="ia-section-desc">
              Rather than pushing a wholesale/pro tab into the main nav (which would clutter
              the consumer experience), professionals get a dedicated, prominent footer
              column. A new "Learn" column surfaces education & decision-support content.
            </p>
          </div>

          <div className="ia-footer-compare">
            <div className="ia-footer-mock">
              <div className="ia-footer-mock__label">
                <span className="ia-badge ia-badge--current">Current Footer</span>
              </div>
              <div className="ia-footer-mock__cols ia-footer-mock__cols--current">
                {currentFooter.map((col) => (
                  <div key={col.title} className="ia-footer-col">
                    <div className="ia-footer-col__title">{col.title}</div>
                    <ul className="ia-footer-col__list">
                      {col.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="ia-footer-mock">
              <div className="ia-footer-mock__label">
                <span className="ia-badge ia-badge--new">Proposed Footer</span>
              </div>
              <div className="ia-footer-mock__cols ia-footer-mock__cols--proposed">
                {proposedFooter.map((col) => (
                  <div
                    key={col.title}
                    className={`ia-footer-col ${col.isNew ? 'ia-footer-col--new' : ''}`}
                  >
                    <div className="ia-footer-col__title">
                      {col.title}
                      {col.isNew && <span className="ia-acc-new-dot">New</span>}
                    </div>
                    <ul className="ia-footer-col__list">
                      {col.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
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
        <a href="#/campaign" style={{ color: '#6d28d9', textDecoration: 'none', fontWeight: 600 }}>
          View 3-Month Campaign Plan →
        </a>
        <br />
        <a href="#/pr-campaign" style={{ color: '#6d28d9', textDecoration: 'none', fontWeight: 600 }}>
          View NIL + Onrite Merge — PR Campaign →
        </a>
        <br />
        <a href="#/b2b-policy" style={{ color: '#6d28d9', textDecoration: 'none', fontWeight: 600 }}>
          View Wholesale Account Policy →
        </a>
        <br />
        <a href="#/landing-project" style={{ color: '#6d28d9', textDecoration: 'none', fontWeight: 600 }}>
          View Landing Page Project — Cost Breakdown →
        </a>
        <br />
        Hairloss.com · IA &amp; User Flow Planning · {new Date().getFullYear()}
      </footer>
    </div>
  )
}
