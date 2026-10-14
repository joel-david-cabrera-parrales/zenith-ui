export const ICON_TABS_HTML = `
<div class="flex w-full flex-col gap-3">
  <div role="tablist" aria-label="Pestañas con iconos" class="flex flex-row flex-wrap gap-1 border-b border-slate-200">
    <button type="button" role="tab" aria-selected="true" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97]">
      <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-blue-600">dashboard</span>
      <span>Resumen</span>
    </button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">
      <span aria-hidden="true" class="material-symbols-outlined text-[18px]">timeline</span>
      <span>Actividad</span>
    </button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">
      <span aria-hidden="true" class="material-symbols-outlined text-[18px]">settings</span>
      <span>Ajustes</span>
    </button>
  </div>
  <div role="tabpanel" aria-label="Resumen" class="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">Panel de resumen con iconos en cada pestaña.</div>
</div>
`;

export const ICON_TABS_TSX = `
import { useState } from 'react';

export const IconTabs = () => {
  const tabs = [
    { id: 'resumen', label: 'Resumen', icon: 'dashboard', body: 'Vista general con métricas del sprint.' },
    { id: 'actividad', label: 'Actividad', icon: 'timeline', body: 'Historial de cambios y comentarios.' },
    { id: 'ajustes', label: 'Ajustes', icon: 'settings', body: 'Preferencias del espacio de trabajo.' },
  ];
  const [current, setCurrent] = useState('resumen');
  const active = tabs.find((tab) => tab.id === current) ?? tabs[0];

  return (
    <div className="flex w-full flex-col gap-3">
      <div role="tablist" aria-label="Pestañas con iconos" className="flex flex-row flex-wrap gap-1 border-b border-slate-200">
        {tabs.map((tab) => {
          const selected = tab.id === active.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setCurrent(tab.id)}
              className={
                selected
                  ? 'relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 hover:bg-blue-50/60 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
                  : 'relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
              }
            >
              <span aria-hidden="true" className={'material-symbols-outlined text-[18px] ' + (selected ? 'text-blue-600' : '')}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div key={active.id} role="tabpanel" aria-label={active.label} className="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        {active.body}
      </div>
    </div>
  );
};
`;
