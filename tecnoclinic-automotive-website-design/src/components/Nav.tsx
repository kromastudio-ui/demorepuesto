import { useEffect, useState } from "react";
import { AREA, PHONE_DISPLAY, RIF } from "../data";
import { useOpenStatus } from "../ui";
import { IconLogo, IconMenu, IconPhone, IconPlus } from "./Icons";

const LINKS = [
  { href: "#catalogo", label: "Catálogo de Repuestos" },
  { href: "#servicios", label: "Servicio de Inyectores" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#ubicacion", label: "Ubicación y Horarios" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: isOpen, detail } = useOpenStatus();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* microbarra técnica */}
      <div className="hidden bg-graphite text-[12px] text-paper/70 md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <p className="py-1.5 tracking-[0.04em]">
            RIF: <span className="font-semibold text-paper/90">{RIF}</span>
            <span className="mx-3 text-paper/25">|</span>
            {AREA}
          </p>
          <div className="flex items-center gap-5 py-1.5">
            <span className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${isOpen ? "dot-live bg-wa" : "dot-closed bg-red"}`} />
              <span className={isOpen ? "font-semibold text-wa" : "font-semibold text-red"}>
                {isOpen ? "ABIERTO AHORA" : "CERRADO"}
              </span>
              <span className="hidden text-paper/50 lg:inline">· {detail}</span>
            </span>
            <a href={`tel:${PHONE_DISPLAY.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1.5 transition-colors hover:text-wa">
              <IconPhone className="h-3.5 w-3.5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* barra principal */}
      <div
        className={`border-b border-line bg-paper/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgba(22,24,29,0.12)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-navy text-paper">
              <IconLogo className="h-8 w-8" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[24px] font-semibold uppercase tracking-[0.06em] text-graphite">
                Tecnoclinic
              </span>
              <span className="mt-0.5 block font-display text-[10px] font-medium uppercase tracking-[0.4em] text-navy">
                Repuestos · Maripérez
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-display text-[13.5px] font-medium uppercase tracking-[0.14em] text-graphite/75 transition-colors hover:text-navy"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-navy transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_DISPLAY.replace(/[^\d+]/g, "")}`}
              className="hidden items-center gap-2 font-display text-[15px] font-semibold tracking-[0.04em] text-navy transition-colors hover:text-navy2 lg:flex xl:hidden 2xl:flex"
            >
              <IconPhone className="h-4.5 w-4.5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#cotizar"
              className="hidden items-center gap-2 bg-wa px-5 py-3 font-display text-[13.5px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-dark hover:shadow-[0_12px_30px_rgba(37,211,102,0.35)] sm:flex"
            >
              Cotizar Repuesto / Cita
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center border border-line text-graphite transition-colors hover:border-navy hover:text-navy xl:hidden"
            >
              <IconPlus className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* menú móvil */}
        <div
          className={`grid overflow-hidden transition-all duration-300 xl:hidden ${
            open ? "grid-rows-[1fr] border-t border-line bg-paper" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <nav className="flex flex-col px-6 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 font-display text-[15px] font-medium uppercase tracking-[0.14em] text-graphite transition-colors hover:text-navy"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cotizar"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-wa px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white"
              >
                <IconMenu className="hidden" />
                Cotizar Repuesto / Cita
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
