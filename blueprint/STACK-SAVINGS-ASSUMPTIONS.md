# Count yours: the cost and time assumptions

Date: 2026-10-02. Source: `STACK_COST` in lib.js. Shown publicly under the section on the home page ("How these numbers are worked out").

## How the saving is worked out

- **Subscriptions today:** the average monthly price of a typical paid plan in India for each selected tool (about five logins). Tools in the same overlap group are one product in practice and are charged once, at the highest price in the group. Free platforms are ₹0. Ad spend and per-message or per-minute charges are excluded on both sides.
- **Team time today:** hours a week per tool, plus 0.5 hours a week per tool for matching it with the others when more than one is picked. Priced from the salary slider (default ₹25,000 a month) at 45 hours a week. People = hours / 45.
- **With Jwero:** ₹18,000 a month plus half of the team time (50% counted as saved).
- **Saved:** today minus with Jwero. If negative, the page says there is no rupee saving.
- **Showrooms and team size (added 2026-10-02):** two inputs at the top of the blue panel, default 1 showroom and 8 team members.
  - Per-outlet tools (billing, POS, ERP, inventory, barcode, loyalty, CCTV, scheme and girvi registers, repairs, walk-in register, estimate pad, quotation maker, old gold, hallmark tracker, Google Business reviews, branch report calls): price and hours multiplied by showrooms.
  - Per-user tools (business email, CRM, task management, team chat, LMS, HR, payroll, attendance, franchise management, vendor portal, call tracking): price and hours multiplied by team size / 8.
  - All other tools: price flat; hours multiplied by the square root of team size / 8, held between 0.5 and 2.
  - Matching time: 0.5 hours a week per tool, increased by 50% for each showroom after the first.
  - Total team time is capped at 60% of the team's capacity (team size x 45 hours).
  - Jwero: Rs 18,000 plus Rs 2,999 for each showroom after the first; no charge per team member. From six showrooms the page notes that Enterprise terms apply.
  - Enquiries default to 200 per showroom until the visitor moves that slider.
- **Opportunity:** separate; from the enquiry sliders, with the WhatsApp Revenue Estimator assumptions (15% close when answered within an hour, 3% otherwise, 95% target).

All 99 selected at defaults: subscriptions ₹1,07,350 (₹1,38,600 before removing overlaps), 232 hours a week.

## Where the prices came from

Researched on 2026-10-02 from published vendor pricing and software directories. 43 of the 99 rows are marked low confidence: no standalone product or no published price exists, so the figure is an estimate. Prices change; review this table before launch and every few months.

Overlap groups: erp (billing, POS, inventory, ERP, barcode, old gold, hallmark, karigar, pricing, quotation, estimate), wa (WhatsApp API, broadcasts), social (DMs, comments, Facebook inbox, scheduler), mktauto (marketing automation, campaigns, journeys, follow-ups), cdp (personalisation, segmentation, RFM), hr (HR, payroll, attendance), aicall (inbound, outbound), chat (live chat, visitor tracking), meet (meetings, appointment diary, video call), integ (automation rules, MCP tools, webhooks and APIs), creative (post creator, ads creator).

