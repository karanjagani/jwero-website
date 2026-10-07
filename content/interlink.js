// Internal linking for articles. Each article links its first mention of a
// topic to the page that covers it (at most eight links an article, never to
// itself, never inside an existing link), and every product, solution, tool
// and guide page gets a "From the blog" list of articles that link to it.
const KEYWORDS = [
  ['jewellery CRM', '/products/crm'], ['customer relationship management', '/products/crm'],
  ['WhatsApp Business API', '/products/whatsapp'], ['WhatsApp broadcast', '/whatsapp-broadcast-for-jewellers'], ['WhatsApp marketing', '/whatsapp-broadcast-for-jewellers'],
  ['gold savings scheme', '/products/gold-schemes'], ['gold scheme', '/products/gold-schemes'],
  ['customer segmentation', '/products/segmentation'], ['loyalty program', '/products/loyalty'], ['loyalty programme', '/products/loyalty'],
  ['customer journey', '/products/journeys'], ['marketing automation', '/products/journeys'],
  ['inventory management', '/products/inventory'], ['dead stock', '/solutions/pain/dead-stock'], ['stock audit', '/products/inventory'],
  ['barcode', '/jewellery-barcode-tagging-software'], ['point of sale', '/products/pos'], ['POS software', '/products/pos'],
  ['billing software', '/guides/jewellery-billing-software'], ['jewellery ERP', '/guides/jewellery-erp-software'], ['ERP', '/products/erp'],
  ['order management', '/products/erp'], ['custom order', '/products/erp'],
  ['product information management', '/products/catalog'], ['PIM', '/products/catalog'], ['product catalogue', '/products/catalog'], ['catalog management', '/products/catalog'],
  ['digital catalogue', '/products/digital-catalogues'], ['digital catalog', '/products/digital-catalogues'],
  ['online store', '/products/ecommerce'], ['ecommerce website', '/products/ecommerce'], ['e-commerce website', '/products/ecommerce'],
  ['marketplace', '/products/marketplaces'], ['Instagram marketing', '/instagram-for-jewellers'], ['Instagram DM', '/instagram-for-jewellers'],
  ['Google Ads', '/ads-for-jewellers'], ['Facebook ads', '/ads-for-jewellers'], ['Meta ads', '/ads-for-jewellers'],
  ['AI chatbot', '/products/ai-sales-agents'], ['AI agent', '/products/ai-sales-agents'], ['AI sales', '/products/ai-sales-agents'],
  ['lead management', '/solutions/pain/lead-leakage'], ['lost leads', '/solutions/pain/lead-leakage'], ['lead follow-up', '/solutions/pain/lead-leakage'],
  ['walk-in', '/jewellery-showroom-footfall-counting'], ['footfall', '/jewellery-showroom-footfall-counting'],
  ['appointment', '/jewellery-appointment-booking-software'], ['staff management', '/jewellery-staff-management-software'], ['sales staff', '/jewellery-staff-management-software'],
  ['website analytics', '/jewellery-website-analytics'], ['heatmap', '/jewellery-website-analytics'],
  ['HUID', '/blog/huid-hallmarking-records-audit-checklist'], ['hallmarking', '/blog/huid-hallmarking-records-audit-checklist'],
  ['Tally', '/platform/integrations/tally'], ['live gold rate', '/platform/pricing-engine'], ['gold rate', '/platform/pricing-engine'],
  ['repair', '/products/repairs-service'], ['multi-store', '/products/multi-store'], ['franchise', '/solutions/franchise-networks'],
  ['analytics', '/products/reports'], ['KPI', '/products/reports'], ['dashboard', '/products/reports'],
  ['gold jewellery shop', '/solutions/gold-retail'], ['gold retail', '/solutions/gold-retail'], ['diamond jewellery', '/solutions/diamond-retail'], ['bridal', '/solutions/bridal'], ['wedding jewellery', '/solutions/bridal'],
  ['silver jewellery', '/solutions/silver-retail'], ['lab-grown', '/solutions/lab-grown-diamond'], ['single store', '/solutions/single-store'], ['independent jeweller', '/solutions/single-store'],
  ['jewellery chain', '/solutions/multi-store-chains'], ['multiple stores', '/solutions/multi-store-chains'], ['wholesale', '/solutions/b2b-jewellery'], ['wholesaler', '/solutions/b2b-jewellery'],
  ['manufacturer', '/solutions/manufacturers'], ['karigar', '/solutions/manufacturers'], ['D2C', '/solutions/d2c-brands'], ['jewellery brand', '/solutions/jewellery-brands'], ['new jewellery business', '/solutions/startups'],
  ['ads manager', '/products/ads-manager'], ['ad campaign', '/products/ads-manager'], ['campaigns', '/products/campaigns'], ['broadcast', '/products/campaigns'], ['email marketing', '/products/email'],
  ['girvi', '/products/girvi'], ['gold loan', '/products/girvi'], ['payroll', '/products/hr-payroll'], ['attendance', '/products/hr-payroll'], ['Instagram', '/products/instagram-facebook'], ['Facebook', '/products/instagram-facebook'],
  ['manufacturing', '/products/manufacturing'], ['job work', '/products/manufacturing'], ['video call', '/products/meetings'], ['A/B test', '/products/optimize'], ['purchase order', '/products/purchase-vendors'], ['vendor', '/products/purchase-vendors'], ['supplier', '/products/purchase-vendors'],
  ['quotation', '/products/quotations'], ['showroom', '/products/showroom'], ['social media', '/products/social-media'], ['staff training', '/products/training-lms'],
  ['managed service', '/jewellery-business-as-a-service'], ['jewellery software', '/blog/best-jewellery-software-india'],
];
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const RX = KEYWORDS.map(([k, u]) => [new RegExp(`(^|[^\\w-])(${esc(k)}s?)(?=[^\\w-]|$)`, 'i'), u]);

// Link the first mention of each topic in text, outside tags, links and headings.
function link(html, self, max = 8) {
  const used = new Set([self]); const out = []; let n = 0;
  const parts = html.split(/(<[^>]+>)/); let inA = 0, inH = 0;
  for (const part of parts) {
    if (part.charAt(0) === '<') {
      if (/^<a[\s>]/i.test(part)) inA++; else if (/^<\/a>/i.test(part)) inA = Math.max(0, inA - 1);
      if (/^<h[1-4][\s>]/i.test(part)) inH++; else if (/^<\/h[1-4]>/i.test(part)) inH = Math.max(0, inH - 1);
      out.push(part); continue;
    }
    let t = part;
    if (!inA && !inH && n < max) {
      for (const [rx, u] of RX) {
        if (n >= max || used.has(u)) continue;
        const m = rx.exec(t); if (!m) continue;
        const at = m.index + m[1].length;
        t = t.slice(0, at) + `<a href="${u}">${m[2]}</a>` + t.slice(at + m[2].length);
        used.add(u); n++;
        // the rest of this text node is now split by markup; stop here and let later nodes continue
        break;
      }
    }
    out.push(t);
  }
  return { html: out.join(''), targets: [...used].filter((u) => u !== self) };
}
module.exports = { link, KEYWORDS };
