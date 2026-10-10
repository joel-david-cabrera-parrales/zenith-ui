export const SETTINGS_PANEL_HTML = `
<button
  type="button"
  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors shadow-sm"
>
  <span class="material-symbols-outlined text-base">dock_to_right</span>
  <span>Drawer / Panel Lateral Deslizante</span>
</button>
<div class="fixed inset-0 z-50">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div
    class="fixed right-0 top-0 bottom-0 animate-drawer-right-in w-full max-w-md bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col"
  >
    <h3 class="text-base font-bold text-slate-900">Panel de Parámetros Globales</h3>
    <div class="flex-1 overflow-y-auto py-6 space-y-6 text-xs">
      <div>
        <h4 class="font-semibold text-slate-900 mb-2">Entorno de Ejecución</h4>
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 font-mono text-[11px]">
          <div class="flex justify-between">
            <span class="text-slate-500">ENV:</span><span class="text-blue-600 font-bold">production-cluster-01</span>
          </div>
          <div class="flex justify-between"><span class="text-slate-500">Node:</span><span>v20.12.2 LTS</span></div>
        </div>
      </div>
      <div>
        <h4 class="font-semibold text-slate-900 mb-2">Variables de Seguridad</h4>
        <label class="flex items-center justify-between p-3 border border-slate-200 rounded-xl mb-2">
          <span>Forzar HTTPS & SSL estricto</span>
          <input type="checkbox" checked class="w-4 h-4 text-blue-600 rounded" />
        </label>
      </div>
    </div>
    <div class="pt-4 border-t border-slate-100">
      <button
        type="button"
        class="w-full py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Guardar Parámetros
      </button>
    </div>
  </div>
</div>
`;

export const SETTINGS_PANEL_TSX = `
export const SettingsPanel = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-base">dock_to_right</span>
        <span>Drawer / Panel Lateral Deslizante</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="fixed right-0 top-0 bottom-0 animate-drawer-right-in w-full max-w-md bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col">
            <h3 className="text-base font-bold text-slate-900">Panel de Parámetros Globales</h3>
            <div className="flex-1 overflow-y-auto py-6 space-y-6 text-xs">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Entorno de Ejecución</h4>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500">ENV:</span>
                    <span className="text-blue-600 font-bold">production-cluster-01</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Node:</span>
                    <span>v20.12.2 LTS</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Variables de Seguridad</h4>
                <label className="flex items-center justify-between p-3 border border-slate-200 rounded-xl mb-2">
                  <span>Forzar HTTPS & SSL estricto</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                </label>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={close}
                className="w-full py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Guardar Parámetros
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
`;
