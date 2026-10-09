const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// The CRM page, rebuilt 2026-10-07: six jobs, kinds of score (never how they are
// worked out), families and shared numbers, loyalty, consent, a repeat-customer
// calculator and an animated customer record. Only pim-app features are named.
const CRM_SCORES = [
  ['Intent', 'How ready they are to buy now.'], ['Conversion', 'How likely an enquiry is to become a sale.'], ['Engagement', 'How actively they respond to you.'],
  ['Relationship health', 'How the relationship is doing overall.'], ['Churn risk', 'Whether they are drifting away.'], ['Opportunity', 'What is possible with them next.'],
  ['Trust risk', 'Records that need care before you act.'], ['Message fatigue', 'Whether they are hearing from you too often.'], ['Confidence', 'How complete and reliable the record is.'],
  ['Next action', 'Who needs a step from your team today.'],
];
const CRM_STORY = [
  ['Walk-in', 'Meera visits for a bridal set. Phone captured at the counter.'],
  ['WhatsApp', 'Asks for 22K necklace options. Catalogue sent at today’s rate.'],
  ['Scheme', 'Joins the 11-month gold scheme. Balance on her record.'],
  ['Purchase', 'Buys earrings. Points added to her loyalty tier.'],
  ['Family', 'Her daughter’s wedding in February added to the household.'],
  ['Alert', 'Three weeks before her anniversary, a reminder goes out automatically.'],
];
const crmStory = () => `<div class="crm-story" data-crm-story>
  <div class="crm-rec" aria-hidden="true">
    <div class="crm-rec-head"><span class="crm-av">M</span><div><b>Meera Shah</b><i>Household: Shah family · 3 members · 1 shared number</i></div></div>
    <div class="crm-rec-tags">${['22K preferred', 'Bridal', 'Gold scheme', 'Gold tier', 'Hindi'].map((t, k) => `<span data-k="${k}">${t}</span>`).join('')}</div>
    <div class="crm-rec-scores">${[['Intent', 82], ['Churn risk', 12], ['Opportunity', 74]].map(([n, v]) => `<p><span>${n}</span><i style="--v:${v}%"></i></p>`).join('')}</div>
  </div>
  <ol class="crm-tl">${CRM_STORY.map(([t, d], k) => `<li data-k="${k}"><b>${t}</b><span>${d}</span></li>`).join('')}</ol>
</div>`;

const CRM_CMP = [
  ['Families and shared phone numbers', 'No', 'Custom work', 'Yes, households and shared numbers'],
  ['Gold scheme balances and maturity', 'Separate sheet', 'Custom fields', 'Yes, on the record'],
  ['Purchases at the rate they paid', 'Sometimes', 'If integrated', 'Yes, from billing'],
  ['Birthdays, anniversaries, weddings', 'A column', 'A field', 'Yes, with reminders that send themselves'],
  ['WhatsApp, Instagram and AI calls on the record', 'No', 'Add-ons', 'Yes, one record'],
  ['Loyalty points and tiers', 'No', 'Add-on', 'Yes, built in'],
  ['Duplicates found and merged', 'By hand', 'Some', 'Yes, flagged for review'],
  ['Consent per channel, data requests', 'No', 'Some', 'Yes'],
];
const crmTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Excel or a register</th><th>Generic CRM (Zoho, Salesforce)</th><th>Jwero</th></tr></thead><tbody>${CRM_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">See <a href="/compare/jwero-vs-zoho-crm">Jwero vs Zoho CRM</a> and <a href="/compare/jwero-vs-zithara">Jwero vs Zithara</a>.</p>`;

const CRM_MOVE = [
  ['Send us your list', 'Excel, CSV, phone contacts or an export from your current software.'],
  ['We clean and match it', 'Duplicates are found and merged, families and shared numbers are linked.'],
  ['History comes across', 'Purchases, notes, scheme balances and occasions land on each customer’s record.'],
  ['Consent is recorded', 'Who agreed to hear from you, on which channel, is kept with the record.'],
  ['Your team starts with today’s list', 'Each salesperson sees who to contact and why from the first morning.'],
];

const crmFaqs = [
  { q: 'Can Jwero find new leads for me?', a: 'Yes. The AI lead finder searches for companies and people to approach, such as corporate gifting buyers or retailers for a wholesaler, at ₹1 a search, and adds them to the CRM.' },
  { q: 'What is a jewellery CRM?', a: 'A jewellery CRM is customer software built for how jewellery is bought: it keeps families, scheme balances, purchases, occasions like weddings and anniversaries, and every WhatsApp message and call on one customer record, and tells your team who to contact and why.' },
  { q: 'What is the best CRM for jewellers?', a: 'Look for a CRM that knows families and shared phone numbers, gold scheme balances, purchases from billing, occasions, loyalty, and WhatsApp and calls on the same record, with consent kept per channel. Generic CRMs need years of custom work to get close.' },
  { q: 'How do jewellers increase repeat customers?', a: 'Remember every customer and family, reach them before their occasions, keep scheme members engaged to maturity, reward them through a loyalty tier, and call or message the ones drifting away before they buy elsewhere.' },
  { q: 'How does a jewellery loyalty programme work in Jwero?', a: 'Customers earn points on purchases, move up tiers, redeem points on later purchases, get anniversary rewards and referral benefits. Points can expire after the period you set, and everything sits on the same customer record.' },
  { q: 'Can several family members share one phone number?', a: 'Yes. Jwero links a household and lets one phone number belong to several family members, so the mother, the bride and the father who pays are each recognised correctly.' },
  { q: 'Do I need customer consent under India’s data protection law?', a: 'You should record consent before marketing to customers, and honour requests to see or delete their data. Jwero keeps consent per channel and handles these requests. Confirm your obligations with your advisor.' },
  { q: 'What kinds of scores does Jwero give each customer?', a: 'Each customer carries scores for intent, conversion, engagement, relationship health, churn risk, opportunity, trust risk, message fatigue, record confidence and the next action due, so your team knows who to contact and why.' },
  { q: 'Can I import my existing customer list?', a: 'Yes, from Excel, CSV, phone contacts or another software. We clean it, merge duplicates and link families during onboarding, and your history comes across.' },
  { q: 'How is Jwero different from Zoho or Salesforce?', a: 'Generic CRMs know names, notes and deals. Jwero’s customer record already knows schemes, purchases at the rate paid, families, occasions, loyalty, and every WhatsApp message and call, because billing, chat and calling share one system.' },
  { q: 'Can I send a quote a customer accepts online?', a: 'Yes. A quote is sent as a link with line items and a PDF, and the customer accepts or declines it themselves.' },
];

const crm = {
  slug: 'products/crm',
  title: 'Jewellery CRM Software: CRM for Jewellers | Jwero',
  description: 'Jewellery CRM software for jewellers: families, scheme balances, occasions, loyalty, WhatsApp and AI calls on one customer record, with scores that tell your team who to contact.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery CRM', alternateName: ['CRM for jewellers', 'Jewellery customer management software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A jewellery CRM with households and shared numbers, gold scheme balances, purchases, occasions, loyalty tiers, segments and journeys, and WhatsApp and AI calls on one customer record, with consent per channel.',
    url: 'https://jwero.ai/products/crm', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{
    '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move your customer list into a jewellery CRM',
    step: CRM_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })),
  }],
  breadcrumbs: BC('Jewellery CRM'),
  faqs: crmFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY CRM · CRM FOR JEWELLERS',
  h1: 'Jewellery CRM that remembers what she bought, what she’s saving for, and when her daughter’s wedding is.',
  sub: 'One record per customer and family, kept by your business, not a salesperson’s phone: purchases, scheme balances, occasions, loyalty, and every WhatsApp message and AI call, with scores that tell your team who to contact today.',
  primary: { href: '#', label: 'Send me a sample customer record', wa: 'crm' },
  mock: L.mockMemory,
})}

${L.section(`${L.sectionHead('ONE CUSTOMER, A YEAR ON ONE RECORD', 'Watch a customer record fill itself in.', '')}${crmStory()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE RECORD', 'What a jewellery CRM has to do.', '')}<div class="wa-jobs">
  <article><h3>1. One record per customer and family</h3><p>Households link the bride, her mother and the father who pays. One phone number can belong to several family members. Duplicates entered by different salespeople are found and merged.</p><a href="/platform/customer-memory">Customer memory →</a></article>
  <article><h3>2. Occasions that remind you</h3><p>Birthdays, anniversaries and family weddings, with a message or call sent automatically before each date.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>3. Schemes and purchases remembered</h3><p>Scheme balances and maturity dates, what they bought and at what rate, what they asked about on WhatsApp.</p><a href="/products/gold-schemes">Gold schemes →</a></article>
  <article><h3>4. Segments and who to call this week</h3><p>Group customers by purchases, occasions, schemes or city, and see who is about to stop coming. Each morning, every salesperson gets their list.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>5. Loyalty that brings them back</h3><p>Points on every purchase, tiers, redemption, anniversary rewards and referral benefits, with points expiring after the period you set.</p><a href="/products/loyalty">Loyalty →</a></article>
  <article><h3>6. Leads, quotes, WhatsApp and calls</h3><p>Walk-ins, WhatsApp and Instagram enquiries routed to the right salesperson, quotes accepted online, and every chat and AI call written to the record.</p><a href="/products/whatsapp">WhatsApp API for jewellers →</a> · <a href="/ai-calling-for-jewellers">AI calling →</a></article>
</div>`)}

