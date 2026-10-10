export const DASHBOARD_METRICS_HTML = `
<div
  class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <div class="lg:col-span-6 space-y-6">
    <div class="flex gap-2">
      <span class="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700"
        >Zero Configuration</span
      ><span class="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700">Multi-Cloud</span>
    </div>
    <h2 class="text-4xl font-extrabold text-slate-900">Visibilidad total de microservicios en tiempo real</h2>
    <p class="text-sm text-slate-500">Detecta cuellos de botella antes de que afecten a tus usuarios.</p>
    <div class="flex gap-3">
      <button class="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white">Probar Consola</button
      ><button class="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-900">
        Ver Demo
      </button>
    </div>
  </div>
  <div class="lg:col-span-6">
    <div class="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div class="flex items-center justify-between border-b border-slate-200 pb-2">
        <span class="font-mono text-xs font-semibold">CLUSTER_TELEMETRY // LIVE</span
        ><span class="font-mono text-[10px] text-emerald-600">● STREAMING</span>
      </div>
      <div class="rounded-lg border bg-white p-3">
        <div class="flex justify-between font-mono text-[11px]">
          <span>edge-eu-west-01</span><span class="text-emerald-600">● LIVE</span>
        </div>
        <div class="mt-2 h-1.5 rounded-full bg-slate-100"><div class="h-1.5 w-2/5 rounded-full bg-blue-600"></div></div>
      </div>
      <div class="flex justify-between rounded-lg bg-slate-900 px-3 py-2 font-mono text-[11px] text-slate-200">
        <span>p99: 68ms</span><span class="text-emerald-400">-12% vs ayer</span>
      </div>
    </div>
  </div>
</div>
`;

export const DASHBOARD_METRICS_TSX = `
export const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="lg:col-span-6 space-y-6">
        <div className="flex gap-2">
          <span className="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700">
            Zero Configuration
          </span>
          <span className="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700">
            Multi-Cloud
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900">Visibilidad total de microservicios en tiempo real</h2>
        <p className="text-sm text-slate-500">Detecta cuellos de botella antes de que afecten a tus usuarios.</p>
        <div className="flex gap-3">
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white">
            Probar Consola
          </button>
          <button className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-900">
            Ver Demo
          </button>
        </div>
      </div>
      <div className="lg:col-span-6">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-mono text-xs font-semibold">CLUSTER_TELEMETRY // LIVE</span>
            <span className="font-mono text-[10px] text-emerald-600">● STREAMING</span>
          </div>
          <div className="rounded-lg border bg-white p-3">
            <div className="flex justify-between font-mono text-[11px]">
              <span>edge-eu-west-01</span>
              <span className="text-emerald-600">● LIVE</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-slate-100">
              <div className="h-1.5 w-2/5 rounded-full bg-blue-600"></div>
            </div>
          </div>
          <div className="flex justify-between rounded-lg bg-slate-900 px-3 py-2 font-mono text-[11px] text-slate-200">
            <span>p99: 68ms</span>
            <span className="text-emerald-400">-12% vs ayer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
`;
