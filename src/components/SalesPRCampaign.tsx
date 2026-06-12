import './SalesPRCampaign.css'
import { emails } from './PRCampaignPage'

// ── Image placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({ label, ratio }: { label: string; ratio?: string }) {
  return (
    <div className="spr-imgph" style={ratio ? { aspectRatio: ratio } : undefined}>
      <div className="spr-imgph__icon">🖼</div>
      <div className="spr-imgph__label">{label}</div>
    </div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────

const keyDates: { date: string; title: string; desc: string }[] = [
  { date: 'Mon, Jun 22 · 9 AM', title: 'Staff Training', desc: 'Team trained on the move, accounts, and talking points.' },
  { date: 'Fri, Jun 26', title: 'Hide Pricing + Restructure', desc: 'Hair-unit pricing hidden; Hairloss.com restructured.' },
  { date: 'Wed, Jul 1', title: 'PR Campaign Starts', desc: 'First email goes out + social posting plan begins.' },
  { date: 'Tue, Jul 21', title: 'Migrate Customers', desc: 'Customers, companies & orders moved to Hairloss.com.' },
  { date: 'Sat, Aug 1', title: 'NIL Site Maintenance', desc: 'New Image Labs website offline for the weekend.' },
  { date: 'Mon, Aug 3', title: 'Launch', desc: 'All ordering on Hairloss.com. Landing pages live.' },
]

const phases: { tag: string; when: string; title: string; desc: string }[] = [
  { tag: 'Phase 1', when: 'Live Aug 3', title: 'Launch Products', desc: 'All NIL men\'s units, some Onrite men\'s units, women\'s Onrite units, Permarite adhesives, and the Jorgen line.' },
  { tag: 'Phase 2', when: 'After Aug 3', title: 'Progen + Rest of Onrite', desc: 'Progen wholesale pricing and the remaining Onrite products.' },
  { tag: 'Phase 3', when: 'October', title: 'Custom Orders Online', desc: 'Customers place their custom orders online themselves.' },
]

const posts: { platform: string; when: string }[] = [
  { platform: 'Instagram + Facebook', when: 'Week of July 1' },
  { platform: 'Email + Social', when: 'Week of July 14' },
  { platform: 'Instagram + Facebook', when: 'Launch week' },
]

const emailTiming: Record<number, string> = {
  1: '~5 weeks before launch',
  2: '~3 weeks before launch',
  3: 'Final week before launch',
  4: 'Launch weekend',
  5: 'Launch day',
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function SalesPRCampaign() {
  return (
    <div className="spr-deck">
      {/* 1 — Title */}
      <section className="spr-slide spr-slide--hero">
        <div className="spr-num">01 / 09</div>
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
        <div className="spr-num">02 / 09</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">The Move</p>
          <h2 className="spr-title">What's happening</h2>
          <ul className="spr-points">
            <li>New Image Labs and Onrite are moving onto <strong>one platform — Hairloss.com</strong>.</li>
            <li>Same pricing tiers. Same products. One place to order.</li>
            <li>The NIL website goes offline for maintenance <strong>Saturday, Aug 1</strong>.</li>
            <li>Everything is on Hairloss.com from <strong>Monday, Aug 3</strong>.</li>
          </ul>
          <ImagePlaceholder label="Add image — site / product visual" ratio="16 / 6" />
        </div>
      </section>

      {/* 3 — The message */}
      <section className="spr-slide spr-slide--tint">
        <div className="spr-num">03 / 09</div>
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
                <li>One platform to order</li>
                <li>Easier access to the full catalog</li>
                <li>Promotions &amp; volume pricing in one place</li>
                <li>More educational content</li>
              </ul>
            </div>
          </div>
          <p className="spr-note">Lead with what stays the same, then what gets better. We're making it easier — not changing who we are.</p>
        </div>
      </section>

      {/* 4 — Key dates */}
      <section className="spr-slide">
        <div className="spr-num">04 / 09</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Timeline</p>
          <h2 className="spr-title">Key dates</h2>
          <div className="spr-dates">
            {keyDates.map((d) => (
              <div key={d.title} className="spr-date">
                <div className="spr-date__when">{d.date}</div>
                <div className="spr-date__title">{d.title}</div>
                <div className="spr-date__desc">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Phases */}
      <section className="spr-slide spr-slide--tint">
        <div className="spr-num">05 / 09</div>
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

      {/* 6 — What we're posting */}
      <section className="spr-slide">
        <div className="spr-num">06 / 09</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Social</p>
          <h2 className="spr-title">What we're posting</h2>
          <p className="spr-note">The posting plan starts July 1 to inform customers of the move. Drop the final creatives and captions into the placeholders below.</p>
          <div className="spr-posts">
            {posts.map((post, i) => (
              <div key={i} className="spr-post">
                <ImagePlaceholder label="Add post image" ratio="4 / 5" />
                <div className="spr-post__meta">
                  <span className="spr-post__platform">{post.platform}</span>
                  <span className="spr-post__when">{post.when}</span>
                </div>
                <div className="spr-post__caption">[ Caption goes here ]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Your role */}
      <section className="spr-slide spr-slide--tint">
        <div className="spr-num">07 / 09</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Sales</p>
          <h2 className="spr-title">Your role</h2>
          <ul className="spr-points">
            <li>Two salespeople own the leads — <strong>one retail</strong> (+ stylist/barber leads), <strong>one B2B</strong>.</li>
            <li>Open with reassurance: pricing and products stay the same.</li>
            <li>Explain accounts: created for them, passwordless sign-in by email code.</li>
            <li>Be clear on the dates: maintenance Aug 1, everything on Hairloss.com Aug 3.</li>
            <li>Incentives: <strong>15% off the first order</strong>; B2B leads get <strong>10% off their first online purchase</strong>.</li>
          </ul>
        </div>
      </section>

      {/* 8 — Email campaign intro */}
      <section className="spr-slide">
        <div className="spr-num">08 / 09</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Email Campaign</p>
          <h2 className="spr-title">Five emails to clients</h2>
          <p className="spr-note">Spaced to warm clients up, explain the change, and drive the first sign-in. Full schedule and contents below.</p>
          <div className="spr-email-overview">
            {emails.map((e) => (
              <div key={e.num} className="spr-email-row">
                <span className="spr-email-row__num">Email {e.num}</span>
                <span className="spr-email-row__send">{e.send}</span>
                <span className="spr-email-row__subject">{e.subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Email details (scrolls) */}
      <section className="spr-slide spr-slide--tall spr-slide--tint">
        <div className="spr-num">09 / 09</div>
        <div className="spr-slide__inner">
          <p className="spr-eyebrow">Email Campaign</p>
          <h2 className="spr-title">When each email sends &amp; what it says</h2>
          <div className="spr-emails">
            {emails.map((e) => (
              <div key={e.num} className="spr-email">
                <div className="spr-email__head">
                  <span className="spr-email__num">Email {e.num}</span>
                  <div className="spr-email__timing">
                    <span className="spr-email__send">Sends {e.send}</span>
                    <span className="spr-email__rel">{emailTiming[e.num]}</span>
                  </div>
                </div>
                <div className="spr-email__subject">{e.subject}</div>
                <div className="spr-email__purpose">{e.goal}</div>
                <div className="spr-email__contents-label">What it says</div>
                <ul className="spr-email__body">
                  {e.body.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
