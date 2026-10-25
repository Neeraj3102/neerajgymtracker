import { r as h } from "./index-CiCrIMMp.js?v=stealth-v9";

// Synthetic Web Audio chime for rest timer completion (no audio files required)
function playTimerDoneSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.15);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.start(now);
    osc.stop(now + 0.5);
  } catch (_) {}
}

function vibrateDevice() {
  try {
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 300]);
    }
  } catch (_) {}
}

/* =========================================================================
   F1: REST TIMER COMPONENT
   ========================================================================= */
export function RestTimer({ active = false, defaultDuration = 90 }) {
  const [isOpen, setIsOpen] = h.useState(false);
  const [secondsLeft, setSecondsLeft] = h.useState(0);
  const [isRunning, setIsRunning] = h.useState(false);
  const [totalDuration, setTotalDuration] = h.useState(defaultDuration);
  const [isMinimized, setIsMinimized] = h.useState(false);

  // Global event listener to trigger rest timer from anywhere (e.g. when set is checked)
  h.useEffect(() => {
    function handleStartEvent(e) {
      const dur = e.detail?.duration || totalDuration || 90;
      setTotalDuration(dur);
      setSecondsLeft(dur);
      setIsRunning(true);
      setIsOpen(true);
    }
    window.addEventListener("forge-start-rest-timer", handleStartEvent);
    return () => window.removeEventListener("forge-start-rest-timer", handleStartEvent);
  }, [totalDuration]);

  // Interval timer
  h.useEffect(() => {
    let interval = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsRunning(false);
            playTimerDoneSound();
            vibrateDevice();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  if (!isOpen && secondsLeft === 0) {
    return h.createElement(
      "button",
      {
        onClick: () => {
          setTotalDuration(90);
          setSecondsLeft(90);
          setIsRunning(true);
          setIsOpen(true);
        },
        style: {
          position: "fixed",
          bottom: "76px",
          right: "16px",
          zIndex: 999,
          background: "linear-gradient(135deg, #1f2320, #131614)",
          border: "1px solid #3c423e",
          borderRadius: "24px",
          padding: "8px 14px",
          color: "#e2e8e3",
          fontSize: "12px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
        },
      },
      h.createElement("span", null, "⏱️"),
      h.createElement("span", null, "Rest Timer")
    );
  }

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeFormatted = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  const pct = totalDuration > 0 ? (secondsLeft / totalDuration) * 100 : 0;

  if (isMinimized) {
    return h.createElement(
      "div",
      {
        onClick: () => setIsMinimized(false),
        style: {
          position: "fixed",
          bottom: "76px",
          right: "16px",
          zIndex: 999,
          background: secondsLeft === 0 ? "#1b4d2e" : "#1a1e1b",
          border: "1px solid #3c423e",
          borderRadius: "30px",
          padding: "8px 16px",
          color: secondsLeft === 0 ? "#4ade80" : "#d1d5db",
          fontFamily: "monospace",
          fontSize: "13px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
        },
      },
      h.createElement("span", null, secondsLeft === 0 ? "🔔 Done!" : `⏱️ ${timeFormatted}`),
      h.createElement("span", { style: { fontSize: "10px", color: "#8b9089" } }, "▲")
    );
  }

  return h.createElement(
    "div",
    {
      style: {
        position: "fixed",
        bottom: "76px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: "360px",
        zIndex: 999,
        background: "rgba(18, 21, 19, 0.95)",
        backdropFilter: "blur(16px)",
        border: "1px solid #2e3530",
        borderRadius: "20px",
        padding: "14px 16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
        color: "#e2e8e3",
      },
    },
    // Top Bar
    h.createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" } },
      h.createElement("span", { style: { fontSize: "11px", fontWeight: "700", color: "#8b9089", textTransform: "uppercase", letterSpacing: "0.05em" } }, "Rest Countdown"),
      h.createElement(
        "div",
        { style: { display: "flex", gap: "8px" } },
        h.createElement(
          "button",
          {
            onClick: () => setIsMinimized(true),
            style: { background: "transparent", border: "none", color: "#8b9089", cursor: "pointer", fontSize: "12px" },
          },
          "▼ Min"
        ),
        h.createElement(
          "button",
          {
            onClick: () => {
              setIsRunning(false);
              setIsOpen(false);
              setSecondsLeft(0);
            },
            style: { background: "transparent", border: "none", color: "#8b9089", cursor: "pointer", fontSize: "13px" },
          },
          "✕"
        )
      )
    ),
    // Time Readout & Progress
    h.createElement(
      "div",
      { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" } },
      h.createElement(
        "div",
        {
          style: {
            fontSize: "32px",
            fontWeight: "800",
            fontFamily: "monospace",
            color: secondsLeft === 0 ? "#4ade80" : "#ffffff",
          },
        },
        secondsLeft === 0 ? "Ready to Lift!" : timeFormatted
      ),
      h.createElement(
        "div",
        { style: { display: "flex", gap: "6px" } },
        h.createElement(
          "button",
          {
            onClick: () => setIsRunning((r) => !r),
            style: {
              background: isRunning ? "#272c28" : "#22c55e",
              color: isRunning ? "#d1d5db" : "#0d130e",
              border: "none",
              borderRadius: "8px",
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: "700",
              cursor: "pointer",
            },
          },
          isRunning ? "Pause" : "Start"
        ),
        h.createElement(
          "button",
          {
            onClick: () => {
              setSecondsLeft(totalDuration);
              setIsRunning(true);
            },
            style: {
              background: "#272c28",
              color: "#9ca3af",
              border: "1px solid #37413a",
              borderRadius: "8px",
              padding: "6px 10px",
              fontSize: "12px",
              cursor: "pointer",
            },
          },
          "Reset"
        )
      )
    ),
    // Progress Bar
    h.createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "4px",
          background: "#252b27",
          borderRadius: "2px",
          overflow: "hidden",
          marginBottom: "10px",
        },
      },
      h.createElement("div", {
        style: {
          height: "100%",
          width: `${pct}%`,
          background: secondsLeft === 0 ? "#4ade80" : "#22c55e",
          transition: "width 1s linear",
        },
      })
    ),
    // Preset Buttons
    h.createElement(
      "div",
      { style: { display: "flex", gap: "6px", justifyContent: "space-between" } },
      [30, 60, 90, 120, 180].map((dur) =>
        h.createElement(
          "button",
          {
            key: dur,
            onClick: () => {
              setTotalDuration(dur);
              setSecondsLeft(dur);
              setIsRunning(true);
            },
            style: {
              flex: 1,
              background: totalDuration === dur ? "#2e3b31" : "#1c211e",
              border: totalDuration === dur ? "1px solid #4ade80" : "1px solid #2a312c",
              color: totalDuration === dur ? "#4ade80" : "#9ca3af",
              borderRadius: "8px",
              padding: "5px 0",
              fontSize: "11px",
              fontWeight: "600",
              cursor: "pointer",
            },
          },
          `${dur}s`
        )
      )
    )
  );
}

