export const SELECTION_CONTROLS_HTML = `<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
  <div class="space-y-3">
    <span class="block font-mono text-[10px] font-semibold text-slate-500">CHECKBOXES</span>
    <label class="flex items-center gap-2.5 cursor-pointer select-none">
      <input class="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" type="checkbox" />
      <span class="text-sm text-slate-900">Default / Sin marcar</span>
    </label>
    <label class="flex items-center gap-2.5 cursor-pointer select-none">
      <input checked class="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" type="checkbox" />
      <span class="text-sm text-slate-900">Checked activo</span>
    </label>
    <label class="flex items-center gap-2.5 cursor-not-allowed opacity-50 select-none">
      <input checked class="w-4 h-4 rounded border-slate-300 text-slate-500" disabled type="checkbox" />
      <span class="text-sm text-slate-500">Disabled checked</span>
    </label>
  </div>
  <div class="space-y-3">
    <span class="block font-mono text-[10px] font-semibold text-slate-500">RADIO BUTTONS</span>
    <label class="flex items-center gap-2.5 cursor-pointer select-none">
      <input class="w-4 h-4 border-slate-300 text-blue-600 focus:ring-blue-600" name="demo-radio" type="radio" />
      <span class="text-sm text-slate-900">Opción A (Libre)</span>
    </label>
    <label class="flex items-center gap-2.5 cursor-pointer select-none">
      <input checked class="w-4 h-4 border-slate-300 text-blue-600 focus:ring-blue-600" name="demo-radio" type="radio" />
      <span class="text-sm text-slate-900">Opción B (Activa)</span>
    </label>
    <label class="flex items-center gap-2.5 cursor-not-allowed opacity-50 select-none">
      <input class="w-4 h-4 border-slate-300 text-slate-500" disabled type="radio" />
      <span class="text-sm text-slate-500">Opción C (Bloqueada)</span>
    </label>
  </div>
  <div class="space-y-3">
    <span class="block font-mono text-[10px] font-semibold text-slate-500">SWITCHES</span>
    <label class="flex items-center justify-between cursor-pointer">
      <span class="text-sm text-slate-900">Modo Rápido</span>
      <div class="relative">
        <input class="sr-only peer" type="checkbox" />
        <div class="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
        <div class="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
      </div>
    </label>
    <label class="flex items-center justify-between cursor-pointer">
      <span class="text-sm text-slate-900">Auto-Sync Activo</span>
      <div class="relative">
        <input checked class="sr-only peer" type="checkbox" />
        <div class="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
        <div class="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
      </div>
    </label>
    <label class="flex items-center justify-between cursor-not-allowed opacity-50">
      <span class="text-sm text-slate-500">Forzar SSL</span>
      <div class="relative">
        <input checked class="sr-only peer" disabled type="checkbox" />
        <div class="w-9 h-5 bg-slate-300 rounded-full"></div>
        <div class="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full translate-x-4"></div>
      </div>
    </label>
  </div>
</div>`;

export const SELECTION_CONTROLS_TSX = `export const SelectionControls = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="space-y-3">
        <span className="block font-mono text-[10px] font-semibold text-slate-500">CHECKBOXES</span>
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" type="checkbox" />
          <span className="text-sm text-slate-900">Default / Sin marcar</span>
        </label>
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" type="checkbox" defaultChecked />
          <span className="text-sm text-slate-900">Checked activo</span>
        </label>
        <label className="flex items-center gap-2.5 cursor-not-allowed opacity-50 select-none">
          <input className="w-4 h-4 rounded border-slate-300 text-slate-500" disabled type="checkbox" defaultChecked />
          <span className="text-sm text-slate-500">Disabled checked</span>
        </label>
      </div>
      <div className="space-y-3">
        <span className="block font-mono text-[10px] font-semibold text-slate-500">RADIO BUTTONS</span>
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input className="w-4 h-4 border-slate-300 text-blue-600 focus:ring-blue-600" name="demo-radio" type="radio" />
          <span className="text-sm text-slate-900">Opción A (Libre)</span>
        </label>
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input className="w-4 h-4 border-slate-300 text-blue-600 focus:ring-blue-600" name="demo-radio" type="radio" defaultChecked />
          <span className="text-sm text-slate-900">Opción B (Activa)</span>
        </label>
        <label className="flex items-center gap-2.5 cursor-not-allowed opacity-50 select-none">
          <input className="w-4 h-4 border-slate-300 text-slate-500" disabled type="radio" />
          <span className="text-sm text-slate-500">Opción C (Bloqueada)</span>
        </label>
      </div>
      <div className="space-y-3">
        <span className="block font-mono text-[10px] font-semibold text-slate-500">SWITCHES</span>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-slate-900">Modo Rápido</span>
          <div className="relative">
            <input className="sr-only peer" type="checkbox" />
            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
          </div>
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-slate-900">Auto-Sync Activo</span>
          <div className="relative">
            <input className="sr-only peer" type="checkbox" defaultChecked />
            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
          </div>
        </label>
        <label className="flex items-center justify-between cursor-not-allowed opacity-50">
          <span className="text-sm text-slate-500">Forzar SSL</span>
          <div className="relative">
            <input className="sr-only peer" disabled type="checkbox" defaultChecked />
            <div className="w-9 h-5 bg-slate-300 rounded-full"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full translate-x-4"></div>
          </div>
        </label>
      </div>
    </div>
  );
};`;
