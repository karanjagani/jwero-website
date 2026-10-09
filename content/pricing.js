// Pricing — mirrors pim-app main (2026-09-29 consolidation):
//   lib/entitlements/catalog.ts      PLANS (Jwero One, Enterprise), terms, retention
//   lib/billing/price-book.ts        the wallet rate card
//   lib/backend/lib/billing/onboarding.ts   14-day trial, usage headroom
// These are the product's SEED prices; ops can override per plan in the billing
// console, and Billing → Rates & add-ons inside Jwero is the truth for an account.
// Only rate-card rows the product actually meters today are listed, and rows
// that the rest of this site still calls "not yet" (e-invoice, e-way bill,
// auto-debit, courier) are left off until the roadmap page says otherwise.
const L = require('../lib');

const PLAN = { monthly: 18000, firstMonth: 3600 };
const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');

const MODULES = [
  ['CRM, pipeline & showroom', '/products/crm'], ['Omnichannel inbox', '/products/whatsapp'], ['Marketing, campaigns & loyalty', '/products/campaigns'],
  ['Social & ads', '/products/ads-manager'], ['Gold schemes & savings plans', '/products/gold-schemes'], ['Jwero Optimize', '/products/optimize'],
  ['Catalogues + product engine', '/products/catalog'], ['Inventory, POS & quotations', '/products/pos'], ['Manufacturing, materials & workshop', '/products/manufacturing'],
  ['Finance & accounting', '/products/billing-finance'], ['Online store & visual selling', '/products/ecommerce'], ['Girvi, HR & payroll', '/products/hr-payroll'],
];
const INCLUDED = [
  ['1', 'location'], ['1', 'brand'], ['25,000', 'contacts'], ['25,000', 'products'], ['2', 'POS registers'], ['2', 'connected integrations'], ['10 GB', 'storage'], ['3 years', 'of audit & analytics history'],
];

// [label, price, unit] — metered today in the product.
const RATES = {
  'Messaging & calls': [
    ['WhatsApp marketing message', '₹1.05', 'per message'], ['WhatsApp utility or authentication message', '₹0.16', 'per message'], ['WhatsApp service reply', '₹0.16', 'per message'],
    ['SMS', '₹0.30', 'per message'], ['Email', '₹0.03', 'per email'], ['Push notification', 'Included', ''],
    ['AI voice agent call', '₹7', 'per call, all inclusive'], ['Staff phone call, outbound (without AI)', '₹1.50', 'per minute'], ['Staff phone call, inbound (without AI)', '₹1', 'per minute'], ['Video recording', '₹3.50', 'per recorded minute'],
  ],
  'AI': [
    ['Inbox reply or follow-up draft', '≈ ₹2–3', 'per draft'], ['Campaign, ad or catalogue copy', '≈ ₹3', 'per generation'], ['Product created from a photo', '≈ ₹6', 'per product'],
    ['Customer insights summary', '≈ ₹4', 'per summary'], ['AI report', '≈ ₹8', 'per report'], ['Meeting summary', '≈ ₹30', 'per meeting'],
    ['AI image, generate or edit', '₹10', 'per image'], ['AI video clip, up to 8 seconds', '₹99', 'per clip'], ['Lead finder search', '₹1', 'per search'],
  ],
  'Payments & orders': [
    ['Gold scheme instalment collected', '₹4', 'per instalment'], ['Payment link paid', '₹3', 'per payment'], ['Vendor or karigar payout', '₹2', 'per payout'],
    ['Girvi or metal loan', '₹10', 'per active loan / month'], ['Design Bank adoption', '₹50', 'per adoption'], ['Bank feed', '₹199', 'per linked account / month'],
  ],
  'Locations, devices & logins': [
    ['Extra location', '₹2,999', 'per location / month'], ['Extra brand', '₹999', 'per brand / month'], ['Extra organization', '₹4,999', 'per organization / month'],
    ['Extra POS register (2 included)', '₹499', 'per register / month'], ['Showroom camera', '₹799', 'per camera / month'], ['Scale or print agent', '₹249', 'per device / month'],
    ['Vendor portal login', '₹149', 'per active login / month'], ['Payslip', '₹40', 'per payslip'], ['Single sign-on & user provisioning', '₹4,999', 'per organization / month'],
  ],
  'Space & capacity': [
    ['Storage beyond 10 GB', '₹20', 'per GB / month'], ['Contacts beyond 25,000', '₹499', 'per 10,000 / month'], ['Products beyond 25,000', '₹499', 'per 10,000 / month'],
    ['Connected integration (2 included)', '₹499', 'per connection / month'], ['Custom domain', '₹199', 'per domain / month'], ['Extra mailbox', '₹199', 'per mailbox / month'],
  ],
  'People, when you want them': [
    ['Onboarding or training session', '₹2,500', 'per session'], ['Priority support', '₹4,999', 'per organization / month'], ['Dedicated success manager', '₹24,999', 'per organization / month'],
  ],
};
const families = Object.keys(RATES);
const rateCard = `
<div class="rates-out cur-note" data-cur-only="usd"><p><b>Usage rates for your country.</b> Messages, calls and AI are charged at your country’s Meta and carrier rates, from a prepaid balance. <a href="#" data-wa="pricing">Ask us for your rate card</a> and we will send it on WhatsApp.</p></div>
<div class="rates" data-rates data-inr-keep data-cur-only="inr">
  <div class="rates-tabs" role="tablist" aria-label="Rate families">${families.map((f, i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-rate-tab="${i}">${f}</button>`).join('')}</div>
  ${families.map((f, i) => `
  <div class="rates-panel${i === 0 ? ' is-on' : ''}" data-rate-panel="${i}" role="tabpanel">
    <div class="tbl-wrap"><table class="tbl rates-tbl"><tbody>${RATES[f].map(([l, p, u]) => `<tr><td>${l}</td><td class="rate-p">${p}</td><td class="rate-u">${u}</td></tr>`).join('')}</tbody></table></div>
  </div>`).join('')}
  <p class="rates-note"><b>Rates shown are for India.</b> Outside India, messages and calls are charged at your country’s Meta and carrier rates; ask us for your country’s rate card. Rates exclude taxes. AI is metered on what an action actually uses, so “≈” shows a typical action. The live rate card for your account is inside Jwero under Billing → Rates &amp; add-ons.</p>
