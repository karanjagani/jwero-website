// One direct question and answer for each tool in the home page list that had
// none, placed on the page that should win the search. Written the way a
// jeweller asks it, so search engines and AI assistants can quote the answer.
// Shown on the page under "More questions jewellers ask" and added to that
// page's question-and-answer data. Every answer restates what the page or the
// product already does.
const TOOL_QA = {
  'products/optimize': [
        { q: 'How do I capture enquiries on my jewellery website?', a: 'Add a lead form or a pop-up from the visual editor: an exit offer, a callback request or a custom order form. Each enquiry lands on the customer’s record in the same inbox as WhatsApp and Instagram.' },
    { q: 'How do I track conversions on a jewellery website?', a: 'Define the steps that matter, such as viewed a product, sent an enquiry, placed an order, and Optimize shows where visitors drop out. Google Tag Manager and Google Analytics can be connected if you already use them.' },
    { q: 'How do I set up the Meta pixel on a jewellery website?', a: 'Add the Jwero pixel to any website and Optimize sends visitor details and events to your Meta pixel, including product views, carts and orders. That lets Meta ads optimise for people who actually enquire or buy, not only for clicks.' },
  ],
  'products/social-media': [
    { q: 'Can AI write jewellery captions and descriptions?', a: 'Yes. AI writes captions and hashtags from your catalogue in your shop’s voice. Posts can go out on their own in Autopilot, or wait in an approval queue if you ask for that.' },
    { q: 'How do I make jewellery posts for Instagram?', a: 'Write the post once in the composer, attach photos or video from your library, preview how it looks on each platform, then post it or schedule it. Jwero can also make the post for you from an opportunity in one click.' },
    { q: 'How do jewellers get sales from Instagram Reels?', a: 'A Reel brings comments and messages asking the price; the sale is lost when nobody answers. Reels are made and scheduled from the same screen as other posts; comments come back to one screen and DMs land in One Inbox, where a price question becomes a chat.' },
    { q: 'How do I get more Google reviews for my jewellery shop?', a: 'Ask at the right moment: after a purchase or a completed repair. Jwero connects every Google Business location so reviews appear in one list and your team replies from one screen.' },
  ],
  'products/catalog': [
    { q: 'Can AI create jewellery product photos?', a: 'Jwero can generate or edit a product image from a product photo, charged per image. They should be used to present a real piece, not to show something you cannot supply.' },
    { q: 'Where do I store jewellery photos and videos?', a: 'In the asset library, attached to the piece they belong to, so the same photo serves the catalogue, WhatsApp shares, the website and social posts. Google Drive, OneDrive and Dropbox can be connected.' },
  ],
  'products/ai-sales-agents': [
    { q: 'Can AI call my customers for scheme reminders?', a: 'Yes. The AI voice agent places reminder and follow-up calls in the customer’s language over a telephony line you connect, and writes the outcome on her record. Calls are charged per minute.' },
  ],
  'products/hr-payroll': [
    { q: 'How do I hire sales staff for a jewellery showroom?', a: 'Track each candidate through applied, screening, interview, offer and hired in one pipeline. A hired candidate moves straight into onboarding with a checklist, so documents and training are not forgotten.' },
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
    { q: 'How do I reply to price comments on Instagram?', a: 'A public “price?” comment is moved to a private message, with a priced reply sent automatically from your catalogue at today’s rate. You can require approval first, and the conversation stays on the customer’s record.' },
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
    { q: 'How can a jeweller offer a gold savings plan?', a: 'Run it as a plan on the customer’s own record: enrolment with KYC, payments at the desk or by link, a ledger she can be shown, and redemption into jewellery at your counter. Gram-based plans in Jwero are being corrected and are not offered yet. Check the rules that apply to you before launching.' },
  ],
  'products/ecommerce': [
    { q: 'How do I build a jewellery website with live gold rates?', a: 'Use a website where each piece is priced from weight, purity and the day’s rate, so prices change when the rate does. Jwero’s ecommerce website does this from the same catalogue and stock as your counter.' },
    { q: 'How do I list jewellery on Google Shopping?', a: 'Google needs a product feed with price, image and availability. Jwero keeps that product data accurate in one catalogue, so the feed you give Google carries the same prices and stock as your counter.' },
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
    { q: 'Can I connect my own AI agent to my jewellery software?', a: 'Yes. An AI agent of your own can connect to Jwero and read and act on your data within the permissions you give it. Webhooks and APIs are available for other integrations.' },
  ],
  'products/reports': [
    { q: 'Which reports should a jewellery owner see daily?', a: 'Today’s sales by counter and branch, cash against bills, stock value at today’s rate, pieces ageing, scheme collections due and enquiries not yet answered. In Jwero these sit on one dashboard.' },
  ],
  'products/crm': [
    { q: 'How do I remember customer birthdays and anniversaries?', a: 'Record the dates once on the customer’s record. Jwero lists who has an occasion coming, weeks ahead, and sends a personal message automatically, or holds it for approval if you ask for that.' },
  ],
  'products/billing-finance': [
    { q: 'How do I collect outstanding payments from customers?', a: 'Keep every due on the customer’s or party’s account, see what is overdue, and send a reminder with a payment link. Jwero sends the reminders automatically; payment is made by the customer.' },
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
