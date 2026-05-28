"use client";
import { useInView } from "@/hooks/useInView";
import { PROJECTS } from "@/components/Projects";

const PROJECT_DETAILS: Record<string, { summary: string; responsibilities: string[] }> = {
  "01": {
    summary: "Owned the social, privacy and notification system for an iOS + Android app discovering electronic-music events. Worked as the connective tissue between backend, native mobile, and design.",
    responsibilities: [
      "Designed the follow-graph, blocking, and privacy permission model end-to-end — wrote the spec, the state machine, and the edge-case matrix.",
      "Defined notification taxonomy (transactional vs. social vs. discovery) and the throttling rules that keep the feed alive without burning users out.",
      "Specced the Spotify ingestion flow that maps a user's listening history to suggested artists / events.",
      "Sat between the iOS, Android, and backend leads — clarified contracts, broke ties, kept scope honest.",
    ],
  },
  "02": {
    summary: "Built an agentic PM workflow that plugs Claude into the tools my teams actually use — Jira, Figma, Drive, Slack — via the Model Context Protocol.",
    responsibilities: [
      "Designed the agent loop: when to ask, when to act, when to escalate. Defined the boundary between assistant and autopilot.",
      "Wired MCP servers for Jira (backlog read/write), Figma (design-to-ticket extraction), and Drive (spec ingestion).",
      "Wrote the system prompts that turn raw design comments into well-formed Jira tickets with acceptance criteria.",
      "Validated against my own sprints first — eats own dog food, ships only what survived a real cycle.",
    ],
  },
  "03": {
    summary: "Delivered an end-to-end fintech product in the care-economy space. The role mixed delivery management with hands-on architectural decisions.",
    responsibilities: [
      "Authored a three-option architectural trade-off document — build, leverage, hybrid — with cost, risk, and time-to-value for each.",
      "Drove that doc through stakeholder review and got a signed decision in one meeting, unblocking a two-week delivery stall.",
      "Ran the standups, retros, and the unhappy-path conversations between client product and our engineering pod.",
      "Acted as the escalation contact for SLA-impacting issues — lifted adherence by ~20% over the engagement.",
    ],
  },
  "04": {
    summary: "Mid-engagement, the client was acquired and the new owner pushed a sweeping scope change. My job was to absorb the chaos without losing the team or the roadmap.",
    responsibilities: [
      "Distinguished the legitimate strategic pivot from scope-creep dressed up as one — and held the line on the latter.",
      "Re-sequenced two sprints inside 48 hours and got the team back to a green burndown without forcing overtime.",
      "Translated acquisition-driven compliance asks into eng-ready stories with explicit done-criteria.",
      "Owned the comms loop with both the legacy and new stakeholders during the transition.",
    ],
  },
  "05": {
    summary: "A side project I'm building solo for my city: a crowdsourced parking app with a gamified contribution layer and an AI prediction model on top.",
    responsibilities: [
      "Acting as PM, designer, and (with AI-assisted coding) primary builder — Next.js, Supabase, a thin ML service.",
      "Designed the 'Parking Karma' loop: contribution → reputation → priority access — the core anti-freeloader mechanic.",
      "Drafted the B2B route — fleet operators and last-mile delivery — and mapped the unit economics on a single page.",
      "Living test bed for using Claude Code + MCP on a non-trivial real-world product.",
    ],
  },
  "06": {
    summary: "Founded an internal initiative to raise the Agile literacy of project-services teams. Grew from a hallway conversation into an 11-person crew and a public talk.",
    responsibilities: [
      "Recruited and onboarded the first cohort — picked for curiosity rather than seniority.",
      "Designed the cadence: bi-weekly workshops, rotating facilitators, and a public artefacts library.",
      "Authored and delivered the keynote 'A State of Agile: The Good, the Bad and the Ugly' at Levi9 Tech Stories 2024.",
      "Handed the crew off to a new lead before leaving — the initiative outlived my involvement.",
    ],
  },
};

