import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Kicker (mayúsculas) + título serif + intro. Base de todas las secciones. */
export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <p
            className={cn(
              "kicker mb-4",
              align === "center" && "flex items-center justify-center gap-3"
            )}
          >
            <span
              className={cn(
                "inline-block h-px w-8 align-middle",
                tone === "light" ? "bg-white/50" : "bg-turquesa/60"
              )}
            />
            {kicker}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-serif text-4xl leading-[1.05] sm:text-5xl",
            tone === "light" ? "text-white" : "text-teal"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "light" ? "text-crema/80" : "text-teal/70"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