${L.section(`${L.sectionHead('KINDS OF SCORE', 'Eleven scores on every customer, in plain words.', 'What each one tells your team about a customer.')}<div class="crm-scores">${CRM_SCORES.map(([n, d]) => `<p><b>${n}</b><span>${d}</span></p>`).join('')}<p class="crm-scores-more"><b>And more</b><span>Each score updates as customers buy, message and visit.</span></p></div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What keeping more customers is worth.', 'Your numbers, not ours.')}<div class="callc" data-repeatc>
  <div class="callc-in">
    <label>Customers who bought in the last two years<input type="number" inputmode="numeric" data-rc="cust" value="3000" min="0"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-rc="bill" value="45000" min="0" step="1000"></label>
    <label>Purchases a year per returning customer<input type="number" inputmode="decimal" data-rc="freq" value="1" min="0" step="0.1"></label>
    <label>Customers who come back today, %<input type="number" inputmode="decimal" data-rc="back" value="30" min="0" max="100"></label>
    <label>Extra customers kept, % points<input type="number" inputmode="decimal" data-rc="lift" value="5" min="0" max="50"></label>
    <label>Your margin on a sale, %<input type="number" inputmode="decimal" data-rc="margin" value="12" min="0" max="100"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Returning customers today</span><b data-rc-o="now">0</b></p>
    <p><span>Returning with a 5-point lift</span><b data-rc-o="then">0</b></p>
    <p><span>Extra sales a year</span><b data-rc-o="sales">₹0</b></p>
    <p class="callc-save"><span>Extra margin a year</span><b data-rc-o="margin">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs, not a promise of results.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('COMPARE', 'Excel, a generic CRM, or a jewellery CRM.', '')}${crmTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('MOVING FROM EXCEL OR ANOTHER CRM', 'How to move your customer list into a jewellery CRM.', 'Five steps. We do them with you during onboarding.')}${L.steps(CRM_MOVE.map(([title, text]) => ({ title, text })))}`)}

${L.section(`${L.sectionHead('PRIVACY AND CONSENT', 'Your customers’ trust, kept.', '')}<div class="jb-blogline"><p><b>Consent per channel:</b> who agreed to hear from you on WhatsApp, SMS, email or calls, kept with the record. Messages and calls respect it automatically.</p><p><b>Customer requests:</b> when a customer asks to see or delete their data, the request is handled and recorded.</p><p><b>Your data:</b> your own database, never shared with another jeweller, exportable any time. <a href="/trust/security">Security →</a></p></div>`, { tone: 'tint' })}

${L.oneSystemBlock([
  'The WhatsApp reply knows her scheme balance because the chat and the scheme share one record.',
  'When she buys at the counter, her purchase, points and tier update on the same record her next AI call will read.',
  'Her daughter’s wedding, added once, drives the reminder, the invitation and the bridal catalogue next year.',
])}

${L.ctaBand('Own your customer list. Finally.', 'We import your customers for you, from any software, any spreadsheet, any phone.', 'crm')}
`,
};

// The catalogue (PIM) page, rebuilt 2026-10-07: the hub for the PIM articles.
// Confirmed by Jwero: syncs to Google Shopping, Meta catalogues, POS, ecommerce,
// mobile apps and marketplaces are automatic. No RFID, no readiness score, no try-on.
const P2P = [
  ['photo', 'Photo added', 'necklace_0148.jpg'],
  ['type', 'Type', 'Necklace · temple work'],
  ['metal', 'Metal and purity', '22K gold (916)'],
  ['weight', 'Weights', 'Gross 21.4 g · net 20.8 g'],
  ['stones', 'Stones', 'Rubies, 12 · 1.2 ct'],
  ['desc', 'Description', 'A temple-work necklace in 22K gold with ruby accents, made for weddings and festivals.'],
  ['price', 'Price at today’s rate', '₹1,64,250'],
  ['live', 'Published', 'Website · WhatsApp · Google Shopping · Meta · POS'],
];
const photoToProduct = () => `<div class="p2p" data-p2p>
  <div class="p2p-card" aria-hidden="true"><div class="p2p-img"><span>📷</span></div>
    ${P2P.slice(1).map(([k, l, v]) => `<p class="p2p-f pf-${k}"><span>${l}</span><b>${v}</b></p>`).join('')}</div>
  <ol class="wa-steps">${['Add a photo', 'AI reads the type', 'Metal and purity', 'Weights from your record', 'Stones listed', 'Description written', 'Priced at today’s rate', 'Published everywhere'].map((t) => `<li><b>${t}</b></li>`).join('')}</ol>
</div>`;
const CAT_CMP = [
  ['One record per piece with purity, weights, stones, HUID', 'Folders and PDFs', 'Generic fields', 'Yes, built for jewellery'],
  ['Price at today’s rate on every channel', 'Retype every day', 'Fixed price', 'Automatic, everywhere'],
  ['Listing from a photo', 'No', 'No', 'Yes, AI fills the details and writes the description'],
  ['One-of-a-kind pieces', 'A note', 'Awkward', 'Yes, custom fields per piece'],
  ['WhatsApp catalogue', 'Uploaded piece by piece', 'Separate app', 'Filled by the Meta sync, priced at today’s rate'],
  ['Google Shopping, Meta catalogues, marketplaces', 'Manual uploads', 'Apps per channel', 'Automatic sync'],
  ['Bulk import', 'Retyped', 'CSV only', 'Excel, APIs, webhooks, Shopify and WooCommerce'],
  ['POS, website and mobile app in step', 'No', 'If integrated', 'Yes, one catalogue'],
  ['Private catalogues, who viewed them, enquiry to quote', 'No', 'No', 'Yes'],
  ['Stock sells in one place, disappears everywhere', 'No', 'Partly', 'Yes'],
];
const catTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Photo folders and PDFs</th><th>Generic product tool or Shopify admin</th><th>Jwero</th></tr></thead><tbody>${CAT_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">See <a href="/compare/jwero-vs-shopify">Jwero vs Shopify</a> and <a href="/compare/jwero-vs-quicksell">Jwero vs QuickSell</a>.</p>`;
const CAT_MOVE = [
  ['Send us what you have', 'Excel sheets, your Shopify or WooCommerce store, a software export, or just folders of photos.'],
  ['Import in bulk', 'Thousands of pieces at once from Excel, Shopify or WooCommerce, or kept in step through APIs and webhooks.'],
  ['Let AI fill the gaps', 'Missing types, details and descriptions completed from the photos, for your team to check.'],
  ['Set your price rules', 'Rate source, purities, making and stone prices, so every piece prices itself.'],
  ['Switch on your channels', 'Website, WhatsApp, POS, your mobile app, Google Shopping, Meta and marketplaces, all synced automatically.'],
];
const PIM_READS = [
  ['/what-is-jewellery-pim-complete-guide-for-jewellers', 'Jewellery PIM: the complete guide'], ['/image-to-product-data-jewellery-ai', 'Product data from images with AI'],
  ['/ai-jewellery-product-descriptions-tags-captions', 'AI product descriptions'], ['/jewellery-pim-vs-erp', 'PIM vs ERP'],
  ['/jewellery-catalogue-sharing-on-whatsapp', 'Catalogue sharing on WhatsApp'], ['/jewellery-product-page-seo', 'Product page SEO'],
];
const catFaqs = [
  { q: 'What is jewellery PIM?', a: 'Jewellery PIM (product information management) is one master record for every piece, with metal, purity, weights, stones, certificates, photos and descriptions, that feeds every place you sell, from the counter to the website, WhatsApp, Google Shopping and marketplaces.' },
  { q: 'What is jewellery catalogue software?', a: 'Software that keeps your jewellery catalogue in one place, prices every piece from today’s gold rate, and publishes it to your website, WhatsApp, POS, mobile app and marketplaces, so the same piece shows the same price everywhere.' },
  { q: 'How do I create product listings from photos?', a: 'Add the photo. Jwero’s AI reads the type of piece and writes the description, and the weights, purity and stones come from your stock record. Your team checks and publishes.' },
  { q: 'How do I sync jewellery prices to Shopify, Google Shopping and Meta?', a: 'Jwero recalculates each price from today’s rate and syncs automatically to your website, Shopify or WooCommerce, Google Shopping, Meta catalogues, POS, mobile apps and marketplaces whenever the rate or the product changes.' },
  { q: 'Can it handle one-of-a-kind pieces?', a: 'Yes. Custom fields record provenance, unique certificates and the story of each piece, where a standard template does not fit.' },
  { q: 'Can the catalogue handle certificates and hallmarking details?', a: 'Yes. Purity, stone details, certificate numbers and HUID are structured fields you can search and filter, not free text.' },
  { q: 'Can I share a catalogue without showing all my stock?', a: 'Yes. Share chosen pieces as a private live link, decide whether prices show, and see who viewed what. Enquiries turn into quotes, and customers can pay inside the catalogue.' },
  { q: 'I have thousands of products. Will setup take forever?', a: 'No. We import in bulk from Excel, Shopify, WooCommerce, a software export or photo folders, and AI fills missing details for your team to check.' },
  { q: 'Does my catalogue show inside WhatsApp?', a: 'Yes. The Meta sync fills your WhatsApp Business catalogue, so customers browse pieces inside the chat, priced at today’s rate and removed when sold.' },
  { q: 'Can the catalogue connect to my other software?', a: 'Yes. Bulk import from Excel, Shopify and WooCommerce, and APIs and webhooks to keep other systems in step.' },
  { q: 'What is catalogue management software for jewellers?', a: 'Catalog management software (also spelt catalogue) keeps every piece in one record and publishes it to every channel. For jewellers it also prices from the gold rate and stores purity, stones, certificates and HUID. Jwero does this as its catalogue and PIM module.' },
  { q: 'Can AI create jewellery product photos?', a: 'Jwero can generate or edit a product image from a product photo, charged per image from the wallet. It does not create virtual try-on images.' },
];

