import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface BadgedItem {
  id: string;
  title: string;
  icon: string;
  badge: string;
  badgeTone: 'info' | 'neutral' | 'hot';
  hint: string;
  body: string;
}

export interface BadgedAccordionProps extends HTMLAttributes<HTMLDivElement> {
  items?: BadgedItem[];
  defaultOpenId?: string | null;
}

const BADGE_CLASSES: Record<BadgedItem['badgeTone'], string> = {
  info: 'bg-blue-600 text-white',
  neutral: 'bg-slate-100 text-slate-600',
  hot: 'bg-blue-100 text-blue-800',
};

const DEFAULT_ITEMS: BadgedItem[] = [
  {
    id: 'v240',
    title: 'v2.4.0 — Panel de telemetría',
    icon: 'fiber_new',
    badge: 'NUEVO',
    badgeTone: 'info',
    hint: '12 cambios · publicado hace 3 días',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Incluye sparklines y alertas configurables.',
  },
  {
    id: 'v232',
    title: 'v2.3.2 — Fixes de sincronía',
    icon: 'bug_report',
    badge: '4 FIXES',
    badgeTone: 'neutral',
    hint: 'Parche menor · hace 2 semanas',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    id: 'v230',
    title: 'v2.3.0 — SSO y auditoría',
    icon: 'lock',
    badge: 'HOT',
    badgeTone: 'hot',
    hint: 'Seguridad · requiere migración',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
];

export const BadgedAccordion = ({
  items = DEFAULT_ITEMS,
  defaultOpenId = 'v240',
  className = '',
  ...rest
}: BadgedAccordionProps) => {
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
                  ? 'flex w-full cursor-pointer items-center justify-between gap-3 bg-blue-50/60 px-4 py-3 text-left'
                  : 'flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50'
              }
            >
              <span>
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-900">
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
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold ${BADGE_CLASSES[item.badgeTone]}`}
                  >
                    {item.badge}
                  </span>
                </span>
                <span className="mt-0.5 block pl-7 text-xs text-slate-500">{item.hint}</span>
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
                <div className="px-4 pb-4 pl-11">
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
