import { useState } from 'react'
import './CampaignPage.css'
import './PRCampaignPage.css'
import EmailMock from './EmailMock'
import PostMock from './PostMock'
import { socialPosts, postingSchedule } from './socialPlan'

// ── Types ────────────────────────────────────────────────────────────────────

type Track = 'marketing' | 'website' | 'content'

interface RoadmapItem {
  title: string
  date: string
  desc: string
  tracks: Track[]
  flag?: string
}

interface TimelineWindow {
  window: string
  note: string
  items: RoadmapItem[]
}

export type EmailTrack = 'nil' | 'onrite' | 'hairloss'

export const emailTrackMeta: Record<EmailTrack, { label: string; short: string }> = {
  nil: { label: 'New Image Labs clients', short: 'NIL' },
  onrite: { label: 'Onrite clients', short: 'Onrite' },
  hairloss: { label: 'Hairloss.com customers', short: 'HL.com' },
}

export interface EmailDesign {
  track: EmailTrack
  num: number
  send: string
  timing: string
  subject: string
  preview: string
  goal: string
  body: string[]
  cta: string
  tone: string
}

interface Pillar {
  icon: string
  title: string
  desc: string
}

interface RolloutPhase {
  num: string
  when: string
  title: string
  desc: string
  variant: '1' | '2' | '3'
  productsLabel: string
  products: string[]
  pillars: Pillar[]
}

// ── Rollout phases ───────────────────────────────────────────────────────────

const phases: RolloutPhase[] = [
  {
    num: 'Phase 1',
    when: 'Live Aug 3',
    title: 'Launch Products',
    desc: 'The first set of products live on launch day — uploaded, priced, and ready.',
    variant: '1',
    productsLabel: 'Going live Aug 3',
    products: [
      'All NIL men\'s units',
      'Some Onrite men\'s units',
      'Women\'s Onrite units',
      'Permarite adhesives (Onrite)',
      'Jorgen line (Onrite)',
    ],
    pillars: [
      {
        icon: '🖼️',
        title: 'Content',
        desc: 'Product photos, descriptions, and infographics on every NIL unit.',
      },
      {
        icon: '💲',
        title: 'Pricing',
        desc: 'NIL tier pricing loaded behind company accounts. Same pricing customers have today.',
      },
      {
        icon: '📊',
        title: 'Volume Pricing',
        desc: 'Quantity-break pricing on NIL products so larger orders get the right rate automatically.',
      },
    ],
  },
  {
    num: 'Phase 2',
    when: 'After Aug 3',
    title: 'Progen + Rest of Onrite',
    desc: 'Progen wholesale pricing and the remaining Onrite products brought onto the site.',
    variant: '2',
    productsLabel: 'Coming in Phase 2',
    products: [
      'Progen wholesale pricing',
      'The rest of the Onrite products',
    ],
    pillars: [
      {
        icon: '🖼️',
        title: 'Content',
        desc: 'Photos, descriptions, and infographics for the remaining Onrite products. Progen catalog built out.',
      },
      {
        icon: '💲',
        title: 'Pricing',
        desc: 'Progen wholesale pricing + Onrite tier pricing loaded behind company accounts.',
      },
      {
        icon: '📊',
        title: 'Volume Pricing',
        desc: 'Quantity-break pricing on Progen and Onrite products, matching the Phase 1 structure.',
      },
    ],
  },
  {
    num: 'Phase 3',
    when: 'End of year',
    title: 'Custom Orders Online',
    desc: 'Put custom ordering on the website so customers can place their custom orders online themselves.',
    variant: '3',
    productsLabel: 'Coming in Phase 3',
    products: [
      'Custom orders on the website',
      'Online custom-order workflow',
    ],
    pillars: [],
  },
]

// ── Roadmap — timeline in two-week windows up to Aug 3, then after ───────────

const timeline: TimelineWindow[] = [
  {
    window: 'June — Build',
    note: 'Get products, accounts & the site ready',
    items: [
      {
        title: 'Finish Product + Color Upload',
        date: 'By Fri, June 5',
        desc: 'Phase 1 launch products live on Hairloss.com — all NIL men\'s units, some Onrite men\'s units, women\'s Onrite units, Permarite adhesives, and the Jorgen line. Colors finish uploading.',
        tracks: ['website', 'content'],
      },
      {
        title: 'Build Account Workflow + "Create Account" Form',
        date: 'June',
        desc: 'Create account → review by the rep → assign tier → pricing unlocks. Build the B2B account form (fields below).',
        tracks: ['website'],
      },
      {
        title: 'Add "Create B2B Account" + "Login" Menu',
        date: 'June',
        desc: 'New nav menu items on Hairloss.com so businesses can create a B2B account and log in.',
        tracks: ['website'],
      },
      {
        title: 'About Page — Add NIL & OR Merge',
        date: 'June',
        desc: 'Update the About page to tell the NIL + Onrite merge story — one company, one site.',
        tracks: ['website', 'content'],
      },
      {
        title: 'Whole Sales Team Briefing',
        date: 'Mon, June 29',
        desc: 'Brief the whole sales team and walk through the full posting plan before it goes live.',
        tracks: ['marketing'],
      },
      {
        title: 'Hide Pricing + Remove TressAllure',
        date: 'Tue, June 30',
        desc: 'Hide hair-unit pricing for logged-out visitors, remove TressAllure, and restructure Hairloss.com for the merged catalog.',
        tracks: ['website'],
        flag: 'Before the campaign starts',
      },
    ],
  },
  {
    window: 'July 1 – 15 — Announce & price',
    note: 'Kick off comms; load pricing; add barbers',
    items: [
      {
        title: 'Send Announcement + Login-Notice Email',
        date: 'Wed, July 1',
        desc: 'Separate sequences to NIL, Onrite & Hairloss.com clients: the move to Hairloss.com, and that going forward you sign in to see pricing on certain products.',
        tracks: ['marketing'],
      },
      {
        title: 'Posting Plan Goes Live',
        date: 'From July 1',
        desc: 'Weekly social posts begin — one a week, plus collab posts (HL × NIL × Onrite) and stories to the blog.',
        tracks: ['content', 'marketing'],
      },
      {
        title: 'Upload Pricing Tiers',
        date: 'July',
        desc: 'Load every customer tier (including the Signature tier) so accounts map to the right pricing.',
        tracks: ['website'],
      },
      {
        title: 'Add Current Barbers to Signature Pricing',
        date: 'July',
        desc: 'Place our current barbers/customers on the Signature pricing tier.',
        tracks: ['marketing', 'website'],
      },
      {
        title: 'Send "How to Access" Email',
        date: 'July 14 – 16',
        desc: 'Email 2: how the account works — rep creates it, passwordless sign-in by email code, pricing behind login.',
        tracks: ['marketing'],
      },
    ],
  },
  {
    window: 'July 16 – 31 — Migrate & cut over',
    note: 'Last orders, migration, site offline',
    items: [
      {
        title: 'Add Salon Locator to Website',
        date: 'Thu, July 17',
        desc: 'Add the salon locator with visibility through socials and the website so consumers can find partner shops.',
        tracks: ['website', 'marketing'],
      },
      {
        title: 'Send Final-Week + Onrite Email',
        date: 'July 21 – 23',
        desc: 'Email 3: last week to order on NIL (through July 26), plus a teaser — a new easier platform with selective Onrite products, more to come.',
        tracks: ['marketing'],
      },
      {
        title: 'NIL Last Order Date',
        date: 'Sat, July 26',
        desc: 'Final day to place orders on the New Image Labs website.',
        tracks: ['marketing', 'website'],
        flag: 'July 26 — max order date on NIL',
      },
      {
        title: 'Migration + Welcome Email',
        date: 'Sun, July 27',
        desc: 'Migrate customer accounts & companies to Hairloss.com — orders do not migrate. The welcome email goes out with the 10%-off-first-online-order offer.',
        tracks: ['website', 'marketing'],
        flag: 'Migration day · orders do not migrate',
      },
      {
        title: 'Send "Soon You Can Purchase" Email',
        date: 'July 28 – 30',
        desc: 'Onrite email: one place to purchase, 10% off the first online order, and create your professional account. Live Aug 3.',
        tracks: ['marketing'],
      },
      {
        title: 'NIL Site Goes Offline',
        date: 'Fri, July 31',
        desc: 'At the end of the day, the New Image Labs site goes offline and is unavailable through the weekend — back on Monday, Aug 3 as a landing page that redirects to Hairloss.com.',
        tracks: ['website'],
        flag: 'Offline end of day Jul 31 → back Aug 3',
      },
    ],
  },
  {
    window: 'August 3 — Launch',
    note: 'NIL & Onrite landing pages → Hairloss.com',
    items: [
      {
        title: 'Launch — Landing Pages Redirect to HL.com',
        date: 'Mon, Aug 3',
        desc: 'New Image Labs and Onrite each come back as their own landing page that redirects to Hairloss.com. NIL & Onrite are live for purchasing online — one platform, one login (phone orders still go through the team).',
        tracks: ['website', 'marketing'],
        flag: 'Launch day',
      },
      {
        title: 'Send Launch Email',
        date: 'Mon, Aug 3',
        desc: 'Email 5: "We\'re live." Sign in, see your pricing, order in one place.',
        tracks: ['marketing'],
      },
    ],
  },
  {
    window: 'After August 3',
    note: 'Value, content & Phase 2',
    items: [
      {
        title: 'Add-On Value Page + "Create Professional Account" Banner',
        date: 'Around launch',
        desc: 'Publish an add-on value page (why Hairloss.com, benefits, attracting new clients to your salon) and a site banner to create a professional account.',
        tracks: ['website', 'content'],
      },
      {
        title: 'Publish Add-On Value Post',
        date: 'Post-launch',
        desc: 'A social post: why we are doing this, the benefits, and giving the hair replacement industry more visibility.',
        tracks: ['marketing', 'content'],
      },
      {
        title: 'Ricky Knowles Beginner Content Live',
        date: 'Mon, Aug 10',
        desc: 'Beginner educational content filmed with Ricky Knowles goes live behind the Hairloss.com paywall.',
        tracks: ['content'],
      },
      {
        title: 'Ongoing Educational Content',
        date: 'Aug onward',
        desc: 'Keep adding educational content. Hairloss.com becomes the place pros come to learn, not just buy.',
        tracks: ['content'],
      },
      {
        title: 'Phase 2 — Progen + Rest of Onrite',
        date: 'Post-launch',
        desc: 'Bring Progen wholesale pricing and the rest of the Onrite products on — content, pricing, and volume pricing.',
        tracks: ['website', 'content', 'marketing'],
      },
      {
        title: 'Phase 3 — Custom Orders Online',
        date: 'End of year',
        desc: 'Put custom ordering on the website so customers can place their custom orders online.',
        tracks: ['website'],
      },
    ],
  },
]

