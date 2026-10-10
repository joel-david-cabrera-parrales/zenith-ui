export const IAM_AUDIT_HTML = `
<div class="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 border-b p-4">
    <div>
      <h3 class="text-sm font-bold">AUDITORÍA IAM // ZERO-TRUST</h3>
      <p class="font-mono text-xs">6 eventos · UTC</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-2">
      <div class="flex gap-1">
        <button class="rounded-full bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-white">Todas</button
        ><button class="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[11px]">Critical</button>
      </div>
      <input
        placeholder="Actor, acción o ID..."
        class="w-full sm:w-52 rounded-lg border bg-slate-50 px-3 py-1 font-mono text-xs"
      />
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[860px] text-left font-mono text-xs">
      <thead>
        <tr class="border-b bg-slate-100/70 text-[10px] uppercase text-slate-500">
          <th class="hidden md:table-cell px-3 py-2">Timestamp UTC</th>
          <th class="px-3 py-2">Event ID</th>
          <th class="px-3 py-2">Actor</th>
          <th class="hidden lg:table-cell px-3 py-2">IP / Geo</th>
          <th class="px-3 py-2">Acción</th>
          <th class="px-3 py-2">Severidad</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr class="hover:bg-slate-50">
          <td class="hidden md:table-cell px-3 py-2">2025-05-14 10:42:15</td>
          <td class="px-3 py-2 font-semibold text-blue-700">#EV-98241</td>
          <td class="px-3 py-2">c.torres@zenith</td>
          <td class="hidden lg:table-cell px-3 py-2">84.121.9.44 · Madrid</td>
          <td class="px-3 py-2">iam.roleGranted</td>
          <td class="px-3 py-2">
            <span class="rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold uppercase">info</span>
          </td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="hidden md:table-cell px-3 py-2">2025-05-14 10:14:22</td>
          <td class="px-3 py-2 font-semibold text-blue-700">#EV-98238</td>
          <td class="px-3 py-2">desconocido</td>
          <td class="hidden lg:table-cell px-3 py-2">185.220.70.9 · Tor</td>
          <td class="px-3 py-2">login.failed</td>
          <td class="px-3 py-2">
            <span class="rounded-full bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold uppercase">critical</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;

export const IAM_AUDIT_TSX = `
import { useState } from 'react';

const ROWS = [
  { id: 'EV-98241', actor: 'c.torres@zenith', action: 'iam.roleGranted', severity: 'info' },
  { id: 'EV-98240', actor: 'm.santos@zenith', action: 'policy.updated', severity: 'warning' },
  { id: 'EV-98238', actor: 'desconocido', action: 'login.failed', severity: 'critical' },
  { id: 'EV-98237', actor: 'a.novak@zenith', action: 'mfa.enforced', severity: 'info' },
];

const FILTERS = ['all', 'info', 'warning', 'critical'] as const;

export const IamAudit = () => {
  const [query, setQuery] = useState('');
  const [severity, setSeverity] = useState<typeof FILTERS[number]>('all');
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const filtered = ROWS.filter(
    r =>
      (severity === 'all' || r.severity === severity) &&
      (query.trim() === '' ||
        r.actor.toLowerCase().includes(query.toLowerCase()) ||
        r.action.includes(query.toLowerCase()))
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 border-b p-4">
        <div>
          <h3 className="text-sm font-bold">AUDITORÍA IAM // ZERO-TRUST</h3>
          <p className="font-mono text-xs">
            {filtered.length} eventos · pág. {page}/{totalPages}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex gap-1">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => {
                  setSeverity(f);
                  setPage(1);
                }}
                className={
                  severity === f
                    ? 'rounded-full bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-white'
                    : 'rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[11px]'
                }
              >
                {f}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Actor, acción o ID..."
            className="w-full sm:w-52 rounded-lg border bg-slate-50 px-3 py-1 font-mono text-xs"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-left font-mono text-xs">
          <thead>
            <tr className="border-b bg-slate-100/70 text-[10px] uppercase text-slate-500">
              <th className="px-3 py-2">Event ID</th>
              <th className="px-3 py-2">Actor</th>
              <th className="px-3 py-2">Acción</th>
              <th className="px-3 py-2">Severidad</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {visible.map(row => (
              <tr key={row.id} className="hover:bg-slate-50">
                <td className="px-3 py-2 font-semibold text-blue-700">#{row.id}</td>
                <td className="px-3 py-2">{row.actor}</td>
                <td className="px-3 py-2">{row.action}</td>
                <td className="px-3 py-2">
                  <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase">
                    {row.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t bg-slate-50/60 px-4 py-2.5">
        <span className="font-mono text-[11px]">
          {page}/{totalPages}
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