const catalog = {
  slug: 'products/catalog',
  title: 'Jewellery Catalogue & PIM Software: Live Prices, AI Listings | Jwero',
  description: 'Jewellery catalogue management software and PIM: one record per piece, priced at today’s gold rate, AI listings from photos, bulk import from Excel, Shopify or WooCommerce, and automatic sync to your WhatsApp catalogue, Google Shopping, Meta, POS, ecommerce and marketplaces.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Catalogue & PIM', alternateName: ['Jewellery PIM software', 'Jewellery catalogue management software', 'Jewellery catalog management software', 'WhatsApp catalogue for jewellers', 'Online jewellery catalogue', 'Jewellery product management software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery product information management: one record per piece with metal, purity, weights, stones, certificates and HUID, live-rate pricing, AI listings from photos, design bank, private shareable catalogues, and automatic sync to Google Shopping, Meta catalogues, POS, ecommerce, mobile apps and marketplaces.',
    url: 'https://jwero.ai/products/catalog', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{
    '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to build a jewellery catalogue from photos',
    step: CAT_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })),
  }],
  breadcrumbs: BC('Catalogue and PIM'),
  faqs: catFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY CATALOGUE · JEWELLERY PIM',
  h1: 'Jewellery catalogue software: every piece described once, priced at today’s rate, everywhere.',
  sub: 'One record per piece with its purity, weights, stones and certificates. AI turns a photo into a listing, every price follows today’s gold rate, and the catalogue syncs automatically to your website, WhatsApp, POS, mobile app, Google Shopping, Meta and marketplaces.',
  primary: { href: '#', label: 'Send me a live-priced catalogue', wa: 'catalog' },
})}

${L.section(`${L.sectionHead('FROM A PHOTO TO EVERY CHANNEL', 'Watch a photo become a product.', '')}${photoToProduct()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE CATALOGUE', 'What jewellery catalogue software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Every piece described once</h3><p>Metal, purity, gross and net weight, stones, certificates, HUID, sizes and variants, and custom fields for one-of-a-kind pieces.</p><a href="/what-is-jewellery-pim-complete-guide-for-jewellers">Jewellery PIM, explained →</a></article>
  <article><h3>2. Priced at today’s rate, everywhere</h3><p>Each price is worked out from the rate, purity, weight, making and stones, and updates on every channel when the rate moves.</p><a href="/blog/how-to-calculate-gold-jewellery-price">How the price is worked out →</a></article>
  <article><h3>3. AI does the listing work</h3><p>From a photo, AI reads the type of piece and writes the description and captions; your stock record supplies the weights and stones. AI can also generate or edit product images.</p><a href="/image-to-product-data-jewellery-ai">Listings from photos →</a></article>
  <article><h3>4. Photos and designs in one library</h3><p>A photo and video library and a design bank, linked to every product and reused on every channel.</p><a href="/jewellery-digital-asset-management-pim">Photo library →</a></article>
  <article><h3>5. Share without giving away your stock</h3><p>Private catalogues as live links, prices shown or hidden, who viewed what, enquiries turned into quotes, and payment inside the catalogue.</p><a href="/products/digital-catalogues">Digital catalogues →</a></article>
  <article><h3>6. Synced to every channel, automatically</h3><p>Your website, Shopify or WooCommerce, POS, mobile app, your WhatsApp catalogue, Google Shopping, Meta catalogues and marketplaces. Sell a piece in one place and it disappears everywhere.</p><a href="/blog/selling-gold-jewellery-online-live-rate">Selling online at the live rate →</a></article>
</div>`)}

${L.section(`${L.sectionHead('TIME TO LIST', 'What listing by hand costs you.', 'Your numbers, not ours.')}<div class="callc" data-listc>
  <div class="callc-in">
    <label>Pieces to list<input type="number" inputmode="numeric" data-lc="pieces" value="2000" min="0"></label>
    <label>Minutes per piece by hand<input type="number" inputmode="decimal" data-lc="mins" value="12" min="0"></label>
    <label>Minutes per piece to check an AI listing<input type="number" inputmode="decimal" data-lc="check" value="2" min="0" step="0.5"></label>
    <label>Monthly salary of the person listing, ₹<input type="number" inputmode="numeric" data-lc="salary" value="20000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Hours by hand</span><b data-lc-o="hand">0</b></p>
    <p><span>Hours with AI from photos</span><b data-lc-o="ai">0</b></p>
    <p class="callc-save"><span>Hours saved</span><b data-lc-o="saved">0</b></p>
    <p><span>Staff time saved</span><b data-lc-o="money">₹0</b></p>
    <p class="cta-note">By hand means editing the photo, typing details, writing a description and pricing. Staff cost is worked out on 26 days of 9 hours. AI listing is charged per product from the wallet; see the <a href="/pricing" style="color:#fff">pricing page</a>.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Photo folders, a generic tool, or a jewellery catalogue.', '')}${catTable()}`)}

${L.section(`${L.sectionHead('MOVING THOUSANDS OF PIECES IN', 'How to build a jewellery catalogue from photos.', 'Five steps, done with you.')}${L.steps(CAT_MOVE.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('JEWELLERY PIM, EXPLAINED', 'Read more about product information for jewellers.', '')}<div class="erp-map">${PIM_READS.map(([h, t]) => `<a href="${h}"><b>${t}</b><span>Guide</span></a>`).join('')}</div>`)}

${L.oneSystemBlock([
  'The price a customer sees on WhatsApp, the website and the counter comes from the same record and the same rate.',
  'Sell a piece at the counter and it disappears from the website, your WhatsApp catalogue, Google Shopping and marketplaces at once.',
  'The catalogue is the source; your <a href="/products/ecommerce">ecommerce website</a>, WhatsApp, Google and marketplaces all sell from it.',
  'A slow piece in inventory can be pushed to the customers whose taste fits it, straight from the catalogue.',
])}

${L.ctaBand('Retire the PDF catalogue.', 'Send us twenty photos. We will show them as live-priced listings on every channel.', 'catalog')}
`,
};

// The inventory page, rebuilt 2026-10-07. RFID, posting count variances, scale
// integration and where slow stock is auto-listed are not claimed until confirmed.
const PIECE_STEPS = [
  ['Tagged', 'Barcode label printed · 22K · gross 21.4 g · net 20.8 g · fine 19.05 g', 'Receiving'],
  ['Hallmarked', 'Back from the centre · HUID AB12C3 recorded', 'Hallmark batch'],
  ['On the floor', 'Valued at today’s rate', 'Showcase 4'],
  ['On approval', 'Memo to Mehta Jewellers, due back Friday', 'Out on memo'],
  ['Back', 'Returned against the memo, scanned in', 'Vault'],
  ['Transferred', 'Sent to the Andheri branch on a challan', 'Branch 2'],
  ['120 days old', 'Flagged as slowing down', 'Branch 2'],
  ['Marked down', 'Making reduced, offered to matching customers', 'Branch 2'],
  ['Sold', 'Billed at the counter, gone from every channel', 'Sold'],
];
const pieceStory = () => `<div class="piece-story" data-piece-story>
  <div class="piece-card" aria-hidden="true"><p class="pc-tag">TAG 22K-0148</p><b>Temple bangle</b><p class="pc-loc"><span>Where</span><i data-pc-where>Receiving</i></p><p class="pc-st"><span>Status</span><i data-pc-status>Tagged</i></p><div class="pc-age"><i></i></div></div>
  <ol class="wa-steps">${PIECE_STEPS.map(([t, d, w]) => `<li data-where="${w}"><b>${t}</b><span>${d}</span></li>`).join('')}</ol>
