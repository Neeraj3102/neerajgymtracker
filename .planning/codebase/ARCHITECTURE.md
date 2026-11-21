---
last_mapped_commit: 3ac7ab4c9f1373ebcee3723ee7ab3c28d88b2f03
last_mapped_at: 2026-11-21
---
<!-- refreshed: 2026-11-21 -->
# Architecture

**Analysis Date:** 2026-11-21

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                   Presentation & User Interface             │
│   `index.html`  /  `assets/index-CiCrIMMp.js` (React DOM)   │
├──────────────────┬──────────────────┬───────────────────────┤
│   Neeraj PPL     │  Forge Features  │   Profiles Manager    │
│ `neeraj-ppl-plan`│ `forge-features` │  `profiles-manager`   │
└────────┬─────────┴────────┬─────────┴──────────┬────────────┘
         │                  │                     │
         ▼                  ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                 Client State & Local Storage                │
│       Dexie.js (IndexedDB) & LocalStorage Profile Store     │
│             `Pe` in `assets/index-CiCrIMMp.js`              │
└─────────────────────────────────────────────────────────────┘
         │                                       │
         ▼                                       ▼
┌───────────────────────────────┐ ┌───────────────────────────┐
│     Offline Service Worker    │ │    Cloud Sync Gateway     │
│   `sw.js` / `workbox-*.js`    │ │ `assets/supabase-client`  │
└───────────────────────────────┘ └─────────────┬─────────────┘
                                                ▼
                                  ┌───────────────────────────┐
                                  │   Supabase Postgres DB    │
                                  │   `/rest/v1/{table}`      │
                                  └───────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| App Shell & Routing | Mounts React root, registers service worker, manages SPA views | `index.html`, `assets/index-CiCrIMMp.js` |
| Neeraj PPL Engine | Supplies 6-day PPL routine catalog, day-specific pre/post protocols, and APT guides | `assets/neeraj-ppl-plan.js` |
| Forge Enhancements | Manages Rest Timer, 1RM calculator, body weight tracker, and volume metrics | `assets/forge-features.js` |
| Profile Switcher | Handles multi-user isolation, active profile switching, and scoped routine visibility | `assets/profiles-manager.js` |
| Cloud Sync Engine | Hardened REST client synchronizing local Dexie DB with Supabase cloud database | `assets/supabase-client.js` |
| Offline Cache Worker | Intercepts asset requests and navigation routes for complete offline gym support | `sw.js`, `workbox-9c191d2f.js` |

## Pattern Overview

**Overall:** Offline-First Modular Single Page Application (SPA) with Local-First State and Asynchronous Cloud Synchronization.

**Key Characteristics:**
- **Zero-Latency In-Gym Operations:** All reads, writes, set logs, and routine queries hit browser IndexedDB directly; no network connectivity is required during workouts.
- **Pluggable Feature Modules:** Advanced features (`neeraj-ppl-plan.js`, `forge-features.js`, `profiles-manager.js`) import React hooks directly from the core bundle without mutating the foundational database schemas.
- **Graceful Network Degradation:** If network connectivity drops or Supabase rate-limits requests, sync failures log benign notices and retry on window `online` events without crashing the UI.

## Layers

**Presentation Layer:**
- Purpose: Render workout tracking cards, routine lists, modal protocols, and progress charts.
- Location: `assets/index-CiCrIMMp.js`, `assets/neeraj-ppl-plan.js`, `assets/forge-features.js`.
- Contains: React functional components, custom hooks, inline SVG icons, and interactive modal dialogs.
- Depends on: Dexie local store (`Pe`) and DOM events.
- Used by: End users interacting with mobile or desktop browsers.

**Data & Synchronization Layer:**
- Purpose: Manage local persistence and replicate state to cloud database.
- Location: `assets/index-CiCrIMMp.js` (Dexie tables) and `assets/supabase-client.js`.
- Contains: REST sync queries, payload sanitizers, type bounding, and offline queue logic.
- Depends on: Browser IndexedDB API and `fetch` HTTP client.
- Used by: Workout tracker, routine editor, and profile manager.

**Service Worker Caching Layer:**
- Purpose: Cache app assets for instant offline boots.
- Location: `sw.js`, `workbox-9c191d2f.js`.
- Contains: CacheStorage cleanup and navigation route fallback.
- Depends on: Browser ServiceWorker API.

## Data Flow

### Primary Request Path (Workout Logging Flow)

