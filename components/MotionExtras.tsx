"use client";
import { useRef, useState, useEffect } from "react";
import { scrollSubs, initScrollBus } from "@/lib/scrollBus";

/* ── Custom Cursor ─────────────────────────────────────────────────── */
function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hot, setHot]       = useState(false);
  const [active, setActive] = useState(false);
  const state = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    document.documentElement.style.cursor = "none";
    state.current = { x: innerWidth / 2, y: innerHeight / 2, rx: innerWidth / 2, ry: innerHeight / 2 };

    const onMove = (e: MouseEvent) => {
      state.current.x = e.clientX;
      state.current.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0) translate(-50%,-50%)`;
      }
      const el = e.target as Element | null;
      setHot(!!el?.closest("a,button,input,textarea,.project-row,.nav-link,.stat-cell,[role='button']"));
    };
    const onDown  = () => setActive(true);
    const onUp    = () => setActive(false);
    const onLeave = () => { if (dot.current) dot.current.style.opacity = "0"; if (ring.current) ring.current.style.opacity = "0"; };
    const onEnter = () => { if (dot.current) dot.current.style.opacity = "1"; if (ring.current) ring.current.style.opacity = "1"; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf: number;
    const lerp = () => {
      const s = state.current;
      s.rx += (s.x - s.rx) * 0.18;
      s.ry += (s.y - s.ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${s.rx}px,${s.ry}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} aria-hidden="true" style={{ position: "fixed", top: 0, left: 0, width: 6, height: 6, borderRadius: "50%", background: "var(--ink)", pointerEvents: "none", zIndex: 9999, mixBlendMode: "difference", opacity: 0, transition: "opacity 0.3s" }} />
      <div
        ref={ring}
        aria-hidden="true"
        style={{
          position: "fixed", top: 0, left: 0,
          width: hot ? 56 : 28, height: hot ? 56 : 28,
          borderRadius: "50%",
          border: hot ? "1px solid var(--accent)" : "1px solid var(--ink)",
          background: hot ? "color-mix(in oklab, var(--accent) 8%, transparent)" : "transparent",
          pointerEvents: "none", zIndex: 9998,
          opacity: 0,
          scale: active ? "0.78" : "1",
          transition: "width 0.35s cubic-bezier(0.22,1,0.36,1), height 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, background 0.3s, opacity 0.3s, scale 0.18s",
        }}
      />
    </>
  );
}

/* ── Side Section Index ────────────────────────────────────────────── */
const SECTIONS = [
  { id: "top",        n: "00", label: "Intro" },
  { id: "about",      n: "01", label: "About" },
  { id: "stack",      n: "02", label: "Stack" },
  { id: "work",       n: "03", label: "Work" },
  { id: "principles", n: "04", label: "Principles" },
  { id: "contact",    n: "05", label: "Contact" },
];

function SideIndex() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    initScrollBus();
    const update = () => {
      const mid = window.innerHeight * 0.4;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= mid) current = s.id;
      }
      setActive(current);
    };
    scrollSubs.add(update);
    update();
    return () => { scrollSubs.delete(update); };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        right: 16, top: "50%",
        transform: "translateY(-50%)",
        zIndex: 40,
        display: "flex", flexDirection: "column", gap: 14,
        pointerEvents: "none",
        mixBlendMode: "difference",
        color: "#fff",
      }}
    >
      {SECTIONS.map((s) => {
        const on = active === s.id;
        return (
          <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "flex-end", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", opacity: on ? 1 : 0.35, transition: "opacity 0.5s ease" }}>
            <span style={{ opacity: on ? 1 : 0, transform: on ? "translateX(0)" : "translateX(8px)", transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)" }}>
              {s.label}
            </span>
            <span style={{ minWidth: 22, textAlign: "right" }}>{s.n}</span>
            <span style={{ display: "inline-block", width: on ? 22 : 10, height: 1, background: "currentColor", transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)" }} />
          </div>
        );
      })}
    </div>
  );
}

/* ── Page-load Reveal ──────────────────────────────────────────────── */
function PageReveal() {
  const [phase, setPhase] = useState<"intro" | "exit" | "done">(() => {
    if (typeof sessionStorage === "undefined") return "done";
    return sessionStorage.getItem("__mb_revealed") === "1" ? "done" : "intro";
  });

  useEffect(() => {
    if (phase !== "intro") return;
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("exit"), 900);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("__mb_revealed", "1");
      document.body.style.overflow = "";
    }, 1850);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "var(--ink)", color: "var(--bg)",
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 30,
        transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.95s cubic-bezier(0.85,0,0.15,1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)", fontStyle: "var(--display-style)",
          fontWeight: "var(--display-weight, 500)" as React.CSSProperties["fontWeight"],
          fontSize: "clamp(56px, 11vw, 180px)",
          lineHeight: 0.9, letterSpacing: "-0.04em", textAlign: "center",
          overflow: "hidden", paddingBlock: "0.18em", marginBlock: "-0.18em",
        }}
      >
        <span style={{ display: "inline-block", animation: "revealUp 0.95s cubic-bezier(0.22,1,0.36,1) both" }}>
          Mihaita <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Braes</span>
        </span>
      </div>

      {/* Bottom meta */}
      <div style={{ position: "absolute", left: 32, right: 32, bottom: 32, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--bg)", opacity: 0.75 }}>
        <span>Portfolio · 2026</span>
        <span style={{ textAlign: "center" }}>Loading the work…</span>
        <span style={{ textAlign: "right" }}>Bucharest · RO</span>
      </div>

      {/* Top meta */}
      <div style={{ position: "absolute", left: 32, right: 32, top: 32, display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--bg)", opacity: 0.75 }}>
        <span>(v 2 · 2026)</span>
        <span>Product Manager</span>
      </div>
    </div>
  );
}

/* ── Grain overlay ─────────────────────────────────────────────────── */
function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed", inset: 0,
        pointerEvents: "none", zIndex: 49,
        opacity: 0.06, mixBlendMode: "multiply",
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}
    />
  );
}

export default function MotionExtras() {
  return (
    <>
      <PageReveal />
      <CustomCursor />
      <SideIndex />
      <GrainOverlay />
    </>
  );
}
