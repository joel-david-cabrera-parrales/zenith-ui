export const BASIC_TABS_HTML = `
<div class="flex w-full flex-col gap-3">
  <div role="tablist" aria-label="Pestañas" class="flex flex-row flex-wrap gap-1 border-b border-slate-200">
    <button type="button" role="tab" aria-selected="true" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97]">Resumen</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Actividad</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Ajustes</button>
  </div>
  <div role="tabpanel" aria-label="Resumen" class="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
    <p class="font-semibold text-slate-900">Resumen del proyecto</p>
    <p class="mt-1">12 tareas activas, 3 hitos esta semana y 98% de disponibilidad.</p>
  </div>
</div>
`;

export const BASIC_TABS_TSX = `
import { useState } from 'react';

export const BasicTabs = () => {
  const tabs = [
    { id: 'resumen', label: 'Resumen', body: '12 tareas activas, 3 hitos esta semana y 98% de disponibilidad.' },
    { id: 'actividad', label: 'Actividad', body: 'Mariana movió 4 tarjetas a revisión hace 20 minutos.' },
    { id: 'ajustes', label: 'Ajustes', body: 'Configura visibilidad, permisos y notificaciones del proyecto.' },
  ];
  const [current, setCurrent] = useState('resumen');
  const active = tabs.find((tab) => tab.id === current) ?? tabs[0];

  return (
    <div className="flex w-full flex-col gap-3">
      <div role="tablist" aria-label="Pestañas" className="flex flex-row flex-wrap gap-1 border-b border-slate-200">
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
              {tab.label}
            </button>
          );
        })}
      </div>
      <div key={active.id} role="tabpanel" aria-label={active.label} className="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">{active.label}</p>
        <p className="mt-1">{active.body}</p>
      </div>
    </div>
  );
};
`;