| Tool | ₹ a month | Hours a week | Group | Confidence | Based on |
|---|---|---|---|---|---|
| A/B testing | 3500 | 0.5 |  | low | Testing apps about $30 to $75 a month; VWO paid plans are far higher |
| Ads creator | 1500 | 2 | creative | low | Canva Pro ₹499 at the low end; AI ad-creative tools $29 to $39 |
| AI agents | 4000 | 2 |  | medium | Chatbot builders $29 to $79 a month (WotNot, Tidio Lyro, Intercom Fin base) |
| AI content creation | 2500 | 2 |  | medium | ChatGPT Plus ₹1,999; Jasper Creator $39 to $49 |
| AI image generation | 2000 | 2 |  | medium | Midjourney Standard $24 to $30 a month |
| AI inbound calling | 2500 | 1 | aicall | low | India vendors bill mostly per minute; platform fee is an estimate |
| AI outbound calling campaigns | 2500 | 1.5 | aicall | low | Same vendors as inbound; counted once with it |
| Appointment diary | 480 | 1 | meet | medium | Zoho Bookings ₹360 to ₹480 a user; Calendly $10 to $12 |
| Asset library | 650 | 1 |  | low | About 2 TB of paid cloud storage |
| Attendance register | 500 | 1 | hr | low | Attendance apps ₹50 to ₹100 a staff member; often inside HR tools |
| Automation rules | 1500 | 1 | integ | high | Zapier Professional ₹1,680 to ₹2,520; Make Core ₹1,000 to ₹1,350; Pabbly about ₹1,300 |
| Autonomous customer follow-ups | 2000 | 3 | mktauto | low | A CRM or WhatsApp automation tier; no standalone product |
| Barcode & tagging | 400 | 3 | erp | low | Label software ₹5,000 to ₹15,000 one time, spread over three years |
| Billing software | 1100 | 6 | erp | medium | Marg Jewellery ₹10,300 to ₹26,000 a year; Online Munim ₹7,670 to ₹22,184; Vyapar ₹3,799 to ₹4,799 |
| Branch report calls | 0 | 3 |  | low | Phone calls and WhatsApp today |
| Broadcasts | 1500 | 2 | wa | medium | AiSensy Basic ₹1,500; counted once with WhatsApp API |
| Business email | 900 | 1 |  | medium | Zoho Mail ₹90 to ₹180 a user; Google Workspace about ₹125 to ₹270; five users |
| Calendar | 0 | 0.5 |  | high | Free |
| Call tracking tool | 3500 | 1.5 |  | medium | MyOperator ₹2,500 to ₹5,000; Exotel from about ₹3,000; Knowlarity ₹1,999 an agent |
| Campaigns | 1200 | 2 | mktauto | low | Zoho Marketing Automation Standard ₹1,140; counted once with marketing automation |
| CCTV tracking | 2500 | 1 |  | low | People-counting services $9 to $49 a sensor; two points assumed |
| ChatGPT Ads | 0 | 0.5 |  | low | No established paid tool; ad spend excluded |
| Comments management | 1700 | 2 | social | medium | Zoho Social ₹570 to ₹900; Hootsuite ₹2,600; counted once with DMs |
| Coupons management | 1000 | 0.5 |  | low | Coupon tools from about $20 a month |
| CRM | 5000 | 5 |  | high | Zoho CRM Standard ₹800 to Professional ₹1,400 a user; five users |
| Customer journeys | 1700 | 1.5 | mktauto | low | Zoho Marketing Automation Professional ₹1,740; counted once |
| Customer personalisation engine | 6300 | 1 | cdp | low | CleverTap Essentials $75; WebEngage Solo $199 |
| Customer segmentation | 1500 | 1.5 | cdp | low | A CRM or data-platform feature; counted once with personalisation |
| Digital gold app | 4000 | 2 |  | low | One white-label vendor: ₹75,000 to ₹1,00,000 set-up plus yearly fee, over three years |
| DMs | 1700 | 3 | social | medium | Zoho Social ₹570 to ₹3,800; Hootsuite Standard ₹2,600 |
| Document viewer | 0 | 0.5 |  | high | Free |
| Ecommerce website | 3000 | 5 |  | high | Shopify India Basic ₹1,499 to ₹1,994; Grow ₹5,599 to ₹7,447 |
| Email marketing tool | 1200 | 1.5 |  | medium | Mailchimp Standard from $20; Zoho Campaigns ₹240 to ₹345 |
| ERP | 4000 | 8 | erp | low | Marg Gold ₹26,000 a year; Online Munim Pro ₹22,184; others ₹30,000 to ₹1,50,000 |
| Estimate pad | 70 | 2 | erp | medium | Vyapar mobile ₹699 to ₹799 a year |
| Facebook page inbox | 0 | 1.5 | social | high | Meta Business Suite is free |
| Forms | 0 | 0.5 |  | medium | Google Forms is free |
| Franchise management | 6000 | 2 |  | low | Built on tools such as Zoho Creator, ₹2,400 to ₹6,000 for five users |
| Girvi register | 700 | 3 |  | medium | SthirApp ₹500 a month; one-time pawn software ₹5,000 to ₹16,000 |
| Gold rate updates | 0 | 1 |  | low | Usually free from an association or a rate app |
| Gold scheme register | 2000 | 3 |  | low | One published price: Suniyara ₹2,499 a month |
| Google Ads | 0 | 2 |  | high | The ads console is free; ad spend excluded |
| Google Business reviews | 2000 | 1 |  | low | Indian review tools about ₹1,000 to ₹3,000 |
| Google Sheets | 0 | 4 |  | high | Free |
| Google Shopping | 0 | 1 |  | medium | Merchant Center is free |
| Google Tag Manager | 0 | 0.5 |  | high | Free |
| Hallmark tracker | 300 | 2 | erp | low | An ERP module or a register; no standalone product |
| HR | 3000 | 2 | hr | medium | greytHR Essential ₹2,495; Keka Foundation ₹6,999 |
| Incentive sheet | 0 | 1.5 |  | low | A spreadsheet today |
| Inventory intelligence | 2500 | 2 |  | low | Inventory planning apps $30 to $99 |
| Inventory software | 1500 | 6 | erp | low | Marg Jewellery Silver ₹13,900 a year; cloud inventory ₹1,500 to ₹3,000 |
| Karigar portal | 1500 | 3 | erp | low | A job-work module of a jewellery ERP; no standalone price |
| Lead finder | 3300 | 2 |  | medium | Apollo Basic $49 to $59; Lusha $37 to $50; EasyLeadz ₹2,417 |
| LinkedIn | 0 | 0.5 |  | high | Free to post |
| LMS | 1500 | 1 |  | medium | Zoho Learn ₹60 to ₹180 a user; TalentLMS from $69 |
| Loyalty cards | 3250 | 2 |  | medium | Reelo Growth ₹39,000 an outlet a year |
| Marketing automation | 3000 | 2 | mktauto | medium | Zoho Marketing Automation ₹1,140 to ₹1,740; CleverTap $75; WebEngage $199 |
| Marketplace seller panels | 0 | 3 |  | medium | Free to use; commission based |
| MCP tools | 1500 | 0.5 | integ | low | No settled category; an integration-platform plan |
| Meetings | 1300 | 1 | meet | medium | Zoom Pro about ₹1,150 to ₹1,376 |
| Meta Ads | 0 | 3 |  | high | Ads Manager is free; ad spend excluded |
| MIS reports | 1500 | 3 |  | low | Power BI Pro or Zoho Analytics entry plans, about ₹1,100 to ₹1,500 |
| Occasion diary | 200 | 1 |  | low | A reminder app |
| Old gold management | 500 | 2 | erp | low | A register or ERP module; no standalone product |
| Payment reminders | 0 | 1.5 |  | medium | Free ledger apps |
| Payroll software | 2300 | 1.5 | hr | high | RazorpayX Payroll ₹2,499; greytHR ₹2,495; Zoho Payroll ₹40 to ₹50 an employee |
| Pinterest | 0 | 0.5 |  | high | Free to post |
| Pixels | 0 | 0.25 |  | high | Free |
| POS counter | 1500 | 4 | erp | low | Retail POS about ₹1,000 to ₹2,000 a counter |
| Pricing engine | 1500 | 2 | erp | low | An ERP feature, or a gold-price app at $10 to $30 |
| Push notifications | 1500 | 0.5 |  | medium | OneSignal Growth, PushEngage, Pushwoosh small-list plans |
| Quotation maker | 300 | 2 | erp | medium | Vyapar desktop ₹3,799 a year |
| RCS | 0 | 0.5 |  | medium | No platform fee at most providers; per-message charges excluded |
| Recruitment management | 1800 | 1 |  | medium | Zoho Recruit ₹1,250 to ₹2,500 a recruiter |
| Reels | 0 | 2 |  | high | Free to post |
| Repairs management | 2500 | 2 |  | low | Repair-shop software $10 to $150 a month, low end weighted |
| RFM | 1500 | 1 | cdp | low | A CRM or loyalty feature; counted once with segmentation |
| Shareable live catalogues | 1200 | 3 |  | high | QuickSell ₹12,000 a year, or ₹1,750 month to month |
| Shopify integration | 2000 | 2 |  | low | Connector apps $20 to $50, or custom work spread over three years |
| SMS | 0 | 0.5 |  | medium | Pay per SMS; no monthly platform fee |
| Social media post creator | 500 | 3 | creative | high | Canva Pro ₹499 |
| Social media scheduler | 1700 | 2 | social | medium | Buffer about ₹1,700 to ₹2,000 for four channels; Zoho Social; Hootsuite ₹2,600 |
| Stories | 0 | 2 |  | high | Free to post |
| Tally integration | 1000 | 3 |  | low | Connector work ₹9,999 to ₹49,999 one time plus yearly support, over three years |
| Task management | 2800 | 1.5 |  | medium | Zoho Projects ₹350 a user; Asana about ₹949 a user; five users |
| Team chat app | 850 | 1 |  | medium | Slack Pro about ₹250 a user; many shops use free WhatsApp groups |
| Threads | 0 | 0.5 |  | high | Free to post |
| Vendor portal | 3000 | 1.5 |  | low | Portal tools ₹2,500 to ₹4,200 for five users |
| Video call app | 0 | 1 | meet | high | WhatsApp and Google Meet are free |
| Visitor tracking | 1000 | 0.5 | chat | low | Zoho SalesIQ ₹830 to ₹1,580; counted once with live chat |
| Walk-in register | 500 | 2 |  | low | A visitor or lead-capture app |
| Webhooks & APIs | 1000 | 0.5 | integ | low | An entry integration-platform plan |
| Website heatmaps | 1400 | 0.5 |  | medium | Hotjar Plus about ₹2,700 to ₹3,300; Microsoft Clarity is free |
| Website live chat | 2000 | 2 | chat | medium | Zoho SalesIQ ₹830 to ₹1,580; Tidio ₹2,436 to ₹4,956 |
| WhatsApp API | 2800 | 3 | wa | high | Interakt Growth ₹2,499 to ₹2,799; AiSensy Pro ₹3,200; Wati ₹2,199 to ₹4,899 |
| WooCommerce integration | 1500 | 2 |  | low | Connector plugins $100 to $300 a year, or custom work |
| X | 0 | 0.5 |  | high | Free to post |
| YouTube | 0 | 1 |  | high | Free to post |
| Zoho integration | 1000 | 1.5 |  | low | Partner connectors ₹9,999 to ₹49,999 one time |
