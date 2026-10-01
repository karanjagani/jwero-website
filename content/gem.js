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
    centre: 'Meera’s record', who: 'Meera',
    tools: ['Billing software', 'WhatsApp on a phone', 'Excel sheet', 'Scheme register'],
    modules: [
      ['chat', 'WhatsApp', 'her taste, her scheme balance, today’s rate', 'the conversation', '/products/whatsapp', 1, 1],
      ['store', 'Counter', 'what she asked on WhatsApp', 'the bill and the old-gold exchange', '/products/pos', 0, 1],
      ['coins', 'Schemes', 'which instalment is due', 'the payment, the moment it lands', '/products/gold-schemes', 3, 0],
      ['book', 'Catalogue', 'live prices from the one catalogue', 'what she viewed, and for how long', '/products/digital-catalogues', 1, 1],
      ['box', 'Stock', 'what has sat on the shelf', 'the sale, piece by piece', '/products/inventory', 2, 0],
      ['receipt', 'Books', 'every bill and payment', 'GST-ready entries', '/products/billing-finance', 0, 0],
    ],
    week: [
      ['Mon 9pm', 'Asks the price of a 22k bangle on WhatsApp', 0, 'Asked: 22k bangle, about 18 g · reply drafted at today’s rate', [[1, 'Message received']]],
      ['Tue', 'Opens the catalogue link twice', 3, 'Viewed the temple bangle twice · interest rising', [[1, 'Catalogue viewed'], [0, 'Product viewed']]],
      ['Thu', 'Pays her scheme instalment', 2, 'Gold plan: 8 of 11 paid', [[5, 'Instalment paid']]],
      ['Sat 5pm', 'Walks in and tries the bangle', 1, 'The counter knew what she asked · tried two pieces', [[3, 'Walk-in captured'], [3, 'Piece tried on']]],
      ['Sat', 'Buys, with old gold in exchange', 5, 'Bill posted · stock, scheme and books updated together', [[3, 'Old-gold exchange'], [3, 'Invoice created'], [3, 'Payment received']]],
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
      ['Tue', '412 g issued to the karigar', 1, 'Issued in fine grams · khata updated', [[8, 'Material issued'], [8, 'Job issued']]],
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
      ['store', 'Storefront', 'live prices and stock', 'the cart and the order', '/products/storefront', 0, 1],
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
    ['receipt', 'Books', 'every bill', 'GST-ready entries', '/products/billing-finance', 0, 0],
  ],
  week: [
    ['Mon', 'Buys twelve small pieces by weight', 0, 'Weighed, priced and billed on one screen', [[3, 'Invoice created'], [3, 'Payment received']]],
    ['Wed', 'Receives the Diwali gifting message', 3, 'Reached as a gift buyer, not as everyone', [[7, 'Segment entered'], [1, 'Broadcast clicked']]],
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
    ['route', 'Occasions', 'the wedding date', 'the anniversary to remember', '/products/journeys', 0, 0],
  ],
  week: [
    ['Mon', 'The mother enquires about a bridal set', 0, 'One family thread opened · three decision-makers on it', [[1, 'Message received'], [7, 'Lead captured']]],
    ['Wed', 'A trial is booked for the bride', 1, 'Appointment booked, with the shortlist attached', [[3, 'Appointment booked']]],
    ['Wed', 'She tries four sets', 4, 'Tried four · two shortlisted', [[3, 'Piece tried on']]],
    ['Fri', 'The quotation for the set arrives', 2, 'Quote sent · revisions kept in order', [[7, 'Quote sent']]],
    ['Sun', 'The family accepts and pays the advance', 2, 'Accepted · advance on the order', [[7, 'Quote accepted'], [3, 'Payment received']]],
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
GEM.staff = GEM.single;

module.exports = { GEM, FAMILIES, GEM_PAGE };
