import Image from "next/image";
import Link from "next/link";
import type { Unidad } from "@/data/unidades";
import { whatsappLink } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { Gallery } from "@/components/ui/Gallery";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function UnitDetail({ unidad }: { unidad: Unidad }) {
  const esPenthouse = unidad.tipo === "penthouse";
  const volverHref = esPenthouse ? "/penthouses" : "/unidades";
  const mensaje = `Hola, me interesa la unidad ${unidad.nombre} (${unidad.total.toFixed(
    2
  )} m²) de Pez Vela Residences. ¿Me pueden compartir disponibilidad y precios?`;

  return (
    <>
      {/* Hero del detalle */}
      <section className="relative flex min-h-[68vh] items-end overflow-hidden">
        <Image
          src={unidad.portada}
          alt={unidad.nombre}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/55 to-teal-deep/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8">
          <Reveal>
            <Link
              href={volverHref}
              className="link-underline text-sm font-medium text-crema/80"
            >
              ← {esPenthouse ? "Penthouses" : "Departamentos"}
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Badge tone="light">{unidad.nivel}</Badge>
              <Badge tone="light">
                {unidad.disponibles}{" "}
                {unidad.disponibles === 1 ? "disponible" : "disponibles"}
              </Badge>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-serif text-5xl text-white text-shadow-soft sm:text-7xl">
              {unidad.nombre}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 font-serif text-3xl font-light text-turquesa-light sm:text-4xl">
              <span className="text-[#9fdde4]">{unidad.total.toFixed(2)} m²</span>{" "}
              <span className="text-base uppercase tracking-[0.2em] text-crema/70">
                área total
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Desglose */}
      <section className="bg-crema py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="kicker mb-4">La unidad</p>
              <p className="max-w-xl font-serif text-2xl leading-snug text-teal">
                {unidad.descripcion}
              </p>

              {/* Métricas */}
              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-teal/10 sm:grid-cols-4">
                {[
                  { k: "Interior", v: `${unidad.interior.toFixed(2)} m²` },
                  { k: "Terraza", v: `${unidad.terraza.toFixed(2)} m²` },
                  { k: "Recámaras", v: unidad.recamaras },
                  { k: "Baños", v: String(unidad.banos) },
                ].map((m) => (
                  <div key={m.k} className="bg-white p-5 text-center">
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-teal/50">
                      {m.k}
                    </dt>
                    <dd className="mt-1 font-serif text-2xl text-teal">{m.v}</dd>
                  </div>
                ))}
              </dl>

              {/* Numeración en torre */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.18em] text-turquesa">
                  {esPenthouse ? "Ubicación en torre" : "Unidades en la torre"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {unidad.unidades.map((n) => (
                    <span
                      key={n}
                      className="rounded-lg border border-teal/15 bg-white px-4 py-2 font-serif text-lg text-teal"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenidades incluidas + CTA */}
            <aside className="rounded-3xl border border-teal/10 bg-white p-7 shadow-[var(--shadow-soft)] lg:sticky lg:top-28 lg:self-start">
              <p className="font-serif text-2xl text-teal">Incluye</p>
              <ul className="mt-5 space-y-3">
                {unidad.amenidades.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-teal/75">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-turquesa" />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl bg-crema p-5 text-center">
                <p className="text-xs uppercase tracking-[0.16em] text-teal/50">
                  Precio
                </p>
                <p className="mt-1 font-serif text-2xl text-teal">
                  Bajo solicitud
                </p>
                <p className="text-xs text-teal/45">Editable · preventa</p>
              </div>
              <Button
                href={whatsappLink(mensaje)}
                external
                size="lg"
                className="mt-5 w-full"
              >
                Me interesa esta unidad
              </Button>
              <Button
                href="/contacto"
                variant="ghost"
                className="mt-2 w-full"
              >
                Agendar una visita
              </Button>
            </aside>
          </div>

          {/* Galería de la tipología */}
          <div className="mt-16">
            <p className="kicker mb-6">Galería de la tipología</p>
            <Gallery images={unidad.galeria} alt={unidad.nombre} />
          </div>
        </div>
      </section>
    </>
  );
}
