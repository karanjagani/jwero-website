const L = require('../lib');

const deadStockCalc = {
  slug: 'tools/dead-stock-calculator',
  title: 'Dead Stock Calculator for Jewellers — What Idle Inventory Costs | Jwero',
  description: 'Free calculator: enter your inventory value, dead-stock percentage and financing rate to see the monthly cost of idle jewellery stock. Results delivered on WhatsApp.',
  faqs: [
    { q: 'What counts as dead stock in jewellery?', a: 'A common working definition: pieces unsold after 180 days. Many businesses find 15–30% of inventory value sits in this band. Ageing analysis makes the real number visible.' },
    { q: 'How is the carrying cost calculated?', a: 'Dead value × (your financing rate + ~2.5% for insurance, storage and handling), per year. It excludes the opportunity cost of capital not invested in fast movers — so the true cost is higher than this estimate.' },
    { q: 'What does “freed capital” mean?', a: 'A realistic clearance program typically converts around 40% of dead value back into working capital within a season — through matched selling, rotation and disciplined markdowns with a metal-value floor.' },
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
      <select id="ds-cur"><option value="INR" selected>₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="AED">AED</option></select>

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
      <a class="btn btn-wa" id="ds-wa" href="#" target="_blank" rel="noopener" style="width:100%;text-align:center">Send my numbers to WhatsApp</a>
      <p class="cta-note">We reply with the playbook for your bracket — matched selling first, markdowns last.</p>
    </div>
  </div>`
)}

${L.section(
  `${L.sectionHead('AFTER THE NUMBER', 'Visibility is step one. Memory is step two.', 'Knowing the cost changes the conversation; moving the stock changes the balance sheet. Jwero exposes ageing by piece and branch, then matches idle designs to customers whose taste fits — so clearance happens by invitation, not desperation.')}
  <p><a class="btn btn-ghost" href="/solutions/dead-stock.html">Read the dead-stock playbook</a></p>`
, { tone: 'tint' })}
`,
};

const schemeCalc = {
  slug: 'tools/gold-scheme-calculator',
  title: 'Gold Scheme Calculator — What a Digital Scheme Book Is Worth | Jwero',
  description: 'Free calculator: see the yearly corpus and locked-in future revenue your gold savings scheme generates — and what digital collection discipline adds.',
  faqs: [
    { q: 'How does a savings scheme lock in revenue?', a: 'Members redeem their corpus at your counter — and typically spend more than the corpus when they do. The scheme book you build this year is next year’s guaranteed showcase traffic.' },
    { q: 'Why does digital collection increase completion?', a: 'Most scheme dropouts are drift, not decisions: a missed month nobody chased. Automated reminders on WhatsApp with payment links, plus AI voice follow-ups, catch the drift in week one instead of month four.' },
    { q: 'What is the redemption multiplier?', a: 'The average redemption basket versus corpus. Members usually add money at maturity to reach the piece they actually want — 1.3–1.5× corpus is a common planning range; the calculator uses 1.35×.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FREE TOOL',
  h1: 'The Gold Scheme Calculator',
  sub: 'Your scheme book is a revenue engine wearing a savings costume. See what your enrolment rate is worth in collected corpus and locked-in future sales — and what disciplined digital collection adds on top.',
})}

${L.section(
  `<div class="calc" id="calc-scheme">
    <div class="calc-panel">
      <label for="gs-cur">Currency</label>
      <select id="gs-cur"><option value="INR" selected>₹ INR</option><option value="USD">$ USD</option><option value="GBP">£ GBP</option><option value="AED">AED</option></select>

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
      <a class="btn btn-wa" id="gs-wa" href="#" target="_blank" rel="noopener" style="width:100%;text-align:center">Send my numbers to WhatsApp</a>
      <p class="cta-note">We reply with a scheme-digitisation plan — existing paper members included.</p>
    </div>
  </div>`
)}

${L.section(
  `${L.sectionHead('AFTER THE NUMBER', 'Run the promise properly.', 'Enrolment with KYC, reminders before every due date, transparent balances, OTP-verified maturity — the discipline that turns a leaky register into a compounding book.')}
  <p><a class="btn btn-ghost" href="/products/gold-schemes.html">See schemes in Jwero</a></p>`
, { tone: 'tint' })}
`,
};

module.exports = [deadStockCalc, schemeCalc];
