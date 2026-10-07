// Tier 3 articles: growth topics by kind of jewellery business. Same rules as
// blog-rules.js and blog-ops.js: plain advice, worked examples, what to confirm,
// and only the parts of Jwero that pim-app ships (checked 2026-10-06).
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
const check = (who, what) => `<p class="post-note"><b>Check with your ${who}.</b> ${what} Rules here are as we understand them in October 2026.</p>`;
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

const occasions = post({
  slug: 'birthday-anniversary-marketing-jewellers',
  title: 'Birthday and Anniversary Marketing for Jewellers, Done Automatically | Jwero',
  description: 'Occasions are the best reason a customer has to buy jewellery. How to collect dates, plan the message, reach the whole family, and run it without a team.',
  h1: 'Birthday and anniversary marketing',
  eyebrow: 'GUIDE · CUSTOMERS',
  cluster: 'Customers',
  mins: 5,
  sub: 'Every customer has dates that call for jewellery. Most shops collect them on the bill and never use them. Here is how to turn them into visits, every month, without anyone remembering.',
  product: ['/products/journeys', 'See occasion journeys in Jwero'],
  wa: 'blog-occasions',
  close: ['Every occasion remembered.', 'Jwero sends the right message before each birthday and anniversary, and your team approves it.'],
  faqs: [
    { q: 'When should an occasion message go out?', a: 'Early enough to buy: two to three weeks before an anniversary, about ten days before a birthday. A message on the day is a greeting, not a reason to visit.' },
    { q: 'How do I collect occasion dates?', a: 'At billing, on the scheme form, and when a customer replies on WhatsApp. Ask for the spouse’s and children’s dates too: a family is several occasions a year.' },
    { q: 'Will customers find it intrusive?', a: 'Not if they agreed to hear from you, the message is personal, and it comes a few times a year, not every week.' },
  ],
  body: `
  <h2>Why occasions work</h2>
  <p>A birthday or anniversary is the most common reason to buy jewellery that is not a wedding. The customer already plans to spend; the only question is where. The shop that reminds them early, by name, usually wins.</p>

  <h2>Collect dates as a habit</h2>
  <ul>
    <li>At billing: birthday and anniversary on every customer record.</li>
    <li>On scheme enrolment: the reason they are saving, and when.</li>
    <li>From the family: the spouse’s birthday, children’s birthdays. One household can mean five or six occasions a year.</li>
  </ul>

  <h2>Plan the timing</h2>
  <ul>
    <li><b>Three weeks before an anniversary:</b> a suggestion, with pieces in their range.</li>
    <li><b>Ten days before a birthday:</b> a reminder to the person who buys, not only the person celebrating.</li>
    <li><b>On the day:</b> a greeting, nothing to sell.</li>
  </ul>

  <h2>Make it personal</h2>
  <p>Use their name, what they bought last time, and the price range they usually buy in. “Your anniversary is on the 14th. Last year you chose earrings; here are three new pendant sets in the same style” beats any festive broadcast.</p>

  <h2>Ask before you send</h2>
  <p>Only message customers who agreed to hear from you, and make it easy to stop. See <a href="/blog/whatsapp-for-jewellers-guide">WhatsApp for jewellers</a>.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero records birthdays and anniversaries, groups customers into households, and runs occasion journeys that draft the message before each date for your team to approve. Loyalty points can mark anniversaries too. See <a href="/products/journeys">journeys</a> and <a href="/products/crm">CRM</a>.</p>`,
});

