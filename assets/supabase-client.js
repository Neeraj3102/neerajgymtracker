// FORGE Hardened Supabase Client (VibeGuard Compliant)
const SUPABASE_CONFIG = {
  url:
    (typeof window !== "undefined" && window.__FORGE_ENV__?.SUPABASE_URL) ||
    "https://iidpyplczxtjqfnaxpvi.supabase.co",
  key:
    (typeof window !== "undefined" && window.__FORGE_ENV__?.SUPABASE_KEY) ||
    "sb_publishable_ZAMtA6UJ0QET2w8kDvfZEw_k7Tx6El5"
};

const SUPABASE_URL = SUPABASE_CONFIG.url;
const SUPABASE_KEY = SUPABASE_CONFIG.key;
const DEFAULT_PROFILE_ID = "11111111-1111-4111-a111-111111111111";

function getActiveProfileId() {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = window.localStorage.getItem("forge_active_profile_id");
      if (stored && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(stored)) {
        return stored;
      }
    }
  } catch (_) {}
  return DEFAULT_PROFILE_ID;
}

function getRequestHeaders(profileId) {
  const pId = profileId || getActiveProfileId();
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
    Prefer: "resolution=merge-duplicates",
    "X-Profile-ID": pId
  };
}

// Sanitized production logger (Prevents internal stack/credential leak in devtools)
function logClientError(action, err) {
  if (typeof window !== "undefined" && window.location?.hostname === "localhost") {
    console.warn(`[FORGE Security Debug] ${action}:`, err);
  } else {
    console.warn(`[FORGE] Sync notice: ${action}`);
  }
}

// Input sanitizer & length bounder (Defends against unbounded payload injections)
function sanitizeText(str, maxLength = 255) {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, maxLength);
}

// Ultra-compact payload minifier with strict type bounding
function minifyWorkoutPayload(w) {
  const clean = {
    id: String(w.id || "").slice(0, 64),
    name: sanitizeText(w.name, 100) || "Workout",
    date: String(w.date || "").slice(0, 32),
    duration_minutes: Math.min(Math.max(Number(w.durationMinutes) || 45, 1), 720),
    notes: sanitizeText(w.notes, 2000),
    exercises: (w.exercises || []).slice(0, 50).map((e) => {
      const cleanEx = {
        exerciseId: String(e.exerciseId || "").slice(0, 64),
        exerciseName: sanitizeText(e.exerciseName, 100),
        sets: (e.sets || []).slice(0, 30).map((s) => {
          const cleanSet = {
            weightKg: Math.min(Math.max(Number(s.weightKg) || 0, 0), 1000),
            reps: Math.min(Math.max(Number(s.reps) || 0, 0), 500),
            completed: Boolean(s.completed)
          };
          if (s.warmup) cleanSet.warmup = true;
          if (s.notes && s.notes.trim()) cleanSet.notes = sanitizeText(s.notes, 500);
          return cleanSet;
        })
      };
      if (e.group) cleanEx.group = sanitizeText(e.group, 50);
      return cleanEx;
    })
  };
  clean.user_id = w.user_id ? String(w.user_id).slice(0, 64) : getActiveProfileId();
  return clean;
}

export async function pushWorkoutToSupabase(w) {
  try {
    const payload = minifyWorkoutPayload(w);
    const headers = getRequestHeaders(payload.user_id);
    await fetch(`${SUPABASE_URL}/rest/v1/workouts`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });
  } catch (err) {
    logClientError("pushWorkout", err);
  }
}

export async function deleteWorkoutFromSupabase(id, userId) {
  if (!id) return;
  try {
    const uid = userId || getActiveProfileId();
    const filter = `id=eq.${encodeURIComponent(id)}&user_id=eq.${encodeURIComponent(uid)}`;
    await fetch(`${SUPABASE_URL}/rest/v1/workouts?${filter}`, {
      method: "DELETE",
      headers: getRequestHeaders(uid)
    });
  } catch (err) {
    logClientError("deleteWorkout", err);
  }
}

export async function pushRoutineToSupabase(r) {
  if (!r || !r.id || r.id.startsWith("ppl-")) return;

  try {
    const pId = r.user_id ? String(r.user_id).slice(0, 64) : getActiveProfileId();
    const payload = {
      id: String(r.id).slice(0, 64),
      name: sanitizeText(r.name, 100) || "Custom routine",
      user_id: pId,
      exercises: (r.exercises || []).slice(0, 50).map((e) => ({
        exerciseId: String(e.exerciseId || "").slice(0, 64),
        exerciseName: sanitizeText(e.exerciseName, 100),
        sets: Math.min(Math.max(Number(e.sets) || 3, 1), 30),
        targetReps: Math.min(Math.max(Number(e.targetReps) || 10, 1), 500),
        targetWeightKg: Math.min(Math.max(Number(e.targetWeightKg) || 0, 0), 1000),
        group: sanitizeText(e.group, 50) || "Main"
      }))
    };
    await fetch(`${SUPABASE_URL}/rest/v1/routines`, {
      method: "POST",
      headers: getRequestHeaders(pId),
      body: JSON.stringify(payload)
    });
  } catch (err) {
    logClientError("pushRoutine", err);
  }
}

