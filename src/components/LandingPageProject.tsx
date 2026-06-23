import './CampaignPage.css'
import './LandingPageProject.css'

interface CostRow {
  tool: string
  use: string
  monthly: number
}

const costs: CostRow[] = [
  { tool: 'Website Builder & Security', use: 'Builder platform + security and maintenance', monthly: 80 },
  { tool: 'Vercel (Pro Plan)', use: 'Hosting + automatic deploys for both sites', monthly: 20 },
]

const vercelIncluded: { icon: string; title: string; desc: string }[] = [
  { icon: '🌐', title: 'Custom domains + SSL', desc: 'Connect each brand\'s domain with automatic HTTPS — secure out of the box.' },
  { icon: '⚡', title: 'Global edge CDN', desc: 'Pages are served from the edge, so they load fast for visitors anywhere.' },
  { icon: '🔁', title: 'Push-to-publish deploys', desc: 'Every change deploys automatically, with a preview link to review before it goes live.' },
  { icon: '🗂️', title: 'Two projects, one plan', desc: 'Both the NIL and OnRite landing pages run under a single Pro team — no second bill.' },
  { icon: '📈', title: 'Higher limits', desc: 'More bandwidth and build minutes than the free tier — room for traffic and growth.' },
  { icon: '🔒', title: 'Secure by default', desc: 'DDoS protection and HTTPS on everything, managed for us.' },
  { icon: '📊', title: 'Analytics + Speed Insights', desc: 'See traffic and page performance for each landing page.' },
  { icon: '✅', title: '99.99% uptime', desc: 'Reliable, scalable hosting with no servers to maintain.' },
]

const PAGES = 2
const CHARGE_PER_PAGE = 80

const costMonthly = costs.reduce((sum, c) => sum + c.monthly, 0)
const costAnnual = costMonthly * 12
const chargeMonthly = CHARGE_PER_PAGE * PAGES
const chargeAnnual = chargeMonthly * 12
const marginMonthly = chargeMonthly - costMonthly
const marginAnnual = marginMonthly * 12

export default function LandingPageProject() {
  return (
    <div className="lpp-page">

      {/* ── Hero ── */}
      <header className="lpp-hero">
        <div className="lpp-hero__inner">
          <p className="lpp-hero__eyebrow">Cost Breakdown</p>
          <h1 className="lpp-hero__title">Landing Page Project</h1>
          <p className="lpp-hero__subtitle">
            Two landing pages — built, hosted, and maintained in-house.
          </p>
        </div>
      </header>

      <main className="lpp-main">
        {/* Scope */}
        <section className="lpp-scope">
          <div className="lpp-scope__label">Scope</div>
          <div className="lpp-scope__text">
            All NIL men's units and some OnRite men's units — two landing pages.
          </div>
        </section>

        {/* What it costs us */}
        <section>
          <h2 className="lpp-h2">What It Costs Us</h2>
          <div className="lpp-table">
            <div className="lpp-table__head">
              <div>Tool</div>
              <div>What it covers</div>
              <div className="lpp-table__num">Per month</div>
              <div className="lpp-table__num">Per year</div>
            </div>
            {costs.map((c) => (
              <div key={c.tool} className="lpp-table__row">
                <div className="lpp-table__tool">{c.tool}</div>
                <div className="lpp-table__use">{c.use}</div>
                <div className="lpp-table__num">${c.monthly}</div>
                <div className="lpp-table__num">${(c.monthly * 12).toLocaleString()}</div>
              </div>
            ))}
            <div className="lpp-table__row lpp-table__row--total">
              <div className="lpp-table__tool">Total cost</div>
              <div className="lpp-table__use">Both landing pages, shared</div>
              <div className="lpp-table__num">${costMonthly}</div>
              <div className="lpp-table__num">${costAnnual.toLocaleString()}</div>
            </div>
          </div>
          <p className="lpp-fineprint">
            Claude Max is requested separately from New Image Labs and isn't part of this breakdown.
          </p>
        </section>

        {/* Why Vercel */}
        <section>
          <h2 className="lpp-h2">Why Vercel — Pro Plan</h2>
          <p className="lpp-vercel-sub">
            One $20/month Pro plan hosts both the NIL and OnRite landing pages. Here's what it covers and why it's the right fit.
          </p>
          <div className="lpp-features">
            {vercelIncluded.map((f) => (
              <div key={f.title} className="lpp-feature">
                <div className="lpp-feature__icon">{f.icon}</div>
                <div className="lpp-feature__body">
                  <div className="lpp-feature__title">{f.title}</div>
                  <div className="lpp-feature__desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="lpp-why">
            <strong>Why Vercel:</strong> both landing pages live under one Pro plan, so we push to publish,
            preview every change before it's live, and get fast, secure, auto-scaling hosting — without
            managing any servers or paying for hosting twice.
          </div>
        </section>

        {/* What we charge */}
        <section>
          <h2 className="lpp-h2">What We Charge</h2>
          <div className="lpp-charge">
            <div className="lpp-charge__rate">
              <span className="lpp-charge__amount">$80</span>
              <span className="lpp-charge__unit">/ month per landing page</span>
            </div>
            <div className="lpp-charge__math">
              ${CHARGE_PER_PAGE} × {PAGES} landing pages = <strong>${chargeMonthly}/month</strong> (${chargeAnnual.toLocaleString()}/year)
            </div>
          </div>
        </section>

        {/* Totals */}
        <section className="lpp-totals">
          <div className="lpp-total-card">
            <div className="lpp-total-card__num">${costMonthly}</div>
            <div className="lpp-total-card__label">cost / month</div>
            <div className="lpp-total-card__sub">builder + hosting</div>
          </div>
          <div className="lpp-total-card lpp-total-card--alt">
            <div className="lpp-total-card__num">${chargeMonthly}</div>
            <div className="lpp-total-card__label">charged / month</div>
            <div className="lpp-total-card__sub">2 pages × $80</div>
          </div>
          <div className="lpp-total-card lpp-total-card--margin">
            <div className="lpp-total-card__num">${marginMonthly}</div>
            <div className="lpp-total-card__label">margin / month</div>
            <div className="lpp-total-card__sub">${marginAnnual.toLocaleString()}/year</div>
          </div>
        </section>

        {/* Note */}
        <section className="lpp-note">
          <strong>Still finalizing:</strong> the charge model is a work in progress. Right now it's
          <strong> $80/month per landing page</strong> — ${chargeMonthly}/month for both — against a
          ${costMonthly}/month tooling cost (website builder &amp; security + Vercel), for a
          ${marginMonthly}/month margin.
        </section>
      </main>

      <footer className="cp-footer">
        Hairloss.com · Landing Page Project · Cost Breakdown
      </footer>
    </div>
  )
}
