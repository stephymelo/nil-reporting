import { useState } from 'react'
import './SalesPRCampaign.css'
import { emails, accountWorkflows, emailTrackMeta, type EmailTrack } from './PRCampaignPage'
import EmailMock from './EmailMock'
import PostMock from './PostMock'
import { socialPosts, postingSchedule } from './socialPlan'

// ── Data ─────────────────────────────────────────────────────────────────────

const flowSteps: { kind: 'date' | 'action'; date?: string; label: string; detail: string }[] = [
  { kind: 'date', date: 'Jul 1', label: 'PR campaign emails go out', detail: 'Separate sequences to New Image Labs, Onrite & Hairloss.com clients. Posting plan begins.' },
  { kind: 'action', label: 'Keep your regular calls', detail: 'Mention the move to Hairloss.com during your normal conversations — no need to mass-call.' },
  { kind: 'action', label: 'Redirect to the Hairloss.com rep', detail: 'Send clients with online-ordering / Hairloss.com questions to the dedicated rep.' },
  { kind: 'date', date: 'Jul 26', label: 'Last day to order on New Image Labs', detail: 'NIL online ordering closes.' },
  { kind: 'date', date: 'Jul 27', label: 'Migration + welcome email', detail: 'Accounts & orders migrate. 10% off the first online order.' },
  { kind: 'date', date: 'Jul 29', label: 'Whole sales team briefing', detail: 'Team briefed; full posting plan locked.' },
  { kind: 'date', date: 'Jul 30', label: 'Pricing hidden + TressAllure removed', detail: 'Hair-unit pricing moves behind login.' },
  { kind: 'date', date: 'Aug 3', label: 'Launch — everything on Hairloss.com', detail: 'NIL returns as Hairloss.com. Order online, all in one place.' },
]

