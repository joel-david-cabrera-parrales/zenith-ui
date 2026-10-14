export const COLLAPSED_BREADCRUMB_HTML = `
<nav aria-label="Breadcrumb" class="w-full">
  <ol class="flex min-w-0 flex-wrap items-center gap-1 text-sm">
    <li class="flex min-w-0 items-center gap-1">
      <a href="/" title="Ir a Inicio" class="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100">Inicio</a>
      <span aria-hidden="true" class="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
      <button type="button" aria-label="Mostrar ruta completa" title="Mostrar ruta completa" class="flex h-7 min-w-7 items-center justify-center rounded-lg px-1.5 text-slate-400 ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-blue-100">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px]">more_horiz</span>
      </button>
    </li>
    <li class="flex min-w-0 items-center gap-1">
      <span aria-hidden="true" class="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
      <a href="/biblioteca/album" title="Ir a Álbum" class="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100">Álbum</a>
    </li>
    <li class="flex min-w-0 items-center gap-1">
      <span aria-hidden="true" class="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
      <span aria-current="page" class="rounded-lg bg-slate-100 px-2 py-1 font-semibold text-slate-900 ring-1 ring-slate-200">Canción</span>
    </li>
  </ol>
</nav>
`;

export const COLLAPSED_BREADCRUMB_TSX = `
import { useState } from 'react';

export const CollapsedBreadcrumb = () => {
  const [expanded, setExpanded] = useState(false);
  const items = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'biblioteca', label: 'Biblioteca' },
    { id: 'artista', label: 'Artista' },
    { id: 'album', label: 'Álbum' },
    { id: 'cancion', label: 'Canción' },
  ];
  const visible = expanded ? items : [items[0], ...items.slice(-2)];
  const linkClass =
    'group rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 active:bg-blue-100';

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex min-w-0 flex-wrap items-center gap-1 text-sm">
        {visible.map((item, position) => {
          const isLast = position === visible.length - 1;
          const isFirst = position === 0;
          return (
            <li key={item.id} className="flex min-w-0 items-center gap-1">
              {!isFirst && (
                <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-300">
                  chevron_right
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="rounded-lg bg-slate-100 px-2 py-1 font-semibold text-slate-900 ring-1 ring-slate-200">
                  {item.label}
                </span>
              ) : (
                <button type="button" onClick={() => undefined} title={'Ir a ' + item.label} className={linkClass}>
                  {item.label}
                </button>
              )}
              {isFirst && !expanded && (
                <>
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-300">
                    chevron_right
                  </span>
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    aria-label="Mostrar ruta completa"
                    title="Mostrar ruta completa"
                    className="flex h-7 min-w-7 items-center justify-center rounded-lg px-1.5 text-slate-400 ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0"
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                      more_horiz
                    </span>
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
`;
