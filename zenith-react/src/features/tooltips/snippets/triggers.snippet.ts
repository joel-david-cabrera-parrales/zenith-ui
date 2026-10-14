export const TRIGGERS_TOOLTIP_HTML = `
<div class="flex flex-wrap items-center justify-center gap-4 p-8">
  <span class="group relative inline-block">
    <button type="button" aria-label="Notificaciones" class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600"><span class="material-symbols-outlined text-[20px]">notifications</span></button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max -translate-x-1/2 rounded-lg bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">3 sin leer</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">JJ</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max -translate-x-1/2 rounded-lg bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">Jonathan J. - Admin</span>
  </span>
  <span class="relative inline-block">
    <button type="button" disabled aria-describedby="tip-off" class="cursor-not-allowed rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-300">Deshabilitado</button>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Texto largo</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">El contenido envuelve hasta max-w-64 y nunca desborda la pantalla en movil.</span>
  </span>
</div>
`;

export const TRIGGERS_TOOLTIP_TSX = `
import { useState } from 'react';
import type { ReactNode } from 'react';

const MiniTooltip = ({ tip, wide, children }: { tip: string; wide?: boolean; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} className="relative inline-block">
      {children}
      {open && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2">
          <span
            role="tooltip"
            className={
              wide === true
                ? 'block w-56 animate-tooltip-in rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] font-medium text-white shadow-lg'
                : 'block w-max animate-tooltip-in rounded-lg bg-slate-900 px-2 py-1 text-xs font-medium text-white shadow-lg'
            }
          >
            {tip}
          </span>
        </span>
      )}
    </span>
  );
};

export const TriggersTooltip = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      <MiniTooltip tip="3 sin leer">
        <button type="button" aria-label="Notificaciones" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">notifications</span>
        </button>
      </MiniTooltip>
      <MiniTooltip tip="Jonathan J. - Admin">
        <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">JJ</button>
      </MiniTooltip>
      <span className="relative inline-block">
        <button type="button" disabled className="cursor-not-allowed rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-300">Deshabilitado</button>
      </span>
      <MiniTooltip tip="El contenido envuelve hasta max-w-64 y nunca desborda la pantalla en movil." wide>
        <button type="button" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Texto largo</button>
      </MiniTooltip>
    </div>
  );
};
`;
