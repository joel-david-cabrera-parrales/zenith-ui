export const VERTICAL_TABS_HTML = `
<div class="flex w-full flex-col gap-4 sm:flex-row">
  <div role="tablist" aria-orientation="vertical" aria-label="Pestañas verticales" class="flex w-full shrink-0 flex-col gap-1 border-l border-slate-200 sm:w-52">
    <button type="button" role="tab" aria-selected="true" class="flex items-center gap-2 rounded-lg border-l-2 border-blue-600 bg-blue-50/60 px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 active:scale-[0.97]">General</button>
    <button type="button" role="tab" aria-selected="false" class="flex items-center gap-2 rounded-lg border-l-2 border-transparent px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.97]">Miembros</button>
    <button type="button" role="tab" aria-selected="false" class="flex items-center gap-2 rounded-lg border-l-2 border-transparent px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.97]">Permisos</button>
  </div>
  <div role="tabpanel" aria-label="General" class="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">Ajustes generales del espacio de trabajo.</div>
</div>
`;

export const VERTICAL_TABS_TSX = `
import { useState } from 'react';

export const VerticalTabs = () => {
  const tabs = [
    { id: 'general', label: 'General', icon: 'tune', body: 'Nombre, descripción y visibilidad del espacio de trabajo.' },
    { id: 'miembros', label: 'Miembros', icon: 'group', body: '24 miembros, 3 invitaciones pendientes de aceptar.' },
    { id: 'permisos', label: 'Permisos', icon: 'lock', body: 'Roles por defecto y accesos a módulos sensibles.' },
  ];
  const [current, setCurrent] = useState('general');
  const active = tabs.find((tab) => tab.id === current) ?? tabs[0];

  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row">
      <div role="tablist" aria-orientation="vertical" aria-label="Pestañas verticales" className="flex w-full shrink-0 flex-col gap-1 border-l border-slate-200 sm:w-52">
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
                  ? 'flex items-center gap-2 rounded-lg border-l-2 border-blue-600 bg-blue-50/60 px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
                  : 'flex items-center gap-2 rounded-lg border-l-2 border-transparent px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
              }
            >
              <span aria-hidden="true" className={'material-symbols-outlined text-[18px] ' + (selected ? 'text-blue-600' : '')}>
                {tab.icon}
              </span>
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
