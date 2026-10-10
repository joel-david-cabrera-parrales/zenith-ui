import { type ReactNode, useState } from "react";
import { Sidebar } from "../shared/components/sidebar/Sidebar";
import { Topbar } from "../shared/components/topbar/Topbar";
import type { ShellTone } from "../shared/components/interfaces/navigation.interface";

export interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [tone, setTone] = useState<ShellTone>("light");
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState("event-list");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExiting, setMobileExiting] = useState(false);
  const dark = tone === "dark";

  function toggleTone() {
    setTone((prev) => (prev === "light" ? "dark" : "light"));
  }

  function toggleCollapsed() {
    setCollapsed((prev) => !prev);
  }

  function openMobile() {
    setMobileExiting(false);
    setMobileOpen(true);
  }

  function closeMobile() {
    setMobileExiting(true);
    window.setTimeout(() => {
      setMobileOpen(false);
      setMobileExiting(false);
    }, 200);
  }

  function navigate(id: string) {
    setActiveId(id);
    closeMobile();
  }

  return (
    <div
      className={
        dark
          ? "flex min-h-screen w-full bg-slate-900 text-slate-200"
          : "flex min-h-screen w-full bg-slate-300 text-slate-800"
      }
    >
      <div className="hidden shrink-0 self-stretch md:flex">
        <Sidebar
          tone={tone}
          collapsed={collapsed}
          activeId={activeId}
          onNavigate={setActiveId}
          onToggleCollapsed={toggleCollapsed}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar tone={tone} onToggleTheme={toggleTone} onMenu={openMobile} />
        <main
          className={
            dark
              ? "min-w-0 flex-1 bg-slate-900 p-6"
              : "min-w-0 flex-1 bg-slate-100 p-6"
          }
        >
          {children}
        </main>
      </div>
      {(mobileOpen || mobileExiting) && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMobile}
            className={
              mobileExiting
                ? "absolute inset-0 animate-overlay-out bg-slate-950/50"
                : "absolute inset-0 animate-overlay-in bg-slate-950/50"
            }
          />
          <div
            className={
              mobileExiting
                ? "absolute top-0 bottom-0 left-0 flex w-[305px] max-w-[85vw] animate-drawer-left-out"
                : "absolute top-0 bottom-0 left-0 flex w-[305px] max-w-[85vw] animate-drawer-left-in"
            }
          >
            <Sidebar
              tone={tone}
              collapsed={false}
              activeId={activeId}
              onNavigate={navigate}
              onToggleCollapsed={closeMobile}
            />
          </div>
        </div>
      )}
    </div>
  );
}
