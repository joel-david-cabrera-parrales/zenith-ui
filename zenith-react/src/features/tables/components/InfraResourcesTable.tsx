import { Fragment, useState } from 'react';

interface Replica {
  id: string;
  zone: string;
  latency: string;
  iops: string;
  state: string;
  stateClasses: string;
}

interface InfraRow {
  id: string;
  name: string;
  kind: string;
  icon: string;
  region: string;
  status: string;
  statusClasses: string;
  dot: string;
  cpu: number;
  sla: string;
  slaClasses: string;
  replicas: Replica[];
}

const ROWS: InfraRow[] = [
  {
    id: 'aurora-db',
    name: 'aurora-db-cluster-primary',
    kind: 'RDS Aurora',
    icon: 'database',
    region: 'us-east-1',
    status: 'Saludable',
    statusClasses: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500',
    cpu: 42,
    sla: 'Sin alertas',
    slaClasses: 'text-slate-500',
    replicas: [
      { id: 'replica-01', zone: 'us-east-1a', latency: '8ms', iops: '12.4k', state: 'Sincronizada', stateClasses: 'bg-emerald-100 text-emerald-700' },
      { id: 'replica-02', zone: 'us-east-1b', latency: '11ms', iops: '11.8k', state: 'Sincronizada', stateClasses: 'bg-emerald-100 text-emerald-700' },
    ],
  },
  {
    id: 'k8s-gateway',
    name: 'k8s-gateway-edge-09',
    kind: 'Kubernetes',
    icon: 'deployed_code',
    region: 'eu-central-1',
    status: 'Advertencia',
    statusClasses: 'bg-amber-100 text-amber-800',
    dot: 'bg-amber-500',
    cpu: 78,
    sla: 'Pico p99 412ms',
    slaClasses: 'text-amber-700',
    replicas: [
      { id: 'pod-21', zone: 'eu-central-1a', latency: '38ms', iops: '8.1k', state: 'Degradado', stateClasses: 'bg-amber-100 text-amber-800' },
    ],
  },
  {
    id: 's3-cold',
    name: 's3-cold-storage-archive',
    kind: 'S3 Glacier',
    icon: 'hard_drive',
    region: 'us-west-2',
    status: 'Saludable',
    statusClasses: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500',
    cpu: 12,
    sla: 'Sin alertas',
    slaClasses: 'text-slate-500',
    replicas: [],
  },
  {
    id: 'redis-01',
    name: 'redis-cache-shard-01',
    kind: 'ElastiCache',
    icon: 'bolt',
    region: 'us-east-1',
    status: 'Crítico',
    statusClasses: 'bg-rose-100 text-rose-800',
    dot: 'bg-rose-600',
    cpu: 94,
    sla: 'Evicciones 2.1k/s',
    slaClasses: 'text-rose-700',
    replicas: [
      { id: 'shard-01a', zone: 'us-east-1a', latency: '2ms', iops: '48k', state: 'Activa', stateClasses: 'bg-emerald-100 text-emerald-700' },
      { id: 'shard-01b', zone: 'us-east-1c', latency: '3ms', iops: '44k', state: 'Activa', stateClasses: 'bg-emerald-100 text-emerald-700' },
    ],
  },
  {
    id: 'elastic-02',
    name: 'elastic-search-rebalance',
    kind: 'OpenSearch',
    icon: 'search',
    region: 'eu-west-1',
    status: 'Rebalanceo',
    statusClasses: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-600',
    cpu: 63,
    sla: 'Shards 14/18',
    slaClasses: 'text-blue-700',
    replicas: [],
  },
  {
    id: 'kafka-03',
    name: 'kafka-event-stream-03',
    kind: 'MSK Kafka',
    icon: 'stream',
    region: 'us-east-1',
    status: 'Saludable',
    statusClasses: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500',
    cpu: 35,
    sla: 'Sin alertas',
    slaClasses: 'text-slate-500',
    replicas: [],
  },
];

type SortKey = 'name' | 'region' | 'cpu';

