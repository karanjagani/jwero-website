# Product ↔ website coverage audit — 2026-09-30

Source of truth: the product repo (`~/pim`, branch state on disk) and its
`AUTONOMOUS_JEWELLERY_OS_GAP_BLOCKER_REPORT_2026-09.md` (2026-09-02), which
scores every journey as *built* vs *running*. Rule applied here: the website may
claim what a customer can do on a screen today (L1–L3). It may not claim
unattended automation the report marks *built but dark* (scheduler-dependent),
and it says so where a jeweller would otherwise assume it.

## A. Website said "roadmap" — product has shipped. Fixed in this pass.

| Capability | Evidence in product | Website before | Website now |
|---|---|---|---|
| Counter POS: registers, shifts, cash day-close | `lib/backend/lib/pos/register_schema_sql.ts` (shifts open→close, variance per currency), `register_service.ts`, `settings/pos/registers` | "returns & day-close on the roadmap" in 15 places | New page `/products/pos`; all 15 claims rewritten |
| In-POS sales returns | `pos/returns_service.ts`, `branch_return_policy.ts`, `sales/pos/returns` | roadmap | shipped |
| Old-gold exchange voucher | `pos/old_gold_voucher.ts` | roadmap (compare table) | shipped |
| Weight-based sale & quote | `pos/weight_sale.ts`, `weight_sale_quote.ts` | not mentioned | on POS page |
| Vernacular search at the till | `pos/vernacular_search.ts` | not mentioned | on POS page + silver-retail FAQ |
| Offline counter with replay | POS manifest "works offline once opened"; report §3.4 "POS offline replay … Idempotency-Key" | "offline mode is roadmap" (FAQ, security) | POS page claims *the counter* keeps working; general offline-mode FAQ left as is — **confirm on a till device before promoting further** |
| Girvi / gold loans | `lib/backend/lib/girvi/*` (origination, pledge receipt, schemes, accrual, collect, due/renewal sweep, release, journal), `operations/girvi/loans` | "long-term roadmap" (roadmap, bullion page, FAQ) | New page `/products/girvi`; claims rewritten. Accrual/renewal sweeps are cron tasks — wording says "on schedule", not "automatically without setup" |
| Statutory payroll & karigar settlement | `hr/payroll.ts`, HR audit 2026-09 ("maker–checker payroll, PF/ESI/PT/TDS, GL on all five money flows") | `llms.txt` still said roadmap while `/products/hr-payroll` claimed it | `llms.txt` corrected |

## B. Product modules with no page — added in this pass.

| Module | Evidence | Page |
|---|---|---|
| Manufacturing & Workshop | `lib/backend/lib/manufacturing/*` (BOM, routing, release, metal_closure, costing, capacity, job cards, FG receipt → piece), `karigar/*` (directory, open jobs, khata, metal reconciliation, settlement policy, scorecard), `inventory/raw-materials`, `inventory/qc`, `inventory/hallmarking` | `/products/manufacturing` |
| Meetings / video counter | `MEETINGS_MODULE_DELIVERY_2026-09.md` §3 (meet-now from inbox, self-booking, unified calendar incl. Google Meet/Zoho, waiting room + admit, recording with notice, reminders/no-shows) | `/products/meetings`. **Ops note:** `meet.jwero.ai` DNS/TLS must be bound before links are sent to customers (delivery doc §1) |

## C. Product capabilities mentioned nowhere — recommended, not yet built on the site.