</div>`;
const heatmap = () => {
  const cats = ['Bangles', 'Necklaces', 'Earrings', 'Rings', 'Chains'], bands = ['0–30 days', '31–90', '91–180', '180+'];
  const v = [[9, 6, 3, 2], [7, 5, 4, 6], [8, 4, 2, 1], [6, 5, 5, 4], [9, 3, 1, 1]];
  return `<div class="age-map"><p class="in-short-tag">Stock value by age, illustrated</p><div class="age-grid"><span></span>${bands.map((b) => `<b>${b}</b>`).join('')}${cats.map((c, r) => `<b>${c}</b>${v[r].map((x, k) => `<i class="${k >= 2 && x >= 4 ? 'is-hot' : ''}" style="--a:${0.1 + x / 11}">${x}</i>`).join('')}`).join('')}</div><p class="cta-note">Illustrative. Cells in amber are value sitting longer than 90 days.</p></div>`;
};
const INV_CMP = [
  ['Every piece with its own tag and record', 'A row, maybe', 'SKU counts', 'Yes, gross, net and fine weight, stones, HUID'],
  ['Worth at today’s gold rate', 'Recalculate by hand', 'Fixed cost', 'Automatic, by branch, category and purity'],
  ['Ageing and slow stock', 'Rarely', 'Basic', 'Ageing bands, markdowns, slow stock flagged'],
  ['Approval memos, consignments, exhibitions', 'Separate notebook', 'No', 'Yes, out and back against each document'],
  ['Repairs and customers’ pieces you hold', 'A register', 'No', 'Yes, with who held it and when'],
  ['Hallmarking batches and HUID', 'Separate sheet', 'No', 'Yes, duplicates refused'],
  ['Counts without closing the shop', 'Weekend stocktake', 'Full counts', 'Scheduled cycle counts by scanning'],
  ['Same stock as the counter and online', 'No', 'If integrated', 'Yes, one stock everywhere'],
];
const invTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Excel or a register</th><th>Generic inventory software</th><th>Jwero</th></tr></thead><tbody>${INV_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const INV_MOVE = [
  ['Send us what you have', 'Stock lists from your current software or Excel, branch by branch, however inconsistent.'],
  ['We match and reconcile', 'Pieces are matched to the old records and differences listed, so you start from a known position.'],
  ['Tag what has no tag', 'Barcode labels printed from the record for any piece without one.'],
  ['First count by scanning', 'A cycle count, showcase by showcase, without closing the shop.'],
  ['Go live', 'From the next bill, stock moves with every sale, transfer, memo and return.'],
];
const invFaqs = [
  { q: 'What is jewellery inventory software?', a: 'Jewellery inventory software keeps a record for every piece, with its tag, gross, net and fine weight, stones and HUID, values stock at today’s gold rate, shows what is ageing, and tracks every piece out on memo, at exhibitions, with karigars or in for repair.' },
  { q: 'How do jewellers manage stock?', a: 'Tag every piece, value stock at today’s rate by purity, review ageing every month, count a few showcases every week by scanning, and record every piece that leaves the shop on a memo, challan or job card so it comes back or gets billed.' },
  { q: 'What is fine weight in jewellery stock?', a: 'Fine weight is the pure gold in a piece: gross weight minus stones, times purity. It lets stock of different purities be added up and compared, and it does not change with the gold rate.' },
  { q: 'How often should a jewellery shop count stock?', a: 'Count a part of the stock every week or month by scanning, so the whole shop is covered over a cycle, instead of closing for a once-a-year stocktake.' },
  { q: 'What is dead stock in jewellery?', a: 'Pieces that have not sold for a long time, often 180 days or more. They tie up capital and lose appeal. Jwero shows them by ageing band and lets you mark them down or offer them to matching customers.' },
  { q: 'Can Jwero tell me my dead stock?', a: 'Yes. Ageing bands from 0–30 to 180+ days and slow-mover views show which pieces are sitting, for how long, and what they are worth at today’s rate.' },
  { q: 'Does it work across branches?', a: 'Yes. Stock, transfers and valuation are by branch, with the whole picture for the owner.' },
  { q: 'Our stock records are inconsistent. Can we still start?', a: 'Yes. We import what exists per branch and reconcile against your old records during onboarding. Inconsistent starting data is normal.' },
  { q: 'Can I manage jewellery stock in Excel?', a: 'For a few hundred pieces, maybe. Excel cannot value stock at today’s rate automatically, track pieces on memo or at karigars, or stop a piece being sold twice across the counter and online.' },
  { q: 'Can it forecast demand?', a: 'Not as a forecast. Jwero gives valuation, ageing and slow-mover views to guide buying.' },
];

const inventory = {
  slug: 'products/inventory',
  title: 'Jewellery Inventory Software: Stock, Barcode & Valuation | Jwero',
  description: 'Jewellery inventory software: every piece tagged with weights, stones and HUID, stock valued at today’s rate, ageing and dead stock, cycle counts, memos, consignments and branch transfers.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Inventory Software', alternateName: ['Jewellery stock management software', 'Jewellery inventory management'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Piece-level jewellery inventory with barcode labels, gross, net and fine weight, stones and HUID, live-rate valuation, ageing and markdowns, cycle counts, memos, consignments, exhibitions, trials, repairs custody, hallmarking batches and branch transfers.',
    url: 'https://jwero.ai/products/inventory', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{
    '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move your jewellery stock into Jwero',
    step: INV_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })),
  }],
  breadcrumbs: BC('Jewellery inventory'),
  faqs: invFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY INVENTORY SOFTWARE',
  h1: 'Jewellery inventory software: know what your stock is worth today, and which pieces stopped moving.',
  sub: 'Every piece tagged with its weights, stones and HUID, valued at today’s rate, and followed everywhere it goes: showcase, vault, memo, exhibition, karigar, repair, another branch. Plus the number most owners have never seen: how much capital is sitting in pieces that stopped moving.',
  primary: { href: '#', label: 'Show me my dead stock number', wa: 'inventory' },
})}

${L.section(`${L.sectionHead('ONE PIECE, ITS WHOLE LIFE', 'Follow a bangle from receiving to sold.', '')}${pieceStory()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE STOCK', 'What jewellery inventory software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Every piece known</h3><p>A unique tag and barcode label, gross, net and fine weight, metal and stone breakdown, HUID, design and photo, on one record.</p><a href="/jewellery-barcode-tagging-software">Jewellery barcode software →</a></article>
  <article><h3>2. Worth at today’s rate</h3><p>Stock valued from today’s rate by branch, category and purity, in rupees and fine grams, the same way the counter prices it.</p><a href="/blog/fine-weight-metal-ledger-jewellers">Fine weight →</a></article>
  <article><h3>3. What is slowing down</h3><p>Ageing bands from 0–30 to 180+ days, slow-mover views, markdowns, and slow pieces matched to customers whose taste fits.</p><a href="/blog/dead-stock-jewellery-business-guide">Dead stock →</a></article>
  <article><h3>4. Counts without closing the shop</h3><p>Scheduled cycle counts, showcase by showcase, by scanning. Every mismatch becomes a discrepancy to investigate.</p><a href="/guides/jewellery-inventory-software">Inventory guide →</a></article>
  <article><h3>5. Every way a piece leaves and returns</h3><p>Branch transfers on challans, vaults, approval memos, consignments with settlement, exhibitions, trials, karigar job work and customers’ repairs in your custody.</p><a href="/blog/approval-memo-stock-jewellery-wholesale">Memo stock →</a></article>
  <article><h3>6. Hallmarking under control</h3><p>A hallmarking queue, batches out and back, and a HUID register that refuses duplicates, checked again at the counter.</p><a href="/blog/huid-hallmarking-rules-jewellers">HUID rules →</a></article>
</div>`)}

${L.section(`${L.sectionHead('WHAT IS SITTING', 'Where your capital is resting.', '')}${heatmap()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('RUN YOUR OWN NUMBER', 'What your dead stock costs you every month.', 'Move the sliders to your shop.')}${require('./tools').deadStockCalcHtml}`)}

${L.section(`${L.sectionHead('COMPARE', 'Excel, generic inventory software, or Jwero.', '')}${invTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('STARTING FROM MESSY RECORDS', 'How to move your jewellery stock into Jwero.', 'Five steps, done with you. Inconsistent records are a normal starting point.')}${L.steps(INV_MOVE.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'A slow piece here can be matched to a customer whose taste fits it, straight from the CRM.',
  'The valuation shown is the same live-rate pricing the catalogue and the counter use.',
  'Sell a piece at the counter and it disappears from the online store and WhatsApp catalogue at once.',
])}

