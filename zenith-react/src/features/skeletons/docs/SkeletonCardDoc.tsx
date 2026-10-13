import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { SkeletonCard } from '../components';
import { SKELETON_CARD_HTML, SKELETON_CARD_TSX } from '../snippets';
import type { SkeletonAnimation } from '../components';

export const SkeletonCardDoc = () => {
  const [animation, setAnimation] = useState<SkeletonAnimation>('pulse');
  const [loaded, setLoaded] = useState(false);

  return (
    <ComponentDoc
      title="Skeleton Card"
      description="Piloto SEC_01: avatar, textos, imagen y botones con pulse/shimmer y toggle loading/loaded. Base slate/blue con role=status y aria-busy."
      preview={
        <div className="mx-auto w-full max-w-xl">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <div className="flex rounded-lg border border-slate-200 p-0.5 text-xs font-semibold" role="group" aria-label="Animación">
              <button
                type="button"
                onClick={() => setAnimation('pulse')}
                aria-pressed={animation === 'pulse'}
                className={
                  animation === 'pulse'
                    ? 'rounded-md bg-slate-900 px-2.5 py-1 text-white'
                    : 'rounded-md px-2.5 py-1 text-slate-600 hover:bg-slate-100'
                }
              >
                pulse
              </button>
              <button
                type="button"
                onClick={() => setAnimation('shimmer')}
                aria-pressed={animation === 'shimmer'}
                className={
                  animation === 'shimmer'
                    ? 'rounded-md bg-slate-900 px-2.5 py-1 text-white'
                    : 'rounded-md px-2.5 py-1 text-slate-600 hover:bg-slate-100'
                }
              >
                shimmer
              </button>
            </div>
            <button
              type="button"
              onClick={() => setLoaded((v) => !v)}
              aria-pressed={loaded}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                {loaded ? 'hourglass_empty' : 'visibility'}
              </span>
              {loaded ? 'Ver skeleton' : 'Ver contenido'}
            </button>
          </div>
          {loaded ? (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  MD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">Martín Díaz · Deploy pipeline</p>
                  <p className="text-xs text-slate-500">hace 2 min · main → producción</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[11px] font-semibold text-blue-700">
                  <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
                    check_circle
                  </span>
                  Éxito
                </span>
              </div>
              <div className="mt-4 flex h-28 items-center justify-center rounded-xl bg-gradient-to-tr from-slate-900 to-blue-600 text-white">
                <span aria-hidden="true" className="material-symbols-outlined text-[32px]">
                  rocket_launch
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                El deploy #482 terminó sin errores. 14 checks pasados, 0 warnings, p99 de 212ms.
              </p>
            </div>
          ) : (
            <SkeletonCard animation={animation} />
          )}
        </div>
      }
      htmlCode={SKELETON_CARD_HTML}
      jsxCode={SKELETON_CARD_TSX}
    />
  );
};