</div>`;

const faqs = [
  { q: 'What does Jwero cost?', a: 'Jwero One is a single plan with every module and no per-seat price. You start with a free trial, and your price is shown in your account when the trial ends, before you pay anything. If Jwero runs the work for you, there is no subscription and the price follows the work. Enterprise is a one-time licence.' },
  { q: 'Is there a free trial?', a: 'Yes. Every Jwero One account starts with a free trial with every module. Your price is shown in your account when the trial ends, and you decide then.' },
  { q: 'Why is the price not on the website?', a: 'Your price depends on your business: how many locations and brands you run and where you are. You see the exact figure for your business in your account after the free trial, and nothing is charged before you agree to it.' },
  { q: 'Do I pay per module, or per user?', a: 'Neither. Jwero One includes every module, and there is no per-seat price for your team. You turn off the modules you do not use so the screen stays simple.' },
  { q: 'I run more than one store. What does that cost?', a: 'One location is included in the plan. The price for additional locations, brands and registers is shown in your account for your own count; chains that want negotiated terms, unlimited history or dedicated support should ask for Enterprise.' },
  { q: 'What about WhatsApp messages, AI and calls?', a: 'Things that cost money each time they happen, such as a WhatsApp marketing message, an AI image or a call minute, run on a prepaid balance. You top it up, you see every charge, and the rates for your country are shown in your account.' },
  { q: 'Is there a lock-in contract?', a: 'No. Billing is month to month and you can cancel any time. Your data exports whenever you ask.' },
  { q: 'What does joining the waitlist mean?', a: 'You send one WhatsApp message with your business name and city. A Jwero specialist replies with when your account can open and what to have ready, and your free trial starts when it does. If you would rather not wait, Jwero can run the work for you now, with no subscription and every tool included.' },
  { q: 'Will my shop stop billing while we switch?', a: 'No. Your current billing software keeps running until you choose to move. Customers, catalogue and stock are imported for you, usually in a day, and you can bill in Jwero alongside the old system while your team settles in. A written change-freeze keeps your season untouched.' },
  { q: 'How long is my history kept?', a: 'On Jwero One: three years of audit and analytics history, and message history kept without a limit. Enterprise keeps everything without a limit. Your books — orders, invoices, payments, purchases, payroll and tax records — are statutory and are never deleted on any plan.' },
  { q: 'Are there hidden costs?', a: 'No. Your plan price and the usage rates are both shown in your account before you pay, and importing your data and connecting your number are part of getting started.' },
  { q: 'How should I think about the cost?', a: 'Against the tools it replaces and the customers it recovers — a WhatsApp tool, a catalogue app, a website subscription, an SMS vendor and the hours spent reconciling them. Run the calculators on your own numbers before you decide.' },
  { q: 'Why should I believe the return?', a: 'You should not take our word for it — that is what the free trial and the growth report are for. The report is an account of what happened with your own customers, on your own data.' },
];

const OBJECTIONS = [
  { q: '“Another software cost?”', a: 'Measure it against the tools it replaces and one recovered customer, not against your billing software’s AMC. Run the calculators on your own numbers. <a href="/tools">Open the calculators</a>.' },
  { q: '“I don’t need the whole platform?”', a: 'You are not charged per module, so there is nothing to trim. Switch off what you don’t use and the screen shows only what you run.' },
  { q: '“Hidden costs will show up later?”', a: 'Your plan price and the usage rates are shown in your account before you pay, and the same figures stay on your billing screen.' },
  { q: '“I’ll be locked into a contract?”', a: 'Billing is month to month. Cancel any time, and export everything when you leave.' },
  { q: '“What will WhatsApp and AI add?”', a: 'They run on a prepaid balance. You see the balance and the spend; nothing is charged beyond what you top up.' },
  { q: '“ROI is a promise I’ve heard before?”', a: 'Fair. That is why you start with a free trial on your own data, and why the growth report shows what happened with your own customers.' },
];
const pricing = {
  slug: 'pricing',
  title: `Jwero Pricing: Subscription, Managed or Enterprise | Jwero`,
  description: 'How Jwero pricing works: one plan with every module and no per-seat price, starting with a free trial; your price is shown in your account when the trial ends. Or let Jwero run the work with no subscription, or take Enterprise as a one-time licence.',
  breadcrumbs: [['Home', '/'], ['Pricing']],
  schema: { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Jwero One', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://jwero.ai/pricing' },
  faqs,
  body: `
