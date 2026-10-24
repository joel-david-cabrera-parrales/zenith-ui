import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { Button } from "@/features/botones/components/Button";

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(" ");

const LANDING_LINKS = [
  { to: "/landing/home", label: "Home" },
  { to: "/landing/about", label: "About" },
  { to: "/landing/services", label: "Services" },
] as const;

export const LandingLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const goCatalog = () => {
    navigate("/");
  };

  const goRegister = () => {
    navigate("/auth/register");
  };

  return (
    <div data-theme="light" className="min-h-screen w-full bg-slate-100 antialiased text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
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
              <span className="block text-sm font-bold tracking-tight text-slate-900">
                Zenith
              </span>
              <span className="block font-mono text-[9px] font-semibold tracking-widest text-slate-400 uppercase">
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
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
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
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 md:hidden"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-2xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>

        {open && (
          <nav className="border-t border-slate-200/70 bg-white px-4 py-3 md:hidden" aria-label="Navegación landing móvil">
            <div className="flex flex-col gap-1">
              {LANDING_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cx(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100",
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

      <footer className="border-t border-slate-200 bg-white text-slate-600">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-900">
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  star
                </span>
              </span>
              <span className="text-sm font-bold text-slate-900">Zenith</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Ejemplos construidos solo con componentes del catálogo Zenith UI.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              Páginas
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><NavLink to="/landing/home" className="hover:text-slate-900">Home</NavLink></li>
              <li><NavLink to="/landing/about" className="hover:text-slate-900">About</NavLink></li>
              <li><NavLink to="/landing/services" className="hover:text-slate-900">Services</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs sm:flex-row sm:px-6">
            <span className="text-slate-500">© 2026 Zenith UI — páginas de ejemplo</span>
            <span className="font-mono text-[10px]">SLATE / BLUE · TAILWIND</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
