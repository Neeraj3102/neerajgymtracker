---
last_mapped_commit: 3ac7ab4c9f1373ebcee3723ee7ab3c28d88b2f03
last_mapped_at: 2026-11-21
---
# Technology Stack

**Analysis Date:** 2026-11-21

## Languages

**Primary:**
- JavaScript (ES2022+ / Native ES Modules) - Core application logic, React components, and client-side modules in `assets/index-CiCrIMMp.js`, `assets/neeraj-ppl-plan.js`, `assets/supabase-client.js`, `assets/forge-features.js`, and `assets/profiles-manager.js`.

**Secondary:**
- HTML5 - Shell entry point and PWA meta tags in `index.html`.
- CSS3 (Vanilla CSS with CSS Custom Properties) - Styling and animations in `assets/index-XoPE8YWT.css`, `assets/mobile-enhancements.css`, `assets/ppl-groups.css`, and `assets/routine-scroll.css`.
- JSON - Configuration and manifests in `manifest.webmanifest` and `vercel.json`.

## Runtime

**Environment:**
- Browser / Modern Chromium, WebKit & Gecko (Client-Side Single Page Application).
- Node.js (v24+ used for local tooling and GSD automation scripts).

**Package Manager:**
- Pre-bundled / Standalone production distribution — runtime dependencies are loaded as modular vendor bundles directly via `<script type="module">`.
- Lockfile: `missing` (pre-bundled production deployment artifact repository).

## Frameworks

**Core:**
- React (v18.x bundled into `assets/index-CiCrIMMp.js`) - Component rendering, UI hooks (`useState`, `useEffect`, `useCallback`, `useMemo`), and virtual DOM.
- Dexie.js (v3.x / v4.x bundled into `assets/index-CiCrIMMp.js`) - Reactive client-side wrapper around IndexedDB for local offline-first storage (`exercises`, `routines`, `workouts`, `meta`).

**Testing:**
- Browser-based automated E2E & Console Audit testing via Antigravity Browser Subagent and automated QA scripts.
- Unit Testing: `Not detected` (Standalone production distribution).

**Build/Dev:**
- Vite (Original production bundler outputting hashed asset bundles `index-CiCrIMMp.js` and `index-XoPE8YWT.css`).
- Workbox (v6.x) - Service worker caching and PWA offline routing in `sw.js` and `workbox-9c191d2f.js`.

## Key Dependencies

**Critical:**
- Dexie.js (bundled in `assets/index-CiCrIMMp.js`) - Offline database providing zero-latency reads/writes for workouts and routines.
- Supabase Client (`assets/supabase-client.js`) - REST-based cloud backup and multi-device synchronization engine.
- Workbox Window (`assets/workbox-window.prod.es5-BBnX5xw4.js`) - Manages service worker lifecycle, updates, and navigation routing.

**Infrastructure:**
- Vercel Edge Network (`vercel.json`) - Global CDN static asset hosting, cache headers, and SPA rewrite engine.

## Configuration

**Environment:**
- Global window configuration injection: `window.__FORGE_ENV__` in `assets/supabase-client.js` with fallback constants.
- Local Storage keys:
  - `forge_active_profile_id` (`assets/profiles-manager.js`)
  - `forge_user_profiles` (`assets/profiles-manager.js`)
  - `forge_purged_test_workouts_v3` (`assets/supabase-client.js`)

**Build:**
- `vercel.json` - SPA rewrite rules (`/(.*)` -> `/index.html`), caching policies (`Cache-Control: public, max-age=31536000, immutable`), and security headers.
- `manifest.webmanifest` - PWA installation metadata, theme color (`#0b0d0c`), display mode (`standalone`), and icons.

## Platform Requirements

**Development:**
- Modern web browser with ES module support or any lightweight static HTTP server (e.g., `npx serve`, Vite, or Python `http.server`).

**Production:**
- Vercel Static Hosting (`https://neerajgymtracker.vercel.app`) with HTTPS and PWA Service Worker support.

---

*Stack analysis: 2026-11-21*
