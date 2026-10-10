import { useState } from 'react';

interface AuditRow {
  id: string;
  service: string;
  dot: string;
  status: string;
  statusClasses: string;
  owner: string;
  latency: string;
  timestamp: string;
}

const ROWS: AuditRow[] = [
  {
    id: '#EV-98241',
    service: 'auth-microservice:v2.4.1',
    dot: 'bg-emerald-500',
    status: 'Completado',
    statusClasses: 'bg-emerald-100/70 text-emerald-700',
    owner: 'c.torres@zenith',
    latency: '128ms',
    timestamp: '2025-05-14 10:42:15',
  },
  {
    id: '#EV-98240',
    service: 'payment-gateway-proxy:v1.9',
    dot: 'bg-blue-600',
    status: 'Desplegado',
    statusClasses: 'bg-blue-100 text-blue-900',
    owner: 'm.santos@zenith',
    latency: '312ms',
    timestamp: '2025-05-14 10:39:50',
  },
  {
    id: '#EV-98239',
    service: 'telemetry-drainer-worker',
    dot: 'bg-slate-400',
    status: 'Canary_20%',
    statusClasses: 'bg-slate-200 text-slate-600',
    owner: 'pipeline-runner-bot',
    latency: '45ms',
    timestamp: '2025-05-14 10:25:01',
  },
  {
    id: '#EV-98238',
    service: 'cache-redis-shard-03',
    dot: 'bg-rose-600',
    status: 'Fallo Rollback',
    statusClasses: 'bg-rose-100 text-rose-800',
    owner: 'devops-oncall',
    latency: '920ms',
    timestamp: '2025-05-14 10:14:22',
  },
  {
    id: '#EV-98237',
    service: 'graphql-schema-stitcher',
    dot: 'bg-emerald-500',
    status: 'Completado',
    statusClasses: 'bg-emerald-100/70 text-emerald-700',
    owner: 'a.novak@zenith',
    latency: '88ms',
    timestamp: '2025-05-14 09:58:34',
  },
];

export interface AuditLogTableProps {
  totalRecords?: number;
}

