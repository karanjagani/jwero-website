# PART 2 — AUDIENCE: PERSONAS, ICP MATRIX & JOURNEYS

Who the website must convince, of what, in whose words. Everything downstream (IA, wireframes, content, CRO) inherits from these tables. Segment-neutral rule (Part 0): the enemy on every page is **disconnected software that forgets customers** — never another jeweller.

## 2.1 ICP matrix — every segment from the brief (Output #5 input; pages specced in Part 4)

**URL policy:** every segment gets a canonical extensionless URL below. **Full pages** ship only where copy, proof and FAQ are genuinely segment-specific (marked ●). Segments marked ○ launch as rich sections of their parent page with the URL 302-ing to the anchor until they earn a full page — thin doorway pages poison SEO and credibility both. Primary CTA "WhatsApp" = wa.me deep link with per-page ref code (e.g. `[ref:solutions/bridal/hero]`).

### 2.1.1 Retail (12)

| Segment | Defining traits | Top-3 pains | Buying trigger | Decision unit | Money metric | Primary CTA | URL |
|---|---|---|---|---|---|---|---|
| ● Single store | Family-run, ₹2–20 cr, owner at counter, staff phones = CRM | Lead leakage from WhatsApp/IG; no follow-up system; customer data walks out with staff | Lost a known customer to a rival; child pushes modernization | Patriarch (veto) + second-gen champion | Repeat-purchase rate; recovered dormant customers | WhatsApp demo | /solutions/single-store |
| ● Multi store | 2–5 branches, one city/region, "computer person" emerging | Branch inconsistency; stock scattered, no transfer logic; owner blind when away | Branch #2 or #3 exposes that Excel doesn't scale | Owner-MD + ops person + muneem | Same-customer cross-branch sales; stock-turn per branch | Book demo | /solutions/multi-store |
| ● Chain stores | 5–50 stores, ₹50–500 cr, professionalizing, feels national-chain pressure | Marketing per-store chaos; governance/discount abuse; no consolidated owner view | New-city expansion; CEO/COO hire; board asks for dashboards | MD + COO + finance head + IT + family board | Revenue per store; campaign ROI; audit exceptions | Enterprise enquiry | /solutions/chain-stores |
| ● Luxury | High AOV (₹5L+), appointment-led, clienteling culture, discretion matters | CX inconsistency across sales staff; no client memory beyond top salesperson; privacy fear | Star salesperson exits with the client book | Owner/brand director + store director | AOV; client retention; appointments kept | Book demo (concierge tone) | /solutions/luxury |
| ● Boutique | Designer-founder led, 1 atelier, story-driven, Instagram-native | IG enquiries unmanaged; custom-order chaos (design→karigar→delivery); pricing per piece | Viral month overwhelms DMs; missed commissions | Founder (solo) | Enquiry→commission conversion; order-cycle days | WhatsApp demo | /solutions/boutique |
| ● Bridal | Wedding-set focus, seasonal spikes, family group purchases, trousseau budgets | Long consult cycles leak between visits; no occasion pipeline; season = chaos, off-season = silence | Lost a ₹8L bridal family to a competitor mid-journey | Owner + senior sales staff | Bridal pipeline value; consult→close rate | WhatsApp demo | /solutions/bridal |
| ● Diamond retail | Certificate-led selling, solitaire education burden, price-comparison shoppers | Explaining 4Cs repeatedly; cert/stock matching; enquiry price-shopping with no capture | Lab-grown disruption forces repositioning | Owner + diamond buyer | Solitaire close rate; enquiry capture rate | WhatsApp demo | /solutions/diamond-retail |
| ○ Gold retail | Rate-driven traffic, scheme-heavy, exchange/old-gold intake daily | Scheme registers on paper; live-rate billing errors; old-gold intake disputes | Scheme dispute or compliance scare | Patriarch + muneem | Scheme corpus; scheme→sale conversion | WhatsApp demo | /solutions/gold-retail → anchor on /solutions/single-store until proof exists |
| ○ Silver | High volume, low ticket, gifting + articles, thin margins | SKU explosion; dead slow-movers; billing speed at counter | Inventory count reveals loss/shrinkage | Owner | Stock-turn; margin per category | WhatsApp demo | /solutions/silver → parent anchor |
| ○ Platinum | Certification programs (PGI), niche upsell inside gold stores | Staff can't tell the platinum story; tiny stock, ageing risk | Brand program requires reporting | Owner + program manager | Platinum attach rate | WhatsApp demo | /solutions/platinum → parent anchor |
| ● Lab-grown diamond | D2C-leaning, young founders, Meta-ads native, price-disruptor stance | Educating buyers vs natural; Shopify can't do WhatsApp/IG-native selling; CAC rising | Ad costs spike; repeat-purchase engine missing | Founder (+ co-founder) | CAC:LTV; WhatsApp-attributed revenue | Free trial / WhatsApp | /solutions/lab-grown |
| ○ Gemstone | Astrological + collector demand, certification trust, one-of-one stock | Provenance/cert storytelling at scale; one-off SKUs unphotographed; trust objections | Online expansion attempt stalls | Owner | Enquiry→sale on one-of-one pieces | WhatsApp demo | /solutions/gemstone → parent anchor |

> **R:** one row per brief segment forces segment-true copy and stops doorway-page sprawl · ICP: all 12 retail · pain: each row's top-3 · outcome: segment-tagged qualified conversations · objection: "software people don't understand MY kind of shop" · search: segment head terms ("bridal jewellery software India") · conversion: right CTA weight per segment (self-serve ↔ enterprise) · KPI: conversation starts per segment tag.

### 2.1.2 Wholesale (6)

