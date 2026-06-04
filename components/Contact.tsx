"use client";
import { useInView } from "@/hooks/useInView";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const magRef = useMagnetic(0.3);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "var(--ink)",
        color: "var(--bg)",
        padding: "calc(120px * var(--pad-scale)) calc(40px * var(--pad-scale)) calc(40px * var(--pad-scale))",
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 28 }}>
          <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
          (05) Let&apos;s talk
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "var(--display-style)",
            fontWeight: "var(--display-weight, 400)" as React.CSSProperties["fontWeight"],
            fontSize: "clamp(80px, 16vw, 280px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            margin: 0,
          }}
        >
          <span style={{ display: "block", overflow: "hidden", paddingBlock: "0.14em", marginBlock: "-0.14em" }}>
            <span style={{ display: "inline-block", transform: inView ? "translateY(0)" : "translateY(110%)", transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.1s" }}>
              Let's talk
            </span>
          </span>
          <span style={{ display: "block", overflow: "hidden", paddingBlock: "0.18em", marginBlock: "-0.18em" }}>
            <span style={{ display: "inline-block", transform: inView ? "translateY(0)" : "translateY(110%)", transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s", color: "var(--accent)" }}>
              about something
            </span>
          </span>
          <span style={{ display: "block", overflow: "hidden", paddingBlock: "0.14em", marginBlock: "-0.14em" }}>
            <span
              style={{
                display: "inline-block",
                transform: inView ? "translateY(0)" : "translateY(110%)",
                transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.5s",
                fontFamily: "var(--font-sans)",
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "0.62em",
              }}
            >
              worth building.
            </span>
          </span>
        </h2>

        <div style={{ display: "flex", gap: 28, marginTop: 60, flexWrap: "wrap", alignItems: "center" }}>
          <a
            ref={magRef as React.RefObject<HTMLAnchorElement>}
            href="mailto:mihaita.braes@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 18,
              padding: "26px 36px",
              background: "var(--accent)",
              color: "var(--bg)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 999,
              transition: "transform 0.4s ease",
            }}
          >
            mihaita.braes@gmail.com <span>↗</span>
          </a>
          {[
            { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/mihaita-braes/" },
            { label: "GitHub ↗", href: "https://github.com/mihaitabraes" },
            { label: "CV.pdf ↗", href: "/Mihaita Braes - CV.pdf" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--bg)",
                opacity: 0.7,
                textDecoration: "none",
                borderBottom: "1px solid currentColor",
                paddingBottom: 4,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
