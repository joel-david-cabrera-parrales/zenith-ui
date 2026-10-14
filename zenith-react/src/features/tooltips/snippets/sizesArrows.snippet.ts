export const SIZES_ARROWS_TOOLTIP_HTML = `
<div class="flex flex-wrap items-end justify-center gap-6 p-8">
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Compacto</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-48 -translate-x-1/2 rounded-lg bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Ayuda breve</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Amplio</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Descripcion mas larga del campo</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Sin flecha</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Burbuja limpia sin flecha</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Con flecha</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Burbuja con flecha<span class="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900"></span></span>
  </span>
</div>
`;

export const SIZES_ARROWS_TOOLTIP_TSX = `
import { useState } from 'react';
import type { ReactNode } from 'react';

const MiniTooltip = ({ tip, small, arrow, children }: { tip: string; small?: boolean; arrow?: boolean; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} className="relative inline-block">
      {children}
      {open && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max -translate-x-1/2">
          <span
            role="tooltip"
            className={
              small
                ? 'relative block animate-tooltip-in rounded-lg bg-slate-900 px-2 py-1 text-xs font-medium text-white shadow-lg'
                : 'relative block max-w-64 animate-tooltip-in rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] font-medium text-white shadow-lg'
            }
          >
            {tip}
            {arrow === true && (
              <span aria-hidden="true" className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900" />
            )}
          </span>
        </span>
      )}
    </span>
  );
};

const btn = 'rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white';

export const SizesArrowsTooltip = () => {
  return (
    <div className="flex flex-wrap items-end justify-center gap-6 p-8">
      <MiniTooltip tip="Ayuda breve" small>
        <button type="button" className={btn}>Compacto</button>
      </MiniTooltip>
      <MiniTooltip tip="Descripcion mas larga del campo">
        <button type="button" className={btn}>Amplio</button>
      </MiniTooltip>
      <MiniTooltip tip="Burbuja limpia sin flecha">
        <button type="button" className={btn}>Sin flecha</button>
      </MiniTooltip>
      <MiniTooltip tip="Burbuja con flecha" arrow>
        <button type="button" className={btn}>Con flecha</button>
      </MiniTooltip>
    </div>
  );
};
`;
