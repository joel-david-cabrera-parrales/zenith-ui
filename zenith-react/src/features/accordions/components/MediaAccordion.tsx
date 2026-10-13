import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface MediaAccordionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  date?: string;
  attendees?: string;
  status?: string;
  body?: string;
  defaultOpen?: boolean;
}

export const MediaAccordion = ({
  title = 'Star Summit 2026 — Auditorio Principal',
  date = '12 JUN 2026',
  attendees = '1,240 ASISTENTES',
  status = 'EN VIVO',
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tres escenarios y zona VIP.',
  defaultOpen = true,
  className = '',
  ...rest
}: MediaAccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`} {...rest}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 bg-slate-900 px-4 py-3 text-left text-sm font-semibold text-white"
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-300">
            festival
          </span>
          {title}
        </span>
        <span
          aria-hidden="true"
          className={
            open
              ? 'material-symbols-outlined rotate-180 text-[20px] transition-transform duration-300 ease-in-out'
              : 'material-symbols-outlined text-[20px] transition-transform duration-300 ease-in-out'
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
          <div className="grid gap-4 p-4 sm:grid-cols-[140px_1fr]">
          <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-slate-900">
            <span aria-hidden="true" className="material-symbols-outlined text-[40px] text-white/90">
              celebration
            </span>
          </div>
          <div>
            <div className="flex flex-wrap gap-3 font-mono text-[10px] font-semibold text-slate-500">
              <span>{date}</span>
              <span>{attendees}</span>
              <span className="text-blue-700">{status}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Ver agenda
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Compartir
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
