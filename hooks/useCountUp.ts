"use client";
import { useState, useEffect } from "react";

export function useCountUp(value: string, inView: boolean, duration = 1500): string {
  const [out, setOut] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const m = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!m) { setOut(String(value)); return; }
    const target = parseFloat(m[1]);
    const suffix = m[2] || "";
    const pad = m[1].startsWith("0") && m[1].length > 1 ? m[1].length : 0;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const n = target * eased;
      const formatted = Number.isInteger(target)
        ? String(Math.round(n)).padStart(pad, "0")
        : n.toFixed(1);
      setOut(formatted + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return out;
}
