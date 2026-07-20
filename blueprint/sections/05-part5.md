# PART 5 — EXPERIENCE: UI/UX, MOBILE, ENTERPRISE, ACCESSIBILITY

Scope: founder outputs #8 (UI/UX specification), #33 (Mobile UX), #34 (Enterprise UX), #36 (Accessibility), plus the interactive experience layer the brief demands (product tours, search everywhere, AI assistant, voice search). Everything below is written to EXTEND the shipped design system in `assets/site.css` (D5 — locked tokens: Inter, `--brand #0013b7`, indigo scale, `--amber #f6a723`, radius 10–14px, light-first, dark mode mirrors the product). No new tokens. Beauty is achieved through layout, photography, restraint and rhythm — not through re-theming.

## 5.1 UI/UX specification (Output #8) — the "beautiful / premium / future" execution

### 5.1.1 Design principles (the five rules every screen obeys)

1. **Whitespace is the luxury signal.** Jewellery retail sells with velvet trays and empty counters around one ring. The site does the same: one idea per viewport, `--surface` tint bands to separate acts, section padding never below 56px mobile / 76px desktop (already in site.css).
2. **The proof is the decoration.** Numbers, real screenshots and real names get the display treatment jewellery photography usually gets. No abstract 3D blobs, no stock handshakes.
3. **Real UI only** (D3). Every product visual is either a genuine screenshot or a clearly-CSS-built schematic mock (the existing `.mock` / `.bubble` family) — never a painted fantasy dashboard. Schematic mocks are stylistically distinct from screenshots on purpose, so nothing can be mistaken for a shipped feature.
4. **Motion earns its bytes.** Micro-interactions confirm state; two scroll-narrative moments per site (not per page) are allowed spectacle. Everything else is static. `prefers-reduced-motion` collapses all of it (already globally handled in site.css — keep that blanket rule).
5. **Would a jeweller nod?** (D6) — every label, empty state and error message passes the plain-language test before it passes review.

> **R:** why: premium perception without CWV cost · ICP: all, esp. luxury/boutique who judge taste · pain: "software looks like a spreadsheet" distrust · outcome: longer sessions, higher demo intent · objection: "too complex for my team" (calm UI = easy product) · search: fast pages rank · conversion: proof-adjacent CTAs · KPI: scroll-depth 50/90, LCP ≤2.0s.

### 5.1.2 Typographic scale & editorial grid

Current site.css already sets the ramp (`h1 clamp(2.2→3.55rem)`, `h2 clamp(1.55→2.25rem)`, body 16.5px/1.65). Formalise it as a named scale so content and engineering share vocabulary:

| Token (doc name) | CSS today | Use |
|---|---|---|
| Display | h1 clamp | Hero statements only; max 2 lines; `.grad` on ONE keyword max |
| Title | h2 clamp | Section heads; sentence case, never all-caps |
| Card head | h3 1.08rem | Card/feature titles |
| Body | 16.5px/1.65 | Never below 16px anywhere (a11y + 45+ eyes) |
| Lead | 1.1rem `.lead` | Section intros, max 46em measure (kept) |
| Eyebrow | .72rem caps pill | The ONLY all-caps element; one per section |
| Stat display | 2.1rem 750wt `.stat-n` | Numbers-as-decoration; tabular-nums (ADD `font-variant-numeric: tabular-nums`) |
| Caption | .85rem | Annotations, footnotes, `[Sample data]` badges |

