// Tier 2 articles: everyday operational pain, by kind of jewellery business.
// Same rules as blog-rules.js: plain rules and worked examples, what to confirm
// with a CA or lawyer, and only the parts of Jwero that pim-app ships.
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
const check = (who, what) => `<p class="post-note"><b>Check with your ${who}.</b> ${what} Rules here are as we understand them in October 2026, and they differ by state and change over time.</p>`;
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

const girvi = post({
  slug: 'girvi-gold-loan-business-guide',
  title: 'Girvi Business for Jewellers: Licence, Interest, Renewals and Auctions | Jwero',
  description: 'How a jeweller’s girvi (gold loan) business works: state licences and interest caps, how to calculate interest, renewals, release and auction notices.',
  h1: 'Running a girvi business',
  eyebrow: 'GUIDE · GIRVI',
  cluster: 'Girvi and gold loans',
  mins: 7,
  sub: 'Pledge, interest, renewal, release, and sometimes auction. The girvi cycle, the rules that govern it in most states, and the records that keep it out of trouble.',
  product: ['/products/erp', 'See girvi in Jwero'],
  wa: 'blog-girvi',
  close: ['Every pledge, every rupee of interest, on record.', 'Jwero runs pledges, interest, renewals, part payments, release and auction notices, with a receipt for each step.'],
  faqs: [
    { q: 'Do jewellers need a licence for girvi?', a: 'In most states, lending against gold needs a money-lender’s or pawnbroker’s licence under the state’s money-lending law, which also caps interest and sets notice periods. Check your state’s act.' },
    { q: 'How is girvi interest calculated?', a: 'Usually as simple interest per month on the loan amount: ₹1,00,000 at 1.5% a month is ₹1,500 a month. Use the method and the cap your state allows, and print it on the pledge receipt.' },
    { q: 'How much can a jeweller lend against gold?', a: 'There is no single rule for jewellers. Many lend a share of today’s gold value to leave a margin if the rate falls; banks and NBFCs work to a 75% loan-to-value cap as a reference point.' },
    { q: 'Can a jeweller auction unredeemed gold?', a: 'Only after the notice your state’s law requires, sent to the borrower in the prescribed way. Keep proof of every notice.' },
  ],
  body: `
  <h2>The girvi cycle</h2>
  <ol>
    <li><b>Pledge:</b> the customer leaves gold, you test and weigh it, and lend an amount against it.</li>
    <li><b>Interest:</b> charged monthly on the loan.</li>
    <li><b>Renewal or part payment:</b> the customer pays interest, or part of the loan, and the pledge continues.</li>
    <li><b>Release:</b> the customer repays in full and takes the gold back.</li>
    <li><b>Default and auction:</b> if the loan is not repaid, the gold is sold after the notice the law requires.</li>
  </ol>
  ${check('lawyer', 'Girvi is regulated by state money-lending and pawnbroker laws: licences, interest caps, receipts and auction notice periods all differ by state.')}

  <h2>Licence and interest caps</h2>
  <p>Most states require a money-lender’s or pawnbroker’s licence for lending against gold, and cap the interest you can charge. The state act also sets what the pledge receipt must show and how long you must wait, and notify, before selling unredeemed gold.</p>

  <h2>Valuing the pledge</h2>
  <p>Test purity, weigh gross and net, and value the gold at today’s rate. Lend a share of that value, not all of it, so a fall in the gold rate does not leave the loan bigger than the gold. Write the gross weight, net weight, purity and value on the receipt.</p>

  <h2>Calculating interest</h2>
  <p>Most girvi interest is simple interest per month: <b>loan × monthly rate × months</b>. A ₹1,00,000 loan at 1.5% a month for 7 months is ₹10,500. Decide how part months are counted, and apply it the same way to every customer.</p>

  <h2>Renewals and part payments</h2>
  <p>When a customer pays only interest, record it and carry the pledge forward. When they pay part of the loan, reduce the principal from that date. Give a receipt each time; most girvi disputes are about payments the customer says they made.</p>

  <h2>Release and auction</h2>
  <p>On release, match the gold returned to the pledge record by weight in front of the customer. On default, send the notices your state requires, keep proof, and record the auction and how the proceeds were applied.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero’s girvi module records pledges and loans, accrues interest, handles renewals, part payments and releases, prints the pledge receipt, and runs the default process with auction notices and auctions. Girvi reports show what is out, what is due and what is overdue. See <a href="/products/erp">ERP</a>.</p>`,
});

