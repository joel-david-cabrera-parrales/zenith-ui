export const BUTTON_GROUPS_HTML = `<div class="flex flex-wrap items-center gap-6">
  <div class="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 shadow-sm">
    <button type="button" class="px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white shadow-sm transition-all">Día</button>
    <button type="button" class="px-3 py-1.5 text-xs font-semibold rounded-md text-slate-600 hover:text-slate-900 transition-colors">Semana</button>
    <button type="button" class="px-3 py-1.5 text-xs font-semibold rounded-md text-slate-600 hover:text-slate-900 transition-colors">Mes</button>
    <button type="button" class="px-3 py-1.5 text-xs font-semibold rounded-md text-slate-600 hover:text-slate-900 transition-colors">Año</button>
  </div>
  <div class="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 shadow-sm">
    <button type="button" aria-label="Alineación izquierda" class="p-1.5 rounded-md bg-slate-100 text-slate-900 transition-colors">
      <span class="material-symbols-outlined text-[18px]">format_align_left</span>
    </button>
    <button type="button" aria-label="Alineación centro" class="p-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-colors">
      <span class="material-symbols-outlined text-[18px]">format_align_center</span>
    </button>
    <button type="button" aria-label="Alineación derecha" class="p-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-colors">
      <span class="material-symbols-outlined text-[18px]">format_align_right</span>
    </button>
  </div>
  <div class="inline-flex rounded-lg shadow-sm">
    <button type="button" class="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-l-lg bg-blue-600 text-white hover:bg-blue-700 border-r border-blue-500 transition-colors">
      <span class="material-symbols-outlined text-[18px]">save</span>
      <span>Publicar</span>
    </button>
    <button type="button" aria-label="Opciones de publicación" class="inline-flex items-center px-2 py-2 text-sm font-semibold rounded-r-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
      <span class="material-symbols-outlined text-[18px]">expand_more</span>
    </button>
  </div>
  <div class="inline-flex rounded-lg shadow-sm">
    <button type="button" class="px-3.5 py-2 text-sm font-semibold rounded-l-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors">
      Anterior
    </button>
    <button type="button" class="px-3.5 py-2 text-sm font-semibold border-t border-b border-slate-300 bg-white text-slate-700 hover:bg-slate-50 -ml-px transition-colors">
      Hoy
    </button>
    <button type="button" class="px-3.5 py-2 text-sm font-semibold rounded-r-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 -ml-px transition-colors">
      Siguiente
    </button>
  </div>
</div>`;

export const BUTTON_GROUPS_TSX = `export const ButtonGroups = () => {
  const [period, setPeriod] = useState('Día');
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 shadow-sm">
        {['Día', 'Semana', 'Mes', 'Año'].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setPeriod(option)}
            className={period === option
              ? 'px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white shadow-sm transition-all'
              : 'px-3 py-1.5 text-xs font-semibold rounded-md text-slate-600 hover:text-slate-900 transition-colors'}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 shadow-sm">
        <button type="button" aria-label="Alineación izquierda" className="p-1.5 rounded-md bg-slate-100 text-slate-900 transition-colors">
          <span className="material-symbols-outlined text-[18px]">format_align_left</span>
        </button>
        <button type="button" aria-label="Alineación centro" className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-colors">
          <span className="material-symbols-outlined text-[18px]">format_align_center</span>
        </button>
        <button type="button" aria-label="Alineación derecha" className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-colors">
          <span className="material-symbols-outlined text-[18px]">format_align_right</span>
        </button>
      </div>
      <div className="inline-flex rounded-lg shadow-sm">
        <button type="button" className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-l-lg bg-blue-600 text-white hover:bg-blue-700 border-r border-blue-500 transition-colors">
          <span className="material-symbols-outlined text-[18px]">save</span>
          <span>Publicar</span>
        </button>
        <button type="button" aria-label="Opciones de publicación" className="inline-flex items-center px-2 py-2 text-sm font-semibold rounded-r-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          <span className="material-symbols-outlined text-[18px]">expand_more</span>
        </button>
      </div>
      <div className="inline-flex rounded-lg shadow-sm">
        <button type="button" className="px-3.5 py-2 text-sm font-semibold rounded-l-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors">
          Anterior
        </button>
        <button type="button" className="px-3.5 py-2 text-sm font-semibold border-t border-b border-slate-300 bg-white text-slate-700 hover:bg-slate-50 -ml-px transition-colors">
          Hoy
        </button>
        <button type="button" className="px-3.5 py-2 text-sm font-semibold rounded-r-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 -ml-px transition-colors">
          Siguiente
        </button>
      </div>
    </div>
  );
};`;
