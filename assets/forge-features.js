export const h = new Proxy({}, {
  get(_, prop) {
    const activeReact = (typeof window !== "undefined") ? window.React : null;
    return activeReact ? activeReact[prop] : undefined;
  }
});

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
      setIsMinimized(false);
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
    return null;
  }

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeFormatted = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  const pct = totalDuration > 0 ? (secondsLeft / totalDuration) : 0;
  
  // Circumference for r=44
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - pct);
  
  // Dynamic color & pulse
  const isLast10 = secondsLeft > 0 && secondsLeft <= 10;
  const ringColor = secondsLeft === 0 ? "#22c55e" : (isLast10 ? "#ef4444" : "#f59e0b");

  if (isMinimized) {
    return h.createElement(
      "div",
      {
        onClick: () => setIsMinimized(false),
        style: {
          position: "fixed",
          bottom: "calc(88px + var(--sab, 0px))",
          right: "16px",
          zIndex: 999,
          background: secondsLeft === 0 ? "rgba(22, 101, 52, 0.9)" : "rgba(18, 22, 28, 0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: `1px solid ${ringColor}`,
          borderRadius: "30px",
          padding: "6px 14px",
          color: secondsLeft === 0 ? "#4ade80" : "#fbbf24",
          fontFamily: "monospace",
          fontSize: "13px",
          fontWeight: "800",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          boxShadow: `0 4px 20px rgba(0,0,0,0.6), 0 0 12px ${ringColor}33`,
          animation: isLast10 ? "timer-ring-pulse 1s infinite" : "none",
        },
      },
      h.createElement("span", null, secondsLeft === 0 ? "🔔 Done!" : `⏱️ ${timeFormatted}`),
      h.createElement("span", { style: { fontSize: "10px", color: "#9ca3af" } }, "▲")
    );
  }

  return h.createElement(
    "div",
    {
      style: {
        position: "fixed",
        bottom: "calc(88px + var(--sab, 0px))",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: "340px",
        zIndex: 999,
        background: "rgba(14, 17, 23, 0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "22px",
        padding: "16px",
        boxShadow: "0 16px 40px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.06)",
        color: "#e2e8e3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    // Top Bar (Label & Window controls)
    h.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "10px",
        },
      },
      h.createElement(
        "span",
        {
          style: {
            fontSize: "10.5px",
            fontWeight: "800",
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: "monospace",
          },
        },
        "⏱️ REST COUNTDOWN"
      ),
      h.createElement(
        "div",
        { style: { display: "flex", gap: "8px" } },
        h.createElement(
          "button",
          {
            onClick: () => setIsMinimized(true),
            style: {
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "5px",
              color: "#9ca3af",
              cursor: "pointer",
              fontSize: "11px",
              padding: "2px 7px",
            },
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
            style: {
              background: "rgba(239, 68, 68, 0.12)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: "5px",
              color: "#f87171",
              cursor: "pointer",
              fontSize: "11px",
              padding: "2px 7px",
            },
          },
          "✕ Close"
        )
      )
    ),
    // SVG Circular Ring Countdown
    h.createElement(
      "div",
      {
        style: {
          position: "relative",
          width: "110px",
          height: "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "6px 0 14px",
        },
      },
      h.createElement(
        "svg",
        {
          width: "110",
          height: "110",
          viewBox: "0 0 110 110",
          style: { transform: "rotate(-90deg)" },
        },
        // Track circle
        h.createElement("circle", {
          cx: "55",
          cy: "55",
          r: radius,
          fill: "transparent",
          stroke: "rgba(255, 255, 255, 0.08)",
          strokeWidth: "7",
        }),
        // Animated Progress Arc
        h.createElement("circle", {
          cx: "55",
          cy: "55",
          r: radius,
          fill: "transparent",
          stroke: ringColor,
          strokeWidth: "7",
          strokeDasharray: circumference,
          strokeDashoffset: strokeDashoffset,
          strokeLinecap: "round",
          style: {
            transition: "stroke-dashoffset 0.85s linear, stroke 0.3s ease",
            filter: `drop-shadow(0 0 8px ${ringColor}66)`,
          },
        })
      ),
      // Center digital display
      h.createElement(
        "div",
        {
          style: {
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        },
        h.createElement(
          "span",
          {
            style: {
              fontFamily: "monospace",
              fontSize: "24px",
              fontWeight: "900",
              color: ringColor,
              letterSpacing: "-0.03em",
              fontVariantNumeric: "tabular-nums",
            },
          },
          secondsLeft === 0 ? "DONE" : timeFormatted
        ),
        h.createElement(
          "span",
          {
            style: {
              fontSize: "9px",
              fontWeight: "800",
              color: "#9ca3af",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: "-2px",
            },
          },
          secondsLeft === 0 ? "REST OVER" : "SECONDS"
        )
      )
    ),
    // Quick Add / Adjust Pills
    h.createElement(
      "div",
      {
        style: {
          display: "flex",
          gap: "8px",
          width: "100%",
          justifyContent: "center",
        },
      },
      h.createElement(
        "button",
        {
          type: "button",
          onClick: () => {
            setSecondsLeft((prev) => Math.max(0, prev - 15));
          },
          style: {
            flex: "1",
            padding: "6px 0",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            color: "#d1d5db",
            fontSize: "11px",
            fontWeight: "700",
            fontFamily: "monospace",
            cursor: "pointer",
          },
        },
        "-15s"
      ),
      h.createElement(
        "button",
        {
          type: "button",
          onClick: () => {
            setSecondsLeft((prev) => prev + 30);
            setTotalDuration((prev) => prev + 30);
            setIsRunning(true);
          },
          style: {
            flex: "1",
            padding: "6px 0",
            background: "rgba(245, 158, 11, 0.12)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            borderRadius: "8px",
            color: "#fbbf24",
            fontSize: "11px",
            fontWeight: "700",
            fontFamily: "monospace",
            cursor: "pointer",
          },
        },
        "+30s"
      ),
      h.createElement(
        "button",
        {
          type: "button",
          onClick: () => {
            setSecondsLeft((prev) => prev + 60);
            setTotalDuration((prev) => prev + 60);
            setIsRunning(true);
          },
          style: {
            flex: "1",
            padding: "6px 0",
            background: "rgba(245, 158, 11, 0.12)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            borderRadius: "8px",
            color: "#fbbf24",
            fontSize: "11px",
            fontWeight: "700",
            fontFamily: "monospace",
            cursor: "pointer",
          },
        },
        "+60s"
      ),
      h.createElement(
        "button",
        {
          type: "button",
          onClick: () => {
            setSecondsLeft(0);
            setIsRunning(false);
          },
          style: {
            flex: "1",
            padding: "6px 0",
            background: "rgba(34, 197, 94, 0.15)",
            border: "1px solid rgba(34, 197, 94, 0.35)",
            borderRadius: "8px",
            color: "#4ade80",
            fontSize: "11px",
            fontWeight: "700",
            fontFamily: "monospace",
            cursor: "pointer",
          },
        },
        "Skip"
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

/* =========================================================================
   F11: PREVIOUS EXERCISE PERFORMANCE & GHOST VALUES
   ========================================================================= */
export function ExercisePreviousBadge({ exerciseId, exerciseName, unit = "kg", onApplySets }) {
  const [prevData, setPrevData] = h.useState(null);
  const [loading, setLoading] = h.useState(true);

  h.useEffect(() => {
    let cancelled = false;
    async function fetchPrev() {
      try {
        if (!window.__FORGE_DB__ || !window.__FORGE_DB__.workouts) {
          setLoading(false);
          return;
        }
        const workouts = await window.__FORGE_DB__.workouts.orderBy("date").reverse().toArray();
        for (const w of workouts) {
          if (w.deletedAt || !w.exercises) continue;
          const ex = w.exercises.find(
            (e) =>
              (e.exerciseId && e.exerciseId === exerciseId) ||
              (e.exerciseName && e.exerciseName.trim().toLowerCase() === exerciseName?.trim().toLowerCase())
          );
          if (ex && ex.sets && ex.sets.length > 0) {
            const completedSets = ex.sets.filter((s) => s.completed || (s.weightKg > 0 && s.reps > 0));
            if (completedSets.length > 0) {
              if (!cancelled) {
                setPrevData({
                  date: w.date,
                  workoutName: w.name,
                  sets: completedSets,
                });
                setLoading(false);
              }
              return;
            }
          }
        }
      } catch (e) {
        console.warn("[FORGE] Error fetching previous performance", e);
      }
      if (!cancelled) setLoading(false);
    }

    fetchPrev();
    return () => {
      cancelled = true;
    };
  }, [exerciseId, exerciseName]);

  if (loading || !prevData) {
    return h.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "11px",
          color: "#717672",
          background: "rgba(255, 255, 255, 0.03)",
          padding: "2px 8px",
          borderRadius: "6px",
          border: "1px dashed rgba(255, 255, 255, 0.1)",
          marginTop: "4px",
        },
      },
      "⚡ First session for this lift"
    );
  }

  // Format sets summary (e.g. 24kg × 10, 24kg × 8)
  const setsSummary = prevData.sets
    .slice(0, 3)
    .map((s) => `${s.weightKg}${unit} × ${s.reps}`)
    .join(", ") + (prevData.sets.length > 3 ? "…" : "");

  const handleApply = (e) => {
    e.stopPropagation();
    if (typeof onApplySets === "function") {
      const clonedSets = prevData.sets.map((s, idx) => ({
        id: "set-" + Date.now() + "-" + idx,
        weightKg: s.weightKg,
        reps: s.reps,
        warmup: !!s.warmup,
        completed: false,
        rpe: s.rpe || null,
      }));
      onApplySets(clonedSets);
    }
  };

  return h.createElement(
    "div",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "6px",
        marginTop: "4px",
      },
    },
    h.createElement(
      "span",
      {
        title: `Logged on ${prevData.date} (${prevData.workoutName})`,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "11px",
          fontWeight: "600",
          color: "#9ae6b4",
          background: "rgba(34, 197, 94, 0.1)",
          border: "1px solid rgba(74, 222, 128, 0.25)",
          padding: "3px 8px",
          borderRadius: "6px",
        },
      },
      h.createElement("span", null, "⚡ Last:"),
      h.createElement("span", { style: { color: "#e2e8e3" } }, setsSummary)
    ),
    typeof onApplySets === "function" &&
      h.createElement(
        "button",
        {
          type: "button",
          onClick: handleApply,
          title: "Copy weights and reps from last time into today's sets",
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "3px",
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#d1d5db",
            fontSize: "10px",
            fontWeight: "700",
            padding: "2px 7px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.15s ease",
          },
        },
        "📋 Autofill"
      )
  );
}

/* =========================================================================
   F12: SCREEN WAKE LOCK (PREVENTS PHONE FROM SLEEPING DURING WORKOUTS)
   ========================================================================= */
export function ScreenWakeLockToggle() {
  const [active, setActive] = h.useState(false);
  const wakeLockRef = h.useRef(null);

  const requestLock = async () => {
    try {
      if (typeof navigator !== "undefined" && "wakeLock" in navigator) {
        wakeLockRef.current = await navigator.wakeLock.request("screen");
        setActive(true);
        wakeLockRef.current.addEventListener("release", () => {
          setActive(false);
          wakeLockRef.current = null;
        });
      }
    } catch (_) {}
  };

  const releaseLock = async () => {
    if (wakeLockRef.current) {
      try {
        await wakeLockRef.current.release();
      } catch (_) {}
      wakeLockRef.current = null;
      setActive(false);
    }
  };

  h.useEffect(() => {
    requestLock();
    const handleVis = () => {
      if (document.visibilityState === "visible" && !wakeLockRef.current) {
        requestLock();
      }
    };
    document.addEventListener("visibilitychange", handleVis);
    return () => {
      releaseLock();
      document.removeEventListener("visibilitychange", handleVis);
    };
  }, []);

  return h.createElement(
    "button",
    {
      type: "button",
      onClick: active ? releaseLock : requestLock,
      title: active ? "Screen kept awake. Tap to allow phone sleep." : "Screen sleep allowed. Tap to keep screen awake.",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        background: active ? "rgba(34, 197, 94, 0.15)" : "rgba(255, 255, 255, 0.05)",
        border: active ? "1px solid #22c55e" : "1px solid #3c423e",
        color: active ? "#4ade80" : "#9ca3af",
        padding: "4px 10px",
        borderRadius: "16px",
        fontSize: "11px",
        fontWeight: "700",
        cursor: "pointer",
      },
    },
    h.createElement("span", null, active ? "💡 Screen On" : "💤 Sleep Ok")
  );
}


