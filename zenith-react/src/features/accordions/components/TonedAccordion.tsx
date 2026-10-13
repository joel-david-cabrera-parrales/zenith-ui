import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export type TonedStatus = 'success' | 'warning' | 'danger';

export interface TonedItem {
  id: string;
  title: string;
  icon: string;
  metric: string;
  status: TonedStatus;
  body: string;
}

export interface TonedAccordionProps extends HTMLAttributes<HTMLDivElement> {
  items?: TonedItem[];
  defaultOpenId?: string | null;
}

const TONE_CLASSES: Record<TonedStatus, { border: string; icon: string; metric: string }> = {
  success: {
    border: 'border-l-emerald-500',
    icon: 'text-emerald-600',
    metric: 'text-emerald-700',
  },
  warning: {
    border: 'border-l-amber-500',
    icon: 'text-amber-600',
    metric: 'text-amber-700',
  },
  danger: {
    border: 'border-l-rose-500',
    icon: 'text-rose-600',
    metric: 'text-rose-700',
  },
};

const DEFAULT_ITEMS: TonedItem[] = [
  {
    id: 'api',
    title: 'API — Operativa',
    icon: 'check_circle',
    metric: '99.99%',
    status: 'success',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'jobs',
    title: 'Cola de jobs — Degradada',
    icon: 'warning',
    metric: '340 en cola',
    status: 'warning',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    id: 'eu1',
    title: 'Región EU1 — Incidente',
    icon: 'error',
    metric: 'INC-2041',
    status: 'danger',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
];

export const TonedAccordion = ({
  items = DEFAULT_ITEMS,
  defaultOpenId = 'api',
  className = '',
  ...rest
}: TonedAccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const baseId = useId();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-2 ${className}`} {...rest}>
      {items.map((item) => {
        const open = openId === item.id;
        const tone = TONE_CLASSES[item.status];
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id} className={`rounded-xl border border-slate-200 border-l-4 bg-white ${tone.border}`}>
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className={`material-symbols-outlined text-[18px] ${tone.icon}`}>
                  {item.icon}
                </span>
                {item.title}
                <span className={`font-mono text-[10px] font-semibold ${tone.metric}`}>{item.metric}</span>
              </span>
              <span
                aria-hidden="true"
                className={
                  open
                    ? 'material-symbols-outlined rotate-180 text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'
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
                <div className="px-4 pb-3">
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
