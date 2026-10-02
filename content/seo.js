// Search landing pages: the phrases a jeweller types that had no page of their
// own. A city hub and one page per trade city, three need pages (accounting,
// barcode and tagging, cloud and mobile) and a Hindi page. Every product claim
// here restates one made on a product page; city pages claim no local office
// and no local customers.
const L = require('../lib');

const PRICE = `<div class="home-price">
    <div>
      <p class="eyebrow">PRICE</p>
      <h2>Every module. ₹9,999 a month. 14 days free.</h2>
      <p>One plan, billed annually, or ₹18,000 month to month. No per-module price, no per-seat price, no card for the trial.</p>
    </div>
    <div class="cta-row">
      <a class="btn btn-primary" href="${L.TRIAL_URL}seo" rel="noopener" data-trial>Start my 14-day free trial</a>
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
    'Do scheme customers get reminders automatically?', 'Reminders are drafted for each instalment and sent with your approval. Payment is made by the customer; there is no automatic debit from their bank.'],
  ['chennai', 'Chennai',
    'Chennai’s T. Nagar is one of the busiest jewellery retail streets in the country, known for heavy gold, temple jewellery and very large showrooms. Monthly savings schemes are a normal part of buying gold here.',
    'High footfall, heavy gold and scheme customers mean the counter has to be fast and exact: live rate, wastage and making rules, old gold in exchange, the scheme balance applied to the bill, and a cash close that matches at night.',
    [['/solutions/gold-retail', 'Gold retail', 'Live rate, schemes and exchange in one flow.'], ['/products/pos', 'Counter billing', 'Scan, price, exchange, return and close the till.'], ['/products/gold-schemes', 'Gold schemes', 'The scheme book run digitally.'], ['/solutions/multi-store-chains', 'Chains', 'Stock, cash and customers across branches.']],
    'Can a scheme balance be used directly on the bill?', 'Yes. The balance is on the customer’s record and is applied at the counter when she buys.'],
  ['coimbatore', 'Coimbatore',
    'Coimbatore is a major gold jewellery manufacturing city, supplying machine-made, cast and handcrafted jewellery to retailers across South India and for export. Its units range from small job workers to large factories.',
    'Manufacturing at volume needs stage-wise control: what metal went into each job, what came out, and where the loss happened. Many units make for several retail brands at once and must keep each client’s metal and jobs apart.',
    [['/solutions/manufacturers', 'Manufacturers', 'Jobs, routing and wastage against the norm.'], ['/solutions/casting-units', 'Casting units', 'Flasks, trees and metal loss by stage.'], ['/solutions/oem-manufacturers', 'OEM manufacturers', 'Client-wise job work and metal.'], ['/products/hr-payroll', 'HR and payroll', 'Attendance, payroll and karigar wage settlement.']],
    'We make for several brands. Is each client’s gold kept separate?', 'Yes. Client-supplied metal, jobs and settlement are held client by client, so one buyer’s account never mixes with another’s.'],
  ['bangalore', 'Bengaluru',
    'Bengaluru has one of the most organised jewellery markets in India: large chains on Commercial Street, Jayanagar and Dickenson Road, long-standing family jewellers, and a cluster of online-first jewellery brands.',
    'Customers here research online, ask on WhatsApp or Instagram, and then walk in. Chains need every branch priced and stocked alike. Online brands need the storefront, the chat and the stock to agree with each other.',
    [['/solutions/multi-store-chains', 'Chains', 'Every branch on one record, seen live.'], ['/solutions/d2c-brands', 'Online brands', 'Keep the storefront, add chat selling and one stock.'], ['/solutions/diamond-retail', 'Diamond retail', 'Certificates in the reply and on the bill.'], ['/products/whatsapp', 'WhatsApp', 'Priced replies drafted from the catalogue.']],
    'We already sell on Shopify. Do we have to move?', 'No. Keep the storefront. Orders, stock and customers flow onto one record, and WhatsApp and Instagram selling are added beside it.'],
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
    'Enquiries now come on Instagram. Who answers them?', 'They land in the same inbox as WhatsApp, against the customer’s record. A priced reply is drafted from your catalogue and waits for your approval.'],
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
    'Customers come from other cities. How do we stay in touch?', 'Each buyer’s purchases and occasions are on her record, and messages about new stock or a rate change are drafted for your approval.'],
  ['amritsar', 'Amritsar',
    'Amritsar’s Guru Bazaar, near the Golden Temple, is one of Punjab’s oldest jewellery markets, known for traditional jadau and bridal jewellery.',
    'Punjabi weddings are large purchases made by families together, often with relatives abroad involved in the decision. Traditional handcrafted work also means orders placed with karigars and delivered against a date.',
    [['/solutions/bridal', 'Bridal', 'The family’s order from enquiry to delivery.'], ['/products/meetings', 'Video counter', 'Show sets to relatives abroad.'], ['/products/manufacturing', 'Orders and karigars', 'Custom work tracked to delivery.'], ['/solutions/single-store', 'Family showrooms', 'One screen for the shop.']],
    'A custom order takes weeks. Can the customer be kept informed?', 'Yes. The order, its stage and its delivery date are on the customer’s record, and an update can be sent at each stage with your approval.'],
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
    [['/solutions/manufacturers', 'Makers', 'Issue, return and loss by stage.'], ['/solutions/oem-manufacturers', 'Job work', 'Each client’s metal kept apart.'], ['/solutions/silver-retail', 'Silver', 'Lots and weight sales.'], ['/products/hr-payroll', 'Wages', 'Karigar wage settlement.']],
    'Work goes to many small job workers. Can each have an account?', 'Yes. Each job worker has an account of metal issued and returned and the wages due.'],
];

const cityPage = ([slug, name, trade, need, links, q, a]) => {
  const faqs = [
    { q, a },
    { q: `Is there a Jwero office in ${name}?`, a: `No. Jwero is set up and supported over chat, call and video call, so a jeweller in ${name} gets the same team as one anywhere else in India. Your data is imported for you and training is done on your own screen.` },
    { q: `What does jewellery software cost for a shop in ${name}?`, a: 'The price is the same in every city: ₹9,999 a month billed annually, or ₹18,000 month to month, with every module included and a 14-day free trial without a card. WhatsApp messages, AI and calls run on a prepaid wallet at published rates.' },
    { q: 'Do I have to give up Tally?', a: 'No. Sales, purchases and payments post to Jwero’s own ledger with GST handled, and the Tally and Zoho Books bridges carry the entries across if your accountant works there.' },
  ];
  return {
    slug: `jewellery-software-india/${slug}`,
    title: `Jewellery Software in ${name === 'Bengaluru' ? 'Bangalore' : name}: Billing, Stock, CRM in One | Jwero`,
    description: `Jewellery software for jewellers in ${name === 'Bengaluru' ? 'Bangalore (Bengaluru)' : name}: counter billing at the live gold rate, stock, purchase, karigar accounts, schemes, WhatsApp and books on one record. 14-day free trial.`,
    breadcrumbs: [['Home', '/'], ['Jewellery software in India', '/jewellery-software-india'], [name]],
    faqs,
    body: `