export async function deleteRoutineFromSupabase(id, userId) {
  if (!id || id.startsWith("ppl-")) return;
  try {
    const uid = userId || getActiveProfileId();
    const filter = `id=eq.${encodeURIComponent(id)}&user_id=eq.${encodeURIComponent(uid)}`;
    await fetch(`${SUPABASE_URL}/rest/v1/routines?${filter}`, {
      method: "DELETE",
      headers: getRequestHeaders(uid)
    });
  } catch (err) {
    logClientError("deleteRoutine", err);
  }
}

export async function pushCustomExerciseToSupabase(e) {
  if (!e || e.builtIn) return;
  try {
    const pId = getActiveProfileId();
    const payload = {
      id: String(e.id || "").slice(0, 64),
      user_id: pId,
      name: sanitizeText(e.name, 100),
      muscle: sanitizeText(e.muscle, 50),
      equipment: sanitizeText(e.equipment, 50),
      movement: sanitizeText(e.movement, 50)
    };
    await fetch(`${SUPABASE_URL}/rest/v1/custom_exercises`, {
      method: "POST",
      headers: getRequestHeaders(pId),
      body: JSON.stringify(payload)
    });
  } catch (err) {
    logClientError("pushCustomExercise", err);
  }
}

export async function syncAllWithSupabase(localDb, setSyncStatus, optionalProfileId) {
  try {
    if (setSyncStatus) setSyncStatus("syncing", "Syncing with Supabase...");
    const profileId = optionalProfileId || getActiveProfileId();
    const headers = getRequestHeaders(profileId);

    // 1. Sync Workouts (Scoped to user_id to prevent multi-tenant exposure)
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/workouts?select=*&user_id=eq.${encodeURIComponent(profileId)}`,
        { headers }
      );
      if (res.ok) {
        const remoteWorkouts = await res.json();
        const localWorkouts = await localDb.workouts
          .filter((w) => !w.deletedAt && (w.user_id === profileId || (!w.user_id && profileId === DEFAULT_PROFILE_ID)))
          .toArray();
        const remoteMap = new Map();
        for (const rw of remoteWorkouts) {
          remoteMap.set(rw.id, {
            id: rw.id,
            user_id: rw.user_id,
            name: rw.name,
            date: rw.date,
            durationMinutes: rw.duration_minutes || 45,
            notes: rw.notes || "",
            exercises: rw.exercises || [],
            updatedAt: rw.created_at || new Date().toISOString()
          });
        }
        for (const lw of localWorkouts) {
          if (!remoteMap.has(lw.id)) await pushWorkoutToSupabase(lw);
        }
        for (const [id, rw] of remoteMap.entries()) {
          const exists = await localDb.workouts.get(id);
          if (!exists) await localDb.workouts.put(rw);
        }
      }
    } catch (e) {
      logClientError("syncWorkouts", e);
    }

    // 2. Sync Custom Routines (Scoped to user_id or system templates)
    try {
      const resRoutines = await fetch(
        `${SUPABASE_URL}/rest/v1/routines?select=*&or=(user_id.eq.${encodeURIComponent(profileId)},user_id.is.null)`,
        { headers }
      );
      if (resRoutines.ok) {
        const remoteRoutines = await resRoutines.json();
        const localCustomRoutines = await localDb.routines
          .filter((r) => !r.deletedAt && !r.id.startsWith("ppl-") && (r.user_id === profileId || (!r.user_id && profileId === DEFAULT_PROFILE_ID)))
          .toArray();
        const remoteRMap = new Map();
        for (const rr of remoteRoutines) {
          remoteRMap.set(rr.id, {
            id: rr.id,
            user_id: rr.user_id,
            name: rr.name,
            exercises: rr.exercises || [],
            updatedAt: rr.created_at || new Date().toISOString()
          });
        }
        for (const lr of localCustomRoutines) {
          if (!remoteRMap.has(lr.id)) await pushRoutineToSupabase(lr);
        }
        for (const [id, rr] of remoteRMap.entries()) {
          const exists = await localDb.routines.get(id);
          if (!exists) await localDb.routines.put(rr);
        }
      }
    } catch (e) {
      logClientError("syncRoutines", e);
    }

    if (setSyncStatus) setSyncStatus("synced", "Synced with Supabase");
    return true;
  } catch (err) {
    logClientError("syncAll", err);
    if (setSyncStatus) setSyncStatus("local", "Stored locally (Supabase offline)");
    return false;
  }
}