${L.ctaBand('Find the sleeping capital.', 'Bring last year’s stock summary to a demo. We will show you what is sitting, and what it is worth today.', 'inventory')}
`,
};

// Billing & finance, rebuilt 2026-10-07. E-invoices through the Tally bridge
// (confirmed on the ERP page). Not claimed (unconfirmed): e-way bills, UPI or
// card collection links for dues, partial payments, TCS or PAN capture, bank
// reconciliation, P&L or balance sheet, Zoho Books.
const BF_FLOW = [
  ['Billed', 'Bangle at today’s rate · metal, making, stones and GST'],
  ['Owed', '₹40,000 still due on her account'],
  ['Reminder', 'Day 7 · a payment reminder goes out on its own'],
  ['Paid', 'The balance comes in · receivables cleared'],
  ['Ledger', 'Sale and payment posted to the double-entry ledger'],
  ['Tally', 'Synced to Tally through the bridge · e-invoice there'],
  ['Month end', 'GSTR-1, GSTR-3B and HSN reports ready for your CA'],
];
const bfFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">BILLING · SALE TO BOOKS</p>${BF_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${BF_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const BF_CMP = [
  ['Invoice price', 'Rate typed in', 'Fixed item price', 'Today’s rate, with metal, making, stones and GST'],
  ['Who owes what', 'A register', 'A report someone runs', 'Receivables by customer, since when'],
  ['Chasing payments', 'Phone calls, when remembered', 'No', 'Reminders sent on their own'],
  ['Books', 'Re-entered into Tally', 'Export and import', 'Synced to Tally through the bridge'],
  ['E-invoices', 'In Tally, typed again', 'Varies', 'Generated in Tally from synced entries'],
  ['GST reports', 'Built by your CA', 'Basic', 'GSTR-1, GSTR-3B, HSN, TDS, party ledgers'],
  ['Discounts and overrides', 'Anyone can', 'Anyone can', 'Routed through approvals'],
];
const bfTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>A register plus Tally</th><th>Generic billing software</th><th>Jwero</th></tr></thead><tbody>${BF_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const BF_HOW = [
  ['Bring in your opening balances', 'Customers, what they owe, and your ledgers.'],
  ['Connect Tally', 'Set up the bridge with your CA; ledgers map once.'],
  ['Bill at the counter or online', 'Every invoice prices at today’s rate with GST.'],
  ['Switch on reminders', 'Choose when dues are chased and what the message says.'],
  ['Close the month', 'Entries are already in Tally; GST reports are ready for your CA.'],
];
const bfFaqs = [
  { q: 'What is jewellery billing and accounting software?', a: 'Software that bills each piece at today’s gold rate with GST, keeps the books, and tracks who owes what. Jwero does all three and keeps Tally in step through a bridge.' },
  { q: 'Do my books move to Jwero, or stay in Tally?', a: 'Your choice. Every sale, return, payment and expense posts to Jwero’s double-entry ledger, and the Tally bridge syncs it across so your CA keeps working in Tally.' },
  { q: 'What does the Tally bridge do?', a: 'It syncs sales, returns, payments and expenses from Jwero to Tally, so nothing is typed twice. E-invoices are generated in Tally from the synced entries.' },
  { q: 'Do you work with Zoho Books?', a: 'Yes. A Zoho Books bridge carries entries across the same way, if your accountant uses Zoho Books instead of Tally.' },
  { q: 'Can it price invoices at today’s gold rate automatically?', a: 'Yes. Invoices use the same pricing as the catalogue: metal at today’s rate, purity, making charges, stones and GST.' },
  { q: 'Is GST computed correctly?', a: 'CGST, SGST and IGST are worked out on every invoice, with GSTR-1, GSTR-3B, HSN and TDS reports and party ledgers. Filing itself stays with your CA.' },
  { q: 'Does it chase payments for me?', a: 'Yes. Reminders go out on outstanding dues on the schedule you set.' },
  { q: 'Is this the same as the POS?', a: 'The POS is the counter: the sale, old gold, returns and day close. This is what happens after: invoices, receivables and the books.' },
];
const billingFinance = {
  slug: 'products/billing-finance',
  title: 'Jewellery Billing & Accounting Software: GST, Receivables, Tally | Jwero',
  description: 'Jewellery billing and accounting software: GST invoices at today’s gold rate, a double-entry ledger, receivables with automatic payment reminders, GST reports, and a Tally bridge that syncs every entry so nothing is typed twice.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Billing & Finance', alternateName: ['Jewellery accounting software', 'Jewellery billing software with Tally', 'Jewellery GST billing software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'GST invoicing at the live gold rate, a double-entry ledger, receivables with automatic payment reminders, GSTR-1, GSTR-3B, HSN and TDS reports, approval-gated overrides, and a Tally bridge that syncs sales, returns, payments and expenses, with e-invoices generated in Tally.',
    url: 'https://jwero.ai/products/billing-finance', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move jewellery billing and books to Jwero and keep Tally', step: BF_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Billing & Finance'),
  faqs: bfFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY BILLING · ACCOUNTING · TALLY',
  h1: 'Jewellery billing and accounting software: GST invoices at today’s rate, payments chased, books in step with Tally.',
  sub: 'Every invoice prices itself from the gold rate with GST. Dues are tracked and chased on their own. Every entry posts to the ledger and syncs to Tally, so your CA keeps working the way they do and nothing is typed twice.',
  primary: { href: '#', label: 'Send me a live-rate GST invoice', wa: 'billing' },
  secondary: { href: '/products/pos', label: 'See the counter POS' },
})}

${L.section(`${L.sectionHead('ONE SALE, START TO FINISH', 'From the invoice to the books, with no one retyping it.', '')}${bfFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE SET OF BOOKS', 'What jewellery billing and accounting software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. GST invoices at today’s rate</h3><p>Metal, purity, making charges, stones and CGST, SGST or IGST worked out together.</p><a href="/platform/pricing-engine">Pricing engine →</a></article>
  <article><h3>2. A real ledger</h3><p>Sales, returns, payments and expenses posted to a double-entry ledger, with party ledgers.</p><a href="/products/erp">ERP →</a></article>
  <article><h3>3. Who owes what</h3><p>Receivables by customer and age, in one view instead of a register.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>4. Payments chased for you</h3><p>Reminders on outstanding dues, sent on the schedule you set.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>5. Tally in step</h3><p>Every entry synced through the Tally bridge; e-invoices generated in Tally.</p><a href="/blog/jewellery-software-and-tally">Jewellery software and Tally →</a></article>
  <article><h3>6. Reports and control</h3><p>GSTR-1, GSTR-3B, HSN and TDS reports; discounts and overrides routed through approvals.</p><a href="/products/reports">Reports →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE TALLY BRIDGE', 'Keep Tally. Stop typing into it.', 'Your CA keeps the books they know. Jwero sends them everything, already entered.')}${L.cards([
  { title: 'Nothing typed twice', text: 'Sales, returns, payments and expenses sync from Jwero to Tally, so no one re-enters a bill.' },
  { title: 'Your CA changes nothing', text: 'Ledgers map once; your accountant keeps working in Tally the way they always have.' },
  { title: 'E-invoices from Tally', text: 'E-invoices are generated in Tally from the entries Jwero has already synced.' },
  { title: 'Books that match the counter', text: 'The figure in Tally is the figure on the invoice, so there is nothing to reconcile by hand.' },
  { title: 'A faster month end', text: 'Entries are already in Tally when the month closes, with GST reports ready.' },
  { title: 'One truth across branches', text: 'Every branch bills in Jwero; the books in Tally show the whole business.' },
])}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What typing bills into Tally costs you.', 'Your numbers, not ours.')}<div class="callc" data-bfc>
  <div class="callc-in">
    <label>Bills, returns and payments a month<input type="number" inputmode="numeric" data-bf="n" value="1200" min="0"></label>
    <label>Minutes to enter one into Tally<input type="number" inputmode="decimal" data-bf="min" value="3" min="0" step="0.5"></label>
    <label>Entries with a mistake to fix, %<input type="number" inputmode="decimal" data-bf="err" value="3" min="0" max="100" step="0.5"></label>
    <label>Minutes to find and fix a mistake<input type="number" inputmode="numeric" data-bf="fix" value="20" min="0"></label>
    <label>Accounts staff cost an hour, ₹<input type="number" inputmode="numeric" data-bf="cost" value="200" min="0" step="50"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Hours typing a month</span><b data-bf-o="type">0</b></p>
    <p><span>Hours fixing mistakes a month</span><b data-bf-o="fix">0</b></p>
    <p class="callc-save"><span>Cost a year</span><b data-bf-o="cost">₹0</b></p>
    <p class="cta-note">With the Tally bridge, entries sync on their own. A planning estimate from your own inputs.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('COMPARE', 'A register plus Tally, generic billing software, or Jwero.', '')}${bfTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to move billing and books to Jwero, and keep Tally.', 'Five steps, with your CA.')}${L.steps(BF_HOW.map(([title, text]) => ({ title, text })))}`)}

${L.honestGapsBlock([
  'GST return filing itself stays with your CA; Jwero prepares the reports.',
])}

${L.oneSystemBlock([
  'The invoice prices from the same rate and catalogue as the counter and website.',
  'What she owes sits on her customer record, next to every chat and purchase.',
  'The counter sale is on the <a href="/products/pos">POS</a>; the whole business, from purchase to payroll, is the <a href="/products/erp">ERP</a>.',
])}

${L.ctaBand('See invoicing at today’s rate.', 'Change the rate live in a demo and watch an invoice reprice, then see it land in Tally.', 'billing')}
`,
};

// The ERP page, rebuilt 2026-10-07 as the umbrella for every department page.
// E-invoices are generated in Tally through the bridge (confirmed by Jwero);
// material planning and manufacturing are shipped.
const FLOW = [
  ['Counter', 'Bridal necklace ordered · advance ₹50,000 taken', '/products/pos'],
  ['Purchase', 'Rubies ordered from the vendor · received and checked', '/products/purchase-vendors'],
  ['Planning', 'Material needs worked out from the design · 24K issued as 22K', '/products/manufacturing'],
  ['Workshop', 'Issued to karigar Ramesh · 62.4 g fine · wastage against norm', '/products/manufacturing'],
  ['Stock', 'Finished, tagged and hallmarked · HUID recorded', '/products/inventory'],
  ['Counter', 'Billed with old gold deducted · balance paid', '/products/pos'],
  ['Accounts', 'Posted to the ledger and GST · sent to Tally', '/products/billing-finance'],
  ['People', 'Salesperson’s incentive credited', '/products/hr-payroll'],
];
const erpFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">ORDER 2231 · ONE RECORD</p>${FLOW.map(([d, t], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${d}</small>${t}</p>`).join('')}</div>
  <ol class="wa-steps">${FLOW.map(([d, t]) => `<li><b>${d}</b><span>${t.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const ERP_CMP = [
  ['Counter billing at today’s rate', 'Add-on', 'Yes', 'Yes'],
  ['Stock by piece, fine weight and HUID', 'No', 'Yes', 'Yes'],
  ['Purchase, goods received and quality checks', 'Basic', 'Yes', 'Yes'],
  ['Material planning, BOM, karigar job work, wastage', 'No', 'Varies', 'Yes, with the metal ledger'],
  ['Girvi and metal loans', 'No', 'Some', 'Yes'],
  ['Payroll, attendance and incentives', 'Separate', 'Rarely', 'Yes'],
  ['Customer record, WhatsApp and AI calls', 'No', 'No', 'Yes, same record'],
  ['Works on any device, many branches', 'Desktop', 'Desktop or server', 'Online, every branch, keeps billing offline'],
  ['GST returns and e-invoices', 'Yes', 'Yes', 'GST reports in Jwero; e-invoices through Tally'],
];
const erpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Tally plus add-ons</th><th>Desktop jewellery ERP</th><th>Jwero</th></tr></thead><tbody>${ERP_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">Desktop ERPs vary. See <a href="/compare/jwero-vs-ornate-nx">Jwero vs Ornate NX</a>, <a href="/compare/jwero-vs-jewelacc">JewelAcc</a>, <a href="/compare/jwero-vs-marg">Marg</a>, <a href="/compare/jwero-vs-sioniq">SIONIQ</a> and <a href="/compare/jwero-vs-synergics">Synergics</a>.</p>`;
const ERP_MOVE = [
  ['Bring your masters', 'Stock, customers, vendors, karigars and opening balances from your current ERP or Tally.'],
  ['Map your way of working', 'Rates, making rules, branches, approval rules and who can do what.'],
  ['Run both in parallel', 'Bill and record in Jwero while the old system runs, until daily totals match.'],
  ['Reconcile the cut-over', 'Stock, metal and money balances matched on the switch date, differences listed and cleared.'],
  ['Switch off the old system', 'Your books carry on in Jwero’s ledger or through the Tally bridge.'],
];
const erpFaqs = [
  { q: 'What is jewellery ERP software?', a: 'Jewellery ERP software runs the whole jewellery business on one system: counter billing at today’s rate, stock by piece and fine weight, purchase, material planning, manufacturing and karigar job work, girvi, accounts and GST, payroll and every branch, on the same records.' },
  { q: 'What is the best ERP for jewellers?', a: 'One that is built for jewellery (weight, purity, fine metal, HUID, making and wastage), covers every department on one record, works across branches and devices, keeps billing offline, and connects to your customers on WhatsApp. Compare a few on your own data before you choose.' },
  { q: 'Can a jewellery ERP replace Tally?', a: 'Jwero keeps its own double-entry ledger with GST, so many shops run their books in Jwero. Others keep Tally for their CA and send entries through the bridge; e-invoices are generated in Tally that way.' },
  { q: 'Does Jwero handle manufacturing and material planning?', a: 'Yes. Bills of materials, routings, material planning, work in progress, karigar job work with wastage norms, finished-goods receipts, and a fine-weight metal ledger with metal loans.' },
  { q: 'Does it handle girvi?', a: 'Yes. Pledges, interest, renewals, part payments, release and auction notices are part of Jwero, on the same customer record.' },
  { q: 'How do I switch ERP mid-year?', a: 'Import your masters and opening balances, run Jwero alongside the old system until totals match, reconcile stock, metal and money on the switch date, then switch off the old system. We do it with you.' },
  { q: 'Will switching disrupt operations mid-order?', a: 'No. Open orders, job work and balances are brought across, and both systems run in parallel until you are ready.' },
  { q: 'Our process is unusual. Can it be configured?', a: 'Yes. Approval rules, roles, branches, making and wastage rules and custom fields are set to how you work.' },
  { q: 'Does Jwero generate e-invoices?', a: 'E-invoices are generated in Tally: Jwero raises the bill and sends it through the Tally bridge. GST reports such as GSTR-1, GSTR-3B and the HSN summary are prepared in Jwero.' },
];

const erp = {
  slug: 'products/erp',
  title: 'Jewellery ERP Software: One System for the Whole Business | Jwero',
  description: 'Jewellery ERP software: counter, stock, purchase, material planning, manufacturing, girvi, accounts, GST, payroll and branches on one record, with WhatsApp and customers built in.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery ERP', alternateName: ['ERP for jewellers', 'Jewellery ERP software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A jewellery ERP covering counter billing, piece-level stock with fine weight and HUID, purchase and vendors, material planning, BOM and karigar job work, fine-weight metal ledger and metal loans, girvi, accounts and GST with a Tally bridge, payroll and incentives, multi-branch and franchise, approvals and an audit trail.',
    url: 'https://jwero.ai/products/erp', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to switch your jewellery ERP mid-year', step: ERP_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Jewellery ERP'),
  faqs: erpFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY ERP · ERP FOR JEWELLERS',
  h1: 'Jewellery ERP software: counter, stock, purchase, manufacturing, girvi, accounts and people on one record.',
  sub: 'One system for every department, built for weight, purity, fine metal and HUID. A sale at the counter, a karigar’s wastage, a girvi renewal and a salesperson’s incentive all land on the same records, across every branch, with your customers and WhatsApp built in.',
  primary: { href: '#', label: 'Show me one order through every department', wa: 'erp' },
})}

