# PART 3 — ARCHITECTURE: SITEMAP, NAVIGATION & LINKING

Scope: founder outputs #1 (architecture), #2 (navigation), #6 (sitemap), #5 (ICP landing pages), #18 (internal linking). Template IDs T1–T12 referenced here are specified in full in Part 4 — Templates & Wireframes; phases 1–4 align with Part 10 — Roadmap. All URLs extensionless, lowercase-hyphenated. Honesty tiers per CONSTRAINTS D3 are marked inline: **[TIER-B]** = "rolling out" framing, **[TIER-C]** = page exists but carries transparent "on the public roadmap" treatment, never claims shipped.

## 3.1 Website architecture (Output #1): eight layers, one operating system

The IA must *perform* the OS claim (D1), not assert it. An operating system has a kernel, apps that share state, and a single user directory. The site mirrors that: the **Platform layer is the kernel story** (one customer record, one catalogue, one inventory truth), the **Products layer is the app grid**, and every other layer routes traffic into that structure. Three front doors (pain, product-word, brand — inherited from v1 §7.1) all land on the same conversion spine: *proof → tool → WhatsApp conversation* (D4).

| # | Layer | Job | Entry intent | Key URLs | Templates |
|---|---|---|---|---|---|
| 1 | **Marketing core** | Category argument: "the AI Operating System for Jewellery Business" | Brand / referral ("Jwero kya hai?") | `/`, `/platform`, `/platform/*` | T1, T2 |
| 2 | **Products layer** | The app grid — every module answers *what it replaces, what it works with, what it costs* | Category keywords ("jewellery CRM") | `/products/*` (4 suites: Sell · Know · Run · Grow) | T3 |
| 3 | **Industries layer** | Three business-model hubs that translate the OS into retail / wholesale / manufacturing language | Head terms ("jewellery software for wholesalers") | `/industries/*` | T11 |
| 4 | **Solutions layer** | ~30 ICP segment pages + pain pages; the "this platform understands my business" moment | Pain + segment search; ICP router from home | `/solutions/*`, `/solutions/pain/*` | T5, T4 |
| 5 | **Resources / learn layer** | Topical authority (12 clusters), academy, reports, help/docs, glossary | Informational + AEO/LLM queries | `/blog/*`, `/academy`, `/reports/*`, `/help`, `/docs`, `/glossary/*` | T10, T11 |
| 6 | **Tools layer** | Value-before-identity calculators; results delivered on WhatsApp | "How much is dead stock costing me" | `/tools/*` | T8 |
| 7 | **Trust layer** | Proof, security, comparisons, migration, roadmap honesty | Evaluation-stage anxiety | `/customers/*`, `/compare/*`, `/migration/*`, `/trust/*`, `/roadmap`, `/changelog` | T6, T7, T11 |
| 8 | **Convert layer** | Frictionless endpoints for all four CTA tracks | Decision | `/book-demo`, `/free-trial`, `/enterprise`, `/whatsapp`, `/contact`, `/pricing` | T9, T12 |

**Traffic physics between layers:** Solutions and Resources are the acquisition lungs (SEO/AEO volume); Products and Industries are the consideration midfield; Trust is the anxiety sink; Convert is the mouth. Every layer links *forward* along the spine and *up* to its hub — never dead-ends (§3.5). The enemy framed sitewide is **disconnected software that forgets customers** (D2) — never chains, never any size of business.

> **R:** layered IA makes the OS claim structural (kernel + apps + one record) · ICP: all · pain: fragmented-tools chaos · outcome: visitors self-route in ≤2 clicks · objection: "just another tool" · search: three front doors match all three query types · conversion: every layer terminates on the WhatsApp spine · KPI: % sessions reaching a Convert-layer URL.

## 3.2 Navigation hierarchy (Output #2)

### 3.2.1 Header (desktop)

```
[Jwero mark]  Platform ▾  Products ▾  Solutions ▾  Pricing  Customers  Resources ▾     [Login] [💬 WhatsApp] [Book a demo]
```

Six top-level items, three dropdowns — nothing a family jeweller has to decode (D6). CTA pair is fixed sitewide (D4): **WhatsApp** = amber accent button with per-page ref code (`wa.me/<digits>?text=…[ref:{path}/header]`); **Book a demo** = primary #0013b7 button. Free trial is NOT in the header until self-serve mechanics are `[VERIFY-WITH-PRODUCT]` — it lives on /pricing and /free-trial.

**Platform ▾** (single column + visual): "How Jwero works as one system"
| Label | Description line | URL |
|---|---|---|
| Platform tour | One record, one catalogue, one inventory truth | `/platform` |
| Customer Memory | 90+ fields on every customer, owned by the business | `/platform/customer-memory` |
| AI Workforce & Governance | 240+ governed actions, approvals, kill switches | `/platform/ai-workforce` |
| Integrations | Tally, Zoho Books, Shopify, Woo, Unicommerce, Meta | `/platform/integrations` |
| Security & Data Ownership | Your data, exportable anytime | `/trust/security` |
| Onboarding & Support | Live in days, trained in your language | `/platform/onboarding` |
| Roadmap & Changelog | What's shipped, what's next — in public | `/roadmap` |

