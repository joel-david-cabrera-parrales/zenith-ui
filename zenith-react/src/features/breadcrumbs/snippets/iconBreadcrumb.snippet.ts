export const ICON_BREADCRUMB_HTML = `
<nav aria-label="Breadcrumb" class="w-full">
  <ol class="flex min-w-0 flex-wrap items-center gap-1 text-sm">
    <li class="flex min-w-0 items-center gap-1">
      <a href="/" title="Ir a Inicio" class="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-slate-400 transition-colors duration-200 group-hover:text-blue-600">home</span>
        <span>Inicio</span>
      </a>
    </li>
    <li class="flex min-w-0 items-center gap-1">
      <span aria-hidden="true" class="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
      <a href="/biblioteca" title="Ir a Biblioteca" class="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-slate-400 transition-colors duration-200 group-hover:text-blue-600">library_music</span>
        <span>Biblioteca</span>
      </a>
    </li>
    <li class="flex min-w-0 items-center gap-1">
      <span aria-hidden="true" class="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
      <a href="/biblioteca/album" title="Ir a Álbum" class="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-slate-400 transition-colors duration-200 group-hover:text-blue-600">album</span>
        <span>Álbum</span>
      </a>
    </li>
    <li class="flex min-w-0 items-center gap-1">
      <span aria-hidden="true" class="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
      <span aria-current="page" class="flex min-w-0 items-center gap-1.5 rounded-lg bg-slate-100 px-2 py-1 font-semibold text-slate-900 ring-1 ring-slate-200">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-slate-400">music_note</span>
        <span>Canción</span>
      </span>
    </li>
  </ol>
</nav>
`;

export const ICON_BREADCRUMB_TSX = `
import { useState } from 'react';

export const IconBreadcrumb = () => {
  const [current, setCurrent] = useState('cancion');
  const items = [
    { id: 'inicio', label: 'Inicio', icon: 'home' },
    { id: 'biblioteca', label: 'Biblioteca', icon: 'library_music' },
    { id: 'album', label: 'Álbum', icon: 'album' },
    { id: 'cancion', label: 'Canción', icon: 'music_note' },
  ];
  const activeIndex = items.findIndex((item) => item.id === current);
  const linkClass =
    'group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 active:bg-blue-100';
  const iconClass =
    'material-symbols-outlined text-[18px] text-slate-400 transition-colors duration-200 group-hover:text-blue-600';

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex min-w-0 flex-wrap items-center gap-1 text-sm">
        {items.map((item, position) => {
          const isLast = position === activeIndex || (activeIndex === -1 && position === items.length - 1);
          return (
            <li key={item.id} className="flex min-w-0 items-center gap-1">
              {position > 0 && (
                <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-300">
                  chevron_right
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="flex min-w-0 items-center gap-1.5 rounded-lg bg-slate-100 px-2 py-1 font-semibold text-slate-900 ring-1 ring-slate-200">
                  <span aria-hidden="true" className={iconClass}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </span>
              ) : (
                <button type="button" onClick={() => setCurrent(item.id)} title={'Ir a ' + item.label} className={linkClass}>
                  <span aria-hidden="true" className={iconClass}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
`;
