export const PLACEMENTS_TOOLTIP_HTML = `
<div class="flex flex-wrap items-center justify-center gap-3 p-8">
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Arriba</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">Tooltip superior</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Abajo</button>
    <span role="tooltip" class="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">Tooltip inferior</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Izquierda</button>
    <span role="tooltip" class="pointer-events-none absolute right-full top-1/2 z-50 mr-2 w-max max-w-64 -translate-y-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">Tooltip a la izquierda</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Derecha</button>
    <span role="tooltip" class="pointer-events-none absolute left-full top-1/2 z-50 ml-2 w-max max-w-64 -translate-y-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">Tooltip a la derecha</span>
  </span>
</div>
`;

export const PLACEMENTS_TOOLTIP_TSX = `
import { useState } from 'react';
import type { ReactNode } from 'react';

type Placement = 'top' | 'bottom' | 'left' | 'right';

const OUTER_OF: Record<Placement, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  bottom: 'left-1/2 top-full mt-2 -translate-x-1/2',
  left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  right: 'left-full top-1/2 ml-2 -translate-y-1/2',
};

const MiniTooltip = ({ tip, placement, children }: { tip: string; placement: Placement; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} className="relative inline-block">
      {children}
      {open && (
        <span className={'pointer-events-none absolute z-50 w-max ' + OUTER_OF[placement]}>
          <span role="tooltip" className="block animate-tooltip-in rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] font-medium text-white shadow-lg">
            {tip}
          </span>
        </span>
      )}
    </span>
  );
};

export const PlacementsTooltip = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-8">
      <MiniTooltip tip="Tooltip superior" placement="top">
        <button type="button" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Arriba</button>
      </MiniTooltip>
      <MiniTooltip tip="Tooltip inferior" placement="bottom">
        <button type="button" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Abajo</button>
      </MiniTooltip>
      <MiniTooltip tip="Tooltip a la izquierda" placement="left">
        <button type="button" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Izquierda</button>
      </MiniTooltip>
      <MiniTooltip tip="Tooltip a la derecha" placement="right">
        <button type="button" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Derecha</button>
      </MiniTooltip>
    </div>
  );
};
`;
