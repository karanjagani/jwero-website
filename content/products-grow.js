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
// WhatsApp chats routed to the right branch. Franchise royalties handled outside Jwero.
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
  { q: 'Can franchise partners see only their own store?', a: 'Yes. Roles and permissions are set at each level, so a franchise partner sees their store while head office sees the network.' },
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

${L.section(`<div class="jb-blogline"><p><b>For franchise networks:</b> partners run their own stores on the network’s rules and see only their store. <a href="/blog/jewellery-franchise-control">What a franchisor should control →</a> · <a href="/solutions/franchise-networks">Jwero for franchise networks →</a> · <a href="/solutions/multi-store-chains">Jwero for chains →</a></p></div>`)}

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
  ['Social', 'Comments on your Instagram reel and follows you on YouTube · 50 points'],
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
  ['Points for social engagement', 'No', 'Rarely', 'Yes: comments, follows, likes and shares on Instagram, Facebook, YouTube and more'],
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
  { q: 'Can customers earn points for following or commenting on social media?', a: 'Yes. You can give points for comments, follows, likes and shares on Instagram, Facebook, YouTube and other channels, matched to the customer’s record, so engagement online turns into a reason to visit.' },
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
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to launch a loyalty programme in a jewellery shop', step: LOY_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Loyalty'),
  faqs: loyFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY LOYALTY PROGRAMME SOFTWARE',
  h1: 'Jewellery loyalty programme software: reward every visit, not just every gold instalment.',
  sub: 'Points and tiers on your rules, for purchases and for social engagement on Instagram, Facebook and YouTube. Redemption limited to making charges so your gold margin is safe, rewards before anniversaries and birthdays, referrals traced to sales, and coupons and gift vouchers, at the counter, online and on WhatsApp.',
  primary: { href: '#', label: 'Show me a loyalty programme for my shop', wa: 'loyalty' },
})}