const girviRegister = post({
  slug: 'girvi-register-software',
  title: 'Girvi Register Software: Moving Gold Loans Off the Notebook | Jwero',
  description: 'Why the girvi notebook fails as the book grows, what a girvi register in software must hold, and how to move existing pledges across without losing a rupee.',
  h1: 'Girvi register software',
  eyebrow: 'GUIDE · GIRVI',
  cluster: 'Girvi and gold loans',
  mins: 5,
  sub: 'A notebook works for twenty pledges. At two hundred, interest is missed, renewals go unrecorded and the gold in the locker stops matching the book.',
  product: ['/products/erp', 'See girvi in Jwero'],
  wa: 'blog-girviregister',
  close: ['Your girvi book, on one screen.', 'Bring your current register. We will show it in Jwero with interest worked out to today.'],
  faqs: [
    { q: 'What should a girvi register record?', a: 'Customer and ID, items pledged with gross and net weight and purity, valuation, loan amount, interest rate and method, every payment and renewal, and the release or auction.' },
    { q: 'How do I move existing pledges into software?', a: 'Enter each open pledge with its original date, loan and payments so far. The software then works out interest to date; check a sample against your notebook before you switch.' },
    { q: 'Can customers be reminded about interest on WhatsApp?', a: 'Yes, if they have agreed to messages. Reminders before the due date reduce overdue loans more than calls after it.' },
  ],
  body: `
  <h2>Where the notebook breaks</h2>
  <ul>
    <li><b>Interest worked out by hand</b>, differently on different days.</li>
    <li><b>Part payments</b> written in the margin and missed at release.</li>
    <li><b>The locker and the book</b> stop matching, and nobody knows since when.</li>
    <li><b>Overdue loans</b> found only when someone flips through the pages.</li>
  </ul>

  <h2>What the register must hold</h2>
  <ul>
    <li>Customer name, phone and ID</li>
    <li>Each item: description, gross weight, net weight, purity, value</li>
    <li>Loan amount, rate, interest method and start date</li>
    <li>Every payment, renewal and part repayment, with receipt numbers</li>
    <li>Release or auction, with date and who handled it</li>
  </ul>

  <h2>Moving across</h2>
  <p>Enter open pledges first, with their original dates and payments so far. Check twenty of them against the notebook: if interest to date matches, switch. Closed pledges can follow later for history.</p>

  <h2>What changes after</h2>
  <p>You see what is due this week, what is overdue and the total lent against how much gold, without opening a page. Customers can get a reminder before interest falls due. Read the <a href="/blog/girvi-gold-loan-business-guide">girvi business guide</a> for licences and interest rules.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero records each pledge with its items and weights, accrues interest, records renewals and part payments, prints pledge receipts, and reports what is outstanding and overdue. See <a href="/products/erp">ERP</a>.</p>`,
});

const wastage = post({
  slug: 'karigar-wastage-norms-settlement',
  title: 'Karigar Wastage: Normal Loss, Caps and Settlement | Jwero',
  description: 'How much gold loss is normal at each stage, how to set wastage norms for karigars, cap recovery fairly, and settle every job in fine grams.',
  h1: 'Karigar wastage: norms, caps and settlement',
  eyebrow: 'GUIDE · MANUFACTURING',
  cluster: 'Manufacturing',
  mins: 6,
  sub: 'Some gold is always lost in making. The question is how much is normal, who carries the rest, and whether you find out per job or at the year-end stock count.',
  product: ['/products/manufacturing', 'See karigar settlement in Jwero'],
  wa: 'blog-wastage',
  close: ['Settle every job against its norm.', 'Jwero assesses wastage per job and caps recovery to the norm you set, in fine grams.'],
  faqs: [
    { q: 'What is a normal wastage percentage?', a: 'It depends on the process and design: filing and polishing lose less than intricate handmade work, and casting has its own losses. Set a norm per process from your own history, not a market number.' },
    { q: 'Should karigars pay for loss above the norm?', a: 'Many workshops recover loss above an agreed norm, up to a cap. Put the norm and the cap in writing before the job is issued.' },
    { q: 'Why settle in fine grams?', a: 'Because gold is issued and returned in different purities. Converting everything to fine (pure) gold is the only way the issue and the return can be compared fairly.' },
  ],
  body: `
  <h2>Why loss is normal, and why it hides</h2>
  <p>Filing, soldering, polishing and setting all lose some gold. Some comes back as dust and filings, some does not. When loss is only checked at the yearly stock count, a careful karigar and a careless one look the same.</p>

  <h2>Set norms per process</h2>
  <p>Take your own last few months of jobs and work out the loss per process: casting, filing, setting, polishing. That becomes the norm. Different designs can carry different norms; a heavy plain bangle is not a filigree necklace.</p>

  <h2>Issue and receive in fine grams</h2>
  <p>Fine weight = gross weight × purity. 50 g of 22K issued is 45.8 g fine. If the karigar returns 48 g of 22K finished work and 1.2 g of 22K scrap, that is 45.0 g fine back. The loss is 0.8 g fine, or 1.7%. Compare that to the norm.</p>

  <h2>Cap recovery fairly</h2>
  <p>A common rule: loss within the norm is the workshop’s cost; loss above the norm is recovered from the karigar, up to a cap. Write the norm and the cap on the job card before work starts, and settle each job when it comes back, not in a lump at month end.</p>

  <h2>Read the pattern, not one job</h2>
  <p>One high-loss job is noise. The same karigar above norm on most jobs is a conversation. The <a href="/tools/gold-loss-calculator">gold-loss calculator</a> shows what loss above norm is worth over a year.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero issues and receives karigar jobs by weight and purity, assesses wastage at settlement, and caps recovery to the norm you set. A karigar scorecard and metal reconciliation show loss by karigar over time. See <a href="/products/manufacturing">manufacturing</a>.</p>`,
});

