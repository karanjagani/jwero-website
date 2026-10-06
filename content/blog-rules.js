// Tier 1 articles: the rules and calculations jewellers search before every
// season. Each one states the rule plainly, works an example, says what a CA
// must confirm, and points to the part of Jwero that already does the work.
// Claims about Jwero are limited to what pim-app ships (checked 2026-10-06).
const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Blog', '/blog'], [label]];
const DATE = '2026-10-06';

const schema = (headline, description) => ({
  '@context': 'https://schema.org', '@type': 'BlogPosting', headline, description,
  datePublished: DATE, dateModified: DATE,
  author: { '@type': 'Organization', name: 'Jwero editorial team', url: 'https://jwero.ai/company' },
  publisher: { '@type': 'Organization', name: 'Jwero' },
});
const meta = (mins, cluster) => `<p class="post-meta"><span>${cluster}</span> · <span>${mins} min read</span> · <span>By the Jwero editorial team</span> · <span>Published October 2026</span></p>`;
const caNote = (what) => `<p class="post-note"><b>Check with your CA.</b> ${what} Rules here are as we understand them in October 2026; tax and compliance rules change, and your CA’s reading of your business comes first.</p>`;

const post = ({ slug, title, description, h1, sub, eyebrow, cluster, mins, body, faqs, product, wa, close }) => ({
  slug: `blog/${slug}`, title, description, breadcrumbs: BC(h1), schema: schema(h1, description), faqs,
  body: `
${L.hero({ eyebrow, h1, sub, secondary: { href: product[0], label: product[1] } })}
${L.section(meta(mins, cluster))}
${L.section(`<div class="post-body">${body}</div>`)}
${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'What jewellers ask about this.', '')}${L.faqBlock(faqs)}`)}
${L.ctaBand(close[0], close[1], wa)}
`,
});

// 1 ----------------------------------------------------------------------
const priceCalc = `<div class="price-calc" data-price-calc>
  <p class="in-short-tag">Price calculator</p>
  <div class="price-calc-grid">
    <label>24K rate, ₹ per gram<input type="number" inputmode="decimal" data-pc="rate" value="7500" min="0"></label>
    <label>Purity<select data-pc="purity"><option value="24">24K (999)</option><option value="22" selected>22K (916)</option><option value="18">18K (750)</option><option value="14">14K (585)</option></select></label>
    <label>Net weight, grams<input type="number" inputmode="decimal" data-pc="weight" value="10" min="0" step="0.001"></label>
    <label>Making charge<select data-pc="mtype"><option value="pct" selected>% of metal value</option><option value="gram">₹ per gram</option><option value="flat">₹ flat per piece</option></select></label>
    <label>Making value<input type="number" inputmode="decimal" data-pc="making" value="12" min="0"></label>
    <label>Stones and other charges, ₹<input type="number" inputmode="decimal" data-pc="stones" value="0" min="0"></label>
  </div>
  <div class="price-calc-out" aria-live="polite">
    <p><span>Metal value</span><b data-pc-o="metal">₹0</b></p>
    <p><span>Making</span><b data-pc-o="making">₹0</b></p>
    <p><span>Stones and other</span><b data-pc-o="stones">₹0</b></p>
    <p><span>GST at 3%</span><b data-pc-o="gst">₹0</b></p>
    <p class="price-calc-total"><span>Price to the customer</span><b data-pc-o="total">₹0</b></p>
  </div>
  <p class="cta-note">Purity is worked out as karat ÷ 24, the way most counters do it. Hallmarking and any other charges go in the stones box. The 24K rate shown is only an example; use today’s rate.</p>
