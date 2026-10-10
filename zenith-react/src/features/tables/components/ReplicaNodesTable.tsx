import { useState } from 'react';

interface ReplicaRow {
  id: string;
  zone: string;
  latencyMs: number;
  iopsK: number;
  storagePct: number;
  state: string;
  stateClasses: string;
}

const ROWS: ReplicaRow[] = [
  { id: 'replica-01', zone: 'us-east-1a', latencyMs: 8, iopsK: 12.4, storagePct: 62, state: 'Sincronizada', stateClasses: 'bg-emerald-100 text-emerald-700' },
  { id: 'replica-02', zone: 'us-east-1b', latencyMs: 11, iopsK: 11.8, storagePct: 58, state: 'Sincronizada', stateClasses: 'bg-emerald-100 text-emerald-700' },
  { id: 'replica-03', zone: 'eu-central-1a', latencyMs: 34, iopsK: 8.1, storagePct: 81, state: 'Retrasada', stateClasses: 'bg-amber-100 text-amber-800' },
  { id: 'replica-04', zone: 'eu-west-1a', latencyMs: 29, iopsK: 9.6, storagePct: 44, state: 'Sincronizada', stateClasses: 'bg-emerald-100 text-emerald-700' },
  { id: 'replica-05', zone: 'us-west-2a', latencyMs: 52, iopsK: 5.2, storagePct: 93, state: 'Llena', stateClasses: 'bg-rose-100 text-rose-800' },
  { id: 'replica-06', zone: 'us-east-1c', latencyMs: 9, iopsK: 12.9, storagePct: 37, state: 'Sincronizada', stateClasses: 'bg-emerald-100 text-emerald-700' },
];

export const ReplicaNodesTable = () => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = ROWS.filter(
    (r) =>
      query.trim() === '' ||
      r.id.toLowerCase().includes(query.toLowerCase()) ||
      r.zone.toLowerCase().includes(query.toLowerCase()),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);

  const toggleSelect = (id: string) => {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <h3 className="text-sm font-bold text-slate-900">RÉPLICAS NVMe // CLUSTER AURORA-PRIMARY</h3>
          <p className="font-mono text-xs text-slate-500">6 nodos · replicación síncrona · {selected.length} seleccionadas</p>
        </div>
        <div className="relative w-full sm:w-64">
          <span aria-hidden="true" className="material-symbols-outlined absolute top-2 left-2.5 text-base text-slate-400">
            search
          </span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Filtrar por id o zona..."
            aria-label="Filtrar réplicas"
            className="w-full rounded-lg border border-slate-300 bg-slate-50 py-1.5 pr-3 pl-8 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/70 font-mono text-[11px] tracking-wider text-slate-500 uppercase">
              <th className="w-10 px-4 py-3">
                <input
                  type="checkbox"
                  aria-label="Seleccionar visibles"
                  checked={visible.length > 0 && selected.length === visible.length}
                  onChange={() => setSelected((s) => (s.length === visible.length ? [] : visible.map((r) => r.id)))}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20"
                />
              </th>
              <th className="px-4 py-3 font-semibold">ID Réplica</th>
              <th className="px-4 py-3 font-semibold">Zona / Región</th>
              <th className="hidden px-4 py-3 font-semibold sm:table-cell">Latencia</th>
              <th className="hidden px-4 py-3 font-semibold md:table-cell">IOPS Actual</th>
              <th className="hidden px-4 py-3 font-semibold lg:table-cell">Almacenamiento NVMe</th>
              <th className="px-4 py-3 text-right font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {visible.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-slate-50">
                <td className="px-4 py-3">
                  <input type="checkbox" aria-label={`Seleccionar ${row.id}`} checked={selected.includes(row.id)} onChange={() => toggleSelect(row.id)} className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
                </td>
                <td className="px-4 py-3 font-mono text-xs font-semibold text-blue-700">{row.id}</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-500">{row.zone}</td>
                <td className="hidden px-4 py-3 sm:table-cell">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
                      <div className={`h-1.5 rounded-full ${row.latencyMs > 40 ? 'bg-rose-500' : row.latencyMs > 20 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${Math.min(100, row.latencyMs * 2)}%` }} />
                    </div>
                    <span className="font-mono text-xs text-slate-600">{row.latencyMs}ms</span>
                  </div>
                </td>
                <td className="hidden px-4 py-3 font-mono text-xs text-slate-600 md:table-cell">{row.iopsK.toFixed(1)}k</td>
                <td className="hidden px-4 py-3 lg:table-cell">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
                      <div className={`h-1.5 rounded-full ${row.storagePct > 85 ? 'bg-rose-500' : 'bg-blue-600'}`} style={{ width: `${row.storagePct}%` }} />
                    </div>
                    <span className="font-mono text-xs text-slate-600">{row.storagePct}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`inline-flex rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${row.stateClasses}`}>
                    {row.state}
                  </span>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-slate-500">
                  Sin réplicas para “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 bg-slate-50/60 px-4 py-3 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">
          {filtered.length} réplicas · pág. {current}/{totalPages}
        </p>
        <div className="flex items-center gap-1">
          <button type="button" disabled={current === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_left</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} type="button" onClick={() => setPage(p)} className={p === current ? 'h-8 w-8 rounded-lg bg-blue-600 text-xs font-bold text-white' : 'h-8 w-8 rounded-lg text-xs text-slate-600 hover:bg-white'}>
              {p}
            </button>
          ))}
          <button type="button" disabled={current === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
