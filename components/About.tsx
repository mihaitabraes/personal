"use client";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import SplitWords from "@/components/SplitWords";

const stats = [
  { n: "06", l: "Years shipping product" },
  { n: "11", l: "Members in the Agile crew I founded" },
  { n: "12", l: "Generative AI & Cloud certifications" },
  { n: "00", l: "Features shipped without a data rationale" },
];

function StatCell({ s, i, inView }: { s: { n: string; l: string }; i: number; inView: boolean }) {
  const n = useCountUp(s.n, inView, 1400 + i * 200);
  return (
    <div
      className="stat-cell"
      style={{
        background: "var(--ink)",
        padding: "36px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minHeight: 190,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "var(--display-style)",
          fontSize: 84,
          lineHeight: 1,
          letterSpacing: "-0.045em",
          color: i === 0 ? "var(--accent)" : i === 3 ? "var(--signal)" : "var(--bg)",
          transform: inView ? "translateY(0)" : "translateY(40px)",
          opacity: inView ? 1 : 0,
          transition: `transform 0.9s cubic-bezier(0.22,1,0.36,1) ${0.4 + i * 0.1}s, opacity 0.6s ease ${0.4 + i * 0.1}s`,
          fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {n}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--bg)",
          opacity: 0.72,
          maxWidth: 220,
          lineHeight: 1.45,
        }}
      >
        {s.l}
      </span>
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 16,
          right: 18,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "var(--ink-soft)",
        }}
      >
        {String(i + 1).padStart(2, "0")} / 04
      </span>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "var(--ink)",
        color: "var(--bg)",
        padding: "calc(140px * var(--pad-scale)) calc(48px * var(--pad-scale))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "calc(80px * var(--gap-scale))",
          alignItems: "start",
        }}
      >
        {/* Sticky heading */}
        <div style={{ position: "sticky", top: 140 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 28,
            }}
          >
            <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            (01) The setup
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "var(--display-style)",
              fontWeight: "var(--display-weight, 400)" as React.CSSProperties["fontWeight"],
              fontSize: "clamp(56px, 8vw, 130px)",
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              margin: 0,
            }}
          >
            <SplitWords inView={inView} text="A PM who actually" />
            <br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              <SplitWords inView={inView} delay={0.35} text="reads the spec." />
            </span>
          </h2>
        </div>

        {/* Right column */}
        <div style={{ fontFamily: "var(--font-sans)" }}>
          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
              marginTop: 84,
              background: "var(--ink-soft)",
              border: "1px solid var(--ink-soft)",
            }}
          >
            {stats.map((s, i) => (
              <StatCell key={i} s={s} i={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
