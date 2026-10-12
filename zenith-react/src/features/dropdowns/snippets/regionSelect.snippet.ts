export const REGION_SELECT_HTML = `
<div class="relative w-full">
  <button
    type="button"
    aria-haspopup="listbox"
    aria-expanded="true"
    class="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
  >
    <span class="flex items-center gap-2">
      <span class="material-symbols-outlined text-[18px] text-blue-600">public</span>
      eu-central-1 (Frankfurt)
    </span>
    <span class="material-symbols-outlined text-[16px] text-slate-500">unfold_more</span>
  </button>
  <div role="listbox" aria-label="Selección de región cloud" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-2 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <div class="relative">
      <span class="material-symbols-outlined absolute top-2 left-2.5 text-[16px] text-slate-500">search</span>
      <input type="text" placeholder="Buscar región o zona..." value="us-" class="w-full rounded-lg border border-slate-300 bg-white py-1.5 pr-12 pl-8 text-sm font-medium text-slate-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none" />
      <span class="absolute top-2 right-2 font-mono text-[10px] font-semibold text-slate-500">3 hits</span>
    </div>
    <div class="max-h-48 space-y-1 overflow-y-auto pr-1">
      <div class="cursor-pointer rounded-lg border border-transparent p-2 hover:border-slate-200 hover:bg-slate-100 transition-colors">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-slate-700">us-east-1 (N. Virginia)</span>
          <span class="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">18ms</span>
        </div>
        <div class="text-xs text-slate-500">Tier 1 Primary Hub • 6 AZs</div>
      </div>
      <div class="cursor-pointer rounded-lg border border-blue-600/20 bg-blue-50 p-2 transition-colors">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-blue-600">us-east-2 (Ohio)</span>
          <span class="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">24ms</span>
        </div>
        <div class="text-xs text-slate-500">Secondary Disaster Recovery • 3 AZs</div>
      </div>
      <div class="cursor-pointer rounded-lg border border-transparent p-2 hover:border-slate-200 hover:bg-slate-100 transition-colors">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-slate-700">us-west-2 (Oregon)</span>
          <span class="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-700">42ms</span>
        </div>
        <div class="text-xs text-slate-500">Edge Optimized • 4 AZs</div>
      </div>
    </div>
    <div class="flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[10px] font-semibold text-slate-500">
      <span>Total indexado: 24 regiones</span>
      <span class="cursor-pointer text-blue-600 hover:underline">Ver Mapa Latencias</span>
    </div>
  </div>
</div>
`;

export const REGION_SELECT_TSX = `
import { useState } from 'react';

const REGIONS = [
  { id: 'us-east-1', label: 'us-east-1 (N. Virginia)', latency: '18ms', description: 'Tier 1 Primary Hub • 6 AZs' },
  { id: 'us-east-2', label: 'us-east-2 (Ohio)', latency: '24ms', description: 'Secondary Disaster Recovery • 3 AZs' },
  { id: 'us-west-2', label: 'us-west-2 (Oregon)', latency: '42ms', description: 'Edge Optimized • 4 AZs' },
  { id: 'eu-central-1', label: 'eu-central-1 (Frankfurt)', latency: '8ms', description: 'Primary EU Hub • 3 AZs' },
];

export const RegionSelect = () => {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState('us-');
  const [selectedId, setSelectedId] = useState('eu-central-1');

  const normalized = query.trim().toLowerCase();
  const filtered =
    normalized === ''
      ? REGIONS
      : REGIONS.filter(
          (region) =>
            region.id.toLowerCase().includes(normalized) ||
            region.label.toLowerCase().includes(normalized),
        );
  const selected = REGIONS.find((region) => region.id === selectedId) ?? REGIONS[0];

  const handleSelect = (id: string, label: string) => {
    setSelectedId(id);
    window.alert(\`Presionaste: \${label}\`);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-600">
            public
          </span>
          {selected.label}
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
          unfold_more
        </span>
      </button>
      {open && (
        <div
          role="listbox"
          aria-label="Selección de región cloud"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-2 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          <div className="relative">
            <span aria-hidden="true" className="material-symbols-outlined absolute top-2 left-2.5 text-[16px] text-slate-500">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar región o zona..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white py-1.5 pr-12 pl-8 text-sm font-medium text-slate-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            />
            <span className="absolute top-2 right-2 font-mono text-[10px] font-semibold text-slate-500">
              {filtered.length} hits
            </span>
          </div>
          <div className="max-h-48 space-y-1 overflow-y-auto pr-1">
            {filtered.map((region) => (
              <div
                key={region.id}
                role="option"
                aria-selected={region.id === selectedId}
                onClick={() => handleSelect(region.id, region.label)}
                className="cursor-pointer rounded-lg border border-transparent p-2 transition-colors hover:border-slate-200 hover:bg-slate-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">{region.label}</span>
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
                    {region.latency}
                  </span>
                </div>
                <div className="text-xs text-slate-500">{region.description}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[10px] font-semibold text-slate-500">
            <span>Total indexado: 24 regiones</span>
            <span className="cursor-pointer text-blue-600 hover:underline">Ver Mapa Latencias</span>
          </div>
        </div>
      )}
    </div>
  );
};
`;