// ── Key dates (horizontal milestone strip) ──────────────────────────────────

const keyDates: { date: string; title: string; desc: string }[] = [
  { date: 'Mon, Jun 29', title: 'Sales Team Briefing', desc: 'Whole sales team briefed; full posting plan walked through before it goes live.' },
  { date: 'Tue, Jun 30', title: 'Hide Pricing + Remove TressAllure', desc: 'Hide hair-unit pricing for logged-out visitors; remove TressAllure; restructure HL.com.' },
  { date: 'Wed, Jul 1', title: 'Announcement + Login Email', desc: 'Emails to all clients (sign in to see certain pricing). Posting plan goes live.' },
  { date: 'Sat, Jul 26', title: 'NIL Last Order Date', desc: 'Final day to place orders on the New Image Labs website.' },
  { date: 'Sun, Jul 27', title: 'Migration + Welcome Email', desc: 'Customer accounts & companies migrate (orders do not). Welcome email with 10% off the first online order.' },
  { date: 'Fri, Jul 31', title: 'NIL Site Offline', desc: 'Site goes offline end of day Friday, unavailable through the weekend.' },
  { date: 'Mon, Aug 3', title: 'Launch — All on HL.com', desc: 'NIL & Onrite each return as their own landing page that redirects to Hairloss.com. Live for purchasing; launch email goes out.' },
]

// ── Account form fields ──────────────────────────────────────────────────────

const formFields: { label: string; note: string; required: boolean }[] = [
  { label: 'Business / Company Name', note: 'Shown on the account', required: true },
  { label: 'Business Owner (Main Contact)', note: 'Owner is contact #1 on the account', required: true },
  { label: 'Email', note: 'Login link + order tracking', required: true },
  { label: 'Phone', note: 'For the sales rep', required: true },
  { label: 'Business Address', note: 'Shipping + billing', required: true },
  { label: 'Resale / Tax ID or License', note: 'Confirms a real business', required: true },
  { label: 'Existing NIL / Onrite Account #', note: 'So we map your current tier', required: false },
  { label: 'Account Type', note: 'Barber · Salon · Studio · Distributor', required: true },
]

// ── Account access workflows ─────────────────────────────────────────────────

interface WorkflowStep {
  label: string
  desc: string
  final?: boolean
}

export interface AccountWorkflow {
  num: string
  title: string
  who: string
  steps: WorkflowStep[]
  emails: string[]
  note?: string
}

export const accountWorkflows: AccountWorkflow[] = [
  {
    num: 'Workflow 1',
    title: 'Transfer an Existing Client',
    who: 'Sales sets it up in the admin for a current NIL / Onrite customer',
    steps: [
      { label: 'Create the Company (Admin)', desc: 'Sales creates the company in the admin and maps their existing pricing tier. No form — done directly in the admin.' },
      { label: 'Create the User (Admin)', desc: 'Sales creates the user in the admin — business owner is the main contact.' },
      { label: 'Account Live', desc: 'Client signs in (no password — secure link), sees their tier pricing, gets tracking emails.', final: true },
    ],
    emails: [
      'Auto welcome email: "Hi New Image Labs / Onrite customer — we\'ve successfully transferred your account information to Hairloss.com. Continue shopping here with your pricing tier."',
    ],
    note: 'Transferring a client requires creating BOTH a company and a user account in the admin. Sales never fills out the account form.',
  },
  {
    num: 'Workflow 2',
    title: 'New Customer + B2B Form',
    who: 'Customer registers with the B2B form in one step',
    steps: [
      { label: 'Signs Up With B2B Form', desc: 'The user account is created at registration — their business info comes in with the B2B form. They automatically see retail pricing right away.' },
      { label: 'Staff Reviews + Creates Customer Account', desc: 'A salesperson reviews their B2B info, creates their customer account, and assigns a catalog-pricing tier.' },
      { label: 'Catalog Pricing Unlocks', desc: 'Once the tier is assigned, catalog pricing replaces retail on login.', final: true },
    ],
    emails: [
      'Auto-email on submit: "Our staff is reviewing your information to set up your wholesale pricing. For now, you have retail pricing."',
    ],
    note: 'The user account already exists and automatically sees retail pricing. Staff reviews the B2B info and assigns the catalog-pricing tier.',
  },
  {
    num: 'Workflow 3',
    title: 'New Customer — Email Only',
    who: 'Signed up with just an email, no B2B form yet',
    steps: [
      { label: 'Signs Up (Email Only)', desc: 'Account created with an email — no business info yet. They automatically see retail pricing.' },
      { label: 'Auto Welcome Email', desc: 'Prompts them to fill out the B2B form if they\'re a business.' },
      { label: 'Fills Out the Form', desc: 'If they\'re a business, this sends them into Workflow 2 for a catalog-pricing tier.', final: true },
    ],
    emails: [
      'Auto welcome email: "Welcome! If you\'re a business, salon, stylist, or barber, fill out the form to get wholesale pricing."',
    ],
    note: 'If they don\'t fill out the form, they stay a retail customer.',
  },
]

