// Shared HTML helpers for the Jwero marketing site build.
// All helpers return HTML strings; content modules compose them.
// URL convention: extensionless canonical paths everywhere (e.g. "/products/whatsapp").

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Hero with optional right-side product mock.
function hero({ eyebrow, h1, sub, primary, secondary, note, mock }) {
  return `
<section class="hero">
  <div class="container hero-grid${mock ? '' : ' hero-solo'}">
    <div class="hero-copy">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h1>${h1}</h1>
      <p class="sub">${sub}</p>
      <div class="cta-row">
        ${primary ? `<a class="btn btn-primary" href="${primary.href}" ${primary.wa ? `data-wa="${esc(primary.wa)}"` : ''}>${primary.label}</a>` : ''}
        ${secondary ? `<a class="btn btn-ghost" href="${secondary.href}">${secondary.label}</a>` : ''}
      </div>
      ${note ? `<p class="cta-note">${note}</p>` : ''}
    </div>
    ${mock ? `<div class="hero-mock">${mock}</div>` : ''}
  </div>
</section>`;
}

function sectionHead(eyebrow, title, lead) {
  return `
    <div class="section-head">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h2>${title}</h2>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>`;
}

function section(inner, opts = {}) {
  const cls = ['section', opts.tone ? `section-${opts.tone}` : ''].filter(Boolean).join(' ');
  return `<section class="${cls}"${opts.id ? ` id="${opts.id}"` : ''}><div class="container">${inner}</div></section>`;
}

// Breadcrumb nav — every page below home carries one. trail: [[label,href],...,[label]] (last = current, no href)
function breadcrumbs(trail) {
  return `<nav class="crumbs" aria-label="Breadcrumb"><div class="container">${trail
    .map(([label, href], i) =>
      href ? `<a href="${href}">${label}</a><span class="crumb-sep">/</span>` : `<span aria-current="page">${label}</span>`
    )
    .join('')}</div></nav>`;
}
function breadcrumbSchema(trail, site) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: trail.map(([label, href], i) => ({
      '@type': 'ListItem', position: i + 1, name: label,
      ...(href ? { item: site + href } : {}),
    })),
  };
}

// Grid of simple cards: [{icon,title,text}]
function cards(items, cols = 3) {
  return `<div class="grid grid-${cols}">${items
    .map(
      (c) => `
    <div class="card">
      ${c.icon ? `<div class="card-icon">${c.icon}</div>` : ''}
      <h3>${c.title}</h3>
      <p>${c.text}</p>
      ${c.link ? `<a class="card-link" href="${c.link.href}">${c.link.label} →</a>` : ''}
    </div>`
    )
    .join('')}</div>`;
}

// Numbered steps
function steps(items) {
  return `<ol class="steps">${items
    .map(
      (s, i) => `
    <li class="step">
      <span class="step-n">${i + 1}</span>
      <div><h3>${s.title}</h3><p>${s.text}</p></div>
    </li>`
    )
    .join('')}</ol>`;
}

// Stat wall — product-truth numbers only (honesty tier A).
function stats(items) {
  return `<div class="stats">${items
    .map((s) => `<div class="stat"><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></div>`)
    .join('')}</div>`;
}

// The Tier-A proof strip (Blueprint v2 §1.4.1) — one source of truth, deploy on Home/Platform/Pricing.
const PROOF_STRIP_ITEMS = [
  { n: '90+', l: 'fields on every customer record', href: '/platform/customer-memory' },
  { n: '240+', l: 'governed AI actions, individually permissioned', href: '/platform/ai-workforce' },
  { n: '14', l: 'languages the AI voice speaks', href: '/products/ai-sales-agents' },
  { n: '5', l: 'scopes of AI kill switch', href: '/platform/ai-workforce' },
];
function proofStrip(caption) {
  return `<div class="stats proof-strip">${PROOF_STRIP_ITEMS.map(
    (s) => `<a class="stat stat-link" href="${s.href}"><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></a>`
  ).join('')}</div>${caption ? `<p class="proof-caption">${caption}</p>` : ''}`;
}

