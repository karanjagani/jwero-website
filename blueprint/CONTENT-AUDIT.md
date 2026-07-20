# Content & Conversion Audit — 2026-07-20

**Scope:** all 77 built pages, as of commit `fac9048`. **Lens:** marketing, positioning, sales,
content and distribution — is this enough to convince the jewellery ICP and convert at a high
rate, or does it need more?

**Verdict up front:** the site is honest, structurally sound, and has the widest objection-handling
surface of any jewellery-software site that will exist when this ships (351 Q&As, all 25
brief-mandated objections covered). It is **not yet enough to convert at the rate the brief asks
for**, for five specific, fixable reasons below — none of them "write more words," most of them
"do the thing the site keeps promising to do." Read §1 first; it's the finding that matters most.

---

## 1. The gap that caps everything else: zero peer proof

The blueprint's own trust ladder (Part 6 §6.4.1) ranks persuasive power for this trade:
**peer numbers > peer faces > live product proof > institutional signals > transparency
artifacts > adjectives.** The site has strong entries at ranks 3–5 (the WhatsApp self-demo, the
growth-report artifact, the public roadmap) and **nothing at all at ranks 1–2.** Grep the whole
`content/` tree: zero customer names, zero logos, zero dated numbers, zero video testimonials.

This is not a content-writing gap — I can't write a case study that doesn't exist, and D3
(no fabricated proof) is correctly non-negotiable. But two things follow from that constraint,
and neither is currently true:

- **The collection mechanism should already be running, not just described.** `/customers`
  explains the Lighthouse Partner program and promises stories "with names, numbers and dates, or
  not at all" — that's the right policy, stated as a future intention. It needs to become an
  active pipeline this week: which 3–5 real accounts are being instrumented right now, what's the
  target date for the first verified number. Nothing on the site currently signals that this
  process has *started* versus is merely *planned*.