const ledger = post({
  slug: 'fine-weight-metal-ledger-jewellers',
  title: 'Fine-Weight Metal Ledger: Tracking Gold by Purity, Not Just Rupees | Jwero',
  description: 'Why jewellers need a metal ledger in fine grams next to the money ledger, how to convert purities, and how it catches loss and mismatches early.',
  h1: 'The fine-weight metal ledger',
  eyebrow: 'GUIDE · MANUFACTURING',
  cluster: 'Manufacturing',
  mins: 6,
  sub: 'Your books say what the gold cost. A metal ledger says where the gold is. Without it, loss, karigar balances and metal loans live in someone’s head.',
  product: ['/products/manufacturing', 'See the metal ledger in Jwero'],
  wa: 'blog-ledger',
  close: ['Gold accounted for in grams and rupees.', 'Jwero keeps a fine-weight metal ledger alongside the books, with karigar balances and metal loans on it.'],
  faqs: [
    { q: 'What is fine weight?', a: 'The weight of pure gold in a piece: gross weight × purity. 10 g of 22K (91.6%) is 9.16 g fine.' },
    { q: 'Why is a rupee ledger not enough?', a: 'Because the gold rate changes. A rupee balance cannot tell you whether a karigar owes you grams, and stock valued at different rates cannot be compared. Fine grams do not change with the rate.' },
    { q: 'Who needs a metal ledger?', a: 'Anyone who issues gold to others: manufacturers, wholesalers who give metal to karigars, and retailers with in-house workshops or metal loans.' },
  ],
  body: `
  <h2>Two ledgers, one business</h2>
  <p>The money ledger records rupees. The metal ledger records grams of fine gold: what you bought, what you issued, what came back, what you sold. They should tell the same story. When they do not, something is missing.</p>

  <h2>Converting to fine</h2>
  <p>Fine weight = gross weight × purity. 22K is 91.6%, 18K is 75%, 14K is 58.5%. Record every movement in fine grams, along with the gross weight and purity it came from.</p>

  <h2>What the ledger shows that the books do not</h2>
  <ul>
    <li><b>Karigar balances:</b> grams issued minus grams returned, per karigar.</li>
    <li><b>Metal loans:</b> gold borrowed from or lent to suppliers, owed back in grams.</li>
    <li><b>Process loss:</b> where in production the grams go.</li>
    <li><b>Stock in fine:</b> total gold on hand, whatever the mix of purities.</li>
  </ul>

  <h2>Reconcile every month</h2>
  <p>Fine gold opening + purchases + returns from karigars − issues − sales should equal fine gold closing. A gap within your loss norms is normal. A gap outside them needs finding this month, not at the year end. See <a href="/blog/karigar-wastage-norms-settlement">karigar wastage</a>.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero keeps a fine-weight metal ledger in the accounts, reconciles karigar metal issues and receipts, and records metal loans. See <a href="/products/manufacturing">manufacturing</a> and <a href="/products/billing-finance">finance</a>.</p>`,
});

