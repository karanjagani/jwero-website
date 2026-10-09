// Six product pages added 2026-09-30 after re-reading the product repo
// (~/pim): built-in business email, marketplaces, quotations, shareable
// digital catalogues, reports & dashboards, and the training LMS. Each claim
// maps to code named in blueprint/PRODUCT-COVERAGE-AUDIT-2026-09.md §G.
const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];
const app = (name, slug, description) => ({
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description,
  url: 'https://jwero.ai/products/' + slug, isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
});

// ---------------------------------------------------------------- email
const mockMail = `
<div class="mock" role="img" aria-label="Illustration of the shared inbox with email, WhatsApp and Instagram threads">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Inbox · all channels</span></div>
  <div class="mock-kv"><span>✉ care@yourshop.in</span><strong>Meera K. · “Re: 22k temple set — invoice?”</strong></div>
  <div class="mock-kv"><span>💬 WhatsApp</span><strong>Meera K. · “Saturday 5pm works.”</strong></div>
  <div class="mock-kv"><span>✉ orders@yourshop.in</span><strong>Raj Traders · “PO-1182 attached”</strong></div>
  <div class="mock-kv"><span>◎ Instagram</span><strong>@priya.s · “price for this?”</strong></div>
  <div class="mock-foot">One record per customer, whichever door she used. The email reply is written from the same record as the WhatsApp one.</div>
</div>`;

// Email, rebuilt 2026-10-07. Confirmed by Jwero: A/B testing in email campaigns,
// AI-written campaigns, abandoned cart and browse emails, open and click
// tracking, drag-and-drop designer, self-serve mailbox setup, mailboxes charged.
const EM_FLOW = [
  ['Designed', 'Diwali email built in the drag-and-drop designer · AI wrote the copy'],
  ['A/B test', 'Two subject lines tested · the winner goes to the rest'],
  ['Sent', 'To “gold buyers, last 12 months” · her name and last purchase filled in'],
  ['Tracked', 'Opened, and the bridal necklace clicked'],
  ['Bounced', 'One dead address · stopped from future sends'],
  ['Reply', '“Is the necklace still there?” · threads onto her record beside WhatsApp'],
  ['Booked', 'AI replied automatically · a visit booked for Sunday'],
];
const emFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">EMAIL · CAMPAIGN TO VISIT</p>${EM_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${EM_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const EM_CMP = [
  ['Address', 'yourshop@gmail.com', 'Your domain', 'Your domain, set up in the app'],
  ['Where replies go', 'One person’s phone', 'A separate inbox', 'The same inbox as WhatsApp and Instagram'],
  ['Who it goes to', 'An exported list', 'A list in the tool', 'Segments from the customer record'],
  ['Design and copy', 'Plain text', 'Drag and drop', 'Drag and drop, with AI-written copy'],
  ['Testing', 'No', 'A/B testing', 'A/B testing'],
  ['Opens and clicks', 'No', 'In the tool', 'On her customer record'],
  ['Abandoned cart and browse', 'No', 'With an ecommerce plugin', 'Built into journeys'],
  ['Unsubscribes and bounces', 'By hand', 'In the tool', 'Enforced, and written to the contact'],
];
const emTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Personal Gmail</th><th>Google Workspace plus an email tool</th><th>Jwero</th></tr></thead><tbody>${EM_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const EM_HOW = [
  ['Set up your mailboxes', 'Create care@, orders@ and one per salesperson yourself, or connect Google Workspace or Zoho.'],
  ['Verify your domain', 'Add the DKIM, SPF and DMARC records from the checklist; the app confirms them.'],
  ['Design your first email', 'Drag and drop, or let AI write it from your brief.'],
  ['Pick a segment and test', 'Send to the right customers, with two subject lines A/B tested.'],
  ['Switch on journeys', 'Abandoned cart, browse and occasion emails go out on their own.'],
];
const emFaqs = [
  { q: 'What is email marketing for jewellers?', a: 'Sending the right customers festival offers, new collections, occasion wishes and cart reminders by email. Jwero sends to segments from your customer record, with AI-written copy, A/B testing, and opens and clicks tracked.' },
  { q: 'Can AI write my email campaigns?', a: 'Yes. AI writes the subject and copy from your brief; you edit in the drag-and-drop designer and approve before it sends.' },
  { q: 'Can I A/B test emails?', a: 'Yes. Test subject lines or versions, and send the winner to the rest.' },
  { q: 'Are abandoned cart emails included?', a: 'Yes. Abandoned cart and browse journeys send by email, alongside WhatsApp and other channels.' },
  { q: 'Can I see who opened and clicked?', a: 'Yes. Opens and clicks are tracked and written to each customer’s record.' },
  { q: 'Do I need to buy email hosting separately?', a: 'No. You create mailboxes on your own domain inside Jwero, charged per mailbox. See pricing.' },
  { q: 'Can I keep my existing Google Workspace or Zoho Mail?', a: 'Yes. Connect it, and its email lands in the same inbox as WhatsApp.' },
  { q: 'Will my emails land in spam?', a: 'Mail is signed with DKIM, SPF and DMARC, which inbox providers check, and bounced addresses stop being mailed.' },
  { q: 'Will the AI answer my email on its own?', a: 'Yes. It replies from her record, inside the limits you set. You choose which kinds of reply need approval first.' },
];
const email = {
  slug: 'products/email',
  title: 'Email Marketing & Business Email for Jewellers: Own Domain, One Inbox | Jwero',
  description: 'Email marketing and business email for jewellers: mailboxes on your own domain, a drag-and-drop designer with AI-written campaigns, A/B testing, open and click tracking, abandoned cart emails, all in the same inbox as WhatsApp.',
  schema: { ...app('Jwero Email', 'email', 'Email marketing and own-domain business email for jewellers: self-serve mailboxes with DKIM, SPF and DMARC, a shared inbox with WhatsApp and Instagram, a drag-and-drop designer, AI-written campaigns, A/B testing, open and click tracking, abandoned cart and browse journeys, and unsubscribe and bounce handling.'), alternateName: ['Email marketing for jewellers', 'Jewellery email marketing software', 'Business email for jewellery shops'] },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up business email and email marketing for a jewellery shop', step: EM_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Email'),
  faqs: emFaqs,
  body: `
${L.hero({
  eyebrow: 'EMAIL MARKETING · BUSINESS EMAIL',
  h1: 'Email marketing and business email for jewellers: your own domain, in the same inbox as WhatsApp.',
  sub: 'care@yourshop.in and one address per salesperson, set up in minutes. Campaigns designed by drag and drop and written by AI, A/B tested, tracked to every open and click, and every reply landing in the inbox your team already answers.',
  primary: { href: '#', label: 'Set up my business email', wa: 'email' },
  secondary: { href: '/products/campaigns', label: 'See Campaigns' },
  mock: mockMail,
})}

${L.section(`${L.sectionHead('ONE EMAIL, START TO FINISH', 'From a Diwali email to a booked visit.', '')}${emFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE INBOX', 'What jewellery email has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Mailboxes on your domain</h3><p>Created in the app, signed with DKIM, SPF and DMARC so mail reaches the inbox. Or connect Google Workspace or Zoho.</p><a href="/pricing">Pricing →</a></article>
  <article><h3>2. One inbox for everything</h3><p>Email threads beside WhatsApp, Instagram and web chat, on the same customer record.</p><a href="/products/whatsapp">Shared inbox →</a></article>
  <article><h3>3. Campaigns that look like you</h3><p>A drag-and-drop designer, AI-written copy, personal fields, and A/B testing.</p><a href="/products/campaigns">Campaigns →</a></article>
  <article><h3>4. Emails that send themselves</h3><p>Abandoned cart, browse, birthday and anniversary emails inside journeys.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>5. Know what worked</h3><p>Opens and clicks on her record; unsubscribes enforced and bounces stopped.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>6. Replies and receipts</h3><p>AI replies automatically from her record, with approval only where you want it; receipts, OTPs and reminders on branded templates.</p><a href="/products/ai-sales-agents">AI agents →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What abandoned carts cost without an email.', 'Your numbers, not ours.')}<div class="callc" data-emc>
  <div class="callc-in">
    <label>Carts abandoned on your website a month<input type="number" inputmode="numeric" data-em="n" value="150" min="0"></label>
    <label>Won back by a reminder email, %<input type="number" inputmode="decimal" data-em="won" value="5" min="0" max="100" step="0.5"></label>
    <label>Average order, ₹<input type="number" inputmode="numeric" data-em="bill" value="35000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Orders won back a month</span><b data-em-o="won">0</b></p>
    <p class="callc-save"><span>Revenue a month</span><b data-em-o="rev">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Personal Gmail, Workspace plus an email tool, or Jwero.', '')}${emTable()}`)}

${L.impactGrid([
  { lever: 'A supplier emails a PO', before: 'It sits in someone’s personal Gmail.', after: 'It lands on the supplier’s record beside their WhatsApp thread; the order can be raised from it.', link: { href: '/products/purchase-vendors', label: 'See Purchase & Vendors' } },
  { lever: 'A customer replies to a receipt', before: 'Nobody sees it for two days.', after: 'It threads onto her record; AI replies automatically from it.', link: { href: '/platform/customer-memory', label: 'See Customer Memory' } },
  { lever: 'A festival campaign by email', before: 'A bulk tool with its own list and no opt-out logic.', after: 'A segment from the same record, A/B tested, opens and clicks on each customer.', link: { href: '/products/campaigns', label: 'See Campaigns' } },
])}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to set up business email and email marketing.', 'Five steps.')}${L.steps(EM_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'An email, a WhatsApp chat and a counter visit from the same person are one customer record.',
  'Segments, prices and products in an email come from the same record and catalogue as every other channel.',
  'Opens and clicks feed the same scores your team uses to decide who to call.',
])}

