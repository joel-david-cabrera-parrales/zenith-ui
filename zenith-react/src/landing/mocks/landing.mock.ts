export interface LandingService {
  icon: string;
  title: string;
  excerpt: string;
  items: string[];
  link: string;
}

export interface LandingMember {
  name: string;
  role: string;
  initials: string;
  online: boolean;
  excerpt: string;
  meta: string;
  action: string;
}

export interface LandingTestimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  stars: number;
}

export interface LandingPricing {
  ribbon: string;
  eyebrow: string;
  name: string;
  price: string;
  per: string;
  features: string[];
  action: string;
}

export const LANDING_STATS: Array<{ value: string; label: string }> = [
  { value: "18ms", label: "Latencia P99 en ingesta" },
  { value: "50M", label: "Eventos / mes incluidos" },
  { value: "99.99%", label: "Uptime con SLO público" },
  { value: "4.9/5", label: "Satisfacción de plataforma" },
];

export const LANDING_LOGOS: string[] = [
  "FinEdge",
  "Northwind",
  "Acme Corp",
  "Globex",
  "Initech",
  "Umbrella",
];

export const LANDING_SERVICES: LandingService[] = [
  {
    icon: "bolt",
    title: "Ingesta en tiempo real",
    excerpt: "Pipeline de eventos con particionado automático y cero downtime.",
    items: ["Sharding dinámico", "Reintentos con backoff", "Dead-letter drain"],
    link: "Ver ingesta",
  },
  {
    icon: "database",
    title: "Rebalanceo automático",
    excerpt: "Migración de almacenamiento con sincronización sin bloqueos.",
    items: ["Consumer groups", "Sincronización sin locks", "Escalado elástico"],
    link: "Ver rebalanceo",
  },
  {
    icon: "shield",
    title: "Identidad y accesos",
    excerpt: "RBAC por workspace con rotación de secretos y 2FA.",
    items: ["Roles por entorno", "Rotación KMS", "Auditoría completa"],
    link: "Ver seguridad",
  },
  {
    icon: "monitoring",
    title: "Telemetría unificada",
    excerpt: "Métricas, trazas y logs en un solo panel con retención configurable.",
    items: ["Dashboards vivos", "Alertas por SLO", "Retención 90 días"],
    link: "Ver telemetría",
  },
  {
    icon: "rocket_launch",
    title: "Despliegues seguros",
    excerpt: "Releases progresivos con rollback en un clic por clúster.",
    items: ["Canary por región", "Pipelines visibles", "Rollback inmediato"],
    link: "Ver releases",
  },
  {
    icon: "support_agent",
    title: "Soporte SRE 24/7",
    excerpt: "Canal de escalado con humanos y runbooks compartidos.",
    items: ["Respuesta < 15 min", "Runbooks vivos", "Postmortems abiertos"],
    link: "Ver soporte",
  },
];

export const LANDING_TEAM: LandingMember[] = [
  {
    name: "Mariana Silva",
    role: "Coordinadora VIP // Eventos",
    initials: "MS",
    online: true,
    excerpt: "Orquesta la operación deuga en vivo y la experiencia de asistentes.",
    meta: "4 EVENTOS ACTIVOS",
    action: "Contactar",
  },
  {
    name: "Marcus Reed",
    role: "SecOps Lead // Identity",
    initials: "MR",
    online: true,
    excerpt: "Permisos admin en 4 entornos y rotación de vaults KMS.",
    meta: "2FA ENABLED",
    action: "Contactar",
  },
  {
    name: "Elena Vidal",
    role: "SRE // Plataforma",
    initials: "EV",
    online: false,
    excerpt: "SLOs, alertas y capacidad de los clústeres EU y US.",
    meta: "ON-CALL SEMANAL",
    action: "Contactar",
  },
  {
    name: "Klaus Meyer",
    role: "Data // Telemetría",
    initials: "KM",
    online: true,
    excerpt: "Pipelines de ingesta y tableros de latencia P99.",
    meta: "50M EV/MES",
    action: "Contactar",
  },
];

export const LANDING_TESTIMONIALS: LandingTestimonial[] = [
  {
    quote:
      '"Migrar la ingesta de pagos a Zenith bajó nuestra latencia P99 de 140ms a 18ms sin añadir nodos."',
    author: "Arthur Pendelton",
    role: "VP INFRA @ FINEDGE",
    initials: "AP",
    stars: 5,
  },
  {
    quote:
      '"El rebalanceo automático nos ahorra un día de operaciones cada semana. Simplemente funciona."',
    author: "Sofia Marín",
    role: "PLATFORM LEAD @ NORTHWIND",
    initials: "SM",
    stars: 5,
  },
  {
    quote:
      '"Pasamos de tres herramientas de observabilidad a una. El equipo por fin mira el mismo panel."',
    author: "Diego Torres",
    role: "SRE MANAGER @ ACME",
    initials: "DT",
    stars: 5,
  },
];

export const LANDING_PRICING: LandingPricing[] = [
  {
    ribbon: "STARTER",
    eyebrow: "Para empezar",
    name: "Hobby",
    price: "$0",
    per: "/ mes",
    features: [
      "1M eventos / mes",
      "1 workspace",
      "Retención 7 días",
      "Soporte comunidad",
    ],
    action: "Crear cuenta",
  },
  {
    ribbon: "RECOMMENDED",
    eyebrow: "Platform tier",
    name: "Scale",
    price: "$189",
    per: "/ clúster / mes",
    features: [
      "50M eventos / mes",
      "Gateway dedicado aislado",
      "Retención 90 días",
      "SRE 24/7",
    ],
    action: "Probar 14 días",
  },
  {
    ribbon: "ENTERPRISE",
    eyebrow: "A medida",
    name: "Enterprise",
    price: "Hablemos",
    per: "/ anual",
    features: [
      "Volumen ilimitado",
      "Regiones dedicadas",
      "SSO + auditoría",
      "SLO contractual",
    ],
    action: "Contactar ventas",
  },
];