// Global helper to trigger rest timer
export function triggerRestTimer(duration = 90) {
  window.dispatchEvent(new CustomEvent("forge-start-rest-timer", { detail: { duration } }));
}

/* =========================================================================
   F2: STREAK COUNTER
   ========================================================================= */
export function StreakBadge({ workouts = [] }) {
  const streak = h.useMemo(() => {
    if (!workouts || workouts.length === 0) return 0;
    const dates = [
      ...new Set(
        workouts
          .map((w) => w.date)
          .filter(Boolean)
          .sort()
          .reverse()
      ),
    ];
    if (dates.length === 0) return 0;

    const todayStr = new Date().toISOString().slice(0, 10);
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayStr = yesterdayDate.toISOString().slice(0, 10);

    // If no workout today or yesterday, streak is broken
    if (dates[0] !== todayStr && dates[0] !== yesterdayStr) {
      return 0;
    }

    let count = 0;
    let expected = new Date(dates[0]);

    for (const dStr of dates) {
      const d = new Date(dStr);
      const diffDays = Math.round((expected.getTime() - d.getTime()) / 864e5);
      if (diffDays === 0) {
        count++;
        expected.setDate(expected.getDate() - 1);
      } else if (diffDays === 1) {
        count++;
        expected = new Date(d);
        expected.setDate(expected.getDate() - 1);
      } else {
        break;
      }
    }
    return count;
  }, [workouts]);

  if (streak === 0) {
    return h.createElement(
      "div",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 10px",
          background: "#161a17",
          border: "1px solid #282f2a",
          borderRadius: "16px",
          fontSize: "11px",
          color: "#8b9089",
          fontWeight: "600",
        },
      },
      h.createElement("span", null, "⚡"),
      h.createElement("span", null, "Ready to start a streak!")
    );
  }

  return h.createElement(
    "div",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        background: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.05))",
        border: "1px solid rgba(249, 115, 22, 0.4)",
        borderRadius: "16px",
        fontSize: "11px",
        color: "#fb923c",
        fontWeight: "700",
      },
    },
    h.createElement("span", null, "🔥"),
    h.createElement("span", null, `${streak} Day Streak! Keep the momentum`)
  );
}

