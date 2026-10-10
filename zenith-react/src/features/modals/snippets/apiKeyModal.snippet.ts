export const API_KEY_MODAL_HTML = `
<button
  type="button"
  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
>
  <span class="material-symbols-outlined text-base text-slate-500">key</span>
  <span>Generar API Key (Copia Segura)</span>
</button>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="relative w-full max-w-md animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
    <h3 class="text-base font-bold text-slate-900 mb-1">Nueva Clave de API Generada</h3>
    <p class="text-xs text-slate-500 mb-4">
      Guarda este token en un lugar seguro. Por motivos de seguridad, no volverá a mostrarse.
    </p>
    <div class="bg-slate-900 text-slate-200 p-3 rounded-xl flex items-center justify-between font-mono text-xs mb-6">
      <span class="truncate mr-2 text-emerald-400">zenith_live_pk_884f629fe01a4bc</span>
      <button
        type="button"
        class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[11px] font-medium flex items-center gap-1 shrink-0"
      >
        Copiar
      </button>
    </div>
    <div class="flex justify-end">
      <button
        type="button"
        class="w-full py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        He guardado mi clave
      </button>
    </div>
  </div>
</div>
`;

export const API_KEY_MODAL_TSX = `
export const ApiKeyModal = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [copied, setCopied] = useState(false);
  const token = 'zenith_live_pk_884f629fe01a4bc';
  const copy = async () => {
    await navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-base text-slate-500">key</span>
        <span>Generar API Key (Copia Segura)</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="relative w-full max-w-md animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900 mb-1">Nueva Clave de API Generada</h3>
            <p className="text-xs text-slate-500 mb-4">
              Guarda este token en un lugar seguro. Por motivos de seguridad, no volverá a mostrarse.
            </p>
            <div className="bg-slate-900 text-slate-200 p-3 rounded-xl flex items-center justify-between font-mono text-xs mb-6">
              <span className="truncate mr-2 text-emerald-400">{token}</span>
              <button
                type="button"
                onClick={copy}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[11px] font-medium shrink-0"
              >
                {copied ? '¡Copiado!' : 'Copiar'}
              </button>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                className="w-full py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                He guardado mi clave
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
`;
