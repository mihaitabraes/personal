"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-3xl w-full space-y-6"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-violet-400 font-medium"
        >
          Product Manager · Full-Stack in progress
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="glitch-soft font-display text-5xl sm:text-7xl font-bold leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400">
            Mihaita
          </span>
          .
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed"
        >
          I build products that people actually want to use. I&apos;m learning
          to build them myself too — one component at a time.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4 pt-4">
          <Link href="/about">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-violet font-display"
            >
              About me
            </motion.span>
          </Link>

          <Link href="/cv">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-cyan font-display"
            >
              View CV
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
