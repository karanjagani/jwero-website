const L = require('../lib');

const toolsIndex = {
  slug: 'tools',
  title: 'Tools & Calculators for Jewellery Business | Jwero',
  description: 'Free calculators that turn a felt pain into a number — dead stock, gold scheme value and more. Results delivered on WhatsApp, no email gate.',
  breadcrumbs: [['Home', '/'], ['Tools & Calculators']],
  body: `
${L.hero({
  eyebrow: 'TOOLS & CALCULATORS',
  h1: 'Four calculators that put a rupee figure on dead stock, gold loss, scheme revenue and unanswered WhatsApp.',
  sub: 'No email gate, no signup — sliders, a result, and the option to get it on WhatsApp. Assumptions are published so the math is yours to check.',
})}
${L.section(
  `${L.cards([
    { title: 'Dead Stock Calculator', text: 'What idle inventory is really costing your business every month.', link: { href: '/tools/dead-stock-calculator', label: 'Run it' } },
    { title: 'Gold Scheme Calculator', text: 'What your enrolment rate is worth in locked-in future revenue.', link: { href: '/tools/gold-scheme-calculator', label: 'Run it' } },
    { title: 'WhatsApp Revenue Estimator', text: 'What slow or missed WhatsApp replies are costing you in lost sales.', link: { href: '/tools/whatsapp-revenue-estimator', label: 'Run it' } },
    { title: 'Gold-Loss Calculator', text: 'What unexplained production loss is worth, before a per-stage ledger catches it.', link: { href: '/tools/gold-loss-calculator', label: 'Run it' } },
  ], 4)}`
)}
`,
};

const deadStockCalc = {
  slug: 'tools/dead-stock-calculator',
  title: 'Dead Stock Calculator for Jewellers: Cost of Idle Stock | Jwero',
  description: 'Free calculator: enter inventory value, dead-stock percentage and financing rate to see the monthly cost of idle stock. Results delivered on WhatsApp.',
  breadcrumbs: [['Home', '/'], ['Tools', '/tools'], ['Dead Stock Calculator']],
  faqs: [
    { q: 'What counts as dead stock in jewellery?', a: 'A common working definition: pieces unsold after 180 days. Many businesses find 15–30% of inventory value sits in this band. Ageing analysis makes the real number visible.' },
    { q: 'How is the carrying cost calculated?', a: 'Dead value × (your financing rate + ~2.5% for insurance, storage and handling), per year. It excludes the opportunity cost of capital not invested in fast movers — so the true cost is higher than this estimate.' },
    { q: 'What does “freed capital” mean?', a: 'It’s dead value converted back into working capital. A realistic clearance program typically recovers around 40% of it within a season, through matched selling, rotation and disciplined markdowns with a metal-value floor.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FREE TOOL',
  h1: 'The Dead Stock Calculator',
  sub: 'Sixty seconds to the number no report shows you: what your sleeping inventory costs every month. Defaults are set to typical mid-size figures — drag the sliders to yours.',
})}

${L.section(
  `<div class="calc" id="calc-deadstock">
    <div class="calc-panel">
      <label for="ds-cur">Currency</label>
      <select id="ds-cur"><option value="INR" selected>₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="AED">AED</option><option value="EUR">€ EUR</option></select>

      <label for="ds-value">Total inventory value <span class="calc-val"><span id="ds-value-out"></span> thousand</span></label>
      <input type="range" id="ds-value" min="500" max="500000" step="500" value="30000">

      <label for="ds-pct">Share unsold for 180+ days <span class="calc-val" id="ds-pct-out"></span></label>
      <input type="range" id="ds-pct" min="5" max="60" step="1" value="22">

      <label for="ds-rate">Your financing / capital rate (yearly) <span class="calc-val" id="ds-rate-out"></span></label>
      <input type="range" id="ds-rate" min="6" max="24" step="0.5" value="12">

      <details class="assumptions" style="margin-top:22px">
        <summary>Assumptions (editable thinking)</summary>
        <p style="margin-top:10px">Carrying cost = dead value × (financing rate + 2.5% insurance/storage/handling). Freed capital assumes a 40% recovery through matched selling and disciplined clearance. Opportunity cost of capital is deliberately excluded — the true number is higher.</p>
      </details>
    </div>
    <div class="calc-out">
      <div class="stat"><div class="stat-n" id="ds-dead">—</div><div class="stat-l">capital locked in dead stock</div></div>
      <div class="stat"><div class="stat-n" id="ds-monthly">—</div><div class="stat-l">bleeding away every month</div></div>
      <div class="stat"><div class="stat-n" id="ds-yearly">—</div><div class="stat-l">every year, silently</div></div>
      <div class="stat"><div class="stat-n" id="ds-freed">—</div><div class="stat-l">realistic freed capital with a clearance program</div></div>
      <a class="btn btn-wa" id="ds-wa" href="#" target="_blank" rel="noopener" style="width:100%;text-align:center">Send my numbers to Jwero</a>
      <p class="cta-note">We reply with the playbook for your bracket — matched selling first, markdowns last.</p>
    </div>
  </div>`
)}

