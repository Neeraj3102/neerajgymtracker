---
last_mapped_commit: 3ac7ab4c9f1373ebcee3723ee7ab3c28d88b2f03
last_mapped_at: 2026-11-21
---
# External Integrations

**Analysis Date:** 2026-11-21

## APIs & External Services

**Backend-as-a-Service (BaaS):**
- Supabase Cloud (`https://iidpyplczxtjqfnaxpvi.supabase.co`) - Cloud synchronization for user workout history, routines, and custom exercises.
  - SDK/Client: Direct hardened REST client implemented in `assets/supabase-client.js`.
  - Auth / Token: `apikey` and `Authorization: Bearer <SUPABASE_KEY>` request headers configured in `assets/supabase-client.js`.
  - Profile Scoping: Multi-tenant user segmentation via `X-Profile-ID` header and `user_id` column filters.

## Data Storage

**Databases:**
- IndexedDB (Client Local):
  - Provider: Browser native IndexedDB managed via Dexie.js (`Pe` in `assets/index-CiCrIMMp.js`).
  - Stores: `exercises`, `routines`, `workouts`, `meta`.
  - Mode: Offline-first with zero-network requirements during live lifting.
- PostgreSQL (Remote Cloud):
  - Provider: Supabase Managed Postgres.
  - Tables: `exercises`, `routines`, `workouts`.
  - Connection: REST API (`/rest/v1/workouts`, `/rest/v1/routines`, `/rest/v1/exercises`).
  - Sync Strategy: Bidirectional merge with timestamp-based conflict resolution and local IndexedDB precedence.

**File Storage:**
- Local filesystem / static assets only. No cloud object storage buckets (S3 / Supabase Storage) required.

**Caching:**
- Service Worker CacheStorage:
  - Cache manager: `sw.js` and `workbox-9c191d2f.js`.
  - Strategy: Stale-while-revalidate for static assets, navigation route handler for `index.html`.
  - Browser HTTP Cache: Immutable 1-year cache for versioned assets (`assets/*`) configured in `vercel.json`.

## Authentication & Identity

**Auth Provider:**
- Custom Local & Token-Based Multi-Profile Identifier:
  - Implementation: Profiles managed in `assets/profiles-manager.js` storing active profile UUID in `localStorage` (`forge_active_profile_id`).
  - Default Active Profile: Neeraj (`11111111-1111-4111-a111-111111111111`).
  - Profile Isolation: Handled by `isNeerajProfile` checks in `assets/neeraj-ppl-plan.js` ensuring PPL routines and APT protocols are scoped strictly to the authorized profile.

## Monitoring & Observability

**Error Tracking:**
- Console error suppression and security sanitization implemented in `logClientError()` in `assets/supabase-client.js`. Suppresses internal database stack traces in production.

**Logs:**
- Browser console logging (`[FORGE]` log namespace) enabled in localhost development environments, muted in production.

## CI/CD & Deployment

**Hosting:**
- Vercel (`https://neerajgymtracker.vercel.app`).
  - Configuration: `vercel.json` enforcing HTTPS, strict security headers (HSTS, CSP-ready, X-Frame-Options DENY), and SPA URL rewriting.

**CI Pipeline:**
- GitHub Continuous Deployment to Vercel production triggered automatically on push to `main` branch.

## Environment Configuration

**Required env vars:**
- `SUPABASE_URL` - Supabase project endpoint.
- `SUPABASE_KEY` - Supabase anon/publishable key.

**Secrets location:**
- Stored as safe client-side publishable variables in `assets/supabase-client.js` with optional runtime overrides via `window.__FORGE_ENV__`.

## Webhooks & Callbacks

**Incoming:**
- None (Fully client-driven application).

**Outgoing:**
- None.

---

*Integration audit: 2026-11-21*
