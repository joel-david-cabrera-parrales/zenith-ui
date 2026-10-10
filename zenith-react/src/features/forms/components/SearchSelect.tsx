import { useRef, useState } from 'react';

export interface SearchSelectOption {
  value: string;
  label: string;
  icon: string;
}

export interface SearchSelectProps {
  label?: string;
  options: SearchSelectOption[];
  defaultValue?: string;
  searchPlaceholder?: string;
}

export function SearchSelect({
  label,
  options,
  defaultValue,
  searchPlaceholder = 'Filtrar tecnologías...',
}: SearchSelectProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [selected, setSelected] = useState(
    defaultValue ?? options[0]?.value ?? '',
  );
  const [query, setQuery] = useState('');
  const current = options.find((o) => o.value === selected) ?? options[0];
  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase().trim()),
  );

  if (current === undefined) return null;

  return (
    <div>
      {label !== undefined && (
        <span className="mb-1 block text-xs font-medium text-slate-600">
          {label}
        </span>
      )}
      <details ref={detailsRef} className="group/search relative w-full">
        <summary className="flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border border-slate-300 bg-white px-3 text-left text-slate-900 select-none hover:bg-slate-50 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2 text-sm">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-base text-blue-600"
            >
              {current.icon}
            </span>
            <span>{current.label}</span>
          </span>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-base text-slate-500 transition-transform group-open/search:rotate-180"
          >
            expand_more
          </span>
        </summary>
        <div className="absolute top-full left-0 z-50 mt-1 w-full space-y-1.5 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
          <div className="relative mb-1 flex items-center">
            <span
              aria-hidden="true"
              className="material-symbols-outlined pointer-events-none absolute left-2.5 text-base text-slate-400"
            >
              search
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              aria-label="Filtrar opciones"
              className="h-8 w-full rounded-md border border-slate-300 bg-white pr-2 pl-8 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="max-h-48 space-y-0.5 overflow-hidden">
            {filtered.map((option) => {
              const isCurrent = option.value === selected;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setSelected(option.value);
                    setQuery('');
                    detailsRef.current?.removeAttribute('open');
                  }}
                  className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-sm text-slate-900 transition-colors hover:bg-slate-100 ${isCurrent ? 'bg-slate-100' : ''}`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={`material-symbols-outlined text-base ${isCurrent ? 'text-blue-600' : 'text-slate-500'}`}
                    >
                      {option.icon}
                    </span>
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
            {filtered.length === 0 && (
              <p className="px-2.5 py-2 text-xs text-slate-500">
                Sin resultados
              </p>
            )}
          </div>
        </div>
      </details>
    </div>
  );
}
