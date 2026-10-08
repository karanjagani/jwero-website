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
  till: '<rect x="3" y="10" width="18" height="11" rx="2"/><path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M7 14h4"/><path d="M7 17h6"/><circle cx="17" cy="15.5" r="1"/>',
  scale: '<path d="M12 3v18"/><path d="M5 21h14"/><path d="M3 7h18"/><path d="m6 7-3 7a3 3 0 0 0 6 0z"/><path d="m18 7-3 7a3 3 0 0 0 6 0z"/>',
  vault: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 10v2l1.5 1"/><path d="M7 21v1"/><path d="M17 21v1"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/>',
  updown: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
};
const ICON_GLYPHS = {
  '◆': 'gem', '◇': 'layers', '✦': 'sparkle', '♥': 'heart', '●': 'disc', '○': 'circle', '◉': 'target', '◈': 'facet',
  '▲': 'trend', '⇄': 'swap', '…': 'more', '✉': 'mail', '⚒': 'tools', '▣': 'grid', '🗓': 'calendar', '✓': 'check',
  '⚿': 'key', '☑': 'checkbox', '☏': 'phone', '⏻': 'power', '⇩': 'download', '↺': 'refresh',
};
// Cards that point at a product page pick up that product's icon.
const LINK_ICONS = {
  '/products/whatsapp': 'chat', '/products/instagram-facebook': 'camera', '/products/ai-sales-agents': 'bot',
  '/products/ecommerce': 'store', '/products/ads-manager': 'megaphone', '/products/social-media': 'share',
  '/products/optimize': 'activity', '/products/crm': 'users', '/products/showroom': 'eye',
  '/products/catalog': 'book', '/products/inventory': 'box', '/products/billing-finance': 'receipt',
  '/products/erp': 'flow', '/products/multi-store': 'branches', '/products/hr-payroll': 'badge',
  '/products/repairs-service': 'tools', '/products/purchase-vendors': 'truck', '/products/gold-schemes': 'coins',
  '/products/gold-schemes': 'wallet', '/products/loyalty': 'gift', '/products/segmentation': 'pie',
  '/products/journeys': 'route', '/products/campaigns': 'send',
  '/solutions/diamond-traders': 'gem',
  '/products/pos': 'till', '/products/manufacturing': 'scale', '/products/girvi': 'vault', '/products/meetings': 'video',
  '/products/email': 'mail', '/products/marketplaces': 'truck', '/products/quotations': 'receipt', '/products/digital-catalogues': 'share', '/products/reports': 'pie', '/products/training-lms': 'book',
  '/platform/customer-memory': 'record', '/platform/ai-workforce': 'shield', '/platform/integrations': 'swap',
  '/platform/pricing-engine': 'coins', '/trust/security': 'key', '/platform/onboarding': 'check', '/roadmap': 'trend',
};
// A card with no icon of its own gets one from its title — the same line
// icons everywhere, so a page reads as a system rather than a list.
const AUTO_ICONS = [
  [/whatsapp|chat|inbox|reply|message|conversation|dm\b/i, 'chat'], [/instagram|facebook|social|photo|reel|post/i, 'camera'],
  [/\bai\b|agent|draft|assistant|autopilot|bot/i, 'bot'], [/approv|govern|guardrail|kill|permission|control|safe|consent/i, 'shield'],
  [/invoice|bill|gst|receipt|tender|cash|till|counter|pos\b/i, 'receipt'], [/stock|inventory|piece|vault|memo|consign|exhibit|transfer/i, 'box'],
  [/customer|clientel|family|walk-in|visitor|people|staff|team|karigar|employee|salesperson/i, 'users'],
  [/report|dashboard|analytic|insight|kpi|attribution|what worked|number|measure/i, 'activity'],
  [/birthday|anniversar|occasion|festival|calendar|season|wedding|reminder|schedule|due/i, 'calendar'],
  [/gold|scheme|instalment|rate|price|pricing|margin|cost|₹|rupee|payment|collect|loan|girvi|pledge|interest|balance|plan\b|plans\b/i, 'coins'],
  [/catalog|catalogue|design|sku|listing|product|pim/i, 'book'], [/branch|store|chain|franchise|multi|outlet|head office/i, 'branches'],
  [/workshop|manufactur|casting|routing|bom|wastage|weight|gram|milligram|assay|melt/i, 'scale'],
  [/loyalty|referral|reward|tier|gift|point/i, 'gift'], [/campaign|broadcast|send|blast|sms|push/i, 'send'], [/segment|audience|rfm|cohort/i, 'pie'],
  [/journey|automation|workflow|trigger|follow-up|sequence|pipeline/i, 'route'], [/video|meeting|appointment|call back|book/i, 'video'],
  [/\bad\b|ads|meta|google|pinterest|spend/i, 'megaphone'], [/security|data|backup|export|own|encrypt|isolat|privacy|dpdp/i, 'key'],
  [/hallmark|huid|certif|qc|quality|inspection|verify|check/i, 'check'], [/return|exchange|refund|sync|bridge|tally|zoho|shopify|integrat|connect/i, 'swap'],
  [/search|find|lookup|discover/i, 'search'], [/voice|phone|call|ivr|telephon/i, 'phone'], [/email|mail|newsletter/i, 'mail'],
  [/website|storefront|web|online|ecommerce|shop\b|d2c|checkout/i, 'store'], [/vendor|supplier|purchase|procure|po\b|grn|dispatch|courier|ship/i, 'truck'],
  [/repair|service|warranty|after-sales|custody/i, 'tools'], [/record|profile|360|memory|field|history/i, 'record'],
  [/download|import|migrat|pdf|document/i, 'download'], [/count|stocktake|rfid|label|tag\b|barcode/i, 'checkbox'],
  [/24|night|midnight|always|hour|time|speed|fast|instant|minute/i, 'power'], [/grow|scale|revenue|sales|sell|win|convert|upsell/i, 'trend'],
  [/score|explain|intelligen|signal|predict/i, 'activity'], [/console|to-do|task|action|queue/i, 'checkbox'], [/roadmap|next|later|future/i, 'route'],
];
function autoIcon(title) {
  const t = String(title || '').replace(/<[^>]+>/g, '');
  for (const [re, name] of AUTO_ICONS) if (re.test(t)) return name;
  return 'sparkle';
}
function icon(nameOrGlyph) {
  const key = ICON_PATHS[nameOrGlyph] ? nameOrGlyph : ICON_GLYPHS[String(nameOrGlyph).trim()];
  if (!key) return nameOrGlyph;
  return `<svg class="ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[key]}</svg>`;
}

// Hero: centred copy, one idea, one primary action. `panel: true` sets it on the
// full-bleed brand panel (home only); every other page gets the plain framed
// hero. An optional product mock sits underneath the copy on a dotted stage.
function hero({ eyebrow, h1, sub, primary, secondary, note, mock, panel, extra }) {
  const cta = `
      <div class="cta-row center">
        ${primary ? `<a class="btn btn-primary" href="${primary.href}" ${primary.wa ? `data-wa="${esc(primary.wa)}"` : ''}${primary.share ? ` data-share="${esc(primary.share)}"` : ''}>${primary.label}</a>` : ''}
        ${secondary ? `<a class="btn btn-ghost" href="${secondary.href}"${secondary.share ? ` data-share="${esc(secondary.share)}"` : ''}${secondary.print ? ' data-print' : ''}>${secondary.label}</a>` : ''}
      </div>
      ${note ? `<p class="cta-note">${note}</p>` : ''}`;
  if (panel) {
    return `
<section class="hero hero-panel">
  <div class="panel">
    <div class="panel-glow" aria-hidden="true"></div>
    <div class="hero-inner">
      ${eyebrow ? `<a class="hero-pill" href="#" data-wa="announce">${mark('mark-xs')}<span>${eyebrow} · Chat or call with us</span><span class="pill-arrow" aria-hidden="true">${icon('arrow')}</span></a>` : ''}
      <h1>${h1}</h1>
      <p class="sub">${sub}</p>${extra || ''}${cta}
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
      <div class="card-icon">${icon(c.icon || (c.link && LINK_ICONS[c.link.href]) || autoIcon(c.title))}</div>
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
      <span class="step-n">${i + 1}</span><span class="step-line" aria-hidden="true"></span>
      <div><h3>${s.title}</h3><p>${s.text}</p></div>
    </li>`
    )
    .join('')}</ol>`;
}




// ---------------------------------------------------------------- the ICP pipeline
// One question — "I run a…" — asked in the header and the home hero. The answer
// (stored in the browser, or carried by ?p=) turns the site into six stages:
// recognise · see · believe · price · try · pass it on.
const TRIAL_URL = 'https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=';
const ICPS = [
  { key: 'single', label: 'Single store', icon: 'store', sol: '/solutions/single-store', door: 'trial',
    price: ['One store', '₹18,000 a month — one location, two POS registers, 25,000 customers and 25,000 products included.'] },
  { key: 'chain', label: 'Multi-store chain', icon: 'branches', sol: '/solutions/multi-store-chains', door: 'demo',
    price: ['Five branches', '₹18,000 + 4 extra locations × ₹2,999 = ₹29,996 a month. From six locations, ask for Enterprise pricing.'] },
  { key: 'franchise', label: 'Franchise network', icon: 'flow', sol: '/solutions/franchise-networks', door: 'demo',
    price: ['Per location', '₹18,000 a month for the first location and ₹2,999 for each one after in India; quoted in your currency elsewhere. Networks usually take Enterprise: a one-time licence to run Jwero on their own servers.'] },
  { key: 'maker', label: 'Workshop / manufacturer', icon: 'scale', sol: '/solutions/manufacturers', door: 'demo',
    price: ['One workshop', '₹18,000 a month, every module. Vendor portal logins are ₹149 each a month; payslips ₹40 each.'] },
  { key: 'b2b', label: 'Wholesale / trade', icon: 'truck', sol: '/solutions/b2b-jewellery', door: 'trial',
    price: ['One office', '₹18,000 a month — 25,000 contacts and 25,000 products included, ₹499 a month per extra 10,000.'] },
  { key: 'trader', label: 'Diamond trader', icon: 'gem', sol: '/solutions/diamond-traders', door: 'trial',
    price: ['One trading office', '₹18,000 a month, every module. 25,000 contacts and 25,000 products included, then ₹499 a month per extra 10,000.'] },
  { key: 'd2c', label: 'Online brand', icon: 'megaphone', sol: '/solutions/d2c-brands', door: 'trial',
    price: ['One brand', '₹18,000 a month. Two connected integrations included (Shopify plus one), ₹499 a month for each extra.'] },
  { key: 'staff', label: 'I work in one', icon: 'users', sol: '/roles', door: 'brief', price: null },
];
// Which pipeline a solution or buyer-role page belongs to.
const ICP_OF = {
  'solutions/single-store': 'single', 'solutions/gold-retail': 'single', 'solutions/silver-retail': 'single', 'solutions/diamond-retail': 'single', 'solutions/gemstone-retail': 'single', 'solutions/luxury-boutique': 'single', 'solutions/bridal': 'single',
  'solutions/multi-store-chains': 'chain', 'solutions/franchise-networks': 'franchise',
  'solutions/manufacturers': 'maker', 'solutions/oem-manufacturers': 'maker', 'solutions/casting-units': 'maker', 'solutions/cad-services': 'maker',
  'solutions/b2b-jewellery': 'b2b', 'solutions/gold-wholesale': 'b2b', 'solutions/diamond-wholesale': 'b2b', 'solutions/bullion-gold-traders': 'b2b', 'solutions/export-houses': 'b2b',
  'solutions/diamond-traders': 'trader',
  'solutions/d2c-brands': 'd2c', 'solutions/jewellery-brands': 'd2c', 'solutions/startups': 'd2c', 'solutions/lab-grown-diamond': 'd2c',
  'roles/owner': 'single', 'roles/next-gen-successor': 'single', 'roles/chain-owner': 'chain', 'roles/franchise-partner': 'franchise',
};
const icpOf = (slug) => ICPS.find((i) => i.key === ICP_OF[slug]);
function icpLinks(cls) {
  return ICPS.map((i) => `<a class="${cls}" href="${i.sol}?p=${i.key}" data-icp="${i.key}">${icon(i.icon)}<span>${i.label}</span></a>`).join('');
}
// The question, as large buttons in the home hero.
function icpPick() {
  return `
      <div class="icp-pick" data-icp-pick>
        <p class="icp-q">I run a…</p>
        <div class="icp-opts">${icpLinks('icp-opt')}</div>
      </div>`;
}
// Stage 4 on the visitor's own page: what it costs a business like theirs.
function priceBlock(i, medium) {
  if (!i || !i.price) return '';
  const door = i.door === 'demo'
    ? `<a class="btn btn-primary" href="/book-demo">See it on a video demo</a><a class="btn btn-ghost" href="${TRIAL_URL}${medium}" rel="noopener" data-trial>Or start for ₹3,600</a>`
    : `<a class="btn btn-primary" href="${TRIAL_URL}${medium}" rel="noopener" data-trial>Start for ₹3,600</a><a class="btn btn-ghost" href="#" data-wa="pricing">Ask a pricing question</a>`;
  return section(`${sectionHead('WHAT IT COSTS YOU', 'One plan. Every module. No per-seat price.', '')}
  <div class="price-block" id="price">
    <div class="price-main">
      <p class="price-tag">Jwero One</p>
      <p class="price-n"><b>₹18,000</b><span>/month</span></p>
      <p class="price-alt">billed monthly · first month ₹3,600 · prices exclude GST</p>
    </div>
    <div class="price-you">
      <p class="price-tag">${i.price[0]}</p>
      <p class="price-eg">${i.price[1]}</p>
      <p class="price-wallet">WhatsApp messages, AI and calls run on a prepaid wallet at published rates. <a href="/pricing">See the full rate card →</a></p>
    </div>
    <div class="cta-row price-cta">${door}</div>
  </div>`, { id: 'price-section' });
}
// Stage 3: who already runs on it. Stage 6: pass it on.
function proofStrip2() {
  return section(`${customerLogos()}<p class="proof-caption">Fifteen named jewellers, each one a permissioned customer. <a href="/customers">See them</a> · <a href="/roadmap">What Jwero does not do yet</a></p>`, { tone: 'tint' });
}
function passItOn(i) {
  const what = i && i.key !== 'staff' ? i.label.toLowerCase().replace('i work in one', 'jewellery business') : 'jewellery business';
  return `
