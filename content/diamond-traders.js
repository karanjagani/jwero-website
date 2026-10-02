// /solutions/diamond-traders: the landing page for loose-diamond traders, an ICP
// of its own (header question: "Diamond trader").
// Every claim maps to a screen or module on pim-app main: stone lots (parcels with
// carats and count), stone pieces (certified stones tracked one by one), the stone
// rate grid (list rate less the band's discount, per carat), memo and approval memos
// (goods on memo are not sellable to anyone else), consignment-in (held, not owned,
// settled on sale), natural / lab-grown / treated disclosure, buyer links,
// quotations, party ledger. Sorting, grading sessions and lab custody exist in the
// data model but have no dedicated screens yet, so they are listed as rolling out.
// Not claimed: a Rapaport or RapNet feed, brokerage accounting, Kimberley or
// export paperwork.
const L = require('../lib');

const mockStone = `
<div class="mock" role="img" aria-label="Illustration of a certified stone record and the parcel it came from">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Stone · 1.51 ct · Round · G · VS1</span></div>
  <div class="mock-kv"><span>Certificate</span><strong>GIA · report number on the stone</strong></div>
  <div class="mock-kv"><span>Origin</span><strong>Natural · no treatment</strong></div>
  <div class="mock-kv"><span>Your rate</span><strong>Grid rate less 18% · per carat</strong></div>
  <div class="mock-kv"><span>Where it is</span><strong>On memo · a Surat retailer · back Saturday</strong></div>
  <div class="mock-foot">Out on memo, so nobody else can sell it. Back in stock the moment it is returned.</div>
</div>`;

const MEMOS = [
  ['Retailer, Surat', '4 stones · 4.12 ct', 1840000, 2, 'Sat'],
  ['Jeweller, Jaipur', '1 parcel · 22.40 ct melee', 960000, -1, 'Yesterday'],
  ['Exporter, Mumbai', '2 stones · 3.02 ct', 2210000, 4, 'Mon'],
  ['Chain buyer, Pune', '6 stones · 5.48 ct', 1575000, 0, 'Today'],
  ['Trader, Delhi', '1 stone · 2.01 ct', 3120000, -3, '3 days ago'],
];
const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');
const memoBoard = `
<div class="memo" data-memoboard id="try-memo">
  <div class="memo-head">
    <div><p class="eyebrow">TRY IT · THE MEMO BOARD</p><h3>Five memos out. Who holds what, and what is late?</h3></div>
    <div class="memo-tally">
      <div><b data-memo-n="out">5</b><span>memos out</span></div>
      <div><b data-memo-n="value">${inr(MEMOS.reduce((a, m) => a + m[2], 0))}</b><span>at list, in other hands</span></div>
      <div class="is-late"><b data-memo-n="late">2</b><span>past their return date</span></div>
    </div>
  </div>
  <div class="memo-rows">${MEMOS.map(([buyer, what, value, days, due], k) => `
    <div class="memo-row${days < 0 ? ' is-late' : ''}" data-memo data-value="${value}" data-late="${days < 0 ? 1 : 0}">
      <div class="memo-who"><b>${buyer}</b><span>${what}</span></div>
      <div class="memo-val">${inr(value)}</div>
      <div class="memo-due"><span class="memo-pill">${days < 0 ? 'Overdue' : days === 0 ? 'Due today' : 'Due ' + due}</span><small>${days < 0 ? due : ''}</small></div>
      <div class="memo-act"><button type="button" data-memo-do="returned">Returned</button><button type="button" data-memo-do="sold">Sold</button></div>
      <p class="memo-result" hidden></p>
    </div>`).join('')}
  </div>
  <p class="memo-draft" data-memo-draft><b>Drafted for your tap:</b> a follow-up to the Jaipur jeweller and the Delhi trader, naming the stones and the return date they agreed to.</p>
  <p class="sim-note">Illustrative buyers and values. The mechanics are the product’s: goods on memo cannot be sold to anyone else, and an overdue memo becomes a drafted follow-up.</p>
</div>`;

