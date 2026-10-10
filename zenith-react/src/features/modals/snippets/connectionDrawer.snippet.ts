export const CONNECTION_DRAWER_HTML = `<button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
  <span class="material-symbols-outlined text-base text-blue-600">dock_to_right</span>
  <span>Drawer Derecho Estándar (Right - 450px)</span>
</button>
<div class="fixed inset-0 z-50">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="fixed right-0 top-0 bottom-0 animate-drawer-right-in w-full max-w-md bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col">
    <h3 class="text-base font-bold text-slate-900">Detalles de Conexión</h3>
    <div class="flex-1 overflow-y-auto py-5 space-y-5 text-xs text-slate-600">
      <div class="p-3.5 bg-blue-50/50 border border-blue-100 rounded-xl">
        <p class="font-medium text-slate-800">Estado de Servicio: En línea</p>
        <p class="text-[11px] text-slate-500">Conexión TLS 1.3 autenticada vía Zenith Gateway.</p>
      </div>
      <label class="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer">
        <span class="font-medium text-slate-800">Sincronización en segundo plano</span>
        <input type="checkbox" checked class="w-4 h-4 text-blue-600 rounded" />
      </label>
    </div>
    <div class="pt-4 border-t border-slate-100 flex gap-2">
      <button type="button" class="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Cancelar</button>
      <button type="button" class="flex-1 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Aplicar Cambios</button>
    </div>
  </div>
</div>`;

export const CONNECTION_DRAWER_TSX = `export const ConnectionDrawer = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-blue-600">dock_to_right</span>
        <span>Drawer Derecho Estándar (Right - 450px)</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="fixed right-0 top-0 bottom-0 animate-drawer-right-in w-full max-w-md bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col">
            <h3 className="text-base font-bold text-slate-900">Detalles de Conexión</h3>
            <div className="flex-1 overflow-y-auto py-5 space-y-5 text-xs text-slate-600">
              <div className="p-3.5 bg-blue-50/50 border border-blue-100 rounded-xl">
                <p className="font-medium text-slate-800">Estado de Servicio: En línea</p>
                <p className="text-[11px] text-slate-500">Conexión TLS 1.3 autenticada vía Zenith Gateway.</p>
              </div>
              <label className="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer">
                <span className="font-medium text-slate-800">Sincronización en segundo plano</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              </label>
            </div>
            <div className="pt-4 border-t border-slate-100 flex gap-2">
              <button type="button" onClick={close} className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Cancelar</button>
              <button type="button" onClick={close} className="flex-1 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Aplicar Cambios</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};`;
