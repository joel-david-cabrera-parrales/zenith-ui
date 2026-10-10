import { useRef, useState } from 'react';

export interface CustomSelectOption {
  value: string;
  label: string;
  dotClass: string;
}

export interface CustomSelectProps {
  label?: string;
  options: CustomSelectOption[];
  defaultValue?: string;
}

export function CustomSelect({
  label,
  options,
  defaultValue,
}: CustomSelectProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [selected, setSelected] = useState(
    defaultValue ?? options[0]?.value ?? '',
  );
  const current = options.find((o) => o.value === selected) ?? options[0];

  if (current === undefined) return null;

  return (
    <div>
      {label !== undefined && (
        <span className="mb-1 block text-xs font-medium text-slate-600">
          {label}
        </span>
      )}
      <details ref={detailsRef} className="group/custom relative w-full">
        <summary className="flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border border-slate-300 bg-white px-3 text-left text-slate-900 select-none hover:bg-slate-50 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2 text-sm">
            <span className={`h-2 w-2 rounded-full ${current.dotClass}`} />
            <span>{current.label}</span>
          </span>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-base text-slate-500 transition-transform group-open/custom:rotate-180"
          >
            expand_more
          </span>
        </summary>
        <div className="absolute top-full left-0 z-50 mt-1 w-full space-y-0.5 rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
          {options.map((option) => {
            const isCurrent = option.value === selected;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSelected(option.value);
                  detailsRef.current?.removeAttribute('open');
                }}
                className={`flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm text-slate-900 transition-colors hover:bg-slate-100 ${isCurrent ? 'bg-slate-100' : ''}`}
              >
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${option.dotClass}`} />
                  <span>{option.label}</span>
                </span>
                {isCurrent && (
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-base text-blue-600"
                  >
                    check
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </details>
    </div>
  );
}
