// Per-segment playbooks rendered on every /solutions page by build.js →
// withPlaybook(): a day-in-your-business loop, the modules that segment uses
// first, a fit check that turns into a tailored CTA, and the first three steps.
// Facts stay inside the honesty tiers (blueprint/PRODUCT-COVERAGE-AUDIT-2026-09.md):
// AI drafts and waits for approval; nothing here promises auto-send, e-invoice
// IRN, auto-debit, CAD→BOM, courier or predictive ML.
const NAMES = {
  '/products/whatsapp': 'WhatsApp Commerce', '/products/instagram-facebook': 'Instagram & Facebook', '/products/ai-sales-agents': 'AI Sales Agents',
  '/products/crm': 'Jewellery CRM', '/products/catalog': 'Catalogue (PIM)', '/products/inventory': 'Inventory', '/products/pos': 'Counter POS',
  '/products/billing-finance': 'Billing & Finance', '/products/erp': 'ERP', '/products/gold-schemes': 'Gold Savings Schemes', '/products/digital-gold': 'Digital Gold',
  '/products/girvi': 'Girvi / Gold Loans', '/products/multi-store': 'Multi-store', '/products/showroom': 'Showroom & Floor', '/products/loyalty': 'Loyalty & Referrals',
  '/products/hr-payroll': 'HR & Payroll', '/products/repairs-service': 'Repairs & Service', '/products/purchase-vendors': 'Purchase & Vendors', '/products/storefront': 'Storefront',
  '/products/journeys': 'Journeys', '/products/campaigns': 'Campaigns & Broadcasts', '/products/segmentation': 'Segmentation', '/products/ads-manager': 'Ads Manager',
  '/products/social-media': 'Social Media', '/products/manufacturing': 'Manufacturing & Workshop', '/products/meetings': 'Video Counter & Meetings', '/products/optimize': 'Optimize',
  '/products/email': 'Business Email', '/products/marketplaces': 'Marketplaces', '/products/quotations': 'Quotations', '/products/digital-catalogues': 'Digital Catalogues', '/products/reports': 'Reports & Dashboards', '/products/training-lms': 'Training & LMS',
  '/platform/pricing-engine': 'Pricing Engine', '/platform/customer-memory': 'Customer Memory', '/platform/ai-workforce': 'AI Workforce', '/platform/integrations': 'Integrations',
};

