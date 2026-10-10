export const REPLICA_NODES_HTML = `
<div class="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b p-4">
    <div>
      <h3 class="text-sm font-bold">RÉPLICAS NVMe // AURORA-PRIMARY</h3>
      <p class="font-mono text-xs">6 nodos · replicación síncrona</p>
    </div>
    <input
      placeholder="Filtrar por id o zona..."
      class="w-full sm:w-64 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm"
    />
  </div>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[680px] text-left">
      <thead>
        <tr class="border-b bg-slate-100/70 font-mono text-[11px] uppercase text-slate-500">
          <th class="px-4 py-3">ID Réplica</th>
          <th class="px-4 py-3">Zona</th>
          <th class="hidden sm:table-cell px-4 py-3">Latencia</th>
          <th class="hidden md:table-cell px-4 py-3">IOPS</th>
          <th class="hidden lg:table-cell px-4 py-3">NVMe</th>
          <th class="px-4 py-3 text-right">Estado</th>
        </tr>
      </thead>
      <tbody class="divide-y text-sm">
        <tr class="hover:bg-slate-50">
          <td class="px-4 py-3 font-mono text-xs font-semibold text-blue-700">replica-01</td>
          <td class="px-4 py-3 font-mono text-xs">us-east-1a</td>
          <td class="hidden sm:table-cell px-4 py-3 font-mono text-xs">8ms</td>
          <td class="hidden md:table-cell px-4 py-3 font-mono text-xs">12.4k</td>
          <td class="hidden lg:table-cell px-4 py-3 font-mono text-xs">62%</td>
          <td class="px-4 py-3 text-right">
            <span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase">Sincronizada</span>
          </td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="px-4 py-3 font-mono text-xs font-semibold text-blue-700">replica-05</td>
          <td class="px-4 py-3 font-mono text-xs">us-west-2a</td>
          <td class="hidden sm:table-cell px-4 py-3 font-mono text-xs">52ms</td>
          <td class="hidden md:table-cell px-4 py-3 font-mono text-xs">5.2k</td>
          <td class="hidden lg:table-cell px-4 py-3 font-mono text-xs">93%</td>
          <td class="px-4 py-3 text-right">
            <span class="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold uppercase">Llena</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;

export const REPLICA_NODES_TSX = `
import { useState } from 'react';

const ROWS = [
  { id: 'replica-01', zone: 'us-east-1a', latency: '8ms', iops: '12.4k', nvme: '62%', state: 'Sincronizada' },
  { id: 'replica-02', zone: 'us-east-1b', latency: '11ms', iops: '11.8k', nvme: '58%', state: 'Sincronizada' },
  { id: 'replica-03', zone: 'eu-central-1a', latency: '34ms', iops: '8.1k', nvme: '81%', state: 'Retrasada' },
  { id: 'replica-05', zone: 'us-west-2a', latency: '52ms', iops: '5.2k', nvme: '93%', state: 'Llena' },
];

export const ReplicaNodes = () => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const filtered = ROWS.filter(
    r =>
      query.trim() === '' ||
      r.id.toLowerCase().includes(query.toLowerCase()) ||
      r.zone.toLowerCase().includes(query.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b p-4">
        <div>
          <h3 className="text-sm font-bold">RÉPLICAS NVMe // AURORA-PRIMARY</h3>
          <p className="font-mono text-xs">
            {filtered.length} nodos · {selected.length} seleccionadas
          </p>
        </div>
        <input
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Filtrar por id o zona..."
          className="w-full sm:w-64 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left">
          <thead>
            <tr className="border-b bg-slate-100/70 font-mono text-[11px] uppercase text-slate-500">
              <th className="w-10 px-4 py-3"></th>
              <th className="px-4 py-3">ID Réplica</th>
              <th className="px-4 py-3">Zona</th>
              <th className="hidden sm:table-cell px-4 py-3">Latencia</th>
              <th className="hidden md:table-cell px-4 py-3">IOPS</th>
              <th className="hidden lg:table-cell px-4 py-3">NVMe</th>
              <th className="px-4 py-3 text-right">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {visible.map(row => (
              <tr key={row.id} className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() =>
                      setSelected(s => (s.includes(row.id) ? s.filter(x => x !== row.id) : [...s, row.id]))
                    }
                  />
                </td>
                <td className="px-4 py-3 font-mono text-xs font-semibold text-blue-700">{row.id}</td>
                <td className="px-4 py-3 font-mono text-xs">{row.zone}</td>
                <td className="hidden sm:table-cell px-4 py-3 font-mono text-xs">{row.latency}</td>
                <td className="hidden md:table-cell px-4 py-3 font-mono text-xs">{row.iops}</td>
                <td className="hidden lg:table-cell px-4 py-3 font-mono text-xs">{row.nvme}</td>
                <td className="px-4 py-3 text-right">
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase">
                    {row.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t bg-slate-50/60 px-4 py-3">
        <span className="font-mono text-xs">
          pág. {page}/{totalPages}
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
