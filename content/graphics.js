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

// Platform: what crosses the Tally bridge (auto-posting confirmed by Jwero, 2026-10-08).
const TALLY = [['Sales bill', 'Sales voucher'], ['Return', 'Credit note'], ['Payment received', 'Receipt'], ['Customer and item masters', 'Matched, not retyped']];
const tallyFlow = () => `
<figure class="tfl" data-gfx aria-labelledby="tfl-cap">
  <div class="tfl-end"><p class="tfl-k">${icon('gem')} In Jwero</p><ul>${TALLY.map(([a], i) => `<li style="--i:${i}">${a}</li>`).join('')}</ul></div>
  <div class="tfl-bridge" aria-hidden="true">${TALLY.map((_, i) => `<span style="--i:${i}"><i></i></span>`).join('')}<em>Tally bridge</em></div>
  <div class="tfl-end is-tally"><p class="tfl-k">${icon('book')} In Tally</p><ul>${TALLY.map(([, b], i) => `<li style="--i:${i}">${b}</li>`).join('')}</ul></div>
  <figcaption id="tfl-cap">Bills, returns and payments post to Tally automatically as vouchers through a local connector, so your accountant reviews entries instead of retyping them.</figcaption>
</figure>`;

// Enterprise: the technical layer as a stack. The detailed table stays below.
const STACK_L = [
  ['key', 'Identity', ['SSO with OIDC or SAML 2.0', 'SCIM 2.0 provisioning']],
  ['users', 'Access', ['150+ permissions', '5 role templates, clone and edit']],
  ['vault', 'Data', ['Backups every 1 to 168 hours', 'Retention 1 to 365 days']],
  ['flow', 'Integrations', ['Signed webhooks with retries', 'MCP server for your AI agents']],
  ['bot', 'AI governance', ['6 autonomy levels', '5-scope kill switch']],
  ['shield', 'Protection', ['Layered API rate limits', 'Encrypted in transit and at rest']],
];
const techStack = () => `
<figure class="tst" data-gfx aria-label="The technical layer, from identity to protection">
  ${STACK_L.map(([ic, t, items], i) => `<div class="tst-l" style="--i:${i}"><span class="tst-n">${icon(ic)}<b>${t}</b></span><span class="tst-items">${items.map((x) => `<em>${x}</em>`).join('')}</span></div>`).join('')}
</figure>`;

// Platform hub hero: one record with every department around it.
const ORBIT = [['till', 'Counter'], ['chat', 'WhatsApp'], ['box', 'Stock'], ['truck', 'Purchase'], ['tools', 'Workshop'], ['book', 'Books'], ['users', 'Team'], ['megaphone', 'Marketing']];
const orbit = () => `
<figure class="orb" data-gfx aria-label="One record at the centre, with every department reading and writing it">
  <div class="orb-ring" aria-hidden="true"></div>
  <div class="orb-core"><b>One record</b><span>customers · stock · cash · team</span></div>
  <ul class="orb-nodes">${ORBIT.map(([ic, t], i) => `<li style="--i:${i}"><span>${icon(ic)}</span>${t}</li>`).join('')}</ul>
</figure>`;

// Integrations: the stack around Jwero, grouped.
const INTG = [
  ['book', 'Accounting', ['Tally Prime', 'Zoho Books']],
  ['wallet', 'Payments', ['Stripe', 'PayPal', 'Razorpay', 'Cashfree']],
  ['store', 'Ecommerce', ['Shopify', 'WooCommerce', 'Unicommerce']],
  ['chat', 'Meta and Google', ['WhatsApp Business Platform', 'Instagram', 'Facebook', 'Google Shopping']],
  ['phone', 'Calls', ['Your telephony provider']],
  ['bot', 'AI', ['MCP server', 'Your own models']],
];
const integrationMap = () => `
<figure class="imap" data-gfx aria-label="What Jwero connects to, grouped by kind">
  <div class="imap-core"><span>${icon('gem')}</span><b>Jwero</b></div>
  <div class="imap-groups">${INTG.map(([ic, t, items], i) => `<div class="imap-g" style="--i:${i}"><p>${icon(ic)}${t}</p><ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul></div>`).join('')}</div>
</figure>`;

// Showroom: visitors counted at the door, matched to bills, walkouts flagged.
const showroomHeat = () => `
<figure class="heat" data-gfx aria-labelledby="heat-cap">
  <svg viewBox="0 0 600 300" role="img" aria-label="Showroom floor plan: visitors counted at the door camera, some reach a counter and buy, others walk out">
    <rect x="10" y="10" width="580" height="280" rx="14" class="heat-floor"/>
    <rect x="40" y="30" width="200" height="44" rx="8" class="heat-ctr"/><text x="140" y="57" class="heat-t">Gold counter</text>
    <rect x="360" y="30" width="200" height="44" rx="8" class="heat-ctr is-bill"/><text x="460" y="57" class="heat-t">Bridal counter · billed</text>
    <rect x="40" y="130" width="44" height="120" rx="8" class="heat-ctr"/>
    <rect x="516" y="130" width="44" height="120" rx="8" class="heat-ctr"/>
    <rect x="250" y="278" width="100" height="12" rx="4" class="heat-door"/><text x="300" y="266" class="heat-t heat-s">Door camera counts</text>
    <path id="hp1" class="heat-path" d="M285 280 C 285 200, 420 160, 455 82"/>
    <path id="hp2" class="heat-path is-out" d="M315 280 C 330 200, 200 150, 150 82 C 140 140, 320 200, 318 284"/>
    <circle r="7" class="heat-dot"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#hp1"/></animateMotion></circle>
    <circle r="7" class="heat-dot is-out"><animateMotion dur="6s" begin="1s" repeatCount="indefinite"><mpath href="#hp2"/></animateMotion></circle>
    <circle r="7" class="heat-dot"><animateMotion dur="4s" begin="2s" repeatCount="indefinite"><mpath href="#hp1"/></animateMotion></circle>
  </svg>
  <ul class="heat-tally"><li><b>Visitors</b><span>counted at the door</span></li><li class="is-bill"><b>Bought</b><span>matched to a bill</span></li><li class="is-out"><b>Walked out</b><span>flagged for a follow-up</span></li></ul>
  <figcaption id="heat-cap"><b>Illustrative.</b> The cameras you already have count who comes in; Jwero matches them to bills and shows who walked out without buying.</figcaption>
</figure>`;

// Market pages: the market's own card, shown in the hero.
const marketCard = (key) => { const m = MKT.find((x) => x[0] === key); if (!m) return ''; const [, t, rows] = m; return `
<div class="mkp mkp-hero" data-gfx aria-label="Jwero in ${t}, at a glance">
  <p class="mkp-k">${icon('gem')} Jwero in ${t}</p>
  <ul class="mkp-rows">${rows.map(([l, v], r) => `<li style="--r:${r}">${icon(MKT_IC[l])}<small>${l}</small><b>${v}</b></li>`).join('')}</ul>
</div>`; };

module.exports = { marketCard, tierGlance, selfHostMap, hierarchyTree, toolCollapse, marketPicker, tallyFlow, techStack, orbit, integrationMap, showroomHeat };
