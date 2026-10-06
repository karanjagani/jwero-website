#!/usr/bin/env node
// Branded cover art for every article: 1200x630 SVG in the site's colours
// (royal blue panel, gold accent), the article's topic, its title, and a line
// illustration for the topic. Written to assets/covers/<slug>.svg; the share
// image (assets/og/<slug>.jpg) is rendered from the same SVG.
//   node scripts/covers.js
const fs = require('fs'); const path = require('path');
const ROOT = path.join(__dirname, '..');
const { posts } = require('../content/legacy-posts.json');
const blog = require('../content/blog').filter((p) => /^blog\/./.test(p.slug));

const TOPIC_RULES = [['Order management', /\boms\b|order/], ['Product data and catalogues', /pim|product|catalog|sku|attribute|listing|upload/], ['Leads and conversion', /lead|walk|intent|enquir|convert|follow|nurtur|attribution|wishlist|visitor/], ['WhatsApp', /whatsapp|chat/], ['AI', /\bai\b|ai-|autonomous/], ['CRM and customers', /crm|customer|segment|repeat/], ['Ecommerce and websites', /ecommerce|e-commerce|website|shopify|online/], ['Marketing and campaigns', /marketing|ads|instagram|facebook|diwali|akshaya|wedding|social|meta/], ['Inventory, POS and ERP', /inventory|stock|pos|erp|barcode|tally|gold-rate|gold-loss|repair|huid/], ['Gold schemes', /scheme/], ['Retail operations and sales', /sales|kpi|staff|operations|appointment|software|cost|checklist/]];
const topicOf = (slug) => (TOPIC_RULES.find(([, r]) => r.test(slug)) || ['Guides'])[0];