**Products ▾** (mega-menu, 4 columns = the OS app grid; suite names in plain verbs):
- **Sell** — WhatsApp Commerce · Instagram & Facebook · Online Store · AI Sales Agents & Chatbots · Appointments & Video Counter
- **Know** — Jewellery CRM · Marketing Automation & Journeys · Campaigns & Broadcasts · Loyalty · Analytics & Intelligence
- **Run** — Catalog · Inventory · Orders · **Billing & Finance** (D3: never "POS" in nav until shipped) · Purchases & Vendors · Manufacturing · Repairs · Staff & Tasks
- **Grow** — Gold Schemes · Digital Gold · Multi-store & Franchise · Mobile Apps
- Menu footer strip: "Every module reads the same customer record. That's the OS." → `/platform`

**Solutions ▾** (2 columns):
- **By business** — Retail (hub) · Single Store · Multi-store & Chains · Luxury & Boutique · Bridal · Diamond · Gold · Lab-grown · Wholesale (hub) · Manufacturers (hub) · Brands & D2C · Franchise Networks · *"All 30 segments →"* (`/solutions`)
- **By pain** — Dead Stock · Lead Leakage · Customer Follow-up · Scheme Leakage · Staff Data Walkouts · Festival Sales · *"All pains →"* (`/solutions/pain`)

**Resources ▾** — Blog · Jwero Academy · Tools & Calculators · State of the Indian Jeweller · Compare Alternatives · Migration Centre · Help Centre & Docs · Glossary · Events & Webinars.

> **R:** 6-item header with verbs-not-jargon suites keeps a first-time founder oriented in 5 seconds · ICP: all · pain: SaaS-nav overwhelm · outcome: correct self-routing · objection: "complexity" · search: dropdown labels carry category keywords for sitewide internal anchors · conversion: dual CTA always visible · KPI: nav-CTR to Products/Solutions, header-WhatsApp clicks by ref code.

### 3.2.2 Mobile navigation
- Hamburger → full-screen sheet, same tree flattened to 2 levels (accordion groups; suite names as section headers). Search field at top.
- **Sticky bottom bar on every page: [📞 Call] [💬 WhatsApp] [Book demo]** — thumb-zone, the single highest-leverage mobile CRO element. WhatsApp button carries `[ref:{path}/mobilebar]`.
- Dropdown descriptions collapse on mobile; only labels show.

### 3.2.3 Footer (mega, SEO-load-bearing, 6 columns)
1. **Platform** — tour, customer memory, AI workforce, integrations, onboarding, roadmap, changelog.
2. **Products** — all shipped product pages (Tier-C pages listed with "(roadmap)" suffix — transparency as trust asset).
3. **Solutions** — 3 industry hubs + top-10 segment pages + top-8 pain pages.
4. **Resources** — blog, academy, tools index + 3 flagship calculators, report, glossary, help, docs.
5. **Compare & Switch** — compare hub, top-6 vs pages, migration centre, keep-your-tally.
6. **Company** — about, founders, careers, security, partners, contact, book demo, pricing, legal.
Signature line under logo: *"One system that remembers every customer. The AI Operating System for Jewellery Business."* + Meta/tech partner badges + language switcher (`/hi` from P2, see Part 8 — Search).

### 3.2.4 Breadcrumbs & contextual sub-navs
- Breadcrumbs on every page below the header except `/`: `Home › Products › WhatsApp Commerce`, with `BreadcrumbList` schema (coordinates with Part 8 — Search). Breadcrumb trail mirrors URL path exactly — no invented levels.
- **Hub sub-navs** (sticky in-page tab row, T11 behaviour): `/solutions` gets filter chips (business type · material · pain); `/industries/*` hubs get anchored section nav (Sell / Know / Run / Grow for that industry); `/products/*` pages get an in-page anchor nav (How it works · Features · Proof · FAQ · Pricing); `/migration` gets a "switching from…" selector; `/compare` gets a competitor-type filter.
- Long-tail ICP segments that share a page (see 3.3) get **anchored sections + their own breadcrumb-visible query-free anchors** (`/solutions/b2b-wholesale#pearl`), upgradeable to standalone URLs when volume justifies (no thin doorway pages — v1 §9 rule preserved).

> **R:** breadcrumbs + hub sub-navs give every deep page context and an up-path · ICP: all · pain: lost-in-site · outcome: lower pogo-sticking · objection: complexity · search: BreadcrumbList rich results + crawl paths · conversion: sub-nav keeps CTA visible during comparison scanning · KPI: breadcrumb CTR, scroll-depth on hubs.

### 3.2.5 CTA ref-code taxonomy (feeds the north-star metric)
Every WhatsApp deep link carries `[ref:{path}/{slot}]` where slot ∈ `header · hero · mobilebar · midpage · tool-result · faq · footer · qr-{location}` (offline QR codes route through `/whatsapp`). This makes **Qualified Conversations Started per week** attributable to page × slot with zero analytics tooling in the message path — the inbox itself is the attribution system (dogfood proof). Demo bookings carry the same ref in a hidden field.

