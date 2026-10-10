export const MODAL_SIZES_HTML = `<div class="flex flex-wrap items-center gap-3">
  <button type="button" data-modal="modal-sm" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-base text-slate-500">crop_portrait</span>
    <span>Modal Pequeño (Small - 400px)</span>
  </button>
  <button type="button" data-modal="modal-md" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-base text-slate-500">crop_landscape</span>
    <span>Modal Estándar (Medium - 520px)</span>
  </button>
  <button type="button" data-modal="modal-lg" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-base text-slate-500">fullscreen</span>
    <span>Modal Amplio (Large - 720px)</span>
  </button>
  <button type="button" data-modal="modal-full" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-base text-slate-500">fit_screen</span>
    <span>Pantalla Completa (Fullscreen)</span>
  </button>
</div>
<div id="modal-sm" class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 bg-slate-900/55"></div>
  <div class="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
    <h3 class="text-base font-semibold text-slate-900 mb-1">Notificaciones activadas</h3>
    <p class="text-xs text-slate-500 leading-relaxed mb-6">Se enviará un resumen diario al correo registrado.</p>
    <div class="flex justify-end gap-2">
      <button type="button" class="w-full px-3 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Entendido</button>
    </div>
  </div>
</div>`;

export const MODAL_SIZES_TSX = `export const ModalSizes = () => {
  const [open, setOpen] = useState<'sm' | 'md' | 'lg' | 'full' | null>(null);
  const close = () => setOpen(null);
  const widths = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-2xl' } as const;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" onClick={() => setOpen('sm')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-slate-500">crop_portrait</span>
        <span>Modal Pequeño (Small - 400px)</span>
      </button>
      <button type="button" onClick={() => setOpen('md')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-slate-500">crop_landscape</span>
        <span>Modal Estándar (Medium - 520px)</span>
      </button>
      <button type="button" onClick={() => setOpen('lg')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-slate-500">fullscreen</span>
        <span>Modal Amplio (Large - 720px)</span>
      </button>
      <button type="button" onClick={() => setOpen('full')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-slate-500">fit_screen</span>
        <span>Pantalla Completa (Fullscreen)</span>
      </button>
      {open !== null && open !== 'full' && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 bg-slate-900/55" />
          <div className={'relative w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl ' + widths[open]}>
            <h3 className="text-base font-semibold text-slate-900 mb-1">Notificaciones activadas</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">Se enviará un resumen diario al correo registrado.</p>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={close} className="w-full px-3 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Entendido</button>
            </div>
          </div>
        </div>
      )}
      {open === 'full' && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 px-6">
            <h2 className="text-sm font-bold text-slate-900">Vista de pantalla completa</h2>
            <button type="button" onClick={close} aria-label="Cerrar diálogo" className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">Cerrar</button>
          </div>
          <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
            <p className="text-xs text-slate-500">Contenido enfocado sin distracciones.</p>
          </div>
        </div>
      )}
    </div>
  );
};`;