const G = '#F6B11C', W = '#ffffff';
const ICON = {
  'Leads and conversion': `<path d="M0 0h260l-100 120v110l-60 40V120z" />`,
  'Product data and catalogues': `<path d="M0 60 60 0h150v150l-60 60H0z" transform="rotate(-8 105 105)"/><circle cx="160" cy="45" r="16"/>`,
  'CRM and customers': `<circle cx="130" cy="130" r="120"/><circle cx="130" cy="105" r="34"/><path d="M68 196c14-34 38-50 62-50s48 16 62 50"/>`,
  WhatsApp: `<path d="M20 30h220a20 20 0 0 1 20 20v120a20 20 0 0 1-20 20H90l-50 40v-40H20A20 20 0 0 1 0 170V50a20 20 0 0 1 20-20z"/><path d="M50 90h160M50 130h110"/>`,
  AI: `<path d="M130 0c10 70 30 90 100 100-70 10-90 30-100 100-10-70-30-90-100-100C100 90 120 70 130 0z"/><path d="M215 170c4 28 12 36 40 40-28 4-36 12-40 40-4-28-12-36-40-40 28-4 36-12 40-40z"/>`,
  'Order management': `<path d="M20 70 130 20l110 50v130l-110 50-110-50z"/><path d="M20 70l110 50 110-50M130 120v130"/>`,
  'Marketing and campaigns': `<path d="M20 90h50l130-70v220L70 170H20z"/><path d="M70 170l20 80h40l-14-80"/><path d="M230 90c20 10 20 50 0 60"/>`,
  'Ecommerce and websites': `<rect x="0" y="0" width="260" height="190" rx="16"/><path d="M0 44h260"/><circle cx="24" cy="22" r="6"/><circle cx="46" cy="22" r="6"/><path d="M80 90h22l20 60h70l16-44H112"/><circle cx="130" cy="166" r="8"/><circle cx="180" cy="166" r="8"/>`,
  'Inventory, POS and ERP': `<rect x="0" y="20" width="260" height="60" rx="10"/><rect x="0" y="100" width="260" height="60" rx="10"/><rect x="0" y="180" width="260" height="60" rx="10"/><path d="M30 40v20M50 40v20M64 40v20M90 40v20M30 120v20M44 120v20M70 120v20M30 200v20M56 200v20M70 200v20"/>`,
  'Gold schemes': `<circle cx="130" cy="130" r="110"/><circle cx="130" cy="130" r="80"/><path d="M130 10v30M130 220v30M10 130h30M220 130h30"/>`,
  'Retail operations and sales': `<path d="M10 90 40 20h180l30 70z"/><path d="M20 90v150h220V90"/><path d="M100 240v-80h60v80"/>`,
  'Technology and strategy': `<circle cx="40" cy="40" r="26"/><circle cx="220" cy="60" r="26"/><circle cx="130" cy="200" r="26"/><path d="M62 52l132 6M54 62l62 116M206 82l-62 98"/>`,
  Guides: `<path d="M10 20h110a20 20 0 0 1 20 20v200a20 20 0 0 0-20-20H10z"/><path d="M250 20H160a20 20 0 0 0-20 20v200a20 20 0 0 1 20-20h90z"/>`,
};
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function wrap(t, max) { const out = []; let line = ''; for (const w of t.split(/\s+/)) { if ((line + ' ' + w).trim().length > max) { if (line) out.push(line); line = w; } else line = (line + ' ' + w).trim(); } if (line) out.push(line); return out; }
function svg(title, topic) {
  let size = 62, lines = wrap(title, 24);
  if (lines.length > 3) { size = 50; lines = wrap(title, 29); }
  if (lines.length > 4) { size = 42; lines = wrap(title, 34); }
  if (lines.length > 5) { lines = lines.slice(0, 5); lines[4] = lines[4].replace(/\s*\S*$/, '…'); }
  const top = 196 + size * 0.8;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0012B9"/><stop offset="1" stop-color="#012687"/></linearGradient>
<radialGradient id="h" cx="0.85" cy="1" r="0.6"><stop offset="0" stop-color="${G}" stop-opacity=".35"/><stop offset="1" stop-color="${G}" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/><rect width="1200" height="630" fill="url(#h)"/>
<rect x="72" y="72" width="64" height="6" rx="3" fill="${G}"/>
<text x="72" y="118" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="20" letter-spacing="3" fill="${G}" font-weight="600">${esc(topic.toUpperCase())}</text>
${lines.map((l, i) => `<text x="72" y="${top + i * size * 1.12}" font-family="Inter, 'Segoe UI', system-ui, -apple-system, sans-serif" font-size="${size}" font-weight="650" letter-spacing="-1.5" fill="${W}">${esc(l)}</text>`).join('\n')}
<g transform="translate(850 170)" fill="none" stroke="${W}" stroke-opacity=".9" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">${ICON[topic] || ICON.Guides}</g>
<g transform="translate(850 170)" fill="none" stroke="${G}" stroke-width="7" stroke-linecap="round" stroke-dasharray="2 22" opacity=".9"><circle cx="130" cy="130" r="175"/></g>
<text x="72" y="566" font-family="Inter, 'Segoe UI', system-ui, sans-serif" font-size="24" font-weight="600" fill="${W}">Jwero</text>
<text x="160" y="566" font-family="Inter, 'Segoe UI', system-ui, sans-serif" font-size="22" fill="${W}" fill-opacity=".7">You focus on jewellery. We handle the chaos.</text>
</svg>`;
}
const items = [...posts.map((p) => ({ key: p.slug, title: p.title, topic: p.topic in ICON ? p.topic : topicOf(p.slug) })),
  ...blog.map((p) => ({ key: p.slug.replace(/\//g, '--'), title: ((p.schema && p.schema.headline) || p.title).split('|')[0].trim(), topic: topicOf(p.slug) }))];
fs.mkdirSync(path.join(ROOT, 'assets', 'covers'), { recursive: true });
for (const it of items) fs.writeFileSync(path.join(ROOT, 'assets', 'covers', it.key + '.svg'), svg(it.title, it.topic));
fs.writeFileSync(path.join(ROOT, 'assets', 'covers', 'index.json'), JSON.stringify(items.map((i) => i.key)));
console.log('covers', items.length);