/* =========================================================================
   F14: INTERACTIVE MUSCLE HEATMAP & ANATOMY MANNEQUIN
   ========================================================================= */

export const ALL_MUSCLE_GROUPS = [
  'chest', 'front_delts', 'side_delts', 'rear_delts',
  'biceps', 'triceps', 'forearms', 'abs',
  'lats', 'traps', 'lower_back', 'quads',
  'hamstrings', 'glutes', 'calves'
];

export const MUSCLE_DISPLAY_NAMES = {
  chest: 'Chest (Pectorals)',
  front_delts: 'Front Deltoids',
  side_delts: 'Lateral Deltoids',
  rear_delts: 'Rear Deltoids',
  biceps: 'Biceps Brachii',
  triceps: 'Triceps Brachii',
  forearms: 'Forearms',
  abs: 'Abs & Core',
  lats: 'Latissimus Dorsi',
  traps: 'Trapezius & Upper Back',
  lower_back: 'Lower Back (Spinal Erectors)',
  quads: 'Quadriceps',
  hamstrings: 'Hamstrings',
  glutes: 'Gluteus Maximus',
  calves: 'Calves (Gastrocnemius)'
};

export const EXERCISE_MUSCLE_MAP = {
  // Push / Chest
  'neeraj-incline-db-bench-30': { primary: ['chest', 'front_delts'], secondary: ['triceps'] },
  'neeraj-flat-db-bench-press': { primary: ['chest'], secondary: ['triceps', 'front_delts'] },
  'neeraj-pec-deck-fly-machine': { primary: ['chest'], secondary: ['front_delts'] },
  'neeraj-assisted-dip-machine': { primary: ['chest', 'triceps'], secondary: ['front_delts'] },
  'barbell-bench-press': { primary: ['chest'], secondary: ['triceps', 'front_delts'] },
  'incline-db-press': { primary: ['chest', 'front_delts'], secondary: ['triceps'] },
  'dips-chest': { primary: ['chest', 'triceps'], secondary: ['front_delts'] },

  // Shoulders & Triceps
  'neeraj-seated-db-shoulder-press': { primary: ['front_delts', 'side_delts'], secondary: ['triceps', 'traps'] },
  'neeraj-standing-db-lateral-raise': { primary: ['side_delts'], secondary: ['traps'] },
  'neeraj-cable-lateral-raise-low-pulley': { primary: ['side_delts'], secondary: ['traps'] },
  'neeraj-overhead-cable-rope-triceps-ext': { primary: ['triceps'], secondary: [] },
  'neeraj-cable-rope-triceps-pushdown': { primary: ['triceps'], secondary: [] },
  'db-lateral-raises': { primary: ['side_delts'], secondary: ['traps'] },
  'overhead-press': { primary: ['front_delts', 'side_delts'], secondary: ['triceps', 'traps'] },
  'cable-triceps-pushdown': { primary: ['triceps'], secondary: [] },

  // Pull / Lats & Back
  'neeraj-lat-pulldown-vbar': { primary: ['lats'], secondary: ['biceps', 'rear_delts'] },
  'neeraj-single-arm-db-row': { primary: ['lats', 'traps'], secondary: ['biceps', 'rear_delts'] },
  'neeraj-straight-arm-cable-pulldown': { primary: ['lats'], secondary: ['triceps'] },
  'neeraj-chest-supported-tbar-row': { primary: ['traps', 'rear_delts', 'lats'], secondary: ['biceps'] },
  'neeraj-seated-cable-low-row': { primary: ['lats', 'traps'], secondary: ['biceps', 'rear_delts'] },
  'neeraj-reverse-pec-deck-fly': { primary: ['rear_delts', 'traps'], secondary: [] },
  'neeraj-db-shrugs-pause': { primary: ['traps'], secondary: [] },
  'barbell-deadlift': { primary: ['lower_back', 'glutes', 'hamstrings'], secondary: ['traps', 'forearms', 'lats'] },
  'barbell-row': { primary: ['lats', 'traps'], secondary: ['biceps', 'rear_delts', 'lower_back'] },
  'lat-pulldown': { primary: ['lats'], secondary: ['biceps', 'rear_delts'] },
  'face-pulls': { primary: ['rear_delts', 'traps'], secondary: [] },

  // Biceps & Arms
  'neeraj-standing-db-bicep-curl': { primary: ['biceps'], secondary: ['forearms'] },
  'neeraj-db-hammer-curls': { primary: ['biceps', 'forearms'], secondary: [] },
  'incline-db-curl': { primary: ['biceps'], secondary: ['forearms'] },

  // Legs / Quads & Calves
  'neeraj-tunturi-45-leg-press': { primary: ['quads'], secondary: ['glutes'] },
  'neeraj-pin-loaded-leg-extension': { primary: ['quads'], secondary: [] },
  'neeraj-standing-calf-raises': { primary: ['calves'], secondary: [] },
  'neeraj-bulgarian-split-squats': { primary: ['quads', 'glutes'], secondary: ['hamstrings'] },
  'neeraj-hip-abductor-adductor-machine': { primary: ['glutes'], secondary: [] },
  'barbell-squat': { primary: ['quads', 'glutes'], secondary: ['lower_back', 'calves'] },
  'leg-press': { primary: ['quads'], secondary: ['glutes'] },
  'standing-calf-raise': { primary: ['calves'], secondary: [] },

  // Hamstrings & Posterior Chain
  'neeraj-db-romanian-deadlifts': { primary: ['hamstrings', 'glutes'], secondary: ['lower_back', 'traps'] },
  'neeraj-pin-loaded-seated-leg-curls': { primary: ['hamstrings'], secondary: [] },
  'romanian-deadlift': { primary: ['hamstrings', 'glutes'], secondary: ['lower_back', 'traps'] },

  // Core / Abs
  'neeraj-machine-ab-crunch': { primary: ['abs'], secondary: [] },
  'hanging-leg-raise': { primary: ['abs'], secondary: ['forearms'] }
};

export function getMuscleHeatColor(sets) {
  if (!sets || sets <= 0) return '#27272a'; // Rested
  if (sets <= 5) return '#10b981'; // Light Stimulus (Emerald)
  if (sets <= 12) return '#f59e0b'; // Optimal Hypertrophy (Amber)
  return '#ef4444'; // High Fatigue / MRV (Red)
}

export function calculateRecoveryStatus(hoursElapsed) {
  if (hoursElapsed === undefined || hoursElapsed === null || hoursElapsed > 96) return 'fresh';
  if (hoursElapsed < 24) return 'rebuilding';
  if (hoursElapsed < 48) return 'recovering';
  return 'ready';
}

export function calculateMuscleVolumes(workouts = [], windowDays = 7, referenceNow = Date.now()) {
  const windowMs = windowDays * 24 * 60 * 60 * 1000;
  const cutoffTime = referenceNow - windowMs;

  const result = {};
  for (const m of ALL_MUSCLE_GROUPS) {
    result[m] = {
      muscle: m,
      displayName: MUSCLE_DISPLAY_NAMES[m],
      rollingSets: 0,
      recoveryStatus: 'fresh',
      heatColor: '#27272a',
      hoursSinceLastTrained: undefined,
      lastTrainedDate: null,
    };
  }

  const latestTimestamps = {};

  for (const w of workouts) {
    if (w.deletedAt || !w.exercises) continue;
    const workoutTime = new Date(w.date || w.created_at || w.updatedAt || Date.now()).getTime();

    for (const ex of w.exercises) {
      if (!ex.sets || ex.sets.length === 0) continue;
      const completedCount = ex.sets.filter((s) => s.completed || (s.weightKg > 0 && s.reps > 0)).length;
      if (completedCount === 0) continue;

      // Find targets
      const exKey = ex.exerciseId || ex.id || '';
      let target = EXERCISE_MUSCLE_MAP[exKey];
      if (!target) {
        // Fallback by name search
        const lowerName = (ex.exerciseName || ex.name || '').toLowerCase();
        for (const [key, mapping] of Object.entries(EXERCISE_MUSCLE_MAP)) {
          if (lowerName.includes(key.replace(/^neeraj-/, '').replace(/-/g, ' '))) {
            target = mapping;
            break;
          }
        }
      }
      if (!target) {
        // Broad group fallback
        const muscleGroup = (ex.muscle || '').toLowerCase();
        if (muscleGroup.includes('chest')) target = { primary: ['chest'], secondary: ['triceps'] };
        else if (muscleGroup.includes('back') || muscleGroup.includes('lat')) target = { primary: ['lats'], secondary: ['biceps'] };
        else if (muscleGroup.includes('shoulder') || muscleGroup.includes('delt')) target = { primary: ['side_delts'], secondary: ['traps'] };
        else if (muscleGroup.includes('leg') || muscleGroup.includes('quad')) target = { primary: ['quads'], secondary: ['glutes'] };
        else if (muscleGroup.includes('hamstring')) target = { primary: ['hamstrings'], secondary: ['glutes'] };
        else if (muscleGroup.includes('arm') || muscleGroup.includes('bicep')) target = { primary: ['biceps'], secondary: [] };
        else if (muscleGroup.includes('tricep')) target = { primary: ['triceps'], secondary: [] };
        else if (muscleGroup.includes('core') || muscleGroup.includes('ab')) target = { primary: ['abs'], secondary: [] };
        else target = { primary: ['chest'], secondary: [] };
      }

      // Credit primary
      for (const p of target.primary) {
        if (result[p]) {
          if (workoutTime >= cutoffTime) {
            result[p].rollingSets += completedCount * 1.0;
          }
          if (!latestTimestamps[p] || workoutTime > latestTimestamps[p]) {
            latestTimestamps[p] = workoutTime;
          }
        }
      }

      // Credit secondary
      for (const s of target.secondary) {
        if (result[s]) {
          if (workoutTime >= cutoffTime) {
            result[s].rollingSets += completedCount * 0.5;
          }
          if (!latestTimestamps[s] || workoutTime > latestTimestamps[s]) {
            latestTimestamps[s] = workoutTime;
          }
        }
      }
    }
  }

  // Finalize
  for (const m of ALL_MUSCLE_GROUPS) {
    const data = result[m];
    data.rollingSets = Math.round(data.rollingSets * 10) / 10;
    data.heatColor = getMuscleHeatColor(data.rollingSets);

    const latest = latestTimestamps[m];
    if (latest) {
      data.lastTrainedDate = new Date(latest).toISOString();
      const hours = Math.floor((referenceNow - latest) / (1000 * 60 * 60));
      data.hoursSinceLastTrained = hours;
      data.recoveryStatus = calculateRecoveryStatus(hours);
    } else {
      data.recoveryStatus = 'fresh';
    }
  }

  return result;
}

