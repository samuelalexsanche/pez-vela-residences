import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-teal-deep text-crema">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/branding/logo-pezvela-turquesa-blanco.png"
                alt="Pez Vela Residences"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="font-serif text-2xl tracking-wide">PEZ VELA</p>
                <p className="font-script text-lg leading-none text-turquesa">
                  Residences
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-crema/65">
              {site.tagline} Residencias de lujo frente a la Bahía de Banderas,
              en {site.ubicacion}.
            </p>
            <p className="mt-4 inline-flex rounded-full border border-turquesa/40 px-3 py-1 text-xs font-semibold tracking-wide text-turquesa">
              {site.estatus}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="kicker mb-5 text-crema/50">Explora</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-crema/75 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="kicker mb-5 text-crema/50">Contacto</p>
            <ul className="space-y-3 text-sm text-crema/75">
              <li>
                <a
                  href={`https://wa.me/${site.contacto.whatsapp.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-white"
                >
                  WhatsApp · {site.contacto.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contacto.email}`}
                  className="link-underline hover:text-white"
                >
                  {site.contacto.email}
                </a>
              </li>
              <li className="text-crema/55">{site.contacto.direccion}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-crema/50 sm:flex-row">
          <p>© 2026 Pez Vela Residences. Todos los derechos reservados.</p>
          <p>
            Sitio por{" "}
            <span className="font-semibold text-crema/70">Mattera Systems</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