// FAQ block; build.js also emits FAQPage JSON-LD from the same data.
function faqBlock(faqs) {
  return `<div class="faq">${faqs
    .map(
      (f) => `
    <details class="faq-item">
      <summary>${f.q}</summary>
      <div class="faq-a"><p>${f.a}</p></div>
    </details>`
    )
    .join('')}</div>`;
}

// Governance strip — used on several pages, one source of truth.
function governanceStrip() {
  return section(
    `${sectionHead(
      'GOVERNANCE FIRST',
      'AI that waits for your yes.',
      'Nothing reaches a customer without passing your rules. This is not a promise in a brochure — approval queues, daily caps and kill switches are enforced in the product.'
    )}
    ${cards(
      [
        { icon: '☑', title: 'Approval queues', text: 'Every AI-drafted message, offer or follow-up waits in a queue you review. Approve, edit or reject — one tap each.' },
        { icon: '◷', title: 'Daily caps & quiet hours', text: 'Hard limits on how many actions AI staff can take per day, per action type — and hours it never messages in.' },
        { icon: '⏻', title: '5 kill-switch scopes', text: 'Pause one agent, one action type, one branch, one channel, or all AI activity — instantly.' },
        { icon: '≡', title: 'Action log', text: 'Every AI action is recorded: what it did, why, and who approved it. Autonomy is earned, never assumed.' },
      ],
      4
    )}`,
    { tone: 'ink' }
  );
}

// "Because it's one system" — the fixed cross-module proof block every product page carries (BP2 §1.1.3).
function oneSystemBlock(lines) {
  return `
<div class="one-system">
  <p class="one-system-tag">BECAUSE IT'S ONE SYSTEM</p>
  <ul class="one-system-list">
    ${lines.map((l) => `<li>${l}</li>`).join('')}
  </ul>
</div>`;
}

// The three pillars — Remember / Sell / Run — used on Home + Platform as the OS app grid.
const PILLARS = [
  {
    key: 'remember', title: 'REMEMBER', promise: 'Every customer, occasion, taste, scheme balance and conversation in one record that belongs to the business — not a salesman’s phone.',
    chips: [['Jewellery CRM', '/products/crm'], ['Customer Memory', '/platform/customer-memory'], ['Loyalty', '/products/gold-schemes'], ['Gold Schemes', '/products/gold-schemes'], ['Digital Gold', '/products/digital-gold']],
    proof: '90+ fields per customer record — occasions, RFM, scheme balances, on one card.',
  },
  {
    key: 'sell', title: 'SELL', promise: 'The counter that never closes: WhatsApp, Instagram, Messenger, storefront and video — with AI that answers in seconds and follows up without being told.',
    chips: [['WhatsApp Commerce', '/products/whatsapp'], ['Instagram & Facebook', '/products/instagram-facebook'], ['AI Sales Agents', '/products/ai-sales-agents'], ['Catalogue', '/products/catalog']],
    proof: 'WhatsApp Business API + Meta channels; 240+ governed AI actions; AI voice in 14 languages.',
  },
  {
    key: 'run', title: 'RUN', promise: 'Inventory, orders, billing, manufacturing, branches, staff and money — one truth, visible from anywhere.',
    chips: [['Inventory', '/products/inventory'], ['Billing & Finance', '/products/billing-finance'], ['Manufacturing', '/solutions/manufacturers'], ['Multi-store & Franchise', '/products/multi-store']],
    proof: 'Multi-store/franchise structure; Tally/Zoho bridges; approval-gated pricing.',
  },
];
function pillarConstellation() {
  return `<div class="pillars">${PILLARS.map(
    (p) => `
    <div class="pillar">
      <p class="pillar-name">${p.title}</p>
      <p class="pillar-promise">${p.promise}</p>
      <div class="pillar-chips">${p.chips.map(([l, h]) => `<a class="chip chip-link" href="${h}">${l}</a>`).join('')}</div>
      <p class="pillar-proof">${p.proof}</p>
    </div>`
  ).join('')}</div>`;
}