export function AnatomyMannequin({ muscleData = {}, selectedMuscle = null, onSelectMuscle }) {
  const [view, setView] = h.useState('front');

  const getFill = (m) => muscleData[m]?.heatColor || '#27272a';
  const isSelected = (m) => selectedMuscle === m;

  return h.createElement(
    "div",
    { style: { display: "flex", flexDirection: "column", alignItems: "center", width: "100%", userSelect: "none" } },
    // View Switcher
    h.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "#161b17",
          border: "1px solid #28322a",
          borderRadius: "10px",
          padding: "3px",
          marginBottom: "14px",
        },
      },
      h.createElement(
        "button",
        {
          type: "button",
          onClick: () => setView('front'),
          style: {
            padding: "5px 14px",
            borderRadius: "7px",
            fontSize: "11px",
            fontWeight: "800",
            fontFamily: "monospace",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            background: view === 'front' ? "#f59e0b" : "transparent",
            color: view === 'front' ? "#000" : "#8b9089",
            transition: "all 0.15s ease",
          },
        },
        "Anterior (Front)"
      ),
      h.createElement(
        "button",
        {
          type: "button",
          onClick: () => setView('back'),
          style: {
            padding: "5px 14px",
            borderRadius: "7px",
            fontSize: "11px",
            fontWeight: "800",
            fontFamily: "monospace",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            background: view === 'back' ? "#f59e0b" : "transparent",
            color: view === 'back' ? "#000" : "#8b9089",
            transition: "all 0.15s ease",
          },
        },
        "Posterior (Back)"
      )
    ),
    // SVG Mannequin Container
    h.createElement(
      "div",
      {
        style: {
          width: "100%",
          maxWidth: "260px",
          aspectRatio: "1/2",
          background: "radial-gradient(ellipse at center, #18201a 0%, #0d100e 100%)",
          border: "1px solid rgba(245, 158, 11, 0.25)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.7), inset 0 0 20px rgba(245, 158, 11, 0.05)",
          borderRadius: "16px",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)",
        },
      },
      h.createElement(
        "svg",
        {
          viewBox: "0 0 200 420",
          style: { width: "100%", height: "100%", cursor: "pointer" },
        },
        // Head & Neck
        h.createElement("circle", { cx: "100", cy: "30", r: "18", fill: "#1f2420", stroke: "#2e3831", strokeWidth: "1.5" }),
        h.createElement("path", { d: "M92 48 L108 48 L106 60 L94 60 Z", fill: "#1f2420", stroke: "#2e3831", strokeWidth: "1.5" }),

        view === 'front'
          ? h.createElement(
              "g",
              { id: "anterior" },
              // Chest
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('chest') },
                h.createElement("path", {
                  d: "M98 68 L70 68 C64 74 65 92 78 100 C90 102 98 96 98 88 Z",
                  fill: getFill('chest'),
                  stroke: isSelected('chest') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('chest') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M102 68 L130 68 C136 74 135 92 122 100 C110 102 102 96 102 88 Z",
                  fill: getFill('chest'),
                  stroke: isSelected('chest') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('chest') ? "2.5" : "1",
                })
              ),
              // Front Delts
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('front_delts') },
                h.createElement("path", {
                  d: "M68 66 C60 68 52 76 54 88 C58 92 64 88 68 84 Z",
                  fill: getFill('front_delts'),
                  stroke: isSelected('front_delts') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('front_delts') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M132 66 C140 68 148 76 146 88 C142 92 136 88 132 84 Z",
                  fill: getFill('front_delts'),
                  stroke: isSelected('front_delts') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('front_delts') ? "2.5" : "1",
                })
              ),
              // Biceps
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('biceps') },
                h.createElement("path", {
                  d: "M52 90 C48 98 46 114 50 124 C56 124 58 114 58 102 Z",
                  fill: getFill('biceps'),
                  stroke: isSelected('biceps') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('biceps') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M148 90 C152 98 154 114 150 124 C144 124 142 114 142 102 Z",
                  fill: getFill('biceps'),
                  stroke: isSelected('biceps') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('biceps') ? "2.5" : "1",
                })
              ),
              // Forearms
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('forearms') },
                h.createElement("path", {
                  d: "M48 126 C44 136 40 156 42 168 C46 168 50 154 52 140 Z",
                  fill: getFill('forearms'),
                  stroke: isSelected('forearms') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('forearms') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M152 126 C156 136 160 156 158 168 C154 168 150 154 148 140 Z",
                  fill: getFill('forearms'),
                  stroke: isSelected('forearms') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('forearms') ? "2.5" : "1",
                })
              ),
              // Abs / 6-pack
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('abs') },
                h.createElement("path", { d: "M82 104 L98 104 L98 118 L82 118 Z", fill: getFill('abs'), stroke: isSelected('abs') ? "#f59e0b" : "#3f4942", strokeWidth: isSelected('abs') ? "2" : "1" }),
                h.createElement("path", { d: "M102 104 L118 104 L118 118 L102 118 Z", fill: getFill('abs'), stroke: isSelected('abs') ? "#f59e0b" : "#3f4942", strokeWidth: isSelected('abs') ? "2" : "1" }),
                h.createElement("path", { d: "M82 122 L98 122 L98 136 L82 136 Z", fill: getFill('abs'), stroke: isSelected('abs') ? "#f59e0b" : "#3f4942", strokeWidth: isSelected('abs') ? "2" : "1" }),
                h.createElement("path", { d: "M102 122 L118 122 L118 136 L102 136 Z", fill: getFill('abs'), stroke: isSelected('abs') ? "#f59e0b" : "#3f4942", strokeWidth: isSelected('abs') ? "2" : "1" }),
                h.createElement("path", { d: "M84 140 L98 140 L98 154 L84 154 Z", fill: getFill('abs'), stroke: isSelected('abs') ? "#f59e0b" : "#3f4942", strokeWidth: isSelected('abs') ? "2" : "1" }),
                h.createElement("path", { d: "M102 140 L116 140 L116 154 L102 154 Z", fill: getFill('abs'), stroke: isSelected('abs') ? "#f59e0b" : "#3f4942", strokeWidth: isSelected('abs') ? "2" : "1" })
              ),
              // Quads
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('quads') },
                h.createElement("path", {
                  d: "M74 172 C68 188 64 220 70 252 C78 256 86 250 92 236 C96 216 94 186 92 172 Z",
                  fill: getFill('quads'),
                  stroke: isSelected('quads') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('quads') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M126 172 C132 188 136 220 130 252 C122 256 114 250 108 236 C104 216 106 186 108 172 Z",
                  fill: getFill('quads'),
                  stroke: isSelected('quads') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('quads') ? "2.5" : "1",
                })
              ),
              // Calves
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('calves') },
                h.createElement("path", {
                  d: "M70 268 C64 286 64 316 72 344 C78 346 84 340 84 326 C86 304 84 280 82 268 Z",
                  fill: getFill('calves'),
                  stroke: isSelected('calves') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('calves') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M130 268 C136 286 136 316 128 344 C122 346 116 340 116 326 C114 304 116 280 118 268 Z",
                  fill: getFill('calves'),
                  stroke: isSelected('calves') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('calves') ? "2.5" : "1",
                })
              )
            )
          : h.createElement(
              "g",
              { id: "posterior" },
              // Traps
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('traps') },
                h.createElement("path", {
                  d: "M100 56 L78 68 C74 74 84 88 100 96 C116 88 126 74 122 68 Z",
                  fill: getFill('traps'),
                  stroke: isSelected('traps') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('traps') ? "2.5" : "1",
                })
              ),
              // Rear Delts
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('rear_delts') },
                h.createElement("path", {
                  d: "M74 68 C64 70 56 80 58 90 C62 92 68 88 72 82 Z",
                  fill: getFill('rear_delts'),
                  stroke: isSelected('rear_delts') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('rear_delts') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M126 68 C136 70 144 80 142 90 C138 92 132 88 128 82 Z",
                  fill: getFill('rear_delts'),
                  stroke: isSelected('rear_delts') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('rear_delts') ? "2.5" : "1",
                })
              ),
              // Triceps
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('triceps') },
                h.createElement("path", {
                  d: "M52 92 C46 102 44 118 48 128 C54 126 56 116 56 104 Z",
                  fill: getFill('triceps'),
                  stroke: isSelected('triceps') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('triceps') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M148 92 C154 102 156 118 152 128 C146 126 144 116 144 104 Z",
                  fill: getFill('triceps'),
                  stroke: isSelected('triceps') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('triceps') ? "2.5" : "1",
                })
              ),
              // Lats
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('lats') },
                h.createElement("path", {
                  d: "M74 94 C68 108 66 126 76 138 C84 134 88 120 86 104 Z",
                  fill: getFill('lats'),
                  stroke: isSelected('lats') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('lats') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M126 94 C132 108 134 126 124 138 C116 134 112 120 114 104 Z",
                  fill: getFill('lats'),
                  stroke: isSelected('lats') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('lats') ? "2.5" : "1",
                })
              ),
              // Lower Back
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('lower_back') },
                h.createElement("path", {
                  d: "M86 106 L114 106 C112 124 114 144 112 154 L88 154 C86 144 88 124 86 106 Z",
                  fill: getFill('lower_back'),
                  stroke: isSelected('lower_back') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('lower_back') ? "2.5" : "1",
                })
              ),
              // Glutes
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('glutes') },
                h.createElement("path", {
                  d: "M76 158 C72 176 74 198 88 206 C96 206 98 194 98 174 L98 158 Z",
                  fill: getFill('glutes'),
                  stroke: isSelected('glutes') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('glutes') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M124 158 C128 176 126 198 112 206 C104 206 102 194 102 174 L102 158 Z",
                  fill: getFill('glutes'),
                  stroke: isSelected('glutes') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('glutes') ? "2.5" : "1",
                })
              ),
              // Hamstrings
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('hamstrings') },
                h.createElement("path", {
                  d: "M74 210 C70 228 68 248 74 266 C82 266 88 254 90 236 C92 222 90 212 88 210 Z",
                  fill: getFill('hamstrings'),
                  stroke: isSelected('hamstrings') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('hamstrings') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M126 210 C130 228 132 248 126 266 C118 266 112 254 110 236 C108 222 110 212 112 210 Z",
                  fill: getFill('hamstrings'),
                  stroke: isSelected('hamstrings') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('hamstrings') ? "2.5" : "1",
                })
              ),
              // Calves Posterior
              h.createElement(
                "g",
                { onClick: () => onSelectMuscle && onSelectMuscle('calves') },
                h.createElement("path", {
                  d: "M70 274 C62 292 62 316 70 342 C78 344 84 338 86 324 C88 304 84 284 80 274 Z",
                  fill: getFill('calves'),
                  stroke: isSelected('calves') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('calves') ? "2.5" : "1",
                }),
                h.createElement("path", {
                  d: "M130 274 C138 292 138 316 130 342 C122 344 116 338 114 324 C112 304 116 284 120 274 Z",
                  fill: getFill('calves'),
                  stroke: isSelected('calves') ? "#f59e0b" : "#3f4942",
                  strokeWidth: isSelected('calves') ? "2.5" : "1",
                })
              )
            )
      )
    )
  );
}

