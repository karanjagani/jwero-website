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
  ['Alert', 'Three weeks before her anniversary, a reminder drafted for approval.'],
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
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
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
  <article><h3>2. Occasions that remind you</h3><p>Birthdays, anniversaries and family weddings, with a message or call drafted before each date for your team to approve.</p><a href="/products/journeys">Journeys →</a></article>
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
  ['Google Shopping, Meta catalogues, marketplaces', 'Manual uploads', 'Apps per channel', 'Automatic sync'],
  ['POS, website and mobile app in step', 'No', 'If integrated', 'Yes, one catalogue'],
  ['Private catalogues, who viewed them, enquiry to quote', 'No', 'No', 'Yes'],
  ['Stock sells in one place, disappears everywhere', 'No', 'Partly', 'Yes'],
];
const catTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Photo folders and PDFs</th><th>Generic product tool or Shopify admin</th><th>Jwero</th></tr></thead><tbody>${CAT_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">See <a href="/compare/jwero-vs-shopify">Jwero vs Shopify</a> and <a href="/compare/jwero-vs-quicksell">Jwero vs QuickSell</a>.</p>`;
const CAT_MOVE = [
  ['Send us what you have', 'Product sheets, a software export, or just folders of photos.'],
  ['Import in bulk', 'Thousands of pieces at once, matched to your stock and tags.'],
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
  { q: 'I have thousands of products. Will setup take forever?', a: 'No. We import from your product sheets, software export or photo folders in bulk, and AI fills missing details for your team to check.' },
  { q: 'Can AI create jewellery product photos?', a: 'Jwero can generate or edit a product image from a product photo, charged per image from the wallet. It does not create virtual try-on images.' },
];

const catalog = {
  slug: 'products/catalog',
  title: 'Jewellery Catalogue & PIM Software: Live Prices, AI Listings | Jwero',
  description: 'Jewellery catalogue and PIM software: one record per piece, priced at today’s gold rate, listings from photos with AI, and automatic sync to Google Shopping, Meta, POS, ecommerce and marketplaces.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Catalogue & PIM', alternateName: ['Jewellery PIM software', 'Jewellery catalogue management software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery product information management: one record per piece with metal, purity, weights, stones, certificates and HUID, live-rate pricing, AI listings from photos, design bank, private shareable catalogues, and automatic sync to Google Shopping, Meta catalogues, POS, ecommerce, mobile apps and marketplaces.',
    url: 'https://jwero.ai/products/catalog', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
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
  <article><h3>6. Synced to every channel, automatically</h3><p>Your website, Shopify or WooCommerce, POS, mobile app, WhatsApp, Google Shopping, Meta catalogues and marketplaces. Sell a piece in one place and it disappears everywhere.</p><a href="/blog/selling-gold-jewellery-online-live-rate">Selling online at the live rate →</a></article>
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
  'Sell a piece at the counter and it disappears from the website, Google Shopping and marketplaces at once.',
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
  { q: 'Can it forecast demand?', a: 'Not yet. Demand forecasting is on the roadmap. Today Jwero gives valuation, ageing and slow-mover views to guide buying.' },
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
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
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

const billingFinance = {
  slug: 'products/billing-finance',
  title: 'Jewellery GST Invoicing & Finance: Receivables, Ledger | Jwero',
  description: 'Jewellery GST invoicing and finance: invoices at the live gold rate, receivables and payment reminders, and the books behind them. For counter billing, see Jwero’s jewellery billing software and POS.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Billing & Finance', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'GST invoicing priced at the live gold rate, with receivables tracking, automated payment reminders and a full counter POS — returns, old-gold exchange and cash day-close included.',
    url: 'https://jwero.ai/products/billing-finance', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Billing & Finance'),
  faqs: [
    { q: 'Does Jwero do POS counter billing? Is there a POS alternative?', a: 'Yes — a full counter: scan or search a product, build a cart at the live gold rate, apply a discount, take old gold on an exchange voucher, take payment and generate the GST invoice; returns follow your branch’s policy and each register closes its shift with a reconciled cash count. <a href="/products/pos">See the Counter POS</a>.' },
    { q: 'Can it price invoices at today’s gold rate automatically?', a: 'Yes — invoicing uses the same live-rate pricing formulas as the catalogue, so a rate change is reflected instantly.' },
    { q: 'Does it chase payments for me?', a: 'Yes — automated reminders run on receivables so collection doesn’t depend on someone remembering to call.' },
    { q: 'Do our books move to Jwero, or stay in Tally?', a: 'Your choice. Every sale, return, payment and expense posts to Jwero’s own double-entry ledger with GST handled; the Tally / Zoho Books bridge carries it across if your accountant’s world should not change.' },
    { q: 'Is GST computation actually compliant, or an approximation?', a: 'GST (CGST/SGST/IGST) is computed as part of live-rate invoicing, data-driven rather than hardcoded. Confirm current statutory-filing scope for your state on a demo before relying on it for a specific compliance need.' },
  ],
  body: `
${L.hero({
  eyebrow: 'BILLING & FINANCE',
  h1: 'GST invoices at the live gold rate, in seconds.',
  sub: 'Rate changes twice a day; your invoices should follow instantly, not by hand. Jwero prices, invoices and tracks receivables at the rate that’s true right now — and reminds customers to pay without anyone chasing.',
  primary: { href: '#', label: 'Send me a live-rate GST invoice', wa: 'billing' },
  secondary: { href: '/roadmap', label: 'See the counter-billing roadmap' },
})}

${L.section(
  `${L.cards([
    { title: 'Live-rate GST invoicing', text: 'Metal rate, purity, making charges and GST computed together — no manual repricing when the rate moves.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
    { title: 'Receivables ledger', text: 'Who owes what, since when — one view instead of a register.' },
    { title: 'Payment reminders', text: 'Automated reminders on outstanding receivables, sent on schedule.' },
    { title: 'Approval-gated overrides', text: 'Discounts and price exceptions on invoices route through approvals.' },
  ], 4)}`
)}

${L.honestGapsBlock([
  'E-invoice IRN and e-way bill generation — GST invoices are generated; IRP registration still runs in your CA’s tool.',
  'E-invoice / IRN and GSTR filing automation.',
])}

${L.section(`${L.sectionHead('BILLING QUESTIONS', 'Your current software, and GST accuracy.', '')}${L.faqBlock([
  { q: 'Is there a POS alternative in Jwero, or should I keep my current billing counter?', a: 'Jwero’s <a href="/products/pos">Counter POS</a> covers the sale, the exchange, the return and the till close — you do not need a second counter.' },
  { q: 'Is GST computation compliant, or an approximation?', a: 'It’s data-driven, not hardcoded. Confirm current statutory-filing scope for your state on a demo before relying on it for a specific compliance need.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Wondering how jewellery software and Tally divide the work? <a href="/blog/jewellery-software-and-tally">Read the guide to running both without double entry →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="billing">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('See invoicing at today’s rate.', 'Change the rate live in a demo and watch a draft invoice reprice.', 'billing')}
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
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
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

const showroom = {
  slug: 'products/showroom',
  title: 'Jewellery Showroom Software: Walk-in Tracking and Floor View | Jwero',
  description: 'Walk-in check-in, a live floor view, Walkout Rescue drafts and rule-based store alerts — showroom visibility built from real visit data.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Showroom Intelligence', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Walk-in check-in, a live floor view, expected-visit tracking, Walkout Rescue drafts and rule-based store alerts, sharing the same customer record as the rest of Jwero.',
    url: 'https://jwero.ai/products/showroom', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Showroom Intelligence'),
  faqs: [
    { q: 'Does the tablet check-in use facial recognition or special hardware?', a: 'No. Walk-in Register runs off a tablet at the entrance where a walk-in is checked in and out — there is no CCTV or facial-recognition automatic detection today, and no footfall door-counter hardware integration.' },
    { q: 'Is Walkout Rescue automatic — does it message customers without anyone checking?', a: 'No. It drafts a WhatsApp follow-up naming the exact pieces a customer tried, but a person on staff reviews and sends it — nothing goes out unapproved. A rescue only counts as successful once it is linked to a completed sales order afterward; it is never estimated or guessed.' },
    { q: 'Does the Daily Brief get pushed to WhatsApp automatically?', a: 'Not yet. Today the owner or manager opens the Daily Brief to see the morning and evening summary — automatic push delivery to WhatsApp is not built yet.' },
    { q: 'Are the store insights predictive AI, or something else?', a: 'They are rule-based alerts — a conversion-rate drop, dead stock needing attention, a staffing gap, a spike in a walkout reason, a repeat visitor who still has not purchased, an unclosed-visit backlog. Deterministic rules, not predictive machine learning.' },
    { q: 'How does Jwero know a customer is coming before they walk in?', a: 'Expected Visits is created automatically whenever someone books via webchat, an appointment, a CRM follow-up, a campaign, a phone call, WhatsApp, a catalogue order or the lead-finder tool. It auto-closes when they check in, and flags a no-show after a grace period — and tracks show-up rate by booking channel.' },
  ],
  body: `
${L.hero({
  eyebrow: 'SHOWROOM INTELLIGENCE',
  h1: 'Know who’s on your floor — and who left without buying.',
  sub: 'A showroom visit is the highest-intent moment in the whole business, and most stores remember none of it. Jwero checks walk-ins in, shows who is on the floor live, records what was shown and tried, and drafts a follow-up the moment someone leaves without buying.',
  primary: { href: '#', label: 'Show me the live floor view', wa: 'showroom' },
  secondary: { href: '/products/crm', label: 'See the Jewellery CRM' },
})}

${L.section(
  `${L.sectionHead('WHAT A SHOWROOM LOSES TODAY', 'The visit that nobody wrote down.', '')}
  ${L.impactGrid([
    {
      lever: 'Knowing who is in the store',
      before: 'Staff eyeball the floor; there is no real headcount and no record of what a visit involved.',
      after: 'Walk-in Register checks customers in and out at the entrance tablet; Live Floor shows who is on the floor right now.',
    },
    {
      lever: 'Customers who leave without buying',
      before: 'A visit ends, the lead goes cold, and nobody follows up on what was actually shown.',
      after: 'Walkout Rescue queues them for follow-up and drafts a WhatsApp message naming the exact pieces tried — a staff member reviews and sends it.',
    },
    {
      lever: 'Knowing who is coming',
      before: 'Bookings from webchat, appointments, CRM follow-ups and calls sit in separate places; staff are caught off guard.',
      after: 'Expected Visits pulls every booking channel into one list, auto-closes it on check-in, and flags a no-show after a grace period.',
    },
    {
      lever: 'End-of-day visibility',
      before: 'An owner pieces together how the day went from memory and a register, hours after it mattered.',
      after: 'Daily Brief summarises footfall, conversions, walkouts and the best-performing salesperson — open it each morning and evening.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('', 'Every visit, from walk-in to walkout.', '')}
  ${L.cards([
    { title: 'Walk-in Register', text: 'Tablet check-in and check-out at the store entrance the moment a customer walks in, with a consent-labelled photo captured on the tablet’s camera and shown on the Live Floor card — never stored as a permanently public file.' },
    { title: 'Check-in intelligence', text: 'Type a phone number at the register — before check-in even completes — and see visit count, why they left last time, pieces tried-not-bought, category preferences, a maturing gold scheme, and a salesperson suggestion ranked by 90-day conversion.' },
    { title: 'Live Floor', text: 'A real-time view for staff and owner of who is currently in the store, updating live.' },
    { title: 'Scan-to-log', text: 'Log a tried piece by SKU or barcode scan in one motion — search is the fallback for a miss, not the default way of logging a visit.' },
    { title: 'Visit journey capture', text: 'Log which pieces were shown and tried, note a quote given, add notes, log a handover, and check the customer out — a per-visit record.' },
    { title: 'Per-person recommendations', text: 'Product suggestions with a stated reason — "new in necklaces," "tried 14 times this month" — derived from that customer’s actual visit and purchase behaviour, not a generic bestseller list.' },
    { title: 'Shown, tried, bought', text: 'The products view shows which pieces get shown often, tried often, and actually bought — surfacing a "tried often, rarely bought" merchandising signal.' },
    { title: 'Store insights', text: 'A small set of rule-based alerts — conversion drop, dead stock, staffing gap, walkout-reason spike, repeat non-buyer, unclosed-visit backlog. Deterministic rules, not predictive AI.' },
    { title: 'Multi-branch comparison', text: 'For chains: revenue-per-square-foot by store, a salesperson leaderboard, walkout-reason ranking, busiest hours and conversion-by-visit-purpose, rolled up centrally.' },
  ])}`
)}

${L.oneSystemBlock([
  'A walk-in checked in on the tablet is matched to their existing customer record — occasions, scheme balance and past visits are already there, not a blank slate.',
  'A Walkout Rescue draft is written from the same customer record and catalogue pricing the CRM and catalogue already share — not a separate database that goes stale.',
  'A digital gold or scheme balance nearing maturity auto-populates the Expected Visits list, landed at the customer’s nearest branch with the balance and date noted — see <a href="/products/gold-schemes">Digital Gold</a> and <a href="/products/gold-schemes">Gold Savings Schemes</a>.',
])}

${L.section(`${L.sectionHead('SHOWROOM QUESTIONS', 'What sends automatically, and what still needs a person.', '')}${L.faqBlock([
  { q: 'Is Walkout Rescue automatic, or does it message customers without anyone checking?', a: 'No. It drafts the WhatsApp follow-up naming the pieces tried, but a staff member reviews and sends it. A rescue only counts as successful once linked to a completed sales order — never estimated.' },
  { q: 'Does the Daily Brief get pushed to WhatsApp automatically?', a: 'Not yet — today someone has to open the Daily Brief to see it. Automatic push delivery is not built yet.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="showroom">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('See who is on your floor, right now.', 'Bring one real walkout from last week — we will show you what Walkout Rescue would have drafted.', 'showroom')}
`,
};

const segmentation = {
  slug: 'products/segmentation',
  title: 'Jewellery Customer Segmentation Software: RFM and Live Rules | Jwero',
  description: 'Build live customer segments from RFM tier, tags, CRM stage and custom fields — reachable counts and revenue shown before you save, AI-suggested to start.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Customer Segmentation', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A visual rule builder for live, dynamically-recalculated customer segments from RFM tier, tags, CRM stage and custom fields, with reachable-count and revenue estimates before you save.',
    url: 'https://jwero.ai/products/segmentation', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Customer Segmentation'),
  faqs: [
    { q: 'Is a segment a one-time export, or does it stay current?', a: 'Segments are dynamic by default — they recalculate live against your customer records, not a stale list exported once and forgotten. Add a customer who now matches the rules, and they show up automatically.' },
    { q: 'What can I build a segment out of?', a: 'RFM tier from the recency/frequency/monetary grid, tags, CRM stage or pipeline membership, and custom fields — combined with typed operators (equals, not-equals, in-list, contains, has-all, between) and AND/OR matching in a visual rule builder.' },
    { q: 'What do the "AI-suggested" segments actually do?', a: 'The system proposes candidate segments from patterns already in your data — it is not a prediction or forecasting engine. A person reviews a suggestion before it becomes a segment anyone uses.' },
    { q: 'Do I know how big or valuable an audience is before I save it?', a: 'Yes — before you save, the builder shows an estimated reachable count and an estimated revenue/ROI figure for that audience, so you are not saving blind.' },
    { q: 'Can I see how my segments overlap with each other?', a: 'Yes — a segment relationship graph shows overlap between segments, and geo segmentation is available with a vector-map view for location-based audiences.' },
    { q: 'Where do segments get used?', a: 'They are the audience source for journeys and campaigns, and they read the exact same customer record the CRM keeps — no separate, out-of-sync copy of your customers.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CUSTOMER SEGMENTATION',
  h1: 'Every audience, defined once. Live, not a stale export.',
  sub: 'A segment here is a rule — RFM tier, tags, CRM stage, custom fields — that recalculates live against your actual customer records, so the audience is always current when a journey or campaign reads it.',
  primary: { href: '#', label: 'Show me a live audience', wa: 'segmentation' },
  secondary: { href: '/products/crm', label: 'See the Jewellery CRM' },
})}

${L.section(
  `${L.sectionHead('WHAT A STALE LIST COSTS TODAY', 'The export that was already wrong by the time you used it.', '')}
  ${L.impactGrid([
    {
      lever: 'Who is actually in an audience',
      before: 'A segment is a one-time export — customers who joined, upgraded a tier or changed stage since are simply missing.',
      after: 'Segments are dynamic by default, recalculated live from RFM tier, tags, CRM stage and custom fields — no re-export, ever.',
    },
    {
      lever: 'Building the rule itself',
      before: 'Someone hand-filters a spreadsheet, or a developer writes a one-off query nobody else can adjust.',
      after: 'A visual rule builder with typed operators (equals, in-list, contains, between) and AND/OR logic — no code required.',
    },
    {
      lever: 'Knowing if a segment is worth sending to',
      before: 'You save first and find out the audience was too small, or too low-value, after a campaign already went out.',
      after: 'Estimated reachable count and estimated revenue/ROI are shown before you save — so you decide with numbers, not a guess.',
    },
    {
      lever: 'Finding a starting point',
      before: 'Every segment starts from a blank rule builder, even when the useful groupings are already visible in your data.',
      after: 'AI-suggested segments propose candidates from existing data for a person to review: a starting point rather than an auto-send.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('HOW A SEGMENT GETS BUILT', 'One rule builder, several ways to slice the same record.', '')}
  ${L.cards([
    { title: 'RFM tier rules', text: 'Filter on the classic recency/frequency/monetary tier already computed on the customer record: a 5x5 grid instead of a hand-rolled score.' },
    { title: 'Tags, CRM stage & custom fields', text: 'Combine tags, pipeline stage and any custom field with typed operators and AND/OR matching in one visual builder.' },
    { title: 'AI-suggested segments', text: 'The system proposes candidate segments from patterns already in your data — a person reviews before it is used anywhere.' },
    { title: 'Reachable count & revenue before you save', text: 'See an estimated audience size and estimated revenue/ROI for the segment as you build it, before it goes live.' },
    { title: 'Geo segmentation', text: 'Build location-based audiences with a vector-map view alongside the rule-based filters.' },
    { title: 'Segment relationship graph', text: 'A graph view shows how your segments overlap, so you can see what a rule change would actually affect.' },
  ])}`
)}

${L.oneSystemBlock([
  'A segment built here reads RFM tier, tags and stage straight off the same customer record CRM keeps, rather than a separate, exportable copy that drifts out of date.',
  'The audience a journey triggers on, or a campaign sends to, is this exact live segment — recalculated at send time, no matter what it looked like when someone last exported a list.',
])}

${L.section(`${L.sectionHead('SEGMENTATION QUESTIONS', 'Live rules, reviewed suggestions, no guessing on size.', '')}${L.faqBlock([
  { q: 'Is a segment a one-time export, or does it stay current?', a: 'Segments are dynamic by default: they recalculate live against your customer records instead of sitting as a stale list exported once and forgotten.' },
  { q: 'What do the "AI-suggested" segments do?', a: 'The system proposes candidate segments from patterns already in your data. It is not a prediction or forecasting engine, and a person reviews before use.' },
  { q: 'Do I know how big or valuable an audience is before I save it?', a: 'Yes — an estimated reachable count and estimated revenue/ROI are shown before you save.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="segmentation">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Stop exporting lists that are already wrong.', 'Bring one audience you send to often — we will show you the live rule that replaces the spreadsheet.', 'segmentation')}
`,
};

module.exports = [crm, catalog, inventory, billingFinance, erp, showroom, segmentation];
