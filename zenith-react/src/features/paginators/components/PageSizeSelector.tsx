import { useState } from 'react';

export interface PageSizeSelectorProps {
  totalResults?: number;
  defaultSize?: number;
  options?: number[];
}

export const PageSizeSelector = ({
  totalResults = 1248,
  defaultSize = 25,
  options = [10, 25, 50, 100],
}: PageSizeSelectorProps) => {
  const [size, setSize] = useState(defaultSize);
  const end = Math.min(size, totalResults);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-100/60 p-4">
      <div className="flex items-center gap-2">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue-600" />
        <p className="text-sm text-slate-900">
          Mostrando{' '}
          <span className="font-mono font-semibold text-blue-600">
            1 - {end}
          </span>{' '}
          de <span className="font-mono font-semibold text-slate-900">{totalResults.toLocaleString('es')}</span>{' '}
          resultados
        </p>
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="paginator-page-size" className="text-sm font-medium text-slate-600">
          Mostrar:
        </label>
        <div className="relative">
          <select
            id="paginator-page-size"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="cursor-pointer appearance-none rounded-lg border border-slate-300 bg-white py-1.5 pl-3 pr-8 font-mono text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
          >
            {options.map((o) => (
              <option key={o} value={o}>
                {o} por página
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="material-symbols-outlined pointer-events-none absolute right-2 top-2 text-base text-slate-400"
          >
            expand_more
          </span>
        </div>
      </div>
    </div>
  );
}