const jobWork = post({
  slug: 'job-work-jewellery-gst-challan',
  title: 'Job Work in Jewellery: Issue, Receipt, Challans and GST Rules | Jwero',
  description: 'Sending gold to karigars and job-work units: delivery challans, the one-year return rule, ITC-04, job-work GST, and keeping issue and receipt in fine grams.',
  h1: 'Job work in jewellery',
  eyebrow: 'GUIDE · MANUFACTURING',
  cluster: 'Manufacturing',
  mins: 6,
  sub: 'Gold goes out on a challan and must come back, as jewellery or scrap, within the time the rules allow. Here is how issue, receipt and the paperwork fit together.',
  product: ['/products/manufacturing', 'See job work in Jwero'],
  wa: 'blog-jobwork',
  close: ['Every issue, every receipt, every challan.', 'Jwero issues and receives job work by weight and purity and flags jobs that are due back.'],
  faqs: [
    { q: 'Do I need to charge GST when sending gold to a karigar?', a: 'No. Sending your own gold for job work is not a sale. It moves on a delivery challan. The karigar’s making charge, if they are registered, is a job-work service billed to you.' },
    { q: 'How long can gold stay with a job worker?', a: 'Under the GST rules, inputs sent for job work should come back within one year (capital goods three years). If not, the gold is treated as supplied on the day it was sent.' },
    { q: 'What is ITC-04?', a: 'The return that reports goods sent to and received back from job workers. At the time of writing it is half-yearly above ₹5 crore turnover and yearly below. Confirm with your CA.' },
  ],
  body: `
  <h2>Issue on a challan</h2>
  <p>When you send gold to a karigar or job-work unit, it is still yours. It moves on a delivery challan showing the item, gross weight, purity and fine weight. No GST is charged on the gold.</p>
  ${check('CA', 'Job-work GST rules, the return period for ITC-04 and the deemed-supply timelines are the parts to confirm.')}

  <h2>Receive against the challan</h2>
  <p>What comes back is finished jewellery and scrap. Weigh both, convert to fine, and compare with what was issued. The difference is the loss, to be checked against your <a href="/blog/karigar-wastage-norms-settlement">wastage norms</a>.</p>

  <h2>The time limit</h2>
  <p>Under Section 143 of the CGST Act, inputs sent for job work should return within one year (capital goods within three). Gold not back in time is treated as supplied on the day it went out, with tax due. Track due dates per challan.</p>

  <h2>The karigar’s bill</h2>
  <p>A registered karigar bills you for making as a job-work service. An unregistered karigar does not charge GST. Either way, the making charge is your cost, separate from the gold.</p>

  <h2>Reporting</h2>
  <p>Goods sent to and received from job workers are reported in ITC-04. At the time of writing it is half-yearly if your turnover is above ₹5 crore and yearly otherwise.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero issues job work to karigars and receives it back by weight and purity, sweeps for jobs that are due, settles wastage, and reconciles karigar metal. See <a href="/products/manufacturing">manufacturing</a>.</p>`,
});

const memo = post({
  slug: 'approval-memo-stock-jewellery-wholesale',
  title: 'Approval and Memo Stock: How Wholesalers Stop Losing Pieces on Approval | Jwero',
  description: 'Goods on approval are the easiest stock to lose track of. How to issue memos, set return dates, convert to sale and reconcile what came back.',
  h1: 'Approval and memo stock',
  eyebrow: 'GUIDE · WHOLESALE',
  cluster: 'Wholesale and trade',
  mins: 5,
  sub: 'A retailer takes twenty pieces on approval, keeps four, returns twelve, and four are still somewhere. Memo stock is where wholesale margin quietly disappears.',
  product: ['/products/inventory', 'See approval memos in Jwero'],
  wa: 'blog-memo',
  close: ['Every piece on approval, accounted for.', 'Jwero issues approval memos, tracks what is out with whom, and converts kept pieces to a sale.'],
  faqs: [
    { q: 'What document should go with goods on approval?', a: 'A memo or delivery challan listing each piece with weight and value. It is not a sale until the buyer keeps the goods; then you raise an invoice.' },
    { q: 'How long should goods stay on approval?', a: 'Set a return date on every memo, usually days not weeks, and follow up the day it passes. Goods out for months are a hidden loan to the buyer.' },
    { q: 'How do I find what is missing?', a: 'Reconcile each memo: issued = returned + billed. Anything left over is what to chase.' },
  ],
  body: `
  <h2>Why memo stock goes missing</h2>
  <ul>
    <li>Pieces issued on a handwritten memo that is never closed.</li>
    <li>Partial returns written on the original slip.</li>
    <li>Kept pieces billed weeks later, at a different rate, or not at all.</li>
  </ul>

  <h2>Issue properly</h2>
  <p>List every piece with tag number, gross and net weight, purity and value. Set a return date. Give the buyer a copy and keep one. The memo travels as the document for the goods; it is not a sale.</p>

  <h2>Close every memo</h2>
  <p>Each memo ends in one of three ways for every piece: returned, billed, or chased. Issued pieces = returned + billed. Anything else is outstanding.</p>

  <h2>Bill what is kept, at the agreed rate</h2>
  <p>Agree up front whether kept pieces are billed at the rate on the issue date or the rate on the day of sale. Write it on the memo.</p>

  <h2>Review the open memos weekly</h2>
  <p>A list of everything out on approval, by buyer and by age, is the most useful report a wholesaler can read. See also <a href="/blog/e-way-bill-for-jewellery">challans and e-way bills</a>.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero issues approval memos and memo issues, records consignments and dispatch, and shows what is out with each buyer. See <a href="/products/inventory">inventory</a> and <a href="/solutions/b2b-jewellery">wholesale</a>.</p>`,
});

