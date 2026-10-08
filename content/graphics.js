// Explainer graphics (2026-10-08). Every graphic is HTML with its words in the
// page, so search engines and answer engines read the same text a visitor sees.
// Motion is added by site.js ([data-gfx] gets .gfx-arm, then .is-in on view);
// without JS or with reduced motion, each graphic shows its final state.
const { icon } = require('../lib');

// Three ways to work with Jwero, at a glance. Sits above the three tier cards.
const TG_ROWS = [
  ['users', 'Who does the work'],
  ['shield', 'Where it runs'],
  ['coins', 'How you pay'],
  ['check', 'Who approves'],
];
const TG_COLS = [
  ['01', 'Run it yourself', 'tier-1', ['Your team, with Jwero’s AI', 'Jwero’s cloud', 'Monthly, every module', 'You']],
  ['02', 'Let Jwero run it', 'tier-2', ['Jwero’s specialists and AI', 'Jwero’s cloud', 'On the work, no subscription', 'You, on what matters']],
  ['03', 'Your own Jwero', 'tier-3', ['Your team, on your rules', 'Your servers or your cloud', 'Once, a one-time licence', 'Your policies']],
];
const tierGlance = () => `
<div class="tg" data-gfx>
  <div class="tg-scale" aria-hidden="true"><span>You run it</span><i><b></b></i><span>Jwero runs it</span></div>
  <div class="tg-grid" role="table" aria-label="The three ways to work with Jwero, compared">
    <div class="tg-row tg-headrow" role="row"><span class="tg-lab" role="columnheader"></span>${TG_COLS.map(([n, t, id]) => `<a class="tg-col tg-h" role="columnheader" href="#${id}"><em>${n}</em><b>${t}</b></a>`).join('')}</div>
    ${TG_ROWS.map(([ic, lab], r) => `<div class="tg-row" role="row" style="--r:${r}"><span class="tg-lab" role="rowheader">${icon(ic)}${lab}</span>${TG_COLS.map(([, , , cells], c) => `<span class="tg-cell${c === 1 ? ' is-mid' : ''}" role="cell" style="--c:${c}"><small>${lab}</small>${cells[r]}</span>`).join('')}</div>`).join('')}
  </div>
</div>`;

// Enterprise: what runs where when Jwero is self-hosted.
const selfHostMap = () => `
<figure class="shm" data-gfx aria-labelledby="shm-cap">
  <div class="shm-yours">
    <p class="shm-k">${icon('shield')} Your servers or your cloud</p>
    <ul class="shm-mods">${['Counter and POS', 'Stock', 'Customers', 'Schemes', 'Gold loans', 'Workshop', 'Books', 'Team', 'Marketing', 'AI models, local or yours'].map((m, i) => `<li style="--i:${i}">${m}</li>`).join('')}</ul>
    <p class="shm-pol">${['Your access rules and SSO', 'Your backups', 'Your audits and retention'].map((p) => `<span>${icon('check')}${p}</span>`).join('')}</p>
  </div>
  <div class="shm-side">
    <div class="shm-out">
      <p class="shm-k">${icon('send')} Reaches out only for</p>
      <ul><li>WhatsApp messaging</li><li>AI calling and telephony</li><li>Payment gateways</li></ul>
      <span class="shm-wire" aria-hidden="true"></span>
    </div>
    <div class="shm-jw">
      <p class="shm-k">${icon('gem')} Jwero</p>
      <p><b>No access to your data.</b> No recurring fee. Support only if you choose it.</p>
      <span class="shm-cut" aria-hidden="true"></span>
    </div>
  </div>
  <figcaption id="shm-cap">Everything runs inside your own infrastructure. Only the channels that need the internet reach out, and Jwero has no line into your data.</figcaption>
</figure>`;

// Enterprise: the group, brand and branch hierarchy with scoped access.
const hierarchyTree = () => `
<figure class="htree" data-gfx aria-label="Group, brand and branch hierarchy with access scoped at each level">
  <ul class="ht-l0"><li><span class="ht-node is-group">${icon('layers')}<b>Your group</b><em>Owner sees everything</em></span>
    <ul class="ht-l1">
      <li><span class="ht-node">${icon('badge')}<b>Brand A</b><em>Brand head sees Brand A</em></span>
        <ul class="ht-l2"><li><span class="ht-node is-sm">${icon('store')}<b>Branch 1</b><em>Branch manager</em></span></li><li><span class="ht-node is-sm">${icon('store')}<b>Branch 2</b><em>Branch manager</em></span></li></ul></li>
      <li><span class="ht-node">${icon('badge')}<b>Brand B</b><em>Brand head sees Brand B</em></span>
        <ul class="ht-l2"><li><span class="ht-node is-sm">${icon('store')}<b>Branch 3</b><em>Branch manager</em></span></li><li><span class="ht-node is-sm">${icon('store')}<b>Branch 4</b><em>Branch manager</em></span></li></ul></li>
    </ul></li></ul>
</figure>`;

