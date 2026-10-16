import { STEPS } from "../data";
import { Reveal, SectionHead } from "../ui";
import { IconArrow, IconWhatsApp } from "./Icons";

export default function Flow() {
  return (
    <section className="relative border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHead
          align="center"
          kicker="Cómo comprar o agendar"
          title={
            <>
              Tres pasos. <span className="text-navy">Cero vueltas.</span>
            </>
          }
          sub="Diseñado para que pases del “no sé si lo tienen” a “me lo paso a retirar” en un solo mensaje."
        />

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-navy/25 md:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <div className="relative text-center md:px-4">
                <span className="relative z-10 inline-grid h-20 w-20 place-items-center bg-navy font-display text-4xl font-semibold text-paper">
                  {s.n}
                </span>
                <h3 className="mt-6 font-display text-[20px] font-semibold uppercase tracking-[0.08em] text-graphite">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-[14px] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href="#cotizar"
              className="group flex items-center gap-3 bg-navy px-8 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.1em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy2 hover:shadow-[0_16px_40px_rgba(0,70,150,0.3)]"
            >
              Empezar mi cotización
              <IconArrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <p className="flex items-center gap-2 font-display text-[11.5px] uppercase tracking-[0.2em] text-muted/70">
              <IconWhatsApp className="h-3.5 w-3.5 text-wa-dark" />
              o mándanos directo por WhatsApp: llega lo mismo
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