const PLAYBOOKS = {
  // ------------------------------------------------------------ by what you sell
  'solutions/gold-retail': {
    wa: 'gold', sim: 'rate',
    day: [
      ['10:05', 'The rate moves', 'Someone reprices the board, the catalogue and yesterday’s quotes — or forgets one.', 'One rate feed reprices every piece on every channel; an override waits for your approval.'],
      ['11:30', 'A customer asks “22k bangle, 18 g, price?” on WhatsApp', 'A salesperson works it out on a calculator and types a reply an hour later.', 'A priced reply drafts from the catalogue at the live rate, held for your tap.'],
      ['13:00', 'Old gold at the counter', 'Weighed, tested, valued on a slip; the slip is re-keyed into the bill later.', 'Exchange voucher at tested purity, deductions applied, credit lands on the same bill.'],
      ['17:30', 'Scheme instalment due', 'A telecaller works a register of who hasn’t paid.', 'Reminders draft for the due list; each one shows her balance and maturity date.'],
      ['20:30', 'Day close', 'Cash counted, variance noted in a diary, GST sorted at month end.', 'Register closed with declared vs expected, invoices GST-ready, books posted.'],
    ],
    modules: [['/platform/pricing-engine', 'Live rate on every price, one rule for making charges and wastage.'], ['/products/pos', 'Returns, old-gold exchange and day-close at the counter.'], ['/products/gold-schemes', 'Instalments, maturity and redemption on the customer record.'], ['/products/whatsapp', 'Priced replies from the catalogue, approved before they send.'], ['/products/inventory', 'Ageing by design, tag-level stock, HUID on every piece.'], ['/products/crm', 'Occasions, taste and scheme balance — 11 scores decide who to call.']],
    fit: ['The gold rate is repriced by hand somewhere every day', 'Scheme collections run off a register or Excel', 'Old-gold exchange is valued on a slip and re-typed', 'WhatsApp enquiries wait for a free salesperson', 'Nobody knows which designs have sat 180+ days'],
  },
  'solutions/silver-retail': {
    wa: 'silver', sim: 'till',
    day: [
      ['10:30', 'A tray of 40 small pieces sells by weight', 'Each piece weighed, priced on a calculator, written on a bill pad.', 'Weight-based sale at the counter: weigh, price, bill — one screen, GST included.'],
      ['12:00', 'A wholesale buyer asks for the day’s per-gram price', 'A voice note with today’s number; tomorrow’s buyer gets a different one.', 'One published rate for silver, with the making rule per category, on the shared link.'],
      ['15:00', 'Stock check for articles, coins and gift items', 'Counted by category on paper; the count never matches the pad.', 'Tag or lot-level stock with counts, labels and a variance report.'],
      ['18:00', 'A festival broadcast', 'A forwarded image to every number you have.', 'A segment of gift buyers and coin buyers gets a priced catalogue link — drafted, approved, sent.'],
      ['20:15', 'Cash up', 'Cash and UPI tallied by hand.', 'Shift closed with declared vs expected; the day posts to the books.'],
    ],
    modules: [['/products/pos', 'Weight-based selling, lots, returns and day-close.'], ['/platform/pricing-engine', 'Per-gram silver pricing with making rules by category.'], ['/products/inventory', 'Lots, counts, labels and ageing for high-volume assortments.'], ['/products/campaigns', 'Festival and gifting broadcasts to the right segment, approved first.'], ['/products/catalog', 'One catalogue for articles, coins and jewellery.'], ['/products/billing-finance', 'GST-ready bills, books that post themselves.']],
    fit: ['Most sales are by weight on a bill pad', 'Silver rate and making are worked out per bill', 'Counts by category never match the pad', 'Festival messages go out as forwards', 'Coins and gift items sit outside the jewellery stock'],
  },
  'solutions/diamond-retail': {
    wa: 'diamond', sim: 'memory',
    day: [
      ['10:15', 'A solitaire enquiry from Instagram', 'A DM answered from memory; the certificate photo comes later, if anyone finds it.', 'The stone record — 4Cs, certificate number, lab — answers the DM with a priced link.'],
      ['12:30', 'She wants to compare three stones', 'Three WhatsApp photos, three prices typed by hand.', 'A curated share with certificate-first specs and live prices, tracked when she opens it.'],
      ['15:00', 'Memo stock from a supplier', 'A consignment register nobody reconciles until the supplier calls.', 'Consignment ledger with return dates; the overdue line is already a drafted follow-up.'],
      ['17:00', 'Certificate check at the counter', 'Someone searches a drawer for the IGI/GIA paper.', 'Certificate attached to the piece; a scan pulls it up on the counter screen.'],
      ['19:30', 'Follow-up on the morning’s enquiry', 'Forgotten.', 'Intent scored from her views and her question; a follow-up drafts and waits for your yes.'],
    ],
    modules: [['/products/catalog', 'Stone records with 4Cs, certificate number and lab, first-class.'], ['/products/instagram-facebook', 'DMs and comments answered from the same catalogue.'], ['/platform/customer-memory', 'Every view, question and visit scored — who to follow up first.'], ['/products/inventory', 'Consignment and memo ledgers with return dates.'], ['/products/whatsapp', 'Priced, certificate-first shares held for approval.'], ['/products/meetings', 'A video counter for the buyer who wants to see the stone before visiting.']],
    fit: ['Certificates live in a drawer, not on the piece record', 'Instagram enquiries are answered from memory', 'Supplier memo stock is reconciled when they call', 'High-intent enquiries get lost between salespeople', 'Comparisons are typed by hand, three prices at a time'],
  },
  'solutions/gemstone-retail': {
    wa: 'gemstone', sim: 'memory',
    day: [
      ['10:30', 'A collector asks about a specific origin', 'The story is in the owner’s head; the staff say “let me check”.', 'Origin, treatment, certificate and provenance sit on the piece record every salesperson can read.'],
      ['12:00', 'A one-of-a-kind piece is shown on WhatsApp', 'A photo and a price; no record that she saw it.', 'A private share with the stone’s story; her view is scored on her record.'],
      ['14:30', 'A repeat client returns after eight months', 'Nobody remembers what she bought or what she was hunting for.', 'Her taste profile and her wish-list are on the counter screen before she sits down.'],
      ['16:00', 'Repair or re-setting request', 'A slip in a drawer.', 'A job with photos, dates and status the client can be told about without a call.'],
      ['18:30', 'A new arrival matches three clients', 'Nobody connects it.', 'Matched buyers are surfaced by taste; three invitations draft for your approval.'],
    ],
    modules: [['/products/catalog', 'Origin, treatment, certificate and story on every piece.'], ['/platform/customer-memory', 'Taste profile from her first purchase; every view scored.'], ['/products/whatsapp', 'Private, priced shares with the story attached.'], ['/products/repairs-service', 'Re-setting and repair jobs with photos and status.'], ['/products/crm', 'Wish-lists and follow-ups that draft themselves.'], ['/products/inventory', 'One-of-a-kind pieces tracked by tag, ageing visible.']],
    fit: ['The stone stories live in one person’s head', 'Repeat clients are recognised by luck', 'New arrivals never reach the client who asked for exactly that', 'Repairs and re-setting run on slips', 'Shares on WhatsApp leave no record'],
  },
  'solutions/lab-grown-diamond': {
    wa: 'labgrown', sim: 'rate',
    day: [
      ['10:00', 'Price list update', 'A new per-carat list arrives; the website and WhatsApp catalogue lag for days.', 'A rule reprices every stone and every channel at once.'],
      ['11:45', 'An online buyer asks “is it certified?”', 'A screenshot of a certificate, if someone finds it.', 'Certificate-first stone record, lab and report number in the reply.'],
      ['14:00', 'A D2C order from the storefront', 'Copied into a spreadsheet, then into billing.', 'Order, payment and invoice on one record, stock deducted at once.'],
      ['16:30', 'A comparison against mined', 'Explained differently by every salesperson.', 'A consistent, approved comparison share with live prices for both.'],
      ['19:00', 'Abandoned cart', 'Nobody knows.', 'Cart abandonment journey drafts a recovery message; it waits for your tap.'],
    ],
    modules: [['/platform/pricing-engine', 'Per-carat rules reprice every channel together.'], ['/products/storefront', 'Your own D2C store on the same catalogue and stock.'], ['/products/catalog', 'Certificate-first records for every stone.'], ['/products/journeys', 'Cart abandonment and quote follow-up recipes, approval-first.'], ['/products/ads-manager', 'Ads on catalogue winners, budget alerts included.'], ['/products/instagram-facebook', 'DMs and comments from one inbox.']],
    fit: ['Price lists change faster than the website does', 'Certificates are shared as screenshots', 'Online orders are re-typed into billing', 'Every salesperson explains lab-grown differently', 'Abandoned carts are invisible'],
  },
  'solutions/bullion-gold-traders': {
    wa: 'bullion', sim: 'rate',
    day: [
      ['09:30', 'Market opens', 'Rates broadcast by voice note to the buyer list.', 'One published rate with your spread rules; buyers see it on their link.'],
      ['11:00', 'A buyer books 500 g', 'A WhatsApp confirmation; the ledger updated later, if at all.', 'Booking, rate lock and party ledger on one record — with the approval trail.'],
      ['13:30', 'Purchase from a refiner', 'A purchase bill filed; stock in grams on a spreadsheet.', 'Purchase, fine-gold stock and party balance update together.'],
      ['16:00', 'Rate moves against an open booking', 'Someone calculates exposure by hand.', 'Open bookings and exposure at the current rate on one screen.'],
      ['18:30', 'Day’s settlements', 'Cheques, RTGS and cash reconciled the next morning.', 'Payments posted against parties, the ledger balances tonight.'],
    ],
    modules: [['/platform/pricing-engine', 'One rate with spread rules by party and product.'], ['/products/billing-finance', 'Party ledgers, receipts and books that post themselves.'], ['/products/purchase-vendors', 'Purchases and refiner accounts in grams and rupees.'], ['/products/inventory', 'Fine-gold and bar stock by lot.'], ['/products/whatsapp', 'Rate and booking confirmations from one inbox.'], ['/products/erp', 'The operational spine for bookings and settlements.']],
    fit: ['Rates go out by voice note', 'Bookings live in chat threads', 'Exposure is calculated by hand when the rate moves', 'Party ledgers are reconciled the next morning', 'Fine-gold stock is on a spreadsheet'],
  },
  'solutions/jewellery-brands': {
    wa: 'brands', sim: 'approve',
    day: [
      ['10:00', 'A new collection launches', 'Images to the agency, prices to the website team, a PDF to retailers — three versions drift.', 'One catalogue publishes to storefront, WhatsApp, Instagram and retailer links at once.'],
      ['12:00', 'A retailer partner asks for stock', 'Emails and calls to find what’s available where.', 'Partner sees available stock and places an order on their own link.'],
      ['14:30', 'Instagram comments on the launch post', 'Answered by an intern, or not.', 'Comments and DMs answered from the catalogue, drafts approved by brand.'],
      ['16:30', 'Campaign to past buyers', 'A blast to every number.', 'A segment by taste and value tier; the message drafts with 30 personalisation fields.'],
      ['19:00', 'Ad performance', 'A weekly agency deck.', 'Ads on catalogue winners, budget alerts, conversions attributed to orders.'],
    ],
    modules: [['/products/catalog', 'One master catalogue for every channel and partner.'], ['/products/storefront', 'Your own store, same stock, same prices.'], ['/products/instagram-facebook', 'Social replies from the catalogue, brand-approved.'], ['/products/segmentation', '41 ready segments — taste, value, occasion.'], ['/products/ads-manager', 'Catalogue ads with budget alerts and attribution.'], ['/platform/ai-workforce', 'Who may draft, who approves, what runs alone — per action.']],
    fit: ['Collections launch in three versions across channels', 'Retail partners ask for stock by email', 'Social comments go unanswered for days', 'Campaigns are blasts, not segments', 'Ad reporting arrives as a deck'],
  },

  // ------------------------------------------------------------ by how you operate
  'solutions/single-store': {
    wa: 'single-store', sim: 'memory',
    day: [
      ['10:00', 'Shutters up', 'The owner is the system: rate, stock, customers, staff — all in one head.', 'The morning list is already there: who to call, what’s due, what arrived.'],
      ['11:30', 'Regular customer walks in', 'Recognised if the owner is present; a stranger otherwise.', 'Her record is on the counter screen: taste, scheme balance, last visit.'],
      ['13:30', 'Owner steps out', 'Enquiries wait; staff can’t quote.', 'Priced replies draft from the catalogue; staff send after the owner’s tap from anywhere.'],
      ['17:00', 'Scheme collections', 'A register and a phone.', 'Due list with balances; reminders draft themselves.'],
      ['20:30', 'Close', 'Cash counted; GST for the accountant at month end.', 'Day-close in minutes; the books already posted, Tally bridge ready.'],
    ],
    modules: [['/platform/customer-memory', 'Every customer remembered by the business, not the owner.'], ['/products/whatsapp', 'Enquiries answered with prices while you’re away.'], ['/products/pos', 'Bills, exchange, returns and day-close.'], ['/products/gold-schemes', 'Collections and maturity without a register.'], ['/products/inventory', 'Ageing you can see before you reorder.'], ['/platform/integrations', 'Tally and Zoho Books bridges for your accountant.']],
    fit: ['The business stops remembering when the owner is out', 'Staff can’t quote without asking', 'Scheme collections need a phone and a register', 'Month-end GST is a scramble', 'You’ve never seen your stock ageing in one view'],
  },
  'solutions/multi-store-chains': {
    wa: 'chains', sim: 'approve',
    day: [
      ['09:30', 'Rate change at head office', 'Five calls to five branches; one branch prices yesterday’s rate till noon.', 'One rule reprices every branch; an override at a branch needs HQ approval.'],
      ['11:00', 'A customer from Branch A walks into Branch C', 'Unknown there.', 'One record across branches: her history, her scheme, her taste.'],
      ['13:00', 'Stock query across branches', 'WhatsApp group: “anyone has the 24 g temple set?”', 'Stock by branch on one screen; a transfer with an approval trail.'],
      ['16:00', 'Branch marketing', 'Each branch blasts its own list.', 'HQ sets the segment and template; branch sends inside caps and quiet hours.'],
      ['21:00', 'Day close × N', 'Each manager sends a photo of the register.', 'Every branch closes into one ledger; variance by branch, tonight.'],
    ],
    modules: [['/products/multi-store', 'Head office sets, branch runs — permissions per action.'], ['/platform/pricing-engine', 'One rate, one rule, every branch.'], ['/platform/customer-memory', 'One record wherever she walks in.'], ['/products/inventory', 'Stock and transfers across branches with approvals.'], ['/platform/ai-workforce', 'Caps, quiet hours and a kill switch at branch scope.'], ['/products/billing-finance', 'Every branch posts to one set of books.']],
    fit: ['Rate changes reach branches by phone', 'A customer is a stranger at the next branch', 'Stock questions go to a WhatsApp group', 'Each branch markets its own way', 'Day-close arrives as photos of registers'],
  },
  'solutions/luxury-boutique': {
    wa: 'luxury', sim: 'memory',
    day: [
      ['11:00', 'A private client’s anniversary is next month', 'Remembered by the owner, if at all.', 'The occasion is on her record; a personal note drafts for your approval — never a blast.'],
      ['12:30', 'A preview for one client', 'A WhatsApp photo anyone could forward.', 'A private catalogue share visible only to her, with her view tracked.'],
      ['15:00', 'She tries three pieces and leaves', 'No one knows which three.', 'The floor view shows what she tried; a follow-up drafts from it.'],
      ['17:00', 'A client abroad wants to see a piece', 'A video call from someone’s phone.', 'A video counter link with the catalogue and the record beside it.'],
      ['19:00', 'Team briefing', 'Who’s coming tomorrow? Nobody is sure.', 'Tomorrow’s appointments with each client’s taste and history, on one screen.'],
    ],
    modules: [['/platform/customer-memory', 'Sizes, taste, pieces and dates — visible only to your team.'], ['/products/whatsapp', 'Private previews, approved one by one.'], ['/products/showroom', 'What she tried, who served her, live.'], ['/products/meetings', 'A video counter for clients who aren’t in town.'], ['/products/journeys', 'Occasion recall selling, drafted, never automatic.'], ['/products/catalog', 'Curated shares with controlled visibility.']],
    fit: ['Client dates are remembered by one person', 'Previews go out as forwardable photos', 'Nobody records what a client tried on', 'Overseas clients get a phone video call', 'Tomorrow’s visits are a guess'],
  },
  'solutions/bridal': {
    wa: 'bridal', sim: 'approve',
    day: [
      ['10:30', 'First enquiry: the mother, the bride, the aunt', 'Three chats with three salespeople.', 'One family thread on one record — every decision-maker, every visit.'],
      ['12:00', 'Trial appointment', 'Booked on a notepad; the set isn’t ready.', 'Appointment booked with the shortlist attached; the floor knows what to prepare.'],
      ['14:30', 'Quote for the full set', 'Typed in WhatsApp, revised four times, lost.', 'A numbered quotation she can accept online; revisions kept in order.'],
      ['17:00', 'Advance and scheme top-up', 'A receipt book.', 'Advance on the order, scheme balance applied, GST-ready.'],
      ['Later', 'After the wedding', 'Goodbye.', 'Anniversary and occasions on the record; the bridal customer becomes a returning one.'],
    ],
    modules: [['/products/crm', 'One thread for the whole family, from enquiry to fitting.'], ['/products/showroom', 'Appointments with the shortlist ready on the floor.'], ['/products/billing-finance', 'Quotations she can accept online; advances on the order.'], ['/products/gold-schemes', 'Scheme balances applied to the bridal bill.'], ['/products/journeys', 'Quote follow-up and occasion recall, approval-first.'], ['/products/meetings', 'Video previews for the relatives abroad.']],
    fit: ['A wedding family talks to three different salespeople', 'Quotes are typed in WhatsApp and revised endlessly', 'Trials are booked on a notepad', 'Season go-lives have burnt you before', 'The relationship ends at the wedding'],
  },
  'solutions/d2c-brands': {
    wa: 'd2c', sim: 'memory',
    day: [
      ['09:00', 'Shopify orders overnight', 'Exported to a sheet, then to billing, then to the courier.', 'Orders land on the same record and stock as your WhatsApp and counter sales — Shopify stays.'],
      ['11:00', 'Instagram DM: “price?”', 'Answered by whoever is online.', 'A priced reply from the catalogue, drafted and approved.'],
      ['13:30', 'Abandoned cart', 'A generic app email.', 'Cart abandonment journey drafts a WhatsApp recovery message with the exact piece.'],
      ['16:00', 'Retargeting', 'A pixel audience the agency manages.', 'Ads on catalogue winners, budget alerts, conversions tied to orders.'],
      ['19:00', 'Repeat-buyer campaign', 'Everyone gets the same email.', 'Segments by taste and value; 30 personalisation fields; approval before send.'],
    ],
    modules: [['/platform/integrations', 'Keep Shopify or WooCommerce; orders flow onto one record.'], ['/products/instagram-facebook', 'DMs and comments answered from the catalogue.'], ['/products/journeys', 'Cart abandonment and quote follow-up, drafted for approval.'], ['/products/ads-manager', 'Catalogue ads with attribution to orders.'], ['/products/segmentation', 'Taste, value and occasion segments ready to use.'], ['/products/whatsapp', 'Commerce on the channel your buyers actually answer.']],
    fit: ['Orders are exported to a sheet before billing', 'Instagram DMs are answered by whoever is online', 'Cart recovery is a generic email', 'Ads run on the agency’s audience, not your catalogue', 'Every repeat buyer gets the same message'],
  },
  'solutions/franchise-networks': {
    wa: 'franchise', sim: 'approve',
    day: [
      ['09:30', 'Brand price update', 'Franchisees get a PDF; some apply it, some don’t.', 'The franchisor’s rule prices every franchisee; local overrides need approval.'],
      ['11:00', 'A franchisee wants a local offer', 'A phone argument.', 'A request inside the guardrails; approved or declined with a trail.'],
      ['14:00', 'Brand campaign', 'Each franchisee forwards it their own way.', 'Brand sets the template and segment; each store sends inside its caps.'],
      ['16:30', 'Stock replenishment', 'Emails and calls to the brand warehouse.', 'Franchisee orders from available stock on their own link.'],
      ['21:00', 'Network view', 'Monthly reports, late.', 'Sales, stock and customer signals by store, tonight.'],
    ],
    modules: [['/products/multi-store', 'Franchisor sets, franchisee runs — per-action permissions.'], ['/platform/pricing-engine', 'Brand rules, local overrides through approval.'], ['/products/campaigns', 'Brand templates, store-level sends inside caps.'], ['/products/purchase-vendors', 'Replenishment from the brand warehouse.'], ['/platform/ai-workforce', 'Kill switch at store, brand or network scope.'], ['/platform/customer-memory', 'One brand record across every store.']],
    fit: ['Price updates reach franchisees as PDFs', 'Local offers are settled by phone', 'Brand campaigns go out in twenty versions', 'Replenishment runs on email', 'Network reporting is monthly and late'],
  },
  'solutions/startups': {
    wa: 'startups', sim: 'approve',
    day: [
      ['09:00', 'Day one', 'A billing app, a WhatsApp Business number, a Shopify trial, a spreadsheet.', 'One free workspace at os.jwero.ai: catalogue, inbox, billing, customers — one record from the first sale.'],
      ['11:00', 'First Instagram enquiries', 'Answered from the founder’s phone.', 'Priced replies draft from the catalogue; you approve from anywhere.'],
      ['14:00', 'First ten customers', 'Names in a notebook.', 'Ten records with occasions and taste; the eleventh customer is already segmented.'],
      ['16:00', 'First ad', 'Boosted post.', 'Catalogue ad with a budget alert; conversions attributed to orders.'],
      ['19:00', 'Month one report', 'Bank balance.', 'Enquiries answered, replies approved, orders, repeat buyers — on your own data.'],
    ],
    modules: [['/products/whatsapp', 'Start selling on the channel you already have.'], ['/products/catalog', 'One catalogue from the first ten designs.'], ['/products/storefront', 'Your own store when you’re ready, same stock.'], ['/products/crm', 'Every customer remembered from day one.'], ['/products/ads-manager', 'First ads on catalogue winners, budget-capped.'], ['/platform/onboarding', 'Free self-serve start; a person on WhatsApp when you want one.']],
    fit: ['You’re juggling four tools before your fiftieth order', 'Enquiries are answered from the founder’s phone', 'Customers live in a notebook', 'You’ve boosted posts and can’t say what they sold', 'You want to start today, free, without a demo'],
  },

  // ------------------------------------------------------------ making & trade
  'solutions/manufacturers': {
    wa: 'manufacturers', sim: 'grams',
    day: [
      ['09:30', 'Metal issued to karigars', 'A khata book in grams; nobody reconciles till month end.', 'Issue against a BOM; every karigar’s khata in fine metal and rupees, live.'],
      ['12:00', 'A job comes back', 'Weighed, wastage argued about.', 'Return weighed against the norm; wastage over the norm is flagged at that stage.'],
      ['14:30', 'Retailer asks for a delivery date', 'A guess.', 'Routing and capacity show where the job is and when it lands.'],
      ['17:00', 'Hallmarking batch', 'A list on paper.', 'Batch with HUIDs attached to pieces as they return.'],
      ['19:30', 'Month-end metal closure', 'Three days of reconciliation.', 'Metal closure by stage, by karigar, tonight.'],
    ],
    modules: [['/products/manufacturing', 'BOM, routing, wastage norms, metal closure.'], ['/products/purchase-vendors', 'Raw material and findings from vendors, in grams.'], ['/products/inventory', 'FG receipt to piece, memo to retailers.'], ['/products/hr-payroll', 'Karigar settlement and statutory payroll.'], ['/products/billing-finance', 'Job work and B2B invoicing.'], ['/products/erp', 'The spine that ties issue, return and sale together.']],
    fit: ['Karigar khatas are reconciled at month end', 'Wastage is argued job by job', 'Delivery dates are guesses', 'Hallmarking batches live on paper', 'Metal closure takes days'],
  },
  'solutions/oem-manufacturers': {
    wa: 'oem', sim: 'grams',
    day: [
      ['09:30', 'A brand sends a 300-piece PO', 'Re-typed into a job register.', 'PO becomes jobs against BOMs, with the brand’s specs attached.'],
      ['11:30', 'Brand asks “where is my order?”', 'A call to the floor, a call back.', 'Job status by stage on a link the brand can see.'],
      ['14:00', 'QC and hallmarking', 'A checklist per batch, if there’s time.', 'QC gate per stage; HUIDs attached to pieces.'],
      ['16:30', 'Costing for the next quote', 'Last quarter’s numbers.', 'Costing from actual metal, wastage and labour on the last run.'],
      ['19:00', 'Settlement with the brand', 'Metal received vs delivered, argued.', 'Party metal account: received, consumed, delivered, balance.'],
    ],
    modules: [['/products/manufacturing', 'Jobs from POs, routing, QC, costing from actuals.'], ['/products/billing-finance', 'B2B invoicing and party accounts in grams and rupees.'], ['/products/purchase-vendors', 'Client-supplied metal and findings tracked as job work.'], ['/products/inventory', 'FG by client, memo and dispatch.'], ['/products/hr-payroll', 'Karigar settlement by weight or piece.'], ['/products/erp', 'One spine from PO to dispatch.']],
    fit: ['Brand POs are re-typed into a register', 'Order status needs a call to the floor', 'Costing uses last quarter’s numbers', 'Client metal accounts are settled by argument', 'QC is a checklist when there’s time'],
  },
  'solutions/casting-units': {
    wa: 'casting', sim: 'grams',
    day: [
      ['09:00', 'Trees for the day', 'Wax weights on a sheet; alloy mixed by habit.', 'Tree, alloy and expected metal on the job; issue recorded in fine grams.'],
      ['11:30', 'Casting done', 'Cast weight noted; loss known only at month end.', 'Cast weight vs expected — wastage over the norm flagged at that tree.'],
      ['14:00', 'Client asks for their pieces', 'Sorted by memory.', 'Pieces returned against the client’s job, with the loss on their account.'],
      ['16:30', 'Scrap and sprues', 'A tin.', 'Scrap weighed back into stock; the loop closes.'],
      ['19:00', 'Client billing', 'Per-gram charge on a guess of grams.', 'Job-work invoice from actual weights, GST-ready.'],
    ],
    modules: [['/products/manufacturing', 'Trees as jobs, wastage norms per stage, metal closure.'], ['/products/purchase-vendors', 'Client metal received as job work.'], ['/products/billing-finance', 'Job-work invoices from actual weights.'], ['/products/inventory', 'Scrap, sprues and alloy stock by lot.'], ['/products/hr-payroll', 'Operator and karigar settlement.'], ['/products/erp', 'Every gram accounted from wax to return.']],
    fit: ['Loss is known only at month end', 'Client metal is sorted by memory', 'Scrap lives in a tin', 'Job-work billing guesses the grams', 'No one can say which tree lost the most'],
  },
  'solutions/cad-services': {
    wa: 'cad', sim: 'approve',
    day: [
      ['10:00', 'A client brief on WhatsApp', 'Screenshots and voice notes in a thread.', 'A design request on a record: brief, references, revisions, approvals in order.'],
      ['12:30', 'Revision three', 'Which file is the latest?', 'Versioned files on the request; the client approves the one that ships.'],
      ['15:00', 'Client asks for an estimate', 'Typed from experience.', 'A quotation the client can accept online; the approved design becomes the catalogue entry.'],
      ['17:00', 'Design bank for a retailer', 'Folders on a drive.', 'Designs shared to retailers who adopt them into their own catalogue.'],
      ['19:00', 'Follow-up on quiet briefs', 'Forgotten.', 'Quote follow-up drafts and waits for your tap.'],
    ],
    modules: [['/products/crm', 'Briefs, revisions and approvals on one record.'], ['/products/catalog', 'Approved designs as catalogue entries with images and specs.'], ['/products/purchase-vendors', 'Design bank: share to retailers, adopted with one tap.'], ['/products/billing-finance', 'Quotations accepted online; invoices GST-ready.'], ['/products/whatsapp', 'Client threads that become records.'], ['/products/journeys', 'Quote follow-up, drafted for approval.']],
    fit: ['Briefs arrive as screenshots and voice notes', 'Nobody knows which revision is final', 'Estimates are typed from experience', 'Designs are shared as drive folders', 'Quiet briefs are never followed up'],
    note: 'CAD files do not become BOMs automatically — the approved design is catalogued; the BOM is entered by your production team.',
  },
  'solutions/b2b-jewellery': {
    wa: 'b2b', sim: 'shelf',
    day: [
      ['10:00', 'Retailer asks for the new line', 'A PDF catalogue with last week’s prices.', 'A buyer link with live prices, their terms, their credit limit.'],
      ['12:00', 'Memo to a retailer', 'A memo book; the return date is a memory.', 'Memo with pieces, return date and exposure; the overdue one is a drafted follow-up.'],
      ['14:30', 'Buyer asks “what do I owe?”', 'The accountant is called.', 'Party ledger on their link; receipts posted the day they arrive.'],
      ['16:30', 'A prospect list for a new city', 'Cold calls from a directory.', 'Lead Finder saves prospects to the CRM; outreach drafts for approval.'],
      ['19:00', 'Exposure review', 'End of month.', 'Which buyer holds what, at list value, tonight.'],
    ],
    modules: [['/products/inventory', 'Memo and consignment ledgers with return dates.'], ['/products/billing-finance', 'Party ledgers, credit limits, receipts.'], ['/products/catalog', 'Buyer links with their prices and terms.'], ['/products/crm', 'Prospects, follow-ups and Lead Finder.'], ['/products/whatsapp', 'Buyer conversations on the party record.'], ['/products/erp', 'Orders, dispatch and returns on one spine.']],
    fit: ['Retailers get PDFs with stale prices', 'Memo return dates are remembered, not tracked', 'Buyers call the accountant to learn their balance', 'New-city prospecting is a directory and a phone', 'Exposure is known at month end'],
  },
  'solutions/gold-wholesale': {
    wa: 'goldwholesale', sim: 'rate',
    day: [
      ['09:30', 'Rate and making list', 'Voice notes to fifty retailers.', 'One published rate; making rules by party tier on their link.'],
      ['11:00', 'Retailer books 2 kg of chains', 'A chat thread; the ledger later.', 'Booking with rate lock and party terms, on the record.'],
      ['13:30', 'Memo out to three retailers', 'Memo book.', 'Memo with return dates; exposure by party in grams and rupees.'],
      ['16:00', 'Metal received against a sale', 'Weighed, noted, reconciled at month end.', 'Party metal account: given, received, balance — live.'],
      ['19:00', 'Collections', 'Calls.', 'Receipt reminders draft by party; posted the day money lands.'],
    ],
    modules: [['/platform/pricing-engine', 'Rate plus making by party tier.'], ['/products/billing-finance', 'Party ledgers in grams and rupees; receipts and reminders.'], ['/products/inventory', 'Memo, consignment and lot stock.'], ['/products/catalog', 'Buyer links with live prices.'], ['/products/whatsapp', 'Bookings and confirmations on the party record.'], ['/products/erp', 'Orders to dispatch to metal settlement.']],
    fit: ['Rates go out as voice notes', 'Bookings live in chats', 'Memo exposure is a memo book', 'Metal accounts are reconciled monthly', 'Collections are phone calls'],
  },
  'solutions/diamond-wholesale': {
    wa: 'diamondwholesale', sim: 'shelf',
    day: [
      ['10:00', 'Parcel arrives', 'Stones logged on a sheet; certificates in envelopes.', 'Stone records with certificate number, lab, 4Cs — searchable by any buyer’s spec.'],
      ['11:30', 'Buyer asks “VS1 F 1.2 ct, what do you have?”', 'Someone searches the sheet.', 'A filtered list with prices on the buyer’s link, in minutes.'],
      ['13:00', 'Memo to a retailer', 'Memo book.', 'Memo with stones, return date and list value; exposure by buyer.'],
      ['16:00', 'Trader buys the lot', 'Invoice typed by hand.', 'Invoice from the memo; stock and party ledger update together.'],
      ['19:00', 'Overdue memo', 'A call, when remembered.', 'The overdue line is a drafted follow-up waiting for your tap.'],
    ],
    modules: [['/products/catalog', 'Certificate-first stone records, searchable by spec.'], ['/products/inventory', 'Memo and consignment ledgers, exposure by buyer.'], ['/products/billing-finance', 'Invoices from memos; party ledgers.'], ['/products/whatsapp', 'Buyer enquiries answered with filtered lists.'], ['/products/crm', 'Every buyer and trader as a party record.'], ['/products/erp', 'Parcel to memo to sale on one spine.']],
    fit: ['Stones are logged on a sheet', 'Spec enquiries mean searching the sheet', 'Memo exposure per buyer is unknown', 'Invoices are typed from memos', 'Overdue memos are chased by memory'],
  },
  'solutions/export-houses': {
    wa: 'export', sim: 'rate',
    day: [
      ['09:30', 'Overseas buyer PO in USD', 'Converted by hand; margins guessed.', 'Multi-currency at the order; costing from actual metal and labour.'],
      ['11:30', 'Production status for the buyer', 'An email chain.', 'Job status by stage on a link the buyer can read.'],
      ['14:00', 'QC before dispatch', 'A checklist per batch.', 'QC gate per stage; certificates and HUIDs attached.'],
      ['16:30', 'Buyer asks for the catalogue', 'A PDF.', 'A buyer link with their currency and prices.'],
      ['19:00', 'Receivables', 'A spreadsheet by buyer.', 'Party ledgers by currency; reminders draft for approval.'],
    ],
    modules: [['/products/manufacturing', 'Jobs, routing, QC and costing from actuals.'], ['/products/billing-finance', 'Multi-currency orders and party ledgers.'], ['/products/catalog', 'Buyer links with their currency.'], ['/products/inventory', 'FG by buyer, dispatch and memo.'], ['/products/crm', 'Buyers as party records with follow-ups.'], ['/products/erp', 'PO to dispatch on one spine.']],
    fit: ['USD POs are converted by hand', 'Buyers ask for status by email', 'QC is a checklist per batch', 'Catalogues go out as PDFs', 'Receivables live on a spreadsheet'],
    note: 'Rules compute correctly outside India; the rails — rate feed, GST/TDS shapes, +91 defaults — are India-first today.',
  },
};

module.exports = { PLAYBOOKS, NAMES };
