import { r as h } from "./index-CiCrIMMp.js?v=profiles-v5";

class ChartErrorBoundary extends h.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.warn("Chart error caught:", err);
  }
  render() {
    if (this.state.hasError) {
      return h.createElement(
        "div",
        { className: "chart-loading", style: { color: "#8b9089" } },
        "Chart preview is currently unavailable."
      );
    }
    return this.props.children;
  }
}

function ProgressChart({ series = [], unit = "kg" }) {
  const [hoveredIdx, setHoveredIdx] = h.useState(null);
  const containerRef = h.useRef(null);

  if (!series || !series.length) {
    return h.createElement(
      "div",
      { className: "chart-loading", style: { color: "#8b9089" } },
      "No chart data available for this exercise."
    );
  }

  const width = 620;
  const height = 280;
  const padding = { top: 25, right: 30, bottom: 45, left: 55 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  // Extract values
  const weights = series.map((d) => (typeof d.weight === "number" ? d.weight : 0));
  const e1rms = series.map((d) => (typeof d.e1rm === "number" ? d.e1rm : 0));
  const allVals = [...weights, ...e1rms].filter((v) => !isNaN(v) && v > 0);

  const rawMin = allVals.length ? Math.min(...allVals) : 0;
  const rawMax = allVals.length ? Math.max(...allVals) : 100;

  const yMargin = Math.max((rawMax - rawMin) * 0.15, 5);
  const yMin = Math.max(0, Math.floor((rawMin - yMargin) / 5) * 5);
  const yMax = Math.max(yMin + 10, Math.ceil((rawMax + yMargin) / 5) * 5);
  const yRange = yMax - yMin;

  const numPoints = series.length;
  const getX = (idx) => {
    if (numPoints <= 1) return padding.left + innerW / 2;
    return padding.left + (idx / (numPoints - 1)) * innerW;
  };

  const getY = (val) => {
    if (yRange === 0) return padding.top + innerH / 2;
    return padding.top + innerH - ((val - yMin) / yRange) * innerH;
  };

  // Y-axis grid ticks (4 horizontal lines)
  const yTicks = [0, 0.333, 0.666, 1].map((pct) => Math.round(yMin + pct * yRange));

  // Build SVG path strings
  let weightPath = "";
  let e1rmPath = "";

  series.forEach((d, i) => {
    const x = getX(i);
    const yw = getY(d.weight || 0);
    const ye = getY(d.e1rm || 0);
    if (i === 0) {
      weightPath += `M ${x.toFixed(1)} ${yw.toFixed(1)}`;
      e1rmPath += `M ${x.toFixed(1)} ${ye.toFixed(1)}`;
    } else {
      weightPath += ` L ${x.toFixed(1)} ${yw.toFixed(1)}`;
      e1rmPath += ` L ${x.toFixed(1)} ${ye.toFixed(1)}`;
    }
  });

  const activeItem = hoveredIdx !== null && series[hoveredIdx] ? series[hoveredIdx] : null;

  return h.createElement(
    "div",
    {
      className: "chart-wrap",
      ref: containerRef,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        userSelect: "none",
        touchAction: "pan-y"
      }
    },
    // Legend header
    h.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "18px",
          marginBottom: "10px",
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "0.03em"
        }
      },
      h.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "6px", color: "#c8ff35" } },
        h.createElement("span", {
          style: {
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: "#c8ff35",
            display: "inline-block"
          }
        }),
        `Weight (${unit})`
      ),
      h.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "6px", color: "#f2f0e8" } },
        h.createElement("span", {
          style: {
            width: "14px",
            height: "0px",
            borderTop: "2px dashed #f2f0e8",
            display: "inline-block"
          }
        }),
        `Est. 1RM (${unit})`
      )
    ),
    // SVG Canvas
    h.createElement(
      "svg",
      {
        viewBox: `0 0 ${width} ${height}`,
        preserveAspectRatio: "xMidYMid meet",
        style: { width: "100%", height: "calc(100% - 32px)", overflow: "visible" },
        onMouseLeave: () => setHoveredIdx(null)
      },
      // Grid lines & Y-labels
      h.createElement(
        "g",
        { className: "grid-lines" },
        yTicks.map((tickVal) => {
          const y = getY(tickVal);
          return h.createElement(
            "g",
            { key: `grid-${tickVal}` },
            h.createElement("line", {
              x1: padding.left,
              y1: y,
              x2: width - padding.right,
              y2: y,
              stroke: "#2a2d2a",
              strokeWidth: 1,
              strokeDasharray: "3 3"
            }),
            h.createElement(
              "text",
              {
                x: padding.left - 10,
                y: y + 4,
                textAnchor: "end",
                fill: "#8b9089",
                fontSize: 11,
                fontFamily: "inherit"
              },
              `${tickVal}`
            )
          );
        })
      ),
      // X-axis tick labels
      h.createElement(
        "g",
        { className: "x-ticks" },
        series.map((d, i) => {
          if (numPoints > 8 && i % Math.ceil(numPoints / 6) !== 0 && i !== numPoints - 1) {
            return null;
          }
          const x = getX(i);
          return h.createElement(
            "text",
            {
              key: `x-tick-${i}`,
              x: x,
              y: height - 12,
              textAnchor: "middle",
              fill: hoveredIdx === i ? "#c8ff35" : "#8b9089",
              fontSize: 11,
              fontWeight: hoveredIdx === i ? "600" : "normal",
              fontFamily: "inherit"
            },
            d.label || d.date || ""
          );
        })
      ),
      // Est. 1RM line (dashed)
      numPoints > 1 &&
        h.createElement("path", {
          d: e1rmPath,
          fill: "none",
          stroke: "#f2f0e8",
          strokeWidth: 2,
          strokeDasharray: "5 4",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
      // Weight line (solid lime)
      numPoints > 1 &&
        h.createElement("path", {
          d: weightPath,
          fill: "none",
          stroke: "#c8ff35",
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
      // Data point dots & hover zones
      series.map((d, i) => {
        const x = getX(i);
        const yw = getY(d.weight || 0);
        const ye = getY(d.e1rm || 0);
        const isHovered = hoveredIdx === i;

        return h.createElement(
          "g",
          {
            key: `point-${i}`,
            style: { cursor: "pointer" },
            onMouseEnter: () => setHoveredIdx(i),
            onClick: () => setHoveredIdx(i)
          },
          // Invisible touch/mouse target
          h.createElement("rect", {
            x: x - (numPoints > 1 ? innerW / (numPoints * 2) : 25),
            y: padding.top,
            width: numPoints > 1 ? innerW / numPoints : 50,
            height: innerH,
            fill: "transparent"
          }),
          // 1RM small dot
          h.createElement("circle", {
            cx: x,
            cy: ye,
            r: isHovered ? 4.5 : 3,
            fill: "#f2f0e8",
            stroke: "#171a18",
            strokeWidth: 1.5
          }),
          // Weight main dot
          h.createElement("circle", {
            cx: x,
            cy: yw,
            r: isHovered ? 6 : 4,
            fill: "#c8ff35",
            stroke: "#171a18",
            strokeWidth: 2
          }),
          // Active halo on hover
          isHovered &&
            h.createElement("circle", {
              cx: x,
              cy: yw,
              r: 10,
              fill: "none",
              stroke: "rgba(200, 255, 55, 0.4)",
              strokeWidth: 2
            })
        );
      }),
      // Crosshair line on hover
      activeItem &&
        h.createElement("line", {
          x1: getX(hoveredIdx),
          y1: padding.top,
          x2: getX(hoveredIdx),
          y2: height - padding.bottom,
          stroke: "rgba(200, 255, 55, 0.3)",
          strokeWidth: 1.5,
          strokeDasharray: "2 2",
          pointerEvents: "none"
        })
    ),
    // Interactive Tooltip
    activeItem &&
      h.createElement(
        "div",
        {
          style: {
            position: "absolute",
            top: "38px",
            left: `${Math.min(
              Math.max((getX(hoveredIdx) / width) * 100, 15),
              85
            )}%`,
            transform: "translateX(-50%)",
            background: "#171a18",
            border: "1px solid #343834",
            borderRadius: "12px",
            padding: "8px 14px",
            pointerEvents: "none",
            boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            zIndex: 10,
            whiteSpace: "nowrap"
          }
        },
        h.createElement(
          "div",
          { style: { color: "#8b9089", fontSize: "11px", marginBottom: "4px" } },
          activeItem.label || activeItem.date
        ),
        h.createElement(
          "div",
          {
            style: {
              color: "#c8ff35",
              fontSize: "13px",
              fontWeight: "700",
              display: "flex",
              justifyContent: "space-between",
              gap: "12px"
            }
          },
          h.createElement("span", null, "Weight:"),
          h.createElement("span", null, `${activeItem.weight} ${unit}`)
        ),
        h.createElement(
          "div",
          {
            style: {
              color: "#f2f0e8",
              fontSize: "12px",
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "2px"
            }
          },
          h.createElement("span", null, "Est. 1RM:"),
          h.createElement("span", null, `${activeItem.e1rm} ${unit}`)
        )
      )
  );
}

function SafeProgressChart(props) {
  return h.createElement(ChartErrorBoundary, null, h.createElement(ProgressChart, props));
}

export { SafeProgressChart as default };
