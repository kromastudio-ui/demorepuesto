import { useEffect, useState } from "react";
import { SERVICES } from "../data";
import { Reveal, SectionHead, usePrefersReducedMotion } from "../ui";
import { IconArrow, IconCheck, IconWhatsApp } from "./Icons";

/** Mini-lector OBD: rota códigos reales de falla */
const OBD = [
  { code: "P0301", desc: "Falla de encendido cilindro 1" },
  { code: "P0420", desc: "Catalizador por debajo de eficiencia" },
  { code: "P0171", desc: "Sistema más pobre de lo pedido (B1 S1)" },
  { code: "P0101", desc: "Rendimiento fuera de rango del MAF" },
];

function ObdTicker() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((v) => (v + 1) % OBD.length), 2600);
    return () => clearInterval(id);
  }, [reduced]);
  const o = OBD[i];
  return (
    <div className="mt-5 border border-line-dark bg-graphite/80 p-3.5 font-mono text-[12px]">
      <p className="flex items-center justify-between text-paper/50">
        <span>ESCÁNER · LECTURA EN VIVO</span>
        <span className="blink text-wa">● REC</span>
      </p>
      <p className="mt-1.5 text-paper">
        <span className="text-wa">[{o.code}]</span> {o.desc}
      </p>
    </div>
  );
}

export default function Services({
  onService,
}: {
  onService: (text: string, serviceId: string) => void;
}) {
  return (
    <section id="servicios" className="grid-tech-dark relative scroll-mt-32 bg-graphite py-24 text-paper md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(15,82,186,0.5) 0%, transparent 62%)" }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            dark
            kicker="Taller de servicio especializado"
            title={
              <>
                Inyectores, escáner
                <span className="block" style={{ color: "#5c96f2" }}>
                  y mantenimiento en la hora
                </span>
              </>
            }
            sub="Laboratorio propio: nada se terceriza. Todo servicio sale con evidencia —mediciones, informe y lectura de escáner de cierre."
          />
          <Reveal delay={140}>
            <button
              onClick={() => onService("Quiero agendar servicio de: ", "inyectores")}
              className="group flex items-center gap-3 border border-paper/35 px-6 py-3.5 font-display text-[13.5px] font-medium uppercase tracking-[0.14em] text-paper transition-colors hover:border-wa hover:text-wa"
            >
              Agendar servicio
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* inyectores: tarjeta grande */}
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 110} className={i === 0 ? "lg:col-span-2" : ""}>
              <article
                id={s.id === "diagnostico" ? "diagnostico" : undefined}
                className={`group scroll-mt-32 border border-line-dark bg-panel/80 transition-colors duration-300 hover:border-navy2 ${
                  i === 0 ? "grid lg:grid-cols-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "min-h-[280px]" : ""}`}>
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className={`kenburns absolute inset-0 h-full w-full object-cover ${s.id === "diagnostico" ? "" : ""}`}
                  />
                  {s.id === "diagnostico" && <span aria-hidden className="scanline absolute inset-0" />}
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 bg-navy px-2.5 py-1 font-display text-[10.5px] font-medium uppercase tracking-[0.22em] text-paper">
                    {s.code}
                  </span>
                  <span className="absolute bottom-4 right-4 border border-paper/30 bg-graphite/85 px-3 py-1.5 font-display text-[11.5px] font-medium uppercase tracking-[0.18em] text-wa">
                    {s.time}
                  </span>
                </div>
                <div className="flex flex-col p-7 lg:p-8">
                  <h3 className="font-display text-[26px] font-semibold uppercase tracking-[0.05em]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-paper/65">{s.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-paper/80">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-wa" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {s.id === "diagnostico" && <ObdTicker />}
                  <div className="mt-auto pt-7">
                    <button
                      onClick={() => onService(`Quiero agendar servicio de: `, s.id)}
                      className="flex w-full items-center justify-center gap-2.5 bg-wa px-5 py-3.5 font-display text-[13.5px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-dark sm:w-auto sm:px-8"
                    >
                      <IconWhatsApp className="h-4.5 w-4.5" />
                      Agendar este servicio
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
