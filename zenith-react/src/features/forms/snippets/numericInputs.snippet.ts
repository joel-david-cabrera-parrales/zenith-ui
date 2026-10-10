export const NUMERIC_INPUTS_HTML = `<div class="space-y-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label class="mb-1 block text-xs font-medium text-slate-600">Capacidad Máxima (Stepper)</label>
      <div class="flex items-center rounded-lg border border-slate-300 bg-white overflow-hidden">
        <button class="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors" type="button" aria-label="Disminuir valor">
          <span class="material-symbols-outlined text-base">remove</span>
        </button>
        <input class="w-full h-10 text-center font-mono text-xs bg-transparent border-0 text-slate-900 focus:outline-none" type="number" value="150" />
        <button class="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors" type="button" aria-label="Aumentar valor">
          <span class="material-symbols-outlined text-base">add</span>
        </button>
      </div>
    </div>
    <div>
      <label class="mb-1 block text-xs font-medium text-slate-600">Selector de Fecha</label>
      <input class="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" type="text" value="20/11/2025" />
    </div>
  </div>
  <div class="pt-2">
    <div class="flex justify-between items-center mb-1.5">
      <label class="text-xs font-medium text-slate-600">Límite de Aforo Dinámico</label>
      <span class="font-mono text-[10px] font-semibold text-blue-600">650 personas</span>
    </div>
    <input class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" max="1000" min="50" step="25" type="range" value="650" />
    <div class="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
      <span>50</span>
      <span>525</span>
      <span>1000</span>
    </div>
  </div>
</div>`;

export const NUMERIC_INPUTS_TSX = `export const NumericInputs = () => {
  const [stepper, setStepper] = useState(150);
  const [range, setRange] = useState(650);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">Capacidad Máxima (Stepper)</label>
          <div className="flex items-center rounded-lg border border-slate-300 bg-white overflow-hidden">
            <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors" type="button" aria-label="Disminuir valor" onClick={() => setStepper((v) => Math.max(1, v - 10))}>
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <input className="w-full h-10 text-center font-mono text-xs bg-transparent border-0 text-slate-900 focus:outline-none" type="number" value={stepper} onChange={(e) => setStepper(Number(e.target.value))} />
            <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors" type="button" aria-label="Aumentar valor" onClick={() => setStepper((v) => v + 10)}>
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">Selector de Fecha</label>
          <input className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" type="text" defaultValue="20/11/2025" />
        </div>
      </div>
      <div className="pt-2">
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-xs font-medium text-slate-600">Límite de Aforo Dinámico</label>
          <span className="font-mono text-[10px] font-semibold text-blue-600">{range} personas</span>
        </div>
        <input className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" max="1000" min="50" step="25" type="range" value={range} onChange={(e) => setRange(Number(e.target.value))} />
        <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
          <span>50</span>
          <span>525</span>
          <span>1000</span>
        </div>
      </div>
    </div>
  );
};`;
