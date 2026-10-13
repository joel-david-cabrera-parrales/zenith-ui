export const BEFORE_AFTER_HTML = `
<div class="w-full">
  <div class="relative aspect-[16/9] w-full cursor-ew-resize overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200 select-none">
    <img src="https://picsum.photos/seed/city/900/500" alt="" aria-hidden="true" draggable="false" loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-cover" />
    <img src="https://picsum.photos/seed/daisies/900/500" alt="Comparador antes y después" draggable="false" loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-cover" style="clip-path: inset(0 calc(100% - 50.0%) 0 0);" />
    <div aria-hidden="true" class="pointer-events-none absolute inset-y-0 w-px bg-white" style="left: 50.0%;"></div>
    <div class="absolute top-1/2 flex h-12 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-900/10" style="left: 50.0%;">
      <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-slate-600">compare</span>
    </div>
    <span class="pointer-events-none absolute top-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">ANTES</span>
    <span class="pointer-events-none absolute top-3 right-3 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">DESPUÉS</span>
  </div>
  <div class="mt-2 flex items-center justify-between font-mono text-[11px] text-slate-500">
    <span>Posición 50%</span>
    <span>Dos fotos distintas · sin blur</span>
  </div>
</div>
`;

export const BEFORE_AFTER_TSX = `
import { useId, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';

export const BeforeAfterCompare = () => {
  const before = 'https://picsum.photos/seed/daisies/900/500';
  const after = 'https://picsum.photos/seed/city/900/500';
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const handleId = useId();

  const clamp = (value: number) => Math.min(100, Math.max(0, value));

  const updateFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (track === null) return;
    const rect = track.getBoundingClientRect();
    if (rect.width === 0) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging && event.buttons !== 1) return;
    updateFromClientX(event.clientX);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 2;
    if (event.key === 'ArrowLeft') setPosition((p) => clamp(p - step));
    if (event.key === 'ArrowRight') setPosition((p) => clamp(p + step));
    if (event.key === 'Home') setPosition(0);
    if (event.key === 'End') setPosition(100);
  };

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        className="relative aspect-[16/9] w-full cursor-ew-resize touch-none overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200 select-none"
      >
        <img src={after} alt="" aria-hidden="true" draggable={false} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <img
          src={before}
          alt="Comparador antes y después"
          draggable={false}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: 'inset(0 calc(100% - ' + position.toFixed(1) + '%) 0 0)' }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-white" style={{ left: position.toFixed(1) + '%' }} />
        <div
          id={handleId}
          role="slider"
          tabIndex={0}
          aria-label="Posición del comparador antes y después"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 flex h-12 w-7 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-900/10"
          style={{ left: position.toFixed(1) + '%' }}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-slate-600">compare</span>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-slate-500">
        <span>Posición {Math.round(position)}%</span>
        <span>Dos fotos distintas · sin blur</span>
      </div>
    </div>
  );
};
`;
