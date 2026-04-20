"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContact, type ContactState } from "@/app/actions/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// useActionState takes (action, initialState) and returns [state, formAction, isPending]
// state      — the last value returned by sendContact (or null initially)
// formAction — the function you pass to <form action={...}>
// isPending  — true while the server is processing the submission
const initialState: ContactState = null;

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContact, initialState);

  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-2xl px-6 pt-24 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-6 mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-widest text-violet-400 font-medium"
          >
            Get in touch
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="glitch-soft font-display text-4xl sm:text-6xl font-bold leading-tight"
          >
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400">
              talk
            </span>
            .
          </motion.h1>

          <motion.p variants={fadeUp} className="text-zinc-400 max-w-lg leading-relaxed">
            Whether you have a project in mind, a question, or just want to say
            hi — my inbox is open.
          </motion.p>
        </motion.div>

        {/* ── Success state ── */}
        <AnimatePresence>
          {state?.success && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-8 border border-cyan-400/30 bg-cyan-400/5 px-6 py-5 rounded-sm"
            >
              <p className="font-mono text-cyan-400 text-sm">
                <span className="opacity-50 mr-2">&gt;_</span>
                Message sent. I&apos;ll get back to you soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Form ── */}
        {!state?.success && (
          <motion.form
            action={formAction}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:border-violet-500 focus:shadow-[0_0_0_1px_rgba(139,92,246,0.3)] rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:border-violet-500 focus:shadow-[0_0_0_1px_rgba(139,92,246,0.3)] rounded-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="What's on your mind?"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:border-violet-500 focus:shadow-[0_0_0_1px_rgba(139,92,246,0.3)] rounded-sm resize-none"
              />
            </div>

            {/* Error message */}
            <AnimatePresence>
              {state?.error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-xs text-red-400"
                >
                  <span className="opacity-50 mr-2">&gt;_</span>
                  {state.error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isPending}
              whileHover={isPending ? {} : { scale: 1.03 }}
              whileTap={isPending ? {} : { scale: 0.97 }}
              className="btn-violet font-display disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Sending..." : "Send message"}
            </motion.button>
          </motion.form>
        )}
      </section>
    </main>
  );
}
