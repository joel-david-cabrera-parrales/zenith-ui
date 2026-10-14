import { useState } from 'react';

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  maxItems?: number;
  onNavigate?: (item: BreadcrumbItem) => void;
  className?: string;
}

const DEFAULT_ITEMS: BreadcrumbItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/', icon: 'home' },
  { id: 'biblioteca', label: 'Biblioteca', href: '/biblioteca', icon: 'library_music' },
  { id: 'album', label: 'Álbum', href: '/biblioteca/album' },
  { id: 'cancion', label: 'Canción' },
];

export const Breadcrumb = ({
  items = DEFAULT_ITEMS,
  maxItems = 4,
  onNavigate,
  className = '',
}: BreadcrumbProps) => {
  const [expanded, setExpanded] = useState(false);

  const shouldCollapse = items.length > maxItems && !expanded;
  const visibleItems = shouldCollapse
    ? [items[0], ...items.slice(-2)]
    : items;

  const showEllipsis = shouldCollapse && items.length > maxItems;

  const handleNavigate = (item: BreadcrumbItem) => {
    onNavigate?.(item);
  };

  const renderItem = (item: BreadcrumbItem, isLast: boolean) => {
    const content = (
      <>
        {item.icon !== undefined && (
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[18px] text-slate-400 transition-colors duration-200 group-hover:text-blue-600"
          >
            {item.icon}
          </span>
        )}
        <span className="truncate">{item.label}</span>
      </>
    );

    if (isLast) {
      return (
        <span aria-current="page" className="flex min-w-0 items-center gap-1.5 rounded-lg bg-slate-100 px-2 py-1 font-semibold text-slate-900 ring-1 ring-slate-200">
          {content}
        </span>
      );
    }

    if (item.href !== undefined) {
      return (
        <a
          href={item.href}
          onClick={(event) => {
            if (onNavigate !== undefined) {
              event.preventDefault();
              handleNavigate(item);
            }
          }}
          title={`Ir a ${item.label}`}
          className="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 active:bg-blue-100"
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleNavigate(item)}
        title={`Ir a ${item.label}`}
        className="group flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:ring-1 hover:ring-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 active:bg-blue-100"
      >
        {content}
      </button>
    );
  };

  return (
    <nav aria-label="Breadcrumb" className={`w-full ${className}`}>
      <ol className="flex min-w-0 flex-wrap items-center gap-1 text-sm">
        {visibleItems.map((item, position) => {
          const isFirst = position === 0;
          const isLast = position === visibleItems.length - 1;
          const key = item.id;
          return (
            <li key={key} className="flex min-w-0 items-center gap-1">
              {!isFirst && (
                <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-300">
                  chevron_right
                </span>
              )}
              {renderItem(item, isLast)}
              {isFirst && showEllipsis && (
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
