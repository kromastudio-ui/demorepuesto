import {
  BUSINESS_FULL,
  HOURS,
  INSTAGRAM_URL,
  LINKTREE_URL,
  PHONE_DISPLAY,
  RIF,
  waLink,
} from "../data";
import { Reveal } from "../ui";
import { IconArrow, IconInstagram, IconLink, IconLogo, IconPhone, IconWhatsApp } from "./Icons";

const LINKS = [
  { href: "#cotizar", label: "Cotizar por WhatsApp" },
  { href: "#catalogo", label: "Catálogo de repuestos" },
  { href: "#servicios", label: "Servicio de inyectores" },
  { href: "#diagnostico", label: "Diagnóstico computarizado" },
  { href: "#ubicacion", label: "Ubicación y horarios" },
];

export function WhatsAppFab() {
  return (
    <a
      href={waLink("¡Hola Tecnoclinic! 👋 Necesito verificar un repuesto / agendar un servicio.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-50 grid h-15 w-15 place-items-center rounded-full bg-wa text-white shadow-[0_14px_40px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110"
    >
      <IconWhatsApp className="h-7.5 w-7.5" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-graphite text-paper">
      {/* CTA final */}
      <div className="grid-tech-dark relative overflow-hidden border-b border-line-dark">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 opacity-25"
          style={{ background: "radial-gradient(ellipse at top, rgba(0,70,150,0.7), transparent 65%)" }}
        />
        <Reveal className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <p className="font-display text-[13px] font-medium uppercase tracking-[0.34em] text-navy2" style={{ color: "#5c96f2" }}>
            10 segundos separan tu carro de la refacción
          </p>
          <h2 className="mt-5 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-wide sm:text-6xl md:text-7xl">
            ¿Lo tenemos?
            <span className="block text-wa">Escríbenos y averígualo.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#cotizar"
              className="group flex items-center gap-3 bg-navy px-8 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.1em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy2"
            >
              Cotizar mi repuesto
              <IconArrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href={waLink("¡Hola Tecnoclinic! Quiero cotizar un repuesto / servicio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-wa px-8 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-dark"
            >
              <IconWhatsApp className="h-5 w-5" />
              WhatsApp directo
            </a>
          </div>
        </Reveal>
      </div>

      {/* columna de datos */}
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <Reveal>
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center bg-navy text-paper">
                <IconLogo className="h-8 w-8" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[22px] font-semibold uppercase tracking-[0.06em]">
                  Tecnoclinic
                </span>
                <span className="mt-0.5 block font-display text-[10px] font-medium uppercase tracking-[0.4em] text-navy2" style={{ color: "#5c96f2" }}>
                  Repuestos · Maripérez
                </span>
              </span>
            </a>
            <p className="mt-5 text-[13.5px] leading-relaxed text-paper/60">
              Repuestera y taller especializado en Maripérez. Especialistas ACDelco,
              laboratorio de inyectores propio y diagnóstico computarizado multimarca.
            </p>
            <p className="mt-4 font-display text-[12px] font-medium uppercase tracking-[0.2em] text-paper/50">
              RIF: <span className="text-paper/80">{RIF}</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <h3 className="font-display text-[12.5px] font-semibold uppercase tracking-[0.3em] text-paper/50">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group flex items-center gap-2.5 text-[14px] text-paper/70 transition-colors hover:text-wa">
                    <span className="h-px w-4 bg-paper/30 transition-all duration-300 group-hover:w-7 group-hover:bg-wa" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div>
            <h3 className="font-display text-[12.5px] font-semibold uppercase tracking-[0.3em] text-paper/50">
              Horario
            </h3>
            <ul className="mt-5 space-y-3">
              {HOURS.map((h) => (
                <li key={h.d} className="flex items-baseline justify-between gap-4 border-b border-line-dark pb-2 text-[13.5px]">
                  <span className="text-paper/60">{h.d}</span>
                  <span className={`font-display font-medium uppercase tracking-[0.1em] ${h.h === "Cerrado" ? "text-red" : "text-paper/90"}`}>
                    {h.h}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/[^\d+]/g, "")}`}
              className="mt-5 flex items-center gap-2.5 text-[14px] text-paper/70 transition-colors hover:text-wa"
            >
              <IconPhone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div>
            <h3 className="font-display text-[12.5px] font-semibold uppercase tracking-[0.3em] text-paper/50">
              Canales oficiales
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[14px] text-paper/70 transition-colors hover:text-wa">
                  <span className="grid h-9 w-9 place-items-center border border-line-dark">
                    <IconInstagram className="h-4.5 w-4.5" />
                  </span>
                  @tecnoclinicrepuestos
                </a>
              </li>
              <li>
                <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[14px] text-paper/70 transition-colors hover:text-wa">
                  <span className="grid h-9 w-9 place-items-center border border-line-dark">
                    <IconLink className="h-4.5 w-4.5" />
                  </span>
                  Linktree · enlaces y pedidos
                </a>
              </li>
              <li>
                <a href={waLink("¡Hola Tecnoclinic! Quiero información.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[14px] text-paper/70 transition-colors hover:text-wa">
                  <span className="grid h-9 w-9 place-items-center border border-line-dark">
                    <IconWhatsApp className="h-4.5 w-4.5" />
                  </span>
                  WhatsApp del mostrador
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      {/* barra final */}
      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-5 lg:px-10">
          <p className="font-display text-[11.5px] uppercase tracking-[0.2em] text-paper/45">
            © {new Date().getFullYear()} {BUSINESS_FULL} · RIF {RIF} · Maripérez, Caracas
          </p>
          <a
            href="#inicio"
            className="group flex items-center gap-2 font-display text-[11.5px] font-medium uppercase tracking-[0.2em] text-paper/50 transition-colors hover:text-wa"
          >
            Volver arriba
            <IconArrow className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
