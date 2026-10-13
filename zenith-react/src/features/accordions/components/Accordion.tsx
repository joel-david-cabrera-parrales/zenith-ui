import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  icon: string;
  body: string;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items?: AccordionItem[];
  defaultOpenId?: string | null;
}

const DEFAULT_ITEMS: AccordionItem[] = [
  {
    id: 'que-es',
    title: '¿Qué es Zenith UI?',
    icon: 'help',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 'estilos',
    title: '¿Cómo personalizo los estilos?',
    icon: 'palette',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    id: 'empezar',
    title: '¿Cómo empiezo un proyecto?',
    icon: 'rocket_launch',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
];

export const Accordion = ({
  items = DEFAULT_ITEMS,
  defaultOpenId = 'que-es',
  className = '',
  ...rest
}: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const baseId = useId();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={`divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white ${className}`}
      {...rest}
    >
      {items.map((item) => {
        const open = openId === item.id;
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id}>
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className={
                open
                  ? 'flex w-full cursor-pointer items-center justify-between gap-3 bg-blue-50/60 px-4 py-3 text-left text-sm font-semibold text-slate-900'
                  : 'flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50'
              }
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
                <div className="px-4 pt-1 pb-4">
                  <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