const stones = post({
  slug: 'loose-diamond-gemstone-inventory',
  title: 'Managing Loose Diamonds and Gemstones: Stone Records, Parcels and Certificates | Jwero',
  description: 'How diamond traders and jewellers keep loose stones under control: one record per stone or parcel, certificates, where each stone went, and memo to buyers.',
  h1: 'Managing loose diamonds and gemstones',
  eyebrow: 'GUIDE · DIAMONDS',
  cluster: 'Diamonds and stones',
  mins: 6,
  sub: 'A stone sheet in Excel works until a stone is mounted, sent on memo, or split from a parcel. Then nobody can say where it is or what it became.',
  product: ['/products/inventory', 'See stone records in Jwero'],
  wa: 'blog-stones',
  close: ['Every stone, from parcel to piece.', 'Jwero keeps a record per stone and follows it into the jewellery it was set in.'],
  faqs: [
    { q: 'Should every diamond have its own record?', a: 'Certified and larger stones, yes: shape, weight, colour, clarity, cut, certificate number and lab. Small melee is usually tracked by parcel, by weight and count.' },
    { q: 'How do I track a stone after it is set?', a: 'Link the stone record to the piece it went into. Then the jewellery carries its stones, and returns or re-sets can be traced.' },
    { q: 'What about stones sent on memo?', a: 'Issue them on a memo with each stone listed, and close the memo when they come back or are billed.' },
  ],
  body: `
  <h2>One record per stone, or per parcel</h2>
  <p>Certified stones need their own record: shape, carat weight, colour, clarity, cut, certificate number and lab. Melee and small stones are tracked as parcels, by total weight and count, with sizes.</p>

  <h2>Certificates</h2>
  <p>Keep the certificate number and lab on the stone record and a copy of the certificate attached. Buyers ask for it, and returns depend on it.</p>

  <h2>Follow the stone</h2>
  <p>A stone moves: from a parcel, onto a memo, into a setting, back for re-setting. Each move should be recorded against the stone, so you can always answer where it is and what it became.</p>

  <h2>Pricing</h2>
  <p>Price certified stones per carat by their grades; price parcels by weight. Keep cost and selling price on the record so margin is visible per stone. See the <a href="/blog/how-to-calculate-gold-jewellery-price">price guide</a> for how stones sit on a jewellery bill.</p>

  <h2>Memo to buyers</h2>
  <p>Stones on approval are easy to lose. Issue them on a <a href="/blog/approval-memo-stock-jewellery-wholesale">memo</a>, stone by stone.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero keeps a gemstone master and individual stone pieces, records where each stone came from and went (stone genealogy), and issues memos. See <a href="/products/inventory">inventory</a> and <a href="/solutions/diamond-traders">diamond traders</a>.</p>`,
});

const repairs = post({
  slug: 'jewellery-repair-job-slip-tat',
  title: 'Jewellery Repairs: Job Slips, Turnaround Times and Who Holds the Piece | Jwero',
  description: 'Run jewellery repairs without lost pieces or angry customers: a proper job slip, weights in and out, turnaround promises, ready alerts and warranty.',
  h1: 'Jewellery repairs: job slips and turnaround',
  eyebrow: 'GUIDE · SERVICE',
  cluster: 'Counter',
  mins: 5,
  sub: 'A repair is a customer’s piece in your custody. The job slip, the weights and the date you promised are what protect both of you.',
  product: ['/products/pos', 'See repairs in Jwero'],
  wa: 'blog-repairslip',
  close: ['Every repair tracked, every customer told.', 'Jwero issues the job slip, tracks the turnaround and tells you which pieces are ready and waiting.'],
  faqs: [
    { q: 'What should a repair job slip show?', a: 'Customer name and phone, a description and photo of the piece, gross weight in, the work to be done, the estimate, the promised date, and the customer’s signature.' },
    { q: 'Why weigh the piece in and out?', a: 'So nobody can later say gold went missing. Weigh in front of the customer at drop-off and at collection, and record both.' },
    { q: 'What if a customer never collects?', a: 'Remind them, in writing, more than once. What you may do with uncollected articles is governed by law; take advice before disposing of anything.' },
  ],
  body: `
  <h2>The job slip</h2>
  <p>At drop-off, record: customer name and phone, a description and a photo, gross weight, the work to be done, the estimate, and the promised date. Give the customer a copy. Most repair disputes come down to what was written at this moment.</p>

  <h2>Weigh in, weigh out</h2>
  <p>Weigh the piece in front of the customer when it comes in and when it goes out. If gold is added or removed by the work, write it on the slip.</p>

  <h2>Promise a date, and keep it</h2>
  <p>Set a turnaround per type of work: a clasp in two days, a re-polish in a week. Track how many repairs are past their date. Customers forgive a delay they are told about; not one they discover.</p>

  <h2>Tell them when it is ready</h2>
  <p>A message the day the piece is ready brings customers back, and a returning customer often buys. A list of ready pieces waiting more than a week tells you who to call.</p>

  <h2>Warranty</h2>
  <p>If you offer a warranty on repairs, write its terms on the slip, and record which repairs are under it. Our <a href="/blog/jewellery-repair-management-custody-chain">custody chain guide</a> covers keeping track of a piece while it is with you.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero records repair and service jobs with a job slip, tracks turnaround against the promised time, shows the queue of ready pieces by how long they have waited, and records warranty. See <a href="/products/pos">the counter</a>.</p>`,
});

