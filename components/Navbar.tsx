"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="neon-flicker opacity-90 hover:opacity-100 transition-opacity">
          <Image
            src="/logo.png"
            alt="Mihaita Braes"
            width={120}
            height={80}
            priority
          />
        </Link>

        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link href={href} className="relative block px-4 py-2 group">
                  {/* Hover background pill */}
                  <motion.span
                    className="absolute inset-0 rounded-sm bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />

                  {/* Active background glow pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-bg"
                      className="absolute inset-0 rounded-sm bg-violet-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}

                  {/* Label */}
                  <span
                    className={`relative text-sm font-medium font-display tracking-wide transition-all duration-200 ${
                      isActive
                        ? "text-white glow-violet"
                        : "text-zinc-500 group-hover:text-zinc-200"
                    }`}
                  >
                    {label}
                  </span>

                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-line"
                      className="absolute bottom-0 left-3 right-3 h-px bg-violet-400"
                      style={{ boxShadow: "0 0 6px 1px #bf5af2" }}
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