${L.ctaBand('Put the trade’s email where the trade’s WhatsApp already is.', 'Tell us your domain. We will set up the first mailbox and send your first campaign with you.', 'email')}
`,
};

// ---------------------------------------------------------------- marketplaces
// Marketplaces, rebuilt 2026-10-07 on Jwero's instruction: show only Google
// Shopping, Meta catalogue and Unicommerce as integrated. Amazon and Flipkart
// direct connectors are not claimed anywhere on the site.
const mockMarket = `
<div class="mock" role="img" aria-label="Illustration of one catalogue feeding Google Shopping, Meta and Unicommerce">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Channels · today’s 22K rate</span></div>
  <div class="mock-kv"><span>Google Shopping</span><strong>1,240 products · repriced 10:02</strong></div>
  <div class="mock-kv"><span>Meta catalogue</span><strong>Instagram, Facebook, WhatsApp · in step</strong></div>
  <div class="mock-kv"><span>Unicommerce</span><strong>Orders and stock · in step</strong></div>
  <div class="mock-kv"><span>Counter · Branch 2</span><strong>22k bangle sold · removed everywhere</strong></div>
  <div class="mock-foot">Illustrative. One catalogue, one stock, every channel.</div>
</div>`;
const MK_FLOW = [
  ['Gold rate', 'Today’s rate moves up ₹60 a gram'],
  ['Repriced', '1,240 products repriced in your catalogue'],
  ['Google', 'Google Shopping prices updated · ads show the right price'],
  ['Meta', 'Instagram, Facebook and WhatsApp catalogues updated'],
  ['Sold', 'A bangle sells at the counter'],
  ['Removed', 'Gone from Google, Meta and Unicommerce · no oversell'],
];
const mkFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">ONE CATALOGUE · EVERY CHANNEL</p>${MK_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${MK_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const MK_CMP = [
  ['Prices when gold moves', 'Feeds edited by hand', 'Fixed price in the feed', 'Every channel repriced automatically'],
  ['Google Shopping', 'Spreadsheet upload', 'An app or plugin', 'Synced from your catalogue'],
  ['Instagram, Facebook and WhatsApp catalogues', 'Uploaded piece by piece', 'Separate setup', 'One Meta sync fills all three'],
  ['A piece sold at the counter', 'Still listed', 'Still listed until someone notices', 'Removed everywhere'],
  ['Unicommerce', 'Re-keyed', 'Middleware', 'Connected to the same stock and orders'],
  ['Purity, weight, stones, HUID', 'Lost in the feed', 'Generic fields', 'From the jewellery record'],
];
const mkTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>By hand</th><th>Generic feed tools</th><th>Jwero</th></tr></thead><tbody>${MK_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const MK_HOW = [
  ['Get your catalogue ready', 'Every piece once, with purity, weights, stones and photos.'],
  ['Set your pricing rules', 'Today’s rate, making charges and GST, so every channel prices itself.'],
  ['Connect Google Merchant Center', 'Your products go to Google Shopping and stay at today’s price.'],
  ['Connect your Meta catalogue', 'One sync fills your Instagram shop, Facebook shop and WhatsApp catalogue.'],
  ['Connect Unicommerce if you use it', 'Orders and stock stay in step with your counter and website.'],
];
const mkFaqs = [
  { q: 'How do I list jewellery on Google Shopping?', a: 'Connect Google Merchant Center to Jwero. Your catalogue syncs automatically, and prices follow today’s gold rate so the price in the ad matches your site.' },
  { q: 'How do I set up an Instagram and Facebook shop for jewellery?', a: 'Connect your Meta catalogue. One sync fills your Instagram shop, Facebook shop and WhatsApp catalogue, priced at today’s rate.' },
  { q: 'Which channels does Jwero sync with?', a: 'Google Shopping, the Meta catalogue (Instagram, Facebook and WhatsApp) and Unicommerce, alongside your Jwero ecommerce website, POS and mobile apps.' },
  { q: 'Do prices update when the gold rate changes?', a: 'Yes. Every channel is repriced from the same catalogue and rate, with no feed to edit.' },
  { q: 'What happens when a piece sells at the counter?', a: 'It is removed from every connected channel, so you do not sell the same piece twice.' },
  { q: 'Do you connect to Unicommerce?', a: 'Yes. Orders and stock stay in step with your counter, website and catalogue.' },
  { q: 'Do I need a feed tool or plugin?', a: 'No. The sync is built in and runs from your Jwero catalogue.' },
];
const marketplaces = {
  slug: 'products/marketplaces',
  title: 'Google Shopping & Meta Catalogue Sync for Jewellers | Jwero',
  description: 'Sync your jewellery catalogue to Google Shopping and the Meta catalogue for Instagram, Facebook and WhatsApp, and connect Unicommerce: prices follow today’s gold rate, and a piece sold anywhere is removed everywhere.',
  schema: { ...app('Jwero Channel Sync', 'marketplaces', 'Jewellery catalogue sync to Google Shopping, the Meta catalogue (Instagram, Facebook and WhatsApp) and Unicommerce, priced at today’s gold rate, with stock removed everywhere when a piece sells.'), alternateName: ['Google Shopping for jewellers', 'Meta catalogue sync for jewellery', 'Instagram shop for jewellers', 'Jewellery product feed'] },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to list jewellery on Google Shopping and Instagram', step: MK_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Google Shopping & Meta'),
  faqs: mkFaqs,
  body: `
