export const FULL_WIDTH_BUTTONS_HTML = `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl w-full">
  <button
    type="button"
    class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
  >
    <span class="material-symbols-outlined text-[18px]">login</span>
    <span>Iniciar Sesión</span>
  </button>
  <button
    type="button"
    class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
  >
    <span>Cancelar</span>
  </button>
</div>
`;

export const FULL_WIDTH_BUTTONS_TSX = `
export const FullWidthButtons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl w-full">
      <button
        type="button"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-[18px]">login</span>
        <span>Iniciar Sesión</span>
      </button>
      <button
        type="button"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
      >
        <span>Cancelar</span>
      </button>
    </div>
  );
};
`;
