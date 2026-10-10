import { useState } from 'react';

export interface ClassicPaginationProps {
  totalPages?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
}

function buildPages(total: number, current: number): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, 4, 'ellipsis', total - 1, total];
  }
  if (current >= total - 2) {
    return [1, 2, 'ellipsis', total - 3, total - 2, total - 1, total];
  }
  return [1, 'ellipsis', current - 1, current, current + 1, 'ellipsis', total];
}

export function ClassicPagination({
  totalPages = 19,
  defaultPage = 2,
  onPageChange,
}: ClassicPaginationProps) {
  const [page, setPage] = useState(defaultPage);

  const goTo = (next: number) => {
    const clamped = Math.min(Math.max(1, next), totalPages);
    setPage(clamped);
    onPageChange?.(clamped);
  };

  const pages = buildPages(totalPages, page);

  return (
    <nav aria-label="Paginación clásica" className="flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => goTo(page - 1)}
        disabled={page === 1}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span aria-hidden="true" className="material-symbols-outlined text-base">
          chevron_left
        </span>
        <span>Anterior</span>
      </button>
      <div className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === 'ellipsis' ? (
            <span
              key={`ellipsis-${i}`}
              className="flex h-9 w-9 items-center justify-center font-mono text-xs text-slate-400"
            >
              ...
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-current={p === page ? 'page' : undefined}
              className={
                p === page
                  ? 'flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-semibold text-white shadow-sm transition-all focus:ring-2 focus:ring-blue-600 focus:ring-offset-1'
                  : 'flex h-9 w-9 items-center justify-center rounded-lg text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900'
              }
            >
              {p}
            </button>
          ),
        )}
      </div>
      <button
        type="button"
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span>Siguiente</span>
        <span aria-hidden="true" className="material-symbols-outlined text-base">
          chevron_right
        </span>
      </button>
    </nav>
  );
}