${L.hero({
  eyebrow: `JEWELLERY SOFTWARE · ${name.toUpperCase()}`,
  h1: `Jewellery software for jewellers in ${name}.`,
  sub: `One system for the counter, the stock room, the workshop, the books and every customer, set up remotely and supported in your language.`,
  primary: { href: '#', label: 'Chat or call with us', wa: 'city-' + slug },
  secondary: { href: '/pricing', label: 'See the price' },
})}

${L.section(
  `${L.sectionHead(`THE TRADE IN ${name.toUpperCase()}`, `How jewellery is bought, made and sold in ${name}.`, '')}
  <div class="prose city-prose"><p>${trade}</p><p>${need}</p></div>`
)}

${L.section(
  `${L.sectionHead('START HERE', `The pages written for the trade in ${name}.`, '')}
  ${L.cards(links.map(([href, label, why]) => ({ title: label, text: why, link: { href, label: 'Open' } })), 2)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('EVERY DEPARTMENT', 'What changes across the whole business.', 'The counter, the stock room, the vendor, the workshop, the books and the team run on the same record as the customer.')}
  ${L.compareRows(L.DEPARTMENTS)}`
)}

${L.section(PRICE, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS', `What jewellers in ${name} ask.`, '')}${L.faqBlock(faqs)}
<p class="cta-note" style="margin-top:18px">Other cities: ${CITIES.filter((c) => c[0] !== slug).map((c) => `<a href="/jewellery-software-india/${c[0]}">${c[1]}</a>`).join(' · ')}</p>`)}

${L.ctaBand(`See it on a ${name} jeweller’s own data.`, 'Tell us what you run today. We will show the same day in Jwero.', 'city-' + slug)}
`,
  };
};

