"use client";
import { useInView } from "@/hooks/useInView";
import SplitWords from "@/components/SplitWords";

export default function Quote() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      id="principles"
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
          fontSize: "clamp(36px, 5vw, 90px)",
          lineHeight: 1.0,
          letterSpacing: "-0.025em",
          margin: 0,
          maxWidth: 1400,
          marginInline: "auto",
        }}
      >
        <SplitWords inView={inView} stagger={0.04} text='"The most dangerous gap' />
        <br />
        <SplitWords inView={inView} delay={0.4} stagger={0.04} text="in product work isn't" />
        <br />
        <span style={{ color: "var(--accent)" }}>
          <SplitWords inView={inView} delay={0.8} stagger={0.04} text="between design and engineering." />
        </span>
        <br />
        <SplitWords inView={inView} delay={1.2} stagger={0.04} text="It's between the decision" />
        <br />
        <SplitWords inView={inView} delay={1.6} stagger={0.04} text='and the data that should' />
        <br />
        <SplitWords inView={inView} delay={2.0} stagger={0.04} text='have informed it."' />
      </blockquote>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-soft)", marginTop: 50 }}>
        ⟶ A working principle
      </div>
    </section>
  );
}
