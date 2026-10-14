export const RICH_TOOLTIP_HTML = `
<div class="flex flex-wrap items-center justify-center gap-3 p-8">
  <span class="group relative inline-block">
    <button type="button" class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Guardar <kbd class="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[11px] text-slate-500">Ctrl S</kbd></button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-xl bg-slate-900 p-3 text-left opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"><span class="block text-[13px] font-semibold text-white">Guardar cambios</span><span class="mt-0.5 block text-xs text-slate-300">Persiste el formulario en el servidor.</span></span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">MD</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-xl bg-slate-900 p-3 text-left opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"><span class="block text-[13px] font-semibold text-white">Mariana Duarte</span><span class="mt-0.5 block text-xs text-slate-300">Coordinadora VIP - En linea</span></span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500"><span class="material-symbols-outlined text-[20px]">info</span></button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-xl bg-slate-900 p-3 text-left opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"><span class="block text-[13px] font-semibold text-white">Ventana de sincronizacion</span><span class="mt-0.5 block text-xs text-slate-300">Las replicas se sincronizan cada 30 segundos.</span></span>
  </span>
</div>
`;

export const RICH_TOOLTIP_TSX = `
import { useState } from 'react';
import type { ReactNode } from 'react';

const RichTip = ({ title, body, children }: { title: string; body: string; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} className="relative inline-block">
      {children}
      {open && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2">
          <span role="tooltip" className="block animate-tooltip-in rounded-xl bg-slate-900 p-3 text-left shadow-lg">
            <span className="block text-[13px] font-semibold text-white">{title}</span>
            <span className="mt-0.5 block text-xs text-slate-300">{body}</span>
          </span>
        </span>
      )}
    </span>
  );
};

export const RichTooltip = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-8">
      <RichTip title="Guardar cambios" body="Persiste el formulario en el servidor.">
        <button type="button" className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
          Guardar
          <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[11px] text-slate-500">Ctrl S</kbd>
        </button>
      </RichTip>
      <RichTip title="Mariana Duarte" body="Coordinadora VIP - En linea">
        <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">MD</button>
      </RichTip>
      <RichTip title="Ventana de sincronizacion" body="Las replicas se sincronizan cada 30 segundos.">
        <button type="button" aria-label="Mas informacion" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">info</span>
        </button>
      </RichTip>
    </div>
  );
};
`;
