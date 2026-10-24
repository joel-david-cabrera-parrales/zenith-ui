import { useId, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import type { ShellTone } from "../interfaces/navigation.interface";
import { useTranslation } from "@/shared/hooks/useTranslation";

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
  sections?: DeepSection[];
  links?: DeepLink[];
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
    label: "deep.areas.catalogo",
    icon: "view_in_ar",
    groups: [
      {
        id: "display",
        label: "deep.groups.display",
        icon: "view_in_ar",
        sections: [
          {
            id: "componentes",
            label: "deep.sections.componentes",
            icon: "layers",
            links: [
              { id: "cards", label: "deep.links.cards", icon: "view_in_ar", route: "/display/cards" },
              { id: "hero", label: "deep.links.hero", icon: "crop_16_9", route: "/display/hero" },
              { id: "headings", label: "deep.links.headings", icon: "text_fields", route: "/display/headings" },
              { id: "badges", label: "deep.links.badges", icon: "badge", route: "/display/badges" },
              { id: "avatars", label: "deep.links.avatars", icon: "account_circle", route: "/display/avatars" },
              { id: "progress", label: "deep.links.progress", icon: "trending_up", route: "/display/progress" },
              { id: "diffs", label: "deep.links.diffs", icon: "compare", route: "/display/diffs" },
              { id: "carousels", label: "deep.links.carousels", icon: "view_carousel", route: "/display/carousels" },
              { id: "steps", label: "deep.links.steps", icon: "footprint", route: "/display/steps" },
            ],
          },
          {
            id: "accordeones",
            label: "deep.sections.accordeones",
            icon: "expand_more",
            links: [{ id: "accordions", label: "deep.links.accordions", icon: "expand_more", route: "/display/accordions" }],
          },
        ],
      },
      {
        id: "feedback",
        label: "deep.groups.feedback",
        icon: "feedback",
        sections: [
          {
            id: "avisos",
            label: "deep.sections.avisos",
            icon: "notifications",
            links: [
              { id: "modals", label: "deep.links.modals", icon: "window", route: "/feedback/modals" },
              { id: "drawers", label: "deep.links.drawers", icon: "menu_open", route: "/feedback/drawers" },
              { id: "toasts", label: "deep.links.toasts", icon: "notifications", route: "/feedback/toasts" },
              { id: "countdowns", label: "deep.links.countdowns", icon: "timer", route: "/feedback/countdowns" },
            ],
          },
          {
            id: "estados",
            label: "deep.sections.estados",
            icon: "hourglass_empty",
            links: [
              { id: "loading", label: "deep.links.loading", icon: "progress_activity", route: "/feedback/loading" },
              { id: "skeletons", label: "deep.links.skeletons", icon: "hourglass_empty", route: "/feedback/skeletons" },
            ],
          },
        ],
      },
      {
        id: "acciones",
        label: "deep.groups.acciones",
        icon: "smart_button",
        sections: [
          {
            id: "formularios",
            label: "deep.sections.formularios",
            icon: "input",
            links: [
              { id: "forms", label: "deep.links.forms", icon: "input", route: "/forms/forms" },
              { id: "rich-text-editor", label: "deep.links.richTextEditor", icon: "edit_note", route: "/forms/rich-text-editor" },
            ],
          },
          {
            id: "botones",
            label: "deep.sections.botones",
            icon: "smart_button",
            links: [{ id: "buttons", label: "deep.links.buttons", icon: "smart_button", route: "/action/buttons" }],
          },
          {
            id: "overlay",
            label: "deep.sections.overlay",
            icon: "layers",
            links: [
              { id: "dropdowns", label: "deep.links.dropdowns", icon: "arrow_drop_down", route: "/overlay/dropdowns" },
              { id: "tooltips", label: "deep.links.tooltips", icon: "tooltip", route: "/overlay/tooltips" },
            ],
          },
          {
            id: "general",
            label: "deep.sections.general",
            icon: "list",
            links: [
              { id: "paginators", label: "deep.links.paginators", icon: "pages", route: "/layout/paginators" },
              { id: "tables", label: "deep.links.tables", icon: "table_view", route: "/layout/tables" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "navegacion",
    label: "deep.areas.navegacion",
    icon: "chevron_right",
    groups: [
      {
        id: "estructuras",
        label: "deep.groups.estructuras",
        icon: "chevron_right",
        sections: [
          {
            id: "rutas",
            label: "deep.sections.rutas",
            icon: "route",
            links: [
              { id: "breadcrumbs", label: "deep.links.breadcrumbs", icon: "chevron_right", route: "/navigation/breadcrumbs" },
              { id: "tabs", label: "deep.links.tabs", icon: "tab", route: "/navigation/tabs" },
            ],
          },
        ],
      },
      {
        id: "herramientas",
        label: "deep.groups.herramientas",
        icon: "build",
        sections: [
          {
            id: "helper",
            label: "deep.sections.helper",
            icon: "build",
            links: [
              { id: "not-found", label: "deep.links.notFound", icon: "error", route: "/helper/404" },
              { id: "server-error", label: "deep.links.serverError", icon: "error", route: "/helper/500" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ejemplos",
    label: "deep.areas.ejemplos",
    icon: "thumb_up",
    groups: [
      {
        id: "autenticacion",
        label: "deep.groups.autenticacion",
        icon: "login",
        links: [
          { id: "login", label: "deep.links.login", icon: "login", route: "/auth/login" },
          { id: "signup", label: "deep.links.signup", icon: "person_add", route: "/auth/register" },
          { id: "forgot-password", label: "deep.links.forgot", icon: "email", route: "/auth/forgot" },
          { id: "reset-password", label: "deep.links.reset", icon: "restore", route: "/auth/reset" },
        ],
      },
      {
        id: "landing-page",
        label: "deep.groups.landingPage",
        icon: "description",
        links: [
          { id: "about", label: "deep.links.about", icon: "info", route: "/landing/about" },
          { id: "contact", label: "deep.links.contact", icon: "contact_page", route: "/landing/services" },
          { id: "home", label: "deep.links.home", icon: "home", route: "/landing/home" },
        ],
      },
    ],
  },
];

function findActiveId(pathname: string): string | null {
  for (const area of AREAS) {
    for (const group of area.groups) {
      const links = "sections" in group && group.sections
        ? group.sections.flatMap((section) => section.links)
        : group.links ?? [];
      for (const link of links) {
        if (!link.route) continue;
        if (pathname === link.route || pathname.startsWith(link.route + "/")) {
          return link.id;
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
  const { t } = useTranslation();
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
      if ("sections" in group && group.sections) {
        const filteredSections = group.sections.map((section) => {
          const filteredLinks = section.links.filter((link) =>
            t(link.label).toLowerCase().includes(query.toLowerCase())
          );
          return { ...section, links: filteredLinks };
        }).filter((section) => section.links.length > 0);
        return { ...group, sections: filteredSections };
      } else {
        const filteredLinks = (group.links ?? []).filter((link) =>
          t(link.label).toLowerCase().includes(query.toLowerCase())
        );
        return { ...group, links: filteredLinks };
      }
    }).filter((group) => {
      if ("sections" in group && group.sections) return group.sections.length > 0;
      return (group.links ?? []).length > 0;
    });
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

  const bg = dark ? "bg-slate-900" : "bg-white";
  const border = dark ? "border-slate-800/50" : "border-slate-200";
  const text = dark ? "text-white" : "text-slate-900";
  const textMuted = dark ? "text-slate-300" : "text-slate-600";
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
              dark ? "bg-slate-800" : "bg-blue-600",
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
            <span className="pointer-events-none absolute right-2 rounded border border-slate-600/60 bg-slate-800 px-1.5 py-0.5 text-[9px] font-semibold text-slate-400">
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
            <div key={area.id} className={cx("rounded-lg")}>
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
                  {!collapsed && <span className={cx(text)}>{t(area.label)}</span>}
                </span>
                {!collapsed && (
                  <span aria-hidden="true" className={chevron(areaOpen, "text-blue-400")}>
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
                                groupOpen ? "border-blue-500 text-blue-400" : `border-slate-600/50 ${textMuted}`,
                                hoverBg,
                              )}
                            >
                              <span className="flex items-center gap-2">
                                <span
                                  aria-hidden="true"
                                  className={cx("material-symbols-outlined text-[16px]", textSecondary)}
                                >
                                  {group.icon}
                                </span>
                                <span className={cx(text)}>{t(group.label)}</span>
                              </span>
                              <span aria-hidden="true" className={chevron(groupOpen, textSecondary)}>
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
                                  {group.sections?.map((section) => {
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
                                            sectionOpen ? "border-blue-500 text-blue-400" : `border-slate-600/50 ${textSecondary}`,
                                            hoverBg,
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
                                              {t(section.label)}
                                            </span>
                                          </span>
                                          <span
                                            aria-hidden="true"
                                            className={cx(
                                              "material-symbols-outlined text-[16px] transition-transform duration-300 ease-in-out",
                                              sectionOpen ? "rotate-180" : "",
                                              sectionOpen ? "text-blue-400" : textSecondary,
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
                                                      {t(link.label)}
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
                                  }) ?? (
                                    <>
                                      {(group.links ?? []).map((link) => {
                                        const active = activeId === link.id;
                                        return (
                                          <button
                                            key={link.id}
                                            type="button"
                                            aria-current={active ? "page" : undefined}
                                            onClick={() => go(link.route)}
                                            tabIndex={groupOpen ? 0 : -1}
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
                                              {t(link.label)}
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
                                    </>
                                  )}
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
            <span className={`ml-auto font-mono text-[9px] ${textMuted}`}>v2.4.0</span>
          </>
        )}
      </div>
    </aside>
  );
};
