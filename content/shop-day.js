// The day on one screen, per kind of business: the hero illustration on each
// solution page. Three bands each: [icon, label, [[what, value], …]].
// Figures are illustrative; every band names something that page's modules do.
const close = (a, b) => ['receipt', 'Day-close', [a, b]];
const SHOP_DAY = {
  'solutions/gold-retail': { title: 'The shop · today, 9:10 pm', secs: [
    ['store', 'Counter', [['Last bill', '22k chain · old gold adjusted · GST'], ['Bills today', '31']]],
    ['box', 'Stock', [['On hand, valued at today’s rate', '2,140 pieces'], ['Repriced at this morning’s rate', 'Every piece']]],
    close(['Cash and scheme collections', 'Matched'], ['Posted to the books', '31 bills · 12 instalments'])] },
  'solutions/silver-retail': { title: 'The shop · today, 9:00 pm', secs: [
    ['scale', 'Counter', [['Last bill', '12 pieces by weight · 86 g'], ['Bills today', '74']]],
    ['box', 'Stock', [['Lots counted this week', '6 of 6'], ['Count variance', '2 pieces']]],
    close(['Cash counted against bills', 'Matched'], ['Posted to the books', '74 bills · 1 purchase'])] },
  'solutions/diamond-retail': { title: 'The showroom · today, 8:30 pm', secs: [
    ['store', 'Counter', [['Last bill', '1 ct solitaire ring · certificate attached'], ['Bills today', '4']]],
    ['gem', 'Stock', [['Certified stones on hand', '318'], ['On supplier memo', '41']]],
    close(['Cash and card against bills', 'Matched'], ['Posted to the books', '4 bills · 1 supplier settlement'])] },
  'solutions/gemstone-retail': { title: 'The showroom · today, 8:30 pm', secs: [
    ['store', 'Counter', [['Last bill', 'Sapphire ring · certificate and origin attached'], ['Bills today', '3']]],
    ['gem', 'Stock', [['One-of-one stones on hand', '204'], ['Sitting 180 days or more', '19']]],
    close(['Cash and card against bills', 'Matched'], ['Posted to the books', '3 bills · 1 purchase'])] },
  'solutions/lab-grown-diamond': { title: 'The brand · today, 9:00 pm', secs: [
    ['store', 'Orders', [['Last order', '1.2 ct solitaire · storefront · paid'], ['Orders today', '9']]],
    ['gem', 'Stock', [['Stones live on every channel', '146'], ['Low and reordered', '3']]],
    close(['Payments against orders', 'Matched'], ['Posted to the books', '9 orders · 1 purchase'])] },
  'solutions/bridal': { title: 'The showroom · today, 8:40 pm', secs: [
    ['store', 'Counter', [['Last order', 'Bridal set · quote accepted · advance taken'], ['Trials today', '5']]],
    ['layers', 'Orders', [['Sets in making', '9'], ['Due for delivery this week', '2']]],
    close(['Advances against orders', 'Matched'], ['Posted to the books', '3 bills · 2 advances'])] },
  'solutions/startups': { title: 'The shop · today, 8:45 pm', secs: [
    ['store', 'Counter', [['Last bill', 'Gold ring · live rate · GST'], ['Bills today', '6']]],
    ['box', 'Stock', [['On hand, valued at today’s rate', '180 pieces'], ['Low and reordered', '2 designs']]],
    close(['Cash counted against bills', 'Matched'], ['Posted to the books', '6 bills · 1 purchase'])] },
  'solutions/multi-store-chains': { title: 'Head office · today, 9:30 pm', secs: [
    ['branches', 'Branches', [['Closed for the day', '5 of 5'], ['Bills across branches', '212']]],
    ['box', 'Stock', [['Transfers awaiting approval', '2'], ['Sitting 180 days or more', '164 pieces']]],
    close(['Cash against bills, by branch', 'All matched'], ['Posted to one ledger', '212 bills'])] },
  'solutions/franchise-networks': { title: 'The network · today, 9:30 pm', secs: [
    ['branches', 'Stores', [['Closed for the day', '18 of 18'], ['Priced by the brand rule', 'Every store']]],
    ['truck', 'Replenishment', [['Orders from stores', '6'], ['Local offers awaiting approval', '1']]],
    close(['Cash against bills, by store', 'All matched'], ['Network report', 'Ready tonight'])] },
  'solutions/jewellery-brands': { title: 'The brand · today, 9:00 pm', secs: [
    ['store', 'Orders', [['Orders today, every channel', '46'], ['Last order', 'Storefront · paid']]],
    ['box', 'Stock', [['Pieces live from one catalogue', '1,020'], ['Low and reordered', '7']]],
    close(['Payments against orders', 'Matched'], ['Posted to the books', '46 orders · 3 purchases'])] },
  'solutions/d2c-brands': { title: 'The brand · today, 9:00 pm', secs: [
    ['store', 'Orders', [['Last order', 'Solitaire ring · came from an ad · paid'], ['Orders today, storefront and chat', '23']]],
    ['box', 'Stock', [['Pieces live on every channel', '410'], ['Low and reordered', '4']]],
    close(['Payments against orders', 'Matched'], ['Posted to the books', '23 orders · 1 purchase'])] },
  'solutions/manufacturers': { title: 'The workshop · today, 7:15 pm', secs: [
    ['layers', 'Jobs', [['On the floor', '64'], ['Due this week', '11']]],
    ['scale', 'Metal', [['Issued to karigars today', '1,412 g fine'], ['Returned and weighed', '1,396 g fine']]],
    ['receipt', 'Closure', [['Wastage against the norm', '2 jobs flagged'], ['Dispatched and invoiced', '3 orders']]]] },
  'solutions/oem-manufacturers': { title: 'The workshop · today, 7:15 pm', secs: [
    ['layers', 'Client jobs', [['On the floor', '38 jobs · 6 buyers'], ['Due this week', '9']]],
    ['scale', 'Client metal', [['Held, by buyer', '9.2 kg fine · 4 buyers'], ['Issued today', '860 g fine']]],
    ['receipt', 'Closure', [['Wastage against the norm', '1 job flagged'], ['Job-work invoices raised', '4']]]] },
  'solutions/casting-units': { title: 'The casting floor · today, 7:00 pm', secs: [
    ['layers', 'Flasks', [['Cast today', '14'], ['Trees in progress', '22']]],
    ['scale', 'Metal', [['Metal in', '3,200 g'], ['Castings and returns out', '3,168 g']]],
    ['receipt', 'Closure', [['Loss against the norm', '1 flask flagged'], ['Job-work invoices raised', '5']]]] },
  'solutions/cad-services': { title: 'The studio · today, 7:00 pm', secs: [
    ['layers', 'Designs', [['In revision', '12'], ['Approved today', '3']]],
    ['truck', 'Handoff', [['Handed to production', '3'], ['Waiting on the client', '4']]],
    ['receipt', 'Billing', [['Quotations sent', '2'], ['Invoices raised', '1']]]] },
  'solutions/export-houses': { title: 'The export desk · today, 7:30 pm', secs: [
    ['store', 'Orders', [['Open buyer orders', '17'], ['Last order', '240 pieces · in the buyer’s currency']]],
    ['layers', 'Production', [['Jobs on the floor', '52'], ['Ready to dispatch', '2 orders']]],
    ['receipt', 'Closure', [['Dispatched and invoiced today', '1 order'], ['Party ledgers', 'Up to date']]]] },
  'solutions/b2b-jewellery': { title: 'The trade desk · today, 7:30 pm', secs: [
    ['box', 'Memo', [['Out on memo', '312 pieces · 9 buyers'], ['Due back this week', '3 memos']]],
    ['wallet', 'Party ledger', [['Buyers with a balance', '14'], ['Receipts today', '4']]],
    close(['Invoices raised from memos', '6'], ['Posted to the books', '6 invoices · 4 receipts'])] },
  'solutions/gold-wholesale': { title: 'The trade desk · today, 7:30 pm', secs: [
    ['store', 'Orders', [['Orders at today’s rate', '11'], ['Out on memo', '5.4 kg · 8 buyers']]],
    ['wallet', 'Party ledger', [['Balances, in grams and rupees', '21 buyers'], ['Receipts today', '6']]],
    close(['Invoices raised', '11'], ['Posted to the books', '11 invoices · 6 receipts'])] },
  'solutions/diamond-wholesale': { title: 'The trading office · today, 7:30 pm', secs: [
    ['gem', 'Stones', [['Certified stones on hand', '1,940'], ['Out on memo', '86 stones · 7 buyers']]],
    ['wallet', 'Party ledger', [['Buyers with a balance', '12'], ['Receipts today', '3']]],
    close(['Invoices raised from memos', '4'], ['Posted to the books', '4 invoices · 3 receipts'])] },
  'solutions/bullion-gold-traders': { title: 'The desk · today, 6:30 pm', secs: [
    ['trend', 'Bookings', [['At the published rate', '23'], ['Last booking', '500 g · rate agreed']]],
    ['layers', 'Bar stock', [['Fine gold on hand', '12.4 kg'], ['Bought from the refiner today', '3 kg']]],
    close(['Receipts against bookings', 'Matched'], ['Party ledgers', 'Balanced tonight'])] },
};
module.exports = { SHOP_DAY };
