# BINDING CONSTRAINTS & CONVENTIONS — read before writing any section

These are non-negotiable decisions that every section of Blueprint v2 must respect. They come from the founder's brief (BRIEF.md), the founder's corrections in this session, and the product-truth research in the pim repo.

## Grounding sources (read what you need)
- `BRIEF.md` (same directory) — the founder's verbatim brief. Your section must satisfy its requirements for your assigned outputs.
- `/Users/karanjagani/pim/JWERO_WEBSITE_BLUEPRINT.md` — Blueprint v1 (1,075 lines, all 40 outputs, grounded in product truth). Mine it aggressively; `grep -n "^#\|^## "` it to find your sections. v2 SUPERSEDES v1 where this brief differs (OS positioning, wider ICPs, beauty mandate, free-trial funnel).
- `/Users/karanjagani/pim/JWERO_POSITIONING_STRATEGY.md` — positioning research (competitor landscape, category options, enemy narrative).
- `/Users/karanjagani/pim/JEWELLERY_OS_TRANSFORMATION_AUDIT.md` — capability audit; source of the honesty tiers.
- `/Users/karanjagani/Documents/jwero website/` — the current live 28-page site (content/*.js, build.js, assets/site.css). NOTE the space in the path — quote it in shell commands.

## D1 — Positioning (founder override, 2026-07-20)
Category: **the operating system for jewellery business**. The founder has explicitly chosen OS positioning; v1's "AI Growth Engine" label is superseded as the category, but keep "growth engine" as a narrative motif inside pages where useful.
- Differentiation caveat: v1 research found SIONIQ claims the phrase "Jewelry Operating System". Mitigate with an AI-first qualifier — recommended primary label: **"The AI Operating System for Jewellery Business"** (or "Jewellery Business OS" as short form). Flag the final label for founder sign-off; do not present the risk as blocking.
- OS claim must be earned by the IA and copy: one customer record, one catalogue, one inventory truth, modules that share state — the OS *function* proven, not just asserted.

## D2 — Size- and segment-neutral (founder correction, 2026-07-20)
Jwero serves single stores, multi-store, chains, luxury/boutique/bridal/diamond/gold/silver/platinum/lab-grown/gemstone retail, wholesale (diamond/gold/silver/gemstone/pearl/B2B), manufacturers (gold/diamond/casting/CAD/OEM/export) and others (bullion, brands, D2C, startups, franchise networks). NEVER frame chains as the sitewide enemy. The enemy is **disconnected software that forgets customers**. Persona-specific competitor/chain comparisons are allowed only inside /solutions/* pages.

## D3 — Honesty tiers (from the audit; the trust moat)
- Tier A (claim freely, product-truth stats): 90+ fields per customer record · 240+ governed AI actions · 14 languages spoken by AI voice · 5 kill-switch scopes · approval queues, daily caps, quiet hours enforced in product · Tally/Zoho Books bridges · Shopify/WooCommerce/Unicommerce connectors · WhatsApp Business API, Meta channels · gold schemes + digital gold + loyalty · multi-store/franchise structure.
- Tier B (claim with framing "rolling out / in deployment"): check audit before promoting.
- Tier C (NEVER claim as shipped): POS cash/day-close billing · girvi · payroll/karigar wages · offline mode · Hindi/vernacular product UI · SSO/SCIM/public API · e-invoice · predictive ML forecasting. The brief lists POS/ERP/Finance/Billing — include these pages in the IA but tier-flag them: transparent "on the public roadmap" treatment (this transparency is itself a trust asset). Nav copy says "Billing & Finance", not "POS", until shipped.
- No fabricated proof: no invented testimonials, logos, review counts, case-study numbers. Design the slots + the collection playbook instead.
- Comparison-page market statistics remain BLOCKED pending the verification workflow (v1 Appendix C): design frameworks/templates with data slots marked `[VERIFY]`.

## D4 — Conversion thesis
Primary CTA sitewide: WhatsApp deep link (wa.me, digits-only number, per-page ref codes, e.g. `[ref:pricing/header]`) landing in Jwero's own omnichannel inbox — "the conversation IS the demo" (dogfood attribution). Secondary: Book a demo. Tertiary (new in v2): Free trial — self-serve mechanics are `[VERIFY-WITH-PRODUCT]`; design the funnel but flag activation mechanics; fallback framing "start a pilot with your own data". Enterprise enquiry track for chains/wholesale/manufacturers. North-star metric: **Qualified Conversations Started per week**.

## D5 — Design system (locked; source `~/pim/app/globals.css`)
Inter; light-first white surfaces; primary #0013b7; indigo scale #99a3ff→#5966d0→#3242cb→#0013b7→#000d7d; amber #f6a723 accent (from logo); dark mode mirrors the product (#3242cb/#6b78ff primaries on near-black); radius ~10-14px; real logo mark `assets/jwero-mark.png`. The old serif/gold "luxury paper" theme is dead — never reintroduce it. The beauty mandate ("premium, luxury, beautiful, build the future") must be achieved WITHIN these tokens: editorial layout, jewellery-photography treatment, restrained micro-interactions, generous whitespace — specify, don't re-tokenise.

## D6 — Voice & audience
Simple words a family jeweller, store manager, salesperson or first-time founder understands. No jargon walls. English chrome; Hinglish/vernacular allowed inside testimonial/example content. Every page must pass: "would a jeweller nod at this sentence?"

## Format conventions (mandatory)
- Your file starts with exactly the `# PART N — TITLE` heading you were assigned; use `##`/`###` below it. Number subsections `N.1`, `N.2`, … within your part only.
- Cross-reference other parts by name only — "(see Part 8 — Search)" — never invent section numbers in other parts.
- Rationale convention: every MAJOR recommendation block ends with a compact one-liner:
  `> **R:** why … · ICP … · pain … · outcome … · objection … · search … · conversion … · KPI …`
  Use it for page types, nav decisions, funnels, clusters, tools — not for every sentence.
- URLs: extensionless canonical paths (`/products/whatsapp`), lowercase-hyphenated.
- Mark anything unverifiable as `[VERIFY]` rather than asserting it.
- Density over padding: tables and tight lists, no throat-clearing, no restating the brief. Target 250–500 lines per part (pains/FAQ and wireframes parts may exceed).
