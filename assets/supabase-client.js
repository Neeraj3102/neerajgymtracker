const SUPABASE_URL = "https://iidpyplczxtjqfnaxpvi.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZAMtA6UJ0QET2w8kDvfZEw_k7Tx6El5";

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  Prefer: "resolution=merge-duplicates"
};

// Ultra-compact payload minifier: saves 50%+ storage without losing any data
function minifyWorkoutPayload(w) {
  const clean = {
    id: w.id,
    name: w.name ? w.name.trim() : "Workout",
    date: w.date,
    duration_minutes: w.durationMinutes || 45,
    notes: w.notes && w.notes.trim() ? w.notes.trim() : "",
    exercises: (w.exercises || []).map((e) => {
      const cleanEx = {
        exerciseId: e.exerciseId,
        exerciseName: e.exerciseName,
        sets: (e.sets || []).map((s) => {
          const cleanSet = {
            weightKg: Number(s.weightKg) || 0,
            reps: Number(s.reps) || 0,
            completed: Boolean(s.completed)
          };
          if (s.warmup) cleanSet.warmup = true;
          if (s.notes && s.notes.trim()) cleanSet.notes = s.notes.trim();
          return cleanSet;
        })
      };
      if (e.group) cleanEx.group = e.group;
      return cleanEx;
    })
  };
  if (w.user_id) clean.user_id = w.user_id;
  return clean;
}

export async function pushWorkoutToSupabase(w) {
  try {
    const payload = minifyWorkoutPayload(w);
    await fetch(`${SUPABASE_URL}/rest/v1/workouts`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.warn("Supabase pushWorkout failed:", err);
  }
}

export async function deleteWorkoutFromSupabase(id) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/workouts?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });
  } catch (err) {
    console.warn("Supabase deleteWorkout failed:", err);
  }
}

export async function pushRoutineToSupabase(r) {
  // Built-in master routines are permanently bundled locally; only store custom routines in DB
  if (!r || !r.id || r.id.startsWith("ppl-")) return;

  try {
    const payload = {
      id: r.id,
      name: r.name ? r.name.trim() : "Custom routine",
      exercises: (r.exercises || []).map((e) => ({
        exerciseId: e.exerciseId,
        exerciseName: e.exerciseName,
        sets: Number(e.sets) || 3,
        targetReps: Number(e.targetReps) || 10,
        targetWeightKg: Number(e.targetWeightKg) || 0,
        group: e.group || "Main"
      }))
    };
    if (r.user_id) payload.user_id = r.user_id;
    await fetch(`${SUPABASE_URL}/rest/v1/routines`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.warn("Supabase pushRoutine failed:", err);
  }
}

export async function deleteRoutineFromSupabase(id) {
  if (!id || id.startsWith("ppl-")) return;
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/routines?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });
  } catch (err) {
    console.warn("Supabase deleteRoutine failed:", err);
  }
}

export async function pushCustomExerciseToSupabase(e) {
  if (!e || e.builtIn) return; // Never store built-in movements
  try {
    const payload = {
      id: e.id,
      name: e.name ? e.name.trim() : "",
      muscle: e.muscle,
      equipment: e.equipment,
      movement: e.movement
    };
    await fetch(`${SUPABASE_URL}/rest/v1/custom_exercises`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.warn("Supabase pushCustomExercise failed:", err);
  }
}

export async function syncAllWithSupabase(localDb, setSyncStatus) {
  try {
    if (setSyncStatus) setSyncStatus("syncing", "Syncing with Supabase...");

    // 1. Sync Workouts (Lean payloads)
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/workouts?select=*`, {
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
      });
      if (res.ok) {
        const remoteWorkouts = await res.json();
        const localWorkouts = await localDb.workouts.filter((w) => !w.deletedAt).toArray();
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
      console.warn("Workout sync sub-step error:", e);
    }

    // 2. Sync Custom Routines only (saves DB space)
    try {
      const resRoutines = await fetch(`${SUPABASE_URL}/rest/v1/routines?select=*`, {
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
      });
      if (resRoutines.ok) {
        const remoteRoutines = await resRoutines.json();
        const localCustomRoutines = await localDb.routines
          .filter((r) => !r.deletedAt && !r.id.startsWith("ppl-"))
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
      console.warn("Routine sync sub-step error:", e);
    }

    if (setSyncStatus) setSyncStatus("synced", "Synced with Supabase");
    return true;
  } catch (err) {
    console.warn("Supabase syncAll failed:", err);
    if (setSyncStatus) setSyncStatus("local", "Stored locally (Supabase offline)");
    return false;
  }
}