/* =========================================================================
   F3: REPEAT LAST WORKOUT CARD
   ========================================================================= */
export function RepeatWorkoutCard({ workouts = [], onRepeat }) {
  if (!workouts || workouts.length === 0) return null;
  const last = workouts[0];
  const dateFormatted = last.date ? new Date(last.date).toLocaleDateString("en-IN", { month: "short", day: "numeric" }) : "";

  return h.createElement(
    "div",
    {
      style: {
        margin: "12px 0",
        padding: "12px 14px",
        background: "#141715",
        border: "1px solid #272e29",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
      },
    },
    h.createElement(
      "div",
      { style: { minWidth: 0 } },
      h.createElement(
        "div",
        { style: { fontSize: "10px", fontWeight: "700", color: "#8b9089", textTransform: "uppercase" } },
        "Recent Session"
      ),
      h.createElement(
        "div",
        { style: { fontSize: "13px", fontWeight: "700", color: "#f3f4f6", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        last.name || "Workout"
      ),
      h.createElement(
        "div",
        { style: { fontSize: "11px", color: "#6b7280" } },
        `${last.exercises?.length || 0} exercises • ${dateFormatted}`
      )
    ),
    h.createElement(
      "button",
      {
        onClick: () => {
          if (onRepeat) {
            const template = {
              id: crypto.randomUUID(),
              name: last.name,
              date: new Date().toISOString().slice(0, 10),
              durationMinutes: last.durationMinutes || 45,
              notes: "",
              exercises: (last.exercises || []).map((ex) => ({
                ...ex,
                id: crypto.randomUUID(),
                sets: (ex.sets || []).map((s) => ({
                  id: crypto.randomUUID(),
                  weightKg: s.weightKg || 0,
                  reps: s.reps || 0,
                  completed: false,
                  warmup: Boolean(s.warmup),
                  notes: "",
                })),
              })),
            };
            onRepeat(template);
          }
        },
        style: {
          background: "#22c55e",
          color: "#0a110c",
          border: "none",
          borderRadius: "10px",
          padding: "8px 12px",
          fontSize: "11px",
          fontWeight: "800",
          cursor: "pointer",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        },
      },
      h.createElement("span", null, "⚡"),
      h.createElement("span", null, "Repeat")
    )
  );
}

/* =========================================================================
   F4: 1RM CALCULATOR WIDGET & MODAL
   ========================================================================= */
export function OneRepMaxModal({ isOpen = false, onClose, unit = "kg" }) {
  const [weight, setWeight] = h.useState("80");
  const [reps, setReps] = h.useState("5");

  if (!isOpen) return null;

  const w = parseFloat(weight) || 0;
  const r = parseInt(reps, 10) || 1;

  // Epley: w * (1 + r / 30)
  const epley = w > 0 ? Math.round(w * (1 + r / 30) * 10) / 10 : 0;
  // Brzycki: w * (36 / (37 - r))
  const brzycki = w > 0 && r < 37 ? Math.round(w * (36 / (37 - r)) * 10) / 10 : 0;
  const estimatedMax = Math.round(((epley + brzycki) / 2) * 10) / 10;

  const percentages = [
    { pct: 95, label: "Peak Strength (1-2 reps)" },
    { pct: 90, label: "Heavy Strength (3-4 reps)" },
    { pct: 85, label: "Power / Strength (5-6 reps)" },
    { pct: 80, label: "Hypertrophy (7-8 reps)" },
    { pct: 75, label: "Hypertrophy (9-10 reps)" },
    { pct: 70, label: "Endurance (11-12 reps)" },
    { pct: 60, label: "Warm-up / Deload (15+ reps)" },
  ];

  return h.createElement(
    "div",
    {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      },
    },
    h.createElement(
      "div",
      {
        onClick: (e) => e.stopPropagation(),
        style: {
          background: "#141715",
          border: "1px solid #2a312c",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          color: "#e2e8e3",
          maxHeight: "90vh",
          overflowY: "auto",
        },
      },
      // Header
      h.createElement(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" } },
        h.createElement(
          "div",
          null,
          h.createElement("h3", { style: { margin: 0, fontSize: "16px", fontWeight: "800", color: "#fff" } }, "1RM Calculator"),
          h.createElement("span", { style: { fontSize: "11px", color: "#8b9089" } }, "Estimate your maximum lift & rep targets")
        ),
        h.createElement(
          "button",
          {
            onClick: onClose,
            style: { background: "transparent", border: "none", color: "#8b9089", cursor: "pointer", fontSize: "16px" },
          },
          "✕"
        )
      ),
      // Inputs
      h.createElement(
        "div",
        { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" } },
        h.createElement(
          "label",
          { style: { fontSize: "11px", color: "#9ca3af", display: "flex", flexDirection: "column", gap: "4px" } },
          `Weight (${unit.toUpperCase()})`,
          h.createElement("input", {
            type: "number",
            step: "0.5",
            value: weight,
            onChange: (e) => setWeight(e.target.value),
            style: {
              background: "#1f2421",
              border: "1px solid #363e38",
              borderRadius: "10px",
              padding: "8px 10px",
              color: "#fff",
              fontSize: "14px",
              fontFamily: "monospace",
              outline: "none",
            },
          })
        ),
        h.createElement(
          "label",
          { style: { fontSize: "11px", color: "#9ca3af", display: "flex", flexDirection: "column", gap: "4px" } },
          "Reps Completed",
          h.createElement("input", {
            type: "number",
            min: "1",
            max: "30",
            value: reps,
            onChange: (e) => setReps(e.target.value),
            style: {
              background: "#1f2421",
              border: "1px solid #363e38",
              borderRadius: "10px",
              padding: "8px 10px",
              color: "#fff",
              fontSize: "14px",
              fontFamily: "monospace",
              outline: "none",
            },
          })
        )
      ),
      // Estimated 1RM Readout
      h.createElement(
        "div",
        {
          style: {
            background: "#1c221e",
            border: "1px solid #2e3a32",
            borderRadius: "14px",
            padding: "14px",
            textAlign: "center",
            marginBottom: "16px",
          },
        },
        h.createElement("div", { style: { fontSize: "11px", color: "#8b9089", textTransform: "uppercase" } }, "Estimated 1-Rep Max"),
        h.createElement(
          "div",
          { style: { fontSize: "36px", fontWeight: "900", fontFamily: "monospace", color: "#22c55e", margin: "4px 0" } },
          `${estimatedMax} `,
          h.createElement("span", { style: { fontSize: "14px", color: "#9ca3af" } }, unit)
        ),
        h.createElement("div", { style: { fontSize: "10px", color: "#6b7280" } }, `Epley: ${epley} ${unit} • Brzycki: ${brzycki} ${unit}`)
      ),
      // Percentage Table
      h.createElement(
        "div",
        { style: { display: "flex", flexDirection: "column", gap: "6px" } },
        percentages.map((p) => {
          const loadVal = Math.round(((estimatedMax * p.pct) / 100) * 10) / 10;
          return h.createElement(
            "div",
            {
              key: p.pct,
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 10px",
                background: "#181d1a",
                borderRadius: "8px",
                fontSize: "11px",
              },
            },
            h.createElement("span", { style: { fontWeight: "700", color: "#4ade80", width: "40px" } }, `${p.pct}%`),
            h.createElement("span", { style: { color: "#9ca3af", flex: 1 } }, p.label),
            h.createElement("span", { style: { fontWeight: "700", fontFamily: "monospace", color: "#fff" } }, `${loadVal} ${unit}`)
          );
        })
      )
    )
  );
}

/* =========================================================================
   F5: BODY WEIGHT TRACKER & TREND CHART
   ========================================================================= */
const STORAGE_WEIGHT_KEY = "forge_bodyweight_logs";

export function loadBodyWeightLogs() {
  try {
    const raw = localStorage.getItem(STORAGE_WEIGHT_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (_) {}
  return [];
}

export function saveBodyWeightLogs(logs) {
  try {
    localStorage.setItem(STORAGE_WEIGHT_KEY, JSON.stringify(logs));
  } catch (_) {}
}

export function BodyWeightTracker({ unit = "kg" }) {
  const [logs, setLogs] = h.useState(loadBodyWeightLogs);
  const [inputWeight, setInputWeight] = h.useState("");
  const [inputDate, setInputDate] = h.useState(new Date().toISOString().slice(0, 10));

  const handleAddWeight = (e) => {
    e.preventDefault();
    const val = parseFloat(inputWeight);
    if (!val || val <= 0) return;
    const newEntry = {
      id: crypto.randomUUID(),
      date: inputDate,
      weight: val,
      unit,
      createdAt: new Date().toISOString(),
    };
    const updated = [newEntry, ...logs.filter((l) => l.date !== inputDate)].sort((a, b) => b.date.localeCompare(a.date));
    setLogs(updated);
    saveBodyWeightLogs(updated);
    setInputWeight("");
  };

  const handleDeleteEntry = (id) => {
    const updated = logs.filter((l) => l.id !== id);
    setLogs(updated);
    saveBodyWeightLogs(updated);
  };

  const sortedAsc = [...logs].reverse();
  const currentWeight = logs[0]?.weight || 0;
  const previousWeight = logs[1]?.weight || currentWeight;
  const diff = currentWeight > 0 ? Math.round((currentWeight - previousWeight) * 10) / 10 : 0;

  return h.createElement(
    "section",
    {
      style: {
        background: "#141715",
        border: "1px solid #242b26",
        borderRadius: "16px",
        padding: "16px",
        margin: "16px 0",
      },
    },
    // Section Header
    h.createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" } },
      h.createElement(
        "div",
        null,
        h.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#8b9089", textTransform: "uppercase" } }, "Body Composition"),
        h.createElement("h3", { style: { margin: "2px 0 0 0", fontSize: "15px", fontWeight: "800", color: "#fff" } }, "Weight Log")
      ),
      currentWeight > 0 &&
        h.createElement(
          "div",
          { style: { textAlign: "right" } },
          h.createElement("div", { style: { fontSize: "18px", fontWeight: "800", color: "#22c55e", fontFamily: "monospace" } }, `${currentWeight} ${unit}`),
          h.createElement(
            "div",
            { style: { fontSize: "10px", color: diff === 0 ? "#8b9089" : diff > 0 ? "#f87171" : "#4ade80" } },
            diff === 0 ? "No change" : `${diff > 0 ? "+" : ""}${diff} ${unit} vs last`
          )
        )
    ),
    // Input row
    h.createElement(
      "form",
      { onSubmit: handleAddWeight, style: { display: "flex", gap: "8px", marginBottom: "16px" } },
      h.createElement("input", {
        type: "number",
        step: "0.1",
        placeholder: `Weight (${unit})`,
        value: inputWeight,
        onChange: (e) => setInputWeight(e.target.value),
        style: {
          flex: 1,
          background: "#1c211e",
          border: "1px solid #313933",
          borderRadius: "10px",
          padding: "8px 10px",
          color: "#fff",
          fontSize: "12px",
          outline: "none",
        },
      }),
      h.createElement("input", {
        type: "date",
        value: inputDate,
        onChange: (e) => setInputDate(e.target.value),
        style: {
          background: "#1c211e",
          border: "1px solid #313933",
          borderRadius: "10px",
          padding: "8px 10px",
          color: "#fff",
          fontSize: "12px",
          outline: "none",
        },
      }),
      h.createElement(
        "button",
        {
          type: "submit",
          style: {
            background: "#22c55e",
            color: "#0d130e",
            border: "none",
            borderRadius: "10px",
            padding: "8px 14px",
            fontSize: "12px",
            fontWeight: "700",
            cursor: "pointer",
          },
        },
        "Log"
      )
    ),
    // SVG Trend Chart
    sortedAsc.length > 1
      ? h.createElement(
          "div",
          { style: { width: "100%", height: "100px", marginBottom: "12px", position: "relative" } },
          (() => {
            const minW = Math.min(...sortedAsc.map((l) => l.weight)) * 0.98;
            const maxW = Math.max(...sortedAsc.map((l) => l.weight)) * 1.02;
            const range = maxW - minW || 1;
            const points = sortedAsc.map((l, idx) => {
              const x = (idx / (sortedAsc.length - 1)) * 300 + 10;
              const y = 80 - ((l.weight - minW) / range) * 70;
              return `${x},${y}`;
            });
            return h.createElement(
              "svg",
              { viewBox: "0 0 320 90", style: { width: "100%", height: "100%", overflow: "visible" } },
              h.createElement("polyline", {
                fill: "none",
                stroke: "#22c55e",
                strokeWidth: "2",
                points: points.join(" "),
              }),
              sortedAsc.map((l, idx) => {
                const x = (idx / (sortedAsc.length - 1)) * 300 + 10;
                const y = 80 - ((l.weight - minW) / range) * 70;
                return h.createElement("circle", {
                  key: l.id,
                  cx: x,
                  cy: y,
                  r: 3,
                  fill: "#22c55e",
                });
              })
            );
          })()
        )
      : h.createElement("p", { style: { fontSize: "11px", color: "#6b7280", margin: "6px 0 12px 0" } }, "Log 2 or more dates to view your bodyweight curve."),
    // Recent logs list
    logs.length > 0 &&
      h.createElement(
        "div",
        { style: { display: "flex", flexDirection: "column", gap: "6px", maxHeight: "120px", overflowY: "auto" } },
        logs.slice(0, 5).map((l) =>
          h.createElement(
            "div",
            {
              key: l.id,
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "6px 8px",
                background: "#181d1a",
                borderRadius: "8px",
                fontSize: "11px",
              },
            },
            h.createElement("span", { style: { color: "#9ca3af" } }, l.date),
            h.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: "8px" } },
              h.createElement("span", { style: { fontWeight: "700", fontFamily: "monospace", color: "#fff" } }, `${l.weight} ${unit}`),
              h.createElement(
                "button",
                {
                  onClick: () => handleDeleteEntry(l.id),
                  style: { background: "transparent", border: "none", color: "#6b7280", cursor: "pointer", fontSize: "12px" },
                },
                "✕"
              )
            )
          )
        )
      )
  );
}

