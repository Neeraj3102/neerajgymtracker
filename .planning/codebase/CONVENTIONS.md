---
last_mapped_commit: 3ac7ab4c9f1373ebcee3723ee7ab3c28d88b2f03
last_mapped_at: 2026-11-21
---
# Coding Conventions

**Analysis Date:** 2026-11-21

## Naming Patterns

**Files:**
- Kebab-case for modular feature scripts: `neeraj-ppl-plan.js`, `forge-features.js`, `profiles-manager.js`, `supabase-client.js`.
- Kebab-case for modular stylesheets: `mobile-enhancements.css`, `ppl-groups.css`, `routine-scroll.css`.

**Functions:**
- camelCase for helper and business logic functions: `isNeerajProfile`, `seedNeerajPplPlan`, `getProtocolForRoutine`, `syncAllWithSupabase`, `playTimerDoneSound`.
- PascalCase for React components: `NeerajPlanBanner`, `NeerajProtocolModal`, `RestTimer`, `ProfileSwitcher`, `StreakBadge`.

**Variables:**
- camelCase for mutable and local variables: `activeProfileId`, `isStarting`, `secondsLeft`, `cleanPayload`.
- UPPER_SNAKE_CASE for master constants, IDs, and configuration objects: `DEFAULT_PROFILE_ID`, `NEERAJ_PPL_ROUTINES`, `DAY_PROTOCOLS`, `APT_CLINICAL_GUIDE`, `SUPABASE_CONFIG`.

**Types:**
- Plain JavaScript with explicit runtime validation and default fallbacks (e.g., `str.slice(0, 100)`, `Number(val) || 0`).

## Code Style

**Formatting:**
- 2-space indentation across all ES modules and CSS files.
- Double quotes for HTML/JSX/JSON strings; double or single quotes consistently within specific modules.
- Semicolons used consistently throughout JavaScript modules.

**Linting:**
- Strict syntax compliance with ES2022+ standards. Zero unhandled promise rejections.

## Import Organization

**Order:**
1. Core vendor and React imports: `import { r as h } from "./index-CiCrIMMp.js?v=stealth-v19";`
2. Sibling feature utilities and managers: `import { ... } from "./profiles-manager.js";`
3. Local constants and helper utilities.

**Path Aliases:**
- Explicit relative paths (`./`) with version query parameter cache busters (`?v=stealth-v19`) to prevent stale browser cache lockups.

## Error Handling

**Patterns:**
- **Defensive Try/Catch:** Wrap all `localStorage`, Web Audio API, Web Vibration API, and network `fetch` calls in `try { ... } catch (_) {}` blocks to prevent browser permission restrictions from breaking the application.
- **Fail-Safe Fallbacks:** If an external service or browser capability fails, return a safe fallback value (e.g., `return DEFAULT_PROFILE_ID` when profile parsing fails).

## Logging

**Framework:**
- Native browser `console` wrapped with environment guards: `logClientError()` in `assets/supabase-client.js`.

**Patterns:**
- Verbose internal errors are only output when `window.location.hostname === "localhost"`.
- Production logs output sanitized, generic notifications (`[FORGE] Sync notice`) to prevent leaking internal database schemas or credentials.

## Comments

**When to Comment:**
- Header comment blocks demarcating major feature sections (e.g., `/* F1: REST TIMER COMPONENT */`).
- Explaining subtle browser workarounds (e.g., explaining why `overflow-x: clip` is used instead of `overflow-x: hidden`).
- Biomechanical and clinical explanations for exercise form cues in `assets/neeraj-ppl-plan.js`.

**JSDoc/TSDoc:**
- Used on public utility functions to document parameters, return contracts, and profile scoping constraints (e.g., `@param {string} profileId`).

## Function Design

**Size:**
- Single-responsibility functions kept compact (typically 15–50 lines). Complex modal dialogs broken into smaller sub-renderers or memoized tabs.

**Parameters:**
- Destructured props with sensible default values for React components (e.g., `{ active = false, defaultDuration = 90 }`).

**Return Values:**
- Consistent shapes: either React elements (`h.createElement(...)`), primitive booleans (`true`/`false`), or sanitized object payloads.

## Module Design

**Exports:**
- Named exports for all functions, constants, and components to enable explicit, traceable imports.
- Zero default exports in modular feature scripts.

**Barrel Files:**
- Not used. Direct file imports preferred for granular bundling and cache invalidation.

---

*Convention analysis: 2026-11-21*