<section class="pass" id="pass">
  <div class="container">
    <div class="pass-box">
      <div><p class="eyebrow">PASS IT ON</p><h2>Know another jeweller who runs a ${what}?</h2><p>Send them this page on WhatsApp. It opens already set to their kind of business.</p></div>
      <a class="btn btn-primary" href="#" data-share="Worth five minutes — this is the software page for a ${what} like ours:"${i ? ` data-share-p="${i.key}"` : ''}>Send this page to a jeweller</a>
    </div>
  </div>
</section>`;
}

// ---------------------------------------------------------------- solution playbooks
// A day in your business (auto-playing loop, the rocket rides the track), the
// modules that segment uses first, a fit check that becomes a tailored CTA,
// and the first three steps. Data: content/solution-playbooks.js.
function dayLoop(day) {
  const n = day.length;
  const nodes = day.map(([t, m], i) => `<button type="button" class="day-node${i === 0 ? ' is-on' : ''}" data-day-i="${i}" style="--x:${(i / (n - 1)) * 100}%" aria-pressed="${i === 0}"><b>${t}</b><span>${m}</span></button>`).join('');
  const cards = day.map(([t, m, today, jwero], i) => `
      <div class="day-card${i === 0 ? ' is-on' : ''}" data-day-card="${i}">
        <p class="day-moment"><b>${t}</b> ${m}</p>
        <div class="day-cols">
          <div class="day-today"><p class="lane-tag">Today</p><p>${today}</p></div>
          <div class="day-jwero"><p class="lane-tag">With Jwero</p><p>${jwero}</p></div>
        </div>
      </div>`).join('');
  return `
<div class="day" data-day>
  <div class="day-track" role="tablist" aria-label="Moments in the day">
    <i class="day-fill"></i>${mark('day-rocket')}
    ${nodes}
  </div>
  <div class="day-cards">${cards}</div>
  <div class="day-ctl"><button type="button" class="day-play" data-day-play aria-pressed="true">Pause</button><span class="day-bar"><i></i></span><span class="day-count"><b data-day-n>1</b> / ${n}</span></div>
</div>`;
}
function moduleMap(modules, names) {
  return cards(modules.map(([href, why]) => ({ icon: LINK_ICONS[href] || 'sparkle', title: names[href] || href, text: why, link: { href, label: 'See ' + (names[href] || 'the module') } })), 3);
}
function fitCheck(items, wa, modules, names) {
  const first = names[modules[0][0]] || 'the first module', second = names[modules[1][0]] || 'the next';
  return `
<div class="fit" data-fit data-fit-first="${esc(first)}" data-fit-second="${esc(second)}">
  <div class="fit-items">${items.map((t) => `<button type="button" class="fit-item" aria-pressed="false">${t}</button>`).join('')}</div>
  <div class="fit-out">
    <div class="fit-meter" aria-hidden="true"><i></i></div>
    <p class="fit-verdict" data-fit-verdict aria-live="polite">Tap what’s true for you. We’ll say honestly where Jwero fits — and where it doesn’t yet.</p>
    <div class="cta-row">
      <a class="btn btn-primary" href="#" data-wa="${esc(wa)}" data-fit-cta>Show me this, live</a>
      <a class="btn btn-ghost" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=fit" rel="noopener" data-trial>Start for ₹3,600</a>
    </div>
  </div>
</div>`;
}
function playbookTop(pb, names, slug) {
  const { GEM_PAGE } = require('./content/gem');
  const g = GEM_PAGE[slug];
  const piece = g ? (g[1] === 'diamond' ? 'stone' : 'bangle') : '';
  return `${g ? section(`<div class="gem-head"><h2>A week in your business, on one ${piece}.</h2><p>Play the week, run a full day, or break it into the tools it lives in today.</p></div>
  ${gemStage2({ set: g[0], metal: g[1] })}`, { tone: 'tint' }) : ''}
${section(`${sectionHead('WHERE JEWELLERS LIKE YOU START', 'The six parts of Jwero you’d switch on first.', 'Everything else is inside the same workspace when you want it. Nothing here needs a separate login.')}
  ${moduleMap(pb.modules, names)}${pb.note ? `<p class="proof-caption">${pb.note}</p>` : ''}`, { tone: 'tint' })}`;
}
function playbookBottom(pb, names, slug) {
  const i = icpOf(slug);
  return `
${proofStrip2()}
${priceBlock(i, 'solution-price')}
${section(`${sectionHead('DOES THIS SOUND LIKE YOU?', 'Five things we hear from businesses like yours.', '')}
  ${fitCheck(pb.fit, pb.wa, pb.modules, names)}`)}
${section(`${sectionHead('WHAT HAPPENS AFTER YOU TAP', 'Three steps. No mystery.', '')}
  ${steps([
    { title: 'First, a reply', text: 'A real person and our AI answer in the chat. Bring one real situation from your day above.' },
    { title: 'Day 1 — fifteen minutes, your scenario', text: 'We run it through Jwero live. If we cannot help, we say so on the call.' },
    { title: 'Days 2–5 — a pilot on your own data', text: 'Your customers, your catalogue, your stock — however messy. You judge on your evidence, then it is your call.' },
  ])}
  <p class="cta-note" style="margin-top:14px">The full thirty days, step by step: <a href="/how-it-goes">How it goes →</a></p>`, { tone: 'tint' })}
${passItOn(i)}`;
}

// ---------------------------------------------------------------- intelligence
// "How Jwero decides" — the customer-intelligence engine as a four-stage flow
// plus a live simulator. Every number and every delta below is read from the
// product (journey_scoring/rules.ts, contact-profile-compute.ts,
// marketing-profile-codes.ts, suggested-segments-catalogue.ts,
// journey-template-presets.ts, send_window_learner.ts) — see
// blueprint/CUSTOMER-INTELLIGENCE-FACTS-2026-09.md. No ML is claimed: the
// scores are rule formulas a jeweller can read, each with a visible why.
const INTEL_SOURCES = ['WhatsApp', 'Website', 'Counter', 'POS', 'Gold schemes', 'Girvi', 'Karigar', 'Calls', 'Instagram', 'Loyalty', 'Occasions', 'Referrals', 'Email & SMS', 'Ads', 'Staff'];
const INTEL_SCORES = ['Intent', 'Conversion', 'Churn risk', 'Trust', 'Health', 'Opportunity', '… and five more'];
// Illustrative weights only — the engine's own weights are tuned per business and
// deliberately not published. d = [intent, conversion, confidence, trust]
const INTEL_SIGNALS = [
  { id: 'view', label: 'Viewed a bangle for 45 seconds', d: [10, 0, 0, 0] },
  { id: 'search', label: 'Searched “22k temple”', d: [10, 0, 0, 0] },
  { id: 'wish', label: 'Added it to her wishlist', d: [20, 0, 0, 0] },
  { id: 'cart', label: 'Added it to cart', d: [30, 10, 0, 0] },
  { id: 'price', label: 'Asked the price on WhatsApp', d: [30, 0, 0, 0] },
  { id: 'tried', label: 'Tried it on at the counter', d: [30, 10, 0, 0] },
  { id: 'appt', label: 'Booked an appointment', d: [20, 10, 0, 0] },
  { id: 'maturity', label: 'Her gold plan matures next month', d: [30, 20, 0, 0] },
  { id: 'missed', label: 'Missed a scheme instalment', d: [0, 0, 0, 20] },
  { id: 'complaint', label: 'Raised a complaint', d: [0, 0, 0, 50] },
];
function intelligence(opts = {}) {
  const chips = INTEL_SOURCES.map((s) => `<span>${s}</span>`).join('');
  const scores = INTEL_SCORES.map((s) => `<li>${s}</li>`).join('');
  const signals = INTEL_SIGNALS.map((g) => `<button type="button" class="intel-sig" data-sig="${g.id}" data-d="${g.d.join(',')}" aria-pressed="false">${g.label}</button>`).join('');
  const gauge = (k, l) => `<div class="intel-gauge"><span class="intel-gl">${l}</span><span class="intel-gt"><i data-gauge="${k}"></i></span><b data-gauge-n="${k}">0</b></div>`;
  return `
<div class="intel${opts.compact ? ' intel-compact' : ''}" data-intel>
  <div class="intel-flow cells">
    <div class="intel-stage">
      <p class="eyebrow">1 · SIGNALS</p>
      <div class="intel-big"><span class="stat-n">198</span><span>kinds of customer signal</span></div>
      <p>From 36 sources — the counter, WhatsApp, the website, schemes, girvi, the workshop, calls, Instagram, occasions. Many of them move a score the moment they land.</p>
      <div class="intel-chips" aria-hidden="true">${chips}</div>
    </div>
    <div class="intel-stage">
      <p class="eyebrow">2 · STATES</p>
      <div class="intel-mult" aria-label="5 lifecycle stages times 11 RFM segments times 4 value tiers times 6 channels times 5 occasion types equals 6,600 customer states">
        <span><b>5</b><small>lifecycle stages</small></span><i>×</i>
        <span><b>11</b><small>RFM segments</small></span><i>×</i>
        <span><b>4</b><small>value tiers</small></span><i>×</i>
        <span><b>6</b><small>channels</small></span><i>×</i>
        <span><b>5</b><small>occasions</small></span>
        <span class="intel-total"><b><i>=</i><span data-total>6,600</span></b><small>customer states</small></span>
      </div>
      <p>Every customer sits in exactly one — new or lapsed, champion or about-to-sleep, WhatsApp or call, birthday or wedding — before a single score is read.</p>
    </div>
    <div class="intel-stage">
      <p class="eyebrow">3 · SCORES</p>
      <div class="intel-big"><span class="stat-n">11</span><span>live scores, each with a visible why</span></div>
      <ul class="intel-scores">${scores}</ul>
      <p>Rules you can read, not a black box. Scores fade when she goes quiet, so the list stays honest. Ask “why is she at risk?” and the record shows its reasons.</p>
    </div>
    <div class="intel-stage">
      <p class="eyebrow">4 · THE DECISION</p>
      <dl class="intel-decide">
        <div><dt>Who</dt><dd>41 ready segments in 13 families — high-intent enquiry, bridal enquiry, abandoned cart, viewers who never bought, VIP at risk, scheme maturing.</dd></div>
        <div><dt>What</dt><dd>Six plays — nurture, engage, upsell VIP, retain, reactivate, win back — with an expected outcome and ₹ potential on every record, and a taste profile from her very first purchase.</dd></div>
        <div><dt>When</dt><dd>Her best hour on her best channel; the shop’s windows re-learnt from real reads and replies; one fatigue cap across every send engine.</dd></div>
        <div><dt>How</dt><dd>300+ ready journeys and 30 personalisation fields draft the message. Nothing sends until you widen what may run alone.</dd></div>
      </dl>
    </div>
  </div>
  <div class="intel-sim">
    <div class="intel-sim-head">
      <p class="eyebrow">TRY IT · MEERA’S WEEK</p>
      <h3>Tap what she did. Watch the scores move — and the decision change.</h3>
      <p class="intel-note">Illustrative weights. The engine’s own weights and decision rules are tuned per business and not published.</p>
    </div>
    <div class="intel-sim-body">
      <div class="intel-sigs">${signals}<button type="button" class="intel-reset" data-sig-reset>Reset the week</button></div>
      <div class="intel-out">
        ${gauge('intent', 'Intent')}${gauge('conv', 'Conversion')}${gauge('conf', 'Confidence')}${gauge('trust', 'Trust risk')}
        <div class="intel-card">
          <div class="intel-kv"><span>Segment</span><strong data-out="segment">New customer · listening</strong></div>
          <div class="intel-kv"><span>Play</span><strong data-out="play">Nurture — no send yet</strong></div>
          <div class="intel-kv"><span>Channel · hour</span><strong data-out="when">WhatsApp · 18:00–20:00</strong></div>
          <div class="intel-kv"><span>Waiting for your tap</span><strong data-out="draft">Nothing. Jwero keeps listening.</strong></div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