| Segment | Defining traits | Top-3 pains | Buying trigger | Decision unit | Money metric | Primary CTA | URL |
|---|---|---|---|---|---|---|---|
| ● B2B jewellery wholesale | Sells to 50–500 retailers, memo/jangad flows, credit cycles | Order capture on calls/WhatsApp untracked; catalog distribution by PDF; outstanding/credit chaos | Retailer disputes an order or memo; season order-book overwhelms | Proprietor + accounts head | Order book value; days-sales-outstanding | Enterprise enquiry / WhatsApp | /solutions/wholesale |
| ● Diamond wholesale | Cert-level inventory, price lists by sieve/clarity, broker networks | Stock-list circulation (Excel to 200 buyers); memo tracking; price-list versioning | A parcel goes unaccounted on memo | Proprietor + broker network | Memo recovery days; stock-list→order rate | Enterprise enquiry | /solutions/diamond-wholesale |
| ○ Gold wholesale | Bullion-linked pricing, high-volume low-margin, purity/touch disputes | Rate-locking on orders; purity disputes on intake; margin invisibility per client | Rate-volatility loss event | Proprietor + muneem | Margin per client; rate-lock accuracy | WhatsApp | /solutions/gold-wholesale → /solutions/wholesale anchor |
| ○ Silver wholesale | Tonnage volumes, artefacts + chains mix, regional retail networks | SKU/weight-range chaos; dispatch tracking; client-tier pricing by memory | New territory expansion | Proprietor | Repeat-order frequency | WhatsApp | /solutions/silver-wholesale → parent anchor |
| ○ Gemstone wholesale | Lot-based, provenance/cert-heavy, exhibition-driven sales | Lot tracking; cert-image pairing; post-exhibition follow-up dies | Exhibition leads wasted again | Proprietor | Exhibition-lead conversion | WhatsApp | /solutions/gemstone-wholesale → parent anchor |
| ○ Pearl wholesale | Grading nuance, strand/lot inventory, niche buyer base | Grading communication; lot photography; small-buyer long tail unserved | Digital catalog demand from buyers | Proprietor | Active-buyer count | WhatsApp | /solutions/pearl-wholesale → parent anchor |

> **R:** wholesale converts on order-book and credit language, not retail CX language · ICP: 6 wholesale · pain: memo/credit/catalog-distribution · outcome: enterprise enquiries · objection: "this is retail software" — killed by trade vocabulary (jangad, memo, touch) · search: "jewellery wholesale order management" · conversion: enterprise track + WhatsApp for proprietors · KPI: wholesale-tagged enquiries/week.

### 2.1.3 Manufacturers (6)

| Segment | Defining traits | Top-3 pains | Buying trigger | Decision unit | Money metric | Primary CTA | URL |
|---|---|---|---|---|---|---|---|
| ● Gold manufacturing | Karigar job-work, issue/receive gold, wastage norms | Abnormal gold loss (1–3% walks out); karigar khata disputes; WIP invisibility | Year-end reconciliation shows unexplained loss | Owner + factory manager + muneem | Gold-loss %; WIP days | Enterprise enquiry / WhatsApp | /solutions/manufacturers |
| ○ Diamond manufacturing | Rough→polish pipeline, assortment, high-value WIP | Stone tracking through processes; yield analysis; job-worker reconciliation | A lot's yield can't be explained | Owner + production head | Yield %; WIP value ageing | Enterprise enquiry | /solutions/diamond-manufacturing → /solutions/manufacturers anchor |
| ○ Casting units | Batch production, tree/flask runs, alloy management | Batch traceability; alloy/purity control; order-to-batch scheduling | Client rejects a batch, no trace data | Owner + production supervisor | Rejection rate; batch cycle time | WhatsApp | /solutions/casting → parent anchor |
| ○ CAD/CAM studios | Design services, render→approval→STL, per-design billing | Version chaos on approvals; scope creep; design IP leakage fear | Client disputes revisions billed | Studio owner | Designs shipped/month; revision cycles | WhatsApp | /solutions/cad → parent anchor |
| ● OEM manufacturers | Makes for brands/retail chains, PO-driven, spec compliance | PO status opacity to buyers; spec/QC documentation; capacity planning blind | A key buyer demands order-status visibility | Owner + merchandiser + buyer's SCM team | On-time-delivery %; order-book cover | Enterprise enquiry | /solutions/oem |
| ● Export houses | Multi-currency, compliance docs, overseas buyer cadence | Buyer communication across time zones; compliance/document trails; collection follow-up | Overseas buyer audit or a missed shipment window | Owner + export manager + CHA/compliance | Export order value; document-cycle days | Enterprise enquiry | /solutions/export |

> **R:** manufacturers buy trace-and-loss control, not marketing — pages must speak WIP/karigar/wastage with zero retail imagery · ICP: 6 manufacturing · pain: gold loss, WIP opacity, buyer-facing status · outcome: enterprise enquiries · objection: "software is for retailers" · search: "jewellery manufacturing software / karigar management" · conversion: enterprise track · KPI: manufacturing-tagged enquiries; demo→pilot rate.

### 2.1.4 Others (6)

| Segment | Defining traits | Top-3 pains | Buying trigger | Decision unit | Money metric | Primary CTA | URL |
|---|---|---|---|---|---|---|---|
| ○ Bullion dealers | Rate-spread business, high velocity, KYC/compliance weight | Rate-feed accuracy to clients; KYC documentation; client-limit tracking | Compliance notice or client-limit breach | Proprietor + compliance | Spread capture; compliant-transaction % | WhatsApp | /solutions/bullion → /solutions/wholesale anchor; **Tier-C flag: no bullion-specific accounting claims** |
| ○ Gold traders | Buy/sell old gold, melt decisions, purity assessment | Intake purity disputes; melt-vs-resell decisions untracked; cash-flow opacity | A bad intake batch | Proprietor | Intake margin; inventory-to-cash days | WhatsApp | /solutions/gold-traders → parent anchor |
| ● Jewellery brands | Design-led national brands, wholesale+retail+online mix, brand consistency | Channel-conflict data silos; brand-consistent pricing everywhere; distributed catalog control | Omnichannel expansion mandate | Brand head + ecommerce head + sales director | Sell-through per channel; brand-price compliance | Enterprise enquiry | /solutions/brands |
| ● Ecommerce-first brands | Online-native, Shopify/Woo stack, performance-marketing led | WhatsApp/IG selling beyond web checkout; live gold-rate pricing online; retention beyond ads | ROAS decay; retention project starts | Founder + growth lead | Repeat-purchase rate; WhatsApp-attributed revenue | Free trial | /solutions/ecommerce-brands |
| ● Startups | Pre-revenue→₹5 cr, first-time founders, tool-stack minimalists | Can't afford 6 tools; no jewellery-specific playbook; credibility with suppliers/buyers | Launch moment; first funding | Founder | Time-to-first-sale; monthly burn on tools | Free trial | /solutions/startups |
| ● Franchise networks | Franchisor + franchisee stores, brand control vs local autonomy | Franchisee data opacity; royalty/billing trust; brand-standard enforcement | New franchise round; franchisee dispute | Franchisor MD + franchise ops head + franchisee council | Same-store growth; royalty accuracy | Enterprise enquiry | /solutions/franchise |

