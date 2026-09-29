// Shared HTML helpers for the Jwero marketing site build.
// All helpers return HTML strings; content modules compose them.
// URL convention: extensionless canonical paths everywhere (e.g. "/products/whatsapp").

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Line icons (24px grid, 1.5 stroke, currentColor). Content modules keep
// writing plain glyphs ('✉', '◆'); icon() swaps the ones it knows for SVG and
// passes anything else through untouched.
const ICON_PATHS = {
  gem: '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20"/><path d="m12 21-4-12 2-6"/><path d="m12 21 4-12-2-6"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/>',
  sparkle: '<path d="m12 3 1.9 5.6a2 2 0 0 0 1.3 1.3L21 12l-5.8 2.1a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.6a2 2 0 0 0-1.3-1.3L3 12l5.8-2.1a2 2 0 0 0 1.3-1.3z"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
  circle: '<circle cx="12" cy="12" r="9"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  facet: '<path d="m12 2 10 10-10 10L2 12z"/><path d="m12 8 4 4-4 4-4-4z"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  swap: '<path d="M4 8h16"/><path d="m16 4 4 4-4 4"/><path d="M20 16H4"/><path d="m8 12-4 4 4 4"/>',
  more: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  tools: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18"/><path d="M8 2v4"/><path d="M16 2v4"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9"/><path d="m16 7 3 3"/>',
  checkbox: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m8 12 3 3 5-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  power: '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 21h16"/>',
  refresh: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.1-5.7A8.4 8.4 0 1 1 21 11.5z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  record: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 9h3"/><path d="M15 13h3"/><path d="M6 16c.6-1.5 1.7-2 3-2s2.4.5 3 2"/>',
  coins: '<circle cx="8" cy="8" r="6"/><path d="M18.1 10.4A6 6 0 1 1 10.3 18"/><path d="M7 6h1v4"/>',
  camera: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1"/><path d="M9 13v2"/><path d="M15 13v2"/><path d="M2 14h2"/><path d="M20 14h2"/>',
  store: '<path d="M4 10v10h16V10"/><path d="m3 10 2-6h14l2 6"/><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M10 20v-5h4v5"/>',
  megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6l-5 4H4a1 1 0 0 0-1 1z"/><path d="M15 9a4 4 0 0 1 0 6"/><path d="M18 6a8 8 0 0 1 0 12"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4"/><path d="m15.4 6.5-6.8 4"/>',
  activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6"/><path d="M16 4a4 4 0 0 1 0 8"/><path d="M19 15c2 .8 3 2.7 3 6"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
  box: '<path d="m21 8-9-5-9 5v8l9 5 9-5z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/>',
  receipt: '<path d="M5 3v18l2.5-1.5L10 21l2-1.5 2 1.5 2.5-1.5L19 21V3z"/><path d="M9 8h6"/><path d="M9 12h6"/>',
  flow: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M6.5 10v4a3 3 0 0 0 3 3H14"/>',
  branches: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5V12"/><path d="M5 16.5V14a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.5"/>',
  badge: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 18c.8-2 2.6-3 5-3s4.2 1 5 3"/>',
  truck: '<path d="M2 6h11v10H2z"/><path d="M13 9h4l4 4v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  wallet: '<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M11 18h2"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9"/><path d="M12 8v13"/><path d="M12 8C10 3 5 4 6.5 7c.5 1 2.5 1 5.5 1z"/><path d="M12 8c2-5 7-4 5.5-1-.5 1-2.5 1-5.5 1z"/>',
  pie: '<path d="M21 12a9 9 0 1 1-9-9v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
  route: '<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  updown: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
};
const ICON_GLYPHS = {
  '◆': 'gem', '◇': 'layers', '✦': 'sparkle', '♥': 'heart', '●': 'disc', '○': 'circle', '◉': 'target', '◈': 'facet',
  '▲': 'trend', '⇄': 'swap', '…': 'more', '✉': 'mail', '⚒': 'tools', '▣': 'grid', '🗓': 'calendar', '✓': 'check',
  '⚿': 'key', '☑': 'checkbox', '☏': 'phone', '⏻': 'power', '⇩': 'download', '↺': 'refresh',
};
// Cards that point at a product page pick up that product's icon.
const LINK_ICONS = {
  '/products/whatsapp': 'chat', '/products/instagram-facebook': 'camera', '/products/ai-sales-agents': 'bot',
  '/products/storefront': 'store', '/products/ads-manager': 'megaphone', '/products/social-media': 'share',
  '/products/optimize': 'activity', '/products/crm': 'users', '/products/showroom': 'eye',
  '/products/catalog': 'book', '/products/inventory': 'box', '/products/billing-finance': 'receipt',
  '/products/erp': 'flow', '/products/multi-store': 'branches', '/products/hr-payroll': 'badge',
  '/products/repairs-service': 'tools', '/products/purchase-vendors': 'truck', '/products/gold-schemes': 'coins',
  '/products/digital-gold': 'wallet', '/products/loyalty': 'gift', '/products/segmentation': 'pie',
  '/products/journeys': 'route', '/products/campaigns': 'send',
  '/platform/customer-memory': 'record', '/platform/ai-workforce': 'shield', '/platform/integrations': 'swap',
  '/platform/pricing-engine': 'coins', '/trust/security': 'key', '/platform/onboarding': 'check', '/roadmap': 'trend',
};
function icon(nameOrGlyph) {
  const key = ICON_PATHS[nameOrGlyph] ? nameOrGlyph : ICON_GLYPHS[String(nameOrGlyph).trim()];
  if (!key) return nameOrGlyph;
  return `<svg class="ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[key]}</svg>`;
}

