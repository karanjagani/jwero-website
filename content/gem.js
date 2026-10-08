// The home-page stone, as the customer record itself. One data set per kind of
// business (the header's "I run a…" answer picks it): the tools the record is
// scattered across today, the modules around the stone, and one week of events
// that play through it.
//
// module: [icon, label, reads, writes, href, tool (index into tools), priced?]
// week:   [when, what happened, module index, the line it writes on the record,
//          the signals it fires: [family index, name]]
//
// FAMILIES: the 198 kinds of signal the product listens for, grouped for a
// jeweller. Counts are the product's own (36 sources, 198 names); every signal
// name used below is one the product really has. Sum of counts = 198.
const FAMILIES = [
  ['Website & app', 23, ['Product viewed', 'Search performed', 'Cart abandoned']],
  ['WhatsApp & messaging', 21, ['Message received', 'Catalogue viewed', 'Broadcast clicked']],
  ['Instagram & Facebook', 7, ['DM received', 'Story reply', 'Comment added']],
  ['Counter & showroom', 18, ['Walk-in captured', 'Piece tried on', 'Walked out']],
  ['Orders & pricing', 16, ['Cart saved', 'Pickup ready', 'Gold rate moved']],
  ['Schemes, girvi & loyalty', 28, ['Instalment paid', 'Maturity near', 'Girvi interest due']],
  ['Calls', 4, ['Inbound call', 'Missed call', 'Call analysed']],
  ['Customer & occasions', 27, ['Quote accepted', 'Birthday upcoming', 'At-risk detected']],
  ['Workshop & vendors', 25, ['Job issued', 'Wastage exceeded', 'PO issued']],
  ['Team', 29, ['Lead unattended', 'Stock count due', 'VIP visit expected']],
];

