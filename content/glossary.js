// Jewellery-trade glossary. Definitions are trade knowledge, not product
// claims — each term is a DefinedTerm so answer engines can quote it, and a
// "where this shows up in Jwero" link keeps it useful for buyers.
const L = require('../lib');

const TERMS = [
  ['HUID', 'Hallmark Unique Identification — a six-character alphanumeric code assigned to each hallmarked gold article by a BIS-recognised Assaying and Hallmarking Centre. Mandatory for gold jewellery sold in India; it ties a specific piece to its purity certificate.', '/products/catalog', 'Catalogue (PIM)'],
  ['Hallmarking', 'Certification of the purity of precious-metal jewellery by an authorised centre, marked on the piece. In India, BIS hallmarking of gold is mandatory in notified districts.', '/products/manufacturing', 'Manufacturing & Workshop'],
  ['Making charges', 'The labour and craftsmanship charge added to the metal value of a piece, quoted either per gram or as a percentage of the metal value. Jewellers often negotiate here rather than on the rate.', '/platform/pricing-engine', 'The Pricing Engine'],
  ['Wastage', 'Metal lost during manufacturing (filing, polishing, soldering). Charged to the customer as a percentage on top of net weight, and tracked per stage in a workshop against a norm.', '/products/manufacturing', 'Manufacturing & Workshop'],
  ['Karigar', 'A goldsmith or artisan who makes or finishes jewellery, usually paid by weight or piece rather than by the hour. Metal issued to and returned from a karigar is kept in a khata.', '/products/manufacturing', 'Manufacturing & Workshop'],
  ['Khata', 'A running ledger between a business and a party — a customer, a supplier or a karigar — recording what was issued, returned and settled. In a workshop, the karigar khata is kept in grams of fine metal as well as rupees.', '/products/manufacturing', 'Manufacturing & Workshop'],
  ['Girvi', 'A gold loan secured against jewellery pledged by the customer. The jeweller advances money against the item, charges interest, and returns the item on repayment; also called a pledge loan.', '/products/girvi', 'Girvi / Gold Loans'],
  ['Memo (approval memo)', 'Stock sent out on approval — to a customer, a branch or the trade — without a sale, against a signed memo with a return date. Each piece is either returned or billed when the memo closes.', '/products/inventory', 'Inventory'],
  ['Consignment', 'Stock placed with another party (or received from a supplier) that remains the owner’s property until sold. Reconciled as a separate ledger from owned stock.', '/products/inventory', 'Inventory'],
  ['Old-gold exchange', 'Accepting a customer’s old jewellery as part-payment for a new purchase, valued by weight and tested purity after deductions. Recorded as an exchange voucher that becomes credit on the new invoice.', '/products/pos', 'Counter POS'],
  ['Gold savings scheme', 'A monthly instalment plan run by a jeweller where a customer pays for a set number of months and redeems the accumulated amount, often with a bonus, against jewellery at maturity.', '/products/gold-schemes', 'Gold Savings Schemes'],
  ['Digital gold', 'Gold bought in grams (or fractions) through an app, held on the customer’s behalf, and convertible to jewellery or cash at a live rate.', '/products/digital-gold', 'Digital Gold'],
  ['Live rate', 'The prevailing market price of gold or silver per gram for a given purity, which most Indian jewellers update at least twice a day and use to price every piece at the moment of sale.', '/platform/pricing-engine', 'The Pricing Engine'],
  ['Purity (karat / fineness)', 'The proportion of pure gold in an alloy: 24K is 99.9% (fineness 999), 22K is 91.6% (916), 18K is 75% (750). Price, hallmark and exchange value all depend on it.', '/products/catalog', 'Catalogue (PIM)'],
  ['Net weight vs gross weight', 'Gross weight is the piece as weighed, stones included; net weight is the metal alone. Metal value is charged on net weight; stones are priced separately.', '/products/catalog', 'Catalogue (PIM)'],
  ['Dead stock', 'Inventory that has not sold within a set period (commonly 180 days or more). It ties up financed capital and is usually cleared through matched selling, redesign or melt, rather than markdown.', '/products/inventory', 'Inventory'],
  ['Ageing', 'Grouping stock by how long it has been held (0–30, 31–90, 91–180, 180+ days) to see which designs are moving and which are sitting.', '/products/inventory', 'Inventory'],
  ['Bill of materials (BOM)', 'The list of metal, stones and findings — with expected weights — that go into one design. The reference every issue, receipt and wastage check is made against.', '/products/manufacturing', 'Manufacturing & Workshop'],
  ['Job work', 'Sending materials to an outside workshop (or receiving them from a client) for a manufacturing step, with the metal tracked out and back on a job-work ledger.', '/products/erp', 'ERP, reconsidered'],
  ['RFM', 'Recency, Frequency, Monetary — a way of ranking customers by how recently they bought, how often, and how much. Used to decide who to follow up first.', '/products/segmentation', 'Customer Segmentation'],
  ['Customer record (Customer 360)', 'One profile per customer that holds every interaction, purchase, occasion, scheme balance and preference — rather than fragments across billing, WhatsApp and a diary.', '/platform/customer-memory', 'Customer Memory'],
  ['Approval queue', 'A holding area where AI-drafted messages or actions wait until a person approves them. The mechanism that lets a business use AI without it acting alone.', '/platform/ai-workforce', 'AI Workforce & Governance'],
  ['Kill switch', 'A control that stops automated actions immediately — for one action, one agent, one branch, one channel, or everything at once.', '/platform/ai-workforce', 'AI Workforce & Governance'],
  ['WhatsApp Business API', 'Meta’s official interface for businesses to message customers at scale with templates, consent and opt-out handling. Distinct from the WhatsApp Business app on a phone.', '/products/whatsapp', 'WhatsApp Commerce'],
  ['PIM', 'Product Information Management — one master catalogue of every design with its attributes, images, purity, stones and certificates, published to every channel from one place.', '/products/catalog', 'Catalogue (PIM)'],
  ['Register shift / day-close', 'One open-to-close session on a physical counter. At close, the declared cash count is compared with expected takings and the variance recorded.', '/products/pos', 'Counter POS'],
  ['Clienteling', 'Personal, relationship-based selling: remembering what a customer likes, what she bought, and when to reach out — at scale, with a record instead of memory.', '/solutions/luxury-boutique', 'Luxury & boutique'],
  ['Jewellery vs jewelry', 'Two spellings of the same word. "Jewellery" is standard in India, the UK, the Gulf and the Commonwealth; "jewelry" is the American spelling. Jwero writes "jewellery" and serves businesses on either side of the difference.', '/company', 'About Jwero'],
  ['Franchisor / franchisee', 'The brand owner (franchisor) sets catalogue, pricing and standards; the store operator (franchisee) runs the counter. Software for networks separates what each may change.', '/solutions/franchise-networks', 'Franchise networks'],
];

