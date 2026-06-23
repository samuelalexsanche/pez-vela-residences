import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
};

/** Cabecera de página interior: imagen a sangre con overlay teal + título serif. */
export function PageHero({ kicker, title, intro, image, imageAlt }: Props) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/55 to-teal-deep/25" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8">
        <Reveal>
          <p className="kicker mb-4 flex items-center gap-3 text-turquesa">
            <span className="inline-block h-px w-10 bg-turquesa/70" />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] text-white text-shadow-soft sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-crema/85">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
