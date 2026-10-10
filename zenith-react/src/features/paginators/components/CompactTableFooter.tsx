import { useState } from 'react';

export interface CompactTableFooterProps {
  totalPages?: number;
  totalRecords?: number;
  defaultPage?: number;
}

export function CompactTableFooter({
  totalPages = 8,
  totalRecords = 42,
  defaultPage = 3,
}: CompactTableFooterProps) {
  const [page, setPage] = useState(defaultPage);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4">
      <div className="text-sm text-slate-600">
        Página <span className="font-mono font-semibold text-slate-900">{page}</span> de{' '}
        <span className="font-mono text-slate-900">{totalPages}</span>
        <span className="ml-2 text-xs text-slate-500">({totalRecords} registros totales)</span>
      </div>
      <div className="inline-flex rounded-lg border border-slate-300 bg-slate-100 p-0.5 shadow-sm">
        <button
          type="button"
          onClick={() => setPage((v) => Math.max(1, v - 1))}
          disabled={page === 1}
          className="inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-slate-900 disabled:opacity-40"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-sm">
            chevron_left
          </span>
          <span>Anterior</span>
        </button>
        <span aria-hidden="true" className="my-1 w-[1px] bg-slate-300/70" />
        <button
          type="button"
          onClick={() => setPage((v) => Math.min(totalPages, v + 1))}
          disabled={page === totalPages}
          className="inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-slate-900 disabled:opacity-40"
        >
          <span>Siguiente</span>
          <span aria-hidden="true" className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}
