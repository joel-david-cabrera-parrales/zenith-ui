import { useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface SelectableOption {
  id: string;
  title: string;
  hint: string;
}

export interface SelectableOptionsProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  badge?: string;
  options?: SelectableOption[];
  initial?: string;
}

const DEFAULT_OPTIONS: SelectableOption[] = [
  {
    id: 'ha',
    title: 'High Availability Mesh',
    hint: '3 Availability Zones with automatic failover',
  },
  {
    id: 'single',
    title: 'Single Zone Deployment',
    hint: 'Standard tier for internal staging & dev',
  },
];

export const SelectableOptions = ({
  label = 'Selectable Options',
  badge = 'RADIO_GROUP',
  options = DEFAULT_OPTIONS,
  initial,
  className = '',
  ...rest
}: SelectableOptionsProps) => {
  const [selected, setSelected] = useState(initial ?? options[0]?.id);

  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 ${className}`}
      {...rest}
    >
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <span className="text-xs font-semibold uppercase text-slate-500">
          {label}
        </span>
        <span className="font-mono text-[9px] text-blue-600">{badge}</span>
      </div>
      <div role="radiogroup" aria-label={label} className="space-y-3">
        {options.map((option) => {
          const active = option.id === selected;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(option.id)}
              className={`w-full p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-start justify-between text-left ${
                active
                  ? 'border-blue-600 bg-blue-50/60'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                    active
                      ? 'bg-blue-600 text-white'
                      : 'border-2 border-slate-300'
                  }`}
                >
                  {active && (
                    <span className="material-symbols-outlined text-[14px]">
                      check
                    </span>
                  )}
                </span>
                <span>
                  <span className="text-sm font-semibold text-slate-900 block">
                    {option.title}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {option.hint}
                  </span>
                </span>
              </span>
              <span
                className={`font-mono text-[9px] font-bold ${active ? 'text-blue-600' : 'text-slate-500'}`}
              >
                {active ? 'SELECTED' : 'DEFAULT'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
