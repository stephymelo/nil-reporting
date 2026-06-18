import './PostMock.css'
import { kindLabel, type SocialPost } from './socialPlan'

// Text-only social post mockups (no imagery yet), styled to NIL guidelines:
// minimalist, light-weight Montserrat, letter-spacing, off-black on light
// gradients, outlined elements — no bold, no solid black blocks.
export default function PostMock({ post }: { post: SocialPost }) {
  return (
    <div className="pm">
      <div className="pm__bar">
        <span className={`pm__kind pm__kind--${post.kind}`}>{kindLabel[post.kind]}</span>
        <span className="pm__when">{post.when}</span>
      </div>
      <div className="pm__label">{post.label}</div>

      {post.kind === 'reel' ? (
        <div className="pm__frame pm__frame--reel">
          <div className="pm__play" aria-hidden="true" />
          <div className="pm__reel-title">{post.reelTitle}</div>
          <span className="pm__tag">Reel · Hairloss.com</span>
        </div>
      ) : (
        <div className="pm__frames">
          {post.frames?.map((f, i) => (
            <div key={i} className={`pm__frame ${i === 0 ? 'is-cover' : ''}`}>
              {post.frames && post.frames.length > 1 && (
                <span className="pm__frame-num">
                  {i + 1} / {post.frames.length}
                </span>
              )}
              <div className="pm__frame-text">{f}</div>
              <span className="pm__rule" aria-hidden="true" />
              <span className="pm__tag">Hairloss.com</span>
            </div>
          ))}
        </div>
      )}

      {post.kind === 'reel' && (
        <div className="pm__concept">
          <span className="pm__concept-label">Concept</span>
          {post.concept}
        </div>
      )}

      <div className="pm__caption">
        <span className="pm__caption-label">Caption</span>
        {post.caption}
      </div>
    </div>
  )
}
