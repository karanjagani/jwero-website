# Legal pages: what was written, and what must be decided before they go live

Date: 2026-10-01. Pages: /legal/privacy, /legal/terms, /legal/data-policy,
/legal/sub-processors, /legal/dpdp, and updates to /trust/security.
Source: content/legal.js.

These were drafted from what the product does, using the product repository's own
security documents (record of processing activities, sub-processor register, data
classification, incident response plan, billing code). They were not written or
reviewed by a lawyer. An Indian technology lawyer must review them before they
are published, and the items below need a decision or a fix first.

## A. Statements that must be confirmed true

| # | The page says | Why it needs checking |
|---|---|---|
| 1 | "We do not use the content of a Customer's records to train our own models." | The product's record of processing marks the AI capacity as undetermined. Confirm no customer data is used for training, evaluation or product improvement, and that each AI provider contract has a no-training term. |
| 2 | Hosting is in India (Microsoft Azure, India region) | Taken from the record of processing. Confirm for production, including backups. |
| 3 | The sub-processor list | Built from the code, not from contracts or production settings. Confirm which providers are live, remove those that are not, add any missing. OpenRouter and NVIDIA NIM are in the code but were left off the public list; if either is enabled in production it must be added (OpenRouter forwards to further providers). LiveKit and Deepgram were added from the dependency list; confirm whether LiveKit is self-hosted. |
| 4 | A signed data processing agreement with each sub-processor | The register shows none recorded. Needed before the Data Policy's "requires them by contract" is true. |
| 5 | "Jwero staff access to a workspace is limited to support and operations needs, and logged." | Confirm the access control and the log exist. |
| 6 | "A written incident response plan" | The plan exists as a draft with roles unassigned. Assign the roles. |
| 7 | "Backups ... with restore tests" | Carried over from the existing security page. Confirm. |
| 8 | Consent | The product default is opted in (`is_subscribed DEFAULT TRUE`). The DPDP Act expects opt-in. Fix the default or the claim. |
| 9 | Retention periods for logs (90 to 365 days) | The purge job has reportedly never run. Switch it on. |
| 10 | Erasure and export tools for contacts and employees | Present in the product per the record of processing. Confirm they are reachable by customers. |

## B. Commitments I chose that are business decisions

These are common defaults. Change any of them before publishing.

| Where | Commitment |
|---|---|
| Privacy, Data Policy | Enquiry data kept up to 24 months |
| Terms, Data Policy | Data available for export for at least 30 days after a subscription ends; deletion of database and backups within a further 90 days |
| Data Policy | 15 days' notice before adding a sub-processor |
| Terms | 30 days' notice of a plan fee increase; 30 days' notice of material changes |
| Terms | No refund of plan fees for a period that has started; wallet refunds only where the law requires or by written agreement |
| Terms | Subscription cancelled after 7 unpaid days (matches the billing code default) |
| Terms | Liability capped at fees paid in the previous 12 months |
| Terms | Courts at Mumbai, Maharashtra; 30 days of discussion first; no arbitration clause |
| Terms | Either side may end on 30 days' notice; 14 days to cure a breach |
| Privacy, DPDP | Grievances acknowledged in 2 working days, resolved in 30 days |
| Security | Vulnerability reports to care@jwero.ai, acknowledged in 2 working days |

## C. Things to put in place

1. Name the Grievance Officer. The pages say "Grievance Officer" with care@jwero.ai; a named person and designation is expected.
2. A monitored security mailbox (security@jwero.ai) and a `security.txt`, as the product's own disclosure policy recommends. Until then the pages use care@jwero.ai.
3. A data protection impact assessment for the customer scoring. The pages disclose the scoring; the assessment is still owed.
4. A notice template jewellers can give their own customers and staff (AI drafting, scoring, call recording, attendance photos, camera-based tracking). The Data Policy makes this the jeweller's duty; a template would make it achievable.
5. Decide whether storing Aadhaar numbers for employees is necessary. The Data Policy tells customers not to store them except as the law allows.
6. The downloadable security overview PDF on /trust/security predates these pages. Check it does not contradict them.
7. If any customers are outside India, a lawyer should say whether GDPR or other law applies; these pages address Indian law only.

## D. Places elsewhere on the site that should agree with these pages

- Resolved 2026-10-02: `llms.txt` no longer lists the public API or SSO as roadmap; the founders confirmed webhooks, APIs and X publishing are live.
- The FAQ page has its own answers about data and security; they were not changed in this pass.

## E. Trust Centre (/trust)

A badge wall states the status of each standard. Six are shown "In place" (DPDP,
India hosting, PCI by design, WhatsApp Business API, GST records, BIS/HUID). Four are
shown as not achieved, because the product repository's own security documents say so:

- ISO 27001: not certified (statement of applicability is a draft, not approved).
- SOC 2: not audited (system description is a draft, not asserted).
- GDPR: not assessed.
- OWASP / penetration test: none has ever been performed (risk register R-16).

Do not change a badge to "In place" until there is a certificate, report or test
summary to link to. Displaying a certification that is not held is a
misrepresentation to customers.

