export const BUTTON_ICONS_HTML = `<div class="flex flex-wrap items-center gap-3">
  <button type="button" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-[18px]">add</span>
    <span>Crear Nuevo</span>
  </button>
  <button type="button" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm">
    <span>Continuar</span>
    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
  </button>
  <button type="button" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-[18px]">cloud_upload</span>
    <span>Cargar Archivo</span>
    <span class="material-symbols-outlined text-[16px] text-slate-400">expand_more</span>
  </button>
  <button type="button" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-[18px] text-slate-500">notifications</span>
    <span>Notificaciones</span>
    <span class="ml-1 px-1.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-700">5</span>
  </button>
  <button type="button" class="inline-flex items-center gap-2.5 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
    <span class="material-symbols-outlined text-[18px] text-slate-400">search</span>
    <span>Buscar</span>
    <kbd class="px-1.5 py-0.5 text-[10px] font-mono font-semibold rounded bg-slate-100 border border-slate-200 text-slate-500">⌘K</kbd>
  </button>
</div>`;

export const BUTTON_ICONS_TSX = `export const ButtonIcons = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-[18px]">add</span>
        <span>Crear Nuevo</span>
      </button>
      <button type="button" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm">
        <span>Continuar</span>
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
      <button type="button" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
        <span>Cargar Archivo</span>
        <span className="material-symbols-outlined text-[16px] text-slate-400">expand_more</span>
      </button>
      <button type="button" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-[18px] text-slate-500">notifications</span>
        <span>Notificaciones</span>
        <span className="ml-1 px-1.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-700">5</span>
      </button>
      <button type="button" className="inline-flex items-center gap-2.5 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-[18px] text-slate-400">search</span>
        <span>Buscar</span>
        <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-semibold rounded bg-slate-100 border border-slate-200 text-slate-500">⌘K</kbd>
      </button>
    </div>
  );
};`;
