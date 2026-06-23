import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

type Props = {
  image?: string;
  quote: string;
  attribution?: string;
};

/** Banner emocional a sangre con parallax y frase serif. */
export function LifestyleBanner({
  image = "/branding/banner-playa-pies-arena.jpg",
  quote,
  attribution,
}: Props) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <Parallax amount={70} className="absolute inset-0 -z-10">
        <div className="relative h-[130%] w-full -translate-y-[12%]">
          <Image
            src={image}
            alt="Estilo de vida costero en la Riviera Nayarit"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-teal-deep/45" />
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-serif text-3xl font-light italic leading-snug text-white text-shadow-soft sm:text-4xl md:text-5xl">
          “{quote}”
        </p>
        {attribution && (
          <p className="mt-6 text-sm uppercase tracking-[0.22em] text-crema/75">
            {attribution}
          </p>
        )}
      </Reveal>
    </section>
  );
}
