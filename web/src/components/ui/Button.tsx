import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-wide transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-turquesa text-white hover:bg-turquesa-muted shadow-[0_10px_30px_-10px_rgba(16,154,167,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-turquesa/70 text-teal hover:bg-turquesa hover:text-white hover:-translate-y-0.5",
  ghost: "text-teal hover:text-turquesa",
  light:
    "border border-white/60 text-white hover:bg-white hover:text-teal hover:-translate-y-0.5 backdrop-blur-sm",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-[0.95rem]",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  type = "button",
  onClick,
}: CommonProps & {
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