- **The live-demo mechanic (the site's actual strongest proof asset) is under-leveraged.** "This
  website's chat runs on Jwero — test it" appears on exactly 2 pages (home, customers). It should
  be the closing line on every product and solution page, because it's the one proof element that
  doesn't require a customer to exist yet.

**Until real numbers exist, the honest move is to make the live-demo mechanic impossible to miss,
not to keep restating that proof is coming.**

## 2. Nineteen of twenty-two solution pages are template-thin

Word counts, not opinion: `solutions-wholesale.js` averages **~345 words/page** across its 3
pages. `solutions-manufacturing-segments.js` and `solutions-other-segments.js` are in the same
range. Compare to `platform.js` at ~655 words/page or `products-sell.js` at ~780. The three
original solution pages (single-store, multi-store-chains, manufacturers) got the full T3
treatment — pain mirror, a "day in your shop" vignette, a JTBD block, proof, FAQ. The 19 segment
pages added in the second session got a lighter pattern: hero, one pain/feature block, 2–3 FAQs,
CTA. That was the right call *for shipping breadth fast*, but it means:

- **`jtbdBlock()` (the "when X, I want Y, so I can Z" device) appears on only 4 of 22 pages.**
- **The "day in your shop" future-vision vignette — the single highest-converting block per
  StoryBrand's success-scene principle — appears on only 2 of 22 pages.**
- A diamond retailer, a gold wholesaler, a CAD studio and a franchise network all get roughly the
  same shape of page: real, honest, on-strategy — but none of them get the moment where the reader
  pictures their own morning running on the product. That moment is what turns "this seems fine"
  into "I want this."

**This doesn't mean rewrite all 19 from scratch.** It means the highest-traffic 5–6 of them
(gold-retail, diamond-retail, single most-searched wholesale page, d2c-brands, franchise-networks
— pick by expected search volume, not alphabetically) should get the day-in-the-life + JTBD
upgrade first, and the rest follow as traffic data justifies the effort. Diminishing-returns
economics, not neglect.

## 3. Proof density is violated on most non-hero pages

v1's own house rule (carried into every build session) was: *at least one proof element — a
number, a screenshot, or a live widget — every two viewports.* The growth-report artifact (the
single most persuasive interactive element on the site) renders on 6 of 77 pages. The `proofStrip()`
component (90+/240+/14/5) renders on roughly the same handful. Most product and solution pages
run hero → pain → feature cards → FAQ → CTA with **no interstitial proof moment** — no stat, no
mock screenshot, no growth-report teaser. `mock:` (a visual element in the hero) is present on
only 4 of 77 pages; 12 of 19 content *files* (covering the majority of solution/product/comparison
pages) have zero visual element anywhere in the page.

**Fix:** `proofStrip()` and a condensed one-line growth-report teaser are already-built components.
Dropping one of the two into every product and solution page (not a redesign, an insertion) closes
most of this gap in an afternoon of mechanical work, not new writing.

## 4. Twelve of twenty-two segments have no interactive tool at all

The two calculators (dead stock, gold scheme) are referenced from retail-adjacent pages. Grep
confirms **zero calculator references** in `solutions-wholesale.js`, `solutions-manufacturing-
segments.js`, or `solutions-other-segments.js` — 12 pages whose only CTA is "chat on WhatsApp" or
"talk to a specialist." The blueprint's own tools roadmap named a WhatsApp Revenue Estimator and a
Customer Wapsi/Win-back Calculator specifically to serve segments the two inventory-and-scheme
calculators don't reach. Wholesalers, manufacturers, bullion traders and franchise networks
currently get zero "put in your own numbers" moment — the single highest-converting mechanic v1
identified ("value before identity"). This is a real gap, not a nice-to-have: it's the difference
between "trust our claim" and "see your own number," and right now nearly half the ICP segments
only get the former.

## 5. Two promised deliverables don't exist as files

The enterprise page and the security page both promise a "security overview PDF" and a
"buying-committee kit," deliverable "ask on WhatsApp." Neither exists as an actual document today
— it's a promise to produce one on request, not a shipped asset. For the multi-store/enterprise
motion specifically (the beachhead ICP per the original positioning research), a buying committee
expects to receive something in the first meeting, not commission it. This is a same-day fix (a
one-page PDF export of the security page + one for the ROI/coexistence case) that closes a
credibility gap in exactly the segment with the highest deal value.

---

## 6. The sixth gap, named separately because it's a different discipline: distribution

Everything above is about pages that exist converting better. **Distribution** — getting people to
those pages who didn't already know the brand name — has almost nothing built:

- **Zero top-of-funnel content.** `/blog`, `/academy`, `/reports/state-of-the-indian-jeweller` are
  all unbuilt (correctly deferred to P2/P3 in the original blueprint, but worth naming plainly: the
  entire non-branded organic acquisition strategy the blueprint designed — 12 topic clusters, the
  annual industry report as a citation magnet — doesn't exist yet). Right now organic growth can
  only come from the 77 product/solution/pain page long-tails, which is real but is the *narrowest*
  slice of the distribution plan, not the widest.
- **No partner/channel motion.** `/partners` isn't built and isn't linked from anywhere. The
  positioning research's own "channel flip" idea (recruiting ERP-dealer distribution) has no
  landing surface.
- **The market-research verification workflow has never run**, across four build sessions. This
  single unblock would let the 12 named-competitor comparison pages go from "honest but generic"
  (category-level positioning only, most cells marked `[VERIFY]`) to genuinely sharp and specific —
  currently the site's most search-valuable page type (`jwero vs X` queries) is also its least
  differentiated content, because the underlying research was never done.
- **No review-site presence** (G2, Capterra, SoftwareSuggest) — free distribution and an AI-search
  citation source the blueprint explicitly called for, zero cost to start, not started.

None of this is a criticism of the build sequence — conversion infrastructure had to exist before
distribution infrastructure was worth building on top of it. It's a statement of what's genuinely
next, not a gap in what's shipped so far.

---

## Page-type scorecard

| Page type (count) | Grade | Why |
|---|---|---|
| Home | A− | Impact-led, well-proofed, only gap is proof density mid-page |
| Platform / AI-workforce / Security / Migration / Onboarding / Tally (8) | A− | Deepest objection handling on the site; this is the model other pages should match |
| Product pages (11) | B+ | Solid mechanism + one-system proof; thin on future-vision and mid-page proof |
| Core 3 solutions (single-store/chains/manufacturers) | A− | Full T3 treatment — the template the other 19 should grow into |
| 19 segment solution pages | C+ | Honest, on-strategy, structurally thin — see §2 |
| Pain pages (3) | B+ | Calculator-anchored, good; only 2 of a planned 6 tools exist |
| Comparison pages (13) | B− | Concession-first structure is right; content is generic pending the verification workflow (§6) |
| Tools (2 calculators + index) | B | What exists is excellent; coverage gap is segment-blindness (§4) |
| FAQ hub | A | Does exactly what it says; the model for depth, not breadth |
| Pricing / Enterprise | B+ | Objection handling is strong; two promised assets don't exist yet (§5) |
| Trust/proof infrastructure sitewide | C | Structurally correct, substantively empty until §1 has an owner and a date |

---

## Prioritized fix list (conversion impact × effort)

**This week, cheap, high-impact:**
1. Instrument 3–5 real accounts for the Lighthouse program *now* — put a date on the first
   verified number, not just a policy statement. (§1)
2. Add the "test our own inbox" live-demo line to the close of every product and solution page,
   not just home/customers. (§1)
3. Insert `proofStrip()` or the growth-report teaser into every product/solution page that has
   neither. Mechanical, not creative. (§3)
4. Build the security-overview and buying-committee PDFs as actual files. (§5)

**Next sprint, moderate effort:**
5. Upgrade the 5–6 highest-traffic segment pages with a day-in-the-life vignette + JTBD block. (§2)
6. Build the WhatsApp Revenue Estimator and a wholesale/manufacturing-relevant calculator so the
   12 tool-less segments get a "your own number" moment. (§4)

**Unblocks everything downstream, do it once:**
7. Run the market-research verification workflow (positioning doc Appendix A / blueprint v1
   Appendix C) — it's been staged and pending since the very first build session. This single
   piece of work sharpens all 12 comparison pages simultaneously and unblocks any market-stat
   claim anywhere on the site. (§6)

**Phase 2/3, correctly deferred but worth scheduling:**
8. Blog + topic clusters, starting with the 3 highest-intent clusters (WhatsApp for jewellers,
   dead stock, gold schemes) rather than all 12 at once.
9. `/partners` page + the ERP-dealer channel motion.
10. Review-site profiles (G2, Capterra, SoftwareSuggest) — zero cost, do this in parallel with
    everything else.

## What's already right — don't touch

- **Objection-handling breadth**: 351 Q&As covering all 25 brief-mandated objections is genuinely
  comprehensive, not performative. This is the site's strongest asset relative to any competitor.
- **Honesty-tier discipline**: zero instances of claiming Tier-C capabilities as shipped, checked
  sitewide. This is a real trust asset and should stay a hard rule as more content ships.
- **The OS-proof pattern** (one record, demonstrated not asserted) on the pages that matter most
  (home, platform, ai-workforce) is executed exactly as the positioning strategy specified.
- **IA completeness**: all 22 ICP segments and 12 named competitors are addressable by URL — the
  breadth problem is solved; §2–4 are about depth within that breadth, a different problem.
