import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  tone?: "turquesa" | "arena" | "light" | "dark";
  className?: string;
};

const tones = {
  turquesa: "bg-turquesa/12 text-turquesa-muted border-turquesa/25",
  arena: "bg-arena/25 text-madera border-arena/50",
  light: "bg-white/15 text-white border-white/30 backdrop-blur-sm",
  dark: "bg-teal text-crema border-teal",
};

export function Badge({ children, tone = "turquesa", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide font-sans",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
