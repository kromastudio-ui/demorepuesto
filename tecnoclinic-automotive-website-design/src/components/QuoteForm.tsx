import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  BRANDS,
  BUSINESS_FULL,
  CATALOG,
  HOURS,
  PHONE_DISPLAY,
  SERVICES,
  YEARS,
  waLink,
} from "../data";
import { Kicker, Reveal } from "../ui";
import { IconCheck, IconLogo, IconPhone, IconWhatsApp } from "./Icons";

type Mode = "repuesto" | "servicio";

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block font-display text-[12px] font-medium uppercase tracking-[0.2em] text-graphite/60">
        {label}
        {required && <span className="ml-1 text-red">*</span>}
      </label>
      {children}
    </div>
  );
}

function Done({ ok, text }: { ok: boolean; text: string }) {
  return (
    <span
      className={`flex items-center gap-1.5 font-display text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
        ok ? "text-wa-dark" : "text-muted/50"
      }`}
    >
      <span
        className={`grid h-4 w-4 place-items-center border transition-colors duration-300 ${
          ok ? "border-wa-dark/70 bg-wa/15" : "border-line"
        }`}
      >
        {ok && <IconCheck className="h-2.5 w-2.5" />}
      </span>
      {text}
    </span>
  );
}

const QUICK_ASKS = ["Bujías ACDelco", "Aceite 10W-40", "Sensor O2", "Pastillas de freno", "Correa de tiempo"];

