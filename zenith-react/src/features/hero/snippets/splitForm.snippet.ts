export const SPLIT_FORM_HTML = `<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
  <div class="lg:col-span-7 space-y-6">
    <span class="inline-flex items-center gap-2 rounded-md bg-blue-100 px-3 py-1 text-[10px] font-semibold uppercase text-blue-800">Acceso Temprano para Ingeniería</span>
    <h2 class="text-4xl font-extrabold text-slate-900">Desarrolla sin fricciones. Solicita credenciales de API.</h2>
    <ul class="space-y-3">
      <li class="flex items-center gap-3"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span><span class="text-sm text-slate-900">Rate limiting dinámico sin bloqueos</span></li>
      <li class="flex items-center gap-3"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span><span class="text-sm text-slate-900">Cifrado SOC2 Tipo II</span></li>
    </ul>
  </div>
  <div class="lg:col-span-5">
    <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900">Solicitar API Key</h3>
      <p class="text-xs text-slate-500">Sin tarjeta. Activación en 60 segundos.</p>
      <form class="mt-4 space-y-4">
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-slate-900">Correo Corporativo</label>
          <input type="email" placeholder="dev.lead@empresa.com" class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" />
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-slate-900">Entorno Objetivo</label>
          <select class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"><option>Desarrollo / Sandbox</option><option>Staging</option><option>Producción</option></select>
        </div>
        <button class="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white">Generar credenciales sandbox</button>
      </form>
    </div>
  </div>
</div>`;

export const SPLIT_FORM_TSX = `export const SplitForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="lg:col-span-7 space-y-6">
        <span className="inline-flex items-center gap-2 rounded-md bg-blue-100 px-3 py-1 text-[10px] font-semibold uppercase text-blue-800">Acceso Temprano para Ingeniería</span>
        <h2 className="text-4xl font-extrabold text-slate-900">Desarrolla sin fricciones. Solicita credenciales de API.</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span><span className="text-sm text-slate-900">Rate limiting dinámico sin bloqueos</span></li>
          <li className="flex items-center gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span><span className="text-sm text-slate-900">Cifrado SOC2 Tipo II</span></li>
        </ul>
      </div>
      <div className="lg:col-span-5">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Solicitar API Key</h3>
          <p className="text-xs text-slate-500">Sin tarjeta. Activación en 60 segundos.</p>
          <form className="mt-4 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-900">Correo Corporativo</label>
              <input type="email" placeholder="dev.lead@empresa.com" defaultValue="" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-900">Entorno Objetivo</label>
              <select defaultValue="Desarrollo / Sandbox" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"><option>Desarrollo / Sandbox</option><option>Staging</option><option>Producción</option></select>
            </div>
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white">Generar credenciales sandbox</button>
          </form>
        </div>
      </div>
    </div>
  );
};`;