export const InfraResourcesTable = () => {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<1 | -1>(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>('aurora-db');
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const filtered = ROWS.filter(
    (r) =>
      query.trim() === '' ||
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.region.toLowerCase().includes(query.toLowerCase()),
  ).sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * sortDir;
    return String(av).localeCompare(String(bv)) * sortDir;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);

  const toggleSort = (key: SortKey) => {
    setPage(1);
    if (key === sortKey) {
      setSortDir((d) => (d === 1 ? -1 : 1));
    } else {
      setSortKey(key);
      setSortDir(1);
    }
  };

  const toggleSelect = (id: string) => {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  const toggleAll = () => {
    setSelected((s) => (s.length === visible.length ? [] : visible.map((r) => r.id)));
  };

  const sortIcon = (key: SortKey) =>
    sortKey === key ? (sortDir === 1 ? 'arrow_upward' : 'arrow_downward') : 'swap_vert';

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <span aria-hidden="true" className="material-symbols-outlined absolute top-2 left-2.5 text-lg text-slate-400">
            filter_alt
          </span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Buscar recurso, tag o centro de costos..."
            aria-label="Buscar recurso"
            className="w-full rounded-lg border border-slate-300 bg-slate-50 py-1.5 pr-3 pl-9 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-900">
            <span aria-hidden="true" className="material-symbols-outlined text-base text-blue-600">
              public
            </span>
            Región: <strong>us-east-1, eu-central-1</strong>
          </span>
          <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-50">
            <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-500">
              file_download
            </span>
            Exportar
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/70 font-mono text-[11px] tracking-wider text-slate-500 uppercase">
              <th className="w-10 px-4 py-3">
                <input type="checkbox" aria-label="Seleccionar visibles" checked={visible.length > 0 && selected.length === visible.length} onChange={toggleAll} className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
              </th>
              <th className="w-8 px-2 py-3" aria-label="Expandir" />
              <th className="px-4 py-3 font-semibold">
                <button type="button" onClick={() => toggleSort('name')} className="inline-flex items-center gap-1 uppercase hover:text-slate-900">
                  Recurso
                  <span aria-hidden="true" className="material-symbols-outlined text-sm">{sortIcon('name')}</span>
                </button>
              </th>
              <th className="hidden px-4 py-3 font-semibold md:table-cell">
                <button type="button" onClick={() => toggleSort('region')} className="inline-flex items-center gap-1 uppercase hover:text-slate-900">
                  Región
                  <span aria-hidden="true" className="material-symbols-outlined text-sm">{sortIcon('region')}</span>
                </button>
              </th>
              <th className="px-4 py-3 font-semibold">Estado</th>
              <th className="hidden px-4 py-3 font-semibold lg:table-cell">
                <button type="button" onClick={() => toggleSort('cpu')} className="inline-flex items-center gap-1 uppercase hover:text-slate-900">
                  CPU
                  <span aria-hidden="true" className="material-symbols-outlined text-sm">{sortIcon('cpu')}</span>
                </button>
              </th>
              <th className="hidden px-4 py-3 font-semibold xl:table-cell">Alertas SLA</th>
              <th className="px-4 py-3 text-right font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {visible.map((row) => (
              <Fragment key={row.id}>
                <tr className={`transition-colors hover:bg-slate-50 ${expanded === row.id ? 'bg-blue-50/40' : ''}`}>
                  <td className="px-4 py-3">
                    <input type="checkbox" aria-label={`Seleccionar ${row.name}`} checked={selected.includes(row.id)} onChange={() => toggleSelect(row.id)} className="rounded border-slate-300 text-blue-600 focus:ring-blue-600/20" />
                  </td>
                  <td className="px-2 py-3">
                    <button type="button" aria-label={expanded === row.id ? `Contraer ${row.name}` : `Expandir ${row.name}`} aria-expanded={expanded === row.id} onClick={() => setExpanded((e) => (e === row.id ? null : row.id))} className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                      <span aria-hidden="true" className="material-symbols-outlined text-base">
                        {expanded === row.id ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <span aria-hidden="true" className="material-symbols-outlined text-lg">{row.icon}</span>
                      </span>
                      <div>
                        <p className="font-mono text-xs font-semibold text-slate-900">{row.name}</p>
                        <p className="font-mono text-[10px] text-slate-500">{row.kind}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3 font-mono text-xs text-slate-500 md:table-cell">{row.region}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${row.statusClasses}`}>
                      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${row.dot}`} />
                      {row.status}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-1.5 rounded-full ${row.cpu >= 90 ? 'bg-rose-500' : row.cpu >= 60 ? 'bg-amber-500' : 'bg-blue-600'}`} style={{ width: `${row.cpu}%` }} />
                      </div>
                      <span className="font-mono text-xs text-slate-600">{row.cpu}%</span>
                    </div>
                  </td>
                  <td className={`hidden px-4 py-3 font-mono text-xs xl:table-cell ${row.slaClasses}`}>{row.sla}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button type="button" title="Reiniciar snapshot" className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                        <span aria-hidden="true" className="material-symbols-outlined text-base">restart_alt</span>
                      </button>
                      <button type="button" title="Más acciones" className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                        <span aria-hidden="true" className="material-symbols-outlined text-base">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {expanded === row.id && (
                  <tr className="bg-slate-50/70">
                    <td colSpan={8} className="px-4 py-3 md:pl-14">
                      {row.replicas.length === 0 ? (
                        <p className="rounded-lg border border-dashed border-slate-300 bg-white px-3 py-2 font-mono text-xs text-slate-500">
                          Sin réplicas asociadas — nodo único en {row.region}.
                        </p>
                      ) : (
                        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                          <table className="w-full min-w-[520px] text-left">
                            <thead>
                              <tr className="border-b border-slate-100 font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                                <th className="px-3 py-2 font-semibold">ID Réplica</th>
                                <th className="px-3 py-2 font-semibold">Zona</th>
                                <th className="px-3 py-2 font-semibold">Latencia</th>
                                <th className="px-3 py-2 font-semibold">IOPS</th>
                                <th className="px-3 py-2 text-right font-semibold">Estado</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {row.replicas.map((rep) => (
                                <tr key={rep.id}>
                                  <td className="px-3 py-2 font-mono text-xs font-semibold text-blue-700">{rep.id}</td>
                                  <td className="px-3 py-2 font-mono text-xs text-slate-500">{rep.zone}</td>
                                  <td className="px-3 py-2 font-mono text-xs text-slate-600">{rep.latency}</td>
                                  <td className="px-3 py-2 font-mono text-xs text-slate-600">{rep.iops}</td>
                                  <td className="px-3 py-2 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${rep.stateClasses}`}>
                                      {rep.state}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-sm text-slate-500">
                  Sin resultados para “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 bg-slate-50/60 px-4 py-3 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">
          {selected.length} seleccionados · pág. {current}/{totalPages}
        </p>
        <div className="flex items-center gap-1">
          <button type="button" disabled={current === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_left</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} type="button" onClick={() => setPage(p)} aria-current={p === current ? 'page' : undefined} className={p === current ? 'h-8 w-8 rounded-lg bg-blue-600 text-xs font-bold text-white' : 'h-8 w-8 rounded-lg text-xs text-slate-600 hover:bg-white'}>
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
