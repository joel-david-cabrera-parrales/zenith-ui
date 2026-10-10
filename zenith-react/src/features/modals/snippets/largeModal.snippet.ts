export const LARGE_MODAL_HTML = `<button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
  <span class="material-symbols-outlined text-base text-slate-500">fullscreen</span>
  <span>Modal Amplio (Large - 720px)</span>
</button>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="relative w-full max-w-2xl animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
    <h3 class="text-lg font-bold text-slate-900">Historial de Auditoría & Logs</h3>
    <p class="text-xs text-slate-500">Últimos eventos registrados en el clúster institucional</p>
    <table class="w-full text-left text-xs my-4">
      <tr class="border-b border-slate-200 bg-slate-50 text-slate-600">
        <th class="p-3">Evento</th>
        <th class="p-3">Usuario</th>
        <th class="p-3">Estado</th>
      </tr>
      <tr class="border-b border-slate-100 text-slate-600">
        <td class="p-3">auth.token.generated</td>
        <td class="p-3">jonathan.j@email.com</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 font-semibold">200 OK</span></td>
      </tr>
      <tr class="text-slate-600">
        <td class="p-3">deploy.pipeline.rollback</td>
        <td class="p-3">system.daemon</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-full text-[10px] bg-amber-50 text-amber-700 font-semibold">409 Warning</span></td>
      </tr>
    </table>
    <div class="flex justify-end">
      <button type="button" class="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800">Cerrar Auditoría</button>
    </div>
  </div>
</div>`;

export const LARGE_MODAL_TSX = `export const LargeModal = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base text-slate-500">fullscreen</span>
        <span>Modal Amplio (Large - 720px)</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="relative w-full max-w-2xl animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900">Historial de Auditoría & Logs</h3>
            <p className="text-xs text-slate-500">Últimos eventos registrados en el clúster institucional</p>
            <table className="w-full text-left text-xs my-4">
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600">
                <th className="p-3">Evento</th>
                <th className="p-3">Usuario</th>
                <th className="p-3">Estado</th>
              </tr>
              <tr className="border-b border-slate-100 text-slate-600">
                <td className="p-3">auth.token.generated</td>
                <td className="p-3">jonathan.j@email.com</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 font-semibold">200 OK</span></td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-3">deploy.pipeline.rollback</td>
                <td className="p-3">system.daemon</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-50 text-amber-700 font-semibold">409 Warning</span></td>
              </tr>
            </table>
            <div className="flex justify-end">
              <button type="button" onClick={close} className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800">Cerrar Auditoría</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};`;
