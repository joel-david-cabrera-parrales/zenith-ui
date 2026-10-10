export const SELECTS_HTML = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Select Nativo Estilizado</label>
    <div class="relative w-full">
      <select class="w-full h-10 pl-3 pr-10 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 appearance-none outline-none cursor-pointer focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:bg-slate-50 transition-colors">
        <option value="Conferencia Magistral">Conferencia Magistral</option>
        <option value="Taller Práctico / Workshop">Taller Práctico / Workshop</option>
        <option value="Comunidad / Meetup">Comunidad / Meetup</option>
        <option selected value="Hackathon Tecnológico">Hackathon Tecnológico</option>
      </select>
      <span class="material-symbols-outlined text-slate-500 text-base absolute right-3 top-2.5 pointer-events-none">expand_more</span>
    </div>
  </div>
  <div>
    <span class="mb-1 block text-xs font-medium text-slate-600">Custom Select con Badge</span>
    <details class="relative w-full">
      <summary class="w-full h-10 px-3 flex items-center justify-between rounded-lg border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 transition-colors text-left outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 cursor-pointer select-none">
        <span class="flex items-center gap-2 text-sm">
          <span class="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>Desarrollo (Local / Sandbox)</span>
        </span>
        <span class="material-symbols-outlined text-slate-500 text-base">expand_more</span>
      </summary>
      <div class="absolute left-0 top-full mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-sm p-1 z-50 space-y-0.5">
        <button type="button" class="w-full px-2.5 py-2 text-left rounded-md flex items-center justify-between text-sm hover:bg-slate-100 transition-colors text-slate-900">
          <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-700"></span><span>Producción (América / Este)</span></span>
        </button>
        <button type="button" class="w-full px-2.5 py-2 text-left rounded-md flex items-center justify-between text-sm hover:bg-slate-100 transition-colors text-slate-900">
          <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-amber-500"></span><span>Staging (Europa / Central)</span></span>
        </button>
        <button type="button" class="w-full px-2.5 py-2 text-left rounded-md flex items-center justify-between text-sm hover:bg-slate-100 transition-colors text-slate-900 bg-slate-100">
          <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-600"></span><span>Desarrollo (Local / Sandbox)</span></span>
          <span class="material-symbols-outlined text-blue-600 text-base">check</span>
        </button>
      </div>
    </details>
  </div>
</div>`;

export const SELECTS_TSX = `export const Selects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Select Nativo Estilizado</label>
        <div className="relative w-full">
          <select className="w-full h-10 pl-3 pr-10 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 appearance-none outline-none cursor-pointer focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:bg-slate-50 transition-colors" defaultValue="Hackathon Tecnológico">
            <option value="Conferencia Magistral">Conferencia Magistral</option>
            <option value="Taller Práctico / Workshop">Taller Práctico / Workshop</option>
            <option value="Comunidad / Meetup">Comunidad / Meetup</option>
            <option value="Hackathon Tecnológico">Hackathon Tecnológico</option>
          </select>
          <span className="material-symbols-outlined text-slate-500 text-base absolute right-3 top-2.5 pointer-events-none">expand_more</span>
        </div>
      </div>
      <div>
        <span className="mb-1 block text-xs font-medium text-slate-600">Custom Select con Badge</span>
        <details className="relative w-full">
          <summary className="w-full h-10 px-3 flex items-center justify-between rounded-lg border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 transition-colors text-left outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 cursor-pointer select-none">
            <span className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Desarrollo (Local / Sandbox)</span>
            </span>
            <span className="material-symbols-outlined text-slate-500 text-base">expand_more</span>
          </summary>
          <div className="absolute left-0 top-full mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-sm p-1 z-50 space-y-0.5">
            <button type="button" className="w-full px-2.5 py-2 text-left rounded-md flex items-center justify-between text-sm hover:bg-slate-100 transition-colors text-slate-900">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-700"></span><span>Producción (América / Este)</span></span>
            </button>
            <button type="button" className="w-full px-2.5 py-2 text-left rounded-md flex items-center justify-between text-sm hover:bg-slate-100 transition-colors text-slate-900">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><span>Staging (Europa / Central)</span></span>
            </button>
            <button type="button" className="w-full px-2.5 py-2 text-left rounded-md flex items-center justify-between text-sm hover:bg-slate-100 transition-colors text-slate-900 bg-slate-100">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-600"></span><span>Desarrollo (Local / Sandbox)</span></span>
              <span className="material-symbols-outlined text-blue-600 text-base">check</span>
            </button>
          </div>
        </details>
      </div>
    </div>
  );
};`;
