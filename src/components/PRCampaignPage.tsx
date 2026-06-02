import './CampaignPage.css'
import './PRCampaignPage.css'

// ── Types ────────────────────────────────────────────────────────────────────

type Track = 'marketing' | 'website' | 'content'

interface RoadmapItem {
  title: string
  desc: string
  tracks: Track[]
  flag?: string
}

interface RoadmapPhase {
  label: string
  date: string
  accent: 'june' | 'july-early' | 'july' | 'august'
  items: RoadmapItem[]
}

interface EmailDesign {
  num: number
  send: string
  audience: string
  subject: string
  preview: string
  goal: string
  body: string[]
  cta: string
  tone: string
}

// ── Roadmap data ─────────────────────────────────────────────────────────────

const roadmap: RoadmapPhase[] = [
  {
    label: 'June',
    date: 'Now → June 30',
    accent: 'june',
    items: [
      {
        title: 'Finish Product + Color Upload',
        desc: 'All NIL products and select Onrite products live on Hairloss.com. Colors are still uploading — done by Friday (June 5).',
        tracks: ['website', 'content'],
      },
      {
        title: 'Upload Pricing Tiers',
        desc: 'Load every customer tier into Hairloss.com so accounts map to the right B2B pricing. Has to be in before we create accounts.',
        tracks: ['website'],
      },
      {
        title: 'Build Account Creation Workflow',
        desc: 'The full path: customer creates account → request goes to sales → sales approves & assigns tier → B2B pricing unlocks.',
        tracks: ['website'],
      },
      {
        title: 'Build "Create Account" Form',
        desc: 'Form fields below. This is how sales and customers open a B2B account on Hairloss.com.',
        tracks: ['website'],
      },
      {
        title: 'Sales Starts Adding Customers',
        desc: 'June is for getting customers into Hairloss.com. Sales begins creating accounts for priority/known customers.',
        tracks: ['marketing'],
      },
      {
        title: 'Start Talking About the Shift',
        desc: 'By end of June, sales begins telling clients the change is coming — warm them up before the first email goes out.',
        tracks: ['marketing'],
      },
    ],
  },
  {
    label: 'Early July',
    date: 'July 1 → July 7',
    accent: 'july-early',
    items: [
      {
        title: 'Hide Pricing (Developed & Live)',
        desc: 'NIL hair product pricing has to be hidden before broad account creation. No public pricing anywhere — pricing only shows once you log into an approved B2B account.',
        tracks: ['website'],
        flag: 'Gate: must be done before sales adds the bulk of customers',
      },
      {
        title: 'Send Announcement Email',
        desc: 'First email to clients: the merge, why we\'re doing it, and reassurance nothing they rely on is going away.',
        tracks: ['marketing'],
      },
    ],
  },
  {
    label: 'July',
    date: 'July 7 → July 31',
    accent: 'july',
    items: [
      {
        title: 'Sales Adds Certain Customers',
        desc: 'Once pricing is hidden, sales creates the rest of the customer accounts on Hairloss.com so they\'re ready to log in at launch.',
        tracks: ['marketing'],
      },
      {
        title: '"Formerly Known As" Labels',
        desc: 'Under each hair unit, add "Formerly known as [old NIL/OR unit name]" so customers recognize the products they already buy.',
        tracks: ['website', 'content'],
      },
      {
        title: 'Send "How to Access" Email',
        desc: 'Walk clients through logging in, that their account is being created by their rep, and that pricing now lives behind their account.',
        tracks: ['marketing'],
      },
      {
        title: 'Send Final NIL Site Reminder',
        desc: 'Last call: NIL website purchasing ends Aug 1. Make sure everyone knows where to go.',
        tracks: ['marketing'],
      },
      {
        title: 'Tease Training Content',
        desc: 'Start teasing the Ricky Knowles beginner training before launch — build anticipation. Full content stays behind the paywall until after Aug 1.',
        tracks: ['content', 'marketing'],
      },
    ],
  },
  {
    label: 'August — Launch',
    date: 'August 1 onward',
    accent: 'august',
    items: [
      {
        title: 'NIL Website Purchasing Off',
        desc: 'Customers can no longer buy on the NIL site. All ordering moves to Hairloss.com with their B2B account.',
        tracks: ['website', 'marketing'],
        flag: 'Launch day',
      },
      {
        title: 'Send Launch Email',
        desc: '"We\'re live." Login link, what\'s new, and how everything — products, pricing, promos — is now in one place.',
        tracks: ['marketing'],
      },
      {
        title: 'Ricky Knowles Beginner Content Live',
        desc: 'Beginner training filmed with Ricky Knowles goes live behind the Hairloss.com paywall.',
        tracks: ['content'],
      },
      {
        title: 'Ongoing Trainings + Content',
        desc: 'Keep adding trainings and educational content. This is a core focus post-merge — Hairloss.com becomes the place to learn, not just buy.',
        tracks: ['content'],
      },
    ],
  },
]

