"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Solid bar on inner pages or after scrolling; translucent over the home hero.
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)]",
        solid
          ? "bg-crema/85 backdrop-blur-md shadow-[0_1px_0_rgba(67,78,80,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Inicio">
          <Image
            src="/branding/logo-pezvela-transparente.png"
            alt="Pez Vela Residences"
            width={48}
            height={51}
            className="h-11 w-auto object-contain"
            priority
          />
          <span
            className={cn(
              "font-serif text-lg leading-none tracking-wide transition-colors duration-500",
              solid ? "text-teal" : "text-white"
            )}
          >
            PEZ VELA
            <span className="block font-script text-sm leading-none text-turquesa">
              Residences
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline text-sm font-medium tracking-wide transition-colors duration-300",
                  solid ? "text-teal/80 hover:text-turquesa" : "text-white/90 hover:text-white",
                  active && "text-turquesa"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Toggle ES/EN (estructura i18n; ES por defecto) */}
          <button
            onClick={() => setLang((l) => (l === "ES" ? "EN" : "ES"))}
            className={cn(
              "hidden rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wider transition-colors sm:block",
              solid
                ? "border-teal/20 text-teal/70 hover:border-turquesa hover:text-turquesa"
                : "border-white/40 text-white/80 hover:border-white hover:text-white"
            )}
            aria-label="Cambiar idioma"
          >
            {lang}
          </button>

          <Button
            href="/contacto"
            size="md"
            variant={solid ? "primary" : "light"}
            className="hidden sm:inline-flex"
          >
            Agenda tu cita
          </Button>

          {/* Hamburguesa */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span
              className={cn(
                "h-0.5 w-6 origin-center transition-all duration-300",
                solid ? "bg-teal" : "bg-white",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 transition-all duration-300",
                solid ? "bg-teal" : "bg-white",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 origin-center transition-all duration-300",
                solid ? "bg-teal" : "bg-white",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-teal/10 bg-crema/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-3 font-serif text-xl text-teal hover:bg-turquesa/10 hover:text-turquesa"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Button href="/contacto" className="mt-3 w-full" size="lg">
                Agenda tu cita
              </Button>
              <p className="mt-3 px-3 text-center text-xs text-teal/50">
                {site.ubicacion}
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
