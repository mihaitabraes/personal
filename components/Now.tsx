"use client";
import { useInView } from "@/hooks/useInView";
import SplitWords from "@/components/SplitWords";

const items = [
  { k: "Role",     v: "PM at Thinslices",       tag: "Aug 2025 — Bucharest" },
  { k: "Building", v: "Event platform",          tag: "iOS · Android · Real-time" },
  { k: "Learning", v: "Data Science",            tag: "Python · Pandas · NumPy" },
  { k: "Stack",    v: "Python · Databricks",     tag: "Data science workflows" },
  { k: "Side",     v: "Late Chapter",            tag: "Book club · Side project" },
  { k: "Reading",  v: "Wheel of Time",           tag: "Robert Jordan" },
];

export default function Now() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="now"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "var(--accent)",
        color: "var(--bg)",
        padding: "calc(140px * var(--pad-scale)) calc(40px * var(--pad-scale))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, position: "relative", zIndex: 1, marginBottom: 80 }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--bg)", opacity: 0.7, marginBottom: 28 }}>
            <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            (03) Right now
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "var(--display-style)",
              fontWeight: "var(--display-weight, 400)" as React.CSSProperties["fontWeight"],
              fontSize: "clamp(56px, 8vw, 130px)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            <SplitWords inView={inView} text="What I'm" />
            <br />
            <span style={{ fontFamily: "var(--font-sans)", fontStyle: "normal", fontSize: "0.86em", fontWeight: 300 }}>
              <SplitWords inView={inView} delay={0.3} text="actually doing." />
            </span>
          </h2>
        </div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "calc(18px * var(--type-scale))", lineHeight: 1.55, alignSelf: "end", maxWidth: 480, opacity: 0.95 }}>
          A live snapshot — updated as things change. This is not a list of aspirations. It&apos;s what&apos;s open in my tabs.
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "var(--bg)",
          border: "1px solid var(--bg)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {items.map((it, i) => (
          <div
            key={i}
            style={{
              background: "var(--accent)",
              padding: "36px 32px",
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: inView ? "translateY(0)" : "translateY(40px)",
              opacity: inView ? 1 : 0,
              transition: `transform 0.9s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.08}s, opacity 0.6s ease ${0.2 + i * 0.08}s`,
            }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7 }}>
              ⟶ {it.k}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "var(--display-style)", fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 10, fontWeight: "var(--display-weight, 400)" as React.CSSProperties["fontWeight"] }}>
                {it.v}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6 }}>
                {it.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
