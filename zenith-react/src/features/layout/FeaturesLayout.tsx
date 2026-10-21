import { useState } from "react";
import { Outlet } from "react-router";
import { DeepSidebar } from "../../shared/components/sidebar/DeepSidebar";
import { Topbar } from "../../shared/components/topbar/Topbar";
import { useTheme } from "@/shared/hooks/useTheme";
import { LanguageProvider } from "@/shared/context/LanguageProvider";

export const FeaturesLayout = () => {
  const { dark, toggleTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExiting, setMobileExiting] = useState(false);
  const tone = dark ? "dark" : "light";

  const toggleTone = toggleTheme;

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
    <LanguageProvider>
      <div
      className={`
        min-h-screen w-full
        grid
        ${collapsed ? "grid-cols-[64px_1fr]" : "grid-cols-1 lg:grid-cols-[350px_1fr]"}
        ${dark ? "bg-slate-900 text-slate-200" : "bg-slate-300 text-slate-800"}
      `}
    >
      {/* Sidebar - Grid item, full height desktop; hidden on mobile */}
      <aside
        className={`
          h-screen sticky top-0 z-40
          transition-all duration-200 ease-out
          ${collapsed ? "w-16" : "w-[350px]"}
          ${dark ? "border-r border-slate-700/60 bg-slate-950" : "border-r border-slate-200/70 bg-white"}
          hidden lg:flex
        `}
        aria-label="Sidebar de navegación"
      >
        <DeepSidebar
          tone={tone}
          collapsed={collapsed}
          onToggleCollapsed={toggleCollapsed}
        />
      </aside>

      {/* Main content area - Grid item */}
      <div className="flex flex-col min-w-0">
        {/* Topbar - Fixed top */}
        <header className={`sticky top-0 z-30 ${dark ? "bg-slate-900/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"}`}>
          <Topbar tone={tone} onToggleTheme={toggleTone} onMenu={openMobile} onCollapse={toggleCollapsed} collapsed={collapsed} />
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-900">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {(mobileOpen || mobileExiting) && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
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
    </LanguageProvider>
  );
};
