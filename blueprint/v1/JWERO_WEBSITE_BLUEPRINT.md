# Jwero Website Blueprint — The Highest-Converting Jewellery Commerce Website

**Date:** 2026-07-19 · **Status:** v1 complete — ready for design/eng/content/marketing execution
**Inputs:** [JWERO_POSITIONING_STRATEGY.md](JWERO_POSITIONING_STRATEGY.md) (+ v2 board reconciliations in `.agents/positioning-research/STATUS.md`), [JEWELLERY_OS_TRANSFORMATION_AUDIT.md](JEWELLERY_OS_TRANSFORMATION_AUDIT.md), [AI_FIRST_CRM_PLATFORM_AUDIT.md](AI_FIRST_CRM_PLATFORM_AUDIT.md), direct repo inspection
**Owner workstream tracker:** `.agents/website-blueprint/STATUS.md`

---

# PART 0 — READ ME FIRST: THE FIVE DECISIONS THAT SHAPE EVERYTHING

Before the 40 sections, the five strategic decisions every page inherits. If a page design conflicts
with one of these, the page is wrong.

## 0.1 The category decision (and the "OS" conflict, resolved)

The brief asked to "position Jwero as the operating system for jewellery businesses." The board-
reconciled positioning research (v2) found **SIONIQ already owns the "Jewelry Operating System" label**
at ~5× Jwero's revenue, and graded a head-on OS-label fight unwinnable.

**Resolution — claim the function, not the contested label:**

- **Category label (nav, footer, schema, PR, analysts):** **Jewellery Growth Engine** — *the AI growth
  engine for jewellery business.*
- **The OS promise, kept in plain words:** "Run your whole jewellery business on Jwero" appears as a
  *benefit line*, never as the category noun. The Platform page IS the OS story — one customer record,
  one catalogue, one inbox, one brain — without giving SIONIQ a free comparison.
- **Jeweller-facing frame (all copy):** the three nouns — **apni yaaddasht** (customer memory that
  belongs to the shop), **apna digital counter** (the counter that never closes), **apna AI staff**
  (works 24×7, you approve everything).
- **The named enemy (every page):** *"Aapka software hisaab rakhta hai. Customer wapas nahi laata."* —
  your software keeps accounts; it doesn't bring customers back.
- **Flagship line:** **"Chains have systems. Now you have one."** / *"Tanishq ke paas system hai.
  Ab aapke paas Jwero hai."*

## 0.2 The honesty tiers (what the website may claim)

The transformation audit is the law. Every claim on the site belongs to a tier; content and design
reviews check tier before publishing. This is not compliance theatre — the positioning's credibility
("the pitch survives the audit") is the moat.

**Tier A — Lead with it (verified in code, unique in market):**
customer memory / Customer 360 with per-factor score explainability; governed AI staff (approval
queues, daily caps, kill switch — "AI proposes, aap dispose"); WhatsApp commerce (full template
lifecycle, broadcasts, flow forms, groups, catalog + public checkout); Instagram/Facebook DM commerce;
AI voice agent (14-language copilot) + video counter (live streams, shoppable video, co-browse, video
calls, appointments); gold schemes + digital gold (fixed-amount 11+1 default, gram plans, KYC,
closures/OTP); jewellery-native catalog/PIM (purity, gemstones, certifications, HUID-aware, RFID);
advanced pricing engine (live metal-rate formulas, approval-gated overrides); marketing automation +
journeys + campaigns; loyalty; omnichannel inbox with AI reply drafts; D2C storefront + shareable
catalogs; GST invoicing at live gold rates, AR ledger, payment reminders; repair engine with enforced
re-hallmark gate; manufacturing WIP + gold-loss ledger; raw materials (GRN weigh→assay, melt/refine,
old-gold intake, karigar job-work); purchase-to-pay; multi-branch/brand/holding structure; festival
calendar intelligence (org calendars → agent triggers); Tally/Zoho + Shopify/Woo/Unicommerce bridges;
RBAC (~150 permissions), MFA, passkeys, DB-per-tenant isolation; BI + natural-language "ask → chart".

**Tier B — Claim carefully (real but partial; use precise words):**
inventory intelligence = valuation, ageing bands, dead-stock summary, fast/slow movers (say
"know your dead stock", NOT "AI demand forecasting"); dashboards/reports (say "reports & BI", the
executive dashboard is being rebuilt); "AI insights" (the agent fleet exists; describe shipped
recipes, not a fantasy fleet).

**Tier C — Never claim until shipped (audit-verified missing):**
POS counter / cash day-close / offline billing; girvi/gold-loan; payroll & karigar wage settlement;
Hindi/vernacular product UI (marketing site may be Hinglish — product screenshots stay honest);
SSO/SCIM & public API (in progress on this branch — claim only when merged); e-invoice/GSTR;
multi-currency/FX; predictive ML (CLV/churn models, product recommender); "fully autonomous AI".
→ These get a public **Roadmap page** entry instead of a product page. Honesty as a trust weapon:
"Here's what we don't do yet" is a section chains respect.

**Naming consequence:** the nav says **"Billing & Finance"** — not "POS". When the POS counter ships
(product Phase 1), a `/products/pos` page activates from the pre-built template in §7.

## 0.3 The conversion thesis: the website is the first demo

Jwero sells conversational, WhatsApp-native selling. Therefore **the website's primary conversion
action is a WhatsApp conversation, not a form.** Forms are the fallback, not the hero.

- **Primary CTA everywhere:** "WhatsApp par demo dekho" → wa.me deep link with per-page ref code →
  lands in **Jwero's own omnichannel inbox, answered by Jwero's own AI staff with approval queues on**.
  The prospect experiences the product in the first 60 seconds, on their own phone, in their own
  language. This is the single highest-leverage conversion mechanic available to this company and no
  competitor can copy it without owning the product.
- **Secondary CTA:** "Book a demo" (calendar, 15-min slots, human).
- **Tertiary:** phone call (tap-to-call on mobile), and per-tool lead magnets (calculator results
  delivered on WhatsApp — capture + channel proof in one step).
- **Enterprise track:** chains get a separate "Talk to a specialist" path (§9.4).

North-star website metric: **Qualified Conversations Started per week** (WhatsApp + demo + call,
deduped) — not traffic, not MQLs.

## 0.4 The audience decision: build for the champion, arm them for the patriarch

The person on the website is usually **the second-generation champion** (Priya persona, §2) or the
**chain MD/ops head** — not the 55-year-old owner. Every page therefore has two jobs: convince the
reader, and **give the reader ammunition to convince the family** (shareable one-pagers, Hinglish
video case stories, WhatsApp-forwardable proof cards, "show this to papa" artifacts). Shareability is
a first-class design requirement, not a nice-to-have.

## 0.5 The language decision: Hinglish is the brand voice, English is the chrome

The marketing site launches **English-structured with Hinglish emotional spine** (headlines carry the
Hindi lines with instant context), then adds full `/hi/` and regional locales (§32). Product
screenshots remain honest (English UI today). Regional-language *video* testimonials are the
vernacular strategy until product i18n ships — video is where vernacular converts anyway.

---

# PART 1 — STRATEGY FOUNDATION

## 1. Messaging hierarchy (Output #10)

One pyramid, five altitudes. Every piece of copy on the site resolves to a level of this pyramid;
nothing off-pyramid ships.

**L0 — Brand idea (one line, everywhere):**
> **The shop that never forgets.** / *Jise sab yaad rehta hai.*

**L1 — Category + flagship claim (Home hero, PR):**
> Jwero — the AI growth engine for jewellery business.
> **"Chains have systems. Now you have one."**

**L2 — The enemy + the reframe (Home §2, every ICP page opener):**
> Your software keeps accounts. It doesn't bring customers back. The chains didn't out-love your
> customers — they **out-remembered** them. Jwero gives you back your memory, at their scale.

**L3 — The three nouns (Platform + product hub organizing principle):**
| Noun | Promise | Proof (Tier A capability) |
|---|---|---|
| **Apni yaaddasht** — customer memory | Every customer, occasion, taste, scheme balance in one place that belongs to the shop, not a salesman's phone | Customer 360: gold balance, wedding month, birthdays, RFM, churn risk, best send window — with "why this score" explainability |
| **Apna digital counter** | The counter that never closes: outstation, NRI, 11pm enquiries | WhatsApp catalog + checkout, IG/FB DMs, D2C storefront, live video selling, appointments |
| **Apna AI staff** | Answers in seconds, follows up, remembers birthdays, invites before Dhanteras — **and every action waits for your approval** | Governed agent runtime: approval queues, daily caps, kill switch; AI voice + reply drafts; festival calendar triggers |

