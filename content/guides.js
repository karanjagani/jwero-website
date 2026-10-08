// Long buyer's guides for the head search terms. Each one is written to be the
// most complete plain-language answer to "what is X software for a jeweller
// and how do I choose it", and links to the product page that does it.
// Vendor-neutral in the checklist; Jwero's own limits are stated in each.
const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Guides', '/guides'], [label]];
const PUBLISHED = '2026-10-01';

const schema = (headline, description) => ({
  '@context': 'https://schema.org', '@type': 'Article', headline, description,
  datePublished: PUBLISHED, dateModified: '2026-10-06',
  author: { '@type': 'Organization', name: 'Jwero editorial team', url: 'https://jwero.ai/company' }, publisher: { '@type': 'Organization', name: 'Jwero' },
});
const meta = (mins) => `<p class="post-meta"><span>Buyer’s guide</span> · <span>${mins} min read</span> · <span>By the Jwero editorial team</span> · <span>Reviewed October 2026</span></p>`;
const table = (head, rows) => `<div class="tbl-wrap"><table class="tbl"><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td>${i === 0 ? `<strong>${c}</strong>` : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

const GUIDE_LINKS = {
  'jewellery-billing-software': ['till', [['/products/pos', 'Counter POS'], ['/products/billing-finance', 'Billing and accounts'], ['/products/gold-schemes', 'Gold schemes'], ['/products/catalog', 'Catalogue and tags'], ['/platform/pricing-engine', 'Live-rate pricing'], ['/platform/integrations/tally', 'Tally']]],
  'jewellery-erp-software': ['grams', [['/products/erp', 'ERP'], ['/products/inventory', 'Inventory'], ['/products/purchase-vendors', 'Purchase and vendors'], ['/products/manufacturing', 'Workshop and karigars'], ['/products/repairs-service', 'Repairs'], ['/products/girvi', 'Girvi'], ['/products/gold-schemes', 'Gold schemes'], ['/products/multi-store', 'Branches']]],
  'jewellery-inventory-software': ['shelf', [['/products/inventory', 'Inventory'], ['/products/catalog', 'Catalogue and tags'], ['/products/multi-store', 'Branch transfers'], ['/products/purchase-vendors', 'Purchase'], ['/products/reports', 'Reports'], ['/tools/dead-stock-calculator', 'Dead stock calculator']]],
  'jewellery-crm-software': ['memory', [['/products/crm', 'CRM'], ['/platform/customer-memory', 'Customer memory'], ['/products/segmentation', 'Segmentation'], ['/products/journeys', 'Journeys'], ['/products/loyalty', 'Loyalty'], ['/products/whatsapp', 'WhatsApp']]],
  'jewellery-manufacturing-software': ['grams', [['/products/manufacturing', 'Manufacturing and workshop'], ['/products/erp', 'ERP'], ['/products/purchase-vendors', 'Raw material purchase'], ['/products/inventory', 'Finished stock'], ['/tools/gold-loss-calculator', 'Gold loss calculator'], ['/roles/production-manager', 'For the production manager']]],
};
const GUIDE_NEXT = {
  'jewellery-billing-software': [[['/compare/jwero-vs-marg', 'Marg'], ['/compare/jwero-vs-ornate-nx', 'Ornate NX'], ['/compare/jwero-vs-jewelacc', 'JewelAcc']], [['/solutions/single-store', 'single showrooms'], ['/roles/cashier', 'cashiers']], ['/tools/dead-stock-calculator', 'what idle stock costs you']],
  'jewellery-erp-software': [[['/compare/jwero-vs-marg', 'Marg'], ['/compare/jwero-vs-ornate-nx', 'Ornate NX'], ['/compare/jwero-vs-jewelacc', 'JewelAcc']], [['/solutions/gold-retail', 'gold retailers'], ['/roles/owner', 'owners']], ['/tools/dead-stock-calculator', 'what idle stock costs you']],
  'jewellery-inventory-software': [[['/compare/jwero-vs-sioniq', 'SIONIQ'], ['/compare/jwero-vs-ornate-nx', 'Ornate NX']], [['/solutions/multi-store-chains', 'chains'], ['/roles/inventory-manager', 'inventory managers']], ['/tools/dead-stock-calculator', 'what idle stock costs you']],
  'jewellery-crm-software': [[['/compare/jwero-vs-zoho-crm', 'Zoho CRM'], ['/compare/jwero-vs-zithara', 'Zithara']], [['/solutions/gold-retail', 'gold retailers'], ['/roles/crm-executive', 'CRM executives']], ['/tools/gold-scheme-calculator', 'what a savings scheme is worth to you']],
  'jewellery-manufacturing-software': [[['/compare/jwero-vs-synergics', 'Synergics']], [['/solutions/manufacturers', 'manufacturers'], ['/roles/production-manager', 'production managers']], ['/tools/gold-loss-calculator', 'what production loss costs you']],
};
const nextLine = (slug) => { const n = GUIDE_NEXT[slug]; if (!n) return ''; const j = (a) => a.map(([h, t]) => `<a href="${h}">${t}</a>`).join(', ');
  return L.section(`<div class="jb-blogline"><p><b>Comparing options?</b> See Jwero against ${j(n[0])}.</p><p><b>Written for</b> ${j(n[1]).replace(/, ([^,]*)$/, ' and $1')}. <b>Check your own numbers:</b> <a href="${n[2][0]}">see ${n[2][1]}</a>, free and without sign-up.</p></div>`, { tone: 'tint' }); };
const COMPLETE = () => { const ps = require('./legacy-posts.json'); const list = (ps.posts || ps).filter((p) => /guide/.test(p.slug));
  return L.section(`${L.sectionHead('COMPLETE GUIDES', 'Longer reads, by topic.', '')}<ul class="blog-topic">${list.map((p) => `<li><a href="/${p.slug}">${p.title}</a></li>`).join('')}</ul>`, { tone: 'tint' }); };
const guide = ({ slug, title, description, h1, sub, mins, wa, product, body, faqs, related }) => ({
  slug: `guides/${slug}`, title, description, breadcrumbs: BC(h1.split(':')[0]), schema: schema(h1, description), faqs,
  body: `