// ── Account form fields ──────────────────────────────────────────────────────

const formFields: { label: string; note: string; required: boolean }[] = [
  { label: 'Business / Company Name', note: 'Shown on the account', required: true },
  { label: 'Contact Name', note: 'Primary person on the account', required: true },
  { label: 'Email', note: 'Login + order confirmations', required: true },
  { label: 'Phone', note: 'For the sales rep', required: true },
  { label: 'Business Address', note: 'Shipping + billing', required: true },
  { label: 'Resale / Tax ID or License', note: 'Confirms a real business', required: true },
  { label: 'Existing NIL / Onrite Account #', note: 'So we map your current tier', required: false },
  { label: 'Account Type', note: 'Barber · Salon · Studio · Distributor', required: true },
  { label: 'Password', note: 'Set login credentials', required: true },
]

// ── Email designs ────────────────────────────────────────────────────────────

const emails: EmailDesign[] = [
  {
    num: 1,
    send: 'July 1–3',
    audience: 'All NIL + Onrite clients',
    subject: 'Big news — New Image Labs & Onrite are coming to Hairloss.com',
    preview: 'Same products. Same pricing. One easier place to shop.',
    goal: 'Announce the merge. Lead with reassurance, not change.',
    tone: 'Warm, confident, "we\'ve got you." 50+ years of trust.',
    body: [
      'For over 50 years, you\'ve trusted us for your hair systems. We\'re making it easier.',
      'We\'re bringing New Image Labs and Onrite together onto one website — Hairloss.com. Instead of shopping across two sites, everything you order will live in one place.',
      'What stays the same: your pricing tier, the products you already buy, and the team you know.',
      'What gets better: easier to find products, easier to order, and access to discounts and promotions all in one place.',
      'Over the next few weeks we\'ll walk you through exactly what to expect. Nothing changes for you today.',
    ],
    cta: 'See what\'s coming',
  },
  {
    num: 2,
    send: 'July 14–16',
    audience: 'All clients',
    subject: 'Your Hairloss.com account is on the way',
    preview: 'Here\'s how ordering works on the new site.',
    goal: 'Explain accounts + hidden pricing before launch. Remove confusion.',
    tone: 'Clear, helpful, step-by-step. No surprises.',
    body: [
      'Here\'s how things work on Hairloss.com starting August 1.',
      'Your sales rep is creating your account for you — you don\'t have to do anything to get set up. You\'ll get login details before launch.',
      'Pricing now lives behind your account. To keep our wholesale pricing protected, the site won\'t show prices publicly. Once you log in to your B2B account, you\'ll see your tier pricing — the same pricing you have today.',
      'You\'ll recognize your products. Each unit shows "Formerly known as [your unit name]" so nothing gets lost in the move.',
      'Questions? Your rep is one call away.',
    ],
    cta: 'How to log in',
  },
  {
    num: 3,
    send: 'July 28–29',
    audience: 'All clients',
    subject: 'Last week to order on the NIL site',
    preview: 'Starting Aug 1, ordering moves to Hairloss.com.',
    goal: 'Final reminder. Make sure nobody is caught off guard.',
    tone: 'Direct, friendly heads-up.',
    body: [
      'Quick heads-up: starting August 1, the New Image Labs website will no longer take orders.',
      'Everything moves to Hairloss.com, where your account is ready and waiting.',
      'Same products. Same pricing tier. One place for everything.',
      'If you haven\'t gotten your login yet, reach out to your rep this week and we\'ll get you set.',
    ],
    cta: 'Get my login',
  },
  {
    num: 4,
    send: 'August 1',
    audience: 'All clients',
    subject: 'We\'re live — welcome to Hairloss.com',
    preview: 'Log in and see everything in one place.',
    goal: 'Launch. Drive first login + first order.',
    tone: 'Celebratory but simple. Get them in the door.',
    body: [
      'It\'s here. New Image Labs and Onrite are now on Hairloss.com.',
      'Log in with your account to see your pricing, your products, and order in a few clicks.',
      'Everything in one place: products, your tier pricing, and the discounts and promotions we run — all easier to find than ever.',
      'And we\'re just getting started — more trainings and content are on the way.',
    ],
    cta: 'Log in & shop',
  },
  {
    num: 5,
    send: 'Tease July 28 · Live Aug 8',
    audience: 'Pros + barbers',
    subject: 'New: beginner training with Ricky Knowles',
    preview: 'Learn the basics, step by step — only on Hairloss.com.',
    goal: 'Tease before launch, drive to paywalled training after Aug 1.',
    tone: 'Exciting, value-first. Position HL.com as where you learn.',
    body: [
      'We\'re putting more into training than ever — starting with a beginner series filmed with Ricky Knowles.',
      'Step-by-step basics for application and care, built for anyone just getting started.',
      'Available exclusively on Hairloss.com. Log in to your account to watch.',
      'This is the first of much more to come.',
    ],
    cta: 'Watch the series',
  },
]