const regional = post({
  slug: 'selling-jewellery-regional-languages',
  title: 'Selling Jewellery in Hindi and Regional Languages: Counter, WhatsApp and Calls | Jwero',
  description: 'Most jewellery customers think and search in their own language. How to serve them at the counter, on WhatsApp and on calls, and why it lifts conversion outside metros.',
  h1: 'Selling in Hindi and regional languages',
  eyebrow: 'GUIDE · CUSTOMERS',
  cluster: 'Customers',
  mins: 5,
  sub: '“Jhumka”, “mangalsutra”, “kada”. Customers ask for jewellery in their own words. A shop that understands them, in the showroom and on the phone, sells more.',
  product: ['/products/whatsapp', 'See WhatsApp in Jwero'],
  wa: 'blog-regional',
  close: ['Your customers’ language, everywhere.', 'Jwero finds products by local names at the counter and supports calls in Indian languages.'],
  faqs: [
    { q: 'Should my WhatsApp replies be in the customer’s language?', a: 'Reply in the language the customer writes in. A customer who writes in Hindi or Tamil and gets a reply in English feels like a ticket number.' },
    { q: 'How do I name products for regional search?', a: 'Keep the local names as well as the English ones: jhumka and earring, kada and bangle, haar and necklace. Customers and staff search with both.' },
    { q: 'Do regional calls work for jewellery?', a: 'Yes, especially for scheme reminders and follow-ups in smaller towns, where customers are more comfortable speaking than typing.' },
  ],
  body: `
  <h2>Customers ask in their own words</h2>
  <p>Outside the big metros, and often inside them, customers ask for a <i>jhumka</i>, a <i>kada</i>, a <i>haar</i> or a <i>nath</i>. Staff understand; software often does not. Every time a salesperson has to translate a request into a product code, the customer waits.</p>

  <h2>At the counter</h2>
  <p>Keep local names on each product along with the English name, so a search for “jhumka” finds the earrings. New staff then sell from day one.</p>

  <h2>On WhatsApp</h2>
  <p>Reply in the language the customer used. Keep your common replies (rates, timings, scheme details) ready in the two or three languages your customers use most.</p>

  <h2>On calls</h2>
  <p>Many customers would rather speak than type, especially older customers and those in smaller towns. Scheme reminders and follow-up calls in their language get answered more often.</p>

  <h2>Why it matters for growth</h2>
  <p>As jewellers grow beyond their first city, the second showroom is often in a different language area. A system that works in one language holds that growth back.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero’s counter search finds products by vernacular names, and its calling works with Indian-language speech recognition and voice. See <a href="/products/pos">the counter</a> and <a href="/products/whatsapp">WhatsApp API for jewellers</a>.</p>`,
});

const aiCalls = post({
  slug: 'ai-calling-jewellers-scheme-reminders',
  title: 'AI Phone Calls for Jewellers: Scheme Reminders, Follow-Ups and Missed Calls | Jwero',
  description: 'Where AI calling helps a jewellery business: scheme instalment reminders, enquiry follow-ups and missed calls, with a person approving what matters, and the rules to respect.',
  h1: 'AI phone calls for jewellers',
  eyebrow: 'GUIDE · AI',
  cluster: 'AI',
  mins: 5,
  sub: 'Hundreds of scheme reminders a month, follow-ups after every enquiry, calls missed in the rush. The routine calls an AI can make, and the ones a person should.',
  product: ['/ai-calling-for-jewellers', 'See AI calling in Jwero'],
  wa: 'blog-aicalls',
  close: ['The routine calls, made on time.', 'Jwero’s voice agent handles reminders and follow-ups in Indian languages, under the rules you set.'],
  faqs: [
    { q: 'Which calls should an AI make?', a: 'Routine, predictable ones: scheme instalment reminders, ready-for-collection calls, appointment confirmations and first follow-ups after an enquiry.' },
    { q: 'Which calls should a person make?', a: 'Anything involving a complaint, a large purchase, a negotiation or a customer who asks for a person. The AI should hand over, not hold on.' },
    { q: 'Are there rules for automated calls?', a: 'Yes. Promotional calls in India are regulated by TRAI, and customers must be able to opt out. Service calls to existing customers are treated differently. Confirm your setup before calling at scale.' },
  ],
  body: `
  <h2>The calls nobody has time for</h2>
  <p>A shop with 500 scheme members makes or misses 500 reminder calls a month. Add follow-ups on every enquiry and calls back for missed calls in the evening rush, and it is a full-time job nobody is doing.</p>
  ${check('advisor', 'TRAI rules on commercial communication, registration for promotional calls, and consent records.')}

  <h2>Where AI calling fits</h2>
  <ul>
    <li><b>Scheme reminders</b> a few days before the instalment is due.</li>
    <li><b>Ready for collection</b> for repairs and custom orders.</li>
    <li><b>Appointment confirmations</b> the day before.</li>
    <li><b>First follow-up</b> after an enquiry, to book a visit.</li>
  </ul>

  <h2>Where a person takes over</h2>
  <p>Complaints, large purchases, negotiation, and any customer who asks for a person. A good setup hands the call, with what was said, to the right salesperson.</p>

  <h2>In the customer’s language</h2>
  <p>Calls work best in the language the customer speaks at home. See <a href="/blog/selling-jewellery-regional-languages">selling in regional languages</a>.</p>

  <h2>Measure it</h2>
  <p>Track instalments collected on time, visits booked, and calls handed to staff. If on-time instalments rise, the calls are paying for themselves.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero’s voice agent places and answers calls through a telephony provider, with speech recognition and voice in Indian languages, and records what was said on the customer’s record. See <a href="/ai-calling-for-jewellers">AI calling</a> and <a href="/products/gold-schemes">gold schemes</a>.</p>`,
});

