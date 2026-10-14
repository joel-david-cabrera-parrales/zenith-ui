export const ANIMATIONS_TOOLTIP_HTML = `
<div class="flex flex-wrap items-center justify-center gap-3 p-8">
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Fade</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">Solo opacidad, sin escala</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Scale</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100">Opacidad mas escala 0.95 a 1</span>
  </span>
  <span class="group relative inline-block">
    <button type="button" class="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Slide</button>
    <span role="tooltip" class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 translate-y-1 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] text-white opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">Desliza 4px hacia el trigger</span>
  </span>
</div>
`;

export const ANIMATIONS_TOOLTIP_TSX = `
import { useState } from 'react';
import type { ReactNode } from 'react';

type Animation = 'fade' | 'scale' | 'slide';

const ENTER_OF: Record<Animation, string> = {
  fade: 'animate-tooltip-fade-in',
  scale: 'animate-tooltip-in',
  slide: 'animate-tooltip-bottom-in',
};

const AnimatedTip = ({ tip, animation, delay, children }: { tip: string; animation: Animation; delay: number; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const show = () => {
    window.setTimeout(() => setOpen(true), delay);
  };
  return (
    <span onMouseEnter={show} onMouseLeave={() => setOpen(false)} onFocus={show} onBlur={() => setOpen(false)} className="relative inline-block">
      {children}
      {open && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2">
          <span role="tooltip" className={'block rounded-lg bg-slate-900 px-2.5 py-1.5 text-[13px] font-medium text-white shadow-lg ' + ENTER_OF[animation]}>
            {tip}
          </span>
        </span>
      )}
    </span>
  );
};

export const AnimationsTooltip = () => {
  const [delay, setDelay] = useState(120);
  const btn = 'rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white';
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <AnimatedTip tip="Solo opacidad, sin escala" animation="fade" delay={delay}>
          <button type="button" className={btn}>Fade</button>
        </AnimatedTip>
        <AnimatedTip tip="Opacidad mas escala 0.95 a 1" animation="scale" delay={delay}>
          <button type="button" className={btn}>Scale</button>
        </AnimatedTip>
        <AnimatedTip tip="Desliza 4px hacia el trigger" animation="slide" delay={delay}>
          <button type="button" className={btn}>Slide</button>
        </AnimatedTip>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span>Retardo:</span>
        {[0, 120, 400].map((ms) => (
          <button
            key={ms}
            type="button"
            onClick={() => setDelay(ms)}
            aria-pressed={delay === ms}
            className={
              delay === ms
                ? 'rounded-lg bg-blue-600 px-2.5 py-1 font-semibold text-white'
                : 'rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600 hover:bg-slate-50'
            }
          >
            {ms}ms
          </button>
        ))}
      </div>
    </div>
  );
};
`;