export function RecoveryDeck({ muscleData = {}, onSelectMuscle, selectedMuscle = null }) {
  const rebuilding = [];
  const recovering = [];
  const ready = [];

  Object.values(muscleData).forEach((data) => {
    if (data.recoveryStatus === 'rebuilding') rebuilding.push(data);
    else if (data.recoveryStatus === 'recovering') recovering.push(data);
    else ready.push(data);
  });

  const renderPill = (m, bg, border, color, activeRing) => {
    const isAct = selectedMuscle === m.muscle;
    return h.createElement(
      "button",
      {
        key: m.muscle,
        type: "button",
        onClick: () => onSelectMuscle && onSelectMuscle(m.muscle),
        style: {
          padding: "3px 8px",
          borderRadius: "6px",
          fontSize: "10px",
          fontWeight: isAct ? "800" : "600",
          background: isAct ? color : bg,
          border: "1px solid " + border,
          color: isAct ? "#000" : color,
          cursor: "pointer",
          transition: "all 0.15s ease",
          boxShadow: isAct ? "0 0 8px " + activeRing : "none",
        },
      },
      m.displayName.split(' ')[0]
    );
  };

  return h.createElement(
    "div",
    { style: { display: "flex", flexDirection: "column", gap: "10px", width: "100%" } },
    h.createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
      h.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: "#a4aca6", textTransform: "uppercase", letterSpacing: "0.05em" } }, "SYSTEM RECOVERY DECK"),
      h.createElement("span", { style: { fontSize: "10px", color: "#6b7280", fontFamily: "monospace" } }, "STIMULUS RECOVERY WINDOWS")
    ),
    h.createElement(
      "div",
      { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "8px" } },
      // Rebuilding
      h.createElement(
        "div",
        { style: { background: "#161113", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" } },
        h.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
          h.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: "#ef4444", display: "flex", alignItems: "center", gap: "4px" } }, "🔴 REBUILDING (<24H)"),
          h.createElement("span", { style: { fontSize: "9px", background: "rgba(239,68,68,0.2)", padding: "1px 5px", borderRadius: "4px", color: "#fca5a5", fontWeight: "800" } }, rebuilding.length)
        ),
        h.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px" } },
          rebuilding.length > 0 ? rebuilding.map((m) => renderPill(m, "rgba(239,68,68,0.1)", "rgba(239,68,68,0.3)", "#f87171", "#ef4444")) : h.createElement("span", { style: { fontSize: "10px", color: "#6b7280", fontStyle: "italic" } }, "None")
        )
      ),
      // Recovering
      h.createElement(
        "div",
        { style: { background: "#181611", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" } },
        h.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
          h.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: "#f59e0b", display: "flex", alignItems: "center", gap: "4px" } }, "🟡 RECOVERING (24-48H)"),
          h.createElement("span", { style: { fontSize: "9px", background: "rgba(245,158,11,0.2)", padding: "1px 5px", borderRadius: "4px", color: "#fde68a", fontWeight: "800" } }, recovering.length)
        ),
        h.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px" } },
          recovering.length > 0 ? recovering.map((m) => renderPill(m, "rgba(245,158,11,0.1)", "rgba(245,158,11,0.3)", "#fbbf24", "#f59e0b")) : h.createElement("span", { style: { fontSize: "10px", color: "#6b7280", fontStyle: "italic" } }, "None")
        )
      ),
      // Ready
      h.createElement(
        "div",
        { style: { background: "#111713", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" } },
        h.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
          h.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: "#10b981", display: "flex", alignItems: "center", gap: "4px" } }, "🟢 READY (≥48H)"),
          h.createElement("span", { style: { fontSize: "9px", background: "rgba(16,185,129,0.2)", padding: "1px 5px", borderRadius: "4px", color: "#a7f3d0", fontWeight: "800" } }, ready.length)
        ),
        h.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px" } },
          ready.length > 0 ? ready.map((m) => renderPill(m, "rgba(16,185,129,0.1)", "rgba(16,185,129,0.3)", "#34d399", "#10b981")) : h.createElement("span", { style: { fontSize: "10px", color: "#6b7280", fontStyle: "italic" } }, "None")
        )
      )
    )
  );
}

