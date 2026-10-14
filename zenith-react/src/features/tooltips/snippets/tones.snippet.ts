export const TONES_TOOLTIP_HTML = `
<div class="flex flex-wrap items-center justify-center gap-3 p-8">
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Oscuro</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Tono oscuro por defecto</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">Claro</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-white px-2.5 py-1.5 text-[13px] text-slate-700 opacity-0 shadow-lg ring-1 ring-slate-200 transition-opacity duration-150 group-hover:opacity-100">Tono claro para fondos oscuros</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white">Info</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-blue-600 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Dato informativo del panel</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white">Exito</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-emerald-600 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Despliegue completado sin errores</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-amber-400 px-3 py-2 text-sm font-medium text-slate-900">Aviso</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-amber-400 px-2.5 py-1.5 text-[13px] text-slate-900 opacity-0 transition-opacity duration-150 group-hover:opacity-100">La cuota de API esta al 85%</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white">Error</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-rose-600 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Fallo la sincronizacion del cluster</span>
  </span>
</div>
`;

export const TONES_TOOLTIP_TSX = `
import { useState } from 'react';
import type { ReactNode } from 'react';

type Tone = 'dark' | 'light' | 'info' | 'success' | 'warning' | 'danger';

const BOX_OF: Record<Tone, string> = {
  dark: 'bg-slate-900 text-white shadow-lg',
  light: 'bg-white text-slate-700 shadow-lg ring-1 ring-slate-200',
  info: 'bg-blue-600 text-white shadow-lg',
  success: 'bg-emerald-600 text-white shadow-lg',
  warning: 'bg-amber-400 text-slate-900 shadow-lg',
  danger: 'bg-rose-600 text-white shadow-lg',
};

const MiniTooltip = ({ tip, tone, children }: { tip: string; tone: Tone; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} className="relative inline-block">
      {children}
      {open && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2">
          <span role="tooltip" className={'block animate-tooltip-in rounded-lg px-2.5 py-1.5 text-[13px] font-medium ' + BOX_OF[tone]}>
            {tip}
          </span>
        </span>
      )}
    </span>
  );
};

const btn = 'rounded-lg px-3 py-2 text-sm font-medium text-white';

export const TonesTooltip = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-8">
      <MiniTooltip tip="Tono oscuro por defecto" tone="dark">
        <button type="button" className={btn + ' bg-slate-900'}>Oscuro</button>
      </MiniTooltip>
      <MiniTooltip tip="Tono claro para fondos oscuros" tone="light">
        <button type="button" className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">Claro</button>
      </MiniTooltip>
      <MiniTooltip tip="Dato informativo del panel" tone="info">
        <button type="button" className={btn + ' bg-blue-600'}>Info</button>
      </MiniTooltip>
      <MiniTooltip tip="Despliegue completado sin errores" tone="success">
        <button type="button" className={btn + ' bg-emerald-600'}>Exito</button>
      </MiniTooltip>
      <MiniTooltip tip="La cuota de API esta al 85%" tone="warning">
        <button type="button" className={btn + ' bg-amber-400 text-slate-900'}>Aviso</button>
      </MiniTooltip>
      <MiniTooltip tip="Fallo la sincronizacion del cluster" tone="danger">
        <button type="button" className={btn + ' bg-rose-600'}>Error</button>
      </MiniTooltip>
    </div>
  );
};
`;
