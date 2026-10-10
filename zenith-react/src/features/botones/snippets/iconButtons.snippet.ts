export const ICON_BUTTONS_HTML = `<div class="flex flex-wrap items-center gap-3">
  <button type="button" aria-label="Ajustes" class="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
    <span class="material-symbols-outlined text-[16px]">tune</span>
  </button>
  <button type="button" aria-label="Editar" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
    <span class="material-symbols-outlined text-[18px]">edit</span>
  </button>
  <button type="button" aria-label="Añadir" class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors">
    <span class="material-symbols-outlined text-[20px]">add</span>
  </button>
  <button type="button" aria-label="Terminal" class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-colors">
    <span class="material-symbols-outlined text-[20px]">terminal</span>
  </button>
  <button type="button" aria-label="Favorito" class="inline-flex items-center justify-center w-11 h-11 rounded-xl text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors">
    <span class="material-symbols-outlined text-[22px]">star</span>
  </button>
  <button type="button" aria-label="Compartir" class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors">
    <span class="material-symbols-outlined text-[18px]">share</span>
  </button>
  <button type="button" aria-label="Más opciones" class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
    <span class="material-symbols-outlined text-[18px]">more_vert</span>
  </button>
  <button type="button" class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
    <span>Píldora Completa</span>
    <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
  </button>
  <button type="button" class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-[16px] text-blue-600">bolt</span>
    <span>Píldora Contorno</span>
  </button>
</div>`;

export const ICON_BUTTONS_TSX = `export const IconButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" aria-label="Ajustes" className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
        <span className="material-symbols-outlined text-[16px]">tune</span>
      </button>
      <button type="button" aria-label="Editar" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
        <span className="material-symbols-outlined text-[18px]">edit</span>
      </button>
      <button type="button" aria-label="Añadir" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors">
        <span className="material-symbols-outlined text-[20px]">add</span>
      </button>
      <button type="button" aria-label="Terminal" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-colors">
        <span className="material-symbols-outlined text-[20px]">terminal</span>
      </button>
      <button type="button" aria-label="Favorito" className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors">
        <span className="material-symbols-outlined text-[22px]">star</span>
      </button>
      <button type="button" aria-label="Compartir" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors">
        <span className="material-symbols-outlined text-[18px]">share</span>
      </button>
      <button type="button" aria-label="Más opciones" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
        <span className="material-symbols-outlined text-[18px]">more_vert</span>
      </button>
      <button type="button" className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
        <span>Píldora Completa</span>
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </button>
      <button type="button" className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-[16px] text-blue-600">bolt</span>
        <span>Píldora Contorno</span>
      </button>
    </div>
  );
};`;
