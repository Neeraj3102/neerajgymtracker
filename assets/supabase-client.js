const SUPABASE_URL = "https://iidpyplczxtjqfnaxpvi.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZAMtA6UJ0QET2w8kDvfZEw_k7Tx6El5";

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  Prefer: "resolution=merge-duplicates"
};

export async function pushWorkoutToSupabase(w) {
  try {
    const payload = {
      id: w.id,
      name: w.name,
      date: w.date,
      duration_minutes: w.durationMinutes || 45,
      notes: w.notes || "",
      exercises: w.exercises || []
    };
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
  try {
    const payload = {
      id: r.id,
      name: r.name,
      exercises: r.exercises || []
    };
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
  try {
    const payload = {
      id: e.id,
      name: e.name,
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

    // 1. Fetch remote workouts
    const res = await fetch(`${SUPABASE_URL}/rest/v1/workouts?select=*`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });
    if (!res.ok) throw new Error("Failed to reach Supabase");
    const remoteWorkouts = await res.json();

    // 2. Fetch local workouts
    const localWorkouts = await localDb.workouts.filter(w => !w.deletedAt).toArray();

    // Map remote to local format
    const remoteMap = new Map();
    for (const rw of remoteWorkouts) {
      remoteMap.set(rw.id, {
        id: rw.id,
        name: rw.name,
        date: rw.date,
        durationMinutes: rw.duration_minutes || 45,
        notes: rw.notes || "",
        exercises: rw.exercises || [],
        updatedAt: rw.created_at || new Date().toISOString()
      });
    }

    // Push missing local workouts to Supabase
    for (const lw of localWorkouts) {
      if (!remoteMap.has(lw.id)) {
        await pushWorkoutToSupabase(lw);
      }
    }

    // Save missing remote workouts into local IndexedDB
    for (const [id, rw] of remoteMap.entries()) {
      const exists = await localDb.workouts.get(id);
      if (!exists) {
        await localDb.workouts.put(rw);
      }
    }

    if (setSyncStatus) setSyncStatus("synced", "Synced with Supabase");
    return true;
  } catch (err) {
    console.warn("Supabase syncAll failed:", err);
    if (setSyncStatus) setSyncStatus("local", "Stored locally (Supabase offline)");
    return false;
  }
}