const schemeAccounting = post({
  slug: 'gold-scheme-accounting-liability',
  title: 'Gold Scheme Accounting: Why Instalments Are a Liability, Not Sales | Jwero',
  description: 'How to account for gold savings scheme instalments: advances held as a liability until redemption, bonuses, closures, and reconciling members to the books.',
  h1: 'Gold scheme accounting',
  eyebrow: 'GUIDE · GOLD SCHEMES',
  cluster: 'Gold schemes',
  mins: 6,
  sub: 'Scheme money is the customer’s, held against a future purchase. Booking it as sales flatters this month and creates a hole on redemption day.',
  product: ['/products/gold-schemes', 'See gold schemes in Jwero'],
  wa: 'blog-schemeaccounts',
  close: ['Your scheme book and your accounts, matching.', 'Jwero accounts for scheme money as a liability and shows what you owe members at any moment.'],
  faqs: [
    { q: 'Are scheme instalments income?', a: 'No. They are advances from customers against a future purchase, and sit as a liability until the member redeems. The sale is recognised when the jewellery is bought.' },
    { q: 'How is the bonus instalment accounted for?', a: 'The bonus your shop adds at maturity is usually a discount on the sale at redemption, not a cost when each instalment arrives. Confirm the treatment with your CA.' },
    { q: 'Is GST charged on instalments?', a: 'The treatment of advances for goods under GST has changed over time. Ask your CA how instalments and the final sale should be taxed in your case.' },
  ],
  body: `
  <h2>Whose money is it?</h2>
  <p>A scheme instalment is the customer’s money, paid in advance against jewellery they will buy later. Until they redeem, you owe it to them, as jewellery or, in some cases, as a refund. That makes it a liability, not a sale.</p>
  ${check('CA', 'The accounting and GST treatment of scheme advances and bonuses, and any limits under company deposit rules, should be confirmed for your business.')}

  <h2>Why it matters</h2>
  <ul>
    <li>Booking instalments as sales makes months look better than they were.</li>
    <li>On redemption, the jewellery goes out with no money coming in, and the margin looks like a loss.</li>
    <li>You cannot tell at any moment how much you owe your members.</li>
  </ul>

  <h2>The flow</h2>
  <ol>
    <li>Instalment received: cash or bank up, scheme liability up.</li>
    <li>Maturity: the bonus is added to what the member can redeem.</li>
    <li>Redemption: the sale is recorded; the liability comes off against it.</li>
  </ol>

  <h2>Reconcile members to the books</h2>
  <p>Total of every member’s balance = scheme liability in the accounts. Check it every month. A gap means an instalment recorded in one place and not the other.</p>

  <h2>Structure matters too</h2>
  <p>Many schemes run for 11 or 12 months, partly because of how deposit rules treat advances that are not used within a year. Read <a href="/blog/are-gold-savings-schemes-legal">are gold savings schemes legal</a> and talk to your advisor about yours.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero records scheme instalments against each member, accounts for them as a liability, closes schemes into a sale, and reports what you owe members. See <a href="/products/gold-schemes">gold schemes</a>.</p>`,
});

