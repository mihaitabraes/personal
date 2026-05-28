"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useSectionProgress, useScrollVelocity } from "@/hooks/useScroll";
import { useMagnetic } from "@/hooks/useMagnetic";
import SplitWords from "@/components/SplitWords";

export default function Hero() {
  const [headingRef, headingInView] = useInView({ threshold: 0.05 });
  const [bodyRef, bodyInView] = useInView({ threshold: 0.05 });
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);
  const velocity = useScrollVelocity(0.06);
  const magRef = useMagnetic(0.35);

  return (
    <section
      id="top"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        padding: "calc(120px * var(--pad-scale)) calc(48px * var(--pad-scale)) calc(56px * var(--pad-scale))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "var(--bg)",
        color: "var(--ink)",
        overflow: "hidden",
      }}
    >
      {/* Background mega-letterform */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-6vw",
          bottom: "-26vh",
          fontFamily: "var(--font-display)",
          fontStyle: "var(--display-style)",
          fontSize: "80vw",
          lineHeight: 0.8,
          color: "var(--signal)",
          opacity: 0.10,
          pointerEvents: "none",
          transform: `translateY(${progress * -100}px) rotate(${-4 + velocity * 0.5}deg)`,
          fontWeight: "var(--display-weight, 400)",
          willChange: "transform",
        }}
      >
        M
      </div>

      {/* Top eyebrow row */}
      <div
        ref={headingRef as React.RefObject<HTMLDivElement>}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "start",
          gap: 24,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          paddingTop: 40,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div>
          <span style={{ display: "inline-block", width: 26, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
          Portfolio 2026 · v2
        </div>
        <div style={{ textAlign: "center" }}>⟶ Index of work, principles &amp; practice</div>
        <div style={{ justifySelf: "end", textAlign: "right" }}>
          <div>Product Manager · AI &amp; Agentic Systems</div>
          <div style={{ marginTop: 4 }}>06 YRS · FINTECH · MEDIA · TRANSPORTATION</div>
        </div>
      </div>

      {/* Mid block: headline + portrait */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.7fr 1fr",
          gap: "calc(48px * var(--gap-scale))",
          alignItems: "end",
          marginTop: 80,
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "var(--display-style)",
            fontWeight: "var(--display-weight, 400)",
            fontSize: "clamp(88px, 15.5vw, 280px)",
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            margin: 0,
            color: "var(--ink)",
            transform: `skewY(${velocity * 0.18}deg)`,
            transformOrigin: "left center",
            transition: "transform 0.2s ease-out",
            willChange: "transform",
          }}
        >
          <span style={{ display: "block", overflow: "hidden", paddingBlock: "0.12em", marginBlock: "-0.12em" }}>
            <span
              style={{
                display: "inline-block",
                transform: headingInView ? "translateY(0%)" : "translateY(110%)",
                transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.1s",
                fontWeight: 500,
              }}
            >
              Ships
            </span>
          </span>
          <span style={{ display: "block", overflow: "hidden", paddingBlock: "0.18em", marginBlock: "-0.18em" }}>
            <span
              style={{
                display: "inline-block",
                transform: headingInView ? "translateY(0%)" : "translateY(110%)",
                transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.28s",
                color: "var(--accent)",
                fontStyle: "italic",
                fontSize: "clamp(72px, 13vw, 210px)",
              }}
            >
              software
            </span>
          </span>
          <span style={{ display: "block", overflow: "hidden", paddingBlock: "0.15em", marginBlock: "-0.15em" }}>
            <span
              style={{
                display: "inline-block",
                transform: headingInView ? "translateY(0%)" : "translateY(110%)",
                transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.46s",
                fontFamily: "var(--font-sans)",
                fontStyle: "normal",
                fontWeight: 200,
                letterSpacing: "-0.025em",
                fontSize: "clamp(52px, 9vw, 150px)",
              }}
            >
              with the engineers.
            </span>
          </span>
        </h1>

        {/* Portrait + side-rail */}
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, alignItems: "stretch" }}>
          <div
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
              display: "flex",
              alignItems: "center",
              gap: 18,
              padding: "8px 0",
            }}
          >
            <span>FIG.01</span>
            <span style={{ display: "inline-block", height: 1, flex: 1, background: "currentColor", opacity: 0.5 }} />
            <span>Mihaita Braes</span>
          </div>

          <figure
            style={{
              margin: 0,
              position: "relative",
              aspectRatio: "3 / 4",
              background: "var(--bg-alt)",
              border: "1px solid var(--ink)",
              overflow: "hidden",
              transform: `translateY(${(1 - progress) * 40}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <Image
              src="/assets/mihaita.jpg"
              alt="Mihaita Braes"
              fill
              sizes="(max-width: 768px) 40vw, 25vw"
              style={{
                objectFit: "cover",
                filter: "grayscale(0.2) contrast(1.04)",
                transform: `scale(${1 + progress * 0.06})`,
                transition: "transform 0.1s linear",
              }}
            />
            {/* Duotone overlay */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--accent)",
                mixBlendMode: "multiply",
                opacity: 0.08,
                pointerEvents: "none",
              }}
            />
            {/* Caption strip */}
            <div
              style={{
                position: "absolute",
                left: 12,
                bottom: 12,
                padding: "6px 10px",
                background: "var(--ink)",
                color: "var(--bg)",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              2026 · Bucharest
            </div>
            {/* Coordinates */}
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--bg)",
                background: "rgba(0,0,0,0.55)",
                padding: "4px 8px",
              }}
            >
              N 47°09′ · E 27°35′
            </div>
            {/* Corner crops */}
            {(["tl", "tr", "bl", "br"] as const).map((c) => (
              <span
                key={c}
                style={{
                  position: "absolute",
                  width: 14,
                  height: 14,
                  borderColor: "var(--ink)",
                  borderStyle: "solid",
                  borderWidth: 0,
                  ...(c === "tl" ? { top: 6, left: 6, borderTopWidth: 1, borderLeftWidth: 1 } : {}),
                  ...(c === "tr" ? { top: 6, right: 6, borderTopWidth: 1, borderRightWidth: 1 } : {}),
                  ...(c === "bl" ? { bottom: 6, left: 6, borderBottomWidth: 1, borderLeftWidth: 1 } : {}),
                  ...(c === "br" ? { bottom: 6, right: 6, borderBottomWidth: 1, borderRightWidth: 1 } : {}),
                }}
              />
            ))}
          </figure>
        </div>
      </div>

      {/* Bottom row: subhead + CTA + scroll cue */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 32,
          alignItems: "end",
          marginTop: 72,
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          ref={bodyRef as React.RefObject<HTMLParagraphElement>}
          style={{
            margin: 0,
            maxWidth: 560,
            fontFamily: "var(--font-sans)",
            fontSize: "calc(20px * var(--type-scale))",
            lineHeight: 1.4,
            color: "var(--ink)",
            opacity: 0.86,
          }}
        >
          <SplitWords
            inView={bodyInView}
            stagger={0.025}
            delay={0.4}
            text="Technical PM in Bucharest. Six years turning ambiguous system challenges into shipped software — real-time data, mobile, distributed APIs. Currently building agentic AI workflows for product teams."
          />
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 22 }}>
          <a
            href="mailto:mihaita.braes@gmail.com?subject=Hello%20Mihaita"
            ref={magRef as React.RefObject<HTMLAnchorElement>}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "22px 28px",
              background: "var(--ink)",
              color: "var(--bg)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              textDecoration: "none",
              borderRadius: 999,
              transition: "transform 0.4s ease",
            }}
          >
            <span style={{ width: 8, height: 8, background: "var(--signal)", borderRadius: "50%" }} />
            Get in touch
            <span style={{ marginLeft: 4 }}>↗</span>
          </a>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--ink-soft)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Scroll
            <span style={{ display: "inline-block", animation: "scrollNudge 1.8s ease-in-out infinite" }}>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
