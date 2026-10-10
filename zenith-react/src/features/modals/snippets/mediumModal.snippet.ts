export const MEDIUM_MODAL_HTML = `
<button
  type="button"
  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
>
  <span class="material-symbols-outlined text-base text-slate-500">crop_landscape</span>
  <span>Modal Estándar (Medium - 520px)</span>
</button>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="relative w-full max-w-lg animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
    <h3 class="text-base font-semibold text-slate-900">Configuración de Despliegue</h3>
    <p class="mt-1 text-xs text-slate-500">Selecciona la región institucional para alojar los microservicios.</p>
    <div class="grid grid-cols-2 gap-2 text-xs my-4">
      <div class="border border-blue-500 bg-blue-50/50 p-3 rounded-xl">
        <p class="font-semibold text-slate-900">us-east-1</p>
        <p class="text-[10px] text-slate-500">N. Virginia (Primaria)</p>
      </div>
      <div class="border border-slate-200 p-3 rounded-xl">
        <p class="font-semibold text-slate-900">sa-east-1</p>
        <p class="text-[10px] text-slate-500">São Paulo (Latam)</p>
      </div>
    </div>
    <div class="flex justify-end gap-2">
      <button
        type="button"
        class="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50"
      >
        Cancelar
      </button>
      <button type="button" class="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        Guardar Cambios
      </button>
    </div>
  </div>
</div>
`;

export const MEDIUM_MODAL_TSX = `
export const MediumModal = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-base text-slate-500">crop_landscape</span>
        <span>Modal Estándar (Medium - 520px)</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="relative w-full max-w-lg animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <h3 className="text-base font-semibold text-slate-900">Configuración de Despliegue</h3>
            <p className="mt-1 text-xs text-slate-500">
              Selecciona la región institucional para alojar los microservicios.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs my-4">
              <div className="border border-blue-500 bg-blue-50/50 p-3 rounded-xl">
                <p className="font-semibold text-slate-900">us-east-1</p>
                <p className="text-[10px] text-slate-500">N. Virginia (Primaria)</p>
              </div>
              <div className="border border-slate-200 p-3 rounded-xl">
                <p className="font-semibold text-slate-900">sa-east-1</p>
                <p className="text-[10px] text-slate-500">São Paulo (Latam)</p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
`;