const schemeTypes = post({
  slug: 'gold-scheme-types-11-plus-1-vs-grams',
  title: '11+1 Gold Scheme vs Gram Accumulation: Which Suits Your Shop? | Jwero',
  description: 'The two common gold savings schemes compared: fixed monthly instalments with a bonus, or buying grams at each instalment. Who each suits, and the risks.',
  h1: '11+1 schemes vs gram accumulation',
  eyebrow: 'GUIDE · GOLD SCHEMES',
  cluster: 'Gold schemes',
  mins: 5,
  sub: 'Pay eleven, get one free. Or buy a few grams every month at that day’s rate. Same goal, very different risk for you and value for the customer.',
  product: ['/products/gold-schemes', 'See gold schemes in Jwero'],
  wa: 'blog-schemetypes',
  close: ['Run either scheme, or both.', 'Jwero supports instalment and gram-accumulation plans, with a passbook on WhatsApp.'],
  faqs: [
    { q: 'What is an 11+1 gold scheme?', a: 'The customer pays a fixed amount each month for 11 months, and the shop adds a bonus, often equal to one instalment, at maturity. The total is redeemed against jewellery.' },
    { q: 'What is a gram accumulation scheme?', a: 'Each instalment buys gold at that day’s rate, and the customer accumulates grams. At maturity they redeem the grams, usually without paying making on part or all of them.' },
    { q: 'Which is better for the jeweller?', a: 'Instalment schemes are simpler and the cost of the bonus is known. Gram schemes protect the customer from rate rises, so the shop carries more of that risk.' },
  ],
  body: `
  <h2>The 11+1 instalment scheme</h2>
  <p>The customer pays, say, ₹5,000 a month for 11 months: ₹55,000. At maturity the shop adds a bonus, often ₹5,000, and the customer redeems ₹60,000 against jewellery at that day’s rate.</p>
  <ul>
    <li><b>For you:</b> simple, and the bonus is a known cost, usually recovered in the making on the piece.</li>
    <li><b>For the customer:</b> easy to understand, but if gold rises, their rupees buy less gold.</li>
  </ul>

  <h2>Gram accumulation</h2>
  <p>Each instalment buys gold at that day’s rate. ₹5,000 at ₹6,875 a gram buys 0.727 g. Over a year the customer accumulates grams, and redeems the grams, often with a making-charge benefit.</p>
  <ul>
    <li><b>For you:</b> you owe grams, not rupees, so a rate rise raises what you owe. Hedge or hold stock against it.</li>
    <li><b>For the customer:</b> protected from rate rises, and averages their buying price.</li>
  </ul>

  <h2>Which to offer</h2>
  <p>Many shops offer both: instalment schemes for customers who think in rupees, gram schemes for those who think in gold. Whatever you run, account for it as a liability (see <a href="/blog/gold-scheme-accounting-liability">scheme accounting</a>), and write the terms down.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero supports traditional instalment plans and gram-accumulation plans, with OTP enrolment, autodebit mandates, reminders, a passbook sent on WhatsApp, and closure into a sale. Old gold can also be put into a scheme. See <a href="/products/gold-schemes">gold schemes</a> and the <a href="/tools/gold-scheme-calculator">scheme calculator</a>.</p>`,
});

const transfers = post({
  slug: 'branch-stock-transfer-jewellery',
  title: 'Stock Transfers Between Jewellery Branches: Challans, GST and Control | Jwero',
  description: 'Moving stock between showrooms without losing track: transfer documents, GST on inter-state transfers, approvals, and reconciling what was sent and received.',
  h1: 'Stock transfers between branches',
  eyebrow: 'GUIDE · CHAINS',
  cluster: 'Multi-store',
  mins: 5,
  sub: 'Stock leaves one showroom and should arrive at another. In between it is nobody’s, unless every transfer is sent, received and checked piece by piece.',
  product: ['/products/multi-store', 'See transfers in Jwero'],
  wa: 'blog-transfers',
  close: ['Every transfer sent, received and matched.', 'Jwero moves stock between branches and vaults with a record at both ends.'],
  faqs: [
    { q: 'Is GST charged on transfers between branches?', a: 'Within the same state, a transfer moves on a delivery challan without GST. Between states, branches with different GSTINs are treated as separate persons, so the transfer is billed with GST. Confirm with your CA.' },
    { q: 'Who should approve a transfer?', a: 'Someone other than the person sending it, usually a manager at either end, so no single person can move stock alone.' },
    { q: 'How do I catch a missing piece?', a: 'Receive every transfer by scanning each tag at the receiving branch. Sent minus received should be zero.' },
  ],
  body: `
  <h2>Within your state</h2>
  <p>Stock moving between branches under the same GSTIN moves on a delivery challan, without GST. List every piece with tag, weight and value.</p>
  ${check('CA', 'Inter-state transfers between your own branches are taxable supplies. Confirm the valuation and paperwork for your setup.')}

  <h2>Between states</h2>
  <p>Branches in different states have different GSTINs, and GST treats them as separate persons. A transfer between them is billed with GST, and the receiving branch claims it as input credit.</p>

  <h2>Control</h2>
  <ul>
    <li>Approval by someone other than the sender.</li>
    <li>Scan each tag out, and scan it in at the other end.</li>
    <li>A list of transfers sent but not received, by age.</li>
  </ul>

  <h2>Vaults and locker moves</h2>
  <p>The same discipline applies to moves between the showroom floor and the vault at night. If it is not recorded, the morning count will not match.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero records stock transfers between branches and vaults, so every move has a sending and a receiving record. See <a href="/products/multi-store">multi-store</a> and <a href="/solutions/multi-store-chains">chains</a>.</p>`,
});

