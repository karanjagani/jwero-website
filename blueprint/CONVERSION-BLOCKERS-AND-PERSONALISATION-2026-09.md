# Conversion blockers by user type, and the personalised path past each one

Date: 2026-09-30. Written against the live build (143 pages) after the six product pages,
the solution playbooks and the "How Jwero decides" block. Part A is the audit; Part B is
what was built in this pass; Part C is what only the founders can unblock, in the order it
moves conversion.

The frame: a visitor converts when four things are true at once — *this is for me* (fit),
*I believe it* (trust), *I know what it costs and what happens next* (certainty), and *the
next step is one tap* (friction). Every blocker below is one of those four failing for one
kind of visitor.

---

## Part A — Blockers by user type

### A1. Single-store owner (largest segment; phone; WhatsApp-first; often Hindi/Gujarati)

| Blocker | Type | Status |
|---|---|---|
| No price anywhere — "how much?" is the first question and the site answers "message us" | Certainty | **Open (founder)** — publish a floor: "from ₹X/month for one store" |
| English only | Fit | **Open (founder + engineering)** — Hindi versions of home, WhatsApp, POS, pricing with hreflang |
| Every path ends on WhatsApp; an owner who wants to *hear a voice* has to type first | Friction | Built: Call in the sticky bar and nav; callback field on /book-demo. Open: a "call me now" one-tap during business hours |
| Not sure it's for a shop his size | Fit | Built: persona switch → single-store page → fit check → tailored CTA; *your-path* bar follows him across the site |
| "What happens after I message?" | Certainty | Built: /how-it-goes, three-step strip on every solution page |
| First-visit loader adds ~2.5 s before content on a slow phone | Friction | **Fixed this pass**: loader skipped on campaign landings (utm/ref/gclid/fbclid), on 2g/3g and data-saver, and never on a second page |

### A2. Multi-store / chain owner, enterprise buyer

| Blocker | Type | Status |
|---|---|---|
| No customer voice, no case study with a number | Trust | **Open (founder)** — two case studies, fifteen one-line quotes (component exists) |
| No security questionnaire / DPA / SLA to hand to IT | Trust | Partly: /trust/security, /legal/dpdp. Open: downloadable questionnaire, hosting region, backup cadence, last review date |
| Comparison pages showed "Unverified" cells — reads as unfinished | Trust | **Fixed this pass**: rendered as "Not stated publicly · <what is known>"; disclaimer reworded |
| Head-office vs branch permissions as a table | Certainty | Built earlier: HQ/Branch switch on /products/multi-store |
| Wants a scheduled call, not a chat | Friction | Built: /book-demo with reach + time. Open: self-booking page from Jwero's own Meetings module (dogfood — see C3) |

### A3. Next-gen successor (modernising the family business)

| Blocker | Type | Status |
|---|---|---|
| Wants to *try* before talking to anyone | Friction | Built: six simulations, /start → free workspace; **this pass**: /start resumes at the summary on return; header switches to "Open my workspace" once they've gone through |
| Needs to convince the parent | Trust | Built: share-to-owner CTA on role pages; The Shift on every page. Open: a one-page "brief for your father" PDF |
| Wants to see the real product | Trust | Open: 90-second product video; screenshots with permission |

### A4. Manufacturer / karigar-facing business

| Blocker | Type | Status |
|---|---|---|
| Suspects "jewellery software" means retail | Fit | Built: /products/manufacturing, four maker solution pages with day loops, grams simulation, Making & trade menu column |
| Karigar's own screen unseen | Trust | Open (founder): one Hindi karigar screenshot with permission |
| Metal-loss objection ("my karigars will refuse") | Trust | Built: FAQ + honest-gaps; Open: a manufacturer quote |

### A5. Wholesaler / trader

| Blocker | Type | Status |
|---|---|---|
| "Which buyer holds what" | Certainty | Built: memo mock on /solutions/diamond-wholesale; Digital Catalogues page for buyer links |
| Lead Finder / prospecting not visible | Fit | Built: on /solutions/b2b-jewellery day loop |

### A6. D2C brand / startup

| Blocker | Type | Status |
|---|---|---|
| "Do I have to leave Shopify?" | Certainty | Built: integrations + FAQ; Open: "what happens to my Shopify data if I leave" FAQ |
| Wants to start today, free, no demo | Friction | Built: /start → os.jwero.ai/signup (verified open); Startups page |
| Ads/attribution proof | Trust | Open: one attributed-revenue screenshot |

### A7. Franchise network

| Blocker | Type | Status |
|---|---|---|
| Franchisor vs franchisee control | Certainty | Built: franchise page day loop + HQ/Branch pattern |
| Rollout risk across N stores | Certainty | Built: change-freeze on /how-it-goes; Open: a rollout plan template |

### A8. Influencer roles (cashier, CRM exec, accountant, karigar, store manager)

| Blocker | Type | Status |
|---|---|---|
| Can't buy; CTA assumed they decide | Friction | Built: "Send this page to your owner" share CTA on role pages |
| Fear of being replaced by "AI staff" | Trust | Built: role pages frame AI as drafting for them. Open: one line from a real cashier/CRM exec |
| Accountant: "does my world change?" | Certainty | Built: Tally/Zoho bridges, FAQ, /roles/accountant |

### A9. Existing customer / trial user returning

| Blocker | Type | Status |
|---|---|---|
| **No log-in link anywhere on the site** | Friction | **Fixed this pass**: "Log in" in header (desktop + compact) and footer → os.jwero.ai/login |
| Header still says "Get started" after they've signed up | Friction | **Fixed this pass**: after the /start final click, "Get started" and the path bar become "Open my workspace" |
| Support path unclear | Certainty | Built: care@jwero.ai, WhatsApp. Open: /status page |

