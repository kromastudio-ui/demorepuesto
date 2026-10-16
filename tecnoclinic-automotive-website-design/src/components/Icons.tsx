type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Hexágono + cruz clínica */
export const IconLogo = ({ className = "h-10 w-10" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} strokeWidth={1.9} d="M12 2.2 20.4 7v10L12 21.8 3.6 17V7Z" />
    <path {...base} strokeWidth={2.5} d="M12 8v8M8 12h8" />
  </svg>
);

export const IconShield = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} d="M12 21.5s8-3.4 8-9.8V5.4L12 2.5 4 5.4v6.3c0 6.4 8 9.8 8 9.8Z" />
    <path {...base} d="m8.8 11.6 2.3 2.3 4.2-4.2" />
  </svg>
);

export const IconInjector = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} d="M9 3h6v5H9zM7 3h2M15 3h2" />
    <path {...base} d="M10 8v4.5h4V8" />
    <path {...base} d="M11.2 12.5v3.5h1.6v-3.5" />
    <path {...base} d="M12 18v3M9 17.2l-1.8 2.6M15 17.2l1.8 2.6" />
  </svg>
);

export const IconScan = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect {...base} x="3" y="4" width="18" height="13" rx="1.5" />
    <path {...base} d="M6 11h2.6l1.6-3 2.4 6 1.7-3H18" />
    <path {...base} d="M9 21h6M12 17v4" />
  </svg>
);

export const IconWrench = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      {...base}
      d="M20.9 6.4a5 5 0 0 1-6.5 4.8L8.1 15.5a2.3 2.3 0 1 1-3.2-3.2l4.4-6.3a5 5 0 0 1 6.4-6.4L14 3.6 16.4 6l2.5-2.4.1.1c.5.54.8 1.2 1 1.9Z"
    />
  </svg>
);

export const IconOil = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} d="M8.5 3h7M9.5 3v3.2M14.5 3v3.2" />
    <path {...base} d="M8.5 6.2h7l1.6 3.2v9.4a2 2 0 0 1-2 2H8.9a2 2 0 0 1-2-2V9.4Z" />
    <path {...base} d="M11.9 11.4c1.7 2 2.4 3.1 2.4 4.3a2.4 2.4 0 1 1-4.8 0c0-1.2.7-2.3 2.4-4.3Z" />
  </svg>
);

export const IconPlug = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} d="M10.8 2h2.4M9.5 5h5M9.5 4.5V10M14.5 4.5V10" />
    <path {...base} d="M9.5 7h5M9.5 8.7h5" />
    <path {...base} d="M9.5 10 12 13.6 14.5 10M12 13.6V17M9.5 20.5h5M12 17v3.5" />
  </svg>
);

export const IconBrake = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle {...base} cx="12" cy="12" r="9" />
    <circle {...base} cx="12" cy="12" r="3.6" />
    <circle cx="12" cy="5.9" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="18.1" cy="12" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="18.1" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="5.9" cy="12" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconChip = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect {...base} x="6" y="6" width="12" height="12" rx="1.5" />
    <rect {...base} x="10" y="10" width="4" height="4" />
    <path {...base} d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" />
  </svg>
);

export const IconJoint = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle {...base} cx="12" cy="6.5" r="3" />
    <path {...base} d="M12 9.5V12M8 21h8" />
    <circle {...base} cx="12" cy="15.5" r="3.5" />
  </svg>
);

export const IconBox = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} d="M12 2.5 20 7v10l-8 4.5L4 17V7Z" />
    <path {...base} d="M4 7l8 4.5L20 7M12 11.5v10" />
  </svg>
);

export const IconGauge = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} d="M4.5 19a9.5 9.5 0 1 1 15 0" />
    <path {...base} d="M12 16.5 15.8 9" />
    <circle cx="12" cy="16.8" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const IconCalendar = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect {...base} x="3" y="4.5" width="18" height="17" rx="1.5" />
    <path {...base} d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    <path {...base} d="m9.5 14.5 2 2 3.5-3.5" />
  </svg>
);

export const IconWhatsApp = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      fill="currentColor"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
    />
  </svg>
);

export const IconInstagram = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect {...base} x="3" y="3" width="18" height="18" rx="4.5" />
    <circle {...base} cx="12" cy="12" r="4.2" />
    <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

export const IconLink = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      {...base}
      d="M10 13.5a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 10.5a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    />
  </svg>
);

export const IconPhone = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      {...base}
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
    />
  </svg>
);

export const IconPin = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle {...base} cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle {...base} cx="12" cy="12" r="9" />
    <path {...base} d="M12 7v5l3.2 1.9" />
  </svg>
);

export const IconCheck = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} strokeWidth={2.4} d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconArrow = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} strokeWidth={2} d="M4.5 12h15M13.5 6l6 6-6 6" />
  </svg>
);

export const IconPlus = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} strokeWidth={2.2} d="M12 5v14M5 12h14" />
  </svg>
);

export const IconMenu = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} strokeWidth={2} d="M4 6.5h16M4 12h16M4 17.5h16" />
  </svg>
);

export const IconCar = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...base} d="M4 13.5 5.7 8.6A2 2 0 0 1 7.6 7.2h8.8a2 2 0 0 1 1.9 1.4L20 13.5M3 17v-2a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 15v2" />
    <path {...base} d="M3 17h18v2.2h-2.6M3 17v2.2h2.6" />
    <circle {...base} cx="7.2" cy="17.6" r="1.4" />
    <circle {...base} cx="16.8" cy="17.6" r="1.4" />
  </svg>
);
