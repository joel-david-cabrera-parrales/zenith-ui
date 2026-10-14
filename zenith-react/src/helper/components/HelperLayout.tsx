import { Outlet, useNavigate } from "react-router";
import { Button } from "@/features/botones/components/Button";

export const HelperLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-800 antialiased">
      <header className="border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => navigate("/landing/home")}
            className="flex items-center gap-2.5"
            aria-label="Zenith - ir a landing"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
              <span aria-hidden="true" className="material-symbols-outlined text-xl">
                star
              </span>
            </span>
            <span className="text-sm font-bold tracking-tight text-slate-900">Zenith</span>
          </button>
          <Button variant="ghost" size="sm" leadingIcon="arrow_back" onClick={() => navigate("/")}>
            Catálogo
          </Button>
        </div>
      </header>
      <main className="mx-auto grid max-w-6xl flex-1 place-items-center px-4 py-14 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
};
