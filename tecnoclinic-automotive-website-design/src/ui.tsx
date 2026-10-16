import { useEffect, useRef, useState, type ReactNode } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState<boolean>(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

const GLYPHS = "▓▒░<>/|=+#*0123456789";

/** Título con efecto decodificación (scramble) */
export function useScramble(text: string, delay = 0) {
  const [out, setOut] = useState(text);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) {
      setOut(text);
      return;
    }
    let frame = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const total = Math.max(26, Math.round(text.length * 2.4));
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame++;
        const settled = Math.floor((frame / total) * text.length);
        let s = "";
        for (let i = 0; i < text.length; i++) {
          const c = text[i];
          s += c === " " || i < settled ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        if (settled >= text.length) {
          setOut(text);
          if (interval) clearInterval(interval);
        } else {
          setOut(s);
        }
      }, 42);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delay, reduced]);
  return out;
}

/** Estado de apertura en vivo según horario real */
export function useOpenStatus() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const day = now.getDay(); // 0 = domingo
  const h = now.getHours();
  const weekday = day >= 1 && day <= 5;
  const saturday = day === 6;
  const open = (weekday && h >= 8 && h < 18) || (saturday && h >= 8 && h < 14);
  let detail: string;
  if (open) detail = weekday ? "Cerramos 6:00 PM" : "Cerramos 2:00 PM";
  else if (weekday) detail = h < 8 ? "Abrimos hoy 8:00 AM" : "Abrimos mañana 8:00 AM";
  else if (saturday) detail = "Abrimos mañana 8:00 AM";
  else detail = "Abrimos lunes 8:00 AM";
  return { open, detail };
}

/** Bloque que se revela al entrar al viewport */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Kicker({ children, tone = "navy" }: { children: ReactNode; tone?: "navy" | "light" }) {
  return (
    <p
      className={`flex items-center gap-3 font-display text-[13px] font-semibold uppercase tracking-[0.3em] ${
        tone === "navy" ? "text-navy" : "text-navy2"
      }`}
    >
      <span className={`h-px w-8 ${tone === "navy" ? "bg-navy/60" : "bg-navy2/70"}`} aria-hidden />
      {children}
    </p>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
  align = "left",
  dark = false,
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Kicker tone={dark ? "light" : "navy"}>{kicker}</Kicker>
      </div>
      <h2
        className={`mt-4 font-display text-4xl font-semibold uppercase leading-[1.02] tracking-wide sm:text-5xl ${
          dark ? "text-paper" : "text-graphite"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 text-[15px] leading-relaxed ${dark ? "text-paper/65" : "text-muted"}`}>{sub}</p>
      )}
    </Reveal>
  );
}