export const AuditLogTable = ({ totalRecords = 1480 }: AuditLogTableProps) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState('');
  const [jump, setJump] = useState('1');

  const totalPages = Math.max(1, Math.ceil(totalRecords / rowsPerPage));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * rowsPerPage + 1;
  const end = Math.min(current * rowsPerPage, totalRecords);

  const filtered = ROWS.filter(
    (r) =>
      filter.trim() === '' ||
      r.service.toLowerCase().includes(filter.toLowerCase()) ||
      r.id.toLowerCase().includes(filter.toLowerCase()),
  );

  const goTo = (next: number) => {
    const clamped = Math.min(Math.max(1, next), totalPages);
    setPage(clamped);
    setJump(String(clamped));
  };

  const handleJump = () => {
    const target = Number(jump);
    if (Number.isInteger(target) && target >= 1 && target <= totalPages) {
      setPage(target);
    } else {
      setJump(String(current));
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="material-symbols-outlined text-xl text-blue-600">
            dataset
          </span>
          <div>
            <h3 className="text-sm font-bold text-slate-900">REGISTRO DE DESPLIEGUES // CLUSTER PROD-EU-1</h3>
            <p className="font-mono text-xs text-slate-500">SCHEMA: AUDIT_TELEMETRY_LOGS • TOTAL_ROWS: {totalRecords.toLocaleString('es')}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <span aria-hidden="true" className="material-symbols-outlined absolute left-2.5 top-2 text-base text-slate-400">
              search
            </span>
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filtrar eventos..."
              type="text"
              aria-label="Filtrar eventos"
              className="w-44 rounded-lg border border-slate-300 bg-slate-100 py-1 pl-8 pr-3 font-mono text-sm focus:border-blue-600 focus:bg-white focus:outline-none sm:w-56"
            />
          </div>
          <button
            type="button"
            title="Recargar dataset"
            onClick={() => setFilter('')}
            className="rounded-lg border border-slate-300 p-1.5 text-slate-500 hover:bg-slate-100"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              refresh
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/70 font-mono text-xs uppercase tracking-wider text-slate-500">
              <th className="w-10 px-4 py-3">
                <input type="checkbox" aria-label="Seleccionar todos" className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
              </th>
              <th className="px-4 py-3 font-semibold">EVENT_ID</th>
              <th className="px-4 py-3 font-semibold">SERVICIO</th>
              <th className="px-4 py-3 font-semibold">ESTADO</th>
              <th className="px-4 py-3 font-semibold">RESPONSABLE</th>
              <th className="px-4 py-3 font-semibold">LATENCIA</th>
              <th className="px-4 py-3 text-right font-semibold">TIMESTAMP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filtered.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-slate-100/40">
                <td className="px-4 py-3">
                  <input type="checkbox" aria-label={`Seleccionar ${row.id}`} className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
                </td>
                <td className="px-4 py-3 font-mono font-semibold text-blue-600">{row.id}</td>
                <td className="px-4 py-3 font-medium text-slate-900">
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${row.dot}`} />
                    <span>{row.service}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${row.statusClasses}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-slate-500">{row.owner}</td>
                <td className="px-4 py-3 font-mono text-slate-500">{row.latency}</td>
                <td className="px-4 py-3 text-right font-mono text-slate-500">{row.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-slate-100/60 p-4 sm:p-5 md:flex-row">
        <div className="flex w-full flex-wrap items-center gap-3 md:w-auto">
          <span className="text-sm text-slate-900">
            Mostrando{' '}
            <span className="font-mono font-semibold text-blue-600">
              {start} - {end}
            </span>{' '}
            de <span className="font-mono font-semibold">{totalRecords.toLocaleString('es')}</span> registros
          </span>
          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-600">
            <span>Filas:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setPage(1);
                setJump('1');
              }}
              aria-label="Filas por página"
              className="rounded border border-slate-300 bg-white px-2 py-1 font-mono text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
            >
              {[5, 10, 25, 50].map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-2 md:w-auto md:justify-end">
          <div className="flex items-center gap-1">
            <button type="button" title="Primera página" disabled={current === 1} onClick={() => goTo(1)} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40">
              <span aria-hidden="true" className="material-symbols-outlined text-base">first_page</span>
            </button>
            <button type="button" title="Página anterior" disabled={current === 1} onClick={() => goTo(current - 1)} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40">
              <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_left</span>
            </button>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => goTo(p)}
                className={
                  p === current
                    ? 'h-8 w-8 rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm'
                    : 'h-8 w-8 rounded-lg text-sm font-medium text-slate-600 transition-colors hover:bg-white'
                }
              >
                {p}
              </button>
            ))}
            <span className="w-6 text-center font-mono text-xs text-slate-400">...</span>
            <button type="button" onClick={() => goTo(totalPages)} className="h-8 w-8 rounded-lg text-sm font-medium text-slate-600 transition-colors hover:bg-white">
              {totalPages}
            </button>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" title="Página siguiente" disabled={current >= totalPages} onClick={() => goTo(current + 1)} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40">
              <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
            </button>
            <button type="button" title="Última página" disabled={current >= totalPages} onClick={() => goTo(totalPages)} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40">
              <span aria-hidden="true" className="material-symbols-outlined text-base">last_page</span>
            </button>
          </div>
          <div className="hidden items-center gap-1 border-l border-slate-300 pl-2 xl:flex">
            <span className="font-mono text-xs text-slate-600">Ir:</span>
            <input
              value={jump}
              onChange={(e) => setJump(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleJump();
              }}
              type="number"
              min={1}
              max={totalPages}
              aria-label="Saltar a página"
              className="w-14 rounded border border-slate-300 bg-white px-1.5 py-0.5 text-center font-mono text-xs text-slate-900"
            />
            <button type="button" onClick={handleJump} className="rounded bg-blue-600 px-2 py-0.5 font-mono text-xs text-white transition-colors hover:bg-blue-700">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
