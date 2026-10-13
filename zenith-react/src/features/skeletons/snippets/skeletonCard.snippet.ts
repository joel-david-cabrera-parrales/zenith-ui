export const SKELETON_CARD_HTML = `
<div role="status" aria-label="Cargando contenido" aria-busy="true" class="rounded-xl border border-slate-200 bg-white p-4">
  <div class="flex items-center gap-3">
    <div aria-hidden="true" class="h-10 w-10 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
    <div class="flex-1 space-y-2">
      <div aria-hidden="true" class="h-3 w-2/3 rounded-lg bg-slate-200 animate-pulse"></div>
      <div aria-hidden="true" class="h-2.5 w-1/3 rounded-lg bg-slate-200 animate-pulse"></div>
    </div>
    <div aria-hidden="true" class="h-8 w-20 shrink-0 rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
  <div aria-hidden="true" class="mt-4 h-28 rounded-xl bg-slate-200 animate-pulse"></div>
  <div class="mt-4 space-y-2">
    <div aria-hidden="true" class="h-3 w-full rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-3 w-11/12 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-3 w-2/3 rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
  <div class="mt-4 flex gap-2">
    <div aria-hidden="true" class="h-8 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-8 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
</div>
`;

export const SKELETON_CARD_TSX = `
import { useState } from 'react';

export const SkeletonCard = () => {
  const [animation, setAnimation] = useState<'pulse' | 'shimmer'>('pulse');
  const [loaded, setLoaded] = useState(false);
  const block = animation === 'pulse' ? 'bg-slate-200 animate-pulse' : 'skeleton-shimmer';
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex rounded-lg border border-slate-200 p-0.5 text-xs font-semibold">
          <button type="button" onClick={() => setAnimation('pulse')} className={animation === 'pulse' ? 'rounded-md bg-slate-900 px-2.5 py-1 text-white' : 'rounded-md px-2.5 py-1 text-slate-600'}>
            pulse
          </button>
          <button type="button" onClick={() => setAnimation('shimmer')} className={animation === 'shimmer' ? 'rounded-md bg-slate-900 px-2.5 py-1 text-white' : 'rounded-md px-2.5 py-1 text-slate-600'}>
            shimmer
          </button>
        </div>
        <button type="button" onClick={() => setLoaded((v) => !v)} className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
          {loaded ? 'Ver skeleton' : 'Ver contenido'}
        </button>
      </div>
      {loaded ? (
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">MD</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">Martin Diaz · Deploy pipeline</p>
              <p className="text-xs text-slate-500">hace 2 min · main a produccion</p>
            </div>
            <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] font-semibold text-blue-700">Exito</span>
          </div>
          <p className="mt-4 text-sm text-slate-600">El deploy #482 termino sin errores. 14 checks pasados, p99 de 212ms.</p>
        </div>
      ) : (
        <div role="status" aria-label="Cargando contenido" aria-busy="true" className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-3">
            <div aria-hidden="true" className={'h-10 w-10 shrink-0 rounded-full ' + block}></div>
            <div className="flex-1 space-y-2">
              <div aria-hidden="true" className={'h-3 w-2/3 rounded-lg ' + block}></div>
              <div aria-hidden="true" className={'h-2.5 w-1/3 rounded-lg ' + block}></div>
            </div>
            <div aria-hidden="true" className={'h-8 w-20 shrink-0 rounded-lg ' + block}></div>
          </div>
          <div aria-hidden="true" className={'mt-4 h-28 rounded-xl ' + block}></div>
          <div className="mt-4 space-y-2">
            <div aria-hidden="true" className={'h-3 w-full rounded-lg ' + block}></div>
            <div aria-hidden="true" className={'h-3 w-11/12 rounded-lg ' + block}></div>
            <div aria-hidden="true" className={'h-3 w-2/3 rounded-lg ' + block}></div>
          </div>
          <div className="mt-4 flex gap-2">
            <div aria-hidden="true" className={'h-8 flex-1 rounded-lg ' + block}></div>
            <div aria-hidden="true" className={'h-8 flex-1 rounded-lg ' + block}></div>
          </div>
        </div>
      )}
    </div>
  );
};
`;
