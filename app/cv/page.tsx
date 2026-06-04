"use client";
import { useInView } from "@/hooks/useInView";
import { Navbar } from "@/components/Navbar";

const EXPERIENCE = [
  {
    title: "Product Manager",
    company: "Thinslices",
    location: "Bucharest (Remote)",
    period: "August 2025 – Present",
    bullets: [
      "Led product end-to-end for a mobile-first, real-time event discovery platform for iOS and Android — owning data architecture decisions behind real-time social signals, event ingestion pipelines, and Spotify data integration flowing through a REST API ecosystem.",
      "Drove data-informed product decisions throughout — combining quantitative analysis with regular user interviews to uncover unspoken needs, directly shaping feature prioritisation and roadmap sequencing.",
      "Owned and drove the product roadmap end-to-end — defining multi-sprint priorities across social features, onboarding, event discovery, and notifications, balancing stakeholder input with data-driven insights.",
      "Translated complex data and system challenges into engineering specifications — modelling follow/privacy/notification schemas, data ingestion flows, and real-time social signals as the technical bridge between backend, mobile, and UX.",
      "Built and deployed agentic AI workflows with Claude Code and MCP — integrating Jira, Figma, Google Drive, and Slack into a PM agent for automated sprint reporting, backlog generation, and project health monitoring.",
      "Led an AI Hackathon initiative — building a Project Reporting Agent and Sprint Report Generator on LLM-based agentic workflows, demonstrating measurable AI impact on PM productivity.",
      "Authored a data-backed scope and impact analysis to align stakeholders on a 30% budget extension.",
      "Delivered a dementia finance management platform end-to-end — authored a 3-option architectural tradeoff document that drove the stakeholder decision and unblocked delivery.",
    ],
  },
  {
    title: "Delivery Manager",
    company: "Levi9",
    location: "Iași (Remote)",
    period: "June 2021 – August 2025",
    bullets: [
      "Managed multi-team agile delivery for large-scale Fintech and Transportation products across web, mobile, and API — using data-driven delivery metrics to ensure sprint predictability, technical transparency, and client alignment.",
      "Delivered a fintech charity donation platform later acquired post-launch — navigated a mid-sprint scope change driven by acquisition requirements, using data and impact analysis to distinguish strategic pivot from scope creep.",
      "Influenced cross-functional teams to the right outcomes — aligned engineers, product owners, and client stakeholders across multiple concurrent projects.",
      "Founded and led an internal Agile training initiative that grew to 11 members, culminating in a public talk: \"A State of Agile: The Good, the Bad and the Ugly\" (Levi9 Tech Stories, June 2024).",
      "Introduced data-driven sprint health metrics and analytics to improve backlog quality and align product owners with engineering.",
      "Coached junior PMs on data-informed delivery discipline, agile facilitation, and technical communication.",
    ],
  },
  {
    title: "Senior Technical Team Lead",
    company: "SCC",
    location: "Iași",
    period: "January 2019 – June 2021",
    bullets: [
      "Led 4+ cross-functional support teams across multiple industries and international timezones — managing escalations, SLA adherence, and team performance in a high-pressure, always-on environment.",
      "Analysed operational data to identify performance bottlenecks and redesign task ownership frameworks, increasing SLA adherence by 20%.",
      "Mentored junior analysts and delivered L2 support for enterprise clients under strict SLA targets.",
    ],
  },
];

const EXPERTISE = [
  {
    area: "Data Science & Analytics",
    skills: "Python · Pandas · NumPy · Statistical Analysis · Probability & Experimentation · ML Fundamentals · A/B Testing · Data Visualisation · Databricks Ecosystem",
  },
  {
    area: "AI & LLM",
    skills: "Generative AI · LLM Integration · Agentic Workflows · MCP (Model Context Protocol) · AI-assisted Development · Prompt Engineering",
  },
  {
    area: "Cloud & Data Infrastructure",
    skills: "AWS · Databricks · Azure · Spark · MLflow · Data Pipelines · Real-time Data Flows · Cloud Architecture",
  },
  {
    area: "Product Management",
    skills: "0-to-1 Product Development · Multi-year Roadmapping · Customer Research & User Interviews · Data-driven Prioritisation · Competitive Analysis · MVP Shaping",
  },
  {
    area: "Leadership & Collaboration",
    skills: "Cross-functional Influence · Stakeholder Alignment · Executive Communication · Conflict Resolution · Mentoring · Workshop Facilitation",
  },
  {
    area: "Tools",
    skills: "Claude Code · Gemini · Jira · Figma · Confluence · Miro · Notion · Google Workspace · Slack · Azure DevOps",
  },
];