const footfall = post({
  slug: 'jewellery-showroom-footfall-conversion',
  title: 'Counting Showroom Footfall and Conversion for Jewellers | Jwero',
  description: 'How many people walked in, and how many bought? How to count footfall, measure walk-in conversion by counter and hour, and act on it, with privacy in mind.',
  h1: 'Showroom footfall and conversion',
  eyebrow: 'GUIDE · CHAINS',
  cluster: 'Retail operations',
  mins: 5,
  sub: 'Sales tells you who bought. It says nothing about the thirty people who walked in and left. Footfall is the other half of the number.',
  product: ['/jewellery-showroom-footfall-counting', 'See footfall counting in Jwero'],
  wa: 'blog-footfall',
  close: ['Know who walked in, not just who bought.', 'Jwero counts showroom footfall from cameras and sets it against sales, by hour and branch.'],
  faqs: [
    { q: 'What is a good walk-in conversion rate for a jewellery shop?', a: 'It varies by city, season and price range, so compare yourself with yourself: by branch, by day and by hour. A rise after a change tells you it worked.' },
    { q: 'How is footfall counted?', a: 'Usually with cameras at the entrance that count people coming in. Staff counting by hand misses people in the rush.' },
    { q: 'Do I need to tell customers about cameras?', a: 'Yes. Display clear notices, keep footage only as long as needed, and follow India’s data protection law. Take advice on your setup.' },
  ],
  body: `
  <h2>The number you are missing</h2>
  <p>If 200 people walk in on a Saturday and 20 buy, conversion is 10%. If you only see the 20 bills, you cannot tell whether Saturday was busy and badly served, or quiet and well served.</p>
  ${check('advisor', 'Camera notices, data retention and India’s Digital Personal Data Protection Act.')}

  <h2>What to measure</h2>
  <ul>
    <li><b>Footfall</b> by hour and by day.</li>
    <li><b>Conversion</b> = bills ÷ footfall, by branch and hour.</li>
    <li><b>Average bill</b>, to see whether busy hours rush customers into smaller purchases.</li>
  </ul>

  <h2>What it changes</h2>
  <ul>
    <li><b>Staffing:</b> put your best salespeople on the hours with high footfall and low conversion.</li>
    <li><b>Marketing:</b> see whether a campaign brought people in, not only sales.</li>
    <li><b>Branches:</b> compare like for like, not just total sales.</li>
  </ul>

  <h2>Do not lose the walk-outs</h2>
  <p>The customer who leaves without buying is still a lead. Capture a number at the counter and follow up. See <a href="/how-to-track-jewellery-walk-ins-without-relying-on-sales-staff">tracking walk-ins</a>.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero connects showroom cameras to count footfall and follow the customer’s path in the showroom, and sets it against sales. See <a href="/jewellery-showroom-footfall-counting">footfall counting</a>.</p>`,
});

