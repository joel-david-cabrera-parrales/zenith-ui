import { useId, useState } from 'react';

export interface PageJumpControlProps {
  totalPages?: number;
  defaultPage?: number;
}

export function PageJumpControl({ totalPages = 128, defaultPage = 4 }: PageJumpControlProps) {
  const inputId = useId();
  const [page, setPage] = useState(defaultPage);
  const [draft, setDraft] = useState(String(defaultPage));

  const jump = () => {
    const target = Number(draft);
    if (Number.isInteger(target) && target >= 1 && target <= totalPages) {
      setPage(target);
    } else {
      setDraft(String(page));
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm font-medium text-slate-600">
        Página <span className="font-mono font-semibold text-slate-900">{page}</span> de{' '}
        <span className="font-mono text-slate-900">{totalPages}</span>
      </span>
      <div className="flex items-center gap-2">
        <input
          id={inputId}
          type="number"
          min={1}
          max={totalPages}
          value={draft}
          aria-label="Número de página a saltar"
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') jump();
          }}
          className="w-20 rounded-lg border border-slate-300 bg-white py-1.5 pl-3 pr-2 font-mono text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
        <button
          type="button"
          onClick={jump}
          className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          <span>Ir</span>
          <span aria-hidden="true" className="material-symbols-outlined text-sm">
            subdirectory_arrow_left
          </span>
        </button>
      </div>
    </div>
  );
}
