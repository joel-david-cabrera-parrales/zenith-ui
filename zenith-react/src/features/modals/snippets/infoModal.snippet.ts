export const INFO_MODAL_HTML = `
<button
  type="button"
  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
>
  <span class="material-symbols-outlined text-base">info</span>
  <span>Modal Informativo</span>
</button>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="relative w-full max-w-md animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
    <div class="flex items-start gap-3 mb-4">
      <div
        class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100"
      >
        <span class="material-symbols-outlined text-xl">info</span>
      </div>
      <div>
        <h3 class="text-base font-semibold text-slate-900">Mantenimiento de Servidores</h3>
        <p class="text-xs text-slate-500 mt-1 leading-relaxed">
          Actualización del motor v2.4.0 programada. Sin interrupción en los endpoints públicos.
        </p>
      </div>
    </div>
    <div class="flex justify-end gap-2">
      <button type="button" class="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        Entendido, gracias
      </button>
    </div>
  </div>
</div>
`;

export const INFO_MODAL_TSX = `
export const InfoModal = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-base">info</span>
        <span>Modal Informativo</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="relative w-full max-w-md animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <span className="material-symbols-outlined text-xl">info</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Mantenimiento de Servidores</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Actualización del motor v2.4.0 programada. Sin interrupción en los endpoints públicos.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Entendido, gracias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
`;