**Editorial grid:** keep `1140px` container, but add two named layout patterns to the existing grid utilities: (a) **Editorial split** — `1.12fr/.88fr` hero-grid generalised into a `.split` (text/media, alternating sides down the page, media never twice on the same side consecutively); (b) **Prose column** — 62em max-width single column for T10 articles with pull-stats breaking the measure (full-bleed `--surface` bands). Line length: 46–62em body, 34em hero subs (all already enforced — document, don't change).

### 5.1.3 Jewellery photography & product-screenshot art direction

**Photography (when it earns space — v1 §31 rule stands):**
- Subjects: real counters, real hands with real stock, real shop frontages, staff on WhatsApp with customers. No stock-model glamour, no watermarked agency images, no AI-generated jewellery (uncanny stones destroy trust with this audience instantly).
- Treatment: warm natural light, shallow depth; duotone/indigo-wash overlays are FORBIDDEN on jewellery (gold must look like gold — the amber accent exists so photos don't have to be tinted). Radius 14px, `--shadow-lg`, 1px `--line` border — same frame language as cards.
- Every photo needs a working caption ("Counter at a 2-store silver retailer, Rajkot") — captions are proof; uncaptioned photos are decoration and get cut.

**Product screenshots (the hero asset class):**
- Source: live product, current build, realistic-but-anonymised data (Indian names, ₹ values, real SKU patterns). Screenshot refresh is a release-checklist item — stale UI screenshots are a silent honesty breach.
- Frame: the existing `.mock-bar` browser chrome (three dots + title) for desktop app views; a thin device outline (CSS border-radius, no PNG device frames — bytes) for the mobile app. Never bare screenshots floating in whitespace.
- Annotation style: numbered amber dots (`--amber` fill, white numeral, 22px) anchored on the image, with a caption list below — NOT overlaid text on the screenshot (breaks translation, a11y and dark mode). Max 3 annotations per screenshot.
- Redaction: blur is banned (looks like hiding); anonymise at data level instead.
- Dark mode: ship each hero screenshot in light AND dark product theme, swapped via `<picture>` + `prefers-color-scheme`/`data-theme` [VERIFY tooling in build.js]; secondary screenshots may stay light-mode inside their card frame.

### 5.1.4 Signature visuals: module constellation & one-record architecture

The OS claim (D1) must be SEEN, not asserted. Two proprietary diagram types, both built as inline SVG on the token palette:

1. **Module constellation** (Platform page hero, About): Jwero modules as nodes on a subtle orbital layout around a centre mark (`jwero-mark.png`), connected by 1px `--brand-light` lines. Static SVG by default; on scroll-into-view, lines draw in once (stroke-dashoffset, 600ms, stagger 40ms) — this is scroll-narrative moment #1. Reduced-motion: fully drawn, no animation.
2. **One-record flow** (Home, CRM hub): a customer event travels left→right through channel icons (WhatsApp → CRM record → inventory → billing → follow-up), rendered as the existing `.stack-grid` evolved: solid `--line` connectors replacing dashed "frankenstack" separation. The visual argument: same data, one thread — scroll-narrative moment #2. Implementation: CSS-only step highlight on scroll (IntersectionObserver toggling a class), no canvas/WebGL.

> **R:** why: makes "operating system" legible in 5 seconds · ICP: multi-store/chain evaluators + single-store owners equally · pain: disconnected software · outcome: platform (not point-tool) perception → larger deals · objection: "already have CRM/ERP" · search: unique diagram = image-SERP + AI-citation asset · conversion: Platform-page → demo CTR · KPI: Platform page demo/WhatsApp clicks.

### 5.1.5 Micro-interaction inventory (with restraint rules)

| Interaction | Spec | Restraint / reduced-motion |
|---|---|---|
| Button hover | translateY(-1px) + shadow lift (shipped) | none needed; RM: static |
| Card hover | -2px lift + brand border (shipped) | never on touch (hover:media-query guard — ADD) |
| Scroll reveal | opacity 0→1 + 12px rise, 450ms, once, per section not per card | max 1 stagger group/viewport; RM: visible immediately |
| Count-up stats | `.stat-n` counts from 0 over 900ms when 50% visible, once | Tier-A numbers ONLY (D3); RM + no-JS: final value in markup, JS only animates |
| Chat-mock typing | `.bubble.in` appears with 3-dot typing indicator (500ms) then text; sequence plays once | Never loops; full transcript in DOM for SEO/AT; RM: all bubbles shown |
| FAQ accordion | native `<details>` +/− swap (shipped) | add 200ms max-height ease; RM: instant |
| Nav dropdown | `<details>` panels (shipped) | add 120ms fade/scale-in; RM: instant |
| Sticky bar entrance | slides up after 320px scroll | RM: appears without slide |
| Ticker (gold rate, if shipped) | crossfade on update, no marquee | marquees banned sitewide |
| Skeletons | see 5.1.7 | pulse ≤1.2s period; RM: static grey |

**Global restraint rules:** no parallax; no autoplaying video with sound; no cursor followers; no animation longer than 900ms; no animation that moves layout (CLS budget 0.05); total interaction JS ≤15KB gz on content pages (site.js is ~5KB today — headroom is real but capped).

### 5.1.6 Dark-mode art direction

Dark mode is shipped (`[data-theme="dark"]`, product-mirroring `#6b78ff/#99a3ff` on near-black) — the art direction gap:
- Dark is a first-class rendering, not an inversion QA pass: photography gets a 1px `--line` border to seat it on dark; screenshots swap to dark product theme where available (5.1.3); `.grad` already has its dark variant.
- `--amber` stays as-is in dark (passes contrast on `#0a0b12`); amber-on-white text remains banned in BOTH modes (5.5).
- The `.section-ink` band and `.cta-band` are near-identical in dark mode — acceptable; do not invent a third band colour.
- Default: light; respect `prefers-color-scheme` on first visit, persist toggle in localStorage (shipped in site.js — verify the FOUC guard runs in `<head>` [VERIFY]).
- Every new component ships with its dark variant in the same PR; dark-mode screenshots included in visual-regression set (5.5.3).

### 5.1.7 Empty states & skeletons

Mostly a static site, so these apply to the interactive islands:
- **Calculator pre-input:** never blank — sliders carry sensible defaults (shipped pattern) so results exist at first paint; the "empty state" is a worked example, labelled "Example: 5,000g stock, 15% dead" with the `[Sample]` amber badge (`.badge-sample`, shipped).
- **Search (Cmd-K) empty:** query with no hits → "No pages match — ask us instead" + WhatsApp CTA with the query prefilled (`ref:search/no-results`) + top-5 popular pages. A dead-end search becomes a conversation (D4).
- **AI assistant unknown answer:** honest fallback — "I don't have that answer yet. A human will, on WhatsApp" → deep link. Never hallucinated confidence (the widget is itself a product demo; its honesty IS the pitch).
- **Skeletons:** only where an island hydrates with visible delay (assistant panel, search results): `--surface` blocks, 10px radius, 1.2s pulse, matching final layout exactly (zero CLS). Static pages never skeleton.

### 5.1.8 Component inventory delta vs current site.css

Shipped today (keep, extend): buttons (primary/ghost/ghost-light/wa) · announce bar · sticky header + `<details>` dropdowns · hero (+solo) · section bands (tint/ink) · cards/grids · steps · stats · FAQ accordion · mock/chat-bubble family · frankenstack grid · pain rows · CTA band · report-sample tabs · calculators (2) · form · tables · pricing tiers · roadmap columns · footer · sticky mobile bar · theme toggle · reduced-motion blanket.

**Must-build delta (priority order):**

| # | Component | Notes | Phase |
|---|---|---|---|
| 1 | `WhatsAppCTA` ref-code wrapper | one canonical component; data-wa exists — add per-page ref + prefilled-message registry | P1 |
| 2 | Screenshot frame + amber annotation dots | 5.1.3; light/dark `<picture>` | P1 |
| 3 | Module-constellation SVG | 5.1.4; one build, reused w/ per-page highlights | P1 |
| 4 | Testimonial / video-proof card | facade video (poster + click-to-load), quote, name, city, segment; empty-slot variant "collection in progress" per D3 | P1 |
| 5 | Comparison matrix | desktop table → mobile swipeable cards (5.3.2); `[VERIFY]` slots per D3 | P2 |
| 6 | ICP router card row | "Which jeweller are you?" segment picker | P1 |
| 7 | Share-artifact card | Web Share API + download; "Show this to the family" | P2 |
| 8 | Cmd-K search palette | 5.2.2 | P2 |
| 9 | Product-tour shell | 5.2.1 | P2 |
| 10 | AI assistant widget | 5.2.3 | P3 |
| 11 | Sticky TOC / progress rail | long guides (T10 pillar) | P2 |
| 12 | Tabs component (generalised) | report-tabs exists; generalise with roving tabindex (5.5) | P2 |
| 13 | Breadcrumb + schema | all templates below level 1 | P1 |
| 14 | Locale switcher shell | flag-free, text labels ("हिन्दी") | P3 (see Part on multi-language) |
| 15 | Gold-rate ticker | data source `[VERIFY]`; ship only with a live feed, never hardcoded | P3 |
| 16 | Callout/note block | tier-B/C transparency notes ("on the public roadmap") | P1 |

> **R:** why: ~16 new components close the gap between a 28-page brochure and the full template system · ICP: all · pain: n/a (internal) · outcome: consistent premium execution at content velocity · objection: design drift · search: consistent schema-wired components · conversion: canonical CTA component = reliable attribution · KPI: component reuse rate; zero off-system pages.

## 5.2 Interactive experience layer

Feasibility frame: the site today is static (build.js → dist). Each feature below is classified **[STATIC]** (ships with vanilla JS + build-time data), **[ISLAND]** (client JS + a build-time JSON index; still no server), or **[BACKEND]** (needs an endpoint — `[VERIFY]` against the technical architecture part; see Part 7 — Engineering).

### 5.2.1 Interactive product tour / guided demo — **[STATIC→ISLAND]**

Not a heavyweight Storylane/Navattic embed (3rd-party JS breaks the CWV budget). Build a **screenshot-sequence tour**: 5–7 real product screenshots per flow, stepped through with next/prev, each step = one annotation + one sentence ("A customer messages on WhatsApp → she's already in the CRM").
- Progressive disclosure, no forced form: the tour is fully open — no email gate ever. Step 5-of-7 shows a soft inline CTA ("Want this on your own catalogue?" → WhatsApp `ref:tour/{flow}/step5`); final step shows the full CTA row.
- Flows (launch set): WhatsApp sale end-to-end · one customer record · dead-stock cockpit · gold-scheme enrolment. All Tier-A capabilities only.
- Keyboard: ←/→ steps, focus stays on the stepper; each step is a real DOM node (crawlable, screen-readable), not canvas.
- Deep-linkable steps (`#step-3`) so sales can send a specific moment in a WhatsApp thread.
- Feasibility: pure static assets + ~3KB JS. A live-sandbox "try the real product" tour is **[BACKEND + product work — VERIFY-WITH-PRODUCT]**; do not promise it in copy until it exists.

> **R:** why: "interactive demo" the brief demands, at zero CWV/honesty cost · ICP: research-mode owners who won't book a call yet · pain: implementation/complexity fear · outcome: feature understanding pre-demo → shorter sales cycles · objection: "too complex / what does it actually look like?" · search: annotated real-UI pages are AI-citable evidence · conversion: tour→WhatsApp is a designed path · KPI: tour completion %, tour→CTA CTR.

### 5.2.2 Search everywhere (Cmd-K palette) — **[ISLAND]**

- Build-time index: build.js already knows every page — emit `search-index.json` (title, path, description, headings, FAQ questions; target ≤80KB gz at a few hundred pages, revisit at 500+).
- UI: Cmd/Ctrl-K + a visible header search button (desktop) and a search entry in the mobile nav (icon-only Cmd-K discoverability is desktop-nerd UX; jewellers need a labelled button). Palette = dialog on tokens: `--card`, `--shadow-lg`, 14px radius; grouped results (Pages / Products / FAQs / Tools); fuzzy match client-side (lightweight lib or hand-rolled; ≤6KB gz budget).
- Index lazy-loads on first open — zero cost to non-searchers.
- Every query fires `search_query` analytics (content-gap telemetry); no-result state per 5.1.7.
- A11y: `role="dialog"` + `aria-modal`, focus trap, Esc closes, results as `role="listbox"` with `aria-activedescendant`, ↑/↓/Enter.

### 5.2.3 AI assistant widget — **[BACKEND]**

Concept: "Ask Jwero anything" — dogfooding Jwero's own support-agent product; the widget is a live demo of the thing being sold.
- Corpus: the FAQ bank + docs (single source of answer truth). Answers cite their source page (link chip under the reply).
- Escalation: any low-confidence answer, any pricing/negotiation question, or an explicit "talk to someone" → hands the full transcript context into WhatsApp (`ref:assistant/{page}`), so the human never asks the visitor to repeat themselves. The escalation is the conversion event, not a failure state.
- UI: launcher bottom-right desktop; on mobile it lives INSIDE the sticky bar as a fourth affordance is too crowded — instead the assistant opens from a chip above the sticky bar on scroll-stop [test]. Uses the shipped `.bubble` language so the widget visually IS the product's chat UI.
- Honesty: label "AI assistant — answers from our docs"; never simulates a human name.
- Feasibility: requires an inference endpoint + retrieval over the corpus — **[BACKEND; VERIFY-WITH-PRODUCT — if the support-agent product can be embedded, this is dogfood, not new build]**. Phase order: ship FAQ-search-with-canned-answers first ([ISLAND] — same corpus, no LLM), upgrade to generative later. Do not ship a GPT-wrapper with no retrieval; wrong answers about pricing/compliance are a trust catastrophe.

### 5.2.4 Voice-search readiness — **[STATIC]**

Two distinct things; keep them separate:
1. **Being the answer to voice queries** (real SEO work): conversational FAQ phrasing ("Kya AI WhatsApp pe customer ko jawab de sakta hai?" patterns in FAQ content), Speakable/FAQ schema, ≤60-word answer-first blocks (T10 pattern). This is content + schema — ships P1 with content.
2. **Voice input on-site**: Web Speech API mic button inside the Cmd-K palette — Chrome/Android only, degrade to hidden where unsupported. [ISLAND, P3, nice-to-have]. Do NOT market "voice search" as a feature until 2 ships; 1 is invisible infrastructure.

## 5.3 Mobile & tablet UX (Output #33)

Reference device: mid-range Android (₹15k, Jio 4G, Chrome) — the test bench, not iPhone-on-office-WiFi. 70%+ of this audience researches on phones at night (v1 §33).

### 5.3.1 Mobile-first behaviours per template

| Template | Mobile behaviour |
|---|---|
| T1 Home / T2 Platform | Hero text-first (media below fold); constellation SVG simplifies to vertical flow list <720px; stats 2-up (shipped) |
| T3 Product hub | Screenshot frames full-bleed edge-to-edge minus 16px; tour stepper swipe-enabled (touch + buttons) |
| T4 Pain page | Inline mini-calculator collapses to slider-only; result pinned above CTA |
| T5 ICP solution | ICP router becomes horizontal scroll-snap chips at top |
| T6 Comparison | Matrix → swipeable per-competitor cards (5.3.2) |
| T7 Case story | Video facade 16:9 full-width; share button prominent (Web Share) |
| T8 Tool/calculator | Tool above fold, sliders not keyboards (shipped); results→WhatsApp primary |
| T9 Pricing | Tiers stack, recommended tier FIRST (not middle); sticky "compare tiers" jump link |
| T10 Article | Prose column; sticky TOC becomes top progress bar + jump menu |

### 5.3.2 Comparison-matrix mobile pattern

Desktop: `.tbl` table. <720px: transform to horizontally scroll-snapped cards, one card per competitor column, Jwero column pinned first with `--brand-soft` header; feature rows inside each card. Scroll-snap + visible peek (next card 12% visible) so swipeability is obvious. `aria-roledescription="carousel"` alternative: keep the real `<table>` in DOM with `overflow-x` as the reduced-JS fallback — pick ONE per a11y review, don't ship both [decide in build].

### 5.3.3 Sticky CTA bar rules (extends shipped `.sticky-bar`)

- Three actions max: Call · WhatsApp · Demo (shipped). Labels contextual per page type via the CTA registry (e.g. pricing page: "See pricing on WhatsApp").
- Appears after 320px scroll (not instantly — let the hero breathe); hides on scroll-down/reveals on scroll-up beyond 60% page depth [test]; always hidden when the mobile nav or any dialog is open (shipped for nav via z-index — make explicit).
- Never overlaps: footer gets 130px padding-bottom (shipped); calculators' sticky results (`.calc-out`) disable their stickiness <720px to avoid double-sticky.
- Targets ≥48px, safe-area-inset aware (shipped). One bar sitewide — never a second floating element competing (assistant chip excepted per 5.2.3, mutually exclusive with the bar's visible state).

### 5.3.4 Thumb-zone layout

- Primary actions in the bottom 40% of first viewport on mobile; hero CTA row within reach without stretch.
- Accordion summaries, tour steppers, tab rows: full-width touch rows, min 48px; interactive elements ≥8px apart (WCAG 2.2 target-size 24px is the floor, 48px is the standard).
- Destructive-of-attention actions (theme toggle, locale) stay top-of-screen — deliberately out of thumb zone.

### 5.3.5 Tablet — the counter/showroom mode

Tablets are how this product is DEMOED at counters (sales reps + jewellers showing partners). 768–1024px treatment:
- 2-column grids (shipped breakpoint), but keep desktop nav visible where it fits (test at 820px) — the burger at 768px is premature for landscape iPads [adjust breakpoint to 740px after testing].
- Tour and screenshots: tap targets sized for standing-at-a-counter use; tour works fully offline-cached after first load [VERIFY — needs SW; P3].
- "Counter mode" is NOT a separate build — it's the constraint that landscape-tablet must never look like a stretched phone site.

### 5.3.6 India network-condition budget

Binding numbers (align with Part 7 — Engineering): LCP ≤2.0s and TTI ≤3.5s on 4G/mid-Android · page weight ≤450KB first view (hero image ≤120KB AVIF) · JS ≤150KB gz total, ≤15KB interaction JS on content pages · fonts: Inter only, latin+devanagari subsets, `font-display: swap` · every video is a facade · no third-party JS on content pages except analytics · offline/flaky handling: CTAs are `tel:`/`wa.me` links — they work when the page barely does; forms retry-friendly (no multi-step wizards on mobile).

> **R:** why: the buyer's real device is the design constraint · ICP: single/multi-store owners (mobile), reps at counters (tablet) · pain: slow sites = distrust ("their software must be slow too") · outcome: mobile conversions, WhatsApp threads at night · objection: complexity fear (a fast simple site implies a fast simple product) · search: CWV ranking + mobile-first indexing · conversion: sticky bar is the #1 mobile converter · KPI: mobile LCP field data, sticky-bar CTR, mobile WhatsApp starts/wk.

## 5.4 Enterprise UX (Output #34)

The chain/wholesale/manufacturer track gets parallel affordances without forking the site (D2: chains are customers here, not the enemy).

### 5.4.1 The enterprise front doors

- `/solutions/multi-store-chains`, `/solutions/wholesale`, `/solutions/manufacturers` — same templates, different CTA order: **"Talk to a specialist"** (named human, calendar) is primary; WhatsApp is secondary (senior buyers expect a person; the deal needs discovery). Desktop-perfect matters here: this is the one audience evaluating on a 27" monitor in a head office.
- Multi-stakeholder reality: the evaluator (ops head) is not the approver (owner/patriarch/board) is not the user (store staff). Every enterprise page carries a "for your team" strip linking role-relevant one-pagers (owner: ROI + control · IT/accounts: security + Tally coexistence · store manager: day-in-the-life).

### 5.4.2 Evaluation kit (downloadables)

One `/enterprise/evaluation-kit` page, no email gate on individual PDFs (gates suppress committee circulation — the whole point is that these get forwarded). Optional "send the kit to my email" form as the capture mechanism, not a wall.

| Asset | Addressed to | Content rules |
|---|---|---|
| ROI one-pager | Owner/CFO | Calculator-methodology transparent; Tier-A stats only; `[VERIFY]` slots until case numbers exist |
| Security overview PDF | IT/consultant | Mirrors /trust/security exactly (5.4.3) — never a rosier PDF than the page |
| Migration plan template | Ops head | Timeline, data-mapping checklist, Tally/Zoho coexistence note |
| Multi-store governance brief | Owner/franchise head | Approval hierarchies, per-branch pricing, kill-switch scopes — Tier A |
| Print-ready platform overview | The committee table | 2 pages, mono-friendly, no dark backgrounds |

**Committee-friendly formatting:** every kit PDF and every enterprise page gets a print stylesheet (`@media print`): nav/sticky/assistant hidden, URLs printed after links, dark bands become white with rules, page-break rules on section heads. "Print this page" is a real affordance, not an accident — committees still print.

### 5.4.3 Security page depth

`/trust/security` written to survive an IT questionnaire (v1 §34 stands): DB-per-tenant isolation, encryption at rest/in transit, RBAC, MFA/passkeys, session controls, the 5 kill-switch scopes and approval queues (Tier A — governance is a security story). PLUS the honest roadmap block (Callout component #16): SSO/SCIM, public API, certifications — "on the public roadmap", dated when possible (Tier C — never implied as shipped). Structure the page as questionnaire-shaped H2s ("Where is my data stored?", "Who can access it?", "What happens if we leave?") — it doubles as AEO surface and as copy-paste fodder for the champion filling in a procurement form.

### 5.4.4 Share/print affordances & RFP support

- **Share-artifact card** (component #7) on every case story, calculator result and enterprise page: native share + "copy link" + "download PDF" where applicable — the internal-champion transmission path is designed, not lucky.
- **RFP support content:** `/enterprise/rfp` — a structured capability statement (module list with tier-honest status), standard-answer bank for common RFP questions (integrations, data ownership, exit/export, support SLAs, implementation timeline), and "email us your RFP" with a named response SLA. This page openly states what Jwero does NOT do yet — enterprise buyers punish discovered gaps 10× harder than admitted ones (v1 §34).
- **Procurement hygiene [P3]:** vendor-onboarding info (GST, MSME, bank process), DPA/DPDP statement, uptime/status page only when infra exists (Tier C until then).

> **R:** why: committee buying needs forwardable, printable, questionnaire-shaped assets · ICP: chains, franchise networks, wholesale, manufacturers, export houses · pain: approval friction, security uncertainty, migration fear · outcome: enterprise pipeline; shorter security review · objection: data security, need-approval, migration/implementation fear · search: security/RFP pages rank for "jewellery software security" long-tail + AI-quoted answers · conversion: specialist calls + kit downloads · KPI: kit downloads, specialist-call bookings, security-page dwell.

## 5.5 Accessibility (Output #36) — WCAG 2.2 AA, concretely

Floor: WCAG 2.2 AA. Also market fit: many buyers are 50+ with reading glasses — large type and high contrast sell better here anyway (v1 §36).

### 5.5.1 Contrast commitments on the locked palette

| Pair | Ratio | Verdict / rule |
|---|---|---|
| `--brand #0013b7` on white | ~13.5:1 | Free use for text |
| White on `--brand` | ~13.5:1 | Buttons fine |
| `--brand-mid #3242cb` on white | ~8.9:1 | Text OK |
| `--brand-light #99a3ff` on white | ~2.4:1 | NEVER text on light bg; decorative/large-display only |
| `--amber #f6a723` on white | ~1.9:1 | NEVER text on white (site.css already uses darkened `#b07508` for badge text — keep that rule; amber = fills, icons, annotation dots with white numerals ≥18.5px bold only [verify dot numerals — may need `#8a5c06`]) |
| `--ink-2 #565b73` on white | ~6.3:1 | Secondary text OK; on `--surface #f7f8fb` still ≥5.9:1 OK |
| `--brand #6b78ff` (dark) on `#0a0b12` | ~5.5:1 | OK; `--brand-strong #99a3ff` on dark ~8:1 OK |
| Band text `rgba(238,240,255,.6)` on `--band` | ~5:1 borderline | Audit: raise footer/cta-band minor text to ≥.72 alpha where it fails |
| `.grad` gradient text | varies | Rule: gradient endpoints must EACH pass 4.5:1 on the actual bg; dark-mode grad (`#8f9aff→#b7beff`) passes; light-mode grad ends at `--brand-light` — restrict `.grad` to display sizes (≥24px bold = 3:1 threshold) and verify `#99a3ff` end-stop ~2.4:1 FAILS even large → change light-mode gradient end to `--brand-mid` [CSS fix, P1] |

Non-colour redundancy: links in prose underlined (not colour-only); form errors icon+text; tier-hot pricing card has the text flag, not just the border.

### 5.5.2 Keyboard, focus, ARIA — per component

- **Global:** skip-link to `#main` (ADD — missing today); `:focus-visible` outline shipped — extend to `.section-ink`/`.cta-band` (blue outline on blue band fails → white outline variant); logical heading tree, one H1, landmarks (`header/nav/main/footer` — audit build.js templates).
- **Nav dropdowns (`<details>`):** already keyboard-operable natively; add Esc-to-close returning focus to summary; ensure the outside-click closer doesn't steal focus.
- **Mobile nav:** focus trapped while open, Esc closes, burger gets `aria-expanded` + `aria-label="Menu"` (spans-only today — ADD).
- **Calculators:** every `input[type=range]` needs a visible value (shipped `.calc-val`) AND programmatic label + `aria-valuetext` ("5,000 grams"); results region `aria-live="polite"` so recalculation is announced; keyboard step sizes sensible (step attr, not 1-gram increments over 10k range).
- **Tabs (report-sample + generalised):** `role="tablist/tab/tabpanel"`, roving tabindex, ←/→ switching (today it's buttons with `aria-selected` only — upgrade).
- **Product tour:** stepper buttons real `<button>`s, `aria-current="step"`, step change announced via live region; all step text in DOM.
- **Chat mocks:** decorative sequences get `aria-hidden` on the typing indicator, full transcript readable as a list; count-up stats render final value for AT (animate visually only).
- **Cmd-K palette + assistant:** dialog semantics per 5.2.2/5.2.3; focus return on close.
- **Forms:** labels bound (shipped), errors as `aria-describedby` text adjacent to field, submit never disabled-silent, success `.form-ok` gets `role="status"`.
- **WCAG 2.2 specifics:** 2.4.11 focus-not-obscured (sticky header/bar must never cover the focused element — scroll-margin-top on anchor targets); 2.5.8 target size ≥24px everywhere, 48px standard on mobile; 3.2.6 consistent help (WhatsApp contact in identical position sitewide); no cognitive tests anywhere (3.3.8 trivially met — no logins).

### 5.5.3 Media, motion, language

- Alt-text policy: screenshots get functional descriptions ("Dashboard showing 12 overdue follow-ups"), photography gets contextual alt, decorative SVGs `aria-hidden`.
- Captions on ALL videos (also serves sound-off + non-native speakers); transcripts on case-story videos (also SEO).
- Reduced-motion blanket rule shipped — keep, plus per-component fallbacks noted in 5.1.5.
- `lang` attributes on Hinglish/vernacular quotes (`lang="hi"` spans) so screen readers pronounce them correctly.
- Zoom: layout survives 200% zoom and 320px width (test both); no `maximum-scale` in viewport meta (audit build.js).

### 5.5.4 Testing cadence & tools

| Cadence | Activity | Tooling |
|---|---|---|
| Every PR (CI) | Automated a11y scan on changed templates + contrast lint | axe-core / pa11y-ci; Lighthouse a11y ≥95 gate |
| Every PR (manual) | Keyboard walkthrough of any new interactive component | Human, checklist in PR template |
| Monthly | Screen-reader pass on the 10 money pages | NVDA+Chrome (Windows) + TalkBack (Android — the audience's real AT) + VoiceOver/iOS |
| Monthly | 200% zoom + 320px reflow spot-check; dark-mode contrast re-audit | Browser + Polypane/devtools |
| Quarterly | Full WCAG 2.2 AA audit incl. PDFs (evaluation kit must be tagged/accessible PDFs) | Checklist audit; external audit pre-launch and yearly [VERIFY budget] |
| Continuous | Visual regression set includes focus-visible states + dark mode | Playwright screenshots [aligns with Part 7 — Engineering] |

Publish `/accessibility` — a short conformance statement, known issues, and a contact for barriers. Honesty tiers apply to a11y too: state AA as the target, list gaps openly until closed.

> **R:** why: AA is the floor legally/ethically AND the 50+ owner's usability is revenue · ICP: all; esp. older family-business decision-makers · pain: "software is hard for my team" · outcome: wider usable audience, lower pogo-sticking · objection: team-resistance/training fear (accessible = learnable) · search: semantic structure IS the AEO substrate · conversion: forms and CTAs that everyone can complete · KPI: Lighthouse a11y ≥95 sitewide, zero criticals in monthly SR pass, form completion rate.

## 5.6 Feasibility & sequencing summary (experience layer at a glance)

| Feature | Class | Ships | Blockers / notes |
|---|---|---|---|
| Editorial grid, type scale, photo/screenshot art direction | STATIC | P1 | Screenshot pipeline (real UI, light+dark) is the only dependency |
| Module constellation + one-record flow SVGs | STATIC | P1 | Design once, reuse everywhere |
| Micro-interaction set + reduced-motion fallbacks | STATIC | P1 | ≤15KB interaction-JS budget |
| Component delta #1–#4, #6, #13, #16 | STATIC | P1 | — |
| Product tour (screenshot-sequence) | STATIC→ISLAND | P2 | Screenshot flows for 4 Tier-A journeys |
| Cmd-K search | ISLAND | P2 | build.js emits `search-index.json` |
| Comparison matrix mobile pattern, share cards, print styles | STATIC | P2 | Print stylesheet audited with kit PDFs |
| Enterprise evaluation kit + /trust/security depth + /enterprise/rfp | STATIC | P2 | Kit PDFs must be accessible (tagged) |
| AI assistant (FAQ-canned tier) | ISLAND | P3 | Same corpus as search — no backend |
| AI assistant (generative) | BACKEND | P3+ | `[VERIFY-WITH-PRODUCT]` embed of Jwero's own support agent |
| Voice input, gold-rate ticker, offline counter-mode | ISLAND/BACKEND | P3+ | Web Speech API; rate feed `[VERIFY]`; service worker |

Rule of thumb throughout: nothing in the experience layer may (a) breach an honesty tier, (b) add a third-party script to content pages, or (c) survive review without its reduced-motion, keyboard and dark-mode variants. The premium feel is the sum of a thousand restraints, not one flourish.
