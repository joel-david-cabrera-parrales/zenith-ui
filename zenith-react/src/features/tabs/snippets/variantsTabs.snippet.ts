export const VARIANTS_TABS_HTML = `
<div class="w-full space-y-6">
  <div role="tablist" aria-label="Subrayado" class="flex flex-row flex-wrap gap-1 border-b border-slate-200">
    <button type="button" role="tab" aria-selected="true" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97]">Resumen</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Actividad</button>
  </div>
  <div role="tablist" aria-label="Píldoras" class="flex flex-row gap-1 rounded-xl bg-slate-100 p-1">
    <button type="button" role="tab" aria-selected="true" class="flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-900 shadow ring-1 ring-slate-200 active:scale-[0.97]">Resumen</button>
    <button type="button" role="tab" aria-selected="false" class="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:bg-white/70 hover:text-slate-900 active:scale-[0.97]">Actividad</button>
  </div>
  <div role="tablist" aria-label="Cajas" class="flex flex-row flex-wrap gap-2">
    <button type="button" role="tab" aria-selected="true" class="flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-50 px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 active:scale-[0.97]">Resumen</button>
    <button type="button" role="tab" aria-selected="false" class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.97]">Actividad</button>
  </div>
</div>
`;

export const VARIANTS_TABS_TSX = `
import { useState } from 'react';

export const VariantsTabs = () => {
  const tabs = ['Resumen', 'Actividad', 'Ajustes'];
  const [current, setCurrent] = useState('Resumen');

  const underline = (selected: boolean) =>
    selected
      ? 'relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
      : 'relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600';
  const pills = (selected: boolean) =>
    selected
      ? 'flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-900 shadow ring-1 ring-slate-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
      : 'flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:bg-white/70 hover:text-slate-900 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600';
  const boxed = (selected: boolean) =>
    selected
      ? 'flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-50 px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
      : 'flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600';

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Subrayado</p>
        <div role="tablist" aria-label="Subrayado" className="flex flex-row flex-wrap gap-1 border-b border-slate-200">
          {tabs.map((label) => (
            <button key={label} type="button" role="tab" aria-selected={label === current} onClick={() => setCurrent(label)} className={underline(label === current)}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Píldoras</p>
        <div role="tablist" aria-label="Píldoras" className="flex flex-row gap-1 rounded-xl bg-slate-100 p-1">
          {tabs.map((label) => (
            <button key={label} type="button" role="tab" aria-selected={label === current} onClick={() => setCurrent(label)} className={pills(label === current)}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Cajas</p>
        <div role="tablist" aria-label="Cajas" className="flex flex-row flex-wrap gap-2">
          {tabs.map((label) => (
            <button key={label} type="button" role="tab" aria-selected={label === current} onClick={() => setCurrent(label)} className={boxed(label === current)}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
`;
