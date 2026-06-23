"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** Stroke color. */
  color?: string;
  /** Animate the draw on mount. */
  animateDraw?: boolean;
};

/**
 * Line-art sailfish emblem inside a circle. On mount, anime.js draws each
 * stroke (stroke-dashoffset) with a stagger for an elegant "sketched" reveal.
 */
export function SailfishLogo({
  className,
  color = "currentColor",
  animateDraw = true,
}: Props) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animateDraw) return;
    const svgEl = ref.current;
    if (!svgEl) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    import("animejs").then(({ svg, animate, stagger }) => {
      const drawables = svg.createDrawable(".pv-draw");
      animate(drawables, {
        draw: ["0 0", "0 1"],
        ease: "inOut(3)",
        duration: 1600,
        delay: stagger(140),
      });
    });
  }, [animateDraw]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 240"
      fill="none"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      aria-hidden="true"
    >
      {/* círculo contenedor */}
      <circle className="pv-draw" cx="120" cy="120" r="96" />
      {/* pico / bill */}
      <path className="pv-draw" d="M22 124 L78 116" />
      {/* lomo superior hacia la cola */}
      <path
        className="pv-draw"
        d="M78 116 C104 96 150 92 182 108"
      />
      {/* vientre inferior */}
      <path
        className="pv-draw"
        d="M78 124 C112 140 152 140 182 124"
      />
      {/* cola bifurcada */}
      <path className="pv-draw" d="M182 108 L210 92" />
      <path className="pv-draw" d="M182 124 L212 142" />
      <path className="pv-draw" d="M182 108 L182 124" />
      {/* vela dorsal */}
      <path
        className="pv-draw"
        d="M92 104 C98 64 124 56 158 72"
      />
      {/* costillas de la vela */}
      <path className="pv-draw" d="M104 96 L108 74" />
      <path className="pv-draw" d="M118 92 L124 70" />
      <path className="pv-draw" d="M134 92 L142 74" />
      {/* ojo */}
      <circle className="pv-draw" cx="64" cy="118" r="3.2" />
    </svg>
  );
}