const onlineRate = post({
  slug: 'selling-gold-jewellery-online-live-rate',
  title: 'Selling Gold Jewellery Online at the Live Rate: Shopify, WooCommerce and Marketplaces | Jwero',
  description: 'Online gold prices go stale every time the rate moves. How to price by weight and purity online, keep Shopify or WooCommerce in step with the counter, and avoid selling at yesterday’s rate.',
  h1: 'Selling gold jewellery online at the live rate',
  eyebrow: 'GUIDE · ONLINE',
  cluster: 'Online',
  mins: 6,
  sub: 'A fixed price on a gold piece is wrong by the next morning. Online, that means selling below cost on a rising day and losing the sale on a falling one.',
  product: ['/products/ecommerce', 'See the website in Jwero'],
  wa: 'blog-onlinerate',
  close: ['The same price online and at the counter.', 'Jwero prices every piece from today’s rate and keeps your store in step when it moves.'],
  faqs: [
    { q: 'Can Shopify price jewellery by gold rate?', a: 'Not on its own; Shopify stores a fixed price. You need a tool that recalculates prices from weight, purity and the rate and updates the store when the rate changes.' },
    { q: 'How often should online prices update?', a: 'Every time you change your rate, usually once or twice a day. Updating less often means the website and the counter disagree.' },
    { q: 'What about marketplaces?', a: 'Marketplaces need the same discipline: prices that follow the rate, and stock that matches the shop, so a piece is not sold twice.' },
  ],
  body: `
  <h2>The problem with fixed prices</h2>
  <p>A 10 gram 22K chain priced when gold was ₹6,875 a gram is ₹1,000 or more out within days if the rate moves. On a rising day you sell below what you should; on a falling day the customer finds it cheaper elsewhere.</p>

  <h2>Price online the way you price at the counter</h2>
  <p>Store each product’s net weight, purity, making and stones, and calculate the price from today’s rate, exactly as on the bill. See the <a href="/blog/how-to-calculate-gold-jewellery-price">price formula and calculator</a>.</p>

  <h2>Keep the store in step</h2>
  <p>When the rate changes, every product price should be recalculated and pushed to the store. Doing it by hand for hundreds of products is how stale prices happen.</p>

  <h2>One stock</h2>
  <p>A piece shown online is also in the showroom. Sell it in one place and it must disappear from the other, or it will be sold twice.</p>

  <h2>Product details buyers need</h2>
  <p>Weight, purity, hallmark, stone details and a price breakdown. Online buyers cannot hold the piece; detail is what builds trust.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero prices products from rate, purity, weight and making, recalculates on a schedule when rates change, and syncs with Shopify and WooCommerce, mapping metal and stone details into the store. It also runs its own website. See <a href="/products/ecommerce">website</a> and <a href="/compare/jwero-vs-shopify">Jwero vs Shopify</a>.</p>`,
});

const incentives = post({
  slug: 'jewellery-staff-incentives-targets',
  title: 'Jewellery Staff Incentives: Setting Targets Salespeople Trust | Jwero',
  description: 'How to design sales incentives for jewellery staff: what to reward, gold vs diamond targets, team vs individual, and paying on numbers everyone can see.',
  h1: 'Staff incentives and targets',
  eyebrow: 'GUIDE · TEAM',
  cluster: 'Team',
  mins: 5,
  sub: 'Incentives work when staff believe the number. They backfire when the calculation is a spreadsheet only the owner understands.',
  product: ['/jewellery-staff-management-software', 'See incentives in Jwero'],
  wa: 'blog-incentives',
  close: ['Targets your team can see every day.', 'Jwero tracks sales by salesperson against targets and works out incentives from the same numbers.'],
  faqs: [
    { q: 'Should incentives be on sales value or margin?', a: 'Gold sales value rises and falls with the rate, so many shops reward on making charges, diamond and studded sales, or weight sold, which reflect effort rather than the market.' },
    { q: 'Individual or team incentives?', a: 'A mix works best: an individual share for what each person sells, and a team share so nobody fights over walk-ins.' },
    { q: 'How often should incentives be paid?', a: 'Monthly, with a daily view of progress. A target seen only at month end does not change behaviour.' },
  ],
  body: `
  <h2>Reward what you want more of</h2>
  <ul>
    <li><b>Making charges or margin</b>, not gold value, which moves with the rate.</li>
    <li><b>Diamond and studded sales</b>, where skill makes the difference.</li>
    <li><b>Scheme enrolments</b> and <b>repeat customers</b>, which build next year.</li>
  </ul>

  <h2>Individual and team</h2>
  <p>Pure individual targets make staff fight over the customer at the door. A team share for the showroom’s total, plus an individual share, keeps both effort and cooperation.</p>

  <h2>Credit the right person</h2>
  <p>Record the salesperson on every bill, and decide in advance how shared sales split. Disputes about who sold what kill more incentive schemes than the amounts.</p>

  <h2>Show the number daily</h2>
  <p>Each salesperson should see where they stand today, not discover it on payday.</p>

  <h2>Keep it simple</h2>
  <p>If a salesperson cannot work out their own incentive, it will not motivate them. Two or three measures, written down, is enough. See also <a href="/jewellery-sales-staff-management">sales staff management</a>.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero records the salesperson on each bill, tracks targets and scorecards, and works out incentives in payroll from the same numbers. See <a href="/jewellery-staff-management-software">staff management</a>.</p>`,
});

