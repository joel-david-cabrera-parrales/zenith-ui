export const DANGER_MODAL_HTML = `<button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-sm">
  <span class="material-symbols-outlined text-base">error</span>
  <span>Modal Error / Eliminar</span>
</button>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="relative w-full max-w-md animate-modal-in rounded-2xl border border-rose-100 bg-white p-6 shadow-2xl">
    <div class="flex items-start gap-3.5 mb-4">
      <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200">
        <span class="material-symbols-outlined text-xl">delete_forever</span>
      </div>
      <div>
        <h3 class="text-base font-semibold text-rose-950">Eliminar clúster de producción</h3>
        <p class="text-xs text-slate-500 mt-1 leading-relaxed">Esta acción es <strong class="text-rose-600">irreversible</strong>.</p>
      </div>
    </div>
    <div class="bg-rose-50/60 p-3 rounded-lg border border-rose-100 mb-5">
      <p class="text-[11px] text-rose-700">Por seguridad, escribe <span class="font-mono font-bold">DELETE-CLUSTER-09</span> para confirmar:</p>
      <input type="text" placeholder="DELETE-CLUSTER-09" class="mt-2 w-full text-xs px-3 py-1.5 border border-rose-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-rose-500 font-mono" />
    </div>
    <div class="flex justify-end gap-2">
      <button type="button" class="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Cancelar</button>
      <button type="button" class="px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 text-white hover:bg-rose-700">Eliminar Definitivamente</button>
    </div>
  </div>
</div>`;

export const DANGER_MODAL_TSX = `export const DangerModal = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base">error</span>
        <span>Modal Error / Eliminar</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="relative w-full max-w-md animate-modal-in rounded-2xl border border-rose-100 bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200">
                <span className="material-symbols-outlined text-xl">delete_forever</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-rose-950">Eliminar clúster de producción</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Esta acción es <strong className="text-rose-600">irreversible</strong>.</p>
              </div>
            </div>
            <div className="bg-rose-50/60 p-3 rounded-lg border border-rose-100 mb-5">
              <p className="text-[11px] text-rose-700">Por seguridad, escribe <span className="font-mono font-bold">DELETE-CLUSTER-09</span> para confirmar:</p>
              <input type="text" placeholder="DELETE-CLUSTER-09" className="mt-2 w-full text-xs px-3 py-1.5 border border-rose-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-rose-500 font-mono" />
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={close} className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Cancelar</button>
              <button type="button" onClick={close} className="px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 text-white hover:bg-rose-700">Eliminar Definitivamente</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};`;