const CERTS = [
  {
    category: "Generative AI & LLM",
    items: [
      "AWS: Generative AI Essentials (2025)",
      "AWS: Generative AI Sales (2025)",
      "Databricks: Gen AI Fundamentals (2025)",
      "Databricks: Gen AI & LLM (2025)",
      "Databricks: Financial Services AI (2025)",
      "Databricks: Fundamentals (2025)",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS: Technical Accredited (2024)",
      "AWS: Digital Sovereignty (2024)",
      "AWS: Sales Accreditation (2024)",
      "AWS: Business Accreditation (2021)",
    ],
  },
  {
    category: "Agile & Delivery",
    items: ["PSM I & II — Scrum.org (2022)"],
  },
];

function ExperienceBlock({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCE)[number];
  index: number;
}) {
  const [ref, inView] = useInView({ threshold: 0.08 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "calc(48px * var(--gap-scale))",
        padding: "calc(64px * var(--pad-scale)) 0",
        borderTop: "1px solid var(--ink)",
        alignItems: "start",
        transform: inView ? "translateY(0)" : "translateY(24px)",
        opacity: inView ? 1 : 0,
        transition: `transform 0.9s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s, opacity 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Left: role info */}
      <div style={{ position: "sticky", top: 120 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "var(--display-style)",
            fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
            fontSize: "clamp(28px, 3.2vw, 48px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          {exp.title}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 6,
          }}
        >
          {exp.company}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "var(--ink-soft)",
            lineHeight: 1.6,
          }}
        >
          <div>{exp.location}</div>
          <div style={{ marginTop: 4 }}>{exp.period}</div>
        </div>
      </div>

      {/* Right: bullets */}
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {exp.bullets.map((b, i) => (
          <li
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "16px 1fr",
              gap: 14,
              padding: "14px 0",
              borderBottom: i < exp.bullets.length - 1 ? "1px solid var(--ink-soft)" : "none",
              alignItems: "baseline",
              opacity: 0.5,
              fontFamily: "var(--font-sans)",
              fontSize: "calc(15px * var(--type-scale))",
              lineHeight: 1.55,
              color: "var(--ink)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.5";
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--accent)",
                marginTop: 8,
                flexShrink: 0,
              }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CV() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main
        style={{
          background: "var(--bg)",
          color: "var(--ink)",
          minHeight: "100vh",
        }}
      >
        {/* ─── Header ─────────────────────────────────────────── */}
        <section
          ref={headerRef as React.RefObject<HTMLElement>}
          style={{
            padding: "calc(140px * var(--pad-scale)) calc(48px * var(--pad-scale)) calc(80px * var(--pad-scale))",
            borderBottom: "1px solid var(--ink)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 60,
              alignItems: "end",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                  marginBottom: 28,
                }}
              >
                <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
                Curriculum Vitae · 2026
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "var(--display-style)",
                  fontWeight: "var(--display-weight, 400)" as React.CSSProperties["fontWeight"],
                  fontSize: "clamp(64px, 10vw, 180px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.045em",
                  margin: 0,
                  transform: headerInView ? "translateY(0)" : "translateY(40px)",
                  opacity: headerInView ? 1 : 0,
                  transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.1s, opacity 0.7s ease 0.1s",
                }}
              >
                Mihaita
                <br />
                <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Braes</span>
              </h1>
              <div
                style={{
                  marginTop: 24,
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                }}
              >
                Senior Product Manager · AI, Data &amp; Cloud
              </div>
            </div>

            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "calc(15px * var(--type-scale))",
                lineHeight: 1.6,
                opacity: 0.75,
                paddingBottom: 16,
              }}
            >
              <p style={{ margin: "0 0 28px" }}>
                Product Manager with 6+ years building AI, data, and cloud products across fintech and mobile. Focused on the intersection where product strategy meets analytical rigour — bringing together Data Science fundamentals, LLM integration, agentic AI workflows, and cloud architecture.
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  lineHeight: 2,
                  color: "var(--ink-soft)",
                }}
              >
                <div>mihaita.braes@gmail.com</div>
                <div>+40 742 347 072</div>
                <div>Bucharest, Romania</div>
                <div>github.com/mihaitabraes</div>
              </div>
            </div>
          </div>

          {/* Download button */}
          <div style={{ marginTop: 48 }}>
            <a
              href="/cv.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 24px",
                border: "1px solid var(--ink)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--ink)",
                textDecoration: "none",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--ink)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
              }}
            >
              ↓ Download PDF
            </a>
          </div>
        </section>

        {/* ─── Expertise ──────────────────────────────────────── */}
        <section
          style={{
            padding: "calc(100px * var(--pad-scale)) calc(48px * var(--pad-scale))",
            borderBottom: "1px solid var(--ink)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
              marginBottom: 48,
            }}
          >
            <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            Expertise
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--ink)" }}>
            {EXPERTISE.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: 40,
                  padding: "22px 28px",
                  background: "var(--bg)",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  {e.area}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "calc(14px * var(--type-scale))",
                    lineHeight: 1.6,
                    color: "var(--ink)",
                    opacity: 0.78,
                  }}
                >
                  {e.skills}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Experience ─────────────────────────────────────── */}
        <section
          style={{
            padding: "calc(100px * var(--pad-scale)) calc(48px * var(--pad-scale))",
            borderBottom: "1px solid var(--ink)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
              marginBottom: 8,
            }}
          >
            <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            Work Experience
          </div>
          {EXPERIENCE.map((exp, i) => (
            <ExperienceBlock key={i} exp={exp} index={i} />
          ))}
        </section>

        {/* ─── Education ──────────────────────────────────────── */}
        <section
          style={{
            padding: "calc(80px * var(--pad-scale)) calc(48px * var(--pad-scale))",
            borderBottom: "1px solid var(--ink)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
              marginBottom: 48,
            }}
          >
            <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            Education
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "calc(48px * var(--gap-scale))",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "var(--display-style)",
                  fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
                  fontSize: "clamp(24px, 2.8vw, 40px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginBottom: 14,
                }}
              >
                BSc Telecommunications Engineering
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 6,
                }}
              >
                Technical University "Gheorghe Asachi" of Iași
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--ink-soft)",
                }}
              >
                2014 – 2018
              </div>
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sans)",
                fontSize: "calc(15px * var(--type-scale))",
                lineHeight: 1.6,
                color: "var(--ink)",
                opacity: 0.72,
              }}
            >
              Signal processing, communications systems, and data transmission — the analytical and systems thinking foundation applied directly to data product and AI domains.
            </p>
          </div>
        </section>

        {/* ─── Certifications ─────────────────────────────────── */}
        <section
          style={{
            padding: "calc(80px * var(--pad-scale)) calc(48px * var(--pad-scale)) calc(120px * var(--pad-scale))",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
              marginBottom: 48,
            }}
          >
            <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            Certifications
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "var(--ink)",
              border: "1px solid var(--ink)",
            }}
          >
            {CERTS.map((group, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg)",
                  padding: "36px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 20,
                    paddingBottom: 14,
                    borderBottom: "1px solid var(--ink)",
                  }}
                >
                  {group.category}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {group.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "calc(13px * var(--type-scale))",
                        lineHeight: 1.55,
                        color: "var(--ink)",
                        opacity: 0.75,
                        padding: "8px 0",
                        borderBottom: j < group.items.length - 1 ? "1px solid var(--ink-soft)" : "none",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
