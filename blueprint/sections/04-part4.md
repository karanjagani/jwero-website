# PART 4 — PAGE-BY-PAGE WIREFRAMES

Founder output #7. Every wireframe below is buildable without further strategy: block order, per-block purpose, content spec, copy formula (bound to Part 1 messaging), CTA with ref code, and mobile behaviour. Copy formulas reference Part 1 by number (L0–L5 pyramid = 1.2.1; pillars = 1.2.2; per-ICP props = 1.2.3; product one-liners = 1.2.4; headline patterns = 1.3.3). Design tokens per D5; all claims tier-gated per D3.

## 4.0 Conventions & the master block checklist

**Block notation** (used throughout):

```
Bn NAME ── job: what this block must accomplish
   spec:  what's in it (content, data, components)
   copy:  formula (Part 1 reference or literal pattern)
   CTA:   action + wa.me ref code (D4) — "—" if deliberately CTA-free
   mob:   mobile behaviour (mobile-first per v1 §33)
```

**The brief's 22-block superset** (Hero · Pain · Future Vision · Problem · Solution · Features · Outcomes · Benefits · Proof · Testimonials · Stories · ROI · Screenshots · Videos · Interactive Demo · FAQ · Comparison · Pricing · Implementation · Support · Security · CTA) is a menu, not a mandate. Each template SELECTS and ORDERS deliberately — a 22-section page converts nobody. Selection principles:

1. **One conversion job per template.** Blocks that don't serve it are cut or collapsed into another block (Outcomes+Benefits usually merge; Screenshots live inside Solution/Features, never as a standalone gallery).
2. **Proof density rule** (v1 §7.4): ≥1 proof element per two viewports — Proof/Testimonials/Stories distribute through the page rather than pooling at one slot.
3. **Objections answered at the moment they arise** — Security next to AI claims, Implementation next to Pricing, Comparison only where the visitor is actually comparing.
4. **Empty proof slots never fake** (D3): until testimonial/logo slots fill (Part 1, 1.4.4), the Tier-A proof strip (1.4.1) + mechanism demos substitute.

**Block selection matrix** (● = full block · ○ = merged into another block · blank = deliberately absent):

| Block \ Page | HOME | PLAT | PRICE | DEMO | TRIAL | ENT | PROOF | MIGR | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Hero | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Pain | ● | ○ | | | | ○ | | ● | ● | ● | ● | ○ | ● | ● | ○ | | | | | |
| Future Vision | ○ | ● | | | ● | ● | | ○ | ○ | ● | ● | ● | ● | | | | | | ○ | |
| Problem | ● | ● | | | | | | ● | ○ | ● | ● | ○ | ● | ● | | | | | | |
| Solution | ● | ● | | | ● | ● | | ● | ● | ● | ● | ● | ● | ● | ○ | ● | | ● | | ● |
| Features | ○ | ● | ○ | | | | | | ● | ● | ○ | ○ | | ● | | | | | ● | ● |
| Outcomes | ● | ● | ● | ○ | ● | ● | ● | | ● | ● | ● | ● | ○ | ○ | ○ | | | | | |
| Benefits | ○ | ○ | ○ | | ○ | ○ | | ○ | ○ | ○ | ○ | ○ | ○ | | | ○ | | | | |
| Proof | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ○ | ○ | | ● | ● |
| Testimonials | ● | ○ | ● | ● | | ● | ● | ● | ○ | | ● | ● | | ● | | | | | | |
| Stories | ○ | | | | | ● | ● | ● | ○ | ○ | ● | ● | ● | ○ | | | ● | | | |
| ROI | ○ | | ● | | | ● | ● | | ○ | ● | ● | ○ | ● | | ● | | | | | |
| Screenshots | ● | ● | | ○ | ● | | ○ | ○ | ● | ● | ● | ○ | ○ | | ○ | | ○ | ● | ○ | |
| Videos | ○ | ○ | | ● | | | ● | | ○ | | ○ | ○ | | | | ○ | | ○ | | |
| Interactive Demo | ● | ● | ○ | | ● | | | | ○ | ● | | | ○ | | ● | | | | | |
| FAQ | ● | ● | ● | ● | ● | ● | | ● | ● | ● | ● | ● | ● | ● | | ○ | ● | ● | ● | ● |
| Comparison | | | ○ | | | | | ● | ○ | | ○ | | ○ | ● | | ○ | | | | |
| Pricing | ○ | ○ | ● | | ○ | ○ | | ○ | ○ | ○ | ○ | | | ○ | | | | | | |
| Implementation | ○ | ● | ● | ● | ● | ● | | ● | ○ | | ● | ○ | | ● | | | | | | ○ |
| Support | | ○ | ● | ○ | ● | ● | | ● | | | | | | | | | | ● | | ● |
| Security | | ● | ○ | | ● | ● | | ○ | ○ | ● | | | | | | | | | | ● |
| CTA | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |

> **R:** a selection matrix makes every omission a decision, not an oversight, and gives content ops a single audit surface · ICP: all · pain: page bloat vs missing objection-handling · outcome: every page keeps one conversion job · objection: each page answers its local objections in-flow · search: lean pages = clear primary entity per URL (see Part 8 — Search) · conversion: shorter paths to the contextual CTA · KPI: template-level scroll-to-CTA and drop-off benchmarks.

**Shared rules for all wireframes:** canonical demo customer ("Meera", wedding Nov, ₹42k scheme balance — Part 1, 1.1.3) appears in every screenshot; real-UI-only; every WhatsApp CTA carries `[ref:page/slot]` and under-CTA reassurance microcopy (1.3.3); sticky furniture per 4.3 present on all pages and not re-listed per wireframe.

## 4.1 Named custom wireframes

### 4.1.1 HOME — "the OS story" (`/`)

One conversion job: make the visitor self-identify ("this understands my business") and start a conversation. Blocks: Hero, Pain/Problem (merged as the enemy block), Solution (one-record visual), Features (constellation), Outcomes (segment router), Proof (wall + growth report), Interactive Demo (growth report scrubber), FAQ, CTA. Excluded: Pricing (one link only — home sells the category, pricing sells the plan), Comparison (D2: no enemy competitor sitewide), Security (lives behind the AI governance strip link).