${L.hero({
  eyebrow: 'PRICING',
  h1: 'Three ways to work with Jwero.',
  sub: 'Jwero One is the whole operating system — CRM, WhatsApp, catalogues, the counter, the workshop, schemes, the books and the AI workforce — on one plan, with no per-module price and no per-seat price. You start with a free trial, and your price is shown in your account when it ends.',
  primary: { href: 'https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=pricing', label: 'Join the waitlist' },
  secondary: { href: '#', label: 'Let Jwero handle it', wa: 'handle' },
  note: 'Run it yourself: a free trial first, then your price in your account. Managed: no subscription, every tool included.',
})}


<div id="tiers"></div>${L.section(`${L.sectionHead('THREE WAYS TO BUY', 'Subscription, managed, or enterprise.', 'Below the three: the detail of the subscription for jewellers who run it themselves. Managed customers pay no subscription; every tool is included.')}${require('./jbaas').TIERS()}`, { tone: 'tint' })}
${L.section(`<div class="jb-quote2">${require('./positioning').quoteOne(0)}${require('./positioning').quoteOne(1)}</div>`)}
${L.section(
  `<div class="plans" data-plans>
    <div class="plan-grid">
      <div class="plan plan-one">
        <p class="plan-flag">Free trial first</p>
        <h2>Jwero One</h2>
        <p class="plan-desc">Everything Jwero does, in one plan. Turn off what you don’t use.</p>
        <p class="plan-price"><b>Your price, after the trial</b></p>
        <p class="plan-term">Shown in your account when the free trial ends, for your locations and your country. Billed monthly. Cancel any time.</p>
        <ul class="plan-list">
          <li>Every module included</li>
          <li>AI agents &amp; Smart AI</li>
          <li>3-year history; messages kept without a limit</li>
          <li>10 GB storage, 1 location, 2 POS registers</li>
          <li>No per-seat price for your team</li>
        </ul>
        <div class="cta-row"><a class="btn btn-primary" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=pricing-plan" rel="noopener" data-trial>Join the waitlist</a><a class="btn btn-ghost" href="#" data-wa="pricing">Talk to us first</a></div>
      </div>
    </div>
    <p class="plans-note">The plan covers the whole platform. WhatsApp, SMS, AI and other per-use services run on a prepaid balance, at rates shown in your account.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('WHAT’S INCLUDED', 'Every module. No tiers to climb.', 'Nothing here is an upsell. Switch off what you don’t use; it comes back the day you need it.')}
  <div class="grid grid-4 cells incl-grid">${MODULES.map(([t, h]) => `<a class="card incl" href="${h}">${L.icon(L.LINK_ICONS[h] || 'check')}<h3>${t}</h3></a>`).join('')}</div>
  <div class="incl-caps">${INCLUDED.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div>
  <p class="proof-caption">Your books are never deleted. Orders, invoices, payments, purchases, payroll and tax records are statutory and are kept on every plan.</p>

  <div style="margin-top:40px"></div>${L.sectionHead('USAGE', 'Pay only for what you send.', 'The plan is the platform. Messages, AI and calls cost money each time they happen, so they run on a prepaid balance you top up. The rates for your country are shown in your account, and every charge is on your billing screen.')}`
, { tone: 'tint' })}