${L.section(
  `${L.sectionHead('AFTER THE NUMBER', 'Visibility is step one. Memory is step two.', 'Knowing the cost changes the conversation; moving the stock changes the balance sheet. Jwero exposes ageing by piece and branch, then matches idle designs to customers whose taste fits. Clearance happens by invitation, not desperation.')}
  <p><a class="btn btn-ghost" href="/solutions/pain/dead-stock">Read the dead-stock playbook</a></p>
  <p class="cta-note" style="margin-top:14px">Prefer the long read? <a href="/blog/dead-stock-jewellery-business-guide">The complete dead-stock guide for jewellery businesses →</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CALCULATOR QUESTIONS', 'What counts as dead stock, and how it’s costed.', '')}${L.faqBlock([
  { q: 'What counts as dead stock in jewellery?', a: 'A common working definition: pieces unsold after 180 days. Ageing analysis makes the real number visible per business.' },
  { q: 'How is the carrying cost calculated?', a: 'Dead value × (your financing rate + ~2.5% insurance/storage/handling), per year — see the assumptions above the result.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
`,
};

const schemeCalc = {
  slug: 'tools/gold-scheme-calculator',
  title: 'Gold Scheme Calculator — What a Digital Scheme Book Is Worth | Jwero',
  description: 'Free calculator: see the yearly corpus and locked-in future revenue your gold savings scheme generates — and what digital collection discipline adds.',
  breadcrumbs: [['Home', '/'], ['Tools', '/tools'], ['Gold Scheme Calculator']],
  faqs: [
    { q: 'How does a savings scheme lock in revenue?', a: 'Members redeem their corpus at your counter — and typically spend more than the corpus when they do. The scheme book you build this year is next year’s guaranteed showcase traffic.' },
    { q: 'Why does digital collection increase completion?', a: 'Most scheme dropouts are drift, not decisions: a missed month nobody chased. Automated reminders on WhatsApp with payment links, plus AI voice follow-ups, catch the drift in week one instead of month four.' },
    { q: 'What is the redemption multiplier?', a: 'The average redemption basket versus corpus. Members usually add money at maturity to reach the piece they want — 1.3–1.5× corpus is a common planning range; the calculator uses 1.35×.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FREE TOOL',
  h1: 'The Gold Scheme Calculator',
  sub: 'Your scheme book is a revenue engine wearing a savings costume. See what your enrolment rate is worth in collected corpus and locked-in future sales. Then see what disciplined digital collection adds on top.',
})}

${L.section(
  `<div class="calc" id="calc-scheme">
    <div class="calc-panel">
      <label for="gs-cur">Currency</label>
      <select id="gs-cur"><option value="INR" selected>₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="AED">AED</option><option value="EUR">€ EUR</option></select>

      <label for="gs-enrol">New members enrolled per month <span class="calc-val" id="gs-enrol-out"></span></label>
      <input type="range" id="gs-enrol" min="5" max="500" step="5" value="40">

      <label for="gs-inst">Average monthly instalment <span class="calc-val" id="gs-inst-out"></span></label>
      <input type="range" id="gs-inst" min="500" max="50000" step="500" value="5000">

      <label for="gs-uplift">Completion uplift from digital collection <span class="calc-val" id="gs-uplift-out"></span></label>
      <input type="range" id="gs-uplift" min="5" max="30" step="1" value="15">

      <details class="assumptions" style="margin-top:22px">
        <summary>Assumptions (editable thinking)</summary>
        <p style="margin-top:10px">Classic 11-instalment plan shape. Corpus = enrolments × 12 months × instalment × 11. Locked-in revenue = corpus × 1.35 average redemption basket. Uplift applies reminder-driven completion gains to that locked-in revenue; 10–20% is the typical planning band when moving from paper registers to automated collection.</p>
      </details>
    </div>
    <div class="calc-out">
      <div class="stat"><div class="stat-n" id="gs-corpus">—</div><div class="stat-l">corpus collected per year</div></div>
      <div class="stat"><div class="stat-n" id="gs-locked">—</div><div class="stat-l">locked-in future revenue (redemptions)</div></div>
      <div class="stat"><div class="stat-n" id="gs-uplift-val">—</div><div class="stat-l">added by digital collection discipline</div></div>
      <a class="btn btn-wa" id="gs-wa" href="#" target="_blank" rel="noopener" style="width:100%;text-align:center">Send my numbers to Jwero</a>
      <p class="cta-note">We reply with a scheme-digitisation plan — existing paper members included.</p>
    </div>
  </div>`
)}

${L.section(
  `${L.sectionHead('AFTER THE NUMBER', 'Run the promise properly.', 'Enrolment with KYC, reminders before every due date, transparent balances, OTP-verified maturity — the discipline that turns a leaky register into a compounding book.')}
  <p><a class="btn btn-ghost" href="/products/gold-schemes">See schemes in Jwero</a></p>
  <p class="cta-note" style="margin-top:14px">Want the full picture first? <a href="/blog/gold-savings-scheme-guide">Read the practical guide to running a gold savings scheme digitally →</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CALCULATOR QUESTIONS', 'How the scheme numbers work.', '')}${L.faqBlock([
  { q: 'How does a savings scheme lock in revenue?', a: 'Members redeem their corpus at your counter — and typically spend more than the corpus when they do.' },
  { q: 'Why does digital collection increase completion?', a: 'Most scheme dropouts come from drift rather than decisions. Automated reminders catch the drift in week one instead of month four.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
`,
};

const waRevenueCalc = {
  slug: 'tools/whatsapp-revenue-estimator',
  title: 'WhatsApp Revenue Estimator for Jewellers | Jwero',
  description: 'Free calculator: enter your monthly WhatsApp enquiries, average order value and current reply speed to see the revenue slow or missed replies are costing you.',
  breadcrumbs: [['Home', '/'], ['Tools', '/tools'], ['WhatsApp Revenue Estimator']],
  faqs: [
    { q: 'Where do the close-rate numbers come from?', a: 'They’re editable planning assumptions, not a published study — 15% close rate for enquiries replied to within an hour, 3% for enquiries replied to slowly or missed, are common starting points. Change them to match your own experience; the result updates instantly.' },
    { q: 'Is 95% reply coverage realistic?', a: 'That’s the target coverage a first-response AI draft (approved by your team before sending) is built to reach — instant drafting removes the “nobody was free to reply” gap that slow coverage usually comes from.' },
    { q: 'Does this account for enquiries that were never going to buy?', a: 'No — it assumes your enquiry volume and its buying intent stay constant, and only measures what changes when the reply gets faster and more consistent. It’s a directional estimate, not a forecast.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FREE TOOL',
  h1: 'The WhatsApp Revenue Estimator',
  sub: 'Every enquiry that waits too long for a reply is a sale that might already be happening somewhere else. See what that’s worth in your business — defaults are editable planning assumptions rather than a published study.',
})}

${L.section(
  `<div class="calc" id="calc-warevenue">
    <div class="calc-panel">
      <label for="wr-cur">Currency</label>
      <select id="wr-cur"><option value="INR" selected>₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="AED">AED</option><option value="EUR">€ EUR</option></select>

      <label for="wr-enq">WhatsApp enquiries per month <span class="calc-val" id="wr-enq-out"></span></label>
      <input type="range" id="wr-enq" min="20" max="3000" step="10" value="200">

      <label for="wr-aov">Average order value <span class="calc-val" id="wr-aov-out"></span></label>
      <input type="range" id="wr-aov" min="5000" max="300000" step="1000" value="35000">

      <label for="wr-reply">Share replied to within an hour, today <span class="calc-val" id="wr-reply-out"></span></label>
      <input type="range" id="wr-reply" min="5" max="90" step="1" value="35">

      <details class="assumptions" style="margin-top:22px">
        <summary>Assumptions (editable thinking)</summary>
        <p style="margin-top:10px">Close rate: 15% for enquiries replied to within an hour, 3% for enquiries replied to slowly or missed — a common planning range rather than a published study; edit to your own experience. Target with AI-drafted first response: 95% of enquiries replied to within minutes, each draft still approved by your team before it sends.</p>
      </details>
    </div>
    <div class="calc-out">
      <div class="stat"><div class="stat-n" id="wr-current">—</div><div class="stat-l">revenue you’re converting today</div></div>
      <div class="stat"><div class="stat-n" id="wr-potential">—</div><div class="stat-l">revenue possible at 95% fast-reply coverage</div></div>
      <div class="stat"><div class="stat-n" id="wr-gap-mo">—</div><div class="stat-l">left on the table every month</div></div>
      <div class="stat"><div class="stat-n" id="wr-gap-yr">—</div><div class="stat-l">left on the table every year</div></div>
      <a class="btn btn-wa" id="wr-wa" href="#" target="_blank" rel="noopener" style="width:100%;text-align:center">Send my numbers to Jwero</a>
      <p class="cta-note">We reply with what fast, consistent coverage would take to set up for your volume.</p>
    </div>
  </div>`
)}

${L.section(
  `${L.sectionHead('AFTER THE NUMBER', 'The gap is a reply-speed problem, not a staffing problem.', 'Hiring more people to answer WhatsApp faster doesn’t scale evenly with enquiry volume. An AI-drafted first response reaches near-instant coverage at any volume. Your team still approves every message before it sends, so nothing goes out unchecked.')}
  <p><a class="btn btn-ghost" href="/products/whatsapp">See WhatsApp Commerce in Jwero</a></p>
  <p class="cta-note" style="margin-top:14px">New to selling this way? <a href="/blog/whatsapp-for-jewellers-guide">Read the complete WhatsApp guide for jewellers →</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CALCULATOR QUESTIONS', 'Where the estimate’s assumptions come from.', '')}${L.faqBlock([
  { q: 'Where do the close-rate numbers come from?', a: 'They’re editable planning assumptions, drawn from common experience rather than a published study — change them above to match your own.' },
  { q: 'Is 95% reply coverage realistic?', a: 'That’s the target an AI-drafted first response is built to reach, with every draft still approved by your team before it sends.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
`,
};

const goldLossCalc = {
  slug: 'tools/gold-loss-calculator',
  title: 'Gold Loss Calculator for Jewellery Manufacturers | Jwero',
  description: 'Free calculator: enter your monthly production weight, gold rate and the gap between observed and explained loss to see what unexplained wastage costs.',
  breadcrumbs: [['Home', '/'], ['Tools', '/tools'], ['Gold-Loss Calculator']],
  faqs: [
    { q: 'Is this based on an industry-average loss rate?', a: 'No — this is a self-assessment tool. You enter your own observed stocktake loss and the loss you can currently explain per stage; there’s no fabricated industry benchmark behind the defaults.' },
    { q: 'Does a WIP ledger reduce physical gold loss by itself?', a: 'No — recording where fine weight goes doesn’t stop metal loss during casting, filing or polishing. What it does is flag abnormal loss the day it happens, by stage and by hand, instead of only at annual stocktake when it’s too late to trace.' },
    { q: 'What counts as "explained" loss?', a: 'Loss you already track against a per-stage norm — expected casting sprue, filing dust, polishing loss. "Unexplained" is the gap between that and what stocktake shows.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FREE TOOL',
  h1: 'The Gold-Loss Calculator',
  sub: 'The gap between what stocktake shows and what you can explain per stage — priced in today’s gold rate. This is a self-assessment: enter your own numbers, not an industry benchmark.',
})}

${L.section(
  `<div class="calc" id="calc-goldloss">
    <div class="calc-panel">
      <label for="gl-cur">Currency</label>
      <select id="gl-cur"><option value="INR" selected>₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="AED">AED</option><option value="EUR">€ EUR</option></select>

      <label for="gl-vol">Monthly production / job-work volume (grams) <span class="calc-val" id="gl-vol-out"></span></label>
      <input type="range" id="gl-vol" min="100" max="100000" step="100" value="8000">

      <label for="gl-rate">Gold rate, per gram <span class="calc-val" id="gl-rate-out"></span></label>
      <input type="range" id="gl-rate" min="3000" max="12000" step="50" value="6500">

      <label for="gl-observed">Total loss seen at stocktake <span class="calc-val" id="gl-observed-out"></span></label>
      <input type="range" id="gl-observed" min="0.5" max="6" step="0.1" value="3.2">

      <label for="gl-explained">Loss you can explain per stage today <span class="calc-val" id="gl-explained-out"></span></label>
      <input type="range" id="gl-explained" min="0.2" max="5" step="0.1" value="1.5">

      <details class="assumptions" style="margin-top:22px">
        <summary>Assumptions (editable thinking)</summary>
        <p style="margin-top:10px">Unexplained loss = total loss observed at stocktake − loss you can currently explain per stage, applied to your monthly volume. This is your own self-assessment, rather than an industry-average benchmark. A per-stage WIP ledger doesn’t reduce physical loss on its own: it makes the unexplained portion visible the day it happens, not just at annual stocktake.</p>
      </details>
    </div>
    <div class="calc-out">
      <div class="stat"><div class="stat-n" id="gl-grams">—</div><div class="stat-l">unaccounted grams per month</div></div>
      <div class="stat"><div class="stat-n" id="gl-monthly">—</div><div class="stat-l">value lost every month</div></div>
      <div class="stat"><div class="stat-n" id="gl-yearly">—</div><div class="stat-l">value lost every year</div></div>
      <a class="btn btn-wa" id="gl-wa" href="#" target="_blank" rel="noopener" style="width:100%;text-align:center">Send my numbers to Jwero</a>
      <p class="cta-note">We reply with how per-stage loss tracking would flag this in your workflow.</p>
    </div>
  </div>`
)}

${L.section(
  `${L.sectionHead('AFTER THE NUMBER', 'Visibility, stage by stage, beyond the annual stocktake.', 'An append-only work-in-progress ledger tracks fine weight through casting, filing, setting and polishing, with a loss norm per stage. Abnormal loss gets flagged the day it happens, with the stage and the hands it happened in — instead of surfacing as an unexplained gap once a year.')}
  <p><a class="btn btn-ghost" href="/solutions/manufacturers">See the manufacturing spine in Jwero</a></p>
  <p class="cta-note" style="margin-top:14px">Want the method behind the number? <a href="/blog/gold-loss-wastage-control-jewellery-manufacturing">Read the guide to gold-loss and wastage control in manufacturing →</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CALCULATOR QUESTIONS', 'What these loss numbers do and don’t assume.', '')}${L.faqBlock([
  { q: 'Is this based on an industry-average loss rate?', a: 'No — enter your own observed and explained loss; there’s no fabricated benchmark behind the defaults.' },
  { q: 'Does a WIP ledger reduce physical gold loss by itself?', a: 'No — it flags abnormal loss the day it happens, by stage, instead of only at annual stocktake.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
`,
};

module.exports = [toolsIndex, deadStockCalc, schemeCalc, waRevenueCalc, goldLossCalc];