// ── Sales enablement — bilingual ─────────────────────────────────────────────

interface SalesContent {
  emailSubject: string
  emailIntro: string
  emailPoints: { title: string; desc: string }[]
  emailSignoff: string
  scriptIntro: string
  script: { cue: string; line: string }[]
  faqIntro: string
  faq: { q: string; a: string }[]
}

const salesContent: Record<'en' | 'es', SalesContent> = {
  en: {
    emailSubject: 'Important: NIL → Hairloss.com — what to tell customers',
    emailIntro:
      'Team — here\'s what\'s changing and how to talk to customers about it. This takes effect August 3. Walk every client through these five points. No gray areas.',
    emailPoints: [
      {
        title: 'No more buying on the NIL site',
        desc: 'Starting Aug 3, the New Image Labs website stops taking online orders. Online ordering moves to Hairloss.com.',
      },
      {
        title: 'Same tiers, same products',
        desc: 'Their pricing tier and the products they buy come with them. Nothing they rely on goes away.',
      },
      {
        title: 'No public pricing',
        desc: 'The site won\'t show prices. Customers need a company account to see B2B pricing — this protects our wholesale rates.',
      },
      {
        title: 'Sales creates the account',
        desc: 'We set up each customer\'s account on Hairloss.com. The customer just logs in.',
      },
      {
        title: 'Everything in one place',
        desc: 'One website for all NIL products and select Onrite products — plus discounts, promotions, and educational content. Easier to find, easier to buy.',
      },
    ],
    emailSignoff: '',
    scriptIntro: 'Use this when you call a customer. Keep it warm and reassuring — lead with what stays the same.',
    script: [
      { cue: 'Opening', line: '"Hi [name], I\'m calling with some good news about how you\'ll order from us going forward."' },
      { cue: 'The change', line: '"We\'re bringing everything onto one website — Hairloss.com. Starting August 3, you\'ll order there instead of the New Image Labs site."' },
      { cue: 'Reassure', line: '"Your pricing tier and the products you order stay exactly the same. Nothing you rely on is going away."' },
      { cue: 'Pricing & account', line: '"On the New Image site, both the pricing and the products were hidden. On Hairloss.com you can browse all the products — only the pricing sits behind your login, to protect our wholesale rates. You\'ll get an activation email for your Hairloss.com account — just sign in with the same email it was sent to, and you\'ll see your pricing."' },
      { cue: 'Your data migrates', line: '"Because you\'re a New Image Labs customer, your customer info and your company/business details will be visible on Hairloss.com. Just wait until the last week of July — your account gets migrated that week. (Note: past orders do not carry over.)"' },
      { cue: 'Aug 1 → 3', line: '"On August 1, the New Image Labs website goes offline for maintenance over the weekend. From August 3 there are no more orders on the New Image Labs website — everything is on Hairloss.com."' },
      { cue: 'Close', line: '"I\'ll send your login before August 3 so you\'re ready. Any questions, you call me directly."' },
    ],
    faqIntro: 'The questions customers will ask — and how to answer them.',
    faq: [
      { q: 'Why are you making this change?', a: 'We\'re bringing NIL and Onrite onto one website so it\'s easier to find products and order — everything in one place, plus easier access to discounts and promotions.' },
      { q: 'Will my pricing change?', a: 'No. Your tier and pricing move with you, exactly as they are today.' },
      { q: 'Why can\'t I see prices on the site?', a: 'You can browse all the products — only the pricing is hidden. It\'s wholesale and protected, so it shows once you log into your company account.' },
      { q: 'Do I need to set up my account?', a: 'No — your sales rep creates it for you. To log in, use the same email you received the Hairloss.com email from — we send a one-time code to that email to sign in. No more passwords.' },
      { q: 'Can I use my existing login credentials?', a: 'There are no passwords on Hairloss.com. You sign in with the same email your account was created under — we send a one-time code to that email each time. There\'s no old password to carry over and nothing to remember.' },
      { q: 'I forgot my password. What should I do?', a: 'Nothing to worry about — Hairloss.com is passwordless, so there\'s no password to forget. Just enter your email at sign-in and we send you a one-time code to get in.' },
      { q: 'What happens to my order history?', a: 'Your past NIL orders don\'t carry over as live, reorderable orders, but your order history will be viewable in your new Hairloss.com account — so you always have a record of what you\'ve purchased.' },
      { q: 'Will my saved addresses and payment methods transfer?', a: 'Your account and your company/business details migrate with you, so your information is already there when you sign in. For security, payment details need to be re-entered and saved by you.' },
      { q: 'Will I still find the products I order?', a: 'Yes. All your products are on Hairloss.com and you can browse the full catalog anytime — only the pricing is behind your login.' },
      { q: 'Will there be new products on the new site?', a: 'Yes. Bringing NIL and Onrite together means more in one place — you\'ll have access to select Onrite products too, with more added over time.' },
      { q: 'Will product names or packaging change?', a: 'Some product names are being updated as part of the move, but the products themselves are exactly the same. If something looks renamed, it\'s the same item you already order.' },
      { q: 'What if I can\'t find a product I previously purchased?', a: 'Just call your rep — they\'ll point you right to it (or to its new name). Everything you order is on Hairloss.com.' },
      { q: 'Can I still place orders on the current website?', a: 'Yes — you can keep ordering on the New Image Labs site through Saturday, July 26. That\'s the last day for online orders there.' },
      { q: 'When will ordering move to the new website?', a: 'Ordering moves to Hairloss.com on Monday, August 3. Between July 26 and August 3 we migrate accounts and bring everything over; the NIL site goes offline at the end of the day Friday, July 31 for the weekend.' },
      { q: 'Will my current order still be fulfilled?', a: 'Yes. Any order you place before the transition is fulfilled as normal — nothing about an order you\'ve already placed changes.' },
      { q: 'Can I track existing orders after the transition?', a: 'Yes. Orders placed before the move are still fulfilled and tracked as usual, and your order history will be viewable in your new Hairloss.com account.' },
      { q: 'Will shipping times change?', a: 'No. Shipping times stay the same — same fulfillment, same speed.' },
      { q: 'Will shipping rates change?', a: 'No. Your shipping rates stay the same.' },
      { q: 'What if I need help?', a: 'Your rep is one call away.' },
    ],
  },
  es: {
    emailSubject: 'Importante: NIL → Hairloss.com — qué decirle a los clientes',
    emailIntro:
      'Equipo — esto es lo que cambia y cómo hablarlo con los clientes. Entra en vigor el 3 de agosto. Expliquen estos cinco puntos a cada cliente. Sin ambigüedades.',
    emailPoints: [
      {
        title: 'Ya no se compra en el sitio de NIL',
        desc: 'A partir del 3 de agosto, el sitio web de New Image Labs deja de tomar pedidos en línea. Los pedidos en línea pasan a Hairloss.com.',
      },
      {
        title: 'Mismos niveles, mismos productos',
        desc: 'Su nivel de precios y los productos que compran se mantienen igual. Nada de lo que dependen desaparece.',
      },
      {
        title: 'Sin precios públicos',
        desc: 'El sitio no mostrará precios. Los clientes necesitan una cuenta de empresa para ver los precios B2B — esto protege nuestros precios mayoristas.',
      },
      {
        title: 'Ventas crea la cuenta',
        desc: 'Nosotros configuramos la cuenta de cada cliente en Hairloss.com. El cliente solo inicia sesión.',
      },
      {
        title: 'Todo en un solo lugar',
        desc: 'Un solo sitio para todos los productos de NIL y productos selectos de Onrite — además de descuentos, promociones y contenido educativo. Más fácil de encontrar, más fácil de comprar.',
      },
    ],
    emailSignoff: '',
    scriptIntro: 'Usen esto al llamar a un cliente. Mantengan un tono cálido y tranquilizador — empiecen por lo que se mantiene igual.',
    script: [
      { cue: 'Apertura', line: '"Hola [nombre], le llamo con buenas noticias sobre cómo hará sus pedidos a partir de ahora."' },
      { cue: 'El cambio', line: '"Estamos reuniendo todo en un solo sitio — Hairloss.com. A partir del 3 de agosto, hará sus pedidos ahí en lugar del sitio de New Image Labs."' },
      { cue: 'Tranquilizar', line: '"Su nivel de precios y los productos que pide se mantienen exactamente igual. Nada de lo que usted depende va a desaparecer."' },
      { cue: 'Precios y cuenta', line: '"En el sitio de New Image, tanto los precios como los productos estaban ocultos. En Hairloss.com usted puede ver todos los productos — solo los precios quedan detrás de su inicio de sesión, para proteger nuestros precios mayoristas. Recibirá un correo de activación para su cuenta de Hairloss.com — solo inicie sesión con el mismo correo al que se lo enviamos y verá sus precios."' },
      { cue: 'Migración de sus datos', line: '"Como usted es cliente de New Image Labs, su información de cliente y los datos de su empresa/negocio estarán visibles en Hairloss.com. Solo espere hasta la última semana de julio — su cuenta se migra esa semana. (Nota: los pedidos anteriores no se transfieren.)"' },
      { cue: 'Del 1 al 3 de agosto', line: '"El 1 de agosto, el sitio web de New Image Labs entra en mantenimiento durante el fin de semana. A partir del 3 de agosto ya no se hacen pedidos en el sitio de New Image Labs — todo está en Hairloss.com."' },
      { cue: 'Cierre', line: '"Le enviaré su acceso antes del 3 de agosto para que esté listo. Cualquier pregunta, llámeme directamente."' },
    ],
    faqIntro: 'Las preguntas que harán los clientes — y cómo responderlas.',
    faq: [
      { q: '¿Por qué hacen este cambio?', a: 'Llevamos más de 50 años en esto. Estamos reuniendo NIL y Onrite en un solo sitio para que sea más fácil encontrar productos y hacer pedidos — todo en un mismo lugar, además de un acceso más fácil a descuentos y promociones.' },
      { q: '¿Cambiará mi precio?', a: 'No. Su nivel y sus precios se mantienen tal como están hoy.' },
      { q: '¿Por qué no puedo ver los precios en el sitio?', a: 'Puede ver todos los productos — solo los precios están ocultos. Son mayoristas y están protegidos, así que se muestran al iniciar sesión en su cuenta de empresa.' },
      { q: '¿Tengo que crear mi cuenta?', a: 'No — su representante de ventas la crea por usted. Para iniciar sesión, use el mismo correo donde recibió el mensaje de Hairloss.com — le enviamos un código de un solo uso a ese correo. Sin contraseñas.' },
      { q: '¿Puedo usar mis credenciales de acceso actuales?', a: 'En Hairloss.com no hay contraseñas. Inicia sesión con el mismo correo con el que se creó su cuenta — le enviamos un código de un solo uso a ese correo cada vez. No hay contraseña anterior que trasladar ni nada que memorizar.' },
      { q: 'Olvidé mi contraseña. ¿Qué hago?', a: 'No se preocupe — Hairloss.com no usa contraseñas, así que no hay ninguna que olvidar. Solo ingrese su correo al iniciar sesión y le enviamos un código de un solo uso para entrar.' },
      { q: '¿Qué pasa con mi historial de pedidos?', a: 'Sus pedidos anteriores de NIL no se trasladan como pedidos activos para volver a comprar, pero su historial de pedidos será visible en su nueva cuenta de Hairloss.com — así siempre tiene un registro de lo que ha comprado.' },
      { q: '¿Se transferirán mis direcciones y métodos de pago guardados?', a: 'Su cuenta y los datos de su empresa/negocio se migran con usted, así que su información ya está ahí cuando inicia sesión. Por seguridad, los datos de pago debe volver a ingresarlos y guardarlos usted.' },
      { q: '¿Seguiré encontrando los productos que pido?', a: 'Sí. Todos sus productos están en Hairloss.com y puede ver el catálogo completo en cualquier momento — solo los precios quedan detrás de su inicio de sesión.' },
      { q: '¿Habrá productos nuevos en el sitio nuevo?', a: 'Sí. Reunir NIL y Onrite significa más en un solo lugar — también tendrá acceso a productos selectos de Onrite, y se irán agregando más con el tiempo.' },
      { q: '¿Cambiarán los nombres o el empaque de los productos?', a: 'Algunos nombres de productos se están actualizando como parte del cambio, pero los productos en sí son exactamente los mismos. Si algo parece tener otro nombre, es el mismo artículo que ya pide.' },
      { q: '¿Y si no encuentro un producto que compré antes?', a: 'Solo llame a su representante — le indicará exactamente dónde está (o su nuevo nombre). Todo lo que usted pide está en Hairloss.com.' },
      { q: '¿Puedo seguir haciendo pedidos en el sitio actual?', a: 'Sí — puede seguir comprando en el sitio de New Image Labs hasta el sábado 26 de julio. Ese es el último día para pedidos en línea ahí.' },
      { q: '¿Cuándo se mudan los pedidos al sitio nuevo?', a: 'Los pedidos se mudan a Hairloss.com el lunes 3 de agosto. Entre el 26 de julio y el 3 de agosto migramos las cuentas y trasladamos todo; el sitio de NIL se desconecta al final del día el viernes 31 de julio durante el fin de semana.' },
      { q: '¿Se cumplirá mi pedido actual?', a: 'Sí. Cualquier pedido que haga antes de la transición se cumple normalmente — nada cambia en un pedido que ya hizo.' },
      { q: '¿Puedo rastrear pedidos existentes después de la transición?', a: 'Sí. Los pedidos hechos antes del cambio se cumplen y rastrean como siempre, y su historial de pedidos será visible en su nueva cuenta de Hairloss.com.' },
      { q: '¿Cambiarán los tiempos de envío?', a: 'No. Los tiempos de envío se mantienen igual — misma logística, misma rapidez.' },
      { q: '¿Cambiarán las tarifas de envío?', a: 'No. Sus tarifas de envío se mantienen igual.' },
      { q: '¿Y si necesito ayuda?', a: 'Su representante está a una llamada de distancia.' },
    ],
  },
}

