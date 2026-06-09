import { useState } from 'react'
import './CampaignPage.css'
import './PRCampaignPage.css'

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
  variant: '1' | '2'
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
]

// ── Roadmap — timeline in two-week windows up to Aug 3, then after ───────────

const timeline: TimelineWindow[] = [
  {
    window: 'June 2 – 15',
    note: 'Get products and pricing into the site',
    items: [
      {
        title: 'Finish Product + Color Upload',
        date: 'By Fri, June 5',
        desc: 'Phase 1 launch products live on Hairloss.com — all NIL men\'s units, some Onrite men\'s units, women\'s Onrite units, Permarite adhesives, and the Jorgen line. Colors finish uploading.',
        tracks: ['website', 'content'],
      },
      {
        title: 'Upload Pricing Tiers',
        date: 'June 9 – 13',
        desc: 'Load every customer tier so accounts map to the right B2B pricing. Has to be in before accounts.',
        tracks: ['website'],
      },
      {
        title: 'Build Account Creation Workflow',
        date: 'June 9 – 15',
        desc: 'Create account → request to sales → sales approves & assigns tier → B2B pricing unlocks.',
        tracks: ['website'],
      },
    ],
  },
  {
    window: 'June 16 – 30',
    note: 'Build accounts, train staff, hide pricing & restructure',
    items: [
      {
        title: 'Build "Create Account" Form',
        date: 'June 16 – 19',
        desc: 'The form customers use to open a B2B account (fields below).',
        tracks: ['website'],
      },
      {
        title: 'Add "Create B2B Account" + "Login" Menu',
        date: 'June 16 – 19',
        desc: 'New nav menu items on Hairloss.com so businesses can create a B2B account and log in.',
        tracks: ['website'],
      },
      {
        title: 'Staff Training',
        date: 'Mon, June 22 · 9 AM',
        desc: 'Train the sales/ops team on the migration, the new site, accounts, and the talking points.',
        tracks: ['marketing'],
      },
      {
        title: 'Hide Hair-Unit Pricing',
        date: 'Fri, June 26',
        desc: 'Hide public/retail pricing for hair units when you\'re not logged in. Pricing only shows once you log into an approved B2B account.',
        tracks: ['website'],
        flag: 'Gate: must be live before migrating customers and before the email campaign starts',
      },
      {
        title: 'Remove TressAllure + Restructure HL.com',
        date: 'Fri, June 26',
        desc: 'Remove TressAllure and restructure Hairloss.com for the merged catalog.',
        tracks: ['website'],
      },
      {
        title: 'Sales Starts Adding Customers',
        date: 'Mon, June 29',
        desc: 'With pricing hidden, begin creating accounts for priority/known customers on Hairloss.com.',
        tracks: ['marketing'],
      },
    ],
  },
  {
    window: 'July 1 – 15',
    note: 'Start the PR campaign + posting plan',
    items: [
      {
        title: 'Start PR Campaign + Announcement Email',
        date: 'Wed, July 1',
        desc: 'Email 1 to clients — the PR campaign starts here: the merge, why we\'re doing it, and reassurance nothing they rely on goes away.',
        tracks: ['marketing'],
      },
      {
        title: 'Posting Plan — Inform of Migration',
        date: 'Wed, July 1',
        desc: 'Social posting plan begins, informing customers the migration to Hairloss.com is coming.',
        tracks: ['content', 'marketing'],
      },
      {
        title: 'About Page — Add NIL & OR Merge',
        date: 'July 7 – 10',
        desc: 'Update the About page to tell the NIL + Onrite merge story — one company, one site.',
        tracks: ['website', 'content'],
      },
      {
        title: 'Send "How to Access" Email',
        date: 'July 14 – 16',
        desc: 'Email 2: how to log in, account migration is underway, and pricing now lives behind the account.',
        tracks: ['marketing'],
      },
    ],
  },
  {
    window: 'July 16 – 31',
    note: 'Salon locator, migrate, final reminders',
    items: [
      {
        title: 'Add Salon Locator to Website',
        date: 'Fri, July 17',
        desc: 'Add the salon locator and give it visibility through socials and the website so consumers can find partner shops — drives traffic to pros.',
        tracks: ['website', 'marketing'],
      },
      {
        title: 'Migrate Customers, Companies & Orders',
        date: 'Tue, July 21',
        desc: 'Migrate customers, company accounts, and orders over to Hairloss.com so everyone is ready for launch.',
        tracks: ['website', 'marketing'],
        flag: 'Big migration day',
      },
      {
        title: 'Send Final NIL Site Reminder',
        date: 'July 28 – 29',
        desc: 'Email 3: last call — NIL website purchasing ends Aug 3. Make sure everyone knows where to go.',
        tracks: ['marketing'],
      },
      {
        title: 'Tease Educational Content',
        date: 'Tue, July 28',
        desc: 'Start teasing the Ricky Knowles beginner educational content. Full content stays behind the paywall until after launch.',
        tracks: ['content', 'marketing'],
      },
    ],
  },
  {
    window: 'August 3 — Launch',
    note: 'Go live; NIL website stops taking online orders',
    items: [
      {
        title: 'Launch — NIL Website Online Orders Off',
        date: 'Mon, August 3',
        desc: 'The New Image Labs website stops taking online orders. Online ordering moves to Hairloss.com with B2B accounts (phone orders still go through the team).',
        tracks: ['website', 'marketing'],
        flag: 'Launch day',
      },
      {
        title: 'Landing Pages Launch',
        date: 'Mon, August 3',
        desc: 'The NIL and Onrite men\'s landing pages go live.',
        tracks: ['website'],
      },
      {
        title: 'Send Launch Email',
        date: 'Mon, August 3',
        desc: 'Email 4: "We\'re live." Login link, what\'s new, everything in one place.',
        tracks: ['marketing'],
      },
    ],
  },
  {
    window: 'After August 3',
    note: 'Educational content + Phase 2 rollout',
    items: [
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
    ],
  },
]

