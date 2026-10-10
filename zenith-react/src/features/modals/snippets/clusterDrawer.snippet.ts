export const CLUSTER_DRAWER_HTML = `<button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
  <span class="material-symbols-outlined text-base text-blue-600">view_sidebar</span>
  <span>Drawer Ancho / Formulario Complejo (Right - 640px)</span>
</button>
<div class="fixed inset-0 z-50">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="fixed right-0 top-0 bottom-0 animate-drawer-right-in w-full max-w-2xl bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col">
    <h3 class="text-base font-bold text-slate-900">Configuración Avanzada de Clúster</h3>
    <div class="flex-1 overflow-y-auto py-6 space-y-6 text-xs text-slate-600">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block font-medium text-slate-700 mb-1">Identificador de Instancia</label>
          <input type="text" value="zenith-node-prod-alpha" class="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-xs focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label class="block font-medium text-slate-700 mb-1">Capacidad de CPU Asignada</label>
          <select class="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-xs focus:outline-none focus:border-blue-500">
            <option>4 vCPU - 16 GB RAM</option>
            <option selected>8 vCPU - 32 GB RAM (Recomendado)</option>
          </select>
        </div>
      </div>
      <div class="p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-[11px] space-y-1">
        <p class="text-emerald-400">PORT=8080</p>
        <p class="text-blue-400">NODE_ENV="production"</p>
      </div>
    </div>
    <div class="pt-4 border-t border-slate-100 flex justify-end gap-3">
      <button type="button" class="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Cancelar</button>
      <button type="button" class="px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Guardar y Desplegar</button>
    </div>
  </div>
</div>`;

export const CLUSTER_DRAWER_TSX = `export const ClusterDrawer = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-blue-600">view_sidebar</span>
        <span>Drawer Ancho / Formulario Complejo (Right - 640px)</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="fixed right-0 top-0 bottom-0 animate-drawer-right-in w-full max-w-2xl bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col">
            <h3 className="text-base font-bold text-slate-900">Configuración Avanzada de Clúster</h3>
            <div className="flex-1 overflow-y-auto py-6 space-y-6 text-xs text-slate-600">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Identificador de Instancia</label>
                  <input type="text" defaultValue="zenith-node-prod-alpha" className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-xs focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Capacidad de CPU Asignada</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-xs focus:outline-none focus:border-blue-500" defaultValue="8 vCPU - 32 GB RAM (Recomendado)">
                    <option>4 vCPU - 16 GB RAM</option>
                    <option>8 vCPU - 32 GB RAM (Recomendado)</option>
                  </select>
                </div>
              </div>
              <div className="p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-[11px] space-y-1">
                <p className="text-emerald-400">PORT=8080</p>
                <p className="text-blue-400">NODE_ENV="production"</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button type="button" onClick={close} className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Cancelar</button>
              <button type="button" onClick={close} className="px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Guardar y Desplegar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};`;