const glossary = {
  slug: 'glossary',
  title: 'Jewellery Business Glossary — HUID, Girvi, Karigar, Memo, Wastage & More | Jwero',
  description: 'Plain-language definitions of the terms that run a jewellery business — HUID, hallmarking, making charges, wastage, karigar, khata, girvi, memo, consignment, gold schemes, RFM and more — with where each one shows up in Jwero.',
  breadcrumbs: [['Home', '/'], ['Glossary']],
  schema: {
    '@context': 'https://schema.org', '@type': 'DefinedTermSet',
    name: 'Jewellery business glossary', url: 'https://jwero.ai/glossary',
    hasDefinedTerm: TERMS.map(([name, description]) => ({ '@type': 'DefinedTerm', name, description, inDefinedTermSet: 'https://jwero.ai/glossary' })),
  },
  body: `
${L.hero({
  eyebrow: 'GLOSSARY',
  h1: 'The words a jewellery business runs on.',
  sub: 'Twenty-nine terms, defined the way the trade uses them — and where each one shows up in Jwero. Written for owners, new staff and anyone evaluating software for the first time.',
  primary: { href: '#', label: 'Ask us a term we missed', wa: 'faq' },
  secondary: { href: '/faq', label: 'See the FAQ' },
})}

${L.section(
  `<div class="glossary cells">${TERMS.map(([name, description, href, label]) => `
    <div class="card term" id="${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}">
      <h3>${name}</h3>
      <p>${description}</p>
      <a class="card-link" href="${href}">In Jwero: ${label} →</a>
    </div>`).join('')}
  </div>`
)}

${L.ctaBand('Every term above lives on one record in Jwero.', 'Ask us how any of them works in practice — a real person and our AI reply within minutes.', 'faq')}
`,
};

module.exports = [glossary];
