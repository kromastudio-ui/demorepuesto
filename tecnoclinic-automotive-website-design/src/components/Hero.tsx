import { AREA, RIF, TICKER_BRANDS } from "../data";
import { Reveal, useOpenStatus, useScramble } from "../ui";
import { IconArrow, IconCalendar, IconCheck, IconWhatsApp } from "./Icons";

export default function Hero({ onService }: { onService: (text: string) => void }) {
  const l1 = useScramble("REPUESTOS", 250);
  const l2 = useScramble("ORIGINALES Y", 650);
  const { open, detail } = useOpenStatus();

  return (
    <section id="inicio" className="grid-tech-dark relative overflow-hidden bg-graphite pt-36 text-paper md:pt-44">
      {/* halo azul */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-52 top-24 h-[520px] w-[520px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(15,82,186,0.55) 0%, transparent 62%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-full"
        style={{ background: "linear-gradient(to top, rgba(0,70,150,0.25), transparent)" }}
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-6 pb-16 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-24">
        {/* texto */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-line-dark px-3.5 py-1.5 font-display text-[11.5px] font-medium uppercase tracking-[0.26em] text-paper/70">
                Repuestera + Taller Especializado
              </span>
              <span className="flex items-center gap-2 border border-line-dark px-3.5 py-1.5 font-display text-[11.5px] font-medium uppercase tracking-[0.26em]">
                <span className={`h-2 w-2 rounded-full ${open ? "dot-live bg-wa" : "dot-closed bg-red"}`} />
                <span className={open ? "text-wa" : "text-red"}>{open ? "Abierto hoy" : "Cerrado"}</span>
                <span className="hidden text-paper/45 sm:inline">· {detail}</span>
              </span>
            </div>
          </Reveal>

          <h1 className="mt-7 font-display font-semibold uppercase leading-[0.98] tracking-wide">
            <span className="block whitespace-nowrap text-[13.5vw] sm:text-7xl lg:text-[64px] xl:text-7xl">{l1}</span>
            <span className="block whitespace-nowrap text-[13.5vw] text-navy2 sm:text-7xl lg:text-[64px] xl:text-7xl" style={{ color: "#5c96f2" }}>
              {l2}
            </span>
            <span className="block text-[9vw] sm:text-5xl lg:text-[46px] xl:text-[52px]">Servicio Técnico</span>
            <span className="block text-[9vw] sm:text-5xl lg:text-[46px] xl:text-[52px]">
              Especializado en <span className="text-wa">Caracas</span>
            </span>
          </h1>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper/70">
              Venta de repuestos multimarca (<strong className="font-semibold text-paper">especialistas ACDelco</strong>),
              diagnóstico computarizado y laboratorio de inyectores en Maripérez.
              Consulta disponibilidad inmediata antes de venir.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#cotizar"
                className="group flex items-center gap-3 bg-wa px-7 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-dark hover:shadow-[0_16px_40px_rgba(37,211,102,0.35)]"
              >
                <IconWhatsApp className="h-5 w-5" />
                Consultar Repuesto por WhatsApp
              </a>
              <button
                onClick={() => onService("Quiero agendar servicio de: ")}
                className="group flex items-center gap-3 border border-paper/40 px-7 py-4 font-display text-[15px] font-medium uppercase tracking-[0.1em] text-paper transition-colors duration-200 hover:border-wa hover:text-wa"
              >
                <IconCalendar className="h-5 w-5" />
                Agendar Limpieza de Inyectores / Escáner
              </button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {["Especialistas ACDelco", "Banco de prueba propio", "19K+ clientes en Caracas"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-display text-[12.5px] font-medium uppercase tracking-[0.18em] text-paper/60">
                  <IconCheck className="h-3.5 w-3.5 text-wa" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* fotografía del mostrador */}
        <Reveal delay={200} className="relative">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 border border-navy2/40" />
            <div className="relative overflow-hidden border border-line-dark">
              <img
                src="/images/hero-counter.jpg"
                alt="Mostrador de repuestos de Tecnoclinic con estanterías de stock en Maripérez"
                className="kenburns h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 bg-navy px-3 py-1.5 font-display text-[11px] font-medium uppercase tracking-[0.22em] text-paper">
                Mostrador · Maripérez
              </span>
              <div className="absolute bottom-4 left-4 right-4 border border-line-dark bg-graphite/85 p-4 backdrop-blur-sm">
                <p className="flex items-center gap-2.5 font-display text-[13px] font-medium uppercase tracking-[0.16em] text-wa">
                  <span className="dot-live h-2 w-2 rounded-full bg-wa" />
                  Stock ACDelco verificado hoy
                </p>
                <p className="mt-1.5 text-[13px] text-paper/65">
                  Lubricantes · Bujías y bobinas · Frenos · Sensores · Tren delantero
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* franja de confianza */}
      <div className="relative border-t border-line-dark bg-panel/60">
        <div className="mx-auto grid max-w-[1440px] gap-x-8 gap-y-2 px-6 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {[
            <>RIF: <strong className="font-semibold text-paper/90">{RIF}</strong></>,
            <>Ubicados en <strong className="font-semibold text-paper/90">{AREA}</strong></>,
            <><strong className="font-semibold text-paper/90">19K+</strong> seguidores y clientes en Caracas</>,
            <span className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${open ? "dot-live bg-wa" : "dot-closed bg-red"}`} />
              <strong className={`font-semibold ${open ? "text-wa" : "text-red"}`}>{open ? "Abierto hoy" : "Cerrado"}</strong>
              <span className="text-paper/50">· {detail}</span>
            </span>,
          ].map((item, i) => (
            <p key={i} className="flex items-center gap-2.5 text-[13px] text-paper/60">
              <IconArrow className="hidden h-3.5 w-3.5 shrink-0 text-navy2 lg:block" />
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* marquesina de marcas */}
      <div className="relative bg-navy">
        <div className="marquee py-3.5">
          <div className="marquee-track">
            {[0, 1].map((half) => (
              <div key={half} aria-hidden={half === 1} className="flex shrink-0 items-center">
                {TICKER_BRANDS.map((b) => (
                  <span key={`${half}-${b}`} className="flex items-center">
                    <span className="px-8 font-display text-[19px] font-medium uppercase tracking-[0.16em] text-paper/85 transition-colors hover:text-white">
                      {b}
                    </span>
                    <span className="h-1.5 w-1.5 rotate-45 bg-wa/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