// ── Key dates (horizontal milestone strip) ──────────────────────────────────

const keyDates: { date: string; title: string; desc: string }[] = [
  { date: 'Mon, Jun 22 · 9 AM', title: 'Staff Training', desc: 'Train the team on the migration & new site.' },
  { date: 'Fri, Jun 26', title: 'Hide Pricing + Restructure', desc: 'Hide hair-unit pricing, remove TressAllure, restructure HL.com.' },
  { date: 'Wed, Jul 1', title: 'PR Campaign Starts', desc: 'Emails begin + posting plan informing of the migration.' },
  { date: 'Tue, Jul 21', title: 'Migrate Customers', desc: 'Customers, companies & orders move to Hairloss.com.' },
  { date: 'Mon, Aug 3', title: 'Launch', desc: 'NIL website stops online orders. Everything on HL.com. Landing pages launch.' },
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

interface AccountWorkflow {
  num: string
  title: string
  who: string
  steps: WorkflowStep[]
  emails: string[]
  note?: string
}

const accountWorkflows: AccountWorkflow[] = [
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
      'Auto welcome email: "Hi New Image Labs / Onrite customer — we\'ve successfully transferred your account information and orders to Hairloss.com. Continue shopping here with your pricing tier."',
    ],
    note: 'Transferring a client requires creating BOTH a company and a user account in the admin. Sales never fills out the account form.',
  },
  {
    num: 'Workflow 2',
    title: 'New Customer + B2B Form',
    who: 'Customer registers with the B2B form in one step',
    steps: [
      { label: 'Signs Up With B2B Form', desc: 'The user account is created at registration — their business info comes in with the B2B form.' },
      { label: 'Auto-Tagged "Unlocked" (Shopify Flow)', desc: 'A Shopify flow automatically tags the account as unlocked, so they can see "Retail Price" right away.' },
      { label: 'Staff Reviews + Creates Customer Account', desc: 'A salesperson revises their B2B info, creates their customer account, and assigns a catalog-pricing tier.' },
      { label: 'Catalog Pricing Unlocks', desc: 'Once the tier is assigned, catalog pricing replaces retail on login.', final: true },
    ],
    emails: [
      'Auto-email on submit: "Our staff is reviewing your information to set up your wholesale pricing. For now, you have retail pricing."',
    ],
    note: 'The user account already exists and is auto-unlocked to retail. Staff reviews the B2B info and assigns the catalog-pricing tier.',
  },
  {
    num: 'Workflow 3',
    title: 'New Customer — Email Only',
    who: 'Signed up with just an email, no B2B form yet',
    steps: [
      { label: 'Signs Up (Email Only)', desc: 'Account created with an email — no business info yet.' },
      { label: 'Auto-Tagged "Unlocked" (Shopify Flow)', desc: 'A Shopify flow automatically tags the account as unlocked, so they can see "Retail Price".' },
      { label: 'Auto Welcome Email', desc: 'Prompts them to fill out the B2B form if they\'re a business.' },
      { label: 'Fills Out the Form', desc: 'If they\'re a business, this sends them into Workflow 2 for a catalog-pricing tier.', final: true },
    ],
    emails: [
      'Auto welcome email: "Welcome! If you\'re a business, salon, stylist, or barber, fill out the form to get wholesale pricing."',
    ],
    note: 'If they don\'t fill out the form, they stay a retail (unlocked) customer.',
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
    emailSignoff: '— Marketing',
    scriptIntro: 'Use this when you call a customer. Keep it warm and reassuring — lead with what stays the same.',
    script: [
      { cue: 'Opening', line: '"Hi [name], I\'m calling with some good news about how you\'ll order from us going forward."' },
      { cue: 'The change', line: '"We\'re bringing everything onto one website — Hairloss.com. Starting August 3, you\'ll order there instead of the New Image Labs site."' },
      { cue: 'Reassure', line: '"Your pricing tier and the products you order stay exactly the same. Nothing you rely on is going away."' },
      { cue: 'Pricing & account', line: '"On the New Image site, both the pricing and the products were hidden. On Hairloss.com you can browse all the products — only the pricing sits behind your login, to protect our wholesale rates. We\'ll be migrating your account over during the month of July. You\'ll get an activation email for your Hairloss.com account — just sign in with the same email it was sent to, and you\'ll see your pricing."' },
      { cue: 'Close', line: '"I\'ll send your login before August 3 so you\'re ready. Any questions, you call me directly."' },
    ],
    faqIntro: 'The questions customers will ask — and how to answer them.',
    faq: [
      { q: 'Why are you making this change?', a: 'We\'re bringing NIL and Onrite onto one website so it\'s easier to find products and order — everything in one place, plus easier access to discounts and promotions.' },
      { q: 'Will my pricing change?', a: 'No. Your tier and pricing move with you, exactly as they are today.' },
      { q: 'Why can\'t I see prices on the site?', a: 'You can browse all the products — only the pricing is hidden. It\'s wholesale and protected, so it shows once you log into your company account.' },
      { q: 'Do I need to set up my account?', a: 'No — your sales rep creates it for you. You just log in.' },
      { q: 'Will I still find the products I order?', a: 'Yes. All your products are on Hairloss.com and you can browse the full catalog anytime — only the pricing is behind your login.' },
      { q: 'Can I still order on the NIL website?', a: 'Only until August 3. After that, all orders go through Hairloss.com.' },
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
    emailSignoff: '— Marketing',
    scriptIntro: 'Usen esto al llamar a un cliente. Mantengan un tono cálido y tranquilizador — empiecen por lo que se mantiene igual.',
    script: [
      { cue: 'Apertura', line: '"Hola [nombre], le llamo con buenas noticias sobre cómo hará sus pedidos a partir de ahora."' },
      { cue: 'El cambio', line: '"Estamos reuniendo todo en un solo sitio — Hairloss.com. A partir del 3 de agosto, hará sus pedidos ahí en lugar del sitio de New Image Labs."' },
      { cue: 'Tranquilizar', line: '"Su nivel de precios y los productos que pide se mantienen exactamente igual. Nada de lo que usted depende va a desaparecer."' },
      { cue: 'Precios y cuenta', line: '"En el sitio de New Image, tanto los precios como los productos estaban ocultos. En Hairloss.com usted puede ver todos los productos — solo los precios quedan detrás de su inicio de sesión, para proteger nuestros precios mayoristas. Migraremos su cuenta durante el mes de julio. Recibirá un correo de activación para su cuenta de Hairloss.com — solo inicie sesión con el mismo correo al que se lo enviamos y verá sus precios."' },
      { cue: 'Cierre', line: '"Le enviaré su acceso antes del 3 de agosto para que esté listo. Cualquier pregunta, llámeme directamente."' },
    ],
    faqIntro: 'Las preguntas que harán los clientes — y cómo responderlas.',
    faq: [
      { q: '¿Por qué hacen este cambio?', a: 'Llevamos más de 50 años en esto. Estamos reuniendo NIL y Onrite en un solo sitio para que sea más fácil encontrar productos y hacer pedidos — todo en un mismo lugar, además de un acceso más fácil a descuentos y promociones.' },
      { q: '¿Cambiará mi precio?', a: 'No. Su nivel y sus precios se mantienen tal como están hoy.' },
      { q: '¿Por qué no puedo ver los precios en el sitio?', a: 'Puede ver todos los productos — solo los precios están ocultos. Son mayoristas y están protegidos, así que se muestran al iniciar sesión en su cuenta de empresa.' },
      { q: '¿Tengo que crear mi cuenta?', a: 'No — su representante de ventas la crea por usted. Usted solo inicia sesión.' },
      { q: '¿Seguiré encontrando los productos que pido?', a: 'Sí. Todos sus productos están en Hairloss.com y puede ver el catálogo completo en cualquier momento — solo los precios quedan detrás de su inicio de sesión.' },
      { q: '¿Puedo seguir comprando en el sitio de NIL?', a: 'Solo hasta el 3 de agosto. Después de esa fecha, todos los pedidos se hacen por Hairloss.com.' },
      { q: '¿Y si necesito ayuda?', a: 'Su representante está a una llamada de distancia.' },
    ],
  },
}

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
      'Here\'s how things work on Hairloss.com starting August 3.',
      'Your sales rep is creating your account for you. You\'ll get an activation email for your Hairloss.com account before launch — sign in with the same email it was sent to.',
      'Pricing now lives behind your account. To keep our wholesale pricing protected, the site won\'t show prices publicly. Once you log in to your B2B account, you\'ll see your tier pricing — the same pricing you have today.',
      'You\'ll recognize your products — they\'re all on the site and you can browse the full catalog. Only your pricing sits behind your login.',
      'Questions? Your rep is one call away.',
    ],
    cta: 'How to log in',
  },
  {
    num: 3,
    send: 'July 28–29',
    audience: 'All clients',
    subject: 'Last week to order on the NIL site',
    preview: 'Starting Aug 3, online ordering moves to Hairloss.com.',
    goal: 'Final reminder. Make sure nobody is caught off guard.',
    tone: 'Direct, friendly heads-up.',
    body: [
      'Quick heads-up: starting August 3, the New Image Labs website will no longer take online orders.',
      'Everything moves to Hairloss.com, where your account is ready and waiting.',
      'Same products. Same pricing tier. One place for everything.',
      'If you haven\'t gotten your login yet, reach out to your rep this week and we\'ll get you set.',
    ],
    cta: 'Get my login',
  },
  {
    num: 4,
    send: 'August 3',
    audience: 'All clients',
    subject: 'We\'re live — welcome to Hairloss.com',
    preview: 'Log in and see everything in one place.',
    goal: 'Launch. Drive first login + first order.',
    tone: 'Celebratory but simple. Get them in the door.',
    body: [
      'It\'s here. New Image Labs and Onrite are now on Hairloss.com.',
      'Log in with your account to see your pricing, your products, and order in a few clicks.',
      'Everything in one place: products, your tier pricing, and the discounts and promotions we run — all easier to find than ever.',
      'And we\'re just getting started — more educational content is on the way.',
    ],
    cta: 'Log in & shop',
  },
  {
    num: 5,
    send: 'Tease July 28 · Live Aug 10',
    audience: 'Pros + barbers',
    subject: 'New: beginner educational content with Ricky Knowles',
    preview: 'Learn the basics, step by step — only on Hairloss.com.',
    goal: 'Tease before launch, drive to paywalled educational content after Aug 3.',
    tone: 'Exciting, value-first. Position HL.com as where you learn.',
    body: [
      'We\'re putting more into educational content than ever — starting with a beginner series filmed with Ricky Knowles.',
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
            <p className="prc-mock__signoff">{c.emailSignoff}</p>
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
  const [emailsOpen, setEmailsOpen] = useState(false)

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
              Phase 1 gets all New Image Labs products live for launch. Phase 2 brings Progen wholesale pricing and Onrite products on after.
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
                <div className="prc-phase__pillars">
                  {phase.pillars.map((p) => (
                    <div key={p.title} className="prc-pillar">
                      <div className="prc-pillar__icon">{p.icon}</div>
                      <div className="prc-pillar__title">{p.title}</div>
                      <div className="prc-pillar__desc">{p.desc}</div>
                    </div>
                  ))}
                </div>
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
          <div className="prc-subhead">Two sales people — leads &amp; accounts</div>
          <p className="prc-roles-intro">
            Two salespeople manage all customer leads and accounts in Shopify — one owns retail and
            stylist/barber leads, one owns the B2B customer base and new B2B leads. Both work the
            contact form and the inbox chat; each routes the leads that belong to the other.
          </p>

          <div className="prc-roles">
            {/* Retail */}
            <div className="prc-role">
              <div className="prc-role__head">
                <span className="prc-role__icon">🛍️</span>
                <div>
                  <div className="prc-role__tag">Salesperson 1</div>
                  <div className="prc-role__title">Retail + Stylist / Barber Leads</div>
                </div>
              </div>
              <div className="prc-role__block">
                <div className="prc-role__label">Owns</div>
                <ul>
                  <li>Retail customers</li>
                  <li>Stylist &amp; barber leads</li>
                  <li>Contact form + inbox chat from retail &amp; leads</li>
                </ul>
              </div>
              <div className="prc-role__block">
                <div className="prc-role__label">Does</div>
                <ul>
                  <li>Answers the contact form &amp; chat messages</li>
                  <li>Nurtures stylist/barber leads toward a B2B account</li>
                  <li>Pitches the 15% first-order offer and can place the order</li>
                  <li>Hands qualified B2B leads to the B2B salesperson</li>
                </ul>
              </div>
            </div>

            {/* B2B */}
            <div className="prc-role prc-role--b2b">
              <div className="prc-role__head">
                <span className="prc-role__icon">💼</span>
                <div>
                  <div className="prc-role__tag">Salesperson 2 · more on their plate</div>
                  <div className="prc-role__title">B2B Customer Base + New Leads</div>
                </div>
              </div>
              <div className="prc-role__block">
                <div className="prc-role__label">Owns</div>
                <ul>
                  <li>The whole B2B / wholesale customer base</li>
                  <li>All new B2B leads</li>
                  <li>Contact form + inbox chat from businesses</li>
                </ul>
              </div>
              <div className="prc-role__block">
                <div className="prc-role__label">Does</div>
                <ul>
                  <li>Reviews B2B form submissions; checks with the business owner (contact #1) before adding stylists</li>
                  <li>Creates the customer account</li>
                  <li><strong>Assigns the catalog price + territory</strong></li>
                  <li>Redirects international leads to the international team</li>
                </ul>
              </div>
              <div className="prc-autoemail">
                <span className="prc-autoemail__icon">✉</span>
                <span className="prc-autoemail__text">
                  When tagged with their price + territory, an automatic email goes to that territory's sales head: a new online account can now purchase online at their Tier — reach out to close their first online or over-the-phone sale with 15% off the first purchase.
                </span>
              </div>
            </div>
          </div>

          <div className="prc-subhead">Shared tools</div>
          <div className="cp-email-grid">
            <div className="cp-email-card">
              <div className="cp-email-card__icon">📒</div>
              <div className="cp-email-card__title">Master Client List</div>
              <div className="cp-email-card__desc">
                A list of all clients so both salespeople can check who already has online purchasing enabled — and who to pitch.
              </div>
            </div>
            <div className="cp-email-card">
              <div className="cp-email-card__icon">🌎</div>
              <div className="cp-email-card__title">International Team</div>
              <div className="cp-email-card__desc">
                Handled by the international team — they take both online and over-the-phone orders. International leads get redirected to them.
              </div>
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

        {/* ════ EMAILS PR CAMPAIGN (accordion) ════ */}
        <Divider num="06" title="Emails PR Campaign" sub="The client email sequence — open to view designs" />

        <section className="cp-section">
          <button
            className={`prc-accordion__header ${emailsOpen ? 'is-open' : ''}`}
            onClick={() => setEmailsOpen((v) => !v)}
            aria-expanded={emailsOpen}
          >
            <div className="prc-accordion__text">
              <span className="cp-section__badge cp-section__badge--strategy">Email Campaign</span>
              <h2 className="cp-section__title">Emails PR Campaign</h2>
              <p className="cp-section__desc">
                Five sends to clients — warm them up, explain the change, drive the first login. Click to view the designs.
              </p>
            </div>
            <span className="prc-accordion__chevron">{emailsOpen ? '▲' : '▼'}</span>
          </button>

          {emailsOpen && (
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
          )}
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
