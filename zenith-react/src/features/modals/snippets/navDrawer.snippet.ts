export const NAV_DRAWER_HTML = `<button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
  <span class="material-symbols-outlined text-base text-slate-600">dock_to_left</span>
  <span>Drawer Izquierdo (Left Navigation)</span>
</button>
<div class="fixed inset-0 z-50">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="fixed left-0 top-0 bottom-0 animate-drawer-left-in w-full max-w-xs bg-white shadow-2xl border-r border-slate-200 p-6 flex flex-col">
    <h3 class="text-sm font-bold text-slate-900">Navegación Lateral</h3>
    <div class="flex-1 overflow-y-auto py-5 space-y-2 text-xs">
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold">
        <span class="material-symbols-outlined text-base">dashboard</span> Resumen Principal
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">
        <span class="material-symbols-outlined text-base">database</span> Base de Datos & SQL
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">
        <span class="material-symbols-outlined text-base">analytics</span> Métricas en Vivo
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">
        <span class="material-symbols-outlined text-base">security</span> Seguridad & Logs
      </a>
    </div>
    <div class="pt-4 border-t border-slate-100">
      <p class="text-xs font-semibold text-slate-900">Jonathan Juárez</p>
      <p class="text-[10px] text-slate-400 font-mono">jonathan.j@email.com</p>
    </div>
  </div>
</div>`;

export const NAV_DRAWER_TSX = `export const NavDrawer = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [
    { icon: 'dashboard', label: 'Resumen Principal', active: true },
    { icon: 'database', label: 'Base de Datos & SQL', active: false },
    { icon: 'analytics', label: 'Métricas en Vivo', active: false },
    { icon: 'security', label: 'Seguridad & Logs', active: false },
  ];
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-slate-600">dock_to_left</span>
        <span>Drawer Izquierdo (Left Navigation)</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="fixed left-0 top-0 bottom-0 animate-drawer-left-in w-full max-w-xs bg-white shadow-2xl border-r border-slate-200 p-6 flex flex-col">
            <h3 className="text-sm font-bold text-slate-900">Navegación Lateral</h3>
            <div className="flex-1 overflow-y-auto py-5 space-y-2 text-xs">
              {links.map((link) => (
                <a key={link.label} href="#" onClick={(e) => e.preventDefault()} className={link.active
                  ? 'flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold'
                  : 'flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-medium'}>
                  <span className="material-symbols-outlined text-base">{link.icon}</span> {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-900">Jonathan Juárez</p>
              <p className="text-[10px] text-slate-400 font-mono">jonathan.j@email.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};`;