${L.hero({
  eyebrow: 'GOOGLE SHOPPING · META CATALOGUE · UNICOMMERCE',
  h1: 'Your jewellery on Google Shopping, Instagram and WhatsApp, at today’s gold rate.',
  sub: 'One catalogue syncs to Google Shopping and the Meta catalogue for Instagram, Facebook and WhatsApp, and connects to Unicommerce. Prices follow the rate on their own, and a piece sold anywhere is removed everywhere.',
  primary: { href: '#', label: 'Show me my products on Google', wa: 'marketplaces' },
  secondary: { href: '/products/catalog', label: 'See the Catalogue' },
  mock: mockMarket,
})}

${L.section(`${L.sectionHead('ONE RATE CHANGE, EVERY CHANNEL', 'Move the rate. Every channel follows.', '')}${mkFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('WHAT IS CONNECTED', 'Three integrations, one catalogue.', '')}<div class="wa-jobs">
  <article><h3>Google Shopping</h3><p>Your products in Google’s shopping results and Shopping ads, with prices that match your website because both come from today’s rate.</p><a href="/products/ads-manager">Ads →</a></article>
  <article><h3>Meta catalogue</h3><p>One sync fills your Instagram shop, Facebook shop and WhatsApp catalogue, so posts, ads and chats show the same piece and price.</p><a href="/products/instagram-facebook">Instagram and Facebook →</a></article>
  <article><h3>Unicommerce</h3><p>For businesses that run orders through Unicommerce: orders and stock stay in step with your counter and website.</p><a href="/platform/integrations">Integrations →</a></article>
</div>`)}

${L.section(`${L.sectionHead('WHY IT IS DIFFERENT', 'What a generic feed cannot do for a jeweller.', '')}${L.cards([
  { title: 'Prices that follow gold', text: 'A generic feed holds a fixed price. Jwero reprices every channel from today’s rate, so Google never shows yesterday’s price.' },
  { title: 'No overselling one-of-a-kind pieces', text: 'Sell a piece at the counter and it is removed from Google, Meta and Unicommerce.' },
  { title: 'Jewellery details intact', text: 'Purity, weight, stones and certificates come from the jewellery record, not squeezed into generic fields.' },
  { title: 'No feed tool, no plugin', text: 'The sync is built into the catalogue, with nothing extra to pay for or maintain.' },
  { title: 'Sales traced back', text: 'A sale from a Google or Meta ad is traced back to it, on the customer record.' },
  { title: 'One catalogue', text: 'The same record feeds your counter, ecommerce website, mobile apps and every connected channel.' },
])}`, { tone: 'tint' })}