// JTBD literal blocks — "When X, I want Y, so I can Z" (AEO-friendly H3s), per BP2 T3 §6.
function jtbdBlock(items) {
  return `<div class="jtbd">${items
    .map(
      (j) => `
    <div class="jtbd-item">
      <h3>When ${j.when}, I want to ${j.want}, so I can ${j.so}.</h3>
    </div>`
    )
    .join('')}</div>`;
}

// Comparison matrix — T6 pages. rows: [{label, jwero, other}]; jwero/other can carry a "roadmap" flag.
// Cells marked "[VERIFY]" are unconfirmed rather than asserted (D3) — never state a specific unverified
// fact about a named third party as settled.
function compareTable(theirName, rows) {
  return `<div class="tbl-wrap"><table class="tbl compare-tbl">
    <thead><tr><th>Capability</th><th>Jwero</th><th>${esc(theirName)}</th></tr></thead>
    <tbody>${rows
      .map(
        (r) => `<tr><td><strong>${r.label}</strong></td>
          <td>${r.jwero}${r.jweroRoadmap ? ' <span class="tag-roadmap">roadmap</span>' : ''}</td>
          <td>${r.other}</td></tr>`
      )
      .join('')}</tbody>
  </table></div>
  <p class="compare-disclaimer">Claims about Jwero above are product-verified. Claims about ${esc(theirName)} are based on its public positioning; anything marked <strong>[VERIFY]</strong> is unconfirmed rather than asserted — <a href="/contact">tell us if something here is wrong</a> and we’ll correct it.</p>`;
}

// Verdict box — T6 pages' signature block: concede honestly, then state the fit.
function verdictBox(chooseThemLabel, chooseThemText, chooseJweroText) {
  return `<div class="verdict-box">
    <div class="v-cell"><p class="v-tag">CHOOSE ${esc(chooseThemLabel).toUpperCase()} IF</p><p>${chooseThemText}</p></div>
    <div class="v-cell v-jwero"><p class="v-tag">CHOOSE JWERO IF</p><p>${chooseJweroText}</p></div>
  </div>`;
}

// "What switchers switch for" — the fixed 3-mechanism block reused across every comparison page.
function switchForBlock() {
  return cards([
    { title: 'Memory', text: 'A reply, a price and a follow-up that already know the customer — not a blank thread or a record nobody else can see.' },
    { title: 'Governed AI', text: 'Approval queues, daily caps, quiet hours and a five-scope kill switch — not a bot that fires without oversight, or none at all.' },
    { title: 'One system', text: 'The catalogue, the CRM, the inbox and the operation share state — no exporting between tools to answer a simple question.' },
  ]);
}

// "What we don't do yet" — the trust block, reusable on /platform, comparisons, product pages.
// Before/after business-impact cards — the "what changes for your business" block.
// items: [{lever, before, after, link?}]. Only ever states Tier-A-grounded outcomes.
function impactGrid(items) {
  return `<div class="impact-grid">${items
    .map(
      (i) => `
    <div class="impact-card">
      <p class="impact-lever">${i.lever}</p>
      <p class="impact-before"><span class="impact-tag">Today</span>${i.before}</p>
      <p class="impact-after"><span class="impact-tag impact-tag-go">With Jwero</span>${i.after}</p>
      ${i.link ? `<a class="card-link" href="${i.link.href}">${i.link.label} →</a>` : ''}
    </div>`
    )
    .join('')}</div>`;
}

function honestGapsBlock(items) {
  return `
<div class="gaps-block">
  <p class="gaps-tag">WHAT WE DON'T DO YET</p>
  <p class="gaps-lead">Here's what's on the public roadmap, not the product — said plainly, before you find out the hard way.</p>
  <ul class="gaps-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>
  <a class="card-link" href="/roadmap">See the full public roadmap →</a>
</div>`;
}

// Reusable CSS-built product mocks (no images, no fantasy dashboards).
const mockApproval = `
<div class="mock" role="img" aria-label="Illustration of the Jwero approval queue">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Approval queue · 3 waiting</span></div>
  <div class="mock-row">
    <div class="mock-msg"><strong>Anniversary follow-up · Sofia M.</strong><br>“It has been a year since the emerald ring — we would love to see you both again…”</div>
    <div class="mock-actions"><button class="chip chip-go" type="button">Approve</button><button class="chip" type="button">Edit</button></div>
  </div>
  <div class="mock-row">
    <div class="mock-msg"><strong>Instalment reminder · R. Shah</strong><br>“A gentle reminder: month 7 of 11 on your gold plan is due Friday…”</div>
    <div class="mock-actions"><button class="chip chip-go" type="button">Approve</button><button class="chip" type="button">Edit</button></div>
  </div>
  <div class="mock-foot">Daily cap 40 · Quiet hours on · Kill switch armed</div>
</div>`;