// ---------------------------------------------------------------- need index
// What a jeweller searches for → the page that answers it.
const NEEDS = [
  ['Counter and billing', [['/products/billing-finance', 'Jewellery billing software'], ['/products/pos', 'Jewellery POS software'], ['/jewellery-barcode-tagging-software', 'Barcode, tagging and RFID'], ['/products/quotations', 'Quotation and estimate software'], ['/platform/pricing-engine', 'Live gold rate pricing']]],
  ['Stock and purchase', [['/products/inventory', 'Inventory and stock management'], ['/products/purchase-vendors', 'Purchase and vendor management'], ['/products/catalog', 'Jewellery catalogue software'], ['/products/digital-catalogues', 'Digital catalogue app'], ['/products/erp', 'Jewellery ERP software']]],
  ['Workshop', [['/products/manufacturing', 'Manufacturing and karigar management'], ['/products/repairs-service', 'Repair management'], ['/solutions/casting-units', 'Casting software'], ['/tools/gold-loss-calculator', 'Gold loss calculator']]],
  ['Customers', [['/products/crm', 'Jewellery CRM software'], ['/products/gold-schemes', 'Gold scheme software'], ['/products/girvi', 'Girvi and gold loan software'], ['/products/loyalty', 'Loyalty program software'], ['/products/showroom', 'Showroom and walk-in tracking'], ['/products/meetings', 'Appointments and video calls']]],
  ['Selling and marketing', [['/products/whatsapp', 'WhatsApp API and CRM'], ['/products/instagram-facebook', 'Instagram and Facebook'], ['/products/storefront', 'Ecommerce website builder'], ['/products/campaigns', 'Marketing campaigns'], ['/products/ai-sales-agents', 'AI chatbot and voice AI'], ['/products/ads-manager', 'Ads manager']]],
  ['Books, team and decisions', [['/guides', 'Buyer’s guides'], ['/jewellery-accounting-software', 'Jewellery accounting software'], ['/platform/integrations/tally', 'Tally integration'], ['/products/hr-payroll', 'HR and payroll'], ['/products/training-lms', 'Staff training'], ['/products/reports', 'MIS reports and dashboards'], ['/cloud-jewellery-software', 'Cloud and mobile access']]],
];

