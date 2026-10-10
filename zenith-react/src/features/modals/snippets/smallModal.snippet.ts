export const SMALL_MODAL_HTML = `
<button
  type="button"
  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
>
  <span class="material-symbols-outlined text-base text-slate-500">crop_portrait</span>
  <span>Modal Pequeño (Small - 400px)</span>
</button>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="relative w-full max-w-sm animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
    <h3 class="text-base font-semibold text-slate-900 mb-1">Notificaciones activadas</h3>
    <p class="text-xs text-slate-500 leading-relaxed mb-6">
      Se enviará un resumen diario de telemetría y eventos al correo registrado.
    </p>
    <div class="flex justify-end gap-2">
      <button
        type="button"
        class="w-full px-3 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Entendido
      </button>
    </div>
  </div>
</div>
`;

export const SMALL_MODAL_TSX = `
export const SmallModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-base text-slate-500">crop_portrait</span>
        <span>Modal Pequeño (Small - 400px)</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="absolute inset-0 animate-overlay-in bg-slate-900/55"
          />
          <div className="relative w-full max-w-sm animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <h3 className="text-base font-semibold text-slate-900 mb-1">Notificaciones activadas</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Se enviará un resumen diario de telemetría y eventos al correo registrado.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full px-3 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
`;