${L.impactGrid([
  { lever: 'Gold jumps before Diwali', before: 'Google Shopping shows last week’s prices; customers find a lower price than you can sell at.', after: 'Every channel repriced from today’s rate, without anyone touching a feed.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
  { lever: 'A bridal reel goes viral', before: 'The tagged necklace sold yesterday; buyers ask for a piece you no longer have.', after: 'Sold at the counter, removed from Instagram, Facebook and WhatsApp at once.', link: { href: '/products/inventory', label: 'See Inventory' } },
  { lever: 'Running Google Shopping ads', before: 'The ad price and the website price disagree, and clicks are wasted.', after: 'Ad, website and counter show one price; sales are traced to the ad.', link: { href: '/products/ads-manager', label: 'See Ads Manager' } },
])}

${L.section(`${L.sectionHead('COMPARE', 'By hand, a generic feed tool, or Jwero.', '')}${mkTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to list jewellery on Google Shopping and Instagram.', 'Five steps.')}${L.steps(MK_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'Google, Meta and Unicommerce all read from the same catalogue as your counter.',
  'A rate change reprices every channel at once.',
  'A sale anywhere lowers the same stock everywhere.',
])}

${L.ctaBand('Put your catalogue everywhere buyers look.', 'Send us a few products. We will show them on Google Shopping and Instagram at today’s rate.', 'marketplaces')}
`,
};

// ---------------------------------------------------------------- quotations
const mockQuote = `
<div class="mock" role="img" aria-label="Illustration of a customer quotation">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Quotation QT-2026-0042 · Sent</span></div>
  <div class="mock-kv"><span>Temple necklace · 22k · 38.2 g</span><strong>₹3,18,400</strong></div>
  <div class="mock-kv"><span>Jhumka pair · 22k · 12.6 g</span><strong>₹1,04,900</strong></div>
  <div class="mock-kv"><span>Making · wastage · GST</span><strong>as per rate card</strong></div>
  <div class="mock-kv"><span>Valid till</span><strong>Sat, 7 days · rate protected</strong></div>
  <div class="mock-foot">She opens the link, accepts or declines. Acceptance moves her conversion score; a decline sends a follow-up automatically.</div>
</div>`;

// Quotations, rebuilt 2026-10-07. Not claimed (unconfirmed): advance payment on
// the quote link, printed estimate slips, old gold exchange on a quote, design
// images or karigar jobs from a quote, proforma invoices, GST lines, B2B pricing.
const Q_FLOW = [
  ['Enquiry', 'Asks on WhatsApp for a 20g temple necklace'],
  ['Drafted', 'Estimate at today’s rate · metal, making, stones line by line'],
  ['Sent', 'Numbered link and PDF on WhatsApp · after your tap'],
  ['Quiet', 'Two days, no reply · a nudge goes out automatically'],
  ['Revised', 'Version 2 with a lighter design'],
  ['Accepted', 'Accepted from her phone · written to her record'],
  ['Order', 'Converted to a sales order with the same lines'],
];
const qFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">QUOTATION · ENQUIRY TO ORDER</p>${Q_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${Q_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const Q_CMP = [
  ['Price', 'Typed from memory', 'Worked out by hand', 'From the catalogue at today’s rate'],
  ['Making and wastage', 'Varies by who types', 'A formula someone set up', 'Your rules, every time'],
  ['Which price was final', 'Lost in the chat', 'File names', 'Every version numbered'],
  ['Customer decides', 'Replies in chat', 'Prints or forwards', 'Accepts or declines on a link'],
  ['If she goes quiet', 'Forgotten', 'Forgotten', 'A follow-up sent automatically'],
  ['To an order', 'Retyped', 'Retyped', 'Converted with the same lines'],
  ['On her record', 'No', 'No', 'Yes, with the history'],
];
const qTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Prices typed in WhatsApp</th><th>An Excel or Word estimate</th><th>Jwero</th></tr></thead><tbody>${Q_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const Q_HOW = [
  ['Start from the enquiry', 'Open her record, a catalogue request, or say it at the counter.'],
  ['Pick the pieces', 'Lines come from your catalogue with weights, purity and stones.'],
  ['Let the rate price it', 'Today’s rate with your making and wastage rules, and a validity window.'],
  ['Send it', 'A numbered link and PDF on WhatsApp or email, after your tap.'],
  ['Follow up and convert', 'A nudge if she goes quiet; an order with the same lines when she accepts.'],
];
const qFaqs = [
  { q: 'What is a jewellery estimate?', a: 'A written price for chosen pieces before the sale: metal at today’s rate, making charges and stones. In Jwero it is a numbered quotation the customer can accept from her phone.' },
  { q: 'How do I make a jewellery estimate?', a: 'Pick the pieces from your catalogue; Jwero prices them at today’s rate with your making and wastage rules, and sends a numbered link and PDF on WhatsApp or email.' },
  { q: 'What is the difference between a quotation, an estimate and an invoice?', a: 'An estimate or quotation is the price offered before she decides. An invoice is the bill after the sale. In Jwero an accepted quotation converts to an order, and the invoice follows.' },
  { q: 'How does a quotation get created?', a: 'From her record, from a catalogue enquiry in one step, or by an automation. Sending always needs your confirm.' },
  { q: 'Can the customer accept it online?', a: 'Yes. She opens the link, sees the numbered quotation with its lines and PDF, and accepts or declines. It is written to her record.' },
  { q: 'Is the rate locked?', a: 'Every quotation has a validity window. Whether the rate is held inside it is your rule.' },
  { q: 'What happens if she goes quiet?', a: 'A follow-up goes out automatically after the interval you set. You can have it held for approval if you prefer.' },
  { q: 'Does an accepted quote become an order?', a: 'Yes. It converts to a sales order with the quoted lines.' },
  { q: 'Can a bridal family see one quotation?', a: 'Yes. Everyone opens the same numbered document, so there is no argument about which price was final.' },
];
const quotations = {
  slug: 'products/quotations',
  title: 'Jewellery Quotation & Estimate Software at the Live Rate | Jwero',
  description: 'Jewellery quotation and estimate software: numbered quotes priced at today’s gold rate with your making and wastage rules, sent on WhatsApp or email, accepted from her phone, followed up and converted to an order.',
  schema: { ...app('Jwero Quotations', 'quotations', 'Jewellery quotation and estimate software: live-rate pricing from the catalogue, numbered versions with a PDF, online acceptance, automatic follow-ups, and conversion to a sales order.'), alternateName: ['Jewellery estimate software', 'Jewellery estimation software', 'Jewellery quotation software'] },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to make a jewellery estimate', step: Q_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Quotations'),
  faqs: qFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY QUOTATIONS AND ESTIMATES',
  h1: 'Jewellery quotation and estimate software: priced at today’s rate, accepted from her phone.',
  sub: 'No more prices typed into WhatsApp and revised four times. An estimate drafts from your catalogue at today’s rate, goes out as a numbered link and PDF, and comes back accepted, declined or waiting, with the follow-up sent automatically.',
  primary: { href: '#', label: 'Send me a sample quotation', wa: 'quotations' },
  secondary: { href: '/products/crm', label: 'See the CRM' },
  mock: mockQuote,
})}

