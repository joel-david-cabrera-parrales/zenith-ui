import { useState } from 'react';

export interface LoadMoreButtonProps {
  total?: number;
  defaultLoaded?: number;
  step?: number;
}

export function LoadMoreButton({ total = 250, defaultLoaded = 48, step = 25 }: LoadMoreButtonProps) {
  const [loaded, setLoaded] = useState(defaultLoaded);
  const [loading, setLoading] = useState(false);
  const percent = Math.min(100, (loaded / total) * 100);

  const loadMore = () => {
    if (loading || loaded >= total) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoaded((v) => Math.min(total, v + step));
      setLoading(false);
    }, 600);
  };

  return (
    <div className="w-full">
      <div className="mb-6 space-y-2">
        <div className="flex justify-between font-mono text-xs">
          <span className="text-slate-600">
            Mostrando {loaded} de {total} elementos cargados
          </span>
          <span className="font-semibold text-blue-600">{percent.toFixed(1)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 py-2">
        <button
          type="button"
          onClick={loadMore}
          disabled={loading || loaded >= total}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:bg-slate-200 focus:ring-2 focus:ring-blue-600/20 disabled:opacity-60"
        >
          {loading ? (
            <svg aria-hidden="true" className="h-4 w-4 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          ) : null}
          <span>{loaded >= total ? 'Todo cargado' : 'Cargar Más Registros'}</span>
          <span className="rounded bg-blue-600/10 px-1.5 py-0.5 font-mono text-xs text-blue-600">+{step}</span>
        </button>
        <span className="font-mono text-xs text-slate-400">AUTO_PREFETCH: OFF</span>
      </div>
    </div>
  );
}
