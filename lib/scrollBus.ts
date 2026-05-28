type Subscriber = (value: number) => void;

export const scrollSubs = new Set<Subscriber>();
export const velocitySubs = new Set<Subscriber>();

let initialized = false;

export function initScrollBus(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  let ticking = false;

  function dispatchScroll() {
    const y = window.scrollY;
    scrollSubs.forEach((fn) => fn(y));
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        dispatchScroll();
        ticking = false;
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  let lastY = 0;
  let smoothV = 0;

  function tickVelocity() {
    const dy = window.scrollY - lastY;
    lastY = window.scrollY;
    smoothV = smoothV * 0.82 + dy * 0.18;
    if (Math.abs(dy) < 0.1) smoothV *= 0.9;
    const clamped = Math.max(-40, Math.min(40, smoothV));
    velocitySubs.forEach((fn) => fn(clamped));
    requestAnimationFrame(tickVelocity);
  }
  requestAnimationFrame(tickVelocity);
}
