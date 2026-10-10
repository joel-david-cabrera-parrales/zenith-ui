import { useId, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  type ShellTone,
  type NavItem,
  filterNav,
  SIDEBAR_NAV,
  SIDEBAR_SECONDARY,
  SHELL_USER,
} from "../interfaces/navigation.interface";

export interface SidebarProps {
  tone?: ShellTone;
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
}

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(" ");

interface NavButtonProps {
  item: NavItem;
  dark: boolean;
  active: boolean;
  onClick: () => void;
}

const NavButton = ({ item, dark, active, onClick }: NavButtonProps) => {
  return (
    <button
      type="button"
      title={item.label}
      aria-label={item.label}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={cx(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? dark
            ? "border border-slate-700/40 bg-slate-800/80 font-semibold text-white"
            : "bg-blue-50/70 font-semibold text-blue-600"
          : dark
            ? "text-slate-300 hover:bg-slate-800 hover:text-white"
            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
      )}
    >
      <span className="material-symbols-outlined text-xl">{item.icon}</span>
      {item.label}
      {item.badge !== undefined && (
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white">
          {item.badge}
        </span>
      )}
    </button>
  );
};

interface RailButtonProps {
  item: NavItem;
  dark: boolean;
  active: boolean;
  onClick: () => void;
}

const RailButton = ({ item, dark, active, onClick }: RailButtonProps) => {
  return (
    <span className="relative flex w-full items-center justify-center py-1">
      {active && (
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
        aria-current={active ? "page" : undefined}
        onClick={onClick}
        className={cx(
          "relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
          active
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

export const Sidebar = ({
  tone = "light",
  collapsed = true,
  onToggleCollapsed,
}: SidebarProps) => {
  const dark = tone === "dark";
  const searchId = useId();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const nav = filterNav(query);

  const go = (route: string | undefined) => {
    if (route) {
      navigate(route);
    }
  };

  const isActive = (route: string | undefined): boolean => {
    if (!route) return false;
    return location.pathname === route || location.pathname.startsWith(route + "/");
  };

  if (collapsed) {
    return (
      <div className="relative flex h-full flex-1 self-stretch">
        <aside
          aria-label="Sidebar colapsado"
          className={cx(
            "z-10 flex h-full w-16 flex-col items-center self-stretch rounded-none border-y-0 border-l-0 py-5",
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
          <nav className="flex w-full flex-col items-center gap-2">
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
                active={isActive(item.route)}
                onClick={() => go(item.route)}
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
                active={isActive(item.route)}
                onClick={() => go(item.route)}
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
      </div>
    );
  }

  return (
    <aside
      aria-label="Sidebar de navegación"
      className={cx(
        "flex h-full w-[305px] flex-1 flex-col justify-between self-stretch rounded-none border-y-0 border-l-0 p-5 select-none",
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
                Zenith UI
              </h2>
              <p className="text-[11px] font-medium text-slate-400">
                Component Library
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Colapsar sidebar"
            onClick={onToggleCollapsed}
            className="rounded-lg p-1 text-slate-400 transition-colors hover:text-slate-700"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
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
          {nav.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              dark={dark}
              active={isActive(item.route)}
              onClick={() => go(item.route)}
            />
          ))}

          <hr
            className={cx(
              "my-2",
              dark ? "border-slate-700/60" : "border-slate-100",
            )}
          />

          {SIDEBAR_SECONDARY.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              dark={dark}
              active={isActive(item.route)}
              onClick={() => go(item.route)}
            />
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
};