export const MEDIA_HTML = `
<div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
  <button type="button" aria-expanded="true" class="flex w-full items-center justify-between gap-3 bg-slate-900 px-4 py-3 text-left text-sm font-semibold text-white">Star Summit 2026 — Auditorio Principal</button>
  <div class="grid gap-4 p-4">
    <div class="flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-slate-900">COVER</div>
    <div>
      <div class="flex gap-3 font-mono text-[10px] font-semibold text-slate-500"><span>12 JUN 2026</span><span>1,240 ASISTENTES</span><span>EN VIVO</span></div>
      <p class="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="mt-3 flex gap-2">
        <button type="button" class="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">Ver agenda</button>
        <button type="button" class="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700">Compartir</button>
      </div>
    </div>
  </div>
</div>
`;

export const MEDIA_TSX = `
import { useId, useState } from 'react';

export const MediaAccordion = () => {
  const [open, setOpen] = useState(true);
  const baseId = useId();
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button type="button" aria-expanded={open} onClick={() => setOpen((prev) => !prev)} className="flex w-full cursor-pointer items-center justify-between gap-3 bg-slate-900 px-4 py-3 text-left text-sm font-semibold text-white">
        <span>Star Summit 2026 — Auditorio Principal</span>
        <span aria-hidden="true" className={open ? 'material-symbols-outlined rotate-180 text-[20px] transition-transform duration-300 ease-in-out' : 'material-symbols-outlined text-[20px] transition-transform duration-300 ease-in-out'}>expand_more</span>
      </button>
      <div role="region" inert={!open} className={'grid transition-all duration-300 ease-in-out motion-reduce:transition-none ' + (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
        <div className="overflow-hidden">
          <div className="grid gap-4 p-4 sm:grid-cols-[140px_1fr]">
          <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-slate-900">
            <span aria-hidden="true" className="material-symbols-outlined text-[40px] text-white/90">celebration</span>
          </div>
          <div>
            <div className="flex flex-wrap gap-3 font-mono text-[10px] font-semibold text-slate-500"><span>12 JUN 2026</span><span>1,240 ASISTENTES</span><span className="text-blue-700">EN VIVO</span></div>
            <p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tres escenarios y zona VIP.</p>
            <div className="mt-3 flex gap-2">
              <button type="button" className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">Ver agenda</button>
              <button type="button" className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700">Compartir</button>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};
`;
