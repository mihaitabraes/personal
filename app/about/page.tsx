"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// ─── Data ────────────────────────────────────────────────────────────────────

const radarData = [
  { axis: "Product", current: 90, aspiration: 97 },
  { axis: "Technical", current: 35, aspiration: 75 },
  { axis: "Design", current: 45, aspiration: 70 },
  { axis: "Leadership", current: 70, aspiration: 82 },
  { axis: "Strategy", current: 78, aspiration: 88 },
];

const timeline = [
  {
    role: "Product Manager",
    company: "Thinslices, Iași",
    period: "August 2025 — Present",
    summary:
      "Leading product discovery and planning for a mobile app in the electronic music and raving scene.",
    detail:
      "Partnering with engineering, UX, and stakeholders to shape backlogs, roadmaps, and delivery strategy. Key story: navigated a real conflict between an investor pushing for social features and a PO focused on nailing event discovery first — facilitated alignment around a user-first approach that honoured both visions without derailing delivery.",
  },
  {
    role: "Delivery Manager",
    company: "Levi9, Iași",
    period: "June 2021 — August 2025",
    summary:
      "Managed multi-team agile delivery across large-scale Fintech and Transportation products.",
    detail:
      "Improved sprint predictability, coached junior PMs, and introduced sprint health metrics across delivery teams. Founded an internal Agile training initiative that grew to 11 members. Co-presented 'A State of Agile: The Good, the Bad and the Ugly' at a public tech event in 2024 — honest talk about what actually works in the real world.",
  },
  {
    role: "Senior Technical Team Lead",
    company: "SCC, Iași",
    period: "January 2019 — June 2021",
    summary:
      "Supervised enterprise support operations and built a team that actually gave a damn.",
    detail:
      "Increased SLA adherence by 20% through clearer task ownership and smarter escalation processes. Invested genuinely in mentoring junior analysts — some of them are now senior engineers. Started here as a Technical Support Analyst in 2019 and moved up fast.",
  },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen text-white">
      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-widest text-violet-400 font-medium"
          >
            Product Manager · Iași, Romania
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="glitch-soft text-4xl sm:text-6xl font-bold leading-tight font-display"
          >
            I turn complex ideas into{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400">
              products people use
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
          >
            Five years of shipping digital products across fintech, transport,
            and consumer apps. A Telecom engineering background that gives me
            genuine appreciation for how things are actually built. And a
            growing obsession with building them myself.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
          >
            I&apos;m working toward being a T-shaped PM — someone who goes deep
            on product, but can hold a real conversation about architecture,
            design systems, and code. This site is part of that journey.
          </motion.p>
        </motion.div>
      </section>

      {/* ── T-Shape radar ── */}
      <section className="mx-auto max-w-3xl px-6 py-20 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <h2 className="glitch font-display text-2xl sm:text-3xl font-bold" style={{"--glitch-delay": "1s"} as React.CSSProperties}>How I see myself</h2>
          <p className="text-zinc-400 max-w-xl">
            The filled area is where I am today. The outer line is where
            I&apos;m heading. The gap is intentional — it&apos;s the plan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-80"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#27272a" />
              <PolarAngleAxis
                dataKey="axis"
                tick={{ fill: "#a1a1aa", fontSize: 13, fontWeight: 500 }}
              />
              <Radar
                name="Aspiration"
                dataKey="aspiration"
                stroke="#7c3aed"
                fill="transparent"
                strokeWidth={1.5}
                strokeDasharray="4 3"
              />
              <Radar
                name="Current"
                dataKey="current"
                stroke="#7c3aed"
                fill="#7c3aed"
                fillOpacity={0.25}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="flex gap-8 mt-2 justify-center text-sm text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="inline-block w-6 border-t-2 border-violet-500" />
            Current
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-6 border-t-2 border-dashed border-violet-500" />
            Aspiration
          </span>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="mx-auto max-w-3xl px-6 py-20 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glitch font-display text-2xl sm:text-3xl font-bold mb-10"
          style={{"--glitch-delay": "2s"} as React.CSSProperties}
        >
          Where I&apos;ve been
        </motion.h2>

        <div className="space-y-4">
          {timeline.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`overflow-hidden border transition-all duration-300 ${
                openIndex === i
                  ? "border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,240,0.12),inset_0_0_30px_rgba(0,255,240,0.04)] bg-zinc-950"
                  : "border-zinc-800/70 bg-zinc-950/60 hover:border-cyan-400/20 hover:shadow-[0_0_15px_rgba(0,255,240,0.06)]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
              >
                <div>
                  <p className="font-display font-bold text-white tracking-wide">{entry.role}</p>
                  <p className="font-mono text-xs text-cyan-400/70 mt-1 neon-flicker" style={{"--flicker-delay": `${i * 1.3}s`} as React.CSSProperties}>
                    {entry.company} · {entry.period}
                  </p>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{entry.summary}</p>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`ml-6 text-2xl shrink-0 leading-none font-mono transition-colors ${
                    openIndex === i ? "text-cyan-400 glow-cyan" : "text-zinc-600"
                  }`}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -8 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-mono px-6 pb-6 pt-4 text-zinc-400 text-sm leading-relaxed border-t border-cyan-400/20">
                      <span className="text-cyan-400/50 select-none mr-2">&gt;_</span>
                      {entry.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Currently ── */}
      <section className="mx-auto max-w-3xl px-6 py-20 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="glitch font-display text-2xl sm:text-3xl font-bold" style={{"--glitch-delay": "3s"} as React.CSSProperties}>Right now</h2>
          <ul className="space-y-3">
            {[
              "PM at Thinslices, working on a mobile app for the electronic music scene",
              "Learning Next.js and React, applying every concept directly to this portfolio",
            ].map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-zinc-400"
              >
                <span className="text-violet-400 mt-0.5 shrink-0">→</span>
                {line}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
