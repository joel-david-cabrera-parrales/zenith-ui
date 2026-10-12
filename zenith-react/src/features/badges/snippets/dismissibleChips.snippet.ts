export const DISMISSIBLE_CHIPS_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white py-1 pl-2.5 pr-1.5 text-xs font-medium text-slate-700 shadow-sm">
    <span>Cluster: k8s-eu</span>
    <button type="button" aria-label="Quitar filtro Cluster: k8s-eu" class="flex h-4 w-4 items-center justify-center rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors">
      <span class="material-symbols-outlined text-[13px]">close</span>
    </button>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white py-1 pl-2.5 pr-1.5 text-xs font-medium text-slate-700 shadow-sm">
    <span>Sev: High</span>
    <button type="button" aria-label="Quitar filtro Sev: High" class="flex h-4 w-4 items-center justify-center rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors">
      <span class="material-symbols-outlined text-[13px]">close</span>
    </button>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-100 py-1 pl-2.5 pr-1.5 text-xs font-medium text-blue-700">
    <span>Tier: Enterprise</span>
    <button type="button" aria-label="Quitar filtro Tier: Enterprise" class="flex h-4 w-4 items-center justify-center rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors">
      <span class="material-symbols-outlined text-[13px]">close</span>
    </button>
  </span>
</div>
`;

export const DISMISSIBLE_CHIPS_TSX = `
import { useState } from 'react';

const INITIAL_FILTERS = ['Cluster: k8s-eu', 'Sev: High', 'Tier: Enterprise'];

export const DismissibleChips = () => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const dismiss = (label: string) => {
    setFilters((prev) => prev.filter((item) => item !== label));
  };

  const reset = () => setFilters(INITIAL_FILTERS);

  if (filters.length === 0) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-500">Sin filtros activos</span>
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-blue-700 transition-colors hover:border-blue-500"
        >
          Restaurar filtros
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((label) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white py-1 pl-2.5 pr-1.5 text-xs font-medium text-slate-700 shadow-sm"
        >
          <span>{label}</span>
          <button
            type="button"
            aria-label={'Quitar filtro ' + label}
            onClick={() => dismiss(label)}
            className="flex h-4 w-4 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-red-100 hover:text-red-600"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
              close
            </span>
          </button>
        </span>
      ))}
    </div>
  );
};
`;