> **R:** ref-code taxonomy is what turns "simple CTAs" into a measurable system · ICP: all · pain: unattributable marketing spend (the jeweller's own pain, mirrored) · outcome: per-page CRO decisions from week 1 · objection: ROI uncertainty (we practise what we sell) · search: n/a · conversion: north-star instrumentation · KPI: conversations/week by ref, ref-coverage = 100% of CTAs.

## 3.3 Complete sitemap (Output #6)

Phases: **P1** launch · **P2** 45–120d · **P3** 4–8mo · **P4** 8–12mo. Format: `URL — purpose · primary keyword · template · phase`. Templates (names coordinated with Part 4): T1 Home · T2 Platform Tour · T3 Product Page · T4 Pain Page · T5 ICP Solution Page · T6 Comparison Page · T7 Case Story · T8 Tool/Calculator · T9 Pricing · T10 Article/Content · T11 Hub/Index · T12 Convert Page.

```
/                                          Category argument in 12 scrolls · jewellery software / jwero · T1 · P1

── MARKETING CORE ──────────────────────────────────────────────
/platform                                  The OS tour: one record→one catalogue→one truth · jewellery business platform · T2 · P1
/platform/customer-memory                  Customer 360, 90+ fields (Tier A) · jewellery CRM customer 360 · T3 · P1
/platform/ai-workforce                     240+ governed AI actions, approvals, caps, 5 kill-switch scopes · AI for jewellery business · T3 · P1
/platform/integrations                     Tally/Zoho Books bridges, Shopify/Woo/Unicommerce, Meta (Tier A) · jewellery software integrations · T11 · P1
/platform/integrations/tally               "Keep your Tally" — the accountant page · jwero tally integration · T3 · P1
/platform/integrations/shopify             Shopify connector (Tier A) · shopify jewellery integration · T3 · P2
/platform/integrations/woocommerce         WooCommerce connector (Tier A) · woocommerce jewellery · T3 · P2
/platform/integrations/unicommerce         Unicommerce connector (Tier A) · unicommerce integration · T3 · P2
/platform/integrations/zoho-books          Zoho Books bridge (Tier A) · zoho books jewellery · T3 · P2
/platform/integrations/meta                WhatsApp Business API + IG + Messenger (Tier A) · meta business jewellery · T3 · P2
/platform/integrations/razorpay            Payments connector [VERIFY before publish] · razorpay integration · T3 · P2
/platform/onboarding                       Implementation promise, training, data import · jewellery software implementation · T3 · P1
/roadmap                                   Public roadmap incl. honest not-yet list (Tier-C items live here) · jwero roadmap · T11 · P1
/changelog                                 Release notes — ship-velocity proof · jwero updates · T11 · P2

── PRODUCTS LAYER (the app grid) ───────────────────────────────
/products                                  App-grid index by suite; the visual OS map · jewellery software modules · T11 · P1
  Sell suite
/products/whatsapp                         WhatsApp Business API commerce (Tier A) · whatsapp for jewellers · T3 · P1
/products/instagram-facebook               IG + FB Messenger DM commerce (Tier A) · instagram for jewellery business · T3 · P1
/products/online-store                     D2C storefront, live-rate pricing, shareable catalogs · jewellery ecommerce platform · T3 · P2
/products/ai-sales-agents                  AI agents, chatbots, 14-language voice (Tier A) · AI sales agent jewellery · T3 · P1
/products/appointments                     Appointment booking + video counter · jewellery appointment booking · T3 · P2
  Know suite
/products/crm                              Jewellery CRM & sales pipeline · jewellery CRM software · T3 · P1
/products/marketing-automation             Journeys, occasion autopilot, festival calendar · jewellery marketing automation · T3 · P2
/products/campaigns                        Broadcasts & campaign management, quiet hours, caps (Tier A) · whatsapp campaigns jewellery · T3 · P2
/products/loyalty                          Loyalty programmes (Tier A) · jewellery loyalty program · T3 · P2
/products/analytics                        Reports + intelligence suite hub (predictive ML forecasting = [TIER-C], flagged) · jewellery analytics · T3 · P2
/products/analytics/[intelligence]         Customer / store / demand / inventory / pipeline / financial intelligence spokes · {x} intelligence · T3 · P3
  Run suite
/products/catalog                          Jewellery PIM: purity, certs, HUID, variants · jewellery catalog management · T3 · P1
/products/inventory                        Valuation, ageing, dead-stock visibility · jewellery inventory software · T3 · P1
/products/orders                           Order management & fulfilment · jewellery order management · T3 · P2
/products/billing-finance                  [TIER-C page, ships P2 with roadmap banner] GST billing @ live rate, AR · jewellery billing software · T3 · P2
/products/pos                              [TIER-C GATED — publishes only when POS ships; until then 302 → /products/billing-finance] · jewellery POS software · T3 · P3-gated
/products/erp                              "ERP, reconsidered" — Run-suite overview + honest tier notes; captures ERP head term · jewellery ERP software · T3 · P2
/products/purchases-vendors                Purchase & vendor management · jewellery purchase management · T3 · P2
/products/manufacturing                    WIP, karigar jobs, gold-loss ledger (wage/payroll = [TIER-C], flagged) · jewellery manufacturing software · T3 · P2
/products/repairs                          Repair & service tracking · jewellery repair management · T3 · P2
/products/staff                            Staff, roles, tasks, activity visibility · jewellery staff management · T3 · P3
  Grow suite
/products/gold-schemes                     Digital gold-scheme lifecycle (Tier A) · gold scheme software · T3 · P1
/products/digital-gold                     Digital gold (Tier A) · digital gold platform · T3 · P1
/products/multi-store                      Multi-store & franchise structure (Tier A) · multi store jewellery software · T3 · P1
/products/mobile-apps                      Customer app + team app · jewellery store app · T3 · P3

── INDUSTRIES LAYER ────────────────────────────────────────────
/industries/retail                         Retail hub: routes 12 retail segments; Sell/Know/Run/Grow framed for counters · jewellery retail software · T11 · P1
/industries/wholesale                      Wholesale hub: B2B catalog distribution, order capture, ledgers · jewellery wholesale software · T11 · P2
/industries/manufacturing                  Manufacturing hub: jangad/WIP/karigar language, zero retail imagery · jewellery manufacturing ERP · T11 · P2

── SOLUTIONS LAYER: ICP SEGMENTS (~30, grouped; see 3.4) ───────
/solutions                                 Master hub with filter chips (type · material · pain) · jewellery software solutions · T11 · P1
  Retail (12 segments → 10 URLs)
/solutions/single-store                    Single-store retailers · software for small jewellery shop · T5 · P1
/solutions/multi-store-chains              Multi-store + chain stores (2 segments) · jewellery chain store software · T5 · P1
/solutions/luxury-boutique                 Luxury + boutique retail (2 segments; platinum-heavy assortments addressed) · luxury jewellery retail software · T5 · P2
/solutions/bridal                          Bridal & wedding retail · bridal jewellery business software · T5 · P2
/solutions/diamond-retail                  Diamond retailers · diamond jewellery software · T5 · P2
/solutions/gold-retail                     Gold retailers · gold jewellery shop software · T5 · P2
/solutions/silver-retail                   Silver retailers · silver jewellery software · T5 · P3
/solutions/platinum-retail                 Platinum retailers (thin volume: launches as section on luxury-boutique, standalone at P4) · platinum jewellery retail · T5 · P4
/solutions/lab-grown-diamond               Lab-grown diamond retail (high-growth segment) · lab grown diamond business software · T5 · P2
/solutions/gemstone-retail                 Gemstone retailers · gemstone jewellery software · T5 · P3
  Wholesale (6 segments → 4 URLs)
/solutions/diamond-wholesale               Diamond wholesalers · diamond wholesale software · T5 · P2
/solutions/gold-wholesale                  Gold wholesalers · gold wholesale management · T5 · P3
/solutions/b2b-jewellery                   B2B jewellery trade (hub-style; hosts silver/gemstone/pearl wholesale as anchored sections until volume earns standalone URLs at P4) · b2b jewellery platform · T5 · P2
/solutions/pearl-gemstone-wholesale        Pearl + gemstone/silver wholesale (2–3 segments, split from b2b page) · pearl wholesale software · T5 · P4
  Manufacturers (6 segments → 5 URLs)
/solutions/manufacturers                   Manufacturer master page (gold + diamond mfg lead copy) · jewellery manufacturer software · T5 · P1
/solutions/casting-units                   Casting units · jewellery casting management · T5 · P3
/solutions/cad-services                    CAD studios & services · jewellery CAD workflow · T5 · P4
/solutions/oem-manufacturers               OEM / job-work manufacturers · OEM jewellery manufacturing · T5 · P3
/solutions/export-houses                   Export houses (compliance, multi-currency [VERIFY]) · jewellery export house software · T5 · P3
  Others (7 segments → 5 URLs)
/solutions/bullion-gold-traders            Bullion dealers + gold traders (2 segments) · bullion dealer software · T5 · P3
/solutions/jewellery-brands                Established brands · jewellery brand management platform · T5 · P2
/solutions/d2c-brands                      Ecommerce-first / D2C brands ("Keep Shopify, add the channels it can't do") · d2c jewellery brand tools · T5 · P2
/solutions/startups                        First-time founders & startups · start a jewellery business · T5 · P3
/solutions/franchise-networks              Franchise networks (franchisor + franchisee views) · jewellery franchise software · T5 · P2

── SOLUTIONS LAYER: PAIN PAGES ─────────────────────────────────
/solutions/pain                            Pain index — "what's eating your business?" router · jewellery business problems · T11 · P1
/solutions/pain/dead-stock                 Dead/old stock bleed + inline mini-calc · dead stock jewellery · T4 · P1
/solutions/pain/lead-leakage               Unanswered enquiries = lost sales · jewellery lead management · T4 · P1
/solutions/pain/customer-follow-up         Follow-up that never happens · jewellery customer follow up · T4 · P1
/solutions/pain/staff-attrition-data       Salesman leaves, customers leave with him · staff attrition customer data · T4 · P2
/solutions/pain/scheme-leakage             Paper scheme registers & defaults · gold scheme management problems · T4 · P2
/solutions/pain/festival-sales             Festival season chaos · jewellery festival marketing · T4 · P2
/solutions/pain/discount-abuse             Uncontrolled discounting · jewellery discount control · T4 · P3
/solutions/pain/manual-work                Excel + WhatsApp + registers = the Frankenstack · jewellery shop automation · T4 · P2
/solutions/pain/owner-visibility           "I don't know what happened in my store today" · jewellery store reporting · T4 · P3
/solutions/pain/repair-tracking            Lost repair jobs · jewellery repair tracking · T4 · P3
/solutions/pain/gold-loss                  Manufacturing gold loss · gold loss control · T4 · P3
/solutions/pain/order-tracking             Custom-order chaos · jewellery order tracking · T4 · P3

── TRUST LAYER ─────────────────────────────────────────────────
/customers                                 Story index + numbers wall (real, dated proof only — D3) · jwero reviews customers · T11 · P1
/customers/[story]                         Case stories (P1: 3 launch stories → ongoing) · {customer} case study · T7 · P1+
/compare                                   Comparison hub, competitor-type filter · jwero vs alternatives · T11 · P2
/compare/whatsapp-tools-vs-jewellery-os    Category-level: point tools vs one system (no single target) · whatsapp tool vs crm jewellery · T6 · P1
/compare/jwero-vs-ornate-nx                Jewellery-ERP incumbent; concede billing depth + offline (D3) · jwero vs ornate nx · T6 · P2
/compare/jwero-vs-synergics                Jewellery-ERP incumbent; same concession pattern · jwero vs synergics · T6 · P2
/compare/jwero-vs-jewelacc                 Accounting-first jewellery software · jwero vs jewelacc · T6 · P3
/compare/jwero-vs-marg                     Generic billing ERP; concede billing/offline · marg jewellery software alternative · T6 · P3
/compare/jwero-vs-sioniq                   Direct "OS" claimant — fresh research required pre-publish · jwero vs sioniq · T6 · P2
/compare/jwero-vs-zithara                  Retail CRM/engagement rival · jwero vs zithara · T6 · P3
/compare/jwero-vs-wati                     WhatsApp point tool; concede price + simplicity · wati alternative for jewellers · T6 · P2
/compare/jwero-vs-interakt                 WhatsApp point tool · interakt alternative · T6 · P3
/compare/jwero-vs-doubletick               WhatsApp point tool · doubletick alternative · T6 · P3
/compare/jwero-vs-quicksell                Catalog-sharing tool; concede lightweight sharing · quicksell alternative jewellery · T6 · P3
/compare/jwero-vs-shopify                  Web-ecommerce platform; concede ecosystem; pitch coexistence · shopify for jewellery vs jwero · T6 · P2
/compare/jwero-vs-zoho-crm                 Generic CRM; jewellery-native argument · zoho crm for jewellery alternative · T6 · P3
        (ALL comparison market statistics BLOCKED pending v1 Appendix-C verification workflow — templates ship with [VERIFY] data slots)
/migration                                 Migration Centre: "We move you. You sell." · jewellery software migration · T11 · P1
/migration/from-excel-whatsapp             The biggest incumbent: registers + Excel + personal WhatsApp · move jewellery data from excel · T10 · P2
/migration/from-ornate-nx                  Per-incumbent guide · switch from ornate nx · T10 · P2
/migration/from-synergics                  Per-incumbent guide · switch from synergics · T10 · P2
/migration/from-marg                       Per-incumbent guide · switch from marg erp · T10 · P3
/migration/from-wati                       WhatsApp-tool switchers keep their number · switch from wati · T10 · P3
/migration/keep-your-tally                 The accountant page: alias/companion of /platform/integrations/tally · jwero tally · T10 · P1
/trust/security                            Security, data ownership, export-anytime (SSO/SCIM = [TIER-C], listed on roadmap) · jewellery software data security · T3 · P1
/trust/support                             Support promise & SLAs · jwero support · T3 · P2

── TOOLS LAYER ─────────────────────────────────────────────────
/tools                                     Tools index · jewellery business calculators · T11 · P1
/tools/dead-stock-calculator               Monthly bleed math; result on WhatsApp · dead stock calculator · T8 · P1
/tools/gold-scheme-calculator              Scheme corpus + locked future sales · gold scheme calculator · T8 · P1
/tools/whatsapp-revenue-estimator          Response-time conversion curve × AOV · whatsapp sales calculator · T8 · P2
/tools/customer-winback-calculator         Dormant base × win-back % × AOV · customer retention calculator jewellery · T8 · P2
/tools/growth-score                        12-question graded quiz → report on WhatsApp · jewellery business health check · T8 · P2
/tools/gold-rate                           Live rate + history + dead-stock hook (daily-return SEO magnet) · gold rate today · T8 · P2

── RESOURCES / LEARN LAYER ─────────────────────────────────────
/blog                                      Cluster-organised hub (not date-organised) · jewellery business blog · T11 · P2 (10 seed posts P1)
/blog/whatsapp-for-jewellers               Pillar: WhatsApp for jewellers · whatsapp for jewellers · T10/T11 · P1 pillar
/blog/gold-schemes                         Pillar: gold savings schemes · gold savings scheme jewellers · T10/T11 · P1 pillar
/blog/dead-stock                           Pillar: dead stock & inventory · jewellery dead stock management · T10/T11 · P1 pillar
/blog/jewellery-crm                        Pillar: CRM & customer memory · jewellery crm guide · T10/T11 · P2
/blog/festival-marketing                   Pillar: festivals & jewellery marketing · jewellery festival marketing · T10/T11 · P2
/blog/ai-for-jewellers                     Pillar: AI for jewellery business · ai in jewellery industry · T10/T11 · P2
/blog/jewellery-ecommerce                  Pillar: ecommerce & D2C · jewellery ecommerce guide · T10/T11 · P2
/blog/digital-gold                         Pillar: digital gold · digital gold explained · T10/T11 · P2
/blog/jewellery-erp                        Pillar: ERP & operations (captures ERP informational intent honestly) · jewellery erp guide · T10/T11 · P3
/blog/manufacturing-karigar                Pillar: manufacturing & karigar · karigar management · T10/T11 · P3
/blog/multi-store                          Pillar: multi-store & franchise · opening second jewellery store · T10/T11 · P3
/blog/industry-data                        Pillar: industry data & trends (feeds GEO) · indian jewellery market trends · T10/T11 · P2
/blog/[cluster]/[article]                  8–15 spokes per cluster (~120–180 articles by P4) · long-tail · T10 · P2–P4
/academy                                   Jwero Academy: free course tracks + staff certification · jewellery sales training · T11 · P3
/academy/[course]                          Courses: whatsapp-selling, scheme-design, dead-stock-clinic, festival-playbooks · {course} · T10 · P3
/reports/state-of-the-indian-jeweller      Annual category artifact (ungated web + gated PDF) · indian jewellery industry report · T10 · P2
/help                                      Help centre (also the AI assistant corpus) · jwero help · T11 · P2
/docs                                      Product documentation · jwero docs · T11 · P2
/docs/api                                  [TIER-C] "API on the public roadmap" page — captures dev intent honestly · jwero api · T10 · P3
/glossary                                  Entity-SEO definition farm hub · jewellery software terms · T11 · P3
/glossary/[entity]                         ~60 DefinedTerm pages (HUID, jangad, dead stock, 11+1 scheme, AI operating system for jewellery…) · {entity} meaning · T10 · P3
/events                                    Webinars & events · jewellery business webinar · T11 · P3

── PARTNER + COMPANY ───────────────────────────────────────────
/partners                                  Partner programme (agencies, ERP dealers, consultants) + application · jewellery software partner program · T3 · P2
/company                                   About: mission, the disconnected-software enemy, team · about jwero · T10 · P1
/company/founders                          Founder entity pages (E-E-A-T anchor) · jwero founders · T10 · P2
/careers                                   Careers · jwero careers · T10 · P2
/contact                                   All channels: WhatsApp, phone, email, office · contact jwero · T12 · P1

── CONVERT LAYER ───────────────────────────────────────────────
/pricing                                   Transparent plans + ROI framing + objection FAQ · jwero pricing · T9 · P1
/book-demo                                 Calendar + WhatsApp fallback ("the conversation IS the demo") · jwero demo · T12 · P1
/free-trial                                Trial/pilot start — mechanics [VERIFY-WITH-PRODUCT]; fallback copy "start a pilot with your own data" · jwero free trial · T12 · P2
/enterprise                                Enterprise enquiry: chains, wholesale, manufacturers; buying-committee kit downloads · enterprise jewellery software · T12 · P2
/whatsapp                                  Redirect → wa.me with ref capture for all offline QR/print (noindex) · — · T12 · P1
/legal/privacy · /legal/terms · /legal/dpdp  Legal set · — · T10 · P1
```

**Locale layer:** `/hi/*` mirrors of the top-30 money pages from P2 (see Part 8 — Search). **Programmatic layer [P3, gated]:** `/solutions/[segment]-[city]` only where a named local customer exists — no doorway pages.

**Counts:** ~145 concrete named URLs enumerated above; template layers add /customers/[story] (3 at launch → ongoing), /blog/[cluster]/[article] (~120–180 spokes by P4), /glossary/[entity] (~60), /academy/[course] (4), /products/analytics/[intelligence] (6), plus /hi/* locale mirrors (~30). Phase split of named URLs: **P1 ≈ 45 · P2 ≈ +60 · P3 ≈ +32 + programmatic · P4 ≈ +8 + long-tail splits** — full site ≈ 380–420 URLs at P4 maturity.

**Migration map — every one of the current 28 pages has a home (no 404s, 301s where renamed):**
| Current slug | v2 URL | Action |
|---|---|---|
| index, platform, pricing, customers, migration, book-demo, security→/trust/security, roadmap, company, integrations→/platform/integrations | same layer | keep / 301 |
| ai-staff | /platform/ai-workforce | 301 + rewrite to OS framing |
| customer-memory | /platform/customer-memory | keep |
| products/* (9 pages: whatsapp, instagram-facebook, ai-sales-agents, crm, catalog, inventory, gold-schemes, digital-gold, multi-store) | identical /products/* | keep, re-template to T3 |
| solutions/single-store, multi-store-chains, manufacturers | identical | keep, upgrade to T5 spec (3.4) |
| solutions/dead-stock, lead-leakage | /solutions/pain/dead-stock, /solutions/pain/lead-leakage | 301 into pain namespace |
| tools/dead-stock-calculator, gold-scheme-calculator | identical | keep |

> **R:** full-coverage sitemap with phase gates ships honest pages first and Tier-C pages transparently · ICP: all 30 segments have an addressable URL or anchored section · pain: every discovery query has a landing page · outcome: topical authority + zero wasted crawl budget · objection: "does it do X?" answered by a URL · search: every layer maps to a query class (brand/category/segment/pain/informational) · conversion: every URL terminates on the spine · KPI: indexed-page count vs plan, organic entrances per layer, P1-page 301 equity retention.

## 3.4 ICP-specific landing pages (Output #5)

All segment pages use **T5**, with this fixed spec. **H1 formula:** `The AI operating system for {segment, in their own words}` — or a pain-led variant where the segment's identity is pain-defined. **Hero promise formula:** one sentence = {their #1 pain reversed} + {OS mechanism} + {proof qualifier}. **CTA stack (D4, fixed order):** 1° WhatsApp deep link with segment-ref (`[ref:solutions/{segment}/hero]`), 2° Book a demo, 3° segment-relevant tool link; enterprise-track segments swap 2° for "Talk to a specialist" → `/enterprise`. **Proof modules (minimum 3):** one named case story from the segment (or nearest neighbour, honestly labelled), one Tier-A stat strip, one product screenshot in segment context; empty slots ship as designed placeholders with the proof-collection playbook (D3 — never fabricated). Persona-specific competitor mentions are allowed here and only here (D2).

| URL | H1 | Hero promise | Top-3 pains | Proof modules | CTA stack |
|---|---|---|---|---|---|
| /solutions/single-store | Your one store, running like it has a back office | Every customer remembered, every enquiry answered in seconds — without hiring anyone | staff phone owns customer list · follow-up never happens · festival broadcasts into the void | single-store story · 90+ fields stat · WhatsApp inbox screenshot | WA · demo · win-back calc |
| /solutions/multi-store-chains | Every branch consistent. Every customer, one record. | One system across branches: pricing rules, central campaigns, owner's daily digest | branch inconsistency · owner blindness · per-store marketing chaos | chain story · multi-store structure (Tier A) · RBAC screenshot · committee kit | WA · specialist (/enterprise) · demo |
| /solutions/luxury-boutique | Clienteling worthy of what you sell | White-glove memory for high-value clients: preferences, occasions, private previews on WhatsApp | generic mass-marketing feel · client privacy expectations · low-frequency/high-AOV follow-up | boutique story · customer-record depth · appointment/video counter shot | WA · demo · growth score |
| /solutions/bridal | Win the wedding, keep the family | Track every trousseau enquiry from first DM to final fitting — and the anniversaries after | long multi-visit journeys leak · family buying committee · seasonal crush | bridal story · journey screenshot · festival-calendar shot | WA · demo · WA-revenue estimator |
| /solutions/diamond-retail | Certified stock, certified follow-up | Cert-level catalog (IGI/GIA fields) + AI that answers 4C questions instantly | cert/solitaire enquiry complexity · high-ticket trust · slow-moving solitaire stock | diamond story · catalog cert fields · AI-answer transcript | WA · demo · dead-stock calc |
| /solutions/gold-retail | Gold moves fast. Your system should too. | Live-rate pricing, scheme enrolment and old-gold exchange in one flow | rate-linked pricing errors · scheme registers · exchange/repair chaos | gold story · scheme stats (Tier A) · rate-linked catalog shot | WA · demo · scheme calc |
| /solutions/silver-retail | High volume, low margin — automated | Fast catalog, fast billing[TIER-C flag], fast reorder for silver's velocity | thin margins × manual work · huge SKU counts · trend churn | silver story · catalog bulk tools · inventory ageing shot | WA · demo · dead-stock calc |
| /solutions/lab-grown-diamond | Built for the fastest-moving segment in jewellery | Educate, convert and retain the lab-grown customer online-first | customer education burden · online-first buyers · price-drop inventory risk | LGD story · AI education transcript · D2C storefront shot | WA · demo · WA estimator |
| /solutions/gemstone-retail | Every stone has a story. Keep both. | Provenance-rich catalog + astrology/occasion-aware CRM journeys | provenance documentation · certification variety · niche-audience marketing | gemstone story · custom-field catalog · journey builder | WA · demo · growth score |
| /solutions/diamond-wholesale | Your inventory, in every buyer's pocket | Private B2B catalogs on WhatsApp; memo/approval tracking; buyer-tiered pricing | memo chaos · stale price lists in the market · buyer follow-up at scale | wholesale story · B2B catalog share shot · pipeline view | WA · specialist · demo |
| /solutions/gold-wholesale | Wholesale gold, retail-grade systems | Rate-linked B2B ordering and ledger clarity per buyer | rate volatility in open orders · ledger disputes · order capture on calls | wholesale story · live-rate order shot · vendor ledger | WA · specialist · demo |
| /solutions/b2b-jewellery | Sell to the trade without living on the phone | One catalog, many buyers, tiered prices — orders captured while you sleep (sections: silver · gemstone · pearl wholesale) | catalog distribution · price-tier management · credit/ledger tracking | B2B story · tiered pricing shot · order pipeline | WA · specialist · demo |
| /solutions/manufacturers | From jangad to despatch, one ledger | WIP, karigar jobs and gold-loss tracking — no retail fluff (gold + diamond mfg lead sections) | gold loss invisibility · karigar job tracking · jangad paper trails | mfg story · WIP ledger shot · gold-loss report | WA · specialist · demo |
| /solutions/casting-units | Every tree, every flask, accounted | Batch/WIP tracking tuned to casting workflows | batch traceability · client job mixing · loss norms per stage | casting story · job-card shot · loss report | WA · specialist · demo |
| /solutions/cad-services | Design files to job files, connected | CAD job intake → approval → production handoff with client comms on WhatsApp | revision chaos · approval delays · file-to-job disconnect | CAD story · approval flow shot · client thread | WA · demo · specialist |
| /solutions/oem-manufacturers | Your buyers' brands. Your system. | Multi-client job-work: client-wise WIP, specs and settlement | client-wise segregation · spec disputes · settlement reconciliation | OEM story · client-job view · settlement report | WA · specialist · demo |
| /solutions/export-houses | Export-grade process discipline | Order-to-shipment tracking with documentation trails ([VERIFY] multi-currency) | documentation burden · long order cycles · overseas buyer comms timezones | export story · order timeline · AI 24/7 reply proof | WA · specialist · demo |
| /solutions/bullion-gold-traders | Volume trades, zero ambiguity | Rate-locked deal capture and counterparty ledgers (girvi = [TIER-C], on roadmap) | rate-lock disputes · counterparty ledgers · deal audit trails | trader story · deal-capture shot · ledger view | WA · specialist · demo |
| /solutions/jewellery-brands | One brand voice across every counter and channel | Central catalog, brand-controlled campaigns, distributor visibility | brand consistency across partners · channel conflict · distributor sell-through blindness | brand story · central-catalog shot · campaign governance | WA · specialist · demo |
| /solutions/d2c-brands | Keep Shopify. Add the channels it can't do. | WhatsApp/IG-native selling + live-rate pricing + video counter on top of your stack | DM-to-order friction · rate-linked pricing online · retention beyond first order | D2C story · Shopify connector (Tier A) · journey shot | WA · demo · trial (/free-trial) |
| /solutions/startups | Start with the system chains took decades to build | Full OS from day one — catalog to CRM to WhatsApp — priced for a first store | no systems knowledge · tiny team wearing all hats · budget fear | startup story · onboarding promise · pricing transparency link | WA · trial · demo |
| /solutions/franchise-networks | Franchisor control. Franchisee freedom. | Brand-level catalog/pricing governance with store-level flexibility (Tier A structure) | brand-standard drift · royalty/reporting opacity · franchisee onboarding | franchise story · governance matrix shot · owner digest | WA · specialist · demo |

Segment pages ship **only** when copy, proof and FAQ are genuinely segment-specific (v1 rule); until then the parent hub carries an anchored section and the URL 302s there — never a thin doorway.

> **R:** fixed T5 spec makes 22 URLs buildable by template while each hero speaks the segment's dialect · ICP: named per row · pain: top-3 per row from the Part 2 pain map (see Part 2 — Audience) · outcome: segment-tagged conversations · objection: segment's #1 (cost / migration+control / "software is for retailers") · search: segment head terms per row · conversion: WhatsApp-first stack with enterprise fork · KPI: qualified conversations started per segment ref code.

## 3.5 Internal linking strategy (Output #18)

**Model: hubs, silos, and one spine.**
1. **Hub-and-spoke (structural):** every page has exactly one parent hub reachable via breadcrumb (`/products/*→/products`, `/solutions/*→/solutions` or `/solutions/pain`, `/blog/{cluster}/*→cluster hub→/blog`). Hubs link down to all children; children link up to hub + sideways to 2–3 siblings max.
2. **Cluster silos (content):** blog spokes link up to their pillar, sideways to siblings, and the pillar links up to its money page (cluster→product/solution mapping fixed in Part 8 — Search). No cross-silo linking from spokes except via glossary.
3. **The conversion spine (mandatory forward links):** every non-convert page links forward along **pain → product → solution → proof → convert**: a pain page links to the 2–3 products that kill it + 1 tool; a product page links to its top solutions + 1 case story + 1 comparison + pricing; a solution page links to its proof story + its tool + /book-demo//enterprise; case stories link to the matching solution + WhatsApp CTA. Each content page carries exactly **one tool link and one product/solution link** — chosen editorially, not auto-generated.
4. **Proof mesh:** case stories are linked *from* product/solution/pain pages contextually ("see how {name} did this"), never only from /customers — proof travels to where doubt lives.
5. **Glossary glue:** first mention of an entity term per page auto-links to `/glossary/{entity}`, capped at 5 links/page to avoid spam; glossary pages link back to the cluster pillar + one product page.
6. **Tier-C honesty links:** every [TIER-C] mention links to `/roadmap` — the transparency loop is itself a linking pattern (and keeps roadmap fresh in crawl).

**Anchor-text policy:** descriptive jeweller-language anchors ("dead stock calculator for jewellers", "how gold schemes go digital") — never "click here" / "learn more" as the only anchor; vary anchors to a page across the site (3+ variants for money pages); exact-match cap ~40% per target page; competitor names appear in comparison anchors only.

**Breadcrumb schema:** `BreadcrumbList` JSON-LD on every page, trail = URL path, labels = nav labels (implementation detail with Part 8 — Search).

**Link-depth budget (≤3 clicks from home for everything that matters):**
| Depth | What lives there | Guaranteed path |
|---|---|---|
| 0 | Home | — |
| 1 | All hubs, /pricing, /customers, /book-demo, P1 products/solutions, footer's ~40 money pages | header + footer |
| 2 | All product pages, all segment pages, all pain pages, tools, comparisons, migration guides, cluster pillars, case stories | hub → page |
| 3 | Blog spokes, glossary entries, academy courses, per-integration pages, intelligence spokes | hub → sub-hub → page |
| >3 | Nothing indexable. Anything that would land deeper gets a footer or hub promotion first. | — |

**Orphan prevention:**
- Hard rule: **0 orphans** — CI check at build time (the site is a static build; every generated URL must be reachable from `/` by anchors alone).
- Quarterly link audit: orphan scan, broken-link scan, anchor-diversity report, spine-completeness check (every page has its forward links), 301-chain flattening.
- New pages launch **with** their inbound links: the publish checklist requires ≥3 contextual inbound links added the same day (hub + 2 contextual), or the page doesn't ship.

> **R:** spine-plus-silo linking turns SEO surface area into a guided buying journey and makes authority flow to money pages · ICP: all · pain: content that ranks but doesn't convert · outcome: pain→convert path from any entrance · objection: proof reaches doubt via the mesh · search: cluster silos consolidate topical authority; 0 orphans protects crawl equity · conversion: every entrance is ≤3 links from a WhatsApp CTA endpoint · KPI: avg. click-depth of organic entrances, spine-completion rate per page, assisted-conversion paths through tools.
