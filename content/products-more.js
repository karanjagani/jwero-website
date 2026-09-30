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
  <div class="mock-foot">One record per customer, whichever door she used. The email reply drafts from the same record as the WhatsApp one.</div>
</div>`;

const email = {
  slug: 'products/email',
  title: 'Business Email on Your Own Domain, Inside the Same Inbox | Jwero',
  description: 'Mailboxes on your own domain, provisioned by Jwero with DKIM, SPF and DMARC in place; email threads in the same shared inbox as WhatsApp and Instagram; email in campaigns and journeys with unsubscribe and bounce handling; AI drafts that wait for approval.',
  schema: app('Jwero Business Email', 'email', 'Own-domain business mailboxes, a shared email inbox unified with WhatsApp and Instagram, and email campaigns with consent and bounce handling — for jewellery businesses.'),
  breadcrumbs: BC('Business Email'),
  faqs: [
    { q: 'Do I need to buy email hosting separately?', a: 'No. Mailboxes on your own domain — care@, orders@, a name per salesperson — are provisioned by Jwero on its own mail infrastructure, with DKIM, SPF and DMARC records given to you as a checklist and verified from inside the app.' },
    { q: 'Can I keep my existing Google Workspace or Zoho Mail?', a: 'Yes. The shared inbox connects an existing mailbox over IMAP and sends through its SMTP; the built-in mailboxes are for businesses that don’t have one or want the trade’s email in the same place as the trade’s WhatsApp.' },
    { q: 'Does email marketing come with this?', a: 'Email is a channel in Campaigns and Journeys — templates with the same 30 personalisation fields, unsubscribe links enforced, bounces and delivery notices read back onto the contact so a dead address stops being mailed.' },
    { q: 'Will the AI answer my email on its own?', a: 'It drafts. Every reply and every campaign waits for approval until you widen what may run alone, per action type — the same governance as WhatsApp.' },
    { q: 'What is not there yet?', a: 'A self-serve mailbox wizard: today your mailboxes are provisioned for you during onboarding. Aliases, seat metering and a platform-level console are on the roadmap.' },
  ],
  body: `
${L.hero({
  eyebrow: 'BUSINESS EMAIL',
  h1: 'Your own-domain email. In the same inbox as WhatsApp.',
  sub: 'care@yourshop.in, orders@, one address per salesperson — provisioned by Jwero, signed and verified, and landing in the one inbox your team already answers. Replies draft from the customer record and wait for your tap.',
  primary: { href: '#', label: 'Set up my business email', wa: 'email' },
  secondary: { href: '/products/whatsapp', label: 'See the shared inbox' },
  mock: mockMail,
})}

${L.section(
  `${L.sectionHead('WHAT YOU GET', 'Email that behaves like the rest of the OS.', '')}
  ${L.cards([
    { title: 'Mailboxes on your domain', text: 'Provisioned by Jwero, with the DNS records listed for you and verified from the app. Mail is signed and authenticated so it lands in the inbox, not in spam.' },
    { title: 'One inbox, every door', text: 'Email threads sit beside WhatsApp, Instagram and web chat, on the same customer record — no second tab, no second person.' },
    { title: 'Bring your own mailbox', text: 'Already on Google Workspace or Zoho? Connect it over IMAP and send through its SMTP. Nothing moves.' },
    { title: 'Email in campaigns & journeys', text: 'Templates with the same personalisation fields as WhatsApp; unsubscribe enforced; a bounce or delivery notice writes back to the contact.' },
    { title: 'AI drafts, you approve', text: 'Replies draft from the record — her order, her scheme balance, her last visit. Sent after your tap, inside daily caps and quiet hours.' },
    { title: 'Transactional mail, too', text: 'Receipts, OTPs, meeting links and reminders go out on branded templates from the same sender.' },
  ])}`
)}

