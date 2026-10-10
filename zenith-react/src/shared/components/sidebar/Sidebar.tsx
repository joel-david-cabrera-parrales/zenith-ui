import { useId, useState } from "react";
import {
  type ShellTone,
  type NavItem,
  filterNav,
  getRailFlyout,
  SIDEBAR_NAV,
  parentOf,
  SIDEBAR_SECONDARY,
  SHELL_USER,
} from "../interfaces/navigation.interface";

export interface SidebarProps {
  tone?: ShellTone;
  collapsed?: boolean;
  activeId?: string;
  onNavigate?: (id: string) => void;
  onToggleCollapsed?: () => void;
}

const cx = (...parts: Array<string | false | undefined>): string => {
  return parts.filter(Boolean).join(" ");
};

interface RailButtonProps {
  item: NavItem;
  dark: boolean;
  highlighted: boolean;
  onClick: () => void;
}

const RailButton = ({ item, dark, highlighted, onClick }: RailButtonProps) => {
  return (
    <span className="relative flex w-full items-center justify-center py-1">
      {highlighted && (
        <span
          className={cx(
            "absolute top-0 bottom-0 left-0 w-1 rounded-r-md",
            dark ? "bg-white" : "bg-blue-600",
          )}
        />
      )}
      <button
        type="button"
        title={item.label}
        aria-label={item.label}
        onClick={onClick}
        className={cx(
          "relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
          highlighted
            ? dark
              ? "bg-slate-800 text-white"
              : "bg-blue-50/60 text-blue-600"
            : dark
              ? "text-slate-400 hover:bg-slate-800 hover:text-white"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
        )}
      >
        <span className="material-symbols-outlined text-xl">{item.icon}</span>
        {item.badge !== undefined && (
          <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
        )}
      </button>
    </span>
  );
};

