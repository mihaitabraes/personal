"use client";
import { useState, useEffect, RefObject } from "react";
import { scrollSubs, velocitySubs, initScrollBus } from "@/lib/scrollBus";

export function useScrollY(): number {
  const [y, setY] = useState(0);
  useEffect(() => {
    initScrollBus();
    setY(window.scrollY);
    scrollSubs.add(setY);
    return () => { scrollSubs.delete(setY); };
  }, []);
  return y;
}

export function useSectionProgress(ref: RefObject<HTMLElement | null>): number {
  const [p, setP] = useState(0);
  useEffect(() => {
    initScrollBus();
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      setP(Math.max(0, Math.min(1, traveled / total)));
    };
    scrollSubs.add(update);
    update();
    return () => { scrollSubs.delete(update); };
  }, [ref]);
  return p;
}

export function useScrollVelocity(scale = 0.3): number {
  const [v, setV] = useState(0);
  useEffect(() => {
    initScrollBus();
    const fn = (val: number) => setV(val * scale);
    velocitySubs.add(fn);
    return () => { velocitySubs.delete(fn); };
  }, [scale]);
  return v;
}

export function useKineticProgress(ref: RefObject<HTMLElement | null>): number {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    initScrollBus();
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = -rect.height * 0.2;
      const range = start - end;
      const t = (start - rect.top) / range;
      setProg(Math.max(0, Math.min(1, t)));
    };
    scrollSubs.add(update);
    update();
    return () => { scrollSubs.delete(update); };
  }, [ref]);
  return prog;
}