const phases: { tag: string; when: string; title: string; desc: string; imports?: string }[] = [
  { tag: 'Phase 1', when: 'Live Aug 3', title: 'Launch Products', desc: 'All NIL men\'s units, some Onrite men\'s units, women\'s Onrite units, Permarite adhesives, and the Jorgen line.', imports: 'Importing customers from New Image Labs.' },
  { tag: 'Phase 2', when: 'After Aug 3', title: 'Progen + Rest of Onrite', desc: 'Progen wholesale pricing and the remaining Onrite products.', imports: 'Importing customers from Progen. Onrite customers — TBD.' },
  { tag: 'Phase 3', when: 'October', title: 'Custom Orders Online', desc: 'Customers place their custom orders online themselves.' },
]

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

  const [postIdx, setPostIdx] = useState(0)
  const post = socialPosts[postIdx]
  const prevPost = () => setPostIdx((i) => (i - 1 + socialPosts.length) % socialPosts.length)
  const nextPost = () => setPostIdx((i) => (i + 1) % socialPosts.length)

  return (
    <div className="spr-deck">
      {/* 1 — Title */}
      <section className="spr-slide spr-slide--hero">
        <div className="spr-num">01 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow spr-eyebrow--light">Sales Team Briefing</p>
          <h1 className="spr-hero-title">
            New Image Labs + Onrite<br />
            <span>→ Hairloss.com</span>
          </h1>
          <p className="spr-hero-sub">PR Campaign &amp; Posting Plan</p>
          <div className="spr-hero-dates">June – August 2026 · Launch Aug 3</div>
        </div>
      </section>

      {/* 2 — What's happening */}
      <section className="spr-slide">
        <div className="spr-num">02 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">The Move</p>
          <h2 className="spr-title">What's happening</h2>
          <ul className="spr-points">
            <li>New Image Labs and Onrite are moving onto <strong>one platform — Hairloss.com</strong>.</li>
            <li>The <strong>landing pages stay up</strong> — it's <strong>online shopping</strong> that moves to Hairloss.com.</li>
            <li>Same pricing tiers. Same products. One place to order.</li>
            <li>The NIL website goes offline for maintenance at the <strong>end of the day Friday, July 31</strong>.</li>
            <li>New Image Labs' full catalog — plus <strong>select Onrite products, with more to come</strong> — is on Hairloss.com starting <strong>Monday, Aug 3</strong>.</li>
          </ul>
          <img className="spr-img" src="/hl-homepage.png" alt="Hairloss.com homepage" />
        </div>
      </section>

      {/* 3 — Phases */}
      <section className="spr-slide spr-slide--tint">
        <div className="spr-num">03 / 11</div>
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

      {/* 4 — The message */}
      <section className="spr-slide">
        <div className="spr-num">04 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">The Message</p>
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

      {/* 5 — Flow & key dates (diagram) */}
      <section className="spr-slide spr-slide--tall spr-slide--tint">
        <div className="spr-num">05 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Flow &amp; Dates</p>
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
                {i < flowSteps.length - 1 && <div className="spr-fc-arrow" aria-hidden="true">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — What we're posting */}
      <section className="spr-slide spr-slide--tall">
        <div className="spr-num">06 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Social</p>
          <h2 className="spr-title">What we're posting</h2>
          <p className="spr-note">One post a week from July 1 to launch — copy only, designs come later. Click through the sample posts below.</p>

          <div className="spr-sched-row">
            {postingSchedule.map((w) => (
              <div key={w.week} className="spr-sched">
                <div className="spr-sched__week">{w.week}</div>
                <ul>
                  {w.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="spr-carousel">
            <div className="spr-carousel__bar">
              <button className="spr-cbtn" onClick={prevPost} aria-label="Previous post">←</button>
              <div className="spr-carousel__meta">
                <span className="spr-email__num">{post.label}</span>
                <span className="spr-email__send">{post.when}</span>
              </div>
              <button className="spr-cbtn" onClick={nextPost} aria-label="Next post">→</button>
            </div>

            <PostMock post={post} />

            <div className="spr-dots">
              {socialPosts.map((p, i) => (
                <button
                  key={p.id}
                  className={`spr-dot ${i === postIdx ? 'is-active' : ''}`}
                  onClick={() => setPostIdx(i)}
                  aria-label={`Go to post ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Your role */}
      <section className="spr-slide spr-slide--tint">
        <div className="spr-num">07 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales</p>
          <h2 className="spr-title">Your role</h2>
          <ul className="spr-points">
            <li><strong>One full-time rep</strong> owns everything Hairloss.com — all leads (retail + B2B), onboardings, and orders. The team redirects clients to this rep.</li>
            <li>Open with reassurance: <strong>same pricing tier, same products, same sales consultant</strong> — nothing they rely on changes.</li>
            <li>Explain accounts: their rep creates the account; they get an <strong>activation email from Hairloss.com</strong> and sign in with that same email — <strong>passwordless</strong>, via a one-time code (no password to set).</li>
            <li>Be clear on the dates: online ordering on the New Image Labs site runs <strong>through July 26</strong>. The NIL website is then unavailable until it's back on <strong>August 3</strong> — the launch of NIL &amp; Onrite on Hairloss.com for purchasing.</li>
            <li>Incentive: <strong>every customer gets 10% off their first online order on Hairloss.com</strong>.</li>
            <li>A <strong>script + FAQ PDF</strong> (English &amp; Español) goes to the team so everyone answers questions the same way.</li>
            <li>Mention the move when you're <strong>on the phone</strong> with a customer — no need to mass-call. We're sending a mass email; just bring it up during your normal calls.</li>
          </ul>
        </div>
      </section>

      {/* 8 — The Hairloss.com sales rep */}
      <section className="spr-slide">
        <div className="spr-num">08 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales Team</p>
          <h2 className="spr-title">The Hairloss.com sales rep</h2>
          <p className="spr-note">One full-time rep owns everything Hairloss.com. Redirect your clients to this rep to learn how to purchase online.</p>
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

      {/* 9 — Account workflows */}
      <section className="spr-slide spr-slide--tint">
        <div className="spr-num">09 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Accounts</p>
          <h2 className="spr-title">How accounts get created</h2>
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

      {/* 10 — Email campaign intro */}
      <section className="spr-slide">
        <div className="spr-num">10 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Email Campaign</p>
          <h2 className="spr-title">Emails by audience</h2>
          <p className="spr-note">Three separate sequences — New Image Labs clients, Onrite clients, and Hairloss.com customers. Each gets its own message.</p>
          <div className="spr-email-tracks">
            {(['nil', 'onrite', 'hairloss'] as const).map((track) => (
              <div key={track} className="spr-email-trackgroup">
                <div className="spr-email-trackgroup__label">{emailTrackMeta[track].label}</div>
                <div className="spr-email-overview">
                  {emails.filter((em) => em.track === track).map((e) => (
                    <div key={`${e.track}-${e.num}`} className="spr-email-row">
                      <span className="spr-email-row__num">{emailTrackMeta[e.track].short} · {e.num}</span>
                      <span className="spr-email-row__send">{e.send}</span>
                      <span className="spr-email-row__subject">{e.subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Email details (carousel) */}
      <section className="spr-slide spr-slide--tall spr-slide--tint">
        <div className="spr-num">11 / 11</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Email Campaign</p>
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