Also to check: the SOC 2 draft says backups and retention are "disabled by default"
and the alert channel has no destination. The site says backups are tested with an
automated restore drill. Confirm backups and restore drills are running in
production, or change that claim on /trust, /trust/security and the home page.

## F. Pricing change, 2026-10-02

The annual plan and the 14-day free trial were removed from the site. Terms of Use now say: Jwero One is ₹18,000 a month billed monthly; the first month is ₹3,600, once per business; Enterprise is custom priced. To confirm with the product and with counsel: whether ₹3,600 is before GST, whether it is refundable if the customer leaves in the first month, whether it converts automatically to ₹18,000, and that the product's signup and billing screens match (the product repository had a 14-day trial and an annual term).

## G. Promises on the site with no written terms yet (added 2026-10-06)

The Terms of Use cover the subscription only. These are now public and need
terms, or need to be withdrawn:

1. **Managed service.** No subscription; every tool included; priced on the
   work, described as about half (outcome-led) or about 60% (approve every
   step) of the cheapest way to staff that work in India. Needs: what is in
   scope, how the price is set and changed, minimum term, notice, what happens
   to data and tools when a managed customer leaves, and liability for work
   Jwero performs on the customer's behalf (messages sent, ads run).
2. **Referral saving.** "10% for each jeweller who joins." Undefined: 10% of
   which fee, for how long, whether it stacks, any cap, when it starts and
   ends.
3. **Onboarding in a day.** Stated across the site, with "settled in thirty
   days" on the onboarding page. Define what "onboarded" means.
4. **Reply within minutes.** "A real person replies on WhatsApp within
   minutes." Hours covered, and what happens out of hours.
5. **Comparison pages.** Name competitors and their prices (comparative
   advertising). Facts are sourced and dated; a lawyer should read them once.
6. **Backups.** Site wording was softened on 2026-10-06 to "you set frequency
   and retention; ask for the latest restore check" until restore drills are
   confirmed running in production (see section E).
- **Season change-freeze** (on /start, the safe-to-try strip, FAQ, ERP-to-OS pages, blog): "a written change-freeze means nothing disruptive happens during your peak weeks." Needs a written policy or softer wording.

## H. New tax and compliance articles needing CA review (added 2026-10-06)
- /blog/gst-on-jewellery-india: job-work rate (stated 5% for jewellery, lower for diamonds), old-gold exchange valuation (Karnataka AAR 2021 mentioned), loose stone rates.
- /blog/cash-limit-pan-jewellery-sale: Rule 114B (PAN above ₹2 lakh), s.269ST / s.271DA, s.40A(3) ₹10,000, PMLA ₹10 lakh for dealers in precious metals and stones. States that Jwero enforces the cash limit on buybacks only.
- /blog/old-gold-exchange-jewellers: cash payout limit, PAN above ₹2 lakh.
- /blog/huid-hallmarking-rules-jewellers: exemptions (₹40 lakh turnover, under 2 g), hallmark grades.
- /blog/e-way-bill-for-jewellery: Chapter 71 exemption, Kerala intra-state rule.
- /blog/e-invoicing-for-jewellers: ₹5 crore threshold, 30-day rule at ₹10 crore, B2C QR above ₹500 crore.

## I. Tier 2 operational articles needing CA or lawyer review (added 2026-10-06)
- /blog/girvi-gold-loan-business-guide: state money-lending/pawnbroker licences, interest caps, auction notice; 75% LTV mentioned as the bank/NBFC reference only.
- /blog/job-work-jewellery-gst-challan: Section 143 one-year return rule, ITC-04 frequency (half-yearly above ₹5 crore, yearly below).
- /blog/gold-scheme-accounting-liability: instalments as liability, bonus as discount, GST on advances, deposit-rule link to 11-12 month schemes.
- /blog/branch-stock-transfer-jewellery: inter-state branch transfers taxable as distinct persons.
- /blog/jewellery-exhibition-stock-control: casual taxable person registration for out-of-state exhibitions.
- /blog/jewellery-repair-job-slip-tat: uncollected articles (no specific legal claim made; says take advice).

## J. Tier 3 growth articles needing review (added 2026-10-06)
- /blog/ai-calling-jewellers-scheme-reminders: TRAI commercial communication rules, consent.
- /blog/jewellery-showroom-footfall-conversion: camera notices, retention, DPDP Act.
- /blog/silver-jewellery-business-pricing: silver hallmarking stated as voluntary.
- /blog/lab-grown-diamond-jewellery-selling: disclosure wording, GST on loose lab-grown stones.
- /blog/jewellery-franchise-control: says royalty tooling availability should be asked; matches the enterprise page's stated gap.

## K. WhatsApp and AI calling pages (added 2026-10-07)
- Stated as confirmed by Jwero: official Meta Business Partner; native WhatsApp payments; bulk inbound and outbound voice AI calling; triggers and campaigns.
- Confirmed 2026-10-07: up to 8 concurrent calls inbound and outbound; all languages of the speech provider (11 named, provider not named on the page); AI call ₹7 per call, all inclusive of AI, voice and phone line (pricing page changed from ₹6 per minute). To confirm: "usually within a day of your Meta verification"; TRAI wording.
