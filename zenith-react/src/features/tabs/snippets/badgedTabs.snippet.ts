export const BADGED_TABS_HTML = `
<div class="flex w-full flex-col gap-3">
  <div role="tablist" aria-label="Pestañas con contadores" class="flex flex-row gap-1 rounded-xl bg-slate-100 p-1">
    <button type="button" role="tab" aria-selected="true" class="flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-900 shadow ring-1 ring-slate-200 active:scale-[0.97]">
      <span>Bandeja</span>
      <span aria-label="12 elementos" class="rounded-full bg-blue-100 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-blue-700">12</span>
    </button>
    <button type="button" role="tab" aria-selected="false" class="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:bg-white/70 hover:text-slate-900 active:scale-[0.97]">
      <span>Enviados</span>
      <span aria-label="48 elementos" class="rounded-full bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-slate-500">48</span>
    </button>
    <button type="button" role="tab" aria-selected="false" class="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:bg-white/70 hover:text-slate-900 active:scale-[0.97]">
      <span>Archivados</span>
      <span aria-label="3 elementos" class="rounded-full bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-slate-500">3</span>
    </button>
  </div>
  <div role="tabpanel" aria-label="Bandeja" class="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">12 mensajes sin leer en la bandeja.</div>
</div>
`;

export const BADGED_TABS_TSX = `
import { useState } from 'react';

export const BadgedTabs = () => {
  const tabs = [
    { id: 'bandeja', label: 'Bandeja', badge: '12', body: '12 mensajes sin leer en la bandeja.' },
    { id: 'enviados', label: 'Enviados', badge: '48', body: '48 mensajes enviados este mes.' },
    { id: 'archivados', label: 'Archivados', badge: '3', body: '3 hilos archivados esta semana.' },
  ];
  const [current, setCurrent] = useState('bandeja');
  const active = tabs.find((tab) => tab.id === current) ?? tabs[0];

  return (
    <div className="flex w-full flex-col gap-3">
      <div role="tablist" aria-label="Pestañas con contadores" className="flex flex-row gap-1 rounded-xl bg-slate-100 p-1">
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
                  ? 'flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-900 shadow ring-1 ring-slate-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
                  : 'flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 hover:bg-white/70 hover:text-slate-900 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
              }
            >
              <span>{tab.label}</span>
              <span
                aria-label={tab.badge + ' elementos'}
                className={'rounded-full px-1.5 py-0.5 text-[11px] font-semibold tabular-nums ' + (selected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500')}
              >
                {tab.badge}
              </span>
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
