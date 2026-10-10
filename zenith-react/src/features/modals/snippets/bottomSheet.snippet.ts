export const BOTTOM_SHEET_HTML = `<button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
  <span class="material-symbols-outlined text-base text-slate-600">vertical_align_bottom</span>
  <span>Bottom Sheet / Drawer Inferior</span>
</button>
<div class="fixed inset-0 z-50 flex flex-col justify-end">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="relative w-full max-w-2xl animate-drawer-bottom-in mx-auto bg-white rounded-t-2xl shadow-2xl border-t border-slate-200 p-6">
    <div class="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-4"></div>
    <h3 class="text-base font-bold text-slate-900">Acciones Rápidas (Bottom Sheet)</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 text-xs">
      <button type="button" class="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 flex flex-col items-center gap-2 text-center transition-all">
        <span class="material-symbols-outlined text-blue-600 text-2xl">restart_alt</span>
        <span class="font-medium text-slate-800">Reiniciar Clúster</span>
      </button>
      <button type="button" class="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 flex flex-col items-center gap-2 text-center transition-all">
        <span class="material-symbols-outlined text-emerald-600 text-2xl">download_for_offline</span>
        <span class="font-medium text-slate-800">Exportar Dump SQL</span>
      </button>
      <button type="button" class="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 flex flex-col items-center gap-2 text-center transition-all">
        <span class="material-symbols-outlined text-amber-600 text-2xl">pause_circle</span>
        <span class="font-medium text-slate-800">Pausar Workers</span>
      </button>
      <button type="button" class="p-3 rounded-xl border border-slate-200 hover:border-rose-500 hover:bg-rose-50 flex flex-col items-center gap-2 text-center transition-all">
        <span class="material-symbols-outlined text-rose-600 text-2xl">lock_reset</span>
        <span class="font-medium text-slate-800">Revocar Sesiones</span>
      </button>
    </div>
    <button type="button" class="w-full py-2 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">Cerrar Hoja</button>
  </div>
</div>`;

export const BOTTOM_SHEET_TSX = `export const BottomSheet = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const actions = [
    { icon: 'restart_alt', label: 'Reiniciar Clúster', tone: 'text-blue-600', hover: 'hover:border-blue-500 hover:bg-blue-50/50' },
    { icon: 'download_for_offline', label: 'Exportar Dump SQL', tone: 'text-emerald-600', hover: 'hover:border-blue-500 hover:bg-blue-50/50' },
    { icon: 'pause_circle', label: 'Pausar Workers', tone: 'text-amber-600', hover: 'hover:border-blue-500 hover:bg-blue-50/50' },
    { icon: 'lock_reset', label: 'Revocar Sesiones', tone: 'text-rose-600', hover: 'hover:border-rose-500 hover:bg-rose-50' },
  ];
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-slate-600">vertical_align_bottom</span>
        <span>Bottom Sheet / Drawer Inferior</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex flex-col justify-end">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="relative w-full max-w-2xl animate-drawer-bottom-in mx-auto bg-white rounded-t-2xl shadow-2xl border-t border-slate-200 p-6">
            <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-base font-bold text-slate-900">Acciones Rápidas (Bottom Sheet)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 text-xs">
              {actions.map((action) => (
                <button key={action.label} type="button" onClick={close} className={'p-3 rounded-xl border border-slate-200 flex flex-col items-center gap-2 text-center transition-all ' + action.hover}>
                  <span className={'material-symbols-outlined text-2xl ' + action.tone}>{action.icon}</span>
                  <span className="font-medium text-slate-800">{action.label}</span>
                </button>
              ))}
            </div>
            <button type="button" onClick={close} className="w-full py-2 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">Cerrar Hoja</button>
          </div>
        </div>
      )}
    </>
  );
};`;