</div>`;

const priceGuide = post({
  slug: 'how-to-calculate-gold-jewellery-price',
  title: 'How to Calculate Gold Jewellery Price in India (with Calculator) | Jwero',
  description: 'The gold jewellery price formula: today’s rate × purity × net weight, plus making, stones and 3% GST. Worked examples and a free calculator.',
  h1: 'How to calculate gold jewellery price',
  eyebrow: 'GUIDE · PRICING',
  cluster: 'Pricing',
  mins: 7,
  sub: 'Today’s rate, the purity, the net weight, making and GST. The same formula every counter uses, worked through with real numbers, and a calculator you can use with your own.',
  product: ['/products/pos', 'See live-rate billing'],
  wa: 'blog-price',
  close: ['Let the rate do the arithmetic.', 'Jwero prices every piece from today’s rate, purity and weight, and reprices the catalogue when the rate moves.'],
  faqs: [
    { q: 'What is the formula for gold jewellery price?', a: 'Price = (rate of 24K gold per gram × karat ÷ 24 × net weight) + making charge + stones and other charges, then GST at 3% on the total.' },
    { q: 'How is the 22K rate worked out from the 24K rate?', a: 'Multiply the 24K rate by 22 ÷ 24, which is about 0.9167. Many shops use 0.916 because 22K jewellery is hallmarked as 916.' },
    { q: 'Is GST charged on making charges?', a: 'When you sell a finished piece, the making charge is part of that sale and GST is 3% on the whole bill. Making on gold the customer brings is job work and is taxed differently; see our GST guide.' },
    { q: 'What is the difference between gross weight and net weight?', a: 'Gross weight includes stones, beads and any other material. Net weight is the gold alone, and it is the weight the metal value is calculated on.' },
  ],
  body: `
  <h2>The formula</h2>
  <p>Every gold jewellery price in India is built the same way:</p>
  <p><b>Price = metal value + making charge + stones and other charges + GST at 3%</b></p>
  <p>The metal value is the part that moves every day, and it is where most mistakes happen. It is worked out as:</p>
  <p><b>Metal value = 24K rate per gram × (karat ÷ 24) × net weight in grams</b></p>
  ${priceCalc}

  <h2>Step 1: start from today’s 24K rate</h2>
  <p>Rates are published for 24K (999) gold per gram or per 10 grams. Most shops take the rate from their association or a market feed once or twice a day. Whatever source you use, use the same one at every counter and on your website, or the same piece will carry two prices.</p>

  <h2>Step 2: convert the rate to the purity of the piece</h2>
  <p>Multiply by the karat over 24. With a 24K rate of ₹7,500 a gram (an example, not today’s rate):</p>
  <ul>
    <li>22K: ₹7,500 × 22 ÷ 24 = <b>₹6,875</b> a gram</li>
    <li>18K: ₹7,500 × 18 ÷ 24 = <b>₹5,625</b> a gram</li>
    <li>14K: ₹7,500 × 14 ÷ 24 = <b>₹4,375</b> a gram</li>
  </ul>
  <p>Some shops round 22K to 91.6% of the 24K rate instead of 91.67%. Both are common. Pick one and print it on your rate board so customers see the same number you bill.</p>

  <h2>Step 3: use the net weight, not the gross</h2>
  <p>Weigh the piece, then subtract stones, beads, lac, wax or anything that is not gold. The metal value is calculated on what is left. For a 10 gram 22K chain with no stones: 10 × ₹6,875 = <b>₹68,750</b>.</p>

  <h2>Step 4: add the making charge</h2>
  <p>Making is charged in one of three ways, and customers compare shops on it more than on anything else:</p>
  <ul>
    <li><b>A percentage of the metal value</b>, for example 12%: ₹68,750 × 12% = ₹8,250</li>
    <li><b>Rupees per gram</b>, for example ₹600 a gram: 10 × ₹600 = ₹6,000</li>
    <li><b>A flat amount per piece</b>, common for light or machine-made items</li>
  </ul>
  <p>Some shops quote “wastage” or “value addition” instead: a percentage added to the weight, charged at the gold rate. 8% wastage on 10 grams adds 0.8 grams, or ₹5,500 at ₹6,875 a gram. It is the same idea expressed in grams. Our <a href="/blog/making-charges-explained">making charges guide</a> covers when to use which.</p>

  <h2>Step 5: add stones and other charges</h2>
  <p>Diamonds, precious stones and certified stones are priced separately, usually per carat or per piece. Add any hallmarking charge you pass on. Keep each on its own line on the bill.</p>

  <h2>Step 6: add GST at 3%</h2>
  <p>GST on gold jewellery is 3% of the total: 1.5% CGST and 1.5% SGST within your state, or 3% IGST to another state. In the example with 12% making: ₹68,750 + ₹8,250 = ₹77,000, GST ₹2,310, <b>price ₹79,310</b>. Our <a href="/blog/gst-on-jewellery-india">GST on jewellery guide</a> covers job work, old gold and loose stones.</p>

  <h2>Where pricing goes wrong</h2>
  <ul>
    <li><b>Yesterday’s rate on today’s bill.</b> The rate changed in the morning and the price tag, the website or the WhatsApp catalogue did not.</li>
    <li><b>Gross weight used as net.</b> The stones get billed twice: once as gold and once as stones.</li>
    <li><b>A different making rule at each counter.</b> Two salespeople quote the same piece differently and the customer notices.</li>
    <li><b>Rounding at every step.</b> Round once, at the end.</li>
  </ul>

  <h2>How Jwero does it</h2>
  <p>Jwero prices each piece from the rate, purity, net weight and making you set, and recalculates the catalogue when the rate changes, so the counter, the website and WhatsApp show the same price. At the counter, a weight-based sale is quoted the same way: rate × net weight plus making. See <a href="/products/pos">billing at the counter</a> and <a href="/products/catalog">live-rate catalogues</a>.</p>`,
});

// 2 ----------------------------------------------------------------------
const gstGuide = post({
  slug: 'gst-on-jewellery-india',
  title: 'GST on Jewellery in India: Gold, Making Charges, Job Work and Old Gold | Jwero',
  description: 'GST on gold jewellery is 3%. How it applies to making charges, job work on customer gold, old gold exchange and loose stones, with examples.',
  h1: 'GST on jewellery in India',
  eyebrow: 'GUIDE · GST',
  cluster: 'Accounts and GST',
  mins: 8,
  sub: 'Three percent on the piece is the easy part. Making charges, gold the customer brings, old gold and loose diamonds are where bills and returns go wrong.',
  product: ['/products/billing-finance', 'See billing and GST in Jwero'],
  wa: 'blog-gst',
  close: ['GST worked out on every bill.', 'Jwero applies the right rate to the piece, the making and the job work, and prepares GSTR-1, GSTR-3B and the HSN summary from the same bills.'],
  faqs: [
    { q: 'What is the GST rate on gold jewellery?', a: '3% of the value: 1.5% CGST plus 1.5% SGST for a sale within your state, or 3% IGST for a sale to another state.' },
    { q: 'Is GST on making charges 3% or 5%?', a: 'When you sell a finished piece, making is part of that sale and is taxed at 3% with it. When you make a piece from gold the customer gives you, you are doing job work, which has its own rate (5% for jewellery at the time of writing). Confirm the current rate with your CA.' },
    { q: 'Do I charge GST when a customer exchanges old gold?', a: 'GST applies to the new jewellery you sell. How the old gold credit affects the taxable value is a question with differing views; read the old gold section and confirm with your CA.' },
    { q: 'Do I pay GST when I buy old gold from a customer?', a: 'A customer who is not registered under GST does not charge you GST, and buying gold from them is not generally under reverse charge. Keep a purchase voucher with the customer’s details for every purchase.' },
  ],
  body: `
  <h2>The short answer</h2>
  <p>Gold, silver and platinum jewellery carry <b>3% GST</b>. Within your state that is 1.5% CGST and 1.5% SGST; to another state it is 3% IGST. Finished jewellery is usually under HSN 7113. Most of the questions are about what that 3% is charged on.</p>
  ${caNote('Rates for job work and loose stones, and the treatment of old gold exchange, are the parts most worth confirming for your business.')}

  <h2>Making charges on a piece you sell</h2>
  <p>When you sell a finished piece, the metal, the making and the stones are one sale. GST is 3% on the full bill, making included. Showing making on its own line helps the customer understand the price; it does not change the rate.</p>
  <p>Example: metal ₹68,750, making ₹8,250, total ₹77,000. GST is 3% of ₹77,000 = ₹2,310.</p>

  <h2>Making on gold the customer brings: job work</h2>
  <p>When a customer hands you their own gold and pays you only to make a piece, you are not selling gold. You are providing a service on goods that belong to someone else. That is job work, taxed at its own rate (5% for jewellery job work at the time of writing, with a lower rate for diamond job work). Bill the making as a service, and record the customer’s gold coming in and the piece going out by weight so the two match.</p>

  <h2>Work you give to karigars</h2>
  <p>Gold you send to a karigar or a job-work unit is not a sale. It moves on a delivery challan and comes back as a finished piece. The karigar’s making charge, if they are registered, is a job-work service billed to you. Track it in fine grams, not only in rupees, or the loss will hide in the gap.</p>

  <h2>Old gold exchange</h2>
  <p>When a customer buys a new piece and pays part of it with old gold, you are doing two things: selling new jewellery, and buying old gold from a customer who is not registered. GST applies to the new jewellery.</p>
  <p>The question is the taxable value. The common practice is to charge GST on the full value of the new piece. An advance ruling from Karnataka in 2021 accepted charging it on the value after the old gold, but an advance ruling binds only the business that asked for it. Decide this with your CA and apply it the same way on every bill.</p>

  <h2>Buying old gold</h2>
  <p>A customer who is not registered does not charge you GST, and buying gold from such a customer is not generally under reverse charge. Make a purchase voucher with the customer’s name, ID, weight, purity and amount every time. For purchases above ₹2 lakh, record their PAN or Form 60 as well (see the <a href="/blog/cash-limit-pan-jewellery-sale">cash and PAN guide</a>).</p>

  <h2>Loose diamonds and stones</h2>
  <p>Cut and polished diamonds and some precious stones sold loose carry a lower rate than jewellery. Once set in a piece, they are part of the jewellery and taxed at 3% with it. If you trade loose stones, keep them as separate items so they carry their own rate.</p>

  <h2>Returns you will file</h2>
  <ul>
    <li><b>GSTR-1</b>: your sales, with the HSN summary</li>
    <li><b>GSTR-3B</b>: the monthly summary and payment</li>
    <li><b>GSTR-2B</b>: reconcile it against your purchases before claiming input credit</li>
  </ul>

  <h2>How Jwero does it</h2>
  <p>Jwero taxes the making charge separately where it needs to be, prepares GSTR-1, GSTR-3B and the HSN summary from the same bills, and reconciles GSTR-2B. Karigar issues and receipts are recorded by fine weight. See <a href="/products/billing-finance">billing and finance</a>, and <a href="/blog/jewellery-software-and-tally">how Jwero works alongside Tally</a>.</p>`,
});

// 3 ----------------------------------------------------------------------
const makingGuide = post({
  slug: 'making-charges-explained',
  title: 'Making Charges on Gold Jewellery: Per Gram, Percentage and Wastage Explained | Jwero',
  description: 'How jewellers charge making: per gram, as a percentage, flat per piece, or as wastage. Worked examples, what to show on the bill, and how to stay consistent.',
  h1: 'Making charges explained',
  eyebrow: 'GUIDE · PRICING',
  cluster: 'Pricing',
  mins: 6,
  sub: 'Per gram, percentage, flat or wastage: four ways to charge for the same work. Which suits which piece, how each looks on the bill, and how to keep every counter quoting the same.',
  product: ['/products/pos', 'See live-rate billing'],
  wa: 'blog-making',
  close: ['One making rule, every counter.', 'Set making once in Jwero and every counter, the website and WhatsApp quote it the same way.'],
  faqs: [
    { q: 'What is a normal making charge on gold jewellery?', a: 'It varies widely by design, city and shop: machine-made chains carry low making, while handmade, antique and bridal work carry much more. There is no standard rate; set yours by category and apply it consistently.' },
    { q: 'Is wastage the same as making charge?', a: 'It is the same idea expressed differently. Wastage, or value addition, is a percentage added to the weight and charged at the gold rate; making is usually charged in rupees. Some shops charge both.' },
    { q: 'Should making be shown separately on the bill?', a: 'Showing it separately builds trust and avoids disputes. Under BIS hallmarking rules, the bill should show the net weight, purity and hallmarking charge separately; most jewellers show making on its own line too.' },
  ],
  body: `
  <h2>Four ways to charge for the same work</h2>
  <p>On a 10 gram 22K piece at ₹6,875 a gram (metal value ₹68,750):</p>
  <ul>
    <li><b>Percentage of metal value</b>, say 12%: ₹8,250. Rises and falls with the gold rate.</li>
    <li><b>Per gram</b>, say ₹600 a gram: ₹6,000. Stays the same when the rate moves, so it is easier to quote.</li>
    <li><b>Flat per piece</b>, say ₹1,500: suits light, machine-made items where weight varies little.</li>
    <li><b>Wastage or value addition</b>, say 8% of weight: 0.8 g × ₹6,875 = ₹5,500. Charged in grams, so it also moves with the rate.</li>
  </ul>

  <h2>Which suits which piece</h2>
  <ul>
    <li><b>Chains, coins and machine-made pieces:</b> per gram or flat. Customers compare these across shops, and a simple number wins.</li>
    <li><b>Handmade, antique, temple and bridal:</b> percentage or wastage. The work is in the craft, and the charge should grow with the piece.</li>
    <li><b>Studded jewellery:</b> making on the metal, with stones priced separately.</li>
  </ul>

  <h2>What to show on the bill</h2>
  <p>Show gross weight, net weight, purity, the rate, metal value, making, stones and GST on separate lines. BIS hallmarking rules ask for net weight, purity and the hallmarking charge to be shown. Making on its own line is what stops the “why is this so much?” conversation.</p>

  <h2>Making, GST and job work</h2>
  <p>On a piece you sell, making is part of the sale and carries 3% GST with it. Making on gold the customer brings is job work, billed as a service. See the <a href="/blog/gst-on-jewellery-india">GST guide</a>.</p>

  <h2>Discounts on making</h2>
  <p>“Up to 50% off making” is the most common festive offer. Decide in advance which categories it covers, who can approve more, and whether it applies to wastage too. A discount given differently at two counters costs margin and trust.</p>

  <h2>How Jwero does it</h2>
  <p>In Jwero, making is part of each product’s price setup, and the counter quote, the catalogue and the website price all use it. Discounts beyond what a salesperson may give can be sent to a manager for approval at the counter. See <a href="/products/pos">billing</a> and the <a href="/blog/how-to-calculate-gold-jewellery-price">price calculator</a>.</p>`,
});

// 4 ----------------------------------------------------------------------
const oldGoldGuide = post({
  slug: 'old-gold-exchange-jewellers',
  title: 'Old Gold Exchange: How Jewellers Value It, Deductions and Paperwork | Jwero',
  description: 'How to value old gold for exchange or buyback: purity testing, stone deduction, net weight, today’s rate, the paperwork to keep, and cash payout limits.',
  h1: 'Old gold exchange: valuing it fairly',
  eyebrow: 'GUIDE · OLD GOLD',
  cluster: 'Counter',
  mins: 7,
  sub: 'Test it, weigh it, take out the stones, apply today’s rate, and write it all down. The counter process that keeps exchange fair to the customer and safe for the shop.',
  product: ['/products/pos', 'See old gold at the counter'],
  wa: 'blog-oldgold',
  close: ['Old gold, valued the same way every time.', 'Jwero records the test, the stone deduction and the value, issues the voucher, and applies it against the new bill.'],
  faqs: [
    { q: 'How is old gold valued?', a: 'Old gold value = net weight after removing stones × tested purity (karat ÷ 24) × today’s buying rate, less any deduction your shop applies for melting and refining.' },
    { q: 'Why do jewellers deduct from old gold?', a: 'Old pieces often contain solder and alloys, and lose some weight when melted and refined. Shops apply a deduction for this. Tell the customer the deduction before testing, and print it on the voucher.' },
    { q: 'Can I pay cash for old gold?', a: 'Cash payouts are limited. Cash expenses above ₹10,000 to one person in a day can be disallowed for income tax, so larger buybacks are better paid by bank transfer. Confirm with your CA.' },
    { q: 'Do I need the customer’s PAN?', a: 'For a purchase above ₹2 lakh, record the customer’s PAN or Form 60. For every purchase, keep their name, ID and a signed voucher.' },
  ],
  body: `
  <h2>The formula</h2>
  <p><b>Old gold value = net weight × tested purity × today’s buying rate − your stated deduction</b></p>
  <p>Example: a 12 gram bangle with 1.5 grams of stones, tested at 22K, buying rate ₹6,700 a gram for 22K. Net weight 10.5 g × ₹6,700 = ₹70,350, before any deduction.</p>

  <h2>Step 1: test the purity</h2>
  <p>Use a karat meter (XRF) if you have one; a touchstone test is common but less exact. Test in front of the customer and show the reading. A hallmarked piece with a HUID tells you the declared purity, but test anyway: old pieces are often repaired with lower-karat solder.</p>

  <h2>Step 2: weigh and take out the stones</h2>
  <p>Weigh gross, then deduct stones, beads, lac and anything that is not gold. Write both weights on the voucher. This is where most exchange disputes start, so do it where the customer can see the scale.</p>

  <h2>Step 3: apply today’s rate and your deduction</h2>
  <p>Use your buying rate for the tested purity. If your shop deducts for melting and refining loss, state the percentage before you test, not after. Shops that are open about the deduction lose fewer customers over it.</p>

  <h2>Step 4: exchange or buyback</h2>
  <ul>
    <li><b>Exchange:</b> the value becomes a credit against a new piece. Issue a voucher and apply it on the new bill.</li>
    <li><b>Buyback:</b> you pay the customer. Larger amounts should go by bank transfer; cash expenses above ₹10,000 to one person in a day can be disallowed for income tax.</li>
  </ul>

  <h2>The paperwork to keep</h2>
  <ul>
    <li>Customer name, phone and ID</li>
    <li>PAN or Form 60 for amounts above ₹2 lakh</li>
    <li>Gross weight, stone weight, net weight, tested purity, rate and deduction</li>
    <li>A purchase voucher signed by the customer</li>
  </ul>
  <p>GST is charged on the new piece; see the <a href="/blog/gst-on-jewellery-india">GST guide</a> for how the exchange affects it.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero handles old gold as a voucher at the counter: the exchange credit is applied against the new purchase. Buybacks record the stone-weight deduction, go through an approve and settle step, and produce a voucher document, with cash payout limits checked before settlement. Old gold can also be redeemed into a <a href="/products/gold-schemes">gold scheme</a>. See <a href="/products/pos">the counter</a>.</p>`,
});

// 5 ----------------------------------------------------------------------
const cashGuide = post({
  slug: 'cash-limit-pan-jewellery-sale',
  title: 'Cash and PAN Rules for Jewellers: ₹2 Lakh, Section 269ST and PMLA | Jwero',
  description: 'When a jeweller needs PAN or Form 60, the ₹2 lakh cash limit under Section 269ST, cash payouts, and the ₹10 lakh PMLA rule for dealers in precious metals.',
  h1: 'Cash and PAN rules for jewellers',
  eyebrow: 'GUIDE · COMPLIANCE',
  cluster: 'Compliance',
  mins: 7,
  sub: 'Three numbers every counter should know: PAN above ₹2 lakh, no cash receipt of ₹2 lakh or more, and the ₹10 lakh cash rule for dealers in precious metals and stones.',
  product: ['/trust/security', 'See how Jwero handles compliance'],
  wa: 'blog-cash',
  close: ['Compliance checks at the moment of sale.', 'Ask us how Jwero records PAN and KYC, and where it checks cash limits today.'],
  faqs: [
    { q: 'When does a jeweller need the customer’s PAN?', a: 'For a sale or purchase of goods above ₹2 lakh in one transaction, record the customer’s PAN, or Form 60 if they do not have one (Rule 114B of the Income-tax Rules).' },
    { q: 'How much cash can a jeweller accept?', a: 'Section 269ST says you must not receive ₹2 lakh or more in cash from one person in a day, for one transaction, or for one event. The penalty under Section 271DA equals the amount received.' },
    { q: 'Can a customer split a cash payment over two bills?', a: 'Splitting does not help. The limit applies to the total from one person in a day and to all payments for one event, such as a wedding purchase.' },
    { q: 'What is the PMLA rule for jewellers?', a: 'Dealers in precious metals and stones are reporting entities under PMLA for cash transactions of ₹10 lakh or more, including linked transactions. That brings KYC, record-keeping and reporting to FIU-IND. Confirm your obligations with your CA.' },
  ],
  body: `
  <h2>The three numbers</h2>
  <ul>
    <li><b>Above ₹2 lakh:</b> record PAN or Form 60 for the sale or purchase.</li>
    <li><b>₹2 lakh or more in cash:</b> you must not receive it from one person in a day, for one transaction, or for one event.</li>
    <li><b>₹10 lakh or more in cash:</b> PMLA obligations for dealers in precious metals and stones.</li>
  </ul>
  ${caNote('These are legal obligations with penalties. Use this page to brief your team, and your CA for how they apply to your business.')}

  <h2>PAN or Form 60 above ₹2 lakh</h2>
  <p>Rule 114B of the Income-tax Rules requires PAN for a sale or purchase of goods above ₹2 lakh in a transaction, whatever the mode of payment. If the customer has no PAN, they fill Form 60. This applies to buying old gold too. Record it on the bill, not on a separate sheet.</p>

  <h2>Section 269ST: the cash receipt limit</h2>
  <p>You must not receive ₹2 lakh or more in cash:</p>
  <ul>
    <li>from one person in one day, in total;</li>
    <li>for one transaction; or</li>
    <li>for transactions relating to one event or occasion, such as a wedding.</li>
  </ul>
  <p>The penalty under Section 271DA is equal to the amount received, and it falls on the jeweller who receives the cash, not the customer. Splitting a ₹3 lakh bill into two cash bills on the same day does not avoid it.</p>

  <h2>Paying out cash</h2>
  <p>On the other side, cash expenses above ₹10,000 to one person in a day can be disallowed for income tax (Section 40A(3)). For old gold buybacks above that, pay by bank transfer.</p>

  <h2>PMLA: the ₹10 lakh rule</h2>
  <p>Since December 2020, dealers in precious metals and stones are reporting entities under the Prevention of Money Laundering Act for cash transactions of ₹10 lakh or more, including linked transactions. In practice that means customer due diligence (KYC), keeping records, registering with FIU-IND and reporting as required. Your CA will tell you what applies at your size.</p>

  <h2>What to train the counter on</h2>
  <ul>
    <li>Ask for PAN before billing above ₹2 lakh, not after.</li>
    <li>Add up the day’s cash from the same customer before taking more.</li>
    <li>Treat a wedding purchase over several visits as one event.</li>
    <li>Never pay cash above ₹10,000 for a buyback.</li>
  </ul>

  <h2>What Jwero does today</h2>
  <p>Jwero keeps KYC records in a protected vault and contains the rules for PAN above ₹2 lakh and the PMLA ₹10 lakh threshold. Today the cash limit is enforced on old gold buybacks; it does not yet block a cash payment at counter checkout, so the counter still needs to follow the rule. See <a href="/trust/security">security and compliance</a>.</p>`,
});

// 6 ----------------------------------------------------------------------
const huidCounterGuide = post({
  slug: 'huid-hallmarking-rules-jewellers',
  title: 'HUID Hallmarking Rules for Jewellers: What to Check Before Every Sale | Jwero',
  description: 'Mandatory hallmarking and the 6-digit HUID: which pieces need it, the exemptions, what the customer can verify, and what the counter should check before billing.',
  h1: 'HUID hallmarking: what to check before every sale',
  eyebrow: 'GUIDE · HALLMARKING',
  cluster: 'Compliance',
  mins: 6,
  sub: 'Which gold pieces need a HUID, who is exempt, how customers check it on their phone, and the three checks your counter should make before a hallmarked piece is billed.',
  product: ['/products/inventory', 'See HUID in Jwero'],
  wa: 'blog-huidrules',
  close: ['No unhallmarked piece billed by mistake.', 'Jwero checks the HUID at the counter, and can warn or block the sale when it is missing.'],
  faqs: [
    { q: 'Is HUID mandatory on gold jewellery?', a: 'Hallmarking with a 6-digit HUID is mandatory for gold jewellery and artefacts sold in the districts notified by BIS. Check the current list of districts on the BIS website.' },
    { q: 'Who is exempt from mandatory hallmarking?', a: 'At the time of writing, jewellers with annual turnover up to ₹40 lakh, and articles weighing under 2 grams, among a few other exemptions. Confirm the current exemptions with BIS.' },
    { q: 'How can a customer check a HUID?', a: 'With the BIS CARE app: entering the HUID shows the purity, the type of article and the hallmarking centre.' },
    { q: 'Can two pieces have the same HUID?', a: 'No. Each HUID is unique to one piece. A duplicate in your stock means a data entry error or a problem piece, and should be checked before sale.' },
  ],
  body: `
  <h2>The rule in brief</h2>
  <p>Gold jewellery and artefacts sold in the districts notified by BIS must be hallmarked, and since 1 April 2023 the hallmark must carry a 6-digit alphanumeric HUID (Hallmark Unique Identification). A hallmark has three marks: the BIS logo, the purity grade (for example 22K916) and the HUID.</p>
  ${caNote('Hallmarking rules, notified districts and exemptions are set by BIS and do change. Check the BIS website for the current position.')}

  <h2>Which purities are hallmarked</h2>
  <p>Gold jewellery is hallmarked in set grades, including 14K, 18K, 20K, 22K, 23K and 24K. A piece outside these grades cannot be hallmarked as gold jewellery.</p>

  <h2>Exemptions</h2>
  <p>At the time of writing, the main exemptions are jewellers with annual turnover up to ₹40 lakh and articles under 2 grams. If you rely on an exemption, keep the basis for it on file.</p>

  <h2>What the customer can check</h2>
  <p>Customers can enter the HUID in the BIS CARE app and see the purity, the article type and the hallmarking centre. More customers do this every year, especially for bridal purchases. A mismatch at the counter loses the sale and the customer’s trust.</p>

  <h2>Three checks before billing a hallmarked piece</h2>
  <ul>
    <li><b>The HUID is in your stock record</b> and matches the one on the piece.</li>
    <li><b>The purity on the bill matches the hallmark.</b> A 22K916 piece billed as 22K at a different rate is a dispute waiting to happen.</li>
    <li><b>The HUID is not on another piece</b> in your records. Duplicates are usually typing errors, but they need to be fixed before sale.</li>
  </ul>

  <h2>Keeping the records</h2>
  <p>Record the HUID when the piece comes back from the hallmarking centre, not at the counter. Track hallmarking batches: which pieces went out, when they came back, and which failed. Our <a href="/blog/huid-hallmarking-records-audit-checklist">HUID records and audit checklist</a> covers the record-keeping in detail.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero stores a HUID on each piece and will not accept the same HUID on two pieces. Hallmarking batches are tracked going out and coming back. At the counter, a hallmark check can be set to off, warn or block, and blocks by default where hallmarking is mandatory. See <a href="/products/inventory">inventory</a>.</p>`,
});

// 7 ----------------------------------------------------------------------
const ewayGuide = post({
  slug: 'e-way-bill-for-jewellery',
  title: 'E-Way Bill for Jewellery: Is Gold Exempt? Delivery Challans and State Rules | Jwero',
  description: 'Jewellery under Chapter 71 is exempt from the GST e-way bill under Rule 138(14), but some states require it for intra-state gold movement. Plus delivery challans.',
  h1: 'E-way bill for jewellery',
  eyebrow: 'GUIDE · GST',
  cluster: 'Accounts and GST',
  mins: 5,
  sub: 'Jewellery is on the national exemption list, so most movements need no e-way bill. But some states have their own rule for gold, and every movement still needs a challan or invoice.',
  product: ['/products/inventory', 'See memo and dispatch in Jwero'],
  wa: 'blog-eway',
  close: ['Every movement on paper, every piece accounted for.', 'Jwero records memos, consignments and dispatch, so goods out and goods back always match.'],
  faqs: [
    { q: 'Is an e-way bill required for gold jewellery?', a: 'Under the GST rules, goods under Chapter 71 (precious metals, stones and jewellery) are exempt from the e-way bill nationally. Some states have notified their own requirement for intra-state movement of gold above a value, so check your state.' },
    { q: 'Which states require an e-way bill for gold?', a: 'Kerala, for example, has notified an e-way bill for intra-state movement of gold and precious stones above a set value. Rules differ by state and change, so confirm with your CA.' },
    { q: 'What document do I need to send gold to a karigar?', a: 'A delivery challan, since it is not a sale. It should show the weight and purity, and the goods should come back against it.' },
  ],
  body: `
  <h2>The short answer</h2>
  <p>Under the GST e-way bill rules, goods under <b>Chapter 71</b> (natural or cultured pearls, precious and semi-precious stones, precious metals and jewellery) are on the list of goods that do not need an e-way bill (Rule 138(14) and its annexure). Most jewellery movements across India need no e-way bill.</p>
  ${caNote('State rules for intra-state movement of gold differ and change. Confirm the rule for your state before you rely on the exemption.')}

  <h2>The exception: state rules</h2>
  <p>States can notify their own requirements for movement within the state. Kerala, for example, has notified an e-way bill for intra-state movement of gold and precious stones above a set value. If you move stock within such a state, follow its rule.</p>

  <h2>No e-way bill still means paperwork</h2>
  <p>Every movement of goods needs a document travelling with it:</p>
  <ul>
    <li><b>A tax invoice</b> when it is a sale.</li>
    <li><b>A delivery challan</b> when it is not a sale: gold to a karigar or job-work unit, pieces sent on approval, stock to an exhibition, or a transfer to another branch.</li>
  </ul>
  <p>The challan should show the items, weights and purity. Goods sent on approval or for job work should come back, or be billed, against it.</p>

  <h2>Where jewellers lose track</h2>
  <ul>
    <li>Pieces out on approval with no record of what came back.</li>
    <li>Exhibition stock counted out but not counted back in.</li>
    <li>Karigar issues recorded in grams of jewellery, not fine grams.</li>
  </ul>

  <h2>How Jwero does it</h2>
  <p>Jwero records approval memos, memo issues, consignments, dispatch and exhibition stock, so each movement has a document, and what went out is matched against what came back or was billed. Karigar issues and receipts are recorded by fine weight. See <a href="/products/inventory">inventory</a> and <a href="/products/manufacturing">manufacturing</a>.</p>`,
});

// 8 ----------------------------------------------------------------------
const einvoiceGuide = post({
  slug: 'e-invoicing-for-jewellers',
  title: 'E-Invoicing for Jewellers: Who Must Issue It, B2B vs B2C, and the 30-Day Rule | Jwero',
  description: 'E-invoicing applies to B2B invoices for businesses above ₹5 crore turnover. What jewellers selling to the trade need to do, and why retail bills are different.',
  h1: 'E-invoicing for jewellers',
  eyebrow: 'GUIDE · GST',
  cluster: 'Accounts and GST',
  mins: 5,
  sub: 'If you sell to other businesses and your turnover is above ₹5 crore, your B2B invoices need an IRN. Retail bills to customers do not. Here is how it works for jewellers.',
  product: ['/products/billing-finance', 'See e-invoicing in Jwero'],
  wa: 'blog-einvoice',
  close: ['E-invoices from the same bill.', 'Jwero generates the e-invoice from the B2B bill, so there is nothing to type twice.'],
  faqs: [
    { q: 'Is e-invoicing mandatory for jewellers?', a: 'For B2B invoices, if your aggregate turnover in any financial year since 2017-18 has been above ₹5 crore. Retail bills to customers (B2C) do not need an e-invoice.' },
    { q: 'What is the 30-day rule?', a: 'Businesses with turnover of ₹10 crore or more must report an invoice to the e-invoice portal within 30 days of its date. After that, the portal will not accept it.' },
    { q: 'Do retail jewellery bills need a QR code?', a: 'Only very large businesses, above ₹500 crore turnover, must print a dynamic QR code on B2C invoices. Ordinary retail bills do not need an e-invoice.' },
  ],
  body: `
  <h2>Who must e-invoice</h2>
  <p>E-invoicing applies to <b>B2B invoices</b> (and exports and credit or debit notes to businesses) for registered businesses whose aggregate turnover in any financial year from 2017-18 has been <b>above ₹5 crore</b>. For a jeweller, that usually means wholesalers, manufacturers and larger retailers who also sell to the trade.</p>
  ${caNote('Thresholds and reporting deadlines have changed several times. Confirm the current rules and whether they apply to you.')}

  <h2>How it works</h2>
  <p>You create the invoice in your billing software as usual. It is reported to the Invoice Registration Portal, which returns an IRN (Invoice Reference Number) and a signed QR code. The IRN and QR code go on the invoice you give the buyer. The details flow into your GSTR-1.</p>

  <h2>The 30-day rule</h2>
  <p>Businesses with turnover of ₹10 crore or more must report each invoice within 30 days of its date. A B2B invoice not reported in time cannot be reported later, which affects your buyer’s input credit.</p>

  <h2>Retail bills are different</h2>
  <p>Bills to individual customers (B2C) do not need an e-invoice. Only businesses above ₹500 crore turnover must show a dynamic QR code on B2C invoices.</p>

  <h2>Where jewellers trip up</h2>
  <ul>
    <li>A trade customer’s GSTIN missing or wrong on the bill.</li>
    <li>Approval goods billed late, outside the 30-day window.</li>
    <li>B2B and retail bills mixed in one series without the right tags.</li>
  </ul>

  <h2>How Jwero does it</h2>
  <p>Jwero generates e-invoices from B2B bills and prepares GSTR-1, GSTR-3B and the HSN summary from the same records. See <a href="/products/billing-finance">billing and finance</a> and the <a href="/blog/gst-on-jewellery-india">GST on jewellery guide</a>.</p>`,
});

module.exports = [priceGuide, gstGuide, makingGuide, oldGoldGuide, cashGuide, huidCounterGuide, ewayGuide, einvoiceGuide];