// Pricing: the pile of tools collapsing into one plan.
const toolCollapse = (tools) => `
<figure class="tcol" data-gfx aria-labelledby="tcol-cap">
  <ul class="tcol-pile">${tools.map((t, i) => `<li style="--i:${i}">${t}</li>`).join('')}</ul>
  <span class="tcol-arrow" aria-hidden="true">${icon('arrow')}</span>
  <div class="tcol-one"><span class="tcol-mark">${icon('gem')}</span><b>Jwero One</b><span>One record, every module, one price</span></div>
  <figcaption id="tcol-cap" class="sr-only">${tools.length} separate tools become one plan.</figcaption>
</figure>`;

// Worldwide: pick a market and see what changes. Every panel is in the page.
const MKT = [
  ['gulf', 'The Gulf', [['Currency', 'Dirhams, Saudi and Qatari riyals'], ['Tax', 'GCC VAT on every invoice'], ['Gold rate', 'Live, by the gram or tola'], ['Languages', 'Arabic and English'], ['Payments', 'Stripe and PayPal']], '/jewellery-software-uae'],
  ['ukeu', 'UK and Europe', [['Currency', 'Pounds and euros'], ['Tax', 'UK VAT and EU VAT'], ['Gold rate', 'Live, by the gram or ounce'], ['Languages', 'English, French and Spanish'], ['Payments', 'Stripe and PayPal']], '/jewellery-software-uk'],
  ['usca', 'US and Canada', [['Currency', 'US dollars'], ['Tax', 'US sales tax; Canada, ask us'], ['Gold rate', 'Live, by the ounce or gram'], ['Languages', 'English, Spanish and French'], ['Payments', 'Stripe and PayPal']], '/jewellery-software-usa'],
  ['sea', 'South and Southeast Asia', [['Currency', 'Your local currency'], ['Tax', 'Ask us for your country'], ['Gold rate', 'Live, by the gram or tola'], ['Languages', 'English and 13 more'], ['Payments', 'Stripe and PayPal']], '/jewellery-software-singapore'],
  ['in', 'India', [['Currency', 'Rupees'], ['Tax', 'GST, with the Tally bridge'], ['Gold rate', 'Live, by the gram'], ['Languages', 'Hindi and 9 Indian languages, with English'], ['Payments', 'Razorpay, Cashfree and UPI']], '/jewellery-software-india'],
];
const MKT_IC = { Currency: 'coins', Tax: 'receipt', 'Gold rate': 'trend', Languages: 'chat', Payments: 'wallet' };
const marketPicker = () => `
<div class="mkp" data-gfx data-mkp>
  <div class="mkp-tabs" role="tablist" aria-label="Pick a market">${MKT.map(([k, t], i) => `<button type="button" role="tab" id="mkp-t-${k}" aria-controls="mkp-p-${k}" aria-selected="${i ? 'false' : 'true'}"${i ? ' tabindex="-1"' : ''}>${t}</button>`).join('')}</div>
  ${MKT.map(([k, t, rows, href], i) => `<div class="mkp-panel" role="tabpanel" id="mkp-p-${k}" aria-labelledby="mkp-t-${k}"${i ? ' hidden' : ''}>
    <h3 class="sr-only">Jwero in ${t}</h3>
    <ul class="mkp-rows">${rows.map(([l, v], r) => `<li style="--r:${r}">${icon(MKT_IC[l])}<small>${l}</small><b>${v}</b></li>`).join('')}</ul>
    <a class="btn-text" href="${href}">See Jwero for ${t.replace(/^The /, 'the ')} →</a>
  </div>`).join('')}
</div>`;

// Platform: what crosses the Tally bridge.
const TALLY = [['Sales bill', 'Sales voucher'], ['Return', 'Credit note'], ['Payment received', 'Receipt'], ['Expense', 'Payment voucher']];
const tallyFlow = () => `
<figure class="tfl" data-gfx aria-labelledby="tfl-cap">
  <div class="tfl-end"><p class="tfl-k">${icon('gem')} In Jwero</p><ul>${TALLY.map(([a], i) => `<li style="--i:${i}">${a}</li>`).join('')}</ul></div>
  <div class="tfl-bridge" aria-hidden="true">${TALLY.map((_, i) => `<span style="--i:${i}"><i></i></span>`).join('')}<em>Tally bridge</em></div>
  <div class="tfl-end is-tally"><p class="tfl-k">${icon('book')} In Tally</p><ul>${TALLY.map(([, b], i) => `<li style="--i:${i}">${b}</li>`).join('')}</ul></div>
  <figcaption id="tfl-cap">Each entry made in Jwero reaches Tally as the matching voucher, so your accountant never retypes a bill.</figcaption>
</figure>`;

module.exports = { tierGlance, selfHostMap, hierarchyTree, toolCollapse, marketPicker, tallyFlow };