export function MuscleDetailModal({ muscle, data, onClose }) {
  if (!muscle || !data) return null;

  return h.createElement(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
      },
      onClick: onClose,
    },
    h.createElement(
      "div",
      {
        style: {
          width: "100%",
          maxWidth: "400px",
          background: "#121513",
          border: "1px solid #28322a",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
          color: "#e2e8e3",
          display: "flex",
          flexDirection: "column",
        },
        onClick: (e) => e.stopPropagation(),
      },
      // Header
      h.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderBottom: "1px solid #232b25",
            background: "#161b17",
          },
        },
        h.createElement(
          "div",
          null,
          h.createElement("div", { style: { fontSize: "14px", fontWeight: "800", color: "#ffffff" } }, data.displayName),
          h.createElement("div", { style: { fontSize: "10px", color: "#8b9089", fontFamily: "monospace", textTransform: "uppercase" } }, "FATIGUE & STIMULUS METRICS")
        ),
        h.createElement(
          "button",
          {
            onClick: onClose,
            style: {
              background: "#242c26",
              border: "1px solid #364239",
              borderRadius: "8px",
              color: "#a4aca6",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            },
          },
          "✕"
        )
      ),
      // Content
      h.createElement(
        "div",
        { style: { padding: "16px", display: "flex", flexDirection: "column", gap: "12px" } },
        h.createElement(
          "div",
          { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" } },
          h.createElement(
            "div",
            { style: { background: "#181d19", border: "1px solid #28322a", borderRadius: "10px", padding: "10px" } },
            h.createElement("div", { style: { fontSize: "10px", color: "#8b9089", fontFamily: "monospace" } }, "ROLLING SETS"),
            h.createElement("div", { style: { fontSize: "20px", fontWeight: "800", color: data.heatColor, marginTop: "2px" } }, data.rollingSets, h.createElement("span", { style: { fontSize: "11px", color: "#8b9089", marginLeft: "4px" } }, "sets"))
          ),
          h.createElement(
            "div",
            { style: { background: "#181d19", border: "1px solid #28322a", borderRadius: "10px", padding: "10px" } },
            h.createElement("div", { style: { fontSize: "10px", color: "#8b9089", fontFamily: "monospace" } }, "STATUS"),
            h.createElement("div", { style: { fontSize: "13px", fontWeight: "800", color: data.heatColor, marginTop: "6px", textTransform: "uppercase" } }, data.recoveryStatus)
          )
        ),
        h.createElement(
          "div",
          { style: { background: "#181d19", border: "1px solid #28322a", borderRadius: "10px", padding: "10px", fontSize: "11px" } },
          h.createElement("div", { style: { color: "#8b9089", fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase" } }, "LAST TRAINED TIME"),
          h.createElement("div", { style: { color: "#ffffff", fontWeight: "700", marginTop: "4px" } },
            data.hoursSinceLastTrained !== undefined ? data.hoursSinceLastTrained + " hours ago (" + (data.hoursSinceLastTrained < 24 ? "Acute recovery phase" : data.hoursSinceLastTrained < 48 ? "Secondary recovery" : "Fully primed to lift") + ")" : "Fully Rested (No recent session)"
          )
        )
      )
    )
  );
}

export function MuscleHeatmapDashboard() {
  const [windowDays, setWindowDays] = h.useState(7);
  const [selectedMuscle, setSelectedMuscle] = h.useState(null);
  const [workouts, setWorkouts] = h.useState([]);
  const [loading, setLoading] = h.useState(true);

  h.useEffect(() => {
    let cancelled = false;
    async function loadWorkouts() {
      try {
        if (window.__FORGE_DB__ && window.__FORGE_DB__.workouts) {
          const w = await window.__FORGE_DB__.workouts.toArray();
          if (!cancelled) {
            setWorkouts(w || []);
            setLoading(false);
          }
        }
      } catch (_) {
        if (!cancelled) setLoading(false);
      }
    }
    loadWorkouts();
    return () => { cancelled = true; };
  }, []);

  const muscleVolumes = h.useMemo(() => {
    return calculateMuscleVolumes(workouts, windowDays);
  }, [workouts, windowDays]);

  const stats = h.useMemo(() => {
    const list = Object.values(muscleVolumes);
    const totalSets = Math.round(list.reduce((acc, m) => acc + m.rollingSets, 0) * 10) / 10;
    const activeMuscles = list.filter((m) => m.rollingSets > 0).length;
    const optimalCount = list.filter((m) => m.rollingSets >= 6 && m.rollingSets <= 12).length;
    const highFatigueCount = list.filter((m) => m.rollingSets > 12).length;
    return { totalSets, activeMuscles, optimalCount, highFatigueCount };
  }, [muscleVolumes]);

  const selectedData = selectedMuscle ? muscleVolumes[selectedMuscle] : null;

  const sortedMuscles = h.useMemo(() => {
    return [...ALL_MUSCLE_GROUPS].sort(
      (a, b) => muscleVolumes[b].rollingSets - muscleVolumes[a].rollingSets
    );
  }, [muscleVolumes]);

  return h.createElement(
    "section",
    {
      style: {
        background: "#121614",
        border: "1px solid #28322a",
        borderRadius: "16px",
        padding: "16px",
        margin: "16px 0",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      },
    },
    // Top Bar
    h.createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" } },
      h.createElement(
        "div",
        null,
        h.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } },
          h.createElement("span", { style: { fontSize: "16px" } }, "🔥"),
          h.createElement("h3", { style: { fontSize: "14px", fontWeight: "800", color: "#ffffff", letterSpacing: "0.02em", margin: 0, textTransform: "uppercase" } }, "Muscle Activation & Fatigue Heatmap")
        ),
        h.createElement("div", { style: { fontSize: "10px", color: "#8b9089", fontFamily: "monospace", marginTop: "2px" } }, "ROLLING VOLUME STIMULUS & ANATOMICAL MANNEQUIN")
      ),
      // 7d / 14d toggle
      h.createElement(
        "div",
        { style: { display: "flex", gap: "4px", background: "#181d19", border: "1px solid #28322a", borderRadius: "8px", padding: "2px" } },
        h.createElement(
          "button",
          {
            type: "button",
            onClick: () => setWindowDays(7),
            style: {
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "10px",
              fontWeight: "800",
              fontFamily: "monospace",
              border: "none",
              cursor: "pointer",
              background: windowDays === 7 ? "#f59e0b" : "transparent",
              color: windowDays === 7 ? "#000" : "#8b9089",
            },
          },
          "7-DAY"
        ),
        h.createElement(
          "button",
          {
            type: "button",
            onClick: () => setWindowDays(14),
            style: {
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "10px",
              fontWeight: "800",
              fontFamily: "monospace",
              border: "none",
              cursor: "pointer",
              background: windowDays === 14 ? "#f59e0b" : "transparent",
              color: windowDays === 14 ? "#000" : "#8b9089",
            },
          },
          "14-DAY"
        )
      )
    ),
    // KPI Cards
    h.createElement(
      "div",
      { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", gap: "8px" } },
      h.createElement(
        "div",
        { style: { background: "#181d19", border: "1px solid #28322a", borderRadius: "10px", padding: "8px 10px" } },
        h.createElement("div", { style: { fontSize: "9px", color: "#8b9089", fontFamily: "monospace", fontWeight: "700" } }, "TOTAL STIMULUS"),
        h.createElement("div", { style: { fontSize: "16px", fontWeight: "800", color: "#ffffff", marginTop: "2px" } }, stats.totalSets, h.createElement("span", { style: { fontSize: "10px", color: "#8b9089", marginLeft: "2px" } }, "sets"))
      ),
      h.createElement(
        "div",
        { style: { background: "#181d19", border: "1px solid #28322a", borderRadius: "10px", padding: "8px 10px" } },
        h.createElement("div", { style: { fontSize: "9px", color: "#8b9089", fontFamily: "monospace", fontWeight: "700" } }, "TRAINED GROUPS"),
        h.createElement("div", { style: { fontSize: "16px", fontWeight: "800", color: "#10b981", marginTop: "2px" } }, stats.activeMuscles + " / 15")
      ),
      h.createElement(
        "div",
        { style: { background: "#181d19", border: "1px solid #28322a", borderRadius: "10px", padding: "8px 10px" } },
        h.createElement("div", { style: { fontSize: "9px", color: "#8b9089", fontFamily: "monospace", fontWeight: "700" } }, "OPTIMAL (6-12s)"),
        h.createElement("div", { style: { fontSize: "16px", fontWeight: "800", color: "#f59e0b", marginTop: "2px" } }, stats.optimalCount)
      ),
      h.createElement(
        "div",
        { style: { background: "#181d19", border: "1px solid #28322a", borderRadius: "10px", padding: "8px 10px" } },
        h.createElement("div", { style: { fontSize: "9px", color: "#8b9089", fontFamily: "monospace", fontWeight: "700" } }, "HIGH FATIGUE"),
        h.createElement("div", { style: { fontSize: "16px", fontWeight: "800", color: "#ef4444", marginTop: "2px" } }, stats.highFatigueCount)
      )
    ),
    // Mannequin
    h.createElement(AnatomyMannequin, {
      muscleData: muscleVolumes,
      selectedMuscle,
      onSelectMuscle: (m) => setSelectedMuscle(m),
    }),
    // Legend
    h.createElement(
      "div",
      { style: { display: "flex", justifyContent: "center", gap: "12px", fontSize: "10px", fontFamily: "monospace", color: "#8b9089" } },
      h.createElement("span", { style: { display: "flex", alignItems: "center", gap: "4px" } }, h.createElement("span", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#27272a" } }), "0s Rested"),
      h.createElement("span", { style: { display: "flex", alignItems: "center", gap: "4px" } }, h.createElement("span", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" } }), "1-5s Light"),
      h.createElement("span", { style: { display: "flex", alignItems: "center", gap: "4px" } }, h.createElement("span", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" } }), "6-12s Opt"),
      h.createElement("span", { style: { display: "flex", alignItems: "center", gap: "4px" } }, h.createElement("span", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" } }), ">12s High")
    ),
    // Recovery Deck
    h.createElement(RecoveryDeck, {
      muscleData: muscleVolumes,
      selectedMuscle,
      onSelectMuscle: (m) => setSelectedMuscle(m),
    }),
    // Muscle Volume Ranking List
    h.createElement(
      "div",
      { style: { background: "#161b17", border: "1px solid #28322a", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" } },
      h.createElement(
        "div",
        { style: { display: "flex", justifyContent: "space-between", fontSize: "10px", fontFamily: "monospace", color: "#a4aca6", fontWeight: "800" } },
        h.createElement("span", null, "VOLUME BY MUSCLE GROUP (" + windowDays + "D)"),
        h.createElement("span", null, "EFFECTIVE SETS")
      ),
      h.createElement(
        "div",
        { style: { maxHeight: "200px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "6px" } },
        sortedMuscles.map((muscle) => {
          const d = muscleVolumes[muscle];
          const pct = Math.min(100, Math.round((d.rollingSets / 16) * 100));
          return h.createElement(
            "div",
            {
              key: muscle,
              onClick: () => setSelectedMuscle(muscle),
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 6px",
                borderRadius: "6px",
                cursor: "pointer",
                background: selectedMuscle === muscle ? "rgba(255,255,255,0.06)" : "transparent",
                fontSize: "11px",
              },
            },
            h.createElement("span", { style: { width: "100px", color: "#e2e8e3", fontWeight: "600" } }, d.displayName.split(' ')[0]),
            h.createElement(
              "div",
              { style: { flex: 1, maxWidth: "140px", height: "6px", background: "#242c26", borderRadius: "3px", overflow: "hidden", margin: "0 8px" } },
              h.createElement("div", { style: { width: pct + "%", height: "100%", background: d.heatColor, borderRadius: "3px" } })
            ),
            h.createElement("span", { style: { width: "45px", textAlign: "right", fontFamily: "monospace", fontWeight: "700", color: "#ffffff" } }, d.rollingSets + "s")
          );
        })
      )
    ),
    // Modal
    h.createElement(MuscleDetailModal, {
      muscle: selectedMuscle,
      data: selectedData,
      onClose: () => setSelectedMuscle(null),
    })
  );
}


/* =========================================================================
   F15: PROGRESSIVE OVERLOAD AI RECOMMENDATION ENGINE
   ========================================================================= */

export function getWeightIncrementKg(exerciseId = '') {
  const lowerCompounds = [
    'barbell-squat',
    'barbell-deadlift',
    'leg-press',
    'romanian-deadlift',
    'front-squat',
    'neeraj-tunturi-45-leg-press',
    'neeraj-db-romanian-deadlifts'
  ];
  if (lowerCompounds.some((id) => exerciseId.toLowerCase().includes(id))) {
    return 5.0; // 5kg for heavy lower compound
  }
  return 2.5; // 2.5kg standard
}

export function calculateOverloadTarget(exerciseId, exerciseName, historicalWorkouts = [], repRange = { minReps: 8, maxReps: 12 }) {
  const { minReps, maxReps } = repRange;

  // Extract all completed sets for this exercise across historical workouts
  const exerciseSessions = [];
  for (const w of historicalWorkouts) {
    if (w.deletedAt || !w.exercises) continue;
    const ex = w.exercises.find(
      (e) => (e.exerciseId && e.exerciseId === exerciseId) ||
             (e.exerciseName && e.exerciseName.trim().toLowerCase() === exerciseName?.trim().toLowerCase())
    );
    if (ex && ex.sets && ex.sets.length > 0) {
      const completed = ex.sets.filter((s) => s.completed || (s.weightKg > 0 && s.reps > 0));
      if (completed.length > 0) {
        exerciseSessions.push({
          date: w.date || w.created_at || w.updatedAt,
          sets: completed
        });
      }
    }
  }

  // Sort chronological
  exerciseSessions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (exerciseSessions.length === 0) {
    return {
      exerciseId,
      currentWeightKg: 0,
      recommendedWeightKg: 0,
      recommendedReps: minReps,
      minReps,
      maxReps,
      action: 'maintain',
      isDeloadRecommended: false,
      rationale: 'Baseline session. Establish initial working load within ' + minReps + '–' + maxReps + ' reps.'
    };
  }

  const lastSession = exerciseSessions[exerciseSessions.length - 1];
  const lastWeights = lastSession.sets.map((s) => s.weightKg || 0);
  const lastWeight = Math.max(...lastWeights);
  const lastReps = lastSession.sets.map((s) => s.reps || 0);
  const minSessionReps = Math.min(...lastReps);
  const avgSessionReps = Math.round(lastReps.reduce((a, b) => a + b, 0) / lastReps.length);
  const rpes = lastSession.sets.map((s) => s.rpe).filter((r) => typeof r === 'number');
  const avgRpe = rpes.length > 0 ? rpes.reduce((a, b) => a + b, 0) / rpes.length : 8;

  // Deload condition (3+ sessions stalled or high systemic RPE)
  let isDeload = false;
  if (exerciseSessions.length >= 3) {
    const recent3 = exerciseSessions.slice(-3);
    const tonnages = recent3.map((sess) =>
      sess.sets.reduce((sum, s) => sum + (s.reps || 0) * (s.weightKg || 0), 0)
    );
    const isStalled = tonnages[2] <= tonnages[0] && tonnages[1] <= tonnages[0];
    const highRpeSessions = recent3.filter((sess) => {
      const sessRpes = sess.sets.map((s) => s.rpe).filter((r) => typeof r === 'number');
      return sessRpes.length > 0 && (sessRpes.reduce((a, b) => a + b, 0) / sessRpes.length) >= 9.5;
    });
    if (isStalled || highRpeSessions.length >= 2) {
      isDeload = true;
    }
  }

  if (isDeload) {
    const deloadWeight = Math.round(lastWeight * 0.9 * 2) / 2;
    return {
      exerciseId,
      currentWeightKg: lastWeight,
      recommendedWeightKg: Math.max(deloadWeight, 0),
      recommendedReps: minReps,
      minReps,
      maxReps,
      action: 'deload',
      isDeloadRecommended: true,
      rationale: 'Fatigue accumulation or plateau detected. Deload recommended: reduce load by ~10% and target ' + minReps + ' crisp reps.'
    };
  }

  const weightStep = getWeightIncrementKg(exerciseId);

  // Double Progression Rule 1: Ceiling unlocked
  if (minSessionReps >= maxReps && avgRpe <= 9.0) {
    return {
      exerciseId,
      currentWeightKg: lastWeight,
      recommendedWeightKg: lastWeight + weightStep,
      recommendedReps: minReps,
      minReps,
      maxReps,
      action: 'increase_weight',
      isDeloadRecommended: false,
      rationale: 'Ceiling unlocked! All sets reached ' + maxReps + ' reps. Add +' + weightStep + 'kg and reset target to ' + minReps + ' reps.'
    };
  }

  // Double Progression Rule 2: In range, push +1 rep
  if (minSessionReps >= minReps) {
    const nextRepTarget = Math.min(maxReps, avgSessionReps + 1);
    return {
      exerciseId,
      currentWeightKg: lastWeight,
      recommendedWeightKg: lastWeight,
      recommendedReps: nextRepTarget,
      minReps,
      maxReps,
      action: 'increase_reps',
      isDeloadRecommended: false,
      rationale: 'Hold ' + lastWeight + 'kg. Aim for +' + (nextRepTarget - avgSessionReps > 0 ? (nextRepTarget - avgSessionReps) : 1) + ' rep per set (target: ' + nextRepTarget + ' reps) until ' + maxReps + ' is reached.'
    };
  }

  // Rule 3: Below floor
  return {
    exerciseId,
    currentWeightKg: lastWeight,
    recommendedWeightKg: lastWeight,
    recommendedReps: minReps,
    minReps,
    maxReps,
    action: 'maintain',
    isDeloadRecommended: false,
    rationale: 'Working below the ' + minReps + '-rep floor. Maintain ' + lastWeight + 'kg and consolidate form to achieve ' + minReps + ' clean reps.'
  };
}

export function OverloadRecommendationCard({ exerciseId, exerciseName, unit = "kg", onApply }) {
  const [target, setTarget] = h.useState(null);
  const [loading, setLoading] = h.useState(true);

  h.useEffect(() => {
    let cancelled = false;
    async function evaluateOverload() {
      try {
        if (!window.__FORGE_DB__ || !window.__FORGE_DB__.workouts) {
          setLoading(false);
          return;
        }
        const w = await window.__FORGE_DB__.workouts.toArray();
        if (!cancelled) {
          const res = calculateOverloadTarget(exerciseId, exerciseName, w);
          setTarget(res);
          setLoading(false);
        }
      } catch (_) {
        if (!cancelled) setLoading(false);
      }
    }
    evaluateOverload();
    return () => { cancelled = true; };
  }, [exerciseId, exerciseName]);

  if (loading || !target || target.currentWeightKg === 0) return null;

  const getActionBadge = () => {
    switch (target.action) {
      case 'increase_weight':
        return h.createElement(
          "span",
          { style: { background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.4)", color: "#34d399", padding: "2px 6px", borderRadius: "4px", fontSize: "9px", fontFamily: "monospace", fontWeight: "800" } },
          "▲ +WEIGHT UNLOCKED"
        );
      case 'increase_reps':
        return h.createElement(
          "span",
          { style: { background: "rgba(245, 158, 11, 0.15)", border: "1px solid rgba(245, 158, 11, 0.4)", color: "#fbbf24", padding: "2px 6px", borderRadius: "4px", fontSize: "9px", fontFamily: "monospace", fontWeight: "800" } },
          "↻ +1 REP TARGET"
        );
      case 'deload':
        return h.createElement(
          "span",
          { style: { background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.4)", color: "#f87171", padding: "2px 6px", borderRadius: "4px", fontSize: "9px", fontFamily: "monospace", fontWeight: "800" } },
          "⚠ DELOAD RECOMMENDED"
        );
      default:
        return h.createElement(
          "span",
          { style: { background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)", color: "#a4aca6", padding: "2px 6px", borderRadius: "4px", fontSize: "9px", fontFamily: "monospace", fontWeight: "800" } },
          "CONSOLIDATE LOAD"
        );
    }
  };

  return h.createElement(
    "div",
    {
      style: {
        background: target.isDeloadRecommended ? "rgba(239, 68, 68, 0.08)" : "#141815",
        border: "1px solid " + (target.isDeloadRecommended ? "rgba(239, 68, 68, 0.3)" : "#28322a"),
        borderRadius: "10px",
        padding: "10px 12px",
        margin: "6px 0",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      },
    },
    h.createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
      h.createElement(
        "span",
        { style: { fontSize: "10px", fontWeight: "800", color: "#f59e0b", fontFamily: "monospace", display: "flex", alignItems: "center", gap: "4px" } },
        "⚡ OVERLOAD AI TARGET"
      ),
      getActionBadge()
    ),
    h.createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", background: "#181e19", padding: "6px 10px", borderRadius: "6px", border: "1px solid #28322a" } },
      h.createElement(
        "div",
        null,
        h.createElement("span", { style: { fontSize: "15px", fontWeight: "900", fontFamily: "monospace", color: "#ffffff" } },
          target.recommendedWeightKg + unit + " × " + target.recommendedReps + " reps"
        )
      ),
      target.recommendedWeightKg !== target.currentWeightKg && h.createElement(
        "span",
        { style: { fontSize: "10px", color: "#8b9089", fontFamily: "monospace", textDecoration: "line-through" } },
        target.currentWeightKg + unit
      )
    ),
    h.createElement("p", { style: { fontSize: "11px", color: "#a4aca6", margin: 0, lineHeight: "1.4" } }, target.rationale),
    typeof onApply === "function" && h.createElement(
      "button",
      {
        type: "button",
        onClick: () => onApply(target.recommendedWeightKg, target.recommendedReps),
        style: {
          marginTop: "2px",
          height: "28px",
          background: "#222a24",
          border: "1px solid #364239",
          borderRadius: "6px",
          color: "#4ade80",
          fontSize: "11px",
          fontWeight: "700",
          fontFamily: "monospace",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        },
      },
      "✓ Apply Target To Next Set"
    )
  );
}


/* =========================================================================
   F16: EXERCISE VIDEO FORM DEMOS & BIOMECHANICAL CUES
   ========================================================================= */

export const EXERCISE_TECHNIQUE_CATALOG = {
  // Push
  'neeraj-incline-db-bench-30': {
    name: 'Incline Dumbbell Bench Press (30°)',
    videoId: '8iPEnn-ltC8',
    category: 'Push',
    equipment: 'Dumbbell',
    primaryMuscles: ['Chest (Clavicular Head)', 'Front Delts'],
    secondaryMuscles: ['Triceps Brachii'],
    setupCues: [
      'Set incline bench strictly at 30° (or 2nd notch) to bias clavicular fibers.',
      'Kick dumbbells to shoulder level with knees as you lie back.',
      'Depress scapulae down into back pockets; maintain natural arch in lumbar spine.',
      'Plant feet flat and anchor glutes firmly onto the seat pad.'
    ],
    executionCues: [
      'Lower dumbbells slowly for 3 seconds until level with upper chest.',
      'Maintain 45–60° elbow tuck (prevent wide 90° flaring).',
      'Press upward and slightly inward in a natural arc without clacking weights at top.'
    ],
    commonMistakes: [
      'Setting bench at >45° turning the lift into a shoulder press.',
      'Allowing right shoulder to hike up toward ear on heavy reps.',
      'Bouncing out of the bottom stretch.'
    ]
  },
  'neeraj-pec-deck-fly-machine': {
    name: 'Pec Deck Fly Machine',
    videoId: 'O-Wn4z6k_z0',
    category: 'Push',
    equipment: 'Machine',
    primaryMuscles: ['Chest (Sternal Head)'],
    secondaryMuscles: ['Front Delts'],
    setupCues: [
      'Adjust seat height so handles align directly across mid-chest level.',
      'Pin shoulder blades back against pad throughout entire movement.'
    ],
    executionCues: [
      'Maintain slight bend at elbows (15° fixed micro-bend).',
      'Sweep elbows together and squeeze inner chest hard for 1 full second at peak.',
      'Resist on the way back for 3 seconds to feel deep pectoral stretch.'
    ],
    commonMistakes: [
      'Allowing shoulders to roll forward at full contraction.',
      'Using hands/wrists to push rather than driving with elbows.'
    ]
  },
  'neeraj-seated-db-shoulder-press': {
    name: 'Seated Dumbbell Shoulder Press',
    videoId: 'qEwKCR5JCog',
    category: 'Push',
    equipment: 'Dumbbell',
    primaryMuscles: ['Front Delts', 'Lateral Delts'],
    secondaryMuscles: ['Triceps', 'Upper Traps'],
    setupCues: [
      'Set bench to 75–80° (slight incline prevents harsh impingement vs flat 90°).',
      'Kick weights up to shoulder height, palms angled slightly inward (scapular plane).'
    ],
    executionCues: [
      'Press straight up overhead until dumbbells gently meet above head.',
      'Lower with control for 2 seconds until dumbbells reach chin or ear height.',
      'Keep core tightly braced into seat back.'
    ],
    commonMistakes: [
      'Excessive lower back arching away from bench pad.',
      'Pressing with elbows flared directly in coronal plane.'
    ]
  },
  'neeraj-standing-db-lateral-raise': {
    name: 'Standing Dumbbell Lateral Raises',
    videoId: '3VcKaXpzqRo',
    category: 'Push',
    equipment: 'Dumbbell',
    primaryMuscles: ['Lateral Deltoids'],
    secondaryMuscles: ['Upper Traps'],
    setupCues: [
      'Hinge hips back roughly 10° for optimal lateral head recruitment.',
      'Hold dumbbells at sides with slight elbow bend.'
    ],
    executionCues: [
      'Raise arms in the scapular plane (30° forward of body line).',
      'Lead with elbows as if pouring water from a pitcher at top.',
      'Stop at shoulder height and control the 2-second eccentric lowering.'
    ],
    commonMistakes: [
      'Using hip thrust or knee bounce momentum.',
      'Shrugging traps before delts initiate movement.'
    ]
  },
  'neeraj-overhead-cable-rope-triceps-ext': {
    name: 'Overhead Cable Rope Triceps Extension',
    videoId: 'ns-rgS_u_e4',
    category: 'Push',
    equipment: 'Cable',
    primaryMuscles: ['Triceps (Long Head)'],
    secondaryMuscles: [],
    setupCues: [
      'Set cable to shoulder height, face away from stack in split stance.',
      'Grip rope overhead with elbows pointed forward.'
    ],
    executionCues: [
      'Extend elbows forward and flare rope apart at peak lockout.',
      'Allow forearms to travel back behind head for maximum stretch on long head.'
    ],
    commonMistakes: [
      'Flaring elbows wide sideways.',
      'Arching lower back under cable load.'
    ]
  },
  'neeraj-flat-db-bench-press': {
    name: 'Flat Dumbbell Bench Press',
    videoId: 'VmB1G1K7vDA',
    category: 'Push',
    equipment: 'Dumbbell',
    primaryMuscles: ['Chest (Sternal Head)'],
    secondaryMuscles: ['Triceps', 'Front Delts'],
    setupCues: [
      'Lie back flat on bench with dumbbells over chest.',
      'Depress and retract scapulae; plant feet firmly on floor.'
    ],
    executionCues: [
      'Lower dumbbells with 45° tucked elbows until DBs touch chest line.',
      'Press up smoothly along chest fiber orientation.'
    ],
    commonMistakes: [
      'Loose shoulder blades causing unstable shoulder joint.',
      'Bouncing or jerking weights.'
    ]
  },
  'neeraj-assisted-dip-machine': {
    name: 'Assisted Dip Machine (Chest Bias)',
    videoId: '2z8JmcrW-As',
    category: 'Push',
    equipment: 'Machine',
    primaryMuscles: ['Lower Chest', 'Triceps'],
    secondaryMuscles: ['Front Delts'],
    setupCues: [
      'Select assistance counterweight, place knees on pad.',
      'Lean torso forward 20–30° to bias lower pectorals.'
    ],
    executionCues: [
      'Lower body until shoulders are at or slightly below 90° elbow bend.',
      'Press through heels of palms to lockout without rounding shoulders.'
    ],
    commonMistakes: [
      'Staying upright which biases triceps exclusively.',
      'Dropping too fast into shoulder joint.'
    ]
  },
  'neeraj-cable-lateral-raise-low-pulley': {
    name: 'Cable Lateral Raises (Low Pulley)',
    videoId: 'PPrzBWZDOhA',
    category: 'Push',
    equipment: 'Cable',
    primaryMuscles: ['Lateral Deltoids'],
    secondaryMuscles: ['Traps'],
    setupCues: [
      'Set pulley to lowest notch, hold handle in opposite hand behind or in front of body.',
      'Lean away from the pulley slightly.'
    ],
    executionCues: [
      'Raise arm out to side smoothly in scapular plane.',
      'Feel constant tension from the very bottom to top of movement.'
    ],
    commonMistakes: [
      'Yanking cable with torso sway.',
      'Lifting higher than shoulder parallel.'
    ]
  },
  'neeraj-cable-rope-triceps-pushdown': {
    name: 'Cable Rope Triceps Pushdown',
    videoId: '2-LAMcpzODU',
    category: 'Push',
    equipment: 'Cable',
    primaryMuscles: ['Triceps (Lateral Head)'],
    secondaryMuscles: [],
    setupCues: [
      'Attach rope to top pulley, hinge torso slightly forward, pin elbows to ribs.'
    ],
    executionCues: [
      'Push downward and spread rope tips apart at full lockout.',
      'Control eccentric return up to chest level.'
    ],
    commonMistakes: [
      'Letting elbows swing forward and backward.',
      'Using bodyweight to slam stack.'
    ]
  },

  // Pull
  'neeraj-lat-pulldown-vbar': {
    name: 'Lat Pulldown (Close-Grip V-Bar)',
    videoId: 'CAwf7n6Luuc',
    category: 'Pull',
    equipment: 'Cable',
    primaryMuscles: ['Latissimus Dorsi (Lower Lats)'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    setupCues: [
      'Attach close-grip V-bar to lat pulldown cable.',
      'Lock thighs under pads; sit tall with slight 10° backward lean.'
    ],
    executionCues: [
      'Pull elbows down toward hip pockets.',
      'Touch handle to upper chest and squeeze lats for 1 second.',
      'Return to full overhead stretch without releasing scapulae.'
    ],
    commonMistakes: [
      'Leaning back 45° turning movement into row.',
      'Yanking with lower back.'
    ]
  },
  'neeraj-single-arm-db-row': {
    name: 'Single-Arm Dumbbell Row',
    videoId: 'pYcpY20QaE8',
    category: 'Pull',
    equipment: 'Dumbbell',
    primaryMuscles: ['Lats', 'Rhomboids'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    setupCues: [
      'Rest one knee and hand on flat bench, back parallel to floor.',
      'Hang dumbbell in active hand with arm fully extended.'
    ],
    executionCues: [
      'Row dumbbell in a gentle J-curve toward hip crease.',
      'Drive with elbow, pausing at top of contraction.'
    ],
    commonMistakes: [
      'Twisting torso upward to fling weight.',
      'Pulling straight up to armpit.'
    ]
  },
  'neeraj-straight-arm-cable-pulldown': {
    name: 'Straight-Arm Cable Lat Pushdown',
    videoId: 'AjZOx9XJvh8',
    category: 'Pull',
    equipment: 'Cable',
    primaryMuscles: ['Latissimus Dorsi'],
    secondaryMuscles: ['Teres Major', 'Triceps'],
    setupCues: [
      'Attach wide bar or rope to high pulley, stand with hip hinge, arms straight.'
    ],
    executionCues: [
      'Sweep bar downward in an arc to touch thighs.',
      'Keep elbows fixed with micro-bend only; contract lats hard.'
    ],
    commonMistakes: [
      'Bending and extending elbows turning it into pushdown.',
      'Rounding thoracic spine.'
    ]
  },
  'neeraj-standing-db-bicep-curl': {
    name: 'Standing Dumbbell Bicep Curls',
    videoId: 'ykJmrZ5v0Oo',
    category: 'Pull',
    equipment: 'Dumbbell',
    primaryMuscles: ['Biceps Brachii'],
    secondaryMuscles: ['Forearms'],
    setupCues: [
      'Stand with feet shoulder-width, dumbbells held at sides with neutral grip.'
    ],
    executionCues: [
      'Curl upward, supinating wrists (pinkies turning up) as you reach mid-height.',
      'Pin elbows beside ribs throughout movement.'
    ],
    commonMistakes: [
      'Swinging elbows forward to engage front delts.',
      'Cutting off the bottom range of motion.'
    ]
  },
  'neeraj-chest-supported-tbar-row': {
    name: 'Chest-Supported T-Bar / Iso-Row',
    videoId: '0UBRfiO4zDs',
    category: 'Pull',
    equipment: 'Machine',
    primaryMuscles: ['Traps', 'Rhomboids', 'Rear Delts'],
    secondaryMuscles: ['Biceps', 'Lats'],
    setupCues: [
      'Position chest firmly against support pad; grip wide neutral or pronated handles.'
    ],
    executionCues: [
      'Retract scapulae and drive elbows backward flared at 45–60°.',
      'Hold peak squeeze for 1 second before controlled release.'
    ],
    commonMistakes: [
      'Lifting chest off pad to use lumbar extension.'
    ]
  },
  'neeraj-seated-cable-low-row': {
    name: 'Seated Cable Low Row',
    videoId: 'GZbfZ033f74',
    category: 'Pull',
    equipment: 'Cable',
    primaryMuscles: ['Lats', 'Mid Traps'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    setupCues: [
      'Sit with knees slightly bent, feet braced on footplates, spine upright.'
    ],
    executionCues: [
      'Pull handle to lower abdomen, leading with elbows and squeezing blades together.',
      'Allow gentle forward reach on stretch without rounding lower back.'
    ],
    commonMistakes: [
      'Rocking torso back and forth excessively.'
    ]
  },
  'neeraj-reverse-pec-deck-fly': {
    name: 'Reverse Pec Deck Fly Machine',
    videoId: '7e_Y_7L9s94',
    category: 'Pull',
    equipment: 'Machine',
    primaryMuscles: ['Rear Deltoids', 'Trapezius'],
    secondaryMuscles: ['Rhomboids'],
    setupCues: [
      'Face machine chest against pad, handles aligned at shoulder level.'
    ],
    executionCues: [
      'Push handles outward and backward in a wide semi-circle.',
      'Squeeze rear delts at peak without shrugging shoulders.'
    ],
    commonMistakes: [
      'Bending elbows excessively during the fly.'
    ]
  },
  'neeraj-db-hammer-curls': {
    name: 'Dumbbell Hammer Curls',
    videoId: 'zC3nLlEvin4',
    category: 'Pull',
    equipment: 'Dumbbell',
    primaryMuscles: ['Brachialis', 'Biceps', 'Brachioradialis'],
    secondaryMuscles: ['Forearms'],
    setupCues: [
      'Hold dumbbells with palms facing each other (neutral grip).'
    ],
    executionCues: [
      'Curl upward keeping thumbs pointing toward shoulders.',
      'Lower slowly to full extension.'
    ],
    commonMistakes: [
      'Swinging body for momentum.'
    ]
  },
  'neeraj-db-shrugs-pause': {
    name: 'Dumbbell Shrugs (2-Second Peak Hold)',
    videoId: 'g6qbq491Z98',
    category: 'Pull',
    equipment: 'Dumbbell',
    primaryMuscles: ['Upper Trapezius'],
    secondaryMuscles: ['Forearms'],
    setupCues: [
      'Stand holding heavy dumbbells at sides, spine neutral.'
    ],
    executionCues: [
      'Elevate shoulders vertically toward ears.',
      'Hold and squeeze peak contraction for 2 full seconds before lowering.'
    ],
    commonMistakes: [
      'Rolling shoulders in circles (injures rotator cuff).'
    ]
  },

  // Legs
  'neeraj-tunturi-45-leg-press': {
    name: 'Tunturi 45° Leg Press',
    videoId: 'IZxyjW7MPJQ',
    category: 'Legs',
    equipment: 'Machine',
    primaryMuscles: ['Quadriceps'],
    secondaryMuscles: ['Glutes', 'Adductors'],
    setupCues: [
      'Position lower back and hips firmly against pad with zero gap.',
      'Place feet shoulder-width in center of platform, toes slightly angled out.'
    ],
    executionCues: [
      'Release safeties and lower sled under control to 90° knee angle.',
      'Press through midfoot/heels back to top without locking out knees violently.'
    ],
    commonMistakes: [
      'Lowering too deep causing pelvis to tuck/lift off back pad (butt wink).',
      'Hyperextending and clicking knees at the top.'
    ]
  },
  'neeraj-pin-loaded-leg-extension': {
    name: 'Pin-Loaded Leg Extension Machine',
    videoId: 'YyvSfVjQeL0',
    category: 'Legs',
    equipment: 'Machine',
    primaryMuscles: ['Quadriceps (Rectus Femoris)'],
    secondaryMuscles: [],
    setupCues: [
      'Align knee joints directly with machine pivot axis.',
      'Set shin pad just above ankles; grip side handles firmly.'
    ],
    executionCues: [
      'Extend legs smoothly to full knee extension.',
      'Hold contraction for 1 second at top, then lower for 3 seconds.'
    ],
    commonMistakes: [
      'Kicking weight up violently using momentum.'
    ]
  },
  'neeraj-standing-calf-raises': {
    name: 'Standing Calf Raises',
    videoId: 'YMmgqO8Jo-k',
    category: 'Legs',
    equipment: 'Machine',
    primaryMuscles: ['Gastrocnemius', 'Soleus'],
    secondaryMuscles: [],
    setupCues: [
      'Place balls of feet on step edge, heels hanging free, knees nearly straight.'
    ],
    executionCues: [
      'Lower heels deep for 2-second stretch at bottom.',
      'Drive high on big toes and pause for 1 second at top contraction.'
    ],
    commonMistakes: [
      'Fast bouncing relying on Achilles tendon elasticity.'
    ]
  },
  'neeraj-machine-ab-crunch': {
    name: 'Machine Ab Crunch',
    videoId: '2pBT9bK7D1U',
    category: 'Core',
    equipment: 'Machine',
    primaryMuscles: ['Rectus Abdominis'],
    secondaryMuscles: [],
    setupCues: [
      'Sit with back against pad, hold handles or harness above shoulders.'
    ],
    executionCues: [
      'Exhale and curl spine downward into abdominal contraction.',
      'Hold crunch for 1 second and resist back slowly.'
    ],
    commonMistakes: [
      'Pulling with arms instead of curling abdominal muscles.'
    ]
  },
  'neeraj-db-romanian-deadlifts': {
    name: 'Dumbbell Romanian Deadlifts (RDLs)',
    videoId: 'JCXUYuzwNrM',
    category: 'Legs',
    equipment: 'Dumbbell',
    primaryMuscles: ['Hamstrings', 'Glutes'],
    secondaryMuscles: ['Spinal Erectors', 'Traps'],
    setupCues: [
      'Stand tall holding dumbbells across front of thighs.',
      'Unlock knees with slight 15° fixed micro-bend.'
    ],
    executionCues: [
      'Push hips directly back toward rear wall as dumbbells glide down shins.',
      'Descend until deep stretch in hamstrings (around mid-shin).',
      'Drive hips forward and contract glutes to stand.'
    ],
    commonMistakes: [
      'Rounding lower spine chasing floor depth.',
      'Bending knees into a squat.'
    ]
  },
  'neeraj-pin-loaded-seated-leg-curls': {
    name: 'Pin-Loaded Seated Leg Curls',
    videoId: 'ELOCsoDSmrg',
    category: 'Legs',
    equipment: 'Machine',
    primaryMuscles: ['Hamstrings'],
    secondaryMuscles: ['Calves'],
    setupCues: [
      'Sit with thigh pad clamped tight above knees; shin pad behind ankles.'
    ],
    executionCues: [
      'Curl heels under seat firmly.',
      'Hold contraction for 1 second, then control 3-second return.'
    ],
    commonMistakes: [
      'Thigh pad too loose allowing hips to lift.'
    ]
  },
  'neeraj-bulgarian-split-squats': {
    name: 'Bulgarian Split Squats (Dumbbell)',
    videoId: '2C-uNgKwPLE',
    category: 'Legs',
    equipment: 'Dumbbell',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus'],
    secondaryMuscles: ['Hamstrings', 'Adductors'],
    setupCues: [
      'Place top of rear foot flat on bench behind you.',
      'Set front foot roughly 2–3 feet forward, holding dumbbells at sides.'
    ],
    executionCues: [
      'Lower hips straight down until back knee hovers just above floor.',
      'Maintain slight forward torso lean to load target glute/quad.',
      'Drive through front heel to return to top.'
    ],
    commonMistakes: [
      'Front foot too close causing severe heel lift.'
    ]
  },
  'neeraj-hip-abductor-adductor-machine': {
    name: 'Hip Abductor / Adductor Machine',
    videoId: 'v5m5-Jj0Zqk',
    category: 'Legs',
    equipment: 'Machine',
    primaryMuscles: ['Gluteus Medius', 'Hip Abductors'],
    secondaryMuscles: [],
    setupCues: [
      'Sit upright with pads adjusted against outer or inner thighs.'
    ],
    executionCues: [
      'Push pads outward under control.',
      'Hold peak squeeze for 1 second before slow return.'
    ],
    commonMistakes: [
      'Using swinging momentum.'
    ]
  }
};

export function ExerciseDetailModal({ exercise, onClose }) {
  if (!exercise) return null;

  return h.createElement(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
      },
      onClick: onClose,
    },
    h.createElement(
      "div",
      {
        style: {
          width: "100%",
          maxWidth: "520px",
          maxHeight: "90vh",
          background: "#101411",
          border: "1px solid #28322a",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.9)",
          color: "#e2e8e3",
          display: "flex",
          flexDirection: "column",
        },
        onClick: (e) => e.stopPropagation(),
      },
      // Header
      h.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderBottom: "1px solid #232b25",
            background: "#161b17",
          },
        },
        h.createElement(
          "div",
          null,
          h.createElement(
            "div",
            { style: { display: "flex", gap: "6px", alignItems: "center" } },
            h.createElement("span", { style: { background: "rgba(245, 158, 11, 0.15)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", padding: "1px 6px", borderRadius: "4px", fontSize: "9px", fontFamily: "monospace", fontWeight: "800", textTransform: "uppercase" } }, exercise.category || "Lift"),
            h.createElement("span", { style: { fontSize: "10px", color: "#8b9089", fontFamily: "monospace" } }, exercise.equipment || "")
          ),
          h.createElement("h3", { style: { fontSize: "14px", fontWeight: "800", color: "#ffffff", margin: "4px 0 0" } }, exercise.name)
        ),
        h.createElement(
          "button",
          {
            onClick: onClose,
            style: {
              background: "#242c26",
              border: "1px solid #364239",
              borderRadius: "8px",
              color: "#a4aca6",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            },
          },
          "✕"
        )
      ),
      // Scrollable Content
      h.createElement(
        "div",
        { style: { padding: "16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px" } },
        // YouTube Player
        exercise.videoId && h.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: "6px" } },
          h.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "10px", fontFamily: "monospace", color: "#8b9089", textTransform: "uppercase" } },
            h.createElement("span", null, "▶ Technique Video Demonstration"),
            h.createElement("span", null, "ZERO-STORAGE STREAMING")
          ),
          h.createElement(
            "div",
            { style: { position: "relative", width: "100%", aspectRatio: "16/9", background: "#000000", borderRadius: "10px", overflow: "hidden", border: "1px solid #28322a" } },
            h.createElement("iframe", {
              src: "https://www.youtube-nocookie.com/embed/" + exercise.videoId + "?rel=0",
              title: exercise.name + " Technique",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true,
              loading: "lazy",
              style: { width: "100%", height: "100%", border: "none" },
            })
          )
        ),
        // Musculature tags
        h.createElement(
          "div",
          { style: { background: "#161b17", border: "1px solid #28322a", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" } },
          h.createElement("span", { style: { fontSize: "10px", fontFamily: "monospace", color: "#a4aca6", textTransform: "uppercase", fontWeight: "700" } }, "TARGET MUSCULATURE"),
          h.createElement(
            "div",
            { style: { display: "flex", flexWrap: "wrap", gap: "6px" } },
            (exercise.primaryMuscles || []).map((m) =>
              h.createElement("span", { key: m, style: { background: "rgba(245, 158, 11, 0.15)", border: "1px solid rgba(245, 158, 11, 0.4)", color: "#fbbf24", padding: "2px 8px", borderRadius: "6px", fontSize: "10px", fontWeight: "700" } }, "★ " + m + " (Primary)")
            ),
            (exercise.secondaryMuscles || []).map((m) =>
              h.createElement("span", { key: m, style: { background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)", color: "#a4aca6", padding: "2px 8px", borderRadius: "6px", fontSize: "10px" } }, m + " (Synergist)")
            )
          )
        ),
        // Setup Cues
        (exercise.setupCues || []).length > 0 && h.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: "6px" } },
          h.createElement("span", { style: { fontSize: "10px", fontFamily: "monospace", color: "#34d399", textTransform: "uppercase", fontWeight: "800" } }, "✓ SETUP & ALIGNMENT"),
          exercise.setupCues.map((cue, idx) =>
            h.createElement(
              "div",
              { key: idx, style: { display: "flex", gap: "8px", background: "#161b17", border: "1px solid #28322a", borderRadius: "8px", padding: "8px 10px", fontSize: "11px", color: "#d1d5db" } },
              h.createElement("span", { style: { color: "#34d399", fontWeight: "800", fontFamily: "monospace" } }, idx + 1 + "."),
              h.createElement("span", { style: { lineHeight: "1.4" } }, cue)
            )
          )
        ),
        // Execution Cues
        (exercise.executionCues || []).length > 0 && h.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: "6px" } },
          h.createElement("span", { style: { fontSize: "10px", fontFamily: "monospace", color: "#fbbf24", textTransform: "uppercase", fontWeight: "800" } }, "⚡ DYNAMIC EXECUTION"),
          exercise.executionCues.map((cue, idx) =>
            h.createElement(
              "div",
              { key: idx, style: { display: "flex", gap: "8px", background: "#161b17", border: "1px solid #28322a", borderRadius: "8px", padding: "8px 10px", fontSize: "11px", color: "#d1d5db" } },
              h.createElement("span", { style: { color: "#fbbf24", fontWeight: "800", fontFamily: "monospace" } }, idx + 1 + "."),
              h.createElement("span", { style: { lineHeight: "1.4" } }, cue)
            )
          )
        ),
        // Common Mistakes
        (exercise.commonMistakes || []).length > 0 && h.createElement(
          "div",
          { style: { background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" } },
          h.createElement("span", { style: { fontSize: "10px", fontFamily: "monospace", color: "#f87171", textTransform: "uppercase", fontWeight: "800" } }, "⚠ COMMON BIOMECHANICAL MISTAKES"),
          exercise.commonMistakes.map((m, idx) =>
            h.createElement(
              "div",
              { key: idx, style: { display: "flex", gap: "8px", fontSize: "11px", color: "#fca5a5" } },
              h.createElement("span", null, "✕"),
              h.createElement("span", { style: { lineHeight: "1.4" } }, m)
            )
          )
        )
      ),
      // Footer
      h.createElement(
        "div",
        { style: { padding: "12px 16px", borderTop: "1px solid #232b25", background: "#161b17", display: "flex", justifyContent: "flex-end" } },
        h.createElement(
          "button",
          {
            type: "button",
            onClick: onClose,
            style: {
              background: "#242c26",
              border: "1px solid #364239",
              borderRadius: "8px",
              color: "#ffffff",
              padding: "6px 16px",
              fontSize: "11px",
              fontWeight: "700",
              cursor: "pointer",
            },
          },
          "Close Guide"
        )
      )
    )
  );
}

export function ExerciseDemoButton({ exerciseId, exerciseName }) {
  const [isOpen, setIsOpen] = h.useState(false);

  const matched = h.useMemo(() => {
    if (exerciseId && EXERCISE_TECHNIQUE_CATALOG[exerciseId]) {
      return EXERCISE_TECHNIQUE_CATALOG[exerciseId];
    }
    const cleanName = (exerciseName || '').toLowerCase();
    for (const [key, item] of Object.entries(EXERCISE_TECHNIQUE_CATALOG)) {
      if (cleanName.includes(item.name.toLowerCase()) || cleanName.includes(key.replace(/^neeraj-/, '').replace(/-/g, ' '))) {
        return item;
      }
    }
    return {
      name: exerciseName || 'Exercise',
      videoId: '8iPEnn-ltC8', // general default fallback
      category: 'Compound',
      equipment: 'Weights',
      primaryMuscles: ['Target Muscle'],
      secondaryMuscles: ['Synergist'],
      setupCues: ['Position body securely with balanced foundation.', 'Engage core and set neutral spine.'],
      executionCues: ['Control eccentric negative for 2-3 seconds.', 'Push through full range of motion.'],
      commonMistakes: ['Jerking weight without tension control.']
    };
  }, [exerciseId, exerciseName]);

  return h.createElement(
    h.Fragment,
    null,
    h.createElement(
      "button",
      {
        type: "button",
        onClick: (e) => {
          e.stopPropagation();
          setIsOpen(true);
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          background: "rgba(245, 158, 11, 0.12)",
          border: "1px solid rgba(245, 158, 11, 0.3)",
          color: "#fbbf24",
          fontSize: "10px",
          fontWeight: "700",
          fontFamily: "monospace",
          padding: "2px 7px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.15s ease",
          marginTop: "4px",
          marginLeft: "6px",
        },
        title: "View Technique Video & Biomechanical Cues",
      },
      "▶ Demo & Form"
    ),
    isOpen && h.createElement(ExerciseDetailModal, {
      exercise: matched,
      onClose: () => setIsOpen(false),
    })
  );
}



// =========================================================================
// Visual Enhancements: Density Mode Toggle & Exercise Micro Badges
// =========================================================================

export function DensityModeToggle() {
  const [isChalk, setIsChalk] = h.useState(() => {
    try {
      return localStorage.getItem("forge_density_mode") === "chalk";
    } catch (_) {
      return false;
    }
  });

  h.useEffect(() => {
    if (typeof document !== "undefined") {
      if (isChalk) {
        document.body.classList.add("chalk-mode");
      } else {
        document.body.classList.remove("chalk-mode");
      }
    }
    try {
      localStorage.setItem("forge_density_mode", isChalk ? "chalk" : "dense");
    } catch (_) {}
  }, [isChalk]);

  return h.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        setIsChalk(!isChalk);
        if (navigator.vibrate) navigator.vibrate(30);
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        background: isChalk ? "rgba(245, 158, 11, 0.2)" : "rgba(255, 255, 255, 0.06)",
        border: isChalk ? "1px solid #f59e0b" : "1px solid rgba(255, 255, 255, 0.12)",
        color: isChalk ? "#fbbf24" : "#9ca3af",
        borderRadius: "6px",
        padding: "3px 8px",
        fontSize: "11px",
        fontWeight: "700",
        fontFamily: "monospace",
        cursor: "pointer",
        transition: "all 0.18s ease",
      },
      title: isChalk ? "Switch to Compact Dense Mode" : "Switch to Chalk Mode (Large Touch Targets)",
    },
    isChalk ? "🖐️ Chalk" : "📏 Dense"
  );
}

