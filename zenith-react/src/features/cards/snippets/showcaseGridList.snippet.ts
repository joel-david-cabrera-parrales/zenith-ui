export const SHOWCASE_GRID_LIST_HTML = `
<div class="space-y-6">
  <div
    class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4"
  >
    <div class="flex flex-wrap items-center gap-2">
      <span class="font-mono text-[9px] text-slate-500 uppercase mr-1">Filter:</span>
      <button class="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">All Repositories (6)</button>
      <button class="px-3 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-200 text-xs font-semibold">
        Production
      </button>
      <button class="px-3 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-200 text-xs font-semibold">
        Staging
      </button>
      <button class="px-3 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-200 text-xs font-semibold">
        Archived
      </button>
    </div>
    <div class="flex items-center gap-3">
      <span class="font-mono text-[9px] text-slate-500 uppercase">Display Layout:</span>
      <div class="inline-flex p-1 rounded-lg bg-slate-50 border border-slate-200">
        <button class="px-3 py-1 rounded bg-white text-blue-600 shadow-sm font-mono text-[9px] font-bold">GRID</button>
        <button class="px-3 py-1 rounded text-slate-500 font-mono text-[9px] font-medium">LIST</button>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <h3 class="text-sm font-semibold text-slate-900">zenith-ingress-router</h3>
      <p class="text-sm text-slate-500 mb-4">Core Envoy-backed API gateway.</p>
      <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>TypeScript</span>
        <button class="text-blue-600 font-bold">OPEN REPO →</button>
      </div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <h3 class="text-sm font-semibold text-slate-900">telemetry-aggregator-daemon</h3>
      <p class="text-sm text-slate-500 mb-4">High throughput metrics daemon.</p>
      <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>Rust</span>
        <button class="text-blue-600 font-bold">OPEN REPO →</button>
      </div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <h3 class="text-sm font-semibold text-slate-900">vault-kms-connector</h3>
      <p class="text-sm text-slate-500 mb-4">Certificate rotation hook.</p>
      <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>Go</span>
        <button class="text-blue-600 font-bold">OPEN REPO →</button>
      </div>
    </div>
  </div>
</div>
`;

export const SHOWCASE_GRID_LIST_TSX = `
import { useState } from 'react';

const REPOS = [
  { name: 'zenith-ingress-router', env: 'production', desc: 'Core Envoy-backed API gateway.', lang: 'TypeScript' },
  { name: 'telemetry-aggregator-daemon', env: 'production', desc: 'High throughput metrics daemon.', lang: 'Rust' },
  { name: 'vault-kms-connector', env: 'production', desc: 'Certificate rotation hook.', lang: 'Go' },
  { name: 'proto-schemas-registry', env: 'staging', desc: 'Protobuf and gRPC contracts.', lang: 'Protocol Buffers' },
  { name: 'zenith-ui-primitives', env: 'production', desc: 'Tailwind component package.', lang: 'TypeScript / CSS' },
  { name: 'event-webhook-dispatcher', env: 'production', desc: 'At-least-once webhook broker.', lang: 'Go' },
];

const FILTERS = [
  { id: 'all', label: 'All Repositories' },
  { id: 'production', label: 'Production' },
  { id: 'staging', label: 'Staging' },
  { id: 'archived', label: 'Archived' },
];

export const ShowcaseGridList = () => {
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('grid');
  const visible = filter === 'all' ? REPOS : REPOS.filter(repo => repo.env === filter);
  const countFor = (id: string) => (id === 'all' ? REPOS.length : REPOS.filter(repo => repo.env === id).length);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[9px] text-slate-500 uppercase mr-1">Filter:</span>
          {FILTERS.map(option => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id)}
              aria-pressed={filter === option.id}
              className={
                filter === option.id
                  ? 'px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold'
                  : 'px-3 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-200 text-xs font-semibold'
              }
            >
              {option.label} ({countFor(option.id)})
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] text-slate-500 uppercase">Display Layout:</span>
          <div className="inline-flex p-1 rounded-lg bg-slate-50 border border-slate-200">
            <button
              onClick={() => setView('grid')}
              aria-pressed={view === 'grid'}
              className={
                view === 'grid'
                  ? 'px-3 py-1 rounded bg-white text-blue-600 shadow-sm font-mono text-[9px] font-bold'
                  : 'px-3 py-1 rounded text-slate-500 font-mono text-[9px] font-medium'
              }
            >
              GRID
            </button>
            <button
              onClick={() => setView('list')}
              aria-pressed={view === 'list'}
              className={
                view === 'list'
                  ? 'px-3 py-1 rounded bg-white text-blue-600 shadow-sm font-mono text-[9px] font-bold'
                  : 'px-3 py-1 rounded text-slate-500 font-mono text-[9px] font-medium'
              }
            >
              LIST
            </button>
          </div>
        </div>
      </div>
      {visible.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-300 rounded-xl p-8 text-center text-sm text-slate-500">
          Sin repositorios en este entorno.
        </div>
      ) : (
        <div
          className={
            view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col space-y-3'
          }
        >
          {visible.map(repo => (
            <div
              key={repo.name}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between"
            >
              <h3 className="text-sm font-semibold text-slate-900">{repo.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{repo.desc}</p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
                <span>{repo.lang}</span>
                <button className="text-blue-600 font-bold">OPEN REPO →</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
`;