const exhibition = post({
  slug: 'jewellery-exhibition-stock-control',
  title: 'Jewellery Exhibitions: Taking Stock Out and Bringing It Back | Jwero',
  description: 'How to run a jewellery exhibition or trunk show without stock gaps: issue lists, sales at the venue, GST registration in another state, and counting everything back.',
  h1: 'Running a jewellery exhibition',
  eyebrow: 'GUIDE · CHAINS',
  cluster: 'Multi-store',
  mins: 5,
  sub: 'Hundreds of pieces leave the showroom for three days. Most sell or come back. The ones that do neither are what an exhibition really costs, if you do not count properly.',
  product: ['/products/inventory', 'See exhibitions in Jwero'],
  wa: 'blog-exhibition',
  close: ['Every exhibition piece out and back.', 'Jwero records exhibition stock and trials, so what went out is matched to what sold and what returned.'],
  faqs: [
    { q: 'Do I need GST registration to sell at an exhibition in another state?', a: 'Usually yes, as a casual taxable person, registered before the event, with an advance deposit of the estimated tax. Confirm with your CA.' },
    { q: 'What document goes with exhibition stock?', a: 'A delivery challan listing every piece, since moving stock to an exhibition is not a sale.' },
    { q: 'How do I count stock back after an exhibition?', a: 'Scan every piece back in on return. Issued = sold + returned. Investigate any difference before the next event.' },
  ],
  body: `
  <h2>Before you go</h2>
  <p>List every piece going out, with tag, weight and value, on a delivery challan. Insure the stock for transit and the venue. If the exhibition is in another state, register as a casual taxable person before the event.</p>
  ${check('CA', 'Casual taxable person registration, advance tax deposit and returns for out-of-state exhibitions.')}

  <h2>At the venue</h2>
  <p>Bill every sale on the spot, against the piece’s own tag, so the sale and the stock move together. Trials and holds should be recorded too: a piece taken to a customer’s hotel room is still yours.</p>

  <h2>Coming back</h2>
  <p>Scan every piece back in the day you return. Issued = sold + returned. Follow up any difference the same week.</p>

  <h2>Afterwards</h2>
  <p>Exhibition visitors who asked but did not buy are your best leads for the next month. Record who they were and what they looked at.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero records exhibition stock and trials, bills at the venue against tagged pieces, and shows what is still out. See <a href="/products/inventory">inventory</a>.</p>`,
});

const customOrders = post({
  slug: 'custom-jewellery-order-process',
  title: 'Custom Jewellery Orders: From Enquiry to Delivery Without Delays | Jwero',
  description: 'How to run custom and made-to-order jewellery: taking the order, advances and rate booking, sending it to the karigar, tracking due dates and delivering on time.',
  h1: 'Custom jewellery orders',
  eyebrow: 'GUIDE · ORDERS',
  cluster: 'Counter',
  mins: 5,
  sub: 'A bride’s set promised for the 14th. An advance taken, a rate booked, a karigar briefed. Custom orders fail in the gaps between those steps.',
  product: ['/products/manufacturing', 'See orders in Jwero'],
  wa: 'blog-customorders',
  close: ['Every custom order on time.', 'Jwero tracks custom orders from advance to karigar to delivery, with due dates you can see.'],
  faqs: [
    { q: 'Should I book the gold rate on a custom order?', a: 'Decide your policy and write it on the order: either the rate on the day of the advance is fixed for the gold the advance covers, or the final rate applies on delivery.' },
    { q: 'How much advance should I take?', a: 'Enough to cover your risk if the customer does not collect: many shops take a share of the estimated value, or the value of the gold.' },
    { q: 'How do I stop orders running late?', a: 'Give every order a due date at the karigar a few days before the customer’s date, and review overdue jobs daily.' },
  ],
  body: `
  <h2>Taking the order</h2>
  <p>Record the design, purity, approximate weight, stones, size, the customer’s date, and the price basis. Attach the design image or sketch. Give the customer a copy with the order number.</p>

  <h2>Advance and rate</h2>
  <p>Take an advance and record the rate policy: is the rate fixed on the day of the advance, or set on delivery? Customers argue about this more than anything else in custom orders. Write it down.</p>

  <h2>To the karigar</h2>
  <p>Issue the job with the metal by weight and purity, and a due date a few days before the customer’s. See <a href="/blog/job-work-jewellery-gst-challan">job work</a>.</p>

  <h2>Track due dates daily</h2>
  <p>One list of every open custom order, its karigar and its due date, reviewed every morning, prevents most late deliveries.</p>

  <h2>Delivery</h2>
  <p>Weigh the finished piece, price it on the basis agreed, adjust the advance, and bill. Tell the customer the day it is ready.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero records customer orders and quotations (with a link the customer can open), issues the work to karigars by weight, and sweeps for jobs that are due. See <a href="/products/manufacturing">manufacturing</a> and <a href="/solutions/bridal">bridal</a>.</p>`,
});

module.exports = [girvi, girviRegister, wastage, ledger, jobWork, memo, stones, repairs, schemeAccounting, schemeTypes, transfers, exhibition, customOrders];
