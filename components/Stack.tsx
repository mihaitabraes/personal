"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useScrollVelocity } from "@/hooks/useScroll";
import SplitWords from "@/components/SplitWords";

const PILLARS = [
  {
    id: "ai",
    n: "I.",
    title: "AI & Agentic Systems",
    blurb: "LLM integration, MCP, agentic workflows wired into PM tooling. Multiple Generative AI certifications from AWS & Databricks.",
    skills: [
      "LLM Integration", "Agentic Workflows", "Model Context Protocol",
      "Prompt Engineering", "AWS Gen AI Essentials", "Databricks Gen AI & LLM", "AI-assisted Development",
    ],
  },
  {
    id: "product",
    n: "II.",
    title: "Product & Delivery",
    blurb: "0-to-1 product discovery, multi-year roadmapping, data-driven prioritisation. The boring stuff done well.",
    skills: [
      "0-to-1 Product Development", "Product Discovery", "Multi-year Roadmapping",
      "Customer Research", "Backlog Management", "MVP Shaping", "Risk & Dependency Mgmt",
    ],
  },
  {
    id: "technical",
    n: "III.",
    title: "Data & Cloud",
    blurb: "Python, Pandas, Databricks, Spark, MLflow — the data stack from raw ingestion to insight. AWS, Azure, and cloud architecture to go with it.",
    skills: [
      "Python · Pandas · NumPy", "Statistical Analysis", "A/B Testing & Experimentation",
      "ML Fundamentals", "Databricks Ecosystem", "Spark · MLflow",
      "AWS · Azure", "Real-time Data Flows", "Cloud Architecture",
    ],
  },
  {
    id: "leadership",
    n: "IV.",
    title: "Leadership & Influence",
    blurb: "Built consensus without authority. Founded a training crew. Mentored juniors. Translated engineers and execs.",
    skills: [
      "Cross-functional Influence", "Stakeholder Alignment", "Executive Communication",
      "Conflict Resolution", "Mentoring & Coaching", "Workshop Facilitation", "Founded internal Agile crew",
    ],
  },
];

const TOOLS = [
  "Claude Code", "Gemini", "Jira", "Figma", "Confluence",
  "Miro", "Notion", "Slack", "Google Workspace", "Azure DevOps",
];

function StackPillar({
  pillar,
  expanded,
  onToggle,
}: {
  pillar: (typeof PILLARS)[number];
  expanded: string | null;
  onToggle: (id: string) => void;
}) {
  const isOpen = expanded === pillar.id;
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onClick={() => onToggle(pillar.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        padding: "48px 36px",
        background: isOpen ? "var(--accent)" : hovered ? "var(--bg)" : "var(--paper)",
        color: isOpen ? "var(--bg)" : "var(--ink)",
        transition: "background 0.6s cubic-bezier(0.22,1,0.36,1), color 0.6s ease",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        minHeight: isOpen ? 560 : 400,
        overflow: "hidden",
      }}
    >
      {isOpen && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "repeating-linear-gradient(135deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 16px)",
            pointerEvents: "none",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ opacity: 0.7 }}>{pillar.n}</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            opacity: 0.7,
            transform: isOpen ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          +
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "var(--display-style)",
          fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
          fontSize: "clamp(34px, 3.4vw, 56px)",
          lineHeight: 0.98,
          letterSpacing: "var(--display-tracking, -0.03em)",
          margin: 0,
        }}
      >
        {pillar.title}
      </h3>

      <p
        style={{
          margin: 0,
          fontFamily: "var(--font-sans)",
          fontSize: "calc(16px * var(--type-scale))",
          lineHeight: 1.5,
          opacity: 0.82,
          maxWidth: 460,
        }}
      >
        {pillar.blurb}
      </p>

      {/* Expanding skills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginTop: "auto",
          maxHeight: isOpen ? 400 : 0,
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(8px)",
          overflow: "hidden",
          transition: "max-height 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease 0.1s, transform 0.5s ease 0.1s",
        }}
      >
        {pillar.skills.map((s, i) => (
          <span
            key={i}
            style={{
              padding: "8px 14px",
              border: "1px solid currentColor",
              borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              opacity: 0.95,
              transform: isOpen ? "translateY(0)" : "translateY(12px)",
              transition: `transform 0.5s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.04}s`,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Stack() {
  const [expanded, setExpanded] = useState<string | null>("ai");
  const [ref, inView] = useInView({ threshold: 0.1 });
  const velocity = useScrollVelocity(0.04);

  return (
    <section
      id="stack"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "var(--bg-alt)",
        color: "var(--ink)",
        padding: "calc(140px * var(--pad-scale)) calc(40px * var(--pad-scale))",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 60,
          marginBottom: 80,
          alignItems: "end",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
              marginBottom: 28,
            }}
          >
            <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            (Aptitudes)
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "var(--display-style)",
              fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
              fontSize: "clamp(56px, 9vw, 150px)",
              lineHeight: 0.92,
              letterSpacing: "var(--display-tracking, -0.04em)",
              margin: 0,
              transform: `skewY(${velocity * 0.15}deg)`,
              transformOrigin: "left center",
              transition: "transform 0.2s ease-out",
              willChange: "transform",
            }}
          >
            <SplitWords inView={inView} text="The stack" />
            <br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              <SplitWords inView={inView} delay={0.3} text="I bring." />
            </span>
          </h2>
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "calc(18px * var(--type-scale))",
            lineHeight: 1.5,
            opacity: 0.75,
            maxWidth: 420,
            justifySelf: "end",
          }}
        >
          A T-shaped PM. Deep enough on AI, mobile, and distributed systems to scope and decompose them. Wide enough to ship.
          <span
            style={{
              display: "block",
              marginTop: 18,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
            }}
          >
            ⟶ Tap a pillar to expand
          </span>
        </div>
      </div>

      {/* Pillar grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          background: "var(--ink)",
          border: "1px solid var(--ink)",
        }}
      >
        {PILLARS.map((p) => (
          <StackPillar
            key={p.id}
            pillar={p}
            expanded={expanded}
            onToggle={(id) => setExpanded(expanded === id ? null : id)}
          />
        ))}
      </div>

      {/* Daily tools row */}
      <div
        style={{
          marginTop: 60,
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 32,
          alignItems: "center",
          padding: "20px 0",
          borderTop: "1px solid var(--ink)",
          borderBottom: "1px solid var(--ink)",
        }}
      >
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", whiteSpace: "nowrap" }}>
          ⟶ Daily Tools
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", fontFamily: "var(--font-sans)", fontSize: "calc(14px * var(--type-scale))", color: "var(--ink)", opacity: 0.78 }}>
          {TOOLS.map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* Certifications row */}
      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 32,
          alignItems: "start",
          padding: "20px 0",
          borderBottom: "1px solid var(--ink)",
        }}
      >
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", whiteSpace: "nowrap" }}>
          ⟶ Receipts
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--ink)", opacity: 0.78, lineHeight: 1.55 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6, opacity: 0.6 }}>Generative AI</div>
            AWS Gen AI Essentials &amp; Sales · Databricks Gen AI Fundamentals · Gen AI &amp; LLM · Financial Services AI
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6, opacity: 0.6 }}>Cloud</div>
            AWS Technical Accredited · Digital Sovereignty · Sales · Business Accreditation
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6, opacity: 0.6 }}>Agile</div>
            PSM I &amp; II — Scrum.org (2022)
          </div>
        </div>
      </div>
    </section>
  );
}
