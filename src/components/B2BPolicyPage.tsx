import './CampaignPage.css'
import './B2BPolicyPage.css'

const FORM_URL =
  'https://hairloss.com/pages/create-account?_pos=1&_psq=create&_ss=e&_v=1.0'

export default function B2BPolicyPage() {
  return (
    <div className="b2b-page">
      <a href="#/pr-campaign" className="cp-back">← PR Campaign</a>

      {/* ── Hero ── */}
      <header className="b2b-hero">
        <div className="b2b-hero__inner">
          <p className="b2b-hero__eyebrow">Hairloss.com · Wholesale</p>
          <h1 className="b2b-hero__title">Wholesale Account Policy</h1>
          <p className="b2b-hero__subtitle">
            How B2B accounts work — who qualifies, who gets access, and how to get started.
          </p>
        </div>
      </header>

      <main className="b2b-main">
        {/* Intro */}
        <p className="b2b-lead">
          A Hairloss.com wholesale account gives approved businesses access to B2B pricing
          on the products you already trust. Here's how accounts work and what we need from you.
        </p>

        {/* 1. Who qualifies */}
        <section className="b2b-block">
          <div className="b2b-block__num">1</div>
          <div className="b2b-block__body">
            <h2 className="b2b-block__title">Who qualifies</h2>
            <p>
              Wholesale accounts are for businesses — salons, barbershops, studios, stylists,
              and distributors. To be approved, you'll need a valid business and a resale or
              tax ID. One account represents one company.
            </p>
          </div>
        </section>

        {/* 2. Business owner is the main contact */}
        <section className="b2b-block">
          <div className="b2b-block__num">2</div>
          <div className="b2b-block__body">
            <h2 className="b2b-block__title">The business owner is the main contact</h2>
            <p>
              Every company account has one main contact: the business owner. The owner is
              the primary point of contact and controls who has access under the company
              account.
            </p>
          </div>
        </section>

        {/* 3. Authorizing stylists */}
        <section className="b2b-block">
          <div className="b2b-block__num">3</div>
          <div className="b2b-block__body">
            <h2 className="b2b-block__title">Authorizing stylists</h2>
            <p>The business owner can authorize each stylist to either:</p>
            <ul className="b2b-list">
              <li><strong>Purchase</strong> under the company account, or</li>
              <li><strong>View products only</strong> — browse without purchasing.</li>
            </ul>
            <div className="b2b-callout">
              <strong>Owner approval is required.</strong> We will never add a stylist to a
              company account just because they ask or call in. We always confirm with the
              business owner first — no exceptions.
            </div>
          </div>
        </section>

        {/* 4. Passwordless */}
        <section className="b2b-block">
          <div className="b2b-block__num">4</div>
          <div className="b2b-block__body">
            <h2 className="b2b-block__title">Passwordless sign-in</h2>
            <p>
              Your account is passwordless — there's nothing to remember. When you sign in,
              we email you a one-time code. Enter the code and you're in.
            </p>
          </div>
        </section>

        {/* 5. How to get started */}
        <section className="b2b-block">
          <div className="b2b-block__num">5</div>
          <div className="b2b-block__body">
            <h2 className="b2b-block__title">How to get started</h2>
            <ol className="b2b-steps">
              <li>Fill out the B2B account form.</li>
              <li>Our sales team reviews your information.</li>
              <li>
                Allow <strong>2–3 business days</strong> for us to confirm your account and
                assign your wholesale pricing.
              </li>
            </ol>
            <a className="b2b-cta" href={FORM_URL} target="_blank" rel="noopener noreferrer">
              Create your wholesale account →
            </a>
            <p className="b2b-fineprint">
              Until your account is approved, you'll see retail pricing. Once approved, your
              wholesale pricing shows automatically when you log in.
            </p>
          </div>
        </section>

        {/* 6. Pricing & access */}
        <section className="b2b-block">
          <div className="b2b-block__num">6</div>
          <div className="b2b-block__body">
            <h2 className="b2b-block__title">Pricing &amp; access</h2>
            <p>
              Wholesale pricing is protected and not shown publicly. You can browse the full
              catalog anytime — your B2B pricing appears once you're logged into your approved
              account.
            </p>
          </div>
        </section>
      </main>

      <footer className="cp-footer">
        Hairloss.com · Wholesale Account Policy
      </footer>
    </div>
  )
}
