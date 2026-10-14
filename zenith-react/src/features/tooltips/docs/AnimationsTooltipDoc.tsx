import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Tooltip } from '../components';
import type { TooltipAnimation } from '../components';
import { ANIMATIONS_TOOLTIP_HTML, ANIMATIONS_TOOLTIP_TSX } from '../snippets';

const ANIMATIONS: Array<{ id: TooltipAnimation; label: string; hint: string }> = [
  { id: 'fade', label: 'Fade', hint: 'Solo opacidad, sin escala' },
  { id: 'scale', label: 'Scale', hint: 'Opacidad mas escala 0.95 a 1' },
  { id: 'slide', label: 'Slide', hint: 'Desliza 4px hacia el trigger' },
];

const DELAYS = [0, 120, 400];

const btn = 'rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600';

export const AnimationsTooltipDoc = () => {
  const [animation, setAnimation] = useState<TooltipAnimation>('scale');
  const [delay, setDelay] = useState(120);

  return (
    <ComponentDoc
      title="Animaciones y retardo"
      description="Tres entradas en 150ms con salida unificada en dos fases, mas retardo de apertura configurable: 0ms para feedback inmediato, 120ms por defecto anti-parpadeo y 400ms para iconos densos. Respeta prefers-reduced-motion."
      preview={
        <div className="flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {ANIMATIONS.map((item) => (
              <Tooltip key={item.id} content={item.hint} animation={animation} enterDelay={delay}>
                <button
                  type="button"
                  onMouseEnter={() => setAnimation(item.id)}
                  onFocus={() => setAnimation(item.id)}
                  aria-pressed={animation === item.id}
                  className={animation === item.id ? 'rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600' : btn}
                >
                  {item.label}
                </button>
              </Tooltip>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Retardo de apertura:</span>
            {DELAYS.map((ms) => (
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
      }
      htmlCode={ANIMATIONS_TOOLTIP_HTML}
      jsxCode={ANIMATIONS_TOOLTIP_TSX}
      maxWidth="4xl"
    />
  );
};