| Capability | Evidence | Where it belongs | Suggested framing |
|---|---|---|---|
| Finance ledger: chart of accounts, journals, ~40 auto-posting bridges, GST module, fixed assets, banking, credit/debit notes, opening balances, audit trail | `app/[orgId]/finance/*`, report §3.12 "L3 on bookkeeping" | Either a section on `/products/billing-finance` (done: hub card + FAQ mention "own double-entry ledger, still bridges to Tally") or a full `/products/accounting` page | **Positioning decision for you.** "Books stay in Tally" is a deliberate stance in the blueprint. The product now keeps full books. A page would move the stance to "your books, in Jwero or in Tally — your accountant chooses". Not done without your call. |
| Sales cockpit (guided selling at the counter, AI-kill-switch gated) | `sales/cockpit`, report §3.4 | `/products/showroom` or POS page | "The salesperson's second screen: what she bought, what to show next" |
| Lead Finder (external prospect search, save to CRM) | `operations/lead-finder/page.tsx` (Brave/Serper web search; company + LinkedIn profiles) | `/solutions/b2b-jewellery`, `/products/crm` | Useful for wholesalers; keep modest — it is web search, not a licensed data provider |
| Design Bank (vendor design share → adopt) | `product_design_bank.ts`, `design_bank_sync.ts` | `/products/purchase-vendors` | **Done** — card added. Dead-stock auto-listing has a switch but no scheduler — not claimed |
| Inventory doors: memo, consignments, exhibitions, trials, vaults, counts, labels, item ledger | `app/[orgId]/inventory/*` | `/products/inventory` | **Done** — "Every door" section added |
| Reports builder, scheduled report delivery, executive home, intelligence feed | `reports/builder`, report §3.13 | `/platform` | Note: scheduled delivery bypasses the permission gate (report P0) — mention builder, not scheduling, until fixed |
| Employee self-service (Teams): my-day, attendance, leave, payslips, LMS, loans, settlement, tax declarations, Form 16 | `app/[orgId]/teams/*`, `form16`, `payslips` | `/products/hr-payroll` | **Done** — self-service card added |
| Calling module (ingestion, retention, weekly digest) | `app/[orgId]/calling`, cron routes | `/products/ai-sales-agents` | Already implied; the digest and retention crons are unscheduled (report PB-1c) — don't promise the weekly call digest |
| Tasks, media/asset library, custom masters, ERP rules, automation policies UI, agent teams settings | `app/[orgId]/settings/*`, `tasks` | `/platform/ai-workforce` | "One place to say what may run automatically" is **not** true yet (report PB-6: six governance planes) — keep the current wording |
| Multi-currency at the till, 15 message locales | report §3.14 | `/solutions/export-houses`, `/enterprise` | "Rules compute correctly outside India; the rails (rate feed, GST/TDS shape, +91) are India-first" |

## D. Website claims to keep cautious (product is built but dark)

- Journeys that *send* scheduled customer messages ship in `planned` mode (PB-2). Keep "drafts for approval" wording; do not promise "sends on its own" until the runtime policy is live per tenant.
- AR dunning and payment reminders have no send transport (PB-7). `/products/billing-finance` says "automated payment reminders" — soften to "drafted reminders you approve" if this is not fixed before launch. **Flagged, not changed.**
- Meta ad tokens expire at 60 days with no refresh (§3.9). `/products/ads-manager` should not promise "set and forget".
- Consent is skipped on three send paths (§3.5 P0). The site's consent claims are correct about design; make sure product fixes land before IIJS.

## E. Honesty tiers, updated

Never claim: e-invoice IRN/e-way bill; auto-debit/e-mandate; demand-netting MRP; CAD→BOM; courier integration; cross-branch stock rebalancing; a single governance screen; predictive ML forecasting; public developer REST API (MCP exists); full vernacular UI (Hindi pilot on karigar screens is real).
Now claimable: counter POS with returns, exchange and day-close; girvi; statutory payroll; karigar settlement; manufacturing with wastage norms; video counter; weight-based sales; vernacular till search.

## F. Diamond traders (added 2026-09-30)

Covered as an audience on `/solutions/diamond-wholesale` ("Diamond wholesalers & traders", in the Solutions menu and hub). Claimed: certificate-first stone records, memo/consignment to many buyers with return dates, buyer-tiered price lists, multi-currency invoicing. Declared roadmap on the page: parcel-as-lot carat accounting with price per carat, discount-off-list (Rapaport) pricing, export documentation. **Confirm with product** before promoting to a dedicated `/solutions/diamond-traders` page and a seventh home persona.
