/* ============================================================
   ⚙️ CONFIGURACIÓN DEL NEGOCIO — TECNOCLINIC
   Cambia AQUÍ el número de WhatsApp (código de país + número,
   solo dígitos). Ej. Venezuela: 58 412-123-4567 → "584121234567"
   ============================================================ */
export const WHATSAPP_NUMBER = "5841212345678";
export const BUSINESS_NAME = "Tecnoclinic";
export const BUSINESS_FULL = "Tecnoclinic Repuestos";
export const PHONE_DISPLAY = "+58 412-123-4567";
export const RIF = "J-311592024";
export const AREA = "Maripérez, Caracas";
export const ADDRESS = "Urb. Maripérez, Caracas, Venezuela";
export const INSTAGRAM_URL = "https://www.instagram.com/tecnoclinicrepuestos";
export const LINKTREE_URL = "https://linktr.ee/tecnoclinicrepuestos";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Marip%C3%A9rez%2C+Caracas%2C+Venezuela&output=embed";

/** Horario real (lun–vie 8:00–18:00, sáb 8:00–14:00, dom cerrado) */
export const HOURS = [
  { d: "Lunes – Viernes", h: "8:00 AM – 6:00 PM" },
  { d: "Sábado", h: "8:00 AM – 2:00 PM" },
  { d: "Domingo", h: "Cerrado" },
];

/** Marca → modelos (mercado venezolano, prioridad GM/ACDelco) */
export const BRANDS: Record<string, string[]> = {
  Chevrolet: ["Aveo", "Monza", "Spark", "Prisma", "Sonic", "Orlando", "Captiva", "Equinox", "Tahoe", "Silverado", "Colorado", "Malibu", "Cruze", "Suburban"],
  Nissan: ["Sentra", "Versa", "Altima", "March", "X-Trail", "Frontier", "Kicks", "NP300", "Pathfinder"],
  Toyota: ["Corolla", "Camry", "Yaris", "Hilux", "Tundra", "Tacoma", "RAV4", "Sienna", "4Runner", "Solara"],
  Hyundai: ["Accent", "Elantra", "Sonata", "Tucson", "Santa Fe", "i20", "Veracruz"],
  Renault: ["Duster", "Logan", "Sandero", "Clio", "Kangoo", "Fluence", "Mégane"],
  Kia: ["Rio", "Forte", "Optima", "Sportage", "Sorento", "Soul", "Picanto"],
  Mitsubishi: ["Lancer", "Outlander", "Pajero", "ASX", "Montero"],
  Ford: ["Focus", "Fiesta", "Taurus", "Fusion", "Explorer", "Escape", "EcoSport", "Ranger", "F-150", "Edge"],
  Volkswagen: ["Jetta", "Golf", "Bora", "Passat", "Tiguan", "Amarok", "Saveiro", "Polo"],
  Dodge: ["Charger", "Challenger", "Durango", "Journey", "Dart", "Grand Caravan"],
  Jeep: ["Wrangler", "Cherokee", "Grand Cherokee", "Compass"],
  GMC: ["Sierra", "Yukon", "Terrain", "Canyon"],
  Mazda: ["Mazda 3", "Mazda 6", "CX-5", "CX-9"],
  Honda: ["Civic", "Accord", "City", "CR-V", "Pilot", "Odyssey"],
  Acura: ["Integra", "TL", "RDX", "MDX"],
  Chery: ["Tiggo 5", "Tiggo 7", "Tiggo 8", "Arrizo 5"],
  Changan: ["CS35", "CS55", "Alsvin", "Eado"],
  Subaru: ["Impreza", "Forester", "Outback"],
};

export const YEARS: number[] = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => 2026 - i);

export type CatalogLine = {
  id: string;
  code: string;
  label: string;
  desc: string;
  items: string[];
  stock: "stock" | "bajo";
};

