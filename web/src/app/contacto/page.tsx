import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda tu cita en Pez Vela Residences. Escríbenos por WhatsApp o déjanos tus datos y la unidad que te interesa.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        kicker="Contacto"
        title={<>Agenda tu cita</>}
        intro="Déjanos tus datos y la unidad que te interesa. Te contactamos con disponibilidad, precios y condiciones de preventa."
        image="/fotos/interior-sala-comedor-vista-mar-01.jpeg"
        imageAlt="Sala comedor con vista al mar"
      />

      <section className="bg-crema py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Datos de contacto */}
          <div>
            <SectionHeading
              kicker="Hablemos"
              title="Estamos para ayudarte"
              intro="Elige el canal que prefieras. La cita puede ser presencial en el desarrollo o virtual."
            />
            <div className="mt-10 space-y-5">
              <Reveal>
                <a
                  href={whatsappLink(
                    "Hola, me interesa Pez Vela Residences. Quiero agendar una cita."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-teal/10 bg-white p-5 transition-shadow hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/12 text-[#25D366]">
                    ✆
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-teal/50">
                      WhatsApp
                    </span>
                    <span className="font-serif text-xl text-teal">
                      {site.contacto.whatsappDisplay}
                    </span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.06}>
                <a
                  href={`mailto:${site.contacto.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-teal/10 bg-white p-5 transition-shadow hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-turquesa/12 text-turquesa">
                    @
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-teal/50">
                      Email
                    </span>
                    <span className="font-serif text-xl text-teal">
                      {site.contacto.email}
                    </span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="flex items-center gap-4 rounded-2xl border border-teal/10 bg-white p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-arena/30 text-madera">
                    ◎
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-teal/50">
                      Ubicación
                    </span>
                    <span className="text-sm text-teal/75">
                      {site.contacto.direccion}
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <p className="mt-6 text-xs text-teal/45">
                Datos de contacto temporales de la demo (Mattera Systems).
                Reemplazables por los del desarrollador.
              </p>
            </Reveal>
          </div>

          {/* Formulario */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-teal/10 bg-white/60 p-7 shadow-[var(--shadow-soft)] sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
