import { useState } from "react";
import { Outlet } from "react-router";
import { DeepSidebar } from "../../shared/components/sidebar/DeepSidebar";
import { Topbar } from "../../shared/components/topbar/Topbar";
import type { ShellTone } from "../../shared/components/interfaces/navigation.interface";

export const FeaturesLayout = () => {
  const [tone, setTone] = useState<ShellTone>("light");
  const dark = tone === "dark";

  const toggleTone = () => {
    setTone((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={
        dark
          ? "min-h-screen w-full bg-slate-900 text-slate-200"
          : "min-h-screen w-full bg-slate-300 text-slate-800"
      }
    >
      {/* Sidebar - Fixed left, full height, same level as topbar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 w-[350px] h-screen
          transition-all duration-200 ease-out
          ${dark ? "border-r border-slate-700/60 bg-slate-950" : "border-r border-slate-200/70 bg-white"}
        `}
        aria-label="Sidebar de navegación"
      >
        <DeepSidebar tone={tone} />
      </aside>

      {/* Main content area - offset by sidebar */}
      <div className="flex-1 min-w-0 ml-[350px]">
        {/* Topbar - Fixed top */}
        <header className={`sticky top-0 z-30 ${dark ? "bg-slate-900/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"}`}>
          <Topbar tone={tone} onToggleTheme={toggleTone} />
        </header>

        {/* Scrollable content */}
        <main className={dark ? "bg-slate-900" : "bg-slate-100"}>
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