${L.section(`${L.sectionHead('ONE ENQUIRY, START TO FINISH', 'From “how much?” to an order, on one record.', '')}${qFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE QUOTATION', 'What jewellery quotation software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Priced at today’s rate</h3><p>Lines from your catalogue, priced from the rate with your making and wastage rules.</p><a href="/platform/pricing-engine">Pricing engine →</a></article>
  <article><h3>2. Made three ways</h3><p>From her record, a catalogue enquiry, or by automation.</p><a href="/products/digital-catalogues">Digital catalogues →</a></article>
  <article><h3>3. Sent as a numbered link</h3><p>A link and PDF on WhatsApp or email, after your tap, with a validity window.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>4. Decided from her phone</h3><p>She accepts or declines online, and it is written to her record.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>5. Followed up</h3><p>Quiet after the interval you set? A nudge goes out automatically.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>6. One version, one order</h3><p>Every revision numbered; the accepted one converts to an order with the same lines.</p><a href="/products/pos">POS and billing →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What quotes without follow-up cost you.', 'Your numbers, not ours.')}<div class="callc" data-qc>
  <div class="callc-in">
    <label>Quotes or estimates a month<input type="number" inputmode="numeric" data-q="n" value="80" min="0"></label>
    <label>That go quiet, %<input type="number" inputmode="decimal" data-q="quiet" value="50" min="0" max="100"></label>
    <label>Of those, won back by a follow-up, %<input type="number" inputmode="decimal" data-q="won" value="10" min="0" max="100"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-q="bill" value="75000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Quotes going quiet a month</span><b data-q-o="quiet">0</b></p>
    <p><span>Sales a follow-up wins back</span><b data-q-o="won">0</b></p>
    <p class="callc-save"><span>Revenue a month</span><b data-q-o="rev">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Prices in chat, an Excel estimate, or Jwero.', '')}${qTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to make a jewellery estimate.', 'Five steps.')}${L.steps(Q_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'The quote prices from the same catalogue and rate as the counter and website.',
  'Accepted or declined, it is on her record for the next conversation.',
  'Bridal families and trade buyers all see the same numbered document.',
])}

${L.ctaBand('Stop typing prices into chat.', 'Send one real enquiry from last week. We will turn it into a quotation on the call and send it to your phone.', 'quotations')}
`,
};

// ---------------------------------------------------------------- digital catalogues
const mockShare = `
<div class="mock" role="img" aria-label="Illustration of a shared digital catalogue and what it reports back">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Catalogue · “Diwali 22k edit” · shared with 38</span></div>
  <div class="mock-kv"><span>Opened</span><strong>29 · avg 2m 40s</strong></div>
  <div class="mock-kv"><span>Requested a piece</span><strong>7 → 7 quotations drafted</strong></div>
  <div class="mock-kv"><span>Checked out</span><strong>3 · ₹2,41,600 · advance paid</strong></div>
  <div class="mock-kv"><span>Meera K.</span><strong>viewed the temple set 4 times</strong></div>
  <div class="mock-foot">A catalogue is a first-party page: every open, view and request writes to the record — no snippet to install.</div>
</div>`;

// Digital catalogues, rebuilt 2026-10-07. Confirmed by Jwero: prices hidden or
// shown on request; password-protected links; B2B links with their own pricing;
// team notified when a customer opens the link. Expiry and PDF download not claimed.
const DC_FLOW = [
  ['Picked', '12 bridal necklaces for the Shah family'],
  ['Shared', 'Link sent on WhatsApp · caption written by AI'],
  ['Opened', 'Opened 6 times by the family · your team is notified'],
  ['Viewed', '3 minutes on one temple necklace'],
  ['Requested', 'Quote requested for that piece'],
  ['Quoted', 'Numbered quotation at today’s rate'],
  ['Paid', 'Advance paid on the link · piece reserved'],
];
const dcFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">DIGITAL CATALOGUE · SHARE TO ORDER</p>${DC_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${DC_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const DC_CMP = [
  ['Prices', 'Fixed the day it was made', 'Updated by hand', 'Today’s rate, or held for a named customer'],
  ['Hide prices', 'Make another PDF', 'Yes', 'Hidden, shown, or on request'],
  ['Who viewed what', 'No idea', 'Views', 'Opens, pieces and time spent, on her record'],
  ['When she opens it', 'You never know', 'Some apps', 'Your team is notified'],
  ['Private links', 'Forwarded anywhere', 'Varies', 'Password protected'],
  ['B2B buyers', 'One PDF for all', 'Price lists', 'Each buyer link carries its own pricing'],
  ['From interest to order', 'Back to chat', 'Order form', 'Request to quotation to advance payment'],
  ['Same record as the counter', 'No', 'Separate app', 'Yes, one catalogue and one customer record'],
];
const dcTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>PDF or photos on WhatsApp</th><th>A generic catalogue app</th><th>Jwero</th></tr></thead><tbody>${DC_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">See <a href="/compare/jwero-vs-quicksell">Jwero vs QuickSell</a>.</p>`;
const DC_HOW = [
  ['Pick the pieces', 'Choose from your catalogue, or start from a segment or a season.'],
  ['Set prices and privacy', 'Today’s rate, a held price, prices hidden or on request; add a password if it is private.'],
  ['Share on WhatsApp', 'The caption is written for you; edit and send to one customer or a segment.'],
  ['Watch what happens', 'Your team is notified when she opens it and sees what she looked at.'],
  ['Close it', 'Her request becomes a quotation, and she pays an advance or in full on the link.'],
];
const dcFaqs = [
  { q: 'What is a digital jewellery catalogue?', a: 'A live link of chosen pieces you share instead of a PDF. With Jwero it prices at today’s rate, shows who viewed what, and lets the customer request a quote or pay on the link.' },
  { q: 'How do I share a jewellery catalogue on WhatsApp?', a: 'Pick the pieces, and Jwero creates the link with a caption written for you. Send it to one customer or a whole segment.' },
  { q: 'Can I see who viewed my catalogue?', a: 'Yes. Opens, the pieces viewed and the time spent are written to the customer’s record, and your team is notified when she opens it.' },
  { q: 'Can I hide prices?', a: 'Yes. Show prices at today’s rate, hide them, or show them on request.' },
  { q: 'Can a catalogue be private?', a: 'Yes. Protect a link with a password so only the people you choose can open it.' },
  { q: 'Can wholesale buyers get their own prices?', a: 'Yes. Each B2B buyer link carries its own pricing and terms.' },
  { q: 'Why not just send a PDF?', a: 'A PDF has yesterday’s prices, can be forwarded anywhere, and tells you nothing. A link stays at today’s rate, can be private, and reports back.' },
  { q: 'How is this different from the Catalogue (PIM)?', a: 'The catalogue holds every piece once. A digital catalogue is a chosen set from it, shared with one customer, family, buyer or season.' },
];
const digitalCatalogues = {
  slug: 'products/digital-catalogues',
  title: 'Digital Catalogue App for Jewellers: Share on WhatsApp, Live Prices | Jwero',
  description: 'Digital jewellery catalogues: share an online catalogue on WhatsApp at today’s gold rate, hide prices or password protect it, give B2B buyers their own pricing, see who viewed what, and take quotes and advance payments.',
  schema: { ...app('Jwero Digital Catalogues', 'digital-catalogues', 'Shareable digital jewellery catalogues: live-rate prices or hidden prices, password-protected links, B2B buyer pricing, view tracking with notifications, request to quotation and advance payment, shared on WhatsApp.'), alternateName: ['Digital catalogue for jewellers', 'Online jewellery catalogue', 'WhatsApp catalogue sharing for jewellers', 'Jewellery catalogue app'] },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to make a digital jewellery catalogue', step: DC_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Digital Catalogues'),
  faqs: dcFaqs,
  body: `
${L.hero({
  eyebrow: 'DIGITAL JEWELLERY CATALOGUE',
  h1: 'Digital catalogue for jewellers: share on WhatsApp, see who viewed what, take the order.',
  sub: 'A live link instead of a PDF. Prices at today’s rate or hidden, private with a password, buyer pricing for B2B, and your team told the moment she opens it.',
  primary: { href: '#', label: 'Send me a live catalogue link', wa: 'catalogues' },
  secondary: { href: '/products/catalog', label: 'See the Catalogue (PIM)' },
  mock: mockShare,
})}

${L.section(`${L.sectionHead('ONE SHARE, START TO FINISH', 'From a WhatsApp link to an advance paid.', '')}${dcFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE LINK', 'What a digital jewellery catalogue has to do.', '')}<div class="wa-jobs">
  <article><h3>1. The right pieces for each person</h3><p>A chosen set for one customer, family, buyer or season, taken from your catalogue.</p><a href="/products/catalog">Catalogue →</a></article>
  <article><h3>2. Prices your way</h3><p>Today’s rate, a price held for a named customer, hidden, or on request.</p><a href="/platform/pricing-engine">Pricing engine →</a></article>
  <article><h3>3. Shared on WhatsApp</h3><p>The caption is written for you; send to one customer or a segment.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>4. Know who looked</h3><p>Your team is notified when she opens it; pieces viewed and time spent go on her record.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>5. From interest to order</h3><p>A request becomes a numbered quotation, and she pays an advance or in full on the link.</p><a href="/products/quotations">Quotations →</a></article>
  <article><h3>6. Private and B2B ready</h3><p>Password-protected links, and buyer links that carry each buyer’s own pricing.</p><a href="/solutions/b2b-jewellery">Wholesale and B2B →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What a PDF catalogue costs you.', 'Your numbers, not ours.')}<div class="callc" data-dcc>
  <div class="callc-in">
    <label>Customers you send a catalogue to, a month<input type="number" inputmode="numeric" data-dc="n" value="400" min="0"></label>
    <label>Who ask about a piece from a PDF, %<input type="number" inputmode="decimal" data-dc="pdf" value="1" min="0" max="100" step="0.5"></label>
    <label>Who ask when you follow up the ones who looked, %<input type="number" inputmode="decimal" data-dc="link" value="3" min="0" max="100" step="0.5"></label>
    <label>Of those, who buy, %<input type="number" inputmode="decimal" data-dc="buy" value="25" min="0" max="100"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-dc="bill" value="60000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Extra enquiries a month</span><b data-dc-o="enq">0</b></p>
    <p><span>Extra sales a month</span><b data-dc-o="sales">0</b></p>
    <p class="callc-save"><span>Extra revenue a month</span><b data-dc-o="rev">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'A PDF, a generic catalogue app, or Jwero.', '')}${dcTable()}`)}

${L.impactGrid([
  { lever: 'A retailer asks for the new line', before: 'A PDF with last week’s prices.', after: 'A buyer link with their own pricing and today’s rate; you see what they lingered on.', link: { href: '/solutions/b2b-jewellery', label: 'See Wholesale & B2B' } },
  { lever: 'A bride’s family wants to compare', before: 'Forty photos in three chats.', after: 'One shortlist link the whole family opens; requests become one quotation.', link: { href: '/solutions/bridal', label: 'See bridal' } },
  { lever: 'Festival edit to 400 customers', before: 'A forwarded PDF; no idea who cared.', after: 'A segment gets the link; the opens and requests are on the records by evening.', link: { href: '/products/segmentation', label: 'See Segmentation' } },
])}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to make a digital jewellery catalogue.', 'Five steps.')}${L.steps(DC_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'The catalogue link prices from the same rate and record as the counter.',
  'What she viewed sits on her record, ready for the next call or message.',
  'Your full public store is the <a href="/products/ecommerce">ecommerce website</a>; a digital catalogue is the private, chosen set.',
])}

${L.ctaBand('Your next catalogue share, with the report attached.', 'Tell us the pieces. We will build the link on the call and send it to you the way a customer gets it.', 'catalogues')}
`,
};

