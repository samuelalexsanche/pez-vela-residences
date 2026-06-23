"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  /** Decimals to display (e.g. for m² values). */
  decimals?: number;
  className?: string;
};

/**
 * Animated number counter driven by anime.js, triggered when scrolled into view.
 * Falls back to the final value instantly under prefers-reduced-motion.
 */
export function Counter({
  value,
  suffix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          // anime.js v4 — animate a plain object's property and read it on update.
          import("animejs").then(({ animate }) => {
            const obj = { n: 0 };
            animate(obj, {
              n: value,
              duration: 1700,
              ease: "out(4)",
              onUpdate: () => setDisplay(obj.n),
            });
          });
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("es-MX", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