/* =========================================================================
   F6: WEEKLY VOLUME CHART
   ========================================================================= */
export function WeeklyVolumeChart({ workouts = [], unit = "kg" }) {
  const weeklyData = h.useMemo(() => {
    if (!workouts || workouts.length === 0) return [];
    // Group last 8 weeks
    const weeksMap = {};
    const now = new Date();

    for (let i = 7; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i * 7);
      const year = d.getFullYear();
      const oneJan = new Date(year, 0, 1);
      const weekNum = Math.ceil(((d.getTime() - oneJan.getTime()) / 864e5 + oneJan.getDay() + 1) / 7);
      const key = `W${weekNum}`;
      weeksMap[key] = { label: key, volume: 0, sessions: 0 };
    }

    workouts.forEach((w) => {
      if (!w.date) return;
      const d = new Date(`${w.date}T12:00:00`);
      const year = d.getFullYear();
      const oneJan = new Date(year, 0, 1);
      const weekNum = Math.ceil(((d.getTime() - oneJan.getTime()) / 864e5 + oneJan.getDay() + 1) / 7);
      const key = `W${weekNum}`;

      if (weeksMap[key]) {
        let vol = 0;
        (w.exercises || []).forEach((ex) => {
          (ex.sets || []).forEach((s) => {
            if (s.completed && !s.warmup) {
              vol += (s.weightKg || 0) * (s.reps || 0);
            }
          });
        });
        weeksMap[key].volume += vol;
        weeksMap[key].sessions += 1;
      }
    });

    return Object.values(weeksMap);
  }, [workouts]);

  const maxVolume = Math.max(...weeklyData.map((w) => w.volume), 1);

  return h.createElement(
    "section",
    {
      style: {
        background: "#141715",
        border: "1px solid #242b26",
        borderRadius: "16px",
        padding: "16px",
        margin: "16px 0",
      },
    },
    h.createElement(
      "div",
      { style: { marginBottom: "12px" } },
      h.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#8b9089", textTransform: "uppercase" } }, "Tonnage Load"),
      h.createElement("h3", { style: { margin: "2px 0 0 0", fontSize: "15px", fontWeight: "800", color: "#fff" } }, "Weekly Training Volume")
    ),
    h.createElement(
      "div",
      { style: { display: "flex", alignItems: "flex-end", gap: "8px", height: "110px", paddingBottom: "20px", position: "relative" } },
      weeklyData.map((w) => {
        const heightPct = Math.max(8, (w.volume / maxVolume) * 100);
        return h.createElement(
          "div",
          {
            key: w.label,
            style: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              justifyContent: "flex-end",
            },
          },
          h.createElement("div", {
            style: {
              width: "100%",
              height: `${heightPct}%`,
              background: w.volume > 0 ? "linear-gradient(180deg, #22c55e, #15803d)" : "#202522",
              borderRadius: "4px 4px 0 0",
              transition: "height 0.3s ease",
            },
            title: `${w.label}: ${Math.round(w.volume)} ${unit} (${w.sessions} sessions)`,
          }),
          h.createElement("span", { style: { position: "absolute", bottom: 0, fontSize: "9px", color: "#6b7280" } }, w.label)
        );
      })
    )
  );
}

