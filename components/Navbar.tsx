"use client";
import { useState, useEffect } from "react";
import { useScrollY } from "@/hooks/useScroll";

function LiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const s = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Bucharest",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(s);
    };
    fmt();
    const id = setInterval(fmt, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

const links = [
  { href: "#about",   label: "About" },
  { href: "#stack",   label: "Stack" },
  { href: "#work",    label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const y = useScrollY();
  const shrunk = y > 40;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: shrunk ? "10px 24px" : "20px 28px",
        transition: "padding 0.4s cubic-bezier(0.22,1,0.36,1), background 0.4s ease, backdropFilter 0.4s ease",
        background: shrunk ? "color-mix(in oklab, var(--bg) 78%, transparent)" : "transparent",
        backdropFilter: shrunk ? "blur(14px) saturate(1.1)" : "none",
        WebkitBackdropFilter: shrunk ? "blur(14px) saturate(1.1)" : "none",
        color: "var(--ink)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 24,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.04em",
        }}
      >
        {/* Left: logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a
            href="#top"
            style={{ display: "flex", alignItems: "center", gap: 10, color: "inherit", textDecoration: "none" }}
          >
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                background: "var(--accent)",
                borderRadius: "50%",
                boxShadow: "0 0 0 0 var(--accent)",
                animation: "ping 2.4s ease-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "var(--display-style)",
                fontSize: 22,
                letterSpacing: "-0.01em",
              }}
            >
              Mihaita Braes
            </span>
          </a>
        </div>

        {/* Center: links */}
        <nav style={{ display: "flex", gap: 4 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{
                color: "inherit",
                textDecoration: "none",
                padding: "8px 14px",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                position: "relative",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: status pill + time */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 14, justifySelf: "end", whiteSpace: "nowrap" }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#3CCB7F",
                animation: "pulse 1.8s ease-in-out infinite",
              }}
            />
            Open to chats
          </span>
          <span style={{ opacity: 0.55 }}>Bucharest</span>
          <span style={{ opacity: 0.55 }}><LiveTime /></span>
        </div>
      </div>
    </header>
  );
}