1. **User interaction:** User checks off a completed exercise set or taps `"Finish Workout"` in `assets/index-CiCrIMMp.js`.
2. **Local Commit:** Set data is validated and immediately committed to IndexedDB table `workouts` via Dexie (`Pe.workouts.put()`).
3. **Reactive Re-render:** Live query hooks update dashboard statistics (volume, sets, PR badges) with zero network latency.
4. **Cloud Replicate:** `syncAllWithSupabase()` in `assets/supabase-client.js` sanitizes and sends an upsert request to `/rest/v1/workouts` with `Prefer: resolution=merge-duplicates`.

### Secondary Flow (PPL Routine Seeding & Protocol Display)

1. **App Boot:** React app mounts; `seedNeerajPplPlan(Pe)` in `assets/neeraj-ppl-plan.js` is triggered.
2. **Profile Check:** `isNeerajProfile(activeProfileId)` verifies the active user is `NEERAJ`.
3. **Database Upsert:** The 7 customized PPL routines and 27 exercises are seeded into IndexedDB `routines` and `exercises`.
4. **Modal Activation:** User taps `"Pre-Workout"`, `"Post-Workout"`, or `"Full Guide"` pills; `NeerajProtocolModal` opens with day-specific protocols and interactive checkboxes.

**State Management:**
- Application state is shared via React component hierarchy and reactive Dexie LiveQueries. User preferences and profile tokens reside in `localStorage`.

## Key Abstractions

**Routine & Protocol Definition:**
- Purpose: Defines workout templates with day numbers, muscle group targets, and clinical corrective protocols.
- Examples: `NEERAJ_PPL_ROUTINES`, `DAY_PROTOCOLS`, and `APT_CLINICAL_GUIDE` in `assets/neeraj-ppl-plan.js`.
- Pattern: Immutable configuration objects with helper accessor functions (`getProtocolForRoutine`).

**Cloud Sync Client:**
- Purpose: Abstract Supabase REST endpoints behind a unified sync function.
- Examples: `syncAllWithSupabase()`, `pushLocalWorkoutsToCloud()` in `assets/supabase-client.js`.
- Pattern: Module singleton with request header factory and input sanitization guards.

## Entry Points

**Web Entry:**
- Location: `index.html`.
- Triggers: Browser HTTP request to domain root.
- Responsibilities: Load fonts, styles, viewport meta, registers service worker, and boots modular script `assets/index-CiCrIMMp.js`.

**PWA Worker:**
- Location: `sw.js`.
- Triggers: Browser ServiceWorker registration.
- Responsibilities: Cache static assets and route navigation requests to `index.html`.

## Architectural Constraints

- **Single-Threaded Browser Environment:** Heavy computations or database reads must remain asynchronous to avoid blocking frame rendering (60fps mobile interaction).
- **Offline Reliability:** No core app functionality may depend strictly on a synchronous 200 OK response from Supabase.
- **Profile Scoping:** Custom PPL routines and personal modifications must remain strictly partitioned to profile `NEERAJ`.

## Anti-Patterns

### Modifying Schema Inside Restricted Dexie Transactions

**What happens:** Attempting to call `db.workouts.clear()` inside a Dexie transaction that only declared `exercises` and `routines`.
**Why it's wrong:** Dexie throws an uncaught error: `Table workouts not part of transaction`, causing boot logic to abort.
**Do this instead:** Run multi-table maintenance operations outside the transaction block or explicitly include all affected tables in the transaction signature (`assets/index-CiCrIMMp.js`).

### Echo-Syncing Deleted Records

**What happens:** Deleting records on Supabase without first purging local IndexedDB causes the client sync engine to detect missing cloud records and push the local copies back up.
**Why it's wrong:** Deleted test or mock data gets resurrected indefinitely.
**Do this instead:** Purge local Dexie tables before triggering cloud sync, as implemented in `assets/supabase-client.js`.

## Error Handling

**Strategy:** Fail-soft with resilient defaults. All cloud sync, local storage access, and audio/vibration APIs are enclosed in `try/catch` wrappers.

**Patterns:**
- Silent fallback to offline mode if Supabase fails.
- Safe JSON parse fallbacks in `assets/profiles-manager.js`.

## Cross-Cutting Concerns

**Logging:** Sanitized logger `logClientError()` in `assets/supabase-client.js` prevents internal credential leakage.
**Validation:** `sanitizeText()` and length bounding applied to all cloud payloads.
**Authentication:** Header-based profile routing via `X-Profile-ID`.

---

*Architecture analysis: 2026-11-21*