const rateGrid = `
<div class="calc" id="calc-grid">
  <div class="calc-panel">
    <label>Shape</label>
    <div class="term term-sm" role="group" aria-label="Shape"><button type="button" data-grid-shape="round" class="is-on" aria-pressed="true">Round</button><button type="button" data-grid-shape="fancy" aria-pressed="false">Fancy</button></div>
    <label>Size band</label>
    <div class="term term-sm" role="group" aria-label="Size band"><button type="button" data-grid-size="0.3" aria-pressed="false">0.30–0.39</button><button type="button" data-grid-size="0.5" aria-pressed="false">0.50–0.69</button><button type="button" data-grid-size="1" class="is-on" aria-pressed="true">1.00–1.49</button></div>
    <label>Colour and clarity</label>
    <div class="term term-sm" role="group" aria-label="Quality"><button type="button" data-grid-q="1.35" aria-pressed="false">D–F · VVS</button><button type="button" data-grid-q="1" class="is-on" aria-pressed="true">G–H · VS</button><button type="button" data-grid-q="0.7" aria-pressed="false">I–J · SI</button></div>
    <label for="grid-disc">Your discount for this buyer <span class="calc-val" id="grid-disc-out"></span></label>
    <input type="range" id="grid-disc" min="0" max="40" step="1" value="18">
    <label for="grid-ct">Carats on the line <span class="calc-val" id="grid-ct-out"></span></label>
    <input type="range" id="grid-ct" min="0.3" max="10" step="0.01" value="1.51">
    <p class="sim-small" style="margin-top:18px">An illustrative grid. In Jwero the grid is yours: you set the list rate and the discount for every band, once, and every stone line prices from it.</p>
  </div>
  <div class="calc-out">
    <div class="stat"><div class="stat-n" id="grid-list">…</div><div class="stat-l">list rate per carat for this band</div></div>
    <div class="stat"><div class="stat-n" id="grid-rate">…</div><div class="stat-l">your rate per carat, after the discount</div></div>
    <div class="stat"><div class="stat-n" id="grid-total">…</div><div class="stat-l">for the line</div></div>
    <a class="btn btn-primary" id="grid-wa" href="#" style="width:100%;text-align:center">Show me my own grid in Jwero</a>
  </div>
</div>`;

const faqs = [
  { q: 'Is this built for loose diamonds, or for jewellery with diamonds in it?', a: 'Both, and they are kept apart. A parcel is tracked by carats and by count together; a certified stone is tracked as its own piece with its certificate; a finished piece carries the stones set in it. A trader mostly lives in the first two.' },
  { q: 'Does Jwero price off the Rapaport list?', a: 'No, and we will not pretend it does. Jwero has a rate grid of your own: stone type, shape, size band and quality give a list rate per carat, and each band carries your discount. You enter and maintain the grid; there is no live feed from a published price list.' },
  { q: 'What happens to a stone that is out on memo?', a: 'It is held against that buyer with a return date, and it cannot be sold to anyone else while it is out. When it comes back it is in stock again; when it is kept, the invoice is raised from the memo.' },
  { q: 'I hold other people’s goods too. Can it tell mine from theirs?', a: 'Yes. Goods taken on consignment are recorded as held, not owned: they can be sold, they do not sit in your stock value, and the consignor is settled when the sale happens.' },
  { q: 'Can a buyer see my stock without me sending an Excel sheet?', a: 'Yes. A private buyer link shows the stones you choose, at prices for that buyer, and you see what he opened and lingered on. Requests from the link become quotations.' },
  { q: 'Do you handle natural and lab-grown separately?', a: 'Every stone records whether it is natural, lab-grown, treated or a simulant, and that disclosure travels with it onto the documents.' },
  { q: 'Can I invoice an overseas buyer in dollars?', a: 'Orders and party ledgers can be kept in another currency. The tax and compliance rails are built for India first, so export paperwork is not generated for you.' },
  { q: 'What does it cost a trading office?', a: 'Jwero One: ₹18,000 a month, with every module. The first month is ₹3,600.' },
];

