import { useId, useRef, useState, useEffect } from "react";
import {
  type ShellTone,
  SHELL_USER,
  TOPBAR_RESULTS,
  SHELL_NOTIFICATIONS,
} from "../interfaces/navigation.interface";

export interface TopbarProps {
  tone?: ShellTone;
  onToggleTheme?: () => void;
  onMenu?: () => void;
}

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(" ");

type Popover = "none" | "search" | "notifications" | "profile";

export const Topbar = ({ tone = "light", onToggleTheme, onMenu }: TopbarProps) => {
  const dark = tone === "dark";
  const searchId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("Keynote");
  const [popover, setPopover] = useState<Popover>("none");
  const [exiting, setExiting] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const open = (which: Popover) => {
    setExiting(false);
    setPopover(which);
  };

  const close = () => {
    setExiting(true);
    window.setTimeout(() => {
      setPopover("none");
      setExiting(false);
    }, 200);
  };

  const toggle = (which: Popover) => {
    if (popover === which) close();
    else open(which);
  };

  const dismiss = () => {
    close();
    setMobileSearch(false);
  };

  useEffect(() => {
    if (popover === "none" && !mobileSearch) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        dismiss();
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  const anim = exiting ? "animate-overlay-out" : "animate-overlay-in";

  return (
    <div ref={rootRef} className="relative">
      <header
        className={cx(
          "flex items-center justify-between gap-3 rounded-none border-x-0 border-t-0 px-3 py-2.5 sm:px-5 sm:py-3",
          dark
            ? "border-slate-700/60 bg-slate-950 text-slate-200 shadow-[0_25px_40px_-10px_rgba(0,0,0,0.5)]"
            : "border-slate-200/80 bg-white text-slate-800 shadow-[0_20px_35px_-10px_rgba(0,0,0,0.08)]",
        )}
      >
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            title="Menú de navegación"
            aria-label="Menú de navegación"
            onClick={onMenu}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 md:hidden"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
          <div className="flex min-w-0 items-center gap-3 md:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white ring-1 ring-slate-100">
              <span className="material-symbols-outlined text-xl">star</span>
            </div>
          </div>
        </div>

        <div className="mx-2 hidden max-w-xl flex-1 lg:flex">
          <div className="relative w-full">
            <span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-lg text-blue-600">
              search
            </span>
            <input
              id={searchId}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (popover !== "search") open("search");
              }}
              onFocus={() => open("search")}
              placeholder="Buscar eventos, salas, comandos..."
              className={cx(
                "w-full rounded-xl border-2 py-2 pr-24 pl-10 text-sm focus:outline-none",
                dark
                  ? "border-slate-700/80 bg-slate-900 text-slate-200 placeholder-slate-500"
                  : "border-blue-600 bg-white text-slate-800 placeholder-slate-400",
              )}
            />
            <span className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-2">
              {query !== "" && (
                <button
                  type="button"
                  aria-label="Limpiar búsqueda"
                  onClick={() => setQuery("")}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-500"
                >
                  <span className="material-symbols-outlined text-sm">
                    close
                  </span>
                </button>
              )}
              <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">
                {dark ? "⌘K" : "ESC"}
              </kbd>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            aria-label="Buscar"
            onClick={() => setMobileSearch(true)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 lg:hidden"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
          <button
            type="button"
            title="Documentación"
            aria-label="Documentación"
            className="hidden h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 lg:flex"
          >
            <span className="material-symbols-outlined text-xl">help</span>
          </button>
          <button
            type="button"
            title={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            onClick={onToggleTheme}
            className="hidden h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 sm:flex"
          >
            <span className="material-symbols-outlined text-xl">
              {dark ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button
            type="button"
            aria-label="Notificaciones"
            onClick={() => toggle("notifications")}
            className={cx(
              "relative flex h-9 w-9 items-center justify-center rounded-xl",
              dark
                ? "text-slate-300 hover:bg-slate-800"
                : "text-slate-600 hover:bg-slate-100",
            )}
          >
            <span className="material-symbols-outlined text-xl">
              notifications
            </span>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white ring-2 ring-white">
              5
            </span>
          </button>
          <span className="hidden h-6 w-px bg-slate-200 sm:block" />
          <button
            type="button"
            onClick={() => toggle("profile")}
            aria-expanded={popover === "profile"}
            className={cx(
              "flex items-center gap-2 rounded-xl border border-transparent px-1.5 py-1",
              dark
                ? "hover:bg-slate-800"
                : "hover:border-slate-200 hover:bg-slate-50",
            )}
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-xs font-bold text-white">
              {SHELL_USER.initials}
              <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
            </span>
            <span className="hidden text-left leading-tight md:block">
              <span className="block text-xs font-bold">{SHELL_USER.name}</span>
              <span className="block max-w-[150px] truncate text-[11px] text-slate-400">
                {SHELL_USER.email}
              </span>
            </span>
            <span
              className={cx(
                "material-symbols-outlined text-lg text-slate-400",
                popover === "profile" && "rotate-180 text-blue-500",
              )}
            >
              expand_more
            </span>
          </button>
        </div>
      </header>

      {mobileSearch && (
        <div
          className={cx(
            "absolute inset-0 z-50 flex items-center gap-2 rounded-none border p-3 lg:hidden",
            dark
              ? "border-slate-700/60 bg-slate-950"
              : "border-slate-200 bg-white",
          )}
        >
          <span className="material-symbols-outlined text-xl text-blue-600">
            search
          </span>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (popover !== "search") open("search");
            }}
            placeholder="Buscar eventos, salas, comandos..."
            className="w-full rounded-lg bg-slate-50 px-3 py-2 text-sm focus:outline-none"
          />
          <button
            type="button"
            aria-label="Cerrar búsqueda"
            onClick={dismiss}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
      )}

      {popover === "search" && query.trim() !== "" && (
        <div
          className={cx(
            "absolute top-full right-0 left-0 z-40 mx-auto mt-2 block max-w-2xl rounded-2xl border bg-white shadow-2xl",
            "border-slate-200/90",
            anim,
          )}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
            <p className="text-xs font-semibold">
              Resultados para: “{query}” (14 coincidencias)
            </p>
            <p className="text-[11px] text-slate-400">↑↓ para navegar</p>
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {TOPBAR_RESULTS.map((group) => (
              <div key={group.title} className="mt-1">
                <p className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold text-slate-400">
                  <span className="material-symbols-outlined text-sm">
                    {group.icon}
                  </span>
                  {group.title}
                </p>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={dismiss}
                    className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left hover:bg-blue-50/60"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                      {item.title.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-semibold">
                        {item.title}
                      </span>
                      <span className="block truncate text-[11px] text-slate-500">
                        {item.meta}
                      </span>
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                      {item.tag}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2.5 text-[11px] text-slate-500">
            <span>Presiona [⏎] para ver todos los 14 resultados</span>
            <button
              type="button"
              onClick={close}
              className="font-semibold text-slate-500"
            >
              [Esc] para cerrar
            </button>
          </div>
        </div>
      )}

      {(popover === "notifications" || popover === "profile") && (
        <div className="absolute top-full right-0 z-40 mt-2 w-full max-w-md">
          <div
            className={cx(
              "rounded-2xl border p-2 shadow-2xl",
              anim,
              dark
                ? "border-slate-700/80 bg-slate-950"
                : "border-slate-200 bg-white",
            )}
          >
            {popover === "notifications" ? (
              <>
                <div className="flex items-center justify-between px-2 py-1.5">
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <span className="material-symbols-outlined text-lg text-emerald-500">
                      notifications_active
                    </span>
                    Notificaciones
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                      5 nuevas
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Cerrar notificaciones"
                    className="rounded-lg p-1 text-slate-400 hover:bg-slate-100"
                  >
                    <span className="material-symbols-outlined text-lg">
                      close
                    </span>
                  </button>
                </div>
                <div className="space-y-1.5 p-1">
                  {SHELL_NOTIFICATIONS.map((n) => (
                    <div
                      key={n.id}
                      className={cx(
                        "rounded-xl border p-3",
                        dark
                          ? "border-slate-700/60 bg-slate-900"
                          : "border-slate-100 bg-slate-50/60",
                      )}
                    >
                      <p className="flex items-center gap-2 text-xs font-bold">
                        <span className="material-symbols-outlined text-base text-blue-600">
                          {n.icon}
                        </span>
                        {n.title}
                        <span className="ml-auto text-[11px] font-medium text-slate-400">
                          {n.time}
                        </span>
                      </p>
                      <p className="mt-1 text-xs text-slate-500">{n.body}</p>
                      <span className="mt-2 inline-block rounded-full bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-700">
                        {n.chip}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="mt-1 flex w-full items-center justify-center gap-1 rounded-xl py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Ver centro de notificaciones completo
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 p-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-white ring-2 ring-blue-500">
                    {SHELL_USER.initials}
                  </span>
                  <div className="leading-tight">
                    <p className="flex items-center gap-2 text-sm font-bold">
                      {SHELL_USER.name}
                      <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                        {SHELL_USER.role}
                      </span>
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {SHELL_USER.email}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-[11px] text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Activo en Workspace Central
                    </p>
                  </div>
                </div>
                <div className="space-y-0.5 border-t border-slate-100 p-1 pt-2">
                  {[
                    {
                      icon: "account_circle",
                      label: "Mi Cuenta y Perfil",
                      meta: "⌘P",
                    },
                    {
                      icon: "tune",
                      label: "Preferencias de Espacio",
                      meta: "→",
                    },
                    {
                      icon: "key",
                      label: "Claves API & Tokens",
                      meta: "3 activas",
                    },
                  ].map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-xs font-medium hover:bg-slate-50"
                    >
                      <span className="material-symbols-outlined text-lg text-slate-500">
                        {item.icon}
                      </span>
                      {item.label}
                      <span className="ml-auto text-[11px] text-slate-400">
                        {item.meta}
                      </span>
                    </button>
                  ))}
                  <div className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium">
                    <span className="material-symbols-outlined text-lg text-slate-500">
                      dark_mode
                    </span>
                    Modo Oscuro
                    <button
                      type="button"
                      role="switch"
                      aria-checked={dark}
                      aria-label="Modo oscuro"
                      onClick={onToggleTheme}
                      className={cx(
                        "ml-auto flex h-5 w-9 items-center rounded-full px-0.5",
                        dark
                          ? "justify-end bg-blue-600"
                          : "justify-start bg-slate-200",
                      )}
                    >
                      <span className="h-4 w-4 rounded-full bg-white" />
                    </button>
                  </div>
                </div>
                <div className="border-t border-slate-100 p-1 pt-2">
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-xs font-semibold text-red-500 hover:bg-red-50"
                  >
                    <span className="material-symbols-outlined text-lg">
                      logout
                    </span>
                    Cerrar Sesión
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