export function Sidebar({
  tone = "light",
  collapsed = false,
  activeId = "event-list",
  onNavigate,
  onToggleCollapsed,
}: SidebarProps) {
  const dark = tone === "dark";
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [openSections, setOpenSections] = useState<string[]>(["events"]);
  const [openGroups, setOpenGroups] = useState<string[]>(["galas"]);
  const [flyoutFor, setFlyoutFor] = useState<string | null>(null);
  const [flyoutExiting, setFlyoutExiting] = useState(false);

  const nav = filterNav(query);

  function toggleSection(id: string) {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  }

  function toggleGroup(id: string) {
    setOpenGroups((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  }

  function openFlyout(id: string) {
    setFlyoutExiting(false);
    setFlyoutFor(id);
  }

  function closeFlyout() {
    setFlyoutExiting(true);
    window.setTimeout(() => {
      setFlyoutFor(null);
      setFlyoutExiting(false);
    }, 200);
  }

  function toggleFlyout(item: NavItem) {
    if (getRailFlyout(item, activeId) === null) {
      setFlyoutFor(null);
      go(item.id);
      return;
    }
    if (flyoutFor === item.id) closeFlyout();
    else openFlyout(item.id);
  }

  function go(id: string) {
    onNavigate?.(id);
  }

  if (collapsed) {
    return (
      <div className="relative flex flex-1 self-stretch">
        <aside
          aria-label="Sidebar colapsado"
          className={cx(
            "z-10 flex w-16 flex-col items-center self-stretch rounded-none border-y-0 border-l-0 py-5",
            dark
              ? "border-slate-700/60 bg-slate-950 shadow-[0_25px_40px_-10px_rgba(0,0,0,0.5)]"
              : "border-slate-200/70 bg-white shadow-[0_20px_35px_-10px_rgba(0,0,0,0.08)]",
          )}
        >
          <div
            className={cx(
              "mb-6 flex h-10 w-10 items-center justify-center rounded-full",
              dark
                ? "bg-stone-700/80 text-slate-100"
                : "bg-slate-800 text-white",
            )}
          >
            <span className="material-symbols-outlined text-xl">star</span>
          </div>
          <nav className="flex w-full flex-col items-center gap-3">
            <button
              type="button"
              title="Buscar (⌘K)"
              aria-label="Buscar (⌘K)"
              onClick={onToggleCollapsed}
              className={cx(
                "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                dark
                  ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
              )}
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
            {SIDEBAR_NAV.map((item) => (
              <RailButton
                key={item.id}
                item={item}
                dark={dark}
                highlighted={
                  parentOf(activeId) === item.id || flyoutFor === item.id
                }
                onClick={() => toggleFlyout(item)}
              />
            ))}
            <div
              className={cx(
                "my-1 h-px w-8",
                dark ? "bg-slate-700/60" : "bg-slate-100",
              )}
            />
            {SIDEBAR_SECONDARY.map((item) => (
              <RailButton
                key={item.id}
                item={item}
                dark={dark}
                highlighted={
                  parentOf(activeId) === item.id || flyoutFor === item.id
                }
                onClick={() => toggleFlyout(item)}
              />
            ))}
          </nav>
          <div className="mt-auto">
            <button
              type="button"
              title="Expandir sidebar"
              aria-label="Expandir sidebar"
              onClick={onToggleCollapsed}
              className={cx(
                "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold",
                dark
                  ? "bg-stone-700 text-slate-100"
                  : "bg-slate-800 text-white",
              )}
            >
              {SHELL_USER.initials}
            </button>
          </div>
        </aside>

        {(flyoutFor !== null || flyoutExiting) &&
          (() => {
            const item = [...SIDEBAR_NAV, ...SIDEBAR_SECONDARY].find(
              (i) => i.id === flyoutFor,
            );
            const data = item ? getRailFlyout(item, activeId) : null;
            if (!item || !data) return null;
            const isActiveSection = parentOf(activeId) === item.id;
            return (
              <div
                className={cx(
                  "absolute top-[68px] left-full z-30 ml-2 w-64 rounded-2xl border p-3.5",
                  flyoutExiting ? "animate-overlay-out" : "animate-overlay-in",
                  dark
                    ? "border-slate-700/60 bg-slate-950 text-slate-200"
                    : "border-slate-200/80 bg-white text-slate-800 shadow-2xl",
                )}
              >
                <div
                  className={cx(
                    "mb-2 flex items-center justify-between border-b pb-2",
                    dark ? "border-slate-700/60" : "border-slate-100",
                  )}
                >
                  <p className="text-xs font-bold tracking-wide uppercase">
                    {data.title}
                  </p>
                  {isActiveSection && (
                    <span
                      className={cx(
                        "rounded px-1.5 py-0.5 text-[10px] font-semibold",
                        dark
                          ? "bg-white/10 text-white"
                          : "bg-blue-50 text-blue-600",
                      )}
                    >
                      Active
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {data.sections.map((section, sIdx) => (
                    <div
                      key={section.label}
                      className={cx(
                        sIdx > 0 && "border-t pt-1",
                        sIdx > 0 &&
                          (dark ? "border-slate-700/60" : "border-slate-100"),
                      )}
                    >
                      <p className="px-2 py-0.5 text-[11px] font-semibold text-slate-400">
                        {section.label}
                      </p>
                      <div className="mt-1 space-y-0.5">
                        {section.links.map((link) =>
                          link.children ? (
                            <div key={link.id}>
                              <div
                                className={cx(
                                  "mt-1 ml-2 space-y-1 border-l pl-2.5",
                                  dark
                                    ? "border-slate-700/60"
                                    : "border-slate-200",
                                )}
                              >
                                <button
                                  type="button"
                                  onClick={() => go(link.id)}
                                  className={cx(
                                    "px-1 py-1 text-left text-xs font-medium",
                                    link.active
                                      ? dark
                                        ? "text-white"
                                        : "text-blue-600"
                                      : dark
                                        ? "text-slate-300"
                                        : "text-slate-700",
                                  )}
                                >
                                  {link.label}
                                </button>
                                <div className="space-y-0.5 pl-2">
                                  {link.children.map((child) => (
                                    <button
                                      key={child.id}
                                      type="button"
                                      onClick={() => go(child.id)}
                                      className={cx(
                                        "block w-full py-0.5 text-left text-[11px]",
                                        activeId === child.id
                                          ? dark
                                            ? "font-semibold text-white"
                                            : "font-semibold text-blue-600"
                                          : "text-slate-500 hover:text-blue-600",
                                      )}
                                    >
                                      {child.label}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <button
                              key={link.id}
                              type="button"
                              onClick={() => go(link.id)}
                              className={cx(
                                "flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors",
                                link.active
                                  ? dark
                                    ? "border border-slate-700/50 bg-slate-800/90 font-semibold text-white"
                                    : "bg-blue-50/70 font-medium text-blue-600"
                                  : dark
                                    ? "font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
                                    : "font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                              )}
                            >
                              {link.label}
                              {link.active && (
                                <span className="material-symbols-outlined text-sm text-blue-500">
                                  check
                                </span>
                              )}
                            </button>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className={cx(
                    "mt-3 flex items-center justify-between border-t pt-2",
                    dark ? "border-slate-700/60" : "border-slate-100",
                  )}
                >
                  <span className="text-[11px] text-slate-400">
                    Atajo:{" "}
                    <kbd
                      className={cx(
                        "rounded px-1 py-0.5 text-[9px]",
                        dark
                          ? "border border-slate-700 bg-slate-800 text-slate-300"
                          : "bg-slate-100 text-slate-600",
                      )}
                    >
                      ⌘ D
                    </kbd>
                  </span>
                  <button
                    type="button"
                    onClick={closeFlyout}
                    className={cx(
                      "text-[11px] font-semibold",
                      dark ? "text-blue-400" : "text-blue-600",
                    )}
                  >
                    Ver todo →
                  </button>
                </div>
              </div>
            );
          })()}
      </div>
    );
  }

  return (
    <aside
      aria-label="Sidebar de navegación"
      className={cx(
        "flex w-[305px] flex-1 flex-col justify-between self-stretch rounded-none border-y-0 border-l-0 p-5 select-none",
        dark
          ? "border-slate-700/60 bg-slate-950 text-slate-300 shadow-[0_25px_40px_-10px_rgba(0,0,0,0.5)]"
          : "border-slate-200/70 bg-white text-slate-600 shadow-[0_20px_35px_-10px_rgba(0,0,0,0.08)]",
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <div
          className={cx(
            "mb-2 flex items-center justify-between border-b pb-4",
            dark ? "border-slate-700/60" : "border-slate-100",
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className={cx(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                dark
                  ? "bg-stone-700/80 text-slate-100"
                  : "bg-slate-800 text-white shadow-sm",
              )}
            >
              <span className="material-symbols-outlined text-xl">star</span>
            </div>
            <div className="leading-tight">
              <h2
                className={cx(
                  "text-sm font-bold tracking-tight",
                  dark ? "text-white" : "text-slate-900",
                )}
              >
                Zenith Dash
              </h2>
              <p className="text-[11px] font-medium text-slate-400">
                Event management
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Colapsar sidebar"
            onClick={onToggleCollapsed}
            className="rounded-lg p-1 text-slate-400 transition-colors hover:text-slate-700"
          >
            <span className="material-symbols-outlined text-lg">
              expand_more
            </span>
          </button>
        </div>

        <div className="my-2 px-1">
          <div className="relative flex w-full items-center">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 text-base text-slate-400">
              search
            </span>
            <input
              id={searchId}
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

        <nav className="mt-3 min-h-0 flex-1 space-y-1 overflow-y-auto pr-1">
          {nav.map((item) => {
            const expandable =
              (item.groups?.length ?? 0) > 0 || (item.links?.length ?? 0) > 0;
            const open = openSections.includes(item.id);
            const isActiveParent =
              item.id === "events" && activeId !== "dashboard";
            if (!expandable) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className={cx(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                    activeId === item.id
                      ? dark
                        ? "border border-slate-700/40 bg-slate-800/80 font-semibold text-white"
                        : "bg-blue-50/70 font-semibold text-blue-600"
                      : dark
                        ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                  )}
                >
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                  {item.label}
                  {item.badge !== undefined && (
                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            }
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => toggleSection(item.id)}
                  className={cx(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                    isActiveParent
                      ? dark
                        ? "border border-slate-700/40 bg-slate-800/80 font-semibold text-white"
                        : "bg-blue-50/70 font-semibold text-blue-600"
                      : dark
                        ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                  )}
                >
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                  {item.label}
                  <span className="material-symbols-outlined ml-auto text-base">
                    {open ? "expand_more" : "chevron_right"}
                  </span>
                </button>
                {open && (
                  <div
                    className={cx(
                      "mt-1.5 ml-5 space-y-1 border-l pl-3",
                      dark ? "border-slate-700/60" : "border-slate-200",
                    )}
                  >
                    {item.groups?.map((group) => {
                      const gOpen = openGroups.includes(group.id);
                      return (
                        <div key={group.id}>
                          <button
                            type="button"
                            aria-expanded={gOpen}
                            onClick={() => toggleGroup(group.id)}
                            className="flex w-full items-center gap-2 px-2 py-1.5 text-left text-xs font-semibold"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            {group.label}
                            <span className="material-symbols-outlined ml-auto text-sm">
                              {gOpen ? "expand_more" : "chevron_right"}
                            </span>
                          </button>
                          {gOpen && (
                            <div
                              className={cx(
                                "mt-1 ml-3 space-y-1 border-l pl-3",
                                dark
                                  ? "border-slate-700/60"
                                  : "border-slate-200",
                              )}
                            >
                              {group.children.map((child) => (
                                <button
                                  key={child.id}
                                  type="button"
                                  onClick={() => go(child.id)}
                                  className={cx(
                                    "flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-[11px]",
                                    activeId === child.id
                                      ? dark
                                        ? "border border-blue-800/40 bg-blue-950/60 font-semibold text-blue-300"
                                        : "bg-blue-100/60 font-semibold text-blue-700"
                                      : dark
                                        ? "text-slate-400 hover:text-slate-200"
                                        : "text-slate-500 hover:text-slate-900",
                                  )}
                                >
                                  {child.label}
                                  {activeId === child.id && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                                  )}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {item.links?.map((link) => (
                      <button
                        key={link.id}
                        type="button"
                        onClick={() => go(link.id)}
                        className="w-full rounded px-2 py-1.5 text-left text-xs font-medium"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <hr
            className={cx(
              "my-2",
              dark ? "border-slate-700/60" : "border-slate-100",
            )}
          />

          {SIDEBAR_SECONDARY.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={cx(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                dark
                  ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
              )}
            >
              <span className="material-symbols-outlined text-xl">
                {item.icon}
              </span>
              {item.label}
              {item.badge !== undefined && (
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div
        className={cx(
          "flex items-center justify-between border-t pt-3",
          dark ? "border-slate-700/60" : "border-slate-100",
        )}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            className={cx(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
              dark ? "bg-stone-700 text-slate-100" : "bg-slate-800 text-white",
            )}
          >
            {SHELL_USER.initials}
          </span>
          <div className="min-w-0 leading-tight">
            <p
              className={cx(
                "truncate text-xs font-bold",
                dark ? "text-white" : "text-slate-900",
              )}
            >
              {SHELL_USER.name}
            </p>
            <p className="max-w-[150px] truncate text-[11px] text-slate-400">
              {SHELL_USER.email}
            </p>
          </div>
        </div>
        <button
          type="button"
          title="Settings"
          aria-label="Settings"
          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:text-slate-700"
        >
          <span className="material-symbols-outlined text-lg">settings</span>
        </button>
      </div>
    </aside>
  );
}
