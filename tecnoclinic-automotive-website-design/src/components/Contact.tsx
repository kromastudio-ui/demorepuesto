import {
  ADDRESS,
  HOURS,
  INSTAGRAM_URL,
  LINKTREE_URL,
  MAPS_EMBED,
  PHONE_DISPLAY,
  RIF,
  waLink,
} from "../data";
import { Reveal, SectionHead } from "../ui";
import {
  IconArrow,
  IconClock,
  IconInstagram,
  IconLink,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "./Icons";

export default function Contact() {
  return (
    <section id="ubicacion" className="grid-tech relative scroll-mt-32 border-t border-line py-24 md:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHead
          kicker="Ubicación y horarios"
          title={
            <>
              En pleno <span className="text-navy">Maripérez</span>,
              <span className="block">Caracas te está esperando</span>
            </>
          }
          sub="Baja el carro, pasa por la refacción y sal con el servicio agendado. Referencia: urbanización Maripérez, a minutos de la avenida Francisco de Miranda."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* mapa */}
          <Reveal>
            <div className="relative h-full">
              <div className="relative h-[380px] overflow-hidden border border-line shadow-[0_20px_50px_rgba(22,24,29,0.10)] sm:h-[460px]">
                <iframe
                  title="Mapa de Tecnoclinic en Maripérez, Caracas"
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 grayscale-[35%]"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-navy px-4 py-2.5">
                  <span className="flex items-center gap-2 font-display text-[12px] font-medium uppercase tracking-[0.22em] text-paper">
                    <IconPin className="h-4 w-4" />
                    Tecnoclinic Repuestos
                  </span>
                  <span className="font-display text-[11px] uppercase tracking-[0.2em] text-paper/60">
                    {ADDRESS}
                  </span>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4 border border-line bg-white p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-navy text-paper">
                  <IconPin className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[16px] font-semibold uppercase tracking-[0.06em] text-graphite">
                    {ADDRESS}
                  </p>
                  <p className="text-[13.5px] text-muted">
                    RIF: {RIF} · Señaliza la pantalla al taxista y llega directo al mostrador.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* info */}
          <div className="flex flex-col gap-5">
            <Reveal delay={100}>
              <div className="relative overflow-hidden border border-line">
                <img
                  src="/images/facade.jpg"
                  alt="Fachada de la tienda Tecnoclinic Repuestos en Maripérez, Caracas"
                  loading="lazy"
                  className="kenburns h-52 w-full object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-graphite/70 to-transparent" />
                <span className="absolute bottom-3 left-4 font-display text-[13px] font-medium uppercase tracking-[0.24em] text-paper">
                  Puesto físico · Maripérez
                </span>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="border border-line bg-white p-6">
                <p className="flex items-center gap-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-navy">
                  <IconClock className="h-4.5 w-4.5" />
                  Horario de atención y despacho
                </p>
                <ul className="mt-4 space-y-3">
                  {HOURS.map((h) => (
                    <li
                      key={h.d}
                      className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 text-[14px]"
                    >
                      <span className="text-muted">{h.d}</span>
                      <span
                        className={`font-display font-semibold uppercase tracking-[0.1em] ${
                          h.h === "Cerrado" ? "text-red" : "text-graphite"
                        }`}
                      >
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[12.5px] leading-relaxed text-muted/80">
                  El WhatsApp lo leemos en horario extendido: si tu carro está parado, no te
                  dejamos esperando.
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="grid gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-line bg-white px-5 py-4 transition-colors hover:border-navy"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="grid h-10 w-10 place-items-center bg-navy text-paper transition-colors group-hover:bg-navy2">
                      <IconInstagram className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-display text-[14.5px] font-semibold uppercase tracking-[0.08em] text-graphite">
                        @tecnoclinicrepuestos
                      </span>
                      <span className="text-[12.5px] text-muted">19K+ seguidores · stock diario en historias</span>
                    </span>
                  </span>
                  <IconArrow className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-navy" />
                </a>
                <a
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-line bg-white px-5 py-4 transition-colors hover:border-navy"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="grid h-10 w-10 place-items-center bg-navy text-paper transition-colors group-hover:bg-navy2">
                      <IconLink className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-display text-[14.5px] font-semibold uppercase tracking-[0.08em] text-graphite">
                        Linktree oficial
                      </span>
                      <span className="text-[12.5px] text-muted">Todos los enlaces y pedidos en un solo lugar</span>
                    </span>
                  </span>
                  <IconArrow className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-navy" />
                </a>
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/[^\d+]/g, "")}`}
                  className="group flex items-center justify-between border border-line bg-white px-5 py-4 transition-colors hover:border-navy"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="grid h-10 w-10 place-items-center bg-navy text-paper transition-colors group-hover:bg-navy2">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-display text-[14.5px] font-semibold uppercase tracking-[0.08em] text-graphite">
                        Llamada directa
                      </span>
                      <span className="text-[12.5px] text-muted">{PHONE_DISPLAY}</span>
                    </span>
                  </span>
                  <IconArrow className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-navy" />
                </a>
                <a
                  href={waLink("¡Hola Tecnoclinic! Quiero hacer una consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-wa px-5 py-4 font-display text-[14px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-dark hover:shadow-[0_14px_36px_rgba(37,211,102,0.35)]"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Escribir por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
