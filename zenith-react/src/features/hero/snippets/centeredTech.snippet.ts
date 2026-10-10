export const CENTERED_TECH_HTML = `
<div class="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
  <span
    class="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700"
  >
    <span class="h-2 w-2 animate-pulse rounded-full bg-blue-600"></span>
    Zenith Engine v3.0 disponible →
  </span>
  <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
    Diseña, despliega y escala sistemas con precisión milimétrica
  </h2>
  <p class="mx-auto mb-7 max-w-2xl text-sm text-slate-500">
    Framework unificado para arquitectura de datos y plataformas distribuidas.
  </p>
  <div class="mb-10 flex items-center justify-center gap-3">
    <button class="rounded-lg bg-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-md">
      Comenzar gratis 14 días
    </button>
    <button class="rounded-lg border border-slate-200 bg-white px-6 py-3 text-xs font-semibold text-slate-900">
      Ver Documentación ↗
    </button>
  </div>
  <div class="mx-auto max-w-3xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-left shadow-2xl">
    <div class="flex items-center justify-between border-b border-slate-700 px-4 py-3">
      <span class="font-mono text-xs text-slate-400">zenith-cluster-deploy.sh</span>
      <span class="font-mono text-xs text-slate-400">Copiar</span>
    </div>
    <div class="space-y-1.5 p-6 font-mono text-sm">
      <p class="text-slate-500"># 1. Instalar CLI global</p>
      <p class="text-slate-200"><span class="text-emerald-400">$</span> npm install -g @zenith/engine-cli@latest</p>
      <p class="text-blue-400">✓ Auth token validado [zenith_live_pk_9934e]</p>
    </div>
  </div>
</div>
`;

export const CENTERED_TECH_TSX = `
export const CenteredTech = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600"></span>
        Zenith Engine v3.0 disponible →
      </span>
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
        Diseña, despliega y escala sistemas con precisión milimétrica
      </h2>
      <p className="mx-auto mb-7 max-w-2xl text-sm text-slate-500">
        Framework unificado para arquitectura de datos y plataformas distribuidas.
      </p>
      <div className="mb-10 flex items-center justify-center gap-3">
        <button className="rounded-lg bg-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-md">
          Comenzar gratis 14 días
        </button>
        <button className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-xs font-semibold text-slate-900">
          Ver Documentación ↗
        </button>
      </div>
      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-left shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3">
          <span className="font-mono text-xs text-slate-400">zenith-cluster-deploy.sh</span>
          <span className="font-mono text-xs text-slate-400">Copiar</span>
        </div>
        <div className="space-y-1.5 p-6 font-mono text-sm">
          <p className="text-slate-500"># 1. Instalar CLI global</p>
          <p className="text-slate-200">
            <span className="text-emerald-400">$</span> npm install -g @zenith/engine-cli@latest
          </p>
          <p className="text-blue-400">✓ Auth token validado [zenith_live_pk_9934e]</p>
        </div>
      </div>
    </div>
  );
};
`;