**L4 — Product proof lines (feature pages):** each capability gets one benefit sentence + one
literal-truth proof line (e.g., "Your customer record knows her gold balance and her daughter's
wedding month — that's a column in the database, not a metaphor").

**L5 — Objection killers (FAQ/objection pages):** §5 framework.

**Message discipline rules:** (1) never open with a software category noun (CRM/ERP/PIM) above the
fold — those words appear in SEO slots (title tags, H2s) not hero copy; (2) every Hindi line is
followed by sense-making context for non-Hindi readers; (3) "AI" never appears without governance in
the same viewport ("aap approve karte ho"); (4) numbers beat adjectives — no "revolutionary".

**Why it matters / serves / addresses / drives / resolves / supports / improves / KPI —**
ICP: all; Pain: being sold "software" instead of growth; Outcome: demo intent; Objection: "another
software cost"; Search: consistent entity signals (§16); Conversion: message-market fit lifts every
CTA; KPI: hero scroll-past rate < 40%, message recall in demo calls ("they repeat our line back").

## 2. User personas (Output #4)

Seven personas; the first three drive 80% of design decisions. (Names are archetypes for internal use.)

**P1 — Priya, 28 — the second-gen champion (PRIMARY WEBSITE AUDIENCE)**
Daughter/son of a single-store owner (₹2–20 cr). Runs the shop's Instagram; fights the family on
modernization. Researches at night on mobile. *Buys:* ammunition to convince papa; quick wins she can
show in a week. *Fears:* choosing wrong and losing face at the dinner table. *Design duty:* mobile-
first, WhatsApp CTAs, shareable proof cards, "live in 7 days" promise, scheme/dead-stock calculators
she can run with real shop numbers.

**P2 — Vikram, 42 — MD, regional chain, 2–15 stores (BEACHHEAD ICP)**
₹20–500 cr, has a "computer person," feels Tanishq expanding into his city. *Buys:* control,
branch consistency, marketing at scale, an owner's daily digest. *Fears:* migration downtime in
wedding season, staff resistance, data leaving the family. *Design duty:* multi-store solution page,
governance/security depth, enterprise track, peer case stories with numbers, "keep your Tally" message.

**P3 — Rajesh bhai, 55 — single-store patriarch (THE VETO)**
Rarely on the website; sees what Priya forwards. *Buys:* peer proof ("Rajkot ke Mehta ji use karte
hain"), respect for his way of working, control over AI. *Design duty:* every page's share artifact
must survive a WhatsApp forward to him; Hinglish video stories; "aapki approval ke bina kuch nahi
jaata" above the fold on AI pages.

**P4 — Suresh, 38 — ops head / "computer person" at a chain (THE EVALUATOR)**
*Buys:* migration plan, training burden, support SLAs, integration honesty. *Design duty:* Migration
Centre, implementation timeline page, docs/help centre, integration pages with real screenshots.

**P5 — The Muneem/CA — accountant (THE HIDDEN VETO)**
Guards Tally; kills deals silently. *Design duty:* "Apna hisaab rakho" — a dedicated "Works with
Tally" page: Jwero takes the revenue side, Tally keeps the books. Never threaten the ledger.

**P6 — Amit, 45 — manufacturer/wholesaler (Zaveri Bazaar)**
Karigar job-work, jangad/memo, purity/assay, B2B ordering. *Buys:* order tracking, WIP gold-loss
control, catalog-to-retailer distribution. *Design duty:* manufacturer/wholesaler solution pages that
use HIS words (jangad, karigar, wastage, touch); never show retail-consumer imagery here.

**P7 — Nisha, 31 — D2C/lab-grown founder**
Shopify-comparer, Meta-ads native. *Buys:* WhatsApp/IG-native commerce Shopify can't do, jewellery-
aware pricing (live gold rate). *Design duty:* comparison honesty vs Shopify ("keep Shopify, add
Jwero" is a valid path via the bridge), speed-to-launch, API/roadmap candour.

**Buying-committee map (chains):** MD (economic buyer) + ops head (technical) + muneem (finance veto)
+ store managers (users) + family board (emotional). Enterprise pages must contain a named artifact
for each: ROI one-pager (MD), migration plan (ops), Tally coexistence note (muneem), day-in-the-life
demo (managers), peer story (board).

## 3. Customer journey maps (Output #3)

The brief's 19-stage journey, compressed to 6 website-visible stages, mapped per persona. Full stage →
asset → CTA → KPI mapping:

**Stage model:** UNAWARE → PAIN-AWARE → SOLUTION-AWARE → EVALUATING → BUYING → CUSTOMER/ADVOCATE.

**J1 — Priya (single store):**
| Stage | Where she is | Asset that moves her | CTA | KPI |
|---|---|---|---|---|
| Unaware | IG reels, jeweller WhatsApp groups | Reel: "3 customers you lost this week without knowing" → pain blog | soft: follow/read | reel→site CTR |
| Pain-aware | Googling "customer follow up jewellery" 11pm | Pain page: lead leakage (§9.3) + Dead Stock Calculator | run calculator | calc completion |
| Solution-aware | comparing WATI, QuickSell | "WhatsApp tools vs Jwero" comparison; three-nouns Platform tour | WhatsApp demo | conv. started |
| Evaluating | needs papa's yes | Gujarati video case story + "Show this to papa" one-pager (PDF/WhatsApp card) | share artifact | shares, return visits |
| Buying | pilot terms | Onboarding page: "live in 7 days, data import done for you, wedding-season freeze" | book demo | demo→pilot rate |
| Advocate | 3 months in | Wapsi Report share card ("₹4.2L wapsi this month via Jwero") | refer a jeweller | referral submissions |

**J2 — Vikram (chain):** LinkedIn/IIJS/peer → "State of the Indian Jeweller" report (gated) →
multi-store solution page → governance + security pages → enterprise demo with buying-committee kit →
staged branch rollout content → Jwero Circle community. KPI: report downloads → SQL rate.

**J3 — Amit (manufacturer):** trade WhatsApp groups → gold-loss pain article ("1–3% of your gold
walks out as abnormal loss") → manufacturing solution page → WIP ledger demo video → WhatsApp demo.

**Journey design rules:** every stage has (a) one primary asset, (b) one WhatsApp-forwardable
artifact, (c) one next-step CTA — never a dead end; blog posts end in calculators, calculators end in
WhatsApp, WhatsApp ends in demos, demos end in pilots; case stories appear at EVERY stage after
pain-aware (peer proof is the trade's native currency).

## 4. The pain map (master inventory → page mapping)

The complete pain inventory, clustered; each pain gets a home (a page section, a pain page, or a
cluster article — §17). **Bold** pains get dedicated pain landing pages in Phase 1–2 (highest search
+ emotional charge).

**Revenue & customers:** **lead leakage from WhatsApp/IG enquiries**; **no follow-up system (salesman
bhool gaya)**; **customer data in staff personal phones / staff attrition = customer loss**;
**dormant customers never return (no win-back)**; **festival marketing = blast SMS with no
attribution**; discount abuse at the counter; no occasion capture (birthdays/anniversaries/weddings);
outstation/NRI customers unserved; no online presence / ghost-town website; can't sell on Instagram;
walk-ins not captured.
**Inventory & capital:** **dead stock / old stock eating gold capital**; ageing unknown; no
fast/slow-mover visibility; stock scattered across branches with no transfer logic; valuation at
today's rate unknown; RFID/stocktake pain.
**Schemes & money products:** **gold scheme leakage/disputes (paper/Excel)**; instalment collection
chasing; maturity disputes; scheme compliance fear; digital gold curiosity.
**Operations:** billing at live rate errors; repair job tracking (customer calls, nobody knows
status); custom-order chaos (design→karigar→delivery); manufacturing gold loss (**abnormal wastage**);
karigar khata disputes; vendor/PO chaos; purity/assay disputes on intake; multi-branch inconsistency;
staff productivity invisible; owner away = shop blind.
**Trust & compliance:** hallmarking/HUID workload; GST filing fear; BIS audits; fraud (old-gold
intake, ghost inventory).
**Growth:** can't open branch #2 (systems don't scale); franchise control fear; no data for bank/
investor conversations.

Each **bold** pain page follows the PAS-structured pain-page template (§7.T4) and feeds its topic
cluster (§17). The pain inventory is also the seed list for the FAQ bank (Appendix B) and the
blog calendar (§22).

## 5. Objection-handling framework (Output #30)

Rule: **every objection is answered on the website before sales hears it** — on a dedicated page or a
standing section, findable from nav/footer/FAQ, and linked from the exact moment it arises (pricing
objections on the pricing page, migration fear on every comparison page).

| # | Objection | Answer strategy | Where it lives |
|---|---|---|---|
| 1 | "Too expensive / another software cost" | Reframe cost→growth: price vs one lost bridal customer; chai-per-day math; ROI calculator adjacent to every price mention | Pricing page + ROI calculator |
| 2 | "Already have ERP (Ornate/Synergics/Marg/Tally)" | **"Apna hisaab rakho. Kamai badlo."** Keep your books — Jwero takes the revenue side. Tally/Zoho bridge is built | "Works with your ERP" page + every comparison page |
| 3 | "Migration fear (data loss, downtime)" | Migration Centre: we import for you, wedding-season change freeze, phased rollout, "your data is yours — export anytime" | /migration (§10.2) |
| 4 | "My staff can't learn it / team resistance" | Day-in-the-life videos per role; "if they can use WhatsApp, they can use Jwero"; training included; staff win stories (salesman ka commission bada) | /platform/onboarding + solution pages |
| 5 | "Will AI replace my staff?" | No — AI staff works FOR your staff; approval queues demo; "AI proposes, aap dispose"; salesmen close more with memory chips | /platform/ai-staff + FAQ |
| 6 | "AI will send wrong messages to my customers" | Governance above the fold: approval queue screenshot, daily caps, kill switch, blocked-actions list | /platform/ai-staff |
| 7 | "WhatsApp will ban my number" | Official WhatsApp Business API, template approvals, consent & fatigue management (fatigue_score is a real column), opt-out handling | /products/whatsapp + FAQ |
| 8 | "Data security / family business data leaving us" | DB-per-tenant isolation, encryption, RBAC/MFA/passkeys, export-anytime; honest roadmap for SSO/audit certifications | /trust/security |
| 9 | "Hidden costs / lock-in" | Transparent pricing page, no-lock-in copy, export promise, published implementation scope | /pricing + /trust |
| 10 | "Support quality (AMC-wallah at least visits)" | Support promise page: WhatsApp-first support, response SLAs, onboarding human, regional language support team | /trust/support |
| 11 | "Need customization / my business is different" | Custom fields, price rules, per-branch config; honest "what we don't customize" | /platform + FAQ |
| 12 | "ROI uncertainty" | Lighthouse numbers, Wapsi Report samples, calculators, 90-day proof framing (Assist→Approve→Autopilot ladder) | /customers + calculators |
| 13 | "Language — my team works in Hindi/Gujarati" | Honest: voice copilot speaks 14 languages; product UI English today, vernacular on roadmap; support in your language | FAQ + roadmap |
| 14 | "Implementation time / busy season" | "Live in 7 days" for Land scope; wedding-season freeze policy; phased plan | /migration |
| 15 | "Need family approval" | Shareable artifacts on every page ("Show this to the family" card) | global pattern |
| 16 | "Downtime risk" | Status page + uptime commitment (publish only when backup/DR ships — Tier C until then; interim: honest infra description) | /trust |
| 17 | "Already using WATI/Interakt for WhatsApp" | "WhatsApp tool vs growth engine" — no memory of purchases/schemes/occasions; side-by-side | comparison pages |
| 18 | "Contract lock-in" | Monthly options at entry tiers; annual = discount not handcuffs | /pricing |

**KPI:** objection-page assist rate (% of closed-won journeys touching ≥1 objection page); sales-
reported "new objection not on site" count → feeds content backlog weekly.

## 6. Buying-journey framework (Output #31) + trust framework (Output #29)

**6.1 The Assist → Approve → Autopilot ladder as the buying journey.** The v2 board decision: sell
the way the product earns trust. The website mirrors it:
- **Assist (land):** import customers, connect existing WhatsApp number, publish catalog, greetings
  on with approvals. Website promise: "zero rip-out, live in days."
- **Approve (prove):** AI drafts, you approve; weekly **Wapsi Report** to the owner's WhatsApp
  (X purane customers wapas, Y appointments, ₹Z bikri via Jwero). Website: sample Wapsi Report as a
  live interactive artifact — the single most persuasive asset on the site.
- **Autopilot (expand):** earned autonomy per action class, schemes digital, video counter, branches.
Pricing tiers (§25) carry the same three names, so the sales narrative, product ladder, and price
fence are one story.

**6.2 Trust framework — the proof ladder.** Order of persuasive power in this trade, descending;
site sections are budgeted accordingly: (1) **peer numbers** (named jeweller + city + metric);
(2) **peer faces** (regional-language video stories); (3) **live product proof** (WhatsApp self-demo,
interactive Wapsi Report, calculators on their real numbers); (4) **institutional signals** (Meta
Business Partner status *if/when verified*, Tally/Shopify/Razorpay integration logos, association
mentions GJC/IBJA); (5) **transparency artifacts** (public pricing, public roadmap, release notes,
founders page, "what we don't do yet"); (6) claims/adjectives (avoid).
**Trust page set:** /customers (stories), /trust/security, /trust/support, /trust/onboarding,
/company/founders, /changelog, /roadmap.
**Rules:** no fake logos, no stock-photo testimonials, no unverifiable superlatives; every number
carries a name and a date; Meta partner badge only after verification (flagged unverified today).

---
# PART 2 — ARCHITECTURE

## 7. Website architecture & navigation hierarchy (Outputs #1, #2)

**7.1 Architectural principle: three front doors, one spine.** Visitors arrive as (a) a pain
("dead stock khaya ja raha hai"), (b) a product word ("jewellery CRM"), or (c) a peer's mention
("Jwero kya hai?"). The IA gives each a door — Solutions (pain/ICP), Products (category words),
Home/Platform (brand) — and all three doors funnel to the same spine: **proof → tool → WhatsApp/demo.**

**7.2 Primary navigation (desktop):**

```
[Jwero]  Platform ▾   Products ▾   Solutions ▾   Pricing   Customers   Resources ▾        [हिं/EN] [Login] [💬 WhatsApp] [Book Demo]
```

- **Platform ▾** — The Growth Engine (tour) · AI Staff & Governance · Customer Memory (360) ·
  Integrations · Security & Trust · Onboarding & Support · Roadmap & Changelog
- **Products ▾** (4 groups, mirrors the three nouns + operations):
  - **Sell (digital counter):** WhatsApp Commerce · Instagram & Facebook · Online Store (D2C) ·
    Video Counter & Appointments · AI Sales Agents & Voice
  - **Know (yaaddasht):** Jewellery CRM & Customer 360 · Marketing Automation & Journeys ·
    Campaigns & Broadcasts · Loyalty · Analytics & Reports
  - **Run (operations):** Catalog (Jewellery PIM) · Inventory · Orders & Fulfilment ·
    Billing & Finance (GST @ live rate) · Purchases & Vendors · Manufacturing & Karigar Jobs ·
    Repairs & Services · Staff, Roles & Tasks
  - **Grow (money products):** Gold Schemes · Digital Gold · Festival Marketing (Calendar
    Intelligence) · Multi-store & Franchise
- **Solutions ▾** (2 columns): **By business** — Single Store · Multi-store & Chains · Luxury &
  Boutique · Bridal & Wedding · Diamond · Gold · Silver · Lab-grown · Manufacturers · Wholesalers ·
  D2C & Startups · Franchise Networks; **By pain** — Dead Stock · Lead Leakage · Customer Follow-up ·
  Staff Attrition Data Loss · Scheme Leakage · Festival Sales · Repair Tracking · Gold Loss
- **Resources ▾** — Blog · Jwero Academy · Tools & Calculators · State of the Indian Jeweller ·
  Compare (vs alternatives) · Migration Centre · Help Centre & Docs · Events & Webinars
- Persistent right side: language toggle, Login, **WhatsApp (accent button)**, **Book Demo (primary)**.

**Mobile nav:** hamburger with the same tree flattened to 2 levels + a **sticky bottom bar on every
page: [📞 Call] [💬 WhatsApp] [Book Demo]** — thumb-zone, always visible, the single most important
mobile CRO element (§39).

**Footer (mega, SEO-load-bearing):** full product list, all solution pages, top 10 pain pages, top
comparisons, tools, trust pages, company, socials, GST/legal, language switcher, and the enemy line
as the footer signature.

**7.3 Page-template system (Output #7 — wireframes).** Ten templates cover the whole site; every
template annotated as: section → job → proof element → CTA.

**T1 · HOME** (the category argument in 12 scrolls)
1. **Announce bar:** live 24k gold rate ticker + "State of the Indian Jeweller '26 — download" (rate
   ticker = instant "they're one of us" signal; also a dwell/return hook).
2. **Hero:** H1 "Chains have systems. Now you have one." · sub: "Jwero is the AI growth engine for
   jewellery business — every customer remembered, every enquiry answered in seconds, every festival
   captured." · CTAs: [💬 See Jwero on your WhatsApp] [Book a demo] · under-CTA microcopy: "2-minute
   demo on your own phone. No form." · background: real product UI in a jeweller's context (counter
   tablet + phone), not abstract 3D.
3. **Enemy block:** the Frankenstack visual — 6 tools (billing / WhatsApp / catalog PDFs / website /
   scheme Excel / agency) each holding a fragment of one customer ("Sunita ji") → one thread on
   Jwero. Caption: "Aapka software hisaab rakhta hai. Customer wapas nahi laata."
4. **Three nouns tour:** tabbed/scroll-jacked triptych — Yaaddasht / Digital Counter / AI Staff —
   each with a 20-sec product clip + one literal-truth proof line.
5. **Governance strip:** "AI proposes, aap dispose." Approval queue UI + daily caps + kill switch,
   shown, not described.
6. **Wapsi Report interactive:** a live sample owner digest ("Is hafte: 14 purane customers wapas ·
   9 appointments · ₹4.2L bikri Jwero se") the visitor can scrub through. CTA: "Get your own Wapsi
   Report in 30 days."
7. **Numbers wall:** lighthouse metrics (repeat-purchase %, scheme enrolment, WhatsApp-attributed ₹)
   — names + cities + dates.
8. **ICP router:** "Aap kaunse jeweller ho?" — 6 cards (single store / chain / manufacturer /
   wholesaler / D2C / franchise) → solution pages.
9. **Money products spotlight:** gold schemes gone digital + digital gold (the lock-in modules;
   also the most searched).
10. **Integration strip:** Tally · Shopify · WooCommerce · Unicommerce · Razorpay · Meta —
    "Keep what works. Jwero joins your shop, it doesn't demand it."
11. **Case story video** (regional language, subtitled) + logo/name row.
12. **FAQ (schema'd, top 8)** → **final CTA block** (WhatsApp primary) → footer.

**T2 · PLATFORM TOUR** — the OS-function story: one animated data-flow diagram (enquiry → memory →
AI draft → your approval → sale → scheme → wapsi), then four deep-dive anchors (Memory / Counter /
AI Staff / Operations), integrations, security, onboarding. This page carries the "run your whole
business on Jwero" promise (§0.1).

**T3 · PRODUCT HUB** (e.g., /products/whatsapp): Hero (job-to-be-done headline + product shot) →
pain vignette (3 named micro-pains) → how it works (3 steps, real UI) → feature grid (6–9, each
benefit-first) → jewellery-native proof (what generic tools can't do: rate-linked prices, scheme
context, HUID) → mini case story → objections local to this product → FAQ (schema'd) → cross-links
(related products + relevant pain pages + comparison) → CTA. **Every product hub answers: what does
it replace, what does it work with, what does it cost.**

**T4 · PAIN PAGE** (e.g., /solutions/pain/dead-stock): PAS structure — Pain (mirror their words,
vernacular quote up top) → Agitate (the compounding math: dead stock at today's gold rate + interest;
interactive mini-calculator inline) → Solution (the 2–3 Jwero capabilities that kill this pain, only
those) → proof story → FAQ → CTA ("See your dead-stock number on WhatsApp").

**T5 · ICP SOLUTION PAGE** — see §9.

**T6 · COMPARISON PAGE** — see §10.

**T7 · CASE STORY** — narrative arc (shop history → the breaking point → first 30 days → numbers →
owner quote in their language, video) + a "Show this to the family" downloadable/forwardable card +
"jeweller like this one?" router. Numbers verified, dated.

**T8 · TOOL/CALCULATOR PAGE** — see §11: tool above the fold, zero fields before value (sliders
with defaults), results emailed nowhere — **delivered on WhatsApp** (capture + channel proof), then
interpretation content below for SEO/AEO.

**T9 · PRICING** — see §25.

**T10 · CONTENT/ARTICLE** — answer-first block (≤60 words, extractable), then depth; author entity
box (real person, jewellery credentials); FAQ tail; cluster cross-links; schema per §19.

**7.4 UX specifications shared by all templates (Output #8):**
- **Sticky contextual CTA:** desktop top-right pair; mobile bottom bar (§7.2). CTA label varies by
  page context ("See scheme demo on WhatsApp" on the schemes page).
- **Progressive disclosure:** hero answers "what/for whom/proof" in 5 seconds; each scroll adds one
  idea; "learn more" accordions for depth (also AEO-friendly Q&A pairs).
- **Proof density rule:** at least one proof element (number, name, screenshot, or live widget) per
  two viewports — no proof deserts.
- **Real-UI-only rule:** no fantasy dashboards; screenshots from the live product (audit honesty).
- **Performance/visual:** §35–36 (Core Web Vitals ≥95, AVIF, luxury-minimal design system on the
  product's own token palette — ink + gold accents, generous whitespace, jewellery photography only
  where it earns space).
- **AI site assistant** (dogfooding the support-agent widget): "Ask Jwero anything" — answers from
  docs/FAQ, hands off to WhatsApp; every transcript is content-gap intelligence (§38).

## 8. Complete sitemap (Output #6)

Phase tags: **[P1]** launch (~35 URLs) · **[P2]** 45–120d (~80 URLs) · **[P3]** 4–8mo (programmatic
+ clusters) · **[P4]** 8–12mo. Locale prefix `/hi/…` from P2 (§32).

```
/                                        [P1] Home (T1)
/platform                                [P1] Growth Engine tour (T2)
/platform/ai-staff                       [P1] AI staff & governance (approval queues, caps, kill switch)
/platform/customer-memory                [P1] Customer 360 / yaaddasht
/platform/integrations                   [P1] Tally, Zoho, Shopify, Woo, Unicommerce, Razorpay, Meta
/platform/integrations/[tool]            [P2] per-integration pages (tally first — the muneem page)
/platform/onboarding                     [P1] "Live in 7 days" + training + support promise
/trust/security                          [P1] security & data ownership
/trust/support                           [P2] support promise & SLAs
/roadmap                                 [P2] public roadmap incl. honest "not yet" list
/changelog                               [P2] release notes (ship-velocity proof)

/products/whatsapp                       [P1] WhatsApp Commerce
/products/instagram-facebook             [P1] IG & FB DM commerce
/products/online-store                   [P2] D2C storefront + shareable catalogs
/products/video-counter                  [P2] live video selling, co-browse, appointments
/products/ai-sales-agents                [P1] AI agents + voice
/products/crm                            [P1] Jewellery CRM & Customer 360
/products/marketing-automation           [P2] journeys, occasion autopilot, festival calendar
/products/campaigns                      [P2] broadcasts & campaign management
/products/loyalty                        [P2]
/products/analytics                      [P2] reports, BI, ask-in-plain-language
/products/catalog                        [P1] jewellery PIM (purity, certs, HUID, RFID)
/products/inventory                      [P1] valuation, ageing, dead-stock visibility
/products/orders                         [P2] orders & fulfilment
/products/billing-finance                [P2] GST invoicing @ live rate, AR, reminders
/products/purchases-vendors              [P2]
/products/manufacturing                  [P2] WIP, gold-loss ledger, karigar jobs
/products/repairs                        [P2] repair engine, re-hallmark gate
/products/gold-schemes                   [P1] scheme lifecycle digital
/products/digital-gold                   [P1]
/products/multi-store                    [P1] branches, brands, franchise
/products/pos                            [P3-GATED: activates when POS ships]

/solutions/single-store                  [P1]
/solutions/multi-store-chains            [P1]
/solutions/manufacturers                 [P2]
/solutions/wholesalers                   [P2]
/solutions/d2c-brands                    [P2]
/solutions/franchise                     [P3]
/solutions/luxury-boutique               [P3]
/solutions/bridal                        [P2]
/solutions/diamond|gold|silver|lab-grown [P3] (segment pages; only where copy is genuinely distinct)
/solutions/pain/dead-stock               [P1]
/solutions/pain/lead-leakage             [P1]
/solutions/pain/customer-follow-up       [P1]
/solutions/pain/staff-attrition-data     [P2]
/solutions/pain/scheme-leakage           [P2]
/solutions/pain/festival-sales           [P2]
/solutions/pain/repair-tracking          [P3]
/solutions/pain/gold-loss                [P3]

/pricing                                 [P1] (T9)
/customers                               [P1] story index + numbers wall
/customers/[story]                       [P1: 3 → P2: 10 → ongoing]

/compare                                 [P2] index
/compare/jwero-vs-[competitor]           [P2] ornate-nx, synergics, jewelacc, marg, sioniq, zithara,
                                              wati, interakt, doubletick, quicksell, shopify, zoho-crm
/compare/whatsapp-tools-vs-growth-engine [P1] (category-level, no single target)
/migration                               [P1] Migration Centre hub
/migration/from-[tool]                   [P2] per-incumbent guides
/migration/keep-your-tally               [P1] the muneem page (alias of integration page)

/tools                                   [P1] index
/tools/dead-stock-calculator             [P1]
/tools/gold-scheme-calculator            [P1]
/tools/whatsapp-revenue-estimator        [P2]
/tools/customer-wapsi-calculator         [P2] (repeat-purchase ROI)
/tools/growth-score                      [P2] 12-question graded quiz → personalized report
/tools/gold-rate                         [P2] live rate page w/ history (SEO magnet, daily return visits)

/blog + /blog/[cluster]/[article]        [P2 engine; P1 seeds ×10]
/academy                                 [P3] Jwero Academy (courses: WhatsApp selling, scheme design,
                                              dead-stock clinic, festival playbooks)
/reports/state-of-the-indian-jeweller    [P2] the category artifact (gated PDF + ungated web version)
/help, /docs                             [P2] help centre (also the AI assistant's corpus)
/events                                  [P3] webinars, Meta × Jwero summit
/partners                                [P2] ERP-dealer/agency partner program
/company, /company/founders, /careers    [P1 min. viable → P2 full]
/contact                                 [P1]
/book-demo                               [P1] calendar + WhatsApp fallback
/whatsapp                                [P1] redirect page → wa.me with ref capture (all offline QR/print)
/legal/*                                 [P1] privacy, terms, DPDP statement
```

Programmatic layers [P3]: `/solutions/[segment]-[city]` only with genuine local proof (a named
customer in that city) — no doorway pages; `/glossary/[entity]` for entity SEO (§16).

## 9. ICP-specific landing pages (Output #5)

Template T5, five sections deep, each ICP in its own words:

**9.1 /solutions/single-store** (Priya+Rajesh): Hero "Aapki dukaan. Chain jaisi system." Pain trio:
salesman's phone = customer list, festival SMS into the void, scheme registers. Solution: yaaddasht +
WhatsApp counter + occasion autopilot with approvals. Proof: single-store story with repeat-purchase
number. Offer: Assist plan, live in 7 days, data imported for you. CTA: WhatsApp demo.
**9.2 /solutions/multi-store-chains** (Vikram/Suresh/beachhead): Hero "Har branch, ek jaisi.
Har customer, yaad." Pains: branch inconsistency, marketing per-store chaos, owner blindness,
Tanishq pressure. Solution: multi-branch structure + branch-consistent pricing rules + central
campaigns + owner digest + RBAC. Buying-committee kit downloads (§2). Enterprise CTA: specialist call.
**9.3 /solutions/manufacturers** (Amit): jangad/karigar/WIP/gold-loss language; WIP ledger + assay
intake + job-work gating; NO retail imagery. **9.4 /solutions/wholesalers**: B2B catalog distribution,
order capture on WhatsApp, purchase-to-pay. **9.5 /solutions/d2c-brands** (Nisha): "Keep Shopify.
Add the channels it can't do." — WhatsApp/IG native + live-rate pricing + video counter; honest API
roadmap. Segment pages (diamond/gold/silver/lab-grown/bridal/luxury) ship only where the copy, proof
and FAQ are genuinely segment-specific — otherwise they 302 to the nearest true page (thin doorway
pages would poison both SEO and credibility).

Each ICP page's rationale block — ICP: named; Pain: that ICP's top-3 from §4; Outcome: demo/WhatsApp
starts from that segment; Objection: the segment's #1 (single store: cost; chains: migration+control;
manufacturers: "software is for retailers"); Search: segment head terms ("jewellery software for
retail chain India"); KPI: segment-tagged conversation starts.

## 10. Comparison pages (Output #25) & Migration Centre (Output #26)

**10.1 Comparisons — the honesty weapon.** Format per T6: 60-word verdict ("choose them if… choose
Jwero if…" — genuinely concede), then a factual, dated feature matrix, then "what jewellers switch
for" (memory/AI/channels), then migration path, then FAQ. Concessions build the credibility that
makes the wins believable: vs Ornate/Synergics/Marg concede billing depth & offline; vs
WATI/Interakt/DoubleTick concede price & pure-messaging simplicity; vs QuickSell concede lightweight
catalog sharing; vs Shopify concede web ecommerce ecosystem; vs SIONIQ/Zithara compete directly
(fresh research required before publishing — verification pass, Appendix A of the positioning doc).
Legal rule: every cell sourced + dated; competitor names in title tags but never in paid brand-term
abuse. **10.2 Migration Centre (/migration):** hub promise — "We move you. You sell." Sections:
what we import (customers, catalog, schemes — from Excel/ERP exports/phone contacts), the 7-day Land
plan, wedding-season freeze policy, per-incumbent guides [P2], the muneem page (keep-your-tally),
export-anytime guarantee, migration FAQ, rollback honesty. KPI: migration-page → demo rate;
"migration fear" objection frequency in sales notes (should fall).

## 11. ROI calculators & interactive tools (Outputs #27, #28)

All tools follow three laws: (1) value before identity — sliders pre-filled with segment defaults,
result visible before any contact field; (2) results delivered on WhatsApp (capture = channel proof);
(3) every tool teaches the category math while computing it (inputs are labelled in jeweller
language: grams, making %, footfall, karigar count).

| Tool | Core math | Serves / kills objection | KPI |
|---|---|---|---|
| **Dead Stock Calculator** [P1] | slow stock value × (gold financing % + insurance + opportunity) → monthly bleed; melt-vs-markdown breakeven | inventory pain; "ROI uncertainty" | completions, WhatsApp deliveries |
| **Gold Scheme Calculator** [P1] | enrolments × instalment × completion-rate uplift (digital vs paper) → corpus + locked future sales | scheme leakage; expansion revenue | completions → scheme-page demos |
| **WhatsApp Revenue Estimator** [P2] | monthly enquiries × response-time conversion curve × AOV → recovered revenue | lead leakage; "already have WATI" | tool→comparison-page flow |
| **Customer Wapsi Calculator** [P2] | customer base × dormant % × win-back % × AOV | follow-up pain; the core category claim | tool→demo rate |
| **Growth Score quiz** [P2] | 12 questions → 0–100 vs chains benchmark → personalized gap report on WhatsApp | all ICPs; self-diagnosis = pain awareness | score shares, report opens |
| **Live Gold Rate page** [P2] | rate + history + "what today's rate does to your dead stock" hook | daily-return habit; SEO magnet | return visits, rate→tool flow |

Calculator assumptions are published (defensible defaults, editable) — auditable math is a trust
artifact in itself, and the assumption tables are prime AEO content ("what does dead stock cost a
jeweller per month").

---
# PART 3 — CONTENT & SEARCH (SEO · AEO · AIO · GEO · LLM)

## 12. Content strategy (Output #11)

**Thesis: narrate the industry's transition, and the category is yours.** Content exists to make
Jwero the source AI engines and jewellers both cite for "how jewellery retail modernizes." Three
content engines:

1. **The authority engine — "State of the Indian Jeweller" (annual) + quarterly pulses.** Footfall
   trends, repeat-purchase benchmarks, chain expansion map, WhatsApp commerce benchmarks, scheme
   completion rates. This is the citation magnet for GEO (§15): reports with original numbers are
   what LLMs quote. Distribute ungated web version (crawlable) + gated PDF (leads) + press kit.
2. **The demand engine — topic clusters (§17)** answering every buying question (§4 pains + Appendix
   B FAQs) at the moment it's googled/asked-to-ChatGPT.
3. **The proof engine — case stories + Wapsi Report samples + build-in-public changelog.** Peer
   proof is the only content the patriarch consumes; ship one new story/month minimum, filmed in the
   owner's language.

**Editorial voice:** a 30-year jewellery veteran writing for a peer — vernacular-friendly, number-
first, zero SaaS jargon. Bylines are real humans with jewellery credentials (entity signal + E-E-A-T).
**Production cadence:** P2: 2 articles/wk + 1 story/mo + 1 tool content refresh/mo; P3: 4/wk with
cluster completion targets. Every asset ends in a tool or a WhatsApp CTA — no orphan content.

## 13–15 + 21. SEO / AEO / AIO / GEO / AI-search strategy (Outputs #12–15, #21)

One integrated discipline — "be the extractable, citable, entity-consistent answer" — with four
lenses:

**13. SEO (classic).**
- **Keyword universe (seed tiers):** T1 commercial: jewellery software, jewellery CRM, jewellery ERP
  alternative, WhatsApp for jewellers, gold scheme software, jewellery billing software, jewellery
  inventory software, digital gold platform; T2 pain: how to sell jewellery on WhatsApp, dead stock
  in jewellery business, jewellery customer follow-up, gold scheme rules/compliance, karigar
  management; T3 comparison: [competitor] alternative/pricing/review; T4 local: jewellery software in
  [city] (P3, proof-gated). Hindi/Hinglish variants from P2 (`/hi/`).
- **Architecture:** clusters with pillar pages (§17), breadcrumb + silo internal linking (§18),
  programmatic pages only where genuinely differentiated content exists.
- **Technical:** Next.js SSG/ISR, clean semantic HTML, XML sitemaps per section, canonical
  discipline on locale/variants, sub-2.5s LCP (§35).

**14. AEO (answer engines / featured snippets / People-Also-Ask).**
- Every article opens with a ≤60-word extractable answer block; H2/H3s are literal questions in the
  user's words; FAQPage schema on all FAQ sections; definition boxes for glossary entities; tables
  and step lists (snippet-preferred formats) as house style; FAQ bank (Appendix B) mapped 1:1 to PAA
  targets.

**15. GEO + AIO (generative engines: ChatGPT, Gemini, Claude, Perplexity, Copilot, Google AI Mode).**
- **Be citable:** original statistics (the State report + calculator assumption tables + benchmark
  pages) — generative engines over-cite sources with unique numbers and clear claims.
- **Be crawlable by AI:** robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, Bingbot etc. (a deliberate policy decision — we WANT to be in training/answer
  corpora); publish `llms.txt` + `llms-full.txt` (curated map: what Jwero is, category definition,
  product facts, pricing model, comparison verdicts, canonical FAQ answers).
- **Be quotable:** every important page carries a "key facts" block (entity + claims in plain
  declarative sentences: "Jwero is an AI growth engine for jewellery businesses in India. It
  includes…") — the exact shape LLMs lift.
- **Be consistent:** one canonical company description reused verbatim across site, LinkedIn, GBP,
  directories, PR (entity reconciliation); sameAs graph in Organization schema; get listed where AI
  engines look for SMB software ground truth: G2, Capterra, SoftwareSuggest, Techjockey (India-
  critical), Clutch; seed Wikidata entity when notability allows.
- **Measure (AI-search KPI set):** monthly "share of answer" audit — ask the 25 canonical buying
  questions (Appendix B top) to ChatGPT/Gemini/Perplexity/Copilot, log Jwero mention/rank/accuracy;
  track ai-referral traffic (utm=chatgpt.com/perplexity referrers); correction loop: wrong answers
  about Jwero → fix source content that engines cite.

**21. Future-proofing:** content chunked in self-contained sections (RAG-friendly), stable anchors,
dated facts with `dateModified`, an open product-facts JSON endpoint (machine-readable feature/price
truth) — cheap now, compounding as agents do more of the buying research. When jewellers' own AI
assistants shop for software (this is coming), Jwero should be the best-documented option in the
corpus.

## 16. Entity map (Output #16)

**Core entity:** Jwero (Organization; SoftwareApplication) → positioned in category entity
"Jewellery Growth Engine" (we must DEFINE this term publicly — a `/glossary/jewellery-growth-engine`
page with a crisp definition is how a category name enters LLM vocabulary).
**Entity clusters to co-occur with (semantic neighbourhood):**
- *Industry:* jewellery retail, gold, diamond, silver, lab-grown diamond, gemstone, hallmarking,
  HUID, BIS, making charges, gold rate, Dhanteras, Akshaya Tritiya, wedding season, karigar, jangad.
- *Software:* CRM, ERP, PIM, POS, marketing automation, customer journey, retail analytics,
  omnichannel, clienteling.
- *Channels:* WhatsApp Business API, WhatsApp commerce, Instagram commerce, Meta, video commerce.
- *AI:* AI agent, AI sales agent, conversational AI, approval workflow / human-in-the-loop, customer
  intelligence, inventory intelligence, demand forecasting, dead stock.
- *Money products:* gold savings scheme, 11+1 scheme, digital gold, gold monetization.
**Implementation:** glossary hub `/glossary/[entity]` (~60 entries, P3) with definition-box format,
each cross-linked into its cluster; About/Organization schema sameAs → LinkedIn, GBP, Crunchbase,
G2/Capterra/SoftwareSuggest profiles; consistent NAP; founders as Person entities linked to
Organization. The glossary is simultaneously the AEO definition farm and the internal-linking glue.

## 17. Topic clusters (Output #17)

12 clusters; each = 1 pillar (3–5k words, the definitive guide) + 8–15 spokes + 1 tool/proof asset
tie-in. Build order by (search volume × deal influence):

| # | Cluster (pillar) | Example spokes | Tie-in |
|---|---|---|---|
| 1 | **WhatsApp for jewellers** (P1 pillar) | API vs personal number; template rules; catalog on WhatsApp; ban-proofing; festival broadcast playbook; 15 message templates that sell | WhatsApp estimator; /products/whatsapp |
| 2 | **Gold schemes** (P1) | 11+1 explained; scheme compliance (state rules); paper→digital migration; default reduction; scheme marketing calendar | Scheme calculator; /products/gold-schemes |
| 3 | **Dead stock & inventory** (P1) | ageing analysis how-to; melt vs markdown math; dead-stock prevention buying; slow-mover playbooks | Dead Stock calculator |
| 4 | **Jewellery CRM & customer memory** (P2) | why staff phones own your customers; occasion marketing; win-back campaigns; RFM for jewellers in plain words | Wapsi calculator; /products/crm |
| 5 | **Jewellery marketing & festivals** (P2) | Dhanteras playbook; wedding-season calendar; bridal lead nurture; Instagram for jewellers | festival calendar feature |
| 6 | **AI for jewellery business** (P2) | what AI staff means; human-approval AI; AI myths for family businesses; voice AI calling | /platform/ai-staff |
| 7 | **Jewellery ecommerce & D2C** (P2) | live-rate pricing online; selling high-value on video; NRI selling | /products/online-store |
| 8 | **Digital gold** (P2) | how it works; compliance; digital gold vs schemes | /products/digital-gold |
| 9 | **Jewellery ERP & operations** (P3) | ERP vs growth engine; billing at live rate; repair tracking; multi-store ops | comparisons |
| 10 | **Manufacturing & karigar** (P3) | gold-loss norms; WIP tracking; job-work management; assay/intake | /solutions/manufacturers |
| 11 | **Multi-store & franchise** (P3) | opening branch #2; franchise control systems; chain benchmarks | /solutions/multi-store-chains |
| 12 | **Industry data & trends** (P2, feeds GEO) | State of the Indian Jeweller; organized-retail share; gold-price impact studies | the annual report |

## 18. Internal linking strategy (Output #18)

**Silo + spine model:** (1) cluster silos — spokes link up to pillar and sideways to 2–3 siblings;
pillar links down to all spokes and up to its product hub; (2) the conversion spine — every content
page links forward to exactly one tool and one product/solution page (chosen, not automatic);
(3) proof mesh — case stories are linked FROM product/solution/pain pages contextually ("see how
Mehta Jewellers did this"), never only from /customers; (4) glossary glue — entity terms link to
glossary on first mention per page (auto-linker with per-page cap of 5 to avoid spam); (5) breadcrumbs
everywhere (+ schema); (6) footer carries the top-40 money pages sitewide. Anchor discipline:
descriptive, varied, jeweller-language anchors ("dead stock calculator for jewellers", not "click
here"). Quarterly link audit: orphan pages = 0; every P1/P2 page ≤3 clicks from Home.

## 19. Schema.org implementation (Output #19)

| Template | Types |
|---|---|
| Sitewide | `Organization` (logo, sameAs graph, contactPoint w/ WhatsApp), `WebSite` + `SearchAction` |
| Home/Platform | `SoftwareApplication` (applicationCategory: BusinessApplication, offers, aggregateRating only when review count is real) |
| Product hubs | `Product`/`SoftwareApplication` + `FAQPage` + `VideoObject` (demos) + `BreadcrumbList` |
| Pricing | `Product` + `Offer` (price transparency in schema too) |
| Case stories | `Article` + `Review`/quote markup + `VideoObject` |
| Blog/guides | `Article`/`HowTo` (playbooks) + `FAQPage` + `Person` (author) |
| Tools | `WebApplication` + `FAQPage` (assumption tables as Q&A) |
| Academy | `Course`/`LearningResource` [P3] |
| Events/webinars | `Event` [P3] |
| Glossary | `DefinedTerm` in `DefinedTermSet` |
| Comparisons | `Article` + `FAQPage` (NOT fake Review schema on competitors) |
| Gold-rate page | `Dataset`-style table markup + dateModified discipline |

Validation in CI (schema linter on build); no schema that overstates (ratings, reviews) — rich-result
penalties and trust both.

## 20. Metadata strategy (Output #20)

**Title formula:** `{Primary keyword} — {differentiator} | Jwero` ≤60 chars; product hubs lead with
category keyword (SEO slot) even though on-page hero leads with benefit (the §1 discipline: category
nouns live in title tags, not heroes). **Descriptions:** 150–160 chars, one number + one CTA verb,
unique per page. **OG/Twitter:** per-template branded cards; case stories use the owner's photo +
number (peer-proof even in link previews); WhatsApp-forward preview explicitly tested (og:image
600×314 fallback) because WhatsApp is our share medium. **Canonicals:** self-referencing;
`hreflang` en-IN/hi-IN pairs from P2. **Indexing:** thank-you/ref/utm pages noindexed; staging
blocked; `/whatsapp` redirect page noindexed. **Freshness:** visible "Updated {date}" + matching
`dateModified` schema on all evergreen money pages (AI engines weight freshness signals heavily for
software facts, esp. pricing).

## 22–24. Blog architecture, Resource Centre, Academy (Outputs #22–24)

**22. Blog** (`/blog`, engine in P2): organized BY CLUSTER not by date (`/blog/whatsapp-for-
jewellers/...`); hub page per cluster = the pillar; tag layer for ICP filtering; author pages
(entity); series format "Jeweller Growth Files" (numbered playbooks); every post: answer-first block,
FAQ tail, one tool CTA, one WhatsApp CTA. Editorial board: one real jewellery-veteran reviewer
(named, credentialed) approves every post — E-E-A-T is a moat vs AI-slop competitors.
**23. Resource Centre** (`/resources` = Resources nav dropdown, not a junk-drawer page): Tools ·
Reports · Templates (downloadables: festival message pack, scheme T&C template, dead-stock audit
sheet — all delivered via WhatsApp) · Webinars · Help/Docs. Every downloadable is a working artifact
a jeweller can use WITHOUT buying — generosity as demand gen.
**24. Jwero Academy** (`/academy`, P3): free course tracks — WhatsApp Selling for Jewellery Staff ·
Gold Scheme Design & Compliance · Dead-Stock Clinic · Festival Marketing Playbooks · (later)
certification for staff ("Jwero Certified Counter Pro" — staff résumé value = bottom-up adoption
wedge + the "team resistance" objection killer). Course schema; completion → WhatsApp nudge to demo;
Academy doubles as customer onboarding/success content (§ CS motion), so cost amortizes twice.

---
# PART 4 — CONVERSION, EXPERIENCE & ENGINEERING

*(Sections in this part are numbered to match the brief's output numbers where earlier
cross-references point to them; Appendix A maps all 40 outputs to sections.)*

## 25. Pricing & packaging page (supports Outputs #9, #30)

**Structure of /pricing (T9):**
1. **Three tiers named after the trust ladder — Assist · Approve · Autopilot — + Chain/Enterprise.**
   The tier names teach the product's philosophy while fencing value: Assist (yaaddasht + WhatsApp
   counter + catalog + greetings w/ approvals), Approve (journeys, campaigns, AI drafts + approval
   queues, Wapsi Report, schemes), Autopilot (earned autonomy, voice agent, video counter, advanced
   analytics), Chain (multi-store, RBAC depth, onboarding program, specialist support).
2. **Anchoring:** annual price expressed in trade language — "less than one gram of gold a month" /
   "ek bridal customer wapas = saal bhar ka Jwero." Monthly available at entry (kills lock-in
   objection); annual = discount, framed as choice.
3. **Transparent scope:** what implementation includes, what's extra, no-hidden-cost statement,
   export-anytime, support channels per tier.
4. **Embedded ROI strip:** mini Wapsi calculator inline; "price is a number, ROI is the answer."
5. **Objection FAQ** (cost cluster from §5) + comparison teaser ("cheaper than your current 5 tools
   combined" with the Frankenstack cost worksheet).
6. **CTA logic:** Assist → WhatsApp demo; Approve/Autopilot → book demo; Chain → specialist call.
*Exact price points are a business decision outside this blueprint; the page structure holds for any
numbers. Publish real prices — transparent pricing is a stated trust pillar and an AI-search factor
(engines answer "jwero pricing" from somewhere; make it from us).*

## 31. Design system & UI standards (Output #8 continued from §7.4)

- **Visual identity:** luxury-minimal — ink (near-black) + warm gold accent + generous whitespace;
  jewellery photography only when it carries meaning (real counters, real hands, real shops — no
  stock-model glamour); product UI screenshots get the hero treatment jewellery usually gets.
  Reuse the product's shadcn/Tailwind OKLCH token system (PROJECT_SUMMARY §Styling) so marketing
  site and product feel like one brand; hallmark-rule motif from the board-report brand system as
  the section-divider signature.
- **Type & density:** large readable body (18px+), short lines, Hinglish lines set in the same type
  (no italic exoticization); numbers get display treatment (the proof is the decoration).
- **Dark mode:** yes (next-themes already in stack); default light; respects system.
- **Motion:** micro-animations for state feedback + the two scroll-narrative moments (Frankenstack
  → one thread; data-flow diagram). Everything else static — CWV budget wins over spectacle.
  `prefers-reduced-motion` honored everywhere.
- **Component inventory (marketing design system):** hero pair, CTA bar (desktop/mobile variants),
  proof card, number stat, testimonial/video card, feature grid cell, comparison matrix, FAQ
  accordion (schema-wired), calculator shell, WhatsApp button (one canonical component with ref-code
  prop), announcement bar, ICP router card, share-artifact card ("Show this to the family"),
  gold-rate ticker. ~16 components cover all 10 templates.

## 32. Multi-language strategy (Output #32)

**Phases:** P1 — EN chrome + Hinglish spine (§0.5); P2 — full `/hi/` locale (human-translated,
Hinglish register, NOT shuddh-Hindi machine output; hreflang en-IN↔hi-IN); P3 — Gujarati, Tamil,
Telugu, Marathi (order = customer-density data), starting with the 10 money pages + case stories per
locale, not the whole site; P4 — Bengali, Kannada, Malayalam + Hindi voice search optimization.
**Rules:** (1) translated pages must carry locale-native proof (a Gujarati page with a Gujarati
jeweller's video) or they don't ship; (2) product screenshots stay honest per locale (English UI
today — captions may translate); (3) locale ≠ translation: festival examples, city names, scheme
norms localize too; (4) WhatsApp conversations route to language-matched reps/AI (the inbox supports
it — dogfood). **Honesty note:** marketing-site Hindi ≠ product Hindi; the FAQ answers the
difference explicitly until product i18n ships (positioning P0 dependency).

## 33. Mobile UX (Output #33)

70%+ of this audience's research happens on phones at night; mobile is the primary design target,
desktop is the enterprise/evaluator surface.
- **Sticky bottom action bar** on every page: Call · WhatsApp · Demo (§7.2) — thumb-zone, 48px+
  targets, safe-area aware.
- **One-column everything;** comparison matrices become swipeable cards; calculators are
  slider-first (no keyboards); videos load facades (click-to-play, no autoplay payloads).
- **WhatsApp-native flows:** every CTA opens wa.me with a prefilled, page-contextual first message
  ("Mujhe dead stock calculator ka result mila, demo dikhao") — the prospect never types cold.
- **Share-first artifacts:** every proof card has a native-share button (Web Share API) sized for
  WhatsApp forwards — the Priya→Rajesh bhai transmission path is a designed flow, not luck.
- **Performance:** mobile CWV budget is THE budget (§35); test on mid-range Android (₹15k phone,
  Jio 4G) as the reference device, not iPhones on office Wi-Fi.

## 34. Enterprise UX (Output #34)

The chain/enterprise track (Vikram/Suresh) gets parallel affordances without forking the site:
- `/solutions/multi-store-chains` as the enterprise front door; "Talk to a specialist" replaces
  WhatsApp as primary CTA there (senior buyers expect a person, and the deal needs discovery).
- **Buying-committee kit** (§2): downloadable ROI one-pager, migration plan template, Tally
  coexistence note, security overview PDF — each addressed to its committee member.
- **Security/trust depth:** /trust/security written to survive an IT questionnaire: DB-per-tenant
  isolation, encryption at rest, RBAC/MFA/passkeys, session controls — plus the honest roadmap
  (SSO/SCIM/audit-trail hardening in progress; certifications when earned). Enterprise buyers punish
  discovered gaps 10× harder than admitted ones.
- **Multi-store proof:** branch-rollout case story with per-branch metrics; franchise governance
  narrative (approval hierarchies, per-branch pricing rules — Tier A capabilities).
- **Procurement hygiene [P3]:** vendor-onboarding info page (GST, MSME, bank details process),
  DPA/DPDP statement, uptime/status page when infra work lands (Tier C until then).

## 35. Performance optimization (Output #35)

**Budgets (mobile, mid-range Android, 4G):** LCP ≤2.0s · INP ≤200ms · CLS ≤0.05 · JS ≤150KB gz on
content pages · hero image ≤120KB AVIF. **How:** static generation (SSG/ISR) for everything;
zero client JS on content pages beyond the CTA bar + accordion (islands); calculators lazy-hydrate;
fonts: two families max, subset (Latin + Devanagari), `font-display: swap`; images AVIF/WebP with
blur placeholders, CDN-resized; videos: poster + facade, HLS on click; third-party scripts: analytics
only, loaded post-interaction where possible (heatmaps sampled, not sitewide-always); edge CDN
(the site is India-latency-sensitive: choose PoPs accordingly). CI gate: Lighthouse budget check on
PR; CWV field data (CrUX) reviewed monthly — **"Core Web Vitals ≥95" is a launch gate, not a wish.**

## 36. Accessibility (Output #36)

WCAG 2.2 AA as the floor: semantic landmarks, one H1, logical heading tree (also AEO-relevant);
contrast ≥4.5:1 (the gold accent NEVER carries text alone on white); full keyboard paths incl.
calculators and accordions; visible focus; form labels + error text (not color-only); alt text
policy (product screenshots get functional descriptions); captions on ALL videos (also serves
sound-off social viewing + non-native speakers); `prefers-reduced-motion`; touch targets ≥44px;
screen-reader pass on the 10 money pages per release. Accessibility is also a market fit: many
buyers are 50+ with reading glasses — large type and high contrast sell better here anyway.

## 37. Technical architecture (Output #37)

- **Stack:** Next.js (App Router, same major as product repo) — marketing site as a SEPARATE
  deployment/repo (different release cadence, no product-bundle risk), sharing the design-token
  package. Hosting: Vercel or the existing Azure SWA pipeline — decide on edge-CDN India latency.
- **CMS:** headless (Sanity or Payload) for blog/clusters/case stories/FAQ/glossary; product-hub and
  template copy in code-adjacent MDX (design-locked); ALL FAQ content in the CMS with a schema
  export → the same corpus feeds the on-site AI assistant and llms.txt generation (single source of
  answer truth).
- **CTA infrastructure (the critical custom piece):** one `WhatsAppCTA` component → `/whatsapp`
  redirect endpoint that (a) stamps a ref code (page, variant, locale, campaign), (b) fires the
  analytics event server-side, (c) opens wa.me with the contextual prefilled message; inbound lands
  in Jwero's own omnichannel inbox where ref code → conversation attribution (§38). Same pattern
  for tap-to-call (call tracking numbers per section).
- **Calculators:** small client islands (React), assumptions in versioned JSON (auditable),
  results-to-WhatsApp via the product's own template-send API (dogfood; template pre-approved).
- **Forms:** phone-first, OTP-less, minimal fields (name + phone + city + segment); server-side
  validation; leads via API into Jwero CRM (dogfood) — no third-party form SaaS.
- **Search:** on-site search over CMS corpus (cmdk-style) + the AI assistant; both log queries as
  content-gap telemetry.
- **Ops:** preview deploys per PR; schema + Lighthouse + link-check CI gates; llms.txt/sitemap/OG
  images generated at build; uptime monitor; WAF/rate-limit on form + redirect endpoints.

## 38. Analytics & measurement framework (Output #38)

**North star: Qualified Conversations Started/week** (WhatsApp threads with ≥1 human reply + demos
booked + calls ≥60s, deduped by phone).
- **Stack:** GA4 + server-side event relay (first-party, ad-blocker resilient); Microsoft Clarity
  (heatmaps/session replay, sampled); Meta CAPI for remarketing signal; call tracking; the
  WhatsApp ref-code pipeline (§37) closing the loop INSIDE Jwero's CRM — website → conversation →
  deal → revenue in one system (the dogfood attribution story is itself sales collateral: show
  prospects the website's own Wapsi Report).
- **Event dictionary (core 20):** page_view (w/ template + cluster + ICP dims), scroll 50/90,
  cta_whatsapp_click (ref), cta_demo_click, cta_call_click, calc_start/complete/whatsapp_delivery,
  quiz_complete(score), video_start/50/complete, faq_open(question), comparison_row_expand,
  share_artifact, report_download, assistant_query(text), form_start/submit, login_click (customer
  traffic filter), locale_switch, search_query.
- **Funnels:** per template-type (pain page → tool → WhatsApp; product hub → demo; comparison →
  migration → demo); drop-off review weekly.
- **Dashboards:** (1) exec: conversations/wk by source/ICP/page-type, cost per conversation,
  conversation→demo→pilot rates; (2) content: cluster-level organic growth, answer-share audit
  (§15), top FAQ opens; (3) CRO: experiment log + CWV field data.
- **Hygiene:** consent-mode compliant (DPDP), IP-anonymized, no PII in URLs, customer traffic
  segmented out, bot filtering on the wa.me redirect.

## 39. Conversion strategy & CRO program (Outputs #9, #39)

**Contextual CTA matrix (every page has all three, ordered by context):**
| Page context | Primary | Secondary | Micro |
|---|---|---|---|
| Home/Platform | WhatsApp demo | Book demo | gold-rate ticker → tools |
| Product hubs | WhatsApp demo (product-contextual message) | Book demo | related tool |
| Pain pages | run the tool | WhatsApp | pillar guide |
| Tools | WhatsApp results delivery | demo w/ your numbers prefilled | share result card |
| Comparisons/Migration | migration consult (demo variant) | WhatsApp | switch checklist download |
| Case stories | "jeweller like this one?" router | WhatsApp | share to family |
| Pricing | tier-mapped (§25.6) | ROI strip | objection FAQ |
| Enterprise | specialist call | committee kit download | security PDF |

**Standing CRO mechanics:** sticky mobile bar (§33); exit-intent = calculator offer (not a discount
— we don't discount, we prove); response-time promise displayed at every CTA ("We reply on WhatsApp
within 5 minutes, 10am–8pm — test us") with the SLA actually staffed (AI first-response + human
follow); social-proof adjacency rule (no CTA without a proof element in the same viewport); form
fallback under every WhatsApp CTA for the WhatsApp-averse minority; demo page = calendar embed +
"can't find a slot? WhatsApp us"; thank-you states always advance (booked demo → watch this 3-min
story so the demo starts warmer).
**Experiment program (post-launch, sequenced by traffic × impact):** (1) hero line EN vs Hinglish-
led; (2) WhatsApp-primary vs demo-primary by ICP source; (3) calculator-first vs story-first pain
pages; (4) prefilled message variants; (5) pricing anchor framing (gram-of-gold vs ₹/day vs plain);
(6) sticky-bar label tests. One test at a time per surface, minimum detectable effect calculated
before launch (traffic will be modest early — most "CRO" in year 1 is qualitative: session replays,
WhatsApp transcript mining, sales-call objection logging feeding §5).

---

# PART 5 — ROADMAP & GOVERNANCE

## 40. Prioritized implementation roadmap (Output #40)

**Phase 1 — "The argument + the machine" (weeks 0–6) · ~35 URLs**
Scope: Home, Platform, AI-Staff, Customer-Memory, 6 P1 product hubs, 2 ICP pages, 3 pain pages,
Pricing, 3 case stories, Migration hub + keep-your-tally, 2 calculators, /whatsapp CTA infra +
attribution pipeline, analytics stack, security/onboarding trust pages, 10 seed articles, llms.txt,
schema/CI gates, EN+Hinglish.
Gate to ship: CWV ≥95 mobile; every claim tier-checked against the audit; WhatsApp SLA staffed;
3 case stories with verified numbers filmed.
KPIs (exit): 25+ qualified conversations/wk · calculator completion ≥35% of tool sessions ·
WhatsApp CTA CTR ≥6% mobile · demo show-rate ≥60%.

**Phase 2 — "Coverage + credibility" (weeks 6–18)**
Scope: remaining product hubs + ICP/pain pages, comparison set (post-verification pass), per-tool
migration guides, blog engine + clusters 1–4 pillars, State of the Indian Jeweller v1 launch,
`/hi/` locale, 10 case stories, Growth Score quiz + 2 more tools, roadmap/changelog pages, partner
page, help centre v1 + AI assistant, review-site profiles (G2/Capterra/SoftwareSuggest/Techjockey).
KPIs: organic non-brand clicks +150% vs Phase-1 exit · 75+ conversations/wk · answer-share: Jwero
mentioned in ≥8/25 canonical AI-engine questions · 2 clusters ranking top-5 for pillar terms.

**Phase 3 — "Authority + scale" (months 4–8)**
Scope: clusters 5–10, glossary/entity hub, academy v1, city×segment pages (proof-gated), Gujarati +
Tamil locales, events/webinars engine, Jwero Circle community surface, programmatic comparison
long-tail, personalization v1 (ICP-aware CTAs by referrer/history).
KPIs: 150+ conversations/wk · answer-share ≥15/25 · academy enrolments · 25% of demos citing
peer/content touchpoint.

**Phase 4 — "Category infrastructure" (months 8–12)**
Scope: remaining locales, annual report v2 as industry event, full personalization, AI assistant as
primary nav aid, self-serve trial flow (WHEN product onboarding supports it — gated), partner portal,
`/products/pos` activation if shipped, international exploration (GCC NRI angle).
KPIs: category-term ownership ("jewellery growth engine" = Jwero across engines) · 250+
conversations/wk · website-sourced pipeline ≥50% of new revenue.

**Standing governance:** claim-tier review on every PR (content checklist); quarterly audit-vs-site
reconciliation (as product ships Tier C items, pages activate); monthly answer-share audit; weekly
objection-log → content backlog; the verification pass (positioning doc Appendix A) MUST run before
comparison pages and any market-statistic goes live.

---

# APPENDIX A — THE 40 OUTPUTS → WHERE THEY LIVE

| # | Output | Section | # | Output | Section |
|---|---|---|---|---|---|
| 1 | Website architecture | §7 | 21 | AI-search strategy | §13–15, 21 |
| 2 | Navigation hierarchy | §7.2 | 22 | Blog architecture | §22 |
| 3 | Journey maps | §3 | 23 | Resource centre | §23 |
| 4 | Personas | §2 | 24 | Academy | §24 |
| 5 | ICP landing pages | §9 | 25 | Comparison pages | §10.1 |
| 6 | Sitemap | §8 | 26 | Migration centre | §10.2 |
| 7 | Wireframes | §7.3 | 27 | ROI calculators | §11 |
| 8 | UI/UX specs | §7.4, 31 | 28 | Interactive tools | §11 |
| 9 | Conversion strategy | §0.3, 39 | 29 | Trust framework | §6.2 |
| 10 | Messaging hierarchy | §1 | 30 | Objection framework | §5 |
| 11 | Content strategy | §12 | 31 | Buying-journey framework | §6.1 |
| 12 | SEO | §13 | 32 | Multi-language | §0.5, 32 |
| 13 | AEO | §14 | 33 | Mobile UX | §33 |
| 14 | AIO | §15 | 34 | Enterprise UX | §34 |
| 15 | GEO | §15 | 35 | Performance | §35 |
| 16 | Entity map | §16 | 36 | Accessibility | §36 |
| 17 | Topic clusters | §17 | 37 | Technical architecture | §37 |
| 18 | Internal linking | §18 | 38 | Analytics | §38 |
| 19 | Schema.org | §19 | 39 | CRO | §39 |
| 20 | Metadata | §20 | 40 | Roadmap | §40 |

Cross-cutting: pain discovery §4 · customer-journey model §3 · honesty/claims §0.2 · FAQ bank Appx B.

# APPENDIX B — FAQ BANK (taxonomy + seed set; target 300+ by Phase 3)

Production rule: every FAQ exists once in the CMS, is schema-marked where surfaced, answers in ≤60
words first, then links deeper. Sources: §4 pains, §5 objections, sales-call logs (weekly), on-site
assistant queries, PAA scraping per cluster.

**Taxonomy (14 categories × seed questions):**
1. **What is Jwero** — What is Jwero? What is a jewellery growth engine? Is Jwero a CRM or an ERP?
   Who owns my data? Which businesses is Jwero for?
2. **WhatsApp** — Can customers buy on WhatsApp? Will my number get banned? Official API vs normal
   WhatsApp? Can I keep my existing number? How do broadcasts work without spamming? Can AI reply
   automatically? What languages can the AI reply in?
3. **AI & control** — Will AI message my customers without asking? Can I approve every message?
   What is the daily cap? Can I switch AI off? Will AI replace my staff? What happens when AI
   doesn't know an answer?
4. **Migration & setup** — How long to go live? Do I have to leave Ornate/Tally? Can you import
   from Excel? What happens to my data if I leave? Can we start with one branch? Do you work during
   wedding season?
5. **ERP/Tally coexistence** — Does Jwero replace Tally? How does the Tally bridge work? What does
   my accountant need to do?
6. **Gold schemes** — Can I run my 11+1 scheme digitally? How do customers pay instalments? What
   about scheme compliance in my state? Can I migrate paper schemes mid-cycle?
7. **Digital gold** — How does digital gold work? Is it compliant? How do rates update?
8. **Catalog & inventory** — Can it handle purity/HUID/certificates? RFID? How do I share catalogs
   without losing price control? Live gold-rate pricing online?
9. **Billing & finance** — GST invoices at live rate? Payment reminders? (POS: honest "roadmap"
   answer until shipped.)
10. **Multi-store & franchise** — Can branches have different prices? Can I control what each
    branch sees? Owner reports across branches?
11. **Manufacturing/wholesale** — Karigar job tracking? Gold-loss reports? Jangad/memo? B2B ordering?
12. **Pricing & contract** — What does it cost? Lock-in? What's included in implementation? Hidden
    costs? Monthly option?
13. **Security & trust** — Where is my data stored? Who can see it? Staff access controls? What if
    internet goes down? (honest answer re: offline until PWA ships.)
14. **Support & training** — Training included? Support in Hindi/Gujarati? Response times? Who
    helps during festivals?

# APPENDIX C — PRE-LAUNCH VERIFICATION CHECKLIST

1. Run the staged web-research verification workflow (positioning doc Appendix A) — pins market
   numbers, competitor pricing/language (esp. SIONIQ/Zithara), jeweller verbatims. **Blocks:**
   comparison pages, State-report stats, any market claim.
2. Claim-tier audit of all Phase-1 copy against JEWELLERY_OS_TRANSFORMATION_AUDIT.md (Tier C scan:
   POS/offline/girvi/payroll/Hindi-UI/SSO/API/e-invoice/ML terms).
3. Verify Meta Business Partner status before any badge ships.
4. Lighthouse ≥95 mobile on all P1 templates; schema linter clean; link-check clean.
5. WhatsApp pipeline end-to-end test: every P1 page's ref code → inbox attribution → CRM lead.
6. Three case stories: numbers re-verified with the owner on record, usage rights signed.
7. Legal: pricing claims, comparison factual accuracy + dates, DPDP privacy statement, testimonial
   consents.

---

*Blueprint complete. Built on verified platform capability (audit of 2026-07-19), the v2 board-
reconciled positioning ("Jewellery Growth Engine", three nouns, hisaab enemy, Assist–Approve–
Autopilot), and the conversion thesis that the website's job is to start governed WhatsApp
conversations — because for this product, the conversation IS the demo.*
