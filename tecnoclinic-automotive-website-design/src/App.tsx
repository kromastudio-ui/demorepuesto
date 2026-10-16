import { useCallback, useState } from "react";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import Flow from "./components/Flow";
import Footer, { WhatsAppFab } from "./components/Footer";
import Guarantees from "./components/Guarantees";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";

type Prefill = {
  mode: "repuesto" | "servicio";
  text: string;
  service: string;
  tick: number;
};

export default function App() {
  const [prefill, setPrefill] = useState<Prefill>({ mode: "repuesto", text: "", service: "", tick: 0 });

  const scrollToForm = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("cotizar")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const inquirePart = useCallback(
    (text: string) => {
      setPrefill((p) => ({ mode: "repuesto", text, service: "", tick: p.tick + 1 }));
      scrollToForm();
    },
    []
  );

  const inquireService = useCallback(
    (text: string, serviceId: string) => {
      setPrefill((p) => ({ mode: "servicio", text, service: serviceId, tick: p.tick + 1 }));
      scrollToForm();
    },
    []
  );

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="noise" aria-hidden />
      <Nav />
      <main>
        <Hero onService={(text) => inquireService(text, "inyectores")} />
        <Guarantees />
        <QuoteForm
          prefillMode={prefill.mode}
          prefillText={prefill.text}
          prefillService={prefill.service}
          prefillTick={prefill.tick}
        />
        <Catalog onInquire={inquirePart} />
        <Services onService={inquireService} />
        <Flow />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
