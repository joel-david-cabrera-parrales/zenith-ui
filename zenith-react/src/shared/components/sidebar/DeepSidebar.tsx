import { useId, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import type { ShellTone } from "../interfaces/navigation.interface";

export interface DeepLink {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  route?: string;
}

export interface DeepSection {
  id: string;
  label: string;
  icon: string;
  links: DeepLink[];
}

export interface DeepGroup {
  id: string;
  label: string;
  icon: string;
  sections: DeepSection[];
}

export interface DeepArea {
  id: string;
  label: string;
  icon: string;
  groups: DeepGroup[];
}

export interface DeepSidebarProps {
  tone?: ShellTone;
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
}

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(" ");

const AREAS: DeepArea[] = [
  {
    id: "catalogo",
    label: "Catálogo",
    icon: "view_in_ar",
    groups: [
      {
        id: "display",
        label: "Display",
        icon: "view_in_ar",
        sections: [
          {
            id: "componentes",
            label: "Componentes",
            icon: "layers",
            links: [
              { id: "cards", label: "Cards", icon: "view_in_ar", route: "/display/cards" },
              { id: "hero", label: "Hero Sections", icon: "crop_16_9", route: "/display/hero" },
              { id: "headings", label: "Tipografía", icon: "text_fields", route: "/display/headings" },
              { id: "badges", label: "Badges", icon: "badge", route: "/display/badges" },
              { id: "avatars", label: "Avatars", icon: "account_circle", route: "/display/avatars" },
              { id: "progress", label: "Progress", icon: "trending_up", route: "/display/progress" },
              { id: "diffs", label: "Diff", icon: "compare", route: "/display/diffs" },
              { id: "carousels", label: "Carousels", icon: "view_carousel", route: "/display/carousels" },
              { id: "steps", label: "Steps", icon: "footprint", route: "/display/steps" },
            ],
          },
          {
            id: "accordeones",
            label: "Acordeones",
            icon: "expand_more",
            links: [{ id: "accordions", label: "Acordeones", icon: "expand_more", route: "/display/accordions" }],
          },
        ],
      },
      {
        id: "feedback",
        label: "Feedback",
        icon: "feedback",
        sections: [
          {
            id: "avisos",
            label: "Avisos",
            icon: "notifications",
            links: [
              { id: "modals", label: "Modales", icon: "window", route: "/feedback/modals" },
              { id: "drawers", label: "Drawers", icon: "menu_open", route: "/feedback/drawers" },
              { id: "toasts", label: "Toasts", icon: "notifications", route: "/feedback/toasts" },
              { id: "countdowns", label: "Countdowns", icon: "timer", route: "/feedback/countdowns" },
            ],
          },
          {
            id: "estados",
            label: "Estados",
            icon: "hourglass_empty",
            links: [
              { id: "loading", label: "Loading", icon: "progress_activity", route: "/feedback/loading" },
              { id: "skeletons", label: "Skeletons", icon: "hourglass_empty", route: "/feedback/skeletons" },
            ],
          },
        ],
      },
      {
        id: "acciones",
        label: "Acciones",
        icon: "smart_button",
        sections: [
          {
            id: "formularios",
            label: "Formularios",
            icon: "input",
            links: [{ id: "forms", label: "Formularios", icon: "input", route: "/forms/forms" }],
          },
          {
            id: "botones",
            label: "Botones",
            icon: "smart_button",
            links: [{ id: "buttons", label: "Botones", icon: "smart_button", route: "/action/buttons" }],
          },
          {
            id: "overlay",
            label: "Overlay",
            icon: "layers",
            links: [
              { id: "dropdowns", label: "Dropdowns", icon: "arrow_drop_down", route: "/overlay/dropdowns" },
              { id: "tooltips", label: "Tooltips", icon: "tooltip", route: "/overlay/tooltips" },
            ],
          },
          {
            id: "general",
            label: "General",
            icon: "list",
            links: [
              { id: "paginators", label: "Paginadores", icon: "pages", route: "/layout/paginators" },
              { id: "tables", label: "Tablas", icon: "table_view", route: "/layout/tables" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "navegacion",
    label: "Navegación",
    icon: "chevron_right",
    groups: [
      {
        id: "estructuras",
        label: "Estructuras",
        icon: "chevron_right",
        sections: [
          {
            id: "rutas",
            label: "Rutas",
            icon: "route",
            links: [
              { id: "breadcrumbs", label: "Breadcrumbs", icon: "chevron_right", route: "/navigation/breadcrumbs" },
              { id: "tabs", label: "Tabs", icon: "tab", route: "/navigation/tabs" },
            ],
          },
        ],
      },
      {
        id: "herramientas",
        label: "Herramientas",
        icon: "build",
        sections: [
          {
            id: "helper",
            label: "Helper",
            icon: "build",
            links: [
              { id: "not-found", label: "404", icon: "error", route: "/helper/404" },
              { id: "server-error", label: "500", icon: "error", route: "/helper/500" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ejemplos",
    label: "Ejemplos",
    icon: "thumb_up",
    groups: [
      {
        id: "autenticacion",
        label: "Autenticación",
        icon: "login",
        sections: [
          {
            id: "auth-pages",
            label: "Páginas de Auth",
            icon: "person",
            links: [
              { id: "login", label: "Login", icon: "login", route: "/examples/login" },
              { id: "signup", label: "Signup", icon: "person_add", route: "/examples/signup" },
              { id: "forgot-password", label: "Forgot Password", icon: "email", route: "/examples/forgot-password" },
              { id: "reset-password", label: "Reset Password", icon: "restore", route: "/examples/reset-password" },
              { id: "verify-email", label: "Verify Email", icon: "verified", route: "/examples/verify-email" },
              { id: "magic-link", label: "Magic Link", icon: "link", route: "/examples/magic-link" },
            ],
          },
        ],
      },
      {
        id: "paginas-estaticas",
        label: "Landing page",
        icon: "description",
        sections: [
          {
            id: "landing-pages",
            label: "Landing Pages",
            icon: "article",
            links: [
              { id: "about", label: "About", icon: "info", route: "/examples/about" },
              { id: "contact", label: "Contact", icon: "contact_page", route: "/examples/contact" },
              { id: "pricing", label: "Pricing", icon: "attach_money", route: "/examples/pricing" },
              { id: "faq", label: "FAQ", icon: "help", route: "/examples/faq" },
              { id: "terms", label: "Terms", icon: "description", route: "/examples/terms" },
              { id: "privacy", label: "Privacy", icon: "security", route: "/examples/privacy" },
            ],
          },
        ],
      },
    ],
  },
];

function findActiveId(pathname: string): string | null {
  for (const area of AREAS) {
    for (const group of area.groups) {
      for (const section of group.sections) {
        for (const link of section.links) {
          if (!link.route) continue;
          if (pathname === link.route || pathname.startsWith(link.route + "/")) {
            return link.id;
          }
        }
      }
    }
  }
  return null;
}

export const DeepSidebar = ({
  tone = "light",
  collapsed = false,
  onToggleCollapsed,
}: DeepSidebarProps) => {
  const dark = tone === "dark";
  const navigate = useNavigate();
  const location = useLocation();
  const [openAreaId, setOpenAreaId] = useState<string | null>("catalogo");
  const [openGroupId, setOpenGroupId] = useState<string | null>("display");
  const [openSectionId, setOpenSectionId] = useState<string | null>("componentes");
  const baseId = useId();
  const [query, setQuery] = useState("");

  void collapsed;
  void onToggleCollapsed;

  const activeId = findActiveId(location.pathname);

  const filteredAreas = AREAS.map((area) => {
    const filteredGroups = area.groups.map((group) => {
      const filteredSections = group.sections.map((section) => {
        const filteredLinks = section.links.filter((link) =>
          link.label.toLowerCase().includes(query.toLowerCase())
        );
        return { ...section, links: filteredLinks };
      }).filter((section) => section.links.length > 0);
      return { ...group, sections: filteredSections };
    }).filter((group) => group.sections.length > 0);
    return { ...area, groups: filteredGroups };
  }).filter((area) => area.groups.length > 0);

  const go = (route: string | undefined) => {
    if (route) {
      navigate(route);
    }
  };

  const chevron = (open: boolean, color: string) =>
    open
      ? `material-symbols-outlined rotate-180 text-[18px] ${color} transition-transform duration-300 ease-in-out`
      : `material-symbols-outlined text-[18px] ${color} transition-transform duration-300 ease-in-out`;

  const panel = (open: boolean) =>
    `grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
    }`;

  const bg = dark ? "bg-slate-950" : "bg-white";
  const border = dark ? "border-slate-700/60" : "border-slate-200";
  const text = dark ? "text-white" : "text-slate-900";
  const textMuted = dark ? "text-slate-400" : "text-slate-600";
  const textSecondary = dark ? "text-slate-300" : "text-slate-500";
  const hoverBg = dark ? "hover:bg-slate-800 hover:text-white" : "hover:bg-slate-100 hover:text-slate-900";
  return (
    <aside
      aria-label="Sidebar de navegación (4 niveles)"
      className={cx(
        "flex h-full shrink-0 flex-col border transition-all duration-200",
        collapsed ? "w-16" : "w-[350px]",
        border,
        bg,
        dark ? "text-slate-300 shadow-[0_25px_40px_-10px_rgba(0,0,0,0.5)]" : "text-slate-600 shadow-[0_20px_35px_-10px_rgba(0,0,0,0.08)]",
      )}
    >
      <div className={cx(
        "flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 sm:py-3",
        collapsed ? "gap-0" : "gap-3",
      )}
      >
          <span
            aria-hidden="true"
            className={cx(
              "flex h-10 w-10 items-center justify-center rounded-full font-bold text-white",
              dark ? "bg-slate-700" : "bg-blue-600",
            )}
          >
            Z
          </span>
        {!collapsed && (
          <span className={cx("text-sm font-bold", text)}>Zenith UI</span>
        )}
      </div>

      {!collapsed && (
        <div className="my-2 px-1">
          <div className="relative flex w-full items-center">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 text-base text-slate-400">
              search
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar..."
              className={cx(
                "w-full rounded-xl border py-1.5 pr-9 pl-9 text-xs transition-all focus:outline-none",
                dark
                  ? "border-slate-700/60 bg-slate-800 text-slate-200 placeholder-slate-500 focus:border-blue-500"
                  : "border-transparent bg-slate-100 text-slate-800 placeholder-slate-400 hover:bg-slate-200/70 focus:border-blue-500 focus:bg-white",
              )}
            />
            <span className="pointer-events-none absolute right-2 rounded border border-slate-200/80 bg-white px-1.5 py-0.5 text-[9px] font-semibold text-slate-400">
              ⌘K
            </span>
          </div>
        </div>
      )}

      <div className="space-y-1 p-3">
        {filteredAreas.map((area) => {
          const areaOpen = openAreaId === area.id;
          const areaButtonId = `${baseId}-${area.id}-button`;
          const areaPanelId = `${baseId}-${area.id}-panel`;
          return (
            <div key={area.id} className={cx(areaOpen ? "rounded-lg bg-blue-50/60" : "rounded-lg")}>
              <button
                type="button"
                id={areaButtonId}
                aria-expanded={areaOpen}
                aria-controls={areaPanelId}
                onClick={() => {
                  if (collapsed) {
                    onToggleCollapsed?.();
                  }
                  setOpenAreaId((prev: string | null) => (prev === area.id ? null : area.id));
                }}
                className={cx(
                  "flex w-full cursor-pointer items-center justify-between gap-2 px-3 py-2 text-left text-sm font-semibold",
                  collapsed ? "justify-center" : "",
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cx("material-symbols-outlined text-[18px]", areaOpen ? "text-blue-600" : textSecondary)}
                  >
                    {area.icon}
                  </span>
                  {!collapsed && <span className={cx(text)}>{area.label}</span>}
                </span>
                {!collapsed && (
                  <span aria-hidden="true" className={chevron(areaOpen, dark ? "text-blue-500" : "text-blue-600")}>
                    expand_more
                  </span>
                )}
              </button>
              {!collapsed && (
                <div
                  id={areaPanelId}
                  role="region"
                  aria-labelledby={areaButtonId}
                  inert={!areaOpen}
                  className={panel(areaOpen)}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-1 px-2 pb-2">
                      {area.groups.map((group) => {
                        const groupOpen = areaOpen && openGroupId === group.id;
                        const groupButtonId = `${baseId}-${group.id}-button`;
                        const groupPanelId = `${baseId}-${group.id}-panel`;
                        return (
                          <div
                            key={group.id}
                            className="ml-2 rounded-md pl-2"
                          >
                            <button
                              type="button"
                              id={groupButtonId}
                              aria-expanded={groupOpen}
                              aria-controls={groupPanelId}
                              onClick={() => setOpenGroupId((prev: string | null) => (prev === group.id ? null : group.id))}
                              tabIndex={areaOpen ? 0 : -1}
                              className={cx(
                                "flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-[13px] font-semibold transition-colors",
                                groupOpen ? "border-blue-200 text-blue-600" : `border-slate-200 ${textMuted}`,
                                "hover:bg-slate-100",
                                dark && "hover:bg-slate-800 hover:text-white",
                              )}
                            >
                              <span className="flex items-center gap-2">
                                <span
                                  aria-hidden="true"
                                  className={cx("material-symbols-outlined text-[16px]", textSecondary)}
                                >
                                  {group.icon}
                                </span>
                                <span className={cx(text)}>{group.label}</span>
                              </span>
                              <span aria-hidden="true" className={chevron(groupOpen, dark ? "text-slate-500" : "text-slate-500")}>
                                expand_more
                              </span>
                            </button>
                            <div
                              id={groupPanelId}
                              role="region"
                              aria-labelledby={groupButtonId}
                              inert={!groupOpen}
                              className={panel(groupOpen)}
                            >
                              <div className="overflow-hidden">
                                <div className="space-y-1 pb-1">
                                  {group.sections.map((section) => {
                                    const sectionOpen = groupOpen && openSectionId === section.id;
                                    const sectionButtonId = `${baseId}-${section.id}-button`;
                                    const sectionPanelId = `${baseId}-${section.id}-panel`;
                                    return (
                                      <div
                                        key={section.id}
                                        className="ml-3 pl-2"
                                      >
                                        <button
                                          type="button"
                                          id={sectionButtonId}
                                          aria-expanded={sectionOpen}
                                          aria-controls={sectionPanelId}
                                          onClick={() => setOpenSectionId((prev: string | null) => (prev === section.id ? null : section.id))}
                                          tabIndex={groupOpen ? 0 : -1}
                                          className={cx(
                                            "flex w-full cursor-pointer items-center justify-between gap-2 rounded px-2 py-1 text-left font-semibold transition-colors",
                                            sectionOpen ? "border-blue-300 text-blue-500" : `border-slate-200 ${textSecondary}`,
                                            "hover:bg-slate-100 hover:text-slate-700",
                                            dark && "hover:bg-slate-800 hover:text-white",
                                          )}
                                        >
                                          <span className="flex items-center gap-2">
                                            <span
                                              aria-hidden="true"
                                              className={cx("material-symbols-outlined text-[16px]", textSecondary)}
                                            >
                                              {section.icon}
                                            </span>
                                            <span className={cx(text)}>
                                              {section.label.charAt(0).toUpperCase() + section.label.slice(1).toLowerCase()}
                                            </span>
                                          </span>
                                          <span
                                            aria-hidden="true"
                                            className={cx(
                                              "material-symbols-outlined text-[16px] transition-transform duration-300 ease-in-out",
                                              sectionOpen ? "rotate-180" : "",
                                              sectionOpen ? "text-blue-500" : "text-slate-400",
                                            )}
                                          >
                                            expand_more
                                          </span>
                                        </button>
                                        <div
                                          id={sectionPanelId}
                                          role="region"
                                          aria-labelledby={sectionButtonId}
                                          inert={!sectionOpen}
                                          className={panel(sectionOpen)}
                                        >
                                          <div className="overflow-hidden">
                                            <div className="space-y-0.5 pb-1">
                                              {section.links.map((link) => {
                                                const active = activeId === link.id;
                                                return (
                                                  <button
                                                    key={link.id}
                                                    type="button"
                                                    aria-current={active ? "page" : undefined}
                                                    onClick={() => go(link.route)}
                                                    tabIndex={sectionOpen ? 0 : -1}
                                                    className={cx(
                                                      "flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-left text-[13px] transition-colors",
                                                      active
                                                        ? "bg-blue-600 font-semibold text-white"
                                                        : `font-medium ${textMuted} ${hoverBg}`,
                                                    )}
                                                  >
                                                    <span
                                                      aria-hidden="true"
                                                      className={cx(
                                                        "material-symbols-outlined text-[16px]",
                                                        active ? "" : textSecondary,
                                                      )}
                                                    >
                                                      {link.icon}
                                                    </span>
                                                    <span className={cx(active ? "font-semibold" : "font-medium")}>
                                                      {link.label}
                                                    </span>
                                                    {link.badge !== undefined && (
                                                      <span
                                                        className={cx(
                                                          "ml-auto rounded-full px-1.5 py-0.5 font-mono text-[9px] font-bold",
                                                          active ? "bg-white/20 text-white" : "bg-blue-600 text-white",
                                                        )}
                                                      >
                                                        {link.badge}
                                                      </span>
                                                    )}
                                                  </button>
                                                );
                                              })}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex items-center justify-center gap-2 shadow-sm px-4 py-3">
        {collapsed ? (
          <span
            aria-hidden="true"
            className={cx(
              "flex h-8 w-8 items-center justify-center rounded-full font-bold",
              dark ? "bg-slate-800 text-blue-300" : "bg-blue-100 text-blue-800",
            )}
          >
            JJ
          </span>
        ) : (
          <>
            <span
              aria-hidden="true"
              className={cx(
                "flex h-8 w-8 items-center justify-center rounded-full font-bold",
                dark ? "bg-slate-800 text-blue-300" : "bg-blue-100 text-blue-800",
              )}
            >
              JJ
            </span>
            <span className={cx("text-xs font-semibold", text)}>Jonathan J.</span>
            <span className="ml-auto font-mono text-[9px] text-slate-500">v2.4.0</span>
          </>
        )}
      </div>
    </aside>
  );
};
