export const SUCCESS_MODAL_HTML = `
<button
  type="button"
  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
>
  <span class="material-symbols-outlined text-base">check_circle</span>
  <span>Modal Confirmación / Éxito</span>
</button>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div
    class="relative w-full max-w-md animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl text-center"
  >
    <div
      class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100"
    >
      <span class="material-symbols-outlined text-2xl">check_circle</span>
    </div>
    <h3 class="text-base font-bold text-slate-900 mb-1">¡Evento Publicado con Éxito!</h3>
    <p class="text-xs text-slate-500 leading-relaxed mb-6">
      El evento ya se encuentra sincronizado y visible en el portal público.
    </p>
    <div class="flex gap-2 justify-center">
      <button
        type="button"
        class="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50"
      >
        Ver Lista
      </button>
      <button
        type="button"
        class="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
      >
        Copiar Enlace
      </button>
    </div>
  </div>
</div>
`;

export const SUCCESS_MODAL_TSX = `
export const SuccessModal = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-base">check_circle</span>
        <span>Modal Confirmación / Éxito</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="relative w-full max-w-md animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <span className="material-symbols-outlined text-2xl">check_circle</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">¡Evento Publicado con Éxito!</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              El evento ya se encuentra sincronizado y visible en el portal público.
            </p>
            <div className="flex gap-2 justify-center">
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50"
              >
                Ver Lista
              </button>
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Copiar Enlace
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
`;