// ── Email designs ────────────────────────────────────────────────────────────

export const emails: EmailDesign[] = [
  // ── New Image Labs clients (the core B2B migration) ──
  {
    track: 'nil',
    num: 1,
    send: 'July 1',
    timing: '~5 weeks before launch',
    subject: 'New Image Labs is moving to Hairloss.com',
    preview: 'Same products, same pricing — one platform for your wholesale orders.',
    goal: 'Announce the move + the sign-in-for-pricing change. Lead with continuity.',
    tone: 'Professional and reassuring. Business to business.',
    body: [
      'For more than 50 years, you have trusted New Image Labs as your professional provider in the hair replacement industry. As part of our continued commitment to serving your business, we are bringing that experience onto a single platform: Hairloss.com.',
      'Instead of working across separate sites, your account, products, and ordering will be in one place. The things that matter most stay the same — your pricing tier, the products you order, and the sales and support team you work with.',
      'One change to note: going forward, you will sign in to your account to view pricing on certain products. Your pricing tier stays exactly the same — it simply lives behind your login.',
      'There is no action required today. Over the coming weeks we will share what to expect as we move to the new platform.',
      'If you have any questions, please contact your sales representative.',
    ],
    cta: '',
  },
  {
    track: 'nil',
    num: 2,
    send: 'July 14–16',
    timing: '~3 weeks before launch',
    subject: 'How your Hairloss.com account will work',
    preview: 'Your account, passwordless sign-in, and your pricing.',
    goal: 'Explain accounts, passwordless sign-in, and pricing behind login.',
    tone: 'Clear and professional. Business to business.',
    body: [
      'As part of the move to Hairloss.com, your account is being migrated for you. Your sales representative will create your account, and you will receive an activation email from Hairloss.com.',
      'To sign in, simply use the same email address the activation message was sent to. Sign-in is passwordless — you will enter your email and receive a one-time code to access your account.',
      'Your pricing will remain securely tied to your account. To protect our wholesale pricing, prices are not displayed publicly; once you sign in, you will see your tier pricing — the same pricing you have today.',
      'A note on dates: orders on the New Image Labs site run through July 26. From August 3, everything is on Hairloss.com.',
      'If you have any questions, please contact your sales representative.',
    ],
    cta: '',
  },
  {
    track: 'nil',
    num: 3,
    send: 'July 21–23',
    timing: 'Order cutoff July 26',
    subject: 'Final week for orders on the New Image Labs website',
    preview: 'Order on New Image Labs through July 26.',
    goal: 'Final reminder ahead of the July 26 cutoff.',
    tone: 'Direct and professional. Business to business.',
    body: [
      'This is the final week to place orders on the New Image Labs website — orders are accepted through July 26.',
      'The New Image Labs site then goes offline at the end of the day Friday, July 31, and is unavailable through the weekend. On Monday, August 3, it returns as a landing page that takes you to Hairloss.com to order.',
      'There is nothing you need to do to prepare. Your account, your pricing tier, and the products you order all move with you. Once your account has been migrated, you will receive an email from Hairloss.com with instructions to sign in.',
      'If you have any questions, please contact your sales representative.',
    ],
    cta: '',
  },
  {
    track: 'nil',
    num: 4,
    send: 'July 27',
    timing: 'Migration day',
    subject: 'Your account has moved to Hairloss.com',
    preview: 'Your account and information are now on Hairloss.com.',
    goal: 'Welcome / migration confirmation; drive first sign-in with the 10% offer.',
    tone: 'Warm, professional, reassuring. Business to business.',
    body: [
      'We have successfully transferred your account information to Hairloss.com. You can continue ordering here with the same pricing tier you have always had.',
      'You will receive an activation email from Hairloss.com — sign in with the same email address it was sent to. Sign-in is passwordless, with a one-time code.',
      'As a welcome, you will receive 10% off your first online order on Hairloss.com.',
      'If you do not see your pricing when you sign in, please contact your sales representative or message us on the website chat.',
    ],
    cta: '',
  },
  {
    track: 'nil',
    num: 5,
    send: 'August 3',
    timing: 'Launch day',
    subject: 'Hairloss.com is now live',
    preview: 'Sign in to order — all in one place.',
    goal: 'Launch. Drive first sign-in and first order.',
    tone: 'Professional and welcoming. Business to business.',
    body: [
      'Hairloss.com is now live. Sign in to your account to view your pricing, browse your full catalog, and place orders in one convenient location.',
      'Remember, you will receive 10% off your first online order on Hairloss.com.',
      'If you have not yet received your activation email, please contact your sales representative or message us on the website chat.',
    ],
    cta: 'Sign in to Hairloss.com',
  },

  // ── Onrite clients (selective products + professional accounts) ──
  {
    track: 'onrite',
    num: 1,
    send: 'July 1',
    timing: '~5 weeks before launch',
    subject: 'Onrite is joining Hairloss.com',
    preview: 'Selective Onrite products, now easier to purchase online.',
    goal: 'Announce Onrite joining HL.com; set expectations.',
    tone: 'Professional and welcoming. Business to business.',
    body: [
      'We are bringing Onrite onto Hairloss.com — one platform that makes it easier to find and purchase the products you rely on.',
      'To start, selective Onrite products will be available on Hairloss.com, with more on the way.',
      'Your pricing and the team you work with stay the same. Over the coming weeks we will share how to set up your account and order online.',
      'If you have any questions, please contact your sales representative.',
    ],
    cta: '',
  },
  {
    track: 'onrite',
    num: 2,
    send: 'July 28–30',
    timing: 'Pre-launch',
    subject: 'Create your professional account on Hairloss.com',
    preview: 'Get set up before launch — 10% off your first online order.',
    goal: 'Get Onrite customers to create a professional account before launch.',
    tone: 'Warm, professional, action-oriented. Business to business.',
    body: [
      'We are giving you a new platform to purchase online — easier, and all in one place. Hairloss.com goes live on August 3.',
      'Create your professional account so your pricing is ready at launch. Your sales representative can set this up with you, and sign-in is passwordless — just a one-time code to your email.',
      'As a welcome, you will receive 10% off your first online order on Hairloss.com.',
      'If you have any questions, please contact your sales representative.',
    ],
    cta: 'Create your professional account',
  },
  {
    track: 'onrite',
    num: 3,
    send: 'August 3',
    timing: 'Launch day',
    subject: 'Hairloss.com is now live',
    preview: 'Sign in to your professional account and order.',
    goal: 'Launch. Drive first sign-in and first order for Onrite customers.',
    tone: 'Professional and welcoming. Business to business.',
    body: [
      'Hairloss.com is now live. Sign in to your professional account to see your pricing and order Onrite products — and more — in one place.',
      'Remember, you will receive 10% off your first online order on Hairloss.com.',
      'If you have not yet created your account or do not see your pricing, please contact your sales representative or message us on the website chat.',
    ],
    cta: 'Sign in to Hairloss.com',
  },

  // ── Hairloss.com customers (retail / consumer) ──
  {
    track: 'hairloss',
    num: 1,
    send: 'July 1',
    timing: '~5 weeks before launch',
    subject: 'Updates to Hairloss.com — log in to see your pricing',
    preview: 'New product names, and log in to see pricing on your favorites.',
    goal: 'Tell retail customers about renamed products + log in to see pricing.',
    tone: 'Friendly, clear, consumer-facing.',
    body: [
      'We are making a few updates to Hairloss.com to bring more of the brands and products you love together in one place.',
      'Some products are getting new names, so you may notice a few familiar favorites under updated titles.',
      'A number of products are also moving into our professional range. To keep seeing pricing on all your favorite products, simply log in to your account.',
      'Creating a free account takes a moment — sign-in is passwordless, with a one-time code sent to your email.',
      'Questions? Reach us anytime on the website chat.',
    ],
    cta: '',
  },
  {
    track: 'hairloss',
    num: 2,
    send: 'August 3',
    timing: 'Launch day',
    subject: 'New on Hairloss.com',
    preview: 'More of the brands and products you trust — in one place.',
    goal: 'Launch: invite retail customers to explore the expanded catalog.',
    tone: 'Friendly, upbeat, consumer-facing.',
    body: [
      'Hairloss.com just got bigger. We have brought more of the brands and products you trust together in one place, making it easier to find the right solution for you.',
      'Explore the new catalog and discover what is now available.',
      'Questions? We are here on the website chat.',
    ],
    cta: 'Shop Hairloss.com',
  },
]

