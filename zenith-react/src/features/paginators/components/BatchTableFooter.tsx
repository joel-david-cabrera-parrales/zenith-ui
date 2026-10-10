import { useState } from 'react';

export interface BatchTableFooterProps {
  totalRows?: number;
  defaultPage?: number;
}

export function BatchTableFooter({ totalRows = 184, defaultPage = 3 }: BatchTableFooterProps) {
  const [page, setPage] = useState(defaultPage);
  const [selected, setSelected] = useState(3);
  const pages: (number | 'ellipsis')[] = [1, 2, 3, 4, 'ellipsis', 19];
  const rowsPerPage = 10;
  const start = (page - 1) * rowsPerPage + 1;
  const end = Math.min(page * rowsPerPage, totalRows);

  return (
    <div className="flex flex-col items-center justify-between gap-4 bg-white p-4 sm:p-5 lg:flex-row">
      <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/70 px-2.5 py-1 font-mono text-xs font-semibold text-blue-900">
          <span aria-hidden="true" className="material-symbols-outlined text-sm">
            check_box
          </span>
          {selected} seleccionados
        </span>
        <div className="flex items-center gap-1 border-l border-slate-200 pl-3">
          <button
            type="button"
            onClick={() => setSelected(0)}
            className="inline-flex items-center gap-1 rounded px-2.5 py-1 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-50"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-sm">
              delete
            </span>
            <span>Eliminar</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-sm">
              file_download
            </span>
            <span>Exportar</span>
          </button>
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-end gap-4 lg:w-auto">
        <span className="text-sm text-slate-600">
          Filas {start}-{end} de {totalRows}
        </span>
        <div className="flex items-center gap-1">
          {pages.map((p, i) =>
            p === 'ellipsis' ? (
              <span key={`e-${i}`} className="px-1 font-mono text-slate-400">
                ...
              </span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={
                  p === page
                    ? 'rounded bg-blue-600 px-2 py-1 text-sm font-bold text-white shadow-sm'
                    : 'rounded border border-slate-300 px-2 py-1 text-sm text-slate-600 hover:bg-slate-100'
                }
              >
                {p}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
