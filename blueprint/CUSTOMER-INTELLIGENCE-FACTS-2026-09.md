# Customer-intelligence facts used on the site (verified 2026-09-30)

Every number in the "How Jwero decides" block and the rewritten "90+ fields" claims is read
from the product repo (`~/pim`). File → fact.

| Claim on site | Source | Detail |
|---|---|---|
| 198 kinds of customer signal, 36 sources | `lib/shared/journey-events.ts` | 198 `JOURNEY_EVENT_NAMES` across 36 prefixes (web 16, staff 25, commerce 13, vendor 13, karigar 12, girvi 11, wa 11, scheme 10, crm 9, store 8, pos 7, ig 6, occasion 5, …) |
| 68 of them move a score | `lib/backend/lib/journey_scoring/rules.ts` | 68 `case` branches in `getEventScoreDelta` |
| 11 live scores | `contact-profile-compute.ts` passes 3–4 | base: intent, confidence, conversion, roi_probability, fatigue, trust_risk, churn_risk, engagement_cost; derived: opportunity, action, health |
| "each with a visible why" | `marketing/contact_profile_explain.ts` | per-factor breakdown for engagement, intent, churn, health, action |
| Intent halves in 90 days, conversion in 180 | `journey_scoring/decay.ts` `SCORE_HALF_LIFE_DAYS` | intent 90, conversion 180, fatigue 30 |
| 5 lifecycle × 11 RFM × 4 value tiers × 6 channels × 5 occasions = 6,600 | `lib/marketing/marketing-profile-codes.ts` | LIFECYCLE_STAGE(5), RFM_SEGMENT(11), VALUE_TIER(4), CHANNEL(6), NEXT_OCCASION_TYPE(5). Product of coded dimension sizes; VIP tier, AOV band, category, region not counted |
| Six plays | `contact-profile-compute.ts` `recommendationSql` | nurture_lead, engage_active, upsell_vip, retain_at_risk, reactivate_dormant, winback_lapsed |
| Expected outcome + ₹ potential per record | same | `expected_outcome`, `revenue_potential` columns |
| Taste profile from a single purchase | `recommendations/taste_profile.ts` | category / product type / price band vs the org's own quartiles; co-purchase affinity in `affinity.ts` |
| Best hour per customer, org windows re-learnt weekly | `best_send_window` column; `marketing/send_window_learner.ts` | weekly pass, 90-day lookback, ≥30 events, busiest two hours per channel |
| One fatigue cap across every send engine | `marketing/frequency_governor.ts` | counts broadcast + campaign + journey ledgers together |
| 41 ready segments in 13 families | `lib/marketing/suggested-segments-catalogue.ts` | 41 items; families incl. Product & Category Intent (Bridal Enquiry, High-Intent Product Enquiry, Product Viewers With No Purchase, Abandoned Cart Recovery) |
| 21 journey recipes | `lib/marketing/journey-template-presets.ts` | incl. click-to-WhatsApp response, cart abandonment, quote follow-up, dormant reactivation, VIP at-risk rescue, scheme maturity, girvi interest due, occasion recall, post-purchase NPS |
| 30 personalisation fields | `lib/marketing/message-personalization-fields.ts` | 23 contact + 7 brand tokens |
| Simulator deltas | `rules.ts` | web.product_view 8 (≥45s), web.search_performed 8, web.wishlist_add 15, web.cart_add 25/+10 conv, wa.message_received 25 (price keyword), store.product_tried 30/+10, store.appointment_booked 20/+10, scheme.maturity_near 25/+20, scheme.payment_failed +15 trust, customer.complaint_created +60 trust |
| Inbox intent classification | `chat_ai.ts` `generateChatIntentSuggestion` | primary + secondary intents + entities per conversation (model-classified, keyword baseline); not a fixed taxonomy — so no count is claimed |
| Not machine learning | `taste_profile.ts` header, `deal_win_scoring.ts:4-7` | "there is no ML anywhere in it" — site says so |

Kept, demoted: "90+ structured fields" stays only as the substrate line in the customer-memory FAQ and llms.txt.
Not claimed: predictive ML, a count of customer intents (the classifier is open-ended), auto-send.
