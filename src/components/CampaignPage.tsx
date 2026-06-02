import './CampaignPage.css'

export default function CampaignPage() {
  return (
    <div className="campaign-page">
      <a href="#/" className="cp-back">← IA Planning</a>

      {/* ── Hero ── */}
      <header className="cp-hero">
        <div className="cp-hero__inner">
          <p className="cp-hero__eyebrow">Marketing Campaign Plan</p>
          <h1 className="cp-hero__title">
            Hairloss.com<br />
            <span>3-Month Campaign</span>
          </h1>
          <p className="cp-hero__subtitle">
            Barbers, consumers &amp; growing the brand
          </p>
          <div className="cp-hero__dates">
            <span>May 2026</span>
            <span className="cp-hero__dates-dot" />
            <span>June 2026</span>
            <span className="cp-hero__dates-dot" />
            <span>July 2026</span>
          </div>
        </div>
      </header>

      <main className="cp-main">
        {/* ── Campaign Overview ── */}
        <div className="cp-overview">
          <div className="cp-overview-card">
            <div className="cp-overview-card__icon">✂️</div>
            <div className="cp-overview-card__label">Focus</div>
            <div className="cp-overview-card__value">Barber Campaign</div>
          </div>
          <div className="cp-overview-card">
            <div className="cp-overview-card__icon">📈</div>
            <div className="cp-overview-card__label">Channels</div>
            <div className="cp-overview-card__value">TikTok, IG, Web, Email</div>
          </div>
          <div className="cp-overview-card">
            <div className="cp-overview-card__icon">🎯</div>
            <div className="cp-overview-card__label">Audience</div>
            <div className="cp-overview-card__value">Pros + Consumers</div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* LANDING PAGE KEY POINTS                                            */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-pitch">
          <div className="cp-pitch__header">
            <span className="cp-pitch__badge">Landing Page — Lead With This</span>
            <h2 className="cp-pitch__title">What Pros Need to See First</h2>
            <p className="cp-pitch__subtitle">
              Put these at the top of the landing page. No gray areas.
            </p>
          </div>

          <div className="cp-pitch__points">
            <div className="cp-pitch__point">
              <div className="cp-pitch__point-num">1</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">We serve both consumers and professionals</div>
                <div className="cp-pitch__point-desc">
                  Be upfront. The consumer side of the site turns pros off — they see it and think it's not for them. Make it clear pros get a separate experience.
                </div>
              </div>
            </div>

            <div className="cp-pitch__point">
              <div className="cp-pitch__point-num">2</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">Best wholesale pricing</div>
                <div className="cp-pitch__point-desc">
                  Pros get the best rates. Simple.
                </div>
              </div>
            </div>

            <div className="cp-pitch__point">
              <div className="cp-pitch__point-num">3</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">Dedicated phone support</div>
                <div className="cp-pitch__point-desc">
                  Partners get direct phone support. Real people, fast answers — not a contact form.
                </div>
              </div>
            </div>

            <div className="cp-pitch__point">
              <div className="cp-pitch__point-num">4</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">Salon locator + we send customers to you</div>
                <div className="cp-pitch__point-desc">
                  Once you're buying from us, we add you to our salon locator. We use email and the website to send consumers to your shop — we want people going to a pro, not doing it themselves.
                </div>
              </div>
            </div>

            <div className="cp-pitch__point cp-pitch__point--full">
              <div className="cp-pitch__point-num">5</div>
              <div className="cp-pitch__point-content">
                <div className="cp-pitch__point-title">No gray areas</div>
                <div className="cp-pitch__point-desc">
                  The page needs to be clear. Pros should see right away: this is for you, here's how it works, here's what you get.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* WHY BARBERS                                                        */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-segment">
          <div className="cp-segment__header">
            <span className="cp-segment__badge">The Opportunity</span>
            <h2 className="cp-segment__title">Why Barbers &amp; Why Now</h2>
            <p className="cp-segment__subtitle">
              Content in both Spanish and English. This audience is big and they're looking for what we offer.
            </p>
          </div>

          <div className="cp-segment__body">
            <div className="cp-segment__columns">
              <div className="cp-segment__col">
                <div className="cp-segment__col-title">Why they're interested</div>
                <ul className="cp-segment__col-items">
                  <li>They want to expand their services — hair systems are a new revenue stream</li>
                  <li>It's easy to learn and do. We show that through content and at events</li>
                  <li>Barber events are happening all over the country — good places to get in front of them</li>
                  <li>Spanish and English-speaking barbers are both a fit. Content needs to reach both</li>
                </ul>
              </div>

              <div className="cp-segment__col">
                <div className="cp-segment__col-title">What we bring</div>
                <ul className="cp-segment__col-items">
                  <li>Wholesale pricing that works for them</li>
                  <li>Starter kits to try without a big commitment</li>
                  <li>Training content showing how simple application is</li>
                  <li>Showing up at events = real brand, not just another online store</li>
                </ul>
              </div>
            </div>

            <div className="cp-segment__callout">
              <strong>Bottom line:</strong> Barber events are happening everywhere and it's a good time to start being present. It shows range and that we're not just a consumer brand. They're interested — we just need to make it clear and not let the consumer side confuse them.
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* MAY                                                                */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-month-divider">
          <div className="cp-month-divider__line" />
          <div className="cp-month-divider__label">Month 1</div>
          <div className="cp-month-divider__line cp-month-divider__line--right" />
        </div>

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--may">May 2026</span>
            <h2 className="cp-section__title">Launch &amp; Big Push</h2>
            <p className="cp-section__desc">
              Biggest month. Barber event, daily social, Mother's Day promo, start filming barber/men content.
            </p>
          </div>

          <div className="cp-promo-banner">
            <div className="cp-promo-banner__icon">💈</div>
            <div className="cp-promo-banner__content">
              <div className="cp-promo-banner__title">Barber Event — Campaign Launch</div>
              <div className="cp-promo-banner__desc">
                Landing page and flyer still in progress. Show wholesale pricing and starter kits at the event.
              </div>
            </div>
          </div>

          <div className="cp-tasks">
            <div className="cp-task cp-task--highlight">
              <div className="cp-task__category">Barber Campaign</div>
              <div className="cp-task__title">Landing Page + Contact Form</div>
              <div className="cp-task__desc">
                Page with form for pros to reach out. Send traffic here from the event and social.
              </div>
              <div className="cp-task__status cp-task__status--in-progress">
                <span className="cp-task__status-dot" /> In Progress
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Barber Campaign</div>
              <div className="cp-task__title">Event Flyer</div>
              <div className="cp-task__desc">
                Needs to be finalized before the event.
              </div>
              <div className="cp-task__status cp-task__status--in-progress">
                <span className="cp-task__status-dot" /> In Progress
              </div>
            </div>

            <div className="cp-task cp-task--highlight">
              <div className="cp-task__category">Website</div>
              <div className="cp-task__title">Wholesale Pricing on Site</div>
              <div className="cp-task__desc">
                Add wholesale pricing so pros can buy in bulk.
              </div>
              <div className="cp-task__status cp-task__status--planned">
                <span className="cp-task__status-dot" /> Planned
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Products</div>
              <div className="cp-task__title">Starter Kits — Consumers &amp; Barbers</div>
              <div className="cp-task__desc">
                Kits for regular customers and barbers.
              </div>
              <div className="cp-task__status cp-task__status--planned">
                <span className="cp-task__status-dot" /> Planned
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Products</div>
              <div className="cp-task__title">TressAllure New Colors</div>
              <div className="cp-task__desc">
                Same process as last time. Easy to get done in May.
              </div>
              <div className="cp-task__status cp-task__status--planned">
                <span className="cp-task__status-dot" /> Planned
              </div>
            </div>

            <div className="cp-task cp-task--highlight">
              <div className="cp-task__category">Promotions</div>
              <div className="cp-task__title">Mother's Day Promo</div>
              <div className="cp-task__desc">
                20% off sitewide + 15% Marcy affiliate.
              </div>
              <div className="cp-task__status cp-task__status--planned">
                <span className="cp-task__status-dot" /> Planned
              </div>
            </div>

            

            <div className="cp-task">
              <div className="cp-task__category">Social Media</div>
              <div className="cp-task__title">Daily Posting — May</div>
              <div className="cp-task__desc">
                Every day on TikTok &amp; IG. Influencer + brand content.
              </div>
              <div className="cp-task__status cp-task__status--planned">
                <span className="cp-task__status-dot" /> Planned
              </div>
            </div>

            <div className="cp-task cp-task--highlight">
              <div className="cp-task__category">Content</div>
              <div className="cp-task__title">Film Barber / Men's Content</div>
              <div className="cp-task__desc">
                Film in May, start posting mid-to-end of May. Continues into June and July alongside women's and influencer content.
              </div>
              <div className="cp-task__status cp-task__status--planned">
                <span className="cp-task__status-dot" /> Planned
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* JUNE                                                               */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-month-divider">
          <div className="cp-month-divider__line" />
          <div className="cp-month-divider__label">Month 2</div>
          <div className="cp-month-divider__line cp-month-divider__line--right" />
        </div>

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--june">June 2026</span>
            <h2 className="cp-section__title">Build &amp; Convert</h2>
            <p className="cp-section__desc">
              Follow up on May. Website updates, barber follow-ups, social keeps going.
            </p>
          </div>

          <div className="cp-tasks">
            <div className="cp-task cp-task--highlight">
              <div className="cp-task__category">Website</div>
              <div className="cp-task__title">Dual-Audience Website Redesign</div>
              <div className="cp-task__desc">
                Finish the consumer + pro site updates. Menu and collections already started.
              </div>
              <div className="cp-task__status cp-task__status--in-progress">
                <span className="cp-task__status-dot" /> In Progress
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Barber Campaign</div>
              <div className="cp-task__title">Post-Event Follow Up</div>
              <div className="cp-task__desc">
                Reach out to event contacts. Get them set up with wholesale accounts.
              </div>
              <div className="cp-task__status cp-task__status--planned">
                <span className="cp-task__status-dot" /> Planned
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Barber Campaign</div>
              <div className="cp-task__title">Barber Content Series</div>
              <div className="cp-task__desc">
                Keep posting barber/men's content from May. Mix with women's and influencer content.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Social Media</div>
              <div className="cp-task__title">TikTok &amp; IG Growth</div>
              <div className="cp-task__desc">
                Keep posting. Look at May data, do more of what worked.
              </div>
              <div className="cp-task__status cp-task__status--planned">
                <span className="cp-task__status-dot" /> Planned
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Promotions</div>
              <div className="cp-task__title">Father's Day Promo</div>
              <div className="cp-task__desc">
                Men's hair systems and kits. Works with the barber audience.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Products</div>
              <div className="cp-task__title">Expand Starter Kits</div>
              <div className="cp-task__desc">
                Based on May results, tweak and add options.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* JULY                                                               */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-month-divider">
          <div className="cp-month-divider__line" />
          <div className="cp-month-divider__label">Month 3</div>
          <div className="cp-month-divider__line cp-month-divider__line--right" />
        </div>

        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--july">July 2026</span>
            <h2 className="cp-section__title">Keep Going &amp; Review</h2>
            <p className="cp-section__desc">
              Keep what's working. Barbers reordering, social rolling, site fully set up.
            </p>
          </div>

          <div className="cp-tasks">
            <div className="cp-task cp-task--highlight">
              <div className="cp-task__category">Barber Campaign</div>
              <div className="cp-task__title">Barber Referral Program</div>
              <div className="cp-task__desc">
                Barbers who bring other barbers get wholesale perks.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Social Media</div>
              <div className="cp-task__title">Summer Content</div>
              <div className="cp-task__desc">
                Summer-themed posts. Keep TikTok and IG going.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Promotions</div>
              <div className="cp-task__title">4th of July / Summer Sale</div>
              <div className="cp-task__desc">
                Bundles, limited-time kits, flash sales.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Website</div>
              <div className="cp-task__title">Clean Up Pro Section</div>
              <div className="cp-task__desc">
                Make sure wholesale reordering, accounts, and pricing are smooth.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Analytics</div>
              <div className="cp-task__title">Campaign Review</div>
              <div className="cp-task__desc">
                Wholesale signups, social growth, promo results, traffic. Plan what's next.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>

            <div className="cp-task">
              <div className="cp-task__category">Barber Campaign</div>
              <div className="cp-task__title">Barber Spotlights</div>
              <div className="cp-task__desc">
                Feature top barber partners on social and the site.
              </div>
              <div className="cp-task__status cp-task__status--idea">
                <span className="cp-task__status-dot" /> Idea
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* ONGOING                                                            */}
        {/* ════════════════════════════════════════════════════════════════════ */}

        <div className="cp-month-divider">
          <div className="cp-month-divider__line" />
          <div className="cp-month-divider__label">Ongoing — All 3 Months</div>
          <div className="cp-month-divider__line cp-month-divider__line--right" />
        </div>

        {/* Email Marketing */}
        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Email Marketing</span>
            <h2 className="cp-section__title">Email Needs Work</h2>
            <p className="cp-section__desc">
              We're not doing enough with email. Need better segments and more targeted sends.
            </p>
          </div>

          <div className="cp-email-stat">
            <div className="cp-email-stat__number">0.3%</div>
            <div className="cp-email-stat__text">
              Current spam rate — too high. Fix it by sending the right emails to the right people.
            </div>
          </div>

          <div className="cp-email-grid">
            <div className="cp-email-card">
              <div className="cp-email-card__icon">👥</div>
              <div className="cp-email-card__title">Create Segments</div>
              <div className="cp-email-card__desc">
                Women, men, pros, new subs. Send relevant content to each group.
              </div>
            </div>

            <div className="cp-email-card">
              <div className="cp-email-card__icon">🎯</div>
              <div className="cp-email-card__title">Targeted Deals</div>
              <div className="cp-email-card__desc">
                Women's deals to women subs. Only target active subscribers (last 6 months) to help with spam rate.
              </div>
            </div>

            <div className="cp-email-card">
              <div className="cp-email-card__icon">💈</div>
              <div className="cp-email-card__title">Pro/Barber Emails</div>
              <div className="cp-email-card__desc">
                Separate emails for pros — wholesale deals, new drops, training. Different from consumer emails.
              </div>
            </div>

            <div className="cp-email-card">
              <div className="cp-email-card__icon">📍</div>
              <div className="cp-email-card__title">Send Traffic to Partner Salons</div>
              <div className="cp-email-card__desc">
                Use email to send consumers to partner salons. We want people going to a pro, not DIY.
              </div>
            </div>
          </div>
        </section>

        {/* Social Strategy */}
        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Social Strategy</span>
            <h2 className="cp-section__title">TikTok &amp; Instagram Growth</h2>
            <p className="cp-section__desc">
              Good engagement so far. Keep growing with daily content, influencers, and barber/men's content.
            </p>
          </div>

          <div className="cp-social-grid">
            <div className="cp-social-card">
              <div className="cp-social-card__header">
                <div className="cp-social-card__icon">🎵</div>
                <div className="cp-social-card__name">TikTok</div>
              </div>
              <ul className="cp-social-card__items">
                <li>Daily posting in May — Claire already made the content calendar</li>
                <li>Good engagement — do more of what's working</li>
                <li>Influencer + brand content mix</li>
              </ul>
            </div>

            <div className="cp-social-card">
              <div className="cp-social-card__header">
                <div className="cp-social-card__icon">📸</div>
                <div className="cp-social-card__name">Instagram</div>
              </div>
              <ul className="cp-social-card__items">
                <li>Daily posting in May alongside TikTok</li>
                <li>Barber/men's posts alongside women's and influencer content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Website Improvements Roadmap */}
        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Website</span>
            <h2 className="cp-section__title">Website Improvements Roadmap</h2>
            <p className="cp-section__desc">
              Content, UX, and structure improvements planned across the 3 months.
            </p>
          </div>

          <div className="cp-roadmap">
            {/* MAY */}
            <div className="cp-roadmap-month">
              <div className="cp-roadmap-month__header">
                <div className="cp-roadmap-month__label">May</div>
                <div className="cp-roadmap-month__date">May 1 – 31</div>
              </div>
              <div className="cp-roadmap-items">
                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">🧭</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Navigation + Collections Restructure</div>
                    <div className="cp-roadmap-item__desc">Menu updates and new collections. Already started — finish in May.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">💰</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Wholesale Pricing</div>
                    <div className="cp-roadmap-item__desc">Pro pricing for approved accounts.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">📦</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Starter Kit Collections</div>
                    <div className="cp-roadmap-item__desc">Consumer kits and barber kits.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">📸</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Men's Product Content</div>
                    <div className="cp-roadmap-item__desc">Start with men's products first.</div>
                    <ul className="cp-roadmap-item__details">
                      <li>3 product views</li>
                      <li>1 model photo</li>
                      <li>1 infographic with key points of the unit</li>
                    </ul>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">🏷️</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">"Hot" &amp; "New" Product Tags</div>
                    <div className="cp-roadmap-item__desc">Add tags on products to get more clicks.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">📸</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Women's Product Content</div>
                    <div className="cp-roadmap-item__desc">Can get this done in May alongside men's.</div>
                    <ul className="cp-roadmap-item__details">
                      <li>1 model photo</li>
                      <li>2–3 product views</li>
                      <li>1 infographic highlighting key features</li>
                    </ul>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">📸</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Accessories Product Content</div>
                    <ul className="cp-roadmap-item__details">
                      <li>1 product-only shot</li>
                      <li>1 with background/lifestyle</li>
                      <li>1 infographic</li>
                    </ul>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">📄</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Events &amp; Education Landing Page</div>
                    <div className="cp-roadmap-item__desc">New page covering events and education. Include recap and photos from the Tiago event.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">🎨</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Long Swatches</div>
                    <div className="cp-roadmap-item__desc">Implement long swatches on the site.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">🚀</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">New Site Version Live</div>
                    <div className="cp-roadmap-item__desc">New version with new accounts fully up and running.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* JUNE */}
            <div className="cp-roadmap-month">
              <div className="cp-roadmap-month__header">
                <div className="cp-roadmap-month__label">June</div>
                <div className="cp-roadmap-month__date">June 1 – 30</div>
              </div>
              <div className="cp-roadmap-items">
                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">👥</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Dual-Audience Experience</div>
                    <div className="cp-roadmap-item__desc">Different paths for shoppers and pros. Finish rollout.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">🛒</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Custom Ordering for Wholesale Accounts</div>
                    <div className="cp-roadmap-item__desc">Add custom ordering options for professional/wholesale accounts.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">📸</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Women's Wig Shoot + Restyling</div>
                    <div className="cp-roadmap-item__desc">Style the wigs and reshoot for better women's product photos.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">🖼️</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Collection Page Banners</div>
                    <div className="cp-roadmap-item__desc">Add banners to each collection page so they look fuller and more complete.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">❓</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">FAQ Section on Product Pages</div>
                    <div className="cp-roadmap-item__desc">Educational FAQ at the bottom of each product page. Different for synthetic vs. human hair. Button linking to the education page.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* JULY */}
            <div className="cp-roadmap-month">
              <div className="cp-roadmap-month__header">
                <div className="cp-roadmap-month__label">July</div>
                <div className="cp-roadmap-month__date">July 1 – 31</div>
              </div>
              <div className="cp-roadmap-items">
                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">📚</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Education Page / Blog</div>
                    <div className="cp-roadmap-item__desc">Build out the education page — differences between hair fibers, solutions depending on hair loss type. This can live on the blog. Focus on making more educational posts and organizing assets in a folder for reuse.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">🔒</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Professional-Only Products</div>
                    <div className="cp-roadmap-item__desc">Products only visible to wholesale accounts. Full workflow — account approval, pro-only catalog, ordering.</div>
                  </div>
                </div>

                <div className="cp-roadmap-item">
                  <div className="cp-roadmap-item__icon">🔧</div>
                  <div className="cp-roadmap-item__body">
                    <div className="cp-roadmap-item__title">Clean Up Pro Section</div>
                    <div className="cp-roadmap-item__desc">Make sure wholesale reordering, accounts, and pricing are smooth.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="cp-section">
          <div className="cp-section__header">
            <span className="cp-section__badge cp-section__badge--strategy">Timeline</span>
            <h2 className="cp-section__title">Key Dates</h2>
          </div>

          <div className="cp-timeline">
            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">Before Event</div>
              <div className="cp-timeline-item__title">Finalize Flyer + Landing Page</div>
              <div className="cp-timeline-item__desc">Get both ready before the barber event.</div>
            </div>

            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">Early May 2026</div>
              <div className="cp-timeline-item__title">Barber Event</div>
              <div className="cp-timeline-item__desc">Flyers, products, collect contacts.</div>
            </div>

            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">May 2026</div>
              <div className="cp-timeline-item__title">TA New Colors</div>
              <div className="cp-timeline-item__desc">Same as last time, quick.</div>
            </div>

            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">Mid-to-End May 2026</div>
              <div className="cp-timeline-item__title">Start Posting Barber / Men's Content</div>
              <div className="cp-timeline-item__desc">Film early May, post mid-to-end. Continues into June and July.</div>
            </div>

            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">May 10, 2026</div>
              <div className="cp-timeline-item__title">Mother's Day Promo</div>
              <div className="cp-timeline-item__desc">20% off + 15% Marcy affiliate.</div>
            </div>

            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">June 2026</div>
              <div className="cp-timeline-item__title">Website Dual-Audience Rollout</div>
              <div className="cp-timeline-item__desc">Finish consumer + pro site changes.</div>
            </div>

            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">June 21, 2026</div>
              <div className="cp-timeline-item__title">Father's Day Promo</div>
              <div className="cp-timeline-item__desc">Men's systems and kits.</div>
            </div>

            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">July 4, 2026</div>
              <div className="cp-timeline-item__title">4th of July / Summer Sale</div>
              <div className="cp-timeline-item__desc">Bundles and flash deals.</div>
            </div>

            <div className="cp-timeline-item">
              <div className="cp-timeline-item__dot" />
              <div className="cp-timeline-item__date">End of July 2026</div>
              <div className="cp-timeline-item__title">Campaign Review</div>
              <div className="cp-timeline-item__desc">Review everything. Plan what's next.</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="cp-footer">
        Hairloss.com · 3-Month Campaign Plan · May — July 2026
      </footer>
    </div>
  )
}
