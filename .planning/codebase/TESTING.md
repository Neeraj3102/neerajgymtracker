---
last_mapped_commit: e78bd55c9db02ccfa1bf8c23a8a451aa35182fee
last_mapped_at: 2026-11-21
---
# Testing Patterns

**Analysis Date:** 2026-11-21

## Test Framework

**Runner:**
- Automated browser-driven validation using Antigravity Browser Subagent and `/qa-audit` protocol.
- Command-line diagnostic scripts via PowerShell and Node.js.

**Assertion Library:**
- Native JavaScript runtime assertions and HTTP status verification.

**Run Commands:**
```bash
# Verify local file syntax and parse validity
node -c assets/supabase-client.js
node -c assets/neeraj-ppl-plan.js
node -c assets/forge-features.js
node -c assets/profiles-manager.js

# Trigger live browser QA audit across viewports
/qa-audit
```

## Test File Organization

**Location:**
- Verification transcripts and screenshot artifacts stored in the Antigravity conversation brain directory:
  `C:/Users/Neeraj/.gemini/antigravity/brain/<conversation-id>/browser_evidence/`

**Naming:**
- Visual state captures: `final_step_<step_number>.png`.

**Structure:**
- End-to-end user journey traces: Home dashboard -> Routine list -> Protocol modal -> Workout session -> Finish workout.

## Test Structure

**Suite Organization:**
```javascript
// Browser subagent script pattern for verifying protocol modals and DOM state
async function verifyWorkoutStartFlow(page) {
  // 1. Navigate to deployment
  await page.goto("https://neerajgymtracker.vercel.app");
  
  // 2. Verify Home dashboard loads with zero uncaught console errors
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  
  // 3. Open routine protocol modal
  const guideBtn = await page.waitForSelector(".routine-protocol-pills button");
  await guideBtn.click();
  
  // 4. Verify accessibility attributes
  const modal = await page.waitForSelector("[role='dialog']");
  const labelledBy = await modal.getAttribute("aria-labelledby");
  console.assert(labelledBy === "protocol-modal-title", "Modal missing aria-labelledby");
}
```

## Mocking

**Framework:**
- Native browser mocks for IndexedDB and LocalStorage in unit test runners.

**Patterns:**
- Mocking network offline state using `navigator.onLine = false` or intercepting window `offline` events to verify offline queuing.

**What to Mock:**
- Network failure conditions, offline connectivity, and push notifications.

**What NOT to Mock:**
- Dexie schema migrations, IndexedDB transactions, and CSS rendering across mobile breakpoints.

## Fixtures and Factories

**Test Data:**
- Seed data generated from `NEERAJ_PPL_ROUTINES` and `NEERAJ_EXERCISES_CATALOG` in `assets/neeraj-ppl-plan.js`.

**Location:**
- Master definitions declared in `assets/neeraj-ppl-plan.js`.

## Coverage

**Requirements:**
- 100% route availability across all 4 standard mobile viewports (320px, 375px, 390px, 430px).
- Zero console exceptions on boot, sync, or modal interaction.

**View Coverage:**
- Generated via `/qa-audit` inspection report and browser subagent console sweeps.

## Test Types

**Unit Tests:**
- JavaScript syntax check (`node -c`) for every modified modular asset.

**Integration Tests:**
- Cloud sync verification against Supabase REST endpoint (`/rest/v1/workouts`).

**E2E Tests:**
- Live browser interaction verifying modal popups, protocol tab switching, rest timer countdown, and workout set logging.

## Common Patterns

**Async Testing:**
```javascript
// Awaiting Dexie operations before verifying UI state
await Pe.transaction("rw", Pe.workouts, async () => {
  await Pe.workouts.clear();
});
```

**Error Testing:**
```javascript
// Verifying fail-safe fallbacks on invalid JSON storage
localStorage.setItem("forge_user_profiles", "invalid-json{{{");
const profiles = loadProfiles();
console.assert(Array.isArray(profiles), "Profiles should fallback to default array");
```

---

*Testing analysis: 2026-11-21*
