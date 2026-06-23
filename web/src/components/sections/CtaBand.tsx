import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SailfishLogo } from "@/components/motion/SailfishLogo";

type Props = {
  title: string;
  intro: string;
};

export function CtaBand({ title, intro }: Props) {
  return (
    <section className="bg-teal py-24 text-center sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mx-auto mb-8 h-16 w-16 text-turquesa">
            <SailfishLogo className="h-full w-full text-[#6fcdd6]" animateDraw={false} />
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