export default function QuoteForm({
  prefillMode,
  prefillText,
  prefillService,
  prefillTick,
}: {
  prefillMode: Mode;
  prefillText: string;
  prefillService?: string;
  prefillTick: number;
}) {
  const [mode, setMode] = useState<Mode>("repuesto");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");
  const [linea, setLinea] = useState("");
  const [servicio, setServicio] = useState("");
  const [desc, setDesc] = useState("");
  const [cuando, setCuanndo] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sent, setSent] = useState(false);

  const models = marca ? BRANDS[marca] ?? [] : [];

  useEffect(() => {
    if (prefillTick > 0) {
      setMode(prefillMode);
      if (prefillText) setDesc(prefillText);
      if (prefillService) setServicio(prefillService);
      setSent(false);
    }
  }, [prefillText, prefillTick, prefillMode, prefillService]);

  const canSend =
    mode === "repuesto"
      ? Boolean(marca && anio && (linea || desc.trim()))
      : Boolean(servicio && marca && anio);

  const message = useMemo(() => {
    if (mode === "repuesto") {
      const line = CATALOG.find((c) => c.id === linea);
      const lines = [
        `¡Hola ${BUSINESS_FULL}! Quiero verificar stock de un repuesto.`,
        "",
        `🚗 Marca: ${marca || "—"}`,
        `🔧 Modelo: ${modelo || "Otro / no estoy seguro"}`,
        `📅 Año: ${anio || "—"}`,
        `🔩 Línea: ${line ? line.label : desc.trim() ? "Otros / sin clasificar" : "—"}`,
      ];
      if (desc.trim()) lines.push(`📝 Detalle: ${desc.trim()}`);
      if (nombre.trim()) lines.push("", `👤 Nombre: ${nombre.trim()}`);
      if (telefono.trim()) lines.push(`📱 Teléfono: ${telefono.trim()}`);
      lines.push("", "¿Me confirman disponibilidad y precio? ¡Gracias!");
      return lines.join("\n");
    }
    const srv = SERVICES.find((s) => s.id === servicio);
    const lines = [
      `¡Hola ${BUSINESS_FULL}! Quiero agendar un servicio en el taller.`,
      "",
      `🔧 Servicio: ${srv ? srv.title : "Otro"}`,
      `🚗 Marca: ${marca || "—"}`,
      `🔧 Modelo: ${modelo || "Otro / no estoy seguro"}`,
      `📅 Año: ${anio || "—"}`,
      `📆 Preferencia: ${cuando.trim() || "flexible, me avisa usted"}`,
    ];
    if (desc.trim()) lines.push(`📝 Detalle: ${desc.trim()}`);
    if (nombre.trim()) lines.push("", `👤 Nombre: ${nombre.trim()}`);
    if (telefono.trim()) lines.push(`📱 Teléfono: ${telefono.trim()}`);
    lines.push("", "¿Me confirman cita y precio del servicio? ¡Gracias!");
    return lines.join("\n");
  }, [mode, marca, modelo, anio, linea, servicio, desc, cuando, nombre, telefono]);

  const openWhatsApp = () => {
    if (!canSend) return;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const repuestoOk = Boolean(linea || desc.trim());

  return (
    <section id="cotizar" className="grid-tech relative scroll-mt-32 py-24 md:py-28">
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-10">
        {/* formulario */}
        <Reveal>
          <div className="border border-line bg-white shadow-[0_24px_70px_rgba(22,24,29,0.10)]">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-navy px-6 py-4">
              <div>
                <p className="font-display text-[22px] font-semibold uppercase tracking-[0.08em] text-paper">
                  Cotiza por WhatsApp
                </p>
                <p className="font-display text-[11px] font-medium uppercase tracking-[0.3em] text-paper/60">
                  Stock y precio en minutos · sin filas
                </p>
              </div>
              <span className="flex items-center gap-2 font-display text-[11.5px] font-medium uppercase tracking-[0.2em] text-wa">
                <span className="dot-live h-2 w-2 rounded-full bg-wa" />
                Respondemos en el día
              </span>
            </div>

            {/* pestañas */}
            <div className="grid grid-cols-2 border-b border-line">
              {(
                [
                  { id: "repuesto", label: "Repuesto" },
                  { id: "servicio", label: "Servicio" },
                ] as { id: Mode; label: string }[]
              ).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setMode(t.id)}
                  aria-pressed={mode === t.id}
                  className={`relative py-3.5 font-display text-[14px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                    mode === t.id ? "bg-white text-navy" : "bg-paper text-muted hover:text-navy"
                  }`}
                >
                  {t.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-[3px] bg-wa transition-opacity ${
                      mode === t.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="grid gap-5 px-6 py-7 sm:grid-cols-2">
              {mode === "servicio" && (
                <Field label="Servicio requerido" required className="sm:col-span-2">
                  <select className="field" value={servicio} required onChange={(e) => setServicio(e.target.value)}>
                    <option value="" disabled>
                      Selecciona el servicio…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} · {s.time}
                      </option>
                    ))}
                    <option value="otro">Otro servicio (lo describo abajo)</option>
                  </select>
                </Field>
              )}

              <Field label="Marca del carro" required>
                <select
                  className="field"
                  value={marca}
                  required
                  onChange={(e) => {
                    setMarca(e.target.value);
                    setModelo("");
                  }}
                >
                  <option value="" disabled>
                    Selecciona la marca…
                  </option>
                  {Object.keys(BRANDS).map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Modelo">
                <select className="field" value={modelo} disabled={!marca} onChange={(e) => setModelo(e.target.value)}>
                  <option value="">{marca ? "Otro / no estoy seguro" : "Primero elige la marca"}</option>
                  {models.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Año del carro" required>
                <select className="field" value={anio} required onChange={(e) => setAnio(e.target.value)}>
                  <option value="" disabled>
                    Selecciona el año…
                  </option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </Field>

              {mode === "repuesto" ? (
                <Field label="Línea de repuesto">
                  <select className="field" value={linea} onChange={(e) => setLinea(e.target.value)}>
                    <option value="">Sin clasificar / no sé cuál es</option>
                    {CATALOG.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </Field>
              ) : (
                <Field label="¿Cuándo quieres pasarte?">
                  <input
                    className="field"
                    type="text"
                    placeholder="Ej.: mañana en la mañana, sábado 10 AM…"
                    value={cuando}
                    onChange={(e) => setCuanndo(e.target.value)}
                    maxLength={60}
                  />
                </Field>
              )}

              <Field label={mode === "repuesto" ? "¿Qué pieza necesitas exactamente?" : "¿Qué le pasa al carro? (opcional)"} className="sm:col-span-2">
                <input
                  className="field"
                  type="text"
                  placeholder={
                    mode === "repuesto"
                      ? "Ej.: pastillas delanteras, bujías ACDelco, part number 10-… "
                      : "Ej.: el carro se ahoga, parpadea la check engine, consume mucho…"
                  }
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  maxLength={140}
                />
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {QUICK_ASKS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setDesc(q)}
                      className="border border-line bg-paper px-2.5 py-1 font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:border-navy hover:text-navy"
                    >
                      {q}
                    </button>
                  ))}
                  <span className="ml-auto text-right font-display text-[10.5px] tracking-[0.14em] text-muted/50">
                    {desc.length}/140
                  </span>
                </div>
              </Field>

              <Field label="Tu nombre (opcional)">
                <input
                  className="field"
                  type="text"
                  placeholder="¿A quién le respondemos?"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  maxLength={60}
                />
              </Field>

              <Field label="Teléfono (opcional)">
                <input
                  className="field"
                  type="tel"
                  placeholder="0412-0000000"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  maxLength={20}
                />
              </Field>
            </div>

            {/* estado */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line px-6 py-3">
              <Done ok={mode === "servicio" ? Boolean(servicio) : true} text={mode === "servicio" ? "Servicio" : "Modo repuesto"} />
              <Done ok={Boolean(marca)} text="Marca" />
              <Done ok={Boolean(anio)} text="Año" />
              {mode === "repuesto" && <Done ok={repuestoOk} text="Línea / pieza" />}
              <span className="ml-auto font-display text-[10.5px] uppercase tracking-[0.18em] text-muted/50">
                * obligatorios
              </span>
            </div>

            <div className="px-6 pb-7">
              <button
                onClick={openWhatsApp}
                disabled={!canSend}
                className={`group flex w-full items-center justify-center gap-3 px-6 py-4 font-display text-[16px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                  canSend
                    ? "bg-wa text-white hover:-translate-y-0.5 hover:bg-wa-dark hover:shadow-[0_16px_44px_rgba(37,211,102,0.35)]"
                    : "cursor-not-allowed border border-line bg-paper text-muted/50"
                }`}
              >
                <IconWhatsApp className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-110" />
                {canSend
                  ? mode === "repuesto"
                    ? "Enviar consulta de repuesto"
                    : "Enviar solicitud de cita"
                  : mode === "repuesto"
                    ? "Completa marca, año y pieza para enviar"
                    : "Completa servicio, marca y año para enviar"}
              </button>
              <div className="mt-3 min-h-[22px] text-center" aria-live="polite">
                {sent ? (
                  <p className="flex items-center justify-center gap-2 font-display text-[12.5px] font-medium uppercase tracking-[0.14em] text-wa-dark">
                    <IconCheck className="h-4 w-4" />
                    WhatsApp abierto con tu mensaje listo. ¿No se abrió? Usa el botón verde.
                  </p>
                ) : (
                  <p className="font-display text-[11.5px] uppercase tracking-[0.18em] text-muted/55">
                    Se abre WhatsApp con el mensaje ya redactado. Tú solo presionas enviar.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* vista previa en vivo */}
        <div className="lg:sticky lg:top-36 lg:self-start">
          <Reveal delay={120}>
            <Kicker>Vista previa en vivo</Kicker>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-[1.02] tracking-wide text-graphite sm:text-5xl">
              Así llega <span className="text-navy">a nuestro chat</span>
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
              Cada cambio del formulario actualiza el mensaje de inmediato. Nada de teclear en
              el WhatsApp: llega completo y ordenado.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-7 overflow-hidden border border-line bg-white shadow-[0_20px_50px_rgba(22,24,29,0.10)]">
              <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
                <span className="grid h-9 w-9 place-items-center bg-white/15 text-white">
                  <IconLogo className="h-6 w-6" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-[14px] font-semibold uppercase tracking-[0.1em] text-white">
                    {BUSINESS_FULL}
                  </p>
                  <p className="font-display text-[10.5px] uppercase tracking-[0.22em] text-white/70">
                    en línea · responde en minutos
                  </p>
                </div>
                <span className="blink ml-auto h-2.5 w-2.5 rounded-full bg-wa" />
              </div>
              <div className="grid-tech px-4 py-5">
                <div className="relative max-w-[95%] border border-line bg-white p-4 shadow-sm">
                  <span aria-hidden className="absolute -left-2 top-4 h-0 w-0 border-y-8 border-r-[10px] border-y-transparent border-r-white" />
                  <pre className="whitespace-pre-wrap font-body text-[13.5px] leading-relaxed text-graphite">{message}</pre>
                  <p className="mt-2 text-right font-display text-[10.5px] uppercase tracking-[0.2em] text-muted/50">
                    {new Date().toLocaleTimeString("es-VE", { hour: "2-digit", minute: "2-digit" })} · saldrá desde tu teléfono
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/[^\d+]/g, "")}`}
                className="group border border-line bg-white p-4 transition-colors hover:border-navy"
              >
                <p className="flex items-center gap-2 font-display text-[12px] font-medium uppercase tracking-[0.22em] text-navy">
                  <IconPhone className="h-4 w-4" />
                  ¿Urgente? Llama directo
                </p>
                <p className="mt-1.5 font-display text-[19px] font-semibold tracking-[0.04em] text-graphite group-hover:text-navy">
                  {PHONE_DISPLAY}
                </p>
              </a>
              <div className="border border-line bg-white p-4">
                <p className="font-display text-[12px] font-medium uppercase tracking-[0.22em] text-navy">
                  Horario de atención
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {HOURS[0].d}: {HOURS[0].h}
                  <br />
                  {HOURS[1].d}: {HOURS[1].h}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
