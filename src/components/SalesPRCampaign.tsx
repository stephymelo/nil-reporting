import { useState } from 'react'
import './SalesPRCampaign.css'
import { emails, accountWorkflows, emailTrackMeta, type EmailTrack } from './PRCampaignPage'
import EmailMock from './EmailMock'

// ── Data ─────────────────────────────────────────────────────────────────────

const flowSteps: { kind: 'date' | 'action'; date?: string; label: string; detail: string }[] = [
  { kind: 'date', date: 'Jun 29', label: 'Whole sales team briefing', detail: 'Brief the whole team and walk through the full posting plan before it goes live.' },
  { kind: 'date', date: 'Jun 30', label: 'Pricing hidden + TressAllure removed', detail: 'Hair-unit pricing moves behind login; TressAllure removed. Before the campaign starts.' },
  { kind: 'date', date: 'Jul 1', label: 'Posting plan goes live', detail: 'Weekly social posts begin — plus collab posts (HL × NIL × OnRite) and stories to the blog.' },
  { kind: 'date', date: 'Jul 6', label: 'Outreach emails go out', detail: 'Separate email sequences to New Image Labs, OnRite & Hairloss.com clients about the move.' },
  { kind: 'action', label: 'Keep your regular calls', detail: 'Mention the move to Hairloss.com during your normal conversations — no need to mass-call.' },
  { kind: 'action', label: 'Redirect to the Hairloss.com rep', detail: 'Send clients with online-ordering / Hairloss.com questions to the dedicated rep.' },
  { kind: 'date', date: 'Jul 26', label: 'Last day to order on New Image Labs', detail: 'NIL online ordering closes.' },
  { kind: 'date', date: 'Jul 27', label: 'Migration + welcome email', detail: 'Customer accounts & companies migrate (orders do not). 10% off the first online order.' },
  { kind: 'date', date: 'Jul 31', label: 'NIL site goes offline', detail: 'End of day Friday — the site is unavailable through the weekend.' },
  { kind: 'date', date: 'Aug 3', label: 'Launch — everything on Hairloss.com', detail: 'NIL & OnRite each return as their own landing page that redirects to Hairloss.com. Order online, all in one place.' },
]

const phases: { tag: string; when: string; title: string; desc: string }[] = [
  { tag: 'Phase 1', when: 'Live Aug 3', title: 'Launch Products', desc: 'All NIL men\'s units, some OnRite men\'s units, women\'s OnRite units, Permarite adhesives, and the Jorgen line.' },
  { tag: 'Phase 2', when: 'After Aug 3', title: 'Progen + Rest of OnRite', desc: 'Progen wholesale pricing and the remaining OnRite products.' },
  { tag: 'Phase 3', when: 'End of year', title: 'Custom Orders Online', desc: 'For now, custom orders are duplicated from the NIL system and transferred over manually — until customers can place them online themselves.' },
]

// How a lead becomes a live account — the visible path
const leadFlow: { step: string; label: string; detail: string }[] = [
  { step: '01', label: 'Lead comes in', detail: 'A B2B form on Hairloss.com, or a sales call.' },
  { step: '02', label: 'B2B account created in SAP & Shopify', detail: 'The customer and company are set up in SAP and Shopify.' },
  { step: '03', label: 'Live on Hairloss.com', detail: 'The customer signs in passwordless and sees their pricing.' },
]

// ── Section cover ─────────────────────────────────────────────────────────────