```
B0 ANNOUNCE BAR ── job: instant "one of us" signal + return hook
   spec:  live 24k gold rate ticker (₹/10g, city selector) + one rotating link
          (report download / roadmap update). Dismissible, cookie-remembered.
   copy:  "24k ₹XX,XXX/10g ▲" · link ≤6 words
   CTA:   ticker → /tools/gold-rate
   mob:   single line, rate only; link collapses into ticker tap

B1 CINEMATIC HERO w/ LIVE PRODUCT PROOF ── job: 5-second what/for-whom/proof
   spec:  H1 + sub + CTA pair + the hero visual = a real, slowly auto-playing
          product sequence (muted, 15s loop, poster-first): Meera's WhatsApp
          enquiry → her one record opening → AI draft → owner taps Approve →
          catalogue share lands. Not a dashboard collage — one story, one record.
   copy:  H1 = L1 flagship claim: "Run your whole jewellery business on one
          system — with an AI staff that waits for your yes." · sub = category
          label (1.1.4) · under-CTA: "A real person + our AI reply within
          minutes — that's the product."
   CTA:   💬 "Chat with us on WhatsApp" [ref:home/hero] · "Book a demo"
   mob:   H1 ≤9 words rendered; loop becomes tap-to-play facade ≤120KB poster

B2 THE ENEMY ── job: name the villain every segment shares (Pain+Problem merged)
   spec:  the Frankenstack visual — 5 disconnected tools each holding a fragment
          of Meera (bill / chat / catalogue PDF / scheme register / staff phone),
          scroll-morphing into one record. The ONE scroll-narrative moment
          allowed on this page (CWV budget, v1 §31).
   copy:  L2 verbatim: "Your software keeps accounts. It doesn't remember
          customers." · caption names the cost (beat 3 of the arc, 1.1.1)
   CTA:   — (deliberate; tension block)
   mob:   morph becomes a 2-frame before/after swipe; reduced-motion = static pair

B3 ONE-RECORD ARCHITECTURE VISUAL ── job: prove the OS claim structurally (1.1.3)
   spec:  interactive diagram — Meera's customer card centre; hovering/tapping a
          module (chat, catalogue, scheme, invoice, visit) lights the field it
          writes on HER card. 90+ fields counter visible.
   copy:  mechanism headline: "One record. Every channel. Your approval." ·
          sub: "That's one row in one database, not a metaphor."
   CTA:   "See the full platform →" (/platform)
   mob:   tap-to-highlight; modules as horizontal chip row above the card

B4 MODULE CONSTELLATION ── job: breadth without a feature wall (Features, merged
   with pillar Outcomes)
   spec:  three pillar clusters (REMEMBER · SELL · RUN, 1.2.2) each holding 5–7
          module chips with one-line 1.2.4 one-liners on hover; Tier-C chips
          render with a "roadmap" badge, never hidden (D3).
   copy:  pillar promise lines verbatim from 1.2.2
   CTA:   each chip → its product page (T1/T2)
   mob:   pillar accordion; chips as 2-col grid inside

B5 SEGMENT ROUTER — "WHICH JEWELLER ARE YOU?" ── job: self-identification →
   the right T3 page (the brief's first principle, rendered as UI)
   spec:  8 cards: single store · multi-store/chain · luxury/boutique · bridal ·
          wholesaler · manufacturer · D2C brand · franchise. Each card = segment
          icon + its lead pain in its own words (1.2.3) + arrow. Equal card
          size/status (D2). "More segments →" link to the full solutions index.
   copy:  card headline = the 1.2.3 lead-pain phrase, not the segment name alone
   CTA:   card → /solutions/[segment] [ref:home/router]
   mob:   2-col grid, 8 cards, no carousel (carousels bury segments)

B6 PROOF WALL ── job: authority without fabrication (Proof+Testimonials)
   spec:  Tier-A proof strip (1.4.1) as large display numbers, each linking to
          its demonstrating page; below it the proof-slot row (1.4.4) that
          renders testimonial/logo cards ONLY when real ones exist — empty state
          = the live-proof card: "This website's chat runs on Jwero. Test it."
   copy:  numbers get display treatment; zero adjectives
   CTA:   💬 "Test our own inbox" [ref:home/proof]
   mob:   numbers stack 2-col; proof cards horizontal-scroll with edge peek

B7 GROWTH-REPORT DEMO ── job: show the weekly owner outcome (Interactive Demo
   + ROI merged); "the report is the product's voice"
   spec:  a scrubable sample of the owner's weekly growth report (customers
          returned, appointments, revenue attributed) — sample data labelled
          SAMPLE; scrub across 4 weeks to show compounding.
   copy:  question headline: "What came back this week?" · footer line: "Not a
          dashboard you must remember to open — an answer that arrives."
   CTA:   "Get a sample report on WhatsApp" [ref:home/report]
   mob:   swipe between weeks; numbers animate on scroll-into-view once

B8 INTEGRATION STRIP ── job: kill the rip-and-replace fear (Implementation, merged)
   spec:  logo row (Tally · Zoho Books · Shopify · WooCommerce · Unicommerce ·
          Meta — Tier A only) + one sentence.
   copy:  "Keep what works. Jwero joins your business — it doesn't hold it
          hostage."
   CTA:   → /platform/integrations
   mob:   logos 3×2 grid, greyscale, no scroll-jack

B9 FAQ ── job: pre-sales objection handling + AEO extraction
   spec:  top 8 site-wide questions (cost, migration, staff learning, AI control,
          languages, data ownership, ERP coexistence, time-to-live); accordion,
          FAQPage schema (see Part 8 — Search).
   copy:  questions in buyer words (brief's buying questions); answers ≤80 words,
          answer-first
   CTA:   "More questions? Ask on WhatsApp" [ref:home/faq]
   mob:   accordion, one open at a time

B10 CTA BAND ── job: the close
   spec:  full-width band, indigo #0013b7, the three-step plan (StoryBrand, 1.3.2):
          WhatsApp us → see it on your data → live before the season.
   copy:  L0 line as the band headline: "The business that never forgets a
          customer." · steps as numbered microcopy
   CTA:   💬 primary [ref:home/close] · "Book a demo" ghost · "Start a pilot" text
   mob:   steps stack; primary CTA full-width 48px
```

