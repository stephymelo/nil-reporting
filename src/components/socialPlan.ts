// Shared social posting plan for the NIL + OnRite → Hairloss.com merge.
// Copy-only mockups (no imagery yet). Brand: Montserrat, near-black ink (#151515),
// soft "sky" blue accent (#afc9d8), ivory backgrounds — per NIL guidelines.

export type PostKind = 'carousel' | 'post' | 'reel'

export interface SocialPost {
  id: string
  kind: PostKind
  label: string
  when: string
  frames?: string[] // on-canvas copy per slide (carousel = many, post = 1)
  reelTitle?: string
  concept?: string
  caption: string
}

export const socialPosts: SocialPost[] = [
  {
    id: 'announce',
    kind: 'carousel',
    label: 'Announcement carousel',
    when: 'Week of Jul 1',
    frames: [
      'New Image Labs\n+ OnRite are coming\nto Hairloss.com',
      'Two trusted names.\nOne destination.',
      'The same premium products —\nnow in one place.',
      'Online ordering opens\nAugust 3\nHairloss.com',
    ],
    caption:
      'Something new is on the way. New Image Labs and OnRite are coming together on Hairloss.com — one home for the brands and products you trust. Online ordering opens August 3. #Hairloss #HairReplacement #NewImageLabs #OnRite',
  },
  {
    id: 'collab',
    kind: 'post',
    label: 'Collab post — HL × NIL × OnRite',
    when: 'Week of Jul 1',
    frames: ['Better together.\n\nHairloss.com\n× New Image Labs\n× OnRite'],
    caption:
      'Posted as a collaboration across Hairloss.com, New Image Labs, and OnRite. Three names you know, now under one roof. Coming August 3.',
  },
  {
    id: 'whats-changing',
    kind: 'carousel',
    label: '"What stays / what changes" carousel',
    when: 'Week of Jul 8',
    frames: [
      'What the move\nmeans for you',
      'Your account\nmoves with you',
      'Your pricing\nstays the same',
      'Your sales consultant\nstays the same',
      'Shop everything at\nHairloss.com · Aug 3',
    ],
    caption:
      'Same products. Same pricing. Same team. We are simply making it easier — everything moves to Hairloss.com on August 3. Swipe to see what to expect.',
  },
  {
    id: 'reel-tease',
    kind: 'reel',
    label: 'Reel — tease',
    when: 'Week of Jul 8',
    reelTitle: 'Two brands, one home',
    concept:
      'Short teaser: the New Image Labs and OnRite marks animating together into Hairloss.com. Text overlay: "Something new is coming — Aug 3." Clean, on-brand, trending audio.',
    caption: 'Something new is coming. August 3. #Hairloss #NewImageLabs #OnRite',
  },
  {
    id: 'reel-howto',
    kind: 'reel',
    label: 'Reel — how to order',
    when: 'Week of Jul 14',
    reelTitle: 'How to order on Hairloss.com',
    concept:
      'Screen-recording walkthrough with text overlays: receive your activation email → enter your email → get a one-time code → see your pricing → place your order.',
    caption:
      'Ordering on Hairloss.com is simple. Here is how, start to finish — no password required. Questions? Contact your sales representative.',
  },
  {
    id: 'save-date',
    kind: 'post',
    label: '"Save the date" post',
    when: 'Week of Jul 14',
    frames: ['Save the date\n\nOnline ordering moves to\nHairloss.com\n\nAugust 3'],
    caption: 'Mark your calendar — August 3. Everything moves online to Hairloss.com.',
  },
  {
    id: 'last-week',
    kind: 'post',
    label: '"Last week to order" reminder',
    when: 'Week of Jul 21',
    frames: ['Last week to order\non New Image Labs\n\nthrough July 26'],
    caption:
      'This is the final week to order on the New Image Labs site — through July 26. After that, everything moves to Hairloss.com (August 3). Questions? Contact your sales representative.',
  },
  {
    id: 'launch',
    kind: 'carousel',
    label: '"We\'re live" launch carousel',
    when: 'Launch · Aug 3',
    frames: [
      "We're live.",
      'Hairloss.com is now home to\nNew Image Labs + OnRite.',
      'Sign in. See your pricing.\nOrder in one place.',
    ],
    caption:
      'It is here. Hairloss.com is live — New Image Labs and OnRite, together. Sign in and shop everything in one place.',
  },
  {
    id: 'add-on-value',
    kind: 'carousel',
    label: 'Add-on value carousel',
    when: 'Launch · Aug 3',
    frames: [
      'More than\na store',
      'One platform for the\nbrands you trust',
      'Giving the hair\nreplacement industry\nmore visibility',
      'Bringing new clients\nto your salon',
    ],
    caption:
      'Hairloss.com is more than a place to order. We are giving the hair replacement industry more visibility — and bringing new clients to the professionals who serve them. There is much more to come.',
  },
  {
    id: 'reel-meet',
    kind: 'reel',
    label: 'Reel — brand intro',
    when: 'Launch · Aug 3',
    reelTitle: 'Meet Hairloss.com',
    concept:
      'Brand intro reel: the new one-stop platform, the product range, and how easy ordering is. Upbeat, confident, on-brand.',
    caption: 'Meet Hairloss.com — your new home for premium hair systems. Now live.',
  },
]

export const postingSchedule: { week: string; items: string[] }[] = [
  { week: 'Week of Jul 1', items: ['Announcement carousel', 'Collab post — HL × NIL × OnRite', 'Stories linked to the blog'] },
  { week: 'Week of Jul 8', items: ['"What stays / what changes" carousel', 'Reel tease — "Two brands, one home"'] },
  { week: 'Week of Jul 14', items: ['Reel — "How to order on Hairloss.com"', '"Save the date · Aug 3" post'] },
  { week: 'Week of Jul 21', items: ['"Last week to order — through Jul 24" post', 'Countdown stories'] },
  { week: 'Launch · Aug 3', items: ['"We\'re live" launch carousel', 'Reel — "Meet Hairloss.com"'] },
]

export const kindLabel: Record<PostKind, string> = {
  carousel: 'Carousel',
  post: 'Single post',
  reel: 'Reel',
}
