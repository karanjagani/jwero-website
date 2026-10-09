// Search landing pages: the phrases a jeweller types that had no page of their
// own. A city hub and one page per trade city, three need pages (accounting,
// barcode and tagging, cloud and mobile) and a Hindi page. Every product claim
// here restates one made on a product page; city pages claim no local office
// and no local customers.
const L = require('../lib');

const PRICE = `<div class="home-price">
    <div>
      <p class="eyebrow">PRICE</p>
      <h2>Every module. ₹18,000 a month. First month ₹3,600.</h2>
      <p>One plan, billed monthly. No per-module price and no per-seat price. Your first month is ₹3,600 instead of ₹18,000.</p>
    </div>
    <div class="cta-row">
      <a class="btn btn-primary" href="${L.TRIAL_URL}seo" rel="noopener" data-trial>Start for ₹3,600</a>
      <a class="btn btn-ghost" href="/pricing">See the full pricing</a>
    </div>
  </div>`;

// ---------------------------------------------------------------- cities
// [slug, name, the trade there, what that means for software, [[href, label, why] ×4], local question]
const CITIES = [
  ['mumbai', 'Mumbai',
    'Mumbai holds three jewellery trades in one city: the wholesale lanes of Zaveri Bazaar, the diamond offices of the Bharat Diamond Bourse in BKC, and the export workshops of SEEPZ. Around them sit thousands of family showrooms from Borivali to Thane.',
    'A Mumbai jeweller is rarely only a retailer. The same business sells at a counter, supplies other shops on memo, and gets pieces made by karigars across the city. Software that covers only billing leaves the memo book, the karigar account and the WhatsApp orders outside it.',
    [['/solutions/b2b-jewellery', 'Wholesale and B2B', 'Memo, buyer price lists and party ledgers for Zaveri Bazaar style trade.'], ['/solutions/diamond-traders', 'Diamond traders', 'Parcels, certified stones, memo and your own rate grid.'], ['/solutions/export-houses', 'Export houses', 'Orders, production and dispatch in the buyer’s currency.'], ['/solutions/single-store', 'Family showrooms', 'Counter, stock, books and every customer on one screen.']],
    'We sell retail and wholesale from the same shop. Can one system do both?', 'Yes. The counter, buyer price lists, memo and party ledgers run on the same stock and the same books, so a piece sold at the counter is not still shown to a trade buyer.'],
  ['surat', 'Surat',
    'Surat cuts and polishes most of the world’s diamonds, and its trading offices in Mahidharpura, Varachha and the Surat Diamond Bourse move stones on memo every day. Lab-grown diamond manufacturing and jewellery making have grown alongside the natural trade.',
    'A Surat office runs on parcels, certified stones, a rate grid and trust between traders. That is an Excel sheet and a memo book in most offices. The work is knowing, to the carat, what is in the safe, what is out on memo and who owes what.',
    [['/solutions/diamond-traders', 'Diamond traders', 'Parcels by carat, certified stones one by one, memo and buyer ledgers.'], ['/solutions/diamond-wholesale', 'Diamond wholesalers', 'Private buyer links with their prices, and memo exposure by buyer.'], ['/solutions/lab-grown-diamond', 'Lab-grown diamond', 'Certificate-first stone records and live per-carat pricing.'], ['/solutions/manufacturers', 'Jewellery manufacturers', 'Jobs, metal issue and wastage against the norm.']],
    'Does Jwero connect to RapNet or publish a Rapaport price list?', 'No. You price from your own rate grid with your own discounts. Jwero does not connect to RapNet and does not publish Rapaport prices.'],
  ['jaipur', 'Jaipur',
    'Jaipur is India’s coloured gemstone city. Stones are cut and traded around Johari Bazaar, and the city’s workshops are known for kundan, meenakari and polki work sold to retailers and brands across the country and abroad.',
    'Gemstone stock is often one of a kind, and its value sits in the certificate, the origin and the treatment as much as the weight. Handcrafted work adds karigars, long making times and custom orders. A jeweller here needs stone records, order tracking and karigar accounts in one place.',
    [['/solutions/gemstone-retail', 'Gemstone retail', 'Origin, treatment and certificate on every stone.'], ['/solutions/b2b-jewellery', 'Gemstone and jewellery wholesale', 'Buyer links, memo and party ledgers.'], ['/solutions/manufacturers', 'Workshops', 'Jobs, karigar khata and metal accounted in fine grams.'], ['/solutions/export-houses', 'Export houses', 'Buyer orders tracked from order to dispatch.']],
    'Our stones are one of a kind. Can each one have its own record?', 'Yes. Each stone or piece carries its own record with certificate, origin and treatment, and that record follows it from stock to quotation to bill.'],
  ['rajkot', 'Rajkot',
    'Rajkot is one of India’s largest gold jewellery manufacturing centres. The workshops around Soni Bazaar and Palace Road make lightweight, machine-made and handcrafted gold and silver jewellery for wholesalers and retailers in every state.',
    'A Rajkot unit lives on metal accounting. Gold goes out to karigars and comes back as jewellery, and the gap between the two is the profit or the loss. Order books from many retailers, client-supplied metal and job-work billing all sit on top of that.',
    [['/solutions/manufacturers', 'Manufacturers', 'BOM, routing, wastage norms and metal closure.'], ['/solutions/oem-manufacturers', 'OEM and job work', 'Each buyer’s jobs and metal on its own ledger.'], ['/solutions/casting-units', 'Casting units', 'Flasks, trees and loss per stage.'], ['/solutions/gold-wholesale', 'Gold wholesalers', 'Rate-linked orders and ledgers in grams and rupees.']],
    'Can karigar accounts be kept in fine gold, not only in rupees?', 'Yes. Metal issued and returned is recorded in fine grams against each karigar, with wastage checked against the norm you set for each stage.'],
  ['ahmedabad', 'Ahmedabad',
    'Ahmedabad’s trade runs from the bullion and wholesale counters of Manek Chowk to the showrooms of C.G. Road and Satellite. The city has old family firms, a strong bullion trade and a growing set of organised retailers.',
    'The same family often runs a bullion desk, a wholesale book and a showroom. Rates move through the day, bookings are taken on the phone, and customers expect a savings scheme and an old-gold exchange at the counter.',
    [['/solutions/bullion-gold-traders', 'Bullion dealers', 'Bookings at a published rate, bar stock and party ledgers.'], ['/solutions/gold-retail', 'Gold retail', 'Live rate, schemes and old-gold exchange in one flow.'], ['/solutions/gold-wholesale', 'Gold wholesale', 'Orders at today’s rate and ledgers by buyer.'], ['/products/gold-schemes', 'Gold schemes', 'Enrolment, instalments and maturity on the customer’s record.']],
    'Can the gold rate change once and update every price?', 'Yes. One rate, with your making and wastage rules, prices the catalogue, WhatsApp replies, quotations and the counter together.'],
  ['delhi', 'Delhi',
    'Delhi’s jewellery trade is concentrated in Karol Bagh, Chandni Chowk and Dariba Kalan, with bullion in Kucha Mahajani and bridal showrooms across South Delhi and the NCR. It is one of the country’s biggest wedding jewellery markets.',
    'Bridal buying is a long sale: several family members, several visits, quotations revised more than once and an advance before the order goes into making. Wholesale and retail often share a floor. The risk is a family’s whole history sitting in one salesperson’s phone.',
    [['/solutions/bridal', 'Bridal and wedding', 'Trials, quotations, advances and delivery dates on one family record.'], ['/solutions/b2b-jewellery', 'Wholesale', 'Memo, buyer price lists and ledgers.'], ['/solutions/multi-store-chains', 'Multi-store chains', 'Every branch on one record, seen from head office.'], ['/products/quotations', 'Quotations', 'Numbered quotes at the live rate, accepted on a link.']],
    'A wedding order takes weeks and many visits. Is all of it kept together?', 'Yes. Enquiry, trials, each revised quotation, the advance, the order in making and the delivery date sit on one record for the family.'],
  ['kolkata', 'Kolkata',
    'Kolkata’s Bowbazar is one of India’s oldest jewellery markets, and Bengali karigars are known across the country for fine handcrafted and filigree gold work. Many workshops here make for retailers in other cities.',
    'Handwork means many small workshops, many karigars and gold moving between them every day. Records are usually a khata book. Retailers need the old-gold exchange and custom order handled properly, and makers need each karigar’s balance to be beyond argument.',
    [['/solutions/manufacturers', 'Workshops and manufacturers', 'Karigar khata, issue and return in fine grams.'], ['/products/manufacturing', 'Manufacturing', 'Job cards, wastage norms and settlement against gold.'], ['/solutions/gold-retail', 'Gold retail', 'Live rate, exchange and schemes.'], ['/products/repairs-service', 'Repairs and custom work', 'A custody trail for every piece handed in.']],
    'Will karigars see their own account?', 'Yes. A karigar can see issued and returned metal and the balance on their own screen. Those karigar screens have an early Hindi version; the rest of the product is in English today.'],
  ['hyderabad', 'Hyderabad',
    'Hyderabad is India’s pearl city, with the trade centred on Pathargatti near Charminar, and it is a major market for uncut diamond and temple-style bridal jewellery. Large showrooms in Abids, Somajiguda and Jubilee Hills serve Telangana and Andhra buyers.',
    'Heavy bridal sets and uncut diamond pieces carry high value and long decisions. Pearls and stones need their own records. Families save through gold schemes for years before a wedding, so the scheme book is next year’s sales.',
    [['/solutions/bridal', 'Bridal', 'One family record from enquiry to delivery.'], ['/solutions/b2b-jewellery', 'Pearl and gemstone wholesale', 'Buyer links, memo and ledgers.'], ['/products/gold-schemes', 'Gold schemes', 'Instalments, reminders and maturity.'], ['/solutions/diamond-retail', 'Diamond retail', 'Certificates and stock on one record.']],
    'Do scheme customers get reminders automatically?', 'Reminders are sent automatically for each instalment, inside the limits you set. Payment is made by the customer; there is no automatic debit from their bank.'],
  ['chennai', 'Chennai',
    'Chennai’s T. Nagar is one of the busiest jewellery retail streets in the country, known for heavy gold, temple jewellery and very large showrooms. Monthly savings schemes are a normal part of buying gold here.',
    'High footfall, heavy gold and scheme customers mean the counter has to be fast and exact: live rate, wastage and making rules, old gold in exchange, the scheme balance applied to the bill, and a cash close that matches at night.',
    [['/solutions/gold-retail', 'Gold retail', 'Live rate, schemes and exchange in one flow.'], ['/products/pos', 'Counter billing', 'Scan, price, exchange, return and close the till.'], ['/products/gold-schemes', 'Gold schemes', 'The scheme book run digitally.'], ['/solutions/multi-store-chains', 'Chains', 'Stock, cash and customers across branches.']],
    'Can a scheme balance be used directly on the bill?', 'Yes. The balance is on the customer’s record and is applied at the counter when she buys.'],
  ['coimbatore', 'Coimbatore',
    'Coimbatore is a major gold jewellery manufacturing city, supplying machine-made, cast and handcrafted jewellery to retailers across South India and for export. Its units range from small job workers to large factories.',
    'Manufacturing at volume needs stage-wise control: what metal went into each job, what came out, and where the loss happened. Many units make for several retail brands at once and must keep each client’s metal and jobs apart.',
    [['/solutions/manufacturers', 'Manufacturers', 'Jobs, routing and wastage against the norm.'], ['/solutions/casting-units', 'Casting units', 'Flasks, trees and metal loss by stage.'], ['/solutions/oem-manufacturers', 'OEM manufacturers', 'Client-wise job work and metal.'], ['/products/hr-payroll', 'HR and payroll', 'Attendance, payroll and incentives.']],
    'We make for several brands. Is each client’s gold kept separate?', 'Yes. Client-supplied metal, jobs and settlement are held client by client, so one buyer’s account never mixes with another’s.'],
  ['bangalore', 'Bengaluru',
    'Bengaluru has one of the most organised jewellery markets in India: large chains on Commercial Street, Jayanagar and Dickenson Road, long-standing family jewellers, and a cluster of online-first jewellery brands.',
    'Customers here research online, ask on WhatsApp or Instagram, and then walk in. Chains need every branch priced and stocked alike. Online brands need the website, the chat and the stock to agree with each other.',
    [['/solutions/multi-store-chains', 'Chains', 'Every branch on one record, seen live.'], ['/solutions/d2c-brands', 'Online brands', 'Keep the website, add chat selling and one stock.'], ['/solutions/diamond-retail', 'Diamond retail', 'Certificates in the reply and on the bill.'], ['/products/whatsapp', 'WhatsApp', 'Priced replies sent from the catalogue.']],
    'We already sell on Shopify. Do we have to move?', 'No. Keep the website. Orders, stock and customers flow onto one record, and WhatsApp and Instagram selling are added beside it.'],
  ['thrissur', 'Thrissur',
    'Thrissur is called the gold capital of Kerala. It is a manufacturing base for traditional Kerala gold jewellery and the home city of several of India’s largest jewellery retail chains.',
    'Kerala buys gold by weight and by purity, at volume, and wedding purchases are heavy. Makers supply showrooms across the state and the Gulf. Both sides need exact weight records, hallmarking kept in order and schemes that run without a paper register.',
    [['/solutions/gold-retail', 'Gold retail', 'Live rate, weight billing and exchange.'], ['/solutions/manufacturers', 'Manufacturers', 'Metal accounted through every stage.'], ['/solutions/multi-store-chains', 'Chains', 'Branches on one stock and one ledger.'], ['/products/gold-schemes', 'Gold schemes', 'Monthly plans without the paper register.']],
    'Is the HUID kept against each piece?', 'Yes. The HUID is recorded on the piece and stays with it through stock, sale and any later repair.'],
  ['pune', 'Pune',
    'Pune’s jewellery trade is centred on Laxmi Road and Raviwar Peth, with long-established family jewellers known for traditional Maharashtrian designs and a growing number of branch networks across the city and its suburbs.',
    'Family firms here are opening second and third branches. That is the point where one person’s memory stops being enough: stock is in three places, staff change, and the owner wants the day’s numbers without calling each shop.',
    [['/solutions/single-store', 'Single store', 'The whole shop on one screen.'], ['/solutions/multi-store-chains', 'Growing to more branches', 'One rate, one stock, one ledger.'], ['/solutions/bridal', 'Bridal', 'The family’s wedding order kept together.'], ['/products/reports', 'Reports', 'Today’s sales, stock and cash on one dashboard.']],
    'We are opening a second shop. What changes?', 'Nothing has to be rebuilt. The second location is added to the same record, so stock, customers, prices and books are shared from the first day.'],
  ['kochi', 'Kochi',
    'Kochi is Kerala’s commercial capital, with jewellery showrooms along MG Road and Broadway in Ernakulam. Kerala has some of the highest gold buying per household in India, and families working in the Gulf are an important part of the customer base.',
    'Wedding purchases are heavy and planned well ahead, often from abroad. Customers ask on WhatsApp or a video call before they travel, and expect the rate, the weight and the making charge to be exact when they arrive.',
    [['/solutions/gold-retail', 'Gold retail', 'Live rate, weight billing and old-gold exchange.'], ['/products/meetings', 'Video counter', 'Show pieces on a video call to a buyer abroad.'], ['/solutions/multi-store-chains', 'Chains', 'Branches on one stock and one ledger.'], ['/products/gold-schemes', 'Gold schemes', 'Monthly plans on the customer’s record.']],
    'Many of our customers are abroad. Can we serve them before they visit?', 'Yes. A priced catalogue link or a video call from the same inbox lets a customer shortlist before she travels, and the shortlist is waiting at the counter when she arrives.'],
  ['kozhikode', 'Kozhikode',
    'Kozhikode, also known as Calicut, is the trading centre of the Malabar coast, with a long history of gold retail and strong links to the Gulf. Several large jewellery chains began in this region.',
    'A Malabar jeweller often grows from one showroom to several quickly, and serves customers who compare prices across shops and across countries. Consistent pricing between branches and a clear making charge matter more here than almost anywhere.',
    [['/solutions/multi-store-chains', 'Chains', 'One rate and one rule at every branch.'], ['/solutions/gold-retail', 'Gold retail', 'Live rate, schemes and exchange.'], ['/platform/pricing-engine', 'Pricing rules', 'Rate, making and wastage as one rule.'], ['/products/reports', 'Reports', 'Sales, stock and cash across branches.']],
    'Can every branch be made to charge the same?', 'Yes. Head office sets the rate and the making rule once, and every branch prices from it. Any override goes through an approval and is recorded.'],
  ['madurai', 'Madurai',
    'Madurai is one of Tamil Nadu’s oldest jewellery markets, centred on the streets around the Meenakshi temple such as South Avani Moola Street. It is known for traditional gold jewellery and long-established family shops.',
    'These are relationship businesses. The same families have bought from the same shop for generations, mostly gold by weight, often through a monthly scheme. The record of those families usually lives in the owner’s memory.',
    [['/solutions/gold-retail', 'Gold retail', 'Rate, wastage, exchange and schemes at the counter.'], ['/solutions/single-store', 'Family shops', 'The whole shop on one screen.'], ['/products/gold-schemes', 'Gold schemes', 'The scheme register, run digitally.'], ['/products/crm', 'Customer record', 'Families, occasions and purchases, owned by the shop.']],
    'Our customers’ history is in my father’s head. Can it be put on record?', 'Yes. Past bills and scheme members are imported, and from then on every visit, purchase and occasion is added to the family’s record as it happens.'],
  ['vijayawada', 'Vijayawada',
    'Vijayawada is a major gold retail centre for Andhra Pradesh, known for heavy bridal jewellery and large showrooms around Governorpet and MG Road. Gold is a central part of weddings and festivals in the region.',
    'High-value bridal sales, heavy pieces and scheme customers put pressure on the counter. Bills must handle wastage, stones and old gold correctly, and the stock value in the showroom is large enough that a count cannot wait for year end.',
    [['/solutions/bridal', 'Bridal', 'Quotations, advances and orders on one family record.'], ['/solutions/gold-retail', 'Gold retail', 'Live rate, schemes and exchange.'], ['/products/inventory', 'Inventory', 'Stock valued today, with ageing.'], ['/jewellery-barcode-tagging-software', 'Tagging', 'Count stock by scanning.']],
    'How do we count a large showroom without closing?', 'Count one category at a time by scanning. The system shows what it expected and what it found, so a variance is caught the same week.'],
  ['lucknow', 'Lucknow',
    'Lucknow’s jewellery trade sits in Chowk and Aminabad, with newer showrooms in Hazratganj and Gomti Nagar. It is a strong wedding market for Uttar Pradesh, with demand for both gold and diamond sets.',
    'Wedding buying means long conversations with several family members and quotations that change. Old family firms here are also meeting customers who first ask on Instagram or WhatsApp, not at the counter.',
    [['/solutions/bridal', 'Bridal', 'The wedding order kept as one story.'], ['/solutions/single-store', 'Family showrooms', 'Counter, stock, books and customers together.'], ['/products/instagram-facebook', 'Instagram and Facebook', 'Messages and comments in one inbox.'], ['/products/quotations', 'Quotations', 'Numbered quotes at the live rate.']],
    'Enquiries now come on Instagram. Who answers them?', 'They land in the same inbox as WhatsApp, against the customer’s record. A priced reply goes out automatically from your catalogue, with approval only where you want it.'],
  ['indore', 'Indore',
    'Indore’s Sarafa Bazaar is one of the best-known jewellery markets in central India, a dense lane of gold and silver shops that serves buyers from across Madhya Pradesh.',
    'Sarafa is a mix of retail, wholesale and bullion in a few streets. Shops are close together, customers compare on the spot, and many firms supply smaller-town jewellers as well as walk-in buyers.',
    [['/solutions/gold-retail', 'Gold retail', 'Rate, exchange and schemes in one flow.'], ['/solutions/silver-retail', 'Silver retail', 'Fast billing by weight.'], ['/solutions/b2b-jewellery', 'Wholesale', 'Supply to other jewellers with memo and ledgers.'], ['/solutions/bullion-gold-traders', 'Bullion', 'Bookings at a published rate.']],
    'We sell gold and silver from one counter. Does it handle both rates?', 'Yes. Each metal has its own rate and its own making rules, and a single bill can carry both.'],
  ['nagpur', 'Nagpur',
    'Nagpur’s jewellery trade is centred on Itwari, the old Sarafa market, with larger showrooms in Dharampeth and Sitabuldi. It serves Vidarbha and neighbouring districts.',
    'Itwari firms often wholesale to smaller-town jewellers while running a retail counter. Party ledgers, pieces sent out on approval and the day’s cash all need to be kept straight.',
    [['/solutions/b2b-jewellery', 'Wholesale', 'Memo, approvals and party ledgers.'], ['/solutions/gold-retail', 'Gold retail', 'The counter at the live rate.'], ['/jewellery-accounting-software', 'Accounting', 'Ledgers in grams and rupees.'], ['/solutions/single-store', 'Single store', 'The whole shop on one screen.']],
    'Pieces go out on approval to other jewellers. Can we track them?', 'Yes. Each memo has its pieces, its buyer and its return date, and anything overdue is flagged.'],
  ['jalgaon', 'Jalgaon',
    'Jalgaon in Maharashtra is widely called the Gold City. Its jewellers have a long reputation for purity, and buyers travel from across the state and beyond to shop there.',
    'A reputation for purity is built on exact records: purity tested, weight shown, hallmark in order. For a Jalgaon jeweller the bill is a statement of trust, and it has to be right every time.',
    [['/solutions/gold-retail', 'Gold retail', 'Weight, purity and rate shown clearly on every bill.'], ['/products/billing-finance', 'Billing', 'GST invoices at the live rate.'], ['/products/inventory', 'Inventory', 'Purity, HUID and weights on every piece.'], ['/products/crm', 'Customers', 'Buyers who travel to you, remembered.']],
    'Customers come from other cities. How do we stay in touch?', 'Each buyer’s purchases and occasions are on her record, and messages about new stock or a rate change are sent automatically, with approval if you want it.'],
  ['amritsar', 'Amritsar',
    'Amritsar’s Guru Bazaar, near the Golden Temple, is one of Punjab’s oldest jewellery markets, known for traditional jadau and bridal jewellery.',
    'Punjabi weddings are large purchases made by families together, often with relatives abroad involved in the decision. Traditional handcrafted work also means orders placed with karigars and delivered against a date.',
    [['/solutions/bridal', 'Bridal', 'The family’s order from enquiry to delivery.'], ['/products/meetings', 'Video counter', 'Show sets to relatives abroad.'], ['/products/manufacturing', 'Orders and karigars', 'Custom work tracked to delivery.'], ['/solutions/single-store', 'Family showrooms', 'One screen for the shop.']],
    'A custom order takes weeks. Can the customer be kept informed?', 'Yes. The order, its stage and its delivery date are on the customer’s record, and an update is sent automatically at each stage.'],
  ['bikaner', 'Bikaner',
    'Bikaner in Rajasthan is known for kundan, jadau and meenakari craftsmanship. Its workshops supply handcrafted bridal jewellery to showrooms across India.',
    'Handcrafted work passes through several specialists, each holding gold and stones for a time. The business depends on knowing who has what, and on delivering to retailers in other cities on the promised date.',
    [['/solutions/manufacturers', 'Workshops', 'Jobs and metal tracked through each stage.'], ['/products/manufacturing', 'Karigar accounts', 'Gold and stones with each craftsman.'], ['/solutions/b2b-jewellery', 'Supplying retailers', 'Orders, memo and party ledgers.'], ['/products/digital-catalogues', 'Catalogue links', 'Share designs with buyers in other cities.']],
    'A piece passes through four craftsmen. Is each handover recorded?', 'Yes. Each stage has an issue and a return, so the metal and stones are accounted for at every handover.'],
  ['varanasi', 'Varanasi',
    'Varanasi is known for gulabi meenakari, the pink enamel work made by craftsmen in the old city, alongside a busy gold and silver trade around Thatheri Bazaar and Chowk.',
    'Small workshops and old trading families work side by side. Craft pieces are often one of a kind and sold to buyers far away, while the local trade is everyday gold and silver at the day’s rate.',
    [['/solutions/single-store', 'Family shops', 'Counter, stock and books together.'], ['/solutions/manufacturers', 'Workshops', 'Jobs, karigars and metal.'], ['/products/catalog', 'Catalogue', 'Each piece with its photos and story.'], ['/products/whatsapp', 'WhatsApp', 'Sell to buyers in other cities.']],
    'Our pieces are one of a kind. Can each be shown online?', 'Yes. Each piece has its own record with photos, and a link shared on WhatsApp shows it at the current price.'],
  ['cuttack', 'Cuttack',
    'Cuttack in Odisha is famous for tarakasi, its silver filigree work, made by craftsmen in the old city and sold across India.',
    'Filigree is fine handwork in silver, made in small workshops and sold both locally and to distant buyers. The business needs silver accounted for with each craftsman and a simple way to show finished work to buyers elsewhere.',
    [['/solutions/silver-retail', 'Silver retail', 'Billing by weight at the silver rate.'], ['/solutions/manufacturers', 'Workshops', 'Metal with each craftsman, in and out.'], ['/products/digital-catalogues', 'Catalogue links', 'Show finished work to buyers.'], ['/solutions/b2b-jewellery', 'Wholesale', 'Supply to shops in other cities.']],
    'Is silver handled as carefully as gold?', 'Yes. Silver has its own rate, its own making rules and the same issue and return records with each craftsman.'],
  ['patna', 'Patna',
    'Patna’s Bakarganj is the main jewellery market for Bihar, with wholesale and retail shops serving the city and the districts around it.',
    'Bakarganj firms supply smaller-town jewellers and sell at the counter, mostly gold for weddings and festivals. Credit, part payments and pieces sent out on approval are everyday business.',
    [['/solutions/b2b-jewellery', 'Wholesale', 'Memo and party ledgers.'], ['/solutions/gold-retail', 'Gold retail', 'Rate, exchange and schemes.'], ['/jewellery-accounting-software', 'Accounting', 'Receivables by party.'], ['/products/gold-schemes', 'Gold schemes', 'Savings plans for wedding buyers.']],
    'Many customers pay in parts. Is that tracked?', 'Yes. Advances and part payments sit on the order, and the amount outstanding is on the customer’s or party’s account.'],
  ['kolhapur', 'Kolhapur',
    'Kolhapur is known for traditional Maharashtrian jewellery such as the Kolhapuri saaj and thushi, sold in the Gujari market, and the nearby town of Hupari is a centre for silver ornaments.',
    'Traditional designs are made by local craftsmen and bought across the state. Gold retail in the city and silver making in Hupari mean many businesses handle both metals and both making and selling.',
    [['/solutions/gold-retail', 'Gold retail', 'Traditional designs at the live rate.'], ['/solutions/silver-retail', 'Silver', 'Lots, weight sales and counts.'], ['/solutions/manufacturers', 'Makers', 'Jobs and metal with craftsmen.'], ['/solutions/single-store', 'Family shops', 'One screen for the shop.']],
    'We make and sell. Is that two systems?', 'No. A piece made on a job goes into the same stock the counter sells from, with its real weights.'],
  ['agra', 'Agra',
    'Agra is one of India’s main centres for silver jewellery, especially payal and other anklets, made in workshops across the city and traded around Kinari Bazaar.',
    'Silver is a volume business with thin margins. Pieces are sold by weight in large numbers to wholesalers from other states, so fast billing, lot-wise stock and party ledgers matter more than piece-by-piece records.',
    [['/solutions/silver-retail', 'Silver', 'Weight sales and lots.'], ['/solutions/b2b-jewellery', 'Wholesale', 'Buyers, memo and ledgers.'], ['/solutions/manufacturers', 'Makers', 'Metal accounted through each stage.'], ['/products/purchase-vendors', 'Purchase', 'Raw silver and vendor accounts.']],
    'We sell by the kilo, not by the piece. Does that work?', 'Yes. Silver can be held and sold as lots by weight, with the rate and making rule applied per gram.'],
  ['salem', 'Salem',
    'Salem in Tamil Nadu is a major centre for silver anklets, with thousands of small units making kolusu for wholesalers across South India and beyond.',
    'The work is spread across many small job workers. Silver is issued, worked and returned many times over, and the maker’s margin depends on accounting for every gram across those handovers.',
    [['/solutions/manufacturers', 'Makers', 'Issue, return and loss by stage.'], ['/solutions/oem-manufacturers', 'Job work', 'Each client’s metal kept apart.'], ['/solutions/silver-retail', 'Silver', 'Lots and weight sales.'], ['/products/manufacturing', 'Karigar wages', 'Karigar wage settlement.']],
    'Work goes to many small job workers. Can each have an account?', 'Yes. Each job worker has an account of metal issued and returned and the wages due.'],
];

