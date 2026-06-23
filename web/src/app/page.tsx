import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { LifestyleBanner } from "@/components/sections/LifestyleBanner";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatStrip } from "@/components/ui/StatStrip";
import { UnitCard } from "@/components/ui/UnitCard";
import { Reveal } from "@/components/motion/Reveal";
import { ExteriorCarousel } from "@/components/sections/ExteriorCarousel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GoogleMap } from "@/components/ui/GoogleMap";
import { stats, amenidades, cercanias, exteriores } from "@/data/site";
import { departamentos, penthouses } from "@/data/unidades";

export default function Home() {
  return (
    <>
      <Hero />

      {/* El desarrollo */}
      <section className="bg-crema py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="El desarrollo"
              title={<>Un desarrollo de usos mixtos frente al mar</>}
              intro="Pez Vela Residences combina área comercial y residencias de lujo en La Cruz de Huanacaxtle. Departamentos de dos recámaras con distribuciones eficientes, pensados para la vida diaria, la segunda vivienda y la renta vacacional — funcionales, modernos y rentables."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge tone="turquesa">33 unidades residenciales</Badge>
                <Badge tone="arena">6 niveles</Badge>
                <Badge tone="turquesa">En preventa</Badge>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/desarrollo" variant="outline">
                  Conoce el desarrollo
                </Button>
                <Button href="/ubicacion" variant="ghost">
                  Ver ubicación →
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <ExteriorCarousel
                images={exteriores}
                alt="Render exterior de Pez Vela Residences"
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute bottom-5 left-5 z-10 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-sm">
                <p className="font-serif text-2xl text-teal">Riviera Nayarit</p>
                <p className="text-xs uppercase tracking-[0.18em] text-turquesa">
                  Bahía de Banderas
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
          <StatStrip stats={stats} tone="dark" />
        </div>
      </section>

      {/* Departamentos destacados */}
      <section className="bg-crema-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="Unidades"
              title="Seis tipologías de departamento"
              intro="Cada tipología, una card propia con sus metros cuadrados de interior, terraza y la numeración de unidades en la torre. Sin iframes de terceros: todo en marca."
            />
            <Reveal delay={0.1}>
              <Button href="/unidades" variant="outline">
                Ver las 6 tipologías
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departamentos.slice(0, 3).map((u, i) => (
              <UnitCard key={u.slug} unidad={u} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Penthouses destacados — fondo teal */}
      <section className="bg-teal py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            tone="light"
            kicker="Penthouses · Nivel 6"
            title="Vivir en lo más alto"
            intro="Tres penthouses únicos de 213 a 257 m², con terrazas amplias y vista panorámica a la bahía. Lo más exclusivo de Pez Vela."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {penthouses.map((u, i) => (
              <UnitCard key={u.slug} unidad={u} index={i} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Amenidades teaser */}
      <section className="bg-crema py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Amenidades · Rooftop"
            title="Una azotea que aumenta la plusvalía"
            intro="Alberca infinity, Sky Beach, Pool Bar, asadores y gimnasio techado — diseñadas para el disfrute residencial y el atractivo en renta."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenidades.slice(0, 3).map((a, i) => (
              <Reveal key={a.titulo} delay={i * 0.08}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={a.foto}
                    alt={a.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/85 via-teal-deep/10 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-2xl text-white">{a.titulo}</h3>
                    <p className="mt-1 text-sm text-crema/80">{a.detalle}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10 text-center">
            <Button href="/amenidades" variant="outline">
              Explora el rooftop
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Lifestyle */}
      <LifestyleBanner quote="El espacio que mereces, en el destino que amas." />

      {/* Ubicación teaser */}
      <section className="bg-crema-deep py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="aspect-[4/3]">
              <GoogleMap
                query="La Cruz de Huanacaxtle, Nayarit, Mexico"
                zoom={15}
                className="h-full w-full"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              kicker="Ubicación estratégica"
              title="En el corazón de la Riviera Nayarit"
              intro="Sobre la vía principal de La Cruz de Huanacaxtle, con acceso inmediato a la marina internacional y a minutos de Punta de Mita y Bucerías."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {cercanias.map((c, i) => (
                <Reveal as="li" key={c.titulo} delay={i * 0.07}>
                  <p className="font-serif text-xl text-teal">{c.titulo}</p>
                  <p className="mt-1 text-sm text-teal/65">{c.detalle}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <Link
                href="/ubicacion"
                className="link-underline mt-8 inline-block font-semibold text-turquesa"
              >
                Ver ubicación e inversión →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tu espacio, tu mar."
        intro="Agenda una cita y conoce en persona el desarrollo, las tipologías disponibles y las condiciones de preventa."
      />
    </>
  );
}