> **R:** home = the category argument in 10 scrolls with self-routing at B5, proof structurally not adjectivally · ICP: all 30, routed by B5 · pain: fragmented tools (B2) · outcome: qualified conversations + correct segment routing · objection: "another software" (B2/B8), AI fear (B1's approve tap), proof scarcity (B6 honest slots) · search: home carries L1 entity claim + FAQPage schema · conversion: 4 contextual wa.me refs measure block performance · KPI: hero scroll-past <40%, router CTR, conversations/wk from home refs.

### 4.1.2 PLATFORM / OS OVERVIEW (`/platform`)

One conversion job: convert feature-shoppers into platform-believers — multi-module demo interest. Blocks: Hero, Problem (sync-hell), Solution+Interactive Demo (data-flow), Features (pillar deep-dives), Outcomes, Security, Proof, Implementation, FAQ, CTA. Excluded: Pain vignettes (home + T3 own them), Pricing table (link only), Testimonials-as-block (distributed).

```
B1 HERO ── job: state the OS function in one visual sentence
   spec:  H1 + the animated data-flow diagram: enquiry → one record → AI draft →
          your approval → sale → scheme → return visit. One loop, six labelled
          stations, pauses on hover.
   copy:  "One record. Every channel. Your approval." · sub: the four "one"s
          (one customer record · one catalogue · one inventory truth · one inbox)
   CTA:   💬 [ref:platform/hero] · "Book a demo"
   mob:   diagram rotates vertical; stations become a stepper

B2 PROBLEM — THE SYNC TAX ── job: name what point tools cost (Problem, brief)
   spec:  side-by-side: "5 tools + CSV exports" vs "one system" — a table of 6
          everyday questions ("who bought last Diwali and hasn't returned?") with
          how-long-it-takes on each side.
   copy:  concrete-over-conceptual rows (1.3.1); no competitor names (D2)
   CTA:   —
   mob:   table becomes swipeable question cards

B3–B5 PILLAR DEEP-DIVES ×3 ── job: Features with an organising story
   spec:  one section per pillar (REMEMBER / SELL / RUN): pillar promise, 3 real
          screenshots (Meera continuity), anchor products as chips → T1 pages,
          one Tier-A proof line each (1.2.2 table).
   copy:  pillar promise verbatim; each screenshot captioned with a literal-truth
          proof line (L4)
   CTA:   per-pillar "See [pillar] products →"
   mob:   screenshots horizontal-scroll; chips wrap

B6 AI GOVERNANCE ── job: Security-for-AI, adjacency rule (answer AI fear where
   AI is claimed)
   spec:  approval-queue UI screenshot + the governance facts as icon row:
          approvals · daily caps · quiet hours · 5 kill-switch scopes · 240+
          governed actions (all Tier A).
   copy:  "AI that waits for your yes." — every fact stated as mechanism
   CTA:   "Read the trust page →" (/trust/security, T12)
   mob:   icon row 2-col; screenshot zoom-on-tap

B7 INTEGRATIONS & COEXISTENCE ── job: Implementation objection
   spec:  connector grid + the coexistence sentence per tool ("Keep your Tally —
          books stay where your CA likes them", 1.3.1).
   CTA:   → /platform/integrations · 💬 [ref:platform/integrations]
   mob:   grid 3-col

B8 PROOF STRIP + FAQ + CTA BAND ── as home B6/B9/B10 with platform-specific FAQ
   (8 Qs: "is this an ERP?", "can I use only one module?", API/SSO roadmap
   honesty per D3) · CTA ref [ref:platform/close]
```

> **R:** the platform page carries the "run your whole business on it" promise and must prove the OS function, not list modules · ICP: evaluators/ops heads + multi-module buyers · pain: sync hell · outcome: multi-product demo interest · objection: "we already have CRM/ERP" (B2), AI fear (B6), rip-and-replace (B7) · search: definitional hub for "jewellery business OS" entities · conversion: platform→product flow + demo CTR · KPI: multi-product interest per demo booked.

### 4.1.3 PRICING (`/pricing`) — T9 instance

One conversion job: move a price-shopper to a tier-matched conversation. Blocks: Hero, Pricing, Outcomes(ROI strip), Proof, Implementation, Support, FAQ(objections), CTA. Excluded: Pain/Problem theatre (price-shoppers already believe), Stories (link one), full Comparison (one Frankenstack-cost teaser row only).

```
B1 HERO ── job: de-shock + frame value before numbers
   spec:  short hero, no imagery: H1 + the value frame + tier anchor toggle
          (monthly/annual, annual = discount framed as choice, v1 §25).
   copy:  Hormozi frame (1.3.2): dream outcome ÷ likelihood ÷ delay ÷ effort —
          rendered as one sentence: "Less than [anchor: one gram of gold a
          month [VERIFY price points]] for the system that brings customers back."
   CTA:   anchor scroll → tiers
   mob:   toggle sticky above tier cards

B2 TIER TABLE ── job: fence value, teach philosophy
   spec:  3 tiers named after the trust ladder — Assist · Approve · Autopilot —
          + Enterprise/Chain column. Rows grouped by pillar (REMEMBER/SELL/RUN),
          ~8 rows visible + "see all features" accordion. Tier-C rows appear
          with roadmap badge, never as included (D3). Real prices published
          [VERIFY price points] — transparent pricing is a stated trust pillar.
   copy:  tier subtitle = who it's for in one line ("Assist — the counter that
          answers and remembers")
   CTA:   per-tier: Assist → 💬 [ref:pricing/assist] · Approve/Autopilot →
          "Book a demo" · Enterprise → "Talk to a specialist"
   mob:   tiers as swipeable cards with sticky tier-name tabs; comparison rows
          collapse per card

B3 TRIAL MECHANICS ── job: state the try-first path honestly
   spec:  one banner row under tiers: free-trial/pilot terms — duration, what's
          included, activation path [VERIFY-WITH-PRODUCT self-serve mechanics,
          D4]; fallback copy ships as "Start a pilot with your own data —
          we import it, you judge on real customers."
   copy:  reassurance adjacency: "Your data stays yours — export anytime."
   CTA:   "Start free" / "Start a pilot" → /free-trial [ref:pricing/trial]
   mob:   full-width banner card

B4 ROI STRIP ── job: turn price into arithmetic (ROI block)
   spec:  inline mini-calculator (customer base × dormant % × win-back % × AOV,
          v1 §11 wapsi math) with segment-prefilled sliders; result vs tier price.
   copy:  "Price is a number. ROI is the answer."
   CTA:   "Get this math on WhatsApp" [ref:pricing/roi]
   mob:   slider-first, no keyboard inputs

B5 WHAT'S INCLUDED / IMPLEMENTATION ── job: hidden-cost objection
   spec:  transparent scope table: implementation includes / costs extra /
          never charged; onboarding timeline [VERIFY onboarding SLA]; support
          channels per tier; no-hidden-cost statement; export-anytime.
   CTA:   —
   mob:   3 accordions

B6 FRANKENSTACK COST TEASER ── job: reframe "expensive" (Comparison, merged)
   spec:  one row: "your current 5 tools, combined monthly cost" worksheet
          download; no competitor names, no market stats (D3 [VERIFY] gate).
   CTA:   worksheet download (email-free, direct)
   mob:   single card

B7 OBJECTION FAQ ── job: the cost cluster answered before sales
   spec:  10 Qs: too expensive · contract lock-in · hidden costs · what if we
          leave · price rises · per-user vs per-store · GST on billing ·
          multi-store pricing · trial-to-paid · payment methods. FAQPage schema.
   CTA:   💬 "Ask about pricing" [ref:pricing/faq]
B8 CTA BAND ── tier-mapped repeat of B2's three CTAs · [ref:pricing/close]
```

> **R:** pricing is the most-visited decision page; structure = value frame → fenced tiers → honest trial → ROI math → objections, per v1 §25 with v2's trial track added · ICP: all; Enterprise column serves chains/wholesale/manufacturers · pain: cost fear + hidden-cost distrust · outcome: tier-matched conversations · objection: expensive/lock-in/hidden cost, all in-flow · search: engines answer "jwero pricing" from us (transparency = AI-search factor) · conversion: 3 CTA tracks by tier · KPI: pricing→conversation rate per tier, ROI-strip completion.

### 4.1.4 The three convert pages — BOOK-DEMO · FREE-TRIAL/PILOT · ENTERPRISE-ENQUIRY

Three distinct pages, one shared skeleton (Hero → friction-killer → Proof → FAQ → CTA), differentiated by promise, form depth and reassurance. No nav distractions: header slims to logo + one alternate-CTA link (see 4.3.1).

```
/book-demo ── job: booked slot with context attached
   B1 HERO: H1 "See Jwero on your own numbers." · sub: what the 20 minutes
      covers (your segment, your pains, live product — no slides) · calendar
      embed ABOVE the fold, 15-min slots.
   B2 CONTEXT MINI-FORM (inside calendar flow): name · phone · city · segment
      picker (8 router segments) · "biggest headache" optional dropdown —
      4 fields max, phone-first, OTP-less (v1 §37). Segment answer routes the
      demo agenda + assigns language-matched rep [VERIFY routing ops].
   B3 WHAT-HAPPENS-NEXT STRIP: 3 steps w/ timings ("confirmation on WhatsApp
      in 1 min · reminder 1 hr before · a real product, not a deck").
   B4 PROOF: proof strip (1.4.1) + one 60-sec video testimonial slot (1.4.4
      empty-state: founder 60-sec "what we'll show you" video until real ones exist).
   B5 FAQ (4): how long · who should join · is it a sales call · can family join.
   B6 FALLBACK CTA: "Can't find a slot? WhatsApp us" [ref:demo/fallback].
   mob: calendar full-width; form one field per screen; sticky bar hides
      (page IS the CTA).
   Thank-you state: booked → auto-play 3-min product story + "forward this
      page to whoever joins" share card (thank-you states always advance, v1 §39).

/free-trial (alias /pilot) ── job: activated trial-or-pilot with real data
   B1 HERO: honest promise per D4 — if self-serve verified: "Start free. Live
      in minutes." [VERIFY-WITH-PRODUCT]; fallback ships: "Start a pilot with
      your own data — we import, you judge."
   B2 THE 3-STEP PLAN: (1) send us your customer/catalogue export (any format,
      even Excel/phone contacts) (2) we set up your workspace [VERIFY SLA]
      (3) run real conversations for 14 days. Each step = one card w/ screenshot.
   B3 SECURITY REASSURANCE ROW: data ownership · export anytime · no card
      required [VERIFY] · DPDP note → /trust/security.
   B4 WHAT YOU'LL SEE BY DAY 14: outcome checklist (occasions surfaced, AI
      drafts approved, growth report received) — expectation-setting doubles
      as activation checklist.
   B5 FAQ (5): trial→paid · data after trial · staff seats · which modules ·
      help during trial.
   B6 CTA: primary form (4 fields) or 💬 "Start on WhatsApp — send your export
      there" [ref:trial/hero] — the WhatsApp path IS the low-friction pilot intake.
   mob: steps stack; WhatsApp path listed FIRST on mobile.

/enterprise ── job: qualified specialist call for chains/wholesale/manufacturers
   B1 HERO: "Chain-grade control. Specialist onboarding." · sub names the three
      audiences as equals (D2) · CTA "Talk to a specialist" (form) — WhatsApp
      demoted to secondary here (senior buyers expect a person, v1 §34).
   B2 GOVERNANCE PROOF: RBAC (~150 permissions) · approval-gated pricing ·
      multi-brand/franchise structure · per-branch visibility — screenshots.
   B3 BUYING-COMMITTEE KIT: downloadable row — ROI one-pager · migration plan
      template · Tally coexistence note · security overview PDF (each labelled
      by committee role: owner / CA / IT / ops head).
   B4 IMPLEMENTATION & SUPPORT: phased rollout plan (pilot branch → wave),
      named-CSM support tier, training [VERIFY SLA]; honest SSO/SCIM/API
      roadmap note (Tier C, D3).
   B5 STORY SLOT: multi-store case story (empty-state: the multi-store
      mechanism demo — one catalogue propagating to 3 branches).
   B6 FORM: 6 fields (name · company · phone · stores/units count · segment ·
      timeline) + calendar option; SLA promise under button ("specialist replies
      same business day" [VERIFY]).
   B7 FAQ (5): data isolation · migration at scale · per-branch pricing ·
      franchisee access · contract terms.
   mob: kit downloads become WhatsApp-delivery buttons [ref:enterprise/kit].
```

> **R:** one convert page per intent (demo=guided, trial=self-judge, enterprise=committee) beats one generic contact page; each kills its own friction class · ICP: demo=all, trial=single/boutique/D2C/startups, enterprise=chains/wholesale/manufacturers · pain: form fatigue, evaluation risk, committee complexity · outcome: the three D4 conversion tracks, instrumented separately · objection: "sales call trap" (demo B5), "risk" (trial B3), "not enterprise-grade" (ent B2/B4) · search: n/a (noindex candidates except /enterprise) · conversion: these ARE the conversion layer · KPI: booking rate, trial/pilot activation rate, specialist-call show rate.

### 4.1.5 PROOF / SUCCESS-STORIES hub (`/customers`) + case-study template

One conversion job: make belief transferable — and stay credible while the proof library is thin (D3: no invented proof, ever).

```
/customers HUB
   B1 HERO: "Real jewellers. Real numbers. Counted in the product." · sub states
      the proof policy in one line: every number here is attributed, dated and
      customer-approved — that policy IS the differentiator.
   B2 NUMBERS WALL: attributed metric cards (name·city·segment·metric·date) —
      renders only consented, instrumented numbers (1.4.4 collection playbook).
   B3 STORY GRID: case-story cards filterable by segment (router taxonomy) ·
      each card: photo, shop name, city, one number, one quote line.
   B4 EMPTY-STATE DESIGN (ships at launch, degrades gracefully as slots fill):
      - the live-proof card: "This site's chat runs on Jwero — test the product
        now" 💬 [ref:customers/live]
      - the proof-strip (1.4.1) as "what the product itself can prove today"
      - the lighthouse invitation: "First 10 stories get filmed in your shop —
        become one" → /enterprise or 💬 [ref:customers/lighthouse]
      - the roadmap-of-proof: "3 stories filming now [VERIFY]" honest counter.
      NEVER: placeholder logos, "trusted by 1,000+", stock testimonials.
   B5 CTA BAND: "Be the proof" framing.
   mob: story grid single column; filters as chip row.

CASE-STUDY TEMPLATE (/customers/[story]) — narrative arc per v1 T7
   B1 HERO: shop photo + one-number headline ("+X% repeat purchases in 6
      months") + name/city/segment badge + date.
   B2 THE SHOP BEFORE: history + the breaking point, owner's words (Hinglish
      verbatim allowed, D6).
   B3 FIRST 30 DAYS: what was imported, what went live, first win — with the
      actual screenshots (customer-approved).
   B4 THE NUMBERS: 3 metric cards, method note ("counted in Jwero, [date
      range], approved by owner") — the method note is the trust feature.
   B5 OWNER VIDEO: regional language, subtitled (1.3.4).
   B6 SHARE ARTIFACT: "Show this to the family" — WhatsApp-forwardable
      card (Web Share API), one image + one number + one quote.
   B7 ROUTER: "A jeweller like this one?" → matching T3 page + 💬
      [ref:story/router].
   mob: video facade; share button sticky at B4 onward.
```

> **R:** an honest empty state converts better than fake logos and builds the collection flywheel into the page itself · ICP: all, esp. skeptical patriarchs · pain: SaaS over-promise fatigue · outcome: belief transfer + lighthouse recruitment · objection: "where's your proof?" answered with policy + live product · search: case studies = E-E-A-T + review-adjacent content (schema: see Part 8 — Search) · conversion: story→router→segment page flow · KPI: proof-slot fill rate/quarter, story share events, story→conversation rate.

### 4.1.6 MIGRATION CENTRE (`/migration`)

One conversion job: collapse switching fear into a plan. Blocks: Hero, Pain(fear naming), Solution(what we import), Implementation(the plan), Comparison(per-incumbent guides), Support, Proof, FAQ, CTA.

```
B1 HERO: "We move you. You sell." · sub: what gets imported (customers,
   catalogue, schemes — from Excel, ERP exports, even phone contacts) · CTA
   "Plan my migration on WhatsApp" [ref:migration/hero]
B2 FEAR LEDGER: the 6 named migration fears (data loss · downtime · staff
   retraining · season disruption · lock-in · "what if it fails") each answered
   in one line — this block exists to say the fears out loud.
B3 WHAT WE IMPORT: 3 columns (customers / catalogue / schemes+ledgers) with
   accepted source formats listed literally; "your muneem's Tally stays" note
   → keep-your-tally page.
B4 THE LAND PLAN: 7-day timeline graphic, day-by-day [VERIFY onboarding SLA];
   wedding-season change-freeze policy card (honest urgency, 1.4.2).
B5 PER-INCUMBENT GUIDES: card grid → /migration/from-[tool] (P2); launch
   state = generic-by-category cards (billing software / WhatsApp tool /
   spreadsheet+register) so the hub never looks empty.
B6 ROLLBACK HONESTY: export-anytime guarantee + what rollback looks like —
   the paragraph competitors won't write.
B7 FAQ (8, schema'd): duration · cost · parallel running · data mapping ·
   history import · staff training · Tally coexistence · mid-season switch.
B8 CTA BAND: migration-consult variant of demo CTA.
mob: timeline vertical; fear ledger as accordion.
```

> **R:** migration fear is the #1 stated objection across segments; a whole centre outperforms a FAQ answer · ICP: anyone with an incumbent (most of market) · pain: switching risk · outcome: removes the last pre-demo blocker · objection: migration/implementation/downtime/lock-in in one place · search: "migrate from [tool]" long-tail (see Part 8 — Search) · conversion: migration→demo rate · KPI: migration-page→conversation rate; "migration fear" frequency falling in sales notes.

## 4.2 Template library T1–T12

Format per template: conversion job → block sequence (compact) → template-specific proof modules → schema type (names coordinate with Part 8 — Search).

### T1 · PRODUCT PAGE (`/products/*`, e.g. whatsapp, crm, gold-schemes)

Job: turn a category-word searcher into a product-contextual conversation.

```
1 HERO         job headline (JTBD, 1.3.2) + product shot + 1.2.4 one-liner as sub
               CTA 💬 product-contextual prefill [ref:products-X/hero]
2 PAIN TRIO    3 named micro-pains in buyer words (Pain+Problem merged)
3 HOW IT WORKS 3 steps, real UI, Meera continuity (Solution+Screenshots)
4 FEATURE GRID 6–9 cells, benefit-first, Tier-C cells = roadmap badge (D3)
5 ONE-SYSTEM   fixed "Because it's one system" cross-module block (1.1.3) —
               2–3 mechanism sentences (Outcomes merged here)
6 JEWELLERY-NATIVE  what generic tools can't do: live-rate prices, HUID,
               scheme context (proof module)
7 PROOF SLOT   mini story or proof-strip fallback (1.4.4)
8 LOCAL OBJECTIONS + FAQ  5–8 product-specific Qs, schema'd; answers
               what-it-replaces / works-with / costs (v1 T3 rule)
9 CROSS-LINKS  related products + pain page + comparison (internal-link module)
10 CTA BAND    product-contextual WhatsApp + demo [ref:products-X/close]
mob: feature grid 1-col; steps as vertical stepper; UI shots zoom-on-tap
```

Proof modules: one-system block, jewellery-native block, L4 literal-truth caption under every screenshot. Schema: Product/Service + FAQPage (see Part 8 — Search).

> **R:** product pages catch category-word demand and must answer replace/work-with/cost before the visitor asks · ICP: product-aware searchers, all segments · pain: per product (1.2.4) · outcome: product-contextual conversations · objection: "does it fit my stack" (block 5+9) · search: one product entity per URL, one-liner = meta seed · conversion: contextual prefilled wa.me · KPI: product-page→CTA rate per product.

### T2 · INTELLIGENCE-SUITE PRODUCT PAGE (`/products/*-intelligence`, analytics, copilot)

Job: sell answers-not-dashboards while holding the Tier-B/C line (D3: never "AI forecasting").

```
1 HERO         question headline the product answers ("Who's gone quiet? What's
               due for reorder?") + ask→chart UI shot
2 PROBLEM      "dashboards you must remember to open" vs answers that arrive
3 QUESTION GALLERY  6 real questions → real output screenshots (Features as
               Q&A pairs; each pair is an AEO extract)
4 INTERACTIVE  scrubable sample report/answer (SAMPLE-labelled) — the growth-
               report pattern reused per suite
5 HOW IT KNOWS one-record provenance block: the answer exists because modules
               share state (OS proof, 1.1.3)
6 HONESTY BOX  exactly what this suite does today vs roadmap (Tier B wording
               verbatim from 1.2.4; predictive ML = roadmap link) — signature
               block of this template
7 ROI          "one decision this paid for" vignette (dead-stock melt call)
8 SECURITY     data-stays-yours note (intelligence products trigger data fear)
9 FAQ + CTA BAND  [ref:products-X/close]
mob: question gallery as swipe cards; sample report swipe-by-week
```

Proof modules: question gallery (real outputs), honesty box, provenance block. Schema: Product/Service + FAQPage.

> **R:** intelligence products are where over-claiming temptation peaks; a dedicated template hard-wires the tier line into the layout · ICP: owners/ops heads, multi-store esp. · pain: management blindness · outcome: intelligence-led platform deals · objection: "AI hype" (honesty box), data fear (block 8) · search: question-formatted H2s = AEO magnets · conversion: sample-report→WhatsApp · KPI: gallery engagement, honesty-box dwell, page→demo rate.

### T3 · ICP / SOLUTION PAGE (`/solutions/[segment]`, 30 rows of 1.2.3)

Job: make the segment feel "built for me" → segment-tagged conversation.

```
1 HERO         the segment's 1.2.3 value prop verbatim as H1 territory + segment-
               true imagery (manufacturer page: bench & jangad, NO retail counters)
2 PAIN MIRROR  top-3 pains in the segment's own words (PAS: pain)
3 AGITATE      the compounding cost, one calculation (PAS: agitate)
4 FUTURE VISION  "a day in your shop on Jwero" — 5-beat morning-to-night
               vignette (the template's signature block; StoryBrand success scene)
5 SOLUTION MAP pillar-mapped: which 3–4 modules matter for THIS segment, why
6 JTBD BLOCK   3 literal "When [trigger], I want [job], so I can [outcome]" H3s
7 PROOF        segment-matched story slot (fallback: segment-relevant mechanism
               demo + proof strip)
8 ROI          segment-prefilled calculator embed (dead stock for retail; gold-
               loss for manufacturers; wapsi for all)
9 COMPARISON (allowed here only, per D2)  "vs the way you do it today" — and
               persona-specific competitor rows where genuinely relevant [VERIFY]
10 IMPLEMENTATION  segment onboarding note ("live before the season")
11 FAQ (segment-specific, schema'd) + CTA BAND  segment CTA — enterprise
               segments get "Talk to a specialist" [ref:solutions-X/close]
mob: day-vignette as swipeable timeline; calculator slider-first
```

Proof modules: day-in-the-life vignette, segment-prefilled calculator, segment story slot. Schema: Service + FAQPage (+ BreadcrumbList).

> **R:** the brief's first principle lives or dies on these pages; 1.2.3 gives all 30 heroes for free · ICP: one per page · pain: rows of 1.2.3 · outcome: segment-tagged conversations (north-star dimension) · objection: "not built for my type of business" · search: 30 long-tail segment heads (see Part 8 — Search) · conversion: segment-matched heroes beat generic · KPI: per-segment conversations started, router→solution→CTA flow.

### T4 · INDUSTRY HUB (`/industries/retail|manufacturing|wholesale`)

Job: orient a broad-intent visitor and route down to the right T3 page (hub, not landing page).

```
1 HERO         industry-level promise (pillar language) + industry stat strip
               (product-truth or [VERIFY]-gated only)
2 LANDSCAPE    the industry's shift in 4 beats (arc beats 1–3, 1.1.1) —
               education content, AEO-extractable
3 SEGMENT ROUTER  the industry's T3 pages as pain-labelled cards (home B5
               pattern, scoped)
4 SOLUTION OVERVIEW  pillar grid filtered to industry-relevant modules
5 PROOF        industry story slot + proof strip
6 RESOURCE RAIL  pillar guide, relevant tools, academy course (cluster links)
7 FAQ (industry-level) + CTA BAND [ref:industries-X/close]
mob: router cards 2-col; landscape beats as steps
```

Proof modules: industry stat strip (gated), story slot. Schema: CollectionPage + FAQPage.

> **R:** hubs catch broad queries and distribute authority + visitors to T3 leaves · ICP: early-journey, industry-identified · pain: unarticulated (education stage) · outcome: correct routing + topical authority · objection: n/a (pre-objection stage) · search: hub-and-spoke cluster architecture (see Part 8 — Search) · conversion: assist (router CTR) · KPI: hub→T3 flow rate, cluster organic growth.

### T5 · PAIN PAGE (`/solutions/pain/*`, dead-stock, lead-leakage…)

Job: convert felt pain into a computed number → tool→WhatsApp.

```
1 HERO         the pain in their words, vernacular quote up top (D6) —
               question or named-cost headline (1.3.3 patterns 3/4)
2 AGITATE      the compounding math narrated + INLINE MINI-CALCULATOR
               (signature block: pain page = calculator wrapper)
3 SOLUTION     only the 2–3 capabilities that kill this pain — never the
               full platform (restraint = credibility)
4 FUTURE VISION  the after-state in one screenshot + one sentence
5 PROOF        pain-matched story slot / mechanism demo
6 FAQ (pain-specific, schema'd)
7 CTA          "See your [pain] number on WhatsApp" [ref:pain-X/close]
mob: calculator directly under H1; sliders w/ segment defaults
```

Proof modules: inline calculator with published assumptions, after-state screenshot. Schema: Article + FAQPage.

> **R:** pain pages are the highest-intent organic entry after product words; the calculator turns empathy into a personal number · ICP: pain-aware, all segments · pain: one per page (brief's pain list) · outcome: tool completions → conversations · objection: "ROI uncertainty" (their own math answers it) · search: pain-phrase long-tail + assumption tables as AEO content · conversion: tool-first CTA logic (v1 §39 matrix) · KPI: calc completion rate, calc→WhatsApp delivery rate.

### T6 · COMPARISON PAGE (`/compare/*`)

Job: win the switcher's trust by conceding honestly, then convert to migration.

```
1 HERO + VERDICT  60-word verdict block: "choose them if… choose Jwero if…" —
               genuine concessions first (the template's signature)
2 FEATURE MATRIX  factual, dated, sourced rows; every market stat [VERIFY]-
               gated until verification workflow clears (D3); Tier-C Jwero
               cells marked roadmap — we tier-flag OURSELVES in the matrix
3 WHAT SWITCHERS SWITCH FOR  3 mechanism blocks (memory / AI governance /
               channels), not adjectives
4 WHAT WE DON'T DO YET  the trust section (roadmap link)
5 MIGRATION PATH  from-this-tool import note → /migration/from-[tool]
6 TESTIMONIAL SLOT  a switcher quote when real (1.4.4)
7 FAQ (comparison-specific, schema'd) + CTA  "Plan the switch" (migration-
               consult demo variant) [ref:compare-X/close]
mob: matrix becomes per-row swipe cards, sticky column headers
```

Proof modules: dated/sourced matrix, self-tier-flagging, concession verdict. Schema: Article + FAQPage (no fake AggregateRating — see Part 8 — Search).

> **R:** concessions build the credibility that makes wins believable; comparisons live off-nav-center per D2 (persona-routed) · ICP: switchers with a named incumbent · pain: current-tool dissatisfaction · outcome: comparison→migration→demo flow · objection: "marketing will say anything" (concessions), migration fear (block 5) · search: "[tool] alternative/vs" queries · conversion: migration-consult CTA · KPI: comparison→migration flow, row-expand engagement.

### T7 · CALCULATOR / TOOL PAGE (`/tools/*`)

Job: deliver value before identity; capture via WhatsApp result delivery.

```
1 TOOL ABOVE THE FOLD  sliders pre-filled with segment defaults; result
               visible BEFORE any contact field (law 1, v1 §11)
2 RESULT CARD  the number + plain-language interpretation + share button
3 DELIVERY     "Get this on WhatsApp" — capture = channel proof (law 2)
               [ref:tools-X/deliver]; no email gate anywhere
4 ASSUMPTIONS  published, editable defaults table (auditable math = trust
               artifact + AEO content)
5 INTERPRETATION CONTENT  what the number means, what to do — the SEO body
6 NEXT STEP    matched pain page + product page + "see this fixed in a demo"
mob: THE primary experience — sliders 48px, no keyboards, result sticky
```

Proof modules: published assumptions, the visitor's own number. Schema: WebApplication + FAQPage.

> **R:** tools compute the cost of the status quo with the visitor's own numbers — the most honest urgency the site owns (1.4.2) · ICP: all, segment-defaulted · pain: per tool · outcome: WhatsApp deliveries = qualified conversations with context attached · objection: ROI uncertainty · search: "[pain] calculator" + assumption-table extracts · conversion: value-first capture converts the form-averse · KPI: start→complete→delivery funnel.

### T8 · ACADEMY LESSON (`/academy/[course]/[lesson]`)

Job: build practitioner trust and pull learners toward the product where it's native.

```
1 HERO         lesson title + course breadcrumb + duration + level
2 VIDEO/LESSON BODY  facade-loaded video + full transcript (AEO) or text lesson
3 KEY TAKEAWAYS  3–5 bullets (extractable)
4 DO IT IN JWERO  soft product tie-in — one screenshot, one link; never a
               hard sell mid-lesson
5 NEXT LESSON RAIL + COURSE PROGRESS
6 CTA (soft)   course completion → certificate + 💬 "Want this running in
               your shop?" [ref:academy-X/close]
mob: transcript accordion; progress bar sticky
```

Proof modules: instructor entity box (real person, jewellery credentials). Schema: Course/LearningResource + VideoObject.

> **R:** the academy earns trust from staff and owners before buying intent exists, and feeds retention after · ICP: staff, first-time founders, tier-2/3 owners · pain: capability gaps ("can my staff learn?") · outcome: educated pipeline + activation aid · objection: training fear (the academy IS the answer) · search: how-to query capture (see Part 8 — Search) · conversion: soft, deferred · KPI: course completion, academy→trial rate.

### T9 · BLOG ARTICLE (`/blog/[cluster]/[article]`)

Job: win the query, earn the citation, route to the cluster's money page.

```
1 ANSWER-FIRST BLOCK  ≤60-word direct answer under the H1 (extractable)
2 TOC (sticky, per 4.3.7) for >1200-word pieces
3 BODY         H2s phrased as questions where natural; one idea per section;
               data claims sourced or [VERIFY]-gated
4 AUTHOR ENTITY BOX  real person, credentials, linked profile (E-E-A-T)
5 CLUSTER CROSS-LINKS  pillar + 2 siblings + the matched money page
6 FAQ TAIL (3–5, schema'd)
7 SOFT CTA     contextual tool or guide, not a demo push [ref:blog-X/close]
mob: TOC collapses to dropdown; tables scroll in-container
```

Proof modules: author entity, sourced data. Schema: Article/BlogPosting + FAQPage.

> **R:** articles are the cluster infantry; answer-first + entity discipline is what LLM search rewards · ICP: education/pain-awareness stage · pain: per cluster · outcome: organic + AI-answer share · objection: n/a · search: the core AEO/GEO unit (see Part 8 — Search) · conversion: assist (tool routing) · KPI: cluster organic growth, answer-share audit, blog→tool flow.

### T10 · HELP / DOC ARTICLE (`/help/*`, `/docs/*`)

Job: resolve the task; secondarily prove product depth to evaluators reading pre-purchase.

```
1 TASK TITLE (verb-first: "Import customers from Excel") + product-area breadcrumb
2 STEPS        numbered, one screenshot per step, current-UI-only
3 EXPECTED RESULT  what success looks like
4 TROUBLESHOOTING accordion + RELATED TASKS rail
5 FEEDBACK ROW ("Did this help?") + support handoff: 💬 support-routed
               WhatsApp [ref:help-X/support] — support widget, not sales
mob: steps full-width; screenshots zoom-on-tap
```

Proof modules: the docs corpus itself (depth = product reality signal; also the AI assistant's corpus, v1 §37). Schema: TechArticle/HowTo + FAQPage where apt.

> **R:** public docs are read by evaluators as proof the product is real and supported · ICP: customers + pre-purchase evaluators · pain: implementation/support fear · outcome: deflection + evaluation confidence · objection: "support quality" · search: long-tail how-to (see Part 8 — Search) · conversion: n/a (retention surface) · KPI: resolution rate, helpful votes, doc→support-chat rate.

### T11 · ROADMAP / RELEASE-NOTES (`/roadmap`, `/changelog`)

Job: convert candour into authority; give Tier-C pages somewhere honest to point (D3).

```
ROADMAP: 3 columns — SHIPPED (dated) / ROLLING OUT (Tier B, exact audit
   framing) / ON THE ROADMAP (Tier C list in plain words: POS counter, payroll
   & karigar wages, offline mode, vernacular product UI, public API & SSO,
   e-invoice, predictive ML). Header line: "Here's what we don't do yet."
   Each item: one plain-language line, no dates promised for unshipped items.
CHANGELOG: reverse-chron monthly entries — title, 2-line what-changed, screenshot,
   affected products chips. Subscribe via WhatsApp [ref:changelog/subscribe].
CTA: soft band — "The platform you join is compounding." [ref:roadmap/close]
mob: columns become tabs; changelog infinite-scroll with month anchors
```

Proof modules: ship-velocity itself (dated entries), the "not yet" list. Schema: WebPage + ItemList (see Part 8 — Search).

> **R:** the transparent roadmap is the trust moat's public face — every Tier-C product page links here instead of over-claiming · ICP: evaluators, enterprise, press/LLMs · pain: SaaS over-promise fatigue · outcome: authority via candour + freshness signal · objection: "hidden gaps" · search: freshness/E-E-A-T signal · conversion: assist · KPI: roadmap dwell, changelog return visits, zero retracted claims.

### T12 · SECURITY / TRUST PAGE (`/trust/security`, `/trust/support`)

Job: survive an IT questionnaire and a patriarch's suspicion on the same page.

```
1 HERO         plain-words promise: "Your data is yours. Here's exactly how
               we keep it that way."
2 PLAIN-WORDS LAYER  6 cards for non-technical readers (who can see what ·
               where data lives · export anytime · what AI can/can't do ·
               approvals · kill switches)
3 TECHNICAL LAYER  accordion depth for IT: DB-per-tenant isolation, encryption
               at rest, RBAC/MFA/passkeys, session controls (Tier A facts only)
4 HONEST GAPS  SSO/SCIM/audit-hardening/certifications roadmap note (D3) —
               "enterprise buyers punish discovered gaps 10× harder than
               admitted ones" (v1 §34)
5 COMPLIANCE   DPDP statement, data-processing summary, sub-processor list
6 DOWNLOAD     security overview PDF (committee kit item)
7 FAQ (security cluster, schema'd) + support handoff CTA [ref:trust/close]
mob: two-layer structure preserved — plain cards first, tech accordion second
```

Proof modules: the two-layer honesty structure, the gaps section. Schema: WebPage + FAQPage.

> **R:** one page serving both the owner's fear and IT's checklist prevents the enterprise track forking the site · ICP: enterprise IT + data-fearful owners · pain: data security/fraud fear · outcome: questionnaire pass-through, objection pre-clearance · objection: data security, AI control · search: "is jwero safe/secure" answer ownership · conversion: assist (enterprise) · KPI: PDF downloads, enterprise-form mentions of security dropping.

## 4.3 Global furniture wireframes

### 4.3.1 Header

```
DEFAULT (top of page, transparent-to-white on scroll):
[◆ Jwero]  Platform ▾  Products ▾  Solutions ▾  Pricing  Customers  Resources ▾
                                   [Login] [💬 WhatsApp·accent] [Book a demo·primary #0013b7]
   dropdowns: Products = 3 pillar columns + Grow money-products rail (v1 §7.2
   tree, pillar names per 1.2.2); Solutions = by-business + by-pain 2-col;
   full keyboard/focus support (WCAG 2.2 AA).
SCROLLED (>1 viewport): height compresses 72→56px, logo mark only, nav labels
   stay, CTA pair persists, subtle shadow, gold-rate ticker (if announce bar
   dismissed) docks as a tiny chip left of Login.
CONVERT PAGES (/book-demo, /free-trial, /enterprise): slim header — logo +
   one alternate-CTA text link only (no nav; the page is the funnel).
MOBILE: logo + 💬 icon + hamburger; drawer = 2-level accordion of the same
   tree; Login at drawer footer; demo CTA as drawer-top button.
```

### 4.3.2 Announce bar

One slot, one message, sitewide: gold-rate ticker + one rotating link (see HOME B0). Rules: never stacked messages; dismiss persists 7 days; on Tier-C launches it announces the ship ("POS is live") — the bar is the changelog's loudspeaker. Mobile: single line, 32px, rate only.

### 4.3.3 Footer (mega, SEO-load-bearing)

```
Row 1  L0 signature line + logo + the category label (1.1.4)
Row 2  5 columns: Products (full list, pillar-grouped, Tier-C items linked to
       roadmap-framed pages) · Solutions (segments + top pain pages) ·
       Resources (tools, academy, blog, report, compare index, migration) ·
       Company (about, why-jwero, customers, careers, partners, contact) ·
       Trust (security, support, roadmap, changelog, legal, DPDP)
Row 3  proof strip (1.4.1) condensed to one line
Row 4  language switcher · socials · GST/legal line · "This site runs on
       Jwero — the chat button is the product." (dogfood signature)
Mobile: columns become accordions; row 4 stays flat.
```

### 4.3.4 Sticky mobile CTA bar

```
[📞 Call]   [💬 WhatsApp]   [Book demo]
```

Every page, thumb-zone, 48px+ targets, safe-area aware. Context rules: label of the WhatsApp button adapts to template ("See scheme demo" on gold-schemes); pain/tool pages swap slot 3 to "My number" (scroll-to-calculator); convert pages hide the bar entirely (the page is the CTA); appears after 1 viewport of scroll, hides on scroll-up past hero (content-first). Each slot fires its own ref code [ref:page/stickybar].

### 4.3.5 WhatsApp widget behaviour (desktop)

Floating 💬 button bottom-right, all pages except convert pages. Behaviour: idle = button only, no auto-open, no fake "1 unread" badges; click = slide-up panel with page-contextual prefilled first message + the reassurance line ("A real person + our AI reply within minutes"); response-time promise displayed [VERIFY staffed SLA]; panel hands to wa.me deep link on send. On help/docs pages the widget routes to support, not sales (4.2 T10). Never overlaps the sticky bar (desktop-only widget; mobile has the bar). All transcripts land in Jwero's own inbox — the widget IS the product demo (D4).

### 4.3.6 Exit / scroll-triggered nudges — tasteful rules

```
ALLOWED (max ONE nudge per session, sitewide, frequency-capped 7 days):
- exit-intent on pain/tool pages → the matched calculator offer ("Leave with
  your number at least") — value, never discount
- 90%-scroll on T1/T3 → slide-in card: matched next step (story or tool)
- pricing dwell >90s no CTA → slim bottom slide-in: "Questions? Ask on
  WhatsApp" [ref:pricing/nudge]
BANNED: entry popups · timed modals · fake countdown/scarcity (1.4.2) ·
  nudges on convert pages, docs, legal · anything covering the sticky bar ·
  more than one per session. Dismiss = never again that page-type for 7 days.
```

### 4.3.7 In-page TOC (long pages: T9 >1200 words, T12, /migration, pillar guides)

Desktop: sticky left rail, H2 anchors, scroll-spy highlight, "top" link. Mobile: collapses to a sticky dropdown chip under the header ("On this page ▾"). Anchors use question-phrased H2 text verbatim (AEO deep links; see Part 8 — Search). Never on conversion pages or T1–T5 (marketing pages must control the scroll sequence).

> **R:** furniture is where CRO compounds — the sticky bar and wa.me widget are the two highest-leverage conversion surfaces on mobile-majority traffic, and the nudge rules keep premium-brand trust intact (D5 beauty mandate) · ICP: all · pain: n/a (infrastructure) · outcome: every page carries the D4 conversion spine · objection: pushy-SaaS distrust (banned list) · search: footer = crawl lattice; TOC anchors = deep-link extracts · conversion: sticky-bar CTR is the single biggest mobile lever (v1 §33) · KPI: sticky-bar and widget conversation starts/wk; nudge accept-vs-dismiss ratio.

---
**Hand-offs:** block components map to the Part on UI/UX specifications' component inventory · schema names per template coordinate with Part 8 — Search · CTA ref-code taxonomy feeds the Part on analytics · proof-slot empty states execute Part 1, 1.4.4 · pricing tier mechanics pend `[VERIFY price points]` and trial activation pends `[VERIFY-WITH-PRODUCT]` per D4.