> **R:** "others" are edge ICPs that validate the OS claim ("true at one counter and a hundred branches") · ICP: 6 others · pain: multi-entity control and channel-native selling · outcome: trials (startups/D2C) + enterprise (brands/franchise) · objection: "built only for traditional retailers" · search: "jewellery franchise management software", "jewellery startup software" · conversion: free-trial funnel gets its first natural audience here · KPI: trial starts (startups/D2C), enterprise enquiries (brands/franchise).

**Matrix roll-up:** 13 full pages at launch (●), 17 anchors (○) with 302s that convert to full pages when segment-specific proof exists. Every ● page uses the T5 ICP template (Part 4) and the honesty tiers verbatim — no POS/offline/vernacular-UI claims anywhere in segment copy (Tier C).

## 2.2 User personas (Output #4) — ten people, one sentence each must believe

Format per persona: role & context · goals · fears · objections · information diet · WhatsApp behaviour · what *"understands my business better than I do"* means to them · **the converting sentence** (the line that makes them act). Personas map to matrix rows; P1–P3 drive most design decisions (carried from v1, upgraded for v2's wider ICP set).

**P1 — Rajesh bhai, 55 — family patriarch, single-store owner (THE VETO)**
- Goals: protect the family name; keep control; hand over a healthier shop than he inherited.
- Fears: being made to feel outdated; data leaving the family; a machine talking to HIS customers wrongly; son/daughter's "computer scheme" wasting lakhs.
- Objections: "humara kaam alag hai"; too expensive; my muneem handles it; AMC-wallah at least visits.
- Information diet: almost never on the website directly; consumes what family forwards on WhatsApp; trade-association meetings; peer jewellers in the market.
- WhatsApp behaviour: heavy consumer, light typer; watches forwarded videos full-screen; judges by who ELSE uses it.
- "Understands my business" means: the page names his rituals — old-gold exchange, scheme register, wedding-season rush, the customer who bargains every Diwali.
- **Converting sentence:** *"Aapki approval ke bina ek message nahi jaata — aur Rajkot ke Mehta ji isse 2 saal se chala rahe hain."*

**P2 — Priya, 28 — second-gen champion (PRIMARY WEBSITE AUDIENCE)**
- Goals: prove herself to the family; modernize without a family war; quick wins visible within weeks.
- Fears: choosing wrong and losing face at the dinner table; a tool papa refuses to touch; migration breaking billing in season.
- Objections: will papa accept it; is it too complex for our staff; what if we're locked in.
- Information diet: Instagram reels, YouTube, Google at 11pm on mobile, jeweller Facebook/WhatsApp groups, this website end-to-end.
- WhatsApp behaviour: power user — runs the shop's WhatsApp; needs shareable artifacts (PDF cards, videos) to forward upward.
- "Understands my business" means: calculators pre-filled with numbers like HER shop's; a "show this to papa" card on every page.
- **Converting sentence:** *"Live in 7 days, data import done for you — and here's the one-pager to show your family tonight."*

**P3 — Vikram, 42 — MD/COO of a regional chain, 5–15 stores (BEACHHEAD ENTERPRISE)**
- Goals: branch consistency; an owner's daily digest; expand two cities without losing control.
- Fears: migration downtime in wedding season; staff mutiny; choosing a vendor smaller than his ambition.
- Objections: already have ERP; security/data residency; who else at my scale uses this; integration with Tally stays non-negotiable.
- Information diet: LinkedIn, IIJS/trade shows, peer MD networks, gated industry reports; delegates deep evaluation to his ops head.
- WhatsApp behaviour: reads owner-digest-style summaries; will start a wa.me conversation if it feels like an executive channel, not a sales queue.
- "Understands my business" means: governance vocabulary — approval queues, RBAC, per-branch pricing rules, audit trails — plus a peer chain's numbers.
- **Converting sentence:** *"Har branch, ek jaisi. Har customer, yaad — with a daily digest on your phone and your Tally untouched."*

**P4 — Suresh, 38 — ops head / "computer person" (THE TECHNICAL EVALUATOR)**
- Goals: a migration he survives; fewer 9pm fire-calls; looking competent to the MD.
- Fears: blamed for downtime; a vendor who disappears after go-live; retraining 60 staff.
- Objections: migration effort; support SLAs; integration honesty; "another dashboard nobody opens".
- Information diet: docs, help centre, migration guides, YouTube walkthroughs, comparison pages read line-by-line.
- WhatsApp behaviour: expects support ON WhatsApp; tests response time before recommending.
- "Understands my business" means: a published implementation timeline, per-incumbent migration guides, and honest "what we don't do yet".
- **Converting sentence:** *"We import your data, freeze changes in wedding season, and you can export everything, anytime."*

**P5 — Meera, 34 — boutique founder-designer**
- Goals: more commissions from IG without hiring; protect design time from admin.
- Fears: losing the personal touch that IS her brand; AI sounding generic to collectors.
- Objections: "my clients expect ME"; small team, no bandwidth to implement; cost vs a part-time assistant.
- Information diet: Instagram, design communities, founder podcasts, Notion-style tool blogs.
- WhatsApp behaviour: sells IN WhatsApp daily — voice notes, sketches, payment links; drowning in unthreaded chats.
- "Understands my business" means: custom-order pipeline language (design→approval→karigar→delivery), not "SKU management".
- **Converting sentence:** *"Every DM becomes a tracked commission — and the AI drafts in your voice, you approve every word."*

**P6 — Arjun & Kavya, 40s — bridal specialist owners**
- Goals: own the city's wedding market; convert more ₹5–15L family journeys; smooth the season/off-season whiplash.
- Fears: a bridal family silently defecting between visit 2 and 3; discounting wars; staff forgetting a promised design.
- Objections: "our sales are relationship sales, software can't do this"; season is too busy to implement.
- Information diet: competitor showrooms, trade magazines, WhatsApp jeweller groups; website via spouse/manager research.
- WhatsApp behaviour: entire bridal pipeline already lives in staff WhatsApp — unowned and untracked.
- "Understands my business" means: the site maps the 6-visit bridal journey (enquiry→trousseau list→trials→final fitting) better than their own register does.
- **Converting sentence:** *"Every bridal family gets a named journey — every visit, every shortlisted set, every promise, remembered."*

**P7 — Nisha, 31 — lab-grown D2C founder**
- Goals: repeat-purchase engine beyond paid ads; WhatsApp/IG-native selling Shopify can't do; look bigger than she is.
- Fears: CAC death spiral; platform risk (Meta bans); stitching six tools with duct-tape.
- Objections: "I already have Shopify + a chatbot"; API access; will this scale internationally.
- Information diet: Twitter/X, D2C communities, product-hunt-style launches, comparison pages, free trials — she self-serves.
- WhatsApp behaviour: runs click-to-WhatsApp ads already; measures everything; will judge the wa.me CTA experience itself as the demo.
- "Understands my business" means: live gold/growth pricing logic, CAC:LTV framing, "keep Shopify, add the channels it can't do" honesty.
- **Converting sentence:** *"Keep Shopify. Add WhatsApp and Instagram selling it can't do — with jewellery-aware pricing built in."*

**P8 — Bharat bhai, 50 — wholesale/B2B proprietor**
- Goals: grow the retailer network; cut outstanding days; stop stock-list chaos.
- Fears: memo goods unaccounted; a big retailer defaulting; his client list leaking via staff.
- Objections: "retail software, not for us"; my business runs on relationships and calls; price.
- Information diet: trade markets (Zaveri Bazaar equivalents), broker circles, WhatsApp trade groups; near-zero cold web research — arrives via referral or a forwarded page.
- WhatsApp behaviour: business ALREADY runs on WhatsApp — stock lists, order confirmations, payment reminders; wants it organized, not replaced.
- "Understands my business" means: jangad/memo/touch vocabulary; catalog-to-retailer distribution; credit-cycle visibility.
- **Converting sentence:** *"Your stock list reaches 200 retailers in one click — and every memo, every outstanding, tracked to the gram."*

**P9 — Joseph, 45 — manufacturer / export-house ops head**
- Goals: explain every gram of gold; give overseas buyers order-status visibility; pass buyer audits calmly.
- Fears: abnormal wastage discovered too late; a buyer walking over compliance gaps; karigar khata disputes turning ugly.
- Objections: "our processes are unique"; shop-floor staff can't use software; ERP already exists for accounts.
- Information diet: export councils, buyer mandates, LinkedIn, peer factory owners; reads spec-sheets not blogs.
- WhatsApp behaviour: coordinates karigars and buyers on WhatsApp already; buyer updates via WhatsApp would be a visible win.
- "Understands my business" means: WIP ledger, issue/receive gold, wastage norms, job-work gating — with the accounts ledger left to his existing ERP (Tier-A bridge, not replacement).
- **Converting sentence:** *"Every gram issued, every gram received, every karigar's khata — reconciled daily, disputes settled by data."*

**P10 — Sanjay, 48 — franchise principal (franchisor MD)**
- Goals: sign franchisees faster by offering a system, not just a brand; royalty accuracy; brand-standard enforcement without daily policing.
- Fears: franchisee data games; a franchisee damaging the brand on WhatsApp; over-promising tech he can't deliver to the network.
- Objections: per-store pricing at network scale; franchisee onboarding burden; who owns the customer data (franchisor vs franchisee).
- Information diet: franchise expos, chartered-accountant advisors, LinkedIn, enterprise-style vendor evaluation with lawyers involved.
- WhatsApp behaviour: wants network-level campaign control with franchisee-level execution — central approval, local sending.
- "Understands my business" means: the site answers the franchisor/franchisee data-ownership question BEFORE his lawyer asks it.
- **Converting sentence:** *"Give every franchisee a system worth paying royalty for — and see every store's truth without asking."*

**P0 (influencer, not buyer) — Deepak, 30 — store manager (THE DAILY USER)**
Goals: hit targets, look good to the owner, less closing-time drudgery. Fears: surveillance framing; blame-by-dashboard. Objection: "another thing to type into". Information diet: YouTube shorts, peer managers. WhatsApp: lives in it with customers all day. "Understands me" = day-in-the-life video of HIS role where the tool gives him customer memory (and commission wins), not homework. **Sentence:** *"The customer walks in, and you already know what she looked at last time."* Design duty: /platform day-in-the-life videos per role; never market surveillance to owners in language staff will read.

**The Muneem/CA (hidden veto, carried from v1):** not a full persona page-owner but a standing design rule — every commerce claim coexists with "apna hisaab Tally mein rahega" (Tier-A Tally/Zoho bridges). One dedicated page: /integrations/tally.

> **R:** ten personas cover all 30 matrix segments through 4 buying archetypes; each persona's "converting sentence" becomes that page's hero-adjacent copy test · ICP: all · pain: persona-specific top fears · outcome: message-market fit per page · objection: each persona's #1 pre-answered · search: personas define vocabulary for keyword maps (Part 8) · conversion: CTA type matched to persona self-serve vs committee · KPI: per-persona page → conversation-start rate.

## 2.3 Customer journey maps (Output #3) — the brief's 18 stages × 4 archetype journeys

Stage model (verbatim from the brief): 1 Cold visitor · 2 Industry education · 3 Pain awareness · 4 Problem awareness · 5 Current-solution dissatisfaction · 6 Future possibility · 7 Product awareness · 8 Feature understanding · 9 Business outcomes · 10 Proof · 11 Trust · 12 ROI · 13 Demo · 14 Sales · 15 Onboarding · 16 Customer success · 17 Expansion · 18 Referral. Stages 1–13 are website-owned; 14–18 are product/CS-owned but the website carries artifacts for each (see 2.4.5). **Design law (from v1): no stage is a dead end — every asset ends in the next stage's CTA.**

### J1 — Single-store retail (Priya researching, Rajesh bhai vetoing)

| # | Stage | Visitor question | Page(s) | Content asset | CTA | KPI |
|---|---|---|---|---|---|---|
| 1 | Cold visitor | "What is this?" | / (home) | Hero: OS positioning in jeweller words + product film | Scroll / WhatsApp `[ref:home/hero]` | Bounce rate; scroll depth |
| 2 | Industry education | "Is my shop behind?" | /resources/state-of-jewellery-retail | Industry report + Growth Score quiz | Take the quiz | Quiz completions |
| 3 | Pain awareness | "Wait — how many customers am I losing?" | /pains/lead-leakage | Pain page: "3 customers you lost this week without knowing" | Run Customer Wapsi Calculator | Pain-page → tool rate |
| 4 | Problem awareness | "So the problem is no system, not lazy staff" | /pains/no-follow-up-system | PAS article: staff phones = your CRM walking out | Read the solution | Next-page rate |
| 5 | Current-solution dissatisfaction | "Why isn't my Excel/WATI/register enough?" | /compare/whatsapp-tools-vs-jwero | Honest comparison: tools vs an OS that remembers | See the platform | Comparison → platform rate |
| 6 | Future possibility | "What would my shop look like fixed?" | /platform | "A day at your counter with Jwero" interactive walkthrough | Watch 3-min tour | Tour completion |
| 7 | Product awareness | "What exactly does Jwero do?" | /solutions/single-store | ICP page in her words (yaaddasht, occasions, WhatsApp counter) | WhatsApp demo `[ref:solutions/single-store]` | Page → conversation rate |
| 8 | Feature understanding | "How does the AI actually behave?" | /platform/ai-staff, /products/whatsapp | Approval-queue screenshots; 240+ governed actions; kill switch | Try the WhatsApp sandbox | Feature-page depth |
| 9 | Business outcomes | "What changes in my numbers?" | /outcomes (per-pain outcome blocks) | Outcome cards: repeat rate, dormant wapsi, scheme corpus | See proof | Outcome → proof flow |
| 10 | Proof | "Who like me uses it?" | /customers | Named single-store story + Wapsi Report sample (real slots; no fabrication — collection playbook Part 6) | Watch the story | Story completion |
| 11 | Trust | "Is my data safe? Will support answer?" | /trust/security, /trust/support | DB-per-tenant, export-anytime, support SLA promise | FAQ / WhatsApp | Trust-page assist rate |
| 12 | ROI | "Is it worth the money for papa?" | /pricing + /tools/roi-calculator | Chai-per-day math; "show this to papa" one-pager (PDF/WhatsApp card) | Share artifact / WhatsApp | Shares; return visits |
| 13 | Demo | "Show me on MY shop's data" | /demo | WhatsApp-first demo booking; "bring your Excel" framing | Book / start WhatsApp demo | Demo bookings |
| 14 | Sales | "What are the pilot terms?" | /pricing, /migration | Live-in-7-days plan; wedding-season freeze | Start pilot | Demo → pilot rate |
| 15 | Onboarding | "Will this disrupt my counter?" | /migration, /trust/onboarding | Import-done-for-you checklist; day-1/day-7 plan | Meet your onboarding human | Time-to-first-value |
| 16 | Customer success | "Is it working?" | (product) + /academy | Weekly Wapsi Report to owner's WhatsApp; role videos | Open academy | Report open rate |
| 17 | Expansion | "What else can it do for us?" | /products/gold-scheme, /products/digital-gold | Scheme digitization playbook | Talk to your CSM | Module attach rate |
| 18 | Referral | "Whom should I tell?" | /refer | Shareable Wapsi card ("₹4.2L wapsi this month") + referral program | Refer a jeweller | Referral submissions |

### J2 — Chain / enterprise (Vikram + committee)

| # | Stage | Visitor question | Page(s) | Content asset | CTA | KPI |
|---|---|---|---|---|---|---|
| 1 | Cold visitor | "Serious vendor or startup toy?" | / → /solutions/chain-stores | Enterprise-weight design; named-scale proof slots | Explore chains solution | Home → chains rate |
| 2 | Industry education | "Where is organized retail going?" | /resources/state-of-jewellery-retail | Gated flagship report (LinkedIn/IIJS distribution) | Download report | Report downloads → MQL |
| 3 | Pain awareness | "Which branch bleeds silently?" | /pains/multi-store-blindness | "The owner's blind-spot audit" article | Run Growth Score (chain mode) | Quiz completions (chain) |
| 4 | Problem awareness | "Is this a people problem or a systems problem?" | /pains/branch-inconsistency | Governance essay: discounts, pricing, discipline | See multi-store platform | Next-page rate |
| 5 | Current-solution dissatisfaction | "We have ERP + Excel + WhatsApp groups — why change?" | /compare/erp-vs-jwero | "Keep your ERP's books; fix the revenue side" — Tally coexistence | Works-with-your-ERP page | ERP-objection assist rate |
| 6 | Future possibility | "What does a governed chain look like?" | /platform (chain lens) | Owner's daily digest demo; central campaign, local execution | Watch executive tour | Tour completion (chain) |
| 7 | Product awareness | "What's the multi-store architecture?" | /solutions/chain-stores | Branch structure, RBAC, per-branch price rules | Enterprise enquiry | Page → enquiry rate |
| 8 | Feature understanding | "Governance depth?" (Suresh takes over) | /platform/ai-staff, /trust/security | 5 kill-switch scopes, approval queues, daily caps, audit trails (Tier A) | Download security overview | Overview downloads |
| 9 | Business outcomes | "Per-store economics?" | /outcomes (chain) | Revenue-per-store framing; campaign-ROI model | See chain proof | Outcome depth |
| 10 | Proof | "Which chain runs on this?" | /customers?type=chain | Peer chain story with numbers `[VERIFY before publish]` | Read case | Case completion |
| 11 | Trust | "Security review will ask…" | /trust/security, /trust/compliance | DB-per-tenant, RBAC/MFA; honest SSO/SCIM roadmap (Tier C flagged) | Security overview PDF | Committee-kit downloads |
| 12 | ROI | "Board wants the model" | /tools/roi-calculator (chain mode) | Multi-store ROI model; editable assumptions | Export to PDF/WhatsApp | Calculator exports |
| 13 | Demo | "Structured evaluation" | /enterprise | Buying-committee kit: ROI one-pager, migration plan, Tally note, day-in-the-life, peer story | Book specialist call | Enterprise SQLs |
| 14 | Sales | "Rollout risk?" | /migration | Staged branch-rollout plan; pilot-branch framing | Pilot 2 branches | SQL → pilot rate |
| 15 | Onboarding | "60 staff, 8 stores — how?" | /trust/onboarding | Train-the-trainer program; branch playbooks | Rollout plan call | Branch go-live velocity |
| 16 | Customer success | "Is HQ seeing value?" | (product) + QBR artifacts | Owner digest; exception reports | QBR | Digest engagement |
| 17 | Expansion | "New city, franchise arm?" | /solutions/franchise, /products/* | Expansion modules; franchise structure | Expansion review | Store-count growth on platform |
| 18 | Referral | "Peer MD network" | /refer, community | Jwero Circle (peer community); IIJS co-presence | Join Circle / refer | Peer-referred SQLs |

### J3 — Manufacturer / wholesale B2B (Joseph, Bharat bhai)

| # | Stage | Visitor question | Page(s) | Content asset | CTA | KPI |
|---|---|---|---|---|---|---|
| 1 | Cold visitor | "Is this for factories/wholesale or just shops?" | /solutions/manufacturers, /solutions/wholesale | Hero in trade words (jangad, karigar, memo); zero retail imagery | Explore your trade | Direct-entry rate (referral/forward traffic) |
| 2 | Industry education | "What do organized players do differently?" | /resources (B2B track) | "How export houses explain every gram" essay | Read next | Track engagement |
| 3 | Pain awareness | "How much gold am I actually losing?" | /pains/gold-loss | "1–3% of your gold walks out as abnormal loss" article | Estimate your loss (tool) | Article → tool rate |
| 4 | Problem awareness | "Registers can't reconcile WIP" | /pains/wip-blindness, /pains/memo-tracking | Khata-dispute stories; memo-chaos breakdown | See the WIP ledger | Next-page rate |
| 5 | Current-solution dissatisfaction | "Excel + accountant ERP — what's missing?" | /compare/erp-vs-jwero (B2B lens) | "Your ERP keeps accounts. Nothing tracks the gold." | Platform (B2B lens) | Comparison depth |
| 6 | Future possibility | "Factory/order-book on one screen?" | /platform (manufacturing lens) | WIP ledger demo video; order-book view | Watch demo video | Video completion |
| 7 | Product awareness | "Which modules apply to me?" | /solutions/manufacturers · /solutions/wholesale · /solutions/oem · /solutions/export | Module map per trade | WhatsApp / enterprise enquiry | Page → enquiry rate |
| 8 | Feature understanding | "Issue/receive, assay intake, job-work gating?" | /products/manufacturing, /products/orders | Feature walkthroughs with real screenshots | Sandbox / video | Feature depth |
| 9 | Business outcomes | "Loss %, DSO, on-time delivery?" | /outcomes (B2B) | Outcome cards in trade metrics | See proof | Outcome → proof flow |
| 10 | Proof | "Which manufacturer/wholesaler runs this?" | /customers?type=b2b | Named B2B story (slot + collection playbook; no fabrication) | Read story | Story completion |
| 11 | Trust | "My designs/clients leak?" | /trust/security | Tenant isolation; RBAC; export-anytime | Security overview | Trust assist rate |
| 12 | ROI | "Payback in gold saved?" | /tools/gold-loss-calculator | Loss % × annual throughput → payback months | WhatsApp the result | Calc completions |
| 13 | Demo | "Show me on my flows" | /demo (B2B track) | Trade-specific demo script; bring-your-registers framing | Book demo / WhatsApp | B2B demos booked |
| 14 | Sales | "Factory can't stop for software" | /migration (B2B) | Parallel-run plan; karigar onboarding approach | Start pilot | Demo → pilot |
| 15 | Onboarding | "Will karigars use it?" | /trust/onboarding | Shop-floor-simple flows; supervisor training | Onboarding call | Time-to-first-reconciliation |
| 16 | Customer success | "Is loss actually falling?" | (product) | Monthly reconciliation report to owner's WhatsApp | Review with CSM | Report engagement |
| 17 | Expansion | "Retail arm? Buyer portal?" | /solutions/brands, /products/catalog | Catalog-to-retailer distribution module | Expansion call | Module attach |
| 18 | Referral | "Trade circle" | /refer | Trade-association co-marketing; peer forwards | Refer a trade peer | B2B referrals |

### J4 — D2C / startup (Nisha; startups row)

| # | Stage | Visitor question | Page(s) | Content asset | CTA | KPI |
|---|---|---|---|---|---|---|
| 1 | Cold visitor | "Another SaaS? Show me fast" | / → /solutions/lab-grown or /solutions/startups | Sharp hero; product GIFs above fold | Free trial / WhatsApp | Time-to-CTA click |
| 2 | Industry education | "How do jewellery D2C brands actually retain?" | /resources (D2C track) | "CAC is rented, WhatsApp is owned" essay | Read next | Track engagement |
| 3 | Pain awareness | "My ROAS is decaying" | /pains/cac-retention | Retention-math article with D2C benchmarks `[VERIFY]` | Run CAC:LTV worksheet | Tool starts |
| 4 | Problem awareness | "Checkout ≠ relationship" | /pains/checkout-only-commerce | "Your store converts 2%; WhatsApp converts the other 98%" | See channel commerce | Next-page rate |
| 5 | Current-solution dissatisfaction | "Shopify + chatbot — why more?" | /compare/shopify-vs-jwero | Honest verdict: keep Shopify, add what it can't do (Tier-A connectors) | See the bridge | Comparison → platform |
| 6 | Future possibility | "IG DM → paid order, automatically?" | /platform (D2C lens) | End-to-end flow demo: reel → DM → AI → payment link | Try sandbox | Sandbox sessions |
| 7 | Product awareness | "Exact stack replacement map" | /solutions/ecommerce-brands | "Replaces these 5 tools / keeps these 2" diagram | Free trial | Page → trial rate |
| 8 | Feature understanding | "API? Rate-based pricing? Automation depth?" | /products/*, /developers | Feature specs; honest API roadmap (Tier C flagged) | Docs / trial | Docs engagement |
| 9 | Business outcomes | "Repeat rate + WhatsApp revenue?" | /outcomes (D2C) | Attribution model explainer | See proof | Outcome depth |
| 10 | Proof | "A brand like mine?" | /customers?type=d2c | D2C story slot (collection playbook) | Read story | Story completion |
| 11 | Trust | "Meta bans? Data portability?" | /trust, /products/whatsapp | Official WhatsApp Business API; consent & fatigue management (Tier A) | FAQ | Trust assist rate |
| 12 | ROI | "Payback vs my tool stack cost" | /pricing + stack-cost comparison | Tool-consolidation math | Start trial | Pricing → trial |
| 13 | Demo | "I'll try it myself" | /trial | Self-serve trial (mechanics `[VERIFY-WITH-PRODUCT]`; fallback "pilot with your own data") | Start free trial | Trial starts |
| 14 | Sales | "Which plan? Annual?" | /pricing | Transparent tiers; monthly entry; no-lock-in copy | Upgrade in-product | Trial → paid |
| 15 | Onboarding | "Time-to-live?" | in-product + /academy | Self-serve checklist; connect Shopify/Meta in minutes (Tier A) | Activate channels | Activation rate |
| 16 | Customer success | "Is repeat revenue moving?" | (product) | Weekly attribution digest | Review dashboard | Digest engagement |
| 17 | Expansion | "Offline pop-up? Wholesale line?" | /solutions/* | Cross-segment modules (the OS story pays off) | Talk to us | Expansion revenue |
| 18 | Referral | "Founder communities" | /refer | Founder-referral program; public build-in-progress changelog | Refer a founder | Referred trials |

> **R:** four archetype journeys × 18 stages give every page a known upstream question and downstream CTA — the anti-dead-end law made auditable · ICP: all 30 segments route into one of 4 archetypes · pain: stage-3/4 pages carry the pain map (Part 3) · outcome: staged KPIs make funnel leaks diagnosable per archetype · objection: stages 5, 11, 12 are objection-killing stages by design · search: stages 2–5 are the SEO/AEO surface (Part 8) · conversion: stage-13 CTA differs by archetype (WhatsApp / enterprise / trial) · KPI: stage-to-stage progression rates per archetype tag.

## 2.4 Buying-journey framework (Output #31)

### 2.4.1 Decision-unit dynamics: champion vs patriarch (owner-led segments)
The single-store/boutique/bridal sale is a **two-audience sale on one page**: the champion (P2/P5) reads the page; the patriarch (P1) judges the forward. Design laws:
1. Every page carries a **WhatsApp-forwardable artifact** (card/PDF/60-sec video) that survives out of context — peer name, one number, one reassurance ("aapki approval ke bina kuch nahi jaata").
2. Champion pages sell *quick wins + face-saving certainty* ("live in 7 days", rollback honesty); patriarch artifacts sell *peer proof + control* (approval queue screenshot, kill switch).
3. Never force the champion to translate: the artifact IS pre-translated into patriarch language (Hinglish allowed inside artifacts per D6).
4. The muneem veto is pre-neutralized on every commerce page via the standing "your Tally stays" strip → /integrations/tally.

> **R:** the forwarded artifact, not the page, closes owner-led deals · ICP: single-store/boutique/bridal/gold-retail · pain: "need family approval" stall · outcome: shares → return visits → demos · objection: #15 family approval, #2 ERP/muneem · search: n/a (conversion pattern) · conversion: share-artifact CTR is a first-class CTA · KPI: artifact shares per page; share → return-visit rate.

### 2.4.2 Enterprise committee path (chains, brands, franchise, OEM/export, wholesale)
Committee roles and the named artifact each must receive (v1 map, extended):

| Role | Cares about | Site artifact (downloadable, WhatsApp-deliverable) | Lives at |
|---|---|---|---|
| MD / economic buyer | Per-store economics, control, peer proof | **ROI one-pager** (chain-mode calculator export) | /enterprise + /tools/roi-calculator |
| COO / ops head | Rollout risk, training burden | **Migration & rollout plan** (staged, wedding-season freeze) | /migration |
| Finance head / muneem / CA | Ledger integrity, cost | **Tally/Zoho coexistence note** (Tier A) | /integrations/tally |
| IT / security reviewer | Data isolation, access control | **Security overview PDF** (DB-per-tenant, RBAC/MFA; SSO/SCIM roadmap honestly Tier-C-flagged) | /trust/security |
| Store managers / users | Daily workload, commissions | **Day-in-the-life demo video** (per role) | /platform |
| Family board / franchisee council | Emotional safety, peer standing | **Peer story video** (regional language) | /customers |
| Franchisor legal (franchise only) | Data ownership franchisor vs franchisee | **Data-ownership note** | /solutions/franchise |

Path: gated report (stage 2) → /solutions page → committee-kit download (one form, all artifacts, `[ref:enterprise/kit]`) → specialist call → pilot-branch proposal. The **kit download is the enterprise MQL event**; the specialist call is the SQL event.

> **R:** committees don't share login sessions — they share files; naming one artifact per role stops the deal dying in an unattended forward chain · ICP: chains/brands/franchise/B2B · pain: "need approval", 6-role consensus · outcome: enterprise SQLs · objection: security, migration, ERP, lock-in — each role's #1 pre-packaged · search: "jewellery ERP security" long-tail via artifact landing pages · conversion: kit download = MQL definition · KPI: kit downloads → specialist calls → pilots.

### 2.4.3 Evaluation artefacts the site must provide, by journey stage

| Journey stage (18-stage map) | Artifact | Format | Owner |
|---|---|---|---|
| 2–4 (education/pain) | Growth Score quiz + gap report; industry report | Interactive + gated PDF | Content |
| 5 (dissatisfaction) | Comparison pages with dated matrices (`[VERIFY]` cells blocked until verified) | Page | Content |
| 6–8 (possibility/features) | **WhatsApp sandbox** — a live wa.me number that demos the AI on the visitor's own messages ("the conversation is the demo") | Live channel | Product mktg |
| 9 (outcomes) | Outcome cards with metric definitions | Page blocks | Content |
| 10 (proof) | Case stories + sample Wapsi Report (interactive) | Page + artifact | CS + mktg |
| 11 (trust) | Security overview; support-SLA promise; public roadmap incl. Tier-C transparency | PDF + pages | Product |
| 12 (ROI) | Calculators with published, editable assumptions; exportable one-pager | Tools | Growth |
| 13 (demo) | **Evaluation kit** (committee bundle 2.4.2) + demo-prep checklist ("bring your Excel") | Bundle | Sales |
| 14 (sales) | Pilot terms page; migration plan; mutual-action-plan template | Pages + docs | Sales |

> **R:** every stall in a jewellery software deal is a missing artifact — this table is the anti-stall inventory · ICP: all · pain: evaluation fatigue, committee stalls · outcome: shorter cycle, higher demo→pilot · objection: ROI uncertainty, migration fear, security · search: artifacts double as gated-content SEO/AEO assets · conversion: each artifact download is an intent event · KPI: artifact-touch rate in closed-won journeys.

### 2.4.4 Sales handoff points (website → human)
- **WhatsApp conversation started** (all archetypes): lands in Jwero's own omnichannel inbox with the page ref code; AI concierge answers instantly (dogfood), human joins within SLA. Qualification happens IN the thread — this is the north-star event (Qualified Conversations Started/week).
- **Demo booked** (J1/J3): calendar + WhatsApp confirmation; prep checklist auto-sent ("bring your stock Excel, your scheme register count").
- **Enterprise kit downloaded** (J2): routed to specialist; follow-up references the exact artifacts pulled.
- **Trial started** (J4): PLG track; human touch only on activation stall or plan-limit events. Mechanics `[VERIFY-WITH-PRODUCT]`; fallback = "pilot with your own data" assisted setup.
- **Handoff hygiene rules:** the ref code travels into CRM untouched (per-page attribution is the analytics backbone, Part 9); no visitor repeats information the website already captured; sales logs every "objection not answered on site" → weekly content backlog.

### 2.4.5 Post-sale journey to advocacy (stages 15–18)
- **Onboarding (15):** website's promises are contractual artifacts — the 7-day Land plan and wedding-season freeze pages are shown during onboarding, closing the say-do loop. KPI: time-to-first-value (first AI-assisted customer conversation, first reconciliation, or first campaign — by archetype).
- **Customer success (16):** the weekly **Wapsi Report** (owner-language value digest on WhatsApp) is simultaneously a retention tool and the referral engine's raw material. Assist → Approve → Autopilot ladder (v1 §6.1) is the CS expansion script; website pricing tiers carry the same three names so CS never re-narrates.
- **Expansion (17):** module-attach motions mapped per archetype (J1: schemes/digital gold; J2: new branches/franchise; J3: catalog distribution/buyer portal; J4: cross-channel + offline). Expansion pages are the same public /products pages — no hidden upsell decks; transparency is the brand.
- **Referral (18):** three loops, each with a website surface: (a) **artifact loop** — every Wapsi Report carries a one-tap "forward to a jeweller friend" card → /refer; (b) **peer-story loop** — customers who hit a milestone are invited into the case-story pipeline (this is ALSO how proof slots get filled without fabrication, per D3); (c) **community loop** — Jwero Circle for chains/MDs, trade-association co-marketing for B2B, founder community for D2C. Referral identity: referrer's name appears in the referee's first WhatsApp thread ("Mehta ji ne bheja").

> **R:** advocacy is designed as the 18th stage of the SAME journey, not a separate program — the Wapsi Report is simultaneously proof (stage 10), retention (16) and referral fuel (18), the highest-leverage single asset on the site · ICP: all · pain: proof scarcity (we have no fabricated logos to lean on) · outcome: referral-sourced pipeline + a self-filling case-story pipeline · objection: "who else uses it" answered compoundingly over time · search: case stories become the proof cluster (Part 8) · conversion: referred visitors convert at the highest rate of any source · KPI: referral submissions/week; % of new case stories sourced from milestone invites.

---
*Cross-references: pain inventory and objection framework (see Part 3 — Pains, Objections & FAQ) · ICP page templates and wireframes (see Part 4 — Architecture & Wireframes) · calculators and artifact specs (see Part 6 — Conversion) · journey-stage keyword mapping (see Part 8 — Search).*
