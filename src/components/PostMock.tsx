import './PostMock.css'
import { kindLabel, type SocialPost } from './socialPlan'

// Text-only social post mockup (no imagery yet), styled to NIL guidelines.
export default function PostMock({ post }: { post: SocialPost }) {
  return (
    <div className="pm">
      <div className="pm__bar">
        <span className={`pm__kind pm__kind--${post.kind}`}>{kindLabel[post.kind]}</span>
        <span className="pm__when">{post.when}</span>
      </div>
      <div className="pm__label">{post.label}</div>

      {post.kind === 'reel' ? (
        <div className="pm__reel">
          <div className="pm__reel-badge">▶ Reel</div>
          <div className="pm__reel-title">{post.reelTitle}</div>
          <div className="pm__concept">
            <span className="pm__concept-label">Concept</span>
            {post.concept}
          </div>
        </div>
      ) : (
        <div className="pm__frames">
          {post.frames?.map((f, i) => (
            <div key={i} className={`pm__frame ${i === 0 ? 'is-cover' : ''}`}>
              {post.frames && post.frames.length > 1 && (
                <span className="pm__frame-num">{i + 1}/{post.frames.length}</span>
              )}
              <div className="pm__frame-text">{f}</div>
            </div>
          ))}
        </div>
      )}

      <div className="pm__caption">
        <span className="pm__caption-label">Caption</span>
        {post.caption}
      </div>
    </div>
  )
}
