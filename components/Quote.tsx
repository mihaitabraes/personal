"use client";
import { useInView } from "@/hooks/useInView";
import SplitWords from "@/components/SplitWords";

export default function Quote() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "var(--bg-alt)",
        color: "var(--ink)",
        padding: "calc(160px * var(--pad-scale)) calc(40px * var(--pad-scale))",
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: 40 }}>
        (04) The way I work
      </div>
      <blockquote
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "var(--display-style)",
          fontWeight: "var(--display-weight, 400)" as React.CSSProperties["fontWeight"],
          fontSize: "clamp(48px, 6.5vw, 110px)",
          lineHeight: 0.98,
          letterSpacing: "-0.025em",
          margin: 0,
          maxWidth: 1400,
          marginInline: "auto",
        }}
      >
        <SplitWords inView={inView} stagger={0.04} text='"Distinguish strategic pivots' />
        <br />
        <span style={{ color: "var(--accent)" }}>
          <SplitWords inView={inView} delay={0.5} stagger={0.04} text="from scope creep." />
        </span>
        <SplitWords inView={inView} delay={1.0} stagger={0.04} text=' Ship the trade-off' />
        <br />
        <SplitWords inView={inView} delay={1.5} stagger={0.04} text='document, not just the feature."' />
      </blockquote>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-soft)", marginTop: 50 }}>
        ⟶ A working principle
      </div>
    </section>
  );
}