const mockChat = `
<div class="mock" role="img" aria-label="Illustration of a WhatsApp sales conversation">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">WhatsApp · 11:42 pm</span></div>
  <div class="bubble in">Do you have this bangle in 22k, around 18 grams?</div>
  <div class="bubble out">Yes — two designs in 22k near 18 g. At today’s rate: full price with making charges below. Shall I hold one for a store visit?<span class="bubble-tag">Drafted by AI staff · sent after approval</span></div>
  <div class="bubble in">Saturday 5pm works.</div>
  <div class="mock-foot">Enquiry → priced reply → appointment. While the store slept.</div>
</div>`;

const mockMemory = `
<div class="mock" role="img" aria-label="Illustration of a Jwero customer record">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Customer · Meera K.</span></div>
  <div class="mock-kv"><span>Gold plan balance</span><strong>7 of 11 months</strong></div>
  <div class="mock-kv"><span>Daughter’s wedding</span><strong>November</strong></div>
  <div class="mock-kv"><span>Prefers</span><strong>Temple work · 22k · yellow</strong></div>
  <div class="mock-kv"><span>Best time to reach</span><strong>Weekdays, evening · WhatsApp</strong></div>
  <div class="mock-foot">90+ fields like these, on every customer — with a “why” behind every score.</div>
</div>`;

// The one-record architecture visual — the home/platform OS-proof centrepiece (BP2 §1.1.3, home B3).
const mockOneRecord = `
<div class="mock mock-onerecord" role="img" aria-label="Illustration of one customer record touched by every module">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">One record · Meera K.</span></div>
  <div class="onerecord-grid">
    <div class="onerecord-chip">💬 WhatsApp reply</div>
    <div class="onerecord-chip">🛍 Catalogue share</div>
    <div class="onerecord-center">Meera K.<br><span>90+ fields</span></div>
    <div class="onerecord-chip">💰 Scheme reminder</div>
    <div class="onerecord-chip">🧾 Invoice</div>
  </div>
  <div class="mock-foot">Every module reads and writes this one row. That's the operating system.</div>
</div>`;

// Standard pre-footer CTA band. variant 'enterprise' swaps secondary CTA for the specialist track.
function ctaBand(title, sub, waContext, opts = {}) {
  const secondary = opts.enterprise
    ? `<a class="btn btn-ghost-light" href="/enterprise">Talk to a specialist</a>`
    : `<a class="btn btn-ghost-light" href="/book-demo">Book a demo</a>`;
  return `
<section class="cta-band">
  <div class="container">
    <h2>${title}</h2>
    <p>${sub}</p>
    <div class="cta-row center">
      <a class="btn btn-primary" href="#" data-wa="${esc(waContext)}">Chat with us on WhatsApp</a>
      ${secondary}
    </div>
    <p class="cta-note">A real person + our AI reply within minutes — that's the product.</p>
  </div>
</section>`;
}

// Two-column pain/agitate rows for pain pages.
function painRows(items) {
  return items
    .map(
      (p) => `
  <div class="pain-row">
    <div class="pain-q">“${p.quote}”</div>
    <div class="pain-x"><h3>${p.title}</h3><p>${p.text}</p></div>
  </div>`
    )
    .join('');
}

module.exports = {
  esc, hero, section, sectionHead, cards, steps, stats, faqBlock,
  governanceStrip, ctaBand, painRows, mockApproval, mockChat, mockMemory, mockOneRecord,
  breadcrumbs, breadcrumbSchema, proofStrip, oneSystemBlock, pillarConstellation, PILLARS,
  jtbdBlock, compareTable, honestGapsBlock, verdictBox, switchForBlock, impactGrid,
};
