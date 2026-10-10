export const INFRA_RESOURCES_HTML = `<div class="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <div class="flex flex-col gap-3 border-b border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between">
    <input placeholder="Buscar recurso, tag o centro de costos..." class="w-full lg:max-w-sm rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm" />
    <div class="flex gap-2"><span class="rounded-lg border bg-slate-50 px-3 py-1.5 text-xs">Región: <strong>us-east-1, eu-central-1</strong></span><button class="rounded-lg border px-3 py-1.5 text-xs">Exportar</button></div>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[760px] text-left">
      <thead><tr class="border-b bg-slate-100/70 font-mono text-[11px] uppercase text-slate-500"><th class="px-4 py-3">Recurso</th><th class="hidden md:table-cell px-4 py-3">Región</th><th class="px-4 py-3">Estado</th><th class="hidden lg:table-cell px-4 py-3">CPU</th><th class="px-4 py-3 text-right">Acciones</th></tr></thead>
      <tbody class="divide-y divide-slate-100 text-sm">
        <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-mono text-xs font-semibold">aurora-db-cluster-primary</td><td class="hidden md:table-cell px-4 py-3 font-mono text-xs">us-east-1</td><td class="px-4 py-3"><span class="rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-emerald-700">Saludable</span></td><td class="hidden lg:table-cell px-4 py-3"><div class="h-1.5 w-20 rounded-full bg-slate-100"><div class="h-1.5 w-2/5 rounded-full bg-blue-600"></div></div></td><td class="px-4 py-3 text-right">···</td></tr>
        <tr class="bg-slate-50/70"><td colspan="5" class="px-4 py-3 md:pl-14"><div class="rounded-lg border bg-white"><table class="w-full text-left"><thead><tr class="font-mono text-[10px] uppercase text-slate-500"><th class="px-3 py-2">ID Réplica</th><th class="px-3 py-2">Zona</th><th class="px-3 py-2">Latencia</th><th class="px-3 py-2 text-right">Estado</th></tr></thead><tbody><tr><td class="px-3 py-2 font-mono text-xs text-blue-700">replica-01</td><td class="px-3 py-2 font-mono text-xs">us-east-1a</td><td class="px-3 py-2 font-mono text-xs">8ms</td><td class="px-3 py-2 text-right"><span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px]">Sincronizada</span></td></tr></tbody></table></div></td></tr>
      </tbody>
    </table>
  </div>
  <div class="flex flex-col sm:flex-row items-center justify-between gap-3 border-t bg-slate-50/60 px-4 py-3"><span class="font-mono text-xs">pág. 1/2</span><div class="flex gap-1"><button class="h-8 w-8 rounded-lg bg-blue-600 text-xs font-bold text-white">1</button><button class="h-8 w-8 rounded-lg text-xs">2</button></div></div>
</div>`;

export const INFRA_RESOURCES_TSX = `import { Fragment, useState } from 'react';

const ROWS = [
  { id: 'aurora-db', name: 'aurora-db-cluster-primary', region: 'us-east-1', status: 'Saludable', badge: 'bg-emerald-100 text-emerald-700', cpu: 42 },
  { id: 'k8s-gateway', name: 'k8s-gateway-edge-09', region: 'eu-central-1', status: 'Advertencia', badge: 'bg-amber-100 text-amber-800', cpu: 78 },
  { id: 'redis-01', name: 'redis-cache-shard-01', region: 'us-east-1', status: 'Crítico', badge: 'bg-rose-100 text-rose-800', cpu: 94 },
  { id: 's3-cold', name: 's3-cold-storage-archive', region: 'us-west-2', status: 'Saludable', badge: 'bg-emerald-100 text-emerald-700', cpu: 12 },
];

const REPLICAS = [
  { id: 'replica-01', zone: 'us-east-1a', latency: '8ms' },
  { id: 'replica-02', zone: 'us-east-1b', latency: '11ms' },
];

export const InfraResources = () => {
  const [query, setQuery] = useState('');
  const [asc, setAsc] = useState(true);
  const [expanded, setExpanded] = useState<string | null>('aurora-db');
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const filtered = ROWS.filter((r) => query.trim() === '' || r.name.toLowerCase().includes(query.toLowerCase()) || r.region.includes(query.toLowerCase())).sort((a, b) => (asc ? a.cpu - b.cpu : b.cpu - a.cpu));
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between">
        <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Buscar recurso, tag o centro de costos..." className="w-full lg:max-w-sm rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm" />
        <button onClick={() => setAsc((v) => !v)} className="rounded-lg border px-3 py-1.5 text-xs">CPU {asc ? '↑' : '↓'}</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead><tr className="border-b bg-slate-100/70 font-mono text-[11px] uppercase text-slate-500"><th className="w-10 px-4 py-3"></th><th className="w-8 px-2 py-3"></th><th className="px-4 py-3">Recurso</th><th className="hidden md:table-cell px-4 py-3">Región</th><th className="px-4 py-3">Estado</th><th className="hidden lg:table-cell px-4 py-3">CPU</th></tr></thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {visible.map((row) => (
              <Fragment key={row.id}>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3"><input type="checkbox" checked={selected.includes(row.id)} onChange={() => setSelected((s) => (s.includes(row.id) ? s.filter((x) => x !== row.id) : [...s, row.id]))} /></td>
                  <td className="px-2 py-3"><button onClick={() => setExpanded((e) => (e === row.id ? null : row.id))}>{expanded === row.id ? '−' : '+'}</button></td>
                  <td className="px-4 py-3 font-mono text-xs font-semibold">{row.name}</td>
                  <td className="hidden md:table-cell px-4 py-3 font-mono text-xs">{row.region}</td>
                  <td className="px-4 py-3"><span className={'rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase ' + row.badge}>{row.status}</span></td>
                  <td className="hidden lg:table-cell px-4 py-3"><div className="h-1.5 w-20 rounded-full bg-slate-100"><div className="h-1.5 rounded-full bg-blue-600" style={{ width: row.cpu + '%' }}></div></div></td>
                </tr>
                {expanded === row.id && (
                  <tr className="bg-slate-50/70"><td colSpan={6} className="px-4 py-3 md:pl-14"><div className="rounded-lg border bg-white"><table className="w-full text-left"><thead><tr className="font-mono text-[10px] uppercase text-slate-500"><th className="px-3 py-2">ID Réplica</th><th className="px-3 py-2">Zona</th><th className="px-3 py-2 text-right">Latencia</th></tr></thead><tbody>{REPLICAS.map((rep) => (<tr key={rep.id}><td className="px-3 py-2 font-mono text-xs text-blue-700">{rep.id}</td><td className="px-3 py-2 font-mono text-xs">{rep.zone}</td><td className="px-3 py-2 text-right font-mono text-xs">{rep.latency}</td></tr>))}</tbody></table></div></td></tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t bg-slate-50/60 px-4 py-3"><span className="font-mono text-xs">{selected.length} seleccionados · pág. {page}/{totalPages}</span><div className="flex gap-1"><button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>‹</button><button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>›</button></div></div>
    </div>
  );
};`;