// Stat wall — product-truth numbers only (honesty tier A).
function stats(items) {
  return `<div class="stats">${items
    .map((s) => `<div class="stat"><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></div>`)
    .join('')}</div>`;
}

// The Tier-A proof strip (Blueprint v2 §1.4.1) — one source of truth, deploy on Home/Platform/Pricing.
const PROOF_STRIP_ITEMS = [
  { n: '198', l: 'kinds of customer signal, scored into 11 live scores', href: '/platform/customer-memory' },
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
          <li data-mode="run"><span>Posting new designs to your catalogue</span><button type="button" class="speed-toggle" aria-pressed="true"><i></i><b>Runs</b><b>Asks</b></button></li>
          <li data-mode="run"><span>Answering price questions at midnight</span><button type="button" class="speed-toggle" aria-pressed="true"><i></i><b>Runs</b><b>Asks</b></button></li>
          <li data-mode="run"><span>Reminding customers an instalment is due</span><button type="button" class="speed-toggle" aria-pressed="true"><i></i><b>Runs</b><b>Asks</b></button></li>
          <li data-mode="run"><span>Chasing the follow-up nobody had time for</span><button type="button" class="speed-toggle" aria-pressed="true"><i></i><b>Runs</b><b>Asks</b></button></li>
        </ul>
      </div>
      <div class="speed speed-ask">
        <p class="speed-title">Ask me first</p>
        <ul>
          <li data-mode="ask"><span>Any discount beyond the limit you set</span><button type="button" class="speed-toggle" aria-pressed="false"><i></i><b>Runs</b><b>Asks</b></button></li>
          <li data-mode="ask"><span>Messages to your biggest families</span><button type="button" class="speed-toggle" aria-pressed="false"><i></i><b>Runs</b><b>Asks</b></button></li>
          <li data-mode="ask"><span>A festival campaign before it goes out</span><button type="button" class="speed-toggle" aria-pressed="false"><i></i><b>Runs</b><b>Asks</b></button></li>
          <li data-mode="ask"><span>Anything at all that you choose to flag</span><button type="button" class="speed-toggle" aria-pressed="false"><i></i><b>Runs</b><b>Asks</b></button></li>
        </ul>
      </div>
    </div>
    <p class="speed-set"><span class="speed-tally" aria-live="polite"><b data-run>4</b> run on their own · <b data-ask>4</b> wait for you.</span> Set it once, per agent, per branch. Change your mind any time.</p>
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
    ['05', 'Executes', 'WhatsApp, Instagram, website, phone. In seconds, not mornings.'],
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
<div class="one-system" data-gfx>
  <p class="one-system-tag">BECAUSE IT'S ONE SYSTEM</p>
  <ul class="one-system-list is-linked">
    ${lines.map((l, i) => `<li style="--i:${i}">${l}</li>`).join('')}
  </ul>
</div>`;
}

// The three pillars — Remember / Sell / Run — used on Home + Platform as the OS app grid.
const PILLARS = [
  {
    key: 'remember', title: 'REMEMBER', promise: 'Every customer, occasion, taste, scheme balance and conversation in one record that belongs to the business — not a salesman’s phone.',
    chips: [['Jewellery CRM', '/products/crm'], ['Customer Memory', '/platform/customer-memory'], ['Loyalty', '/products/gold-schemes'], ['Gold Schemes', '/products/gold-schemes'], ['Gold Savings Plans', '/products/gold-schemes']],
    proof: 'Every visit, message and instalment scored on one card — 11 live scores decide who to reach and when.',
  },
  {
    key: 'sell', title: 'SELL', promise: 'The counter that never closes: WhatsApp, Instagram, Messenger, website and video — with AI that answers in seconds and follows up without being told.',
    chips: [['WhatsApp Commerce', '/products/whatsapp'], ['Instagram & Facebook', '/products/instagram-facebook'], ['AI Sales Agents', '/products/ai-sales-agents'], ['Catalogue', '/products/catalog']],
    proof: 'WhatsApp Business API + Meta channels; 240+ governed AI actions; AI chat and calls in 14 languages.',
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
      <h3><span class="jtbd-when"><em>When</em>${j.when},</span><span class="jtbd-want"><em>I want to</em>${j.want}</span><span class="jtbd-so"><em>so that</em>${j.so}.</span></h3>
    </div>`
    )
    .join('')}</div>`;
}

// Comparison matrix — T6 pages. rows: [{label, jwero, other}]; jwero/other can carry a "roadmap" flag.
// Cells marked "[VERIFY]" are unconfirmed rather than asserted (D3) — never state a specific unverified
// fact about a named third party as settled.
// Render editorial "[VERIFY — …]" markers as a neutral styled badge instead of raw brackets.
function verifyBadge(text) {
  return String(text)
    .replace(/\[VERIFY(?:\s*[—-]\s*([^\]]*))?\]/g, (m, rest) =>
      `<span class="verify-tag">Not stated publicly${rest ? ' · ' + rest.trim().replace(/^not found in public materials$/i, '') : ''}</span>`.replace(' · </span>', '</span>'))
    .replace(/\s*\[VERIFY current\/other tiers\]/g, ', other tiers not confirmed')
    .replace(/\[VERIFY[^\]]*\]/g, '<span class="verify-tag">Not confirmed</span>')
    .replace(/\[Being finalised — see \/pricing\]/g, '₹18,000/month, every module — <a href="/pricing">see pricing</a>');
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
  <p class="compare-disclaimer">Claims about Jwero above are product-verified. Claims about ${esc(theirName)} are based on its public materials; where a capability is <em>not stated publicly</em> we say so rather than guess — <a href="/contact">tell us if something here is wrong</a> and we’ll correct it.</p>`;
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
// Before/after pairs render as the comparison table everywhere (the old Today ↔ With Jwero
// switch hid one side; the table shows both).
function impactGrid(items) { return compareRows(items); }


// Security, compliance and focus, in one view. Every line is something the
// security and enterprise pages already state and the product does. Formal
// certifications are shown with their true status — "Planned" — and never as a
// badge: the site says so on /trust/security and this must not contradict it.
const SECURITY_CONTROLS = [
  ['shield', 'Your own database', 'One isolated database per business. Your customers are never stored alongside another jeweller’s.'],
  ['key', 'Encrypted, in transit and at rest', 'Credentials are encrypted; data is encrypted on the wire and on disk.'],
  ['users', 'You decide who sees what', 'Around 150 permissions, per role and per branch. Multi-factor login and passkeys; single sign-on for chains.'],
  ['checkbox', 'Two people on money', 'Maker-checker approvals and tamper-evident trails on financial records.'],
  ['refresh', 'Backups you control', 'You set the backup frequency and retention. Ask us for the latest restore check for your workspace.'],
  ['download', 'Export any time', 'Your data leaves with you in standard formats whenever you ask. No hostage clauses.'],
];
const COMPLIANCE_ROWS = [
  ['India’s DPDP Act', 'Data-protection statement published; consent and opt-out handling built into every channel.', 'in', '/legal/dpdp'],
  ['GST record keeping', 'Orders, invoices, payments, purchases and payroll are never deleted, on every plan.', 'in', '/pricing'],
  ['WhatsApp Business', 'Runs on Meta’s official Business API — templates, consent and opt-outs handled.', 'in', '/products/whatsapp'],
  ['BIS hallmarking & HUID', 'HUID and certificate details are recorded on the piece itself.', 'in', '/products/catalog'],
  ['SOC 2', 'Not certified yet. Planned, and published only when earned.', 'plan', '/trust/security'],
  ['ISO 27001', 'Not certified yet. Planned, and published only when earned.', 'plan', '/trust/security'],
];
// Trust badges. Jwero's own marks, never a certification body's logo: a badge
// here states a status, and only "In place" means the thing is done. ISO 27001,
// SOC 2, GDPR and an independent penetration test are not achieved and say so.
// [short, name, status, what is true today, href]
const TRUST_BADGES = [
  ['GDPR', 'GDPR (UK and EU)', 'in', 'A data processing agreement on request, export and deletion of personal data, every processor listed, and hosting in your region on request.', '/legal/data-policy', 'gl'],
  ['VAT', 'VAT and sales-tax records', 'in', 'Invoices, orders, payments and purchases are never deleted on a schedule, ready for your tax authority.', '/legal/data-policy', 'gl'],
  ['DPDP', 'India’s DPDP Act, 2023', 'in', 'Data protection statement, processor terms, consent records, export and erasure tools.', '/legal/dpdp', 'in'],
  ['IN', 'Data hosted in India or your region', 'in', 'Each business in its own database, in India by default or in your region on request; Enterprise can self-host.', '/legal/sub-processors'],
  ['PCI', 'Card data (PCI DSS)', 'in', 'Card details never reach Jwero. Payments run through PCI DSS certified providers.', '/legal/sub-processors'],
  ['GST', 'GST record keeping', 'in', 'Invoices, orders, payments, purchases and payroll are never deleted on a schedule.', '/legal/data-policy', 'in'],
  ['BIS', 'BIS hallmarking and HUID', 'in', 'HUID and certificate details recorded on each piece.', '/products/catalog', 'in'],
  ['ISO', 'ISO/IEC 27001', 'prog', 'Not certified. Security policy and control mapping are drafted; certification is being prepared.', '/trust/security'],
  ['SOC 2', 'SOC 2', 'prog', 'Not audited. The system description is drafted; an audit has not started.', '/trust/security'],
  ['OWASP', 'OWASP Top 10 and penetration test', 'plan', 'No independent penetration test has been done yet. One is planned, and the summary will be shared here.', '/trust/security'],
];
const TRUST_STATUS = { in: 'In place', prog: 'In progress', plan: 'Planned' };
function trustBadges() {
  return `
<div class="tbadges">
  <p class="tbadge-legend"><span class="tb-in">In place</span><span class="tb-prog">In progress, not certified</span><span class="tb-plan">Planned, not started</span></p>
  <div class="tbadge-grid">${TRUST_BADGES.map(([s, n, st, d, h]) => `
    <a class="tbadge tb-${st}" href="${h}">
      <span class="tbadge-seal" aria-hidden="true"><b>${s}</b></span>
      <span class="tbadge-body"><strong>${n}</strong><em>${TRUST_STATUS[st]}</em><span>${d}</span></span>
    </a>`).join('')}
  </div>
</div>`;
}

// The short trust strip for the home page: every standard as a small seal with
// its real status, three facts, and a door to each trust document.
function trustStrip(opts = {}) {
  const badges = opts.inOnly ? TRUST_BADGES.filter(([, , st]) => st === 'in') : TRUST_BADGES;
  const docs = [['/trust', 'Trust Centre'], ['/trust/security', 'Security'], ['/legal/privacy', 'Privacy Policy'], ['/legal/terms', 'Terms of Use'], ['/legal/data-policy', 'Data Policy'], ['/legal/sub-processors', 'Sub-processors'], ['/legal/dpdp', 'DPDP statement']];
  return `
<div class="tstrip">
  <div class="tstrip-seals">${badges.map(([s, n, st, d, h, reg]) => `<a class="tseal tb-${st}"${reg ? ` data-reg="${reg}"` : ''} href="${h}" title="${esc(n)}: ${esc(TRUST_STATUS[st])}. ${esc(d)}"><span class="tseal-mark" aria-hidden="true"><b>${s}</b></span><span class="tseal-name">${n.replace('India’s ', '').replace(', 2023', '').replace(' and penetration test', '').replace('ISO/IEC', 'ISO')}</span><em>${TRUST_STATUS[st]}</em></a>`).join('')}</div>
  <ul class="tstrip-facts">
    <li>${icon('shield')}<span><b>Your own database.</b> Never stored with another jeweller’s.</span></li>
    <li>${icon('key')}<span><b>Encrypted</b> in transit and at rest, with roles you control.</span></li>
    <li>${icon('download')}<span><b>Export any time.</b> Your data leaves with you.</span></li>
  </ul>
  <nav class="tstrip-docs" aria-label="Trust documents">${docs.map(([h, t], i) => `<a href="${h}"${i === 0 ? ' class="is-main"' : ''}>${t}${i === 0 ? ' →' : ''}</a>`).join('')}</nav>
</div>`;
}