const GEM = {
  single: {
    centre: 'The shop, on one record', who: 'the shop',
    tools: ['Billing software', 'WhatsApp on a phone', 'Excel stock sheet', 'Staff register'],
    modules: [
      ['chat', 'WhatsApp', 'the customer’s taste, scheme balance and today’s rate', 'the conversation', '/products/whatsapp', 1, 1],
      ['store', 'Counter', 'what she asked before she walked in', 'the bill, the exchange and the day-close', '/products/pos', 0, 1],
      ['box', 'Stock', 'what is ageing and what is selling', 'every piece in and out', '/products/inventory', 2, 1],
      ['truck', 'Purchase', 'what is running low', 'the order, the receipt and the vendor’s bill', '/products/purchase-vendors', 2, 0],
      ['users', 'Team', 'who is in, and what is waiting', 'attendance, targets and incentives', '/products/hr-payroll', 3, 0],
      ['receipt', 'Books', 'every bill, purchase and payment', 'Tax-ready entries', '/products/billing-finance', 0, 0],
    ],
    week: [
      ['Mon 10am', 'The gold rate moves', 2, 'One rate · every tag, link and quote repriced', [[4, 'Gold rate increased']]],
      ['Mon 9pm', 'Meera asks the price of a 22k bangle on WhatsApp', 0, 'Asked: 22k bangle, about 18 g · reply drafted at today’s rate', [[1, 'Message received']]],
      ['Wed', 'You reorder bangles from your vendor', 3, 'Purchase order raised · on the vendor’s account', [[8, 'PO issued']]],
      ['Fri', 'An enquiry sits unanswered for a day', 4, 'Flagged to the owner before it goes cold', [[9, 'Lead unattended']]],
      ['Sat 5pm', 'Meera walks in and buys, with old gold in exchange', 1, 'The counter knew what she asked · bill, exchange and stock on one screen', [[3, 'Walk-in captured'], [3, 'Old-gold exchange'], [3, 'Invoice created']]],
      ['Sat 9pm', 'The shop closes the day', 5, 'Cash tallied · stock, vendor and books updated together', [[9, 'Cash reconciliation due']]],
    ],
  },
  chain: {
    centre: 'Meera’s record, at every branch', who: 'Meera',
    tools: ['Branch A billing', 'Branch B billing', 'WhatsApp groups', 'Head-office Excel'],
    modules: [
      ['branches', 'Head office', 'every branch’s day', 'the rule every branch follows', '/products/multi-store', 3, 1],
      ['store', 'Branch counter', 'her history from any branch', 'the bill', '/products/pos', 0, 1],
      ['box', 'Stock & transfers', 'stock at every branch', 'the transfer, with its approval', '/products/inventory', 2, 0],
      ['chat', 'WhatsApp', 'her record and today’s rate', 'the enquiry, visible to all', '/products/whatsapp', 2, 1],
      ['megaphone', 'Campaigns', 'the segment head office set', 'who was reached, inside each cap', '/products/campaigns', 3, 0],
      ['receipt', 'Books', 'every branch’s day-close', 'one ledger', '/products/billing-finance', 1, 0],
    ],
    week: [
      ['Mon', 'The gold rate rises; head office’s rule reprices every branch', 0, 'One rule · every branch priced alike', [[4, 'Gold rate increased']]],
      ['Tue', 'Meera enquires at Branch A on WhatsApp', 3, 'Enquiry on her record, visible to every branch', [[1, 'Message received'], [7, 'Lead captured']]],
      ['Wed', 'The piece is at Branch C — she books a visit there', 2, 'Branch C knows she is coming, and for which piece', [[3, 'Appointment booked'], [9, 'VIP visit expected']]],
      ['Fri', 'She walks into Branch C instead', 1, 'Branch C greets her by name and enquiry', [[3, 'Repeat visit'], [3, 'Piece shown']]],
      ['Fri 9pm', 'Every branch closes the day', 5, 'Day-close by branch · one ledger', [[9, 'Cash reconciliation due']]],
    ],
  },
  franchise: {
    centre: 'One brand record, every store', who: 'the brand',
    tools: ['Brand PDFs', 'Franchisee billing', 'Phone calls', 'Monthly reports'],
    modules: [
      ['shield', 'Brand rules', 'the brand’s catalogue and prices', 'the rule every store follows', '/products/multi-store', 0, 1],
      ['store', 'Franchisee counter', 'the brand price, the local customer', 'the bill', '/products/pos', 1, 1],
      ['truck', 'Replenishment', 'available brand stock', 'the order', '/products/purchase-vendors', 2, 0],
      ['megaphone', 'Campaigns', 'the brand template', 'each store’s send, inside its cap', '/products/campaigns', 0, 0],
      ['chat', 'WhatsApp', 'the store’s customers', 'the conversation', '/products/whatsapp', 2, 1],
      ['pie', 'Network view', 'sales, stock and customers by store', 'tonight’s report', '/products/reports', 3, 0],
    ],
    week: [
      ['Mon', 'The gold rate moves; the brand rule reprices every store', 0, 'Every franchisee priced by the brand rule', [[4, 'Gold rate increased']]],
      ['Tue', 'A franchisee asks for a local offer', 0, 'Request inside the guardrails · approved, with a trail', [[9, 'Escalation raised']]],
      ['Wed', 'The brand campaign goes out', 3, 'Each store sent it inside its own caps', [[7, 'Segment entered'], [1, 'Broadcast clicked']]],
      ['Thu', 'A store orders replenishment', 2, 'Ordered from available brand stock', [[8, 'PO issued']]],
      ['Sun', 'The brand reviews the network', 5, 'Sales, stock and customers by store — tonight', [[9, 'Target achieved']]],
    ],
  },
  maker: {
    centre: 'Order #2291’s record', who: 'the order',
    tools: ['Job register', 'Karigar khata book', 'Excel sheet', 'Billing software'],
    modules: [
      ['layers', 'Order & BOM', 'the retailer’s order', 'the jobs, against the BOM', '/products/manufacturing', 0, 0],
      ['scale', 'Metal issue', 'what the job needs', 'grams issued, in fine metal', '/products/manufacturing', 1, 0],
      ['users', 'Karigar khata', 'issue and return', 'the balance, live', '/products/manufacturing', 1, 0],
      ['shield', 'QC & hallmark', 'the piece and its norm', 'the HUID on the piece', '/products/manufacturing', 0, 0],
      ['truck', 'Dispatch', 'finished pieces', 'the delivery or the memo', '/products/inventory', 2, 0],
      ['receipt', 'Books', 'the order and the metal', 'the invoice and the party ledger', '/products/billing-finance', 3, 0],
    ],
    week: [
      ['Mon', 'A retailer orders 40 bangles', 0, 'The order became jobs against the BOM', [[7, 'Deal won']]],
      ['Tue', '412 g issued to the goldsmith (karigar)', 1, 'Issued in fine grams · khata updated', [[8, 'Material issued'], [8, 'Job issued']]],
      ['Thu', 'A job returns 6 g over the wastage norm', 2, 'Flagged at that stage, not at month end', [[8, 'Wastage exceeded']]],
      ['Fri', 'The hallmarking batch returns', 3, 'HUIDs attached piece by piece', [[8, 'Quality passed']]],
      ['Sat', 'Dispatched and invoiced', 5, 'Stock, party ledger and books moved together', [[4, 'Shipment dispatched'], [3, 'Invoice created']]],
    ],
  },
  b2b: {
    centre: 'Raj Jewellers’ record', who: 'Raj Jewellers',
    tools: ['PDF catalogue', 'Memo book', 'Accountant’s ledger', 'WhatsApp threads'],
    modules: [
      ['share', 'Buyer link', 'his terms and today’s prices', 'what he lingered on', '/products/digital-catalogues', 0, 1],
      ['box', 'Memo', 'what he holds, and until when', 'the return or the sale', '/products/inventory', 1, 0],
      ['wallet', 'Party ledger', 'every invoice and receipt', 'his balance', '/products/billing-finance', 2, 0],
      ['chat', 'WhatsApp', 'his record and his memo', 'the conversation', '/products/whatsapp', 3, 1],
      ['layers', 'Stock', 'what is free to show', 'pieces out and back', '/products/inventory', 1, 0],
      ['receipt', 'Invoice', 'the memo he kept', 'the bill and the ledger entry', '/products/billing-finance', 2, 0],
    ],
    week: [
      ['Mon', 'Opens the buyer link and lingers on chains', 0, 'Viewed: chains, three designs · prices live', [[1, 'Catalogue viewed'], [0, 'Collection viewed']]],
      ['Tue', '42 pieces go out on memo', 1, 'Memo: 42 pieces, return date set', [[7, 'Deal created']]],
      ['Thu', 'Asks “what do I owe?”', 2, 'His balance is on his own link', [[1, 'Message received']]],
      ['Sat', 'Keeps 30, returns 12', 5, 'Invoice from the memo · stock back on the shelf', [[3, 'Invoice created'], [3, 'Payment received']]],
      ['Mon', 'Another memo runs a day over', 3, 'Follow-up drafted, waiting for your tap', [[7, 'Follow-up due']]],
    ],
  },
  d2c: {
    centre: 'Priya’s record', who: 'Priya',
    tools: ['Shopify', 'Instagram app', 'Ads manager', 'Email tool'],
    modules: [
      ['store', 'Ecommerce website', 'live prices and stock', 'the cart and the order', '/products/ecommerce', 0, 1],
      ['camera', 'Instagram', 'the catalogue', 'the DM, on her record', '/products/instagram-facebook', 1, 0],
      ['chat', 'WhatsApp', 'her cart and her taste', 'the conversation', '/products/whatsapp', 1, 1],
      ['megaphone', 'Ads', 'which pieces are selling', 'which ad brought her', '/products/ads-manager', 2, 0],
      ['route', 'Journeys', 'what she left behind', 'the nudge, after your tap', '/products/journeys', 3, 0],
      ['box', 'Orders', 'the order and the stock', 'the sale and its source', '/products/inventory', 0, 0],
    ],
    week: [
      ['Mon', 'Clicks an ad for a lab-grown solitaire', 3, 'Came from an ad · the campaign is known', [[2, 'Ad clicked']]],
      ['Mon', 'Sends “price?” on Instagram', 1, 'Priced reply from the catalogue · approved', [[2, 'DM received']]],
      ['Tue', 'Adds to cart, then leaves', 0, 'Cart abandoned · interest high', [[0, 'Added to cart'], [0, 'Cart abandoned']]],
      ['Wed', 'Gets a WhatsApp nudge with the exact ring', 4, 'Recovery drafted, sent after your tap', [[7, 'Journey entered'], [1, 'Message read']]],
      ['Wed', 'Buys', 5, 'Order, stock and the ad that earned it — on one record', [[0, 'Checkout started'], [3, 'Order created']]],
    ['Thu', 'That ring runs low; you reorder from the maker', 5, 'Purchase order raised · website stock stays true', [[8, 'PO issued']]],
    ],
  },
};
GEM.trader = {
  centre: 'A Surat retailer’s record', who: 'the buyer',
  tools: ['Excel stock sheet', 'Memo book', 'WhatsApp threads', 'Accountant’s ledger'],
  modules: [
    ['gem', 'Parcels & stones', 'what is in stock, to the carat', 'stones out and back', '/products/inventory', 0, 0],
    ['share', 'Buyer link', 'his prices from your rate grid', 'what he opened and lingered on', '/products/digital-catalogues', 2, 1],
    ['box', 'Memo', 'what he holds, and until when', 'the return or the sale', '/products/inventory', 1, 0],
    ['receipt', 'Quotation', 'the grid rate, less his discount', 'accepted or declined', '/products/quotations', 2, 1],
    ['wallet', 'Party ledger', 'every invoice and receipt', 'his balance', '/products/billing-finance', 3, 0],
    ['chat', 'WhatsApp', 'his record and his memo', 'the conversation', '/products/whatsapp', 2, 0],
  ],
  week: [
    ['Mon', 'Asks for 1 ct, G, VS1 rounds on WhatsApp', 5, 'Asked: 1 ct G VS1 rounds · matching stones listed', [[1, 'Message received']]],
    ['Tue', 'Opens the stone list twice', 1, 'Viewed six stones · lingered on two', [[1, 'Catalogue viewed']]],
    ['Wed', 'Takes four stones on memo', 2, 'Memo: 4 stones, 4.12 ct, return by Saturday', [[7, 'Deal created']]],
    ['Fri', 'Gets a quotation for two of them', 3, 'Quote sent at your grid rate, less his discount', [[7, 'Quote sent']]],
    ['Sat', 'Keeps two, returns two', 4, 'Invoice from the memo · two stones back in stock', [[3, 'Invoice created'], [3, 'Payment received']]],
  ],
};
GEM.diamondretail = {
  centre: 'Ananya’s record', who: 'Ananya',
  tools: ['Billing software', 'Instagram app', 'Certificate drawer', 'Supplier memo register'],
  modules: [
    ['camera', 'Instagram', 'the stone’s 4Cs and certificate', 'the message, on her record', '/products/instagram-facebook', 1, 0],
    ['gem', 'Stone record', 'the certificate and the lab', 'what was shown, and to whom', '/products/catalog', 2, 1],
    ['share', 'Comparison link', 'live prices for the stones you pick', 'which one she lingered on', '/products/digital-catalogues', 1, 1],
    ['video', 'Video counter', 'her shortlist', 'the appointment and the outcome', '/products/meetings', 1, 0],
    ['store', 'Counter', 'what she compared online', 'the bill', '/products/pos', 0, 1],
    ['box', 'Supplier memo', 'whose stone it is', 'the sale, for the supplier’s settlement', '/products/inventory', 3, 0],
  ],
  week: [
    ['Mon', 'Asks “price for this solitaire?” on Instagram', 0, 'Asked about a 1 ct solitaire · certificate in the reply', [[2, 'DM received']]],
    ['Tue', 'Compares three stones on a link', 2, 'Compared three · lingered on the G VS1', [[1, 'Catalogue viewed'], [0, 'Product viewed']]],
    ['Thu', 'Books a video call to see it', 3, 'Video appointment booked', [[3, 'Appointment booked']]],
    ['Sat', 'Visits and tries the ring', 4, 'Tried one piece · quote given at the counter', [[3, 'Piece tried on'], [3, 'Quote given']]],
    ['Sat', 'Buys; the stone was on supplier memo', 5, 'Sold · the supplier’s settlement is raised', [[3, 'Invoice created'], [3, 'Payment received']]],
    ['Sat 8pm', 'The shop closes the day', 4, 'Cash tallied · stock, supplier account and books updated together', [[9, 'Cash reconciliation due']]],
  ],
};
GEM.silver = {
  centre: 'Kavita’s record', who: 'Kavita',
  tools: ['Bill pad', 'Calculator', 'Category count sheet', 'WhatsApp forwards'],
  modules: [
    ['scale', 'Weight sale', 'today’s silver rate and the making rule', 'the bill, by weight', '/products/pos', 0, 1],
    ['trend', 'Silver rate', 'the day’s rate', 'the price on every channel', '/platform/pricing-engine', 1, 1],
    ['box', 'Lots & counts', 'what the lot should hold', 'the count and the variance', '/products/inventory', 2, 0],
    ['megaphone', 'Festival broadcast', 'who buys gifts and coins', 'who opened and who came', '/products/campaigns', 3, 0],
    ['book', 'Catalogue', 'articles, coins and jewellery', 'what she looked at', '/products/catalog', 3, 1],
    ['receipt', 'Books', 'every bill', 'Tax-ready entries', '/products/billing-finance', 0, 0],
  ],
  week: [
    ['Mon', 'Buys twelve small pieces by weight', 0, 'Weighed, priced and billed on one screen', [[3, 'Invoice created'], [3, 'Payment received']]],
    ['Wed', 'Receives the festive gifting message', 3, 'Reached as a gift buyer, not as everyone', [[7, 'Segment entered'], [1, 'Broadcast clicked']]],
    ['Thu', 'Opens the coins and articles link', 4, 'Viewed coins and a pooja set', [[1, 'Catalogue viewed']]],
    ['Sat', 'Comes back for the pooja set', 0, 'Known at the counter · billed by weight', [[3, 'Repeat visit'], [3, 'Invoice created']]],
    ['Sat 9pm', 'The shop counts the category', 2, 'Count matched the lot · variance noted', [[9, 'Stock count due']]],
  ],
};
GEM.bridal = {
  centre: 'The Sharma family’s record', who: 'the family',
  tools: ['Three salespeople’s phones', 'Appointment notepad', 'Quotes typed in WhatsApp', 'Receipt book'],
  modules: [
    ['chat', 'WhatsApp', 'the whole family’s thread', 'every message, in one place', '/products/whatsapp', 0, 0],
    ['calendar', 'Appointments', 'the shortlist to prepare', 'the visit and who came', '/products/showroom', 1, 0],
    ['receipt', 'Quotation', 'today’s rate and your making rule', 'accepted, declined or revised', '/products/quotations', 2, 1],
    ['coins', 'Schemes', 'the balance she can use', 'the amount applied to the bill', '/products/gold-schemes', 3, 0],
    ['store', 'Counter', 'what the family shortlisted', 'the order and the advance', '/products/pos', 3, 1],
    ['layers', 'Order', 'the accepted quote', 'the job and its delivery date', '/products/erp', 3, 0],
  ],
  week: [
    ['Mon', 'The mother enquires about a bridal set', 0, 'One family thread opened · three decision-makers on it', [[1, 'Message received'], [7, 'Lead captured']]],
    ['Wed', 'A trial is booked for the bride', 1, 'Appointment booked, with the shortlist attached', [[3, 'Appointment booked']]],
    ['Wed', 'She tries four sets', 4, 'Tried four · two shortlisted', [[3, 'Piece tried on']]],
    ['Fri', 'The quotation for the set arrives', 2, 'Quote sent · revisions kept in order', [[7, 'Quote sent']]],
    ['Sun', 'The family accepts and pays the advance', 2, 'Accepted · advance on the order', [[7, 'Quote accepted'], [3, 'Payment received']]],
    ['Next Mon', 'The set goes into making as an order', 5, 'Job raised · delivery date on the family’s record', [[8, 'Job issued']]],
  ],
};
GEM.luxury = {
  centre: 'Mrs Kapoor’s record', who: 'Mrs Kapoor',
  tools: ['The owner’s memory', 'A personal phone', 'A paper diary', 'Billing software'],
  modules: [
    ['record', 'Client record', 'her sizes, taste and dates', 'everything she tried and bought', '/platform/customer-memory', 0, 0],
    ['share', 'Private preview', 'the pieces chosen for her', 'which one she returned to', '/products/digital-catalogues', 1, 1],
    ['video', 'Video counter', 'her shortlist', 'the appointment', '/products/meetings', 1, 0],
    ['eye', 'Floor view', 'who is being served', 'what she tried on', '/products/showroom', 2, 0],
    ['route', 'Occasion note', 'her anniversary', 'a personal note, for your approval', '/products/journeys', 2, 0],
    ['store', 'Counter', 'her history', 'the bill', '/products/pos', 3, 1],
  ],
  week: [
    ['Mon', 'Her anniversary is a month away', 4, 'Occasion on her record · a personal note drafted', [[7, 'Occasion approaching']]],
    ['Tue', 'Opens a private preview of three pieces', 1, 'Viewed three · returned to the emerald', [[1, 'Catalogue viewed']]],
    ['Thu', 'Asks to see it on video from abroad', 2, 'Video call booked', [[3, 'Appointment booked']]],
    ['Sat', 'Visits and tries two pieces', 3, 'Tried two · the floor knows which', [[3, 'Piece tried on']]],
    ['Sat', 'Buys the emerald', 5, 'Sold · her taste and sizes updated', [[3, 'Invoice created']]],
    ['Sat 8pm', 'The boutique closes the day', 5, 'Cash tallied · the piece off stock, the bill in the books', [[9, 'Cash reconciliation due']]],
  ],
};
GEM.bullion = {
  centre: 'A retailer’s account', who: 'the buyer',
  tools: ['Voice notes', 'Chat threads', 'Exposure worked out by hand', 'Next-morning ledger'],
  modules: [
    ['trend', 'Rate', 'the market rate', 'one published rate, with your spread', '/platform/pricing-engine', 0, 1],
    ['chat', 'WhatsApp', 'the rate and his terms', 'the booking', '/products/whatsapp', 1, 1],
    ['wallet', 'Party ledger', 'every booking and receipt', 'his balance', '/products/billing-finance', 3, 0],
    ['truck', 'Purchase', 'what you need to cover', 'the purchase and the refiner’s account', '/products/purchase-vendors', 3, 0],
    ['layers', 'Bar stock', 'fine gold on hand', 'grams in and out', '/products/inventory', 2, 0],
    ['receipt', 'Invoice', 'the booking and the delivery', 'the bill and the ledger entry', '/products/billing-finance', 3, 1],
  ],
  week: [
    ['09:30', 'The market opens and the rate goes out', 0, 'One published rate, with your spread', [[4, 'Gold rate increased']]],
    ['11:00', 'He books 500 g on WhatsApp', 1, 'Booking on his account, at the rate agreed', [[1, 'Message received'], [7, 'Deal created']]],
    ['13:30', 'You buy from the refiner', 3, 'Purchase and fine-gold stock moved together', [[8, 'PO issued']]],
    ['16:00', 'He pays by bank transfer', 2, 'Receipt posted · balance updated', [[3, 'Payment received']]],
    ['18:30', 'Delivery and invoice', 5, 'Invoiced · the ledger balances tonight', [[3, 'Invoice created']]],
  ],
};
// Which story and which piece each solution page shows.
const GEM_PAGE = {
  'solutions/single-store': ['single', 'gold'], 'solutions/gold-retail': ['single', 'gold'], 'solutions/silver-retail': ['silver', 'silver'],
  'solutions/diamond-retail': ['diamondretail', 'diamond'], 'solutions/gemstone-retail': ['diamondretail', 'diamond'], 'solutions/lab-grown-diamond': ['d2c', 'diamond'],
  'solutions/luxury-boutique': ['luxury', 'platinum'], 'solutions/bridal': ['bridal', 'gold'],
  'solutions/multi-store-chains': ['chain', 'gold'], 'solutions/franchise-networks': ['franchise', 'gold'],
  'solutions/manufacturers': ['maker', 'gold'], 'solutions/oem-manufacturers': ['maker', 'gold'], 'solutions/casting-units': ['maker', 'gold'], 'solutions/cad-services': ['maker', 'gold'], 'solutions/export-houses': ['maker', 'gold'],
  'solutions/b2b-jewellery': ['b2b', 'gold'], 'solutions/gold-wholesale': ['b2b', 'gold'], 'solutions/bullion-gold-traders': ['bullion', 'gold'],
  'solutions/diamond-wholesale': ['trader', 'diamond'], 'solutions/diamond-traders': ['trader', 'diamond'],
  'solutions/d2c-brands': ['d2c', 'gold'], 'solutions/jewellery-brands': ['d2c', 'gold'], 'solutions/startups': ['d2c', 'gold'],
};
// One whole day per kind of business, for "Run a full day": many small events
// across every department, to show how much runs without anyone carrying it.
// [time, module index, what happened, who did it, how many times]
//   a = done by the system on its own (a rule, a posting, a flag)
//   q = drafted by AI, waiting for a person's yes
//   t = done by your team, on the same record
// Counts are illustrative of a busy day, not measurements.
const DAYS = {
  single: [
    ['09:30', 4, 'Staff punch in on their phones', 't', 6], ['10:00', 2, 'The gold rate moves; every price follows', 'a', 1], ['10:20', 0, 'Priced replies drafted for overnight enquiries', 'q', 9],
    ['11:00', 1, 'Bills at the live rate', 't', 5], ['11:05', 5, 'Each bill posts to the books with tax', 'a', 5], ['11:10', 2, 'Sold pieces come off stock', 'a', 5],
    ['13:00', 0, 'Scheme instalment reminders drafted', 'q', 14], ['14:00', 3, 'Low stock flagged; a reorder is drafted', 'q', 2], ['15:00', 1, 'Old gold taken in exchange, recorded as metal', 't', 2],
    ['16:00', 0, 'Follow-ups drafted for walk-outs', 'q', 3], ['17:00', 4, 'An unanswered enquiry is flagged to the owner', 'a', 1], ['18:30', 1, 'Evening bills', 't', 8],
    ['19:00', 0, 'Birthday and anniversary wishes drafted', 'q', 4], ['21:00', 5, 'Day-close: cash tallied against bills', 'a', 1],
  ],
  chain: [
    ['09:30', 0, 'One rate and one rule reach every branch', 'a', 5], ['10:00', 1, 'Branches open their registers', 't', 5], ['10:30', 3, 'Priced replies drafted for enquiries', 'q', 31],
    ['11:00', 1, 'Bills across the branches', 't', 64], ['11:05', 5, 'Bills post to one ledger', 'a', 64], ['12:00', 2, 'A transfer is requested and approved', 't', 3],
    ['13:00', 2, 'Stock at every branch updates', 'a', 64], ['14:00', 4, 'A head-office campaign reaches its segment, inside each cap', 'q', 1], ['15:00', 0, 'A discount above the limit asks for approval', 'a', 4],
    ['16:30', 3, 'A customer who asked at one branch is known at another', 'a', 7], ['18:00', 1, 'Evening bills', 't', 96], ['20:30', 0, 'A branch falling behind target is flagged', 'a', 1],
    ['21:00', 5, 'Day-close by branch', 'a', 5], ['21:15', 0, 'Head office sees the day', 'a', 1],
  ],
  franchise: [
    ['09:30', 0, 'The brand price rule reaches every store', 'a', 18], ['10:00', 1, 'Stores open their registers', 't', 18], ['10:30', 4, 'Priced replies drafted for local enquiries', 'q', 42],
    ['11:00', 1, 'Bills at the brand price', 't', 110], ['11:05', 5, 'Sales land in the network view', 'a', 110], ['12:30', 0, 'A local offer asks the brand for approval', 'a', 2],
    ['13:00', 3, 'The brand campaign goes out, store by store, inside each cap', 'q', 18], ['14:30', 2, 'Stores order replenishment', 't', 6], ['15:00', 2, 'Orders reserve available brand stock', 'a', 6],
    ['17:00', 0, 'An off-rule price is stopped at the counter', 'a', 3], ['18:30', 1, 'Evening bills', 't', 140], ['21:00', 5, 'Tonight’s report: sales, stock and customers by store', 'a', 1],
  ],
  maker: [
    ['08:30', 2, 'Karigars punch in', 't', 22], ['09:00', 0, 'A retailer’s order becomes jobs against the BOM', 'a', 12], ['09:30', 1, 'Metal issued in fine grams', 't', 12],
    ['09:35', 2, 'Each goldsmith’s balance updates', 'a', 12], ['11:00', 3, 'Finished jobs pass quality check', 't', 9], ['12:00', 2, 'A job over the wastage norm is flagged', 'a', 2],
    ['13:30', 0, 'A job running late is flagged before the due date', 'a', 1], ['13:40', 0, 'Delay notes drafted for the retailers concerned', 'q', 1], ['14:00', 3, 'A hallmarking batch returns; HUIDs attach piece by piece', 'a', 40], ['15:00', 4, 'Finished pieces enter stock at real weights', 'a', 40],
    ['16:00', 4, 'Orders dispatched', 't', 3], ['16:05', 5, 'Invoices raised; party ledgers updated', 'a', 3], ['16:30', 5, 'Payment reminders drafted for overdue parties', 'q', 4], ['17:30', 1, 'Scrap and dust weighed back', 't', 6],
    ['18:00', 2, 'Metal closes for the day, by department', 'a', 1], ['18:15', 5, 'Karigar wages worked out against gold', 'a', 22],
  ],
  b2b: [
    ['09:30', 4, 'New stock is priced by each buyer’s terms', 'a', 60], ['10:00', 0, 'Buyers open their links', 'a', 14], ['10:30', 3, 'Replies drafted to buyer enquiries', 'q', 11],
    ['11:00', 1, 'Pieces go out on memo', 't', 86], ['11:05', 4, 'Memo stock is marked as out, not sold', 'a', 86], ['12:30', 2, 'Receipts posted to party ledgers', 't', 5],
    ['14:00', 1, 'Memos due back tomorrow are flagged', 'a', 3], ['14:30', 3, 'Return reminders drafted', 'q', 3], ['15:30', 5, 'Kept pieces become invoices', 'a', 4],
    ['16:00', 4, 'Returned pieces go back on the shelf', 'a', 22], ['17:00', 2, 'A buyer over his credit limit is flagged', 'a', 1], ['18:00', 0, 'What each buyer lingered on is on his record', 'a', 14],
  ],
  d2c: [
    ['00:30', 0, 'Orders arrive while you sleep', 'a', 6], ['08:00', 1, 'Priced replies drafted for Instagram messages', 'q', 28], ['09:00', 2, 'Priced replies drafted for WhatsApp', 'q', 17],
    ['10:00', 3, 'Each order is traced to the ad that earned it', 'a', 11], ['11:00', 0, 'Carts are abandoned', 'a', 9], ['11:30', 4, 'Cart recovery messages drafted', 'q', 9],
    ['13:00', 5, 'Paid orders reserve stock', 'a', 11], ['14:00', 3, 'An ad over its budget raises an alert', 'a', 1], ['15:00', 5, 'A piece runs low; a reorder is drafted', 'q', 2],
    ['17:00', 2, 'Delivery updates drafted', 'q', 8], ['19:00', 1, 'Comments answered from the catalogue', 'q', 22], ['22:00', 5, 'Orders, payments and stock agree', 'a', 1],
  ],
  trader: [
    ['09:30', 0, 'New parcels entered, to the carat', 't', 4], ['10:00', 1, 'Each buyer’s link shows his prices from your grid', 'a', 9], ['10:30', 5, 'Stone lists drafted for buyer requests', 'q', 12],
    ['11:30', 2, 'Stones go out on memo', 't', 18], ['11:35', 0, 'Memo stones are marked as out, not sold', 'a', 18], ['13:00', 3, 'Quotations drafted at your grid rate', 'q', 5],
    ['14:00', 2, 'Memos due back are flagged', 'a', 2], ['15:00', 4, 'Kept stones become invoices', 'a', 3], ['15:30', 0, 'Returned stones go back to stock', 'a', 7],
    ['16:30', 4, 'Receipts posted to party ledgers', 't', 3], ['17:30', 1, 'Which stones each buyer opened is on his record', 'a', 9], ['18:00', 4, 'Exposure by buyer is totalled', 'a', 1],
  ],
  diamondretail: [
    ['09:30', 0, 'Replies with the certificate drafted for Instagram messages', 'q', 12], ['10:30', 1, 'Each stone’s certificate is on its record', 'a', 6], ['11:00', 2, 'Comparison links shared', 't', 4],
    ['11:30', 2, 'Which stone she lingered on is recorded', 'a', 4], ['13:00', 3, 'Video appointments booked', 'a', 3], ['14:00', 3, 'Reminders drafted for appointments', 'q', 3],
    ['15:00', 4, 'Rings tried at the counter', 't', 5], ['16:00', 4, 'Bills with the certificate attached', 't', 2], ['16:05', 5, 'A supplier-memo stone sold raises its settlement', 'a', 1],
    ['17:30', 0, 'Follow-ups drafted for those who compared and left', 'q', 6], ['19:00', 1, 'Stones unsold for 180 days are flagged', 'a', 9], ['20:30', 4, 'Day-close', 'a', 1],
  ],
  silver: [
    ['09:30', 1, 'The silver rate moves; every price follows', 'a', 1], ['10:00', 0, 'Bills by weight', 't', 26], ['10:05', 5, 'Bills post to the books', 'a', 26],
    ['11:30', 2, 'Sold weight comes off the lot', 'a', 26], ['12:30', 3, 'The festival message reaches gift buyers', 'q', 1], ['13:30', 4, 'Catalogue links opened', 'a', 38],
    ['14:30', 2, 'A fast-moving category is flagged for reorder', 'a', 2], ['16:00', 0, 'Afternoon bills', 't', 31], ['17:30', 3, 'Who opened and who came is recorded', 'a', 12],
    ['19:00', 0, 'Evening bills', 't', 17], ['20:30', 2, 'One category counted by scanning', 't', 1], ['21:00', 5, 'Day-close', 'a', 1],
  ],
  bridal: [
    ['09:30', 0, 'Replies drafted on family threads', 'q', 8], ['10:30', 1, 'Trials booked, with the shortlist attached', 'a', 4], ['11:00', 1, 'Reminders drafted for today’s trials', 'q', 4],
    ['12:00', 4, 'Sets tried on the floor', 't', 14], ['13:30', 2, 'Quotations drafted at today’s rate', 'q', 3], ['14:00', 2, 'A revised quotation keeps the earlier one', 'a', 2],
    ['15:00', 3, 'A scheme balance is applied to an order', 'a', 1], ['15:30', 4, 'Advances taken', 't', 2], ['16:00', 5, 'Accepted sets go into making as orders', 'a', 2],
    ['17:30', 5, 'An order nearing its delivery date is flagged', 'a', 1], ['18:30', 0, 'Delivery updates drafted for families', 'q', 3], ['20:30', 4, 'Day-close', 'a', 1],
  ],
  luxury: [
    ['09:30', 4, 'Clients with an occasion this month are listed', 'a', 6], ['10:00', 4, 'Personal notes drafted', 'q', 6], ['11:00', 1, 'Private previews shared', 't', 3],
    ['11:30', 1, 'Which piece she returned to is recorded', 'a', 3], ['12:30', 2, 'A video viewing is booked from abroad', 'a', 1], ['14:00', 3, 'Clients checked in on the floor', 't', 4],
    ['14:30', 0, 'What each tried goes on her record', 'a', 4], ['16:00', 5, 'A sale, with the certificate on the bill', 't', 1], ['16:05', 0, 'Her sizes and taste update', 'a', 1],
    ['17:30', 0, 'A client who has gone quiet is flagged', 'a', 2], ['18:30', 4, 'A thank-you note drafted', 'q', 1], ['20:00', 5, 'Day-close', 'a', 1],
  ],
  bullion: [
    ['09:30', 0, 'The market opens; one rate goes out with your spread', 'a', 1], ['09:45', 1, 'Rate replies drafted for buyers', 'q', 19], ['10:30', 1, 'Bookings taken at the rate agreed', 't', 11],
    ['10:35', 2, 'Each booking lands on the buyer’s account', 'a', 11], ['11:30', 0, 'The rate moves; open quotes follow', 'a', 4], ['12:30', 3, 'A purchase from the refiner covers the bookings', 't', 1],
    ['12:35', 4, 'Fine gold stock moves with it', 'a', 1], ['14:00', 2, 'Receipts posted by bank transfer', 't', 7], ['15:00', 2, 'A buyer over his limit is flagged', 'a', 1],
    ['16:30', 4, 'Deliveries reduce bar stock', 'a', 9], ['17:00', 5, 'Invoices raised on delivery', 'a', 9], ['18:30', 2, 'Party ledgers balance for the day', 'a', 1],
  ],
};
Object.keys(DAYS).forEach((k) => { GEM[k].day = DAYS[k]; });
GEM.staff = GEM.single;

module.exports = { GEM, FAMILIES, GEM_PAGE };