// City pages carry local material so they are not near-copies of each other:
// an opening answer naming the city's trade, use cases and buyer questions
// from the business types the city routes to (content/segments.json), the
// customer quote from that city or state where one exists, and a scenario
// matched to the main trade.
const SEG = require('./segments.json');
const CITY_QUOTE = { bangalore: 0, chennai: 1, hyderabad: 4, patna: 6, kochi: 2, kozhikode: 2, thrissur: 5, coimbatore: 3, madurai: 3, salem: 1 };
const SIM_FOR = { 'diamond-traders': 'shelf', 'diamond-wholesale': 'shelf', 'lab-grown-diamond': 'shelf', 'gold-retail': 'rate', 'gold-wholesale': 'rate', 'bullion-gold-traders': 'rate', 'silver-retail': 'rate', 'b2b-jewellery': 'rate', manufacturers: 'grams', 'casting-units': 'grams', 'oem-manufacturers': 'grams', 'export-houses': 'grams' };
const cityLocal = (slug, name, links) => {
  const segs = links.map(([h]) => (/^\/solutions\/([^/#]+)/.exec(h) || [])[1]).filter((k) => SEG[k]);
  const uc = []; for (let r = 0; uc.length < 4 && r < 4; r++) for (const k of segs) { const u = SEG[k].usecases[r]; if (u && uc.length < 4 && !uc.includes(u)) uc.push(u); }
  const extra = segs.slice(0, 2).map((k) => SEG[k].faqs[0]).filter(Boolean);
  const names = links.slice(0, 3).map(([, l]) => l.toLowerCase());
  const short = { q: `What is the best jewellery software for jewellers in ${name}?`, a: `For ${name}’s trade, which here means ${names.join(', ').replace(/, ([^,]*)$/, ' and $1')}, Jwero runs the counter, stock, customers, karigar accounts and books on one record, priced from the live rate. It is set up in a day over chat and video, with no office visit needed. Run it yourself for ₹18,000 a month, first month ₹3,600, or let Jwero’s team run it.` };
  const sim = SIM_FOR[segs[0]] || 'memory';
  const qi = CITY_QUOTE[slug];
  return { uc, extra, short, sim, qi };
};
const cityPage = ([slug, name, trade, need, links, q, a]) => {
  const loc = cityLocal(slug, name, links);
  const Q = loc.qi !== undefined ? require('./positioning').QUOTES[loc.qi] : null;
  const faqs = [
    loc.short,
    { q, a },
    ...loc.extra,
    { q: `Is there a Jwero office in ${name}?`, a: `No. Jwero is set up and supported over chat, call and video call, so a jeweller in ${name} gets the same team as one anywhere else in India. Your data is imported for you and training is done on your own screen.` },
    { q: `What does jewellery software cost for a shop in ${name}?`, a: 'The price is the same in every city: ₹18,000 a month, with every module included. The first month is ₹3,600. WhatsApp messages, AI and calls run on a prepaid wallet at published rates.' },
    { q: 'Do I have to give up Tally?', a: 'No. Sales, purchases and payments are kept in Jwero with GST handled. Jwero connects to Tally and Zoho Books, imports masters and checks records against them; entries are still posted in Tally by your accountant.' },
  ];
  return {
    slug: `jewellery-software-india/${slug}`,
    title: `Jewellery Software in ${name === 'Bengaluru' ? 'Bangalore' : name}: Billing, Stock, CRM in One | Jwero`,
    description: `Jewellery software for jewellers in ${name === 'Bengaluru' ? 'Bangalore (Bengaluru)' : name}: counter billing at the live gold rate, stock, purchase, karigar accounts, schemes, WhatsApp and books on one record. First month ₹3,600.`,
    breadcrumbs: [['Home', '/'], ['Jewellery software in India', '/jewellery-software-india'], [name]],
    faqs,
    body: `
${L.hero({
  eyebrow: `JEWELLERY SOFTWARE · ${name.toUpperCase()}`,
  h1: `Jewellery software for jewellers in ${name}.`,
  sub: `One system for the counter, the stock room, the workshop, the books and every customer, set up remotely and supported in your language.`,
  primary: { href: '#', label: 'Chat or call with us', wa: 'city-' + slug },
  secondary: { href: '#tiers', label: 'See the price' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${loc.short.q}</h2><p>${loc.short.a}</p></div></section>

${L.section(
  `${L.sectionHead(`THE TRADE IN ${name.toUpperCase()}`, `How jewellery is bought, made and sold in ${name}.`, '')}
  <div class="prose city-prose"><p>${trade}</p><p>${need}</p></div>`
)}
${Q ? L.section(`<figure class="pz-quote jb-solo city-quote"><blockquote>“${Q[0]}”</blockquote><figcaption><b>${Q[1]}</b><span>${Q[2]}${/Tanika/.test(Q[0]) ? ' · Tanika Tech is the company behind Jwero' : ''}</span></figcaption></figure>`) : ''}
${loc.uc.length ? L.section(`${L.sectionHead('USE CASES', `Where Jwero pays off for jewellers in ${name}.`, 'Everyday situations in the trade here, and what changes.')}<div class="uc-grid">${loc.uc.map((u, i) => `<article class="uc-card"><span class="uc-n">${String(i + 1).padStart(2, '0')}</span><h3>${u.hook}</h3><p>${u.does}</p><p class="uc-change"><b>What changes</b>${u.changes}</p></article>`).join('')}</div>`, { tone: 'tint' }) : ''}
${L.sim(loc.sim)}

${L.section(
  `${L.sectionHead('START HERE', `The pages written for the trade in ${name}.`, '')}
  ${L.cards(links.map(([href, label, why]) => ({ title: label, text: why, link: { href, label: 'Open' } })), 2)}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS', `What jewellers in ${name} ask.`, '')}${L.faqBlock(faqs)}
<p class="cta-note" style="margin-top:18px">Other cities: ${CITIES.filter((c) => c[0] !== slug).map((c) => `<a href="/jewellery-software-india/${c[0]}">${c[1]}</a>`).join(' · ')}</p>`)}

${L.ctaBand(`See it on a ${name} jeweller’s own data.`, 'Tell us what you run today. We will show the same day in Jwero.', 'city-' + slug)}
`,
  };
};

// ---------------------------------------------------------------- need index
// What a jeweller searches for → the page that answers it.
const NEEDS = [
  ['Counter and billing', [['/products/billing-finance', 'Jewellery billing software'], ['/products/pos', 'Jewellery POS software'], ['/jewellery-barcode-tagging-software', 'Barcode and tagging'], ['/products/quotations', 'Quotation and estimate software'], ['/platform/pricing-engine', 'Live gold rate pricing']]],
  ['Stock and purchase', [['/products/inventory', 'Inventory and stock management'], ['/products/purchase-vendors', 'Purchase and vendor management'], ['/products/catalog', 'Jewellery catalogue software'], ['/products/digital-catalogues', 'Digital catalogue app'], ['/products/erp', 'Jewellery ERP software']]],
  ['Workshop', [['/products/manufacturing', 'Manufacturing and karigar management'], ['/products/repairs-service', 'Repair management'], ['/solutions/casting-units', 'Casting software'], ['/tools/gold-loss-calculator', 'Gold loss calculator']]],
  ['Customers', [['/products/crm', 'Jewellery CRM software'], ['/products/gold-schemes', 'Gold scheme software'], ['/products/girvi', 'Girvi and gold loan software'], ['/products/loyalty', 'Loyalty program software'], ['/products/showroom', 'Showroom and walk-in tracking'], ['/jewellery-showroom-footfall-counting', 'Footfall counting'], ['/jewellery-appointment-booking-software', 'Appointment booking'], ['/products/meetings', 'Appointments and video calls']]],
  ['Selling and marketing', [['/products/whatsapp', 'WhatsApp API and CRM'], ['/whatsapp-broadcast-for-jewellers', 'WhatsApp broadcasts'], ['/instagram-for-jewellers', 'Instagram for jewellers'], ['/ads-for-jewellers', 'Google and Instagram ads'], ['/sms-marketing-for-jewellers', 'SMS, RCS and push'], ['/ai-calling-for-jewellers', 'AI calling'], ['/jewellery-website-analytics', 'Website analytics'], ['/products/instagram-facebook', 'Instagram and Facebook'], ['/products/ecommerce', 'Ecommerce website builder'], ['/products/campaigns', 'Marketing campaigns'], ['/products/ai-sales-agents', 'AI chatbot and voice AI'], ['/products/ads-manager', 'Ads manager']]],
  ['Books, team and decisions', [['/guides', 'Buyer’s guides'], ['/jewellery-accounting-software', 'Jewellery accounting software'], ['/platform/integrations/tally', 'Tally integration'], ['/products/hr-payroll', 'HR and payroll'], ['/jewellery-staff-management-software', 'Staff management'], ['/products/training-lms', 'Staff training'], ['/products/reports', 'MIS reports and dashboards'], ['/cloud-jewellery-software', 'Cloud and mobile access']]],
];

const hub = {
  slug: 'jewellery-software-india',
  title: 'Jewellery Software in India: By City and By Need | Jwero',
  description: 'Jewellery software for Indian jewellers, by city and by need: billing, stock, CRM, manufacturing, schemes, WhatsApp and books on one record. Find your city and the page for what you are looking for.',
  breadcrumbs: [['Home', '/'], ['Jewellery software in India']],
  faqs: [
    { q: 'Which jewellery software is used in India?', a: 'Indian jewellers mostly run a billing or ERP package, Tally for accounts, WhatsApp on a phone and Excel for everything in between. Jwero replaces that set with one system: counter, stock, purchase, workshop, customers, schemes, selling channels and books on one record.' },
    { q: 'Is Jwero made for Indian jewellers?', a: 'Yes. It prices at the live gold rate with making and wastage rules, handles old-gold exchange, HUID, GST invoices, gold savings schemes, girvi and karigar accounts in fine grams. Its rate feed, GST shapes and phone defaults are India first.' },
    { q: 'What does it cost?', a: '₹18,000 a month, with every module included. The first month is ₹3,600.' },
  ],
  body: `
${L.hero({
  eyebrow: 'JEWELLERY SOFTWARE IN INDIA',
  h1: 'Jewellery software for Indian jewellers, by city and by need.',
  sub: 'Every trade city has its own way of buying, making and selling. Find yours, or go straight to the page for what you are looking for.',
  primary: { href: '#', label: 'Chat or call with us', wa: 'india' },
  secondary: { href: '/pricing', label: 'See the price' },
})}

${L.section(
  `${L.sectionHead('BY CITY', 'Find your city.', 'Each page describes the trade there and the parts of Jwero that fit it. Setup and support are remote, so the service is the same everywhere.')}
  ${L.cards(CITIES.map(([slug, name, trade]) => ({ icon: 'store', title: name, text: trade.split('. ')[0] + '.', link: { href: `/jewellery-software-india/${slug}`, label: `Jewellery software in ${name}` } })), 3)}`
)}

${L.section(
  `${L.sectionHead('BY NEED', 'Looking for one thing? Start there.', 'Each of these is a part of the same system, so you can begin with one and switch on the rest later.')}
  <div class="need-index">${NEEDS.map(([group, items]) => `<div class="need-group"><h3>${group}</h3><ul>${items.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>`).join('')}</div>`
, { tone: 'tint' })}


${L.section(`${L.sectionHead('QUESTIONS', 'What jewellers ask first.', '')}${L.faqBlock([
  { q: 'Which jewellery software is used in India?', a: 'Most jewellers run a billing or ERP package, Tally for accounts, WhatsApp on a phone and Excel for everything in between. Jwero replaces that set with one system on one record. <a href="/compare">See how it compares</a>.' },
  { q: 'Is Jwero made for Indian jewellers?', a: 'Yes: live gold rate with making and wastage rules, old-gold exchange, HUID, GST invoices, savings schemes, girvi and karigar accounts in fine grams.' },
  { q: 'What does it cost?', a: '₹18,000 a month, every module included. The first month is ₹3,600. <a href="/pricing">Full pricing</a>.' },
])}`, { tone: 'tint' })}

${L.ctaBand('Tell us your city and what you run today.', 'We will show you the same day in Jwero.', 'india')}
`,
};

// ---------------------------------------------------------------- need pages
// Each tool page borrows the confirmed use cases, questions and scenario of
// the product it sells (content/usecases.json and the product page itself).
const UC = require('./usecases.json');
const PRODUCT_PAGES = ['./products-sell', './products-grow', './products-hr', './products-manage', './products-more', './products-ops', './products-run'].flatMap((m) => require(m));
const TOOL_FOR = {
  'jewellery-accounting-software': ['billing-finance', 'till'], 'jewellery-barcode-tagging-software': ['catalog', 'rate'], 'cloud-jewellery-software': ['erp', 'shelf'],
  'whatsapp-broadcast-for-jewellers': ['whatsapp', 'approve'], 'instagram-for-jewellers': ['instagram-facebook', 'memory'], 'ads-for-jewellers': ['ads-manager', 'approve'],
  'sms-marketing-for-jewellers': ['campaigns', 'approve'], 'jewellery-showroom-footfall-counting': ['showroom', 'memory'], 'ai-calling-for-jewellers': ['ai-sales-agents', 'approve'],
  'jewellery-appointment-booking-software': ['meetings', 'memory'], 'jewellery-staff-management-software': ['hr-payroll', 'approve'], 'jewellery-website-analytics': ['optimize', 'memory'],
};
const needPage = ({ slug, title, description, eyebrow, h1, sub, wa, intro, cards, rows, notYet, faqs: faqs0, links }) => {
  const [prod, simKind] = TOOL_FOR[slug] || [];
  const pp = PRODUCT_PAGES.find((x) => x.slug === 'products/' + prod);
  const have = new Set(faqs0.map((f) => f.q));
  const extra = ((pp && pp.faqs) || []).filter((f) => !have.has(f.q)).slice(0, 3);
  const TOOL_Q = {
    'jewellery-accounting-software': 'What is the best accounting software for jewellers?', 'jewellery-barcode-tagging-software': 'What is the best barcode and tagging software for jewellers?',
    'cloud-jewellery-software': 'What is the best cloud jewellery software?', 'whatsapp-broadcast-for-jewellers': 'How can jewellers send WhatsApp broadcasts safely?',
    'instagram-for-jewellers': 'How can jewellers turn Instagram enquiries into sales?', 'ads-for-jewellers': 'How should jewellers run Google and Instagram ads?',
    'sms-marketing-for-jewellers': 'How should jewellers use SMS, RCS and push messages?', 'jewellery-showroom-footfall-counting': 'How can a jewellery showroom count footfall and track walk-ins?',
    'ai-calling-for-jewellers': 'How can jewellers use AI for customer calls?', 'jewellery-appointment-booking-software': 'What is the best appointment booking software for jewellers?',
    'jewellery-staff-management-software': 'What is the best staff management software for jewellers?', 'jewellery-website-analytics': 'How can jewellers see what visitors do on their website?',
  };
  const short = { q: TOOL_Q[slug] || `What is the best ${eyebrow.toLowerCase()} for jewellers?`, a: `${description.replace(/\s*—\s*/g, ', ')} It is part of Jwero: run it yourself for ₹18,000 a month, first month ₹3,600, or let Jwero’s team run it for you.` };
  const faqs = [short, ...faqs0, ...extra];
  const uc = (UC[prod] || []).slice(0, 4);
  return {
  slug, title, description, breadcrumbs: [['Home', '/'], ['Jewellery software in India', '/jewellery-software-india'], [eyebrow]], faqs,
  body: `
${L.hero({ eyebrow: eyebrow.toUpperCase(), h1, sub, primary: { href: '#', label: 'Chat or call with us', wa }, secondary: { href: '/pricing', label: 'See the price' } })}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${short.q}</h2><p>${short.a}</p></div></section>

${L.section(`${L.sectionHead('WHAT IT DOES', intro[0], intro[1])}${L.cards(cards, 3)}`)}

${uc.length ? L.section(`${L.sectionHead('USE CASES', 'Where this pays off in a jewellery business.', 'Four everyday situations, and what changes when Jwero handles them.')}<div class="uc-grid">${uc.map((u, i) => `<article class="uc-card"><span class="uc-n">${String(i + 1).padStart(2, '0')}</span><h3>${u.hook}</h3><p>${u.does}</p><p class="uc-change"><b>What changes</b>${u.changes}</p></article>`).join('')}</div>`, { tone: 'tint' }) : ''}

${simKind ? L.sim(simKind) : ''}

${L.section(`${L.sectionHead('TODAY AND WITH JWERO', 'What changes.', '')}${L.compareRows(rows)}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SAID PLAINLY', 'What it does not do yet.', '')}<div class="stack-verdict">${notYet} The <a href="/roadmap">public roadmap</a> says what is shipped, rolling out and not yet.</div>`)}

${L.section(`${L.sectionHead('QUESTIONS', 'What jewellers ask.', '')}${L.faqBlock(faqs)}
<p class="cta-note" style="margin-top:18px">Related: ${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join(' · ')}</p>`)}

${L.ctaBand('See it on your own data.', 'Tell us what you run today. We will show the same day in Jwero.', wa)}
`,
  };
};

const accounting = needPage({
  slug: 'jewellery-accounting-software',
  title: 'Jewellery Accounting Software: GST Books | Jwero',
  description: 'Jewellery accounting software where every sale, purchase, return and payment posts to a double-entry ledger with GST handled, party ledgers in grams and rupees, and a bridge to Tally and Zoho Books.',
  eyebrow: 'Jewellery accounting software',
  h1: 'Jewellery accounting software where the books post themselves.',
  sub: 'Every bill, purchase, return and payment made anywhere in the business lands in the ledger with GST handled. Keep the books in Jwero, or bridge them to Tally or Zoho Books.',
  wa: 'accounting',
  intro: ['Accounts that follow the business, not the other way round.', 'No second entry. The counter, the purchase desk and the scheme counter write the books as they work.'],
  cards: [
    { icon: 'receipt', title: 'A double-entry ledger', text: 'Sales, returns, payments and expenses post to Jwero’s own ledger as they happen, with GST handled on each.', link: { href: '/products/billing-finance', label: 'Billing and finance' } },
    { icon: 'wallet', title: 'Party ledgers in grams and rupees', text: 'Buyers, vendors and karigars each have an account that can be read in metal and in money.' },
    { icon: 'store', title: 'Cash day-close', text: 'Each register closes its shift against the bills, so the cash is matched before the shop shuts.', link: { href: '/products/pos', label: 'The counter' } },
    { icon: 'chat', title: 'Receivables and reminders', text: 'Outstanding amounts are tracked by party, and payment reminders go out automatically, with approval if you want it.' },
    { icon: 'truck', title: 'Purchases and vendor bills', text: 'Purchase orders, goods received, vendor bills and credit notes in one chain.', link: { href: '/products/purchase-vendors', label: 'Purchase' } },
    { icon: 'flow', title: 'Tally and Zoho Books bridge', text: 'If your accountant works in Tally or Zoho Books, the entries are carried across.', link: { href: '/platform/integrations/tally', label: 'Tally integration' } },
  ],
  rows: [
    { lever: 'ENTRY', before: 'The accountant types every bill again from the billing software into Tally.', after: 'The bill is the entry. Nothing is typed twice.' },
    { lever: 'METAL', before: 'Rupee ledgers in one place, gold balances in a notebook.', after: 'Each party’s account shows grams and rupees together.' },
    { lever: 'CASH', before: 'Cash counted at night and argued about in the morning.', after: 'Each register closes against its own bills.' },
    { lever: 'DUES', before: 'Receivables chased when someone remembers.', after: 'Outstanding by party, with reminders sent automatically.' },
  ],
  notYet: 'Jwero does not generate e-invoice IRNs or e-way bills, and does not file GST returns on the portal. Invoices are GST-ready and the data exports for your accountant.',
  faqs: [
    { q: 'Is Jwero a replacement for Tally?', a: 'It can be, and it does not have to be. Every transaction posts to Jwero’s own double-entry ledger. If your accountant prefers Tally or Zoho Books, the bridge carries the entries there.' },
    { q: 'Does it handle GST for jewellery?', a: 'Invoices are GST-ready, with tax handled on sales, returns, old-gold exchange and purchases. E-invoice IRN, e-way bills and portal filing are not done by Jwero today.' },
    { q: 'Can ledgers be kept in gold weight?', a: 'Yes. Party ledgers for buyers, vendors and karigars can be read in grams and in rupees.' },
    { q: 'What does it cost?', a: 'Accounting is part of the one plan: ₹18,000 a month, every module included. The first month is ₹3,600.' },
  ],
  links: [['/products/billing-finance', 'Jewellery billing software'], ['/platform/integrations/tally', 'Tally integration'], ['/blog/jewellery-software-and-tally', 'Jewellery software and Tally'], ['/roles/accountant', 'For the accountant']],
});

const barcode = needPage({
  slug: 'jewellery-barcode-tagging-software',
  title: 'Jewellery Barcode & Tagging Software: Tags, Scan, Count | Jwero',
  description: 'Jewellery barcode and tagging software: design and print tags with barcode or QR, scan to bill at the live gold rate, count stock by scanning, and connect weighing scales.',
  eyebrow: 'Jewellery barcode and tagging software',
  h1: 'Tag every piece once. Scan it everywhere after that.',
  sub: 'Design and print jewellery tags, scan a piece to bill it at the live rate, and count the stock by scanning instead of by register. Weighing scales and print stations connect as devices.',
  wa: 'barcode',
  intro: ['One tag, from stock room to counter to stock count.', 'The tag identifies the piece. The price comes from today’s rate, so a tag never goes stale.'],
  cards: [
    { icon: 'layers', title: 'Tag templates', text: 'Lay out your own jewellery tag with barcode or QR, weight, purity and HUID, and reuse the template.' },
    { icon: 'receipt', title: 'Label printing with a trail', text: 'Print tags for a piece or a batch. Each print is recorded, so a reprint is never a mystery.' },
    { icon: 'store', title: 'Scan to bill', text: 'Scan the tag at the counter and the piece is priced at this minute’s rate with your making rule.', link: { href: '/products/pos', label: 'The counter' } },
    { icon: 'box', title: 'Stock count by scanning', text: 'Count a tray or a whole shop by scanning. What is missing and what is extra shows up as a variance.', link: { href: '/products/inventory', label: 'Inventory' } },
    { icon: 'camera', title: 'Scan with a phone', text: 'A phone camera reads the tag, so a second counter or an exhibition needs no extra scanner.' },
    { icon: 'scale', title: 'Scales and print stations', text: 'Weighing scales and print stations connect as devices, charged per connected device.', link: { href: '/pricing', label: 'Device pricing' } },
  ],
  rows: [
    { lever: 'TAGS', before: 'Price written on the tag by hand and wrong the moment the rate moves.', after: 'The tag carries the identity. The price is worked out when it is scanned.' },
    { lever: 'BILLING', before: 'Weight and purity typed in at the counter for every piece.', after: 'One scan fills the bill.' },
    { lever: 'COUNTING', before: 'A stock count that shuts the shop for a day.', after: 'Scan tray by tray and see the variance as you go.' },
    { lever: 'REPRINTS', before: 'Nobody knows who reprinted a tag or why.', after: 'Every print is on the record.' },
  ],
  notYet: 'Jwero does not sell tag printers or scales, and does not support RFID today. It connects to devices you buy; ask us which models are supported before you order hardware.',
  faqs: [
    { q: 'Does Jwero support RFID for jewellery?', a: 'No, not today. Jwero uses barcode or QR tags: print them from the record, scan to bill, and count stock by scanning, showcase by showcase.' },
    { q: 'Can I print my own jewellery tags?', a: 'Yes. You design a tag template with barcode or QR and the fields you want, and print for a single piece or a batch.' },
    { q: 'Does the barcode hold the price?', a: 'No, and that is deliberate. The tag identifies the piece; the price is calculated from the live rate at the moment of scanning.' },
    { q: 'Can I count stock with a phone?', a: 'Yes. A phone camera can scan tags, which is enough for a small shop or an exhibition counter.' },
  ],
  links: [['/products/inventory', 'Inventory and stock management'], ['/products/pos', 'Jewellery POS software'], ['/blog/huid-hallmarking-records-audit-checklist', 'HUID records checklist'], ['/roles/inventory-manager', 'For the inventory manager']],
});

const cloud = needPage({
  slug: 'cloud-jewellery-software',
  title: 'Cloud Jewellery Software: Online, on Any Phone or Computer | Jwero',
  description: 'Cloud-based jewellery software that runs in the browser on a computer, tablet or phone: nothing to install on a server, every branch on the same live data, your own isolated database and export any time.',
  eyebrow: 'Cloud jewellery software',
  h1: 'Online jewellery software that works on any phone or computer.',
  sub: 'Nothing to install on a server and no backup drive to remember. Open it in a browser at the counter, at home or at an exhibition, and every branch sees the same live numbers.',
  wa: 'cloud',
  intro: ['The whole business, wherever you are.', 'One login from any device. The owner sees today’s sales, stock and cash without calling the shop.'],
  cards: [
    { icon: 'store', title: 'Runs in the browser', text: 'Works on a computer, tablet or phone. It can be added to the phone’s home screen like an app, with no app store download.' },
    { icon: 'branches', title: 'Every branch, live', text: 'A sale at one branch is off the stock at every branch at once.', link: { href: '/products/multi-store', label: 'Multi-store' } },
    { icon: 'shield', title: 'Your own database', text: 'Each business runs in its own isolated database, with roles and permissions per person.', link: { href: '/trust/security', label: 'Security' } },
    { icon: 'box', title: 'Export any time', text: 'Your data is yours. Export all of it whenever you want.' },
    { icon: 'users', title: 'Staff on their own phones', text: 'Attendance, leave and payslips are on each employee’s phone, and karigars see their own account.', link: { href: '/products/hr-payroll', label: 'HR and payroll' } },
    { icon: 'pie', title: 'The owner’s view', text: 'Sales, stock, cash and pending work on one dashboard, from anywhere.', link: { href: '/products/reports', label: 'Reports' } },
  ],
  rows: [
    { lever: 'ACCESS', before: 'The software lives on one computer in the shop.', after: 'Open it from any device with your login.' },
    { lever: 'BRANCHES', before: 'Each branch has its own copy and sends a report at night.', after: 'Every branch works on the same live data.' },
    { lever: 'BACKUP', before: 'A pen drive, if somebody remembered.', after: 'Nothing to back up by hand; export whenever you like.' },
    { lever: 'UPDATES', before: 'A technician visits to install the new version.', after: 'Updates arrive on their own.' },
  ],
  notYet: 'Jwero needs an internet connection, and there is no separate app in the Play Store or App Store; it is used through the browser. Product screens are in English today, with an early Hindi version on karigar screens.',
  faqs: [
    { q: 'Is there a mobile app?', a: 'Jwero runs in the phone’s browser and can be added to the home screen like an app. There is no separate download from an app store.' },
    { q: 'Is my data safe online?', a: 'Each business has its own isolated database, with roles and permissions for every person and an audit trail of what was changed. See the security page for what is in place and which certificates are not held yet.' },
    { q: 'Does it work without internet?', a: 'It needs a connection. If your shop’s line is unreliable, tell us before you start so we can advise honestly.' },
    { q: 'Can I get my data out?', a: 'Yes. You can export everything, any time.' },
  ],
  links: [['/trust/security', 'Security'], ['/products/multi-store', 'Multi-store jewellery software'], ['/migration', 'Migration Centre'], ['/platform/onboarding', 'Onboarding']],
});

// ---------------------------------------------------------------- tool landing pages
// One page for each cluster of tools jewellers search for by name, where the
// product page covers several at once and cannot rank for each phrase.
// WhatsApp marketing (address kept as /whatsapp-broadcast-for-jewellers so links hold).
// One-to-many: broadcasts, campaigns, triggers. One-to-one selling lives on /products/whatsapp.
const MKT_STEPS = [
  ['Audience', 'Bridal buyers from 2025 and their families · 1,240 customers'],
  ['Consent checked', '1,180 agreed to hear from you · 60 skipped'],
  ['Template approved', 'Akshaya Tritiya: new bridal sets, with catalogue buttons'],
  ['Scheduled', 'Tomorrow 11 am, outside quiet hours'],
  ['Sent and read', '1,180 delivered · 1,010 read'],
  ['Replies to the inbox', '146 replies, each on the customer’s record'],
  ['Follow-through', 'Unanswered interest gets an AI call at ₹7'],
  ['Traced to sales', 'Visits booked and bills linked to this send'],
];
const mktStory = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">CAMPAIGN · AKSHAYA TRITIYA</p>${MKT_STEPS.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative figures.</p></div>
  <ol class="wa-steps">${MKT_STEPS.map(([t]) => `<li><b>${t}</b></li>`).join('')}</ol>
</div>`;
const MKT_CMP = [
  ['Official WhatsApp Business Platform', 'No, a paired phone', 'Yes', 'Yes, on your own number'],
  ['Number-ban risk', 'High', 'Low', 'Low: consent, limits and quiet hours built in'],
  ['Audience', 'The whole contact list', 'Uploaded lists', 'Live segments from purchases, schemes, occasions'],
  ['Messages with today’s prices', 'No', 'No', 'Catalogue cards priced at today’s rate'],
  ['Replies', 'One phone', 'An inbox', 'Team inbox, on the customer record'],
  ['Follow-up for silent customers', 'No', 'Some', 'Automatic, including AI calls at ₹7'],
  ['Sales traced to the send', 'No', 'Clicks', 'Bills linked to the campaign'],
];
const mktTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Unofficial bulk tools</th><th>Generic API tools</th><th>Jwero</th></tr></thead><tbody>${MKT_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const MKT_HOW = [
  ['Choose who it is for', 'A live segment: scheme members due, bridal buyers, customers quiet for a year, one city.'],
  ['Write and approve the message', 'Use a ready template or write your own; Meta approves it. Add catalogue cards, buttons or a form.'],
  ['Pick the time', 'Schedule outside quiet hours. Customers who heard from you recently are skipped.'],
  ['Send and answer', 'Replies land in the team inbox on each customer’s record, with a priced reply sent automatically.'],
  ['Follow up and measure', 'Silent interest gets a follow-up message or AI call; visits and bills are traced to the send.'],
];
const mktFaqs = [
  { q: 'What is WhatsApp marketing for jewellers?', a: 'WhatsApp marketing means sending offers, launches, festival campaigns and reminders to many customers on WhatsApp, from your official business number, to people who agreed to hear from you, and following up the replies. Selling to one customer in a chat is WhatsApp commerce.' },
  { q: 'What is the difference between WhatsApp marketing and WhatsApp commerce?', a: 'Marketing is one to many: broadcasts, campaigns and reminders. Commerce is one to one: a customer asks, sees pieces at today’s rate and pays in the chat. Jwero does both on the same number and the same customer record.' },
  { q: 'How do jewellers send WhatsApp broadcasts without getting banned?', a: 'Use the official WhatsApp Business Platform with approved templates, send only to customers who agreed, honour opt-outs at once, limit how often each customer hears from you, and avoid quiet hours. Unofficial bulk tools on a paired phone are what get numbers banned.' },
  { q: 'How many customers can I broadcast to?', a: 'WhatsApp sets a daily limit per number that rises as your quality rating holds. Sending to people who want the message keeps the rating high and the limit rising.' },
  { q: 'What does a WhatsApp marketing message cost?', a: 'Meta charges per marketing message; Jwero passes it through at cost from a prepaid wallet, at the rate on the pricing page. Utility messages like order and payment updates cost less, and replies inside a customer’s 24-hour window are not charged.' },
  { q: 'What should a jeweller send on WhatsApp?', a: 'Festival and launch offers, new collections, scheme reminders, birthday and anniversary greetings, rate alerts on saved pieces, and order, payment and ready-for-collection updates. Send to the customers each message is for, not the whole list.' },
  { q: 'Can I keep my existing WhatsApp number?', a: 'Yes. Your shop’s number moves onto the official platform, so customers see the same number.' },
  { q: 'Can marketing messages trigger automatically?', a: 'Yes. Triggers send messages when an order is confirmed, a payment arrives, a piece is ready, a scheme instalment falls due, or a birthday or anniversary approaches.' },
];

const broadcast = {
  slug: 'whatsapp-broadcast-for-jewellers',
  title: 'WhatsApp Marketing for Jewellers: Broadcasts, Campaigns | Jwero',
  description: 'WhatsApp marketing for jewellers on the official WhatsApp Business Platform: broadcasts and festival campaigns to live segments, triggers, approved templates, number health, replies in one inbox and sales traced to each send.',
  breadcrumbs: [['Home', '/'], ['Jewellery software in India', '/jewellery-software-india'], ['WhatsApp marketing for jewellers']],
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Jwero WhatsApp Marketing for Jewellers', alternateName: ['WhatsApp broadcast software for jewellers', 'WhatsApp campaigns for jewellery stores'],
    applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://jwero.ai/whatsapp-broadcast-for-jewellers',
    description: 'WhatsApp marketing for jewellers on the official WhatsApp Business Platform: broadcasts and campaigns to live customer segments, triggered messages, approved templates with catalogue cards, consent and number health, a team inbox for replies, AI-call follow-up and sales traced to each send.',
    isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to run a WhatsApp marketing campaign for a jewellery shop', step: MKT_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  faqs: mktFaqs,
  body: `
${L.hero({ eyebrow: 'WHATSAPP MARKETING · OFFICIAL WHATSAPP BUSINESS PLATFORM', h1: 'WhatsApp marketing for jewellers: broadcasts and campaigns that sell, without risking your number.', sub: 'Festival offers, new collections, scheme reminders and occasion greetings, sent from your official number to the customers each message is for. Replies land in one inbox, silent interest gets followed up, and every sale is traced to the send.', primary: { href: '#', label: 'Plan my next campaign with us', wa: 'broadcast' } })}

${L.section(`<div class="which-page"><p><b>Reaching many customers?</b> You are on the right page: WhatsApp marketing.</p><p><b>Selling to one customer in a chat,</b> with catalogue, payment and calls? <a href="/products/whatsapp">See WhatsApp commerce and API →</a></p></div>`)}

${L.section(`${L.sectionHead('ONE CAMPAIGN, START TO FINISH', 'From an audience to a bill.', '')}${mktStory()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE NUMBER', 'What WhatsApp marketing for a jewellery shop has to do.', '')}<div class="wa-jobs">
  <article><h3>1. The right audience</h3><p>Live segments from your records: scheme members due, bridal buyers and their families, customers quiet for a year, one city or one branch.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>2. Festival and occasion campaigns</h3><p>Akshaya Tritiya, Dhanteras, Diwali, wedding season, launches, plus birthdays and anniversaries that send themselves before the date.</p><a href="/products/campaigns">Campaigns →</a></article>
  <article><h3>3. Triggers and notifications</h3><p>Order confirmed, payment received, piece or repair ready, scheme instalment due, a rate drop on a saved piece: sent the moment it happens.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>4. Messages that sell</h3><p>Approved templates with catalogue cards priced at today’s rate, buttons, and WhatsApp forms for visits and scheme enrolment.</p><a href="/whatsapp-templates-for-jewellery-customers">50 templates →</a></article>
  <article><h3>5. Your number kept healthy</h3><p>Consent recorded, opt-outs honoured at once, limits on how often each customer hears from you, and quiet hours.</p><a href="/blog/whatsapp-business-api-pricing">How WhatsApp pricing works →</a></article>
  <article><h3>6. Replies, follow-up and results</h3><p>Replies in a team inbox with a priced answer sent automatically, silent interest followed up by message or an AI call at ₹7, and bills traced to each send.</p><a href="/ai-calling-for-jewellers">AI calling →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What one campaign can return.', 'Your numbers, not ours.')}<div class="callc" data-mktc>
  <div class="callc-in">
    <label>Customers messaged<input type="number" inputmode="numeric" data-mc="sent" value="1000" min="0"></label>
    <label>Cost per marketing message, ₹<input type="number" inputmode="decimal" data-mc="cost" value="1.05" min="0" step="0.05"></label>
    <label>Who reply or show interest, %<input type="number" inputmode="decimal" data-mc="reply" value="10" min="0" max="100"></label>
    <label>Interested who buy, %<input type="number" inputmode="decimal" data-mc="buy" value="15" min="0" max="100"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-mc="bill" value="40000" min="0" step="1000"></label>
    <label>Your margin, %<input type="number" inputmode="decimal" data-mc="margin" value="12" min="0" max="100"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Campaign cost</span><b data-mc-o="cost">₹0</b></p>
    <p><span>Customers who buy</span><b data-mc-o="buyers">0</b></p>
    <p><span>Sales from the campaign</span><b data-mc-o="sales">₹0</b></p>
    <p class="callc-save"><span>Margin after the cost</span><b data-mc-o="net">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs, not a promise. The message cost defaults to the marketing rate on the pricing page.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Bulk tools, generic API tools, or Jwero.', '')}${mktTable()}`)}

${L.section(`${L.sectionHead('YOUR FESTIVAL CALENDAR', 'Campaign guides for the year’s biggest moments.', '')}<div class="erp-map">${[['/akshaya-tritiya-whatsapp-campaigns-for-jewellers', 'Akshaya Tritiya campaigns'], ['/diwali-whatsapp-campaigns-for-jewellers', 'Diwali campaigns'], ['/wedding-season-whatsapp-campaigns-for-jewellers', 'Wedding season campaigns'], ['/whatsapp-broadcast-ideas-for-jewellery-stores', 'Broadcast ideas'], ['/whatsapp-marketing-for-jewellers', 'WhatsApp marketing guide'], ['/blog/birthday-anniversary-marketing-jewellers', 'Birthday and anniversary marketing']].map(([h, t]) => `<a href="${h}"><b>${t}</b><span>Guide</span></a>`).join('')}</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('HOW TO RUN A CAMPAIGN', 'How to run a WhatsApp marketing campaign for a jewellery shop.', 'Five steps.')}${L.steps(MKT_HOW.map(([title, text]) => ({ title, text })))}`)}

${L.ctaBand('Plan your next campaign with us.', 'Tell us the occasion and who it is for. We will show the segment, the message and the follow-up in Jwero.', 'broadcast')}
`,
};

const instagram = needPage({
  slug: 'instagram-for-jewellers',
  title: 'Instagram for Jewellers: DMs, Comments, Reels and Stories | Jwero',
  description: 'Instagram software for jewellers: every DM, comment, Reel and Story reply in one shared inbox, a priced answer sent from your catalogue, posts scheduled across channels, and each enquiry kept on the customer’s record.',
  eyebrow: 'Instagram for jewellers',
  h1: 'Instagram brings the enquiries. This is how they become sales.',
  sub: 'DMs, “price?” comments, Reel and Story replies in one inbox, each with a priced reply sent from your catalogue and a follow-up that does not get forgotten.',
  wa: 'instagram',
  intro: ['Everything Instagram sends you, answered from one place.', 'The post is the easy part. The reply is where the sale is.'],
  cards: [
    { icon: 'camera', title: 'DMs in a shared inbox', text: 'The whole team answers from one place; nothing lives on one phone.', link: { href: '/products/instagram-facebook', label: 'Instagram and Facebook' } },
    { icon: 'chat', title: 'Comments to private replies', text: 'A public “price?” comment is moved to a private message with the price.' },
    { icon: 'video', title: 'Reels and Stories', text: 'Scheduled with your other posts; every reply they bring arrives as an enquiry.' },
    { icon: 'book', title: 'Priced from your catalogue', text: 'Replies go out automatically at today’s gold rate. You choose which need approval.' },
    { icon: 'record', title: 'On the customer’s record', text: 'The person asking today may have bought last year. The reply knows it.', link: { href: '/products/crm', label: 'CRM' } },
    { icon: 'megaphone', title: 'Posts on every channel', text: 'Write once and schedule to Instagram, Facebook, YouTube, Pinterest, LinkedIn and X.', link: { href: '/products/social-media', label: 'Social media' } },
  ],
  rows: [
    { lever: 'DMs', before: 'Answered late, or by an intern who has since left.', after: 'One inbox, an automatic reply, approval only where you want it.' },
    { lever: 'COMMENTS', before: 'Two hundred “price?” comments under a Reel, unanswered.', after: 'Each one moved to a private, priced reply.' },
    { lever: 'FOLLOW-UP', before: 'She asked, you answered, she went quiet, nobody wrote again.', after: 'A follow-up goes out on schedule.' },
    { lever: 'MEMORY', before: 'Instagram does not know she bought bangles last year.', after: 'Her record does.' },
  ],
  notYet: 'Jwero does not shoot or edit Reels for you, and it cannot message someone on Instagram who has not written to you first; that is Instagram’s rule.',
  faqs: [
    { q: 'How do jewellers manage Instagram DMs?', a: 'By moving them off a single phone into a shared inbox, so any team member can answer and every conversation is kept on the customer’s record.' },
    { q: 'How do I reply to price comments on Instagram?', a: 'Reply privately. Jwero moves a public “price?” comment into a direct message with a priced reply from your catalogue at today’s rate.' },
    { q: 'How do jewellers get sales from Instagram Reels?', a: 'By answering what the Reel brings. The views are not the sale; the comment or message answered within minutes with a real price is.' },
    { q: 'Do I need a separate tool for Facebook?', a: 'No. Facebook messages and comments arrive in the same inbox.' },
  ],
  links: [['/products/instagram-facebook', 'Instagram and Facebook'], ['/products/social-media', 'Social media management'], ['/solutions/pain/lead-leakage', 'Lost enquiries'], ['/products/ai-sales-agents', 'AI replies']],
});

const adsLanding = needPage({
  slug: 'ads-for-jewellers',
  title: 'Google and Instagram Ads for Jewellers | Jwero',
  description: 'Ads software for jewellers: build Google Search, Performance Max and Shopping campaigns and Meta and Instagram ads from one place, approve before any spend, get budget alerts, and see which ad led to a sale.',
  eyebrow: 'Ads for jewellers',
  h1: 'Google and Instagram ads for jewellers, with your hand on the budget.',
  sub: 'Build campaigns for Google and Meta from one place, approve before a rupee is spent, and see which ad brought the customer who actually bought.',
  wa: 'ads',
  intro: ['From the ad to the bill, on one record.', 'An ad that brings an enquiry nobody answers is money spent twice.'],
  cards: [
    { icon: 'megaphone', title: 'Google Ads', text: 'Search, Performance Max and Shopping campaigns, built in a guided flow and published to Google.', link: { href: '/products/ads-manager', label: 'Ads Manager' } },
    { icon: 'camera', title: 'Meta and Instagram ads', text: 'Standard and Advantage+ campaigns and lead forms, published to Meta once approved.' },
    { icon: 'check', title: 'Approval before spend', text: 'Every campaign passes an approval step. Nobody spends the budget by accident.' },
    { icon: 'trend', title: 'Budget alerts', text: 'Spend is watched, and a campaign nearing its limit is flagged.' },
    { icon: 'users', title: 'Audiences from your customers', text: 'Build audiences from your own segments, not guesses.', link: { href: '/products/segmentation', label: 'Segmentation' } },
    { icon: 'pie', title: 'Which ad sold', text: 'The enquiry, the conversation and the bill are tied back to the ad.' },
  ],
  rows: [
    { lever: 'SET-UP', before: 'Three ad consoles, each with its own way of working.', after: 'One guided flow for all of them.' },
    { lever: 'CONTROL', before: 'An agency or a staff member spends, and you see the bill.', after: 'You approve each campaign and get an alert before it overspends.' },
    { lever: 'ENQUIRIES', before: 'The ad works, the message arrives at 10pm, nobody replies.', after: 'A priced reply goes out automatically.' },
    { lever: 'RESULT', before: 'Clicks and impressions.', after: 'Sales, by ad.' },
  ],
  notYet: 'Jwero does not write your ad headlines and text for you today; you enter them in the campaign wizard, and the AI suggests where a campaign is under-performing. Pinterest publishing is still rolling out. Ad spend is paid to Google and Meta, not to Jwero.',
  faqs: [
    { q: 'Do Google Ads work for jewellery shops?', a: 'They work for people already searching, such as “gold bangles near me”, provided the enquiry is answered quickly. Search and Shopping campaigns suit jewellers best.' },
    { q: 'How do I run Instagram ads for my jewellery shop?', a: 'Choose the pieces, the audience and the budget in the campaign wizard, approve it, and Jwero publishes it to Meta. Replies to the ad arrive in your shared inbox.' },
    { q: 'How much should a jewellery shop spend on ads?', a: 'There is no one figure. Start small, measure which ad produces bills, not clicks, and raise the budget on what sells.' },
    { q: 'Can I advertise my jewellery shop on ChatGPT?', a: 'Advertising inside AI assistants is new. Ask us about its status for your account before planning a budget around it.' },
  ],
  links: [['/products/ads-manager', 'Ads Manager'], ['/products/optimize', 'Website analytics'], ['/products/instagram-facebook', 'Instagram and Facebook'], ['/instagram-for-jewellers', 'Instagram for jewellers']],
});

const smsLanding = needPage({
  slug: 'sms-marketing-for-jewellers',
  title: 'SMS, RCS & Push Notifications for Jewellers | Jwero',
  description: 'SMS, RCS and push notification software for jewellers: payment and order alerts, scheme reminders and offers sent from the same campaign as WhatsApp and email, with consent handled and results measured.',
  eyebrow: 'SMS, RCS and push for jewellers',
  h1: 'SMS, RCS and push notifications, from the same campaign as WhatsApp.',
  sub: 'Use each channel for what it is good at: SMS for the certain message, RCS for the rich one, push for the free one, WhatsApp for the conversation.',
  wa: 'sms',
  intro: ['One audience, the right channel for each message.', 'No separate tool, list or bill for each.'],
  cards: [
    { icon: 'chat', title: 'SMS', text: 'Payment received, order ready, instalment due: short messages that must arrive.', link: { href: '/products/campaigns', label: 'Campaigns' } },
    { icon: 'megaphone', title: 'RCS', text: 'Messages with images and buttons in the phone’s own messaging app, where it is supported.' },
    { icon: 'sparkle', title: 'Push notifications', text: 'Free to send to visitors who opted in on your website or app.', link: { href: '/products/optimize', label: 'Optimize' } },
    { icon: 'shield', title: 'Consent in one place', text: 'A customer’s choices for each channel are kept on her record and respected.' },
    { icon: 'route', title: 'In journeys too', text: 'An instalment reminder can go by WhatsApp first and SMS if it is not read.', link: { href: '/products/journeys', label: 'Journeys' } },
    { icon: 'pie', title: 'Measured together', text: 'One report for the campaign across every channel.' },
  ],
  rows: [
    { lever: 'TOOLS', before: 'An SMS panel, a WhatsApp tool and an email tool, each with its own list.', after: 'One audience, one campaign.' },
    { lever: 'CONSENT', before: 'Nobody is sure who opted out of what.', after: 'Preferences per channel on each record.' },
    { lever: 'REMINDERS', before: 'Scheme reminders sent by hand, when someone remembers.', after: 'Sent on schedule for every instalment.' },
    { lever: 'COST', before: 'Paying for messages nobody reads.', after: 'The cheapest channel that gets read.' },
  ],
  notYet: 'SMS in India needs sender and template registration under the telecom rules, which you complete once. RCS reaches only phones and networks that support it. Messages are charged per message at the rate shown in your accounts.',
  faqs: [
    { q: 'Does SMS marketing still work for jewellers?', a: 'For short, certain messages, yes: payment received, order ready, instalment due. For offers and conversations, WhatsApp usually gets more response.' },
    { q: 'What is RCS messaging for a jewellery shop?', a: 'RCS is the richer successor to SMS: images, buttons and a verified business name inside the phone’s messaging app. It works on supported phones and networks.' },
    { q: 'Do push notifications work for jewellery stores?', a: 'They work for people who opted in on your website or app, and cost nothing per message. They suit new collections and rate alerts.' },
    { q: 'Which channel should I use?', a: 'WhatsApp for conversation, SMS for certainty, push for free reach, email for detail. One campaign can use all four.' },
  ],
  links: [['/products/campaigns', 'Campaigns'], ['/whatsapp-broadcast-for-jewellers', 'WhatsApp broadcasts'], ['/products/journeys', 'Customer journeys'], ['/pricing', 'Message rates']],
});

const footfall = needPage({
  slug: 'jewellery-showroom-footfall-counting',
  title: 'Footfall Counting & Walk-in Tracking for Jewellery Showrooms | Jwero',
  description: 'Footfall counting and walk-in tracking for jewellery showrooms: tablet check-in or camera counting through IP cameras, a live view of the floor, what each visitor tried, why they left, and conversion by store and salesperson.',
  eyebrow: 'Showroom footfall and walk-in tracking',
  h1: 'Know who walked in, what they tried, and why they left.',
  sub: 'Count footfall, record each visit and see conversion by store and salesperson, so a walk-out becomes a follow-up, not a mystery.',
  wa: 'footfall',
  intro: ['The highest-intent moment in the business, on record.', 'Most shops remember a visit only if it ended in a bill.'],
  cards: [
    { icon: 'store', title: 'Walk-in register', text: 'A tablet check-in at the entrance, with consent, replaces the paper register.', link: { href: '/products/showroom', label: 'Showroom' } },
    { icon: 'eye', title: 'Camera counting', text: 'Connect showroom IP cameras through a small store-side device to count footfall, charged per camera. It counts visitors; it does not recognise faces or repeat visitors.' },
    { icon: 'users', title: 'Live floor', text: 'Who is in the store now, and who is serving them.' },
    { icon: 'box', title: 'Shown, tried, bought', text: 'Scan a piece to log it as tried. See which pieces are tried often and rarely bought.' },
    { icon: 'chat', title: 'Walk-out follow-up', text: 'A message is drafted for those who left without buying, with the pieces they tried.' },
    { icon: 'pie', title: 'Conversion by store', text: 'Visits, conversion, busiest hours and reasons for leaving, by branch and salesperson.', link: { href: '/products/reports', label: 'Reports' } },
  ],
  rows: [
    { lever: 'FOOTFALL', before: 'A guess, or a tally mark on paper.', after: 'Counted, by hour and by day.' },
    { lever: 'VISITS', before: 'Nobody knows what she tried or why she left.', after: 'Each visit recorded on her record.' },
    { lever: 'WALK-OUTS', before: 'Lost the moment she leaves.', after: 'A follow-up drafted the same day.' },
    { lever: 'STAFF', before: 'Performance judged on bills alone.', after: 'Conversion of visits, by salesperson.' },
  ],
  notYet: 'Jwero does not sell cameras or tablets, and camera counting does not recognise faces or tell a repeat visitor from a new one. Photographs and camera counting need a notice to visitors and, where the law requires, their consent; that is the showroom’s duty.',
  faqs: [
    { q: 'How do I count footfall in my jewellery showroom?', a: 'Either check each walk-in in on a tablet at the entrance, or connect showroom IP cameras, through a store-side device, for automatic counting. Both give visits by hour and conversion to bills.' },
    { q: 'How do I record walk-in customers in a jewellery shop?', a: 'Enter the phone number at check-in. A returning customer’s history appears at once; a new one gets a record. What she tried and why she left are noted at check-out.' },
    { q: 'What is a good conversion rate for a jewellery showroom?', a: 'It varies by store and category, so compare your own stores, salespeople and months with each other. The useful number is the trend.' },
    { q: 'Is camera tracking legal?', a: 'Showrooms may use cameras, but visitors should be told, and personal data must be handled under the data protection law. Take advice for your own case.' },
  ],
  links: [['/ai-cctv-footfall-analytics-jewellery-showrooms', 'AI CCTV footfall analytics'], ['/products/showroom', 'Showroom software'], ['/products/crm', 'Jewellery CRM'], ['/trust', 'Trust Centre']],
});

// AI calling: rebuilt 2026-10-07 around bulk inbound and outbound voice AI agents,
// triggers and campaigns (confirmed by Jwero). Concurrency, per-minute rate and the
// exact language list are not stated until confirmed.
const CALL_LINES = [
  ['ai', 'Jwero voice agent', 'Namaste Sunita ji, Jwero se, Shree Jewellers ki taraf se. Aapki gold scheme ki kist kal due hai.'],
  ['in', 'Customer', 'Haan, kal bhar dungi. Link bhej do.'],
  ['ai', 'Jwero voice agent', 'Ji, WhatsApp par payment link bhej rahi hoon. Kuch aur madad?'],
  ['in', 'Customer', 'Naya mangalsutra dekhna hai, Saturday aa sakti hoon?'],
  ['ai', 'Jwero voice agent', 'Saturday 5 baje ka slot book kar diya. Dhanyavaad!'],
];
const callCard = () => `<div class="call-demo" data-call-demo>
  <div class="call-card" aria-hidden="true">
    <div class="call-top"><span class="call-dot"></span><b>Outbound · scheme reminder</b><i data-call-time>00:00</i></div>
    <div class="call-wave">${Array.from({ length: 28 }, (_, k) => `<span style="--k:${k}"></span>`).join('')}</div>
    <div class="call-lines">${CALL_LINES.map(([who, name, line], k) => `<p class="call-line is-${who}" data-k="${k}"><small>${name}</small>${line}</p>`).join('')}</div>
    <div class="call-out"><span>Outcome</span><b>Payment link sent on WhatsApp ✓</b><b>Visit booked, Saturday 5 pm ✓</b><em>Written to Sunita’s record</em></div>
  </div>
  <div class="call-funnel"><p class="in-short-tag">A reminder campaign, illustrated</p>
    ${[['Members due this week', 500, 100], ['Calls answered', 412, 82], ['Paid or promised', 296, 59], ['Visits booked', 61, 12]].map(([l, n, w]) => `<div class="call-bar"><span>${l}</span><i style="--w:${w}%"></i><b>${n}</b></div>`).join('')}
    <p class="cta-note">Illustrative figures to show how a campaign reads, not results from a customer.</p></div>
</div>`;

const CALL_CMP = [
  ['Calls at once', 'One per person', 'Many', 'Up to 8 at once, inbound and outbound'],
  ['Hours', 'Shop hours', 'Any time', 'Any time, 24×7'],
  ['Time to answer a question about stock or a balance', 'Minutes to hours, 2 to 3 people', 'Cannot answer', 'Seconds, no one else needed'],
  ['Cost per call', 'Staff time of 2 to 3 people', 'Low', '₹7 a call'],
  ['Sounds like', 'Your staff', 'A recording', 'A natural voice in the customer’s language'],
  ['Understands replies', 'Yes', 'Press 1 or 2', 'Yes, spoken answers'],
  ['Knows the customer', 'If they remember', 'No', 'Purchases, scheme balance, last visit'],
  ['Follows through on WhatsApp', 'Sometimes', 'No', 'Payment link, catalogue or booking, automatically'],
  ['Record of the call', 'Rarely', 'A log', 'Transcript and summary on the customer record'],
  ['Hands over to a person', 'n/a', 'Rarely', 'Yes, with what was said'],
];
const callTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Human telecaller</th><th>IVR or robocall</th><th>Jwero voice AI</th></tr></thead><tbody>${CALL_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;

const CALL_SETUP = [
  ['Connect a telephony line', 'Link a number from your telephony provider. Calls run over this line and are charged per minute.'],
  ['Choose what the agent may do', 'Answer questions, book visits, send links, remind about dues. Set daily caps, calling hours and when to hand over to a person.'],
  ['Write the scripts in your words', 'Greeting, reminder and invitation scripts, in the languages your customers speak. Jwero drafts them with you.'],
  ['Set triggers and campaigns', 'Calls that place themselves (instalment due, payment failed, piece ready) and campaigns to segments you choose.'],
  ['Go live and review', 'Watch answered, paid and booked numbers, read transcripts, and adjust. One switch stops all calling.'],
];

const callFaqs = [
  { q: 'What is AI calling?', a: 'AI calling means a voice AI agent makes and answers phone calls for a business: it speaks naturally, understands spoken replies, follows a script and the rules you set, and records the outcome. For jewellers that means scheme reminders, follow-ups, invitations and answering enquiries without a team of telecallers.' },
  { q: 'What is a voice AI agent?', a: 'A voice AI agent is software that holds a real phone conversation: it listens, understands, answers from what it knows about the customer and your shop, takes actions like booking a visit or sending a payment link, and hands over to a person when needed.' },
  { q: 'Can AI make bulk calls to customers?', a: 'Yes. Jwero handles up to 8 calls at the same time, inbound and outbound. It runs calling campaigns in bulk, for example every scheme member whose instalment is due this week, and answers several callers at once so nobody gets a busy tone in the festival rush.' },
  { q: 'Can AI answer calls for my jewellery shop?', a: 'Yes. The voice agent answers rate, timing, stock and order questions, books visits, and passes the call to a person with a summary when the customer needs one, including after hours.' },
  { q: 'Can calls happen automatically when something happens?', a: 'Yes. Triggers place calls on events such as an instalment falling due, a failed payment, an unanswered WhatsApp message or a repair being ready. If a call is not answered, a WhatsApp message can follow.' },
  { q: 'Which languages does the voice agent speak?', a: 'The phone agent speaks 14 languages: Hindi, English, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia, Arabic, Spanish and French, so each customer can be called in the language they speak at home.' },
  { q: 'Is AI calling legal in India?', a: 'Calls to your own customers about their account, such as scheme reminders, are treated differently from promotional calls. Promotional calls must follow TRAI’s rules on registration, consent and do-not-disturb preferences. Confirm your setup with your advisor before calling at scale.' },
  { q: 'How much does AI calling cost?', a: 'The AI agent costs ₹7 a call, all inclusive: the AI, the voice and the phone line, from a prepaid wallet. A call handled by hand usually takes 2 to 3 people several minutes each, so ₹7 a call is far cheaper. It runs on Jwero One at ₹18,000 a month (first month ₹3,600), or let Jwero run the calling for you.' },
  { q: 'Why is an AI call faster than a person picking up?', a: 'When a person answers, they often have to ask 2 or 3 colleagues for the stock, the rate or the customer’s balance, then call back. The AI agent reads all of that from the customer’s record and the live catalogue, and answers, books or sends a link within seconds, at any hour.' },
  { q: 'Will the AI negotiate prices or give discounts?', a: 'No. Price negotiation and discounts go to a person. The agent works only inside the actions, caps and hours you allow, and one switch stops all calls.' },
];

const aiCalling = {
  slug: 'ai-calling-for-jewellers',
  title: 'AI Calling for Jewellers: Voice AI Agents, Bulk Calls | Jwero',
  description: 'AI calling for jewellers at ₹7 a call: voice AI agents handle up to 8 calls at once, inbound and outbound, 24×7, in 14 languages, with triggers, campaigns and every call on the record.',
  breadcrumbs: [['Home', '/'], ['Jewellery software in India', '/jewellery-software-india'], ['AI calling for jewellers']],
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Jwero AI Calling for Jewellers', alternateName: ['Jwero voice AI agents', 'AI telecaller for jewellers'],
    applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://jwero.ai/ai-calling-for-jewellers',
    description: 'Voice AI agents for jewellers: bulk inbound call answering, bulk outbound calling campaigns, event triggers, WhatsApp follow-through and transcripts on the customer record, in 14 languages.',
    isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{
    '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up AI calling for a jewellery shop',
    step: CALL_SETUP.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })),
  }],
  faqs: callFaqs,
  body: `
${L.hero({ eyebrow: 'AI CALLING FOR JEWELLERS', h1: 'AI calling for jewellers: voice AI agents for every call, in bulk.', sub: 'Up to 8 calls at once, inbound and outbound, 24×7, in the customer’s own language. The AI answers, checks stock, rates and balances, books visits and sends payment links within seconds, for ₹7 a call.', primary: { href: '#', label: 'Hear it on a call with us', wa: 'ai-calling' } })}

${L.section(`${L.sectionHead('THE CALLS NOBODY HAS TIME FOR', 'Hundreds of calls a month, and two people to make them.', '')}${L.cards([
  { title: 'Scheme reminders', text: 'Five hundred members, one due date each. A staff member calls forty, when free.' },
  { title: 'The festival rush', text: 'On Dhanteras the phone rings during every sale. Half the calls go unanswered.' },
  { title: 'Follow-ups that never happen', text: 'Enquiries, walk-outs and repairs ready for collection wait for someone to remember.' },
])}`)}

${L.section(`${L.sectionHead('ONE CALL, START TO FINISH', 'A reminder that ends in a payment and a visit.', 'What the customer hears, and what Jwero writes down.')}${callCard()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('ONE CALL, TWO WAYS', 'When a person picks up, and when the AI does.', 'A customer calls: “Do you have a 20 gram 22K bangle, what is today’s price, and how much is left on my scheme?”')}<div class="two-ways">
  <div class="tw tw-human"><p class="tw-tag">A person picks up</p><ol><li>Puts the customer on hold</li><li>Asks the stock room if the bangle is there</li><li>Asks accounts for the scheme balance</li><li>Checks today’s rate</li><li>Calls the customer back, if they are free</li></ol><p class="tw-out"><b>Minutes to hours · 2 to 3 people</b> Many customers hang up or buy elsewhere while waiting.</p></div>
  <div class="tw tw-ai"><p class="tw-tag">The AI picks up</p><ol><li>Knows the customer from the number</li><li>Checks the bangle in live stock</li><li>Reads today’s rate and the scheme balance</li><li>Quotes the price and books a visit</li><li>Sends photos and a payment link on WhatsApp</li></ol><p class="tw-out"><b>Seconds · nobody else needed</b> Day or night, 8 callers at a time.</p></div>
</div>
${callTable()}
<ul class="tw-gains"><li><b>Team time back</b> No one leaves a customer at the counter to chase an answer.</li><li><b>Happier customers</b> An answer now, not a call-back.</li><li><b>Fewer drop-outs</b> No hold music, no missed calls, no “I will call you back”.</li><li><b>24×7 sales and support</b> Enquiries at 11 pm become visits and payments.</li></ul>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What your calls cost today, and at ₹7 a call.', 'Change the numbers to match your shop.')}<div class="callc" data-callc>
  <div class="callc-in">
    <label>Calls a month (in and out)<input type="number" inputmode="numeric" data-cc="calls" value="1000" min="0"></label>
    <label>Minutes a person spends on the call<input type="number" inputmode="decimal" data-cc="talk" value="4" min="0"></label>
    <label>Colleagues they need to ask<input type="number" inputmode="decimal" data-cc="people" value="2" min="0" step="0.5"></label>
    <label>Minutes each colleague spends<input type="number" inputmode="decimal" data-cc="each" value="4" min="0"></label>
    <label>Monthly salary of the staff involved, ₹<input type="number" inputmode="numeric" data-cc="salary" value="20000" min="0" step="1000"></label>
    <label>Calls missed or dropped today, %<input type="number" inputmode="decimal" data-cc="missed" value="20" min="0" max="100"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Staff time on calls today</span><b data-cc-o="hours">0</b></p>
    <p><span>What that time costs today</span><b data-cc-o="manual">₹0</b></p>
    <p><span>The same calls with AI, at ₹7 a call</span><b data-cc-o="ai">₹0</b></p>
    <p class="callc-save"><span>Saved every month</span><b data-cc-o="save">₹0</b></p>
    <p><span>Calls you miss today that AI would answer</span><b data-cc-o="miss">0</b></p>
    <p class="cta-note">Staff cost is worked out on 26 days of 9 hours. ₹7 a call includes the phone line; your own phone bill for calls by hand is left out.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('YOUR WORRIES, ANSWERED', 'Everything jewellers ask before switching it on.', '')}${L.cards([
  { title: '“Will customers mind talking to AI?”', text: 'It speaks naturally, in their language, and gets them an answer in seconds. Anyone who wants a person is handed over at once.' },
  { title: '“What if it says something wrong?”', text: 'It only answers from your live stock, rates and customer records, and only takes the actions you allow. It never negotiates price.' },
  { title: '“Do I need new numbers or machines?”', text: 'No. It works on a phone line connected to Jwero. No hardware, nothing to install in the shop.' },
  { title: '“Is it expensive?”', text: '₹7 a call. A call handled by hand ties up 2 to 3 people. Use the calculator above with your own numbers.' },
  { title: '“Will it speak my customers’ language?”', text: 'Yes: Hindi, English, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi and Odia.' },
  { title: '“Can I stop it or check what it said?”', text: 'Every call is recorded as a transcript on the customer’s record. One switch stops all calling.' },
  { title: '“Is it allowed?”', text: 'Calls about a customer’s own account are fine. Promotional calls follow TRAI’s rules; we set this up with you.' },
  { title: '“How long to start?”', text: 'Days, not months: connect the line, choose what it may do, write the scripts with us, switch on.' },
], 4)}`)}

${L.section(`${L.sectionHead('OUTBOUND, IN BULK', 'Calling campaigns that run themselves, 8 calls at a time.', '')}<div class="wa-jobs">
  <article><h3>Scheme instalment reminders</h3><p>Every member whose instalment is due gets a call on the day, with a payment link on WhatsApp if they want one.</p><a href="/products/gold-schemes">Gold schemes →</a></article>
  <article><h3>Festival and wedding invitations</h3><p>Akshaya Tritiya, Dhanteras, a new bridal collection: invite a segment by call, then book their visit.</p><a href="/products/campaigns">Campaigns →</a></article>
  <article><h3>Win-backs and follow-ups</h3><p>Customers who have gone quiet, enquiries that did not buy, walk-outs from last week, called in their language.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>Ready, due and overdue</h3><p>“Your piece is ready”, “your repair is done”, “your payment is pending”: the calls that bring customers back to the counter.</p><a href="/products/repairs-service">Repairs →</a></article>
</div><p class="cta-note" style="margin-top:14px">Pays off first for <a href="/solutions/single-store">single showrooms</a> (reminders and invitations without a telecaller), <a href="/solutions/multi-store-chains">chains</a> (one calling team for every branch), <a href="/solutions/b2b-jewellery">wholesalers and manufacturers</a> (payment and karigar follow-ups) and families abroad, called at a sensible hour in their time zone.</p>`)}

${L.section(`${L.sectionHead('INBOUND, IN BULK', 'Every call answered, even in the rush.', '')}<div class="wa-jobs">
  <article><h3>Up to 8 calls at once</h3><p>Eight customers can call at the same time and all are answered, day or night, so nobody hears a busy tone on a festival morning.</p></article>
  <article><h3>Today’s rate, timings and stock</h3><p>The questions that fill the day, answered from your live rate, catalogue and stock.</p></article>
  <article><h3>Visits and video calls booked</h3><p>The agent books a showroom visit or a video call into the calendar and confirms on WhatsApp.</p></article>
  <article><h3>Handed over with context</h3><p>When the customer wants a person, the call goes to your team with a summary of what was said.</p></article>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('TRIGGERS AND CAMPAIGNS', 'Calls that place themselves.', '')}<div class="jb-blogline">
  <p><b>Triggers:</b> an instalment falling due, a failed payment, an unanswered WhatsApp message, a piece or repair ready, a customer’s anniversary. Each can place a call automatically, and if the call is not answered, a WhatsApp message follows.</p>
  <p><b>Campaigns:</b> choose a segment (scheme members due, customers who bought bridal last year, quiet customers in one city), a script, a language and a calling window. Watch answered, paid and booked as they happen.</p>
  <p><b>WhatsApp in the same flow:</b> the call and the chat share one record, so the payment link, catalogue or booking confirmation goes out the moment the customer says yes. <a href="/products/whatsapp">WhatsApp API for jewellers →</a></p></div>`)}

${L.section(`${L.sectionHead('HOW IT STAYS SAFE', 'Inside your rules, and the law’s.', '')}<div class="jb-blogline">
  <p><b>Your rules:</b> daily caps, calling hours, which actions the agent may take, and an approval queue for the actions you choose. One switch stops all calling.</p>
  <p><b>The law’s:</b> calls about a customer’s own account, such as reminders, are treated differently from promotional calls, which follow TRAI’s rules on registration, consent and do-not-disturb preferences. Tell customers calls are recorded. <a href="/blog/ai-calling-jewellers-scheme-reminders">Read the AI calling guide →</a></p>
  <p><b>What it will not do:</b> negotiate prices or give discounts. Those go to a person. Calls run over a telephony line you connect, from your telephony provider.</p></div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('HOW TO SET IT UP', 'How to set up AI calling for a jewellery shop.', 'Five steps, done with you.')}${L.steps(CALL_SETUP.map(([title, text]) => ({ title, text })))}`)}

${L.section(`${L.sectionHead('WHAT YOU PAY', '₹7 a call, all inclusive. That is the whole idea.', '')}<div class="jb-blogline"><p><b>AI calls:</b> ₹7 a call, all inclusive (the AI, the voice and the phone line), from a prepaid wallet you can see. <b>Platform:</b> Jwero One, ₹18,000 a month with every module, first month ₹3,600. <b>Or</b> <a href="/jewellery-business-as-a-service">let Jwero run the calling for you</a>, with every tool included.</p></div>`, { tone: 'tint' })}

${L.ctaBand('Hear it before you decide.', 'Message us and we will call you with the voice agent, in your language.', 'ai-calling')}
`,
};

const appointments = needPage({
  slug: 'jewellery-appointment-booking-software',
  title: 'Jewellery Appointment Booking Software | Jwero',
  description: 'Appointment booking software for jewellers: customers book a showroom or video visit against real availability, the shortlist is ready when they arrive, reminders go out, and every visit is on one calendar.',
  eyebrow: 'Appointment booking for jewellers',
  h1: 'Appointments customers can book themselves, on one calendar.',
  sub: 'Showroom visits, bridal trials and video viewings booked against real availability, with the shortlist ready and a reminder sent.',
  wa: 'appointments',
  intro: ['An appointment that arrives prepared.', 'The diary on the counter, replaced.'],
  cards: [
    { icon: 'calendar', title: 'Self-booking', text: 'A booking page that offers only real slots, with working hours, buffers and daily limits.', link: { href: '/products/meetings', label: 'Meetings' } },
    { icon: 'video', title: 'Video visits', text: 'Start a video call from WhatsApp or web chat, or let her book one.' },
    { icon: 'record', title: 'One calendar', text: 'Showroom, phone and video appointments together, with Google Calendar and Zoho Bookings.' },
    { icon: 'book', title: 'Shortlist attached', text: 'The pieces she asked about are ready before she arrives.' },
    { icon: 'chat', title: 'Reminders and no-shows', text: 'Reminders on her own channel, and a follow-up if she does not come.' },
    { icon: 'store', title: 'On the floor', text: 'Expected visits appear on the showroom’s live view.', link: { href: '/products/showroom', label: 'Showroom' } },
  ],
  rows: [
    { lever: 'BOOKING', before: 'A phone call and a note in a diary.', after: 'She books a real slot herself.' },
    { lever: 'PREPARATION', before: 'She arrives and starts from the beginning.', after: 'Her shortlist is on the counter.' },
    { lever: 'NO-SHOWS', before: 'Forgotten by both sides.', after: 'A reminder before, a follow-up after.' },
    { lever: 'DISTANCE', before: 'A buyer abroad waits until she visits.', after: 'A video viewing this week.' },
  ],
  notYet: 'Recording a video call is optional and shows a notice to everyone in the room. Jwero does not take payment for an appointment slot itself; advances are taken on a quotation or an order.',
  faqs: [
    { q: 'How do jewellers take appointments online?', a: 'With a booking page linked from WhatsApp, Instagram and the website that shows only the slots your team is actually free.' },
    { q: 'How do I manage showroom appointments on a calendar?', a: 'Every appointment, in person or on video, sits on one calendar alongside Google Calendar, with the customer and her shortlist attached.' },
    { q: 'How do I sell jewellery on a video call?', a: 'Start the call from the conversation, show the shortlisted pieces, and send a quotation she can accept on her phone.' },
    { q: 'Does it suit bridal trials?', a: 'Yes. Trials are booked with the pieces to prepare, and each visit is kept on the family’s record.' },
  ],
  links: [['/products/meetings', 'Video counter and appointments'], ['/solutions/bridal', 'Bridal jewellers'], ['/products/showroom', 'Showroom'], ['/products/quotations', 'Quotations']],
});

const staff = needPage({
  slug: 'jewellery-staff-management-software',
  title: 'Jewellery Staff Management Software | Jwero',
  description: 'Staff management software for jewellery showrooms: phone and kiosk attendance, daily task lists, sales targets, incentives worked out from real bills, hiring, training and payroll, on the same record as sales.',
  eyebrow: 'Jewellery staff management',
  h1: 'Attendance, tasks, targets and incentives for a jewellery team.',
  sub: 'Each person knows what to do today, sees what they earned, and the owner sees it without a register or a spreadsheet.',
  wa: 'staff',
  intro: ['The team, on the same record as the sales they made.', 'Incentives nobody has to argue about.'],
  cards: [
    { icon: 'users', title: 'Attendance', text: 'Punch in on a phone or a kiosk, with optional location and selfie checks.', link: { href: '/products/hr-payroll', label: 'HR and payroll' } },
    { icon: 'check', title: 'Daily tasks', text: 'A list for each person: follow-ups due, counts to do, visits expected.' },
    { icon: 'trend', title: 'Targets', text: 'Set by person and by branch, with progress visible daily.' },
    { icon: 'coins', title: 'Incentives from real bills', text: 'Worked out from the sales each person made, then paid through payroll.' },
    { icon: 'book', title: 'Training', text: 'Courses and assessments on hallmarking, exchange and schemes.', link: { href: '/products/training-lms', label: 'Training' } },
    { icon: 'receipt', title: 'Payroll and karigar wages', text: 'Salaries with PF and ESI, and wages by piece, weight, hour or day.' },
  ],
  rows: [
    { lever: 'ATTENDANCE', before: 'A register, copied into a sheet at month end.', after: 'Punched on a phone, straight into payroll.' },
    { lever: 'TASKS', before: 'Told in the morning, forgotten by noon.', after: 'A list each person works through.' },
    { lever: 'INCENTIVES', before: 'Argued at month end from memory.', after: 'Calculated from the bills.' },
    { lever: 'HIRING', before: 'CVs in WhatsApp chats.', after: 'A pipeline from application to onboarding.' },
  ],
  notYet: 'Payroll produces the bank file and statutory files, which your accountant uploads and files.',
  faqs: [
    { q: 'How do I track staff attendance in a jewellery shop?', a: 'Staff punch in on their own phone or a kiosk in the shop. Optional location and selfie checks confirm they are on site.' },
    { q: 'How do I calculate sales incentives in a jewellery shop?', a: 'Set the rule once and incentives are worked out from the bills each salesperson made, with no separate sheet.' },
    { q: 'How do I assign daily tasks to jewellery staff?', a: 'Each person gets a daily list built from what is due, and managers can add tasks and see them completed.' },
    { q: 'Does it cover karigars?', a: 'Yes. Karigar wages are settled by piece, weight, hour or day, with advances recovered.' },
  ],
  links: [['/products/hr-payroll', 'HR and payroll'], ['/jewellery-staff-management-software', 'Staff management'], ['/products/training-lms', 'Staff training'], ['/roles/store-manager', 'For the store manager'], ['/roles/sales-associate', 'For sales staff']],
});

const webAnalytics = needPage({
  slug: 'jewellery-website-analytics',
  title: 'Jewellery Website Analytics: Heatmaps, A/B | Jwero',
  description: 'Website analytics for jewellery stores: visitor tracking, funnels, heatmaps and session recordings, A/B tests, pop-ups and lead forms, and web push, so you see why visitors leave and catch the next one.',
  eyebrow: 'Jewellery website analytics',
  h1: 'See why visitors leave your jewellery website.',
  sub: 'Heatmaps, recordings, funnels and A/B tests on your own store, with lead forms and chat to catch the visitor before she goes.',
  wa: 'web-analytics',
  intro: ['What visitors actually do on a product page.', 'And what to change so more of them enquire.'],
  cards: [
    { icon: 'eye', title: 'Visitor tracking', text: 'Who came, from where, and who came back.', link: { href: '/products/optimize', label: 'Optimize' } },
    { icon: 'layers', title: 'Heatmaps and recordings', text: 'Where they tap, how far they scroll and where they give up.' },
    { icon: 'route', title: 'Funnels', text: 'Browse, enquire, order: see the step that loses people.' },
    { icon: 'check', title: 'A/B tests', text: 'Try two versions and keep the one that brings more enquiries.' },
    { icon: 'chat', title: 'Lead forms and pop-ups', text: 'An exit offer, a callback request or a custom order form, built without a developer.' },
    { icon: 'megaphone', title: 'Pixels and tags', text: 'Meta pixel, Google Analytics and Tag Manager connect to your store.', link: { href: '/products/ads-manager', label: 'Ads Manager' } },
  ],
  rows: [
    { lever: 'TRAFFIC', before: 'Visitors arrive from an ad and leave. Nobody knows why.', after: 'You watch what they did.' },
    { lever: 'CHANGES', before: 'Redesigns based on opinion.', after: 'Two versions tested on real visitors.' },
    { lever: 'LEADS', before: 'A visitor who does not chat is gone.', after: 'A form, a pop-up or push catches her.' },
    { lever: 'TOOLS', before: 'Separate tools for analytics, heatmaps, pop-ups and chat.', after: 'One, on the same record as the customer.' },
  ],
  notYet: 'Recordings hide typed personal details, and visitors should be told about tracking in your privacy notice. Optimize measures your own website; it does not measure marketplaces or social apps.',
  faqs: [
    { q: 'Why do visitors leave my jewellery website?', a: 'Usually no clear price, slow pages or no quick way to ask. Heatmaps and recordings show where they stopped; a chat or a form gives them a way to ask.' },
    { q: 'How do I A/B test my jewellery website?', a: 'Set up two versions of a page or a pop-up, split visitors between them, and compare enquiries and orders.' },
    { q: 'How do I see who visits my jewellery website?', a: 'Visitor tracking shows sources, returning visitors and locations. A visitor becomes a named person when she enquires, logs in or opts in.' },
    { q: 'Do I still need Google Analytics?', a: 'You can keep it; it connects. Optimize adds the recordings, heatmaps, tests and forms beside your customer records.' },
  ],
  links: [['/products/optimize', 'Optimize'], ['/products/ecommerce', 'Jewellery website builder'], ['/ads-for-jewellers', 'Ads for jewellers'], ['/products/ads-manager', 'Ads Manager']],
});

// ---------------------------------------------------------------- Hindi
const hi = {
  slug: 'hi',
  lang: 'hi',
  title: 'ज्वेलरी सॉफ्टवेयर: बिलिंग, स्टॉक, CRM और WhatsApp | Jwero',
  description: 'ज्वेलर्स के लिए सॉफ्टवेयर: लाइव सोने के भाव पर GST बिलिंग, स्टॉक, खरीद, कारीगर खाता, गोल्ड स्कीम, गिरवी, WhatsApp और हिसाब किताब, सब एक ही रिकॉर्ड पर। शुरुआत फ्री ट्रायल से।',
  breadcrumbs: [['Home', '/'], ['हिंदी']],
  faqs: [
    { q: 'क्या Jwero हिंदी में चलता है?', a: 'सपोर्ट और ट्रेनिंग हिंदी में मिलती है। सॉफ्टवेयर की स्क्रीन अभी अंग्रेज़ी में हैं, और कारीगर की स्क्रीन पर हिंदी का शुरुआती रूप उपलब्ध है।' },
    { q: 'कीमत क्या है?', a: 'एक ही प्लान, हर मॉड्यूल शामिल। शुरुआत फ्री ट्रायल से होती है, और ट्रायल पूरा होने पर आपकी कीमत आपके अकाउंट में दिखती है। हर महीने बिलिंग।' },
    { q: 'क्या Tally छोड़ना पड़ेगा?', a: 'नहीं। हर बिक्री, खरीद और भुगतान Jwero के अपने खाते में GST के साथ दर्ज होता है, और Tally या Zoho Books ब्रिज से आपके अकाउंटेंट तक पहुँच जाता है।' },
    { q: 'क्या AI ग्राहक को बिना पूछे मैसेज भेजेगा?', a: 'नहीं। AI जो भी लिखता है वह आपकी मंज़ूरी का इंतज़ार करता है। आप हाँ कहें, तभी भेजा जाता है।' },
  ],
  body: `
${L.hero({
  eyebrow: 'ज्वेलर्स के लिए सॉफ्टवेयर',
  h1: 'पूरी दुकान एक ही सिस्टम पर: काउंटर, स्टॉक, कारीगर, हिसाब और हर ग्राहक।',
  sub: 'लाइव सोने के भाव पर बिलिंग, स्टॉक, खरीद, कारीगर खाता, गोल्ड स्कीम, गिरवी, WhatsApp और हिसाब किताब, सब एक ही रिकॉर्ड पर। AI काम का मसौदा बनाता है, और आपकी हाँ के बिना कुछ नहीं भेजता।',
  primary: { href: '#', label: 'हमसे चैट या कॉल करें', wa: 'hindi' },
  secondary: { href: '/pricing', label: 'कीमत देखें' },
})}

${L.section(
  `${L.sectionHead('क्या बदलता है', 'पूरे कारोबार में, विभाग दर विभाग।', 'सिर्फ़ बिक्री नहीं। काउंटर, स्टॉक, खरीद, कारख़ाना, हिसाब और टीम, सब एक ही रिकॉर्ड पर चलते हैं।')}
  ${L.compareRows([
    { lever: 'ग्राहक', before: 'रात 11 बजे की पूछताछ सुबह तक इंतज़ार करती है। सेल्समैन जाता है तो ग्राहक भी साथ ले जाता है।', after: 'हर पूछताछ का भाव सहित जवाब मिनटों में तैयार। हर ग्राहक दुकान के अपने रिकॉर्ड पर।', link: { href: '/products/crm', label: 'CRM देखें' } },
    { lever: 'बिलिंग', before: 'भाव हाथ से लिखा, पुराने सोने का हिसाब कैलकुलेटर पर, दिन का हिसाब याद से।', after: 'स्कैन करें और लाइव भाव पर बिल बनाएँ: पुराना सोना, वापसी, GST और कैश क्लोज़ एक ही स्क्रीन पर।', link: { href: '/products/pos', label: 'काउंटर देखें' } },
    { lever: 'स्टॉक', before: 'जो डिज़ाइन नहीं बिक रहे उनमें पूँजी फँसी है, और स्टॉक की कीमत अंदाज़े से।', after: 'हर पीस आज के भाव पर। पुराना स्टॉक अलग दिखता है।', link: { href: '/products/inventory', label: 'स्टॉक देखें' } },
    { lever: 'खरीद', before: 'ऑर्डर फ़ोन पर, वेंडर का बकाया डायरी में।', after: 'ऑर्डर, माल की प्राप्ति, बिल और क्रेडिट नोट एक ही कड़ी में।', link: { href: '/products/purchase-vendors', label: 'खरीद देखें' } },
    { lever: 'कारख़ाना', before: 'सोना कारीगर को गया, कमी स्टॉक मिलान पर पता चली।', after: 'सोना शुद्ध ग्राम में दिया और लिया जाता है। हर चरण पर घटत तय सीमा से मिलाई जाती है।', link: { href: '/products/manufacturing', label: 'कारख़ाना देखें' } },
    { lever: 'हिसाब', before: 'अकाउंटेंट हर बिल दोबारा चढ़ाता है।', after: 'हर बिक्री, खरीद और भुगतान अपने आप दर्ज, GST के साथ। Tally और Zoho Books ब्रिज उपलब्ध।', link: { href: '/jewellery-accounting-software', label: 'हिसाब देखें' } },
    { lever: 'स्कीम और गिरवी', before: 'किस्त छूटी, मैच्योरिटी पर विवाद, काग़ज़ का रजिस्टर।', after: 'नामांकन, याद दिलाना और मैच्योरिटी ग्राहक के रिकॉर्ड पर। गिरवी का ब्याज समय पर जुड़ता है।', link: { href: '/products/gold-schemes', label: 'स्कीम देखें' } },
    { lever: 'टीम', before: 'हाज़िरी रजिस्टर में, इंसेंटिव पर महीने के आख़िर में बहस।', after: 'हाज़िरी, वेतन, इंसेंटिव और ट्रेनिंग उसी रिकॉर्ड पर जिस पर बिक्री है।', link: { href: '/products/hr-payroll', label: 'HR देखें' } },
  ])}`
, { tone: 'tint' })}

${L.section(
  `<div class="home-price">
    <div>
      <p class="eyebrow">कीमत</p>
      <h2>एक प्लान, हर मॉड्यूल। शुरुआत फ्री ट्रायल से।</h2>
      <p>एक ही प्लान, हर महीने बिलिंग। ट्रायल पूरा होने पर आपकी कीमत आपके अकाउंट में दिखती है। WhatsApp मैसेज, AI और कॉल प्रीपेड बैलेंस से चलते हैं।</p>
    </div>
    <div class="cta-row">
      <a class="btn btn-primary" href="${L.TRIAL_URL}hindi" rel="noopener" data-trial>₹3,600 में शुरू करें</a>
      <a class="btn btn-ghost" href="/pricing">पूरी कीमत देखें</a>
    </div>
  </div>`
)}

${L.section(`${L.sectionHead('सवाल', 'ज्वेलर्स सबसे पहले क्या पूछते हैं।', '')}${L.faqBlock([
  { q: 'क्या Jwero हिंदी में चलता है?', a: 'सपोर्ट और ट्रेनिंग हिंदी में मिलती है। सॉफ्टवेयर की स्क्रीन अभी अंग्रेज़ी में हैं, और कारीगर की स्क्रीन पर हिंदी का शुरुआती रूप उपलब्ध है।' },
  { q: 'कीमत क्या है?', a: 'एक ही प्लान, हर मॉड्यूल शामिल। शुरुआत फ्री ट्रायल से होती है, और ट्रायल पूरा होने पर आपकी कीमत आपके अकाउंट में दिखती है।' },
  { q: 'क्या Tally छोड़ना पड़ेगा?', a: 'नहीं। हर बिक्री, खरीद और भुगतान Jwero के अपने खाते में GST के साथ दर्ज होता है, और Tally या Zoho Books ब्रिज से आपके अकाउंटेंट तक पहुँच जाता है।' },
  { q: 'क्या AI ग्राहक को बिना पूछे मैसेज भेजेगा?', a: 'नहीं। AI जो भी लिखता है वह आपकी मंज़ूरी का इंतज़ार करता है। आप हाँ कहें, तभी भेजा जाता है।' },
  { q: 'शुरू करने में कितना समय लगता है?', a: 'पहला चरण कुछ दिनों में: आपके ग्राहक और स्टॉक हम इम्पोर्ट करते हैं, आपका WhatsApp नंबर जुड़ता है और कैटलॉग प्रकाशित होता है।' },
])}
<p class="cta-note" style="margin-top:18px">यह पेज हिंदी में है; बाक़ी वेबसाइट अंग्रेज़ी में है। <a href="/">English home page</a> · <a href="/jewellery-software-india">शहर के अनुसार देखें</a></p>`, { tone: 'tint' })}

${L.ctaBand('अपनी दुकान के डेटा पर देखिए।', 'बताइए आज आप क्या चलाते हैं। हम वही दिन Jwero में दिखाएँगे।', 'hindi')}
`,
};

// AI CCTV footfall analytics, created 2026-10-07 from pim-app origin/siddh-dev
// (commit 8e82e86e5 and workers/showroom-ai, showroom-connector). Claimed:
// existing CCTV/NVR over RTSP, Hikvision, Dahua/CP Plus alarms, ONVIF; on-site
// connector; AI person detection; entry/exit and occupancy by interval; zones;
// camera-offline and capture-gap alerts; footfall vs bills; retention and a
// capture kill switch; charged per camera. Not claimed: face recognition,
// repeat-visitor detection by camera, age or gender estimates, accuracy figures.
const CC_FLOW = [
  ['Connected', 'Your Hikvision NVR joins through the on-site connector'],
  ['Line drawn', 'An entry line drawn once across the door'],
  ['Counting', 'AI detects people · in and out counted, even half-hidden'],
  ['Floor', 'How full the floor is, every interval · peak at 6 pm'],
  ['Matched', '212 people in, 41 bills · conversion 19%'],
  ['Alert', 'Footfall up, sales flat on Saturday · staffing gap flagged'],
];
const ccFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">AI CCTV · CAMERA TO CONVERSION</p>${CC_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${CC_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const CC_CMP = [
  ['Hardware', 'Your CCTV', 'A sensor above the door', 'Your existing CCTV or NVR'],
  ['What it counts', 'Nothing; footage only', 'Entries', 'Entries, exits and how full the floor is'],
  ['Against sales', 'No', 'Export and compare', 'Matched to bills, by hour and branch'],
  ['Who walked in', 'Watch the footage', 'No', 'Check-in shows her history (not by camera)'],
  ['Camera down', 'Found out later', 'Sometimes', 'Offline and gap alerts'],
  ['Faces', 'Recorded', 'No', 'Not recognised or stored for matching'],
  ['Many branches', 'One DVR each', 'Per device', 'Every branch side by side'],
];
const ccTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>CCTV on its own</th><th>A door people counter</th><th>Jwero AI CCTV</th></tr></thead><tbody>${CC_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const CC_HOW = [
  ['Check your cameras', 'IP cameras or an NVR that streams over RTSP; Hikvision, Dahua, CP Plus and ONVIF cameras work.'],
  ['Install the connector', 'A small on-site connector finds the cameras on your network and sends counts securely.'],
  ['Draw the entry line', 'Mark the door once; set zones if you want the floor split up.'],
  ['Put up the notice', 'Set retention and consent signage in the privacy settings.'],
  ['Read footfall against sales', 'Footfall, how full the floor is and conversion, by hour, day and branch.'],
];
const ccFaqs = [
  { q: 'What is AI CCTV footfall analytics?', a: 'Using AI on your existing CCTV footage to count the people who enter and leave, and how full the floor is, then comparing it with sales. Jwero does this for jewellery showrooms and matches footfall to bills.' },
  { q: 'Can I use my existing CCTV cameras?', a: 'Yes. IP cameras and NVRs that stream over RTSP work, including Hikvision, Dahua and CP Plus, and ONVIF cameras. Nothing new to buy for counting.' },
  { q: 'Do I need a separate people counter?', a: 'No. The AI counts from the camera already pointing at your door, through a small on-site connector.' },
  { q: 'Does it recognise faces?', a: 'No. It counts people; it does not recognise faces, identify customers or tell a repeat visitor from a new one. Customers are identified only when staff check them in.' },
  { q: 'How is footfall turned into conversion?', a: 'Footfall is matched to the bills raised in the same hours, so you see conversion by hour, day, branch and salesperson.' },
  { q: 'What if a camera goes offline?', a: 'You get an alert, and gaps in counting are flagged so a bad day is not mistaken for a quiet one.' },
  { q: 'Is CCTV footfall counting legal?', a: 'Showrooms may use cameras, but visitors should be told and personal data handled under the data protection law. Jwero has retention, signage and capture settings; take advice for your own case.' },
  { q: 'How is it charged?', a: 'Camera counting is charged per camera. See pricing.' },
];
const cctv = {
  slug: 'ai-cctv-footfall-analytics-jewellery-showrooms',
  title: 'AI CCTV Footfall Analytics for Jewellery Showrooms | Jwero',
  description: 'AI CCTV footfall analytics for jewellery showrooms: count entries, exits and floor occupancy from your existing Hikvision, Dahua, CP Plus or ONVIF cameras, match footfall to bills, and see conversion by hour and branch. No face recognition.',
  breadcrumbs: [['Home', '/'], ['Showroom software', '/products/showroom'], ['AI CCTV footfall analytics']],
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Jwero AI CCTV Footfall Analytics', alternateName: ['CCTV footfall counter for jewellery shops', 'AI people counting for showrooms', 'Hikvision footfall analytics'],
    applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://jwero.ai/ai-cctv-footfall-analytics-jewellery-showrooms',
    description: 'AI footfall counting from existing CCTV and NVR cameras (RTSP; Hikvision, Dahua, CP Plus, ONVIF) through an on-site connector: entries, exits and floor occupancy, zones, camera-offline alerts, footfall matched to bills for conversion by hour and branch, with retention and consent settings and no face recognition.',
    isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up CCTV footfall counting in a jewellery showroom', step: CC_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  faqs: ccFaqs,
  body: `
${L.hero({
  eyebrow: 'AI CCTV · FOOTFALL ANALYTICS',
  h1: 'AI CCTV footfall analytics for jewellery showrooms: count every visitor with the cameras you already have.',
  sub: 'AI counts who comes in and goes out, and how full the floor is, from your existing CCTV. Footfall is matched to bills, so you finally see conversion by hour, day and branch. It counts people; it never recognises faces.',
  primary: { href: '#', label: 'Count footfall on my cameras', wa: 'footfall' },
  secondary: { href: '/products/showroom', label: 'See Showroom software' },
})}

${L.section(`${L.sectionHead('ONE DAY, START TO FINISH', 'From the camera over the door to a conversion rate you can trust.', '')}${ccFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, YOUR CAMERAS', 'What AI CCTV footfall analytics does for a jeweller.', '')}<div class="wa-jobs">
  <article><h3>1. Uses the cameras you have</h3><p>IP cameras and NVRs over RTSP: Hikvision, Dahua, CP Plus and ONVIF. Nothing new above the door.</p><a href="/products/showroom">Showroom →</a></article>
  <article><h3>2. Counts in and out</h3><p>AI detects people crossing the entry line, including those partly hidden, with a small on-site connector.</p><a href="/jewellery-showroom-footfall-counting">Footfall counting →</a></article>
  <article><h3>3. Shows how full the floor is</h3><p>Occupancy through the day and peak hours, with zones if you split the floor.</p><a href="/products/multi-store">Branches →</a></article>
  <article><h3>4. Matches footfall to bills</h3><p>Conversion by hour, day, branch and salesperson, from footfall and the bills raised.</p><a href="/products/reports">Reports →</a></article>
  <article><h3>5. Flags what is wrong</h3><p>Footfall up but sales flat, staffing gaps, a camera offline or a gap in counting.</p><a href="/products/showroom">Store insights →</a></article>
  <article><h3>6. Private by design</h3><p>No face recognition; retention, signage and a capture switch in the privacy settings.</p><a href="/trust/security">Trust →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What your register is not telling you.', 'Your numbers, not ours.')}<div class="callc" data-ccc>
  <div class="callc-in">
    <label>People in through the door a month (camera)<input type="number" inputmode="numeric" data-cc="cam" value="1500" min="0" step="50"></label>
    <label>Walk-ins written in your register<input type="number" inputmode="numeric" data-cc="reg" value="600" min="0" step="50"></label>
    <label>Bills a month<input type="number" inputmode="numeric" data-cc="bills" value="240" min="0" step="10"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Walk-ins never recorded</span><b data-cc-o="miss">0</b></p>
    <p><span>Conversion your register shows</span><b data-cc-o="regc">0%</b></p>
    <p class="callc-save"><span>Real conversion</span><b data-cc-o="real">0%</b></p>
    <p class="cta-note">Families come in groups, so count what your cameras see, not only buyers. A planning estimate from your own inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'CCTV on its own, a door counter, or Jwero AI CCTV.', '')}${ccTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to set up CCTV footfall counting in a showroom.', 'Five steps.')}${L.steps(CC_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.honestGapsBlock([
  'Cameras count people; they do not recognise faces, identify customers or tell a repeat visitor from a new one.',
  'Jwero does not sell cameras; counting works with the IP cameras and NVRs you have.',
])}

${L.oneSystemBlock([
  'Camera footfall sits beside tablet check-ins, so a walk-in counted by the camera can also be a customer on record.',
  'Conversion uses the same bills the counter raises, not a separate export.',
  'Every branch’s footfall and conversion sit side by side for the owner.',
])}

${L.ctaBand('Find out how many visitors you never knew about.', 'Tell us your camera brand. We will show footfall from cameras like yours against a day of bills.', 'footfall')}
`,
};

module.exports = [hub, ...CITIES.map(cityPage), accounting, barcode, cloud, broadcast, instagram, adsLanding, smsLanding, footfall, cctv, aiCalling, appointments, staff, webAnalytics, hi];