### A10. Traffic-source specific

| Source | Blocker | Status |
|---|---|---|
| Ad click → tool/calculator | Loader delay, generic hero | **Fixed**: loader skipped on utm/gclid/fbclid; `?p=<persona>` in the ad URL sets the persona so the path bar and WhatsApp context are right from the first page |
| IIJS / booth QR (`/whatsapp?ref=`) | Lands on WhatsApp redirect only | Built: ref codes carried. Open: QR per booth panel to the matching simulation |
| Search → blog/glossary/compare | Deep page with no orientation | Built: related block, asking chips, The Shift on every page; **this pass**: path bar once persona is known |
| AI answer engines (ChatGPT/Perplexity) | Arrive mid-site, want the short answer | Built: speakable H1 + sub, llms.txt. Open: referrer-aware "the short version" box |
| Returning visitor (2nd+ session) | Starts from zero every time | **Fixed this pass**: "Welcome back" strip on home with the last three pages and a jump to /start or the workspace |

### A11. Cross-cutting

| Blocker | Status |
|---|---|
| Persona chosen on home was forgotten everywhere else | **Fixed**: persona persists from the home switch, /start, any solution page, or `?p=`; every WhatsApp message now carries "(I am a multi-store chain.)" so the reply is right the first time; the path bar shows their solution, their simulation, their first module, and the workspace link |
| No on-site chat (the product has webchat) | Open (C3) |
| No exit / idle nudge on pricing and compare | Open — keep gentle: one line after 45 s idle on /pricing only |

---

## Part B — Built in this pass (no founder input needed)

1. **Log in** link in the header (desktop and compact) and footer → `os.jwero.ai/login` with UTM.
2. **Post-signup state**: the /start final click sets `jwero-signed-up`; "Get started" and the path bar become "Open my workspace".
3. **/start resumes**: picks are remembered; a return visit opens at step 3 with the summary and the same signup link.
4. **Persona layer** (`localStorage: jwero-persona`) learned from the home switch, /start, any of the 22 solution pages, or `?p=single|chain|maker|b2b|d2c|franchise` on any URL (use this in ads and QR codes).
5. **Your-path bar** under the hero of every page that isn't the reader's own solution page: solution · simulation · first module · workspace, with "Not you?" to reset.
6. **WhatsApp context**: every `data-wa` message appends the persona, so the first human reply doesn't start with "what kind of business are you?".
7. **Welcome-back strip** on home for returning visitors (session count ≥ 2): last three pages + jump to /start or the workspace.
8. **Loader gating**: no launch animation on campaign landings, slow connections, data-saver, or any page after the first.
9. **Compare pages**: "Unverified" → "Not stated publicly · <what is known>", disclaimer reworded; "[Being finalised]" → link to /pricing.

All local to the browser; nothing is sent anywhere.

### Second pass ("remove blockers which you can remove")

10. **Stale "no free trial yet"** answers on /pricing and the D2C page contradicted /start — rewritten: free account, three steps, no card.
11. **"What happens to my Shopify data if I leave?"** answered on the D2C page: Shopify untouched, Jwero's copies and additions export as CSV, connector removed in a click.
12. **Rollout plans** as four-step paths on /solutions/multi-store-chains and /solutions/franchise-networks (pilot → exit test → wave → the rest, with the change-freeze).
13. **/brief** — the one-page brief for the owner who won't read the site: what it is, what changes day one, what it doesn't do, what it costs to find out, three questions for the first call, who built it. Print/save-as-PDF (print stylesheet) and send-on-WhatsApp. Linked from Resources and from every role page's related block.
14. **Hours-aware calling**: inside 10:00–20:00 IST every tel: link is marked "open"; outside, "Call us" becomes "Call me back" → /book-demo#callback, which pre-selects "Call me" and focuses the phone field.
15. **AI-referrer short version**: visitors arriving from ChatGPT, Perplexity, Claude, Gemini, Copilot, You.com or Phind get a one-line summary under the hero with four doors (what it is / what it costs / start free / ask a person), once per session.
16. **Pricing nudge**: after 45 s of stillness on /pricing, one dismissible line — "Still deciding? Ask one question" — once per session.
17. **हिन्दी में बात करें** on every CTA band: opens WhatsApp with a Hindi first message.
18. **Security pack**: /trust/security primary CTA now requests the pack for an IT committee (hosting, backups, access, SSO, export) in one tap.

Verified: 144 pages at 1440/390, no errors, no overflow.

---

## Part C — What only the founders can unblock (in order of conversion impact)

1. **A price floor on /pricing** ("from ₹X/month, single store"). Removes the largest reason not to message. One number.
2. **Fifteen one-line quotes + two case studies** (single store, chain). The components exist; wiring is a day.
3. **Dogfood the product on the site**: (a) a self-booking page from Jwero Meetings for demos, embedded on /book-demo; (b) Jwero webchat on the site so the "AI + human within minutes" claim is visible before the visitor leaves for WhatsApp.
4. **Hindi** for four money pages (home, WhatsApp, POS, pricing) with hreflang — rewritten by someone who sells to jewellers, not translated.
5. **Founder videos** (90 s each) and one karigar screenshot with permission.
6. **Security one-pager** for enterprise IT: hosting region, backup cadence, access, last review.
7. **Verify the 13 comparison pages** with each vendor's public materials so "Not stated publicly" cells become facts.
8. **Booth QR per panel** → matching simulation, with `?p=` set.
