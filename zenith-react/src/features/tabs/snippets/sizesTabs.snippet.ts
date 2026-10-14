export const SIZES_TABS_HTML = `
<div class="w-full space-y-6">
  <div role="tablist" aria-label="Talla pequeña" class="flex flex-row flex-wrap gap-1 border-b border-slate-200">
    <button type="button" role="tab" aria-selected="true" class="relative flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97]">Resumen</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Actividad</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Ajustes</button>
  </div>
  <div role="tablist" aria-label="Talla mediana" class="flex flex-row flex-wrap gap-1 border-b border-slate-200">
    <button type="button" role="tab" aria-selected="true" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97]">Resumen</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Actividad</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Ajustes</button>
  </div>
  <div role="tablist" aria-label="Talla grande" class="flex flex-row flex-wrap gap-1 border-b border-slate-200">
    <button type="button" role="tab" aria-selected="true" class="relative flex items-center gap-2.5 rounded-lg px-5 py-2.5 text-base font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97]">Resumen</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2.5 rounded-lg px-5 py-2.5 text-base font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Actividad</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2.5 rounded-lg px-5 py-2.5 text-base font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Ajustes</button>
  </div>
</div>
`;

export const SIZES_TABS_TSX = `
import { useState } from 'react';

const ROWS = [
  { size: 'sm', label: 'Pequeña', tab: 'gap-1.5 px-2.5 py-1.5 text-xs' },
  { size: 'md', label: 'Mediana', tab: 'gap-2 px-3.5 py-2 text-sm' },
  { size: 'lg', label: 'Grande', tab: 'gap-2.5 px-5 py-2.5 text-base' },
];

export const SizesTabs = () => {
  const tabs = ['Resumen', 'Actividad', 'Ajustes'];
  const [current, setCurrent] = useState('Resumen');

  return (
    <div className="w-full space-y-6">
      {ROWS.map((row) => (
        <div key={row.size} className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{row.label}</p>
          <div role="tablist" aria-label={'Talla ' + row.label} className="flex flex-row flex-wrap gap-1 border-b border-slate-200">
            {tabs.map((label) => {
              const selected = label === current;
              return (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setCurrent(label)}
                  className={
                    selected
                      ? 'relative flex items-center rounded-lg font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600 ' + row.tab
                      : 'relative flex items-center rounded-lg font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600 ' + row.tab
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
`;