export function ExerciseMicroBadges({ exerciseName = "" }) {
  const norm = (exerciseName || "").toLowerCase();
  
  // Equipment detection
  let equip = { label: "Free Weight", icon: "⚡", bg: "rgba(148, 163, 184, 0.12)", color: "#cbd5e1" };
  if (/barbell|\bbb\b|deadlift|squat|bench press|rdl/i.test(norm) && !/dumbbell|\bdb\b/i.test(norm)) {
    equip = { label: "Barbell", icon: "🏋️", bg: "rgba(59, 130, 246, 0.12)", color: "#93c5fd" };
  } else if (/dumbbell|\bdb\b/i.test(norm)) {
    equip = { label: "Dumbbell", icon: "🔩", bg: "rgba(168, 85, 247, 0.12)", color: "#d8b4fe" };
  } else if (/cable|pulley|lat pulldown|rope|pushdown/i.test(norm)) {
    equip = { label: "Cable", icon: "⚙️", bg: "rgba(245, 158, 11, 0.12)", color: "#fcd34d" };
  } else if (/machine|press machine|hack squat|pec deck|leg extension|leg curl|smith/i.test(norm)) {
    equip = { label: "Machine", icon: "🏢", bg: "rgba(20, 184, 166, 0.12)", color: "#5eead4" };
  } else if (/pull-up|chin-up|dip|hanging|push-up|plank|hyperextension/i.test(norm)) {
    equip = { label: "Bodyweight", icon: "🧘", bg: "rgba(34, 197, 94, 0.12)", color: "#86efac" };
  }

  // Primary muscle detection
  let muscle = { label: "Compound", dot: "#fbbf24" };
  if (/bench|chest|fly|pec|push-up|dip/i.test(norm) && !/overhead|tricep/i.test(norm)) {
    muscle = { label: "Chest", dot: "#f43f5e" };
  } else if (/lat|row|pull|chin/i.test(norm)) {
    muscle = { label: "Back", dot: "#0ea5e9" };
  } else if (/shoulder|lateral raise|deltoid|overhead press|arnold/i.test(norm)) {
    muscle = { label: "Shoulders", dot: "#eab308" };
  } else if (/squat|leg press|hack squat|lunge|quad|extension/i.test(norm)) {
    muscle = { label: "Quads", dot: "#10b981" };
  } else if (/rdl|deadlift|leg curl|hamstring/i.test(norm)) {
    muscle = { label: "Hamstrings", dot: "#8b5cf6" };
  } else if (/tricep|skull crusher|pushdown/i.test(norm)) {
    muscle = { label: "Triceps", dot: "#f97316" };
  } else if (/bicep|curl|hammer/i.test(norm)) {
    muscle = { label: "Biceps", dot: "#06b6d4" };
  } else if (/calf|calves/i.test(norm)) {
    muscle = { label: "Calves", dot: "#14b8a6" };
  } else if (/abs|crunch|plank|core|hanging leg/i.test(norm)) {
    muscle = { label: "Core", dot: "#a855f7" };
  }

  return h.createElement(
    "div",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        marginTop: "3px",
        flexWrap: "wrap",
      },
    },
    h.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "3px",
          padding: "1px 6px",
          borderRadius: "4px",
          background: equip.bg,
          border: `1px solid ${equip.color}33`,
          color: equip.color,
          fontSize: "9.5px",
          fontWeight: "700",
          fontFamily: "monospace",
          letterSpacing: "0.02em",
        },
      },
      `${equip.icon} ${equip.label}`
    ),
    h.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          padding: "1px 6px",
          borderRadius: "4px",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.09)",
          color: "#e2e8e3",
          fontSize: "9.5px",
          fontWeight: "700",
          fontFamily: "monospace",
          letterSpacing: "0.02em",
        },
      },
      h.createElement("span", {
        style: {
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: muscle.dot,
          boxShadow: `0 0 5px ${muscle.dot}`,
          display: "inline-block",
        },
      }),
      muscle.label
    )
  );
}
