export type ShellTone = "light" | "dark";

export interface NavLeaf {
  id: string;
  label: string;
}

export interface NavGroup {
  id: string;
  label: string;
  children: NavLeaf[];
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  route?: string;
  groups?: NavGroup[];
  links?: NavLeaf[];
}

export interface ShellUser {
  name: string;
  email: string;
  role: string;
  initials: string;
}

export const SHELL_USER: ShellUser = {
  name: "Jonathan",
  email: "Jonathan.j@email.com",
  role: "Admin",
  initials: "JJ",
};

export const SIDEBAR_NAV: NavItem[] = [
  {
    id: "paginators",
    label: "Paginadores",
    icon: "pages",
    route: "/layout/paginators",
  },
  {
    id: "tables",
    label: "Tablas",
    icon: "table_view",
    route: "/layout/tables",
  },
  {
    id: "forms",
    label: "Formularios",
    icon: "input",
    route: "/forms/forms",
  },
  {
    id: "modals",
    label: "Modales",
    icon: "window",
    route: "/feedback/modals",
  },
  {
    id: "drawers",
    label: "Drawers",
    icon: "menu_open",
    route: "/feedback/drawers",
  },
  {
    id: "cards",
    label: "Cards",
    icon: "view_in_ar",
    route: "/display/cards",
  },
  {
    id: "hero",
    label: "Hero Sections",
    icon: "crop_16_9",
    route: "/display/hero",
  },
  {
    id: "headings",
    label: "Tipografía",
    icon: "text_fields",
    route: "/display/headings",
  },
  {
    id: "buttons",
    label: "Botones",
    icon: "smart_button",
    route: "/action/buttons",
  },
  {
    id: "dropdowns",
    label: "Dropdowns",
    icon: "arrow_drop_down",
    route: "/overlay/dropdowns",
  },
  {
    id: "countdowns",
    label: "Countdowns",
    icon: "timer",
    route: "/feedback/countdowns",
  },
  {
    id: "badges",
    label: "Badges",
    icon: "badge",
    route: "/display/badges",
  },
  {
    id: "toasts",
    label: "Toasts",
    icon: "notifications",
    route: "/feedback/toasts",
  },
];

export const SIDEBAR_SECONDARY: NavItem[] = [
  { id: "docs", label: "Documentación", icon: "description", route: "/docs" },
  { id: "changelog", label: "Changelog", icon: "history", route: "/changelog" },
  { id: "github", label: "GitHub", icon: "code", route: "https://github.com" },
];

export interface SearchResultGroup {
  title: string;
  icon: string;
  items: { id: string; title: string; meta: string; tag: string }[];
}

export const TOPBAR_RESULTS: SearchResultGroup[] = [
  {
    title: "Acciones Rápidas & Comandos",
    icon: "bolt",
    items: [
      {
        id: "create",
        title: 'Crear nuevo evento: "Keynote Star Summit 2026"',
        meta: "Comando",
        tag: "⌘N",
      },
      {
        id: "gateway",
        title: "Ir a configuración de pasarela & pagos",
        meta: "Ajustes",
        tag: "→",
      },
    ],
  },
  {
    title: "Resultados Recientes / Eventos",
    icon: "event",
    items: [
      {
        id: "summit",
        title: "Keynote Star Summit 2025",
        meta: "Auditorio Principal • 1,240 asistentes",
        tag: "En Vivo",
      },
      {
        id: "workshop",
        title: "Workshop React & Tailwind UI",
        meta: "Laboratorio de Innovación • Inicio 15:30",
        tag: "Próximo",
      },
    ],
  },
  {
    title: "Usuarios & Organizadores",
    icon: "group",
    items: [
      {
        id: "mariana",
        title: "Mariana Silva",
        meta: "Coordinadora VIP • mariana.s@zenith.io",
        tag: "Staff",
      },
      {
        id: "jonathan",
        title: "Jonathan J.",
        meta: "Administrador General • jonathan.j@email.com",
        tag: "Admin",
      },
    ],
  },
];