${L.section(`${L.sectionHead('ONE ORDER, EVERY DEPARTMENT', 'Follow a bridal order through the whole business.', '')}${erpFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('ONE SYSTEM, EVERY DEPARTMENT', 'What jewellery ERP software has to cover.', '')}<div class="wa-jobs">
  <article><h3>1. Counter and billing</h3><p>Price at today’s rate, scan tags, old gold exchange, HUID check, split payments, returns and cash day-close.</p><a href="/products/pos">Jewellery billing software →</a></article>
  <article><h3>2. Stock and hallmarking</h3><p>Every piece with gross, net and fine weight, stones and HUID; valuation at today’s rate, ageing, cycle counts, memos and transfers.</p><a href="/products/inventory">Jewellery inventory software →</a></article>
  <article><h3>3. Purchase and vendors</h3><p>Purchase orders, goods received with quality checks, purchase bills and returns, vendor credits and advances, and party ledgers.</p><a href="/products/purchase-vendors">Purchase and vendors →</a></article>
  <article><h3>4. Orders, repairs and job work</h3><p>Custom and trade orders from advance to delivery, repair job slips with turnaround, and karigar job work issued and received by weight.</p><a href="/products/repairs-service">Repairs →</a></article>
  <article><h3>5. Material planning and manufacturing</h3><p>Bills of materials, routings, material planning, work in progress, wastage against norms, finished-goods receipts, and a fine-weight metal ledger with metal loans.</p><a href="/products/manufacturing">Jewellery manufacturing software →</a></article>
  <article><h3>6. Girvi</h3><p>Pledges, interest, renewals, part payments, release and auction notices, with pledge receipts, on the customer’s record.</p><a href="/products/girvi">Girvi software →</a></article>
  <article><h3>7. Accounts and GST</h3><p>A double-entry ledger with GST, GSTR-1, GSTR-3B and HSN reports, TDS, party ledgers, and a Tally bridge where e-invoices are generated.</p><a href="/products/billing-finance">GST invoicing and finance →</a></article>
  <article><h3>8. People and branches</h3><p>Attendance, payroll, incentives and Form 16; many branches and franchises; approval rules, separation of duties and an audit trail.</p><a href="/products/multi-store">Multi-store →</a></article>
</div>`)}


${L.section(`${L.sectionHead('COMPARE', 'Tally plus add-ons, a desktop jewellery ERP, or Jwero.', '')}${erpTable()}`)}

${L.section(`${L.sectionHead('SWITCHING ERP MID-YEAR', 'How to switch your jewellery ERP mid-year.', 'Five steps, done with you. No big-bang cut-over.')}${L.steps(ERP_MOVE.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('READ MORE', 'Guides for the back office.', '')}<div class="erp-map">${[['/guides/jewellery-erp-software', 'How to choose a jewellery ERP'], ['/blog/fine-weight-metal-ledger-jewellers', 'The fine-weight metal ledger'], ['/blog/job-work-jewellery-gst-challan', 'Job work and challans'], ['/blog/girvi-gold-loan-business-guide', 'Running a girvi business'], ['/blog/gst-on-jewellery-india', 'GST on jewellery'], ['/blog/jewellery-software-and-tally', 'Jewellery software and Tally']].map(([h, t]) => `<a href="${h}"><b>${t}</b><span>Guide</span></a>`).join('')}</div>`)}

${L.oneSystemBlock([
  'A karigar’s wastage, the metal ledger and the finished piece’s cost are the same numbers, not three reports to reconcile.',
  'A sale at any branch updates stock, the ledger, GST and the salesperson’s incentive at once.',
  'The customer who bought, the scheme she redeemed and the girvi she renewed are one record.',
])}