const franchise = post({
  slug: 'jewellery-franchise-control',
  title: 'Running a Jewellery Franchise: What the Franchisor Should Control | Jwero',
  description: 'For jewellery franchise networks: what to keep central (brand, pricing, catalogue, schemes), what to leave to partners, and the reports a franchisor needs.',
  h1: 'Running a jewellery franchise',
  eyebrow: 'GUIDE · FRANCHISE',
  cluster: 'Franchise',
  mins: 5,
  sub: 'A franchise network sells one brand through many owners. Get the split of control wrong and you get either inconsistent stores or unhappy partners.',
  product: ['/solutions/franchise-networks', 'See Jwero for franchise networks'],
  wa: 'blog-franchise',
  close: ['One brand, many owners, one picture.', 'Jwero runs central pricing and catalogue with each partner’s own store on the same system.'],
  faqs: [
    { q: 'What should a franchisor control centrally?', a: 'Brand, catalogue, pricing rules, scheme terms and customer experience standards. These are what customers expect to be the same in every store.' },
    { q: 'What should franchise partners control?', a: 'Their own staff, local marketing within brand rules, and day-to-day operations of their store.' },
    { q: 'What reports does a franchisor need?', a: 'Sales, stock and ageing by store, scheme collections, and customer complaints, ideally from the same system rather than monthly spreadsheets.' },
  ],
  body: `
  <h2>Keep central</h2>
  <ul>
    <li><b>Catalogue and pricing rules:</b> the same piece should not cost different amounts in two stores of the same brand.</li>
    <li><b>Scheme terms:</b> a customer who enrols in one store should be able to redeem as promised.</li>
    <li><b>Brand and customer standards.</b></li>
  </ul>

  <h2>Leave to the partner</h2>
  <ul>
    <li>Hiring and managing their team.</li>
    <li>Local events and marketing, within brand rules.</li>
    <li>Day-to-day running of the store.</li>
  </ul>

  <h2>Exceptions with approval</h2>
  <p>Partners will want local price exceptions, discounts and special orders. Allow them through an approval, so the exception is visible rather than hidden.</p>

  <h2>The franchisor’s view</h2>
  <p>Sales, stock, ageing and scheme collections by store, from the same system the stores use. Monthly spreadsheets sent in by partners arrive late and never quite match.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero runs multiple stores and brands as one organisation, with central price rules, approvals for exceptions, and reports by store. It has a franchise area for partner stores; for specific franchise needs such as royalty calculation, ask us what is available today. See <a href="/solutions/franchise-networks">franchise networks</a>.</p>`,
});

const silver = post({
  slug: 'silver-jewellery-business-pricing',
  title: 'Silver Jewellery Business: Pricing, Making, Wastage and Margins | Jwero',
  description: 'How silver jewellery is priced in India: rate per gram or kg, purity, making per gram or piece, touch and wastage, GST, and where silver margins are made.',
  h1: 'The silver jewellery business',
  eyebrow: 'GUIDE · SILVER',
  cluster: 'Pricing',
  mins: 5,
  sub: 'Silver moves fast, sells by the piece as often as by weight, and has thinner metal value, so making and design carry the margin.',
  product: ['/solutions/silver-retail', 'See Jwero for silver retail'],
  wa: 'blog-silver',
  close: ['Silver priced right, piece by piece.', 'Jwero prices silver from the rate, purity and weight, or as a fixed price per piece, and keeps the catalogue in step.'],
  faqs: [
    { q: 'How is silver jewellery priced?', a: 'Like gold: rate per gram × purity × net weight, plus making, plus 3% GST. Many light silver items are instead sold at a fixed price per piece.' },
    { q: 'What purity is silver jewellery?', a: 'Sterling silver is 92.5%. Other common purities are used for traditional and heavier silver. State the purity on the bill.' },
    { q: 'Is silver hallmarking mandatory?', a: 'At the time of writing, silver hallmarking is voluntary in India. Check the current position with BIS.' },
  ],
  body: `
  <h2>The formula</h2>
  <p><b>Price = silver rate per gram × purity × net weight + making + GST at 3%</b></p>
  <p>Silver rates are often quoted per kilogram; divide by 1,000 for the per-gram rate. Example: ₹90,000 a kg is ₹90 a gram. A 50 g sterling (92.5%) anklet pair: 50 × ₹90 × 0.925 = ₹4,163 metal.</p>
  ${check('advisor', 'Silver hallmarking status and purity grades with BIS.')}

  <h2>Making carries the margin</h2>
  <p>Because the metal value is low, making is often the larger part of the price: per gram for heavier pieces, per piece for light items, or a percentage for designer work. Some shops charge “touch” and wastage instead, expressed in purity or weight.</p>

  <h2>Fixed prices for light pieces</h2>
  <p>Toe rings, light earrings and gift items sell better at a round fixed price. Review those prices when the rate moves a lot, or the margin quietly disappears.</p>

  <h2>Stock moves fast</h2>
  <p>Silver ranges are wide and pieces are small. Tagging each piece and watching what does not move is what keeps silver profitable. See <a href="/blog/dead-stock-jewellery-business-guide">dead stock</a>.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero prices silver the same way as gold, from rate, purity, weight and making, or at a fixed price per piece, with tags and stock ageing. See <a href="/solutions/silver-retail">silver retail</a>.</p>`,
});