${L.section(`${L.sectionHead('ONE CUSTOMER, ONE YEAR', 'Watch a customer climb a tier.', '')}${climb()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE PROGRAMME', 'What a jewellery loyalty programme has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Your programme, your rules</h3><p>Points, tiers or both; earning rates by category; the rule that moves a customer up a tier. Points for purchases, and for engagement too: Instagram, Facebook and YouTube comments, follows, likes and shares.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>2. Protect your gold margin</h3><p>Redemption can be limited to making charges, so points come off the part of the bill where your margin is, not the gold value.</p><a href="/blog/making-charges-explained">Making charges →</a></article>
  <article><h3>3. Rewards on the moments that matter</h3><p>Anniversary and birthday rewards sent a few days before the date, on WhatsApp, when customers plan to buy.</p><a href="/blog/birthday-anniversary-marketing-jewellers">Occasion marketing →</a></article>
  <article><h3>4. Redeem anywhere</h3><p>One balance at the counter, on your online store and on WhatsApp. Staff see the tier and points as the customer walks in.</p><a href="/products/ecommerce">Online store →</a></article>
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

// Journeys, rebuilt 2026-10-07. Confirmed by Jwero: ready-made journeys,
// abandoned-cart and browse journeys. A/B testing not claimed.
const JRN = [
  ['Trigger', 'Meera’s anniversary is in 10 days'],
  ['WhatsApp', 'Three pieces matched to her taste and budget, priced at today’s rate'],
  ['Wait', '2 days'],
  ['Condition', 'Not read? Go to the next step'],
  ['AI call', 'A call in Hindi at ₹7 · she is interested'],
  ['Visit booked', 'Saturday 5 pm, confirmed on WhatsApp'],
  ['Bought', 'Loyalty points added · the journey ends'],
];
const jrnFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">JOURNEY · ANNIVERSARY</p>${JRN.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Messages go out automatically; you choose which ones need approval first.</p></div>
  <ol class="wa-steps">${JRN.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const READY = ['Welcome a new customer', 'New-lead nurture', 'Birthday', 'Anniversary', 'Family wedding coming up', 'Abandoned cart', 'Browsed but did not buy', 'Scheme instalment due', 'Scheme maturity', 'Repair ready for collection', 'Win back a quiet customer', 'VIP at risk', 'Loyalty tier up', 'Points about to expire', 'After a purchase', 'Festival invitation'];
const JRN_CMP = [
  ['Ready-made journeys for jewellers', 'No', 'Generic templates', 'Ready-made jewellery journeys'],
  ['Journeys created automatically, across channels and journeys', 'No', 'No', 'Yes, from the goal you describe'],
  ['Knows purchases, schemes, occasions', 'No', 'If you sync data', 'Yes, one record'],
  ['WhatsApp, SMS, email, push and AI calls', 'WhatsApp only', 'Email and SMS', 'All, in one flow'],
  ['Abandoned cart and browse', 'No', 'Online only', 'Yes, with WhatsApp and calls'],
  ['Pieces matched to each customer', 'Same message to all', 'Some', 'Yes, priced at today’s rate'],
  ['Approval where you want it', 'You send it', 'Rarely', 'Yes, for the messages you choose'],
  ['What it sold', 'Guess', 'Clicks', 'Visits and bills traced to the journey'],
];
const jrnTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>WhatsApp by hand</th><th>Generic marketing automation</th><th>Jwero journeys</th></tr></thead><tbody>${JRN_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const JRN_HOW = [
  ['Pick a ready journey', 'Start from a ready-made journey, such as anniversary, abandoned cart or scheme maturity.'],
  ['Choose who it is for', 'A segment from your records: bridal buyers, scheme members, quiet customers, one branch.'],
  ['Adjust the steps', 'Messages, waits, conditions, AI calls and branches on the canvas.'],
  ['Set the limits', 'Quiet hours, frequency limits, and approval for the messages you choose.'],
  ['Switch it on and watch', 'See who is at which step, what was sent and what it sold; stop it with one switch.'],
];
const jrnFaqs = [
  { q: 'What is marketing automation for jewellers?', a: 'Marketing automation sends the right message to each customer at the right moment without someone remembering to: before an anniversary, after an abandoned cart, when a scheme matures or a repair is ready. Jwero runs it as journeys across WhatsApp, SMS, email, push and AI calls, inside the limits you set.' },
  { q: 'What is a customer journey?', a: 'A sequence of steps that runs for each customer: a trigger, such as a birthday or an abandoned cart, then messages, waits, conditions and calls, until the customer buys or the journey ends.' },
  { q: 'Which journeys should a jewellery shop automate first?', a: 'Anniversary and birthday, scheme instalment and maturity, repair ready, abandoned cart and browse, and win-back for quiet customers. Jwero has these and more ready-made.' },
  { q: 'Can a journey send messages without approval?', a: 'Yes. Messages go out automatically, inside quiet hours and frequency limits. You can require approval for any step, and one switch stops everything.' },
  { q: 'How is a journey different from a broadcast?', a: 'A broadcast sends one message to many people at once. A journey runs for each customer on their own timeline, reacts to what they do, and moves them step by step towards a purchase.' },
  { q: 'Are there journeys for abandoned carts and browsing?', a: 'Yes. When a customer leaves pieces in an online cart, or keeps looking at the same pieces, a journey follows up on WhatsApp and can place an AI call.' },
  { q: 'Can Jwero create journeys automatically?', a: 'Yes. Describe the goal, such as bringing back customers who bought bridal two years ago, and Jwero creates a detailed journey across WhatsApp, SMS, email, push and AI calls, including when to hand a customer on to another journey. Your team reviews it before it runs.' },
  { q: 'Can a journey include phone calls?', a: 'Yes. An AI call at ₹7 can be a step, for example when a WhatsApp message is not read, and the outcome decides the next step.' },
  { q: 'Can I see what a journey is doing right now?', a: 'Yes. You see how many customers are at each step, what was sent, what is held for approval, and the visits and bills it produced.' },
  { q: 'Are the recommended pieces personal, or bestsellers?', a: 'Personal. Each customer gets pieces matched to their purchases, taste and budget, priced at today’s rate.' },
];

const journeys = {
  slug: 'products/journeys',
  title: 'Jewellery Marketing Automation & Customer Journeys | Jwero',
  description: 'Jewellery marketing automation: ready-made customer journeys for anniversaries, abandoned carts, schemes, repairs and win-backs, across WhatsApp, SMS, email and AI calls, sent automatically, with approval only where you want it.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Marketing Automation', alternateName: ['Customer journeys for jewellers', 'Jewellery marketing automation software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Marketing automation for jewellers: ready-made customer journeys including anniversary, birthday, abandoned cart, browse, scheme maturity, repair ready and win-back; a canvas of triggers, waits, conditions and branches; WhatsApp, SMS, email, push and AI-call steps; personalised pieces at today’s rate; optional approval gates and live visibility.',
    url: 'https://jwero.ai/products/journeys', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up your first customer journey', step: JRN_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Journeys'),
  faqs: jrnFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY MARKETING AUTOMATION · CUSTOMER JOURNEYS',
  h1: 'Jewellery marketing automation: customer journeys your team can see, and can stop.',
  sub: 'Start from a ready-made journey, or describe the goal and Jwero creates a detailed journey automatically, across channels and across journeys. Each runs for every customer on their own timeline across WhatsApp, SMS, email and AI calls, automatically, inside the limits you set.',
  primary: { href: '#', label: 'Show me the journeys for my shop', wa: 'journeys' },
})}

${L.section(`${L.sectionHead('ONE JOURNEY, START TO FINISH', 'An anniversary that becomes a sale.', '')}${jrnFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE CANVAS', 'What jewellery marketing automation has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Start from a ready journey</h3><p>More than 300 ready journeys for jewellers: welcome, new-lead nurture, birthdays, anniversaries, abandoned cart, browse, scheme maturity, repair ready, win-back, VIP at risk and more.</p><a href="#ready">See some →</a></article>
  <article><h3>2. Built for you, or by you</h3><p>Describe the goal and Jwero creates the journey automatically: detailed, across channels, and handing customers from one journey to the next. Or build your own on a canvas of triggers, waits, conditions and branches.</p><a href="/platform/ai-workforce">AI workforce →</a></article>
  <article><h3>3. Every channel in one flow</h3><p>WhatsApp, SMS, email, push and AI calls at ₹7 as steps, so a message that is not read can become a call.</p><a href="/ai-calling-for-jewellers">AI calling →</a></article>
  <article><h3>4. Personal, not a blast</h3><p>Each customer gets pieces matched to their purchases, taste and budget, priced at today’s rate, on the day that matters to them.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>5. You set the limits</h3><p>Messages go out automatically. Approval gates on any step you choose, quiet hours, frequency limits and one switch to stop it all.</p><a href="/whatsapp-broadcast-for-jewellers">WhatsApp marketing →</a></article>
  <article><h3>6. Watch it work</h3><p>Who is at which step, what was sent, what is held for approval, and the visits and bills each journey produced.</p><a href="/products/reports">Reports →</a></article>
</div>`)}

${L.section(`<span id="ready"></span>${L.sectionHead('READY JOURNEYS', 'A few of the ready-made journeys.', 'Pick one, adjust it, switch it on.')}<div class="jrn-chips">${READY.map((r) => `<span>${r}</span>`).join('')}<span class="is-more">and many more</span></div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'The follow-ups your team never gets to.', 'Your numbers, not ours.')}<div class="callc" data-jrc>
  <div class="callc-in">
    <label>Customers with a birthday or anniversary on record<input type="number" inputmode="numeric" data-jr="cust" value="3000" min="0"></label>
    <label>Reached before the date today, %<input type="number" inputmode="decimal" data-jr="now" value="10" min="0" max="100"></label>
    <label>Reached customers who visit, %<input type="number" inputmode="decimal" data-jr="visit" value="8" min="0" max="100"></label>
    <label>Visitors who buy, %<input type="number" inputmode="decimal" data-jr="buy" value="40" min="0" max="100"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-jr="bill" value="35000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Customers missed today</span><b data-jr-o="miss">0</b></p>
    <p><span>Extra visits a year if all are reached</span><b data-jr-o="visits">0</b></p>
    <p class="callc-save"><span>Extra sales a year</span><b data-jr-o="sales">₹0</b></p>
    <p class="cta-note">Each customer has two occasions a year in this estimate. A planning figure from your own inputs, not a promise.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('COMPARE', 'WhatsApp by hand, a generic automation tool, or Jwero journeys.', '')}${jrnTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('YOUR FIRST JOURNEY', 'How to set up your first customer journey.', 'Five steps.')}${L.steps(JRN_HOW.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'A journey reads the same record as the counter: what she bought, her scheme, her points, her family’s dates.',
  'A message not read can become an AI call, and the call’s outcome decides the next step.',
  'Visits and bills are traced back to the journey that brought them.',
])}

