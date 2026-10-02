// One direct question and answer for each tool in the home page list that had
// none, placed on the page that should win the search. Written the way a
// jeweller asks it, so search engines and AI assistants can quote the answer.
// Shown on the page under "More questions jewellers ask" and added to that
// page's question-and-answer data. Every answer restates what the page or the
// product already does; where something is not done, it says so.
const TOOL_QA = {
  'products/optimize': [
    { q: 'How do I A/B test my jewellery website?', a: 'In Optimize you set up two versions of a page or a pop-up, split visitors between them, and see which one led to more enquiries or orders. It sits beside the heatmaps and recordings, so you can see why one version won.' },
    { q: 'How do I capture enquiries on my jewellery website?', a: 'Add a lead form or a pop-up from the visual editor: an exit offer, a callback request or a custom order form. Each enquiry lands on the customer’s record in the same inbox as WhatsApp and Instagram.' },
    { q: 'How do I track conversions on a jewellery website?', a: 'Define the steps that matter, such as viewed a product, sent an enquiry, placed an order, and Optimize shows where visitors drop out. Google Tag Manager and Google Analytics can be connected if you already use them.' },
    { q: 'How do I set up the Meta pixel on a jewellery website?', a: 'On a Jwero storefront you add your pixel once in settings and it fires on product views, carts and orders. That lets Meta ads optimise for people who actually enquire or buy, not only for clicks.' },
  ],
  'products/social-media': [
    { q: 'Can AI write jewellery captions and descriptions?', a: 'Yes. AI drafts captions, post text and replies from your catalogue and your tone, and a person approves before anything is published. It is a draft to edit, not an automatic post.' },
    { q: 'How do I make jewellery posts for Instagram?', a: 'Write the post once in the composer, attach photos or video from your library, preview how it looks on each platform, then schedule it. Brand templates keep the look consistent across staff.' },
    { q: 'How do jewellers get sales from Instagram Reels?', a: 'A Reel brings comments and messages asking the price; the sale is lost when nobody answers. Reels are scheduled from the same screen as other posts, and every comment and message they bring lands in one inbox with a priced reply drafted for approval.' },
    { q: 'How do jewellers use Instagram Stories?', a: 'Stories suit new arrivals, rate updates and festival offers. A reply to a Story arrives as a message in the shared inbox, on that customer’s record, so it gets answered like any other enquiry.' },
    { q: 'How do I get more Google reviews for my jewellery shop?', a: 'Ask at the right moment: after a purchase or a completed repair. Jwero connects your Google Business profile so reviews appear in one place and replies are drafted for your approval.' },
    { q: 'Does Pinterest work for jewellery brands?', a: 'It suits bridal and design-led jewellery, where buyers collect ideas months ahead. You can schedule pins from the same composer as Instagram and Facebook.' },
    { q: 'Does YouTube work for jewellery shops?', a: 'Short videos of pieces, making and styling work well and stay searchable for years. Jwero publishes to YouTube from the same composer and calendar as your other channels.' },
    { q: 'Should a jewellery brand post on LinkedIn?', a: 'It is worth it for wholesalers, manufacturers and brands that sell to the trade or recruit staff. Retail-only shops usually get more from Instagram and WhatsApp. LinkedIn posts are scheduled from the same composer.' },
    { q: 'Should a jewellery brand post on X?', a: 'For most jewellers X is a minor channel, useful for rate updates and brand news. If you use it, posts go out from the same composer as your other channels.' },
    { q: 'Should a jewellery brand be on Threads?', a: 'Only if your customers are there. It costs little to cross-post from the same composer, but it should not take time from Instagram and WhatsApp, where jewellery is actually bought.' },
  ],
  'products/catalog': [
    { q: 'Can AI create jewellery product photos?', a: 'Jwero can generate or edit a product image and create a virtual try-on image from a product photo, each charged per image. They should be used to present a real piece, not to show something you cannot supply.' },
    { q: 'Where do I store jewellery photos and videos?', a: 'In the asset library, attached to the piece they belong to, so the same photo serves the catalogue, WhatsApp shares, the website and social posts. Google Drive, OneDrive and Dropbox can be connected.' },
  ],
  'products/ai-sales-agents': [
    { q: 'Can AI call my customers for scheme reminders?', a: 'Yes. The AI voice agent places reminder and follow-up calls in the customer’s language over a telephony line you connect, and writes the outcome on her record. Calls are charged per minute.' },
  ],
  'products/hr-payroll': [
    { q: 'How do I track staff attendance in a jewellery shop?', a: 'Staff punch in on their own phone or on a kiosk at the shop, with optional location and selfie checks. Attendance feeds payroll directly, so nobody copies a register at month end.' },
    { q: 'Which HR software suits a jewellery business?', a: 'One that handles showroom staff and karigars together: attendance, leave, shifts, payroll with PF and ESI, incentives, and wage settlement by piece or weight. Jwero does this on the same record as sales.' },
    { q: 'How do I calculate sales incentives in a jewellery shop?', a: 'Set the rule once, for example a percentage of sales above a target, and incentives are worked out from the bills each salesperson actually made. They flow into payroll with no separate sheet.' },
    { q: 'Which payroll software suits a jewellery business?', a: 'Look for attendance-aware payroll with PF, ESI, professional tax and TDS, plus karigar wages by piece, weight, hour or day. Jwero produces payslips, a bank file and the statutory export files; filing is still done by your accountant.' },
    { q: 'How do I hire sales staff for a jewellery showroom?', a: 'Track each candidate through applied, screening, interview, offer and hired in one pipeline. A hired candidate moves straight into onboarding with a checklist, so documents and training are not forgotten.' },
    { q: 'How do I assign daily tasks to jewellery staff?', a: 'Each person gets a list of what to do today: follow-ups due, stock to count, visits expected. Tasks can be assigned by a manager and are tracked to completion.' },
  ],
  'products/campaigns': [
    { q: 'How do jewellers send WhatsApp broadcasts without getting banned?', a: 'Send through the official WhatsApp Business API using approved templates, only to people who agreed, and honour opt-outs. Jwero skips anyone who opted out and shows why, which is what keeps a number safe.' },
    { q: 'Do push notifications work for jewellery stores?', a: 'They work for visitors who opted in on your website or app: a new collection, a rate drop, a scheme reminder. They cost nothing per message, and go out from the same campaign as WhatsApp and email.' },
    { q: 'Does SMS marketing still work for jewellers?', a: 'SMS is best for short, certain messages such as payment received, order ready or instalment due. For offers, WhatsApp usually gets more response. Both can go out from one campaign.' },
  ],
  'products/meetings': [
    { q: 'How do I manage showroom appointments on a calendar?', a: 'Customers book against real availability, and every appointment, video or in person, sits on one calendar with Google Calendar and Zoho Bookings. Reminders go out on the customer’s own channel.' },
    { q: 'How do I sell jewellery on a video call?', a: 'Start a video call from the WhatsApp or web chat conversation in one tap, or let the customer book a slot. Have the shortlist ready, show the pieces, and follow with a quotation she can accept on her phone.' },
  ],
  'products/showroom': [
    { q: 'How do I count footfall in my jewellery showroom?', a: 'Two ways: check each walk-in in on a tablet at the entrance, or connect showroom cameras for camera-based counting, charged per camera. Either way you see visits, conversion and why people left without buying.' },
  ],
  'products/ads-manager': [
    { q: 'Can I advertise my jewellery shop on ChatGPT?', a: 'Advertising inside AI assistants is new and changing. Jwero’s Ads Manager covers Meta, Google and Pinterest today; ask us about ChatGPT ads for your account before planning a budget around them.' },
    { q: 'Do Google Ads work for jewellery shops?', a: 'They work when someone is already searching, such as “gold bangles near me”, and when the enquiry is answered quickly. Jwero builds Search, Performance Max and Shopping campaigns and shows which ad led to a sale.' },
  ],
  'products/instagram-facebook': [
    { q: 'How do I reply to price comments on Instagram?', a: 'A public “price?” comment is moved to a private message, with a priced reply drafted from your catalogue at today’s rate. A person approves it, and the conversation stays on the customer’s record.' },
    { q: 'How do I manage Facebook messages for my jewellery page?', a: 'Facebook messages and comments arrive in the same shared inbox as Instagram and WhatsApp, so the whole team answers from one place and nothing depends on one phone.' },
  ],
  'products/loyalty': [
    { q: 'How do I run coupons and gift vouchers in a jewellery shop?', a: 'Create a coupon with its value, validity and conditions, send it to a segment, and redeem it at the counter or online. Each redemption is recorded against the customer and the campaign.' },
    { q: 'How do I run a loyalty programme in a jewellery shop?', a: 'Define tiers and how points are earned and redeemed, for purchases, referrals and visits. The balance shows on the customer’s record at the counter, so staff can mention it while she is deciding.' },
  ],
  'products/journeys': [
    { q: 'How do I automate customer journeys for a jewellery shop?', a: 'Draw the steps on a canvas: a trigger such as a scheme instalment due or a quotation not accepted, then a message, a wait and a follow-up. You can add an approval step so nothing is sent unseen.' },
  ],
  'platform/customer-memory': [
    { q: 'How do I personalise offers for jewellery customers?', a: 'Use what each customer has shown you: what she bought, what she viewed, her occasions and her budget. Jwero scores this and suggests who to contact and with which pieces, with the reason shown.' },
  ],
  'products/digital-gold': [
    { q: 'How can a jeweller offer digital gold?', a: 'With your own branded digital gold: customers buy gold in grams from their phone at the live rate and redeem it at your counter. Check the rules that apply to you before launching; Jwero provides the software, not the licence.' },
  ],
  'products/storefront': [
    { q: 'How do I build a jewellery website with live gold rates?', a: 'Use a storefront where each piece is priced from weight, purity and the day’s rate, so prices change when the rate does. Jwero’s storefront does this from the same catalogue and stock as your counter.' },
    { q: 'How do I list jewellery on Google Shopping?', a: 'Google needs a product feed with price, image and availability. Jwero sends your catalogue to Google Merchant Center and keeps prices and stock in step, and Shopping campaigns run from the Ads Manager.' },
  ],
  'products/quotations': [
    { q: 'How do I make a jewellery estimate?', a: 'Pick the pieces, and the estimate is worked out from weight, purity, today’s rate, making charges and stones. It goes to the customer as a numbered quotation she can accept on her phone.' },
  ],
  'products/girvi': [
    { q: 'Which software is used for girvi?', a: 'Girvi software records the pledge, prints the receipt, adds interest on its schedule, and tracks collection, renewal and release. In Jwero each entry posts to the books and the loan sits on the customer’s record.' },
  ],
  'products/inventory': [
    { q: 'Can I manage jewellery stock in Excel or Google Sheets?', a: 'You can list it, but a sheet does not change when a piece is sold, cannot value stock at today’s rate, and has no record of who edited it. It works for a few hundred pieces and breaks beyond that.' },
  ],
  'solutions/b2b-jewellery': [
    { q: 'How do jewellery wholesalers find new retailers?', a: 'Through referrals, exhibitions and directories. Jwero’s Lead Finder searches for jewellery businesses by city and type, charged per search, and adds them to your CRM as prospects to contact.' },
  ],
  'platform/integrations': [
    { q: 'Can I connect my own AI agent to my jewellery software?', a: 'Yes. Jwero has an MCP server, so an AI agent that supports the Model Context Protocol can read and act on your data within the permissions you give it. Webhooks and APIs are available for other integrations.' },
  ],
  'products/reports': [
    { q: 'Which reports should a jewellery owner see daily?', a: 'Today’s sales by counter and branch, cash against bills, stock value at today’s rate, pieces ageing, scheme collections due and enquiries not yet answered. In Jwero these sit on one dashboard.' },
  ],
  'products/crm': [
    { q: 'How do I remember customer birthdays and anniversaries?', a: 'Record the dates once on the customer’s record. Jwero lists who has an occasion coming, weeks ahead, and drafts a personal message for your approval.' },
  ],
  'products/billing-finance': [
    { q: 'How do I collect outstanding payments from customers?', a: 'Keep every due on the customer’s or party’s account, see what is overdue, and send a reminder with a payment link. Jwero drafts the reminders; payment is made by the customer.' },
  ],
  'products/pos': [
    { q: 'Which POS is best for a jewellery showroom?', a: 'One that prices by weight at the live rate, handles old-gold exchange, returns and scheme redemption, and closes the cash by register. A general retail POS does none of these.' },
  ],
  'platform/pricing-engine': [
    { q: 'How are making charges and wastage calculated?', a: 'Making is charged per gram, as a percentage of metal value, or as a flat amount per piece; wastage is a percentage added on weight or value. Jwero holds these as rules by category, so every channel prices the same way.' },
  ],
  'platform': [
    { q: 'How do jewellery teams communicate without WhatsApp groups?', a: 'With team channels, direct messages and calls built into the same system as the work, so a message about a customer or a piece links to that record and stays with the business when someone leaves.' },
  ],
  'products/whatsapp': [
    { q: 'Should a jewellery website have live chat?', a: 'Yes, if someone answers it. A chat that replies within minutes with a real price turns a visitor into an enquiry. Jwero’s web chat answers first and hands over to a person when needed.' },
  ],
};
module.exports = { TOOL_QA };
