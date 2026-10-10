import { useState } from 'react';

type Severity = 'info' | 'warning' | 'critical';

interface AuditEvent {
  id: string;
  timestamp: string;
  actor: string;
  initials: string;
  ip: string;
  geo: string;
  action: string;
  severity: Severity;
  code: number;
}

const ROWS: AuditEvent[] = [
  { id: 'EV-98241', timestamp: '2025-05-14 10:42:15', actor: 'c.torres@zenith', initials: 'CT', ip: '84.121.9.44', geo: 'Madrid, ES', action: 'iam.roleGranted', severity: 'info', code: 200 },
  { id: 'EV-98240', timestamp: '2025-05-14 10:39:50', actor: 'm.santos@zenith', initials: 'MS', ip: '81.44.203.11', geo: 'CDMX, MX', action: 'policy.updated', severity: 'warning', code: 202 },
  { id: 'EV-98239', timestamp: '2025-05-14 10:25:01', actor: 'pipeline-bot', initials: 'PB', ip: '10.0.4.18', geo: 'VPC interna', action: 'token.rotated', severity: 'info', code: 200 },
  { id: 'EV-98238', timestamp: '2025-05-14 10:14:22', actor: 'desconocido', initials: '??', ip: '185.220.70.9', geo: 'Tor exit', action: 'login.failed', severity: 'critical', code: 401 },
  { id: 'EV-98237', timestamp: '2025-05-14 09:58:34', actor: 'a.novak@zenith', initials: 'AN', ip: '90.12.77.200', geo: 'París, FR', action: 'mfa.enforced', severity: 'info', code: 200 },
  { id: 'EV-98236', timestamp: '2025-05-14 09:41:02', actor: 'j.weiss@zenith', initials: 'JW', ip: '77.90.14.5', geo: 'Berlín, DE', action: 'bucket.policyOpen', severity: 'critical', code: 403 },
];

const SEVERITIES: { value: Severity | 'all'; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'info', label: 'Info' },
  { value: 'warning', label: 'Warning' },
  { value: 'critical', label: 'Critical' },
];

const sevClasses = (s: Severity) =>
  s === 'critical'
    ? 'bg-rose-100 text-rose-800'
    : s === 'warning'
      ? 'bg-amber-100 text-amber-800'
      : 'bg-blue-100 text-blue-800';

export function IamAuditTable() {
  const [query, setQuery] = useState('');
  const [severity, setSeverity] = useState<Severity | 'all'>('all');
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = ROWS.filter(
    (r) =>
      (severity === 'all' || r.severity === severity) &&
      (query.trim() === '' ||
        r.actor.toLowerCase().includes(query.toLowerCase()) ||
        r.action.toLowerCase().includes(query.toLowerCase()) ||
        r.id.toLowerCase().includes(query.toLowerCase())),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:p-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">AUDITORÍA IAM // ACCESO ZERO-TRUST</h3>
          <p className="font-mono text-xs text-slate-500">{filtered.length} eventos · UTC · retenidos 400 días</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex gap-1" role="group" aria-label="Filtrar por severidad">
            {SEVERITIES.map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => {
                  setSeverity(s.value);
                  setPage(1);
                }}
                aria-pressed={severity === s.value}
                className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${severity === s.value ? 'bg-slate-900 font-semibold text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-52">
            <span aria-hidden="true" className="material-symbols-outlined absolute top-1.5 left-2.5 text-base text-slate-400">
              search
            </span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Actor, acción o ID..."
              aria-label="Filtrar eventos"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-1 pr-3 pl-8 font-mono text-xs outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/70 font-mono text-[10px] tracking-wider text-slate-500 uppercase">
              <th className="w-8 px-3 py-2">
                <input type="checkbox" aria-label="Seleccionar visibles" className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
              </th>
              <th className="hidden px-3 py-2 font-semibold md:table-cell">Timestamp UTC</th>
              <th className="px-3 py-2 font-semibold">Event ID</th>
              <th className="px-3 py-2 font-semibold">Actor</th>
              <th className="hidden px-3 py-2 font-semibold lg:table-cell">IP / Geo</th>
              <th className="px-3 py-2 font-semibold">Acción</th>
              <th className="px-3 py-2 font-semibold">Severidad</th>
              <th className="hidden px-3 py-2 text-right font-semibold xl:table-cell">Código</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono text-xs">
            {visible.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-slate-50">
                <td className="px-3 py-2">
                  <input type="checkbox" aria-label={`Seleccionar ${row.id}`} className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
                </td>
                <td className="hidden px-3 py-2 whitespace-nowrap text-slate-500 md:table-cell">{row.timestamp}</td>
                <td className="px-3 py-2 font-semibold text-blue-700">#{row.id}</td>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
                      {row.initials}
                    </span>
                    <span className="max-w-36 truncate text-slate-900" title={row.actor}>{row.actor}</span>
                  </div>
                </td>
                <td className="hidden px-3 py-2 text-slate-500 lg:table-cell">
                  {row.ip} · {row.geo}
                </td>
                <td className="px-3 py-2 text-slate-900">{row.action}</td>
                <td className="px-3 py-2">
                  <span className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase ${sevClasses(row.severity)}`}>
                    {row.severity}
                  </span>
                </td>
                <td className={`hidden px-3 py-2 text-right xl:table-cell ${row.code >= 400 ? 'font-bold text-rose-700' : 'text-slate-500'}`}>
                  {row.code}
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={8} className="px-3 py-6 text-center text-slate-500">
                  Sin eventos con ese filtro.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 bg-slate-50/60 px-4 py-2.5 sm:flex-row">
        <p className="font-mono text-[11px] text-slate-500">pág. {current}/{totalPages}</p>
        <div className="flex items-center gap-1">
          <button type="button" disabled={current === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded border border-slate-300 bg-white p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button type="button" disabled={current === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="rounded border border-slate-300 bg-white p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
