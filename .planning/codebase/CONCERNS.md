---
last_mapped_commit: 3ac7ab4c9f1373ebcee3723ee7ab3c28d88b2f03
last_mapped_at: 2026-11-21
---
# Codebase Concerns

**Analysis Date:** 2026-11-21

## Tech Debt

**Compiled Monolithic Bundle:**
- Issue: Core React components, Dexie database logic, and routing live compiled in a single minified bundle `assets/index-CiCrIMMp.js` (~371 KB).
- Files: `assets/index-CiCrIMMp.js`.
- Impact: Patching core layout components requires minified bundle surgery rather than editing original uncompiled JSX source files.
- Fix approach: Maintain separate source files and use Vite build pipeline if full rebuild is ever undertaken; continue modular external script pattern (`neeraj-ppl-plan.js`, `forge-features.js`) for all new functionality.

**Manual Version Query Strings:**
- Issue: Asset cache busting relies on manual query parameter version bumps (`?v=stealth-v19`) across HTML and JS imports.
- Files: `index.html`, `assets/neeraj-ppl-plan.js`, `assets/forge-features.js`, `assets/profiles-manager.js`.
- Impact: Missing a version string update on an import can lead to stale browser cache issues for returning users.
- Fix approach: Automate asset version stamping via build script or Service Worker cache revamping.

## Known Bugs

**No active bugs detected.** Recent fixes resolved:
- Overlapping `"Guide"` button on routine cards (resolved in `stealth-v19`).
- Desktop mouse wheel scrolling lockup (resolved in `stealth-v16`).
- Test workout data sync resurrection (resolved in `stealth-v18`).

## Security Considerations

**Supabase Publishable Key Exposure:**
- Risk: Supabase public anon key is embedded in client code (`assets/supabase-client.js`).
- Files: `assets/supabase-client.js`.
- Current mitigation: Standard practice for Supabase public clients; Supabase Row Level Security (RLS) protects tables.
- Recommendations: Ensure Supabase RLS policies strictly enforce user data partitioning so anonymous callers cannot query other profiles.

**LocalStorage Tampering:**
- Risk: Active profile ID is stored in unencrypted `localStorage` (`forge_active_profile_id`).
- Files: `assets/profiles-manager.js`.
- Current mitigation: Regex validation prevents non-UUID inputs from being loaded.
- Recommendations: None required for personal single-user tracking.

## Performance Bottlenecks

**Full-History Recomputation:**
- Problem: PR calculations and volume charts scan historical workouts in IndexedDB.
- Files: `assets/index-CiCrIMMp.js`, `assets/forge-features.js`.
- Cause: As workouts accumulate into hundreds of sessions, scanning all rows in-memory on every dashboard mount could take >50ms.
- Improvement path: Cache aggregate lifetime statistics (total volume, PR maps) in a dedicated Dexie `meta` record.

## Fragile Areas

**CSS Cascade and Touch Action Overrides:**
- Files: `assets/mobile-enhancements.css`, `assets/ppl-groups.css`.
- Why fragile: Applying global `touch-action` or `overflow` properties can inadvertently disable trackpad or mouse wheel scrolling on desktop/laptop browsers.
- Safe modification: Always scope mobile-specific touch behaviors inside `@media (pointer: coarse)` media queries.

**Dexie Transaction Boundaries:**
- Files: `assets/index-CiCrIMMp.js`, `assets/neeraj-ppl-plan.js`.
- Why fragile: Calling database operations on tables not declared in `db.transaction('rw', ...)` throws fatal Dexie errors.
- Safe modification: Ensure all referenced stores are declared in the transaction or run operations in individual auto-committed promises.

## Scaling Limits

**Supabase Free Tier Request Limits:**
- Current capacity: 500,000 monthly API requests on Supabase free plan.
- Limit: If sync runs on every set or input keystroke, quota could be exhausted.
- Scaling path: Batch synchronization to trigger only on session completion (`"Finish Workout"`), consuming <30 requests per month.

## Dependencies at Risk

**Pre-bundled Third-Party Modules:**
- Risk: Upstream libraries (Dexie, React, Workbox) are baked into compiled assets.
- Impact: Upgrading core library versions requires regenerating the base Vite bundle.
- Migration plan: Keep custom features strictly modular so they remain portable.

## Missing Critical Features

**Screen Wake Lock API:**
- Problem: Phone screen turns off during rest intervals between workout sets.
- Blocks: Friction-free lifting experience without unlocking phone repeatedly.
- Priority: High.

**Previous Performance Ghost Text:**
- Problem: User must remember or navigate back to history to recall previous weight/reps for an exercise.
- Blocks: Instant progressive overload guidance.
- Priority: High.

## Test Coverage Gaps

**Offline Service Worker Edge Cases:**
- What's not tested: Mid-workout network disconnections transitioning to reconnects during active data synchronization.
- Files: `sw.js`, `assets/supabase-client.js`.
- Risk: Minor sync delay until next app restart or online window event.
- Priority: Medium.

---

*Concerns audit: 2026-11-21*
