import { useState } from 'react';

interface Pod {
  name: string;
  namespace: string;
  health: 'ok' | 'warn' | 'down';
  healthLabel: string;
  cpu: number;
  mem: number;
  qps: string;
  p99: string;
  restarts: number;
}

const ROWS: Pod[] = [
  { name: 'auth-api-7d9f8c6b4d-x2kqj', namespace: 'prod', health: 'ok', healthLabel: 'Healthy', cpu: 42, mem: 61, qps: '1.2k', p99: '84ms', restarts: 0 },
  { name: 'payments-worker-5b7c9d2f8a-m4pzq', namespace: 'prod', health: 'warn', healthLabel: 'Degraded', cpu: 78, mem: 84, qps: '860', p99: '412ms', restarts: 3 },
  { name: 'telemetry-drainer-6a8b3c1d9e-q7wrt', namespace: 'observability', health: 'ok', healthLabel: 'Healthy', cpu: 23, mem: 35, qps: '2.4k', p99: '41ms', restarts: 0 },
  { name: 'redis-shard-03-0', namespace: 'cache', health: 'down', healthLabel: 'CrashLoop', cpu: 97, mem: 96, qps: '0', p99: '—', restarts: 12 },
  { name: 'graphql-stitcher-9c2d4e6f1a-h8jkl', namespace: 'prod', health: 'ok', healthLabel: 'Healthy', cpu: 31, mem: 48, qps: '940', p99: '66ms', restarts: 1 },
  { name: 'cdn-purge-cron-28190310-ab12c', namespace: 'edge', health: 'ok', healthLabel: 'Completed', cpu: 8, mem: 12, qps: '—', p99: '—', restarts: 0 },
  { name: 'search-indexer-4e6f8a2b3c-n5mop', namespace: 'prod', health: 'warn', healthLabel: 'Throttled', cpu: 88, mem: 72, qps: '310', p99: '288ms', restarts: 2 },
];

const healthDot = (h: Pod['health']) =>
  h === 'ok' ? 'bg-emerald-500' : h === 'warn' ? 'bg-amber-500' : 'bg-rose-600';

const healthBadge = (h: Pod['health']) =>
  h === 'ok'
    ? 'bg-emerald-100 text-emerald-700'
    : h === 'warn'
      ? 'bg-amber-100 text-amber-800'
      : 'bg-rose-100 text-rose-800';

export function PodsTelemetryTable() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = ROWS.filter(
    (r) =>
      query.trim() === '' ||
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.namespace.toLowerCase().includes(query.toLowerCase()),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">TELEMETRÍA // PODS Y SERVICIOS</h3>
          <p className="font-mono text-xs text-slate-500">{filtered.length} pods · denso · pág. {current}/{totalPages}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-56">
            <span aria-hidden="true" className="material-symbols-outlined absolute top-1.5 left-2.5 text-base text-slate-400">
              search
            </span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Filtrar pod o namespace..."
              aria-label="Filtrar pods"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-1 pr-3 pl-8 font-mono text-xs outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button type="button" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1 font-mono text-xs text-slate-900 hover:bg-slate-50">
            <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-500">file_download</span>
            Exportar
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[840px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/70 font-mono text-[10px] tracking-wider text-slate-500 uppercase">
              <th className="w-8 px-3 py-2">
                <input type="checkbox" aria-label="Seleccionar visibles" className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
              </th>
              <th className="px-3 py-2 font-semibold">Servicio / Pod</th>
              <th className="hidden px-3 py-2 font-semibold md:table-cell">Namespace</th>
              <th className="px-3 py-2 font-semibold">Estado</th>
              <th className="hidden px-3 py-2 font-semibold lg:table-cell">CPU</th>
              <th className="hidden px-3 py-2 font-semibold lg:table-cell">Memoria</th>
              <th className="hidden px-3 py-2 font-semibold xl:table-cell">QPS</th>
              <th className="hidden px-3 py-2 font-semibold xl:table-cell">P99</th>
              <th className="px-3 py-2 text-right font-semibold">Reinicios</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono text-xs">
            {visible.map((row) => (
              <tr key={row.name} className="transition-colors hover:bg-slate-50">
                <td className="px-3 py-2">
                  <input type="checkbox" aria-label={`Seleccionar ${row.name}`} className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
                </td>
                <td className="max-w-56 truncate px-3 py-2 font-semibold text-slate-900" title={row.name}>
                  {row.name}
                </td>
                <td className="hidden px-3 py-2 text-slate-500 md:table-cell">{row.namespace}</td>
                <td className="px-3 py-2">
                  <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase ${healthBadge(row.health)}`}>
                    <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${healthDot(row.health)}`} />
                    {row.healthLabel}
                  </span>
                </td>
                <td className="hidden px-3 py-2 lg:table-cell">
                  <span className={row.cpu >= 85 ? 'font-bold text-rose-700' : 'text-slate-600'}>{row.cpu}%</span>
                </td>
                <td className="hidden px-3 py-2 lg:table-cell">
                  <span className={row.mem >= 85 ? 'font-bold text-rose-700' : 'text-slate-600'}>{row.mem}%</span>
                </td>
                <td className="hidden px-3 py-2 text-slate-500 xl:table-cell">{row.qps}</td>
                <td className="hidden px-3 py-2 text-slate-500 xl:table-cell">{row.p99}</td>
                <td className="px-3 py-2 text-right">
                  <span className={row.restarts > 5 ? 'font-bold text-rose-700' : 'text-slate-600'}>{row.restarts}</span>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={9} className="px-3 py-6 text-center text-slate-500">
                  Sin pods para “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 bg-slate-50/60 px-4 py-2.5 sm:flex-row">
        <div className="flex items-center gap-1">
          <button type="button" disabled={current === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded border border-slate-300 bg-white p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <span className="px-2 font-mono text-[11px] text-slate-600">{current} / {totalPages}</span>
          <button type="button" disabled={current === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="rounded border border-slate-300 bg-white p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
        <p className="font-mono text-[10px] text-slate-500">COMPACTO · 5 FILAS / PÁGINA · AUTO-REFRESH 30s</p>
      </div>
    </div>
  );
}