// Proof, in four kinds: who uses it, what the product itself counts, what is
// published in the open, and how to check for yourself. Every line links to
// where it can be verified; nothing here is a testimonial.
function proofGrid() {
  const nums = [
    ['15', 'named jewellers running on Jwero', '/customers'],
    ['198', 'kinds of signal, scored into 11 live scores', '/platform/customer-memory'],
    ['240+', 'governed AI actions, each permissioned', '/platform/ai-workforce'],
    ['14', 'languages the AI speaks', '/products/ai-sales-agents'],
    ['5', 'levels of AI kill switch', '/platform/ai-workforce'],
    [String(STACK_N), 'separate tools it replaces', '#count-yours'],
  ];
  const cols = [
    ['users', 'In use', [['Fifteen named jewellers, each a permissioned customer', '/customers'], ['Built by a jewellery family you can look up', '/company'], ['A registered company, with its CIN on every page', '/company']]],
    ['pie', 'Counted by the product', [['Every number above is measured in the system', '/platform'], ['A weekly growth report on your own customers', '/platform/customer-memory'], ['Every AI action logged, with who approved it', '/platform/ai-workforce']]],
    ['eye', 'In the open', [['The price is published, with every usage rate', '/pricing'], ['What it does not do yet is on a public roadmap', '/roadmap'], ['Standards shown with their real status', '/trust']]],
    ['check', 'Check it yourself', [['First month ₹3,600, every module', TRIAL_URL + 'proof'], ['See it on a call before you start', '/how-it-goes'], ['Leave when you like; export everything', '/legal/data-policy']]],
  ];
  return `
<div class="proofg">
  <div class="proofg-nums">${nums.map(([n, t, h]) => `<a class="proofg-num" href="${h}"><b>${n}</b><span>${t}</span></a>`).join('')}</div>
  <div class="proofg-cols">${cols.map(([ic, title, items]) => `<div class="proofg-col"><p class="proofg-k">${icon(ic)}${title}</p><ul>${items.map(([t, h]) => `<li><a href="${h}"${/^https/.test(h) ? ' rel="noopener" data-trial' : ''}>${t}</a></li>`).join('')}</ul></div>`).join('')}</div>
</div>`;
}