const labGrown = post({
  slug: 'lab-grown-diamond-jewellery-selling',
  title: 'Lab-Grown Diamonds: Pricing, Disclosure and Selling Them Next to Natural | Jwero',
  description: 'How jewellers can sell lab-grown diamonds honestly: clear disclosure on tags and bills, certificates, pricing per carat, and keeping natural and lab-grown stock apart.',
  h1: 'Selling lab-grown diamonds',
  eyebrow: 'GUIDE · DIAMONDS',
  cluster: 'Diamonds and stones',
  mins: 5,
  sub: 'Lab-grown diamonds open a price point many customers could not reach. They also need clear disclosure, separate stock and pricing that holds up when prices keep falling.',
  product: ['/solutions/lab-grown-diamond', 'See Jwero for lab-grown jewellers'],
  wa: 'blog-labgrown',
  close: ['Natural and lab-grown, never mixed up.', 'Jwero records each stone with its type and certificate, so tags and bills say exactly what it is.'],
  faqs: [
    { q: 'Do I have to tell customers a diamond is lab-grown?', a: 'Yes. Describe it clearly as laboratory-grown on the tag, the bill and the certificate. Calling it just “diamond” is misleading and risks consumer complaints.' },
    { q: 'Are lab-grown diamonds certified?', a: 'Yes, by major gemological labs, with reports that state the stone is laboratory-grown. Keep the certificate number on the stone record.' },
    { q: 'How should lab-grown diamonds be priced?', a: 'Per carat by grade, like natural, but expect wholesale prices to keep changing. Review prices more often than for natural stones.' },
  ],
  body: `
  <h2>Disclose clearly, every time</h2>
  <p>Say “laboratory-grown diamond” on the tag, the display, the bill and the certificate. Customers who choose lab-grown knowingly are happy customers; customers who find out later are complaints.</p>
  ${check('advisor', 'Disclosure wording, consumer protection rules and the GST rate on loose lab-grown stones.')}

  <h2>Keep the stock apart</h2>
  <p>Natural and lab-grown stones look the same to the eye. Keep them as different stone types in your records, in different parcels, and never on the same memo without labels.</p>

  <h2>Certificates</h2>
  <p>Record the lab and certificate number on each certified stone. Buyers increasingly check.</p>

  <h2>Pricing</h2>
  <p>Price per carat by grade, as with natural. Lab-grown prices have fallen fast; review them often, and be careful with stock bought at older prices. See <a href="/blog/loose-diamond-gemstone-inventory">managing loose stones</a>.</p>

  <h2>Selling next to natural</h2>
  <p>Many customers compare. Show the two side by side with clear labels and let the customer choose: size and design with lab-grown, rarity and long-term value with natural.</p>

  <h2>How Jwero does it</h2>
  <p>Jwero keeps a stone master and individual stone records with certificate details, follows each stone into the piece it is set in, and prints what the record says on tags and bills. See <a href="/solutions/lab-grown-diamond">lab-grown diamond jewellers</a>.</p>`,
});

module.exports = [occasions, regional, aiCalls, footfall, onlineRate, incentives, franchise, silver, labGrown];
