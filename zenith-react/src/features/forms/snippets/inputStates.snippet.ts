export const INPUT_STATES_HTML = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Normal / Default</label>
    <input class="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" type="text" value="" />
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Placeholder Visible</label>
    <input class="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" placeholder="nombre.apellido@dominio.com" type="text" />
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Con Valor Asignado</label>
    <input class="w-full h-10 px-3 text-sm font-medium rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" type="text" value="Zenith Key Alpha 092" />
  </div>
  <div>
    <label class="mb-1 block text-xs font-semibold text-blue-600">Focused (Activo)</label>
    <input class="w-full h-10 px-3 text-sm rounded-lg border-2 border-blue-600 bg-slate-50 ring-2 ring-blue-600/20 text-slate-900 outline-none" type="text" value="Enfoque de usuario actual" />
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-400">Disabled / Inactivo</label>
    <input class="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed select-none" disabled type="text" value="Parámetro bloqueado por sistema" />
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-red-700">Error / Inválido</label>
    <input class="w-full h-10 px-3 text-sm rounded-lg border border-red-600 bg-white text-red-700 focus:ring-1 focus:ring-red-600 focus:outline-none" type="text" value="token_invalido_formato" />
    <p class="mt-1 text-xs text-red-700">Formato de token incorrecto</p>
  </div>
  <div class="sm:col-span-2">
    <label class="mb-1 block text-xs font-medium text-green-700">Éxito / Válido</label>
    <input class="w-full h-10 px-3 text-sm rounded-lg border border-green-700 bg-white text-green-700 focus:ring-1 focus:ring-green-700 focus:outline-none" type="text" value="identificador-evento-confirmado" />
    <p class="mt-1 text-xs text-green-700">Identificador disponible para su uso</p>
  </div>
</div>`;

export const INPUT_STATES_TSX = `export const InputStates = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Normal / Default</label>
        <input className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" type="text" defaultValue="" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Placeholder Visible</label>
        <input className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" placeholder="nombre.apellido@dominio.com" type="text" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Con Valor Asignado</label>
        <input className="w-full h-10 px-3 text-sm font-medium rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" type="text" defaultValue="Zenith Key Alpha 092" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold text-blue-600">Focused (Activo)</label>
        <input className="w-full h-10 px-3 text-sm rounded-lg border-2 border-blue-600 bg-slate-50 ring-2 ring-blue-600/20 text-slate-900 outline-none" type="text" defaultValue="Enfoque de usuario actual" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-400">Disabled / Inactivo</label>
        <input className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed select-none" disabled type="text" defaultValue="Parámetro bloqueado por sistema" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-red-700">Error / Inválido</label>
        <input className="w-full h-10 px-3 text-sm rounded-lg border border-red-600 bg-white text-red-700 focus:ring-1 focus:ring-red-600 focus:outline-none" type="text" defaultValue="token_invalido_formato" />
        <p className="mt-1 text-xs text-red-700">Formato de token incorrecto</p>
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1 block text-xs font-medium text-green-700">Éxito / Válido</label>
        <input className="w-full h-10 px-3 text-sm rounded-lg border border-green-700 bg-white text-green-700 focus:ring-1 focus:ring-green-700 focus:outline-none" type="text" defaultValue="identificador-evento-confirmado" />
        <p className="mt-1 text-xs text-green-700">Identificador disponible para su uso</p>
      </div>
    </div>
  );
};`;
