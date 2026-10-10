export const FILTERS_DRAWER_HTML = `<button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors shadow-sm">
  <span class="material-symbols-outlined text-base">filter_alt</span>
  <span>Drawer de Filtros & Búsqueda Avanzada</span>
</button>
<div class="fixed inset-0 z-50">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="fixed right-0 top-0 bottom-0 animate-drawer-right-in w-full max-w-md bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col">
    <h3 class="text-base font-bold text-slate-900">Filtros & Búsqueda Avanzada</h3>
    <div class="flex-1 overflow-y-auto py-5 space-y-5 text-xs text-slate-600">
      <div>
        <label class="block font-medium text-slate-700 mb-1.5">Término de búsqueda</label>
        <input type="text" placeholder="Buscar por token, usuario o IP..." class="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label class="block font-medium text-slate-700 mb-1.5">Nivel de Severidad</label>
        <div class="grid grid-cols-3 gap-2">
          <button type="button" class="py-1.5 px-2 rounded-lg border border-blue-500 bg-blue-50 text-blue-700 font-semibold text-center">Todos</button>
          <button type="button" class="py-1.5 px-2 rounded-lg border border-slate-200 text-slate-600 font-medium text-center">Info / OK</button>
          <button type="button" class="py-1.5 px-2 rounded-lg border border-slate-200 text-slate-600 font-medium text-center">Críticos</button>
        </div>
      </div>
      <div>
        <label class="block font-medium text-slate-700 mb-1.5">Microservicio Destino</label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked class="w-4 h-4 text-blue-600 rounded" />
          <span class="text-slate-700">auth-service-v2</span>
        </label>
      </div>
    </div>
    <div class="pt-4 border-t border-slate-100 flex gap-2">
      <button type="button" class="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Restablecer</button>
      <button type="button" class="flex-1 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Aplicar Filtros</button>
    </div>
  </div>
</div>`;

export const FILTERS_DRAWER_TSX = `export const FiltersDrawer = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [severity, setSeverity] = useState('Todos');
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base">filter_alt</span>
        <span>Drawer de Filtros & Búsqueda Avanzada</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="fixed right-0 top-0 bottom-0 animate-drawer-right-in w-full max-w-md bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col">
            <h3 className="text-base font-bold text-slate-900">Filtros & Búsqueda Avanzada</h3>
            <div className="flex-1 overflow-y-auto py-5 space-y-5 text-xs text-slate-600">
              <div>
                <label className="block font-medium text-slate-700 mb-1.5">Término de búsqueda</label>
                <input type="text" placeholder="Buscar por token, usuario o IP..." className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block font-medium text-slate-700 mb-1.5">Nivel de Severidad</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Todos', 'Info / OK', 'Críticos'].map((level) => (
                    <button key={level} type="button" onClick={() => setSeverity(level)} className={severity === level
                      ? 'py-1.5 px-2 rounded-lg border border-blue-500 bg-blue-50 text-blue-700 font-semibold text-center'
                      : 'py-1.5 px-2 rounded-lg border border-slate-200 text-slate-600 font-medium text-center'}>
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex gap-2">
              <button type="button" onClick={close} className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Restablecer</button>
              <button type="button" onClick={close} className="flex-1 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Aplicar Filtros</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};`;
