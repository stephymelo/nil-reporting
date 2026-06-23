import './EmailMock.css'
import type { EmailDesign, EmailTrack } from './PRCampaignPage'

// Per-brand header + signature + footer for the email design.
const brand: Record<
  EmailTrack,
  { header: React.ReactNode; sign: string; foot: string }
> = {
  nil: {
    header: (
      <>
        <img src="/nil-logo.svg" alt="New Image Labs" className="em__logo" />
        <span className="em__logo-divider" />
        <span className="em__wordmark">Hairloss.com</span>
      </>
    ),
    sign: 'The New Image Labs Team',
    foot: "New Image Labs — now on Hairloss.com · You're receiving this as a valued partner",
  },
  onrite: {
    header: (
      <>
        <img src="/onrite-logo.svg" alt="OnRite" className="em__logo em__logo--or" />
        <span className="em__logo-divider" />
        <span className="em__wordmark">Hairloss.com</span>
      </>
    ),
    sign: 'The OnRite Team',
    foot: "OnRite — now on Hairloss.com · You're receiving this as a valued partner",
  },
  hairloss: {
    header: <span className="em__wordmark em__wordmark--lg">Hairloss.com</span>,
    sign: 'The Hairloss.com Team',
    foot: 'Hairloss.com · Powered by New Image Labs & OnRite',
  },
}

// Shared formal-letter email design (used on the campaign page + the deck)
export default function EmailMock({ email }: { email: EmailDesign }) {
  const b = brand[email.track]
  return (
    <div className="em">
      <div className="em__chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="em__subjectline">
        <div className="em__subject">{email.subject}</div>
        <div className="em__preview">{email.preview}</div>
      </div>
      <div className="em__logos">{b.header}</div>
      <div className="em__body">
        <p className="em__greeting">Dear Valued Customer,</p>
        {email.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {email.cta && <div className="em__cta">{email.cta}</div>}
        <div className="em__sign">
          <span>Sincerely,</span>
          <span className="em__sign-team">{b.sign}</span>
        </div>
      </div>
      <div className="em__foot">{b.foot}</div>
    </div>
  )
}