${L.ctaBand('See operations on one record.', 'Bring one order from last month. We will run it through every department in Jwero.', 'erp')}
`,
};

// Showroom, rebuilt 2026-10-07 from pim-app origin/siddh-dev (commit 8e82e86e5).
// Built: camera footfall from existing CCTV/NVR (RTSP, Hikvision, Dahua/CP Plus,
// ONVIF) via an on-site connector; entry/exit and occupancy; tablet register
// with consented photo and phone lookup; live floor with 10-minute wait alert;
// visit capture by RFID/SKU/barcode/HUID scan; estimate and send-to-counter;
// Walkout Rescue drafts marked sent by staff (never auto-sent); in-app
// morning/evening brief; expected visits from many sources; bills auto-linked
// within 8h; analytics incl. revenue per sq ft and salesperson leaderboard;
// rule-based insights. NOT claimed: face recognition or recognising customers
// by camera, QR self check-in, auto-sent rescue, brief pushed to WhatsApp,
// AI insights, age/gender estimates (unverified live).
const SH_FLOW = [
  ['4:10 pm', 'The door camera counts a walk-in · Meera checks in on the tablet'],
  ['Known', '3 past visits · scheme matures in 12 days · tried a necklace last time'],
  ['On the floor', 'Waiting 10 minutes · the floor alert calls a salesperson'],
  ['Tried', '4 pieces scanned as she tries them · an estimate for one'],
  ['Walkout', 'Leaves without buying · reason: price'],
  ['Rescue', 'A WhatsApp naming those pieces drafted · staff send it that evening'],
  ['Sold', 'Back on Saturday · the bill links to her visit'],
];
const shFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">SHOWROOM · WALK-IN TO SALE</p>${SH_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${SH_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const SH_CMP = [
  ['Footfall', 'A register, if filled', 'Counted, nothing more', 'Counted by your CCTV, and matched to visits and bills'],
  ['Who walked in', 'Unknown', 'Unknown', 'Checked in, with her history on screen'],
  ['What she tried', 'Memory', 'No', 'Scanned by RFID, barcode, SKU or HUID'],
  ['Waiting customers', 'Noticed late', 'No', 'Alert after 10 minutes unattended'],
  ['Walkouts', 'Gone', 'A number', 'A follow-up drafted naming the pieces she tried'],
  ['Conversion', 'Guessed', 'Footfall only', 'Walk-ins to bills, by branch, hour and salesperson'],
  ['Who is coming', 'Scattered', 'No', 'Bookings from website, calls, chat and schemes in one list'],
];
const shTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>A walk-in register</th><th>A people counter</th><th>Jwero</th></tr></thead><tbody>${SH_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const SH_HOW = [
  ['Connect your cameras', 'Your existing CCTV or NVR joins through a small on-site connector; entry lines are drawn once.'],
  ['Put a tablet at the door', 'Staff check customers in by phone number and see what Jwero already knows.'],
  ['Log what is tried', 'Scan pieces as they are shown and tried; send to the counter or make an estimate.'],
  ['Follow up walkouts', 'Rescue drafts the message; staff send it the same evening.'],
  ['Read the brief', 'Each morning and evening: footfall, conversion, who is expected and who to call.'],
];
const shFaqs = [
  { q: 'What is walk-in conversion in a jewellery showroom?', a: 'The share of people who walk in and buy. Jwero works it out from footfall, check-ins and the bills linked to each visit, by branch, hour and salesperson.' },
  { q: 'How do I count footfall in my jewellery showroom?', a: 'Connect your existing CCTV or NVR to Jwero through an on-site connector. Entries, exits and how full the floor is are counted; with no cameras, footfall comes from tablet check-ins.' },
  { q: 'Which cameras work?', a: 'IP cameras and NVRs over RTSP, including Hikvision, Dahua and CP Plus, and ONVIF cameras.' },
  { q: 'Does it recognise customers’ faces?', a: 'No. Cameras count people; they do not identify them. Customers are identified only when staff check them in, and photos are taken only with consent.' },
  { q: 'Is Walkout Rescue automatic?', a: 'It drafts the follow-up naming the pieces she tried, on WhatsApp, SMS, email or a call. A staff member sends it and marks it sent; nothing goes out on its own.' },
  { q: 'How does Jwero know a customer is coming?', a: 'Expected visits gather bookings from your website, chat, AI calls, appointments, WhatsApp, campaigns and maturing gold schemes, and mark no-shows on their own.' },
  { q: 'Is the daily brief sent on WhatsApp?', a: 'Not yet. The morning and evening brief is opened in the app.' },
  { q: 'Are store insights AI?', a: 'They are clear rules: conversion drops, footfall without sales, staffing gaps, walkout reasons, repeat visitors who have not bought, and cameras offline.' },
];
const showroom = {
  slug: 'products/showroom',
  title: 'Jewellery Showroom Software: Footfall Counter, Walk-ins & Conversion | Jwero',
  description: 'Jewellery showroom software: count footfall from your existing CCTV, check walk-ins in with their history, alert on waiting customers, log what they try, follow up walkouts, and see conversion by branch, hour and salesperson.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Showroom Intelligence', alternateName: ['Footfall counter for jewellery showrooms', 'Jewellery walk-in tracking software', 'Showroom conversion analytics'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Showroom software for jewellers: footfall counted from existing CCTV or NVR cameras through an on-site connector; tablet check-in with customer history; live floor with wait alerts; visit capture by RFID, barcode, SKU or HUID scan; estimates and send-to-counter; Walkout Rescue follow-up drafts; expected visits from every booking source; bills linked to visits; conversion by branch, hour and salesperson; revenue per square foot; rule-based store insights.',
    url: 'https://jwero.ai/products/showroom', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to track footfall and conversion in a jewellery showroom', step: SH_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Showroom Intelligence'),
  faqs: shFaqs,
  body: `
${L.hero({
  eyebrow: 'SHOWROOM · FOOTFALL · CONVERSION',
  h1: 'Jewellery showroom software: count footfall, know every walk-in, win back the ones who leave.',
  sub: 'Your existing CCTV counts who comes in. The tablet at the door shows who she is and what she tried last time. Every piece shown is logged, waiting customers are flagged, and walkouts get a follow-up that names what they liked.',
  primary: { href: '#', label: 'Show me the live floor view', wa: 'showroom' },
  secondary: { href: '/products/crm', label: 'See the Jewellery CRM' },
})}

${L.section(`${L.sectionHead('ONE VISIT, START TO FINISH', 'From the door camera to a bill on Saturday.', '')}${require('./graphics').showroomHeat()}${shFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE FLOOR', 'What showroom software has to do for a jeweller.', '')}<div class="wa-jobs">
  <article><h3>1. Footfall from your cameras</h3><p>Existing CCTV or NVR (Hikvision, Dahua, CP Plus, ONVIF) counts entries, exits and how full the floor is, through an on-site connector.</p><a href="/ai-cctv-footfall-analytics-jewellery-showrooms">AI CCTV footfall →</a></article>
  <article><h3>2. Know who walked in</h3><p>Tablet check-in by phone number shows past visits, what she tried, and a maturing scheme. Photos only with consent.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>3. Nobody left waiting</h3><p>A live floor view, an alert after 10 minutes unattended, and a list of who could come in today.</p><a href="/products/multi-store">Branches →</a></article>
  <article><h3>4. Every piece tried, logged</h3><p>Scan by RFID, barcode, SKU or HUID; make an estimate or send her to the counter.</p><a href="/products/inventory">Inventory →</a></article>
  <article><h3>5. Walkouts won back</h3><p>Rescue drafts a follow-up naming the pieces she tried; staff send it, with an evening list of who to message.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>6. Conversion you can trust</h3><p>Bills auto-link to visits; conversion by branch, hour and salesperson, revenue per square foot, and a daily brief.</p><a href="/products/reports">Reports →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What walkouts cost you.', 'Your numbers, not ours.')}<div class="callc" data-shc>
  <div class="callc-in">
    <label>Walk-ins a month<input type="number" inputmode="numeric" data-sh="n" value="900" min="0" step="50"></label>
    <label>Who buy today, %<input type="number" inputmode="decimal" data-sh="conv" value="25" min="0" max="100"></label>
    <label>Walkouts won back by a follow-up, %<input type="number" inputmode="decimal" data-sh="won" value="4" min="0" max="100" step="0.5"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-sh="bill" value="60000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Walkouts a month</span><b data-sh-o="out">0</b></p>
    <p><span>Sales won back a month</span><b data-sh-o="won">0</b></p>
    <p class="callc-save"><span>Revenue a month</span><b data-sh-o="rev">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'A register, a people counter, or Jwero.', '')}${shTable()}`)}

${L.impactGrid([
  { lever: 'Knowing who is coming', before: 'Bookings from the website, calls and chat sit in separate places; staff are caught off guard.', after: 'Expected visits gather every booking, maturing schemes included, and mark no-shows on their own.' },
  { lever: 'Sales without a visit', before: 'Footfall and billing never meet, so conversion is a guess.', after: 'Bills link to visits automatically, and unlinked sales are flagged to fix.' },
  { lever: 'Which pieces fail', before: 'Nobody knows what gets tried and never bought.', after: 'Shown, tried and bought counts per piece show what to re-price or move.' },
])}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to track footfall and conversion in a showroom.', 'Five steps.')}${L.steps(SH_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.honestGapsBlock([
  'Cameras count people; they do not recognise faces or identify customers.',
  'Walkout follow-ups are sent by staff, and the daily brief is opened in the app; neither goes out on its own.',
])}

${L.oneSystemBlock([
  'A walk-in is matched to her existing customer record: occasions, scheme balance and past visits are already there.',
  'Rescue messages use the same catalogue and prices as every other channel.',
  'A <a href="/products/gold-schemes">gold scheme</a> nearing maturity puts her on the expected-visits list at her nearest branch.',
])}

