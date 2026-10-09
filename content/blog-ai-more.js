// Deeper sections for the AI articles (2026-10-07): a worked example, a setup
// path, what to measure, and extra questions. Same rule as blog-ai.js: only
// features confirmed by Jwero; business advice is general jewellery practice.
module.exports = {
  'ai-agents-for-jewellers': {
    body: `
  <h2>A week with one agent, in a real shop</h2>
  <p>Take a two-counter showroom with 400 scheme members and a WhatsApp number that gets forty messages a day. In week one, the owner switches on a single agent for the night shift and, to see its work first, chooses Assist mode. At 9pm a customer asks for the price of a 22K bangle in a photo. The agent drafts a reply with the piece, two similar ones, and the price at the evening rate. The draft waits in the approval queue; the manager approves it from her phone at 9:04pm. The customer replies, and books a visit for Saturday.</p>
  <p>By Friday the manager has approved 112 drafts and edited nine, all for the same reason: the agent offered three pieces when the customer wanted one. The owner changes the instruction to “offer one piece, then ask”. In week two there are three edits. In week three the owner lets the agent send first replies on its own between 9pm and 9am, keeps a cap of 60 messages a night, and keeps anything involving a discount behind approval.</p>
  <h2>How to set an agent up, step by step</h2>
  <ol>
    <li><b>Pick one duty.</b> The night shift, follow-ups on quiet quotations, or scheme reminders. One duty makes the replies easy to judge.</li>
    <li><b>Give it your facts.</b> The catalogue, today’s rate and making-charge rules, opening hours, delivery and return policy, and the answers your staff give every day.</li>
    <li><b>Write the limits.</b> What it may never do (discounts, delivery promises), a daily cap, and the hours it works.</li>
    <li><b>Decide what needs approval.</b> Jwero runs the agent on its own inside your limits. If you would rather see the first replies, turn on Assist mode for a week and review them in batches, twice a day.</li>
    <li><b>Fix the instruction, not the draft.</b> If you edit the same thing three times, change the agent’s instruction.</li>
    <li><b>If you began with approvals, release one action at a time.</b> First replies first; follow-ups later; reminders when you trust the wording.</li>
  </ol>
  <h2>What to measure</h2>
  <ul>
    <li><b>Time to first reply</b>, by hour of the day. The night shift should bring the 9pm-to-9am figure from “next morning” to minutes.</li>
    <li><b>Replies edited</b> as a share of replies reviewed, if you keep approval on. Under 5% means the instruction is right.</li>
    <li><b>Visits booked and payments taken</b> from conversations the agent started.</li>
    <li><b>Handovers</b>: how often the agent passed a chat to a person, and whether it did so for the right reasons.</li>
  </ul>
  <h2>Mistakes to avoid</h2>
  <p>Switching on five agents in week one; nobody can review five queues. Letting an agent quote from a price list instead of the live rate. Skipping the activity log: the log is how you find out what the agent did when you were not looking, and it is the reason you can trust it later.</p>`,
    faqs: [
      { q: 'How many agents should a jewellery shop start with?', a: 'One. Judge its replies for two or three weeks, then add the next duty. Jwero ships twelve agent teams, but you switch them on when you are ready.' },
      { q: 'Does the agent learn my shop over time?', a: 'It works from the instructions, catalogue and records you give it, and you refine the instructions when you see repeated edits. It does not change its own rules.' },
      { q: 'Can different branches have different agents?', a: 'Yes. Limits, hours and approvals are set per agent, and chats are routed to the right branch.' },
    ],
  },
  'ai-whatsapp-chatbot-jewellery-shop': {
    body: `
  <h2>What a good reply looks like</h2>
  <p>A customer sends a screenshot of a necklace from your Instagram and types “price?”. A weak chatbot answers “Please visit our store for prices.” A good one answers in her language: “This is our temple necklace, 24.6 grams in 22K. At today’s rate it is ₹1,84,300 including making charges and GST. Shall I hold it for you to see on Saturday, or show it on a video call?” That reply needs four things a general chatbot does not have: the piece identified from the photo, the weight from the stock record, today’s rate, and your making-charge rule.</p>
  <h2>The five questions to script first</h2>
  <ol>
    <li><b>Today’s rate</b> for 22K, 18K and silver, with the time it was set.</li>
    <li><b>Price of a piece</b> from a photo, a code or a description, with the breakup.</li>
    <li><b>Availability</b> at each branch, and whether a piece can be made to order.</li>
    <li><b>Making charges and exchange</b>: how you charge, and how old gold is valued.</li>
    <li><b>Visits and calls</b>: book a time, or start a video call from the chat.</li>
  </ol>
  <h2>Where the chatbot hands over</h2>
  <p>Negotiation, a complaint, a large custom order, anything about a repair in progress, and any customer who asks for a person. The handover should carry the conversation and her record, so the salesperson does not start with “how can I help?”.</p>
  <h2>Setting it up on the official API</h2>
  <p>Your business number moves to the WhatsApp Business Platform; your customers see the same number. Jwero connects the catalogue and the rate, you write the first replies in your own words, and the AI replies from them on its own, inside your caps and quiet hours. If you want to see a kind of reply first, turn on approval for it.</p>
  <h2>What to measure</h2>
  <p>Enquiries answered within five minutes, after-hours enquiries that became visits, and payments taken inside the chat. If after-hours visits rise, the chatbot is paying for itself.</p>`,
    faqs: [
      { q: 'Can the chatbot reply in Hindi or Gujarati?', a: 'Yes. Jwero’s AI replies in your customers’ languages, including Hindi, Gujarati, Tamil and English, and can answer a voice note with voice.' },
      { q: 'Will the chatbot work on my existing number?', a: 'Yes. The number moves to the official WhatsApp Business Platform and stays the same for customers.' },
      { q: 'What does it cost to run?', a: 'Messages, AI and calls are paid from a prepaid wallet; Jwero One includes the platform for ₹18,000 a month.' },
    ],
  },
  'ai-instagram-dm-automation-jewellers': {
    body: `
  <h2>From one reel to twelve conversations</h2>
  <p>A bridal reel reaches 40,000 people and gets 58 comments, 31 of them some form of “price?”. By hand, a salesperson answers twelve before closing time and the rest the next day; most of those have moved on. With comment-to-DM, each of the 31 gets a DM within a minute, with the set, its price at today’s rate, and a question: “Would you like to see it on a video call?”. Twelve reply, four book calls, one buys that week. The reel did its job; the inbox finished it.</p>
  <h2>What to automate, and what to approve</h2>
  <ul>
    <li><b>Automate:</b> the DM to a price comment, and the thank-you to a story mention.</li>
    <li><b>Draft and approve:</b> replies that quote a price for a specific customer, and follow-ups to anyone who went quiet.</li>
    <li><b>Always a person:</b> complaints, custom orders and negotiation.</li>
  </ul>
  <h2>Keeping the account safe</h2>
  <p>Only Meta’s official connection can read and reply to DMs and comments on your behalf. Tools that log in with your password or scrape comments put the account at risk. With the official connection, story replies, mentions and Messenger land in the same inbox as DMs.</p>
  <h2>Closing inside Instagram</h2>
  <p>Send a payment link inside the DM for a deposit or the full amount, start a video call, or book a visit. The order and invoice land on her record, and the sale is traced back to the reel, so you know which content sells.</p>
  <h2>What to measure</h2>
  <p>Comments answered within an hour, DMs that became calls or visits, and sales traced to each reel. Post more of what sells.</p>`,
    faqs: [
      { q: 'Does comment-to-DM work on Facebook too?', a: 'Yes. Facebook comments and Messenger are in the same inbox, through the same official connection.' },
      { q: 'Can a customer buy the piece shown in a reel?', a: 'Yes. Your catalogue syncs to the Meta catalogue, so pieces can be tagged in posts and reels and bought or enquired about from there.' },
      { q: 'Will customers know a reply was written by AI?', a: 'It is written in your tone from your catalogue, and you can require approval for any kind of reply. Customers see a fast, accurate reply from your shop.' },
    ],
  },
  'voice-ai-hindi-jewellery-business': {
    body: `
  <h2>A scheme reminder call, in Hindi</h2>
  <p>“Namaste Sunita ji, Shree Jewellers se. Aapki gold scheme ki kist kal due hai. Link bhej doon?” The customer says yes, the agent sends a payment link on WhatsApp, and she asks whether the new mangalsutra designs are in. The agent books her a visit for Saturday at five. The call, its transcript and the booking go on her record. That is the whole point of voice AI for a jeweller: routine calls made on time, in the language the customer speaks at home, with the follow-through done.</p>
  <h2>Where voice earns its keep</h2>
  <ul>
    <li><b>Scheme reminders</b> before the due date, with a payment link.</li>
    <li><b>Ready for collection</b> for repairs and custom orders.</li>
    <li><b>Appointment confirmations</b> the day before.</li>
    <li><b>Inbound rate and timing calls</b> during the festival rush.</li>
    <li><b>Voice notes on WhatsApp</b>, answered with voice.</li>
  </ul>
  <h2>Writing scripts that sound like your shop</h2>
  <p>Use the greeting your staff use. Keep each call to one purpose. Say the shop’s name twice. End with a question that leads somewhere: a payment link, a visit, or “shall I pass you to Priya?”. Record a human version first and listen to the AI version against it.</p>
  <h2>The rules</h2>
  <p>Calls to your own customers about their own account, such as a scheme reminder, are service calls. Promotional calls follow TRAI’s rules on timing, registration and opt-out. Keep consent on the customer record, and let anyone say “do not call” once.</p>
  <h2>What to measure</h2>
  <p>Instalments paid on time, visits booked from calls, calls handed to a person, and the share of customers who asked for the language to change.</p>`,
    faqs: [
      { q: 'Does the AI understand replies, or only play a message?', a: 'It understands spoken replies and answers them, within the script and limits you set. It is a conversation, not a recording.' },
      { q: 'How many calls can it make at once?', a: 'Up to 8 at a time, inbound and outbound, so 500 reminders are done in an evening.' },
      { q: 'What does a call cost?', a: '₹7 a call, all inclusive, from the prepaid wallet.' },
    ],
  },
  'ai-gold-scheme-collections': {
    body: `
  <h2>The arithmetic of drift</h2>
  <p>A shop with 500 members on an 11-month plan of ₹5,000 collects ₹25 lakh a month when everyone pays. If 8% of members miss a month and half of those miss the next, the shop is ₹1 lakh short this month and ₹1.5 lakh short next month, and a hundred members a year quietly stop. Most of them did not decide to leave; nobody reminded them at the right moment.</p>
  <h2>A reminder ladder that works</h2>
  <ol>
    <li><b>Three days before:</b> a WhatsApp message with the amount and a payment link.</li>
    <li><b>On the day:</b> a short reminder, same link.</li>
    <li><b>Three days after:</b> a voice call in the member’s language, with the link sent again.</li>
    <li><b>Ten days after:</b> a message for a person to send, offering help.</li>
  </ol>
  <p>Members who have agreed to automatic collection skip the ladder entirely: the instalment is collected and a receipt sent.</p>
  <h2>Maturity is a sales moment</h2>
  <p>Thirty days before maturity, the member hears what her balance buys at today’s rate, with three pieces chosen from what she has looked at. She is added to the showroom’s expected-visits list at her nearest branch, so the floor knows she is coming and what to show.</p>
  <h2>Keeping it respectful</h2>
  <p>Cap reminders at the ladder above, stop the moment a member asks, and route anyone in difficulty to a person. A scheme is a relationship; the reminders should sound like one.</p>
  <h2>What to measure</h2>
  <p>On-time collection rate, members who missed two months in a row, and maturity redemptions that became purchases above the balance.</p>`,
    faqs: [
      { q: 'Can members see their own balance?', a: 'Yes. Members can enrol and see their plan from the website, the apps or WhatsApp, as well as at the showroom.' },
      { q: 'Does this work across branches?', a: 'Yes. Schemes run across branches, so a member can pay at one and redeem at another.' },
      { q: 'Are scheme instalments a liability in the books?', a: 'Yes, until redeemed. Jwero posts instalments to the ledger and reports the scheme liability. See the guide on scheme accounting.' },
    ],
  },
  'chatgpt-prompts-for-jewellers': {
    body: `
  <h2>Ten more prompts worth keeping</h2>
  <ol>
    <li><b>Collection launch:</b> “Write a 40-word WhatsApp message announcing a new lightweight bridal collection, for customers who bought bridal jewellery in the last two years. Warm, no exclamation marks.”</li>
    <li><b>Google listing:</b> “Write a Google Business profile description for a 40-year-old family jeweller in Rajkot known for antique gold. Under 750 characters.”</li>
    <li><b>Scheme explainer:</b> “Explain an 11+1 gold savings scheme to a first-time customer in simple Hindi, in five sentences, without promising returns.”</li>
    <li><b>Staff training:</b> “Write five quiz questions on HUID hallmarking for new sales staff, with answers.”</li>
    <li><b>Review reply:</b> “Reply to a 5-star review that mentions our salesperson Priya by name.”</li>
    <li><b>Email subject lines:</b> “Ten subject lines for a Diwali email to NRI customers, under 45 characters.”</li>
    <li><b>Objection handling:</b> “A customer says our making charges are higher than the shop next door. Give three honest ways to respond.”</li>
    <li><b>Product FAQ:</b> “Write six questions and answers for a product page selling lab-grown diamond studs, including disclosure.”</li>
    <li><b>Job description:</b> “Write a job post for a jewellery sales associate in Hyderabad, fluent in Telugu and English.”</li>
    <li><b>Vendor email:</b> “Draft a polite email to a karigar about a 0.4 gram shortfall on the last job, asking for an explanation.”</li>
  </ol>
  <h2>Three rules for every prompt</h2>
  <p>Give the facts and never let the model invent them. Say who will read it and where. Ask for options, then choose. If a prompt needs today’s rate, a stock figure or a customer’s history, it is a job for your jewellery system, not a chat window.</p>
  <h2>Privacy, in one line</h2>
  <p>Never paste a customer’s phone number, purchase history or KYC into a public AI tool. If you want an assistant that knows your customers, connect it to your own system through a governed connection instead.</p>`,
    faqs: [
      { q: 'Is ChatGPT free for business use?', a: 'There are free and paid plans. Check the current terms for how your inputs may be used before pasting anything about your business.' },
      { q: 'Can ChatGPT write in Hindi or Tamil?', a: 'Yes, reasonably well. Have a native speaker read anything that goes to customers.' },
      { q: 'Should I let AI write all my content?', a: 'Let it draft. Keep your own voice in the final edit, and keep anything with numbers out of its hands.' },
    ],
  },
  'ai-jewellery-listings-from-photos': {
    body: `
  <h2>Two thousand pieces, one weekend</h2>
  <p>A showroom with 2,000 pieces and no online catalogue photographs them in batches of fifty on a light box over two days. Each photo is matched to its stock record by tag. AI reads each photo, names the type of piece, writes the description and captions, and suggests tags. The stock record supplies the weight, purity and stones. Two staff check listings at about two minutes each: 66 hours of checking, against roughly 400 hours of typing.</p>
  <h2>What the listing needs</h2>
  <ul>
    <li><b>From the photo:</b> the type of piece, style, the look of the stones, the occasion it suits, and a description in your tone.</li>
    <li><b>From the stock record:</b> gross and net weight, purity, stone weights, certificate and HUID.</li>
    <li><b>From your rules:</b> the price at today’s rate with making charges.</li>
  </ul>
  <h2>Writing in your tone</h2>
  <p>Give the AI three listings you like and tell it who buys from you. Ask it to avoid words you never use. Check the first twenty by hand, then spot-check one in ten.</p>
  <h2>Where the listings go</h2>
  <p>Once checked, the catalogue syncs to your website, the WhatsApp catalogue, Google Shopping and Meta, with prices that follow the rate. A listing written once sells in five places.</p>
  <h2>What to measure</h2>
  <p>Minutes per listing checked, listings edited after publishing, and the share of enquiries that come with a product code instead of a screenshot.</p>`,
    faqs: [
      { q: 'What if a photo shows two pieces?', a: 'Photograph one piece per frame. AI describes what it sees, and a set should be its own record.' },
      { q: 'Can AI write captions for Instagram at the same time?', a: 'Yes. Descriptions, tags and captions come from the same pass, ready for the social composer.' },
      { q: 'Does it work for loose stones?', a: 'For diamonds and gemstones the certificate supplies the facts; AI writes the description around them.' },
    ],
  },
  'ai-jewellery-product-photos': {
    body: `
  <h2>A phone photo, properly taken</h2>
  <p>Shoot by a window in daylight or on a small light box, on a plain white or grey surface. Clean the piece. Fill the frame, focus on the front stone, and shoot three angles. Keep the camera level; AI can fix lighting and background, not perspective. Fifty pieces take about an hour this way.</p>
  <h2>What AI editing does well</h2>
  <ul>
    <li>A clean, consistent background across a whole collection.</li>
    <li>Lighting and colour correction, so yellow gold looks yellow and white gold looks white.</li>
    <li>Square, portrait and wide versions for the website, WhatsApp and Instagram.</li>
    <li>A second image in a lifestyle setting, as long as the piece itself is untouched.</li>
  </ul>
  <h2>What it must never do</h2>
  <p>Add or remove stones, change the finish, enlarge a stone, or alter colour in a way that misleads. A customer who receives something different from the photo will not return, and may say so publicly. Keep an unedited photo on the record for every piece.</p>
  <h2>Cost and time</h2>
  <p>In Jwero, generating or editing an image is charged per image from the wallet. Against a studio day for fifty pieces, the saving is large; against doing nothing, the gain is a catalogue that looks like one shop.</p>
  <h2>What to measure</h2>
  <p>Pieces with a catalogue-grade image, enquiries per listing before and after, and returns or complaints mentioning the photo.</p>`,
    faqs: [
      { q: 'Can AI remove the hand or the stand from a photo?', a: 'Yes, background and props can be cleaned up. The piece itself stays as photographed.' },
      { q: 'Will customers prefer real photos?', a: 'For high-value pieces, pair the clean image with a short real video. Trust comes from seeing the real thing.' },
      { q: 'Does Jwero do virtual try-on?', a: 'No. Jwero offers video calls and try-at-home booking instead.' },
    ],
  },
  'ai-video-jewellery-reels': {
    body: `
  <h2>A month of reels without a video team</h2>
  <p>Week one: three AI videos of new arrivals, made from the product photos already in the catalogue, each eight seconds, with a caption drafted from the listing. Week two: the same, plus one real clip of the shop floor filmed on a phone. Week three: a customer trying a set, with her permission. Week four: a festive edit of the month’s best sellers. Sixteen posts, about two hours of staff time, and every reel traceable to the enquiries and sales it brought.</p>
  <h2>What AI video is good at</h2>
  <ul>
    <li>Turning still product photos into short motion clips: a slow turn, a light sweep, a zoom on the stone.</li>
    <li>Versions for reels, stories and feed from one clip.</li>
    <li>Captions and hashtags drafted from the listing, in your tone.</li>
  </ul>
  <h2>What it should not replace</h2>
  <p>Real footage of real people. The owner explaining a design, a karigar at work, a customer’s reaction. These are the posts that build trust; AI video keeps the calendar full between them.</p>
  <h2>Publishing from one place</h2>
  <p>Write the post once, preview it per platform, and publish to Instagram, Facebook, YouTube and the others from the same composer. Comments turn into DMs, and the DM inbox is the same one your team already answers.</p>
  <h2>What to measure</h2>
  <p>Reach and saves are vanity; measure comments turned into DMs, DMs that became visits, and sales traced to each post. Make more of what sells.</p>`,
    faqs: [
      { q: 'How long are AI videos?', a: 'Short clips, a few seconds each, which is what reels and stories need. Longer films still need a camera.' },
      { q: 'Is AI video charged?', a: 'Yes, per clip from the wallet. See pricing.' },
      { q: 'Can I schedule a month of posts?', a: 'Yes. The social calendar schedules posts across all eight platforms and publishes them directly.' },
    ],
  },
  'ai-ads-for-jewellers': {
    body: `
  <h2>A Diwali campaign, built from your own customers</h2>
  <p>Instead of targeting “people interested in jewellery, 25 to 55”, start from a segment: customers who bought bridal or gold sets in the last two years and have not visited in six months. Jwero builds the ad audience from that segment and a lookalike of it. AI makes two image creatives and one video from the festive collection. The ad is click-to-WhatsApp, so a tap opens a chat your inbox answers at once. A person approves the campaign and the budget; alerts fire if spend runs ahead of results. At the end, sales are reported back to the ad, including the ones that ended in a chat and a bill at the counter.</p>
  <h2>Audiences that come from the record</h2>
  <ul>
    <li>Lapsed buyers by category and value.</li>
    <li>Scheme members near maturity.</li>
    <li>People who viewed a collection online but did not enquire.</li>
    <li>Lookalikes of your top hundred customers.</li>
  </ul>
  <h2>Creatives that stay honest</h2>
  <p>AI can make the image and video, but the piece must be the piece. Test two creatives, keep the one that brings chats, not clicks.</p>
  <h2>Budget discipline</h2>
  <p>Set a daily cap, a cost-per-chat you will accept, and let the budget alert pause spend when it is missed. The AI strategist drafts; it does not spend without a person’s approval.</p>
  <h2>What to measure</h2>
  <p>Cost per chat, chats that became visits, and sales traced to the campaign. Return on spend is only real when the bill is counted.</p>`,
    faqs: [
      { q: 'Which ad platforms does Jwero run?', a: 'Google, Meta (Facebook and Instagram) and Pinterest, from one Ads Manager.' },
      { q: 'Do I need a Meta pixel on my website?', a: 'Jwero sends events to the Meta pixel and Google Analytics from its own tracking pixel, so ads can optimise for enquiries and sales.' },
      { q: 'Can a small shop run ads this way?', a: 'Yes. Start with one click-to-WhatsApp campaign to one segment and a small daily cap, and read the cost per chat before scaling.' },
    ],
  },
  'ai-email-marketing-jewellers': {
    body: `
  <h2>A campaign in twenty minutes</h2>
  <p>Brief: “Diwali gifting under ₹25,000 for customers who bought in the last year.” AI writes the subject and the copy; you edit two lines in the drag-and-drop designer, drop in four pieces from the catalogue with prices at today’s rate, and pick the segment. Two subject lines go to a tenth of the list; the winner goes to the rest. Opens and clicks land on each customer’s record, so the salesperson sees who looked at the bangle before she calls.</p>
  <h2>Emails worth sending</h2>
  <ul>
    <li><b>Occasions:</b> anniversary and birthday reminders, three weeks ahead.</li>
    <li><b>Abandoned cart and browse:</b> the piece she looked at, with a way to ask a question.</li>
    <li><b>New collection:</b> to the segment that buys that category.</li>
    <li><b>Scheme maturity:</b> what the balance buys today.</li>
    <li><b>Receipts and reminders:</b> on branded templates, from your own domain.</li>
  </ul>
  <h2>Reaching the inbox</h2>
  <p>Send from your own domain with DKIM, SPF and DMARC set up, keep unsubscribes honoured, and stop mailing addresses that bounce. Jwero does all three, and the checklist is verified from inside the app.</p>
  <h2>What to measure</h2>
  <p>Opens and clicks per segment, replies, and orders or visits that followed within a week. Keep the segments that respond; retire the ones that do not.</p>`,
    faqs: [
      { q: 'Do I need Mailchimp as well?', a: 'No. Campaigns, journeys, the designer, A/B tests and tracking are in Jwero, on the same customer record as WhatsApp.' },
      { q: 'How much email is too much?', a: 'For most jewellers, two campaigns a month plus the automatic occasion and cart emails. Watch unsubscribes; they tell you.' },
      { q: 'Can email and WhatsApp run in one journey?', a: 'Yes. A journey can send on WhatsApp, email, SMS and RCS, and skip a channel the customer has not opted into.' },
    ],
  },
  'ai-customer-segmentation-jewellers': {
    body: `
  <h2>Segments a jeweller actually uses</h2>
  <ul>
    <li><b>Bridal buyers, last 24 months, no visit in 6:</b> the anniversary and festive segment.</li>
    <li><b>Scheme members maturing in 30 to 60 days:</b> the maturity segment.</li>
    <li><b>Daily-wear buyers under ₹30,000:</b> new-collection and offer segment.</li>
    <li><b>Enquired on WhatsApp, never bought:</b> the follow-up segment.</li>
    <li><b>Top 100 by lifetime value:</b> the personal-invitation segment, handled by a person.</li>
    <li><b>Engaged on Instagram, not yet a customer:</b> the first-visit segment.</li>
  </ul>
  <h2>Building one in plain words</h2>
  <p>Type “bridal buyers in Surat who have not visited in six months” and AI turns it into a segment, with the count shown before you send and suggestions to widen or narrow it. Save it, and it stays live: customers move in and out as their records change.</p>
  <h2>One segment, every channel</h2>
  <p>The same segment feeds the WhatsApp campaign, the email, the ad audience and the journey. When the segment is the source, the message is consistent and the results can be compared.</p>
  <h2>What to measure</h2>
  <p>Response rate by segment, and revenue per customer contacted. A segment that does not respond is a hypothesis to retire.</p>`,
    faqs: [
      { q: 'How many segments should I start with?', a: 'Five: lapsed high value, maturing scheme members, occasion this month, enquired but not bought, and daily-wear repeaters.' },
      { q: 'Does segmentation need clean data?', a: 'It needs purchases on the record, which the counter already writes. Occasions and preferences improve it over time.' },
      { q: 'Can a segment exclude people?', a: 'Yes, for example customers who bought in the last 30 days, or who opted out of promotions.' },
    ],
  },
  'ai-customer-scoring-jewellers': {
    body: `
  <h2>Monday morning, with and without scores</h2>
  <p>Without scores, the follow-up list is whoever the salesperson remembers: the loud enquiry from Saturday, the customer who called twice. With scores, the list opens with the quiet customer who viewed the same necklace three times online, whose scheme matures in twelve days, and whose anniversary is in three weeks. The reason is printed next to the score, so the salesperson knows what to say.</p>
  <h2>The signals that matter in jewellery</h2>
  <ul>
    <li>Visits in the last 90 days, and pieces tried.</li>
    <li>Catalogue links opened, and time spent on a piece.</li>
    <li>Questions about price, size or delivery.</li>
    <li>Scheme balance and maturity date.</li>
    <li>Occasions in the next 30 days.</li>
    <li>Quotations open, and their age.</li>
  </ul>
  <h2>Scores that explain themselves</h2>
  <p>A number without a reason gets ignored. Each of Jwero’s scores lists the signals behind it, so a manager can agree or disagree, and the team learns what the system sees. The scores are rule-based and statistical, not a black box.</p>
  <h2>Using scores without annoying customers</h2>
  <p>A high score is a reason to be useful, not pushy: a note that the piece she liked is on a video call this week, or that her balance buys more this month. Cap outreach per customer, and let a person handle the top hundred.</p>
  <h2>What to measure</h2>
  <p>Conversion of the top-scored list against the rest, and how often salespeople override the order. If they override constantly, the signals need tuning.</p>`,
    faqs: [
      { q: 'Does scoring work for a new shop with little data?', a: 'Partly. Visits, chats and catalogue views start scoring from day one; purchase history adds depth over months.' },
      { q: 'Can I see why a score changed?', a: 'Yes. Score history shows what moved it, such as a catalogue view or a missed instalment.' },
      { q: 'Does AI read my call recordings?', a: 'After a call, AI reads the transcript, notes the customer’s interest and updates her scores.' },
    ],
  },
  'ai-reports-jewellery-business': {
    body: `
  <h2>Ten questions owners ask, answered from the record</h2>
  <ol>
    <li>Which pieces have not sold in 180 days, by branch and value?</li>
    <li>Which salesperson converts walk-ins best this month?</li>
    <li>Which scheme members are two instalments behind?</li>
    <li>What did each festival campaign bring in visits and bills?</li>
    <li>Which categories sold by weight band this quarter?</li>
    <li>Who owes us more than ₹50,000 for more than 30 days?</li>
    <li>Which karigar had the highest wastage last month?</li>
    <li>How many enquiries went unanswered for more than an hour?</li>
    <li>What is our stock worth at today’s rate, by purity?</li>
    <li>Which customers bought last Diwali and have not returned?</li>
  </ol>
  <h2>From question to dashboard</h2>
  <p>Type the question. AI drafts the report’s source, filters and chart, and shows exactly what it used. Pin it to the owner’s dashboard on your phone, and schedule it for Monday mornings. Export to Excel when the partners or the bank ask.</p>
  <h2>Why one record makes the answer trustworthy</h2>
  <p>A report is only as good as the data it can see. When billing, stock, schemes, chats and visits write to one record, “conversion by salesperson” includes the WhatsApp enquiry, the visit and the bill. When they live in five tools, the answer is a guess.</p>
  <h2>What to measure</h2>
  <p>Not the reports; the decisions. Stock moved after the ageing report, members called after the dues report, follow-ups done after the unanswered-enquiry report.</p>`,
    faqs: [
      { q: 'Can my branch manager ask questions too?', a: 'Yes, within her role. A branch manager sees her branch; head office sees all; payroll stays with the roles that own it.' },
      { q: 'Can reports go to my accountant?', a: 'Export to Excel, CSV or PDF, or schedule a report to arrive each month. Books sync to Tally separately.' },
      { q: 'Does it forecast?', a: 'Jwero shows what happened and rule-based scores. It does not claim predictive forecasting.' },
    ],
  },
  'connect-chatgpt-claude-to-jewellery-business': {
    body: `
  <h2>What a connected assistant can do for a jeweller</h2>
  <ul>
    <li>“Which bridal sets over ₹2 lakh have we not sold in six months?” answered from your stock, in a chat.</li>
    <li>“Draft a WhatsApp message to scheme members maturing in July” using the real segment, for a person to approve.</li>
    <li>“Summarise everything we know about Meera Shah before I call her.”</li>
    <li>“Compare this month’s walk-ins to last year’s by branch.”</li>
  </ul>
  <h2>How the connection works</h2>
  <p>Jwero exposes its tools through MCP, an open standard that AI assistants such as Claude and ChatGPT can use. You create a key or sign in through OAuth from Jwero’s settings, choose which members and permissions apply, and the assistant calls Jwero’s tools with the same role permissions as a staff member. Every request is logged.</p>
  <h2>Rules that keep it safe</h2>
  <ol>
    <li>Start with read access; add actions later, behind approval.</li>
    <li>Use a separate login per assistant, and revoke it in one click.</li>
    <li>Keep prices, discounts, messages and payments behind the same approvals as your AI agents.</li>
    <li>Read the audit trail weekly.</li>
  </ol>
  <h2>Why this beats pasting data in</h2>
  <p>Pasting a customer list into a chat window leaks personal data and goes stale at once. A connection reads live data, respects roles, and leaves a record of what was asked.</p>`,
    faqs: [
      { q: 'Is the connection charged?', a: 'Requests are metered with API use from the wallet.' },
      { q: 'Which assistants work?', a: 'Any assistant that supports MCP, including Claude and ChatGPT.' },
      { q: 'Can the assistant change prices?', a: 'Only if you grant that action, and it still goes through your approvals. Most jewellers keep it read-only.' },
    ],
  },
  'is-ai-safe-for-jewellery-business': {
    body: `
  <h2>Four stories, and what prevents each</h2>
  <p><b>The wrong rate.</b> A general chatbot quotes last week’s rate and the customer holds you to it. Prevention: prices only from your own rate and rules, never from a chat model’s memory.</p>
  <p><b>The 2am broadcast.</b> An automation sends a festive offer to 4,000 customers at two in the morning. Prevention: quiet hours, a daily cap, and a person’s approval on anything that goes to more than one customer.</p>
  <p><b>The discount nobody approved.</b> An assistant “helpfully” offers 10% off to close a chat. Prevention: discounts follow price rules and staff permissions; the AI sends messages and cannot set prices.</p>
  <p><b>The leaked list.</b> A staff member pastes the customer list into a public AI tool to write a campaign. Prevention: an AI that works inside your system, with role permissions, and a rule that customer data never leaves it.</p>
  <h2>The controls, in plain words</h2>
  <ul>
    <li><b>Approval where you choose:</b> the kinds of action you pick wait for a person; the rest run on their own inside the limits.</li>
    <li><b>Caps:</b> a number of actions a day, and a money limit.</li>
    <li><b>Kill switch:</b> stop one action, one agent, one branch or everything, in one tap.</li>
    <li><b>Log:</b> what was done, when, why, and who approved it.</li>
    <li><b>Your data:</b> your own database, exportable any time.</li>
  </ul>
  <h2>A safe first month</h2>
  <p>Week one: one agent, low caps, and approval on if you want to see every reply. Week two: fix the instructions behind repeated edits. Week three: raise the caps, or release the replies you held back. Week four: read the log, then decide the next duty.</p>
  <h2>Questions to ask any vendor</h2>
  <p>Where do prices come from? Can I see every action and who approved it? Can I stop it instantly? Where is my data, and can I take it with me? If any answer is vague, wait.</p>`,
    faqs: [
      { q: 'Can AI see my customers’ phone numbers?', a: 'Jwero’s AI works inside Jwero, on the records your staff already see, under the same roles. It does not send your data to a public chat tool.' },
      { q: 'What if the AI makes a mistake while running on its own?', a: 'The log shows exactly what happened, the kill switch stops it, and you can put that kind of action behind approval.' },
      { q: 'Is my data used to train AI for other jewellers?', a: 'Each business runs in its own database. See the Trust Centre for how data is handled.' },
    ],
  },
  'ai-cost-for-jewellers': {
    body: `
  <h2>A month for a two-counter showroom</h2>
  <table class="tbl"><thead><tr><th>Work</th><th>Volume</th><th>How it is charged</th></tr></thead><tbody>
  <tr><td>Scheme reminder calls</td><td>500 calls</td><td>₹7 a call, ₹3,500</td></tr>
  <tr><td>New listings from photos</td><td>120 pieces</td><td>Per product, from the wallet</td></tr>
  <tr><td>Product images cleaned up</td><td>120 images</td><td>Per image, from the wallet</td></tr>
  <tr><td>WhatsApp replies sent at night</td><td>900 messages</td><td>Messages and AI from the wallet</td></tr>
  <tr><td>The platform itself</td><td>Every module</td><td>One plan; price shown in your account after the free trial</td></tr>
  </tbody></table>
  <p>Against this: the staff hours those calls, listings and night replies would take, and the instalments, enquiries and sales that would otherwise be missed. Put your own numbers in the calculators on the product pages before you decide.</p>
  <h2>Pricing models you will meet</h2>
  <ul>
    <li><b>Per seat:</b> you pay for every login, used or not. Fine for a chain, wasteful for a shop.</li>
    <li><b>Per conversation:</b> common for chat tools; watch how a “conversation” is counted.</li>
    <li><b>Per call or minute:</b> read whether the line and the voice are included.</li>
    <li><b>Per item:</b> a listing, an image, a video; easy to estimate from your catalogue.</li>
    <li><b>Prepaid wallet:</b> you top up and see what each action cost; no surprise bill.</li>
  </ul>
  <h2>Questions before you sign</h2>
  <p>Is AI included or an add-on? Is the WhatsApp line included? What happens when the wallet runs out? Can I see per-action costs? Can I export my data if I leave?</p>
  <h2>When AI is not worth it</h2>
  <p>A shop that gets five enquiries a day and has one person free to answer them does not need a night-shift agent. Start with the one job that costs you sales today.</p>`,
    faqs: [
      { q: 'Is there a free trial?', a: 'Jwero’s first month is ₹3,600 with every module, so you can run a real month before paying the full ₹18,000.' },
      { q: 'What if I only want WhatsApp AI?', a: 'Every module is included at one price. You can use only the WhatsApp inbox and AI replies and switch the rest on later.' },
      { q: 'Are camera counts and mailboxes extra?', a: 'Yes. Camera counting is charged per camera and business mailboxes per mailbox. See the pricing page.' },
    ],
  },
  'ai-website-builder-jewellery-store': {
    body: `
  <h2>A store in a week, without a developer</h2>
  <p>Day one: bring in the catalogue, with weights, purity, stones and photos. Day two: pick a jewellery theme, set the pricing rules, and connect your domain. Day three: generate the sections, a festive banner, a bridal collection, the shop’s story and an FAQ, with AI, and edit the words. Day four: switch on payments, try-at-home booking and appointments. Day five: products sync to Google Shopping and the Meta catalogue, and the store is live, priced at today’s rate.</p>
  <h2>What AI should and should not build</h2>
  <ul>
    <li><b>Should:</b> section layouts, headlines, collection descriptions, the FAQ, the about page draft.</li>
    <li><b>Should not:</b> prices, stock, certificates or anything a customer could hold you to. Those come from the catalogue and the live rate.</li>
  </ul>
  <h2>What makes a jewellery store different</h2>
  <p>A price breakup of metal, making charges, stones and GST on every product. Stock that matches the showroom. Sign-in by OTP, not a password. Search by photo for customers who only have a screenshot. Try-at-home and appointment booking. A generic store builder gives you none of these without plugins.</p>
  <h2>Speed, security and search</h2>
  <p>Pages built for phones, hosting and updates handled for you, no plugins to patch, and product pages, a blog and reviews for search engines to index. Visitor analytics, heatmaps and A/B tests run from the same pixel.</p>
  <h2>What to measure</h2>
  <p>Visitors to enquiries, enquiries to visits, carts to orders, and how many customers used photo search or booked try-at-home.</p>`,
    faqs: [
      { q: 'Can I keep my Shopify store?', a: 'Yes. Connect it instead, and Jwero syncs stock and prices to it and reads its orders.' },
      { q: 'Does the website work for NRI customers?', a: 'Yes. They browse at today’s rate, ask on WhatsApp, join a video call from the chat, and book a visit for family in India.' },
      { q: 'Who writes the product descriptions?', a: 'AI drafts them from the photos and the stock record; your team checks them before publishing.' },
    ],
  },
  'ai-showroom-walkout-recovery': {
    body: `
  <h2>Saturday, 4pm, on the floor</h2>
  <p>The door camera counts the family in. Meera checks in on the tablet by phone number; the screen shows three past visits, a scheme maturing in twelve days and the necklace she tried in March. She waits ten minutes; the floor alert calls a salesperson. Four pieces are scanned as she tries them. She leaves over price. At 7pm the evening list shows her name, the four pieces and the reason. Walkout Rescue has drafted the WhatsApp; the salesperson sends it. On Tuesday she books a visit; on Saturday she buys, and the bill links to her visit.</p>
  <h2>Counting first, then converting</h2>
  <p>Without footfall, conversion is a guess. With cameras counting entries and exits and bills linked to visits, conversion is known by hour, day, branch and salesperson. A quiet Tuesday and a busy Saturday with the same number of bills tell different stories.</p>
  <h2>Why walkout follow-ups work</h2>
  <p>A customer who tried four pieces is the warmest lead in the business. A message that same evening, naming those pieces, in her language, with an offer to hold one or show it on video, brings a share of them back. The message is written by AI from her visit and goes out automatically, or after a salesperson’s approval if you prefer.</p>
  <h2>Privacy on the floor</h2>
  <p>Cameras count people; they do not recognise faces or identify customers. Photos at check-in are taken only with consent. Put up the notice, set retention, and keep the capture switch in your hands.</p>
  <h2>What to measure</h2>
  <p>Walk-in conversion by hour and salesperson, walkouts messaged the same day, and walkouts who returned within two weeks.</p>`,
    faqs: [
      { q: 'What if a customer does not want to check in?', a: 'Then she is a count, not a record. Check-in is for customers who give a number; many do, because it brings up their scheme and history.' },
      { q: 'How do bills link to visits?', a: 'Automatically, within eight hours of checkout; unlinked sales are flagged so a manager can fix them.' },
      { q: 'Does the daily brief come to WhatsApp?', a: 'Not yet. The morning and evening brief is opened in the app.' },
    ],
  },
  'ai-for-jewellery-wholesalers': {
    body: `
  <h2>A Monday at a wholesaler</h2>
  <p>Forty new designs were photographed on Saturday. By Monday morning AI has written the listings and the stock records hold the weights. Each of 120 retailers gets a private catalogue link with their own pricing; eighteen open it that day, and the system shows which designs they lingered on. AI sends a follow-up to the six who viewed but did not request. Three retailers ask for memo; the pieces go out with return dates. Stock is low on a fast-moving chain; AI drafts the purchase order at an unfixed rate for approval.</p>
  <h2>Where AI helps most</h2>
  <ul>
    <li><b>Listings:</b> descriptions, tags and captions from design photos.</li>
    <li><b>Buyer catalogues:</b> private, priced per buyer, password protected, with view tracking.</li>
    <li><b>Follow-ups:</b> sent after a view, a request or a quiet week.</li>
    <li><b>Purchasing:</b> draft POs from stock and demand, including unfixed-rate purchases.</li>
    <li><b>Reports:</b> “which retailer’s memo is overdue?” answered in a sentence.</li>
  </ul>
  <h2>Keep the person where the margin is</h2>
  <p>Pricing per buyer, credit terms and memo decisions stay with people. AI does the routine follow-up; the sales head decides the rest.</p>
  <h2>What to measure</h2>
  <p>Catalogue views to requests, requests to orders, memo returned on time, and days from design photo to first order.</p>`,
    faqs: [
      { q: 'Can retailers order from the catalogue link?', a: 'They can request pieces and the request becomes a quotation; with checkout on, they can pay an advance on the link.' },
      { q: 'Does it track memo and approval stock?', a: 'Yes. Issues with a party, value and return date, reminders before the date, and the piece back in stock on return.' },
      { q: 'Can AI call retailers?', a: 'The voice agent can make reminder and follow-up calls in the retailer’s language, with the transcript on their record.' },
    ],
  },
  'virtual-try-on-jewellery-explained': {
    body: `
  <h2>How the technology works</h2>
  <p>The phone camera finds the face, ear, neck or hand and overlays a 3D model of the piece, tracking as the customer moves. Rings and earrings work best; necklaces depend on the neckline; bangles are hard. Every design needs its own 3D model, built from CAD or photographs, which is the hidden cost for a shop with a thousand one-of-a-kind pieces.</p>
  <h2>Who gets value from it</h2>
  <ul>
    <li>Online-first brands with repeatable designs in rings and earrings.</li>
    <li>Lab-grown and silver brands selling at prices customers decide alone.</li>
    <li>Brands whose buyers are far from a store and used to buying online.</li>
  </ul>
  <h2>Who does not</h2>
  <p>Family jewellers selling bridal and heavy gold, where the family decides together, the weight matters, and the stones must be seen in real light. A 3D model cannot show a stone’s fire or a piece’s heft, and a disappointed customer blames the shop.</p>
  <h2>What sells high-value jewellery instead</h2>
  <ol>
    <li>A video call from the WhatsApp chat, with the real piece under good light.</li>
    <li>A try-at-home appointment, booked from the website.</li>
    <li>Three good photos and a ten-second video per piece.</li>
    <li>A quotation she can accept from her phone, with a visit booked.</li>
  </ol>
  <h2>If you still want it</h2>
  <p>Pilot it on twenty repeatable designs, measure conversion against the same designs without it, and count the modelling cost per design before rolling it out.</p>`,
    faqs: [
      { q: 'Does virtual try-on reduce returns?', a: 'For rings and earrings sold online, vendors report it helps. For bridal gold bought with a family, the video call and the visit do more.' },
      { q: 'What does it cost?', a: 'A platform fee plus a 3D model per design. For one-of-a-kind stock, the per-design cost is the real number to check.' },
      { q: 'What does Jwero offer instead?', a: 'Video calls started from any chat, try-at-home and appointment booking from the website, and search by photo.' },
    ],
  },
  'jewellery-demand-forecasting-ai-explained': {
    body: `
  <h2>Why jewellery is hard to forecast</h2>
  <p>Demand moves with the gold rate, weddings, festivals and the weather; half the stock is one of a kind; and a design that sold ten units last Diwali may not exist this year. A forecast built for packaged goods assumes repeat items and stable prices. Jewellery has neither, except in chains, coins, bands and daily-wear lines.</p>
  <h2>Where forecasting does work</h2>
  <ul>
    <li>Repeatable items with years of sales: chains by weight band, coins, plain bands, studs.</li>
    <li>Seasonal planning by category: how much bridal by weight band sold in the two months before last wedding season.</li>
    <li>Reorder points for findings, packaging and consumables.</li>
  </ul>
  <h2>The signals that beat a forecast for unique stock</h2>
  <ol>
    <li><b>Stock ageing</b> by branch, category and weight band: what has sat for 90, 180 and 365 days.</li>
    <li><b>Dead stock value</b> at today’s rate, and what it costs to carry.</li>
    <li><b>Tried often, rarely bought:</b> designs customers like but do not buy, usually a price or weight problem.</li>
    <li><b>Wishlists and enquiries</b> by design: demand you have not stocked.</li>
    <li><b>Sell-through by salesperson and branch</b>: which floor moves which category.</li>
  </ol>
  <h2>Questions to ask a vendor who promises forecasting</h2>
  <p>Is it machine learning or statistics? What history does it need? Does it track its own accuracy? Does it handle one-of-a-kind pieces, or only repeat items? A clear answer to the last question tells you most.</p>
  <h2>How Jwero helps</h2>
  <p>Ageing and dead-stock reports, showroom signals such as tried-but-not-bought, wishlists on the customer record, and a dead stock calculator to put a number on it.</p>`,
    faqs: [
      { q: 'Should I stock what sold best last year?', a: 'For repeatable lines, yes, adjusted for the rate. For design-led stock, look at what was tried and enquired about, not only what sold.' },
      { q: 'How much dead stock is normal?', a: 'It varies by category, but anything unsold past a year at today’s rate is capital you are paying to hold. Use the calculator with your own figures.' },
      { q: 'Can AI tell me what to melt?', a: 'It can show you what has not moved, at what value, and who might still buy it. The melt decision stays with you.' },
    ],
  },
  'ai-mistakes-jewellers-make': {
    body: `
  <h2>The seven mistakes, with the fix for each</h2>
  <p><b>1. Letting AI set prices.</b> A chat model quotes a rate from memory or from last week’s message. Fix: prices come only from your rate and making-charge rules. If the AI cannot see your rate, it must not quote.</p>
  <p><b>2. Running AI without limits.</b> A broadcast to the whole list, in the wrong tone, at the wrong hour. Fix: caps and quiet hours, and approval on anything that goes to the whole list.</p>
  <p><b>3. Generic content.</b> Captions that could be any shop’s. Fix: give AI your pieces, your facts and three posts you like; edit the final line yourself.</p>
  <p><b>4. Unofficial WhatsApp tools.</b> A bulk sender paired to a personal number, and a banned number a month later. Fix: the official WhatsApp Business Platform on your business number.</p>
  <p><b>5. Changing the piece in AI images.</b> A bigger stone, a different finish, and a complaint on delivery. Fix: edit the background and the light, never the piece; keep the original photo.</p>
  <p><b>6. Ten AI tools that do not share data.</b> A chatbot that does not know the scheme balance, an ad tool that cannot see the sale. Fix: one record that every tool reads and writes.</p>
  <p><b>7. No measurement.</b> “We use AI now” with no number behind it. Fix: time to first reply, enquiries that became visits, instalments on time, sales traced to a post or ad.</p>
  <h2>Three quieter mistakes</h2>
  <ul>
    <li>Pasting customer lists into public AI tools.</li>
    <li>Switching on every agent in week one, so nobody reviews any queue properly.</li>
    <li>Treating the activity log as optional. It is how trust is earned.</li>
  </ul>
  <h2>A safe order to start in</h2>
  <p>Night-shift replies, then follow-ups on quiet quotations, then scheme reminders, then content. Each one measured for a month before the next.</p>`,
    faqs: [
      { q: 'How do I know if a vendor’s AI is safe?', a: 'Ask where prices come from, whether every action is logged with an approver, whether you can stop it instantly, and where your data lives.' },
      { q: 'My staff are afraid AI will replace them. What do I say?', a: 'That it does the remembering and the chasing, so they spend their time selling. Salespeople close more when every customer walks in already known.' },
      { q: 'Should a small shop use AI at all?', a: 'Yes, for one job that costs sales today, usually after-hours replies or scheme reminders. Measure it before adding the next.' },
    ],
  },
  'ai-marketing-automation-jewellers': {
    body: `
  <h2>Five journeys to switch on first</h2>
  <ol>
    <li><b>Anniversary, three weeks ahead:</b> a WhatsApp message with three pieces in her usual budget; an email a week later; a visit booking link.</li>
    <li><b>Browsed bridal twice, no enquiry:</b> a WhatsApp with similar pieces, then an email, then an offer of a video call.</li>
    <li><b>Scheme maturing in 30 days:</b> what the balance buys today, then a reminder, then a visit on the expected list.</li>
    <li><b>Walkout:</b> the same evening, the pieces she tried, sent by a person.</li>
    <li><b>Instagram story mention:</b> a thank-you DM, and a catalogue link.</li>
  </ol>
  <h2>Describe it, review it, run it</h2>
  <p>Type what you want in plain words. AI builds the journey across WhatsApp, email, SMS and RCS, explains each step, checks it for safety, and lets you test-run it on one record. Review the steps, set approval on anything you want to see first, and switch it on.</p>
  <h2>Rules that keep journeys polite</h2>
  <ul>
    <li>One journey per customer at a time, and a cap on messages a week.</li>
    <li>If the WhatsApp window is closed, skip the message, do not stall the journey.</li>
    <li>Stop on purchase, on reply, or on “stop”.</li>
    <li>Approval on the first send of a new journey, if you want to check it.</li>
  </ul>
  <h2>What to measure</h2>
  <p>Replies, visits and bills per journey, and the share of steps that were skipped or stopped. A journey nobody replies to is a message problem, not a channel problem.</p>`,
    faqs: [
      { q: 'How many ready journeys are there?', a: 'More than 300, including abandoned cart, browse, occasions, scheme maturity and walkouts.' },
      { q: 'Can a journey start from the showroom?', a: 'Yes. Check-ins, walkouts and appointments booked can trigger journeys, as can Instagram follows and story mentions.' },
      { q: 'Do journeys need a person?', a: 'Only where you want one. Set approval per step; routine steps run on their own.' },
    ],
  },
  'jewellery-search-by-photo-visual-search': {
    body: `
  <h2>What customers actually have</h2>
  <p>A screenshot from Instagram, a photo from a wedding, a picture of a relative’s necklace. Not a design name, not a product code, and rarely the words to describe it. Visual search lets them upload the picture and see the closest pieces you stock, by shape, style and stones.</p>
  <h2>Three ways it makes money</h2>
  <ol>
    <li><b>The exact piece:</b> she finds it, sees the price at today’s rate, and asks or buys.</li>
    <li><b>The near miss:</b> she finds three similar designs and asks about one.</li>
    <li><b>The custom order:</b> nothing matches, but the photo and her number land in a chat, and a quotation follows.</li>
  </ol>
  <h2>Setting it up well</h2>
  <ul>
    <li>Good photos on every listing: visual search matches what it can see.</li>
    <li>One piece per image; sets as their own record.</li>
    <li>A WhatsApp button next to the results for “not quite this”.</li>
  </ul>
  <h2>Pairing it with recommendations</h2>
  <p>Signed-in shoppers also see pieces picked for them from what they browsed and bought. Together, photo search and recommendations turn a brochure site into one that helps a customer decide.</p>
  <h2>What to measure</h2>
  <p>Searches that ended in an enquiry or order, and custom-order chats that started from a photo.</p>`,
    faqs: [
      { q: 'Does photo search work on WhatsApp too?', a: 'On WhatsApp, a photo in the chat is answered by the AI with the matching piece and price. On the website, the shopper searches by photo herself.' },
      { q: 'Does it need a special app?', a: 'No. It runs in the browser on a Jwero ecommerce website.' },
      { q: 'Will it show pieces I have sold?', a: 'No. The website sells from the same stock as the showroom, so a sold piece is removed.' },
    ],
  },
  'ai-lead-finder-jewellers': {
    body: `
  <h2>Four campaigns that start with a search</h2>
  <ol>
    <li><b>Corporate Diwali gifting:</b> HR and admin heads at companies within 20 km, approached in August with a gifting catalogue and a bulk-price quotation.</li>
    <li><b>Wedding planners:</b> planners and venues in your city, offered a bridal shortlist link and a referral arrangement.</li>
    <li><b>New retailers, for a wholesaler:</b> jewellers in a new city, sent a private buyer catalogue with their own pricing.</li>
    <li><b>Hotels and boutiques:</b> a consignment or memo arrangement for a small display.</li>
  </ol>
  <h2>From search to CRM</h2>
  <p>Describe the buyer and the place. Review the results and keep the fits. Add them to the CRM with a source and a tag, so every message and reply lands on their record and the campaign can be measured.</p>
  <h2>The first message</h2>
  <p>Personal, short, and useful: who you are, why them, one link. A catalogue link shows you what they looked at, and AI prepares the follow-up, with approval where you want it. No broadcasts to found contacts until they agree.</p>
  <h2>Consent and manners</h2>
  <p>A found contact has not opted in. Introduce yourself once, make opting out easy, and move them to campaigns only when they say yes. Business contacts expect a business approach; they do not expect a festival blast.</p>
  <h2>What to measure</h2>
  <p>Replies per hundred contacts, meetings booked, and orders within a quarter, by campaign.</p>`,
    faqs: [
      { q: 'What kind of leads does it find?', a: 'Companies and people matching a description, such as corporate gifting buyers, planners or retailers, with contact details to approach them.' },
      { q: 'Can I message found leads on WhatsApp straight away?', a: 'Send a personal introduction first. Add them to campaigns only after they agree; this keeps your number and your reputation safe.' },
      { q: 'Is it only for wholesalers?', a: 'No. Retailers use it for corporate gifting and planners; wholesalers for retailers in new cities.' },
    ],
  },
};
