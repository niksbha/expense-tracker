# Changelog

## 0.14.3 — 2026-11-26
- Fixed: two categories created close together could get the same id and double count totals

## 0.14.2 — 2026-11-24
- Update alert with a Reload button when a newer version is published

## 0.14.1 — 2026-11-24
- Home: removed the Recent list (same data as History)

## 0.14.0 — 2026-11-24
- Add screen: amount pinned at top, compact keypad, one-row categories ordered by use, type-to-search merchant, Today/Yesterday buttons, Paste order moved to header, readable disabled Save
- Notifications: bar at top plus bell with list; reminders, month recap, backup reminder, milestones, app updates; suggested transactions with Add / Ignore (paste a bank SMS to create one)
- One-time in-app migration: Food split into Groceries / Eating out, merchant channels filled
- Deleting a category lets you choose where its expenses go

## 0.13.0 — 2026-11-23
- Fix (sync): profile settings now merge field by field, so a device with older data can no longer overwrite newer merchants, categories or channels
- Home: donut legend shows full category names; daily chart stops at today; daily average in whole rupees
- Compare: averages and pace in whole rupees; categories with no spending hidden; clearer wording
- History filters: Category label added

## 0.12.0 — 2026-11-23
- Import expenses from CSV (Profile): file picker or paste, preview, duplicate skipping, new categories/merchants/payments/channels created, one-tap Undo

## 0.11.1 — 2026-11-23
- Fix: order-message reader no longer mistakes words ending in "rs" (hours, orders) followed by a number for an amount
- Fix: merging two merchants keeps the target's category and channel unless you change them

## 0.11.0 — 2026-11-23
- Food split into Groceries and Eating out (defaults)
- Channel on each merchant (Delivery app, Offline store, Mart, Online store); shopping-app presets set it
- Compare: Where you buy (channel share per category, last 6 months); History: channel filter; CSV has Channel column

## 0.10.0 — 2026-11-23
- Recently deleted screen (Profile): restore or delete forever; deleted expenses auto-removed after 30 days

## 0.9.0 — 2026-11-22
- Popular shopping apps (Blinkit, Instamart, BigBasket, Zepto, Myntra, Amazon, Flipkart and more) one-tap add in Merchants, with categories
- Paste order message in Add sheet: reads amount, merchant and date from order SMS, email or bank alert

## 0.8.0 — 2026-11-15 (web prototype, artifact v8)
- Merchants linked to categories; manage merchants, payment methods, recurring in Profile
- Merchant memory, undo delete, month-end projection, top merchants and payment split, payment filter
- Recurring expenses; future-date warning
- Compare tab (vs last month and historic average) replaces Budgets
- Simplified History (date in each row; day totals for current month with 2+ expenses)
- Payment method list defaulting to last used; merchant list
## 0.1.0 — first prototype: add/edit/delete, categories, dashboard, CSV, offline-first sync
