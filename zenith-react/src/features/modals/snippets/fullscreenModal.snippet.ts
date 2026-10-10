export const FULLSCREEN_MODAL_HTML = `
<button
  type="button"
  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
>
  <span class="material-symbols-outlined text-base text-slate-500">fit_screen</span>
  <span>Pantalla Completa (Fullscreen)</span>
</button>
<div class="fixed inset-0 z-50 animate-modal-in flex flex-col bg-white">
  <div class="flex h-16 items-center justify-between border-b border-slate-200 px-6">
    <h2 class="text-sm font-bold text-slate-900">Zenith Dash // Explorador de Esquemas</h2>
    <button type="button" class="rounded-lg p-1 text-slate-400 hover:bg-slate-100">Cerrar</button>
  </div>
  <div class="flex-1 overflow-y-auto bg-slate-50 p-8">
    <div class="max-w-xl mx-auto text-center space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <h3 class="text-xl font-bold text-slate-900">Editor de Esquema</h3>
      <p class="text-xs text-slate-500">Edición libre sin distracciones.</p>
      <button
        type="button"
        class="px-5 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700"
      >
        Finalizar y Volver
      </button>
    </div>
  </div>
</div>
`;

export const FULLSCREEN_MODAL_TSX = `
export const FullscreenModal = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-base text-slate-500">fit_screen</span>
        <span>Pantalla Completa (Fullscreen)</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 animate-modal-in flex flex-col bg-white">
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-6">
            <h2 className="text-sm font-bold text-slate-900">Zenith Dash // Explorador de Esquemas</h2>
            <button type="button" onClick={close} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
              Cerrar
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
            <div className="max-w-xl mx-auto text-center space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Editor de Esquema</h3>
              <p className="text-xs text-slate-500">Edición libre sin distracciones.</p>
              <button
                type="button"
                onClick={close}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700"
              >
                Finalizar y Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
`;