function ProjectDetail({
  p,
  detail,
  prev,
  next,
}: {
  p: (typeof PROJECTS)[number];
  detail: { summary: string; responsibilities: string[] };
  prev: (typeof PROJECTS)[number] | null;
  next: (typeof PROJECTS)[number] | null;
}) {
  const [ref, inView] = useInView({ threshold: 0.12 });

  return (
    <section
      id={`case-${p.n}`}
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        scrollMarginTop: 96,
        padding: "calc(140px * var(--pad-scale)) calc(48px * var(--pad-scale))",
        borderTop: "1px solid var(--ink)",
        background: "var(--bg)",
        color: "var(--ink)",
        position: "relative",
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 24,
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          marginBottom: 48,
        }}
      >
        <span style={{ color: "var(--accent)" }}>
          <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
          Case ({p.n})
        </span>
        <span style={{ height: 1, background: "currentColor", opacity: 0.3 }} />
        <a href="#work" style={{ color: "var(--ink-soft)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span>←</span> Back to index
        </a>
      </div>

      {/* Title block */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "calc(48px * var(--gap-scale))",
          alignItems: "end",
          marginBottom: 72,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "var(--display-style)",
            fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
            fontSize: "clamp(64px, 10vw, 180px)",
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            margin: 0,
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: inView ? "translateY(0)" : "translateY(40px)",
              opacity: inView ? 1 : 0,
              transition: "transform 1s cubic-bezier(0.22,1,0.36,1) 0.05s, opacity 0.7s ease 0.05s",
            }}
          >
            {p.title}
            <span style={{ color: "var(--accent)", fontSize: "0.85em" }}>.</span>
          </span>
        </h2>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-soft)",
            lineHeight: 1.8,
            paddingBottom: 24,
          }}
        >
          <div>{p.role}</div>
          <div style={{ opacity: 0.7 }}>{p.tag}</div>
          <div style={{ opacity: 0.7 }}>{p.year}</div>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "calc(64px * var(--gap-scale))",
          alignItems: "start",
        }}
      >
        {/* Lead paragraph */}
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontStyle: "var(--display-style)",
            fontWeight: 300,
            fontSize: "calc(28px * var(--type-scale))",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: "var(--ink)",
            opacity: 0.95,
            position: "sticky",
            top: 120,
          }}
        >
          {detail.summary}
        </p>

        {/* Responsibilities */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
              marginBottom: 36,
              paddingBottom: 14,
              borderBottom: "1px solid var(--ink)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>My role &amp; responsibilities</span>
            <span style={{ opacity: 0.6 }}>{String(detail.responsibilities.length).padStart(2, "0")} items</span>
          </div>
          <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {detail.responsibilities.map((r, i) => (
              <li
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: 20,
                  padding: "26px 0",
                  borderBottom: i === detail.responsibilities.length - 1 ? "none" : "1px solid var(--ink-soft)",
                  alignItems: "baseline",
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  opacity: inView ? 1 : 0,
                  transition: `transform 0.8s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.08}s, opacity 0.5s ease ${0.2 + i * 0.08}s`,
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--accent)", paddingTop: 6 }}>
                  {String(i + 1).padStart(2, "0")} /
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "calc(18px * var(--type-scale))", lineHeight: 1.5, color: "var(--ink)", opacity: 0.92 }}>
                  {r}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Prev / next nav */}
      <div
        style={{
          marginTop: 96,
          paddingTop: 32,
          borderTop: "1px solid var(--ink)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        {prev ? (
          <a href={`#case-${prev.n}`} className="case-nav-link" style={{ color: "var(--ink)", textDecoration: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "var(--ink-soft)" }}>← Previous · ({prev.n})</span>
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "var(--display-style)", fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.025em", textTransform: "none", lineHeight: 1 }}>
              {prev.title}
            </span>
          </a>
        ) : <span />}
        {next ? (
          <a href={`#case-${next.n}`} className="case-nav-link" style={{ color: "var(--ink)", textDecoration: "none", display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end", textAlign: "right" }}>
            <span style={{ color: "var(--ink-soft)" }}>Next · ({next.n}) →</span>
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "var(--display-style)", fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.025em", textTransform: "none", lineHeight: 1 }}>
              {next.title}
            </span>
          </a>
        ) : <span />}
      </div>
    </section>
  );
}

export default function ProjectDetails() {
  return (
    <div id="cases">
      {/* Cases header */}
      <section
        style={{
          padding: "calc(120px * var(--pad-scale)) calc(48px * var(--pad-scale)) calc(40px * var(--pad-scale))",
          background: "var(--bg)",
          color: "var(--ink)",
          borderTop: "1px solid var(--ink)",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "end" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: 22 }}>
              <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
              (02·b) Case studies
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "var(--display-style)",
                fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
                fontSize: "clamp(48px, 7vw, 120px)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                margin: 0,
              }}
            >
              The work, <span style={{ color: "var(--accent)", fontStyle: "italic" }}>up close</span>.
            </h2>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", textAlign: "right", paddingBottom: 14, lineHeight: 1.7 }}>
            06 cases<br />Role &amp; responsibilities per project
          </div>
        </div>
      </section>

      {PROJECTS.map((p, i) => {
        const detail = PROJECT_DETAILS[p.n];
        if (!detail) return null;
        return (
          <ProjectDetail
            key={p.n}
            p={p}
            detail={detail}
            prev={i > 0 ? PROJECTS[i - 1] : null}
            next={i < PROJECTS.length - 1 ? PROJECTS[i + 1] : null}
          />
        );
      })}
    </div>
  );
}
