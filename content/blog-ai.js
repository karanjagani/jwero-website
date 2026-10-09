// AI articles for jewellers (2026-10-07). Written for the searches jewellers and
// their customers make about AI, and grounded only in what pim-app ships, as
// confirmed by Jwero in this session: AI agents with approvals, caps and a kill
// switch; AI replies on WhatsApp, Instagram and web chat; voice AI and calls in
// many languages; listings and images from photos; AI video; AI ad creatives and
// audiences from segments; AI-written email with A/B tests; journeys built in
// plain English; reports from a question; rule-based explainable scores; voice
// quotations; AI website sections; CCTV people counting; an MCP connection.
// Not claimed anywhere: virtual try-on, demand forecasting, face recognition.
const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Blog', '/blog'], [label]];
const DATE = '2026-10-07';
const schema = (headline, description) => ({
  '@context': 'https://schema.org', '@type': 'BlogPosting', headline, description,
  datePublished: DATE, dateModified: DATE,
  author: { '@type': 'Organization', name: 'Jwero editorial team', url: 'https://jwero.ai/company' },
  publisher: { '@type': 'Organization', name: 'Jwero' },
});
const meta = (mins) => `<p class="post-meta"><span>AI for jewellers</span> · <span>${mins} min read</span> · <span>By the Jwero editorial team</span> · <span>Published October 2026</span></p>`;
const MORE = require('./blog-ai-more');
const post = ({ slug, title, description, h1, sub, mins, body, faqs, product, wa, close }) => {
  const more = MORE[slug] || { body: '', faqs: [] };
  body += more.body; faqs = faqs.concat(more.faqs); if (more.body) mins += 3;
  return ({
  slug: `blog/${slug}`, title, description, breadcrumbs: BC(h1), schema: schema(h1, description), faqs,
  body: `
${L.hero({ eyebrow: 'GUIDE · AI FOR JEWELLERS', h1, sub, secondary: { href: product[0], label: product[1] } })}
${L.section(meta(mins))}
${L.section(`<div class="post-body">${body}
  <p class="post-note"><b>More on AI.</b> <a href="/blog/ai-agents-for-jewellers">AI agents</a> · <a href="/blog/is-ai-safe-for-jewellery-business">Is AI safe?</a> · <a href="/blog/ai-cost-for-jewellers">What AI costs</a> · <a href="/ai-for-jewellers-use-cases">25 use cases</a></p></div>`)}
${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'What jewellers ask about this.', '')}${L.faqBlock(faqs)}`)}
${L.ctaBand(close[0], close[1], wa)}
`,
}); };

const agents = post({
  slug: 'ai-agents-for-jewellers',
  title: 'AI Agents for Jewellers: What They Do, and How You Stay in Control | Jwero',
  description: 'What an AI agent does in a jewellery business: replies, follow-ups, reminders and calls, done on its own inside daily caps, with a kill switch, a log of every action and approval where you want it.',
  h1: 'AI agents for jewellers',
  mins: 6,
  sub: 'An AI agent is not a chatbot that guesses. It is a member of staff with a job, a list of things it may do, and limits that its manager sets.',
  product: ['/products/ai-sales-agents', 'See AI agents in Jwero'],
  wa: 'blog-ai-agents',
  close: ['Staff that work inside your limits.', 'Start one Jwero agent on one job. It works on its own, with approval wherever you want it.'],
  faqs: [
    { q: 'What is an AI agent in a jewellery shop?', a: 'Software that does a defined job, such as answering enquiries, following up quotes or reminding scheme members, using your catalogue, prices and customer records, within limits you set.' },
    { q: 'Will an AI agent send messages without asking?', a: 'Yes, inside the daily caps and quiet hours you set. In Jwero agents work on their own, and you choose which kinds of action must wait for your approval.' },
    { q: 'Can I stop it instantly?', a: 'Yes. One switch stops it, from one agent to everything, and there is a daily cap on how much an agent may do.' },
  ],
  body: `
  <h2>A job, not a chat window</h2>
  <p>Most “AI for jewellers” talk is about chatbots. An agent is different: it has a duty, such as the night shift on WhatsApp, chasing quiet quotations or reminding scheme members, and it works from your real catalogue, today’s rate and each customer’s history.</p>
  <h2>The jobs that suit an agent</h2>
  <ul>
    <li><b>First reply</b> to every enquiry, at any hour, with pieces priced at today’s rate.</li>
    <li><b>Follow-ups</b> on quiet chats, open quotations and abandoned enquiries.</li>
    <li><b>Reminders</b> for scheme instalments, collections and appointments, by message or call.</li>
    <li><b>Occasion outreach</b> for birthdays, anniversaries and festivals, planned weeks ahead.</li>
  </ul>
  <h2>How you stay in charge</h2>
  <p>Set a daily cap and quiet hours. Decide which actions must wait for a person, such as anything that touches a discount. Watch the activity log, which records what was done, when and why. Some owners begin in Assist mode, where the agent drafts and a person approves, and release one action at a time. That is a choice, not a requirement.</p>
  <h2>What an agent should never do</h2>
  <p>Set prices, give discounts, promise delivery dates it cannot see, or argue with an unhappy customer. Those go to a person, with the conversation so far.</p>
  <h2>How Jwero does it</h2>
  <p>Jwero’s AI workforce speaks your customers’ languages by chat and voice, including Hindi, Arabic and English, works on WhatsApp, Instagram, web chat and phone, and reads the same customer record as your team. See <a href="/products/ai-sales-agents">AI sales agents</a> and <a href="/platform/ai-workforce">how governance works</a>.</p>`,
});

const waBot = post({
  slug: 'ai-whatsapp-chatbot-jewellery-shop',
  title: 'AI WhatsApp Chatbot for a Jewellery Shop: What It Should Answer | Jwero',
  description: 'How an AI WhatsApp chatbot helps a jewellery shop: today’s rate, prices, catalogue, visits and payments, answered in seconds, with a person taking over when it matters.',
  h1: 'AI WhatsApp chatbot for jewellery shops',
  mins: 6,
  sub: '“Rate kya hai?”, “Is this available?”, “Can I see it on video?” A good WhatsApp chatbot answers these in seconds, with real prices, and knows when to hand over.',
  product: ['/products/whatsapp', 'See WhatsApp in Jwero'],
  wa: 'blog-ai-wabot',
  close: ['Every WhatsApp answered, with a real price.', 'Jwero’s AI replies automatically from your catalogue and today’s rate.'],
  faqs: [
    { q: 'Can a WhatsApp chatbot tell customers today’s gold rate?', a: 'Yes, if it reads your rate. Jwero’s replies use the same rate and pricing rules as your counter, so the price in the chat matches the bill.' },
    { q: 'Do I need the WhatsApp Business API for an AI chatbot?', a: 'Yes. The free Business app does not support a shared team inbox or automated replies at scale. Jwero sets up the official API on your number.' },
    { q: 'What if the chatbot cannot answer?', a: 'It hands the chat to a person with the conversation and the customer’s history, rather than guessing.' },
  ],
  body: `
  <h2>The questions every jeweller gets</h2>
  <ul><li>Today’s 22K and 18K rate.</li><li>The price of a piece in a photo.</li><li>Whether it is in stock, and at which branch.</li><li>Making charges and GST.</li><li>A video call, a visit or a custom design.</li></ul>
  <h2>What separates a useful chatbot from an annoying one</h2>
  <p>A menu of “press 1 for rates” is not AI. A useful assistant understands a typed or spoken question in the customer’s language, answers with real pieces at today’s price, and remembers that she bought a bangle last Diwali.</p>
  <h2>Where it must hand over</h2>
  <p>Negotiation, complaints, large custom orders and anyone who asks for a person. Hand over with context, not “please call the shop”.</p>
  <h2>What to measure</h2>
  <p>Time to first reply, enquiries answered after hours, visits booked from chat, and payments taken in the chat.</p>
  <h2>How Jwero does it</h2>
  <p>On the official WhatsApp Business API, Jwero’s AI replies automatically from your catalogue and the customer’s record, can answer by voice note, takes payments in the chat, and asks for approval only where you require it. See <a href="/products/whatsapp">WhatsApp</a> and <a href="/products/ai-sales-agents">AI agents</a>.</p>`,
});

const igAi = post({
  slug: 'ai-instagram-dm-automation-jewellers',
  title: 'AI Instagram DM Automation for Jewellers: Comments to Sales | Jwero',
  description: 'How jewellers use AI on Instagram: price comments turned into DMs, replies with pieces at today’s rate, story replies in one inbox, and payment links inside the DM.',
  h1: 'AI Instagram DM automation for jewellers',
  mins: 5,
  sub: 'A reel brings sixty “price?” comments. By the time someone replies, most have moved on. AI can answer every one, with a real price, on its own.',
  product: ['/products/instagram-facebook', 'See Instagram in Jwero'],
  wa: 'blog-ai-ig',
  close: ['Every comment answered.', 'Jwero turns price comments into DMs and sends the reply from your catalogue.'],
  faqs: [
    { q: 'Is Instagram DM automation allowed?', a: 'Yes, through Meta’s official connection. Tools that log in as you or scrape comments risk your account.' },
    { q: 'Can AI reply to story replies and mentions?', a: 'In Jwero, story replies, mentions and Messenger land in the same inbox as DMs, and AI replies.' },
    { q: 'Can customers pay from the DM?', a: 'Yes. Send a payment link inside the DM; the order and invoice land on her record.' },
  ],
  body: `
  <h2>Why “price?” comments are lost sales</h2>
  <p>A comment is a buyer raising a hand in public. Answer late, or with “DM us”, and she has already asked three other shops.</p>
  <h2>What AI should do</h2>
  <ul><li>Send a DM to every price comment automatically.</li><li>Reply with the piece and similar ones at today’s rate.</li><li>Offer a video call, a visit or a payment link.</li><li>Follow up the ones who go quiet.</li></ul>
  <h2>Keep it human</h2>
  <p>Customers can tell a canned reply; they rarely mind a fast, accurate one. Keep approval on for the replies you want a person to see first.</p>
  <h2>How Jwero does it</h2>
  <p>Comments become DMs automatically, AI replies from the customer’s taste and purchases, with approval only where you want it, and sales are traced back to the reel. See <a href="/products/instagram-facebook">Instagram and Facebook</a>.</p>`,
});

const voice = post({
  slug: 'voice-ai-hindi-jewellery-business',
  title: 'Voice AI in Hindi and Regional Languages for Jewellers | Jwero',
  description: 'Voice AI for jewellery businesses: answering and calling customers in Hindi, Gujarati, Tamil and other languages, on WhatsApp, web chat and the phone.',
  h1: 'Voice AI in Hindi and regional languages',
  mins: 5,
  sub: 'Many customers would rather speak than type, and in the language they speak at home. Voice AI now handles both, if it is set up for a jewellery shop.',
  product: ['/ai-calling-for-jewellers', 'See AI calling'],
  wa: 'blog-ai-voice',
  close: ['Speak her language.', 'Jwero’s voice AI talks to customers in their own language, on chat and on calls.'],
  faqs: [
    { q: 'Which languages does Jwero’s voice AI speak?', a: '14: English, Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, Bengali, Malayalam, Punjabi, Odia, Arabic, Spanish and French.' },
    { q: 'Does it understand Hinglish?', a: 'Mixed Hindi and English is common, and staff at the counter can give instructions in English, Hindi or Hinglish.' },
    { q: 'Do I need a phone line?', a: 'Voice on WhatsApp and web chat needs nothing extra. Phone calls run over your telephony provider.' },
  ],
  body: `
  <h2>Why voice matters in India</h2>
  <p>Older customers and busy families often send voice notes or call. A text-only assistant leaves them out.</p>
  <h2>Where voice AI helps</h2>
  <ul><li>Answering voice notes on WhatsApp.</li><li>Scheme reminders by phone in the customer’s language.</li><li>Confirming appointments and ready-for-collection calls.</li><li>Inbound calls about rates, timings and stock.</li></ul>
  <h2>Set it up well</h2>
  <p>Write the script with your own phrases, pick the language per customer, keep calls short, and hand over to a person on request.</p>
  <h2>How Jwero does it</h2>
  <p>Voice is built into WhatsApp and web chat, and phone calls run over your provider at ₹7 a call, up to 8 at once, with transcripts on the customer record. See <a href="/ai-calling-for-jewellers">AI calling</a>.</p>`,
});

const schemes = post({
  slug: 'ai-gold-scheme-collections',
  title: 'AI for Gold Scheme Collections: Reminders, Calls and Auto-Collect | Jwero',
  description: 'How AI keeps gold savings scheme members paying: reminders by WhatsApp and voice call, automatic collection, maturity outreach, and members who drift caught early.',
  h1: 'AI for gold scheme collections',
  mins: 5,
  sub: 'Scheme members rarely quit. They drift: one missed instalment, then two. AI catches the drift early and keeps the plan healthy without a call centre.',
  product: ['/products/gold-schemes', 'See gold schemes in Jwero'],
  wa: 'blog-ai-schemes',
  close: ['No member left to drift.', 'Jwero reminds, calls and collects instalments, and invites members in at maturity.'],
  faqs: [
    { q: 'Can AI call scheme members about instalments?', a: 'Yes. Jwero’s voice agent calls in the member’s language and sends a payment link on WhatsApp.' },
    { q: 'Can instalments be collected automatically?', a: 'Yes, Jwero can collect scheme instalments automatically, with reminders before each one.' },
    { q: 'What happens at maturity?', a: 'Members nearing maturity are added to the showroom’s expected-visits list at their nearest branch, with the balance noted.' },
  ],
  body: `
  <h2>Where schemes leak</h2>
  <p>Reminders sent late, calls nobody has time for, and maturity dates noticed after the member has walked into a competitor.</p>
  <h2>What AI does</h2>
  <ul><li>Reminders a few days before each instalment, on WhatsApp.</li><li>A voice call for members who did not respond.</li><li>Automatic collection where the member agrees.</li><li>Outreach before maturity, with pieces that fit the balance.</li></ul>
  <h2>Keep it respectful</h2>
  <p>Cap reminders, stop on request, and let a person handle anyone in difficulty.</p>
  <h2>How Jwero does it</h2>
  <p>Enrolment from the website, apps, WhatsApp or showroom; instalments collected automatically; AI reminders and calls; maturity on the expected-visits list. See <a href="/products/gold-schemes">gold schemes</a>.</p>`,
});

const prompts = post({
  slug: 'chatgpt-prompts-for-jewellers',
  title: 'ChatGPT Prompts for Jewellers, and When a Jewellery Tool Is Better | Jwero',
  description: 'Useful ChatGPT prompts for jewellers: descriptions, captions, replies and festival posts, and the limits: no live rate, no stock, no customer history.',
  h1: 'ChatGPT prompts for jewellers',
  mins: 7,
  sub: 'ChatGPT is a good writing partner. It does not know today’s rate, your stock or your customers. Here are prompts that work, and where a jewellery tool does the job better.',
  product: ['/products/ai-sales-agents', 'See Jwero’s jewellery AI'],
  wa: 'blog-ai-prompts',
  close: ['AI that knows your shop.', 'Jwero’s AI writes from your catalogue, today’s rate and each customer’s record.'],
  faqs: [
    { q: 'Can ChatGPT write jewellery product descriptions?', a: 'Yes, if you give it the facts: metal, purity, weight, stones and the occasion. Always check the facts it repeats; it can invent details.' },
    { q: 'Can ChatGPT tell a customer the price?', a: 'No. It has no live gold rate, your making charges or your stock. Prices must come from your own system.' },
    { q: 'Is it safe to paste customer details into ChatGPT?', a: 'Avoid it. Customer phone numbers, purchases and KYC are personal data; keep them in your own system.' },
  ],
  body: `
  <h2>Prompts that work</h2>
  <p><b>Product description:</b> “Write a 60-word description for a 22K gold temple necklace, 38 grams, with kempstones, for a South Indian bride. Warm, not flowery. No prices.”</p>
  <p><b>Instagram caption:</b> “Three short captions for a reel of lightweight daily-wear gold chains under 10 grams, for working women. Include one question to invite comments.”</p>
  <p><b>Festival post:</b> “A WhatsApp message for Akshaya Tritiya inviting scheme members to visit, in Hindi and English, under 50 words.”</p>
  <p><b>Reply to a review:</b> “A polite reply to a 3-star review about a long wait at the counter. Apologise once, explain the new appointment option.”</p>
  <h2>Make the prompts better</h2>
  <ul><li>Give facts, not adjectives.</li><li>Say who it is for and where it will appear.</li><li>Set a word limit.</li><li>Ask for three options and pick one.</li></ul>
  <h2>Where ChatGPT stops</h2>
  <p>It cannot see today’s rate, the stock, a customer’s last purchase or her scheme balance. It cannot send, approve or record anything. That is where a jewellery system is needed.</p>
  <h2>How Jwero does it</h2>
  <p>Jwero’s AI writes listings from photos, captions, emails and replies using your catalogue and records, and you choose which of them need your approval before they go out. You can also <a href="/blog/connect-chatgpt-claude-to-jewellery-business">connect ChatGPT or Claude to Jwero</a>.</p>`,
});

const listings = post({
  slug: 'ai-jewellery-listings-from-photos',
  title: 'AI Jewellery Listings from Photos: Descriptions, Tags and Captions | Jwero',
  description: 'How AI turns a jewellery photo into a product listing: type, description, tags and captions, with weights and stones from your stock record, checked by your team.',
  h1: 'AI jewellery listings from photos',
  mins: 5,
  sub: 'Listing two thousand pieces by hand takes months. AI reads the photo, writes the listing and leaves your team to check, not type.',
  product: ['/products/catalog', 'See the catalogue in Jwero'],
  wa: 'blog-ai-listings',
  close: ['From photo to listing.', 'Jwero writes the listing; your stock record supplies the weights and stones.'],
  faqs: [
    { q: 'Can AI tell the weight or purity from a photo?', a: 'No, and it should not guess. Weights, purity and stones come from your stock record; AI writes the type, description and captions.' },
    { q: 'How long does it take to list a catalogue with AI?', a: 'Minutes per piece to check instead of many minutes to type. Use the calculator on the catalogue page with your own numbers.' },
    { q: 'Is AI listing charged?', a: 'In Jwero, AI listing is charged per product from the wallet.' },
  ],
  body: `
  <h2>What AI can read from a photo</h2>
  <p>The type of piece, its style, the look of the stones and the occasion it suits. Enough to write a good description and captions.</p>
  <h2>What it must not invent</h2>
  <p>Weight, purity, stone carat and certificate numbers. These come from the stock record or the certificate, never from a guess.</p>
  <h2>A good workflow</h2>
  <ol><li>Photograph in batches.</li><li>Match each photo to its stock record.</li><li>Let AI write description, tags and captions.</li><li>Check and publish.</li></ol>
  <h2>How Jwero does it</h2>
  <p>AI turns the photo into the listing, the stock record fills the facts, and the catalogue syncs to your website, WhatsApp catalogue, Google Shopping and Meta. See <a href="/products/catalog">catalogue and PIM</a>.</p>`,
});

const images = post({
  slug: 'ai-jewellery-product-photos',
  title: 'AI Jewellery Product Photos: Clean Backgrounds and Edits Without a Studio | Jwero',
  description: 'How jewellers use AI to generate and edit product images from a phone photo, what it does well, and what it should not do, such as altering the piece itself.',
  h1: 'AI jewellery product photos',
  mins: 5,
  sub: 'A studio shoot for every new piece is slow and costly. AI can turn a careful phone photo into a clean product image, as long as the piece itself stays true.',
  product: ['/products/catalog', 'See AI images in Jwero'],
  wa: 'blog-ai-photos',
  close: ['Clean images, true pieces.', 'Jwero generates and edits product images from your photos, charged per image.'],
  faqs: [
    { q: 'Can AI make jewellery photos from a phone picture?', a: 'Yes. Jwero can generate or edit a product image from a product photo, charged per image from the wallet.' },
    { q: 'Does Jwero offer virtual try-on?', a: 'No. Jwero does not create virtual try-on images.' },
    { q: 'Is it honest to use AI images?', a: 'Yes, if the piece is shown as it is. Change the background and lighting, never the design, stones or colour of the metal.' },
  ],
  body: `
  <h2>Start with a good photo</h2>
  <p>Daylight or a light box, a plain surface, the piece in focus and filling the frame. AI improves a decent photo; it cannot rescue a blurry one.</p>
  <h2>What AI does well</h2>
  <ul><li>Clean, consistent backgrounds across a collection.</li><li>Lighting and colour correction.</li><li>Images sized for website, WhatsApp and Instagram.</li></ul>
  <h2>The honesty rule</h2>
  <p>Never let AI change the piece: not the stones, not the finish, not the size. A customer who receives something different from the photo will not come back.</p>
  <h2>How Jwero does it</h2>
  <p>Generate or edit images from a product photo inside the catalogue, keep them in the photo library, and reuse them on every channel. See <a href="/products/catalog">catalogue</a> and <a href="/ai-jewellery-photography">AI jewellery photography</a>.</p>`,
});

const video = post({
  slug: 'ai-video-jewellery-reels',
  title: 'AI Video for Jewellery Reels and Social Posts | Jwero',
  description: 'How jewellers use AI to make reels and short videos from product photos, write captions, and publish to Instagram, Facebook, YouTube and more from one place.',
  h1: 'AI video for jewellery reels',
  mins: 5,
  sub: 'Reels sell jewellery, but making one a day is a job. AI turns product photos into short videos and drafts the caption, so posting stays regular.',
  product: ['/products/social-media', 'See social media in Jwero'],
  wa: 'blog-ai-video',
  close: ['A reel a day, without a video team.', 'Jwero makes AI video from your photos and publishes to eight platforms.'],
  faqs: [
    { q: 'Can AI make jewellery videos from photos?', a: 'Yes. Jwero makes AI video for posts and ads from your product images.' },
    { q: 'Where can I publish?', a: 'Jwero publishes directly to eight platforms, including Instagram, Facebook and YouTube.' },
    { q: 'Should every post be AI video?', a: 'No. Mix AI video with real footage of the shop, staff and customers. Real moments build trust.' },
  ],
  body: `
  <h2>Why video, and why it stalls</h2>
  <p>Video reaches more people than photos, but shooting and editing daily is hard for a shop. Most accounts post in bursts, then go quiet.</p>
  <h2>What AI helps with</h2>
  <ul><li>Short videos from product photos.</li><li>Captions and hashtags drafted from the catalogue.</li><li>Versions sized for reels, stories and feeds.</li></ul>
  <h2>A simple weekly plan</h2>
  <p>Three AI videos of new pieces, one real video from the shop floor, one customer moment with permission.</p>
  <h2>How Jwero does it</h2>
  <p>AI video for posts and ads, a composer that publishes to eight platforms, comments turned into DMs, and sales traced back to the post. See <a href="/products/social-media">social media</a>.</p>`,
});

const ads = post({
  slug: 'ai-ads-for-jewellers',
  title: 'AI Ads for Jewellers: Creatives, Audiences and Budgets | Jwero',
  description: 'How AI helps jewellers run Google and Instagram ads: image and video creatives, audiences from customer segments, click-to-WhatsApp ads, and sales reported back.',
  h1: 'AI ads for jewellers',
  mins: 6,
  sub: 'Ads fail for jewellers when they are guessed: the wrong people, a generic image, and no idea which sale came from which click. AI fixes the guessing.',
  product: ['/products/ads-manager', 'See Ads Manager'],
  wa: 'blog-ai-ads',
  close: ['Ads that know your customers.', 'Jwero builds audiences from your segments, makes AI creatives and reports sales back.'],
  faqs: [
    { q: 'Can AI create jewellery ad images and videos?', a: 'Yes. Jwero makes AI image and video creatives from your catalogue.' },
    { q: 'Will AI spend my ad budget on its own?', a: 'No. Jwero’s AI strategist drafts campaigns and budgets; a person approves before money is spent, with budget alerts.' },
    { q: 'How do I know an ad made a sale?', a: 'Jwero reports sales back to the ad, including click-to-WhatsApp ads that end in a chat and a bill.' },
  ],
  body: `
  <h2>Start from your customers</h2>
  <p>Your best audience is people like your best buyers. Segments from your own records, such as bridal buyers or lapsed scheme members, beat interest targeting.</p>
  <h2>Creatives that look like jewellery</h2>
  <p>AI can make image and video creatives from product photos. Keep the piece true, and test two versions.</p>
  <h2>Ads that start a conversation</h2>
  <p>Click-to-WhatsApp ads suit jewellery: the buyer asks a question, and the chat is answered at once.</p>
  <h2>Measure sales, not clicks</h2>
  <p>A click is not a customer. Track which ads led to chats, visits and bills.</p>
  <h2>How Jwero does it</h2>
  <p>Audiences generated from segments, AI creatives, click-to-WhatsApp ads, budget alerts and sales reported back. See <a href="/products/ads-manager">Ads Manager</a>.</p>`,
});

const email = post({
  slug: 'ai-email-marketing-jewellers',
  title: 'AI Email Marketing for Jewellers: Write, Test and Track | Jwero',
  description: 'How jewellers use AI for email: campaigns written by AI, A/B tested subject lines, abandoned cart emails, and opens and clicks on each customer’s record.',
  h1: 'AI email marketing for jewellers',
  mins: 5,
  sub: 'Email still sells for jewellers with an online store or an NRI audience. AI makes it quick to write, test and send to the right people.',
  product: ['/products/email', 'See email in Jwero'],
  wa: 'blog-ai-email',
  close: ['Emails that write themselves, and get read.', 'Jwero writes, tests and tracks email on the same record as WhatsApp.'],
  faqs: [
    { q: 'Can AI write a jewellery email campaign?', a: 'Yes. In Jwero, AI writes the subject and copy from your brief, and you edit in a drag-and-drop designer before approving.' },
    { q: 'Can I test two subject lines?', a: 'Yes. A/B test them and send the winner to the rest.' },
    { q: 'Do abandoned cart emails work for jewellery?', a: 'They help, especially with a reminder of the piece and an easy way to ask a question or book a visit.' },
  ],
  body: `
  <h2>Who still reads jewellery email</h2>
  <p>Online buyers, families abroad, corporate gifting clients and customers who opted in at the counter.</p>
  <h2>Where AI helps</h2>
  <ul><li>Drafting the subject and copy from a short brief.</li><li>Writing variants to A/B test.</li><li>Personalising with name and last purchase.</li></ul>
  <h2>Emails that send themselves</h2>
  <p>Abandoned cart, browsed but did not buy, birthdays and anniversaries.</p>
  <h2>How Jwero does it</h2>
  <p>AI-written campaigns, a drag-and-drop designer, A/B tests, opens and clicks on each record, and mailboxes on your own domain. See <a href="/products/email">email</a>.</p>`,
});

const segments = post({
  slug: 'ai-customer-segmentation-jewellers',
  title: 'AI Customer Segmentation for Jewellers: Who to Contact, and Why | Jwero',
  description: 'How jewellers group customers by value, taste, occasion and engagement, and use those segments for campaigns, ads and journeys instead of messaging everyone.',
  h1: 'AI customer segmentation for jewellers',
  mins: 5,
  sub: 'Messaging every customer the same offer wastes money and goodwill. Segments decide who hears about bridal sets, who about daily wear, and who simply gets a thank-you.',
  product: ['/products/segmentation', 'See segmentation in Jwero'],
  wa: 'blog-ai-segments',
  close: ['The right customers, every time.', 'Jwero has 41 ready segments and builds ads and journeys from them.'],
  faqs: [
    { q: 'What segments should a jeweller use?', a: 'Start with value (recent, frequent, high spend), occasion (anniversary this month), taste (bridal, daily wear, diamonds) and scheme status.' },
    { q: 'Can segments create ads?', a: 'Yes. In Jwero, ads can be generated from a segment, so the audience matches your real buyers.' },
    { q: 'Does social engagement count?', a: 'Yes. Comments, follows and likes on Instagram, Facebook and YouTube can earn loyalty points and shape segments.' },
  ],
  body: `
  <h2>Why one list fails</h2>
  <p>A bride’s family, a daily-wear buyer and a scheme member want different things. One broadcast to all of them is noise.</p>
  <h2>Useful segments</h2>
  <ul><li>High-value customers who have not bought in a year.</li><li>Anniversaries in the next 30 days.</li><li>Scheme members near maturity.</li><li>Browsed bridal online but never visited.</li></ul>
  <h2>Use them everywhere</h2>
  <p>The same segment should drive the WhatsApp campaign, the email, the ad audience and the journey.</p>
  <h2>How Jwero does it</h2>
  <p>41 ready segments, built from purchases, chats, visits and engagement, used by campaigns, journeys and ads. See <a href="/products/segmentation">segmentation</a>.</p>`,
});

const scores = post({
  slug: 'ai-customer-scoring-jewellers',
  title: 'Customer Scoring for Jewellers: Who Is Ready to Buy, Explained | Jwero',
  description: 'How customer scores help a jewellery team decide who to call first, why scores should explain themselves, and the signals that matter: visits, chats, schemes and wishlists.',
  h1: 'Customer scoring for jewellers',
  mins: 5,
  sub: 'Every day the team has more people to follow up than time. A score that says who is ready, and why, decides where the hour goes.',
  product: ['/platform/customer-memory', 'See customer intelligence'],
  wa: 'blog-ai-scores',
  close: ['Call the right customer first.', 'Jwero’s scores show who is ready and the reason, from every signal she gives.'],
  faqs: [
    { q: 'What signals predict a jewellery purchase?', a: 'Repeat visits, pieces tried, wishlists, questions about price or availability, scheme maturity and upcoming occasions.' },
    { q: 'Should I trust a score without a reason?', a: 'No. A score your team cannot explain is a score they will ignore. Jwero shows why each score is what it is.' },
    { q: 'Is it predictive AI?', a: 'Jwero’s scores are rule-based and explainable, built from real signals, not a black box.' },
  ],
  body: `
  <h2>Why gut feel is not enough</h2>
  <p>Salespeople remember the loud customers. The quiet one who tried the same necklace twice is the one who buys elsewhere.</p>
  <h2>Signals that matter</h2>
  <ul><li>Visits and pieces tried.</li><li>Wishlist and browsing.</li><li>Questions about price, size or delivery.</li><li>Scheme maturity and occasions.</li></ul>
  <h2>Scores must explain themselves</h2>
  <p>“High intent because she viewed the bridal set three times this week and her scheme matures in 12 days” gets a call. A bare number does not.</p>
  <h2>How Jwero does it</h2>
  <p>Every signal a customer gives, read into live scores, each with its reason, on the customer record and in the team’s follow-up list. See <a href="/platform/customer-memory">customer intelligence</a>.</p>`,
});

const reportsAi = post({
  slug: 'ai-reports-jewellery-business',
  title: 'Ask Your Jewellery Business a Question: AI Reports | Jwero',
  description: 'How AI reports work for jewellers: type a question like “which branch holds the most 180-day bangles?” and get the report, chart and answer, then pin or schedule it.',
  h1: 'Ask your business a question: AI reports',
  mins: 5,
  sub: 'Owners have questions every day and no time to build a report. AI turns the question into the report, from the same data the counter writes.',
  product: ['/products/reports', 'See reports in Jwero'],
  wa: 'blog-ai-reports',
  close: ['Ask, and get the answer.', 'Jwero builds the report from your question, on every branch’s data.'],
  faqs: [
    { q: 'What can I ask?', a: 'Anything on the record: sales by branch, stock ageing, scheme dues, receivables, staff, campaigns and visits.' },
    { q: 'Is the AI answer reliable?', a: 'It builds the report’s source, filters and chart, and you see exactly what it used, so nothing is hidden.' },
    { q: 'Can I see it on my phone?', a: 'Yes. Pin it to the owner’s dashboard on mobile, schedule it, or export to Excel.' },
  ],
  body: `
  <h2>Good questions to start with</h2>
  <ul><li>Which pieces have not sold in 180 days, by branch?</li><li>Which salespeople convert walk-ins best?</li><li>Which scheme members are overdue this month?</li><li>Which campaign brought the most visits?</li></ul>
  <h2>Why one record matters</h2>
  <p>AI can only answer from data it can see. When billing, stock, schemes and chats live in different tools, the answer is partial.</p>
  <h2>How Jwero does it</h2>
  <p>Type the question; AI builds the report; pin it, schedule it, or export to Excel. See <a href="/products/reports">reports</a>.</p>`,
});

const mcp = post({
  slug: 'connect-chatgpt-claude-to-jewellery-business',
  title: 'Connect ChatGPT or Claude to Your Jewellery Business Data | Jwero',
  description: 'How jewellers can let an AI assistant like ChatGPT or Claude read their own business data safely, what to allow, and what to keep behind approval.',
  h1: 'Connect ChatGPT or Claude to your jewellery business',
  mins: 5,
  sub: 'General AI assistants are good at thinking and writing, but know nothing about your shop. A secure connection lets them answer from your real data, within limits.',
  product: ['/platform/integrations', 'See integrations'],
  wa: 'blog-ai-mcp',
  close: ['Your assistant, your data, your rules.', 'Jwero offers a governed connection for AI assistants, with the same permissions as your team.'],
  faqs: [
    { q: 'What is MCP?', a: 'Model Context Protocol, an open standard that lets AI assistants connect to business software through defined tools, instead of copying data in.' },
    { q: 'Is it safe to connect an AI assistant?', a: 'It is safer than pasting data into a chat. Give read access first, keep sending and changes behind approval, and use a separate login you can revoke.' },
    { q: 'Does Jwero support it?', a: 'Jwero has a first-party MCP connection, metered with API use, governed by the same permissions as staff.' },
  ],
  body: `
  <h2>Why not just paste data in?</h2>
  <p>Copying sales or customer lists into a chat window leaks personal data, goes stale at once and cannot be audited.</p>
  <h2>What a connection allows</h2>
  <ul><li>Ask “what sold best this Diwali?” and get the answer from your records.</li><li>Draft a campaign from a real segment.</li><li>Look up a customer’s history before a call.</li></ul>
  <h2>Rules to set</h2>
  <p>Read first, act later. Keep messages, prices and payments behind approval. Log every request.</p>
  <h2>How Jwero does it</h2>
  <p>A first-party MCP connection with the same role permissions and approvals as your team, and usage metered on the wallet. See <a href="/platform/integrations">integrations</a> and <a href="/platform/ai-workforce">AI governance</a>.</p>`,
});

const safe = post({
  slug: 'is-ai-safe-for-jewellery-business',
  title: 'Is AI Safe for a Jewellery Business? Approvals, Limits and Data | Jwero',
  description: 'The real risks of AI for jewellers: wrong prices, unapproved messages, discounts, and customer data, and the controls that remove them.',
  h1: 'Is AI safe for a jewellery business?',
  mins: 6,
  sub: 'The worry is reasonable: an AI that quotes the wrong rate or messages the wrong customer can cost money and trust. The answer is not to avoid AI, but to control it.',
  product: ['/platform/ai-workforce', 'See AI governance'],
  wa: 'blog-ai-safe',
  close: ['AI inside your limits.', 'Jwero’s AI agents work on their own inside caps and quiet hours, with a kill switch, and ask for approval only where you require it.'],
  faqs: [
    { q: 'Can AI give a wrong price?', a: 'A general chatbot can. One that prices from your own rate and rules gives the same price as your counter.' },
    { q: 'Can AI give a discount?', a: 'It should not. In Jwero, prices and discounts follow your price rules and staff permissions; the AI sends messages, it does not set prices.' },
    { q: 'Where does customer data go?', a: 'Keep it in a system you control, with role permissions and the ability to export or delete. Avoid pasting it into public chat tools.' },
  ],
  body: `
  <h2>The four real risks</h2>
  <ul><li><b>Wrong facts:</b> a rate, a weight or a stone invented.</li><li><b>Wrong action:</b> a message sent to the wrong person, or too many.</li><li><b>Money:</b> a discount or a refund nobody approved.</li><li><b>Data:</b> customer details copied somewhere they should not be.</li></ul>
  <h2>The controls that answer them</h2>
  <ul><li>Prices only from your own rate and rules.</li><li>Approval before sending, for the actions you choose.</li><li>Daily caps and quiet hours.</li><li>A kill switch you can reach in one tap.</li><li>An activity log of what, when, why and who approved.</li></ul>
  <h2>Start small</h2>
  <p>One duty, low caps, a week of reading the log. Some owners keep approval on for that week. Widen from there.</p>
  <h2>How Jwero does it</h2>
  <p>AI agents work on their own inside daily and money caps and quiet hours, with a per-action switch for approval, one switch that stops it from one agent to everything, and a full log. See <a href="/platform/ai-workforce">AI governance</a> and the <a href="/trust">Trust Centre</a>.</p>`,
});

const cost = post({
  slug: 'ai-cost-for-jewellers',
  title: 'What Does AI Cost a Jewellery Business? | Jwero',
  description: 'How AI is priced for jewellers: per call, per message, per listing or image, or per seat, how to estimate a month, and how to compare it with staff time.',
  h1: 'What does AI cost a jeweller?',
  mins: 5,
  sub: 'AI pricing is confusing: per seat, per message, per call, per image. Here is how to estimate a real month, and how to tell whether it pays.',
  product: ['/pricing', 'See Jwero pricing'],
  wa: 'blog-ai-cost',
  close: ['Pay for what AI does.', 'Jwero includes every module; AI use runs on a prepaid wallet.'],
  faqs: [
    { q: 'How much does an AI call cost?', a: 'Jwero’s AI calls cost ₹7 a call, all inclusive: the AI, the voice and the line.' },
    { q: 'Are AI listings and images charged?', a: 'Yes, per product listed and per image, from the wallet.' },
    { q: 'Is there a separate AI subscription?', a: 'No. Jwero One includes every module; AI use, messages and calls are paid from a prepaid wallet.' },
  ],
  body: `
  <h2>The common pricing models</h2>
  <ul><li>Per seat, whether you use it or not.</li><li>Per conversation or message.</li><li>Per call or minute.</li><li>Per item: a listing, an image, a video.</li></ul>
  <h2>Estimate a month</h2>
  <p>Count the work, not the hype: reminder calls, listings, images, replies. Multiply by the unit price. Compare with the staff hours it replaces and the sales it recovers.</p>
  <h2>A worked example</h2>
  <p>500 scheme reminder calls at ₹7 is ₹3,500 a month. If they keep ten more members paying on time, they pay for themselves many times over.</p>
  <h2>How Jwero does it</h2>
  <p>Jwero One is ₹18,000 a month with every module; AI calls, messages, listings and images run on a prepaid wallet. See <a href="/pricing">pricing</a>.</p>`,
});

const site = post({
  slug: 'ai-website-builder-jewellery-store',
  title: 'AI Website Builder for a Jewellery Store: Sections in Minutes | Jwero',
  description: 'How AI helps jewellers build an ecommerce website: sections generated from a brief, prices that follow the gold rate, and products synced from the catalogue.',
  h1: 'AI website builder for jewellery stores',
  mins: 5,
  sub: 'Building a jewellery website used to mean a developer and weeks of back and forth. AI now drafts the sections; the catalogue and live rate do the rest.',
  product: ['/products/ecommerce', 'See the ecommerce website'],
  wa: 'blog-ai-site',
  close: ['A store that builds and prices itself.', 'Jwero generates sections with AI and prices every product at today’s rate.'],
  faqs: [
    { q: 'Can AI build a jewellery website?', a: 'AI can draft sections, layouts and copy. In Jwero you can generate a section with AI and edit it before publishing.' },
    { q: 'Do prices update with the gold rate?', a: 'Yes. Every product reprices from today’s rate, with metal, making charges, stones and GST shown.' },
    { q: 'Can I use my own domain?', a: 'Yes, a custom domain is included.' },
  ],
  body: `
  <h2>What AI should build</h2>
  <p>Sections: a festive banner, a collection showcase, a story about the shop, an FAQ. Fast drafts you can edit.</p>
  <h2>What AI should not decide</h2>
  <p>Prices and stock. Those must come from the catalogue and the live rate, or the site will be wrong within a day.</p>
  <h2>How Jwero does it</h2>
  <p>Generate a section with AI, pick a jewellery theme, connect your domain; products sync from the catalogue with prices at today’s rate. See <a href="/products/ecommerce">ecommerce website</a>.</p>`,
});

const showroomAi = post({
  slug: 'ai-showroom-walkout-recovery',
  title: 'AI in the Jewellery Showroom: Footfall, Walkouts and Follow-Ups | Jwero',
  description: 'How AI helps the showroom floor: CCTV people counting, conversion from footfall and bills, and follow-ups sent to customers who left without buying.',
  h1: 'AI in the jewellery showroom',
  mins: 5,
  sub: 'Most of a jeweller’s sales still happen on the floor, and most walkouts are never followed up. AI counts who came in and drafts the message to win them back.',
  product: ['/products/showroom', 'See showroom software'],
  wa: 'blog-ai-showroom',
  close: ['No walkout forgotten.', 'Jwero counts footfall from your CCTV and drafts walkout follow-ups for staff to send.'],
  faqs: [
    { q: 'Can AI count footfall from CCTV?', a: 'Yes. Jwero counts entries, exits and how full the floor is from existing IP cameras and NVRs, through an on-site connector.' },
    { q: 'Does it recognise faces?', a: 'No. Cameras count people; they do not identify them.' },
    { q: 'Are walkout messages sent automatically?', a: 'No. Walkout Rescue drafts the message naming the pieces tried; a staff member sends it.' },
  ],
  body: `
  <h2>Count first</h2>
  <p>Without footfall, conversion is a guess. AI on your existing CCTV counts who came in, by hour.</p>
  <h2>Then recover</h2>
  <p>A customer who tried four pieces and left over price is the warmest lead you have. A message that same evening, naming those pieces, brings many back.</p>
  <h2>How Jwero does it</h2>
  <p>CCTV counting, tablet check-in with history, pieces logged by scan, and Walkout Rescue drafts. See <a href="/products/showroom">showroom</a> and <a href="/ai-cctv-footfall-analytics-jewellery-showrooms">AI CCTV footfall analytics</a>.</p>`,
});

const wholesale = post({
  slug: 'ai-for-jewellery-wholesalers',
  title: 'AI for Jewellery Wholesalers and Manufacturers | Jwero',
  description: 'Where AI helps jewellery wholesalers and manufacturers: buyer catalogues, retailer follow-ups, AI-drafted purchase orders, listings from photos and reports in plain English.',
  h1: 'AI for jewellery wholesalers and manufacturers',
  mins: 5,
  sub: 'Wholesale runs on hundreds of retailer relationships, thousands of designs and tight metal accounts. AI takes on the repetitive parts.',
  product: ['/products/purchase-vendors', 'See purchase and vendors'],
  wa: 'blog-ai-wholesale',
  close: ['Less typing, more trade.', 'Jwero drafts POs for your approval, writes listings and follows up retailers automatically.'],
  faqs: [
    { q: 'Can AI draft purchase orders?', a: 'Yes. Jwero drafts purchase orders for your approval, including unfixed-rate purchases.' },
    { q: 'Can retailers get their own prices?', a: 'Yes. B2B buyer catalogue links carry each buyer’s own pricing, and can be password protected.' },
    { q: 'Does AI help in the workshop?', a: 'Reports in plain English help track wastage and stock; metal accounts stay with your rules and approvals.' },
  ],
  body: `
  <h2>Catalogues for every buyer</h2>
  <p>AI writes listings from design photos; each retailer gets a private link with their own pricing, and you see what they looked at.</p>
  <h2>Retailer follow-ups</h2>
  <p>AI sends the follow-up after a catalogue view or a sample request, with approval first if you want it.</p>
  <h2>Purchases</h2>
  <p>AI-drafted purchase orders from stock and demand, approved before they go.</p>
  <h2>How Jwero does it</h2>
  <p>See <a href="/products/digital-catalogues">digital catalogues</a>, <a href="/products/purchase-vendors">purchase and vendors</a> and <a href="/products/manufacturing">manufacturing</a>.</p>`,
});

const tryOn = post({
  slug: 'virtual-try-on-jewellery-explained',
  title: 'Virtual Try-On for Jewellery: What It Is and Who Needs It | Jwero',
  description: 'An honest guide to AR and AI virtual try-on for jewellery: how it works, when it helps, what it costs, and the alternatives that sell more for most Indian jewellers.',
  h1: 'Virtual try-on for jewellery, explained',
  mins: 5,
  sub: 'Virtual try-on is one of the most searched AI topics in jewellery. It suits some businesses well. For many Indian jewellers, a video call sells more.',
  product: ['/products/meetings', 'See video shopping in Jwero'],
  wa: 'blog-ai-tryon',
  close: ['Show the real piece.', 'Jwero starts a video call from any chat, with the pieces she asked about ready.'],
  faqs: [
    { q: 'Does Jwero offer virtual try-on?', a: 'No. Jwero does not offer virtual try-on. It offers video calls from WhatsApp and web chat, and try-at-home booking from the website.' },
    { q: 'Who benefits most from virtual try-on?', a: 'Online brands selling rings, earrings and lightweight pieces at scale, where customers cannot visit.' },
    { q: 'Is a video call better?', a: 'For high-value and bridal pieces, often yes: the customer sees the real piece, asks questions and books a visit.' },
  ],
  body: `
  <h2>How virtual try-on works</h2>
  <p>A phone camera tracks the face, ear, neck or hand and overlays a 3D model of the piece. It needs an accurate 3D model for each design.</p>
  <h2>When it helps</h2>
  <p>Online-first brands with many repeatable designs, where customers decide alone on a phone.</p>
  <h2>When it does not</h2>
  <p>One-of-a-kind and high-value pieces, bridal sets chosen by a family, and stones where light and clarity matter. A model cannot show those truthfully.</p>
  <h2>Alternatives that sell</h2>
  <ul><li>A video call showing the real piece.</li><li>Try-at-home appointments.</li><li>Good photos and a short video per piece.</li></ul>
  <h2>Where Jwero stands</h2>
  <p>Jwero does not offer virtual try-on. It offers <a href="/products/meetings">video calls and appointments</a> and <a href="/products/ecommerce">try-at-home booking</a>.</p>`,
});

const forecast = post({
  slug: 'jewellery-demand-forecasting-ai-explained',
  title: 'AI Demand Forecasting for Jewellery: What Works Today | Jwero',
  description: 'An honest look at AI demand forecasting for jewellers: what it needs, why it often fails for one-of-a-kind stock, and the simpler signals that work now.',
  h1: 'AI demand forecasting for jewellery, explained',
  mins: 5,
  sub: '“AI will tell you what to stock” is a common promise. For jewellery, with gold prices moving and many unique pieces, simpler signals are often more reliable.',
  product: ['/products/inventory', 'See inventory in Jwero'],
  wa: 'blog-ai-forecast',
  close: ['Stock decisions from real signals.', 'Jwero shows ageing, dead stock and tried-but-not-bought pieces, today.'],
  faqs: [
    { q: 'Is AI forecasting machine learning?', a: 'Not necessarily. Many reliable forecasts are statistical: they project from sales history and check their own accuracy. Ask any vendor which it is.' },
    { q: 'What should I use instead?', a: 'Stock ageing, sell-through by category and weight band, pieces tried but not bought, and wishlists.' },
    { q: 'When does forecasting work?', a: 'For repeatable designs with long sales history, such as chains, coins and daily-wear lines.' },
  ],
  body: `
  <h2>What forecasting needs</h2>
  <p>Years of clean sales history for repeatable items. Unique pieces and fast-moving gold prices make that hard.</p>
  <h2>Signals that work now</h2>
  <ul><li>Stock ageing by branch and category.</li><li>Dead stock value.</li><li>Tried often, rarely bought.</li><li>Wishlists and enquiries by design.</li></ul>
  <h2>How Jwero helps</h2>
  <p>Jwero shows stock ageing, dead stock and showroom signals such as pieces tried but not bought. See <a href="/products/inventory">inventory</a> and the <a href="/tools/dead-stock-calculator">dead stock calculator</a>.</p>`,
});

const mistakes = post({
  slug: 'ai-mistakes-jewellers-make',
  title: '7 AI Mistakes Jewellers Make, and How to Avoid Them | Jwero',
  description: 'The common mistakes jewellers make with AI: letting it price, running it without limits, generic content, unofficial WhatsApp tools, and buying tools that do not share data.',
  h1: '7 AI mistakes jewellers make',
  mins: 6,
  sub: 'AI is easy to start and easy to get wrong. These are the mistakes we see most, and the fix for each.',
  product: ['/products/ai-sales-agents', 'See AI agents in Jwero'],
  wa: 'blog-ai-mistakes',
  close: ['AI done carefully.', 'Jwero’s AI works from your data, inside the limits you set.'],
  faqs: [
    { q: 'What is the biggest AI mistake for jewellers?', a: 'Letting a general AI quote prices. Prices must come from your own rate and rules.' },
    { q: 'Are unofficial WhatsApp bots risky?', a: 'Yes. Tools that automate a personal number are the most common way jewellers lose their WhatsApp number.' },
    { q: 'How should I start with AI?', a: 'One job, clear caps, measured for a month. Keep approval on at first if you want to watch it.' },
  ],
  body: `
  <ol>
    <li><b>Letting AI set prices.</b> Prices come from your rate and rules, never a guess.</li>
    <li><b>Running AI without limits.</b> Set caps, quiet hours and approval where it matters.</li>
    <li><b>Generic content.</b> Give AI your facts, your pieces and your voice.</li>
    <li><b>Unofficial WhatsApp tools.</b> Use the official API.</li>
    <li><b>Changing the piece in AI images.</b> Edit the background, never the design.</li>
    <li><b>Ten AI tools that do not talk.</b> One record beats five clever apps.</li>
    <li><b>No measurement.</b> Track replies, visits and sales, not messages sent.</li>
  </ol>
  <h2>How Jwero helps</h2>
  <p>AI that works from your catalogue and customer records, with caps, a log and approval where you want it. See <a href="/blog/is-ai-safe-for-jewellery-business">is AI safe?</a></p>`,
});

const journeysAi = post({
  slug: 'ai-marketing-automation-jewellers',
  title: 'AI Marketing Automation for Jewellers: Journeys in Plain English | Jwero',
  description: 'How jewellers use AI to build marketing journeys: describe what you want in plain English, and get a cross-channel journey for occasions, carts, schemes and walkouts.',
  h1: 'AI marketing automation for jewellers',
  mins: 5,
  sub: 'Automation used to mean drawing flowcharts. Now you describe the goal, and AI builds the journey across WhatsApp, email, SMS and calls.',
  product: ['/products/journeys', 'See journeys in Jwero'],
  wa: 'blog-ai-journeys',
  close: ['Describe it, and it runs.', 'Jwero builds cross-channel journeys from plain English, with ready-made ones to start from.'],
  faqs: [
    { q: 'Can AI build a marketing journey?', a: 'Yes. In Jwero, describe it and a detailed cross-channel journey is generated for you to review.' },
    { q: 'Are there ready-made journeys?', a: 'Yes, more than 300, including abandoned cart and browse.' },
    { q: 'What if a customer’s WhatsApp window is closed?', a: 'The message is skipped and the journey continues, rather than stopping.' },
  ],
  body: `
  <h2>Journeys every jeweller needs</h2>
  <ul><li>Anniversary three weeks ahead.</li><li>Abandoned cart and browsed bridal.</li><li>Scheme maturity.</li><li>Walkout follow-up.</li><li>Instagram story mention thank-you.</li></ul>
  <h2>Describe, review, launch</h2>
  <p>“When someone browses bridal sets twice and does not enquire, send a WhatsApp with three similar pieces, then an email two days later, then offer a video call.” Review the steps, then switch it on.</p>
  <h2>How Jwero does it</h2>
  <p>Journeys generated in plain English, ready-made ones to start from, triggers from Instagram, the website and the showroom. See <a href="/products/journeys">journeys</a>.</p>`,
});

const photoSearch = post({
  slug: 'jewellery-search-by-photo-visual-search',
  title: 'Search by Photo for Jewellery Websites: Visual Search Explained | Jwero',
  description: 'How visual search helps a jewellery store: a shopper uploads a photo of a piece she likes and sees similar designs from your catalogue, instead of guessing keywords.',
  h1: 'Search by photo for jewellery websites',
  mins: 4,
  sub: 'Customers rarely know what a design is called. They have a screenshot from Instagram or a photo from a wedding. Visual search lets that photo do the searching.',
  product: ['/products/ecommerce', 'See the ecommerce website'],
  wa: 'blog-ai-visual',
  close: ['Let the photo search.', 'Jwero’s ecommerce website finds matching pieces from a shopper’s photo.'],
  faqs: [
    { q: 'What is visual search for jewellery?', a: 'A shopper uploads a photo and the store shows pieces from its own catalogue that look similar, by shape, style and stones.' },
    { q: 'Does Jwero have photo search?', a: 'Yes. Shoppers on a Jwero ecommerce website can search by photo and see matching products.' },
    { q: 'Will it find the exact piece?', a: 'Only if you stock it. Otherwise it shows the closest designs you have, which is often enough to start a conversation or a custom order.' },
  ],
  body: `
  <h2>Why keywords fail for jewellery</h2>
  <p>“Temple necklace with green stones and a peacock pendant” is how a shopper describes it, if she can. Most just have a picture.</p>
  <h2>What visual search does</h2>
  <ul><li>Reads the shape, style and stones in the photo.</li><li>Shows the closest pieces you have.</li><li>Lets her ask, compare or book a visit from there.</li></ul>
  <h2>Turn near-misses into orders</h2>
  <p>When the exact piece is not in stock, a similar one or a custom order is the next step. Follow up on WhatsApp with the photo she sent.</p>
  <h2>How Jwero does it</h2>
  <p>Search by photo on the ecommerce website, with pieces picked for signed-in shoppers and prices at today’s rate. See <a href="/products/ecommerce">ecommerce website</a>.</p>`,
});

const leadFinder = post({
  slug: 'ai-lead-finder-jewellers',
  title: 'AI Lead Finder for Jewellers: Corporate Gifting, Retailers and B2B Buyers | Jwero',
  description: 'How jewellers use an AI lead finder to discover companies and people to approach, such as corporate gifting buyers, wedding planners and retailers, and add them to the CRM.',
  h1: 'AI lead finder for jewellers',
  mins: 4,
  sub: 'Walk-ins and Instagram bring retail buyers. Corporate gifting, wedding planners and retailers for a wholesaler have to be found. An AI lead finder does the finding.',
  product: ['/products/crm', 'See the CRM'],
  wa: 'blog-ai-leadfinder',
  close: ['Find the buyers who will not walk in.', 'Jwero’s lead finder searches for companies and people, at ₹1 a search, and adds them to your CRM.'],
  faqs: [
    { q: 'What is an AI lead finder?', a: 'A search that discovers companies and people matching who you want to sell to, with their details, so you can contact them.' },
    { q: 'What does it cost in Jwero?', a: '₹1 a search, from the wallet.' },
    { q: 'Can I message them straight away?', a: 'Treat them as new contacts: introduce yourself personally and respect consent rules before adding them to campaigns.' },
  ],
  body: `
  <h2>Who to look for</h2>
  <ul><li>HR and admin heads for corporate gifting at Diwali and work anniversaries.</li><li>Wedding planners and event managers.</li><li>Retail jewellers in new cities, for wholesalers and manufacturers.</li><li>Hotels and boutiques for consignment.</li></ul>
  <h2>A simple process</h2>
  <ol><li>Describe the buyer and the city.</li><li>Review the list and keep the good fits.</li><li>Add them to the CRM with a source.</li><li>Approach one by one, with a catalogue link.</li></ol>
  <h2>Respect consent</h2>
  <p>A found contact has not opted in to your broadcasts. Start with a personal message; add them to campaigns only when they agree.</p>
  <h2>How Jwero does it</h2>
  <p>The lead finder adds contacts to the CRM, private catalogue links show what they viewed, and follow-ups are prepared for each one, with approval where you want it. See <a href="/products/crm">CRM</a> and <a href="/products/digital-catalogues">digital catalogues</a>.</p>`,
});

module.exports = [agents, waBot, igAi, voice, schemes, prompts, listings, images, video, ads, email, segments, scores, reportsAi, mcp, safe, cost, site, showroomAi, wholesale, tryOn, forecast, mistakes, journeysAi, photoSearch, leadFinder];