/* =========================================================================
   F7: RPE / EFFORT SELECTOR PER SET
   ========================================================================= */
export function RpeRow({ set = {}, onSelectRpe }) {
  const currentRpe = set.rpe || null;
  const options = [6, 7, 8, 9, 10];

  return h.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
        marginTop: "4px",
        fontSize: "10px",
      },
    },
    h.createElement("span", { style: { color: "#6b7280", marginRight: "2px" } }, "RPE:"),
    options.map((val) =>
      h.createElement(
        "button",
        {
          key: val,
          type: "button",
          onClick: () => onSelectRpe(currentRpe === val ? undefined : val),
          style: {
            background: currentRpe === val ? "#22c55e" : "#1a1f1c",
            color: currentRpe === val ? "#000" : "#8b9089",
            border: currentRpe === val ? "1px solid #4ade80" : "1px solid #28302a",
            borderRadius: "4px",
            padding: "1px 5px",
            fontSize: "9px",
            fontWeight: "700",
            cursor: "pointer",
          },
        },
        val
      )
    )
  );
}

/* =========================================================================
   F8: EXERCISE REORDER CONTROLS
   ========================================================================= */
export function ExerciseReorderControls({ index, total, onMoveUp, onMoveDown }) {
  return h.createElement(
    "div",
    { style: { display: "flex", gap: "2px", marginLeft: "auto", marginRight: "4px" } },
    index > 0 &&
      h.createElement(
        "button",
        {
          type: "button",
          onClick: onMoveUp,
          title: "Move exercise up",
          style: {
            background: "#1d221f",
            border: "1px solid #2f3731",
            color: "#9ca3af",
            borderRadius: "6px",
            padding: "2px 6px",
            fontSize: "10px",
            cursor: "pointer",
          },
        },
        "▲"
      ),
    index < total - 1 &&
      h.createElement(
        "button",
        {
          type: "button",
          onClick: onMoveDown,
          title: "Move exercise down",
          style: {
            background: "#1d221f",
            border: "1px solid #2f3731",
            color: "#9ca3af",
            borderRadius: "6px",
            padding: "2px 6px",
            fontSize: "10px",
            cursor: "pointer",
          },
        },
        "▼"
      )
  );
}

