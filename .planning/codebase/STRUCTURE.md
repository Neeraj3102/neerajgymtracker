---
last_mapped_commit: 3ac7ab4c9f1373ebcee3723ee7ab3c28d88b2f03
last_mapped_at: 2026-11-21
---
# Codebase Structure

**Analysis Date:** 2026-11-21

## Directory Layout

```
neerajtracker-github/
├── .planning/               # GSD project plans, roadmaps, and codebase mapping
│   └── codebase/            # Machine-readable architectural and convention guides
├── assets/                  # Application runtime bundles, stylesheets, and feature modules
│   ├── forge-features.js    # Rest timer, 1RM modal, bodyweight & metrics components
│   ├── index-CiCrIMMp.js    # Core React SPA bundle (Dexie DB, routing, UI views)
│   ├── index-XoPE8YWT.css   # Core design system and layout styles
│   ├── mobile-enhancements.css # Viewport fixes, touch targets, and modal styling
│   ├── neeraj-ppl-plan.js   # 6-day PPL routine catalog, protocols, and APT guides
│   ├── ppl-groups.css       # Visual styles for routine cards and protocol pills
│   ├── profiles-manager.js  # Profile switcher modal and localStorage persistence
│   ├── ProgressChart-*.js   # Lazy-loaded progress charting component
│   ├── routine-scroll.css   # Scrollbar formatting and layout constraints
│   ├── supabase-client.js   # Hardened REST client for Supabase sync
│   └── workbox-window-*.js  # Workbox window registration helper
├── favicon.svg              # Browser tab favicon
├── icon-192.svg             # PWA app icon (192x192)
├── icon-512.svg             # PWA splash & store icon (512x512)
├── index.html               # Web application entry point and HTML shell
├── manifest.webmanifest     # Progressive Web App manifest
├── og.png                   # OpenGraph social share card
├── README.md                # Repository documentation and deployment instructions
├── sw.js                    # Service Worker script handling offline caching
├── vercel.json              # Vercel deployment configuration & security headers
└── workbox-9c191d2f.js      # Workbox runtime caching engine
```

## Directory Purposes

**`.planning/`:**
- Purpose: Stores GSD state, codebase maps, roadmaps, and verification records.
- Contains: Markdown documentation files and configuration JSON.
- Key files: `.planning/codebase/*.md`.

**`assets/`:**
- Purpose: Contains all client-side JavaScript modules, bundled CSS stylesheets, and feature extensions.
- Contains: Production ES modules and stylesheets loaded by `index.html`.
- Key files: `assets/index-CiCrIMMp.js`, `assets/neeraj-ppl-plan.js`, `assets/supabase-client.js`, `assets/forge-features.js`.

## Key File Locations

**Entry Points:**
- `index.html`: Main HTML shell loading fonts, CSS, and bootstrapping ES modules.
- `sw.js`: PWA Service Worker caching app resources for offline gym usage.

**Configuration:**
- `vercel.json`: Edge routing rewrites, cache control, and HTTP security response headers.
- `manifest.webmanifest`: PWA installation properties, theme colors, and icons.

**Core Logic:**
- `assets/index-CiCrIMMp.js`: React application root, Dexie schema definitions, and base UI routes.
- `assets/neeraj-ppl-plan.js`: PPL routines, exercises, day protocols, and APT clinical guides.
- `assets/supabase-client.js`: Cloud database synchronization and input sanitization.
- `assets/forge-features.js`: Rest timer, 1RM calculator, and body weight logs.
- `assets/profiles-manager.js`: Profile management and switching logic.

**Styling:**
- `assets/index-XoPE8YWT.css`: Base dark theme styling.
- `assets/mobile-enhancements.css`: Ergonomic mobile touch targets, dialog accessibility, and scroll overrides.

## Naming Conventions

**Files:**
- Feature scripts: kebab-case (`neeraj-ppl-plan.js`, `forge-features.js`, `profiles-manager.js`, `supabase-client.js`).
- Bundler artifacts: hash-suffixed kebab-case (`index-CiCrIMMp.js`, `index-XoPE8YWT.css`).
- Stylesheets: kebab-case (`mobile-enhancements.css`, `ppl-groups.css`, `routine-scroll.css`).

**Directories:**
- Lowercase / kebab-case (`assets`, `.planning`, `codebase`).

## Where to Add New Code

**New Feature (e.g., Screen Wake Lock or Barbell Plate Calculator):**
- Primary code: Implement as an exported component or helper function in `assets/forge-features.js` (or a new dedicated module in `assets/`).
- Mount point: Import and mount inside the active workout view or header within `assets/index-CiCrIMMp.js` or via event listener in `assets/forge-features.js`.

**New Exercise or Workout Routine:**
- Add routine definition to `NEERAJ_PPL_ROUTINES` in `assets/neeraj-ppl-plan.js`.
- Add catalog entries to `NEERAJ_EXERCISES_CATALOG` in `assets/neeraj-ppl-plan.js`.

**New Corrective Protocol or Guide:**
- Add warm-up/cool-down steps to `DAY_PROTOCOLS` in `assets/neeraj-ppl-plan.js`.
- Add clinical corrective cues to `APT_CLINICAL_GUIDE` in `assets/neeraj-ppl-plan.js`.

**Styling & UI Polish:**
- Add responsive overrides to `assets/mobile-enhancements.css` with cache-busting query parameter updates in `index.html`.

## Special Directories

**`.planning/`:**
- Purpose: Internal agentic engineering documentation and GSD system files.
- Generated: Semi-automated by GSD workflows.
- Committed: Yes.

---

*Structure analysis: 2026-11-21*