export const CATALOG: CatalogLine[] = [
  {
    id: "lubricantes",
    code: "REF-01",
    label: "Lubricantes y Filtros",
    desc: "Aceites de motor y transmisión, refrigerantes y filtros de alta gama para servicio programado.",
    items: ["Aceite 10W-40 / 5W-30", "Filtro de aceite", "Filtro de aire", "Refrigerante"],
    stock: "stock",
  },
  {
    id: "encendido",
    code: "REF-02",
    label: "Encendido e Inyección",
    desc: "Bobinas, bujías, cables ACDelco y compatibles. Repuesto directo para fallas de encendido.",
    items: ["Bujías", "Bobinas", "Cables", "Inyectores"],
    stock: "bajo",
  },
  {
    id: "frenos",
    code: "REF-03",
    label: "Frenos y Suspensión",
    desc: "Pastillas, bandas, líquido de freno DOT 4, amortiguadores y terminales de línea.",
    items: ["Pastillas", "Bandas DOT 4", "Amortiguadores", "Terminales"],
    stock: "stock",
  },
  {
    id: "sensores",
    code: "REF-04",
    label: "Sensores y Módulos Electrónicos",
    desc: "Sensores de oxígeno, TPS, MAP y flujo de aire. Cada pieza se valida con escáner.",
    items: ["Sensor O2", "TPS", "MAP", "MAF / flujo de aire"],
    stock: "bajo",
  },
  {
    id: "tren",
    code: "REF-05",
    label: "Tren Delantero y Rodamientos",
    desc: "Rótulas, terminales, bieletas, cascos y rodamientos. Se instala y balancea en el mismo sitio.",
    items: ["Rótulas", "Terminales", "Rodamientos", "Cascos"],
    stock: "stock",
  },
  {
    id: "acdelco",
    code: "REF-06",
    label: "Línea Original ACDelco / Chevrolet",
    desc: "Refacción original GM para toda la línea Chevrolet y GMC: frenos, suspensión y eléctrico.",
    items: ["Original GM", "Frenos", "Suspensión", "Eléctrico"],
    stock: "stock",
  },
];

export type Service = {
  id: string;
  code: string;
  title: string;
  desc: string;
  bullets: string[];
  time: string;
  img: string;
};

export const SERVICES: Service[] = [
  {
    id: "inyectores",
    code: "LAB-01",
    title: "Limpieza de Inyectores",
    desc: "Limpieza por ultrasonido y calibración en banco de prueba propio: patrón de spray y caudal de cada inyector, documentado antes y después.",
    bullets: [
      "Bañado en celda de ultrasonido",
      "Prueba en banco: caudal y patrón de rociado",
      "Informe con mediciones por inyector",
    ],
    time: "45 – 90 min",
    img: "/images/injector-bench.jpg",
  },
  {
    id: "diagnostico",
    code: "DIAG-02",
    title: "Diagnóstico Computarizado",
    desc: "Escáner automotriz multimarca: lectura de fallas en tiempo real, datos en vivo de sensores y borrado de códigos con verificación posterior.",
    bullets: [
      "Lectura y borrado de códigos",
      "Datos en vivo: TPS, MAP, oxígeno, temperatura",
      "Informe impreso de la falla",
    ],
    time: "20 – 30 min",
    img: "/images/diagnostics.jpg",
  },
  {
    id: "mantenimiento",
    code: "EXP-03",
    title: "Mantenimiento Express",
    desc: "Cambio de fluidos y filtros en la hora, con repuesto garantizado del propio mostrador y revisión general de seguridad.",
    bullets: [
      "Aceite, filtros y fluidos",
      "Revisión de frenos y suspensión",
      "Cierre con lectura de escáner",
    ],
    time: "≈ 60 min",
    img: "/images/hero-counter.jpg",
  },
];

export const GUARANTEES = [
  {
    title: "Repuestos 100% Originales y Garantizados",
    desc: "Solo refacción de procedencia verificada y con garantía por escrito.",
  },
  {
    title: "Laboratorio Propio de Inyectores",
    desc: "Ultrasonido y prueba en banco dentro de la tienda. Sin tercerizar.",
  },
  {
    title: "Diagnóstico Computarizado de Precisión",
    desc: "Escáner multimarca: la falla documentada, no adivinada.",
  },
  {
    title: "Cotización Inmediata por WhatsApp",
    desc: "Marca, modelo y año; respuesta con stock y precio en minutos.",
  },
];

export const STEPS = [
  {
    n: "1",
    title: "Envía tu vehículo al WhatsApp",
    desc: "Marca, modelo y año de tu carro, o el servicio que necesitas. Esta página te lo entrega ya redactado.",
  },
  {
    n: "2",
    title: "Verificamos stock al instante",
    desc: "Cruzamos la bodega de Maripérez y te confirmamos precio y disponibilidad inmediata en el chat.",
  },
  {
    n: "3",
    title: "Retiras o agendas tu hora",
    desc: "Pasa a retirarlo por la tienda o fija la hora exacta para el servicio en taller.",
  },
];

export const TICKER_BRANDS = [
  "ACDelco",
  "Chevrolet",
  "GM",
  "Delphi",
  "Bosch",
  "NGK",
  "Nissan",
  "Toyota",
  "Renault",
  "Hyundai",
  "Kia",
  "Mitsubishi",
  "Ford",
  "Volkswagen",
  "Dodge",
  "GMC",
  "Mazda",
  "Chery",
];

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