${L.impactGrid([
  { lever: 'A supplier emails a PO', before: 'It sits in someone’s personal Gmail.', after: 'It lands on the party record beside their WhatsApp thread; the order can be raised from it.', link: { href: '/products/purchase-vendors', label: 'See Purchase & Vendors' } },
  { lever: 'A customer replies to a receipt', before: 'Nobody sees it for two days.', after: 'It threads onto her record; a reply drafts, waits for approval.', link: { href: '/platform/customer-memory', label: 'See Customer Memory' } },
  { lever: 'A festival campaign by email', before: 'A bulk tool with its own list and no opt-out logic.', after: 'A segment from the same record, unsubscribe enforced, bounces read back.', link: { href: '/products/campaigns', label: 'See Campaigns' } },
])}

${L.honestGapsBlock([
  'Self-serve mailbox creation, aliases and seat metering are on the roadmap — today mailboxes are set up for you during onboarding.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Try the WhatsApp button on this page — the same inbox answers it.</p>`, { tone: 'tint' })}

${L.ctaBand('Put the trade’s email where the trade’s WhatsApp already is.', 'Tell us your domain. We will show the DNS checklist, the first mailbox and the inbox — on a call, in fifteen minutes.', 'email')}
`,
};

// ---------------------------------------------------------------- marketplaces
const mockMarket = `
<div class="mock" role="img" aria-label="Illustration of marketplace orders landing on one order ledger">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Orders · all doors · today</span></div>
  <div class="mock-kv"><span>Amazon.in</span><strong>#403-118 · Silver anklet pair · ₹2,180</strong></div>
  <div class="mock-kv"><span>Flipkart</span><strong>OD31 · 2 shipments → 1 order · ₹6,400</strong></div>
  <div class="mock-kv"><span>Counter · Branch 2</span><strong>INV-2291 · 22k bangle · ₹1,14,300</strong></div>
  <div class="mock-kv"><span>WhatsApp</span><strong>Meera K. · advance ₹25,000</strong></div>
  <div class="mock-foot">Every door lowers the same stock. Available quantity pushes back to the marketplaces that opted in.</div>
</div>`;

const marketplaces = {
  slug: 'products/marketplaces',
  title: 'Amazon & Flipkart Orders on One Ledger — Marketplace Integration | Jwero',
  description: 'Connect Amazon Seller (SP-API) and Flipkart Seller accounts: orders poll into the same sales-order ledger as your counter and WhatsApp sales, and available stock across warehouses pushes back so a sale on any door lowers what the marketplace can sell.',
  schema: app('Jwero Marketplaces', 'marketplaces', 'Amazon and Flipkart order intake and inventory push on one order ledger and one stock truth for jewellery sellers.'),
  breadcrumbs: BC('Marketplaces'),
  faqs: [
    { q: 'Which marketplaces are supported?', a: 'Amazon Seller Central and Flipkart Seller, through their official seller integrations. Both connect from Settings → Integrations → Marketplaces; amazon.in is the default, other Amazon regions are supported.' },
    { q: 'What flows in?', a: 'Orders. Jwero keeps each connection in sync — Flipkart’s multiple shipments fold back into one order — and hands every order to the same pipeline your counter and WhatsApp orders use. Stock, ledger and the customer record update once.' },
    { q: 'What flows out?', a: 'Available quantity per SKU, summed across your warehouses, to any connection that opts in — so a piece sold at the counter stops being sellable on Amazon within the next push. Listings themselves are still created on the marketplace.' },
    { q: 'Does it create or edit my listings?', a: 'Not yet. Listing creation and content sync are on the roadmap; today the integration is orders in, stock out.' },
    { q: 'Do marketplace buyers become customers in Jwero?', a: 'Yes — as contacts on the same record model, within what each marketplace shares. Consent for marketing is never assumed from a marketplace order.' },
  ],
  body: `
${L.hero({
  eyebrow: 'MARKETPLACES',
  h1: 'Amazon and Flipkart orders, on the same ledger as the counter.',
  sub: 'Connect your seller accounts once. Orders poll in and become the same sales orders your counter and WhatsApp raise; available stock pushes back, so every door lowers one truth.',
  primary: { href: '#', label: 'Connect my seller accounts', wa: 'marketplaces' },
  secondary: { href: '/products/inventory', label: 'See Inventory' },
  mock: mockMarket,
})}

${L.section(
  `${L.sectionHead('ORDERS IN, STOCK OUT', 'Two directions. One truth.', '')}
  ${L.cards([
    { title: 'Amazon Seller', text: 'Connect your Seller Central account once; orders and items sync on their own. amazon.in by default; other regions supported.' },
    { title: 'Flipkart Seller', text: 'Flipkart ships one order in several shipments; Jwero folds them back into one sales order and keeps the shipment references.' },
    { title: 'One order pipeline', text: 'Marketplace orders go through the same pipeline as every other door — stock deducted, ledger posted, customer created or matched.' },
    { title: 'Inventory push', text: 'Available quantity per SKU across warehouses, pushed to each connection that opts in. A counter sale lowers the marketplace quantity on the next sweep.' },
    { title: 'Nothing skipped', text: 'A failed sync is retried, never skipped; a broken connection is surfaced to you, not silently ignored.' },
    { title: 'Shopping carts too', text: 'Shopify and WooCommerce connect the same way for your own store; Unicommerce for OMS-heavy operations.', link: { href: '/platform/integrations', label: 'See Integrations' } },
  ])}`
)}

${L.honestGapsBlock([
  'Listing creation and content sync to marketplaces are not built — listings are managed on the marketplace; Jwero syncs orders and available quantity.',
  'Marketplace fees and settlements are not reconciled automatically yet; payouts are posted as receipts.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every WhatsApp button on this site is the live product, not a form.</p>`, { tone: 'tint' })}

${L.ctaBand('See a marketplace order land next to a counter bill.', 'Bring your seller account. We connect it on the call and watch the first orders arrive.', 'marketplaces')}
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
  <div class="mock-foot">She opens the link, accepts or declines. Acceptance moves her conversion score; a decline drafts a follow-up for your tap.</div>
</div>`;

const quotations = {
  slug: 'products/quotations',
  title: 'Customer Quotations — Numbered, Priced at Live Rate, Accepted Online | Jwero',
  description: 'Numbered quotations with line items and a PDF, priced from the catalogue at the live rate, sent on WhatsApp or email, accepted or declined by the customer on a public link — created from an enquiry, from a catalogue request, or by voice at the counter.',
  schema: app('Jwero Quotations', 'quotations', 'Quotation lifecycle for jewellers: draft, sent, accepted or declined, with online acceptance, live-rate pricing and follow-up journeys.'),
  breadcrumbs: BC('Quotations'),
  faqs: [
    { q: 'How does a quotation get created?', a: 'Four ways: from the customer record, from a catalogue enquiry in one call, from the counter’s sell cockpit — say “Priya ke liye quotation banao aur bhejo” in English, Hindi or Hinglish — or by an automation. Every outward step (send, convert) still needs a human confirm.' },
    { q: 'Can the customer accept it online?', a: 'Yes. She receives a link, sees the numbered quotation with line items and a PDF, and accepts or declines. The status moves on her record and her scores move with it.' },
    { q: 'What happens if she goes quiet?', a: 'The quote follow-up journey drafts a nudge after the interval you set; it waits in your approval queue like every other send.' },
    { q: 'Does an accepted quote become an order?', a: 'Yes — convert to a sales order with the quoted lines; the invoice follows at the counter or online.' },
    { q: 'Is the price locked?', a: 'A validity window is on every quotation. Whether the rate is protected inside it is your rule — most jewellers protect for a few days and reprice after.' },
  ],
  body: `
${L.hero({
  eyebrow: 'QUOTATIONS',
  h1: 'A quote she can accept from her phone. Numbered, priced, on the record.',
  sub: 'No more prices typed into WhatsApp and revised four times. A quotation drafts from the catalogue at the live rate, goes out as a link and a PDF, and comes back accepted, declined or quietly waiting — with the follow-up already drafted.',
  primary: { href: '#', label: 'Send me a sample quotation', wa: 'quotations' },
  secondary: { href: '/products/crm', label: 'See the CRM' },
  mock: mockQuote,
})}

${L.section(
  `${L.sectionHead('THE LIFECYCLE', 'Draft → sent → accepted or declined → order.', '')}
  ${L.steps([
    { title: 'Draft', text: 'From her record, from a catalogue enquiry, or by voice at the counter. Lines priced from the catalogue at today’s rate with your making and wastage rules.' },
    { title: 'Send', text: 'A numbered quotation with a PDF, on WhatsApp or email — after your tap. Validity window on every one.' },
    { title: 'Accept or decline', text: 'She opens the public link and decides. Acceptance and decline write to her record and move her scores.' },
    { title: 'Follow up or convert', text: 'Quiet? The quote follow-up journey drafts a nudge. Accepted? Convert to a sales order with the quoted lines.' },
  ])}`
)}

${L.section(
  `${L.cards([
    { title: 'Voice at the counter', text: 'Say it at the counter — find products, look up a customer, draft, send, convert, checkout — in English, Hindi or Hinglish. Sending still needs your confirm.' },
    { title: 'Enquiry to quote, one call', text: 'A public catalogue enquiry with the pieces she picked becomes a quotation with those lines — from the admin sheet, an assistant tool or an automation.' },
    { title: 'Revisions kept in order', text: 'Every version numbered; the one she accepted is the one that ships.' },
    { title: 'Bridal and B2B ready', text: 'Family committees and trade buyers see the same numbered document — no argument about which WhatsApp price was final.', link: { href: '/solutions/bridal', label: 'See bridal' } },
  ], 4)}`
, { tone: 'tint' })}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Message us and we will send you a real quotation link, the way your customer gets one.</p>`, { tone: 'tint' })}

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

const digitalCatalogues = {
  slug: 'products/digital-catalogues',
  title: 'Shareable Digital Catalogues — Live Prices, Tracked Views, Enquiry to Quote | Jwero',
  description: 'Curated catalogue links per customer, buyer or season, priced at the live rate, shared on WhatsApp with a ready caption; every open and view tracked on the record; requests become quotations; checkout with advance payment; the same products published to Meta commerce catalogues.',
  schema: app('Jwero Digital Catalogues', 'digital-catalogues', 'Shareable, tracked, live-priced catalogue links for jewellers with enquiry-to-quotation and checkout.'),
  breadcrumbs: BC('Digital Catalogues'),
  faqs: [
    { q: 'How is this different from the Catalogue (PIM)?', a: 'The PIM is the master: every design, purity, stone and certificate, once. A digital catalogue is a curated, shareable slice of it — a Diwali edit, a bridal shortlist for one family, a buyer link for one retailer — with its own numbering, its own visibility and its own analytics.' },
    { q: 'Are prices live?', a: 'Yes. A catalogue prices from the same engine as the counter, so a rate change reprices every open link. You can hold a price for a named customer inside a validity window.' },
    { q: 'What do I learn from a share?', a: 'Who opened, what she viewed and for how long, what she requested, what she checked out. Catalogues are first-party pages, so tracking is automatic — nothing to install — and it all writes to her record and her intent score.' },
    { q: 'Can a customer buy from it?', a: 'Yes — request a quotation, or check out with an advance or full payment. Orders and payments post to the same ledger as everything else.' },
    { q: 'Does it feed Instagram and Facebook shops?', a: 'The same products publish to Meta commerce catalogues, so a product tagged in a post is the product on your record.' },
  ],
  body: `
${L.hero({
  eyebrow: 'DIGITAL CATALOGUES',
  h1: 'Share a catalogue. Know exactly who looked, at what, for how long.',
  sub: 'Curated links per customer, per family, per buyer or per season — priced live, shared on WhatsApp with the caption written for you, and reporting every open and request back to the record.',
  primary: { href: '#', label: 'Send me a live catalogue link', wa: 'catalogues' },
  secondary: { href: '/products/catalog', label: 'See the Catalogue (PIM)' },
  mock: mockShare,
})}

${L.section(
  `${L.cards([
    { title: 'Curated, not the whole shop', text: 'A slice of the master catalogue with its own number and visibility — one client, one family, one retailer, one season.' },
    { title: 'Live-rate pricing', text: 'Same engine as the counter. A rate move reprices every open link; a held price has a validity window.' },
    { title: 'Share with a caption', text: 'The WhatsApp caption drafts from the pieces inside; you edit, approve, send.' },
    { title: 'Tracked without a snippet', text: 'Opens, views, dwell time, requests — first-party pages, so it just works. Everything writes to her record and her intent score.' },
    { title: 'Request → quotation', text: 'A request from the link becomes a numbered quotation in one call.', link: { href: '/products/quotations', label: 'See Quotations' } },
    { title: 'Checkout & advance', text: 'Full or advance payment on the link; order, payment and stock post once.' },
  ])}`
)}

${L.impactGrid([
  { lever: 'A retailer asks for the new line', before: 'A PDF with last week’s prices.', after: 'A buyer link with their terms and today’s rate; you see what they lingered on.', link: { href: '/solutions/b2b-jewellery', label: 'See Wholesale & B2B' } },
  { lever: 'A bride’s family wants to compare', before: 'Forty photos in three chats.', after: 'One shortlist link the whole family opens; requests become one quotation.', link: { href: '/solutions/bridal', label: 'See bridal' } },
  { lever: 'Festival edit to 400 customers', before: 'A forwarded PDF; no idea who cared.', after: 'A segment gets the link; 29 opens and 7 requests are on the records by evening.', link: { href: '/products/segmentation', label: 'See Segmentation' } },
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Message us — we will send a real catalogue link and show you what it reports back.</p>`, { tone: 'tint' })}

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

const reports = {
  slug: 'products/reports',
  title: 'Reports & Dashboards — Build, Ask, Pin, Export | Jwero',
  description: 'A report builder with filters and charts over every module, an AI prompt that turns a question into a report, dashboards you pin to, the full report library, and exports — on the one record everything writes to.',
  schema: app('Jwero Reports', 'reports', 'Report builder, dashboards and AI-prompted reports over sales, inventory, customers, schemes, finance and HR for jewellery businesses.'),
  breadcrumbs: BC('Reports & Dashboards'),
  faqs: [
    { q: 'What can I report on?', a: 'Anything on the record: sales by door and branch, inventory ageing and dead stock, customers by segment and score, scheme collections and maturity, digital gold, finance and receivables, attendance and payroll, ad spend and conversions.' },
    { q: 'Do I need to know how to build reports?', a: 'No. Type the question — “which branch holds the most 180-day bangles?” — and the AI prompt drafts the report’s source, filters and chart. Adjust, save, pin.' },
    { q: 'Can I schedule a report by email?', a: 'Scheduled delivery is built and rolling out; ask us about your tenant. Exports and pinned dashboards are available today.' },
    { q: 'Who can see what?', a: 'Reports respect roles: a branch manager sees her branch; head office sees all. Finance and payroll reports stay with the roles that own them.' },
    { q: 'Will my accountant use this?', a: 'Books bridge to Tally and Zoho Books; the reports here are for running the business day to day, not for replacing the CA’s tools.' },
  ],
  body: `
${L.hero({
  eyebrow: 'REPORTS & DASHBOARDS',
  h1: 'Ask the business a question. Get a report, not a spreadsheet.',
  sub: 'Every module writes to one record, so one builder reads them all — sales, stock, customers, schemes, finance, people. Type the question or set the filters; pin the answer to a dashboard; export when the CA asks.',
  primary: { href: '#', label: 'Show me a report on my kind of business', wa: 'reports' },
  secondary: { href: '/platform', label: 'See the platform tour' },
  mock: mockReports,
})}

${L.section(
  `${L.cards([
    { title: 'Builder', text: 'Pick a source, add filter rows, choose a chart, preview live. Save it to the library.' },
    { title: 'Ask in a sentence', text: 'An AI prompt turns a plain question into source, filters and chart — you approve the draft like everything else.' },
    { title: 'Dashboards', text: 'Pin reports to dashboards per role: the owner’s morning, the branch manager’s week, the scheme desk’s dues.' },
    { title: 'The library', text: 'Every saved report and the built-ins — ageing, RFM, collections, digital gold, receivables, payroll — in one place.' },
    { title: 'Exports', text: 'CSV and PDF for the accountant, the bank or the board.' },
    { title: 'Intelligence, not just totals', text: 'Customer scores, opportunity boards and the ads engine feed the same dashboards — what to do next, beside what happened.', link: { href: '/platform/customer-memory', label: 'See how Jwero decides' } },
  ])}`
)}

${L.honestGapsBlock([
  'Scheduled email delivery of reports is built and rolling out tenant by tenant; until it reaches yours, dashboards and exports are the way.',
  'No predictive forecasting — the numbers are what happened, plus rule-based scores you can read.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Ask the WhatsApp button for a report on your business type — a real person and our AI reply within minutes.</p>`, { tone: 'tint' })}

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

const trainingLms = {
  slug: 'products/training-lms',
  title: 'Staff Training & LMS for Jewellery Teams — Courses, Assessments, Certificates | Jwero',
  description: 'Courses with ordered lessons, assessments scored securely, enrolments with progress, certificates on completion, learning paths per role, and a performance-to-learning loop that suggests the next course from what happened on the floor.',
  schema: app('Jwero Training & LMS', 'training-lms', 'Learning management for jewellery staff: courses, assessments, certificates, learning paths and performance-linked suggestions inside the HR module.'),
  breadcrumbs: BC('Training & LMS'),
  faqs: [
    { q: 'What is a course made of?', a: 'An ordered set of lessons — text, images, video links — plus optional assessments. An enrolment completes only when every lesson is done and every active assessment has a passed attempt; a certificate can issue automatically.' },
    { q: 'Are the answers safe?', a: 'Assessments are scored securely; learners never see the answer key.' },
    { q: 'Can I set a path per role?', a: 'Yes — learning paths string courses together for a role: a new sales associate, a cashier, a karigar supervisor.' },
    { q: 'Does it connect to performance?', a: 'Yes. A dip on a scorecard — hallmarking errors, low conversion on a category — suggests the matching course; a pass updates the skill on the employee profile.' },
    { q: 'Where do staff see it?', a: 'In Teams, their self-service space: My Day, attendance, leave, payslips — and their courses.' },
  ],
  body: `
${L.hero({
  eyebrow: 'TRAINING & LMS',
  h1: 'Train the counter the way you train a karigar. With a record.',
  sub: 'Courses for the things a jewellery floor gets wrong — hallmarking, exchange valuation, scheme rules, how to say the price. Assessments scored honestly, certificates that land on the profile, and the next course suggested by what actually happened on the floor.',
  primary: { href: '#', label: 'Show me a course my staff would take', wa: 'training' },
  secondary: { href: '/products/hr-payroll', label: 'See HR & Payroll' },
  mock: mockLms,
})}

${L.section(
  `${L.cards([
    { title: 'Courses & lessons', text: 'Ordered lessons per course; progress per learner; completion only when every lesson and assessment is done.' },
    { title: 'Assessments', text: 'Question banks scored securely; pass marks per course; attempts kept.' },
    { title: 'Certificates', text: 'Issued on completion, once per employee per course — visible on the profile.' },
    { title: 'Learning paths', text: 'Courses strung together per role, so day one has a syllabus.' },
    { title: 'Performance → learning', text: 'Scorecards and skills suggest the next course; a pass updates the skill.' },
    { title: 'Inside self-service', text: 'Staff take courses where they see payslips and leave — Teams, on their phone.' },
  ])}`
)}

${L.oneSystemBlock([
  'A cashier’s exchange-valuation errors on the counter show up on her scorecard; the LMS suggests the course; her pass updates the skill the roster reads.',
  'Karigar onboarding and hallmarking refreshers sit beside statutory payroll — one people record, not an HR tool plus a training tool.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every WhatsApp button on this site is the live product.</p>`, { tone: 'tint' })}

${L.ctaBand('The mistakes your floor repeats have a course.', 'Tell us the three things new staff get wrong. We will show the course, the test and the certificate on a call.', 'training')}
`,
};

module.exports = [email, marketplaces, quotations, digitalCatalogues, reports, trainingLms];