${L.ctaBand('Build a journey your team can watch.', 'Tell us which moment you miss most. We will show the ready journey for it.', 'journeys')}
`,
};

// Campaigns, rebuilt 2026-10-07. Confirmed by Jwero: RCS live; A/B testing in
// campaigns. Ads and social posts are NOT part of campaigns (they have their own pages).
const CMP_FLOW = [
  ['Plan', 'Diwali campaign drafted by the AI strategist three weeks ahead'],
  ['Audience', 'Bridal buyers and scheme members · 2,400 customers, consent checked'],
  ['A/B test', 'Two versions of the message to 10% · the winner goes to the rest'],
  ['WhatsApp', 'Catalogue cards priced at today’s rate'],
  ['RCS and SMS', 'For customers not on WhatsApp'],
  ['Email and push', 'To online customers and app users'],
  ['Offer', 'Festival coupon, valid till Bhai Dooj'],
  ['Results', 'Visits, bills and revenue traced to the campaign, by channel'],
];
const cmpFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">CAMPAIGN · DIWALI</p>${CMP_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${CMP_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const CMPN_CMP = [
  ['Channels in one campaign', 'Separate tools', 'Email and SMS', 'WhatsApp, RCS, SMS, email and push'],
  ['Festival calendar planned ahead', 'Last-minute', 'No', 'AI strategist drafts it'],
  ['Audience from purchases, schemes, occasions', 'Whole list', 'Uploaded lists', 'Live segments'],
  ['A/B testing', 'No', 'Some', 'Yes, winner sent to the rest'],
  ['Prices at today’s rate in the message', 'No', 'No', 'Yes, catalogue cards'],
  ['Coupons, gift vouchers, loyalty points', 'Separate', 'Some', 'Yes'],
  ['What it sold', 'Guess', 'Opens and clicks', 'Visits and bills, by channel'],
];
const cmpnTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Agency and separate tools</th><th>Generic marketing tool</th><th>Jwero campaigns</th></tr></thead><tbody>${CMPN_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const CMPN_HOW = [
  ['Pick the moment', 'A festival, launch or season from the calendar, three weeks ahead.'],
  ['Let the AI draft it', 'The strategist proposes the audience, message, offer and channels; your team edits.'],
  ['Choose the audience', 'A live segment, with consent and frequency limits checked on every channel.'],
  ['Test two versions', 'Send both to a small share; the better one goes to everyone else.'],
  ['Send and measure', 'WhatsApp, RCS, SMS, email and push, then visits, bills and revenue by channel.'],
];
const cmpnFaqs = [
  { q: 'What is jewellery marketing software?', a: 'Software that plans and sends a jeweller’s campaigns across WhatsApp, RCS, SMS, email and push to the right customers, with offers like coupons and gift vouchers, and shows what each campaign sold.' },
  { q: 'How should a jeweller plan festival campaigns?', a: 'Plan from the calendar three weeks ahead: Akshaya Tritiya, Dhanteras, Diwali, wedding season and launches. Pick the audience for each, test two versions of the message, send on the channels each customer uses, and measure visits and bills.' },
  { q: 'Which marketing channels work best for jewellers?', a: 'WhatsApp for most customers, RCS and SMS for those not on WhatsApp, email and push for online customers. Jwero sends each customer on the channels they agreed to.' },
  { q: 'Can I A/B test a campaign?', a: 'Yes. Send two versions to a small share of the audience, and the version that performs better goes to everyone else.' },
  { q: 'How do jewellers measure what a campaign sold?', a: 'By tracing visits and bills back to the campaign and channel that reached the customer. Jwero shows revenue by campaign and by channel, not just opens.' },
  { q: 'Can AI plan and write jewellery campaigns?', a: 'Yes. The AI campaign strategist drafts the plan, audience, message and offer ahead of each festival. You choose whether it goes out automatically or is held for your team’s approval.' },
  { q: 'Do campaigns include ads and social media posts?', a: 'No. Ads and social posts run from their own tools in Jwero, using the same segments, so the people you target online match the ones you message.' },
  { q: 'Is RCS available?', a: 'Yes. RCS rich messages are live for campaigns, for customers on Android phones who are not reachable on WhatsApp.' },
  { q: 'What is the difference between a campaign and a journey?', a: 'A campaign goes to an audience at a planned time, like a Diwali offer. A journey runs for each customer on their own timeline, like an anniversary or an abandoned cart.' },
];

const campaigns = {
  slug: 'products/campaigns',
  title: 'Jewellery Marketing Software: Campaigns on WhatsApp, RCS, SMS | Jwero',
  description: 'Jewellery marketing software: festival campaigns planned by AI, sent on WhatsApp, RCS, SMS, email and push to live segments, with A/B testing, coupons and sales traced to each campaign.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Marketing Campaigns', alternateName: ['Jewellery marketing software', 'Jewellery campaign software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Marketing campaigns for jewellers: festival calendar with an AI campaign strategist, WhatsApp, RCS, SMS, email and push in one campaign, live segments with consent and frequency limits, A/B testing, catalogue cards at today’s rate, coupons and gift vouchers, and revenue traced by campaign and channel.',
    url: 'https://jwero.ai/products/campaigns', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to plan a festival campaign for a jewellery shop', step: CMPN_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Campaigns'),
  faqs: cmpnFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY MARKETING SOFTWARE · CAMPAIGNS',
  h1: 'Jewellery marketing software: one festival, every channel, one number for what it sold.',
  sub: 'The AI strategist drafts each festival campaign ahead. Send it on WhatsApp, RCS, SMS, email and push to the right segment, test two versions, add a coupon, and see the visits, bills and revenue each campaign brought in.',
  primary: { href: '#', label: 'Plan my next festival with us', wa: 'campaigns' },
})}

${L.section(`<div class="which-page"><p><b>A campaign</b> goes to an audience at a planned time, like a Diwali offer. You are on the right page.</p><p><b>A journey</b> runs for each customer on their own timeline, like an anniversary. <a href="/products/journeys">See journeys →</a> · Only WhatsApp? <a href="/whatsapp-broadcast-for-jewellers">WhatsApp marketing →</a></p></div>`)}

${L.section(`${L.sectionHead('ONE FESTIVAL, START TO FINISH', 'A Diwali campaign, planned to measured.', '')}${cmpFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE CAMPAIGN', 'What jewellery marketing software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Plan the year</h3><p>A festival calendar of Akshaya Tritiya, Dhanteras, Diwali, wedding season and launches, with each campaign drafted ahead by the AI strategist.</p><a href="/whatsapp-broadcast-for-jewellers">Festival guides →</a></article>
  <article><h3>2. Every message channel in one campaign</h3><p>WhatsApp, RCS, SMS, email and push, each customer reached on the channels they agreed to.</p><a href="/sms-marketing-for-jewellers">SMS, RCS and push →</a></article>
  <article><h3>3. The right audience</h3><p>Live segments from purchases, schemes, occasions and loyalty, with consent and frequency limits checked on every channel.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>4. Test, then send</h3><p>A/B test two versions on a small share; the winner goes to everyone else. Messages carry catalogue cards priced at today’s rate.</p><a href="/products/catalog">Catalogue →</a></article>
  <article><h3>5. Offers that sell</h3><p>Festival coupons, gift vouchers and loyalty points, with limits and validity, redeemable at the counter and online.</p><a href="/products/loyalty">Loyalty →</a></article>
  <article><h3>6. Know what it sold</h3><p>Visits, bills and revenue traced to each campaign and each channel, not just opens and clicks.</p><a href="/products/reports">Reports →</a></article>
</div>
<p class="cta-note" style="margin-top:14px">Ads and social posts run from their own tools, on the same segments: <a href="/products/ads-manager">ads</a> · <a href="/products/social-media">social media</a>.</p>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What a campaign costs before you send it.', 'Your numbers; rates from the pricing page.')}<div class="callc" data-chc>
  <div class="callc-in">
    <label>Customers on WhatsApp<input type="number" inputmode="numeric" data-ch="wa" value="2000" min="0"></label>
    <label>Customers on RCS or SMS only<input type="number" inputmode="numeric" data-ch="sms" value="400" min="0"></label>
    <label>Customers by email<input type="number" inputmode="numeric" data-ch="em" value="1500" min="0"></label>
    <label>Messages per customer in the campaign<input type="number" inputmode="numeric" data-ch="n" value="2" min="1"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>WhatsApp at ₹1.05</span><b data-ch-o="wa">₹0</b></p>
    <p><span>SMS at ₹0.30</span><b data-ch-o="sms">₹0</b></p>
    <p><span>Email at ₹0.03</span><b data-ch-o="em">₹0</b></p>
    <p class="callc-save"><span>Campaign cost</span><b data-ch-o="tot">₹0</b></p>
    <p class="cta-note">Push notifications are included. RCS is priced on the pricing page. Rates as published; Meta’s fees pass through at cost.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'An agency and separate tools, a generic marketing tool, or Jwero.', '')}${cmpnTable()}`)}

${L.section(`${L.sectionHead('YOUR NEXT FESTIVAL', 'How to plan a festival campaign for a jewellery shop.', 'Five steps.')}${L.steps(CMPN_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A campaign reads the same segments as journeys, ads and AI calls.',
  'A coupon used at the counter or online is traced back to the campaign that sent it.',
  'Customers who opted out of a channel are left out of that channel automatically.',
])}

${L.ctaBand('Send it, then know what it sold.', 'Tell us your next festival. We will show the campaign, the audience and the cost in Jwero.', 'campaigns')}
`,
};

module.exports = [schemes, multiStore, loyalty, journeys, campaigns];