/* =========================================================================
   F9: PWA / WEB WORKOUT REMINDERS
   ========================================================================= */
const STORAGE_REMINDER_KEY = "forge_workout_reminder";

export function WorkoutReminderSetting() {
  const [enabled, setEnabled] = h.useState(() => {
    try {
      return localStorage.getItem(STORAGE_REMINDER_KEY) === "true";
    } catch (_) {
      return false;
    }
  });
  const [time, setTime] = h.useState("18:00");
  const [permission, setPermission] = h.useState(typeof Notification !== "undefined" ? Notification.permission : "default");

  const handleToggle = async () => {
    if (!enabled) {
      if (typeof Notification !== "undefined" && Notification.permission !== "granted") {
        const res = await Notification.requestPermission();
        setPermission(res);
        if (res !== "granted") {
          alert("Notification permission is required to send training reminders.");
          return;
        }
      }
      try {
        localStorage.setItem(STORAGE_REMINDER_KEY, "true");
        setEnabled(true);
        if (typeof Notification !== "undefined" && Notification.permission === "granted") {
          new Notification("FORGE Reminder Set! 🏋️", {
            body: `Daily training reminder scheduled for ${time}. Let's get to work!`,
            icon: "./icon-192.svg",
          });
        }
      } catch (_) {}
    } else {
      try {
        localStorage.setItem(STORAGE_REMINDER_KEY, "false");
        setEnabled(false);
      } catch (_) {}
    }
  };

  return h.createElement(
    "div",
    {
      style: {
        background: "#141715",
        border: "1px solid #242b26",
        borderRadius: "14px",
        padding: "14px",
        margin: "12px 0",
      },
    },
    h.createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
      h.createElement(
        "div",
        null,
        h.createElement("div", { style: { fontSize: "13px", fontWeight: "700", color: "#fff" } }, "Daily Workout Reminder"),
        h.createElement("div", { style: { fontSize: "11px", color: "#8b9089" } }, "Get notified when it's time to hit the gym")
      ),
      h.createElement(
        "button",
        {
          onClick: handleToggle,
          style: {
            background: enabled ? "#22c55e" : "#202622",
            color: enabled ? "#0a110c" : "#9ca3af",
            border: "none",
            borderRadius: "20px",
            padding: "6px 14px",
            fontSize: "11px",
            fontWeight: "800",
            cursor: "pointer",
          },
        },
        enabled ? "Enabled" : "Enable"
      )
    )
  );
}
