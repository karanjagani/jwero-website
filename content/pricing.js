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
<div class="rates" data-rates data-inr-keep>
  <div class="rates-tabs" role="tablist" aria-label="Rate families">${families.map((f, i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-rate-tab="${i}">${f}</button>`).join('')}</div>
  ${families.map((f, i) => `
  <div class="rates-panel${i === 0 ? ' is-on' : ''}" data-rate-panel="${i}" role="tabpanel">
    <div class="tbl-wrap"><table class="tbl rates-tbl"><tbody>${RATES[f].map(([l, p, u]) => `<tr><td>${l}</td><td class="rate-p">${p}</td><td class="rate-u">${u}</td></tr>`).join('')}</tbody></table></div>
  </div>`).join('')}
  <p class="rates-note"><b>Rates shown are for India.</b> Outside India, messages and calls are charged at your country’s Meta and carrier rates; ask us for your country’s rate card. Rates exclude taxes. AI is metered on what an action actually uses, so “≈” shows a typical action. The live rate card for your account is inside Jwero under Billing → Rates &amp; add-ons.</p>
</div>`;

const faqs = [
  { q: 'Is there a free trial?', a: `No. Instead, your first month of Jwero One is ${inr(PLAN.firstMonth)} instead of ${inr(PLAN.monthly)}, with every module. Per-use services such as WhatsApp messages and AI run on a prepaid wallet from day one. The first-month price applies once per business.` },
  { q: 'What is the wallet?', a: 'The plan covers the whole platform. Things that cost money each time they happen — a WhatsApp marketing message, an AI image, a call minute, a payout — are metered from a prepaid wallet at the published rates on this page. You top it up; nothing is charged to a card behind your back.' },
  { q: 'Do I pay per module, or per user?', a: 'Neither. Jwero One includes every module, and there is no per-seat price for your team. You turn off the modules you do not use so the screen stays simple. What scales with you is capacity: extra locations, brands, registers and storage, at the rates shown.' },
  { q: 'I run more than one store. What does that cost?', a: `One location is included. In India each additional location is ${inr(2999)} a month; outside India, ask us for a quote. Use the calculator above for your count; chains that want negotiated terms, unlimited history or dedicated support should ask for Enterprise.` },
  { q: 'Is there a lock-in contract?', a: 'No. Billing is month to month and you can cancel any time. Your data exports whenever you ask.' },
  { q: 'How long is my history kept?', a: 'On Jwero One: three years of audit and analytics history, and message history kept without a limit. Enterprise keeps everything without a limit. Your books — orders, invoices, payments, purchases, payroll and GST records — are statutory and are never deleted on any plan.' },
  { q: 'Are there hidden costs?', a: 'The plan price and the rate card are both on this page. Onboarding help is priced per session if you want it; importing your data and connecting your number are part of getting started.' },
  { q: 'How should I think about the cost?', a: 'Against the tools it replaces and the customers it recovers — a WhatsApp tool, a catalogue app, a website subscription, an SMS vendor and the hours spent reconciling them. Run the calculators on your own numbers before you decide.' },
  { q: 'Why should I believe the return?', a: 'You should not take our word for it — that is what the growth report is for. It is an account of what happened with your own customers, on your own data, inside your first month.' },
];

const OBJECTIONS = [
  { q: '“Another software cost?”', a: 'Measure it against the tools it replaces and one recovered customer, not against your billing software’s AMC. Run the calculators on your own numbers. <a href="/tools">Open the calculators</a>.' },
  { q: '“I don’t need the whole platform?”', a: 'You are not charged per module, so there is nothing to trim. Switch off what you don’t use and the screen shows only what you run.' },
  { q: '“Hidden costs will show up later?”', a: 'The plan price and the wallet rate card are both on this page, and the same card is inside your billing screen.' },
  { q: '“I’ll be locked into a contract?”', a: 'Billing is month to month. Cancel any time, and export everything when you leave.' },
  { q: '“What will WhatsApp and AI add?”', a: 'They run on a prepaid wallet at per-use rates. You see the balance and the spend; nothing is charged beyond what you top up.' },
  { q: '“ROI is a promise I’ve heard before?”', a: `Fair. That is why the first month is ${inr(PLAN.firstMonth)}, on your own data, and why the growth report shows what happened with your own customers.` },
];
const pricing = {
  slug: 'pricing',
  title: `Jwero Pricing: Subscription, Managed or Enterprise | Jwero`,
  description: `One plan with every module: ${inr(PLAN.monthly)} a month in India, $249, AED 899, SAR 929, QAR 909, £199 or €229 elsewhere, billed monthly. First month ${inr(PLAN.firstMonth)}. Per-use services — WhatsApp, AI, calls — run on a prepaid wallet at published rates. Enterprise for groups and chains is a one-time licence to self-host.`,
  breadcrumbs: [['Home', '/'], ['Pricing']],
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Jwero One', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    url: 'https://jwero.ai/pricing',
    offers: [
      { '@type': 'Offer', name: 'Jwero One', price: String(PLAN.monthly), priceCurrency: 'INR', description: 'Per month in India, billed monthly, excluding taxes. First month ' + PLAN.firstMonth + ' INR.' },
      { '@type': 'Offer', name: 'Jwero One (US dollars)', price: '249', priceCurrency: 'USD', description: 'Per month, billed monthly, excluding taxes. First month 49 USD.' },
      { '@type': 'Offer', name: 'Jwero One (UAE dirhams)', price: '899', priceCurrency: 'AED', description: 'Per month, billed monthly, excluding VAT. First month 179 AED.' },
      { '@type': 'Offer', name: 'Jwero One (Saudi riyals)', price: '929', priceCurrency: 'SAR', description: 'Per month, billed monthly, excluding VAT. First month 185 SAR.' },
      { '@type': 'Offer', name: 'Jwero One (Qatari riyals)', price: '909', priceCurrency: 'QAR', description: 'Per month, billed monthly. First month 179 QAR.' },
      { '@type': 'Offer', name: 'Jwero One (pounds)', price: '199', priceCurrency: 'GBP', description: 'Per month, billed monthly, excluding VAT. First month 39 GBP.' },
      { '@type': 'Offer', name: 'Jwero One (euros)', price: '229', priceCurrency: 'EUR', description: 'Per month, billed monthly, excluding VAT. First month 45 EUR.' },
    ],
  },
  faqs,
  body: `
${L.hero({
  eyebrow: 'PRICING',
  h1: 'Three ways to work with Jwero.',
  sub: `Jwero One is the whole operating system — CRM, WhatsApp, catalogues, the counter, the workshop, schemes, the books and the AI workforce — for ${inr(PLAN.monthly)} a month, billed monthly. No per-module price, no per-seat price. Your first month is ${inr(PLAN.firstMonth)}.`,
  primary: { href: 'https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=pricing', label: `Start for ${inr(PLAN.firstMonth)}` },
  secondary: { href: '#', label: 'Let Jwero handle it', wa: 'handle' },
  note: `<span class="cur-switch" role="group" aria-label="Currency"><button type="button" data-cur-pick="inr">₹ INR</button><button type="button" data-cur-pick="aed">AED</button><button type="button" data-cur-pick="sar">SAR</button><button type="button" data-cur-pick="qar">QAR</button><button type="button" data-cur-pick="gbp">£ GBP</button><button type="button" data-cur-pick="eur">€ EUR</button><button type="button" data-cur-pick="usd">$ USD</button></span><br>Run it yourself: first month ${inr(PLAN.firstMonth)}, then ${inr(PLAN.monthly)} a month. Managed: no subscription, every tool included. Prices exclude taxes (GST in India).`,
})}


<div id="tiers"></div>${L.section(`${L.sectionHead('THREE WAYS TO BUY', 'Subscription, managed, or enterprise.', 'Below the three: the detail of the subscription for jewellers who run it themselves. Managed customers pay no subscription; every tool is included.')}${require('./jbaas').TIERS()}`, { tone: 'tint' })}
${L.section(`<div class="jb-quote2">${require('./positioning').quoteOne(0)}${require('./positioning').quoteOne(1)}</div>`)}
${L.section(
  `<div class="plans" data-plans>
    <div class="plan-grid">
      <div class="plan plan-one">
        <p class="plan-flag">First month ${inr(PLAN.firstMonth)}</p>
        <h2>Jwero One</h2>
        <p class="plan-desc">Everything Jwero does, in one plan. Turn off what you don’t use.</p>
        <p class="plan-price"><b>${inr(PLAN.monthly)}</b><span>/month</span></p>
        <p class="plan-term">${inr(PLAN.firstMonth)} for the first month, then ${inr(PLAN.monthly)}. Billed monthly, excluding taxes. Cancel any time.</p>
        <ul class="plan-list">
          <li>Every module included</li>
          <li>AI agents &amp; Smart AI</li>
          <li>3-year history; messages kept without a limit</li>
          <li>10 GB storage, 1 location, 2 POS registers</li>
          <li>No per-seat price for your team</li>
        </ul>
        <div class="cta-row"><a class="btn btn-primary" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=pricing-plan" rel="noopener" data-trial>Start for ${inr(PLAN.firstMonth)}</a><a class="btn btn-ghost" href="#" data-wa="pricing">Talk to us first</a></div>
      </div>
    </div>
    <p class="plans-note">The plan covers the whole platform. WhatsApp, SMS, AI and other per-use services are metered from your prepaid wallet at the rates below.</p>
  </div>`
)}

${L.section(
  `<div data-cur-only="usd" class="cur-note"><p><b>Outside India:</b> Jwero One is <b>₹18,000 a month</b>, first month ₹3,600, with one location and one brand. For more locations, brands or registers, <a href="#" data-wa="pricing">ask us for a quote in your currency</a>.</p></div><div data-cur-only="inr">${L.sectionHead('YOUR PRICE', 'Work out your own number.', 'One location and one brand are included. Add what you run.')}
  <div class="calc" id="calc-plan">
    <div class="calc-panel">
      <label for="pc-loc">Locations (stores, branches, workshops) <span class="calc-val" id="pc-loc-out"></span></label>
      <input type="range" id="pc-loc" min="1" max="30" step="1" value="1">
      <label for="pc-brand">Brands <span class="calc-val" id="pc-brand-out"></span></label>
      <input type="range" id="pc-brand" min="1" max="6" step="1" value="1">
      <label for="pc-reg">POS registers <span class="calc-val" id="pc-reg-out"></span></label>
      <input type="range" id="pc-reg" min="1" max="40" step="1" value="2">
      <label for="pc-cam">Showroom cameras <span class="calc-val" id="pc-cam-out"></span></label>
      <input type="range" id="pc-cam" min="0" max="30" step="1" value="0">
      <p class="sim-small" style="margin-top:18px">Capacity add-ons are monthly. Usage on the wallet — messages, AI, calls — is on top and depends on how much you send.</p>
    </div>
    <div class="calc-out">
      <div class="stat"><div class="stat-n" id="pc-plan">—</div><div class="stat-l">Jwero One, per month</div></div>
      <div class="stat"><div class="stat-n" id="pc-add">—</div><div class="stat-l" id="pc-add-l">capacity add-ons, per month</div></div>
      <div class="stat"><div class="stat-n" id="pc-total">—</div><div class="stat-l">a month, excluding taxes and wallet usage</div></div>
      <a class="btn btn-primary" id="pc-wa" href="#" style="width:100%;text-align:center">Send me this as a quote</a>
      <p class="cta-note" id="pc-ent" hidden>At this size, ask for Enterprise terms — the per-location price is negotiable for networks.</p>
    </div>
  </div></div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHAT’S INCLUDED', 'Every module. No tiers to climb.', 'Nothing here is an upsell. Switch off what you don’t use; it comes back the day you need it.')}
  <div class="grid grid-4 cells incl-grid">${MODULES.map(([t, h]) => `<a class="card incl" href="${h}">${L.icon(L.LINK_ICONS[h] || 'check')}<h3>${t}</h3></a>`).join('')}</div>
  <div class="incl-caps">${INCLUDED.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div>
  <p class="proof-caption">Your books are never deleted. Orders, invoices, payments, purchases, payroll and GST records are statutory and are kept on every plan.</p>

  <div style="margin-top:40px"></div>${L.sectionHead('THE WALLET', 'Pay for what you use, at rates you can read.', 'The plan is the platform. Anything that costs money each time it happens is metered from a prepaid wallet — the same rate card your billing screen shows.')}
  ${rateCard}`
, { tone: 'tint' })}




${L.section(
  `${L.sectionHead('WHY ONE PLAN', 'What the pile of tools costs you today.', 'Most jewellery businesses pay for five or six disconnected tools — plus the invisible cost: customers lost to silence.')}
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
  <p class="cta-note" style="margin-top:16px">Put your own numbers in: <a href="/erp-to-os/make-do">what making do costs</a> · <a href="/tools">the calculators</a>.</p>`
)}

${L.section(`${L.sectionHead('PRICING QUESTIONS', 'Straight answers on cost and terms.', '')}${L.faqBlock(faqs.concat(OBJECTIONS))}
<p class="cta-note" style="margin-top:14px">More objections? <a href="/faq#pricing">See every pricing question we’ve been asked →</a></p>`)}

${L.section(`${L.sectionHead('MANAGED PRICING', 'How the managed price is worked out.', 'When Jwero runs the work, there is no subscription and every tool is included. The price follows the work.')}
<ol class="pz-how pz-how-4"><li><span>01</span><b>Your volume</b><p>Conversations, calls, posts and orders, predicted from your customer base and showrooms, or counted from your own figures.</p></li><li><span>02</span><b>Today’s cost</b><p>What that work costs at the cheapest way to staff it in your market: a junior hire or a freelancer.</p></li><li><span>03</span><b>Jwero’s price</b><p>About half of that when you let Jwero decide and execute, and about 60% when you want to approve every step.</p></li><li><span>04</span><b>In writing</b><p>Your plan states the price, the work and what is measured before anything starts.</p></li></ol>
<p class="cta-note" style="text-align:center;margin-top:18px"><a class="btn btn-primary" href="/count-your-team">Count your team and see your number</a></p><p class="cta-note" style="text-align:center;margin-top:14px">Still deciding? <a href="#" data-wa="pricing">Ask us on WhatsApp</a>. Security and privacy delivered, just as you want: <a href="/trust/security">see how your data is protected</a>.</p>`, { tone: 'tint' })}
${require('./positioning').refer()}
`,
};

module.exports = [pricing];
module.exports.PLAN = PLAN;