// Hero: centred copy, one idea, one primary action. `panel: true` sets it on the
// full-bleed brand panel (home only); every other page gets the plain framed
// hero. An optional product mock sits underneath the copy on a dotted stage.
function hero({ eyebrow, h1, sub, primary, secondary, note, mock, panel }) {
  const cta = `
      <div class="cta-row center">
        ${primary ? `<a class="btn btn-primary" href="${primary.href}" ${primary.wa ? `data-wa="${esc(primary.wa)}"` : ''}>${primary.label}</a>` : ''}
        ${secondary ? `<a class="btn btn-ghost" href="${secondary.href}">${secondary.label}</a>` : ''}
      </div>
      ${note ? `<p class="cta-note">${note}</p>` : ''}`;
  if (panel) {
    return `
<section class="hero hero-panel">
  <div class="panel">
    <div class="panel-glow" aria-hidden="true"></div>
    <div class="hero-inner">
      ${eyebrow ? `<a class="hero-pill" href="#" data-wa="announce"><span>${eyebrow} · Chat with us on WhatsApp</span><span class="pill-arrow" aria-hidden="true">${icon('arrow')}</span></a>` : ''}
      <h1>${h1}</h1>
      <p class="sub">${sub}</p>${cta}
      ${mock ? `<div class="hero-mock">${mock}</div>` : ''}
    </div>
  </div>
</section>`;
  }
  return `
<section class="hero">
  <div class="container hero-inner">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h1>${h1}</h1>
    <p class="sub">${sub}</p>${cta}
  </div>
  ${mock ? `<div class="container"><div class="stage hero-mock">${mock}</div></div>` : ''}
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

// A single idea at display scale, centred, with nothing competing with it.
// The pause between dense sections — use sparingly, once or twice per page.
function statement(title, body, cta) {
  return `
    <div class="statement">
      <h2>${title}</h2>
      ${body ? `<p>${body}</p>` : ''}
      ${cta ? `<a class="btn ${cta.primary ? 'btn-primary' : 'btn-ghost'}" href="${cta.href}"${cta.wa ? ` data-wa="${esc(cta.wa)}"` : ''}>${cta.label}</a>` : ''}
    </div>`;
}

function section(inner, opts = {}) {
  const cls = ['section', opts.tone ? `section-${opts.tone}` : ''].filter(Boolean).join(' ');
  const id = opts.id ? ` id="${opts.id}"` : '';
  // "ink" sections sit on the same rounded brand panel as the hero and CTA.
  if (opts.tone === 'ink') {
    const glow = /class="close-plan"/.test(inner) ? '<div class="panel-glow" aria-hidden="true"></div>' : '';
    return `<section class="${cls}"${id}><div class="panel">${glow}<div class="container">${inner}</div></div></section>`;
  }
  return `<section class="${cls}"${id}><div class="container">${inner}</div></section>`;
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
  return `<div class="grid grid-${cols} cells">${items
    .map(
      (c) => `
    <div class="card">
      ${c.icon || (c.link && LINK_ICONS[c.link.href]) ? `<div class="card-icon">${icon(c.icon || LINK_ICONS[c.link.href])}</div>` : ''}
      <h3>${c.title}</h3>
      <p>${c.text}</p>
      ${c.link ? `<a class="card-link" href="${c.link.href}">${c.link.label} →</a>` : ''}
    </div>`
    )
    .join('')}</div>`;
}

// Team grid: [{initials,name,title,bio,linkedin}]
function teamGrid(people) {
  return `<div class="team-grid">${people
    .map(
      (p) => `
    <div class="team-card">
      <div class="team-avatar" aria-hidden="true">${esc(p.initials)}</div>
      <h3>${esc(p.name)}</h3>
      <p class="team-title">${esc(p.title)}</p>
      ${p.bio ? `<p class="team-bio">${p.bio}</p>` : ''}
      ${p.linkedin ? `<a class="team-linkedin" href="${p.linkedin}" rel="noopener" target="_blank" aria-label="${esc(p.name)} on LinkedIn">LinkedIn ↗</a>` : ''}
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
// Governance, framed the way the trade actually thinks about it: some work you
// never want to see again, some you always want to see. The mechanisms
// (kill switch, quiet hours, action log, data ownership) sit underneath as
// the proof, not as the opening argument.
function governanceStrip() {
  return section(
    `${sectionHead(
      'TWO SPEEDS, YOUR CHOICE',
      'Let AI run on its own. Or make it ask you first.',
      'Some work you never want to see again. Some you always want to see. You decide which is which — agent by agent, branch by branch.'
    )}
    <div class="speeds">
      <div class="speed speed-run">
        <p class="speed-title">Let AI run</p>
        <ul>
          <li>Posting new designs to your catalogue</li>
          <li>Answering price questions at midnight</li>
          <li>Reminding customers an instalment is due</li>
          <li>Chasing the follow-up nobody had time for</li>
        </ul>
      </div>
      <div class="speed speed-ask">
        <p class="speed-title">Ask me first</p>
        <ul>
          <li>Any discount beyond the limit you set</li>
          <li>Messages to your biggest families</li>
          <li>A festival campaign before it goes out</li>
          <li>Anything at all that you choose to flag</li>
        </ul>
      </div>
    </div>
    <p class="speed-set">Set it once, per agent, per branch. Change your mind any time.</p>
    <div class="speed-guards">
      <div><strong>Stop anything</strong><p>One tap halts one agent, one action type, one branch, one channel, or everything.</p></div>
      <div><strong>Quiet hours</strong><p>Your business stays silent when you want it silent, inside daily caps you set.</p></div>
      <div><strong>Full record</strong><p>Every action, and who approved it, kept on file.</p></div>
      <div><strong>Your data</strong><p>Your customers stay yours. Your books stay in Tally.</p></div>
    </div>
    <p class="speed-close">Always in charge. Never in the way.</p>`,
    { tone: 'ink' }
  );
}

// "Not software with AI added. AI that runs the software." — the six-step loop
// behind that claim. Step 04 is the one buyers actually care about, so it is
// visually promoted.
function agentLoop() {
  const steps = [
    ['01', 'Senses', 'Every enquiry, rate change and missed instalment, across every branch and channel.'],
    ['02', 'Decides', 'Who to answer first, what to offer, what it is worth — against her whole history.'],
    ['03', 'Drafts', 'The reply, the price, the follow-up, the campaign. Written and ready.'],
    ['04', 'Runs or asks', 'Sends on its own, or waits for your nod. You choose, agent by agent.'],
    ['05', 'Executes', 'WhatsApp, Instagram, storefront, phone. In seconds, not mornings.'],
    ['06', 'Learns', 'What worked goes back on her record. The next decision starts better.'],
  ];
  return `<div class="loop">${steps
    .map(
      ([n, t, d]) => `
    <div class="loop-step${n === '04' ? ' is-key' : ''}">
      <div class="loop-n">${n}</div>
      <div><h3>${t}</h3><p>${d}</p></div>
    </div>`
    )
    .join('')}</div>`;
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

// Interactive platform tabs — same PILLARS data as pillarConstellation, as a
// click-to-switch category view (eyebrow tab nav + two-column detail panel).
function platformTabs() {
  return `
<div data-ptabs>
  <div class="ptabs-nav" role="tablist">
    ${PILLARS.map((p, i) => `<button type="button" role="tab" data-tab="${p.key}" aria-selected="${i === 0 ? 'true' : 'false'}">${p.title}</button>`).join('')}
  </div>
  ${PILLARS.map(
    (p, i) => `
  <div class="ptabs-panel${i === 0 ? ' is-active' : ''}" data-panel="${p.key}">
    <div class="ptabs-body">
      <div class="ptabs-copy">
        <h3>${p.promise}</h3>
        <div class="ptabs-chips">${p.chips.map(([l, h]) => `<a class="chip chip-link" href="${h}">${l}</a>`).join('')}</div>
        <p class="ptabs-proof">${p.proof}</p>
      </div>
      <div class="one-system">
        <p class="one-system-tag">INSIDE ${p.title}</p>
        <ul class="one-system-list">${p.chips.map(([l]) => `<li>${l}</li>`).join('')}</ul>
      </div>
    </div>
  </div>`
  ).join('')}
</div>`;
}

// JTBD literal blocks — "When X, I want Y, so I can Z" (AEO-friendly H3s), per BP2 T3 §6.
function jtbdBlock(items) {
  return `<div class="jtbd">${items
    .map(
      (j) => `
    <div class="jtbd-item">
      <h3>When ${j.when}, I want to ${j.want} — so ${j.so}.</h3>
    </div>`
    )
    .join('')}</div>`;
}

// Comparison matrix — T6 pages. rows: [{label, jwero, other}]; jwero/other can carry a "roadmap" flag.
// Cells marked "[VERIFY]" are unconfirmed rather than asserted (D3) — never state a specific unverified
// fact about a named third party as settled.
// Render editorial "[VERIFY — …]" markers as a neutral styled badge instead of raw brackets.
function verifyBadge(text) {
  return String(text).replace(/\[VERIFY(?:\s*[—-]\s*([^\]]*))?\]/g, (m, rest) =>
    `<span class="verify-tag">Unverified${rest ? ' — ' + rest.trim() : ''}</span>`);
}

function compareTable(theirName, rows) {
  return `<div class="tbl-wrap"><table class="tbl compare-tbl">
    <thead><tr><th>Capability</th><th>Jwero</th><th>${esc(theirName)}</th></tr></thead>
    <tbody>${rows
      .map(
        (r) => `<tr><td><strong>${r.label}</strong></td>
          <td>${verifyBadge(r.jwero)}${r.jweroRoadmap ? ' <span class="tag-roadmap">roadmap</span>' : ''}</td>
          <td>${verifyBadge(r.other)}</td></tr>`
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

const mockChatCatalog = `
<div class="mock" role="img" aria-label="Illustration of a WhatsApp catalogue share and checkout">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">WhatsApp · Catalogue share</span></div>
  <div class="bubble in">Can you share the necklace set you posted on Instagram?</div>
  <div class="bubble out">Here’s the live-price link — updates automatically with today’s rate.<span class="bubble-tag">Catalogue link · view &amp; checkout tracked</span></div>
  <div class="bubble in">Booking it, sending the advance now.</div>
  <div class="mock-foot">Instagram post → priced catalogue → payment. One thread, one record.</div>
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

// Standard pre-footer CTA band, on the brand panel. variant 'enterprise' swaps
// the secondary CTA for the specialist track. The ticker along the bottom only
// ever repeats product-verified facts already stated elsewhere on the site.
const CTA_TILES = ['shield', 'chat', 'gem', 'record', 'sparkle', 'coins'];
const CTA_TICKER = [
  ['record', '90+ fields on every customer record'],
  ['shield', '240+ governed AI actions'],
  ['phone', 'AI voice in 14 languages'],
  ['power', 'Kill switch at five scopes'],
  ['swap', 'Tally & Zoho Books bridges built in'],
  ['chat', 'Official WhatsApp Business API'],
  ['download', 'Your data, exportable anytime'],
];
function ctaBand(title, sub, waContext, opts = {}) {
  const secondary = opts.enterprise
    ? `<a class="btn btn-ghost-light" href="/enterprise">Talk to a specialist</a>`
    : `<a class="btn btn-ghost-light" href="/book-demo">Book a demo</a>`;
  const label = opts.label || 'Chat with us on WhatsApp';
  const ticker = CTA_TICKER.map(([i, t]) => `<span>${icon(i)}${t}</span>`).join('');
  return `
<section class="cta-band">
  <div class="panel">
    <div class="panel-glow" aria-hidden="true"></div>
    <div class="cta-tiles" aria-hidden="true">${CTA_TILES.map((i) => `<span>${icon(i)}</span>`).join('')}</div>
    <div class="container">
      <h2>${title}</h2>
      <p>${sub}</p>
      <div class="cta-row center">
        <a class="btn btn-primary" href="#" data-wa="${esc(waContext)}">${label}</a>
        ${secondary}
      </div>
      <p class="cta-note">A real person + our AI reply within minutes — that's the product. You message us first; we never message you uninvited.</p>
    </div>
    <div class="cta-ticker" aria-hidden="true"><div class="cta-track">${ticker}${ticker}</div></div>
  </div>
</section>`;
}

// Risk-reversal strip: the "why trying this is safe" facts, assembled at the decision moment.
function safeToTryStrip() {
  return `
<div class="safe-strip">
  <p class="safe-title">WHY TRYING THIS IS SAFE</p>
  <div class="safe-items">
    <div><strong>Pilot on your own data</strong><span>Start with a supervised sample import — evaluate on your real customers, not a demo dataset.</span></div>
    <div><strong>Monthly billing, export anytime</strong><span>Entry tiers bill monthly, and your data leaves with you in standard formats whenever you ask.</span></div>
    <div><strong>Your season is protected</strong><span>A written change-freeze means nothing disruptive happens during your peak weeks.</span></div>
  </div>
</div>`;
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

// Confident single-line proof strip, placed directly under the hero (Webex-style
// trust bar) — always a real, product-verified claim, never a fabricated stat.
function trustBar(html, link) {
  return `
<div class="trust-bar">
  <div class="container">
    <p>${html}</p>
    ${link ? `<a href="${link.href}">${link.label} →</a>` : ''}
  </div>
</div>`;
}

// Real named customers, shown as a logo wall. Every entry here is a
// verified, permissioned Jwero customer — never a prospect or a partner.
const CUSTOMER_LOGOS = [
  { name: 'BK Saraf Jewellers', file: 'bk-saraf.png' },
  { name: 'Mukti Gold, Gems, Diamonds & Platinum', file: 'mukti.png' },
  { name: 'Devji', file: 'devji.png' },
  { name: 'Sri Jagdamba Pearls, Gold & Diamonds', file: 'sri-jagdamba.png' },
  { name: 'Kashi Jewellers', file: 'kashi.png' },
  { name: 'Everbrite Jewellery', file: 'everbrite.png' },
  { name: 'Mangatrai Neeraj', file: 'mangatrai-neeraj.png' },
  { name: 'Om Jewellers', file: 'om-jewellers.png' },
  { name: 'Prince Jewellery', file: 'prince-jewellery.png' },
  { name: 'Ratnalaya Jewellers', file: 'ratnalaya.png' },
  { name: 'Simha Jewellers', file: 'simha.png' },
  { name: 'Gujjadi Swarna', file: 'gujjadi-swarna.png' },
  { name: 'Talwarsons — Anil Talwar Group', file: 'talwarsons.png' },
  { name: 'Waman Hari Pethe & Sons', file: 'waman-hari-pethe.png' },
  { name: 'L Sunderdas Zaveri', file: 'ls-zaveri.png' },
];

function customerLogos() {
  const chip = (c) => `<div class="logo-chip" title="${esc(c.name)}"><img src="/assets/logos/customers/${c.file}" alt="${esc(c.name)} logo" loading="lazy" width="140" height="60"></div>`;
  return `
<p class="logo-wall-title">Trusted by names you already know</p>
<div class="logo-marquee">
  <div class="logo-track">
    ${CUSTOMER_LOGOS.map(chip).join('')}
    ${CUSTOMER_LOGOS.map(chip).join('')}
  </div>
</div>`;
}

module.exports = {
  esc, icon, hero, section, sectionHead, statement, cards, teamGrid, steps, stats, faqBlock,
  governanceStrip, agentLoop, ctaBand, painRows, mockApproval, mockChat, mockChatCatalog, mockMemory, mockOneRecord,
  breadcrumbs, breadcrumbSchema, proofStrip, oneSystemBlock, pillarConstellation, platformTabs, trustBar, PILLARS,
  jtbdBlock, compareTable, honestGapsBlock, verdictBox, switchForBlock, impactGrid, customerLogos, safeToTryStrip,
};
