import './EmailMock.css'
import type { EmailDesign } from './PRCampaignPage'

// Shared formal-letter email design (used on the campaign page + the deck)
export default function EmailMock({ email }: { email: EmailDesign }) {
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
      <div className="em__logos">
        <img src="/nil-logo.svg" alt="New Image Labs" className="em__logo" />
        <span className="em__logo-divider" />
        <img src="/onrite-logo.svg" alt="Onrite" className="em__logo em__logo--or" />
      </div>
      <div className="em__body">
        <p className="em__greeting">Dear Valued Customer,</p>
        {email.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {email.cta && <div className="em__cta">{email.cta}</div>}
        <div className="em__sign">
          <span>Sincerely,</span>
          <span className="em__sign-team">The New Image Labs &amp; Onrite Team</span>
        </div>
      </div>
      <div className="em__foot">
        Hairloss.com · Powered by New Image Labs &amp; Onrite · You're receiving this as a valued partner
      </div>
    </div>
  )
}
