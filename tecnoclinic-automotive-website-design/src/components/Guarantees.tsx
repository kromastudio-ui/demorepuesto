import { GUARANTEES } from "../data";
import { Reveal } from "../ui";
import { IconInjector, IconScan, IconShield, IconWhatsApp } from "./Icons";

const ICONS = [IconShield, IconInjector, IconScan, IconWhatsApp];

export default function Guarantees() {
  return (
    <section className="relative bg-navy py-14 text-paper md:py-16">
      <div className="mx-auto grid max-w-[1440px] gap-px px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {GUARANTEES.map((g, i) => {
          const Ic = ICONS[i];
          return (
            <Reveal key={g.title} delay={i * 90}>
              <div className="group flex h-full gap-4 border-line-dark/40 p-6 transition-colors duration-300 hover:bg-white/[0.06] sm:border-l sm:first:border-l-0 sm:pl-8 lg:py-2">
                <span className="grid h-13 w-13 shrink-0 place-items-center border border-paper/30 text-paper transition-all duration-300 group-hover:border-wa group-hover:text-wa">
                  <Ic className="h-6.5 w-6.5" />
                </span>
                <div>
                  <p aria-hidden className="font-display text-[11px] tracking-[0.3em] text-paper/40">
                    0{i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-[16.5px] font-semibold uppercase leading-snug tracking-[0.05em]">
                    {g.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-paper/65">{g.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
