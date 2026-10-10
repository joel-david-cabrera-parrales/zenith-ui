export const SELECTABLE_OPTIONS_HTML = `<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
  <div class="flex items-center justify-between pb-2 border-b border-slate-200">
    <span class="text-xs font-semibold uppercase text-slate-500">Selectable Options</span>
    <span class="font-mono text-[9px] text-blue-600">RADIO_GROUP</span>
  </div>
  <div class="space-y-3">
    <button class="w-full p-3.5 rounded-xl border-2 border-blue-600 bg-blue-50/60 flex items-start justify-between text-left">
      <span class="flex items-start gap-3">
        <span class="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center mt-0.5">✓</span>
        <span>
          <span class="text-sm font-semibold text-slate-900 block">High Availability Mesh</span>
          <span class="text-xs text-slate-500 block mt-0.5">3 Availability Zones with automatic failover</span>
        </span>
      </span>
      <span class="font-mono text-[9px] font-bold text-blue-600">SELECTED</span>
    </button>
    <button class="w-full p-3.5 rounded-xl border border-slate-200 flex items-start justify-between text-left">
      <span class="flex items-start gap-3">
        <span class="w-5 h-5 rounded-full border-2 border-slate-300 mt-0.5"></span>
        <span>
          <span class="text-sm font-semibold text-slate-900 block">Single Zone Deployment</span>
          <span class="text-xs text-slate-500 block mt-0.5">Standard tier for internal staging &amp; dev</span>
        </span>
      </span>
      <span class="font-mono text-[9px] text-slate-500">DEFAULT</span>
    </button>
  </div>
</div>`;

export const SELECTABLE_OPTIONS_TSX = `import { useState } from 'react';

const OPTIONS = [
  { id: 'ha', title: 'High Availability Mesh', hint: '3 Availability Zones with automatic failover' },
  { id: 'single', title: 'Single Zone Deployment', hint: 'Standard tier for internal staging & dev' },
];

export const SelectableOptionsCard = () => {
  const [selected, setSelected] = useState('ha');

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <span className="text-xs font-semibold uppercase text-slate-500">Selectable Options</span>
        <span className="font-mono text-[9px] text-blue-600">RADIO_GROUP</span>
      </div>
      <div role="radiogroup" aria-label="Selectable Options" className="space-y-3">
        {OPTIONS.map((option) => {
          const active = option.id === selected;
          return (
            <button
              key={option.id}
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(option.id)}
              className={active
                ? 'w-full p-3.5 rounded-xl border-2 border-blue-600 bg-blue-50/60 flex items-start justify-between text-left'
                : 'w-full p-3.5 rounded-xl border border-slate-200 flex items-start justify-between text-left'}
            >
              <span className="flex items-start gap-3">
                <span className={active
                  ? 'w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center mt-0.5'
                  : 'w-5 h-5 rounded-full border-2 border-slate-300 mt-0.5'}>
                  {active ? '✓' : ''}
                </span>
                <span>
                  <span className="text-sm font-semibold text-slate-900 block">{option.title}</span>
                  <span className="text-xs text-slate-500 block mt-0.5">{option.hint}</span>
                </span>
              </span>
              <span className={active
                ? 'font-mono text-[9px] font-bold text-blue-600'
                : 'font-mono text-[9px] text-slate-500'}>
                {active ? 'SELECTED' : 'DEFAULT'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};`;