export interface ShellNotification {
  id: string;
  icon: string;
  title: string;
  time: string;
  body: string;
  chip: string;
}

export const SHELL_NOTIFICATIONS: ShellNotification[] = [
  {
    id: "deploy",
    icon: "rocket_launch",
    title: "Despliegue a Producción Exitoso",
    time: "hace 3m",
    body: "El release v2.4.0 se ha completado en el clúster Cluster-EU1 sin incidencias.",
    chip: "Pipeline #8492",
  },
  {
    id: "api",
    icon: "warning",
    title: "Alerta de Consumo de API",
    time: "hace 18m",
    body: "El límite mensual de telemetría de eventos ha superado el 85% de la cuota.",
    chip: "Key: prod_client_eu",
  },
  {
    id: "member",
    icon: "person_add",
    title: "Nuevo Integrante Invitado",
    time: "hace 1h",
    body: "Mariana Silva ha aceptado la invitación con rol Coordinadora VIP.",
    chip: "Workspace Central",
  },
];

export interface FlyoutChild {
  id: string;
  label: string;
}

export interface FlyoutLink extends FlyoutChild {
  active?: boolean;
  children?: FlyoutChild[];
}

export interface FlyoutSection {
  label: string;
  links: FlyoutLink[];
}

export interface RailFlyout {
  title: string;
  sections: FlyoutSection[];
}

export const DASHBOARD_FLYOUT: RailFlyout = {
  title: "Dashboard Views",
  sections: [
    {
      label: "ESTADÍSTICAS EN VIVO",
      links: [
        { id: "resumen", label: "Resumen Ejecutivo" },
        { id: "ingresos", label: "Ingresos por Entradas" },
      ],
    },
    {
      label: "OPERACIONES",
      links: [
        {
          id: "accesos",
          label: "Control de Accesos",
          children: [
            { id: "escaner-norte", label: "Escaners Puerta Norte" },
            { id: "escaner-vip", label: "Escaners VIP Lounge" },
          ],
        },
      ],
    },
  ],
};

export function parentOf(id: string): string {
  for (const item of SIDEBAR_NAV) {
    if (item.id === id) return item.id;
    if (item.groups?.some((g) => g.children.some((c) => c.id === id)))
      return item.id;
    if (item.links?.some((l) => l.id === id)) return item.id;
  }
  for (const section of DASHBOARD_FLYOUT.sections) {
    if (
      section.links.some(
        (l) => l.id === id || l.children?.some((c) => c.id === id),
      )
    )
      return "dashboard";
  }
  return id;
}

export function getRailFlyout(item: NavItem, activeId: string): RailFlyout | null {
  if (item.id === "dashboard") {
    return {
      ...DASHBOARD_FLYOUT,
      sections: DASHBOARD_FLYOUT.sections.map((s) => ({
        ...s,
        links: s.links.map((l) => ({
          ...l,
          active:
            l.id === activeId ||
            l.children?.some((c) => c.id === activeId) === true,
        })),
      })),
    };
  }
  if ((item.groups?.length ?? 0) > 0 || (item.links?.length ?? 0) > 0) {
    const sections: FlyoutSection[] = (item.groups ?? []).map((g) => ({
      label: g.label.toUpperCase(),
      links: g.children.map((c) => ({ ...c, active: c.id === activeId })),
    }));
    if ((item.links?.length ?? 0) > 0) {
      sections.push({
        label: "GENERAL",
        links: (item.links ?? []).map((l) => ({
          ...l,
          active: l.id === activeId,
        })),
      });
    }
    return { title: item.label, sections };
  }
  return null;
}

export function filterNav(query: string): NavItem[] {
  const q = query.trim().toLowerCase();
  if (q === "") return SIDEBAR_NAV;
  return SIDEBAR_NAV.map((item) => {
    if (item.label.toLowerCase().includes(q)) return item;
    return null;
  }).filter((item): item is NavItem => item !== null);
}