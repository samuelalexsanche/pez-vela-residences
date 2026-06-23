import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

type Props = {
  title: string;
  intro: string;
};

export function CtaBand({ title, intro }: Props) {
  return (
    <section className="bg-teal py-24 text-center sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mx-auto mb-8 w-20">
            <Image
              src="/branding/logo-pezvela-transparente.png"
              alt="Pez Vela Residences"
              width={80}
              height={86}
              className="w-full object-contain"
            />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl text-white sm:text-5xl">{title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-crema/80">
            {intro}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contacto" size="lg" variant="primary">
              Agenda tu cita
            </Button>
            <Button href="/unidades" size="lg" variant="light">
              Ver todas las unidades
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
