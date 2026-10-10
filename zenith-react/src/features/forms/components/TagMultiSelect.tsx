import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';

export interface TagMultiSelectOption {
  value: string;
  label: string;
  meta: string;
}

export interface TagMultiSelectProps {
  label?: string;
  options: TagMultiSelectOption[];
  defaultSelected?: string[];
}

export function TagMultiSelect({
  label,
  options,
  defaultSelected = [],
}: TagMultiSelectProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const toggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    );
  };

  const remove = (e: MouseEvent, value: string) => {
    e.preventDefault();
    setSelected((prev) => prev.filter((v) => v !== value));
  };

  return (
    <div>
      {label !== undefined && (
        <span className="mb-1 block text-xs font-medium text-slate-600">
          {label}
        </span>
      )}
      <details ref={detailsRef} className="group/tags relative w-full">
        <summary className="flex min-h-10 w-full cursor-pointer flex-wrap items-center justify-between gap-1 rounded-lg border border-slate-300 bg-white px-2 py-1 select-none hover:bg-slate-50 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none [&::-webkit-details-marker]:hidden">
          <div className="flex flex-wrap items-center gap-1">
            {selected.map((value) => (
              <span
                key={value}
                className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-900"
              >
                <span>{value}</span>
                <button
                  type="button"
                  onClick={(e) => remove(e, value)}
                  aria-label={`Quitar ${value}`}
                  className="flex items-center"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[13px]"
                  >
                    close
                  </span>
                </button>
              </span>
            ))}
            <span className="px-1 font-mono text-[10px] font-semibold text-slate-500">
              + Añadir tag
            </span>
          </div>
          <span
            aria-hidden="true"
            className="material-symbols-outlined ml-auto text-base text-slate-500 transition-transform group-open/tags:rotate-180"
          >
            expand_more
          </span>
        </summary>
        <div className="absolute top-full left-0 z-50 mt-1 w-full space-y-0.5 rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
          {options.map((option) => {
            const checked = selected.includes(option.value);
            return (
              <label
                key={option.value}
                className="flex w-full cursor-pointer items-center justify-between rounded-md px-2.5 py-1.5 text-sm text-slate-900 transition-colors hover:bg-slate-100"
              >
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(option.value)}
                    className="h-4 w-4 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                  />
                  <span>{option.label}</span>
                </span>
                <span className="font-mono text-[10px] text-slate-500">
                  {option.meta}
                </span>
              </label>
            );
          })}
        </div>
      </details>
    </div>
  );
}
