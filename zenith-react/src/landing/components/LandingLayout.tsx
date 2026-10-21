import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { Button } from "@/features/botones/components/Button";
import { useTheme } from "@/shared/hooks/useTheme";

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(" ");

const LANDING_LINKS = [
  { to: "/landing/home", label: "Home" },
  { to: "/landing/about", label: "About" },
  { to: "/landing/services", label: "Services" },
] as const;

export const LandingLayout = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();
  const [open, setOpen] = useState(false);

  const goCatalog = () => {
    navigate("/");
  };

  const goRegister = () => {
    navigate("/auth/register");
  };

  return (
    <div className={cx("min-h-screen w-full antialiased", dark ? "bg-slate-950 text-slate-200" : "bg-slate-100 text-slate-800")}>
      <header className={cx("sticky top-0 z-30 border-b backdrop-blur-md", dark ? "border-slate-800/60 bg-slate-950/90" : "border-slate-200/70 bg-white/85")}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => navigate("/landing/home")}
            className="flex items-center gap-2.5"
            aria-label="Zenith - ir a home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-xl">
                star
              </span>
            </span>
            <span className="leading-tight">
              <span className={cx("block text-sm font-bold tracking-tight", dark ? "text-white" : "text-slate-900")}>
                Zenith
              </span>
              <span className={cx("block font-mono text-[9px] font-semibold tracking-widest uppercase", dark ? "text-slate-400" : "text-slate-400")}>
                Ejemplos UI
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación landing">
            {LANDING_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cx(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? dark
                        ? "bg-blue-900/20 text-blue-400"
                        : "bg-blue-50 text-blue-700"
                      : dark
                        ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm" leadingIcon="arrow_back" onClick={goCatalog}>
              Catálogo
            </Button>
            <Button variant="primary" size="sm" trailingIcon="arrow_forward" onClick={goRegister}>
              Empezar
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={cx("flex h-10 w-10 items-center justify-center rounded-xl", dark ? "text-slate-400 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100", "md:hidden")}
          >
            <span aria-hidden="true" className="material-symbols-outlined text-2xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>

        {open && (
          <nav className={cx("border-t", dark ? "border-slate-800 bg-slate-950" : "border-slate-200/70 bg-white", "px-4 py-3 md:hidden")} aria-label="Navegación landing móvil">
            <div className="flex flex-col gap-1">
              {LANDING_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cx(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? dark
                          ? "bg-blue-900/20 text-blue-400"
                          : "bg-blue-50 text-blue-700"
                        : dark
                          ? "text-slate-400 hover:bg-slate-800"
                          : "text-slate-600 hover:bg-slate-100",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" onClick={goCatalog}>
                  Catálogo
                </Button>
                <Button variant="primary" size="sm" className="flex-1" onClick={goRegister}>
                  Empezar
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className={cx("border-t", dark ? "border-white/10 bg-slate-950 text-slate-300" : "border-slate-200 bg-white text-slate-600")}>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className={cx("flex h-9 w-9 items-center justify-center rounded-xl", dark ? "bg-slate-800 text-white" : "bg-white text-slate-900")}>
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  star
                </span>
              </span>
              <span className={cx("text-sm font-bold", dark ? "text-white" : "text-slate-900")}>Zenith</span>
            </div>
            <p className={cx("mt-3 max-w-xs text-sm leading-relaxed", dark ? "text-slate-400" : "text-slate-400")}>
              Ejemplos construidos solo con componentes del catálogo Zenith UI.
            </p>
          </div>
          <div>
            <p className={cx("font-mono text-[10px] font-bold tracking-widest uppercase", dark ? "text-slate-400" : "text-slate-500")}>
              Páginas
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><NavLink to="/landing/home" className={dark ? "hover:text-white" : "hover:text-slate-900"}>Home</NavLink></li>
              <li><NavLink to="/landing/about" className={dark ? "hover:text-white" : "hover:text-slate-900"}>About</NavLink></li>
              <li><NavLink to="/landing/services" className={dark ? "hover:text-white" : "hover:text-slate-900"}>Services</NavLink></li>
            </ul>
          </div>
          <div>
            <p className={cx("font-mono text-[10px] font-bold tracking-widest uppercase", dark ? "text-slate-400" : "text-slate-500")}>
              Cuenta
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><NavLink to="/auth/login" className={dark ? "hover:text-white" : "hover:text-slate-900"}>Login</NavLink></li>
              <li><NavLink to="/auth/register" className={dark ? "hover:text-white" : "hover:text-slate-900"}>Registro</NavLink></li>
              <li><NavLink to="/auth/forgot" className={dark ? "hover:text-white" : "hover:text-slate-900"}>Recuperar acceso</NavLink></li>
            </ul>
          </div>
          <div>
            <p className={cx("font-mono text-[10px] font-bold tracking-widest uppercase", dark ? "text-slate-400" : "text-slate-500")}>
              Catálogo
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><NavLink to="/" className={dark ? "hover:text-white" : "hover:text-slate-900"}>Volver al catálogo</NavLink></li>
              <li><NavLink to="/helper/404" className={dark ? "hover:text-white" : "hover:text-slate-900"}>Demo 404</NavLink></li>
              <li><NavLink to="/helper/500" className={dark ? "hover:text-white" : "hover:text-slate-900"}>Demo 500</NavLink></li>
            </ul>
          </div>
        </div>
        <div className={cx("border-t", dark ? "border-white/10" : "border-slate-200")}>
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs sm:flex-row sm:px-6">
            <span className={dark ? "text-slate-400" : "text-slate-500"}>© 2026 Zenith UI — páginas de ejemplo</span>
            <span className="font-mono text-[10px]">SLATE / BLUE · TAILWIND</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
