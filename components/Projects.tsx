"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

export const PROJECTS = [
  {
    n: "01", title: "Event Platform",
    role: "Product Manager · Thinslices", tag: "Mobile · Real-time", year: "2026—",
    metrics: ["iOS + Android", "Real-time social", "Spotify ingestion"],
    blurb: "Real-time event discovery platform for iOS and Android. Designed the social graph, follow / privacy / notification system, and Spotify ingestion flow end-to-end.",
    color: "#D26A3D",
  },
  {
    n: "02", title: "Charity Platform",
    role: "Delivery Manager · Levi9", tag: "Fintech · Civic tech", year: "2024",
    metrics: ["Mid-sprint pivot", "Post-launch growth", "Scope discipline"],
    blurb: "Fintech platform for charitable giving. Navigated a mid-sprint scope change, kept the team on track, and shipped a product that found real traction post-launch.",
    color: "#6B8E63",
  },
  {
    n: "03", title: "Port Management",
    role: "Delivery Manager · Levi9", tag: "Enterprise · Operations", year: "2025",
    metrics: ["Multi-team delivery", "API integration", "Real-time ops"],
    blurb: "End-to-end port operations management system — vessel tracking, logistics coordination, and real-time operational data across a multi-team delivery.",
    color: "#4A7B8E",
  },
  {
    n: "04", title: "Tachograph System",
    role: "Delivery Manager · Levi9", tag: "Transportation · Compliance", year: "2022",
    metrics: ["Fleet compliance", "Driver data", "Regulatory reporting"],
    blurb: "Tachograph data management system for a transportation company — driver hours, fleet compliance tracking, and automated regulatory reporting.",
    color: "#8E7B4A",
  },
  {
    n: "05", title: "Late Chapter",
    role: "Founder · Side project", tag: "Books · Community · WIP", year: "2026—",
    metrics: ["Book club", "Community reads", "Side build"],
    blurb: "A book club platform built on the side. Currently reading: Wheel of Time by Robert Jordan.",
    color: "#7B6BB5",
  },
  {
    n: "06", title: "Agile Initiative",
    role: "Founder · Internal", tag: "Public talk · Levi9", year: "2023",
    metrics: ["11 members", "Public talk", "Tech Stories 2024"],
    blurb: "Founded an internal Agile training crew. Culminated in a public talk at Levi9 Tech Stories.",
    color: "#B89E4A",
  },
];

function ProjectRow({
  p, index, isHover, onHover, onLeave,
}: {
  p: (typeof PROJECTS)[number];
  index: number;
  isHover: boolean;
  onHover: (i: number) => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      className="project-row"
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "auto 1.6fr 1.4fr 0.6fr auto",
        alignItems: "center",
        gap: "calc(28px * var(--gap-scale))",
        padding: "calc(28px * var(--pad-scale)) calc(8px * var(--pad-scale))",
        borderTop: "1px solid var(--ink)",
        color: "var(--ink)",
        zIndex: 1,
        transition: "padding 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Number */}
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", color: "var(--ink-soft)", minWidth: 36 }}>
        ({p.n})
      </span>

      {/* Title */}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "var(--display-style)",
          fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
          fontSize: "clamp(34px, 4.4vw, 64px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: isHover ? "var(--accent)" : "var(--ink)",
          transform: isHover ? "translateX(14px)" : "translateX(0)",
          transition: "color 0.5s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {p.title}
      </span>

      {/* Role / tag */}
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", lineHeight: 1.5 }}>
        <span style={{ display: "block" }}>{p.role}</span>
        <span style={{ display: "block", opacity: 0.65, marginTop: 4 }}>{p.tag}</span>
      </span>

      {/* Year */}
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", color: "var(--ink-soft)", textAlign: "right" }}>
        {p.year}
      </span>

      {/* Arrow capsule */}
      <span
        aria-hidden="true"
        style={{
          width: 52, height: 52,
          borderRadius: "50%",
          border: `1px solid ${isHover ? "var(--accent)" : "var(--ink)"}`,
          background: isHover ? "var(--accent)" : "transparent",
          color: isHover ? "var(--bg)" : "var(--ink)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          transition: "background 0.5s ease, color 0.5s ease, border-color 0.5s ease",
        }}
      >
        <span
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
            transform: isHover ? "translate(120%,-120%)" : "translate(0,0)",
            transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
          }}
        >↗</span>
        <span
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
            transform: isHover ? "translate(0,0)" : "translate(-120%,120%)",
            transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
          }}
        >↗</span>
      </span>
    </div>
  );
}

export default function Projects() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "var(--bg)",
        color: "var(--ink)",
        padding: "calc(140px * var(--pad-scale)) calc(48px * var(--pad-scale)) calc(80px * var(--pad-scale))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "end", marginBottom: 60 }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: 22 }}>
            <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            (02) Selected work
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "var(--display-style)",
              fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
              fontSize: "clamp(56px, 8.6vw, 150px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Things I&apos;ve shipped<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", textAlign: "right", paddingBottom: 18, lineHeight: 1.7 }}>
          06 entries · 2022 → present
        </div>
      </div>

      {/* Rows */}
      <div>
        {PROJECTS.map((p, i) => (
          <ProjectRow
            key={p.n}
            p={p}
            index={i}
            isHover={hoverIdx === i}
            onHover={setHoverIdx}
            onLeave={() => setHoverIdx(null)}
          />
        ))}
        <div style={{ borderTop: "1px solid var(--ink)" }} />
      </div>

      {/* Footer meta */}
      <div
        style={{
          marginTop: 60,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
        }}
      >
        <div>⟶ Plus internal work under NDA, ask in person.</div>
        <div style={{ textAlign: "right" }}>End of selected work · 06 / 06</div>
      </div>
    </section>
  );
}