const diamondTraders = {
  slug: 'solutions/diamond-traders',
  title: 'Diamond Trading Software: Inventory, Memo and Your Rate Grid | Jwero',
  description: 'Software for loose-diamond traders: parcels tracked by carats and count, certified stones as individual pieces, your own per-carat rate grid with a discount per band, memo with return dates, consignment kept apart from owned stock, and private buyer links on WhatsApp.',
  breadcrumbs: [['Home', '/'], ['Solutions', '/solutions'], ['Diamond traders']],
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Jwero for diamond traders', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Parcel and certified-stone inventory, per-carat rate grid, memo and consignment tracking, buyer links and party ledgers for diamond traders.',
    url: 'https://jwero.ai/solutions/diamond-traders', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  faqs,
  body: `
${L.hero({
  eyebrow: 'FOR DIAMOND TRADERS',
  h1: 'Every stone, every parcel, every memo. Known to the carat.',
  sub: 'A trading office runs on an Excel stock sheet, a memo book and a phone. Jwero puts parcels, certified stones, your rate grid, memos and buyer ledgers on one record, so you always know what you own, what is out, with whom, and what it is worth.',
  primary: { href: '#', label: 'Show me my stock and memos on one screen', wa: 'diamondtraders' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: mockStone,
})}

${L.section(
  `${L.sectionHead('WHAT A TRADING OFFICE NEEDS', 'Six things an Excel sheet and a memo book cannot do together.', '')}
  ${L.cards([
    { icon: 'layers', title: 'Parcels, by carats and by count', text: 'A parcel is drawn by piece and valued by weight. Both balances are kept on the lot and move together, so a parcel never shows carats left with no stones left.', link: { href: '/products/inventory', label: 'See Inventory' } },
    { icon: 'gem', title: 'Certified stones, one by one', text: 'A 1.51 ct G VS1 with a report number is a specific stone a buyer asks for by name. It is tracked as its own piece, with its lab and certificate on it.', link: { href: '/products/catalog', label: 'See the Catalogue' } },
    { icon: 'trend', title: 'Your own rate grid', text: 'Stone type, shape, size band and quality give a list rate per carat; each band carries your discount. Every stone line prices from the grid instead of from memory.', link: { href: '/platform/pricing-engine', label: 'See the Pricing Engine' } },
    { icon: 'box', title: 'Memo that guards the stone', text: 'Goods out on memo carry a buyer and a return date, and cannot be sold to anyone else while they are out. Kept stones invoice straight from the memo.', link: { href: '/products/inventory', label: 'See memo and approvals' } },
    { icon: 'swap', title: 'Consignment kept apart', text: 'Goods you hold for someone else are sellable but not yours: they stay out of your stock value, and the consignor is settled when they sell.' },
    { icon: 'shield', title: 'Disclosure on every stone', text: 'Natural, lab-grown, treated or simulant is recorded on the stone and carried onto its documents.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('MEMO', 'The memo book, as a board you can act on.', 'Mark a memo returned or sold and watch what you have out, and what is late, change.')}
  ${memoBoard}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('PRICE PER CARAT', 'A rate grid in the system, not in your head.', 'Pick a band, set the discount for this buyer, and the line prices itself.')}
  ${rateGrid}`
)}

${L.compareRows([
  { lever: 'A buyer asks for 1 ct G VS1', before: 'Someone searches the stock sheet and types six lines into WhatsApp.', after: 'A filtered list of matching stones goes out as a buyer link, at his prices.', link: { href: '/products/digital-catalogues', label: 'See buyer links' } },
  { lever: 'Stones go out on memo', before: 'A line in the memo book. The same stone can still be promised to someone else.', after: 'Held against the buyer with a return date, and not sellable to anyone else.', link: { href: '/products/inventory', label: 'See memo' } },
  { lever: 'He keeps two, returns two', before: 'An invoice typed from the memo book; the sheet updated when someone remembers.', after: 'The invoice is raised from the memo; the returned stones are back in stock at once.', link: { href: '/products/billing-finance', label: 'See Billing' } },
  { lever: 'Month end', before: 'What is out, with whom, and what is it worth? A day of reconciling.', after: 'Stock owned, stock on memo and stock on consignment, by party, tonight.', link: { href: '/products/reports', label: 'See Reports' } },
])}

${L.honestGapsBlock([
  'No Rapaport or other published price-list feed, and no listing to RapNet or trade marketplaces. The rate grid is yours to enter and maintain.',
  'Brokerage and commission accounting for brokers is not built.',
  'Kimberley Process declarations and export paperwork are not generated.',
  'Sorting a parcel into lots that reconcile, grading sessions and tracking a stone away at a lab are in the product’s data model and are rolling out; ask us to show you where they stand before you rely on them.',
])}

${L.section(`${L.sectionHead('QUESTIONS TRADERS ASK', 'Before you move off the stock sheet.', '')}${L.faqBlock(faqs)}
<p class="cta-note" style="margin-top:14px">Selling to retailers as well? <a href="/solutions/diamond-wholesale">See diamond wholesale</a> · <a href="/solutions/b2b-jewellery">wholesale and B2B</a>.</p>`)}

${L.ctaBand('Bring one parcel and one memo.', 'We put them into Jwero on a call and show you the stock, the memo and the buyer’s link, on your own stones.', 'diamondtraders')}
`,
};

module.exports = [diamondTraders];
