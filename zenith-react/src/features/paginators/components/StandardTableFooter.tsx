import { useState } from 'react';

export interface StandardTableFooterProps {
  totalItems?: number;
  defaultPage?: number;
  defaultRows?: number;
}

const ROW_OPTIONS = [10, 25, 50];

export function StandardTableFooter({
  totalItems = 240,
  defaultPage = 1,
  defaultRows = 10,
}: StandardTableFooterProps) {
  const [page, setPage] = useState(defaultPage);
  const [rows, setRows] = useState(defaultRows);
  const totalPages = Math.max(1, Math.ceil(totalItems / rows));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * rows + 1;
  const end = Math.min(current * rows, totalItems);

  const navButton =
    'rounded-lg border border-slate-300 p-1.5 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40';

  return (
    <div className="flex flex-col items-center justify-between gap-4 p-4 sm:p-5 md:flex-row">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
        <span>
          {start}-{end} de {totalItems} elementos
        </span>
        <span aria-hidden="true" className="font-mono text-slate-300">
          •
        </span>
        <span className="font-mono text-xs text-slate-500">
          Página {current} / {totalPages}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-600">Filas por página:</span>
        <div className="flex items-center overflow-hidden rounded-lg border border-slate-300 bg-white">
          {ROW_OPTIONS.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => {
                setRows(o);
                setPage(1);
              }}
              className={
                o === rows
                  ? 'bg-blue-600 px-2.5 py-1 font-mono text-xs font-semibold text-white'
                  : 'px-2.5 py-1 font-mono text-xs text-slate-600 transition-colors hover:bg-slate-100'
              }
            >
              {o}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          title="Primera página"
          disabled={current === 1}
          onClick={() => setPage(1)}
          className={`${navButton} text-slate-400`}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            first_page
          </span>
        </button>
        <button
          type="button"
          title="Página anterior"
          disabled={current === 1}
          onClick={() => setPage((v) => Math.max(1, v - 1))}
          className={`${navButton} text-slate-400`}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            chevron_left
          </span>
        </button>
        <span className="px-2 font-mono text-sm font-semibold text-blue-600">{current}</span>
        <button
          type="button"
          title="Página siguiente"
          disabled={current >= totalPages}
          onClick={() => setPage((v) => Math.min(totalPages, v + 1))}
          className={`${navButton} text-slate-600`}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            chevron_right
          </span>
        </button>
        <button
          type="button"
          title="Última página"
          disabled={current >= totalPages}
          onClick={() => setPage(totalPages)}
          className={`${navButton} text-slate-600`}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            last_page
          </span>
        </button>
      </div>
    </div>
  );
}
