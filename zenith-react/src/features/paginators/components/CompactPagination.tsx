import { useState } from 'react';

export interface CompactPaginationProps {
  totalPages?: number;
  defaultPage?: number;
}

export function CompactPagination({ totalPages = 12, defaultPage = 2 }: CompactPaginationProps) {
  const [page, setPage] = useState(defaultPage);
  const visible = [1, 2, 3];

  return (
    <nav aria-label="Paginación compacta" className="flex items-center justify-center">
      <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 shadow-inner">
        <button
          type="button"
          title="Página anterior"
          aria-label="Página anterior"
          onClick={() => setPage((v) => Math.max(1, v - 1))}
          disabled={page === 1}
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-white disabled:opacity-40"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-sm">
            arrow_back
          </span>
        </button>
        {visible.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPage(p)}
            aria-current={p === page ? 'page' : undefined}
            className={
              p === page
                ? 'flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm'
                : 'flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium text-slate-600 hover:bg-white'
            }
          >
            {p}
          </button>
        ))}
        <span className="w-5 text-center font-mono text-xs text-slate-400">·</span>
        <button
          type="button"
          onClick={() => setPage(totalPages)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium text-slate-600 hover:bg-white"
        >
          {totalPages}
        </button>
        <button
          type="button"
          title="Página siguiente"
          aria-label="Página siguiente"
          onClick={() => setPage((v) => Math.min(totalPages, v + 1))}
          disabled={page === totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-white disabled:opacity-40"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </nav>
  );
}
