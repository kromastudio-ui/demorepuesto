import { CATALOG } from "../data";
import { Reveal, SectionHead } from "../ui";
import {
  IconArrow,
  IconBox,
  IconBrake,
  IconChip,
  IconJoint,
  IconOil,
  IconPlug,
  IconWhatsApp,
} from "./Icons";

const ICONS = [IconOil, IconPlug, IconBrake, IconChip, IconJoint, IconBox];

function StockBadge({ stock }: { stock: "stock" | "bajo" }) {
  return stock === "stock" ? (
    <span className="flex items-center gap-1.5 bg-wa/15 px-2.5 py-1 font-display text-[10.5px] font-semibold uppercase tracking-[0.16em] text-wa-dark">
      <span className="h-1.5 w-1.5 rounded-full bg-wa" />
      En stock
    </span>
  ) : (
    <span className="flex items-center gap-1.5 bg-amber/15 px-2.5 py-1 font-display text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#a26b0a]">
      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
      Bajo pedido
    </span>
  );
}

export default function Catalog({ onInquire }: { onInquire: (text: string) => void }) {
  return (
    <section id="catalogo" className="relative scroll-mt-32 border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_420px]">
          <SectionHead
            kicker="Catálogo de repuestos"
            title={
              <>
                Seis líneas,
                <span className="block text-navy">una sola bodega</span>
              </>
            }
            sub="Toca “Consultar” y el mensaje llega a nuestro WhatsApp con la línea ya indicada. Si no aparece lo tuyo, igual pregúntanos: si no está en piso, lo conseguimos."
          />
          <Reveal delay={150}>
            <div className="relative hidden lg:block">
              <div aria-hidden className="absolute -inset-2 border border-navy/30" />
              <div className="relative overflow-hidden border border-line">
                <img
                  src="/images/stock-shelf.jpg"
                  alt="Estanterías de Tecnoclinic con lubricantes, bujías y filtros organizados"
                  loading="lazy"
                  className="kenburns h-[240px] w-full object-cover"
                />
                <span className="absolute left-3 top-3 bg-navy px-2.5 py-1 font-display text-[10.5px] font-medium uppercase tracking-[0.2em] text-paper">
                  Stock físico · Maripérez
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CATALOG.map((c, i) => {
            const Ic = ICONS[i];
            return (
              <Reveal key={c.id} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/50 hover:shadow-[0_22px_50px_rgba(0,70,150,0.14)]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-13 w-13 place-items-center bg-navy text-paper transition-colors duration-300 group-hover:bg-navy2">
                      <Ic className="h-7 w-7" />
                    </span>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="font-display text-[11px] font-medium tracking-[0.24em] text-muted/60">
                        {c.code}
                      </span>
                      <StockBadge stock={c.stock} />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-[21px] font-semibold uppercase leading-tight tracking-[0.04em] text-graphite">
                    {c.label}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.items.map((it) => (
                      <span
                        key={it}
                        className="border border-line bg-paper px-2 py-0.5 text-[11.5px] font-medium text-graphite/75"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onInquire(`Quiero consultar disponibilidad: ${c.label} — `)}
                    className="mt-6 flex w-full items-center justify-center gap-2.5 border border-wa/60 px-4 py-3 font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-wa-dark transition-all duration-200 hover:bg-wa hover:text-white"
                  >
                    <IconWhatsApp className="h-4 w-4" />
                    Consultar disponibilidad
                  </button>
                  <span aria-hidden className="mt-0 block h-[3px] w-0 bg-navy transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex flex-wrap items-center gap-2 text-[13.5px] text-muted">
            <IconArrow className="h-3.5 w-3.5 text-navy" />
            ¿Buscas una pieza específica con part number?
            <a href="#cotizar" className="font-semibold text-navy underline decoration-navy/30 underline-offset-4 transition-colors hover:text-navy2">
              Escríbelo en el campo “detalle”
            </a>
            {" "}y te lo cruzamos al momento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