function securityBlock() {
  return `
<div class="sec">
  <div class="sec-controls cells">${SECURITY_CONTROLS.map(([i, t, d]) => `<div class="card sec-card">${icon(i)}<h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
  <div class="sec-side">
    <div class="sec-comp">
      <p class="eyebrow">COMPLIANCE, STATED PLAINLY</p>
      <ul>${COMPLIANCE_ROWS.map(([n, d, st, h]) => `<li><a href="${h}"><span class="sec-pill sec-${st}">${st === 'in' ? 'In place' : 'Planned'}</span><b>${n}</b><span>${d}</span></a></li>`).join('')}</ul>
    </div>
    <div class="sec-only">
      <p class="eyebrow">ONLY JEWELLERY</p>
      <p>Jwero is built for one trade and sold to no other. Weight, purity, live rate, making charge, hallmark, memo, karigar, scheme and girvi are first-class in the data — not fields bolted onto retail software.</p>
    </div>
  </div>
  <div class="cta-row sec-cta">
    <a class="btn btn-primary" href="/trust">Open the Trust Centre</a>
    <a class="btn btn-ghost" href="#" data-wa="securitypack">Request the security pack for my IT team</a>
  </div>
</div>`;
}

// The same before/after pairs as a comparison: both sides visible at once,
// one row per lever, so the whole argument fits in a single view.
function compareRows(items) {
  return `<div class="cmp" role="table" aria-label="Today compared with Jwero">
  <div class="cmp-head" role="row"><span role="columnheader"></span><span role="columnheader">Today</span><span role="columnheader" class="cmp-go">With Jwero</span></div>
  ${items.map((i) => `
  <div class="cmp-row" role="row">
    <div class="cmp-lever" role="rowheader"><b>${i.lever}</b>${i.link ? `<a href="${i.link.href}">${i.link.label} →</a>` : ''}</div>
    <p class="cmp-before" role="cell"><span class="cmp-tag">Today</span>${i.before}</p>
    <p class="cmp-after" role="cell"><span class="cmp-tag cmp-tag-go">With Jwero</span>${i.after}${i.managed ? `<span class="cmp-managed"><b>Or Jwero does it:</b> ${i.managed}</span>` : ''}</p>
  </div>`).join('')}
</div>`;
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
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">${mark('mark-xs')}Approval queue · 3 waiting</span></div>
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

// The brand mark as two layers — body and flame — so the flame can flicker and
// the rocket can fly along its own axis (30° right of vertical) without a second fire.
function mark(cls = '') {
  return `<span class="mark${cls ? ' ' + cls : ''}" aria-hidden="true"><img class="mark-body" src="/assets/jwero-mark-body.png" alt="" width="86" height="122"><img class="mark-flame" src="/assets/jwero-mark-flame.png" alt="" width="86" height="122"></span>`;
}

const mockChat = `
<div class="mock" role="img" aria-label="Illustration of a WhatsApp sales conversation">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">WhatsApp · 11:42 pm</span></div>
  <div class="bubble in">Do you have this bangle in 22k, around 18 grams?</div>
  <div class="bubble out">Yes — two designs in 22k near 18 g. At today’s rate: full price with making charges below. Shall I hold one for a store visit?<span class="bubble-tag">${mark('mark-xs')}Drafted by AI staff · sent after approval</span></div>
  <div class="bubble in">Saturday 5pm works.</div>
  <div class="mock-foot">Enquiry → priced reply → appointment. While the store slept.</div>
</div>`;

const mockChatCatalog = `
<div class="mock" role="img" aria-label="Illustration of a WhatsApp catalogue share and checkout">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">WhatsApp · Catalogue share</span></div>
  <div class="bubble in">Can you share the necklace set you posted on Instagram?</div>
  <div class="bubble out">Here’s the live-price link — updates automatically with today’s rate.<span class="bubble-tag">${mark('mark-xs')}Catalogue link · view &amp; checkout tracked</span></div>
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
  <div class="mock-foot">One record per customer and family, with 11 scores, from intent to churn risk, that tell your team who to reach and when.</div>
</div>`;

// The shop's day on one screen: counter, stock and day-close. Illustrative
// figures; the hero visual for whole-business pages.
function mockShop(o = {}) {
  const d = Object.assign({
    title: 'The shop · today, 9:04 pm',
    counter: [['Last bill', '22k bangle · old gold adjusted · GST'], ['Bills today', '14']],
    stock: [['On hand, valued at today’s rate', '1,284 pieces'], ['Sitting 180 days or more', '37 pieces']],
    close: [['Cash counted against bills', 'Matched'], ['Posted to the books', '14 bills · 2 purchases']],
  }, o);
  const secs = d.secs || [['store', 'Counter', d.counter], ['box', 'Stock', d.stock], ['receipt', 'Day-close', d.close]];
  const names = secs.map((s) => s[1].toLowerCase());
  const list = names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
  const rows = (r) => r.map(([k, v]) => `<div class="mock-kv"><span>${k}</span><strong>${v}</strong></div>`).join('');
  return `
<div class="mock mock-shop" role="img" aria-label="Illustration of ${list} on one screen">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">${d.title}</span></div>
  ${secs.map(([ic, label, r]) => `<p class="mock-sec">${icon(ic)}${label}</p>${rows(r)}`).join('\n  ')}
  <div class="mock-foot">An illustration. ${list.charAt(0).toUpperCase() + list.slice(1)} read and write the same record, so the day closes on the numbers, not from memory.</div>
</div>`;
}

// The one-record architecture visual — the home/platform OS-proof centrepiece (BP2 §1.1.3, home B3).
const mockOneRecord = `
<div class="mock mock-onerecord" role="img" aria-label="Illustration of one record touched by every department">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">One record · the whole business</span></div>
  <div class="onerecord-grid">
    <div class="onerecord-chip">🧾 Counter bill</div>
    <div class="onerecord-chip">📦 Stock in and out</div>
    <div class="onerecord-center">One record<br><span>customers · stock · cash · team</span></div>
    <div class="onerecord-chip">💬 WhatsApp reply</div>
    <div class="onerecord-chip">📒 Books</div>
  </div>
  <div class="mock-foot">Every module reads and writes this one record. That's the operating system.</div>
</div>`;

// ---------------------------------------------------------------- graphics
// "Fifty systems" against "one platform": the left cell lets the reader watch
// their own stack drift past in lanes; the right cell is the single answer.
// Screen readers get the plain list instead of four moving lanes.
function systemSplit(systems, more) {
  const lanes = [0, 1, 2, 3].map((i) => systems.filter((_, k) => k % 4 === i));
  const lane = (items, i) => {
    const chips = (dup) => items.map((t) => `<button type="button" class="chaos-chip${dup ? ' dup' : ''}" aria-pressed="false"${dup ? ' tabindex="-1" aria-hidden="true"' : ''}>${t}</button>`).join('');
    return `<div class="chaos-lane" style="--lane:${i}"><div class="chaos-track">${chips(false)}${chips(true)}${chips(true)}</div></div>`;
  };
  return `
<div class="split">
  <div class="split-chaos">
    <p class="split-title">Fifty systems.</p>
    <p class="split-hint">Tap every one you run today.</p>
    <div class="chaos" data-count>
      <div class="chaos-wave"></div>
      ${lanes.map(lane).join('')}
    </div>
    <p class="syscount-more">${more}</p>
    <p class="split-tally" aria-live="polite"></p>
  </div>
  <div class="split-one syscount-one">
    <p class="split-versus" aria-hidden="true"><b data-n>0</b><i>→</i><b>1</b></p>
    <strong>One platform.</strong>
    <span>One login. One truth. One bill.</span>
    <div class="split-pulse" aria-hidden="true"><i></i>${icon('record')}<i></i></div>
  </div>
</div>`;
}

// The signature graphic: a brilliant-cut stone drawn as a slowly turning dot
// matrix (site.js paints it), with the modules that touch the record pinned
// around it and two bracketed callouts. Every label restates a verified fact.
function gemStage({ nodes, callouts }) {
  return `
<div class="gem-stage" data-gem>
  <canvas aria-hidden="true"></canvas>
  ${nodes.map((n, i) => `<button type="button" class="gem-node gem-node-${i + 1}" aria-expanded="false" aria-describedby="gem-note-${i + 1}">${icon(n.icon)}<span class="sr-only">${esc(n.label)}</span></button>
  <div class="gem-note gem-note-${i + 1}" id="gem-note-${i + 1}" role="tooltip"><strong>${esc(n.label)}</strong><span>${n.note}</span></div>`).join('')}
  <p class="gem-hint" aria-hidden="true">Tap a module to see what it reads and writes</p>
  ${callouts.map((c, i) => `<div class="callout callout-${i + 1}">${c.title ? `<strong>${c.title}</strong>` : ''}<span>${c.text}</span></div>`).join('')}
</div>`;
}


// The whole business, department by department: today versus on one record.
// Shown on the home page and the platform page.
const DEPARTMENTS = [
  {
    lever: 'CUSTOMERS',
    managed: 'Jwero’s team answers and follows up every enquiry for you.',
    before: 'An enquiry at 11pm waits until morning, and a salesperson who leaves takes the relationships with them.',
    after: 'Every enquiry gets a priced reply within minutes, and every customer lives on the business’s own record.',
    link: { href: '/products/crm', label: 'See the CRM' },
  },
  {
    lever: 'SHOWROOM',
    managed: 'Jwero books the appointments and follows up every walkout.',
    before: 'Nobody knows who walked in, what they tried, or why they left without buying.',
    after: 'Walk-ins checked in, a live view of the floor, and a follow-up drafted for every walkout.',
    link: { href: '/products/showroom', label: 'See the floor' },
  },
  {
    lever: 'BILLING',
    managed: 'Jwero sets up your counter and trains your staff, in a day.',
    before: 'Rate typed by hand, old gold worked out on a calculator, the day closed from memory.',
    after: 'Scan to bill at the live rate, with old-gold exchange, returns, GST and a cash day-close on one screen.',
    link: { href: '/products/pos', label: 'See the counter' },
  },
  {
    lever: 'STOCK',
    managed: 'Jwero reviews ageing every month and plans what to push, reorder or melt.',
    before: 'Capital frozen in designs nobody is buying, and a stock value that is a guess.',
    after: 'Every piece valued at today’s rate, ageing flagged, and idle pieces matched to the customers who would buy them.',
    link: { href: '/products/inventory', label: 'See inventory' },
  },
  {
    lever: 'PURCHASE',
    managed: 'Jwero chases vendors and tracks every order to delivery.',
    before: 'Orders on phone calls, vendor balances in a notebook, bills matched at month end.',
    after: 'Purchase order, goods received, bill and credit note in one chain, and vendors check their own status.',
    link: { href: '/products/purchase-vendors', label: 'See purchase' },
  },
  {
    lever: 'WORKSHOP',
    managed: 'Jwero follows up karigar job work and flags any shortfall.',
    before: 'Gold goes out to the karigar and the shortfall shows up at stocktake.',
    after: 'Metal issued and returned in fine grams, with wastage checked against the norm at each stage.',
    link: { href: '/products/manufacturing', label: 'See manufacturing' },
  },
  {
    lever: 'ACCOUNTS',
    managed: 'Jwero keeps the entries current and sends the month’s reports.',
    before: 'The accountant re-enters every bill, and receivables are chased when someone remembers.',
    after: 'Every sale, purchase and payment posts itself, GST-ready, with Tally and Zoho Books bridges.',
    link: { href: '/products/billing-finance', label: 'See the books' },
  },
  {
    lever: 'TEAM',
    managed: 'Jwero trains your staff, in the store and online.',
    before: 'Attendance in a register, incentives argued at month end, training by standing next to someone.',
    after: 'Attendance, payroll, incentives and training on the same record as the sales they earned.',
    link: { href: '/products/hr-payroll', label: 'See HR' },
  },
  {
    lever: 'DECISIONS',
    managed: 'Jwero’s analyst explains the numbers each week and says what to do next.',
    before: 'You learn how the month went after it ends, from a report somebody built by hand.',
    after: 'Today’s sales, stock, cash and pending work on one dashboard. Ask a question, get a report.',
    link: { href: '/products/reports', label: 'See reports' },
  },
];

// Every separate tool a jewellery business ends up running, by department:
// one dense alphabetical cloud, all visible and tappable (departments only group
// the data), with the count between the tools
// and the one platform, and a merge that pulls them into it.
// Each name is something a Jwero module does today. The cloud is alphabetical;
// the department tabs still light and select their own tools.
const STACK = [
  ['Selling', 'chat', ['WhatsApp API', 'DMs', 'Facebook page inbox', 'Website live chat', 'Forms', 'Document viewer', 'Ecommerce website', 'Marketplace seller panels', 'Video call app', 'Meetings', 'Shareable live catalogues', 'Quotation maker', 'Business email', 'Shopify integration', 'WooCommerce integration', 'Google Shopping', 'Franchise management', 'Calendar']],
  ['Counter', 'store', ['ERP', 'Billing software', 'POS counter', 'Barcode &amp; tagging', 'Gold rate updates', 'Old gold management', 'Pricing engine', 'Estimate pad']],
  ['Stock', 'box', ['Inventory software', 'Inventory intelligence', 'Vendor portal']],
  ['Workshop', 'scale', ['Hallmark tracker', 'Karigar portal', 'Repairs management']],
  ['Customers', 'record', ['CRM', 'Loyalty cards', 'Gold scheme register', 'Girvi register', 'Digital gold app', 'Occasion diary', 'Appointment diary', 'Walk-in register', 'CCTV tracking', 'RFM', 'Customer segmentation', 'Customer journeys', 'Lead finder', 'Customer personalisation engine']],
  ['Marketing', 'megaphone', ['SMS', 'RCS', 'Push notifications', 'Email marketing tool', 'Social media scheduler', 'Pinterest', 'YouTube', 'LinkedIn', 'Google Business reviews', 'Website heatmaps', 'Broadcasts', 'Campaigns', 'Marketing automation', 'Visitor tracking', 'Google Tag Manager', 'Pixels', 'Comments management', 'A/B testing', 'Coupons management', 'X', 'Threads', 'Stories', 'Reels', 'ChatGPT Ads', 'Meta Ads', 'Google Ads', 'Asset library', 'Social media post creator', 'Ads creator']],
  ['AI', 'sparkle', ['AI agents', 'AI inbound calling', 'AI outbound calling campaigns', 'Autonomous customer follow-ups', 'MCP tools', 'AI image generation', 'AI content creation', 'Automation rules', 'Webhooks &amp; APIs']],
  ['Books', 'receipt', ['Tally integration', 'Zoho integration', 'Payment reminders']],
  ['Team', 'users', ['HR', 'Attendance register', 'Payroll software', 'Incentive sheet', 'LMS', 'Team chat app', 'Recruitment management', 'Task management']],
  ['Decisions', 'pie', ['MIS reports', 'Branch report calls', 'Call tracking tool', 'Google Sheets']],
];
const STACK_N = STACK.reduce((a, g) => a + g[2].length, 0);

// What each tool costs and takes today:
// [average ₹ a month for a typical paid plan in India (about five logins),
//  hours a week to operate it, what the price is based on, overlap group,
//  confidence, and what the price and hours scale with: 'u' = team size,
//  'l' = number of showrooms, none = flat]. Tools in the same overlap group are usually one product, so the
// group is charged once, at its highest price. Researched 2026-10-02 from
// published vendor prices; "low" confidence rows are estimates. Listed under
// the section and in blueprint/STACK-SAVINGS-ASSUMPTIONS.md.
const STACK_COST = {
  "A/B testing": [3500, 0.5, "Testing apps about $30 to $75 a month; VWO paid plans are far higher", "", "low"],
  "AI agents": [4000, 2, "Chatbot builders $29 to $79 a month (WotNot, Tidio Lyro, Intercom Fin base)", "", "medium"],
  "AI content creation": [2500, 2, "ChatGPT Plus ₹1,999; Jasper Creator $39 to $49", "", "medium"],
  "AI image generation": [2000, 2, "Midjourney Standard $24 to $30 a month", "", "medium"],
  "AI inbound calling": [2500, 1, "India vendors bill mostly per minute; platform fee is an estimate", "aicall", "low"],
  "AI outbound calling campaigns": [2500, 1.5, "Same vendors as inbound; counted once with it", "aicall", "low"],
  "Ads creator": [1500, 2, "Canva Pro ₹499 at the low end; AI ad-creative tools $29 to $39", "creative", "low"],
  "Appointment diary": [480, 1, "Zoho Bookings ₹360 to ₹480 a user; Calendly $10 to $12", "meet", "medium"],
  "Asset library": [650, 1, "About 2 TB of paid cloud storage", "", "low"],
  "Attendance register": [500, 1, "Attendance apps ₹50 to ₹100 a staff member; often inside HR tools", "hr", "low", "u"],
  "Automation rules": [1500, 1, "Zapier Professional ₹1,680 to ₹2,520; Make Core ₹1,000 to ₹1,350; Pabbly about ₹1,300", "integ", "high"],
  "Autonomous customer follow-ups": [2000, 3, "A CRM or WhatsApp automation tier; no standalone product", "mktauto", "low"],
  "Barcode &amp; tagging": [400, 3, "Label software ₹5,000 to ₹15,000 one time, spread over three years", "erp", "low", "l"],
  "Billing software": [1100, 6, "Marg Jewellery ₹10,300 to ₹26,000 a year; Online Munim ₹7,670 to ₹22,184; Vyapar ₹3,799 to ₹4,799", "erp", "medium", "l"],
  "Branch report calls": [0, 3, "Phone calls and WhatsApp today", "", "low", "l"],
  "Broadcasts": [1500, 2, "AiSensy Basic ₹1,500; counted once with WhatsApp API", "wa", "medium"],
  "Business email": [900, 1, "Zoho Mail ₹90 to ₹180 a user; Google Workspace about ₹125 to ₹270; five users", "", "medium", "u"],
  "Calendar": [0, 0.5, "Free", "", "high"],
  "Call tracking tool": [3500, 1.5, "MyOperator ₹2,500 to ₹5,000; Exotel from about ₹3,000; Knowlarity ₹1,999 an agent", "", "medium", "u"],
  "Campaigns": [1200, 2, "Zoho Marketing Automation Standard ₹1,140; counted once with marketing automation", "mktauto", "low"],
  "CCTV tracking": [2500, 1, "People-counting services $9 to $49 a sensor; two points assumed", "", "low", "l"],
  "ChatGPT Ads": [0, 0.5, "No established paid tool; ad spend excluded", "", "low"],
  "Comments management": [1700, 2, "Zoho Social ₹570 to ₹900; Hootsuite ₹2,600; counted once with DMs", "social", "medium"],
  "Coupons management": [1000, 0.5, "Coupon tools from about $20 a month", "", "low"],
  "CRM": [5000, 5, "Zoho CRM Standard ₹800 to Professional ₹1,400 a user; five users", "", "high", "u"],
  "Customer journeys": [1700, 1.5, "Zoho Marketing Automation Professional ₹1,740; counted once", "mktauto", "low"],
  "Customer personalisation engine": [6300, 1, "CleverTap Essentials $75; WebEngage Solo $199", "cdp", "low"],
  "Customer segmentation": [1500, 1.5, "A CRM or data-platform feature; counted once with personalisation", "cdp", "low"],
  "Digital gold app": [4000, 2, "One white-label vendor: ₹75,000 to ₹1,00,000 set-up plus yearly fee, over three years", "", "low"],
  "DMs": [1700, 3, "Zoho Social ₹570 to ₹3,800; Hootsuite Standard ₹2,600", "social", "medium"],
  "Document viewer": [0, 0.5, "Free", "", "high"],
  "Ecommerce website": [3000, 5, "Shopify India Basic ₹1,499 to ₹1,994; Grow ₹5,599 to ₹7,447", "", "high"],
  "Email marketing tool": [1200, 1.5, "Mailchimp Standard from $20; Zoho Campaigns ₹240 to ₹345", "", "medium"],
  "ERP": [4000, 8, "Marg Gold ₹26,000 a year; Online Munim Pro ₹22,184; others ₹30,000 to ₹1,50,000", "erp", "low", "l"],
  "Estimate pad": [70, 2, "Vyapar mobile ₹699 to ₹799 a year", "erp", "medium", "l"],
  "Facebook page inbox": [0, 1.5, "Meta Business Suite is free", "social", "high"],
  "Forms": [0, 0.5, "Google Forms is free", "", "medium"],
  "Franchise management": [6000, 2, "Built on tools such as Zoho Creator, ₹2,400 to ₹6,000 for five users", "", "low", "u"],
  "Girvi register": [700, 3, "SthirApp ₹500 a month; one-time pawn software ₹5,000 to ₹16,000", "", "medium", "l"],
  "Gold rate updates": [0, 1, "Usually free from an association or a rate app", "", "low"],
  "Gold scheme register": [2000, 3, "One published price: Suniyara ₹2,499 a month", "", "low", "l"],
  "Google Ads": [0, 2, "The ads console is free; ad spend excluded", "", "high"],
  "Google Business reviews": [2000, 1, "Review tools about ₹1,000 to ₹3,000", "", "low", "l"],
  "Google Sheets": [0, 4, "Free", "", "high"],
  "Google Shopping": [0, 1, "Merchant Center is free", "", "medium"],
  "Google Tag Manager": [0, 0.5, "Free", "", "high"],
  "Hallmark tracker": [300, 2, "An ERP module or a register; no standalone product", "erp", "low", "l"],
  "HR": [3000, 2, "greytHR Essential ₹2,495; Keka Foundation ₹6,999", "hr", "medium", "u"],
  "Incentive sheet": [0, 1.5, "A spreadsheet today", "", "low"],
  "Inventory intelligence": [2500, 2, "Inventory planning apps $30 to $99", "", "low"],
  "Inventory software": [1500, 6, "Marg Jewellery Silver ₹13,900 a year; cloud inventory ₹1,500 to ₹3,000", "erp", "low", "l"],
  "Karigar portal": [1500, 3, "A job-work module of a jewellery ERP; no standalone price", "erp", "low"],
  "Lead finder": [3300, 2, "Apollo Basic $49 to $59; Lusha $37 to $50; EasyLeadz ₹2,417", "", "medium"],
  "LinkedIn": [0, 0.5, "Free to post", "", "high"],
  "LMS": [1500, 1, "Zoho Learn ₹60 to ₹180 a user; TalentLMS from $69", "", "medium", "u"],
  "Loyalty cards": [3250, 2, "Reelo Growth ₹39,000 an outlet a year", "", "medium", "l"],
  "Marketing automation": [3000, 2, "Zoho Marketing Automation ₹1,140 to ₹1,740; CleverTap $75; WebEngage $199", "mktauto", "medium"],
  "Marketplace seller panels": [0, 3, "Free to use; commission based", "", "medium"],
  "MCP tools": [1500, 0.5, "No settled category; an integration-platform plan", "integ", "low"],
  "Meetings": [1300, 1, "Zoom Pro about ₹1,150 to ₹1,376", "meet", "medium"],
  "Meta Ads": [0, 3, "Ads Manager is free; ad spend excluded", "", "high"],
  "MIS reports": [1500, 3, "Power BI Pro or Zoho Analytics entry plans, about ₹1,100 to ₹1,500", "", "low"],
  "Occasion diary": [200, 1, "A reminder app", "", "low"],
  "Old gold management": [500, 2, "A register or ERP module; no standalone product", "erp", "low", "l"],
  "Payment reminders": [0, 1.5, "Free ledger apps", "", "medium"],
  "Payroll software": [2300, 1.5, "RazorpayX Payroll ₹2,499; greytHR ₹2,495; Zoho Payroll ₹40 to ₹50 an employee", "hr", "high", "u"],
  "Pinterest": [0, 0.5, "Free to post", "", "high"],
  "Pixels": [0, 0.25, "Free", "", "high"],
  "POS counter": [1500, 4, "Retail POS about ₹1,000 to ₹2,000 a counter", "erp", "low", "l"],
  "Pricing engine": [1500, 2, "An ERP feature, or a gold-price app at $10 to $30", "erp", "low"],
  "Push notifications": [1500, 0.5, "OneSignal Growth, PushEngage, Pushwoosh small-list plans", "", "medium"],
  "Quotation maker": [300, 2, "Vyapar desktop ₹3,799 a year", "erp", "medium", "l"],
  "RCS": [0, 0.5, "No platform fee at most providers; per-message charges excluded", "", "medium"],
  "Recruitment management": [1800, 1, "Zoho Recruit ₹1,250 to ₹2,500 a recruiter", "", "medium"],
  "Reels": [0, 2, "Free to post", "", "high"],
  "Repairs management": [2500, 2, "Repair-shop software $10 to $150 a month, low end weighted", "", "low", "l"],
  "RFM": [1500, 1, "A CRM or loyalty feature; counted once with segmentation", "cdp", "low"],
  "Shareable live catalogues": [1200, 3, "QuickSell ₹12,000 a year, or ₹1,750 month to month", "", "high"],
  "Shopify integration": [2000, 2, "Connector apps $20 to $50, or custom work spread over three years", "", "low"],
  "SMS": [0, 0.5, "Pay per SMS; no monthly platform fee", "", "medium"],
  "Social media post creator": [500, 3, "Canva Pro ₹499", "creative", "high"],
  "Social media scheduler": [1700, 2, "Buffer about ₹1,700 to ₹2,000 for four channels; Zoho Social; Hootsuite ₹2,600", "social", "medium"],
  "Stories": [0, 2, "Free to post", "", "high"],
  "Tally integration": [1000, 3, "Connector work of about ₹10,000 to ₹50,000 one time plus yearly support, over three years", "", "low"],
  "Task management": [2800, 1.5, "Zoho Projects ₹350 a user; Asana about ₹949 a user; five users", "", "medium", "u"],
  "Team chat app": [850, 1, "Slack Pro about ₹250 a user; many shops use free WhatsApp groups", "", "medium", "u"],
  "Threads": [0, 0.5, "Free to post", "", "high"],
  "Vendor portal": [3000, 1.5, "Portal tools ₹2,500 to ₹4,200 for five users", "", "low", "u"],
  "Video call app": [0, 1, "WhatsApp and Google Meet are free", "meet", "high"],
  "Visitor tracking": [1000, 0.5, "Zoho SalesIQ ₹830 to ₹1,580; counted once with live chat", "chat", "low"],
  "Walk-in register": [500, 2, "A visitor or lead-capture app", "", "low", "l"],
  "Webhooks &amp; APIs": [1000, 0.5, "An entry integration-platform plan", "integ", "low"],
  "Website heatmaps": [1400, 0.5, "Hotjar Plus about ₹2,700 to ₹3,300; Microsoft Clarity is free", "", "medium"],
  "Website live chat": [2000, 2, "Zoho SalesIQ ₹830 to ₹1,580; Tidio ₹2,436 to ₹4,956", "chat", "medium"],
  "WhatsApp API": [2800, 3, "Interakt Growth ₹2,499 to ₹2,799; AiSensy Pro ₹3,200; Wati ₹2,199 to ₹4,899", "wa", "high"],
  "WooCommerce integration": [1500, 2, "Connector plugins $100 to $300 a year, or custom work", "", "low"],
  "X": [0, 0.5, "Free to post", "", "high"],
  "YouTube": [0, 1, "Free to post", "", "high"],
  "Zoho integration": [1000, 1.5, "Partner connectors of about ₹10,000 to ₹50,000 one time", "", "low"],
};
const STACK_PLAN = 18000, STACK_LOC = 2999, STACK_TEAM = 8, STACK_HOUR_SHARE = 0.5, STACK_MATCH = 0.5, STACK_WEEK = 45;
const STACK_QUICK = [
  ['single', 'Single showroom', ['WhatsApp API', 'Billing software', 'POS counter', 'Barcode & tagging', 'Gold rate updates', 'Inventory software', 'CRM', 'Gold scheme register', 'Tally integration', 'Social media scheduler', 'Google Business reviews', 'Attendance register']],
  ['chain', 'Chain of stores', ['ERP', 'Inventory software', 'Vendor portal', 'Branch report calls', 'MIS reports', 'Google Sheets', 'HR', 'Payroll software', 'Incentive sheet', 'Task management', 'CRM', 'WhatsApp API', 'Tally integration', 'Gold rate updates', 'Barcode & tagging']],
  ['maker', 'Manufacturer', ['ERP', 'Karigar portal', 'Hallmark tracker', 'Inventory software', 'Vendor portal', 'Gold rate updates', 'Estimate pad', 'Quotation maker', 'Tally integration', 'Google Sheets', 'Attendance register', 'Payroll software', 'WhatsApp API']],
  ['b2b', 'Wholesaler', ['Shareable live catalogues', 'Quotation maker', 'WhatsApp API', 'ERP', 'Inventory software', 'Vendor portal', 'Gold rate updates', 'Pricing engine', 'Payment reminders', 'Tally integration', 'Google Sheets', 'CRM']],
  ['d2c', 'Online brand', ['Ecommerce website', 'Shopify integration', 'Marketplace seller panels', 'Google Shopping', 'Meta Ads', 'Google Ads', 'Social media scheduler', 'Email marketing tool', 'WhatsApp API', 'DMs', 'CRM', 'Inventory software', 'Website heatmaps', 'Coupons management']],
];
const STACK_COMMON = [...new Set(STACK_QUICK.flatMap((q) => q[2]))];
const GROUP_Q = { Selling: 'Selling and chat tools?', ERP: 'Billing, stock and workshop (ERP)?', Customers: 'Customer and scheme tools?', Marketing: 'Marketing and ads tools?', AI: 'AI and automation tools?', Books: 'Accounting links?', Team: 'Staff and payroll tools?', Decisions: 'Reports and MIS?' };
function stackMerge(only) {
  const pool = (t) => !only || only.includes(t.replace(/&amp;/g, '&'));
  const N = only ? STACK.flatMap(([, , items]) => items).filter(pool).length : STACK_N;
  const tip = (k) => `<button type="button" class="stackm-tip" aria-label="How this is worked out"><span role="tooltip" data-stackm-tip="${k}"></span></button>`;
  return `
<div class="stackm is-detail" data-stackm data-total="${N}">
  <div class="stackm-main">
    <a class="stackm-mini" href="#stackm-out" data-stackm-mini hidden><b data-mini-n>0</b><em>→ 1</em><span data-mini-save></span><i>Results ↓</i></a>
    ${only ? '' : `<div class="stackm-quick"><p>Start from a business like yours</p><div class="stackm-quick-row" data-default="single">${STACK_QUICK.map(([k, l, tools]) => `<button type="button" data-stackm-quick="${k}" data-tools="${tools.join('|').replace(/&/g, '&amp;')}">${l}</button>`).join('')}</div><p class="stackm-quick-or">or tick the tools you run below</p></div>`}
    <div class="stackm-cloud" data-stackm-cloud>
      ${(() => {
        // Counter, Stock and Workshop show as one ERP group; each chip keeps its own group for the maths.
        const ERP = ['Counter', 'Stock', 'Workshop'], out = [];
        STACK.forEach(([label, ic, items], g) => {
          const tools = items.filter(pool).map((t) => [t, g]);
          if (ERP.includes(label)) { let e = out.find((x) => x[0] === 'ERP'); if (!e) { e = ['ERP', 'store', [], g]; out.push(e); } e[2].push(...tools); }
          else out.push([label, ic, tools, g]);
        });
        return out.map(([l, ic, tools, g]) => [l, ic, tools.sort((x, y) => x[0].localeCompare(y[0], 'en', { sensitivity: 'base' })), g]);
      })().filter(([, , items]) => items.length).map(([label, ic, items, g], k) => `<div class="stackm-grp" data-stackm-grp="${g}"><div class="stackm-grp-head"><span class="stackm-grp-name">${icon(ic)}<span><b>${label}</b><em class="stackm-grp-eg">${items.map(([t]) => t).filter((t) => STACK_COMMON.includes(t.replace(/&amp;/g, '&'))).concat(items.map(([t]) => t)).filter((t, i, a) => a.indexOf(t) === i).slice(0, 4).join(', ')}${items.length > 4 ? '…' : ''}</em></span></span><span class="stackm-grp-n"><b data-grp-n>0</b> of ${items.length}</span><button type="button" class="stackm-grp-all" data-grp-all data-mode="all" data-common="${items.map(([t]) => t).filter((t) => STACK_COMMON.includes(t.replace(/&amp;/g, '&'))).join('|')}">Tick all</button></div><div class="stackm-grp-chips">${items.map(([t, g]) => `<button type="button" class="stackm-chip" data-g="${g}" data-c="${(STACK_COST[t] || [0, 1])[0]}" data-h="${(STACK_COST[t] || [0, 1])[1]}" data-grp="${(STACK_COST[t] || [])[3] || ''}" data-s="${(STACK_COST[t] || [])[5] || ''}" aria-pressed="false">${t}</button>`).join('')}</div></div>`).join('')}
    </div>
    <button type="button" class="stackm-more" data-stackm-more>Show all ${N}</button>
  </div>
  <aside class="stackm-panel" id="stackm-out" data-stackm-panel data-stackm-out data-plan="${STACK_PLAN}" data-locfee="${STACK_LOC}" data-base="${STACK_TEAM}" data-share="${STACK_HOUR_SHARE}" data-match="${STACK_MATCH}" data-week="${STACK_WEEK}">
    <div class="stackm-fx" aria-hidden="true"><i></i></div>
    <div class="stackm-size">
      <label>Showrooms<span><button type="button" data-stackm-step="loc" data-d="-1" aria-label="Fewer showrooms">−</button><input type="number" inputmode="numeric" data-stackm-in="loc" value="1" min="1" max="50" aria-label="Number of showrooms"><button type="button" data-stackm-step="loc" data-d="1" aria-label="More showrooms">+</button></span></label>
      <label>Team members<span><button type="button" data-stackm-step="team" data-d="-1" aria-label="Fewer team members">−</button><input type="number" inputmode="numeric" data-stackm-in="team" value="${STACK_TEAM}" min="1" max="500" aria-label="Number of team members"><button type="button" data-stackm-step="team" data-d="1" aria-label="More team members">+</button></span></label>
    </div>
    <p class="stackm-label" data-stackm-label>If you ran all ${N} today</p>
    <p class="stackm-num" aria-live="polite"><b data-stackm-n>${N}</b><i>→</i><b class="stackm-one">1</b></p>
    <div class="stackm-tally" data-stackm-tally></div>
    <div class="stackm-money">
      <p class="stackm-m"><span>Today, a month${tip('today')}</span><b data-stackm-o="today">₹0</b></p>
      <p class="stackm-m"><span>With Jwero${tip('with')}</span><b data-stackm-o="with">₹0</b></p>
      <p class="stackm-m stackm-m-save"><span><em data-stackm-o="save-k">Saved a month</em>${tip('save')}</span><b data-stackm-o="save">₹0</b></p>
      <p class="stackm-m"><span>Hours back a week${tip('hours')}</span><b data-stackm-o="hours">0</b></p>
      <p class="stackm-m"><span>People’s time freed${tip('people')}</span><b data-stackm-o="people">0</b></p>
      <p class="stackm-m"><span>Opportunity, a month${tip('opp')}</span><b data-stackm-opp>₹0</b></p>
    </div>
    <a class="stackm-send" href="#" data-wa="count-tools" data-stackm-send>Send me this plan on WhatsApp</a>
    <a class="stackm-start" href="/start?from=count-tools">Start for ₹3,600</a>
    <button type="button" class="stackm-go stackm-go-link" data-stackm-go>Merge them into one</button>
    <div class="stackm-actions">
      <button type="button" data-stackm-all>Select all ${N}</button>
      <button type="button" data-stackm-clear>Clear</button>
      <button type="button" data-stackm-open="nums">Your numbers</button>
      <button type="button" data-stackm-open="how">How it is worked out</button>
      <button type="button" class="stackm-more-btn" data-stackm-exp aria-expanded="false">Details</button>
    </div>
  </aside>
  <dialog class="stackm-dlg" data-stackm-dlg="nums" aria-label="Your numbers">
    <form method="dialog"><button class="stackm-dlg-x" aria-label="Close">×</button></form>
    <h3>Your numbers</h3>
    <div class="stackm-opp-in">
      <label>Average monthly salary of the staff who run these tools <b data-stackm-v="sal">₹25,000</b><input type="range" data-stackm-in="sal" min="10000" max="80000" step="1000" value="25000"></label>
      <label>Enquiries a month, all showrooms <b data-stackm-v="enq">200</b><input type="range" data-stackm-in="enq" min="20" max="3000" step="10" value="200"></label>
      <label>Average bill <b data-stackm-v="aov">₹35,000</b><input type="range" data-stackm-in="aov" min="5000" max="300000" step="1000" value="35000"></label>
      <label>Replied to within an hour today <b data-stackm-v="rep">35%</b><input type="range" data-stackm-in="rep" min="5" max="90" step="1" value="35"></label>
    </div>
  </dialog>
  <dialog class="stackm-dlg stackm-dlg-how" data-stackm-dlg="how" aria-label="How it is worked out">
    <form method="dialog"><button class="stackm-dlg-x" aria-label="Close">×</button></form>
    <h3>How it is worked out</h3>
    <div class="stackm-how-body">
        <p><strong>These are estimates, not a quote.</strong> Change the selection and the sliders to match your business.</p>
        <p><strong>Subscriptions.</strong> Each tool carries the average monthly price of a typical paid plan from well-known vendors (Indian market prices, converted outside India, where the same tools usually cost more), for a business with about five people who need a login. Platforms that are free to use, such as posting on a social network, count as ₹0. Advertising spend and per-message or per-minute charges are left out on both sides, because you pay those with or without Jwero.</p>
        <p><strong>No double counting.</strong> Several items are usually one product: billing, POS, stock and ERP; WhatsApp API and broadcasts; the social inbox and scheduler; marketing automation, campaigns and journeys; HR, payroll and attendance. Each such group is charged once, at its highest price, however many of its items you pick. Where a tool is often kept on paper or a free app, the price shown is the simplest paid tool that replaces it; if you pay nothing for it today, your saving is lower.</p>
        <p><strong>Team time.</strong> Each tool carries the hours a week a team spends operating it and keeping it up to date. When more than one tool is picked, ${STACK_MATCH} hours a week per tool is added for matching it with the others: exporting, re-typing and checking that the numbers agree. Hours are priced from the salary slider at ${STACK_WEEK} hours a week. “People’s worth of time” is those hours divided by ${STACK_WEEK}.</p>
        <p><strong>Showrooms and team.</strong> Tools bought per counter or per outlet, such as billing, POS, stock, loyalty and the scheme register, are multiplied by the number of showrooms, and so are their hours. Tools bought per user, such as CRM, email, HR and payroll, are scaled by team size from a base of ${STACK_TEAM} people. Hours on the remaining tools grow with the square root of team size, between half and double the base. Each extra showroom also adds matching time, because every tool’s numbers have to be combined across branches. Total team time is capped at 60% of what the whole team can work.</p>
        <p><strong>With Jwero.</strong> One plan at ₹${STACK_PLAN.toLocaleString('en-IN')} a month replaces the subscriptions, plus ₹${STACK_LOC.toLocaleString('en-IN')} a month for each showroom after the first. There is no charge per team member. From six showrooms, Enterprise terms apply and the real figure may differ. We count ${Math.round(STACK_HOUR_SHARE * 100)}% of the team time as saved, not all of it, because the work itself does not disappear; what goes is the re-typing and the matching.</p>
        <p><strong>Opportunity.</strong> The same working as the <a href="/tools/whatsapp-revenue-estimator">WhatsApp Revenue Estimator</a>: enquiries answered within an hour close at 15%, slow or missed ones at 3%, and the target is 95% answered fast. Planning assumptions, not a study. It is a direction, not a forecast, and it is not added to the saving.</p>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tool</th><th>Average ₹ a month</th><th>Hours a week</th><th>Scales with</th><th>Based on</th></tr></thead><tbody>${STACK.flatMap(([, , items]) => items).filter(pool).sort((x, y) => x.localeCompare(y, 'en', { sensitivity: 'base' })).map((t) => { const c = STACK_COST[t] || [0, 1, '']; return `<tr><td>${t}</td><td>${c[0] ? '₹' + c[0].toLocaleString('en-IN') : 'Free'}</td><td>${c[1]}</td><td>${c[5] === 'l' ? 'Showrooms' : c[5] === 'u' ? 'Team size' : ''}</td><td>${c[2] || ''}${c[4] === 'low' ? ' <em>(estimate)</em>' : ''}</td></tr>`; }).join('')}</tbody></table></div>
      </div>
  </dialog>
</div>`;
}

// The home hero: one question, one action, and the piece as the visual.
function homeHero({ kicker, h1, sub }) {
  return `
<section class="hero hero-panel hero-home">
  <div class="panel">
    <div class="panel-glow" aria-hidden="true"></div>
    <div class="panel-dots" aria-hidden="true"></div>
    <div class="hero-home-grid">
      <div class="hero-home-copy">
        <p class="hero-kicker">${mark('mark-xs')}${kicker}</p>
        <h1>${h1}</h1>
        <p class="sub">${sub}</p>
        <div class="hero-doors">
          <a class="hero-door" href="${TRIAL_URL}home-hero" rel="noopener" data-trial><span>Run it yourself</span><b>Start for ₹3,600</b><em>Every module. Then ₹18,000 a month.</em></a>
          <a class="hero-door is-managed" href="#" data-wa="handle"><span>Let Jwero run it</span><b>Let Jwero handle it</b><em>No team to hire. No tools to buy.</em></a>
        </div>
        <p class="cta-note"><a href="#jbaas">Compare the three ways</a></p>
      </div>
      <div class="hero-home-piece">
        ${gemStage2({ hero: true })}
        <a class="hero-piece-link" href="#one-record">This bangle is your business on one record. Play with it ↓</a>
      </div>
    </div>
  </div>
</section>`;
}

// The stone as the customer record: play a week through it, break it into the
// tools it lives in today, turn it, tap a facet, move the gold rate. Data per
// kind of business in content/gem.js; the canvas and controls are in site.js.
// The label in the middle of the bangle, on two lines so it never spills past
// the ring as it turns: "The shop" / "on one record", "Priya’s" / "record".
function centreLines(t) {
  const m = /^(.*?),?\s+(on one record|record)$/i.exec(String(t));
  return m ? `${esc(m[1])}<br>${esc(m[2])}` : esc(t);
}
function gemStage2(opts = {}) {
  const { GEM, FAMILIES } = require('./content/gem');
  const icons = {};
  Object.values(GEM).forEach((g) => g.modules.forEach((m) => { icons[m[0]] = icon(m[0]); }));
  const d = GEM[opts.set] || GEM.single;
  const json = JSON.stringify({ sets: GEM, icons, families: FAMILIES }).replace(/</g, '\\u003c');
  return `
<div class="gem2${opts.set ? ' gem2-page' : ''}${opts.hero ? ' gem2-hero' : ''}" data-gem2 data-metal="${opts.metal || 'gold'}"${opts.set ? ` data-set="${opts.set}"` : ''}${opts.set || opts.hero ? ` data-fixed-metal="${opts.metal || 'gold'}"` : ''}${opts.hero ? ' data-loop' : ''}>
  <script type="application/json" data-gem2-json>${json}</script>
  <div class="gem2-top">
    <div class="gem2-switch" role="group" aria-label="Where the record lives">
      <button type="button" data-gem2-mode="os" class="is-on" aria-pressed="true">One record</button>
      <button type="button" data-gem2-mode="today" aria-pressed="false">Your tools today</button>
    </div>
    <div class="gem2-metals" role="group" aria-label="Metal">
      <button type="button" data-gem2-metal="gold" class="is-on" aria-pressed="true"><i></i>Gold</button>
      <button type="button" data-gem2-metal="diamond" aria-pressed="false"><i></i>Diamond</button>
    </div>
    <button type="button" class="gem2-rate" data-gem2-rate>${icon('trend')}<span>The gold rate just moved</span></button>
    <button type="button" class="gem2-daybtn" data-gem2-day aria-pressed="false">${icon('refresh')}<span>Run a full day</span></button>
    <p class="gem2-hint" aria-hidden="true">Drag to turn · tap a module</p>
  </div>
  <div class="gem2-day" data-gem2-dayp>
    <p class="gem2-clock" title="One busy day across every department. An illustration, not a measurement."><b data-gem2-clock>09:30</b><span>One busy day. An illustration.</span></p>
    <div class="gem2-daystats">
      <p title="Everything that happened across the business today"><b data-gem2-dn="all">0</b><span>events</span></p>
      <p class="k-a" title="Done by the system on its own: a rule, a posting or a flag"><b data-gem2-dn="a">0</b><span>by system</span></p>
      <p class="k-q" title="Drafted by AI and waiting for a person to say yes"><b data-gem2-dn="q">0</b><span>await a yes</span></p>
      <p class="k-t" title="Done by your team, on the same record"><b data-gem2-dn="t">0</b><span>by team</span></p>
    </div>
  </div>
  <div class="gem2-signals is-idle" data-gem2-signals>
    <div class="gem2-sig-head">
      <p title="Jwero listens for 198 kinds of signal from 36 sources. Each event lights the family it belongs to; each dot is one signal."><b>198</b> signals</p>
      <p class="gem2-sig-count"><b data-gem2-heard>0</b> heard</p>
    </div>
    <div class="gem2-fams">${FAMILIES.map(([name, n], f) => `<button type="button" class="gem2-fam" data-fam="${f}"><span class="gem2-fam-name">${esc(name)}<em>${n}</em></span><span class="gem2-dots">${'<i></i>'.repeat(n)}</span></button>`).join('')}</div>
    <p class="gem2-sig-note" data-gem2-signote>Press play. Each event shows the family of signals it fires — one family at a time.</p>
  </div>
  <div class="gem2-body">
    <div class="gem2-stage">
      <canvas aria-hidden="true"></canvas>
      <div class="gem2-nodes" data-gem2-nodes>${d.modules.map((m, k) => `<button type="button" class="gem2-node" data-k="${k}">${icon(m[0])}<span>${esc(m[1])}</span></button>`).join('')}</div>
      <div class="gem2-shards" data-gem2-shards aria-hidden="true"></div>
      <p class="gem2-centre" data-gem2-centre>${centreLines(d.centre)}</p>
    </div>
    <p class="gem2-caption" data-gem2-caption aria-live="polite"></p>
    <aside class="gem2-card" aria-live="polite">
      <p class="eyebrow" data-gem2-cardtag>ON THE RECORD</p>
      <h3 data-gem2-cardtitle>${esc(d.centre)}</h3>
      <ol class="gem2-lines" data-gem2-lines><li class="gem2-empty">Press play. Watch one week land on one record.</li></ol>
      <div class="gem2-note" data-gem2-note hidden></div>
      <p class="gem2-legend"><i class="lg-w"></i>writes to the record <i class="lg-r"></i>reads from it</p>
    </aside>
  </div>
  <div class="gem2-week">
    <button type="button" class="gem2-play" data-gem2-play aria-pressed="false">Play the week</button>
    <ol class="gem2-events" data-gem2-events>${d.week.map((e, k) => `<li><button type="button" data-ev="${k}"><b>${esc(e[0])}</b><span>${esc(e[1])}</span></button></li>`).join('')}</ol>
  </div>
</div>`;
}

// Diagram strip for product and platform heroes: this module on the left, the
// shared customer record in the middle, the rest of the system on the right.
function heroSchematic(iconName, label) {
  const node = (i, cls, text) => `<div class="sch-node ${cls}">${icon(i)}${text ? `<span>${text}</span>` : ''}</div>`;
  return `
<div class="schematic" aria-hidden="true">
  ${node(iconName, 'sch-this', esc(label))}
  <div class="sch-wire"><i></i></div>
  ${node('record', 'sch-core', 'One record')}
  <div class="sch-wire sch-wire-fan"><i></i></div>
  <div class="sch-rest">${[['chat', 'Inbox'], ['book', 'Catalogue'], ['box', 'Inventory'], ['receipt', 'Billing']].filter((x) => x[0] !== iconName).slice(0, 3).map(([i, l]) => `<div class="sch-node sch-dim" title="${l}">${icon(i)}</div>`).join('')}</div>
</div>`;
}

// Persona switch (home). The reader picks the business they run; the card
// shows that solution page's own headline and intro, and the products that
// page leads with. build.js fills the slot once every page has been read.
const PERSONAS = [
  { key: 'single', chat: 'store', label: 'Single store', slug: 'solutions/single-store', products: ['/products/whatsapp', '/products/pos', '/products/crm', '/products/catalog', '/products/gold-schemes'] },
  { key: 'chain', chat: 'chain', label: 'Multi-store chain', slug: 'solutions/multi-store-chains', products: ['/products/multi-store', '/products/pos', '/products/inventory', '/products/crm', '/products/campaigns'] },
  { key: 'maker', chat: 'workshop', label: 'Manufacturer', slug: 'solutions/manufacturers', products: ['/products/manufacturing', '/products/purchase-vendors', '/products/inventory', '/products/erp', '/products/hr-payroll'] },
  { key: 'b2b', chat: 'trade business', label: 'Wholesaler / B2B', slug: 'solutions/b2b-jewellery', products: ['/products/catalog', '/products/erp', '/products/whatsapp', '/products/crm', '/products/purchase-vendors'] },
  { key: 'd2c', chat: 'brand', label: 'D2C brand', slug: 'solutions/d2c-brands', products: ['/products/ecommerce', '/products/instagram-facebook', '/products/ads-manager', '/products/optimize', '/products/journeys'] },
  { key: 'franchise', chat: 'network', label: 'Franchise network', slug: 'solutions/franchise-networks', products: ['/products/multi-store', '/products/campaigns', '/products/loyalty', '/products/crm', '/products/billing-finance'] },
];
function personaSlot() { return '<!--persona-switch-->'; }
function personaSwitch(entries, productName) {
  return `
<section class="section persona-section" id="persona">
  <div class="container">
    <div class="persona" data-persona>
      <div class="persona-head">
        <p class="persona-label">I run a…</p>
        <div class="ptabs-nav persona-nav" role="tablist" aria-label="Type of jewellery business">
          ${entries.map((e, i) => `<button type="button" role="tab" id="persona-tab-${e.key}" aria-controls="persona-${e.key}" aria-selected="${i === 0 ? 'true' : 'false'}" data-key="${e.key}">${e.label}</button>`).join('')}
        </div>
      </div>
      ${entries.map((e, i) => `
      <div class="persona-panel${i === 0 ? ' is-active' : ''}" id="persona-${e.key}" role="tabpanel" aria-labelledby="persona-tab-${e.key}" data-panel="${e.key}"${i === 0 ? '' : ' hidden'}>
        <div class="persona-copy">
          <p class="eyebrow">${esc(e.label)}</p>
          <h3>${e.h1}</h3>
          <p>${e.sub}</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#" data-wa="${esc(e.wa)}">Chat about my ${esc(e.chat)}</a>
            <a class="btn btn-ghost" href="/${e.slug}">Read the ${esc(e.label.toLowerCase())} page</a>
          </div>
        </div>
        <div class="persona-products cells">
          ${e.products.map((h) => `<a class="card" href="${h}"><div class="card-icon">${icon(LINK_ICONS[h] || 'grid')}</div><h4>${esc(productName(h))}</h4></a>`).join('')}
          <a class="card persona-more" href="/${e.slug}"><h4>Everything else on the ${esc(e.label.toLowerCase())} page</h4><span>${icon('arrow')}</span></a>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>`;
}

// Interactive simulation block. sims.js builds the UI inside [data-sim];
// the copy here frames it as a try-it, never as a recorded result.
const SIMS = {
  rate: { eyebrow: 'TRY IT · LIVE RATE', title: 'Move the gold rate. Watch every price follow.', lead: 'Nine prices on three channels, one rule. Drag the rate and see what a jeweller repricing by hand would have to retype.', cta: 'Show me this on my own catalogue' },
  approve: { eyebrow: 'TRY IT · THE MORNING QUEUE', title: 'Run the AI workforce for a minute.', lead: 'Drafts arrive the way customers do. Approve, edit, or decide an action type may run alone — and stop everything with one tap.', cta: 'Show me a real queue' },
  memory: { eyebrow: 'TRY IT · CUSTOMER MEMORY', title: 'A customer messages. What does the record already know?', lead: 'Pick a customer and watch her record fill in before anyone types a reply.', cta: 'Send me a sample customer record' },
  shelf: { eyebrow: 'TRY IT · THE SLEEPING SHELF', title: 'Slide time forward. Watch stock fall asleep.', lead: 'Seventy-two pieces, ageing month by month. The count past 180 days is the number most owners have never seen.', cta: 'Show me my own shelf' },
  till: { eyebrow: 'TRY IT · THE COUNTER', title: 'Ring up a sale. Take old gold. Close the shift.', lead: 'Scan pieces, add exchange gold, take payment, then close the till and see the variance appear tonight — not next week.', cta: 'Show me a till close' },
  grams: { eyebrow: 'TRY IT · METAL CLOSURE', title: 'Push a stage past its wastage norm. Watch the order refuse to close.', lead: 'A hundred grams issued to the bench, four stages, four norms. The mechanics are the product’s; the numbers are yours to play with.', cta: 'Show me one real job, gram by gram' },
};
function sim(kind) {
  const s = SIMS[kind];
  return `
<section class="section sim-section" id="try-${kind}">
  <div class="container">
    <div class="section-head"><p class="eyebrow">${s.eyebrow}</p><h2>${s.title}</h2><p class="lead">${s.lead}</p></div>
    <div class="sim" data-sim="${kind}" data-sim-name="${s.title.replace(/\.$/, '')}"><p class="sim-foot">Loading the simulation…</p></div>
    <p class="sim-note">Simulation — illustrative numbers, the product’s real mechanics.</p>
    <div class="cta-row center"><a class="btn btn-primary" href="#" data-sim-wa>${s.cta}</a><a class="btn btn-ghost" href="${TRIAL_URL}scenario" rel="noopener" data-trial>Start for ₹3,600</a></div>
  </div>
</section>`;
}

// Who sets what — head office vs branch. Same switch as the two-speed strip,
// so a chain owner can flip a line and see the network re-balance.
function controlSplit() {
  const li = (t, mode) => `<li data-mode="${mode}"><span>${t}</span><button type="button" class="speed-toggle" aria-pressed="${mode === 'run' ? 'true' : 'false'}"><i></i><b>HQ</b><b>Branch</b></button></li>`;
  return `
<div class="speeds speeds-light" data-controls>
  <div class="speed speed-run">
    <p class="speed-title">Head office sets</p>
    <ul>${[
      'The catalogue and the price rules', 'Discount limits per role', 'Brand campaigns and the festival calendar', 'Who may approve what, at every branch',
    ].map((t) => li(t, 'run')).join('')}</ul>
  </div>
  <div class="speed speed-ask">
    <p class="speed-title">The branch runs</p>
    <ul>${[
      'Discounts inside the limit, at the counter', 'Local follow-ups and appointments', 'Stock counts, transfers and memo for its own vault', 'Its own shift, till and day-close',
    ].map((t) => li(t, 'ask')).join('')}</ul>
  </div>
</div>
<p class="speed-set speed-set-light"><span class="speed-tally"><b data-run>4</b> decided centrally · <b data-ask>4</b> left to the branch.</span> Flip any line — the network re-balances, and every branch sees the same customer either way.</p>`;
}

// Memo exposure — which buyer holds what, for wholesalers and traders.
const mockMemo = `
<div class="mock mock-memo" role="img" aria-label="Illustration of memo exposure per buyer">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Memo book · who holds what</span></div>
  <div class="mock-kv"><span>Sharma Jewels, Jaipur</span><strong>14 pcs · 62.40 ct · due in 3 days</strong></div>
  <div class="mock-kv"><span>R. K. Gems, Surat</span><strong>6 pcs · 18.10 ct · overdue 2 days</strong></div>
  <div class="mock-kv"><span>Lakshmi & Sons, Chennai</span><strong>22 pcs · 41.75 ct · due in 9 days</strong></div>
  <div class="mock-kv"><span>Exposure today</span><strong>42 pcs · 122.25 ct · ₹1.84 Cr at list</strong></div>
  <div class="mock-foot">Every memo with a return date; the overdue one is already a drafted follow-up waiting for your tap.</div>
</div>`;

// Standard pre-footer CTA band, on the brand panel. variant 'enterprise' swaps
// the secondary CTA for the specialist track. The ticker along the bottom only
// ever repeats product-verified facts already stated elsewhere on the site.
const CTA_TILES = ['shield', 'chat', 'gem', 'record', 'sparkle', 'coins'];
const CTA_TICKER = [
  ['record', '198 customer signals · 11 live scores, each with a why'],
  ['sparkle', '41 ready segments · 300+ ready journeys'],
  ['shield', '240+ governed AI actions'],
  ['phone', 'AI calls in 14 languages'],
  ['power', 'Kill switch at five scopes'],
  ['swap', 'Tally & Zoho Books bridges built in'],
  ['chat', 'Official WhatsApp Business API'],
  ['download', 'Your data, exportable anytime'],
];
function ctaBand(title, sub, waContext, opts = {}) {
  const secondary = opts.enterprise
    ? `<a class="btn btn-ghost-light" href="/enterprise">Talk to a specialist</a>`
    : `<a class="btn btn-ghost-light" href="/book-demo">Book a demo</a>`;
  const label = opts.label || 'Chat or call with us';
  const after = `<p class="cta-after">You message first; a Jwero specialist replies on WhatsApp in working hours. Prefer a call? <a href="#" data-wa="call">Ask for a call back</a>.</p>`;
  const ticker = CTA_TICKER.map(([i, t]) => `<span>${icon(i)}${t}</span>`).join('');
  return `
<section class="cta-band">
  <div class="panel">
    <div class="panel-glow" aria-hidden="true"></div>
    <div class="cta-tiles" aria-hidden="true">${CTA_TILES.map((i) => `<span>${icon(i)}</span>`).join('')}</div>
    ${mark('mark-band')}
    <div class="container">
      <h2>${title}</h2>
      <p>${sub}</p>
      <div class="cta-row center">
        <a class="btn btn-primary" href="#" data-wa="${esc(waContext)}">${label}</a>
        ${secondary}
      </div>
      <p class="cta-note">You message us first; we never message you uninvited. <a class="cta-hindi" lang="hi" href="#" data-wa="hindi" data-direct>हिन्दी में बात करें →</a></p>
      ${after}
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
    <div><strong>First month ₹3,600, then month to month</strong><span>Monthly billing has no lock-in, and your data leaves with you in standard formats whenever you ask.</span></div>
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
  const chip = (c) => `<div class="logo-chip" title="${esc(c.name)}"><img src="/assets/logos/customers/${c.file.replace(/\.png$/, ".webp")}" alt="${esc(c.name)} logo" loading="lazy" width="140" height="60"></div>`;
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
  esc, icon, autoIcon, sim, controlSplit, mockMemo, LINK_ICONS, PERSONAS, personaSlot, personaSwitch, systemSplit, gemStage, heroSchematic, hero, section, sectionHead, statement, cards, teamGrid, steps, stats, faqBlock,
  mark, homeHero, STACK, STACK_COST, trustStrip, proofGrid, trustBadges, SECURITY_CONTROLS, DEPARTMENTS, stackMerge, STACK_N, securityBlock, compareRows, gemStage2, intelligence, playbookTop, playbookBottom, ICPS, icpOf, icpLinks, icpPick, priceBlock, passItOn, fitCheck, TRIAL_URL, governanceStrip, agentLoop, ctaBand, painRows, mockApproval, mockChat, mockChatCatalog, mockMemory, mockShop, mockOneRecord,
  breadcrumbs, breadcrumbSchema, proofStrip, oneSystemBlock, pillarConstellation, platformTabs, trustBar, PILLARS,
  jtbdBlock, compareTable, honestGapsBlock, verdictBox, switchForBlock, impactGrid, customerLogos, safeToTryStrip,
};
