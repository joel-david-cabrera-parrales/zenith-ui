export const STATES_TABS_HTML = `
<div class="flex w-full flex-col gap-3">
  <div role="tablist" aria-label="Estados de pestañas" class="flex flex-row flex-wrap gap-1 border-b border-slate-200">
    <button type="button" role="tab" aria-selected="true" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97]">Activa</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Inactiva (hover)</button>
    <button type="button" role="tab" aria-selected="false" aria-disabled="true" disabled class="flex cursor-not-allowed items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300">Bloqueada</button>
  </div>
  <div role="tabpanel" aria-label="Activa" class="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">La pestaña activa usa texto azul con barra inferior. Pasa el cursor o tabula con el teclado para ver hover y focus.</div>
</div>
`;

export const STATES_TABS_TSX = `
import { useState } from 'react';

export const StatesTabs = () => {
  const [current, setCurrent] = useState('activa');
  const tabs = [
    { id: 'activa', label: 'Activa', disabled: false },
    { id: 'inactiva', label: 'Inactiva (hover)', disabled: false },
    { id: 'bloqueada', label: 'Bloqueada', disabled: true },
  ];
  const active = tabs.find((tab) => tab.id === current) ?? tabs[0];

  return (
    <div className="w-full space-y-3">
      <div role="tablist" aria-label="Estados de pestañas" className="flex flex-row flex-wrap gap-1 border-b border-slate-200">
        {tabs.map((tab) => {
          const selected = tab.id === active.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-disabled={tab.disabled || undefined}
              disabled={tab.disabled}
              tabIndex={tab.disabled ? -1 : 0}
              onClick={() => {
                if (!tab.disabled) setCurrent(tab.id);
              }}
              title={tab.disabled ? tab.label + ' (no disponible en tu plan)' : tab.label}
              className={
                tab.disabled
                  ? 'flex cursor-not-allowed items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300'
                  : selected
                    ? 'relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 hover:bg-blue-50/60 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
                    : 'relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:after:scale-x-100 hover:after:opacity-30 active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div key={active.id} role="tabpanel" aria-label={active.label} className="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        Activo: <strong className="text-slate-900">{active.label}</strong>. La pestaña bloqueada queda fuera del orden de tabulación y muestra por qué está deshabilitada en su tooltip.
      </div>
    </div>
  );
};
`;