const hub = {
  slug: 'jewellery-software-india',
  title: 'Jewellery Software in India: By City and By Need | Jwero',
  description: 'Jewellery software for Indian jewellers, by city and by need: billing, stock, CRM, manufacturing, schemes, WhatsApp and books on one record. Find your city and the page for what you are looking for.',
  breadcrumbs: [['Home', '/'], ['Jewellery software in India']],
  faqs: [
    { q: 'Which jewellery software is used in India?', a: 'Indian jewellers mostly run a billing or ERP package, Tally for accounts, WhatsApp on a phone and Excel for everything in between. Jwero replaces that set with one system: counter, stock, purchase, workshop, customers, schemes, selling channels and books on one record.' },
    { q: 'Is Jwero made for Indian jewellers?', a: 'Yes. It prices at the live gold rate with making and wastage rules, handles old-gold exchange, HUID, GST invoices, gold savings schemes, girvi and karigar accounts in fine grams. Its rate feed, GST shapes and phone defaults are India first.' },
    { q: 'What does it cost?', a: '₹9,999 a month billed annually, or ₹18,000 month to month, with every module included. The first 14 days are free and need no card.' },
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

${L.section(PRICE)}

${L.section(`${L.sectionHead('QUESTIONS', 'What jewellers ask first.', '')}${L.faqBlock([
  { q: 'Which jewellery software is used in India?', a: 'Most jewellers run a billing or ERP package, Tally for accounts, WhatsApp on a phone and Excel for everything in between. Jwero replaces that set with one system on one record. <a href="/compare">See how it compares</a>.' },
  { q: 'Is Jwero made for Indian jewellers?', a: 'Yes: live gold rate with making and wastage rules, old-gold exchange, HUID, GST invoices, savings schemes, girvi and karigar accounts in fine grams.' },
  { q: 'What does it cost?', a: '₹9,999 a month billed annually, or ₹18,000 month to month, every module included, 14 days free. <a href="/pricing">Full pricing</a>.' },
])}`, { tone: 'tint' })}

${L.ctaBand('Tell us your city and what you run today.', 'We will show you the same day in Jwero.', 'india')}
`,
};

// ---------------------------------------------------------------- need pages
const needPage = ({ slug, title, description, eyebrow, h1, sub, wa, intro, cards, rows, notYet, faqs, links }) => ({
  slug, title, description, breadcrumbs: [['Home', '/'], ['Jewellery software in India', '/jewellery-software-india'], [eyebrow]], faqs,
  body: `
${L.hero({ eyebrow: eyebrow.toUpperCase(), h1, sub, primary: { href: '#', label: 'Chat or call with us', wa }, secondary: { href: '/pricing', label: 'See the price' } })}

${L.section(`${L.sectionHead('WHAT IT DOES', intro[0], intro[1])}${L.cards(cards, 3)}`)}

${L.section(`${L.sectionHead('TODAY AND WITH JWERO', 'What changes.', '')}${L.compareRows(rows)}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SAID PLAINLY', 'What it does not do yet.', '')}<div class="stack-verdict">${notYet} The <a href="/roadmap">public roadmap</a> says what is shipped, rolling out and not yet.</div>`)}

${L.section(PRICE, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS', 'What jewellers ask.', '')}${L.faqBlock(faqs)}
<p class="cta-note" style="margin-top:18px">Related: ${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join(' · ')}</p>`)}

${L.ctaBand('See it on your own data.', 'Tell us what you run today. We will show the same day in Jwero.', wa)}
`,
});

const accounting = needPage({
  slug: 'jewellery-accounting-software',
  title: 'Jewellery Accounting Software: GST Books That Post Themselves | Jwero',
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
    { icon: 'chat', title: 'Receivables and reminders', text: 'Outstanding amounts are tracked by party, and payment reminders are drafted for your approval.' },
    { icon: 'truck', title: 'Purchases and vendor bills', text: 'Purchase orders, goods received, vendor bills and credit notes in one chain.', link: { href: '/products/purchase-vendors', label: 'Purchase' } },
    { icon: 'flow', title: 'Tally and Zoho Books bridge', text: 'If your accountant works in Tally or Zoho Books, the entries are carried across.', link: { href: '/platform/integrations/tally', label: 'Tally integration' } },
  ],
  rows: [
    { lever: 'ENTRY', before: 'The accountant types every bill again from the billing software into Tally.', after: 'The bill is the entry. Nothing is typed twice.' },
    { lever: 'METAL', before: 'Rupee ledgers in one place, gold balances in a notebook.', after: 'Each party’s account shows grams and rupees together.' },
    { lever: 'CASH', before: 'Cash counted at night and argued about in the morning.', after: 'Each register closes against its own bills.' },
    { lever: 'DUES', before: 'Receivables chased when someone remembers.', after: 'Outstanding by party, with reminders drafted for approval.' },
  ],
  notYet: 'Jwero does not generate e-invoice IRNs or e-way bills, and does not file GST returns on the portal. Invoices are GST-ready and the data exports for your accountant.',
  faqs: [
    { q: 'Is Jwero a replacement for Tally?', a: 'It can be, and it does not have to be. Every transaction posts to Jwero’s own double-entry ledger. If your accountant prefers Tally or Zoho Books, the bridge carries the entries there.' },
    { q: 'Does it handle GST for jewellery?', a: 'Invoices are GST-ready, with tax handled on sales, returns, old-gold exchange and purchases. E-invoice IRN, e-way bills and portal filing are not done by Jwero today.' },
    { q: 'Can ledgers be kept in gold weight?', a: 'Yes. Party ledgers for buyers, vendors and karigars can be read in grams and in rupees.' },
    { q: 'What does it cost?', a: 'Accounting is part of the one plan: ₹9,999 a month billed annually, every module included, 14 days free.' },
  ],
  links: [['/products/billing-finance', 'Jewellery billing software'], ['/platform/integrations/tally', 'Tally integration'], ['/blog/jewellery-software-and-tally', 'Jewellery software and Tally'], ['/roles/accountant', 'For the accountant']],
});

const barcode = needPage({
  slug: 'jewellery-barcode-tagging-software',
  title: 'Jewellery Barcode, Tagging & RFID Software | Jwero',
  description: 'Jewellery barcode and tagging software: design and print tags with barcode or QR, scan to bill at the live gold rate, count stock by scanning, and connect RFID readers and weighing scales.',
  eyebrow: 'Jewellery barcode and tagging software',
  h1: 'Tag every piece once. Scan it everywhere after that.',
  sub: 'Design and print jewellery tags, scan a piece to bill it at the live rate, and count the stock by scanning instead of by register. RFID readers and weighing scales connect as devices.',
  wa: 'barcode',
  intro: ['One tag, from stock room to counter to stock count.', 'The tag identifies the piece. The price comes from today’s rate, so a tag never goes stale.'],
  cards: [
    { icon: 'layers', title: 'Tag templates', text: 'Lay out your own jewellery tag with barcode or QR, weight, purity and HUID, and reuse the template.' },
    { icon: 'receipt', title: 'Label printing with a trail', text: 'Print tags for a piece or a batch. Each print is recorded, so a reprint is never a mystery.' },
    { icon: 'store', title: 'Scan to bill', text: 'Scan the tag at the counter and the piece is priced at this minute’s rate with your making rule.', link: { href: '/products/pos', label: 'The counter' } },
    { icon: 'box', title: 'Stock count by scanning', text: 'Count a tray or a whole shop by scanning. What is missing and what is extra shows up as a variance.', link: { href: '/products/inventory', label: 'Inventory' } },
    { icon: 'camera', title: 'Scan with a phone', text: 'A phone camera reads the tag, so a second counter or an exhibition needs no extra scanner.' },
    { icon: 'scale', title: 'RFID readers and scales', text: 'RFID readers, weighing scales and print stations connect as devices, charged per connected device.', link: { href: '/pricing', label: 'Device pricing' } },
  ],
  rows: [
    { lever: 'TAGS', before: 'Price written on the tag by hand and wrong the moment the rate moves.', after: 'The tag carries the identity. The price is worked out when it is scanned.' },
    { lever: 'BILLING', before: 'Weight and purity typed in at the counter for every piece.', after: 'One scan fills the bill.' },
    { lever: 'COUNTING', before: 'A stock count that shuts the shop for a day.', after: 'Scan tray by tray and see the variance as you go.' },
    { lever: 'REPRINTS', before: 'Nobody knows who reprinted a tag or why.', after: 'Every print is on the record.' },
  ],
  notYet: 'Jwero does not sell tag printers, RFID readers or scales. It connects to devices you buy; ask us which models are supported before you order hardware.',
  faqs: [
    { q: 'Does Jwero support RFID for jewellery?', a: 'Yes. RFID readers connect as devices, alongside weighing scales and print stations. Each connected device is charged monthly at the published rate. Ask us about supported models before buying readers.' },
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

// ---------------------------------------------------------------- Hindi
const hi = {
  slug: 'hi',
  lang: 'hi',
  title: 'ज्वेलरी सॉफ्टवेयर: बिलिंग, स्टॉक, CRM और WhatsApp | Jwero',
  description: 'ज्वेलर्स के लिए सॉफ्टवेयर: लाइव सोने के भाव पर GST बिलिंग, स्टॉक, खरीद, कारीगर खाता, गोल्ड स्कीम, गिरवी, WhatsApp और हिसाब किताब, सब एक ही रिकॉर्ड पर। 14 दिन मुफ़्त।',
  breadcrumbs: [['Home', '/'], ['हिंदी']],
  faqs: [
    { q: 'क्या Jwero हिंदी में चलता है?', a: 'सपोर्ट और ट्रेनिंग हिंदी में मिलती है। सॉफ्टवेयर की स्क्रीन अभी अंग्रेज़ी में हैं, और कारीगर की स्क्रीन पर हिंदी का शुरुआती रूप उपलब्ध है।' },
    { q: 'कीमत क्या है?', a: 'सालाना बिलिंग पर ₹9,999 प्रति माह, या महीने दर महीने ₹18,000। हर मॉड्यूल शामिल है। पहले 14 दिन मुफ़्त हैं और कार्ड नहीं लगता।' },
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
      <h2>हर मॉड्यूल। ₹9,999 प्रति माह। 14 दिन मुफ़्त।</h2>
      <p>एक ही प्लान, सालाना बिलिंग पर, या महीने दर महीने ₹18,000। ट्रायल के लिए कार्ड नहीं चाहिए। WhatsApp मैसेज, AI और कॉल प्रीपेड वॉलेट से चलते हैं।</p>
    </div>
    <div class="cta-row">
      <a class="btn btn-primary" href="${L.TRIAL_URL}hindi" rel="noopener" data-trial>14 दिन का मुफ़्त ट्रायल शुरू करें</a>
      <a class="btn btn-ghost" href="/pricing">पूरी कीमत देखें</a>
    </div>
  </div>`
)}

${L.section(`${L.sectionHead('सवाल', 'ज्वेलर्स सबसे पहले क्या पूछते हैं।', '')}${L.faqBlock([
  { q: 'क्या Jwero हिंदी में चलता है?', a: 'सपोर्ट और ट्रेनिंग हिंदी में मिलती है। सॉफ्टवेयर की स्क्रीन अभी अंग्रेज़ी में हैं, और कारीगर की स्क्रीन पर हिंदी का शुरुआती रूप उपलब्ध है।' },
  { q: 'कीमत क्या है?', a: 'सालाना बिलिंग पर ₹9,999 प्रति माह, या महीने दर महीने ₹18,000। हर मॉड्यूल शामिल है। पहले 14 दिन मुफ़्त हैं और कार्ड नहीं लगता।' },
  { q: 'क्या Tally छोड़ना पड़ेगा?', a: 'नहीं। हर बिक्री, खरीद और भुगतान Jwero के अपने खाते में GST के साथ दर्ज होता है, और Tally या Zoho Books ब्रिज से आपके अकाउंटेंट तक पहुँच जाता है।' },
  { q: 'क्या AI ग्राहक को बिना पूछे मैसेज भेजेगा?', a: 'नहीं। AI जो भी लिखता है वह आपकी मंज़ूरी का इंतज़ार करता है। आप हाँ कहें, तभी भेजा जाता है।' },
  { q: 'शुरू करने में कितना समय लगता है?', a: 'पहला चरण कुछ दिनों में: आपके ग्राहक और स्टॉक हम इम्पोर्ट करते हैं, आपका WhatsApp नंबर जुड़ता है और कैटलॉग प्रकाशित होता है।' },
])}
<p class="cta-note" style="margin-top:18px">यह पेज हिंदी में है; बाक़ी वेबसाइट अंग्रेज़ी में है। <a href="/">English home page</a> · <a href="/jewellery-software-india">शहर के अनुसार देखें</a></p>`, { tone: 'tint' })}

${L.ctaBand('अपनी दुकान के डेटा पर देखिए।', 'बताइए आज आप क्या चलाते हैं। हम वही दिन Jwero में दिखाएँगे।', 'hindi')}
`,
};

module.exports = [hub, ...CITIES.map(cityPage), accounting, barcode, cloud, hi];