${L.hero({ eyebrow: 'BUYER’S GUIDE', h1, sub, primary: { href: product[0], label: product[1] }, secondary: { href: '/pricing', label: 'See the price' } })}
${L.section(meta(mins))}
${L.section(`<div class="post-body">${body}</div>`)}
${GUIDE_LINKS[slug] ? L.section(`${L.sectionHead('WHERE THIS IS IN JWERO', 'Every part of this guide, in the product.', '')}<div class="erp-map">${GUIDE_LINKS[slug][1].map(([h, t]) => `<a href="${h}"><b>${t}</b><span>${h.replace(/^\//, 'jwero.ai/')}</span></a>`).join('')}</div>`, { tone: 'tint' }) + L.sim(GUIDE_LINKS[slug][0]) : ''}
${L.section(`${L.sectionHead('QUESTIONS', 'What jewellers ask about this.', '')}${L.faqBlock(faqs)}
<p class="cta-note" style="margin-top:18px">Related: ${related.map(([h, l]) => `<a href="${h}">${l}</a>`).join(' · ')}</p>`)}
${nextLine(slug)}
${L.ctaBand('Bring one real day from your business.', 'We will run it through Jwero on a call and tell you plainly if it does not fit.', wa)}
`,
});

// ---------------------------------------------------------------- 1. Billing
const billing = guide({
  slug: 'jewellery-billing-software',
  title: 'Jewellery Billing Software: Buyer’s Guide (2026) | Jwero',
  description: 'How jewellery billing software works and how to choose it: live gold rate, making charges, wastage, stones, old-gold exchange, HUID, GST, schemes at the counter and day-close, with a feature checklist and questions to ask.',
  h1: 'Jewellery billing software: the complete buyer’s guide',
  sub: 'What a jewellery bill really contains, why general billing software gets it wrong, the features that matter at a busy counter, and the questions to ask before you buy.',
  mins: 12, wa: 'guide-billing', product: ['/products/billing-finance', 'See jewellery billing in Jwero'],
  body: `
  <h2>Why a jewellery bill is not like any other bill</h2>
  <p>A grocery bill is quantity times price. A jewellery bill is a small calculation that changes through the day. The metal is priced by weight and purity at a rate that moves, sometimes twice before lunch. On top of that sit a making charge, sometimes a wastage allowance, the value of any stones, a discount the counter is allowed to give, the value of old gold the customer brings in, a savings scheme balance she wants to use, and tax on the result.</p>
  <p>General billing software handles none of this natively. It expects a fixed price per item. That is why so many shops still keep a calculator beside the computer, work the bill out by hand, and then type the final number into the software. The software ends up as a printer, and the real pricing logic lives in the salesperson’s head.</p>
  <p>Good jewellery billing software reverses that. The logic lives in the system, the salesperson scans a piece, and the bill is right the first time, whoever is standing at the counter.</p>

  <h2>What goes into the price of one piece</h2>
  ${table(['Part of the price', 'How it is worked out', 'What the software must do'], [
    ['Metal value', 'Net weight multiplied by the day’s rate for that purity', 'Take the rate once and apply it to every piece, every channel'],
    ['Making charge', 'Per gram, a percentage of metal value, or a flat amount per piece', 'Support all three, set by category, not typed per bill'],
    ['Wastage', 'A percentage added on weight or value, where your trade charges it', 'Hold the rule and show it clearly on the bill'],
    ['Stones', 'Per carat or per piece, kept separate from metal weight', 'Keep gross, net and stone weight apart'],
    ['Discount', 'Within a limit you set for each role', 'Stop at the limit and ask for approval above it'],
    ['Old gold', 'Weight and purity of what she brings, at your buying rate', 'Record it as an exchange, not as a negative line'],
    ['Scheme balance', 'What she has saved, plus any benefit you promised', 'Read it from her record and apply it'],
    ['Tax', 'GST as it applies to jewellery and to making', 'Calculate it without anyone choosing a rate by hand'],
  ])}
  <p>If the software you are looking at cannot show you where each of these lines comes from on a finished bill, the counter will go back to the calculator within a week.</p>

  <h2>The features that matter, in the order they matter</h2>
  <h3>1. One rate, everywhere, at once</h3>
  <p>The rate should be entered or fetched once. Every tag, quotation, WhatsApp reply, website price and counter bill should follow. If the rate lives in more than one place, two customers will be quoted two prices for the same piece on the same afternoon.</p>
  <h3>2. Scan to bill</h3>
  <p>A tag should carry the piece’s identity: weight, purity, stones, HUID. Scanning it should fill the bill. Typing weights at the counter is slow and is where most billing errors start. See the guide to <a href="/jewellery-barcode-tagging-software">barcode and tagging</a>.</p>
  <h3>3. Old-gold exchange done properly</h3>
  <p>Exchange is a purchase from the customer and a sale to her in one sitting. The old gold has to enter your stock as metal, at the purity you tested, with a record of who brought it. Software that treats it as a discount line loses that metal from your books.</p>
  <h3>4. Returns, advances and part payments</h3>
  <p>A bridal order is paid in pieces over weeks. A return has to reverse stock, tax and, if a scheme was used, the scheme. These are ordinary days at a jewellery counter and should be ordinary buttons.</p>
  <h3>5. Day-close by register</h3>
  <p>Each counter should close its own shift against its own bills: cash, card, UPI, old gold received. A shop that closes the day from memory finds its shortages a month later.</p>
  <h3>6. HUID on the piece and on the bill</h3>
  <p>Hallmarked pieces carry a six-character HUID. It belongs on the piece’s record from the day it is received and should print on the invoice without anyone typing it.</p>
  <h3>7. The customer on the bill</h3>
  <p>A bill is the best moment to learn who your customer is. If billing and the customer record are the same system, the next message to her knows what she bought. If they are separate, you have an invoice number and a stranger.</p>

  <h2>What it should not make you do</h2>
  <ul>
    <li>Type the rate into more than one screen.</li>
    <li>Reprint tags because the rate moved.</li>
    <li>Keep a second register for schemes or girvi.</li>
    <li>Re-enter the day’s bills into accounts. See <a href="/jewellery-accounting-software">jewellery accounting software</a>.</li>
    <li>Call the branch to know what it sold today.</li>
  </ul>

  <h2>Desktop software or online software</h2>
  <p>Older jewellery billing packages are installed on one computer in the shop. They are fast and familiar, and they keep working when the internet is down. Their limits show when you add a second counter, a second branch or a phone: each copy has its own data, and the owner sees yesterday’s numbers.</p>
  <p>Online software keeps one copy of the data that every counter, branch and phone works on. The trade-off is that it needs a connection. If your line is unreliable, ask the vendor exactly what happens when it drops. More in the <a href="/cloud-jewellery-software">cloud jewellery software</a> guide.</p>

  <h2>Questions to ask any vendor</h2>
  <ol>
    <li>Change the gold rate now and show me every price that moved.</li>
    <li>Bill a piece with old gold in exchange and a scheme balance, then show me the stock and the ledger afterwards.</li>
    <li>Return that bill. What happened to stock, tax and the scheme?</li>
    <li>Close the day on one register. Where do I see a shortage?</li>
    <li>Who can give a discount above five percent, and where is that recorded?</li>
    <li>Can I get all my data out, in a file, without asking you?</li>
    <li>What does it not do? A vendor with no answer to this is not telling you something.</li>
  </ol>

  <h2>How Jwero does it, and what it does not do</h2>
  <p>Jwero prices from one live rate with your making and wastage rules, bills by scan, handles old-gold exchange, returns and advances, applies scheme balances from the customer’s record, and closes each register against its own bills. Every bill posts to the books and to the customer’s record in the same step. The counter is described on the <a href="/products/pos">POS page</a> and the invoicing and receivables on the <a href="/products/billing-finance">billing page</a>.</p>
  <p>It prepares the e-invoice file for the GST portal and records the IRN back on the bill, but it does not file e-invoices directly, generate e-way bills or file GST returns. Invoices are GST-ready and the data goes to your accountant, through the Tally or Zoho Books bridge if they use one.</p>
  `,
  faqs: [
    { q: 'What is jewellery billing software?', a: 'Software that works out a jewellery bill from weight, purity and the day’s rate, adds making, wastage, stones and tax, handles old-gold exchange and scheme balances, and records the sale against stock, books and the customer.' },
    { q: 'Can general GST billing software be used for a jewellery shop?', a: 'It can print an invoice, but it expects a fixed price per item. It does not price by weight at a moving rate, does not handle old-gold exchange as metal coming into stock, and does not know schemes or HUID, so the real calculation ends up on a calculator.' },
    { q: 'How much does jewellery billing software cost?', a: 'Prices vary widely by vendor and by how many counters and branches you run. Jwero is ₹18,000 a month, with billing, stock, CRM and every other module included. The first month is ₹3,600.' },
    { q: 'Does the gold rate update automatically?', a: 'In Jwero, one rate drives every price. You set it or take it from the rate feed, and tags, quotations, chat replies and bills follow.' },
    { q: 'Does it generate e-invoices?', a: 'Partly. Jwero prepares the e-invoice file for the GST portal and records the IRN back on the bill. Direct filing and e-way bills are not available yet.' },
  ],
  related: [['/products/billing-finance', 'Jewellery billing software'], ['/products/pos', 'Jewellery POS software'], ['/guides/jewellery-inventory-software', 'Inventory guide'], ['/blog/jewellery-software-cost-india', 'What jewellery software costs']],
});

// ---------------------------------------------------------------- 2. ERP
const erp = guide({
  slug: 'jewellery-erp-software',
  title: 'Jewellery ERP Software: How to Choose (2026) | Jwero',
  description: 'A plain guide to jewellery ERP software: the modules a jeweller needs, retail versus manufacturing ERP, what an ERP leaves out, how to run a selection, and the mistakes that make ERP projects fail.',
  h1: 'Jewellery ERP software: what it covers and how to choose',
  sub: 'The modules a jewellery business really needs, how retail and manufacturing differ, what a traditional ERP leaves outside, and how to pick one without betting the season on it.',
  mins: 13, wa: 'guide-erp', product: ['/products/erp', 'See jewellery ERP in Jwero'],
  body: `
  <h2>What “ERP” means for a jeweller</h2>
  <p>ERP stands for enterprise resource planning, which tells a jeweller nothing. In practice it means one system that records the things the business owns and owes: stock, orders, purchases, metal with karigars, money with customers and vendors, and the accounts that tie them together.</p>
  <p>A jewellery ERP is different from a general one because the unit of account is not only the rupee. It is also the gram, at a stated purity. A system that cannot say “this karigar holds 412 grams of fine gold tonight” is not a jewellery ERP, whatever the brochure says.</p>

  <h2>The modules, and what each must do</h2>
  ${table(['Module', 'What it records', 'The jewellery-specific part'], [
    ['Inventory', 'Every piece, lot and loose stone', 'Gross, net and stone weight; purity; HUID; value at today’s rate'],
    ['Sales and billing', 'Counter bills, orders, returns', 'Live rate, making rules, old-gold exchange'],
    ['Purchase', 'Orders, goods received, vendor bills', 'Purchases in grams and rupees; rate fixing'],
    ['Manufacturing', 'Jobs, stages, issue and return', 'Wastage norms per stage; metal closure'],
    ['Karigar accounts', 'Metal and money with each karigar', 'Balance in fine grams; wages settled against gold'],
    ['Repairs', 'Customer pieces taken in', 'Weight in and out; a custody trail'],
    ['Schemes and girvi', 'Savings plans and pledges', 'Instalments, maturity, interest'],
    ['Accounts', 'Ledgers, receivables, payables', 'Party ledgers readable in metal and money'],
    ['Branches', 'Stock and cash by location', 'Transfers with approval; one rate for all'],
  ])}

  <h2>Retail ERP and manufacturing ERP are different products</h2>
  <p>A retailer’s day is the counter: rate, bill, exchange, scheme, close. A manufacturer’s day is the floor: order, bill of materials, issue metal, receive work, check loss, dispatch. Many ERPs are strong at one and thin at the other.</p>
  <p>If you do both, which is common, test both. Ask to see a retail bill and a job card in the same demonstration, on the same stock. The piece made on the job card should be the piece billed at the counter, without anyone re-entering it.</p>

  <h2>What a traditional ERP leaves outside</h2>
  <p>An ERP is built around the transaction. It knows a customer from the moment she pays. Everything before that happens somewhere else: the enquiry on WhatsApp, the Instagram message, the pieces she tried and did not buy, the follow-up nobody made. That is where most jewellers now lose sales, and it is the part an ERP does not see.</p>
  <p>The usual answer is to add tools: a WhatsApp tool, a CRM, a catalogue app, a marketing tool. Each has its own customer list. Within a year the business runs six systems that disagree. This is the argument for an <a href="/erp-to-os">operating system instead of an ERP</a>: the same operational depth, with the customer, the channels and the team on the same record.</p>

  <h2>How to run the selection</h2>
  <ol>
    <li><strong>Write down ten real situations.</strong> Not features. Situations: “a customer returns a ring bought with old gold in exchange”, “a karigar returns a job six grams short”. Make every vendor show each one.</li>
    <li><strong>Bring your own data.</strong> Ask for a pilot on a slice of your stock and customers. Software always looks good on the vendor’s sample.</li>
    <li><strong>Ask who imports the data.</strong> Migration is where projects stall. Get it in writing: what moves, who does it, how long.</li>
    <li><strong>Protect the season.</strong> Never go live in the weeks before Diwali, Akshaya Tritiya or the wedding rush. Ask for a written change freeze.</li>
    <li><strong>Check the exit.</strong> You should be able to export everything without the vendor’s help.</li>
    <li><strong>Count the logins.</strong> If the answer to a missing feature is “we integrate with another tool”, add that tool’s price and its login to the total.</li>
  </ol>

  <h2>One piece, followed through the system</h2>
  <p>The simplest test of an ERP is to follow a single piece. A retailer orders forty bangles. The order becomes jobs against a bill of materials. Gold is issued to a karigar in fine grams and his account shows it. The work comes back; six grams more than the norm are missing on one job, and the system says so that evening. The pieces pass quality check, go for hallmarking and come back with their HUIDs. They enter finished stock at their real weights and cost.</p>
  <p>Twelve go to a branch on a transfer that the manager approves. One is sold at the counter at that minute’s rate, with old gold in exchange. Stock falls by one piece, the old gold enters as metal, the customer’s record shows the purchase, the ledger has the entry and the day-close includes the cash. Nobody typed the same thing twice.</p>
  <p>If a vendor cannot walk you through that chain on one screen after another, the gaps you see in the demonstration are the gaps your staff will fill with Excel.</p>

  <h2>Who uses it, and what each needs</h2>
  <ul>
    <li><strong>The owner</strong> needs today’s sales, stock value, cash and anything overdue, without calling anyone.</li>
    <li><strong>The cashier</strong> needs a bill that is right at the first attempt and a till that closes.</li>
    <li><strong>The stock keeper</strong> needs to know where every piece is and to count without shutting the shop.</li>
    <li><strong>The production head</strong> needs every job’s stage and every karigar’s balance.</li>
    <li><strong>The accountant</strong> needs entries that arrive already posted, and a clean export.</li>
  </ul>
  <p>Ask the vendor to show each of these five screens. An ERP chosen only by the owner and the accountant is often abandoned by the counter.</p>

  <h2>Mistakes that make ERP projects fail</h2>
  <ul>
    <li><strong>Buying on the demonstration.</strong> A polished demo on sample data proves nothing about your stock, your making rules or your staff.</li>
    <li><strong>Replacing everything in one weekend.</strong> Move one department, prove it, then the next.</li>
    <li><strong>Leaving the accountant out.</strong> If the books side is not agreed first, everything is entered twice for months. See the <a href="/platform/integrations/tally">Tally integration</a> page.</li>
    <li><strong>No owner inside the business.</strong> One person must decide how things are done. Software cannot settle an argument between two brothers about making charges.</li>
    <li><strong>Ignoring the staff.</strong> If the counter finds it slower than the calculator, the counter wins. Train on real bills, not slides.</li>
  </ul>

  <h2>Checklist for choosing a jewellery ERP</h2>
  <ol>
    <li>Does it keep a metal ledger in fine grams, by purity, alongside the money ledger?</li>
    <li>Can I issue metal to a karigar and see what came back, with loss against my norm?</li>
    <li>Does every piece carry its HUID, and does the bill print it?</li>
    <li>Are GST, e-invoices and returns produced from the same bills?</li>
    <li>Can my accountant export to Tally, or work without it?</li>
    <li>Are prices worked out from today’s rate, making and wastage, not typed in?</li>
    <li>Do the counter, the stock and the books all change with one sale?</li>
    <li>Can I get all my data out, in a format I can open, whenever I ask?</li>
  </ol>

  <h2>What it costs</h2>
  <p>Jewellery ERPs are sold in three ways: a one-time licence with yearly maintenance, a monthly subscription per user or per branch, or a single plan that includes every module. Compare the total for three years, including extra users, extra branches, the add-on tools you will need and the cost of anything billed per message or per document. A cheap licence with five paid add-ons is not cheap.</p>
  <p>Jwero publishes one price: ₹18,000 a month for every module, with extra locations and usage at published rates. The detail is on the <a href="/pricing">pricing page</a>.</p>

  <h2>How Jwero does it, and what it does not do</h2>
  <p>Jwero covers inventory, counter billing, purchase and vendors, manufacturing with karigar accounts in fine grams, repairs, schemes, girvi, multi-branch and its own ledger, on the same record as the customer, WhatsApp and the team. The operations are on the <a href="/products/erp">ERP page</a> and the workshop on the <a href="/products/manufacturing">manufacturing page</a>.</p>
  <p>It does not convert CAD files into bills of materials, does not file e-invoices directly or generate e-way bills, and has no courier integration. Those are stated on the <a href="/roadmap">public roadmap</a>.</p>
  `,
  faqs: [
    { q: 'What is jewellery ERP software?', a: 'One system that records a jewellery business’s stock, sales, purchases, manufacturing, karigar accounts and books, with metal tracked by weight and purity as well as money.' },
    { q: 'Is an ERP different from billing software?', a: 'Yes. Billing software produces invoices. An ERP also runs stock, purchase, manufacturing and accounts, so a bill reduces stock and posts to the ledger in the same step.' },
    { q: 'Do small jewellery shops need an ERP?', a: 'A single shop needs the same things at a smaller scale: correct bills, known stock, vendor dues and a day that closes. What it does not need is a long implementation. Look for something that is live in a day.' },
    { q: 'How long does a jewellery ERP take to implement?', a: 'Traditional projects take months. Jwero’s first stage is live in a day, with data imported for you, and expands department by department.' },
    { q: 'Can I keep Tally with a jewellery ERP?', a: 'With Jwero, yes. Transactions post to Jwero’s own ledger and the Tally or Zoho Books bridge carries them to your accountant.' },
  ],
  related: [['/products/erp', 'Jewellery ERP software'], ['/erp-to-os', 'From ERP to operating system'], ['/guides/jewellery-manufacturing-software', 'Manufacturing guide'], ['/blog/jewellery-crm-vs-erp-difference', 'CRM vs ERP']],
});

// ---------------------------------------------------------------- 3. Inventory
const inventory = guide({
  slug: 'jewellery-inventory-software',
  title: 'Jewellery Inventory Software: Stock Management Guide (2026) | Jwero',
  description: 'How to manage jewellery stock with software: piece-level records, gross and net weight, tagging, valuation at today’s rate, ageing and dead stock, stock counts, memo and branch transfers, with a checklist.',
  h1: 'Jewellery inventory software: a stock management guide',
  sub: 'Jewellery stock is capital you can hold in your hand. This is how to know what you have, what it is worth today, what has stopped selling and what has gone missing.',
  mins: 11, wa: 'guide-inventory', product: ['/products/inventory', 'See inventory in Jwero'],
  body: `
  <h2>Why jewellery stock is hard to manage</h2>
  <p>Most retail stock is counted in units. Jewellery stock is counted three ways at once: by piece, by weight and by value, and the value changes with the rate every day. A showroom with two thousand pieces has two thousand different weights, several purities, stones that must be accounted separately, and a total value that was different yesterday.</p>
  <p>It is also small and portable. A missing shirt is a small loss. A missing bangle is a month’s profit. That is why inventory in a jewellery business is as much about control as it is about counting.</p>

  <h2>What a piece record should hold</h2>
  ${table(['Field', 'Why it matters'], [
    ['Gross weight, net weight, stone weight', 'The metal is priced on net weight; the difference is where disputes start'],
    ['Purity', 'Drives the rate applied and the hallmark'],
    ['HUID', 'Identifies the hallmarked piece for its whole life'],
    ['Stones and certificate', 'Carat, quality and lab report, kept with the piece'],
    ['Making rule', 'So the price needs no decision at the counter'],
    ['Where it is', 'Counter, safe, branch, with a karigar, out on memo'],
    ['When it arrived and from whom', 'The start of its age and the vendor’s account'],
    ['Photos', 'So it can be shared on chat without a second system'],
  ])}

  <h2>Tagging: the foundation</h2>
  <p>Every control described below depends on each piece having an identity that a machine can read. A printed tag with a barcode or QR is enough for most shops. RFID lets a tray be read without handling each piece and suits larger showrooms. The tag should carry identity, not price, because the price changes. See <a href="/jewellery-barcode-tagging-software">barcode, tagging and RFID</a>.</p>

  <h2>Valuation at today’s rate</h2>
  <p>An owner should be able to ask “what is my stock worth right now” and get an answer in seconds: metal at today’s rate, plus stones, by category and by branch. Without it, insurance, bank limits and buying decisions are all based on a guess from the last stocktake.</p>

  <h2>Ageing and dead stock</h2>
  <p>Every piece has an age: the days since it arrived. Grouped into bands, typically 0 to 30, 31 to 90, 91 to 180 and over 180 days, ageing shows which designs sell and which sit. Pieces that have sat beyond about 180 days are usually called dead stock, though bridal and solitaire stock moves more slowly by nature.</p>
  <p>Dead stock is capital earning nothing, often financed at interest. The remedies, in order, are: show it to customers whose taste it fits, move it to a branch where that style sells, reprice with a floor at metal value, and only then melt. The <a href="/tools/dead-stock-calculator">dead stock calculator</a> puts a monthly cost on it, and the <a href="/blog/dead-stock-jewellery-business-guide">dead stock guide</a> covers the remedies.</p>

  <h2>Stock counts that do not close the shop</h2>
  <p>An annual stocktake that shuts the shop for a day finds problems eleven months too late. Count by category on a rota: rings this week, chains next. Scan each tray, and let the system show what it expected and what it found. A variance found the same week can still be traced to a person and a day.</p>

  <h2>Stock that is not in the shop</h2>
  <ul>
    <li><strong>Out on memo or approval.</strong> Pieces with a trade buyer or a customer, with a return date. They are still yours and must still count.</li>
    <li><strong>With karigars.</strong> Metal and half-made pieces on the floor. See the <a href="/guides/jewellery-manufacturing-software">manufacturing guide</a>.</li>
    <li><strong>At another branch.</strong> Transfers should need an approval and leave a record at both ends.</li>
    <li><strong>On supplier memo.</strong> Pieces in your showcase that belong to a supplier until sold. They must be marked, or you will value stock you do not own.</li>
    <li><strong>In for repair.</strong> Customer property, never to be mixed with stock.</li>
  </ul>

  <h2>Pricing rules belong with stock</h2>
  <p>A piece’s price is not a number stored on it. It is a rule: this purity at today’s rate, this making charge for this category, these stones at this value. When the rule lives with the stock record, every channel shows the same price and nothing needs repricing when the rate moves. When the price is written on a tag or typed into a catalogue, it is wrong within hours. See <a href="/platform/pricing-engine">live gold rate pricing</a>.</p>

  <h2>Buying from what the stock tells you</h2>
  <p>Stock records answer the buying question that gut feel cannot. Which categories turn fastest? Which weight range sells in which branch? Which vendor’s designs age on the shelf? A reorder list built from sales and ageing keeps capital in what sells. Purchase orders, goods received and the vendor’s bill should then update the same stock, so what you ordered, what arrived and what you owe agree with each other. See <a href="/products/purchase-vendors">purchase and vendor management</a>.</p>

  <h2>Who is allowed to change what</h2>
  <p>Control is a matter of permissions and a trail. Decide who may edit a weight, who may approve a transfer, who may write off a variance, and who may reprint a tag. Every one of those changes should be recorded with the person and the time. Most stock losses are not dramatic thefts. They are small, unrecorded changes that nobody can explain later.</p>

  <h2>Checklist for choosing inventory software</h2>
  <ol>
    <li>Does every piece have its own record, with gross, net and stone weight?</li>
    <li>Can I print my own tags and count by scanning?</li>
    <li>Can I see stock value at today’s rate, by branch and category?</li>
    <li>Does it show ageing in bands and flag pieces past a limit I set?</li>
    <li>Are memo, supplier memo, karigar and repair stock kept apart from saleable stock?</li>
    <li>Does a sale at any counter or channel reduce the same stock?</li>
    <li>Does a transfer need an approval?</li>
    <li>Is every change to a piece recorded, with who and when?</li>
  </ol>

  <h2>How Jwero does it, and what it does not do</h2>
  <p>Jwero keeps a record for every piece, lot and stone, values stock at today’s rate, shows ageing bands, prints tags and counts by scan, and tracks memo, supplier memo, transfers and karigar stock on the same record the counter bills from. Idle pieces can be matched to customers whose taste fits them. Details are on the <a href="/products/inventory">inventory page</a>.</p>
  <p>It does not sell hardware. Tag printers, scanners and scales are bought separately and connected; ask which models are supported before you order. Jwero does not support RFID today.</p>
  `,
  faqs: [
    { q: 'What is jewellery inventory software?', a: 'Software that keeps a record of every piece of jewellery with its weights, purity, stones and location, values the stock at the current rate, and tracks what has aged, moved or gone missing.' },
    { q: 'How is jewellery stock valued?', a: 'Metal at the current rate for its purity and net weight, plus stone value, plus making where you account for it. The total changes daily with the rate, which is why a live valuation matters.' },
    { q: 'What is dead stock in a jewellery shop?', a: 'Pieces that have not sold for a long period, commonly taken as more than 180 days, though slower categories such as bridal are judged on a longer period.' },
    { q: 'Is RFID necessary?', a: 'No. Barcode or QR tags are enough for most shops. RFID helps when there are many pieces to count often, because a whole tray can be read at once. Jwero does not support RFID today; it counts by scanning barcode or QR tags.' },
    { q: 'How often should I count stock?', a: 'A little, often. Counting one category each week by scanning finds a variance while it can still be traced.' },
  ],
  related: [['/products/inventory', 'Jewellery inventory software'], ['/jewellery-barcode-tagging-software', 'Barcode and tagging'], ['/tools/dead-stock-calculator', 'Dead stock calculator'], ['/guides/jewellery-billing-software', 'Billing guide']],
});

// ---------------------------------------------------------------- 4. CRM
const crm = guide({
  slug: 'jewellery-crm-software',
  title: 'Jewellery CRM Software: A Practical Guide (2026) | Jwero',
  description: 'What a jewellery CRM should record, how it differs from a general CRM, how to follow up leads from WhatsApp, Instagram and walk-ins, occasions, schemes, consent and what to measure, with a checklist.',
  h1: 'Jewellery CRM software: a practical guide for jewellers',
  sub: 'Jewellery is bought a few times in a life, from someone trusted. This is how to keep that trust on a record the business owns, and turn it into the next sale.',
  mins: 11, wa: 'guide-crm', product: ['/products/crm', 'See the jewellery CRM in Jwero'],
  body: `
  <h2>Why jewellers need a different kind of CRM</h2>
  <p>General CRM software was built for companies that sell to other companies. It thinks in “deals” that open and close in a quarter. A jeweller’s customer buys for a daughter’s wedding, comes back for an anniversary, saves in a scheme for eleven months, and brings her sister. The relationship runs for decades and across a family.</p>
  <p>A general CRM has nowhere to put a ring size, a scheme balance, a preference for temple work or the fact that she exchanged old gold last time. A jewellery CRM starts from those.</p>

  <h2>What the record should hold</h2>
  ${table(['On the record', 'Why'], [
    ['Family and relationships', 'Weddings are bought by families, and referrals follow them'],
    ['Occasions', 'Birthdays, anniversaries, a wedding date: the reason for the next visit'],
    ['Taste', 'Metal, purity, style, budget range, sizes'],
    ['Everything she bought', 'From the bills, not typed again'],
    ['Everything she looked at', 'Catalogue views, pieces tried in the showroom'],
    ['Scheme and loyalty balance', 'What she has saved and what she has earned'],
    ['Every conversation', 'WhatsApp, Instagram, calls, visits, in one thread'],
    ['Consent', 'What she agreed to receive, and on which channel'],
  ])}

  <h2>Where leads come from, and where they are lost</h2>
  <p>A jeweller’s leads arrive from five places: WhatsApp, Instagram and Facebook, the website, phone calls and people who walk in. Each usually lands with a different person on a different device. The loss is rarely a bad reply. It is no reply, a late reply, or no second message after the first.</p>
  <p>The fix is unglamorous: every enquiry lands in one inbox against one customer record, somebody owns it, and it cannot go quiet without someone being told. The <a href="/solutions/pain/lead-leakage">lead leakage</a> page and the <a href="/tools/whatsapp-revenue-estimator">revenue estimator</a> put numbers on this.</p>

  <h2>Follow-up that is not pestering</h2>
  <p>Jewellery follow-up works when it has a reason. Good reasons: the piece she viewed twice is still available, the rate has dropped since she asked, her scheme matures next month, her anniversary is in three weeks, the repair is ready. Bad reasons: it is Tuesday and we have a list.</p>
  <p>A CRM earns its place by producing a short list each morning of who to contact and why, drawn from what customers did, and by drafting the message so the salesperson only has to approve it.</p>

  <h2>Segments worth having</h2>
  <ul>
    <li>Bought once, more than a year ago, not since.</li>
    <li>Scheme members with two or fewer instalments left.</li>
    <li>Anniversaries in the next thirty days.</li>
    <li>Viewed a catalogue this month, no purchase.</li>
    <li>High spenders who have gone quiet.</li>
    <li>Walk-ins who left without buying this week.</li>
  </ul>
  <p>Segments should recalculate on their own. A list exported last month is already wrong. See <a href="/products/segmentation">customer segmentation</a>.</p>

  <h2>The showroom is part of the CRM</h2>
  <p>The highest-intent moment in the business is a customer standing at the counter. Most shops record nothing about it unless she buys. Noting who came, what she tried and why she left is the difference between a lost sale and a follow-up. See <a href="/products/showroom">showroom tracking</a>.</p>

  <h2>Schemes and loyalty are CRM, not accounts</h2>
  <p>A customer in a monthly savings scheme has promised to buy from you in eleven months. That is the warmest lead a jeweller has, and in most shops it sits in a paper register that nobody looks at until maturity. On the customer’s record it becomes a reason to stay in touch: an instalment reminder, a note when two instalments remain, an invitation to choose a piece before the plan matures.</p>
  <p>Loyalty points and referrals work the same way. They matter only if the salesperson can see them while talking to her. See <a href="/products/gold-schemes">gold schemes</a> and <a href="/products/loyalty">loyalty</a>.</p>

  <h2>When a salesperson leaves</h2>
  <p>This is the test that decides whether a jeweller has a CRM or a set of phones. If conversations happened on a personal WhatsApp number, the relationships leave with the person. If they happened on the shop’s official number, in a shared inbox, on the customer’s record, the next salesperson picks up where the last one stopped. Moving the business number onto the official WhatsApp API is usually the first practical step. See the <a href="/blog/whatsapp-for-jewellers-guide">WhatsApp guide</a>.</p>

  <h2>Consent and care with data</h2>
  <p>A customer list is the most valuable thing a family jeweller owns, and it is personal data. Keep a record of what each customer agreed to receive. Honour opt-outs at once. Limit who can export the list. Under India’s data protection law, a business is expected to know what it holds and why. The <a href="/trust/security">security page</a> describes how Jwero handles this.</p>

  <h2>What to measure</h2>
  <ol>
    <li>Time to first reply on a new enquiry.</li>
    <li>Share of enquiries that got a second follow-up.</li>
    <li>Share of walk-ins that were recorded.</li>
    <li>Repeat purchase rate within twenty-four months.</li>
    <li>Scheme renewals at maturity.</li>
    <li>Sales that can be traced to a message or campaign.</li>
  </ol>

  <h2>Checklist for choosing a jewellery CRM</h2>
  <ol>
    <li>Are purchases on the record from billing, without re-entry?</li>
    <li>Do WhatsApp, Instagram, calls and visits land in one thread?</li>
    <li>Are occasions, sizes, taste and scheme balance real fields?</li>
    <li>Does it tell me who to contact today, and why?</li>
    <li>Does anything it drafts wait for a person’s approval?</li>
    <li>Does the record belong to the business, not a salesperson’s phone?</li>
    <li>Can I see which messages led to sales?</li>
  </ol>

  <h2>How Jwero does it, and what it does not do</h2>
  <p>Jwero keeps one record per customer that billing, schemes, the showroom and every channel write to. It reads 198 kinds of signal into 11 scores, each with a visible reason, and produces the morning list. Messages are drafted by AI and wait for approval. Details are on the <a href="/products/crm">CRM page</a> and the <a href="/platform/customer-memory">customer memory page</a>.</p>
  <p>It does not send anything on its own unless you have switched that on for a specific kind of action, and it does not buy or import third-party contact lists.</p>
  `,
  faqs: [
    { q: 'What is a jewellery CRM?', a: 'A customer system built for how jewellery is bought: families, occasions, taste, sizes, scheme balances and every conversation on one record, linked to what each customer actually bought.' },
    { q: 'Can I use a general CRM for a jewellery shop?', a: 'You can store names and numbers in one, but it has no place for scheme balances, old-gold history, sizes or occasions, and it is not connected to billing, so purchases have to be typed in again.' },
    { q: 'Is a CRM the same as WhatsApp marketing software?', a: 'No. A WhatsApp tool sends and receives messages. A CRM holds the customer. They work when they are the same system, so a message knows the customer and a reply lands on her record.' },
    { q: 'Will a CRM replace my sales staff?', a: 'No. It remembers and drafts; your people sell. Staff close more when they greet a returning customer knowing what she bought and asked about.' },
    { q: 'How do I move my customer list in?', a: 'From Excel, your billing software or your phone contacts. With Jwero the import is done for you during onboarding.' },
  ],
  related: [['/products/crm', 'Jewellery CRM software'], ['/platform/customer-memory', 'Customer memory'], ['/products/whatsapp', 'WhatsApp for jewellers'], ['/blog/jewellery-crm-vs-erp-difference', 'CRM vs ERP']],
});

// ---------------------------------------------------------------- 5. Manufacturing
const manufacturing = guide({
  slug: 'jewellery-manufacturing-software',
  title: 'Jewellery Manufacturing Software: A Buyer’s Guide | Jwero',
  description: 'How jewellery manufacturing software controls gold on the workshop floor: orders, bills of materials, issue and return in fine weight, karigar accounts, wastage norms by stage, job work for clients, QC and hallmarking.',
  h1: 'Jewellery manufacturing software: karigar, wastage and job work',
  sub: 'In a workshop the product and the raw material are the same precious metal. This is how software keeps count of it from the order to the finished piece.',
  mins: 12, wa: 'guide-manufacturing', product: ['/products/manufacturing', 'See manufacturing in Jwero'],
  body: `
  <h2>The one question every workshop must answer</h2>
  <p>Gold goes in. Jewellery comes out. Is the difference what it should be? Everything in jewellery manufacturing software exists to answer that, for every job, every stage and every karigar, on the day it happens.</p>
  <p>Most workshops answer it at month end, from a register and a karigar’s khata book, when the gold is long gone and nobody can say where. Software moves the answer to the moment a job is returned.</p>

  <h2>Fine weight: the language of the floor</h2>
  <p>A workshop handles metal at different purities: fine gold, 22 karat, 18 karat, alloys, solder. Adding their gross weights is meaningless. Converting each to its pure gold content, the fine weight, gives one number that can be issued, returned and balanced. Any software for the floor must account in fine weight, and show gross weight and purity beside it.</p>

  <h2>From order to dispatch</h2>
  ${table(['Step', 'What happens', 'What must be recorded'], [
    ['Order', 'A retailer or your own shop asks for pieces', 'Design, quantity, purity, due date'],
    ['Bill of materials', 'What each piece needs', 'Metal, stones, findings, expected weight'],
    ['Routing', 'The stages it will pass through', 'Casting, filing, setting, polishing and so on'],
    ['Issue', 'Metal and stones go to a karigar or department', 'Fine weight out, against a job'],
    ['Return', 'Work comes back', 'Weight in, scrap, dust recovered'],
    ['Loss check', 'Issue minus return, compared with the norm', 'Flag anything beyond the norm'],
    ['Quality check', 'Finish, weight, stone count', 'Pass, rework or reject'],
    ['Hallmarking', 'Sent to the assaying centre', 'HUID received against each piece'],
    ['Finished goods', 'The piece enters stock', 'Final weights, cost from actuals'],
    ['Dispatch and billing', 'Delivered or sent on memo', 'Invoice or memo, and the party ledger'],
  ])}

  <h2>Wastage norms, stage by stage</h2>
  <p>Some loss is real: metal is filed away, lost in polishing, left in a crucible. Each stage has a loss that is normal for it. A norm is that expected loss, set by you for each stage and type of work. Software compares actual loss with the norm when the job is returned. Within the norm, nothing happens. Beyond it, somebody is told that day.</p>
  <p>The point is not to accuse anyone. It is to find the leak while it is still one job, not a month. The <a href="/tools/gold-loss-calculator">gold loss calculator</a> shows what an unexplained gap costs at today’s rate, and the <a href="/blog/gold-loss-wastage-control-jewellery-manufacturing">wastage control guide</a> goes deeper.</p>

  <h2>The karigar’s account</h2>
  <p>A karigar holds your metal and is owed wages. The khata records both: metal issued, metal returned, the balance he holds, the work done and what he is to be paid. Disputes happen when the workshop’s register and the karigar’s memory differ.</p>
  <p>Good software gives both sides the same account. The karigar can see his own balance. Wages can be settled against gold where that is your practice. Nothing depends on who remembers loudest at settlement.</p>

  <h2>Job work for other people’s gold</h2>
  <p>Many units make for retailers and brands who supply the metal. That metal is not yours. It must be received, held, used and returned client by client, never mixed, with a statement each client can trust. Billing is for labour, on the weights actually produced. If you do job work, test this first: issue from one client’s metal and confirm it cannot be charged to another’s.</p>

  <h2>Metal closure</h2>
  <p>At the end of a period, opening metal plus receipts should equal issues, returns, finished goods, scrap, recorded loss and closing stock. If it does not close, something is unrecorded. Software should do this closure on demand, by department and by karigar, not once a year.</p>

  <h2>Casting, handmade and machine-made</h2>
  <ul>
    <li><strong>Casting</strong> works in trees and flasks. Loss is measured per flask, and sprues and returns go back as scrap of known purity.</li>
    <li><strong>Handmade</strong> work moves between individual karigars, each with a khata.</li>
    <li><strong>Machine-made</strong> chain and stamped work runs in lots, with loss by lot and by machine stage.</li>
  </ul>
  <p>Most units mix all three. The routing should describe your floor, not force it into one pattern.</p>

  <h2>Costing from what really happened</h2>
  <p>A quoted price is built on an estimate: expected weight, expected loss, expected labour. The true cost is known only when the job is finished. Software should cost each piece from actual metal used, actual loss, stones set and wages paid, and show the gap between estimate and actual. Over a few months that gap tells you which designs and which customers are profitable, and which you have been making at a loss.</p>

  <h2>Raw material, scrap and refining</h2>
  <p>Metal arrives as bars, grain and old gold, and leaves the floor as jewellery, scrap and dust. Each lot should have a known purity. Scrap and filings are collected by department, weighed, and either reused or sent for refining, where the recovered fine gold is recorded against what was sent. A workshop that does not record recovery is treating recoverable gold as loss.</p>

  <h2>Due dates and capacity</h2>
  <p>Retailers judge a manufacturer on delivery. Each order should carry a due date, each job a stage and an expected finish, so that a late job is visible days before the retailer calls. Seeing every open job by stage and by karigar also shows where work is piling up before it becomes a missed delivery.</p>

  <h2>Checklist for choosing manufacturing software</h2>
  <ol>
    <li>Does it account in fine weight, with gross and purity shown?</li>
    <li>Can I set a wastage norm for each stage and be told when a job exceeds it?</li>
    <li>Does each karigar have an account in metal and money that he can see?</li>
    <li>Is client-supplied metal kept apart, client by client?</li>
    <li>Can I close metal for a department today, not at year end?</li>
    <li>Does the finished piece enter stock with its real weights and cost?</li>
    <li>Is the HUID attached piece by piece?</li>
    <li>Does the same system bill it, or must it be re-entered?</li>
  </ol>

  <h2>How Jwero does it, and what it does not do</h2>
  <p>Jwero runs orders, bills of materials, routings, issue and return in fine weight, wastage norms by stage, job cards, quality checks, hallmarking records, raw material lots and a karigar khata that settles wages against gold. Client-supplied metal is tracked as job work. Finished pieces go straight into the stock the counter and the trade desk sell from. Details are on the <a href="/products/manufacturing">manufacturing page</a>.</p>
  <p>It does not convert CAD files into bills of materials; these are entered by production. It does not yet run a full metal reconciliation or a physical metal count. It does not connect to casting machines or weighing equipment beyond the scales supported as devices.</p>
  `,
  faqs: [
    { q: 'What is jewellery manufacturing software?', a: 'Software that follows precious metal through a workshop: orders, bills of materials, issue and return to karigars in fine weight, loss against norms at each stage, quality checks, hallmarking and finished stock.' },
    { q: 'How is wastage calculated in jewellery making?', a: 'Metal issued for a job minus metal returned, including recovered scrap and dust, in fine weight. That loss is compared with the norm you have set for the stage.' },
    { q: 'What is a karigar khata?', a: 'The account between a workshop and a craftsman: metal given to him, metal returned, the balance he holds and the wages due.' },
    { q: 'Can it handle job work for other retailers?', a: 'Yes. Client-supplied metal and jobs are kept client by client, and invoices are raised for labour on the weights actually produced.' },
    { q: 'Does it create a BOM from a CAD file?', a: 'No. In Jwero the bill of materials is entered by production. CAD to BOM conversion is not available.' },
  ],
  related: [['/products/manufacturing', 'Jewellery manufacturing software'], ['/solutions/manufacturers', 'For manufacturers'], ['/tools/gold-loss-calculator', 'Gold loss calculator'], ['/guides/jewellery-erp-software', 'ERP guide']],
});

const GUIDES = [billing, erp, inventory, crm, manufacturing];
// Guides hub, redesigned 2026-10-07 like the blog hub: search, need filters and
// one grid of every buyer's guide, software-by-need page, city page and complete
// guide, with covers. Reuses the blog hub's markup and script ([data-blog-hub]).
const G_TOPICS = [['core', 'Buyer’s guides'], ['sell', 'Selling and marketing'], ['floor', 'Customers and showroom'], ['office', 'Back office'], ['long', 'Complete guides'], ['city', 'By city']];
const G_NEED = {
  'whatsapp-broadcast-for-jewellers': 'sell', 'instagram-for-jewellers': 'sell', 'ads-for-jewellers': 'sell', 'sms-marketing-for-jewellers': 'sell', 'ai-calling-for-jewellers': 'sell', 'jewellery-website-analytics': 'sell',
  'jewellery-showroom-footfall-counting': 'floor', 'ai-cctv-footfall-analytics-jewellery-showrooms': 'floor', 'jewellery-appointment-booking-software': 'floor',
  'jewellery-accounting-software': 'office', 'jewellery-barcode-tagging-software': 'office', 'cloud-jewellery-software': 'office', 'jewellery-staff-management-software': 'office',
};
const G_PICK = [
  ['Bills take too long, or rates are typed by hand', '/guides/jewellery-billing-software', 'Billing'],
  ['You do not know what is on the shelf or what it is worth', '/guides/jewellery-inventory-software', 'Inventory'],
  ['Customers buy once and never come back', '/guides/jewellery-crm-software', 'CRM'],
  ['Gold goes missing between workshop and shop', '/guides/jewellery-manufacturing-software', 'Manufacturing'],
  ['You want one system for everything', '/guides/jewellery-erp-software', 'ERP'],
  ['Enquiries on WhatsApp and Instagram go unanswered', '/whatsapp-broadcast-for-jewellers', 'WhatsApp'],
];
const gImg = (key) => { const fs = require('fs'), p = require('path'); const root = p.join(__dirname, '..', 'assets');
  if (fs.existsSync(p.join(root, 'covers', key + '.svg'))) return `/assets/covers/${key}.svg`;
  if (fs.existsSync(p.join(root, 'og', key + '.jpg'))) return `/assets/og/${key}.jpg`; return ''; };
const gEsc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const gCard = (a) => `<a class="bl-card" href="${a.href}" data-t="${a.t}" data-q="${gEsc((a.title + ' ' + a.desc).toLowerCase())}">${a.img ? `<img src="${a.img}" alt="" loading="lazy" width="1200" height="630">` : ''}<span class="bl-tag">${a.tl}</span><b>${gEsc(a.title)}</b><span class="bl-desc">${gEsc(a.desc)}</span></a>`;
function guidesHubBody(guides) {
  const TL = Object.fromEntries(G_TOPICS); const all = [];
  const add = (slug, title, desc, t) => all.push({ href: '/' + slug, title: String(title).split(' | ')[0], desc: String(desc || '').replace(/\s+/g, ' ').slice(0, 220), t, tl: TL[t], img: gImg(slug.replace(/\//g, '--')) });
  guides.forEach((g) => add(g.slug, g.title, g.description, 'core'));
  const seo = require('./seo');
  seo.filter((p) => G_NEED[p.slug]).forEach((p) => add(p.slug, p.title, p.description, G_NEED[p.slug]));
  const ps = require('./legacy-posts.json'); (ps.posts || ps).filter((p) => /guide/.test(p.slug)).forEach((p) => add(p.slug, p.title, p.description, 'long'));
  seo.filter((p) => /^jewellery-software-india/.test(p.slug)).forEach((p) => add(p.slug, p.title, p.description, 'city'));
  const count = (t) => all.filter((a) => a.t === t).length;
  return `
<section class="hero bl-hero"><div class="container hero-inner">
  <p class="eyebrow">BUYER’S GUIDES</p>
  <h1>Jewellery software guides: find what to look for, before you buy.</h1>
  <p class="sub">${all.length} plain guides: what each kind of software must do, a checklist, and the questions to ask any vendor, including us. For how-to articles, see the <a href="/blog">blog</a>.</p>
  <form class="bl-search" role="search" onsubmit="return false"><label for="bl-q" class="sr-only">Search guides</label><input id="bl-q" type="search" placeholder="Search: billing, girvi, WhatsApp, Surat…" autocomplete="off" data-bl-q></form>
</div></section>
<section class="section bl-wrap" data-blog-hub>
<div class="container">
  <nav class="bl-chips" aria-label="Filter guides"><button type="button" class="is-on" data-bl-t="">All <i>${all.length}</i></button>${G_TOPICS.map(([k, l]) => `<button type="button" data-bl-t="${k}">${l} <i>${count(k)}</i></button>`).join('')}</nav>
  <div class="bl-start" data-bl-start>
    <div class="section-head"><p class="eyebrow">START HERE</p><h2>Which guide first?</h2><p>Pick the problem that costs you most.</p></div>
    <div class="bl-goals bl-goals-3">${G_PICK.map(([p, h, l]) => `<a href="${h}"><b>${p}</b><i>${l} guide →</i></a>`).join('')}</div>
  </div>
  <div class="section-head" style="margin-top:44px"><p class="eyebrow">ALL GUIDES</p><h2 data-bl-title>Every guide.</h2><p class="bl-count" aria-live="polite" data-bl-count>${all.length} guides</p></div>
  <div class="bl-grid" data-bl-grid>${all.map(gCard).join('')}</div>
  <p class="bl-empty" data-bl-empty hidden>No guide matches that yet. <a href="#" data-wa="guides">Ask us on WhatsApp</a> and we will point you to the right page.</p>
  <p class="bl-more"><button type="button" class="btn btn-ghost" data-bl-more hidden>Show more guides</button></p>
</div>
</section>
${L.section(`${L.sectionHead('IN THE PRODUCT', 'Where each guide leads in Jwero.', '')}<div class="erp-map">${[['/products/billing-finance', 'Billing and accounts'], ['/products/erp', 'ERP'], ['/products/inventory', 'Inventory'], ['/products/crm', 'CRM'], ['/products/manufacturing', 'Manufacturing'], ['/pricing', 'Pricing']].map(([h, t]) => `<a href="${h}"><b>${t}</b><span>See it in Jwero →</span></a>`).join('')}</div>`, { tone: 'tint' })}
${L.ctaBand('Not sure where to start?', 'Tell us what you run today and we will point you to the right page.', 'guides')}
`;
}
const hub = {
  slug: 'guides',
  title: 'Jewellery Software Guides: Billing, ERP, Stock, CRM | Jwero',
  description: 'Buyer’s guides for jewellers choosing software: billing, ERP, inventory, CRM, manufacturing, WhatsApp, showroom, accounting and more, plus guides by city. Search or filter by need.',
  breadcrumbs: [['Home', '/'], ['Guides']],
  body: '',
};
hub.body = guidesHubBody(GUIDES);

module.exports = [hub, ...GUIDES];
