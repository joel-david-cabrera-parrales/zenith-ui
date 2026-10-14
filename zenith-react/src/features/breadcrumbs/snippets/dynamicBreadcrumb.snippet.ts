export const DYNAMIC_BREADCRUMB_HTML = `
<nav aria-label="Breadcrumb" class="w-full">
  <ol class="flex min-w-0 flex-wrap items-center gap-1 text-sm">
    <li class="flex min-w-0 items-center gap-1">
      <a href="/" title="Ir a Inicio" class="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100">Inicio</a>
    </li>
    <li class="flex min-w-0 items-center gap-1">
      <span aria-hidden="true" class="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
      <a href="/biblioteca" title="Ir a Biblioteca" class="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100">Biblioteca</a>
    </li>
    <li class="flex min-w-0 items-center gap-1">
      <span aria-hidden="true" class="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
      <span aria-current="page" class="rounded-lg bg-slate-100 px-2 py-1 font-semibold text-slate-900 ring-1 ring-slate-200">Álbum</span>
    </li>
  </ol>
</nav>
<p class="mt-3 text-sm text-slate-500">Vista actual: Álbum — haz clic en un nivel anterior para navegar.</p>
<div class="mt-2 flex flex-wrap gap-2">
  <button type="button" class="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">Ir a Biblioteca</button>
  <button type="button" class="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">Ir a Canción</button>
</div>
`;

export const DYNAMIC_BREADCRUMB_TSX = `
import { useState } from 'react';

export const DynamicBreadcrumb = () => {
  const trail = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'biblioteca', label: 'Biblioteca' },
    { id: 'album', label: 'Álbum' },
    { id: 'cancion', label: 'Canción' },
  ];
  const [depth, setDepth] = useState(2);
  const visible = trail.slice(0, depth + 1);
  const current = visible[visible.length - 1];
  const linkClass =
    'group rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 active:bg-blue-100';

  return (
    <div className="w-full">
      <nav aria-label="Breadcrumb" className="w-full">
        <ol className="flex min-w-0 flex-wrap items-center gap-1 text-sm">
          {visible.map((item, position) => {
            const isLast = position === visible.length - 1;
            return (
              <li key={item.id} className="flex min-w-0 items-center gap-1">
                {position > 0 && (
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-300">
                    chevron_right
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="rounded-lg bg-slate-100 px-2 py-1 font-semibold text-slate-900 ring-1 ring-slate-200">
                    {item.label}
                  </span>
                ) : (
                  <button type="button" onClick={() => setDepth(position)} title={'Ir a ' + item.label} className={linkClass}>
                    {item.label}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <p className="mt-3 text-sm text-slate-500">
        Vista actual: {current.label} — haz clic en un nivel anterior para navegar.
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setDepth((d) => Math.max(0, d - 1))}
          disabled={depth === 0}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40"
        >
          Subir un nivel
        </button>
        <button
          type="button"
          onClick={() => setDepth((d) => Math.min(trail.length - 1, d + 1))}
          disabled={depth === trail.length - 1}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40"
        >
          Bajar un nivel
        </button>
      </div>
    </div>
  );
};
`;
