// Deeper sections for the October operations, growth and rules articles
// (2026-10-07): a worked example, a step-by-step, what to measure, and extra
// questions. Business advice is general trade practice; anything about Jwero
// uses only features confirmed by Jwero. Keyed by article slug.
module.exports = {
  'girvi-gold-loan-business-guide': {
    body: `
  <h2>A pledge, start to finish, with numbers</h2>
  <p>A customer brings a 22K chain of 18.2 grams. Tested purity 91.6%, so fine weight 16.67 grams. At a rate of ₹7,200 a gram for 24K, the metal is worth about ₹1,20,000. The shop lends up to 70% of that: ₹84,000, at 1.5% a month simple interest. Monthly interest is ₹1,260. The customer pays interest for six months (₹7,560), then repays ₹84,000 and takes the chain back. If she instead pays ₹20,000 of principal in month three, interest from month four is on ₹64,000: ₹960 a month. Every one of these figures goes on the pledge record, with the receipt she holds.</p>
  <h2>The register, line by line</h2>
  <ul>
    <li>Date, pledge number, customer name, address, ID proof, photo of the item.</li>
    <li>Item description, gross weight, purity tested and how, net or fine weight, valuation and the rate used.</li>
    <li>Loan amount, interest rate and method, due or renewal date.</li>
    <li>Every interest payment, part payment, renewal, with date and signature.</li>
    <li>Release or auction, with date, amount and who handled it.</li>
  </ul>
  <h2>Renewals and defaults, handled calmly</h2>
  <p>Remind a week before interest is due, again on the day, and by call a few days after. Renew at term with interest settled to date. For a loan nobody pays, follow your state’s notice rules exactly, keep proof of every notice, and record the auction and how the proceeds were applied. A paper trail is the only defence in a dispute.</p>
  <h2>What to measure</h2>
  <p>Interest collected on time, loans more than 30 days overdue, average loan-to-value, and how many pledges were released against how many went to notice.</p>`,
    faqs: [
      { q: 'How much should a jeweller lend against gold?', a: 'Many lend 60 to 75% of the metal value at today’s rate, lower for pieces with stones or heavy making. Set a limit and apply it to every loan.' },
      { q: 'Should interest be simple or compound?', a: 'Most small lenders quote simple monthly interest because customers understand it. Whatever you choose, state it on the receipt and apply it the same way every time.' },
      { q: 'What if the gold rate falls below the loan?', a: 'A loan-to-value limit protects you. If the rate falls, ask for part payment or extra security before renewal, as your state’s rules allow.' },
    ],
  },
  'girvi-register-software': {
    body: `
  <h2>What breaks with a notebook</h2>
  <p>Interest is worked out on a calculator at the counter, differently by whoever is on duty. Due dates are remembered, or not. A customer disputes two years of interest and the register and the calculator disagree. The accountant reconciles the girvi book with the shop’s books once a year, if at all. None of this is dishonesty; it is a notebook asked to do a ledger’s job.</p>
  <h2>What the software must do</h2>
  <ol>
    <li>Value the pledge at today’s rate from tested purity and weight, with photos.</li>
    <li>Check the loan against your loan-to-value limit.</li>
    <li>Print a receipt the customer keeps.</li>
    <li>Accrue interest on the loan’s own scheme, so the amount due today is on screen.</li>
    <li>Send reminders, collect interest, record part payments and renewals.</li>
    <li>Release with a printed document, or run the default steps to auction.</li>
    <li>Post every rupee to the shop’s books.</li>
  </ol>
  <h2>Moving the register in</h2>
  <p>Enter each open pledge with its original date, amount, rate and interest paid so far. Check the first month’s accrual against the notebook for ten loans. Then take every new pledge in the software and let the notebook close naturally as old loans are released.</p>
  <h2>How Jwero does it</h2>
  <p>Photos and valuation at today’s rate, an LTV limit on every loan, interest accrued and collected automatically, part payments, renewals, release and auctions, all posted to the ledger and on the customer’s record. See <a href="/products/girvi">girvi software</a>.</p>`,
    faqs: [
      { q: 'Can girvi and the shop’s sales be on one system?', a: 'Yes, and they should be. The same customer may hold a scheme, buy at the counter and pledge, and the books should show all three.' },
      { q: 'Does the customer need an app?', a: 'No. A printed receipt and reminders on WhatsApp are enough for most customers.' },
      { q: 'How long does it take to move a register?', a: 'A few hours for a hundred open pledges, entered by one person with the notebook open.' },
    ],
  },
  'karigar-wastage-norms-settlement': {
    body: `
  <h2>Setting a norm you can defend</h2>
  <p>Wastage differs by work: plain chains lose less than filigree; casting loses differently from handwork; a polish stage loses a measurable fraction. Set a norm per stage and per type of work, from your own last six months of jobs, not from a figure a karigar quotes. Write it into the job card before the metal is issued.</p>
  <h2>A settlement, worked through</h2>
  <p>Issued: 100.00 grams of 22K to make four bangles, norm 2% for the work. Returned: finished bangles 94.80 grams, plus dust and scrap 3.10 grams, total 97.90. Loss 2.10 grams against an allowed 2.00: 0.10 gram over, charged to the karigar at the metal rate. Labour: 4 bangles at ₹900 each, ₹3,600, less ₹720 for the excess loss, less a ₹2,000 advance recovered. Paid: ₹880 on the khata. Every figure is on the job, signed by both.</p>
  <h2>Where loss hides</h2>
  <ul>
    <li>Metal issued without weighing in front of the karigar.</li>
    <li>Scrap and dust not returned, or returned unweighed.</li>
    <li>Stage returns skipped, so the loss cannot be traced to a stage.</li>
    <li>Advances not recorded against the job.</li>
  </ul>
  <h2>How Jwero does it</h2>
  <p>Metal issued and returned in fine grams per job and per karigar, wastage checked against the norm at each stage, and a settlement that posts to the karigar’s khata and the books. See <a href="/products/manufacturing">manufacturing</a>.</p>`,
    faqs: [
      { q: 'Who bears wastage above the norm?', a: 'Usually the karigar, at the metal rate, as agreed in writing before the job. State it on the job card.' },
      { q: 'Should scrap be returned or valued?', a: 'Returned and weighed, every job. Dust and scrap are part of the metal account, not a karigar’s perk.' },
      { q: 'How often should karigars be settled?', a: 'Per job for occasional work, weekly or fortnightly for regular karigars, always against the metal account.' },
    ],
  },
  'fine-weight-metal-ledger-jewellers': {
    body: `
  <h2>Why gross weight lies</h2>
  <p>A shop holds 2,400 grams of stock by gross weight. Of that, 620 grams is stones, solder and 18K pieces. The gold position, the number the bank and the owner care about, is about 1,630 fine grams. A ledger in gross weight cannot answer “how much gold do we own?”, and so cannot say whether the shop is long or short against its purchases and customer deposits.</p>
  <h2>Keeping it in fine weight</h2>
  <ul>
    <li>Every receipt converts to fine weight at tested purity: 100 grams of 22K is 91.6 fine grams.</li>
    <li>Every issue to a karigar, sale, exchange, scheme redemption and pledge is posted in fine weight.</li>
    <li>Old gold bought is posted at tested purity, not what the customer says.</li>
    <li>Stones and making are kept out of the metal ledger entirely.</li>
  </ul>
  <h2>The month-end check</h2>
  <p>Opening fine weight plus purchases and old gold in, less sales, issues and losses, should equal the closing stocktake in fine weight. A difference of more than a few grams on a thousand is a leak to find: an unweighed return, a sale posted at gross, a karigar still holding metal.</p>
  <h2>How Jwero does it</h2>
  <p>Stock, purchases, old gold, karigar issues and sales post to a fine-weight ledger by purity, with the metal position on screen and a closure check at each manufacturing stage. See <a href="/products/inventory">inventory</a> and <a href="/products/manufacturing">manufacturing</a>.</p>`,
    faqs: [
      { q: 'What is fine weight?', a: 'The pure gold in a piece: gross weight less stones and other materials, multiplied by purity. 10 grams of 22K is 9.16 fine grams.' },
      { q: 'Do I need a separate ledger for silver?', a: 'Yes, by metal. Each metal has its own fine-weight position.' },
      { q: 'How does this help with gold loans from a bank?', a: 'Banks lend against a known metal position. A fine-weight ledger with a monthly closure is the evidence.' },
    ],
  },
  'job-work-jewellery-gst-challan': {
    body: `
  <h2>A job work cycle, with the paperwork</h2>
  <p>A retailer sends 250 grams of 22K to a manufacturer to make bangles. Out goes a delivery challan for job work, with the weight, purity and purpose, and the metal stays on the retailer’s books. The manufacturer issues it to karigars by stage, returns 243 grams of bangles and scrap, and bills only the making charges with GST at the job-work rate. The returned goods travel on a challan referencing the original. If the metal is not back within the period the law allows, it is treated as a supply, so the dates matter.</p>
  <h2>Records to keep for every job</h2>
  <ul>
    <li>Outward challan: date, weight, purity, description, purpose, the job worker’s details.</li>
    <li>The job worker’s receipt and stage records.</li>
    <li>Return challan with finished weight, scrap and loss.</li>
    <li>The job-work invoice for labour, with the right GST treatment.</li>
    <li>A register that shows metal out, metal back and metal still with each job worker.</li>
  </ul>
  <h2>Where it goes wrong</h2>
  <p>Challans without weights; metal with a karigar past the allowed period; making charges billed with the metal as if it were a sale; and no register, so nobody knows how much gold is out on job work on any day.</p>
  <h2>How Jwero does it</h2>
  <p>Job orders with issue and return in fine weight, challans generated from the job, metal still out by job worker, and the labour bill with GST, posted to the books. See <a href="/products/manufacturing">manufacturing</a>.</p>`,
    faqs: [
      { q: 'Does GST apply to the metal sent for job work?', a: 'Metal sent on a proper challan for job work is not a sale. GST applies to the job worker’s labour charge. Confirm the current rate and time limits with your CA.' },
      { q: 'What if the job worker is unregistered?', a: 'The treatment differs; your CA will tell you whether reverse charge or other rules apply to your case.' },
      { q: 'How is loss on job work recorded?', a: 'As the difference between metal out and metal back, by job, with the norm agreed in advance and the excess charged as agreed.' },
    ],
  },
  'approval-memo-stock-jewellery-wholesale': {
    body: `
  <h2>The arithmetic of memo</h2>
  <p>A wholesaler with ₹3 crore of stock keeps ₹60 lakh out on approval at any time across forty retailers. If a tenth of it is forgotten for three months, ₹6 lakh of gold sits in someone else’s showcase, unsold and uninsured by you, while the rate moves. The problem is rarely dishonesty; it is that nobody can see the whole picture.</p>
  <h2>A memo discipline that works</h2>
  <ol>
    <li>Every piece out on approval has a party, a value at the day’s rate, and a return date.</li>
    <li>The retailer signs for the pieces, by tag and weight.</li>
    <li>A reminder goes a few days before the date; a call on the day after.</li>
    <li>Sold pieces are invoiced; unsold pieces are checked back in by tag and weight.</li>
    <li>A weekly report: what is out, with whom, for how long, and at what value.</li>
  </ol>
  <h2>Insurance and risk</h2>
  <p>Check what your policy covers for stock away from your premises, and whether the retailer’s policy covers your goods. Put the responsibility in the memo terms the retailer signs.</p>
  <h2>How Jwero does it</h2>
  <p>Approval and memo issues with a party, value and return date, reminders before the date, invoicing of sold pieces and return of the rest to stock, with a report of everything out. See <a href="/products/inventory">inventory</a> and the <a href="/solutions/diamond-wholesale">wholesale page</a>.</p>`,
    faqs: [
      { q: 'How long should a memo run?', a: 'Short enough to keep the rate risk small: a few days for a retailer, longer for a trusted partner, always with a date.' },
      { q: 'Should memo pieces be priced at issue or at sale?', a: 'Record the value at issue for control; price at the agreed terms when sold. Both dates should be on the record.' },
      { q: 'Can the retailer see what they hold?', a: 'With a private catalogue link they can see what is on memo with them and request more.' },
    ],
  },
  'loose-diamond-gemstone-inventory': {
    body: `
  <h2>Parcels, stones and the count that never matches</h2>
  <p>A parcel of 50 carats arrives as one lot. Over a month it is split into stones for three orders, a few are sent on memo, one is returned. If the parcel is tracked as a single quantity, the count will not match by month end. Track the lot and the stones it becomes, each with its own weight and record.</p>
  <h2>A stone record that does its job</h2>
  <ul>
    <li>Lot number and origin; stone number within the lot.</li>
    <li>Carat weight, shape, colour, clarity, cut, measurements.</li>
    <li>Certificate number and lab, with the certificate image.</li>
    <li>Cost, selling rule (per carat), and current location: stock, memo, set in a piece, or sold.</li>
  </ul>
  <h2>Where stones go missing</h2>
  <p>Stones set into pieces without being moved out of loose stock; memo without a record; parcels weighed in but stones never weighed out. A monthly count by lot, with the scale, fixes most of it.</p>
  <h2>Selling certificate first</h2>
  <p>Customers and retailers want the certificate before the price. A catalogue link that shows the stone with its certificate and per-carat price, and tells you who opened it, shortens the sale.</p>
  <h2>How Jwero does it</h2>
  <p>Stone records with the 4Cs, certificate number and lab, parcels by carat and count, memo tracking, and private catalogue links. See <a href="/solutions/diamond-traders">loose diamond traders</a>.</p>`,
    faqs: [
      { q: 'Should every stone have its own record?', a: 'Above a size you set, yes. Small goods can stay as lots by weight and count.' },
      { q: 'How are stones priced?', a: 'Per carat by quality, with rules that reprice every channel together, and a margin rule per buyer for the trade.' },
      { q: 'How often should loose stones be counted?', a: 'Monthly by lot, and every time a stone is set into a piece or sent on memo.' },
    ],
  },
  'jewellery-repair-job-slip-tat': {
    body: `
  <h2>A promised date you can keep</h2>
  <p>A ring resize takes a karigar twenty minutes; it waits three days for the karigar to be free. The customer was told “two days”. The slip said nothing. Turnaround time is a queue problem before it is a skill problem: know how many jobs are open, with whom, and when each is due, and the promised date becomes something you can keep.</p>
  <h2>The job slip that prevents disputes</h2>
  <ul>
    <li>Tag number, customer, phone, date in, promised date.</li>
    <li>Item, condition photos, weight in, stones counted.</li>
    <li>Work requested, estimate given and approved.</li>
    <li>Who holds it now, and every handoff since.</li>
    <li>Weight out, loss noted, and the customer’s signature at delivery.</li>
  </ul>
  <h2>Running the queue</h2>
  <p>One board, every open job by status: intake, with karigar, awaiting parts, ready, overdue, unclaimed. Look at it every morning. Overdue jobs are called before the customer calls; ready jobs are messaged the same day; unclaimed jobs after thirty days are reminded.</p>
  <h2>How Jwero does it</h2>
  <p>Job cards with tag, photos and weight, a custody chain of every handoff, promised dates on a board, alerts for ready, overdue and unclaimed, and a re-hallmark flag that blocks delivery until handled. See <a href="/products/repairs-service">repair software</a>.</p>`,
    faqs: [
      { q: 'What turnaround should a jeweller promise?', a: 'The real queue plus a margin. Promising two days when the queue is four days costs more than quoting five and delivering in four.' },
      { q: 'How do I handle a weight dispute?', a: 'Weigh in front of the customer at intake and at delivery, write both on the slip, and show the loss noted on the job.' },
      { q: 'When does a repair need re-hallmarking?', a: 'When enough metal is changed. Set the rule, flag the job, and do not hand it over until it is handled.' },
    ],
  },
  'gold-scheme-accounting-liability': {
    body: `
  <h2>The books, month by month</h2>
  <p>A member pays ₹5,000 a month for 11 months. Each instalment is cash in and a liability to the member, not revenue. In month 12 she redeems against a ₹62,000 piece; the shop adds its bonus month, the liability of ₹55,000 is extinguished, the bonus is a cost, and the sale is recognised, with GST on the bill. A shop with 500 members has a liability of several lakh at any time, and the owner should know the figure.</p>
  <h2>What the ledger needs</h2>
  <ul>
    <li>A scheme liability account, by scheme, by member.</li>
    <li>Instalments posted as they are collected, including those collected automatically.</li>
    <li>Bonus accrued or recognised the way your CA advises.</li>
    <li>Redemptions that extinguish the liability and recognise the sale on the same day.</li>
    <li>Lapsed and refunded plans handled under your scheme terms.</li>
  </ul>
  <h2>Why it matters beyond the books</h2>
  <p>Scheme money is customers’ money until redeemed. Knowing the liability tells you how much gold to hold against it as the rate moves, and keeps you clear of the rules around collecting deposits. Your CA should see the liability report every month.</p>
  <h2>How Jwero does it</h2>
  <p>Instalments, bonuses and redemptions post to the ledger with a scheme liability report, and sync to Tally. See <a href="/products/gold-schemes">gold schemes</a> and <a href="/products/billing-finance">billing and accounts</a>.</p>`,
    faqs: [
      { q: 'Is a scheme instalment income?', a: 'No. It is a liability until the member redeems. Recognise the sale at redemption.' },
      { q: 'Should the shop hold gold against the liability?', a: 'Many do, to protect against the rate rising before redemption. Decide with your CA and your banker.' },
      { q: 'What about members who stop paying?', a: 'Follow your written scheme terms for lapsed plans, and keep the liability on the books until it is settled or refunded.' },
    ],
  },
  'gold-scheme-types-11-plus-1-vs-grams': {
    body: `
  <h2>The same ₹55,000, two ways</h2>
  <p><b>11+1 by amount:</b> a member pays ₹5,000 for 11 months; the shop adds one month; she redeems ₹60,000 at the rate on redemption day. If gold rose 10% during the plan, her ₹60,000 buys less gold than it would have at the start, and the shop carries no rate risk.</p>
  <p><b>Gram accumulation:</b> each ₹5,000 buys grams at that day’s rate. Over 11 months she accumulates, say, 7.9 grams. At redemption she has 7.9 grams regardless of the rate. She is protected against the rate; the shop must hold or hedge the gold.</p>
  <h2>Choosing for your shop</h2>
  <ul>
    <li><b>Cash flow and simplicity:</b> 11+1 by amount. Easy to explain, easy to account for.</li>
    <li><b>A rate-savvy customer base:</b> gram accumulation. Harder to run, stronger pitch when gold is rising.</li>
    <li><b>Both:</b> many shops run both and let the customer choose.</li>
  </ul>
  <h2>Terms to write down</h2>
  <p>Bonus rules, what happens on a missed month, early closure, redemption against making charges or the full bill, whether cash refunds are ever given, and how the rate is fixed on redemption day. Print them, and keep a copy on every member’s record.</p>
  <h2>How Jwero does it</h2>
  <p>Both scheme types, enrolment from the website, apps, WhatsApp or showroom, instalments collected automatically, redemption rules you set, and the liability on the books. See <a href="/products/gold-schemes">gold schemes</a>.</p>`,
    faqs: [
      { q: 'Which scheme type do customers prefer?', a: 'Customers who watch the rate prefer grams; most others prefer the simplicity of a fixed amount plus a bonus month. Offer both if you can run both.' },
      { q: 'Can a member switch types mid-plan?', a: 'Only if your terms allow it. Most shops keep a plan on its original terms and let the member start a new one.' },
      { q: 'Is a bonus month taxable or regulated?', a: 'Treatment varies; take advice from your CA on how the bonus is recorded and on the rules for collecting instalments.' },
    ],
  },
  'branch-stock-transfer-jewellery': {
    body: `
  <h2>A transfer, done right</h2>
  <p>Branch A has forty bridal sets ageing; Branch B’s wedding season is starting. A transfer order lists each piece by tag and weight. A challan is printed, the pieces are packed and signed out, the courier or staff member is named, and Branch B scans each tag in on receipt. Any piece missing is flagged the same day, not at stocktake. For transfers between separately registered branches, the GST treatment and documents your CA specifies apply.</p>
  <h2>Controls that stop leaks</h2>
  <ul>
    <li>No transfer without a transfer order and a challan.</li>
    <li>Scan out and scan in by tag; weights checked at both ends.</li>
    <li>In-transit stock shown as such, with the person responsible.</li>
    <li>A weekly report of transfers not received.</li>
  </ul>
  <h2>Deciding what to move</h2>
  <p>Use ageing by branch and category: what is sitting at one branch and selling at another. Move slow pieces toward the branch that sells them, before the season, not during it.</p>
  <h2>How Jwero does it</h2>
  <p>Transfer orders by tag, challans, in-transit stock, scan-in at the receiving branch, and ageing by branch to decide what moves. See <a href="/products/multi-store">multi-store</a> and <a href="/products/inventory">inventory</a>.</p>`,
    faqs: [
      { q: 'Does a branch transfer attract GST?', a: 'It depends on whether the branches are under one registration or separate ones. Your CA will tell you which documents and treatment apply.' },
      { q: 'Who is responsible for stock in transit?', a: 'Name the person on the transfer, and check your insurance for goods in transit.' },
      { q: 'How often should branches rebalance stock?', a: 'Monthly from the ageing report, and before each season.' },
    ],
  },
  'jewellery-exhibition-stock-control': {
    body: `
  <h2>Before, during and after</h2>
  <p><b>Before:</b> a stock-out list by tag and weight, insurance for goods away from the premises, the documents your state and CA require for moving stock, and a float of tags for pieces sold at the show.</p>
  <p><b>During:</b> bill every sale against the tag at today’s rate, record every enquiry with a phone number, and count the trays at close each day against the list.</p>
  <p><b>After:</b> scan every piece back in, reconcile sold plus returned against taken out, and follow up every enquiry within a week while the memory is fresh.</p>
  <h2>Where exhibitions lose money</h2>
  <ul>
    <li>Pieces taken out without a list, so a missing piece is noticed weeks later.</li>
    <li>Sales billed at a stale rate written on a board in the morning.</li>
    <li>Enquiries on visiting cards that nobody calls.</li>
    <li>Stock returned to the wrong branch, or not returned to stock at all.</li>
  </ul>
  <h2>How Jwero does it</h2>
  <p>Stock out on a list by tag, billing at the live rate from a phone or laptop, enquiries captured to the customer record, and scan-in on return with the difference shown. See <a href="/products/inventory">inventory</a> and <a href="/products/pos">POS</a>.</p>`,
    faqs: [
      { q: 'Can I bill at an exhibition without my counter?', a: 'Yes, from a laptop or phone, at today’s rate, with the piece deducted from the stock-out list.' },
      { q: 'How do I follow up exhibition enquiries?', a: 'Capture the number and the pieces she liked at the stall; a follow-up with those pieces goes out the same week.' },
      { q: 'What documents do I need to move stock to a show?', a: 'They vary by state and distance. Ask your CA for the delivery challan and e-way bill treatment that applies.' },
    ],
  },
  'custom-jewellery-order-process': {
    body: `
  <h2>From sketch to delivery, step by step</h2>
  <ol>
    <li><b>Brief:</b> the design, weight band, purity, stones, budget and date, written down with reference images.</li>
    <li><b>Quotation:</b> a numbered estimate at today’s rate with the making charge and stone cost, accepted by the customer online, with the rate terms stated.</li>
    <li><b>Advance:</b> taken against the quotation and recorded on her account.</li>
    <li><b>Design approval:</b> the CAD or sketch approved on a thread she can see, with the version that was approved.</li>
    <li><b>Manufacturing order:</b> metal issued by weight, stages tracked, QC and hallmarking.</li>
    <li><b>Delivery:</b> the final bill against the quotation, balance paid, the piece weighed in front of her.</li>
  </ol>
  <h2>The disputes, and what prevents them</h2>
  <p>“It weighs less than you said”: the quotation stated a weight band and the final bill shows the actual. “The rate was lower when I ordered”: the quotation stated how the rate is fixed. “That is not the design I approved”: the approved version is on the thread. Every dispute is a missing record.</p>
  <h2>Keeping her informed</h2>
  <p>A message at each stage, with a photo at the design and finishing stages, keeps the customer calm and the shop honest about dates.</p>
  <h2>How Jwero does it</h2>
  <p>Quotations accepted online, advances on the customer record, manufacturing orders with stages and metal by weight, and the final bill against the quotation. See <a href="/products/quotations">quotations</a> and <a href="/products/manufacturing">manufacturing</a>.</p>`,
    faqs: [
      { q: 'How much advance should I take on a custom order?', a: 'Enough to cover the metal risk and the labour, commonly a substantial share of the estimate, stated on the quotation.' },
      { q: 'How do I fix the rate on a custom order?', a: 'State it: at order, at delivery, or fixed on payment of the advance. Any of these works if it is written and agreed.' },
      { q: 'What if the customer cancels?', a: 'Your written terms decide: the advance covers work done and metal risk. Make the terms part of the quotation she accepts.' },
    ],
  },
  'birthday-anniversary-marketing-jewellers': {
    body: `
  <h2>A year of occasions for one family</h2>
  <p>The Mehtas bought a bridal set in 2024. On the record: the wedding date, the bride’s birthday from the scheme form, her mother’s birthday from a later bill, and the couple’s first anniversary. That is four occasions a year, each a reason to visit, before counting Diwali and Akshaya Tritiya. A shop with 3,000 families has more occasions in a year than it has selling days. Nobody can remember them; a record can.</p>
  <h2>The message that works</h2>
  <p>Three weeks before the anniversary: “Your first anniversary is on the 14th. Three pieces in your usual range, at today’s rate, with a visit booked for whenever suits you.” Personal, early enough to buy, with pieces chosen from what she has bought and looked at. On the day: a greeting, nothing more. Afterwards: nothing, unless she replied.</p>
  <h2>Collecting the dates without being awkward</h2>
  <ul>
    <li>On the bill: “for a gift? whose occasion?”</li>
    <li>On the scheme form: birthday and anniversary, with the spouse’s.</li>
    <li>In WhatsApp replies: when a customer mentions a date, it goes on the record.</li>
    <li>At check-in on the showroom tablet.</li>
  </ul>
  <h2>Running it without a team</h2>
  <p>A journey does the remembering: it sends the message three weeks ahead, in her language, with pieces picked from her record, with approval first if you want it. The sale, if it comes, is traced back to the occasion.</p>
  <h2>What to measure</h2>
  <p>Occasion messages that got a reply, visits booked, and bills within 30 days of the occasion, against a month without them.</p>`,
    faqs: [
      { q: 'What if the customer does not want occasion messages?', a: 'Keep consent on the record and stop on request. One honest “no more messages” option keeps the number safe.' },
      { q: 'Should I offer a discount on occasions?', a: 'Rarely. A personal reminder with the right pieces sells; a discount teaches customers to wait for one.' },
      { q: 'Which channel works best?', a: 'WhatsApp for most Indian customers, email for NRI families, a call from a person for the top hundred.' },
    ],
  },
  'selling-jewellery-regional-languages': {
    body: `
  <h2>Where language changes the sale</h2>
  <ul>
    <li><b>The first reply:</b> a customer who writes in Gujarati and gets an English reply often does not write again.</li>
    <li><b>The price explanation:</b> making charges, wastage and GST are hard enough in one’s own language.</li>
    <li><b>The scheme call:</b> a reminder in Tamil is heard; the same in English is ignored.</li>
    <li><b>The product page:</b> a daughter abroad reads English; her mother in Madurai reads Tamil.</li>
  </ul>
  <h2>A simple language policy</h2>
  <ol>
    <li>Reply in the language the customer wrote in.</li>
    <li>Keep the price breakup in numbers; translate only the words around them.</li>
    <li>Record each customer’s preferred language once, and use it for calls, messages and emails.</li>
    <li>Have a native speaker read any template before it goes to a thousand people.</li>
  </ol>
  <h2>Staff and screens</h2>
  <p>Counter staff think in Hindi, Hinglish or their state’s language. Screens, training and instructions in their language cut mistakes at the counter, and an assistant that takes instructions in Hindi keeps them off the keyboard.</p>
  <h2>How Jwero does it</h2>
  <p>AI replies and calls in your customers’ languages, a preferred language on each customer’s record, staff screens in multiple languages, and an in-app assistant that understands Hindi and Hinglish. See <a href="/ai-calling-for-jewellers">AI calling</a> and <a href="/products/whatsapp">WhatsApp</a>.</p>`,
    faqs: [
      { q: 'Which languages does Jwero support for customers?', a: 'Chat, voice and calls in your customers’ languages, including Hindi, Gujarati, Tamil, Bengali, Arabic and English.' },
      { q: 'Can one shop serve customers in three languages?', a: 'Yes. The language is per customer, so each hears from you in her own.' },
      { q: 'What about Hinglish?', a: 'Mixed Hindi and English is handled in replies, and staff can give instructions to the assistant in Hinglish.' },
    ],
  },
  'ai-calling-jewellers-scheme-reminders': {
    body: `
  <h2>An evening of reminders, in numbers</h2>
  <p>500 members have instalments due this week. With 8 calls at a time, the voice agent works through them in an evening. Say 410 answer; 300 confirm they will pay and get a payment link on WhatsApp; 60 book a visit to see new designs; 40 ask for a person and are handed over with what was said. Every call is on the member’s record with its transcript. The same work by hand takes two staff a full week, in between serving customers.</p>
  <h2>Scripts that respect the customer</h2>
  <p>State the shop and the purpose in the first sentence. Give the amount and the date. Offer the link. Ask one question. Stop when asked. Keep the whole call under a minute unless the customer wants to talk.</p>
  <h2>What to put behind a person</h2>
  <p>Anyone in difficulty, anyone disputing the balance, anyone who asks. The agent hands over with the conversation so far, and the person starts from there.</p>
  <h2>Beyond reminders</h2>
  <ul>
    <li>Ready-for-collection calls for repairs and orders.</li>
    <li>Appointment confirmations the day before.</li>
    <li>First follow-up after a WhatsApp enquiry that went quiet.</li>
    <li>Inbound rate and timing calls during the festival rush.</li>
  </ul>
  <h2>What to measure</h2>
  <p>Instalments paid within three days of the call, visits booked, handovers, and the cost per call against staff time.</p>`,
    faqs: [
      { q: 'Will customers hang up on an AI?', a: 'Fewer than you expect when the call is short, in their language, about their own account, and offers a real next step.' },
      { q: 'Can the agent take the payment on the call?', a: 'It sends a payment link on WhatsApp during the call; the member pays there.' },
      { q: 'What does it cost?', a: '₹7 a call, all inclusive, from the prepaid wallet.' },
    ],
  },
  'jewellery-showroom-footfall-conversion': {
    body: `
  <h2>The numbers most showrooms never see</h2>
  <p>A showroom counts 1,500 people through the door in a month and writes 240 bills. Conversion is 16%. The register, filled only for customers who gave a number, shows 600 visits and 240 bills: 40%. The owner thinks the floor converts well; the camera says more than a thousand people a month leave without buying, and nobody knows who they were.</p>
  <h2>Measuring it without a people counter</h2>
  <p>Your existing CCTV, with AI counting entries and exits, gives footfall by hour. Tablet check-in by phone number turns some of those visitors into records. Bills linked to visits give conversion by hour, day, branch and salesperson. Three sources, one picture.</p>
  <h2>What moves conversion</h2>
  <ul>
    <li>Nobody left waiting: an alert when a customer has stood unattended for ten minutes.</li>
    <li>Knowing her before you greet her: past visits, pieces tried, scheme balance on the check-in screen.</li>
    <li>Logging what she tried: a scan per piece, so the follow-up names it.</li>
    <li>Following up walkouts the same evening.</li>
    <li>Staffing the busy hours: the footfall chart shows them.</li>
  </ul>
  <h2>What to measure</h2>
  <p>Footfall by hour, walk-in conversion by salesperson, walkouts messaged the same day, and walkouts who returned within two weeks.</p>`,
    faqs: [
      { q: 'What is a good walk-in conversion rate for a jewellery showroom?', a: 'It varies by format and season. Measure yours by hour and salesperson, then improve the trend; comparing with another shop’s number rarely helps.' },
      { q: 'Do cameras identify customers?', a: 'No. They count people. Customers are identified only when they check in with a phone number.' },
      { q: 'How do I know a bill came from a particular visit?', a: 'Bills link to the visit automatically within hours of checkout; unlinked sales are flagged to fix.' },
    ],
  },
  'selling-gold-jewellery-online-live-rate': {
    body: `
  <h2>The stale-price problem, in rupees</h2>
  <p>A 30-gram necklace listed on Friday at ₹2,16,000. Gold rises 2% on Monday. The site still shows Friday’s price; a customer orders at ₹2,16,000 and the shop either honours a ₹4,300 loss or cancels and loses the customer. Multiply by every rate move and every product, and a brochure site with typed prices is a liability.</p>
  <h2>How live pricing works</h2>
  <ol>
    <li>Each product carries its weight, purity, stones and making-charge rule, not a price.</li>
    <li>The rate is set, or fed, once a day or more.</li>
    <li>Every page, feed and catalogue is repriced from the rule when the rate changes.</li>
    <li>The price breakup, metal, making, stones and GST, is shown on the product page.</li>
  </ol>
  <h2>On Shopify or WooCommerce</h2>
  <p>Keep the store and connect it: the catalogue and the rate push prices to it, so Shopify shows today’s price. Google Shopping and the Meta catalogue are fed from the same source, so the ad price matches the site. The remaining risk is the gap between a rate change and the sync, so keep it short.</p>
  <h2>Trust on the product page</h2>
  <p>Show the breakup, the HUID, the certificate, the weight, and the rate time. Offer a video call and a try-at-home visit. Online buyers of gold want to see the arithmetic before they pay.</p>
  <h2>How Jwero does it</h2>
  <p>A jewellery ecommerce website that reprices from the rate, with the breakup shown, synced to Shopify or WooCommerce, Google Shopping and Meta. See <a href="/products/ecommerce">ecommerce website</a>.</p>`,
    faqs: [
      { q: 'Should I show the price breakup online?', a: 'Yes. Buyers of gold compare making charges; a clear breakup wins more sales than a single number.' },
      { q: 'How do I handle the rate between order and delivery?', a: 'State it: the rate at order is fixed on payment. The checkout should say so.' },
      { q: 'Can I sell on marketplaces at the live rate?', a: 'Jwero syncs to Google Shopping, the Meta catalogue and Unicommerce. For other marketplaces, update prices from the catalogue as often as the marketplace allows.' },
    ],
  },
  'jewellery-staff-incentives-targets': {
    body: `
  <h2>A scheme that salespeople trust</h2>
  <p>Target ₹15 lakh a month for a counter salesperson. 0.5% on sales up to target, 1% on sales above it, worked out from the bills she actually made, with returns clawed back. On ₹18 lakh she earns ₹7,500 plus ₹3,000: ₹10,500, and she can see it on her phone on the 20th, with what she needs per day to reach the next slab. No argument at month end, because the bills are the evidence.</p>
  <h2>Rules that avoid the usual fights</h2>
  <ul>
    <li>Credit the salesperson on the bill, at the counter, not from memory later.</li>
    <li>Decide how walk-in sales, WhatsApp sales and referrals are credited, and write it down.</li>
    <li>Claw back on returns within a stated period.</li>
    <li>Pay on time with the salary, with the working shown.</li>
    <li>Set targets by season; a December target is not a June target.</li>
  </ul>
  <h2>Beyond revenue</h2>
  <p>Add a small incentive for the behaviours that build the business: occasion dates collected, walkouts followed up, scheme enrolments. These are on the record too, so they can be counted.</p>
  <h2>How Jwero does it</h2>
  <p>Incentives worked out from real sales or margin on your slabs, with clawback, visible to each salesperson in the staff app, and paid through payroll. See <a href="/products/hr-payroll">HR and payroll</a>.</p>`,
    faqs: [
      { q: 'Should incentives be on sales or on margin?', a: 'Margin rewards better selling but needs cost data on every piece. Start with sales if your costing is not clean; move to margin when it is.' },
      { q: 'How do I credit a sale that started on WhatsApp and closed at the counter?', a: 'Decide a rule, such as a split, and apply it from the record, which shows both the chat and the bill.' },
      { q: 'Can staff see their own targets?', a: 'Yes. In Jwero each salesperson sees her target, incentive to date and what she needs per day in the staff app.' },
    ],
  },
  'jewellery-franchise-control': {
    body: `
  <h2>What a franchisor must see</h2>
  <ul>
    <li>Every bill at every franchisee, priced under the brand’s rules.</li>
    <li>Stock by franchisee, including what was supplied on memo or consignment.</li>
    <li>Customers as the brand’s customers, on one record, whichever store served them.</li>
    <li>Scheme members and their balances across the network.</li>
    <li>Campaigns run centrally, with results by store.</li>
  </ul>
  <h2>What a franchisee must keep</h2>
  <p>Their own counter, their own staff and incentives, their own local relationships, and the freedom to serve a customer without asking head office. Control that removes this costs the brand its best operators.</p>
  <h2>Where the line goes</h2>
  <p>Prices, catalogue, scheme terms and brand messaging: central. Discounts within a band, local events, staffing: the franchisee, with exceptions granted per store. Chats to the brand number: routed to the right store, visible to both.</p>
  <h2>A rollout that holds</h2>
  <p>One store first, on the brand’s rules, for a season. Then the rest, store by store, with the same training. Head office reads one report; each store reads its own.</p>
  <h2>How Jwero does it</h2>
  <p>Central price rules and one catalogue with per-store exceptions, stock and performance by branch, chats routed by branch, and schemes that work across the network. See <a href="/products/multi-store">multi-store and franchise</a> and <a href="/solutions/franchise-networks">franchise networks</a>.</p>`,
    faqs: [
      { q: 'Can a franchisee see other stores’ data?', a: 'No. Each store sees its own; head office sees all. Permissions are per role and per branch.' },
      { q: 'Who owns the customer, the brand or the store?', a: 'Decide it in the agreement. The record can serve both: the brand sees the whole network, the store sees its own customers.' },
    ],
  },
  'silver-jewellery-business-pricing': {
    body: `
  <h2>Volume, weight and a thin margin</h2>
  <p>A silver counter sells two hundred pieces on a busy day at an average of ₹2,800. The rate per gram matters less than in gold, but the making charge and the weight on the scale decide the margin. A piece sold at a stale rate or an unweighed exchange costs more than it looks, two hundred times a day.</p>
  <h2>Pricing that keeps up</h2>
  <ol>
    <li>A rate per gram set each morning, applied to every piece by weight.</li>
    <li>Making charges by category: chains, anklets, idols, articles, each with its own rule.</li>
    <li>Lots of small items sold by weight, not tagged one by one.</li>
    <li>Old silver taken by tested purity and weight, on the same bill.</li>
  </ol>
  <h2>Where silver shops lose money</h2>
  <ul>
    <li>Billing by piece price from a list that was not updated with the rate.</li>
    <li>Lots received by count and sold by weight, so the stock never reconciles.</li>
    <li>Tarnish and returns handled off the books.</li>
    <li>No customer record, so festival buyers are strangers next year.</li>
  </ul>
  <h2>How Jwero does it</h2>
  <p>A silver rate card with weight-based billing, lots by weight, old silver exchange on the bill, and every buyer on a record for the next festival. See <a href="/solutions/silver-retail">silver retail</a> and <a href="/products/pos">POS</a>.</p>`,
    faqs: [
      { q: 'Should silver be billed by piece or by weight?', a: 'By weight at the day’s rate plus making, with lots of small items handled as lots. Piece prices go stale.' },
      { q: 'How do I handle silver articles and gift items?', a: 'As categories with their own making rule, often a fixed amount per piece on top of the metal.' },
      { q: 'Is a customer record worth it for small bills?', a: 'Yes. Festival and gifting buyers return every year if someone remembers them.' },
    ],
  },
  'lab-grown-diamond-jewellery-selling': {
    body: `
  <h2>Pricing that is not the gold rate</h2>
  <p>A lab-grown stone is priced per carat by colour, clarity and cut, and the price has been falling. The metal around it follows the gold rate. A 1-carat lab-grown solitaire ring might carry ₹60,000 of stone and ₹45,000 of 18K gold and making. Price the two parts separately, and reprice each from its own rule, or the margin disappears without anyone noticing.</p>
  <h2>Disclosure that builds trust</h2>
  <ul>
    <li>“Lab-grown” on the tag, the bill, the product page and the WhatsApp link.</li>
    <li>The certificate and lab on the stone’s record and visible to the customer.</li>
    <li>A plain explanation of the difference from natural, in the customer’s language.</li>
  </ul>
  <h2>Selling it</h2>
  <p>Lab-grown buyers are younger, buy online and on Instagram, compare prices, and want the certificate before the conversation. A fast reply with the stone, its certificate and the price, a video call to see it, and a clear returns policy do most of the work.</p>
  <h2>Stock that moves fast</h2>
  <p>Designs sell online in a week and sit in the showroom for months. Ageing by channel shows where each design sells, and the slow ones are pushed to the segment that buys them.</p>
  <h2>How Jwero does it</h2>
  <p>Per-carat pricing rules with the metal part on the gold rate, certificate-first stone records, disclosure on every channel, and ageing by branch and channel. See <a href="/solutions/lab-grown-diamond">lab-grown diamond retail</a>.</p>`,
    faqs: [
      { q: 'Should I sell lab-grown alongside natural diamonds?', a: 'Many retailers do, with clear labels and separate pricing rules. The disclosure is what matters.' },
      { q: 'How often should lab-grown prices be updated?', a: 'As often as your supplier’s prices move. A per-carat rule makes the update one change, not a thousand tags.' },
      { q: 'Do lab-grown buyers want certificates?', a: 'Yes, from a recognised lab, shown before the price. Keep it on the stone’s record and on the catalogue link.' },
    ],
  },
  'how-to-calculate-gold-jewellery-price': {
    body: `
  <h2>Three pieces, worked end to end</h2>
  <p>Using the example 24K rate of ₹7,500 a gram, so 22K at ₹6,875 and 18K at ₹5,625.</p>
  <table class="tbl"><thead><tr><th>Piece</th><th>Metal</th><th>Making</th><th>Stones</th><th>Subtotal</th><th>GST 3%</th><th>Bill</th></tr></thead><tbody>
  <tr><td>22K chain, 10 g net, 12% making</td><td>₹68,750</td><td>₹8,250</td><td>0</td><td>₹77,000</td><td>₹2,310</td><td>₹79,310</td></tr>
  <tr><td>22K bangle, 24 g net, ₹600/g making</td><td>₹1,65,000</td><td>₹14,400</td><td>0</td><td>₹1,79,400</td><td>₹5,382</td><td>₹1,84,782</td></tr>
  <tr><td>18K ring, 4.2 g net, 15% making, stones ₹18,000</td><td>₹23,625</td><td>₹3,544</td><td>₹18,000</td><td>₹45,169</td><td>₹1,355</td><td>₹46,524</td></tr>
  </tbody></table>
  <p>Gross weight is not in the table because it is not in the price: the ring weighs 4.9 grams with its stones and is billed on 4.2 grams of gold.</p>
  <h2>Why two counters quote two prices</h2>
  <ul>
    <li>One uses 91.6% and the other 91.67% for 22K.</li>
    <li>One takes the morning rate, the other has not updated since yesterday.</li>
    <li>Making is a percentage at one counter and per gram at the other for the same category.</li>
    <li>Stones are weighed out at one counter and left in the gross weight at the other.</li>
  </ul>
  <p>A rule written down once, and applied by the system rather than the salesperson, ends all four.</p>
  <h2>What the customer should see</h2>
  <p>Rate and its time, purity, gross and net weight, metal value, making, stones, GST and total, each on its own line. A customer who can check the arithmetic trusts the shop; one who cannot compares with the shop next door on a single number.</p>
  <h2>How Jwero does it</h2>
  <p>Purity rate cards, three making-charge models, stone pricing and GST, applied to every piece at the counter, on WhatsApp and on the website, from the same rule. See the <a href="/platform/pricing-engine">pricing engine</a>.</p>`,
    faqs: [
      { q: 'Is making charge calculated on gross or net weight?', a: 'On the gold, so net weight for percentage and per-gram models. State it on the bill.' },
      { q: 'Why do shops quote 22K at 91.6% and not 91.67%?', a: 'Both are used; 916 is the hallmark grade. Pick one, print it on the rate board, and bill with it.' },
      { q: 'Does the website price have to match the counter?', a: 'It should. When both read the same rate and rule, the customer sees one price everywhere.' },
    ],
  },
  'gst-on-jewellery-india': {
    body: `
  <h2>Four bills, four treatments</h2>
  <table class="tbl"><thead><tr><th>Situation</th><th>What is taxed</th><th>Rate</th></tr></thead><tbody>
  <tr><td>Finished piece sold to a customer</td><td>Metal, making and stones as one sale</td><td>3%</td></tr>
  <tr><td>Customer brings her gold, you make a piece</td><td>Your making, as job work</td><td>5% (jewellery job work, at the time of writing)</td></tr>
  <tr><td>Gold sent to a karigar on challan</td><td>Nothing on the movement; the karigar’s labour if registered</td><td>Job-work rate on labour</td></tr>
  <tr><td>Old gold taken in exchange</td><td>Confirm the treatment of the old gold and of the new sale with your CA</td><td>See your CA</td></tr>
  </tbody></table>
  <h2>Keeping the bill series clean</h2>
  <ul>
    <li>Retail bills, job-work bills and B2B invoices in series you can report separately.</li>
    <li>HSN on every line; the finished-jewellery code and the job-work service code are not the same.</li>
    <li>The customer’s GSTIN on every trade bill, checked before billing.</li>
    <li>Credit notes for returns, referencing the original bill.</li>
  </ul>
  <h2>Month end without the scramble</h2>
  <p>If every bill posts to the ledger as it is made, GSTR-1 and GSTR-3B are reports, not a reconstruction. The HSN summary comes from the lines; the job-work bills sit in their own series; the input credit on your purchases is already matched. Your CA files from the reports instead of rebuilding them.</p>
  <h2>How Jwero does it</h2>
  <p>CGST, SGST and IGST on every bill, separate series, GSTR-1, GSTR-3B and HSN reports, and the Tally bridge for the books. See <a href="/products/billing-finance">billing and accounts</a>.</p>`,
    faqs: [
      { q: 'Is GST charged on making charges?', a: 'On a piece you sell, making is part of the sale and the whole bill is at 3%. Making on the customer’s own gold is job work at its own rate.' },
      { q: 'Do I charge GST on old gold I take in exchange?', a: 'The treatment of old gold bought from an unregistered customer, and of the new sale, is worth confirming with your CA before you set the bill format.' },
      { q: 'Can I show GST included in the price?', a: 'Yes, with a setting that shows prices including GST, as long as the bill itself breaks it out.' },
    ],
  },
  'making-charges-explained': {
    body: `
  <h2>The same piece under each model, as the rate moves</h2>
  <p>A 10 gram 22K piece when 22K is ₹6,875 a gram and again when it is ₹7,500 a gram:</p>
  <table class="tbl"><thead><tr><th>Model</th><th>At ₹6,875</th><th>At ₹7,500</th><th>Moves with the rate?</th></tr></thead><tbody>
  <tr><td>12% of metal value</td><td>₹8,250</td><td>₹9,000</td><td>Yes</td></tr>
  <tr><td>₹600 per gram</td><td>₹6,000</td><td>₹6,000</td><td>No</td></tr>
  <tr><td>Flat ₹1,500</td><td>₹1,500</td><td>₹1,500</td><td>No</td></tr>
  <tr><td>8% wastage (0.8 g)</td><td>₹5,500</td><td>₹6,000</td><td>Yes</td></tr>
  </tbody></table>
  <p>Shops that quote per gram look cheaper when gold rises and dearer when it falls. Decide which model each category uses and keep it steady; customers notice when the model changes with the season.</p>
  <h2>Answering “the shop next door charges less”</h2>
  <ol>
    <li>Ask which model they quoted; a per-gram figure and a percentage are not comparable.</li>
    <li>Ask whether wastage was included or added later.</li>
    <li>Show the bill breakup and the purity you hallmark at.</li>
    <li>Explain the work: handmade, temple and bridal pieces carry more making for a reason.</li>
  </ol>
  <h2>Making charges and staff discretion</h2>
  <p>Discounts on making are the easiest leak at the counter. Set a band per category, decide who can approve beyond it, and record every exception on the bill. The month-end report should show making discounts by salesperson.</p>
  <h2>How Jwero does it</h2>
  <p>Three making-charge models by category, wastage rules, a discount band with approvals, and the breakup on every bill and website price. See the <a href="/platform/pricing-engine">pricing engine</a>.</p>`,
    faqs: [
      { q: 'What is a normal making charge?', a: 'It depends on the work: machine-made chains at a low per-gram rate, handmade and bridal pieces at a higher percentage. Compare like with like.' },
      { q: 'Should wastage be shown separately from making?', a: 'If you charge it, show it. A hidden wastage line is the most common cause of a lost repeat customer.' },
      { q: 'Can I change the making model for a festival offer?', a: 'Offer a discount within the same model instead. Switching models confuses customers and staff.' },
    ],
  },
  'old-gold-exchange-jewellers': {
    body: `
  <h2>Two customers, same bangle, different outcomes</h2>
  <p>Both bring a 12 gram bangle with 1.5 grams of stones, tested at 22K, buying rate ₹6,700. Net 10.5 grams, ₹70,350. Shop A deducts 2% for melting loss, stated before testing: ₹68,943 as credit. Shop B says nothing about a deduction, then takes 5% at the end: ₹66,833. The customer at Shop A buys a new piece and comes back next year. The customer at Shop B argues, takes her bangle, and tells her family.</p>
  <h2>The exchange voucher</h2>
  <ul>
    <li>Customer name, phone and ID; PAN or Form 60 above ₹2 lakh.</li>
    <li>Gross weight, stone weight, net weight, both read in front of her.</li>
    <li>Tested purity and the method used.</li>
    <li>Rate applied, deduction stated, credit value.</li>
    <li>Whether the metal is kept as is or sent for melting, which matters for the books.</li>
  </ul>
  <h2>Exchange against the new bill</h2>
  <p>The credit is applied on the new piece’s bill, with the balance paid by card, UPI or bank. Cash to the customer above ₹10,000 in a day can be disallowed as an expense, so buybacks of any size go by transfer.</p>
  <h2>The metal side</h2>
  <p>Old gold bought is posted to the fine-weight ledger at tested purity, and either goes to a refiner or is reissued to a karigar. Either way it must leave the ledger the same way it entered, by weight.</p>
  <h2>How Jwero does it</h2>
  <p>Old gold tested, weighed and valued on the billing screen, a voucher applied to the new bill, PAN or Form 60 captured where required, and the metal posted to the fine-weight ledger. See <a href="/products/pos">POS</a>.</p>`,
    faqs: [
      { q: 'Should I deduct for melting loss?', a: 'Many shops do, at a stated percentage. The rule is to state it before testing, not after, and to print it on the voucher.' },
      { q: 'Can I give cash for old gold?', a: 'Small amounts, within the limits. Above ₹10,000 in a day to one person, pay by bank transfer to keep the expense allowable.' },
      { q: 'What if the hallmark says 22K but the test says less?', a: 'Bill on the tested purity and show the reading. Old pieces are often repaired with lower-karat solder.' },
    ],
  },
  'cash-limit-pan-jewellery-sale': {
    body: `
  <h2>Five situations at the counter</h2>
  <table class="tbl"><thead><tr><th>Situation</th><th>What applies</th></tr></thead><tbody>
  <tr><td>₹2,50,000 bill, paid by card</td><td>PAN or Form 60 on the bill; no cash issue</td></tr>
  <tr><td>₹1,95,000 bill, paid in cash</td><td>Under ₹2 lakh in cash; still below the PAN threshold</td></tr>
  <tr><td>₹3,00,000 wedding purchase, two cash bills on the same day</td><td>Same person, same day, same occasion: the cash limit applies to the total</td></tr>
  <tr><td>₹1,20,000 of old gold bought from a customer</td><td>Pay by transfer; cash above ₹10,000 to one person in a day can be disallowed</td></tr>
  <tr><td>₹12,00,000 purchase across a week</td><td>PMLA obligations may apply; your CA will tell you what to record and report</td></tr>
  </tbody></table>
  <h2>Briefing the counter</h2>
  <ol>
    <li>The system asks for PAN or Form 60 when a bill crosses ₹2 lakh, before it can be saved.</li>
    <li>Cash received from one customer is totalled across the day and the occasion, not per bill.</li>
    <li>No bill is split to stay under a limit; it is the jeweller who pays the penalty.</li>
    <li>Buybacks go by transfer above the cash expense limit.</li>
  </ol>
  <h2>Records that protect you</h2>
  <p>PAN or Form 60 attached to the bill, the ID for old gold purchases, and a cash receipts register by customer and day. If an officer asks, the answer is a report, not a search.</p>
  <h2>How Jwero does it</h2>
  <p>PAN or Form 60 prompted on the bill above ₹2 lakh, cash by customer and day on the record, and payments by card, UPI and transfer on the same bill. See <a href="/products/pos">POS</a> and <a href="/products/billing-finance">billing</a>.</p>`,
    faqs: [
      { q: 'Does the ₹2 lakh PAN rule apply to old gold I buy?', a: 'Yes. It applies to a purchase as well as a sale above ₹2 lakh. Record PAN or Form 60 on the purchase voucher.' },
      { q: 'Can a family split a wedding purchase between members to pay cash?', a: 'The limit also applies to transactions relating to one event or occasion. Take advice before relying on splits.' },
      { q: 'What should I do if a customer insists on cash above the limit?', a: 'Decline politely and offer card, UPI or transfer. The penalty equals the amount received, and it falls on you.' },
    ],
  },
  'huid-hallmarking-rules-jewellers': {
    body: `
  <h2>A piece’s hallmark, from stock to bill</h2>
  <p>A bangle arrives from the manufacturer with a 22K916 mark and a six-digit HUID. At receiving, the HUID is typed or scanned into the stock record against the tag. At the counter, the salesperson scans the tag; the bill shows 22K, the HUID and the hallmarking charge. The customer checks the HUID in the BIS CARE app and sees the same purity and article. If the stock record said 22K and the hallmark said 18K, the sale would have stopped there.</p>
  <h2>Receiving checks</h2>
  <ul>
    <li>Every hallmarked piece has its HUID on the stock record, read from the piece.</li>
    <li>No two records share a HUID.</li>
    <li>The purity on the record matches the hallmark grade.</li>
    <li>Unhallmarked stock is marked as such and routed to a hallmarking centre before sale, unless an exemption applies and is on file.</li>
  </ul>
  <h2>Repairs and re-hallmarking</h2>
  <p>A repair that changes enough of the metal may need the piece re-hallmarked. Flag it on the job card and do not deliver until it is handled; the customer’s next BIS CARE check will show the difference.</p>
  <h2>Audit day</h2>
  <p>An inspector asks for the hallmarking register, the HUIDs in stock, and the bills showing them. If the HUID is on every record and every bill, the answer is a report. If it is on a sticker in a drawer, it is a long afternoon.</p>
  <h2>How Jwero does it</h2>
  <p>HUID and purity as structured fields on every piece, duplicate checks, the HUID printed on the bill, a re-hallmark flag on repairs, and a report of hallmarked and unhallmarked stock. See <a href="/products/catalog">catalogue</a> and <a href="/products/inventory">inventory</a>.</p>`,
    faqs: [
      { q: 'Does silver need a HUID?', a: 'The mandatory HUID applies to gold jewellery and artefacts in notified districts. Check the BIS position for silver.' },
      { q: 'What if a customer’s BIS CARE check does not match my bill?', a: 'Stop and check the piece against the record. Usually a typing error at receiving; fix the record before the sale.' },
      { q: 'Can I sell unhallmarked gold jewellery?', a: 'Only within the exemptions BIS allows, such as the turnover and weight exemptions at the time of writing. Keep the basis on file.' },
    ],
  },
  'e-way-bill-for-jewellery': {
    body: `
  <h2>Five movements, and the document for each</h2>
  <table class="tbl"><thead><tr><th>Movement</th><th>Document</th><th>E-way bill</th></tr></thead><tbody>
  <tr><td>Sale delivered to a customer in another city</td><td>Tax invoice</td><td>Not required for Chapter 71 goods, unless your state says otherwise</td></tr>
  <tr><td>Gold sent to a karigar</td><td>Delivery challan for job work</td><td>As above</td></tr>
  <tr><td>Pieces sent on approval to a retailer</td><td>Delivery challan, approval terms</td><td>As above</td></tr>
  <tr><td>Stock taken to an exhibition</td><td>Delivery challan, stock-out list</td><td>As above; check the host state’s rule</td></tr>
  <tr><td>Transfer to another branch</td><td>Challan, or invoice if separately registered</td><td>As above</td></tr>
  </tbody></table>
  <p>The exemption removes the e-way bill, not the paperwork. Every movement still travels with a document that says what, how much, to whom and why.</p>
  <h2>A movement register</h2>
  <p>One list of everything out of the shop: approvals, job work, exhibitions, transfers, with weights, dates and the document number. A weekly look at what has not come back catches most losses.</p>
  <h2>Insurance and transit</h2>
  <p>Check what your policy covers for goods in transit and on another’s premises, and who carries the risk on approval goods. Write it into the challan terms.</p>
  <h2>How Jwero does it</h2>
  <p>Challans generated from the job, memo or transfer, a register of everything out with return dates, and scan-in on return. See <a href="/products/inventory">inventory</a>.</p>`,
    faqs: [
      { q: 'Do I need an e-way bill to send gold to a karigar in another state?', a: 'Chapter 71 goods are on the exempt list under the central rules; the delivery challan is still required. Confirm your state’s rule with your CA.' },
      { q: 'What should a delivery challan for jewellery show?', a: 'Date, the two parties, each item with weight and purity, the purpose, and a reference for the return.' },
      { q: 'Does the Kerala rule apply to me?', a: 'Only to movement within Kerala, above the value the state has set. Other states may notify their own rules; check before you rely on the exemption.' },
    ],
  },
  'e-invoicing-for-jewellers': {
    body: `
  <h2>A wholesaler’s invoice, step by step</h2>
  <ol>
    <li>The retailer’s GSTIN is on their record, checked when it was added.</li>
    <li>The bill is raised in the billing software with HSN, weights and the job-work or sale treatment.</li>
    <li>The bill is reported to the Invoice Registration Portal; the IRN and QR code come back and print on the invoice.</li>
    <li>The invoice goes to the retailer, who claims input credit against it.</li>
    <li>The details flow into GSTR-1 at month end.</li>
  </ol>
  <h2>The 30-day trap for approval goods</h2>
  <p>Pieces sent on approval in March and billed in May must be reported within the window from the bill date, not the approval date. The risk is a bill raised late and backdated; keep bill dates honest and report within the window.</p>
  <h2>Keeping B2B and retail apart</h2>
  <ul>
    <li>Separate bill series for trade customers and walk-in customers.</li>
    <li>The GSTIN check at the time the customer is added, not at billing.</li>
    <li>Credit notes to trade customers reported like invoices.</li>
  </ul>
  <h2>Where the e-invoice is generated</h2>
  <p>Many jewellers generate the e-invoice in Tally, where the accountant already works. The billing system should send the bill to Tally complete, so the IRN is generated from the same figures the customer was billed.</p>
  <h2>How Jwero does it</h2>
  <p>B2B bills with GSTIN and HSN in their own series, synced to Tally through the bridge where the e-invoice is generated, and GSTR-1, GSTR-3B and HSN reports. See <a href="/products/billing-finance">billing and accounts</a>.</p>`,
    faqs: [
      { q: 'Do retail bills need an e-invoice?', a: 'No. E-invoicing applies to B2B invoices for businesses above the turnover threshold. Retail bills are reported in GSTR-1 as before.' },
      { q: 'What if my turnover crosses ₹5 crore this year?', a: 'The obligation starts from the next financial year once the threshold is crossed in any year. Confirm the start date with your CA.' },
      { q: 'Can I e-invoice from my billing software directly?', a: 'Some systems do; many jewellers generate it in Tally from synced bills. Either way the figures must match the bill the customer holds.' },
    ],
  },
};
