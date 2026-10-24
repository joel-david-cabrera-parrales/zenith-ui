import { Link, Outlet, useNavigate } from "react-router";
import { Button } from "@/features/botones/components/Button";

const HIGHLIGHTS = [
  { icon: "bolt", title: "Ingesta en vivo", text: "2.4M eventos/s por clúster" },
  { icon: "shield", title: "SSO + auditoría", text: "RBAC por workspace" },
  { icon: "monitoring", title: "SLO públicos", text: "99.99% de uptime" },
] as const;

export const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div data-theme="light" className="min-h-screen w-full bg-slate-100 antialiased text-slate-800">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Panel marca */}
        <aside className="relative hidden overflow-hidden bg-slate-900 text-white lg:flex lg:flex-col lg:justify-between lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(37,99,235,0.15),transparent),radial-gradient(50%_40%_at_90%_90%,rgba(37,99,235,0.1),transparent)]"
            />
          <div className="relative flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate("/landing/home")}
              className="flex items-center gap-2.5"
              aria-label="Zenith - ir a landing"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900">
                <span aria-hidden="true" className="material-symbols-outlined text-2xl">
                  star
                </span>
              </span>
              <span className="text-base font-bold tracking-tight">Zenith</span>
            </button>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-blue-300 uppercase">
              Ejemplos UI
            </span>
          </div>

          <div className="relative">
            <h1 className="max-w-md text-4xl font-extrabold tracking-tight">
              La consola que tu equipo va a amar
            </h1>
            <p className="mt-3 max-w-md leading-relaxed text-slate-300">
              Autenticación de ejemplo construida solo con `TextInput`, `PasswordInput`,
              `Switch` y `Button` del catálogo.
            </p>
            <ul className="mt-8 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <span aria-hidden="true" className="material-symbols-outlined text-xl">
                      {item.icon}
                    </span>
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{item.title}</span>
                    <span className="block text-xs text-slate-400">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="relative font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            Slate / Blue · Tailwind · Demo sin backend
          </p>
        </aside>

        {/* Panel formulario */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 sm:px-8">
            <Button variant="ghost" size="sm" leadingIcon="arrow_back" onClick={() => navigate("/")}>
              Catálogo
            </Button>
            <Link
              to="/landing/home"
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 lg:hidden"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                <span aria-hidden="true" className="material-symbols-outlined text-lg">
                  star
                </span>
              </span>
              Zenith
            </Link>
            <span className="w-24 lg:hidden" />
          </div>

          <div className="grid flex-1 place-items-center px-4 pb-10 sm:px-8">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <Outlet />
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Páginas de ejemplo · los datos no salen de tu navegador
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
