"use client";
import { useRef, useState, useEffect, RefObject } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView(opts: Options = {}): [RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    const visible = rect.top < vh && rect.bottom > 0 && rect.left < vw && rect.right > 0;

    if (visible) {
      setInView(true);
      if (opts.once !== false) return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (opts.once !== false) io.disconnect();
        } else if (opts.once === false) {
          setInView(false);
        }
      },
      { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? "0px" }
    );
    io.observe(el);

    const raf = requestAnimationFrame(() => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      if (r.top < (window.innerHeight || 0) && r.bottom > 0) setInView(true);
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return [ref, inView];
}
