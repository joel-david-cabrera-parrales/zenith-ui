export const SELECTABLE_CHIPS_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <button type="button" aria-pressed="true" class="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm ring-2 ring-blue-600/20">
    <span class="material-symbols-outlined text-[14px]">check</span>
    <span>Telemetry ON</span>
  </button>
  <button type="button" aria-pressed="false" class="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
    <span class="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
    <span>Memory Profiling</span>
  </button>
  <button type="button" aria-pressed="true" class="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
    <span class="material-symbols-outlined text-[14px]">check</span>
    <span>Auto-Scaling</span>
  </button>
</div>
`;

export const SELECTABLE_CHIPS_TSX = `
import { useState } from 'react';

const INITIAL_OPTIONS = [
  { id: 'telemetry', label: 'Telemetry ON', selected: true, tone: 'primary' },
  { id: 'memory', label: 'Memory Profiling', selected: false, tone: 'primary' },
  { id: 'scaling', label: 'Auto-Scaling', selected: true, tone: 'success' },
] as const;

export const SelectableChips = () => {
  const [options, setOptions] = useState(INITIAL_OPTIONS.map((item) => ({ ...item })));

  const toggle = (id: string) => {
    setOptions((prev) => prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)));
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {options.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-pressed={item.selected}
          onClick={() => toggle(item.id)}
          className={
            item.selected
              ? item.tone === 'success'
                ? 'inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-sm'
                : 'inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm ring-2 ring-blue-600/20'
              : 'inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50'
          }
        >
          {item.selected ? (
            <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
              check
            </span>
          ) : (
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          )}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};
`;