const trackMeta: Record<Track, { label: string; cls: string }> = {
  marketing: { label: 'Marketing / Sales', cls: 'prc-tag--marketing' },
  website: { label: 'Website', cls: 'prc-tag--website' },
  content: { label: 'Content', cls: 'prc-tag--content' },
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function PRCampaignPage() {
  return (
    <div className="campaign-page">
      <a href="#/" className="cp-back">← IA Planning</a>

      {/* ── Hero ── */}
      <header className="cp-hero">
        <div className="cp-hero__inner">
          <p className="cp-hero__eyebrow">PR &amp; Merge Campaign</p>
          <h1 className="cp-hero__title">
            New Image Labs + Onrite<br />
            <span>→ Hairloss.com</span>
          </h1>
          <p className="cp-hero__subtitle">
            One website. Same products, same pricing — easier to find.
          </p>
          <div className="cp-hero__dates">
            <span>June 2026</span>
            <span className="cp-hero__dates-dot" />
            <span>July 2026</span>
            <span className="cp-hero__dates-dot" />
            <span>Launch Aug 1</span>
          </div>
        </div>
      </header>

      <main className="cp-main">
        {/* ── Overview ── */}
        <div className="cp-overview">
          <div className="cp-overview-card">
            <div className="cp-overview-card__icon">🚀</div>
            <div className="cp-overview-card__label">Launch</div>
            <div className="cp-overview-card__value">August 1, 2026</div>
          </div>
          <div className="cp-overview-card">
            <div className="cp-overview-card__icon">📦</div>
            <div className="cp-overview-card__label">Moving Over</div>
            <div className="cp-overview-card__value">All NIL + Select OR</div>
          </div>
          <div className="cp-overview-card">
            <div className="cp-overview-card__icon">🔐</div>
            <div className="cp-overview-card__label">Key Change</div>
            <div className="cp-overview-card__value">Accounts + Hidden Pricing</div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* THE MESSAGE / BACKLASH MITIGATION                                  */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-segment">
          <div className="cp-segment__header">
            <span className="cp-segment__badge">The Message</span>
            <h2 className="cp-segment__title">How We Talk About This</h2>
            <p className="cp-segment__subtitle">
              A merge can feel like a loss to loyal customers. Our job is to make it feel like an upgrade. Lead with what stays the same, then what gets better.
            </p>
          </div>

          <div className="cp-segment__body">
            <div className="cp-segment__columns">
              <div className="cp-segment__col">
                <div className="cp-segment__col-title">What stays the same</div>
                <ul className="cp-segment__col-items">
                  <li>Your pricing tier — exactly what you have now</li>
                  <li>The products you already order</li>
                  <li>The team and reps you know</li>
                  <li>50+ years of trust behind it all</li>
                </ul>
              </div>

              <div className="cp-segment__col">
                <div className="cp-segment__col-title">What gets better</div>
                <ul className="cp-segment__col-items">
                  <li>One website instead of two — everything in one place</li>
                  <li>Easier to find products and reorder</li>
                  <li>Discounts and promotions all in one spot</li>
                  <li>More trainings and content to grow your business</li>
                </ul>
              </div>
            </div>

            <div className="cp-segment__callout">
              <strong>Tone:</strong> Warm, confident, and reassuring — never corporate. We've been doing this for over 50 years; we're not changing who we are, we're making it easier to work with us. Frame the merge as <em>"we brought everything together for you,"</em> not <em>"we shut down a website."</em> Every message leads with reassurance before it mentions change.
            </div>

            <div className="prc-mitigation">
              <div className="prc-mitigation__title">Mitigating backlash — the 4 worries &amp; our answers</div>
              <div className="prc-mitigation__grid">
                <div className="prc-worry">
                  <div className="prc-worry__q">"Will my price go up?"</div>
                  <div className="prc-worry__a">No. Your tier and pricing move with you, untouched. Say this early and often.</div>
                </div>
                <div className="prc-worry">
                  <div className="prc-worry__q">"Why can't I see prices anymore?"</div>
                  <div className="prc-worry__a">Pricing is wholesale and protected — it shows once you log into your B2B account. Same pricing, just behind your login.</div>
                </div>
                <div className="prc-worry">
                  <div className="prc-worry__q">"Do I have to set everything up?"</div>
                  <div className="prc-worry__a">No. Your rep creates your account for you. You just log in.</div>
                </div>
                <div className="prc-worry">
                  <div className="prc-worry__q">"Will I still find my products?"</div>
                  <div className="prc-worry__a">Yes — every unit is labeled "Formerly known as [your name]" so nothing gets lost.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* WHAT'S CHANGING                                                    */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-pitch">
          <div className="cp-pitch__header">
            <span className="cp-pitch__badge">The Facts — Tell Clients Clearly</span>
            <h2 className="cp-pitch__title">What's Actually Changing</h2>
            <p className="cp-pitch__subtitle">
              Sales: these are the points to walk every client through. No gray areas.
            </p>
          </div>

          <div className="cp-pitch__points">
            <div className="cp-pitch__point">
              <div className="cp-pitch__point-num">1</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">No more buying on the NIL site</div>
                <div className="cp-pitch__point-desc">
                  Starting Aug 1, the New Image Labs website stops taking orders. Everything moves to Hairloss.com.
                </div>
              </div>
            </div>

            <div className="cp-pitch__point">
              <div className="cp-pitch__point-num">2</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">Same tiers, same products</div>
                <div className="cp-pitch__point-desc">
                  Their tier and the products they buy come with them. Nothing they rely on goes away.
                </div>
              </div>
            </div>

            <div className="cp-pitch__point">
              <div className="cp-pitch__point-num">3</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">No public pricing</div>
                <div className="cp-pitch__point-desc">
                  The site won't show prices. You need a company account to see B2B pricing — protects our wholesale rates.
                </div>
              </div>
            </div>

            <div className="cp-pitch__point">
              <div className="cp-pitch__point-num">4</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">Sales creates the account</div>
                <div className="cp-pitch__point-desc">
                  Our sales team sets up each customer's account on Hairloss.com. The customer just logs in.
                </div>
              </div>
            </div>

            <div className="cp-pitch__point cp-pitch__point--full">
              <div className="cp-pitch__point-num">5</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">Everything in one place</div>
                <div className="cp-pitch__point-desc">
                  One website for all NIL products and select Onrite products — plus discounts, promotions, and training content. Easier to find, easier to buy.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* ACCOUNT + ACCESS WORKFLOW                                          */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Website</span>
            <h2 className="cp-section__title">Account &amp; Access Workflow</h2>
            <p className="cp-section__desc">
              How a customer goes from no account to seeing their B2B pricing. Built in June, before any accounts are created.
            </p>
          </div>

          <div className="prc-flow">
            <div className="prc-flow__step">
              <div className="prc-flow__num">1</div>
              <div className="prc-flow__label">Create Account</div>
              <div className="prc-flow__desc">Sales (or the customer) fills out the account form.</div>
            </div>
            <div className="prc-flow__arrow">→</div>
            <div className="prc-flow__step">
              <div className="prc-flow__num">2</div>
              <div className="prc-flow__label">Sales Reviews</div>
              <div className="prc-flow__desc">Sales confirms the business and matches their existing tier.</div>
            </div>
            <div className="prc-flow__arrow">→</div>
            <div className="prc-flow__step">
              <div className="prc-flow__num">3</div>
              <div className="prc-flow__label">Tier Assigned</div>
              <div className="prc-flow__desc">Account is approved and linked to the right pricing tier.</div>
            </div>
            <div className="prc-flow__arrow">→</div>
            <div className="prc-flow__step prc-flow__step--final">
              <div className="prc-flow__num">4</div>
              <div className="prc-flow__label">Pricing Unlocks</div>
              <div className="prc-flow__desc">Customer logs in and sees B2B pricing + can order.</div>
            </div>
          </div>

          {/* Account form */}
          <div className="prc-form-card">
            <div className="prc-form-card__header">
              <div className="prc-form-card__title">Create Account — Form Fields</div>
              <div className="prc-form-card__sub">What we collect to open a B2B account</div>
            </div>
            <div className="prc-form-grid">
              {formFields.map((field) => (
                <div key={field.label} className="prc-field">
                  <div className="prc-field__label">
                    {field.label}
                    {field.required && <span className="prc-field__req">*</span>}
                  </div>
                  <div className="prc-field__input">{field.note}</div>
                </div>
              ))}
            </div>
            <div className="prc-form-card__footer">
              <span className="prc-field__req">*</span> Required · Submitting sends the request to sales for review &amp; tier assignment.
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* ROADMAP (tagged)                                                   */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Roadmap</span>
            <h2 className="cp-section__title">What Gets Done &amp; When</h2>
            <p className="cp-section__desc">
              Every item tagged by team. Work back from the Aug 1 launch.
            </p>
          </div>

          {/* Legend */}
          <div className="prc-legend">
            <span className="prc-tag prc-tag--marketing">Marketing / Sales</span>
            <span className="prc-tag prc-tag--website">Website</span>
            <span className="prc-tag prc-tag--content">Content</span>
          </div>

          <div className="cp-roadmap">
            {roadmap.map((phase) => (
              <div key={phase.label} className="cp-roadmap-month">
                <div className="cp-roadmap-month__header">
                  <div className={`cp-roadmap-month__label prc-phase-label--${phase.accent}`}>
                    {phase.label}
                  </div>
                  <div className="cp-roadmap-month__date">{phase.date}</div>
                </div>
                <div className="cp-roadmap-items">
                  {phase.items.map((item) => (
                    <div key={item.title} className="cp-roadmap-item">
                      <div className="cp-roadmap-item__body">
                        <div className="prc-item-head">
                          <div className="cp-roadmap-item__title">{item.title}</div>
                          <div className="prc-item-tags">
                            {item.tracks.map((t) => (
                              <span key={t} className={`prc-tag ${trackMeta[t].cls}`}>
                                {trackMeta[t].label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="cp-roadmap-item__desc">{item.desc}</div>
                        {item.flag && <div className="prc-flag">⚠ {item.flag}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="cp-segment__callout">
            <strong>Sequencing watch:</strong> June is for adding customers, but pricing has to be hidden <em>before</em> we create the bulk of accounts. So we add a first wave of priority customers in June, lock in the hidden-pricing build by early July, then sales adds the rest of the certain customers. Don't open broad account creation until pricing is hidden.
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* EMAILS                                                             */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Email Campaign</span>
            <h2 className="cp-section__title">The Emails We Send</h2>
            <p className="cp-section__desc">
              From marketing to clients. Five sends, spaced to warm them up, explain the change, and drive the first login. Designs included.
            </p>
          </div>

          <div className="prc-emails">
            {emails.map((email) => (
              <div key={email.num} className="prc-email">
                <div className="prc-email__meta">
                  <div className="prc-email__meta-top">
                    <span className="prc-email__num">Email {email.num}</span>
                    <span className="prc-email__send">{email.send}</span>
                  </div>
                  <div className="prc-email__audience">→ {email.audience}</div>
                  <div className="prc-email__goal">
                    <span className="prc-email__goal-label">Goal</span>
                    {email.goal}
                  </div>
                  <div className="prc-email__goal">
                    <span className="prc-email__goal-label">Tone</span>
                    {email.tone}
                  </div>
                </div>

                {/* Email design mockup */}
                <div className="prc-mock">
                  <div className="prc-mock__chrome">
                    <span className="prc-mock__dot" />
                    <span className="prc-mock__dot" />
                    <span className="prc-mock__dot" />
                  </div>
                  <div className="prc-mock__subjectline">
                    <div className="prc-mock__subject">{email.subject}</div>
                    <div className="prc-mock__preview">{email.preview}</div>
                  </div>
                  <div className="prc-mock__brandbar">Hairloss.com</div>
                  <div className="prc-mock__body">
                    {email.body.map((para, i) => (
                      <p key={i} className={i === 0 ? 'prc-mock__lead' : ''}>
                        {para}
                      </p>
                    ))}
                    <div className="prc-mock__cta">{email.cta}</div>
                  </div>
                  <div className="prc-mock__foot">
                    Hairloss.com · Trusted for 50+ years · You're receiving this as a valued partner
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* SALES ENABLEMENT                                                   */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Sales / Marketing</span>
            <h2 className="cp-section__title">What Sales Tells Clients</h2>
            <p className="cp-section__desc">
              The script for every conversation. Sales starts these talks by end of June.
            </p>
          </div>

          <div className="cp-email-grid">
            <div className="cp-email-card">
              <div className="cp-email-card__icon">📣</div>
              <div className="cp-email-card__title">Open with reassurance</div>
              <div className="cp-email-card__desc">
                "We're bringing everything onto one website to make it easier for you. Your pricing and products stay exactly the same."
              </div>
            </div>
            <div className="cp-email-card">
              <div className="cp-email-card__icon">🔐</div>
              <div className="cp-email-card__title">Explain accounts &amp; pricing</div>
              <div className="cp-email-card__desc">
                "I'm setting up your account on Hairloss.com. Pricing lives behind your login now — same tier you have today, just protected from the public."
              </div>
            </div>
            <div className="cp-email-card">
              <div className="cp-email-card__icon">🛑</div>
              <div className="cp-email-card__title">Be clear on the NIL site</div>
              <div className="cp-email-card__desc">
                "After Aug 1, you'll order on Hairloss.com instead of the NIL site. I'll make sure you're logged in and ready before then."
              </div>
            </div>
            <div className="cp-email-card">
              <div className="cp-email-card__icon">🎓</div>
              <div className="cp-email-card__title">Tease what's new</div>
              <div className="cp-email-card__desc">
                "We're adding trainings and content too — beginner series with Ricky Knowles coming right after launch."
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* TRAINING / RICKY KNOWLES                                           */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-promo-banner">
          <div className="cp-promo-banner__icon">🎬</div>
          <div className="cp-promo-banner__content">
            <div className="cp-promo-banner__title">Beginner Training with Ricky Knowles</div>
            <div className="cp-promo-banner__desc">
              Filming beginner application &amp; care content. <strong>Tease before Aug 1</strong> to build anticipation — full series goes <strong>behind the Hairloss.com paywall after Aug 1</strong>. Part of a bigger focus on training and content that makes Hairloss.com the place pros come to learn.
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* KEY DATES                                                          */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Timeline</span>
            <h2 className="cp-section__title">Key Dates</h2>
          </div>

          <div className="cp-timeline">
            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">By Fri, June 5</div>
              <div className="cp-timeline-item__title">Products + Colors Uploaded</div>
              <div className="cp-timeline-item__desc">All NIL + select OR products live on HL.com. Colors finished.</div>
            </div>
            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">June (weeks 2–3)</div>
              <div className="cp-timeline-item__title">Pricing Tiers + Account Workflow + Form</div>
              <div className="cp-timeline-item__desc">Tiers uploaded, account creation flow and form built.</div>
            </div>
            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">End of June</div>
              <div className="cp-timeline-item__title">Start the Conversation + Add First Customers</div>
              <div className="cp-timeline-item__desc">Sales begins talking about the shift and adding priority customers.</div>
            </div>
            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">July 1–3</div>
              <div className="cp-timeline-item__title">Pricing Hidden + Announcement Email</div>
              <div className="cp-timeline-item__desc">Hidden-pricing live. Email 1 goes out.</div>
            </div>
            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">July (weeks 2–4)</div>
              <div className="cp-timeline-item__title">Sales Adds Customers + "Formerly Known As" Labels</div>
              <div className="cp-timeline-item__desc">Bulk accounts created. Unit labels added. Emails 2 &amp; 3 sent. Training teased.</div>
            </div>
            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">August 1</div>
              <div className="cp-timeline-item__title">Launch — NIL Site Off</div>
              <div className="cp-timeline-item__desc">HL.com live for B2B. NIL purchasing ends. Launch email sent.</div>
            </div>
            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">Aug 8+</div>
              <div className="cp-timeline-item__title">Ricky Knowles Training Live</div>
              <div className="cp-timeline-item__desc">Beginner series behind the paywall. Ongoing content begins.</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="cp-footer">
        Hairloss.com · NIL + Onrite Merge · PR Campaign · June — August 2026
      </footer>
    </div>
  )
}
