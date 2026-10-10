const BADGES = ['Zero Configuration', 'Multi-Cloud', 'End-to-End Encryption'];

const NODES = [
  { name: 'edge-eu-west-01', cpu: '42%', mem: '61%', bar: 'w-2/5', live: true },
  { name: 'edge-us-east-04', cpu: '78%', mem: '84%', bar: 'w-4/5', live: true },
  { name: 'edge-ap-south-02', cpu: '23%', mem: '35%', bar: 'w-1/4', live: false },
];

export const DashboardMetricsHero = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 md:p-12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 md:gap-10">
        <div className="space-y-6 lg:col-span-6">
          <div className="flex flex-wrap items-center gap-2">
            {BADGES.map((b) => (
              <span
                key={b}
                className="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700"
              >
                {b}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Visibilidad total de microservicios y estado de clústeres en tiempo
            real
          </h2>
          <p className="max-w-xl text-sm text-slate-500">
            Identifica cuellos de botella de red y anomalías de memoria antes
            de que afecten a tus usuarios. Monitoreo predictivo con telemetría
            de baja sobrecarga.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {['AC', 'KL', 'MR'].map((i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ring-2 ring-white odd:bg-blue-600 even:bg-slate-700"
                >
                  {i}
                </span>
              ))}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white ring-2 ring-white">
                +4k
              </span>
            </div>
            <div>
              <p className="flex items-center gap-1 text-xs text-amber-500">
                <span aria-hidden="true" className="material-symbols-outlined text-sm">
                  star
                </span>
                4.9/5 · 2.300 reseñas verificadas
              </p>
              <p className="font-mono text-[10px] text-slate-500">
                SOC2 TYPE II · ISO 27001 · GDPR READY
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Probar Consola Interactiva
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              Ver Métricas Demo
            </button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="font-mono text-xs font-semibold text-slate-900">
                CLUSTER_TELEMETRY // LIVE_NODES
              </span>
              <span className="flex items-center gap-1.5 rounded bg-emerald-50 px-2 py-0.5 font-mono text-[10px] text-emerald-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                STREAMING
              </span>
            </div>
            {NODES.map((n) => (
              <div
                key={n.name}
                className="rounded-lg border border-slate-200 bg-white p-3"
              >
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="font-semibold text-slate-900">{n.name}</span>
                  <span className={n.live ? 'text-emerald-600' : 'text-slate-400'}>
                    {n.live ? '● LIVE' : '○ IDLE'}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-1.5 rounded-full bg-blue-600 ${n.bar}`} />
                </div>
                <div className="mt-1.5 flex justify-between font-mono text-[10px] text-slate-500">
                  <span>CPU {n.cpu}</span>
                  <span>MEM {n.mem}</span>
                  <span>p99 42ms</span>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2 font-mono text-[11px] text-slate-200">
              <span>Latencia global p99: 68ms</span>
              <span className="text-emerald-400">-12% vs ayer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
