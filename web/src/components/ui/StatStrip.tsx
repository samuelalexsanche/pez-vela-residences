import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

type Stat = { valor: number; sufijo?: string; label: string; decimals?: number };

export function StatStrip({
  stats,
  tone = "dark",
}: {
  stats: Stat[];
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-teal/10 bg-teal/10 md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 0.08}
          className={
            light
              ? "bg-white/5 p-6 text-center sm:p-8"
              : "bg-white p-6 text-center sm:p-8"
          }
        >
          <p
            className={`font-serif text-4xl sm:text-5xl ${
              light ? "text-white" : "text-teal"
            }`}
          >
            <Counter
              value={s.valor}
              suffix={s.sufijo}
              decimals={s.decimals ?? 0}
            />
          </p>
          <p
            className={`mt-2 text-xs uppercase tracking-[0.16em] ${
              light ? "text-crema/60" : "text-teal/55"
            }`}
          >
            {s.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