function Cover({ part, title, sub }: { part: string; title: string; sub: string }) {
  return (
    <section className="spr-slide spr-cover">
      <div className="spr-slide__inner">
        <div className="spr-cover__part">{part}</div>
        <h2 className="spr-cover__title">{title}</h2>
        <p className="spr-cover__sub">{sub}</p>
      </div>
    </section>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function SalesPRCampaign() {
  const [emailTrack, setEmailTrack] = useState<EmailTrack>('nil')
  const [emailIdx, setEmailIdx] = useState(0)
  const trackEmails = emails.filter((em) => em.track === emailTrack)
  const e = trackEmails[Math.min(emailIdx, trackEmails.length - 1)]
  const prevEmail = () => setEmailIdx((i) => (i - 1 + trackEmails.length) % trackEmails.length)
  const nextEmail = () => setEmailIdx((i) => (i + 1) % trackEmails.length)
  const pickEmailTrack = (t: EmailTrack) => {
    setEmailTrack(t)
    setEmailIdx(0)
  }

  return (
    <div className="spr-deck">
      {/* Title */}
      <section className="spr-slide spr-slide--hero">
        <div className="spr-slide__inner">
          <p className="spr-hero-eyebrow">Sales Team Briefing</p>
          <h1 className="spr-hero-title">
            New Image Labs + OnRite
            <br />
            <span>are moving to Hairloss.com</span>
          </h1>
          <div className="spr-hero-dates">June – August 2026 · Launch Aug 3</div>
        </div>
      </section>

      {/* What's happening */}
      <section className="spr-slide">
        <div className="spr-num">01</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">The Move</p>
          <h2 className="spr-title">What's happening</h2>
          <ul className="spr-points">
            <li>New Image Labs and OnRite are moving onto <strong>one platform — Hairloss.com</strong>.</li>
            <li>The <strong>landing pages stay up</strong> — it's <strong>online shopping</strong> that moves to Hairloss.com.</li>
            <li>Same pricing tiers. Same products. One place to order.</li>
            <li>The NIL website goes offline for maintenance at the <strong>end of the day Friday, July 31</strong>.</li>
            <li>New Image Labs' full catalog — plus <strong>select OnRite products, with more to come</strong> — is on Hairloss.com starting <strong>Monday, Aug 3</strong>.</li>
          </ul>
          <img className="spr-img" src="/hl-homepage.png" alt="Hairloss.com homepage" />
        </div>
      </section>

      {/* The landing pages stay up */}
      <section className="spr-slide spr-slide--alt">
        <div className="spr-num">02</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">The Move</p>
          <h2 className="spr-title">The landing pages stay up</h2>
          <ul className="spr-points">
            <li>New Image Labs and OnRite each <strong>keep their own website landing page</strong>.</li>
            <li>Each landing page still <strong>shows the catalog</strong>, so clients can browse what we offer.</li>
            <li>To buy, the landing pages <strong>redirect to Hairloss.com</strong> for online purchasing.</li>
            <li>Clients can also still <strong>contact us right from the landing pages</strong> — nothing changes there.</li>
          </ul>
        </div>
      </section>

      {/* Three phases */}
      <section className="spr-slide spr-slide--alt">
        <div className="spr-num">03</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Rollout</p>
          <h2 className="spr-title">Three phases</h2>
          <div className="spr-phases">
            {phases.map((p) => (
              <div key={p.tag} className="spr-phase">
                <div className="spr-phase__top">
                  <span className="spr-phase__tag">{p.tag}</span>
                  <span className="spr-phase__when">{p.when}</span>
                </div>
                <div className="spr-phase__title">{p.title}</div>
                <div className="spr-phase__desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PART 01 — SALES TEAM ════ */}
      <Cover part="Part 01" title="For the Sales Team" sub="Your role, what to tell clients, and how the next two months flow." />

      {/* How we talk about it */}
      <section className="spr-slide">
        <div className="spr-num">04</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales Team</p>
          <h2 className="spr-title">How we talk about it</h2>
          <div className="spr-two-col">
            <div className="spr-card">
              <div className="spr-card__label">Stays the same</div>
              <ul>
                <li>Pricing tier &amp; products</li>
                <li>The team they work with</li>
                <li>An American company &amp; website</li>
                <li>50+ years of trust</li>
              </ul>
            </div>
            <div className="spr-card">
              <div className="spr-card__label">Gets better</div>
              <ul>
                <li>One website with the rest of our products + B2B pricing — easier to purchase</li>
                <li>An established social media presence driving customers</li>
                <li>Promotions we can run for specific pricing tiers</li>
                <li>More educational content</li>
              </ul>
            </div>
          </div>
          <p className="spr-note">Lead with what stays the same, then what gets better. We're making it easier — not changing who we are.</p>
        </div>
      </section>

      {/* The Hairloss.com sales rep (BEFORE your role) */}
      <section className="spr-slide spr-slide--alt">
        <div className="spr-num">05</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales Team</p>
          <h2 className="spr-title">The Hairloss.com sales rep</h2>
          <p className="spr-note">One full-time rep owns everything Hairloss.com. Redirect your clients to this rep to learn how to purchase online, to troubleshoot website orders, and for anything else related to the website.</p>
          <div className="spr-card">
            <div className="spr-card__label">Owns everything HL.com</div>
            <ul>
              <li>Manages all leads (retail + B2B), the contact form &amp; inbox chat</li>
              <li>Onboards customers — 10% off the first online order on Hairloss.com</li>
              <li>Reviews B2B forms, creates accounts, assigns catalog price + territory</li>
              <li>Manages retail, online orders &amp; any other HL.com customer issue</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Your role */}
      <section className="spr-slide">
        <div className="spr-num">06</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales Team</p>
          <h2 className="spr-title">Your role</h2>
          <ul className="spr-points">
            <li>Open with reassurance: <strong>same pricing tier, same products, same sales consultant</strong> — nothing they rely on changes.</li>
            <li>Explain accounts: their rep creates the account; they get an <strong>activation email from Hairloss.com</strong> and sign in with that same email — <strong>passwordless</strong>, via a one-time code.</li>
            <li>Use the <strong>script &amp; FAQs</strong> (English &amp; Español) to answer client questions — so everyone gives the same answers.</li>
          </ul>
        </div>
      </section>

      {/* What to tell clients */}
      <section className="spr-slide spr-slide--alt">
        <div className="spr-num">07</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales Team</p>
          <h2 className="spr-title">What to tell clients</h2>
          <ul className="spr-points">
            <li>Be clear on the dates: online ordering on the New Image Labs site runs <strong>through July 26</strong>. The site goes offline at the end of the day <strong>Friday, July 31</strong> and is unavailable through the weekend. On <strong>Monday, August 3</strong>, NIL &amp; OnRite each come back as their own landing page that redirects to Hairloss.com for purchasing.</li>
            <li>Incentive: <strong>every customer gets 10% off their first online order on Hairloss.com</strong>.</li>
            <li>A <strong>script + FAQ PDF</strong> (English &amp; Español) goes to the team so everyone answers questions the same way.</li>
            <li>Mention the move when you're <strong>on the phone</strong> — no need to mass-call. We're sending a mass email; just bring it up during your normal calls.</li>
          </ul>
        </div>
      </section>

      {/* It still counts as your sale (reassurance) */}
      <section className="spr-slide">
        <div className="spr-num">08</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales Team</p>
          <h2 className="spr-title">It still counts as your sale</h2>
          <p className="spr-statement">This works <strong>with you</strong>, not against you. Promote Hairloss.com with confidence — nothing is being taken away.</p>
          <div className="spr-two-col">
            <div className="spr-card">
              <div className="spr-card__label">Still your numbers</div>
              <ul>
                <li>Online orders still count toward your sales budget</li>
                <li>Nothing is taken away from you — you keep the credit</li>
                <li>We're working with you, so you can promote it comfortably</li>
              </ul>
            </div>
            <div className="spr-card">
              <div className="spr-card__label">More ways to sell</div>
              <ul>
                <li>It's <strong>both retail and wholesale</strong> — not one or the other</li>
                <li>An easier place to point clients, with promotions to offer</li>
                <li>More reach driving customers your way</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flow & dates — AFTER the sales team slides */}
      <section className="spr-slide spr-slide--alt">
        <div className="spr-num">09</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales Team</p>
          <h2 className="spr-title">How it flows</h2>
          <div className="spr-flow-legend">
            <span><span className="spr-flow-dot spr-flow-dot--date" /> Key date</span>
            <span><span className="spr-flow-dot spr-flow-dot--action" /> What you do</span>
          </div>
          <div className="spr-flowchart">
            {flowSteps.map((s, i) => (
              <div key={s.label} className="spr-fc">
                <div className={`spr-fc-node spr-fc-node--${s.kind}`}>
                  {s.date && <span className="spr-fc-date">{s.date}</span>}
                  <span className="spr-fc-label">{s.label}</span>
                  <span className="spr-fc-detail">{s.detail}</span>
                </div>
                {i < flowSteps.length - 1 && <div className="spr-fc-arrow" aria-hidden="true">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PART 02 — ACCOUNTS ════ */}
      <Cover part="Part 02" title="Accounts" sub="How a lead becomes a live account on Hairloss.com." />

      {/* From lead to live account — the visible path */}
      <section className="spr-slide">
        <div className="spr-num">10</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Accounts</p>
          <h2 className="spr-title">From lead to live account</h2>
          <p className="spr-note">Every account follows the same path. Leads come in, the B2B account is created in SAP and Shopify, then it goes live on Hairloss.com.</p>
          <div className="spr-leadflow">
            {leadFlow.map((s, i) => (
              <div key={s.step} className="spr-lf-wrap">
                <div className="spr-lf">
                  <span className="spr-lf__step">{s.step}</span>
                  <span className="spr-lf__label">{s.label}</span>
                  <span className="spr-lf__detail">{s.detail}</span>
                </div>
                {i < leadFlow.length - 1 && <div className="spr-lf-arrow" aria-hidden="true">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three ways an account is created */}
      <section className="spr-slide spr-slide--alt spr-slide--tall">
        <div className="spr-num">11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Accounts</p>
          <h2 className="spr-title">Three ways an account is created</h2>
          <p className="spr-note">Every new account sees retail pricing automatically. There are three ways an account is created:</p>
          <div className="spr-wf-grid">
            {accountWorkflows.map((wf) => (
              <div key={wf.num} className="spr-wf">
                <span className="spr-wf__tag">{wf.num}</span>
                <div className="spr-wf__title">{wf.title}</div>
                <div className="spr-wf__who">{wf.who}</div>
                <ol className="spr-wf__steps">
                  {wf.steps.map((s) => (
                    <li key={s.label}>
                      <strong>{s.label}</strong> — {s.desc}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PART 03 — PR CAMPAIGN ════ */}
      <Cover part="Part 03" title="PR Campaign" sub="The client email sequences — by audience." />

      {/* Emails by audience */}
      <section className="spr-slide">
        <div className="spr-num">12</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">PR Campaign</p>
          <h2 className="spr-title">Emails by audience</h2>
          <p className="spr-note">Three separate sequences — New Image Labs clients, OnRite clients, and Hairloss.com customers. Each gets its own message.</p>
          <div className="spr-email-tracks">
            {(['nil', 'onrite', 'hairloss'] as const).map((track) => (
              <div key={track} className="spr-email-trackgroup">
                <div className="spr-email-trackgroup__label">{emailTrackMeta[track].label}</div>
                <div className="spr-email-overview">
                  {emails.filter((em) => em.track === track).map((em) => (
                    <div key={`${em.track}-${em.num}`} className="spr-email-row">
                      <span className="spr-email-row__num">{emailTrackMeta[em.track].short} · {em.num}</span>
                      <span className="spr-email-row__send">{em.send}</span>
                      <span className="spr-email-row__subject">{em.subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email details (carousel) */}
      <section className="spr-slide spr-slide--alt spr-slide--tall">
        <div className="spr-num">13</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">PR Campaign</p>
          <h2 className="spr-title">When each email sends &amp; what it says</h2>

          <div className="spr-carousel">
            <div className="spr-email-tabs">
              {(['nil', 'onrite', 'hairloss'] as const).map((t) => (
                <button
                  key={t}
                  className={`spr-tab ${emailTrack === t ? 'is-active' : ''}`}
                  onClick={() => pickEmailTrack(t)}
                >
                  {emailTrackMeta[t].label}
                </button>
              ))}
            </div>

            <div className="spr-carousel__bar">
              <button className="spr-cbtn" onClick={prevEmail} aria-label="Previous email">←</button>
              <div className="spr-carousel__meta">
                <span className="spr-email__num">Email {e.num} of {trackEmails.length}</span>
                <span className="spr-email__send">Sends {e.send}</span>
                <span className="spr-email__rel">{e.timing}</span>
              </div>
              <button className="spr-cbtn" onClick={nextEmail} aria-label="Next email">→</button>
            </div>

            <EmailMock email={e} />

            <div className="spr-dots">
              {trackEmails.map((em, i) => (
                <button
                  key={`${em.track}-${em.num}`}
                  className={`spr-dot ${i === emailIdx ? 'is-active' : ''}`}
                  onClick={() => setEmailIdx(i)}
                  aria-label={`Email ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
