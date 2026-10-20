import { useState } from "react";
import { Outlet } from "react-router";
import { DeepSidebar } from "../../shared/components/sidebar/DeepSidebar";
import { Topbar } from "../../shared/components/topbar/Topbar";
import type { ShellTone } from "../../shared/components/interfaces/navigation.interface";

export const FeaturesLayout = () => {
  const [tone, setTone] = useState<ShellTone>("light");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExiting, setMobileExiting] = useState(false);
  const dark = tone === "dark";

  const toggleTone = () => {
    setTone((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const openMobile = () => {
    setMobileExiting(false);
    setMobileOpen(true);
  };

  const closeMobile = () => {
    setMobileExiting(true);
    window.setTimeout(() => {
      setMobileOpen(false);
      setMobileExiting(false);
    }, 200);
  };

  return (
    <div
      className={
        dark
          ? "min-h-screen w-full bg-slate-900 text-slate-200"
          : "min-h-screen w-full bg-slate-300 text-slate-800"
      }
    >
      {/* Sidebar - Fixed left, full height */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-[350px] h-screen
          transition-all duration-200 ease-out
          ${dark ? "border-r border-slate-700/60 bg-slate-950" : "border-r border-slate-200/70 bg-white"}
        `}
        aria-label="Sidebar de navegación"
      >
        <DeepSidebar
          tone={tone}
          collapsed={collapsed}
          onToggleCollapsed={toggleCollapsed}
        />
      </aside>

      {/* Main content area - offset by sidebar */}
      <div className="flex-1 min-w-0 transition-all duration-200 ml-[350px]">
        {/* Topbar - Fixed top */}
        <header className={`sticky top-0 z-30 ${dark ? "bg-slate-900/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"}`}>
          <Topbar tone={tone} onToggleTheme={toggleTone} onMenu={openMobile} />
        </header>

        {/* Scrollable content */}
        <main className={dark ? "bg-slate-900" : "bg-slate-100"}>
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
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
                ? "absolute top-0 bottom-0 left-0 flex w-[350px] max-w-[85vw] animate-drawer-left-out"
                : "absolute top-0 bottom-0 left-0 flex w-[350px] max-w-[85vw] animate-drawer-left-in"
            }
          >
            <DeepSidebar
              tone={tone}
              collapsed={false}
              onToggleCollapsed={closeMobile}
            />
          </div>
        </div>
      )}
    </div>
  );
};