// ---------------------------------------------------------------- reports
const mockReports = `
<div class="mock" role="img" aria-label="Illustration of the report builder">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Report builder · “Ageing by branch, 180+ days”</span></div>
  <div class="mock-kv"><span>Source</span><strong>Inventory · stock by tag</strong></div>
  <div class="mock-kv"><span>Filters</span><strong>age &gt; 180 days · branch = all · category = bangles</strong></div>
  <div class="mock-kv"><span>Chart</span><strong>Bar · ₹ at cost by branch</strong></div>
  <div class="mock-kv"><span>Ask</span><strong>“Which branch holds the most 180-day bangles?”</strong></div>
  <div class="mock-foot">Ask it in a sentence or build it with filters; pin it to a dashboard; export it. Same data every module writes.</div>
</div>`;

// Reports, rebuilt 2026-10-07. Confirmed by Jwero: scheduled reports live,
// mobile owner's dashboard, Excel export. Not claimed: WhatsApp delivery of
// scheduled reports, Zoho Books. Predictive forecasting is not claimed.
const RE_FLOW = [
  ['9:00 am', 'The owner asks: “Which branch holds the most 180-day bangles?”'],
  ['Built', 'AI builds the source, filters and chart'],
  ['Pinned', 'Saved and pinned to the morning dashboard on her phone'],
  ['Answer', 'Branch 2 · 43 pieces · ₹38 lakh'],
  ['Action', 'Moved to Branch 1 and offered to matching customers'],
  ['Shared', 'Exported to Excel for the partners · scheduled every Monday'],
];
const reFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">REPORTS · QUESTION TO ACTION</p>${RE_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${RE_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const RE_LIST = [
  ['Sales', 'By branch, channel, salesperson and category', '/products/pos'],
  ['Stock ageing', 'What has sat for 90, 180 and 365 days, and where', '/products/inventory'],
  ['Dead stock', 'Value tied up in pieces that do not move', '/tools/dead-stock-calculator'],
  ['Customer value', 'RFM, segments and scores', '/products/segmentation'],
  ['Gold schemes', 'Collections, dues and maturity', '/products/gold-schemes'],
  ['Receivables', 'Who owes what, and since when', '/products/billing-finance'],
  ['Team', 'Attendance, payroll and incentives', '/products/hr-payroll'],
  ['Marketing', 'Ad spend against the sales it brought', '/products/ads-manager'],
];
const RE_CMP = [
  ['Getting an answer', 'Export, paste, format', 'Fixed reports only', 'Ask in a sentence'],
  ['Data', 'Whatever was exported', 'Billing only', 'Sales, stock, customers, schemes, finance, people'],
  ['Branches', 'One file per branch', 'Per branch', 'All branches, by role'],
  ['On your phone', 'No', 'Sometimes', 'Owner’s dashboard on mobile'],
  ['Every Monday', 'Someone makes it', 'No', 'Scheduled reports'],
  ['For the CA and bank', 'Excel', 'PDF', 'Excel, CSV and PDF'],
  ['What to do next', 'No', 'No', 'Scores and opportunities beside the totals'],
];
const reTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Excel exports</th><th>Reports in billing software</th><th>Jwero</th></tr></thead><tbody>${RE_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const RE_HOW = [
  ['Pick five numbers', 'Yesterday’s sales, stock ageing, scheme dues, receivables and walk-ins.'],
  ['Ask for each one', 'Type the question; AI builds the report for you.'],
  ['Pin them', 'Add them to the owner’s dashboard, on desktop and phone.'],
  ['Give each role theirs', 'Branch managers see their branch; finance reports stay with finance.'],
  ['Schedule the rest', 'Weekly reports go out on their own; export to Excel when needed.'],
];
const reFaqs = [
  { q: 'What is MIS for a jewellery business?', a: 'Management information: the reports an owner uses to run the business, such as sales, stock ageing, scheme dues and receivables. Jwero builds them from one record, across every branch.' },
  { q: 'Which reports should a jewellery owner see daily?', a: 'Yesterday’s sales by branch, stock ageing, scheme collections due, receivables, and walk-ins against sales. Pin them to the owner’s dashboard.' },
  { q: 'Do I need to know how to build reports?', a: 'No. Type the question and AI builds the report’s source, filters and chart. Adjust, save and pin.' },
  { q: 'Can I see reports on my phone?', a: 'Yes. The owner’s dashboard works on mobile.' },
  { q: 'Can reports be scheduled?', a: 'Yes. Schedule a report and it is delivered on its own, every day, week or month.' },
  { q: 'Can I export to Excel?', a: 'Yes. Excel, CSV and PDF.' },
  { q: 'Who can see what?', a: 'Reports follow roles: a branch manager sees her branch, head office sees all, and finance and payroll stay with the roles that own them.' },
  { q: 'Will my accountant use this?', a: 'Your books sync to Tally for the accountant; these reports are for running the business day to day.' },
];
const reports = {
  slug: 'products/reports',
  title: 'Jewellery MIS Reports & Dashboard Software | Jwero',
  description: 'Jewellery MIS reports and dashboards: ask a question and AI builds the report, pin it to an owner’s dashboard on your phone, schedule it, export to Excel. Sales, stock ageing, schemes, receivables and staff across every branch.',
  schema: { ...app('Jwero Reports', 'reports', 'Jewellery MIS reports and dashboards: AI-built reports from a plain question, a report builder, role-based dashboards including a mobile owner’s dashboard, scheduled reports, Excel, CSV and PDF exports, over sales, stock ageing, customers, schemes, receivables and staff across branches.'), alternateName: ['Jewellery MIS software', 'Jewellery sales reports', 'Jewellery business dashboard'] },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up a daily dashboard for a jewellery business', step: RE_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Reports & Dashboards'),
  faqs: reFaqs,
  body: `
${L.hero({
  eyebrow: 'MIS REPORTS · DASHBOARDS',
  h1: 'Jewellery MIS reports and dashboards: ask a question, get the answer, across every branch.',
  sub: 'Every module writes to one record, so one place answers it all: sales, stock, customers, schemes, money and people. Type the question, pin the answer to your phone, schedule it, and export to Excel when the CA asks.',
  primary: { href: '#', label: 'Show me a report on my kind of business', wa: 'reports' },
  secondary: { href: '/platform', label: 'See the platform tour' },
  mock: mockReports,
})}

${L.section(`${L.sectionHead('ONE QUESTION, START TO FINISH', 'From a question at 9am to stock moving by noon.', '')}${reFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE RECORD', 'What jewellery MIS software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Ask in a sentence</h3><p>AI turns a plain question into a report, ready to save and pin.</p><a href="/platform/ai-workforce">AI →</a></article>
  <article><h3>2. Build your own</h3><p>Pick a source, add filters, choose a chart, preview live, save.</p><a href="/products/erp">ERP →</a></article>
  <article><h3>3. Dashboards for each role</h3><p>The owner’s morning on your phone, the branch manager’s week, the scheme desk’s dues.</p><a href="/products/multi-store">Branches →</a></article>
  <article><h3>4. Jewellery reports built in</h3><p>Stock ageing, dead stock, RFM, scheme collections, receivables and payroll.</p><a href="/products/inventory">Stock ageing →</a></article>
  <article><h3>5. On time, every time</h3><p>Scheduled reports, and exports to Excel, CSV and PDF.</p><a href="/products/billing-finance">Accounts →</a></article>
  <article><h3>6. What to do next</h3><p>Customer scores and opportunities beside the totals, not just what happened.</p><a href="/platform/customer-memory">Customer intelligence →</a></article>
</div>`)}

${L.section(`${L.sectionHead('REPORTS EVERY JEWELLER NEEDS', 'Ready on day one.', '')}<div class="erp-map">${RE_LIST.map(([t, d, h]) => `<a href="${h}"><b>${t}</b><span>${d}</span></a>`).join('')}</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What building reports in Excel costs you.', 'Your numbers, not ours.')}<div class="callc" data-rec>
  <div class="callc-in">
    <label>Reports made by hand a week<input type="number" inputmode="numeric" data-re="n" value="6" min="0"></label>
    <label>Hours each, exporting and formatting<input type="number" inputmode="decimal" data-re="h" value="1.5" min="0" step="0.5"></label>
    <label>Cost an hour, ₹<input type="number" inputmode="numeric" data-re="cost" value="300" min="0" step="50"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Hours a year</span><b data-re-o="hrs">0</b></p>
    <p class="callc-save"><span>Cost a year</span><b data-re-o="yr">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('COMPARE', 'Excel exports, billing software reports, or Jwero.', '')}${reTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to set up a daily owner’s dashboard.', 'Five steps.')}${L.steps(RE_HOW.map(([title, text]) => ({ title, text })))}`)}

${L.ctaBand('One question you have never had a clean answer to.', 'Bring it. We will build the report on the call, on your kind of data.', 'reports')}
`,
};

// ---------------------------------------------------------------- training & LMS
const mockLms = `
<div class="mock" role="img" aria-label="Illustration of a staff training course">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Course · Hallmarking &amp; HUID at the counter</span></div>
  <div class="mock-kv"><span>Lessons</span><strong>6 · 4 done</strong></div>
  <div class="mock-kv"><span>Assessment</span><strong>10 questions · pass at 80%</strong></div>
  <div class="mock-kv"><span>Enrolled</span><strong>Branch 2 · 5 of 7 complete</strong></div>
  <div class="mock-kv"><span>On completion</span><strong>Certificate · skill “HUID” on the profile</strong></div>
  <div class="mock-foot">A low score on the floor suggests the course; a passed course updates the skill. The loop closes on the employee record.</div>
</div>`;

// Training & LMS, rebuilt 2026-10-07. Not claimed (unconfirmed): AI-made courses
// or quizzes, a ready-made course library, video uploads (links only), courses
// in the staff's language, AI role-play. HR has nothing for karigars.
const LM_FLOW = [
  ['Day one', 'Priya joins as a sales associate'],
  ['Path', '“New sales associate” path on her phone'],
  ['Lessons', 'Hallmarking and HUID · making charges · schemes · old gold'],
  ['Quiz', 'Passed at 85% · certificate on her profile'],
  ['A month on', 'Her bangle conversion dips on the scorecard'],
  ['Suggested', 'The matching course is suggested · passed · skill updated'],
];
const lmFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">TRAINING · JOIN TO SKILLED</p>${LM_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${LM_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const LM_CMP = [
  ['What a new hire learns', 'Whatever the senior remembers', 'Generic courses', 'Your courses, per role'],
  ['Checking she learnt it', 'No', 'Quizzes', 'Quizzes scored securely, answers hidden'],
  ['Proof', 'None', 'A certificate', 'Certificate on her staff profile'],
  ['When she slips', 'Noticed late', 'No link', 'A scorecard dip suggests the course'],
  ['Where she learns', 'On the floor', 'Another app', 'The staff app she already uses'],
  ['Same record as HR', 'No', 'No', 'Yes, beside attendance and payslips'],
];
const lmTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Shadowing a senior</th><th>A generic LMS</th><th>Jwero</th></tr></thead><tbody>${LM_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const LM_HOW = [
  ['List what new staff get wrong', 'Hallmarking, making charges, scheme rules, old gold, how to say the price.'],
  ['Make a course for each', 'Ordered lessons with text, images and video links.'],
  ['Add a quiz', 'Set a pass mark; attempts are kept.'],
  ['Build a path per role', 'Sales associate, cashier, manager: day one has a syllabus.'],
  ['Link it to performance', 'A dip on the scorecard suggests the course; a pass updates the skill.'],
];
const lmFaqs = [
  { q: 'What should jewellery sales staff be trained on?', a: 'Hallmarking and HUID, how the price is worked out from the gold rate and making charges, gold scheme rules, old gold exchange, and how to present the price with confidence.' },
  { q: 'What is an LMS for a jewellery business?', a: 'A learning management system: courses, quizzes and certificates for your staff, with progress tracked. Jwero’s sits inside HR, beside attendance and payroll.' },
  { q: 'What is a course made of?', a: 'Ordered lessons with text, images and video links, plus quizzes. It completes only when every lesson is done and every quiz passed.' },
  { q: 'Are quiz answers safe?', a: 'Yes. Quizzes are scored securely and staff never see the answer key.' },
  { q: 'Can I set a path per role?', a: 'Yes. Learning paths string courses together for a role, such as a new sales associate, a cashier or a manager.' },
  { q: 'Does it connect to performance?', a: 'Yes. A dip on a scorecard suggests the matching course, and a pass updates the skill on the staff profile.' },
  { q: 'Where do staff take courses?', a: 'In the staff app on their phone, beside attendance, leave and payslips.' },
];
const trainingLms = {
  slug: 'products/training-lms',
  title: 'Jewellery Staff Training Software (LMS): Sales & Product Training | Jwero',
  description: 'Jewellery staff training software: product knowledge and sales training courses, quizzes scored securely, certificates on the staff profile, learning paths per role, and courses suggested when performance dips.',
  schema: { ...app('Jwero Training & LMS', 'training-lms', 'Learning management for jewellery staff: courses with lessons and video links, quizzes scored securely, certificates, learning paths per role, and performance-linked course suggestions inside HR.'), alternateName: ['Jewellery sales training software', 'Jewellery staff LMS', 'Product knowledge training for jewellery staff'] },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to train jewellery sales staff', step: LM_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Training & LMS'),
  faqs: lmFaqs,
  body: `
${L.hero({
  eyebrow: 'STAFF TRAINING · LMS',
  h1: 'Jewellery staff training software: product knowledge and sales training, with quizzes and certificates.',
  sub: 'Courses for what a jewellery floor gets wrong: hallmarking, making charges, scheme rules, old gold, how to say the price. Quizzes scored honestly, certificates on the profile, and the next course suggested when performance slips.',
  primary: { href: '#', label: 'Show me a course my staff would take', wa: 'training' },
  secondary: { href: '/products/hr-payroll', label: 'See HR & Payroll' },
  mock: mockLms,
})}

${L.section(`${L.sectionHead('ONE NEW HIRE, START TO FINISH', 'From day one to a skill on her profile.', '')}${lmFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE STAFF RECORD', 'What jewellery staff training software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Courses that fit the trade</h3><p>Ordered lessons with text, images and video links, on hallmarking, pricing, schemes and selling.</p><a href="/blog/how-to-calculate-gold-jewellery-price">Gold pricing →</a></article>
  <article><h3>2. Quizzes that count</h3><p>Scored securely with a pass mark; attempts kept; answers never shown.</p><a href="/trust/security">Security →</a></article>
  <article><h3>3. Certificates on the profile</h3><p>Issued on completion, once per person per course.</p><a href="/products/hr-payroll">HR →</a></article>
  <article><h3>4. A path for each role</h3><p>Sales associate, cashier, manager: day one has a syllabus.</p><a href="/products/multi-store">Branches →</a></article>
  <article><h3>5. Linked to performance</h3><p>A scorecard dip suggests the course; a pass updates the skill.</p><a href="/products/reports">Reports →</a></article>
  <article><h3>6. On their phone</h3><p>In the staff app, beside attendance, leave and payslips.</p><a href="/products/hr-payroll">Staff app →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What training by shadowing costs you.', 'Your numbers, not ours.')}<div class="callc" data-lmc>
  <div class="callc-in">
    <label>New sales staff a year<input type="number" inputmode="numeric" data-lm="n" value="8" min="0"></label>
    <label>Weeks a senior spends shadowing each<input type="number" inputmode="decimal" data-lm="w" value="3" min="0" step="0.5"></label>
    <label>Share of the senior’s time it takes, %<input type="number" inputmode="decimal" data-lm="pct" value="30" min="0" max="100"></label>
    <label>Senior’s monthly salary, ₹<input type="number" inputmode="numeric" data-lm="sal" value="35000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Senior weeks spent a year</span><b data-lm-o="wk">0</b></p>
    <p class="callc-save"><span>Senior time cost a year</span><b data-lm-o="cost">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs; it leaves out sales lost while a new hire learns.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Shadowing a senior, a generic LMS, or Jwero.', '')}${lmTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to train jewellery sales staff.', 'Five steps.')}${L.steps(LM_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A cashier’s exchange-valuation errors show on her scorecard; the course is suggested; her pass updates the skill.',
  'Training sits beside attendance and payroll on one staff record, not in a separate tool.',
])}

${L.ctaBand('The mistakes your floor repeats have a course.', 'Tell us the three things new staff get wrong. We will show the course, the quiz and the certificate on a call.', 'training')}
`,
};

module.exports = [email, marketplaces, quotations, digitalCatalogues, reports, trainingLms];