${L.section(
  `${L.sectionHead('WHY ONE PLAN', 'What the pile of tools costs you today.', 'Most jewellery businesses pay for five or six disconnected tools — plus the invisible cost: customers lost to silence.')}
  ${require('./graphics').toolCollapse(['WhatsApp bulk tool', 'Catalogue app', 'Website subscription', 'Billing and ERP', 'Agency or freelancer', 'Scheme registers and Excel'])}
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>What you pay for today</th><th>Typical job it does</th><th>In Jwero One</th></tr></thead>
    <tbody>
      <tr><td><strong>WhatsApp bulk-message tool</strong></td><td>Sends texts; knows nothing about the customer</td><td>Included — with the customer record behind every reply</td></tr>
      <tr><td><strong>Catalogue app</strong></td><td>Shares designs; prices go stale when the rate moves</td><td>Included — live-rate pricing on every share</td></tr>
      <tr><td><strong>Website / ecommerce subscription</strong></td><td>A brochure or a generic store</td><td>Included — a jewellery-native ecommerce website</td></tr>
      <tr><td><strong>Billing / ERP software</strong></td><td>The invoice and the ledger</td><td>Included — POS, inventory, finance, with Tally and Zoho Books bridges</td></tr>
      <tr><td><strong>Agency retainer / freelancer</strong></td><td>Posts and ads, disconnected from sales data</td><td>Included — social, ads and attribution on the same record</td></tr>
      <tr><td><strong>Scheme registers & Excel hours</strong></td><td>Staff time reconciling what no tool connects</td><td>Gone — one record, no reconciliation</td></tr>
    </tbody>
  </table></div>
  <p class="cta-note" style="margin-top:16px">Put your own numbers in: <a href="/erp-to-os/make-do">what your current setup costs you</a> · <a href="/tools">the calculators</a>.</p>`
)}

${L.section(`${L.sectionHead('PRICING QUESTIONS', 'Straight answers on cost and terms.', '')}${L.faqBlock(faqs.concat(OBJECTIONS))}
<p class="cta-note" style="margin-top:14px">More objections? <a href="/faq#pricing">See every pricing question we’ve been asked →</a></p>`)}

${L.section(`${L.sectionHead('MANAGED PRICING', 'How the managed price is worked out.', 'When Jwero runs the work, there is no subscription and every tool is included. The price follows the work.')}
<ol class="pz-how pz-how-4"><li><span>01</span><b>Your volume</b><p>Conversations, calls, posts and orders, predicted from your customer base and showrooms, or counted from your own figures.</p></li><li><span>02</span><b>Today’s cost</b><p>What that work costs at the cheapest way to staff it in your market: a junior hire or a freelancer.</p></li><li><span>03</span><b>Jwero’s price</b><p>About half of that when you let Jwero decide and execute, and about 60% when you want to approve every step.</p></li><li><span>04</span><b>In writing</b><p>Your plan states the price, the work and what is measured before anything starts.</p></li></ol>
<p class="cta-note" style="text-align:center;margin-top:18px"><a class="btn btn-primary" href="/count-your-team">Count your team and see your number</a></p><p class="cta-note" style="text-align:center;margin-top:14px">Still deciding? <a href="#" data-wa="pricing">Ask us on WhatsApp</a>. Security and privacy delivered, just as you want: <a href="/trust/security">see how your data is protected</a>.</p>`, { tone: 'tint' })}
`,
};

module.exports = [pricing];
module.exports.PLAN = PLAN;