const trackMeta: Record<Track, { label: string; cls: string }> = {
  marketing: { label: 'Marketing / Sales', cls: 'prc-tag--marketing' },
  website: { label: 'Website', cls: 'prc-tag--website' },
  content: { label: 'Content', cls: 'prc-tag--content' },
}

// ── Section divider ──────────────────────────────────────────────────────────

function Divider({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="prc-divider">
      <div className="prc-divider__num">{num}</div>
      <div className="prc-divider__text">
        <div className="prc-divider__title">{title}</div>
        <div className="prc-divider__sub">{sub}</div>
      </div>
    </div>
  )
}

// ── Reusable: message body (used on-screen + in the printable PDF) ───────────

function MessageBody() {
  return (
    <div className="cp-segment__body">
      <div className="cp-segment__columns">
        <div className="cp-segment__col">
          <div className="cp-segment__col-title">What stays the same</div>
          <ul className="cp-segment__col-items">
            <li>Your pricing tier — exactly what you have now</li>
            <li>The products you already order</li>
            <li>The team and reps you know</li>
            <li>An American company and an American website</li>
            <li>50+ years of trust behind it all</li>
          </ul>
        </div>
        <div className="cp-segment__col">
          <div className="cp-segment__col-title">What gets better</div>
          <ul className="cp-segment__col-items">
            <li>One website instead of two — everything in one place</li>
            <li>Easier to find products and reorder</li>
            <li>Discounts and promotions all in one spot</li>
            <li>More educational content to grow your business</li>
          </ul>
        </div>
      </div>
      <div className="cp-segment__callout">
        <strong>Tone:</strong> Warm, confident, and reassuring — never corporate. We've been doing this for over 50 years; we're not changing who we are, we're making it easier to work with us. Frame the merge as <em>"we brought everything together for you,"</em> not <em>"we shut down a website."</em> Every message leads with reassurance before it mentions change. Lean into it: <strong>we're an American company and this is an American website.</strong>
      </div>

      <div className="prc-mitigation">
        <div className="prc-mitigation__title">Overcoming the tough questions</div>
        <div className="prc-mitigation__grid">
          <div className="prc-worry">
            <div className="prc-worry__q">"Didn't you tell me Hairloss.com wasn't associated with you?"</div>
            <div className="prc-worry__a">Be honest and simple: Hairloss.com started as a collaboration. We've since taken it over — it's now our official website, run by us. Same company, same team, now all under one roof.</div>
          </div>
          <div className="prc-worry">
            <div className="prc-worry__q">"So what is Hairloss.com now?"</div>
            <div className="prc-worry__a">It's ours. We acquired the site and brought NIL and Onrite onto it. Frame it as growth — we bought it and made it the home for everything.</div>
          </div>
          <div className="prc-worry">
            <div className="prc-worry__q">"Is this still an American company?"</div>
            <div className="prc-worry__a">Yes — 100%. We're an American company and Hairloss.com is an American website. That doesn't change.</div>
          </div>
          <div className="prc-worry">
            <div className="prc-worry__q">"Why the change all of a sudden?"</div>
            <div className="prc-worry__a">It's not sudden — it's the natural next step. One site is easier for you: one login, one catalog, one place for promotions and educational content.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Reusable: sales blocks for one language (email + script + FAQ) ───────────

function SalesBlocks({ lang }: { lang: 'en' | 'es' }) {
  const c = salesContent[lang]
  return (
    <>
      {/* 1. Mass email to sales team */}
      <div className="prc-block">
        <div className="prc-block__label">
          <span className="prc-block__num">1</span>
          {lang === 'en' ? 'Mass Email — Send to the Sales Team' : 'Correo Masivo — Enviar al Equipo de Ventas'}
        </div>
        <div className="prc-mock">
          <div className="prc-mock__subjectline">
            <div className="prc-mock__subject">{c.emailSubject}</div>
            <div className="prc-mock__preview">
              {lang === 'en' ? 'To: Sales Team · From: Marketing' : 'Para: Equipo de Ventas · De: Marketing'}
            </div>
          </div>
          <div className="prc-mock__body">
            <p className="prc-mock__lead">{c.emailIntro}</p>
            <ol className="prc-numbered">
              {c.emailPoints.map((pt) => (
                <li key={pt.title} className="prc-numbered__item">
                  <span className="prc-numbered__title">{pt.title}</span>
                  <span className="prc-numbered__desc">{pt.desc}</span>
                </li>
              ))}
            </ol>
            {c.emailSignoff && <p className="prc-mock__signoff">{c.emailSignoff}</p>}
          </div>
        </div>
      </div>

      {/* 2. Phone script */}
      <div className="prc-block">
        <div className="prc-block__label">
          <span className="prc-block__num">2</span>
          {lang === 'en' ? 'Phone Script — What to Say to Customers' : 'Guion Telefónico — Qué Decirle a los Clientes'}
        </div>
        <p className="prc-block__intro">{c.scriptIntro}</p>
        <div className="prc-script">
          {c.script.map((s) => (
            <div key={s.cue} className="prc-script__line">
              <div className="prc-script__cue">{s.cue}</div>
              <div className="prc-script__say">{s.line}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Client FAQ */}
      <div className="prc-block">
        <div className="prc-block__label">
          <span className="prc-block__num">3</span>
          {lang === 'en' ? 'Client FAQ — Questions They\'ll Ask' : 'Preguntas Frecuentes — Lo Que Preguntarán'}
        </div>
        <p className="prc-block__intro">{c.faqIntro}</p>
        <div className="prc-faq">
          {c.faq.map((item) => (
            <div key={item.q} className="prc-faq__item">
              <div className="prc-faq__q">{item.q}</div>
              <div className="prc-faq__a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function PRCampaignPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
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
    <div className="campaign-page">

      {/* ── Hero ── */}
      <header className="cp-hero">
        <div className="cp-hero__inner">
          <p className="cp-hero__eyebrow">PR &amp; Merge Campaign</p>
          <h1 className="cp-hero__title">
            New Image Labs + Onrite<br />
            <span>→ Hairloss.com</span>
          </h1>
          <div className="cp-hero__dates">
            <span>June 2026</span>
            <span className="cp-hero__dates-dot" />
            <span>July 2026</span>
            <span className="cp-hero__dates-dot" />
            <span>Launch Aug 3</span>
          </div>
        </div>
      </header>

      <main className="cp-main">
        {/* ════ ROLLOUT PHASES ════ */}
        <Divider num="01" title="The Rollout" sub="Two phases — what's launching and what comes after" />

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Rollout</span>
            <h2 className="cp-section__title">Two Phases</h2>
            <p className="cp-section__desc">
              Phase 1 gets the launch products live. Phase 2 brings Progen wholesale pricing and the rest of Onrite. Phase 3 adds custom orders online by the end of the year.
            </p>
          </div>

          <div className="prc-phases">
            {phases.map((phase) => (
              <div key={phase.num} className={`prc-phase prc-phase--${phase.variant}`}>
                <div className="prc-phase__top">
                  <span className="prc-phase__num">{phase.num}</span>
                  <span className="prc-phase__when">{phase.when}</span>
                </div>
                <div className="prc-phase__title">{phase.title}</div>
                <div className="prc-phase__desc">{phase.desc}</div>
                <div className="prc-phase__products">
                  <div className="prc-phase__products-label">{phase.productsLabel}</div>
                  <ul className="prc-phase__products-list">
                    {phase.products.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                {phase.pillars.length > 0 && (
                  <div className="prc-phase__pillars">
                    {phase.pillars.map((p) => (
                      <div key={p.title} className="prc-pillar">
                        <div className="prc-pillar__icon">{p.icon}</div>
                        <div className="prc-pillar__title">{p.title}</div>
                        <div className="prc-pillar__desc">{p.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="cp-overview">
            <div className="cp-overview-card">
              <div className="cp-overview-card__icon">🚀</div>
              <div className="cp-overview-card__label">Launch</div>
              <div className="cp-overview-card__value">August 3, 2026</div>
            </div>
            <div className="cp-overview-card">
              <div className="cp-overview-card__icon">📦</div>
              <div className="cp-overview-card__label">Moving Over</div>
              <div className="cp-overview-card__value">NIL + Onrite (Phased)</div>
            </div>
            <div className="cp-overview-card">
              <div className="cp-overview-card__icon">🔐</div>
              <div className="cp-overview-card__label">Key Change</div>
              <div className="cp-overview-card__value">Accounts + Hidden Pricing</div>
            </div>
          </div>
        </section>

        {/* ════ THE MESSAGE ════ */}
        <Divider num="02" title="NIL and OR merge on Hairloss.com" sub="How we position the change & handle backlash" />

        <div className="cp-segment">
          <div className="cp-segment__header">
            <span className="cp-segment__badge">The Message</span>
            <h2 className="cp-segment__title">NIL and OR merge on Hairloss.com</h2>
            <p className="cp-segment__subtitle">
              A merge can feel like a loss to loyal customers. Our job is to make it feel like an upgrade. Lead with what stays the same, then what gets better.
            </p>
          </div>

          <MessageBody />
        </div>

        {/* ════ FOR THE SALES TEAM ════ */}
        <Divider num="03" title="For the Sales Team" sub="Mass email, phone script & client FAQ — English / Español" />

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Sales Enablement</span>
            <h2 className="cp-section__title">Briefing the Sales Team</h2>
            <p className="cp-section__desc">
              Everything sales needs: the mass email of changes to send the team, the phone script for calling customers, and the FAQ clients will ask. Switch to Español for the team.
            </p>
          </div>

          {/* Toolbar: language toggle + PDF download */}
          <div className="prc-toolbar">
            <div className="prc-lang">
              <button
                className={`prc-lang__btn ${lang === 'en' ? 'is-active' : ''}`}
                onClick={() => setLang('en')}
              >
                English
              </button>
              <button
                className={`prc-lang__btn ${lang === 'es' ? 'is-active' : ''}`}
                onClick={() => setLang('es')}
              >
                Español
              </button>
            </div>
            <button className="prc-download" onClick={() => window.print()}>
              ⬇ Download PDF — Message + Sales (EN &amp; ES)
            </button>
          </div>

          <SalesBlocks lang={lang} />
        </section>

        {/* ════ WEBSITE & ACCOUNTS ════ */}
        <Divider num="04" title="Website & Accounts" sub="How customers get an account and unlock pricing" />

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Website + Sales Ops</span>
            <h2 className="cp-section__title">Account &amp; Access</h2>
            <p className="cp-section__desc">
              How an account gets created depends on who's doing it — three workflows, in order. Below them: how the team routes leads and gives access.
            </p>
          </div>

          {/* The three workflows */}
          <div className="prc-subhead">The 3 ways an account gets created</div>
          <div className="prc-workflows">
            {accountWorkflows.map((wf) => (
              <div key={wf.num} className="prc-wf">
                <div className="prc-wf__head">
                  <span className="prc-wf__num">{wf.num}</span>
                  <div className="prc-wf__heading">
                    <div className="prc-wf__title">{wf.title}</div>
                    <div className="prc-wf__who">{wf.who}</div>
                  </div>
                </div>
                <div className="prc-flow">
                  {wf.steps.map((s, i) => (
                    <div
                      key={s.label}
                      className={`prc-flow__step ${s.final ? 'prc-flow__step--final' : ''}`}
                    >
                      <div className="prc-flow__num">{i + 1}</div>
                      <div className="prc-flow__label">{s.label}</div>
                      <div className="prc-flow__desc">{s.desc}</div>
                    </div>
                  ))}
                </div>
                {wf.emails.map((e) => (
                  <div key={e} className="prc-autoemail">
                    <span className="prc-autoemail__icon">✉</span>
                    <span className="prc-autoemail__text">{e}</span>
                  </div>
                ))}
                {wf.note && <div className="prc-wf__note">{wf.note}</div>}
              </div>
            ))}
          </div>

          {/* Team & routing */}
          <div className="prc-subhead">The Hairloss.com sales rep</div>
          <p className="prc-roles-intro">
            One full-time rep owns everything Hairloss.com — managing leads, onboarding customers, and
            explaining how to purchase online. The rest of the sales team can redirect their clients to
            this rep to better understand how to buy on Hairloss.com.
          </p>

          <div className="prc-role prc-role--b2b">
            <div className="prc-role__head">
              <span className="prc-role__icon">💼</span>
              <div>
                <div className="prc-role__tag">Hairloss.com Sales Rep · full-time</div>
                <div className="prc-role__title">Owns everything Hairloss.com</div>
              </div>
            </div>
            <div className="prc-role__block">
              <div className="prc-role__label">Does</div>
              <ul>
                <li>Manages all Hairloss.com leads (retail + B2B) and the contact form &amp; inbox chat</li>
                <li>Onboards customers — including the first-purchase offer: 10% off the first online order on Hairloss.com</li>
                <li>Reviews B2B forms, creates accounts, and assigns catalog price + territory</li>
                <li>Manages retail, online orders, and any other Hairloss.com customer issue</li>
                <li>The wider sales team redirects clients here to learn how to purchase online</li>
              </ul>
            </div>
          </div>

          {/* Account form */}
          <div className="prc-subhead">The B2B account form</div>
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
              <span className="prc-field__req">*</span> Required · Submitting sends the request to sales for review &amp; tier assignment. <strong>No passwords</strong> — customers sign in with a secure email link and get automatic order-tracking emails.
            </div>
          </div>
          <p className="prc-formnote">
            How B2B accounts work — requirements, access &amp; rules — lives on the{' '}
            <a href="#/b2b-policy">Wholesale Account Policy</a> page.
          </p>
        </section>

        {/* ════ ROADMAP / TIMELINE ════ */}
        <Divider num="05" title="What Gets Done & When" sub="Key dates, then the two-week breakdown up to Aug 3" />

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Roadmap</span>
            <h2 className="cp-section__title">What Gets Done &amp; When</h2>
            <p className="cp-section__desc">
              The key dates at a glance, then every task with its date and team in two-week windows.
            </p>
          </div>

          {/* Horizontal key-dates timeline */}
          <div className="prc-subhead">Key dates</div>
          <div className="prc-htimeline">
            <div className="prc-htimeline__track">
              {keyDates.map((d) => (
                <div key={d.title} className="prc-ht">
                  <div className="prc-ht__dot" />
                  <div className="prc-ht__date">{d.date}</div>
                  <div className="prc-ht__title">{d.title}</div>
                  <div className="prc-ht__desc">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="prc-subhead">Full breakdown</div>

          {/* Legend */}
          <div className="prc-legend">
            <span className="prc-tag prc-tag--marketing">Marketing / Sales</span>
            <span className="prc-tag prc-tag--website">Website</span>
            <span className="prc-tag prc-tag--content">Content</span>
          </div>

          <div className="prc-roadmap">
            {timeline.map((win) => (
              <div key={win.window} className="prc-tl-group">
                <div className="prc-tl-group__header">
                  <div className="prc-tl-group__window">{win.window}</div>
                  <div className="prc-tl-group__note">{win.note}</div>
                </div>
                <div className="cp-timeline">
                  {win.items.map((item) => (
                    <div key={item.title} className="cp-timeline-item">
                      <div className="cp-timeline-item__dot" />
                      <div className="cp-timeline-item__date">{item.date}</div>
                      <div className="prc-tl-item__head">
                        <div className="cp-timeline-item__title">{item.title}</div>
                        <div className="prc-item-tags">
                          {item.tracks.map((t) => (
                            <span key={t} className={`prc-tag ${trackMeta[t].cls}`}>
                              {trackMeta[t].label}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="cp-timeline-item__desc">{item.desc}</div>
                      {item.flag && <div className="prc-flag">⚠ {item.flag}</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="cp-segment__callout">
            <strong>Sequencing watch:</strong> Hiding the public/retail pricing comes <em>first</em> — it has to be live before sales adds any customers and before the email campaign starts. Build and confirm it in June, then open account creation and send the announcement email. Don't add customers or email anyone until pricing is hidden.
          </div>
        </section>

        {/* ════ POSTING PLAN ════ */}
        <Divider num="06" title="Posting Plan" sub="Weekly social schedule + sample posts (copy only, no images yet)" />

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Social</span>
            <h2 className="cp-section__title">Posting Plan</h2>
            <p className="cp-section__desc">
              One post a week from July 1 to launch. Copy is drafted below; final designs (Montserrat, on-brand) come later. We also collab-post across Hairloss.com, New Image Labs &amp; Onrite, and link stories to the blog.
            </p>
          </div>

          <div className="prc-subhead">Weekly schedule</div>
          <div className="prc-schedule">
            {postingSchedule.map((w) => (
              <div key={w.week} className="prc-sched">
                <div className="prc-sched__week">{w.week}</div>
                <ul className="prc-sched__items">
                  {w.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="prc-subhead">Sample posts</div>
          <div className="prc-posts-grid">
            {socialPosts.map((p) => (
              <PostMock key={p.id} post={p} />
            ))}
          </div>
        </section>

        {/* ════ EMAILS PR CAMPAIGN ════ */}
        <Divider num="07" title="Emails PR Campaign" sub="Three sequences — click through to view each email" />

        <section className="cp-section">
          <span className="cp-section__badge cp-section__badge--strategy">Email Campaign</span>
          <h2 className="cp-section__title">Emails PR Campaign</h2>
          <p className="cp-section__desc">
            Three separate sequences — one for New Image Labs clients, one for Onrite clients, and one for Hairloss.com customers. Each gets its own message.
          </p>

          {/* Overview — scoped email titles per track */}
          <div className="prc-email-overview-grid">
            {(['nil', 'onrite', 'hairloss'] as const).map((track) => (
              <div key={track} className="prc-email-overcol">
                <div className="prc-email-overcol__label">{emailTrackMeta[track].label}</div>
                {emails.filter((em) => em.track === track).map((em) => (
                  <button
                    key={`${em.track}-${em.num}`}
                    className="prc-email-orow"
                    onClick={() => {
                      setEmailTrack(em.track)
                      setEmailIdx(emails.filter((x) => x.track === em.track).findIndex((x) => x.num === em.num))
                    }}
                  >
                    <span className="prc-email-orow__num">{emailTrackMeta[em.track].short} · {em.num}</span>
                    <span className="prc-email-orow__send">{em.send}</span>
                    <span className="prc-email-orow__subject">{em.subject}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Click-through carousel */}
          <div className="prc-carousel">
            <div className="prc-email-tabs">
              {(['nil', 'onrite', 'hairloss'] as const).map((t) => (
                <button
                  key={t}
                  className={`prc-tab ${emailTrack === t ? 'is-active' : ''}`}
                  onClick={() => pickEmailTrack(t)}
                >
                  {emailTrackMeta[t].label}
                </button>
              ))}
            </div>

            <div className="prc-carousel__bar">
              <button className="prc-cbtn" onClick={prevEmail} aria-label="Previous email">←</button>
              <div className="prc-carousel__meta">
                <span className="prc-carousel__num">Email {e.num} of {trackEmails.length}</span>
                <span className="prc-carousel__send">Sends {e.send}</span>
                <span className="prc-carousel__rel">{e.timing}</span>
              </div>
              <button className="prc-cbtn" onClick={nextEmail} aria-label="Next email">→</button>
            </div>

            <div className="prc-carousel__goal">
              <span className="prc-carousel__goal-label">Goal</span> {e.goal}
              <span className="prc-carousel__goal-label">Tone</span> {e.tone}
            </div>

            <EmailMock email={e} />

            <div className="prc-dots">
              {trackEmails.map((em, i) => (
                <button
                  key={`${em.track}-${em.num}`}
                  className={`prc-dot ${i === emailIdx ? 'is-active' : ''}`}
                  onClick={() => setEmailIdx(i)}
                  aria-label={`Email ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Printable PDF document — Message + Sales briefing (EN & ES) ── */}
      <div className="prc-print">
        <div className="prc-print__head">
          <div className="prc-print__brand">Hairloss.com</div>
          <div className="prc-print__title">NIL and OR merge on Hairloss.com</div>
          <div className="prc-print__sub">
            Sales Briefing — Positioning, Mass Email, Phone Script &amp; Client FAQ · English &amp; Español
          </div>
        </div>

        <h2 className="prc-print__h2">The Message — How We Position This</h2>
        <MessageBody />

        <div className="prc-print__section prc-print__section--break">
          <h2 className="prc-print__h2">For the Sales Team — English</h2>
          <SalesBlocks lang="en" />
        </div>

        <div className="prc-print__section prc-print__section--break">
          <h2 className="prc-print__h2">Para el Equipo de Ventas — Español</h2>
          <SalesBlocks lang="es" />
        </div>
      </div>

      <footer className="cp-footer">
        Hairloss.com · NIL + Onrite Merge · PR Campaign · June — August 2026
      </footer>
    </div>
  )
}
