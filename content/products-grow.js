const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// Gold schemes, rebuilt 2026-10-07. The Gold Savings Plans page is merged in here.
// Confirmed by Jwero: instalments collected automatically; enrolment through the
// website, mobile apps, WhatsApp and the showroom.
const PASS = [
  ['Joined', 'Enrolled on WhatsApp with OTP · 11+1 plan · ₹5,000 a month'],
  ['Month 1', 'Collected automatically · ₹5,000'],
  ['Month 2', 'Collected automatically · ₹10,000'],
  ['Month 3', 'Collected automatically · ₹15,000'],
  ['Month 4', 'Payment failed · reminder on WhatsApp and an AI call'],
  ['Month 4', 'Paid by link the same day · ₹20,000'],
  ['Month 11', 'Final instalment · ₹55,000'],
  ['Maturity', 'Bonus added · ₹60,000 to redeem against a bridal set'],
];
const passbook = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">GOLD SCHEME · PASSBOOK</p><b style="font-size:1.05rem">Priya Iyer</b>${PASS.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}</div>
  <ol class="wa-steps">${PASS.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const SCH_CMP = [
  ['Enrolment', 'Form and photocopy', 'At the counter', 'Website, mobile app, WhatsApp or showroom, with OTP and KYC'],
  ['Collecting instalments', 'Calls and cash', 'Payment links', 'Automatic collection, plus links, reminders and AI calls'],
  ['Member’s balance', 'Ask the shop', 'A receipt', 'Passbook on WhatsApp, any time'],
  ['Missed instalments', 'Found at maturity', 'A report', 'Followed up the same day'],
  ['Plans', 'One, on paper', 'Fixed', '11+1 instalment or gram accumulation, your rules'],
  ['Maturity', 'Disputes', 'Manual', 'OTP-verified, redeemed into a purchase'],
  ['Accounts', 'Mixed with sales', 'Separate', 'Held as a liability until redemption'],
];
const schTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Paper register</th><th>Generic collection app</th><th>Jwero</th></tr></thead><tbody>${SCH_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const SCH_MOVE = [
  ['Send us your register', 'Members, plans, instalments paid so far and maturity dates, from paper, Excel or your software.'],
  ['We load each member mid-cycle', 'Every member continues from the instalment they are on; nobody restarts.'],
  ['Members confirm their balance', 'Each member gets their passbook on WhatsApp and confirms it.'],
  ['Switch on automatic collection', 'Members set up automatic payment; others get links and reminders.'],
  ['Run new enrolments everywhere', 'Website, mobile app, WhatsApp and showroom, with OTP and KYC.'],
];
const schFaqs = [
  { q: 'What is gold scheme software?', a: 'Gold scheme software runs a jeweller’s savings schemes: enrolment with KYC, automatic instalment collection, reminders, a passbook members can check, maturity and redemption into a purchase, and the accounting that keeps scheme money separate from sales.' },
  { q: 'How does an 11+1 gold scheme work?', a: 'The customer pays a fixed amount every month for 11 months, the jeweller adds a bonus, often one instalment, at maturity, and the total is redeemed against jewellery. Jwero also runs gram-accumulation plans, where each instalment buys gold at that day’s rate.' },
  { q: 'How do jewellers collect scheme instalments automatically?', a: 'Members set up automatic payment once at enrolment, and Jwero collects each instalment on its due date. If a payment fails, the member gets a WhatsApp reminder and a payment link, and an AI call if needed.' },
  { q: 'Where can customers enrol in a gold scheme?', a: 'On your website, your mobile app, WhatsApp or in the showroom, with OTP verification and KYC on the customer record.' },
  { q: 'Can members check their balance themselves?', a: 'Yes. Each member gets a passbook on WhatsApp showing every instalment and their balance, any time they ask.' },
  { q: 'Are gold savings schemes legal in India?', a: 'Gold schemes are a long-standing trade practice, but whether your specific scheme needs registration or disclosures depends on its structure. Confirm with your CA or lawyer; Jwero keeps the KYC, written terms, audit trail and OTP-verified closures that reduce risk.' },
  { q: 'How should scheme money be accounted for?', a: 'Instalments are advances from customers and sit as a liability until the member redeems; the sale is recorded at redemption. Jwero accounts for scheme money this way and reconciles member balances to the books.' },
  { q: 'Can I move a paper scheme mid-cycle?', a: 'Yes. Each member is loaded with the instalments already paid and continues from where they are; nobody restarts.' },
  { q: 'Can a customer put old gold into a scheme?', a: 'Yes. Old gold can be valued and added to a scheme balance, then redeemed with it.' },
  { q: 'What does it cost?', a: 'Jwero One is ₹18,000 a month with every module, first month ₹3,600, and each instalment collected costs ₹4 from the wallet. AI reminder calls are ₹7 a call, all inclusive.' },
  { q: 'What if a customer disputes her balance?', a: 'Every instalment is receipted and recorded on her ledger, and closures are OTP-verified, so the balance can be shown and checked at any time.' },
];

const schemes = {
  slug: 'products/gold-schemes',
  title: 'Gold Scheme Software for Jewellers: 11+1 & Gram Plans | Jwero',
  description: 'Gold scheme software for jewellers: enrol on website, app, WhatsApp or showroom, collect instalments automatically, passbook on WhatsApp, 11+1 and gram plans, maturity and liability accounting.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Gold Scheme Software', alternateName: ['Gold savings scheme software', 'Jewellery scheme software', 'Gold savings plans for jewellers'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Gold savings scheme software: 11+1 instalment and gram-accumulation plans, enrolment with OTP and KYC on website, mobile app, WhatsApp or showroom, automatic instalment collection, WhatsApp passbook, missed-instalment follow-up, maturity and redemption, old gold into schemes, and scheme liability accounting.',
    url: 'https://jwero.ai/products/gold-schemes', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month; ₹4 per instalment collected.' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move a paper gold scheme into software', step: SCH_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Gold scheme software'),
  faqs: schFaqs,
  body: `
${L.hero({
  eyebrow: 'GOLD SCHEME SOFTWARE · GOLD SAVINGS PLANS',
  h1: 'Gold scheme software for jewellers: no paper register, no missed instalment, no maturity dispute.',
  sub: 'Members enrol on your website, app, WhatsApp or in the showroom. Instalments are collected automatically, members check their passbook on WhatsApp, missed payments are followed up the same day, and every scheme ends in a purchase at your counter.',
  primary: { href: '#', label: 'Show me a member’s passbook', wa: 'schemes' },
})}

${L.section(`${L.sectionHead('ONE MEMBER, ELEVEN MONTHS', 'A scheme that runs itself, month by month.', '')}${passbook()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE SCHEME BOOK', 'What gold scheme software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Plans your way</h3><p>Traditional 11+1 instalment plans and gram-accumulation plans, with your own bonus, duration and maturity rules.</p><a href="/blog/gold-scheme-types-11-plus-1-vs-grams">11+1 vs gram plans →</a></article>
  <article><h3>2. Enrol anywhere, in a minute</h3><p>On your website, mobile app, WhatsApp or in the showroom, with OTP verification and KYC documents on the customer record.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>3. Collection without chasing</h3><p>Instalments collected automatically on the due date. Failed payments get a WhatsApp reminder, a payment link and, if needed, an AI call at ₹7.</p><a href="/ai-calling-for-jewellers">AI reminder calls →</a></article>
  <article><h3>4. A passbook members trust</h3><p>Every instalment receipted, and the balance on WhatsApp whenever the member asks. No “please check the register”.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>5. Maturity that becomes a sale</h3><p>OTP-verified closure, the balance redeemed into a purchase, old gold added to a scheme, loyalty points, and a view of members at risk of stopping.</p><a href="/products/loyalty">Loyalty →</a></article>
  <article><h3>6. Books that stay right</h3><p>Scheme money held as a liability until redemption, member balances reconciled to the accounts, and scheme reports for the owner.</p><a href="/blog/gold-scheme-accounting-liability">Scheme accounting →</a></article>
</div>`)}

${L.section(`${L.sectionHead('RUN YOUR NUMBERS', 'What your scheme book is worth.', '')}${require('./tools').schemeCalcHtml || '<p class="cta-note"><a href="/tools/gold-scheme-calculator">Open the gold scheme calculator →</a></p>'}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Paper register, a collection app, or Jwero.', '')}${schTable()}`)}

${L.section(`${L.sectionHead('IS IT LEGAL, AND HOW IS IT ACCOUNTED FOR?', 'The two questions every owner asks.', '')}<div class="jb-blogline"><p><b>Legality:</b> gold schemes are a long-standing trade practice; whether your structure needs registration or disclosure is a question for your CA or lawyer. What reduces risk either way: KYC at enrolment, written terms, a full audit trail and OTP-verified closures, all built in. <a href="/blog/are-gold-savings-schemes-legal">Are gold savings schemes legal? →</a></p><p><b>Accounting:</b> instalments are the member’s money, held as a liability until they redeem. <a href="/blog/gold-scheme-accounting-liability">Gold scheme accounting →</a> · <a href="/blog/gold-savings-scheme-guide">The full gold scheme guide →</a></p></div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('MOVING FROM PAPER', 'How to move a paper gold scheme into software.', 'Five steps, mid-cycle, with nobody restarting.')}${L.steps(SCH_MOVE.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'A member’s scheme balance shows on her customer record, so the counter and WhatsApp know she is saving towards something big.',
  'At maturity, the balance is applied on the bill like any payment, and the liability clears in the books.',
  'A missed instalment can trigger a WhatsApp reminder and an AI call, on the same record.',
])}

${L.ctaBand('Digitise the promise.', 'Bring your scheme register. We will show every member, balance and due date in Jwero.', 'schemes')}
`,
};

// Multi-store, rebuilt 2026-10-07. Confirmed by Jwero: schemes across branches,
// WhatsApp chats routed to the right branch. Franchise royalties not built yet.
const NET = [
  ['Branch 2 · Andheri', 'Customer asks for the temple necklace from the catalogue'],
  ['Stock search', 'Found at Branch 4 · Borivali, in the showcase'],
  ['Transfer', 'Sent to Andheri on a challan, received and scanned'],
  ['Counter', 'Billed at Andheri at today’s rate'],
  ['Scheme', 'Her scheme from Branch 1 · Thane redeemed on this bill'],
  ['WhatsApp', 'Receipt sent; her next message routed to Andheri'],
  ['Head office', 'Sales, stock and the scheme liability update for the whole network'],
];
const netMap = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">ONE NETWORK · FOUR BRANCHES</p>${NET.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}</div>
  <ol class="wa-steps">${NET.map(([t, d]) => `<li><b>${t.split(' · ')[0]}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const MS_CMP = [
  ['One customer across branches', 'Separate lists', 'Sometimes', 'Yes, with schemes and loyalty'],
  ['Find a piece in another branch', 'Phone around', 'If on the server', 'Yes, live'],
  ['Transfers between branches', 'A slip', 'Yes', 'Yes, on challans, received by scanning'],
  ['Central prices with branch exceptions', 'No', 'Some', 'Yes, exceptions through approvals'],
  ['One WhatsApp number for the chain', 'No', 'No', 'Yes, chats routed to the right branch'],
  ['Branch comparison reports', 'Spreadsheets', 'Basic', 'Sales, footfall, ageing, staff, side by side'],
  ['Branch keeps billing if the internet drops', 'Yes', 'Depends on the server', 'Yes, offline billing'],
  ['Single sign-on and audit trail', 'No', 'Rarely', 'Yes'],
];
const msTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>A separate system per branch</th><th>Desktop ERP on a server</th><th>Jwero</th></tr></thead><tbody>${MS_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const MS_MOVE = [
  ['Set up the branch', 'Name, address, GSTIN if in another state, counters and cash registers.'],
  ['Give people their roles', 'Branch manager, cashiers and sales staff, each seeing only what they should.'],
  ['Load or transfer its stock', 'Opening stock imported, or pieces transferred in from other branches on challans.'],
  ['Apply the network’s rules', 'Central prices, catalogue, schemes and campaigns, with any branch exceptions approved.'],
  ['Open the doors', 'The branch bills, takes scheme payments and gets its WhatsApp chats from day one.'],
];
const msFaqs = [
  { q: 'What is multi-store jewellery software?', a: 'Software that runs a chain of jewellery showrooms as one business: one customer record, one stock you can see and transfer across branches, central prices and campaigns, branch-by-branch reports, and roles so each branch sees what it should.' },
  { q: 'How do jewellery chains control prices across branches?', a: 'Set price rules centrally, from the rate, making and stones, and let branches request exceptions that go to a manager for approval. Every branch then quotes the same piece the same way.' },
  { q: 'Can a customer redeem a scheme at any branch?', a: 'Yes. A member can enrol at one branch, pay instalments at another and redeem at any branch in the network, on the same scheme record.' },
  { q: 'Can one WhatsApp number serve the whole chain?', a: 'Yes. Customers message one number and each chat is routed to the right branch, with the customer’s history visible to whoever answers.' },
  { q: 'How are stock transfers between branches handled for GST?', a: 'Within one state, transfers move on a delivery challan. Between states, branches have different GSTINs and the transfer is billed with GST. Confirm your setup with your CA.' },
  { q: 'Can franchise partners see only their own store?', a: 'Yes. Roles and permissions are set at each level, so a franchise partner sees their store while head office sees the network. Franchise royalty calculation is not built yet.' },
  { q: 'Will branch managers resist losing autonomy?', a: 'Branches keep running their day. Head office sets the rules that customers expect to be the same everywhere, and branches request exceptions through approvals.' },
  { q: 'Does a customer’s history follow them between branches?', a: 'Yes. Purchases, schemes, loyalty points and conversations are on one record, visible at every counter.' },
  { q: 'Can each branch keep billing if the internet drops?', a: 'Yes. Each counter keeps billing offline, and sales sync when the connection returns.' },
];

const multiStore = {
  slug: 'products/multi-store',
  title: 'Multi-Store Jewellery Software for Chains & Franchises | Jwero',
  description: 'Multi-store jewellery software: one customer, one stock and central prices across branches, schemes redeemable anywhere, one WhatsApp number routed to the right branch, branch reports and roles.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Multi-Store Jewellery Software', alternateName: ['Jewellery chain software', 'Jewellery franchise software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Multi-store and franchise jewellery software: holding, brand and branch hierarchy with roles, single sign-on and audit trail; central prices, catalogue and campaigns with approved exceptions; stock visible and transferable across branches; schemes and loyalty across branches; one WhatsApp number routed by branch; branch comparison reports; offline billing per branch.',
    url: 'https://jwero.ai/products/multi-store', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month; extra locations at the published rate.' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to add a new branch to your jewellery chain', step: MS_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Multi-store'),
  faqs: msFaqs,
  body: `
${L.hero({
  eyebrow: 'MULTI-STORE JEWELLERY SOFTWARE · CHAINS AND FRANCHISES',
  h1: 'Multi-store jewellery software: grow to ten stores without losing the one-store touch.',
  sub: 'One customer, one stock and one set of prices across every branch. A piece found in another store and transferred in minutes, schemes redeemable anywhere, one WhatsApp number routed to the right branch, and head office seeing every branch side by side.',
  primary: { href: '#', label: 'Show me my network on one screen', wa: 'multistore' },
})}

${L.section(`${L.sectionHead('ONE SALE, FOUR BRANCHES', 'A customer, a piece and a scheme from three different stores.', '')}${netMap()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE NETWORK', 'What multi-store jewellery software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. One network</h3><p>Holding, brands, branches and franchises, with roles and permissions at each level, single sign-on and an audit trail.</p><a href="/enterprise">Enterprise →</a></article>
  <article><h3>2. Head office decides, branches run</h3><p>Central price rules, catalogue and campaigns. Branches request exceptions, which go to a manager for approval.</p><a href="/products/catalog">Catalogue →</a></article>
  <article><h3>3. One stock across branches</h3><p>Find a piece in any branch, transfer it on a challan and receive it by scanning; vaults and warehouses too.</p><a href="/blog/branch-stock-transfer-jewellery">Branch transfers →</a></article>
  <article><h3>4. One customer everywhere</h3><p>History, schemes and loyalty follow the customer: enrol at one branch, pay or redeem at another. One WhatsApp number with chats routed to the right branch, and AI calling for every branch.</p><a href="/products/gold-schemes">Schemes across branches →</a></article>
  <article><h3>5. Compare branches</h3><p>Sales, footfall and conversion, ageing stock and staff incentives, branch by branch, side by side.</p><a href="/jewellery-showroom-footfall-counting">Footfall →</a></article>
  <article><h3>6. Every branch keeps billing</h3><p>Offline billing and a cash close per branch, with consolidated books for the network.</p><a href="/products/pos">Billing →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'The time head office spends chasing branches.', 'Your numbers, not ours.')}<div class="callc" data-hoc>
  <div class="callc-in">
    <label>Branches<input type="number" inputmode="numeric" data-hc="br" value="5" min="1"></label>
    <label>Calls and sheets per branch a day<input type="number" inputmode="decimal" data-hc="calls" value="4" min="0"></label>
    <label>Minutes each<input type="number" inputmode="decimal" data-hc="mins" value="10" min="0"></label>
    <label>Days a month<input type="number" inputmode="numeric" data-hc="days" value="26" min="0" max="31"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Branch calls and sheets a month</span><b data-hc-o="n">0</b></p>
    <p class="callc-save"><span>Hours back for head office</span><b data-hc-o="hours">0</b></p>
    <p class="cta-note">Time spent asking branches for sales, stock and cash figures that a shared system shows live. An estimate from your inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'A system per branch, a desktop ERP on a server, or Jwero.', '')}${msTable()}`)}

${L.section(`${L.sectionHead('ADDING A BRANCH', 'How to add a new branch to your jewellery chain.', 'Five steps.')}${L.steps(MS_MOVE.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`<div class="jb-blogline"><p><b>For franchise networks:</b> partners run their own stores on the network’s rules and see only their store. Franchise royalty calculation is not built yet. <a href="/blog/jewellery-franchise-control">What a franchisor should control →</a> · <a href="/solutions/franchise-networks">Jwero for franchise networks →</a> · <a href="/solutions/multi-store-chains">Jwero for chains →</a></p></div>`)}

${L.oneSystemBlock([
  'A scheme paid at one branch and redeemed at another is one record and one liability in the books.',
  'A piece transferred between branches is the same piece on the catalogue, the website and WhatsApp.',
  'Every branch’s chats arrive on one number and reach the right team, with the customer’s history attached.',
])}

${L.ctaBand('Bring network discipline to your business.', 'Tell us how many branches you run. We will show them as one network in Jwero.', 'multistore')}
`,
};

// Loyalty, rebuilt 2026-10-07. Confirmed by Jwero: redemption can be limited to
// making charges; gift vouchers and coupons are shipped.
const CLIMB = [
  ['Purchase', 'Earrings, ₹42,000 · 420 points earned'],
  ['Referral', 'Her friend Anjali buys a chain · 500 bonus points'],
  ['Anniversary', 'Reward sent a week before the date · 250 points'],
  ['Tier up', 'Moves from Silver to Gold tier · better rewards from today'],
  ['Redeem', '1,170 points redeemed against making charges online'],
  ['Expiry', 'Older points expire after the period you set · reminder sent first'],
];
const climb = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">LOYALTY · MEERA SHAH</p>${CLIMB.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative points and rules.</p></div>
  <ol class="wa-steps">${CLIMB.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const LOY_CMP = [
  ['Who is a member', 'Whoever kept the card', 'App sign-ups', 'Every customer on your record'],
  ['Protects gold margins', 'No', 'Rarely', 'Redemption limited to making charges if you choose'],
  ['Anniversary and birthday rewards', 'No', 'Birthday only', 'Both, sent before the date'],
  ['Works at counter, online and WhatsApp', 'Counter only', 'App only', 'All, one balance'],
  ['Referrals tracked to a sale', 'No', 'Codes', 'Yes'],
  ['Coupons and gift vouchers', 'Paper', 'Some', 'Yes, with limits and approvals'],
  ['Points outstanding as a liability', 'Unknown', 'Report', 'Yes, with expiry'],
  ['Same record as schemes and CRM', 'No', 'No', 'Yes'],
];
const loyTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Punch card</th><th>Generic loyalty app</th><th>Jwero</th></tr></thead><tbody>${LOY_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const LOY_HOW = [
  ['Decide what you reward', 'Purchases, referrals, anniversaries, birthdays; points, tiers or both.'],
  ['Protect your margin', 'Set earning rates by category, and limit redemption to making charges if you want.'],
  ['Set tiers and expiry', 'What moves a customer up, what each tier gets, and when points expire.'],
  ['Enrol everyone you already know', 'Existing customers join automatically from your records.'],
  ['Tell customers and track it', 'A WhatsApp message with their points; repeat visits and sales by tier from day one.'],
];
const loyFaqs = [
  { q: 'What is a jewellery loyalty programme?', a: 'A way to reward customers for coming back: points on purchases, tiers with better rewards, anniversary and birthday rewards, referral bonuses, and coupons or gift vouchers, all on the customer’s record and redeemable at the counter, online or on WhatsApp.' },
  { q: 'How can a jeweller reward points without hurting gold margins?', a: 'Set earning rates by category and limit redemption to making charges, so points come off the part of the bill where your margin is, not the gold value. Jwero supports this.' },
  { q: 'Do loyalty points expire?', a: 'Yes, after the period you set. Customers get a reminder before points expire, and points outstanding are tracked as a liability.' },
  { q: 'How do anniversary rewards work?', a: 'Jwero sends a reward a few days before each customer’s anniversary, on WhatsApp, which is often the moment they plan a purchase.' },
  { q: 'Is loyalty the same as a gold scheme?', a: 'No. A scheme is the customer’s money saved towards a purchase; loyalty is your reward for coming back. A customer can have both on the same record, and both can be used on one bill.' },
  { q: 'How does referral tracking work?', a: 'A customer refers a friend; when the friend buys, the referrer gets the reward you set, and the link between them stays on both records.' },
  { q: 'Can we tell if the programme pays for itself?', a: 'Yes. Repeat visits and sales by tier, points earned and redeemed, and points outstanding show what the programme costs and what it brings back.' },
  { q: 'How does a customer move up a tier?', a: 'By the rule you set, such as spend in a year or number of purchases. The tier and its rewards change automatically, and staff see it at the counter.' },
];

const loyalty = {
  slug: 'products/loyalty',
  title: 'Jewellery Loyalty Program Software: Points, Tiers, Rewards | Jwero',
  description: 'Jewellery loyalty programme software: points and tiers, redemption limited to making charges, anniversary and birthday rewards, referrals, coupons and gift vouchers, at the counter, online and on WhatsApp.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Loyalty Programme', alternateName: ['Jewellery loyalty software', 'Loyalty program for jewellery stores'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery loyalty: points and tiers with your rules, redemption limited to making charges, anniversary and birthday rewards, referrals tracked to sales, coupons and gift vouchers, points expiry and liability, redeemable at the counter, online and on WhatsApp.',
    url: 'https://jwero.ai/products/loyalty', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to launch a loyalty programme in a jewellery shop', step: LOY_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Loyalty'),
  faqs: loyFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY LOYALTY PROGRAMME SOFTWARE',
  h1: 'Jewellery loyalty programme software: reward every visit, not just every gold instalment.',
  sub: 'Points and tiers on your rules, redemption limited to making charges so your gold margin is safe, rewards before anniversaries and birthdays, referrals traced to sales, and coupons and gift vouchers, at the counter, online and on WhatsApp.',
  primary: { href: '#', label: 'Show me a loyalty programme for my shop', wa: 'loyalty' },
})}

${L.section(`${L.sectionHead('ONE CUSTOMER, ONE YEAR', 'Watch a customer climb a tier.', '')}${climb()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE PROGRAMME', 'What a jewellery loyalty programme has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Your programme, your rules</h3><p>Points, tiers or both; earning rates by category; the rule that moves a customer up a tier.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>2. Protect your gold margin</h3><p>Redemption can be limited to making charges, so points come off the part of the bill where your margin is, not the gold value.</p><a href="/blog/making-charges-explained">Making charges →</a></article>
  <article><h3>3. Rewards on the moments that matter</h3><p>Anniversary and birthday rewards sent a few days before the date, on WhatsApp, when customers plan to buy.</p><a href="/blog/birthday-anniversary-marketing-jewellers">Occasion marketing →</a></article>
  <article><h3>4. Redeem anywhere</h3><p>One balance at the counter, on your online store and on WhatsApp. Staff see the tier and points as the customer walks in.</p><a href="/products/storefront">Online store →</a></article>
  <article><h3>5. Referrals, coupons and gift vouchers</h3><p>Referrals traced to the friend’s purchase, festival coupons and gift vouchers with limits, validity and approvals.</p><a href="/products/campaigns">Campaigns →</a></article>
  <article><h3>6. Know it pays</h3><p>Repeat visits and sales by tier, points earned and redeemed, points outstanding as a liability, and expiry with a reminder first.</p><a href="/products/reports">Reports →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'Does a loyalty programme pay for itself?', 'Your numbers, not ours.')}<div class="callc" data-loyc>
  <div class="callc-in">
    <label>Customers in the programme<input type="number" inputmode="numeric" data-lc2="mem" value="2000" min="0"></label>
    <label>Extra purchases a year it brings, %<input type="number" inputmode="decimal" data-lc2="lift" value="8" min="0" max="100"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-lc2="bill" value="40000" min="0" step="1000"></label>
    <label>Your margin, %<input type="number" inputmode="decimal" data-lc2="margin" value="12" min="0" max="100"></label>
    <label>Rewards given, % of those sales<input type="number" inputmode="decimal" data-lc2="cost" value="1" min="0" max="100" step="0.5"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Extra purchases a year</span><b data-lc2-o="n">0</b></p>
    <p><span>Extra sales a year</span><b data-lc2-o="sales">₹0</b></p>
    <p><span>Cost of rewards</span><b data-lc2-o="cost">₹0</b></p>
    <p class="callc-save"><span>Margin after rewards</span><b data-lc2-o="net">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs, not a promise of results.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'A punch card, a generic loyalty app, or Jwero.', '')}${loyTable()}`)}

${L.section(`${L.sectionHead('LOYALTY AND GOLD SCHEMES', 'Two different things, on one customer.', '')}<div class="jb-blogline"><p>A <a href="/products/gold-schemes">gold scheme</a> is the customer’s own money, saved towards a purchase. Loyalty is your reward for coming back. A customer can have both on the same record, and use a scheme balance and loyalty points on the same bill. Scheme members can earn loyalty points too, if you choose.</p></div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('LAUNCHING IT', 'How to launch a loyalty programme in a jewellery shop.', 'Five steps.')}${L.steps(LOY_HOW.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'Points earned at the counter show up online and on WhatsApp at once.',
  'The anniversary reward, the occasion journey and the next AI call read the same record.',
  'A merged duplicate customer keeps all their points on one record.',
])}

${L.ctaBand('Reward regulars, not just savers.', 'Tell us how your customers buy. We will show a programme that protects your margin.', 'loyalty')}
`,
};

const journeys = {
  slug: 'products/journeys',
  title: 'Jewellery Marketing Automation: Customer Journeys | Jwero',
  description: 'Build multi-step customer journeys: triggers, branches, wait steps, messages — with a human-approval gate before anything reaches a customer.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Customer Journeys', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A visual, drag-and-drop journey builder for multi-step customer automation, with an approval node that routes any step through the same human-approval governance used across Jwero.',
    url: 'https://jwero.ai/products/journeys', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Customer Journeys'),
  faqs: [
    { q: 'What is a customer journey in Jwero?', a: 'A visual, drag-and-drop flow you build on a canvas: an entry point, then steps like event triggers, filter and score gates, conditions, branches, wait delays, messages, manual tasks, webhooks, CRM updates, calls, approvals and exits.' },
    { q: 'Can a journey send a message without anyone checking it first?', a: 'Only if you let it. Add an approval node anywhere in the flow and the journey pauses until a person approves — the same approval-queue governance and kill switch described on the AI workforce page, not a separate system.' },
    { q: 'Which channels can a journey message step use?', a: 'Message steps route through the shared channel router into WhatsApp, email, SMS and push — the same channels Broadcasts uses.' },
    { q: 'How does an occasion like a birthday actually get triggered?', a: 'A recurring sweep derives each customer’s next occasion from three sources: a recorded birthday or anniversary date, an inferred purchase-anniversary (a past significant purchase above a value threshold, treated as a recurring date even if the customer never told you), and a built-in Indian jewellery-festival calendar. A date a salesperson has entered by hand always wins — the automation never overwrites it.' },
    { q: 'What does the occasion journey actually send?', a: 'It’s enriched first: the customer’s top AI-recommended products and their lifetime spend are attached before anything goes out. The pre-built template sends curated WhatsApp product picks; if there’s no response in 2 days, it escalates to an AI voice call; either way it ends in a store-visit-booking task for staff — the automation itself never messages the customer directly, it feeds the journey.' },
    { q: 'Are the recommended products actually personalized, or generic bestsellers?', a: 'A co-purchase pattern engine looks at what products actually sell together across 24 months of real order history to build per-customer recommendations. Where there isn’t enough behavioral signal for a customer, the system falls back to category-level suggestions — and marks internally which is which, rather than presenting a fallback as if it were personalized.' },
    { q: 'Can I see what a journey is actually doing right now?', a: 'Yes. Journeys have live run monitoring, replay of past runs, staged rollout, and an incidents view — so a journey running in production is never a black box.' },
    { q: 'How is this different from a simple autoresponder?', a: 'Branching conditions, score and filter gates, wait steps and CRM updates let a journey react to who a customer is and what they do — not just fire on a timer.' },
    { q: 'What do the filter and score gates actually check?', a: 'A deterministic, rule-based scoring system computes intent, confidence, conversion likelihood, ROI probability, message-fatigue and trust-risk per customer from real behavioural signals. Those scores can gate entry to a journey — a customer already scoring high on message-fatigue, for instance, won’t be dropped into another one.' },
    { q: 'Can a journey require someone to approve before it continues?', a: 'Yes — that is what the approval node is for. It is not a workaround; it is a first-class step type in the builder.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CUSTOMER JOURNEYS',
  h1: 'Automation your team can see, and can stop.',
  sub: 'Most journey builders are a black box once you publish them. Jwero’s is a visual canvas you build, watch and can pause at any step — including an approval node that puts a person between a draft and a customer, wired into the same governance spine as the rest of your AI workforce.',
  primary: { href: '#', label: 'Show me a journey waiting for approval', wa: 'journeys' },
  secondary: { href: '/platform/ai-workforce', label: 'How Jwero governs AI actions' },
})}

${L.section(
  `${L.sectionHead('THE BUILDER', 'A real canvas, not a config form.', '')}
  ${L.cards([
    { title: 'Entry & triggers', text: 'Start a journey from an event: a purchase, a scheme instalment due, an occasion, a form submit — or drop a customer in manually.' },
    { title: 'Filter & score gates', text: 'A deterministic, rule-based score — intent, confidence, conversion likelihood, ROI probability, message-fatigue, trust-risk — gates entry, so a customer already fatigued on messages won’t be added to another journey.' },
    { title: 'Branches & conditions', text: 'Split the flow on any condition, so different customers take different paths through the same journey.' },
    { title: 'Wait & message steps', text: 'Add time delays between steps, and send messages through the shared channel router into WhatsApp, email, SMS or push.' },
    { title: 'Approval node', text: 'Insert a human-approval step anywhere — the flow pauses until someone in your team approves, the same queue used across the AI workforce.', link: { href: '/platform/ai-workforce', label: 'See the approval queue' } },
    { title: 'Manual task, webhook, CRM update, call', text: 'Hand a step to a person, call out to another system, update a customer record, or trigger an AI voice call — all as steps in the same flow.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE OCCASION ENGINE', 'Not a festival blast. A real per-customer derivation.', 'A recurring sweep finds each customer’s next occasion from three sources, then hands it to a journey — the automation itself never messages anyone directly.')}
  ${L.cards([
    { title: 'Three sources, one date', text: 'A recorded birthday or anniversary on the customer record; an inferred purchase-anniversary — a past significant purchase above a value threshold, treated as a recurring occasion even if the customer never told anyone; and a built-in Indian jewellery-festival calendar.' },
    { title: 'Manual entries always win', text: 'If a salesperson has entered a date on the customer record by hand, the automatic sweep never overwrites it. A person’s knowledge of their own customer outranks the inference.' },
    { title: 'Enriched before it sends', text: 'Each triggered occasion is attached to the customer’s top AI-recommended products and their lifetime spend before a journey template does anything with it.' },
    { title: 'Curated picks, then escalation', text: 'The pre-built journey sends curated WhatsApp product picks first. No response in 2 days escalates to an AI voice call. Either path ends in a store-visit-booking task for staff — a human closes it, the automation only opens the door.' },
  ], 4)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('RUNNING IN PRODUCTION', 'Not a black box once it’s live.', '')}
  ${L.cards([
    { title: 'Live run monitoring', text: 'Watch customers move through a journey in real time — where they are, what fired, what’s waiting.' },
    { title: 'Replay', text: 'Step back through a past run to see exactly what happened and why, node by node.' },
    { title: 'Staged rollout', text: 'Publish a journey to a small slice of customers before it runs on everyone.' },
    { title: 'Incidents view', text: 'A journey that errors or stalls shows up as an incident, not a silent failure.' },
  ], 4)}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'A journey’s approval node opens the same approval queue an AI-drafted WhatsApp reply uses: one governance system shared everywhere, rather than a separate one per feature.',
  'Message steps share the channel router with Broadcasts, so a journey and a broadcast never fight over template rules or send limits.',
  'A journey can update the same customer record the rest of Jwero reads from — a CRM-update step is not a copy, it is the record.',
  'The occasion engine’s product picks come from the same co-purchase recommendation engine used elsewhere in Jwero — built on 24 months of real order history, and marked internally when it has to fall back to a category-level suggestion instead of a personalized one.',
])}

${L.section(`${L.sectionHead('JOURNEY QUESTIONS', 'Approval gates, channels and visibility.', '')}${L.faqBlock([
  { q: 'Can a journey send something without a human checking it?', a: 'Only if you design it that way. Drop in an approval node and the flow waits for a person — the same governance and kill switch used across the AI workforce.' },
  { q: 'Can I watch a journey while it runs, or only see it after?', a: 'Live run monitoring shows customers moving through the flow in real time, plus replay of past runs and an incidents view.' },
  { q: 'How does the occasion engine find a customer’s birthday or anniversary?', a: 'From three sources — a recorded date, an inferred purchase-anniversary from a past significant purchase, or the built-in festival calendar — and a manual date a salesperson entered always takes priority over any of them.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}


${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="journeys">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Build a journey your team can watch.', 'Bring one real flow: a scheme reminder sequence, a festival invite, a win-back — and we’ll build it live with an approval gate in place.', 'journeys')}
`,
};

const campaigns = {
  slug: 'products/campaigns',
  title: 'Jewellery Marketing Software: WhatsApp, Email, SMS Campaigns | Jwero',
  description: 'Send consent-aware broadcasts across WhatsApp, email, SMS and push to any segment, then see exactly what each campaign sold, attributed to the send.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Campaigns & Broadcasts', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Consent-aware broadcasts across WhatsApp, email, SMS and push to any segment, group or tag, wrapped in campaigns with UTM-based attribution and an AI campaign-strategist for drafting plans.',
    url: 'https://jwero.ai/products/campaigns', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Campaigns & Broadcasts'),
  faqs: [
    { q: 'What is a Broadcast?', a: 'A single send — WhatsApp, email, SMS or push — to an audience built from a segment, a group or a tag. WhatsApp sends are template-linked, following the same approved-template discipline as the rest of Jwero’s WhatsApp story.' },
    { q: 'What does "consent-aware" actually mean?', a: 'A delivery automatically skips a recipient who has opted out, is on DND, or is missing a required template — a structured skip-reason system, not a manual checklist someone has to remember to run.' },
    { q: 'What is a Campaign, and how is it different from a Broadcast?', a: 'A campaign wraps one or more broadcasts and journeys with UTM-based attribution and a reporting layer, so you see what a campaign actually sold — not just how many messages went out.' },
    { q: 'Where does the audience for a broadcast or campaign come from?', a: 'From segments — built in Jwero’s segmentation tool — or from groups and tags. The same segments feed both journeys and campaigns.' },
    { q: 'Does the AI write and send campaigns on its own?', a: 'No. The AI campaign-strategist turns a brief into a draft plan — audience, message angles, timing — but a person still reviews, builds and sends it. Nothing goes out without your team’s action, the same "AI drafts, human approves" rule used across Jwero.' },
    { q: 'Can a campaign target a loyalty tier?', a: 'Yes — loyalty tiers are one of the ways to build an audience, so a campaign can target your top tier specifically rather than everyone at once.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CAMPAIGNS & BROADCASTS',
  h1: 'One send, every channel, one number for what it sold.',
  sub: 'A broadcast that ignores opt-outs is a ban risk. A campaign with no attribution is a guess about what worked. Jwero sends consent-aware broadcasts across WhatsApp, email, SMS and push, then wraps them in campaigns that report what each one actually sold.',
  primary: { href: '#', label: 'Show me what one campaign sold', wa: 'campaigns' },
  secondary: { href: '/products/loyalty', label: 'Target a loyalty tier' },
})}

${L.section(
  `${L.sectionHead('BROADCASTS', 'One send, four channels, consent built in.', '')}
  ${L.cards([
    { title: 'Any audience', text: 'Build the send list from a segment, a group, or a tag — the same audience tools that feed journeys.', link: { href: '/products/segmentation', label: 'See segmentation' } },
    { title: 'Four channels', text: 'WhatsApp, email, SMS and push from one broadcast — no separate tool per channel.' },
    { title: 'Template-linked WhatsApp', text: 'WhatsApp sends link to approved templates, the same discipline that keeps the rest of Jwero’s WhatsApp use out of ban-risk territory.' },
    { title: 'Consent-aware delivery', text: 'A send automatically skips anyone opted out, on DND, or missing a required template — with a structured, visible skip reason, not a silent drop.' },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('CAMPAIGNS', 'What it sold, not just what it sent.', '')}
  ${L.cards([
    { title: 'Wraps broadcasts and journeys', text: 'A campaign is a container: one or more broadcasts and journeys, organised around one goal.' },
    { title: 'UTM-based attribution', text: 'Every campaign carries UTM tracking through to the sale, so revenue rolls up to the send that drove it.' },
    { title: 'Real reporting', text: 'See what a campaign actually sold, attributed to the campaign, rather than an open-rate proxy for revenue.' },
    { title: 'AI campaign-strategist', text: 'Give it a brief and it drafts a campaign plan — audience, angles, timing. A person still builds and sends it; nothing ships on its own.' },
  ], 4)}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'Broadcasts and journeys share the same channel router and the same consent state — an opt-out recorded anywhere is honoured everywhere.',
  'Campaign audiences are built from the same segments, groups and tags Jwero uses for journeys — no separate list to export and re-upload.',
  'A campaign can target a loyalty tier directly, because loyalty tier already lives on the same customer record campaigns read from.',
])}

${L.section(`${L.sectionHead('CAMPAIGN QUESTIONS', 'Consent, attribution, and what the AI can touch.', '')}${L.faqBlock([
  { q: 'Does a broadcast risk sending to someone who opted out?', a: 'No — delivery automatically skips anyone opted out, on DND, or missing a required template, with a structured skip reason recorded.' },
  { q: 'Does the AI campaign-strategist send campaigns by itself?', a: 'No. It drafts a plan from a brief; a person still reviews, builds and sends it — the same "AI drafts, human approves" rule used across Jwero.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.honestGapsBlock([
  'The owner’s weekly growth-report dashboard — campaign-level UTM attribution is live today; the productised owner dashboard built on top of it is rolling out. See <a href="/roadmap">the roadmap</a>.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="campaigns">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Send it, then know what it sold.', 'Bring one segment and one offer — we’ll build the broadcast, wire the attribution, and show you the report it produces.', 'campaigns')}
`,
};

module.exports = [schemes, multiStore, loyalty, journeys, campaigns];
