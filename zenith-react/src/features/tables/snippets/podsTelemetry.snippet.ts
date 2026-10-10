export const PODS_TELEMETRY_HTML = `
<div class="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b p-4">
    <div>
      <h3 class="text-sm font-bold">TELEMETRÍA // PODS Y SERVICIOS</h3>
      <p class="font-mono text-xs">7 pods · denso</p>
    </div>
    <input
      placeholder="Filtrar pod o namespace..."
      class="w-full sm:w-56 rounded-lg border bg-slate-50 px-3 py-1 font-mono text-xs"
    />
  </div>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[840px] text-left font-mono text-xs">
      <thead>
        <tr class="border-b bg-slate-100/70 text-[10px] uppercase text-slate-500">
          <th class="px-3 py-2">Servicio / Pod</th>
          <th class="hidden md:table-cell px-3 py-2">Namespace</th>
          <th class="px-3 py-2">Estado</th>
          <th class="hidden lg:table-cell px-3 py-2">CPU</th>
          <th class="hidden lg:table-cell px-3 py-2">Mem</th>
          <th class="hidden xl:table-cell px-3 py-2">QPS</th>
          <th class="px-3 py-2 text-right">Reinicios</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr class="hover:bg-slate-50">
          <td class="px-3 py-2 font-semibold">auth-api-7d9f8c6b4d-x2kqj</td>
          <td class="hidden md:table-cell px-3 py-2">prod</td>
          <td class="px-3 py-2">
            <span class="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold uppercase">Healthy</span>
          </td>
          <td class="hidden lg:table-cell px-3 py-2">42%</td>
          <td class="hidden lg:table-cell px-3 py-2">61%</td>
          <td class="hidden xl:table-cell px-3 py-2">1.2k</td>
          <td class="px-3 py-2 text-right">0</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="px-3 py-2 font-semibold">redis-shard-03-0</td>
          <td class="hidden md:table-cell px-3 py-2">cache</td>
          <td class="px-3 py-2">
            <span class="rounded-full bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold uppercase">CrashLoop</span>
          </td>
          <td class="hidden lg:table-cell px-3 py-2">97%</td>
          <td class="hidden lg:table-cell px-3 py-2">96%</td>
          <td class="hidden xl:table-cell px-3 py-2">0</td>
          <td class="px-3 py-2 text-right font-bold">12</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;

export const PODS_TELEMETRY_TSX = `
import { useState } from 'react';

const ROWS = [
  { name: 'auth-api-7d9f8c6b4d-x2kqj', namespace: 'prod', health: 'Healthy', cpu: '42%', restarts: 0 },
  { name: 'payments-worker-5b7c9d2f8a-m4pzq', namespace: 'prod', health: 'Degraded', cpu: '78%', restarts: 3 },
  { name: 'redis-shard-03-0', namespace: 'cache', health: 'CrashLoop', cpu: '97%', restarts: 12 },
  {
    name: 'telemetry-drainer-6a8b3c1d9e-q7wrt',
    namespace: 'observability',
    health: 'Healthy',
    cpu: '23%',
    restarts: 0,
  },
];

export const PodsTelemetry = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const filtered = ROWS.filter(
    r =>
      query.trim() === '' ||
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.namespace.includes(query.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b p-4">
        <div>
          <h3 className="text-sm font-bold">TELEMETRÍA // PODS Y SERVICIOS</h3>
          <p className="font-mono text-xs">
            {filtered.length} pods · pág. {page}/{totalPages}
          </p>
        </div>
        <input
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Filtrar pod o namespace..."
          className="w-full sm:w-56 rounded-lg border bg-slate-50 px-3 py-1 font-mono text-xs"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[840px] text-left font-mono text-xs">
          <thead>
            <tr className="border-b bg-slate-100/70 text-[10px] uppercase text-slate-500">
              <th className="px-3 py-2">Servicio / Pod</th>
              <th className="hidden md:table-cell px-3 py-2">Namespace</th>
              <th className="px-3 py-2">Estado</th>
              <th className="hidden lg:table-cell px-3 py-2">CPU</th>
              <th className="px-3 py-2 text-right">Reinicios</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {visible.map(row => (
              <tr key={row.name} className="hover:bg-slate-50">
                <td className="px-3 py-2 font-semibold">{row.name}</td>
                <td className="hidden md:table-cell px-3 py-2">{row.namespace}</td>
                <td className="px-3 py-2">
                  <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase">
                    {row.health}
                  </span>
                </td>
                <td className="hidden lg:table-cell px-3 py-2">{row.cpu}</td>
                <td className="px-3 py-2 text-right">{row.restarts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t bg-slate-50/60 px-4 py-2.5">
        <span className="font-mono text-[11px]">
          {page} / {totalPages}
        </span>
        <div className="flex gap-1">
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
            ‹
          </button>
          <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
`;
