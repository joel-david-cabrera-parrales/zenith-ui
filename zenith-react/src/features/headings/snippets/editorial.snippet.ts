export const EDITORIAL_HTML = `<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
    <div>
      <span class="font-mono text-[10px] text-slate-500 uppercase font-bold block mb-4">BLOCKQUOTE // CITATION</span>
      <blockquote class="border-l-4 border-blue-600 pl-4">
        <p class="text-base sm:text-lg italic text-slate-900 font-medium leading-relaxed">"La consistencia tipográfica es la estructura cognitiva con la que los ingenieros deciden en segundos."</p>
      </blockquote>
    </div>
    <div class="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200">
      <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">DR</div>
      <div>
        <div class="text-sm font-semibold text-slate-900">Dra. Valeria Rostova</div>
        <div class="text-xs text-slate-400">VP of Systems Architecture</div>
      </div>
    </div>
  </div>
  <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
    <span class="font-mono text-[10px] text-slate-500 uppercase font-bold block">CALLOUTS // NOTIFICATION CONTAINERS</span>
    <div class="p-4 rounded-lg bg-slate-50 border-l-4 border-blue-600 flex gap-3 items-start">
      <span class="text-blue-600 text-[20px]">info</span>
      <div class="text-sm space-y-1"><span class="font-bold text-blue-700 block">Nota de telemetría</span><p class="text-slate-600">Las rutas TCP se deshabilitan sin mTLS.</p></div>
    </div>
    <div class="p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-600 flex gap-3 items-start">
      <span class="text-emerald-600 text-[20px]">check</span>
      <div class="text-sm space-y-1"><span class="font-bold text-emerald-900 block">Despliegue verificado</span><p class="text-emerald-800">Validado en 12 clústeres satélites.</p></div>
    </div>
    <div class="p-4 rounded-lg bg-amber-50 border-l-4 border-amber-500 flex gap-3 items-start">
      <span class="text-amber-600 text-[20px]">warning</span>
      <div class="text-sm space-y-1"><span class="font-bold text-amber-900 block">Límite de memoria cercano</span><p class="text-amber-800">worker-04 alcanzó 88% de RAM.</p></div>
    </div>
  </div>
  <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
    <span class="font-mono text-[10px] text-slate-500 uppercase font-bold block">LIST PATTERNS // MULTI-STYLE</span>
    <ul class="space-y-2 text-sm text-slate-600">
      <li class="flex items-center gap-2"><span class="text-blue-600">verified</span><span>Aislamiento de VPC verificado</span></li>
      <li class="flex items-center gap-2"><span class="text-blue-600">verified</span><span>Rotación de tokens cada 24 horas</span></li>
    </ul>
    <hr class="border-slate-200" />
    <ol class="space-y-2.5 text-sm text-slate-600">
      <li class="flex items-start gap-2.5"><span class="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span><span>Ingesta y normalización UDP</span></li>
      <li class="flex items-start gap-2.5"><span class="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span><span>Validación heurística Zenith</span></li>
    </ol>
    <hr class="border-slate-200" />
    <dl class="text-xs space-y-1.5 font-mono">
      <div class="flex justify-between py-1 border-b border-dashed border-slate-200"><dt class="text-slate-400">RUNTIME_ENGINE:</dt><dd class="text-slate-900 font-semibold">Node.js 20.x Alpine</dd></div>
      <div class="flex justify-between py-1 border-b border-dashed border-slate-200"><dt class="text-slate-400">CONCURRENCY_CAP:</dt><dd class="text-blue-600 font-semibold">25,000 req/sec</dd></div>
    </dl>
  </div>
</div>`;

export const EDITORIAL_TSX = `export const EditorialSpecimen = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <span className="font-mono text-[10px] text-slate-500 uppercase font-bold block mb-4">BLOCKQUOTE // CITATION</span>
          <blockquote className="border-l-4 border-blue-600 pl-4">
            <p className="text-base sm:text-lg italic text-slate-900 font-medium leading-relaxed">"La consistencia tipográfica es la estructura cognitiva con la que los ingenieros deciden en segundos."</p>
          </blockquote>
        </div>
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">DR</div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Dra. Valeria Rostova</div>
            <div className="text-xs text-slate-400">VP of Systems Architecture</div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <span className="font-mono text-[10px] text-slate-500 uppercase font-bold block">CALLOUTS // NOTIFICATION CONTAINERS</span>
        <div className="p-4 rounded-lg bg-slate-50 border-l-4 border-blue-600 flex gap-3 items-start">
          <span className="text-blue-600 text-[20px]">info</span>
          <div className="text-sm space-y-1"><span className="font-bold text-blue-700 block">Nota de telemetría</span><p className="text-slate-600">Las rutas TCP se deshabilitan sin mTLS.</p></div>
        </div>
        <div className="p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-600 flex gap-3 items-start">
          <span className="text-emerald-600 text-[20px]">check</span>
          <div className="text-sm space-y-1"><span className="font-bold text-emerald-900 block">Despliegue verificado</span><p className="text-emerald-800">Validado en 12 clústeres satélites.</p></div>
        </div>
        <div className="p-4 rounded-lg bg-amber-50 border-l-4 border-amber-500 flex gap-3 items-start">
          <span className="text-amber-600 text-[20px]">warning</span>
          <div className="text-sm space-y-1"><span className="font-bold text-amber-900 block">Límite de memoria cercano</span><p className="text-amber-800">worker-04 alcanzó 88% de RAM.</p></div>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
        <span className="font-mono text-[10px] text-slate-500 uppercase font-bold block">LIST PATTERNS // MULTI-STYLE</span>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-center gap-2"><span className="text-blue-600">verified</span><span>Aislamiento de VPC verificado</span></li>
          <li className="flex items-center gap-2"><span className="text-blue-600">verified</span><span>Rotación de tokens cada 24 horas</span></li>
        </ul>
        <hr className="border-slate-200" />
        <ol className="space-y-2.5 text-sm text-slate-600">
          <li className="flex items-start gap-2.5"><span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span><span>Ingesta y normalización UDP</span></li>
          <li className="flex items-start gap-2.5"><span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span><span>Validación heurística Zenith</span></li>
        </ol>
        <hr className="border-slate-200" />
        <dl className="text-xs space-y-1.5 font-mono">
          <div className="flex justify-between py-1 border-b border-dashed border-slate-200"><dt className="text-slate-400">RUNTIME_ENGINE:</dt><dd className="text-slate-900 font-semibold">Node.js 20.x Alpine</dd></div>
          <div className="flex justify-between py-1 border-b border-dashed border-slate-200"><dt className="text-slate-400">CONCURRENCY_CAP:</dt><dd className="text-blue-600 font-semibold">25,000 req/sec</dd></div>
        </dl>
      </div>
    </div>
  );
};`;
