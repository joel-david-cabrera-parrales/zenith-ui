import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface MultiOpenItem {
  id: string;
  title: string;
  icon: string;
  badge?: string;
  body: string;
}

export interface MultiOpenAccordionProps extends HTMLAttributes<HTMLDivElement> {
  items?: MultiOpenItem[];
  defaultOpenIds?: string[];
}

const DEFAULT_ITEMS: MultiOpenItem[] = [
  {
    id: 'install',
    title: 'Instalación',
    icon: 'deployed_code',
    badge: '5 min',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ejecuta el instalador y verifica la versión.',
  },
  {
    id: 'config',
    title: 'Configuración avanzada',
    icon: 'tune',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
  },
  {
    id: 'envs',
    title: 'Entornos de prueba',
    icon: 'science',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  },
];

export const MultiOpenAccordion = ({
  items = DEFAULT_ITEMS,
  defaultOpenIds = ['install', 'envs'],
  className = '',
  ...rest
}: MultiOpenAccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);
  const baseId = useId();

  const toggle = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((open) => open !== id) : [...prev, id]));
  };

  const expandAll = () => {
    setOpenIds(items.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <div className={className} {...rest}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-blue-100 px-2.5 py-1 font-mono text-[10px] font-semibold text-blue-800">
          {openIds.length} abiertas
        </span>
        <span className="flex gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="cursor-pointer rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Expandir todo
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="cursor-pointer rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Colapsar
          </button>
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {items.map((item) => {
          const open = openIds.includes(item.id);
          const buttonId = `${baseId}-${item.id}-button`;
          const panelId = `${baseId}-${item.id}-panel`;
          return (
            <div
              key={item.id}
              className={
                open
                  ? 'rounded-xl border border-blue-200 bg-blue-50/40'
                  : 'rounded-xl border border-slate-200 bg-white'
              }
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={
                      open
                        ? 'material-symbols-outlined text-[18px] text-blue-600'
                        : 'material-symbols-outlined text-[18px] text-slate-400'
                    }
                  >
                    {item.icon}
                  </span>
                  {item.title}
                  {item.badge !== undefined && (
                    <span className="rounded bg-blue-600 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </span>
                <span
                  aria-hidden="true"
                  className={
                    open
                      ? 'material-symbols-outlined rotate-180 text-[20px] text-blue-600 transition-transform duration-300 ease-in-out'
                      : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'
                  }
                >
                  expand_more
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                inert={!open}
                className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                  open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4">
                    <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
