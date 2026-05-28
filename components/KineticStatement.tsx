"use client";
import { useRef } from "react";
import { useKineticProgress } from "@/hooks/useScroll";

const tokens = [
  "I", "turn", "ambiguous",
  "system", "problems",
  "—", "real-time", "data,",
  "agentic", "AI,",
  "distributed", "APIs", "—",
  "into", "shipped", "software.",
];

export default function KineticStatement() {
  const ref = useRef<HTMLElement>(null);
  const prog = useKineticProgress(ref);

  return (
    <section
      ref={ref}
      style={{
        background: "var(--bg)",
        color: "var(--ink)",
        padding: "calc(160px * var(--pad-scale)) calc(40px * var(--pad-scale))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          marginBottom: 48,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
          (Manifesto)
        </span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          {String(Math.round(prog * 100)).padStart(3, "0")}%
        </span>
      </div>

      {/* Kinetic sentence */}
      <h2
        aria-label={tokens.join(" ")}
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "var(--display-style)",
          fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
          fontSize: "clamp(56px, 9.5vw, 180px)",
          lineHeight: 0.98,
          letterSpacing: "var(--display-tracking, -0.03em)",
          margin: 0,
          maxWidth: 1500,
          display: "flex",
          flexWrap: "wrap",
          gap: "0.12em 0.28em",
        }}
      >
        {tokens.map((w, i) => {
          const total = tokens.length;
          const wordStart = (i / total) * 0.85;
          const wordEnd = wordStart + 1 / total;
          const local = Math.max(0, Math.min(1, (prog - wordStart) / (wordEnd - wordStart)));
          const opacity = 0.18 + local * 0.82;
          const isAccentWord = i % 2 === 0;
          const activeColor = isAccentWord ? "var(--accent)" : "var(--signal)";
          const color = local > 0.55 ? activeColor : "var(--ink)";
          const lift = -8 * local;
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                color,
                opacity,
                transform: `translateY(${lift}px)`,
                transition: "color 0.5s ease, opacity 0.4s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {w}
            </span>
          );
        })}
      </h2>

      {/* Progress bar */}
      <div
        style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 20,
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
        }}
      >
        <span>Reading</span>
        <div style={{ height: 1, background: "var(--ink-soft)", position: "relative", opacity: 0.4 }}>
          <div
            style={{
              position: "absolute",
              top: -1,
              left: 0,
              height: 3,
              background: "var(--accent)",
              width: `${prog * 100}%`,
              transition: "width 0.15s linear",
            }}
          />
        </div>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          0.{String(Math.round(prog * 100)).padStart(2, "0")} / 1.00
        </span>
      </div>
    </section>
  );
}