${L.ctaBand('See who is on your floor, right now.', 'Bring one real walkout from last week; we will show what Walkout Rescue would have drafted.', 'showroom')}
`,
};

// Segmentation, rebuilt 2026-10-07. Confirmed by Jwero: ads can be generated
// automatically from segments.
const SEG_STEPS = [['All customers', 12400], ['Bought bridal in 2024', 2150], ['Lives in Mumbai', 1240], ['Churn risk high', 520], ['Agreed to WhatsApp', 380]];
const segBuilder = () => `<div class="seg-b" data-seg>
  <div class="seg-rows">${SEG_STEPS.map(([t, n], k) => `<p class="seg-row" data-k="${k}"><span>${k ? '+ ' + t : t}</span><b>${n.toLocaleString('en-IN')}</b><i style="--w:${Math.max(3, n / 124)}%"></i></p>`).join('')}</div>
  <div class="seg-out"><p class="pc-tag">SEND THIS SEGMENT TO</p><span>An anniversary journey</span><span>A WhatsApp campaign</span><span>AI calls at ₹7</span><span>An ad, generated automatically</span></div>
  <p class="cta-note">Illustrative counts.</p>
</div>`;
const READY_SEG = ['Bridal buyers, last 2 years', 'Scheme members due this week', 'Schemes maturing in 60 days', 'Quiet for 12 months', 'High value, churn risk', 'Anniversary next month', 'Birthday this month', 'Diamond buyers above ₹2 lakh', 'Gold coin buyers', 'Abandoned cart', 'Viewed but never bought', 'Instagram followers who never bought', 'Repair waiting for collection', 'Gold loyalty tier', 'New customers this month', 'One city or branch'];
const SEG_CMP = [
  ['Always current', 'Stale the day it is made', 'Some', 'Yes, customers move in and out live'],
  ['Purchases by category, metal and value', 'If typed in', 'If synced', 'Yes, from billing'],
  ['Schemes, occasions, loyalty tier', 'Separate sheets', 'Custom fields', 'Yes, on the record'],
  ['Scores like intent and churn risk', 'No', 'Some', 'Yes, as filters'],
  ['Size and value before sending', 'Count rows', 'Count', 'Reachable count and value, consent checked'],
  ['Send to journeys, WhatsApp, calls', 'Copy and paste', 'Email', 'One click'],
  ['Ads from a segment', 'Upload a list', 'Upload a list', 'Audiences and ads generated automatically'],
];
const segTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Excel lists</th><th>Generic CRM</th><th>Jwero</th></tr></thead><tbody>${SEG_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const SEG_HOW = [
  ['Start from a ready segment', 'Pick one of 41, such as bridal buyers or quiet for 12 months, or start blank.'],
  ['Add filters', 'Purchases, schemes, occasions, city, branch, loyalty tier, social engagement and scores.'],
  ['Check the size and value', 'See how many customers are reachable on each channel, with consent, before you save.'],
  ['Save it as a live segment', 'Customers move in and out as they buy, engage and age.'],
  ['Send it', 'To a journey, a WhatsApp campaign, AI calls, a loyalty offer or an ad generated automatically.'],
];
const segFaqs = [
  { q: 'Can I describe a segment in plain words?', a: 'Yes. Type who you want, such as “bridal buyers in Surat who have not visited in six months”, and AI turns it into a segment, with suggestions to refine it.' },
  { q: 'What is customer segmentation for jewellers?', a: 'Grouping customers by what they bought, what they are saving for, when their occasions are, where they live and how engaged they are, so each message or offer goes to the people it is for instead of the whole list.' },
  { q: 'Which segments should a jeweller use?', a: 'Bridal buyers, scheme members due or maturing, anniversaries and birthdays this month, high-value customers at risk, customers quiet for a year, abandoned carts, and followers who have never bought. Jwero has 41 ready segments to start from.' },
  { q: 'What is RFM segmentation?', a: 'RFM groups customers by recency (how recently they bought), frequency (how often) and monetary value (how much). It is a quick way to find your best customers and the ones drifting away.' },
  { q: 'Do segments stay up to date?', a: 'Yes. A segment is a live rule, so customers move in and out as they buy, engage and age, not a list frozen on the day it was made.' },
  { q: 'Can I see how big a segment is before I use it?', a: 'Yes. You see the reachable count on each channel, with consent checked, and the value of the customers in it, before you save or send.' },
  { q: 'Can ads be created from a segment?', a: 'Yes. A segment can become an ad audience, and Jwero can generate the ad for it automatically, so the people you target online match the ones you message.' },
  { q: 'What do AI-suggested segments do?', a: 'Jwero suggests segments worth acting on, such as high-value customers at risk; your team reviews them before they are saved or used.' },
];

const segmentation = {
  slug: 'products/segmentation',
  title: 'Jewellery Customer Segmentation Software: Live Segments | Jwero',
  description: 'Customer segmentation for jewellers: 41 ready segments, filters for purchases, schemes, occasions, loyalty, social engagement and scores, live counts before you send, and ads generated from segments.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Customer Segmentation', alternateName: ['Customer segmentation for jewellers', 'Jewellery RFM segmentation'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Live customer segments for jewellers: 41 ready segments; filters for purchases, schemes, occasions, city, branch, loyalty tier, social engagement, RFM and customer scores; reachable counts and value with consent before saving; AI-suggested segments; sent to journeys, WhatsApp campaigns, AI calls, loyalty offers and automatically generated ads.',
    url: 'https://jwero.ai/products/segmentation', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to build a customer segment for a jewellery shop', step: SEG_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Segmentation'),
  faqs: segFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY CUSTOMER SEGMENTATION',
  h1: 'Customer segmentation for jewellers: the right two hundred, not everyone.',
  sub: 'Start from 41 ready segments or build your own from purchases, schemes, occasions, city, loyalty tier, social engagement and scores like churn risk. See the size before you send, and send it to a journey, WhatsApp, AI calls, or an ad generated automatically.',
  primary: { href: '#', label: 'Show me segments from my customers', wa: 'segments' },
})}

${L.section(`${L.sectionHead('FROM EVERYONE TO THE RIGHT 380', 'Watch a segment narrow itself.', '')}${segBuilder()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE AUDIENCE BUILDER', 'What customer segmentation has to do for a jeweller.', '')}<div class="wa-jobs">
  <article><h3>1. Start from a ready segment</h3><p>41 ready segments for jewellers, from bridal buyers to scheme members due, and AI-suggested segments your team reviews.</p><a href="#ready-seg">See some →</a></article>
  <article><h3>2. Slice by what jewellers care about</h3><p>Purchases by category, metal, value and date; schemes; occasions; city and branch; loyalty tier; social engagement.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>3. Use the scores</h3><p>Filter by intent, churn risk, opportunity and message fatigue, so you reach people who are ready and spare those who are tired.</p><a href="/products/crm">Kinds of score →</a></article>
  <article><h3>4. See the size before you send</h3><p>Reachable count on each channel, with consent checked, and the value of the customers in the segment.</p><a href="/whatsapp-broadcast-for-jewellers">WhatsApp marketing →</a></article>
  <article><h3>5. Always current</h3><p>A segment is a live rule: customers move in and out as they buy, engage and age. No stale exports.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>6. Send it anywhere</h3><p>To a journey, a WhatsApp campaign, AI calls, a loyalty offer, or an ad audience with the ad generated automatically.</p><a href="/products/ads-manager">Ads →</a></article>
</div>`)}

${L.section(`<span id="ready-seg"></span>${L.sectionHead('READY SEGMENTS', 'A few of the 41 ready segments.', '')}<div class="jrn-chips">${READY_SEG.map((r) => `<span>${r}</span>`).join('')}<span class="is-more">and 25 more</span></div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'Sending to the right customers instead of everyone.', 'Your numbers, not ours.')}<div class="callc" data-segc>
  <div class="callc-in">
    <label>Customers on your list<input type="number" inputmode="numeric" data-sg="all" value="12400" min="0"></label>
    <label>Customers in the right segment<input type="number" inputmode="numeric" data-sg="seg" value="380" min="0"></label>
    <label>Cost per marketing message, ₹<input type="number" inputmode="decimal" data-sg="cost" value="1.05" min="0" step="0.05"></label>
    <label>Campaigns a month<input type="number" inputmode="numeric" data-sg="n" value="4" min="0"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Messages not sent to the wrong people, a year</span><b data-sg-o="msgs">0</b></p>
    <p class="callc-save"><span>Message cost saved a year</span><b data-sg-o="cost">₹0</b></p>
    <p class="cta-note">Fewer irrelevant messages also mean fewer opt-outs and a healthier WhatsApp number. An estimate from your inputs.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('COMPARE', 'Excel lists, a generic CRM, or Jwero.', '')}${segTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('YOUR FIRST SEGMENT', 'How to build a customer segment for a jewellery shop.', 'Five steps.')}${L.steps(SEG_HOW.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'A segment reads the same record as the counter, schemes, loyalty and WhatsApp, so it is right the moment a customer buys.',
  'The segment that receives a WhatsApp campaign is the same audience the ad reaches online.',
  'Customers who opted out of a channel are left out of that channel automatically.',
])}

${L.ctaBand('Stop sending to everyone.', 'Tell us who you want to reach. We will show that segment from your own customers.', 'segments')}
`,
};

module.exports = [crm, catalog, inventory, billingFinance, erp, showroom, segmentation];
