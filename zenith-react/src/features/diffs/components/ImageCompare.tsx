import { useId, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';

export type ImageCompareBlurMode = 'dynamic' | 'fixed' | 'none';

export type ImageCompareOrientation = 'horizontal' | 'vertical';

export interface ImageCompareProps {
  src?: string;
  afterSrc?: string;
  alt?: string;
  defaultPosition?: number;
  maxBlur?: number;
  blurMode?: ImageCompareBlurMode;
  fixedBlur?: number;
  afterFilter?: string;
  orientation?: ImageCompareOrientation;
  beforeLabel?: string;
  afterLabel?: string;
  onPositionChange?: (position: number) => void;
}

const clamp = (value: number, min: number, max: number): number => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

export const ImageCompare = ({
  src = 'https://picsum.photos/seed/daisies/900/500',
  afterSrc,
  alt = 'Comparador de imagen nítida y con blur',
  defaultPosition = 50,
  maxBlur = 12,
  blurMode = 'dynamic',
  fixedBlur = 8,
  afterFilter,
  orientation = 'horizontal',
  beforeLabel = 'NÍTIDO',
  afterLabel,
  onPositionChange,
  className = '',
}: ImageCompareProps & { className?: string }) => {
  const [position, setPosition] = useState(() => clamp(defaultPosition, 0, 100));
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const handleId = useId();
  const isVertical = orientation === 'vertical';

  const dynamicBlur = (position / 100) * maxBlur;
  const baseSrc = afterSrc ?? src;
  const baseBlur = blurMode === 'dynamic' ? dynamicBlur : blurMode === 'fixed' ? fixedBlur : 0;
  const baseFilter =
    blurMode === 'none' ? (afterFilter ?? 'none') : `blur(${baseBlur.toFixed(1)}px)`;
  const resolvedAfterLabel =
    afterLabel ?? (blurMode === 'none' ? 'DESPUÉS' : `BLUR ${baseBlur.toFixed(1)}px`);

  const updateFromClient = (clientX: number, clientY: number) => {
    const track = trackRef.current;
    if (track === null) return;
    const rect = track.getBoundingClientRect();
    const size = isVertical ? rect.height : rect.width;
    if (size === 0) return;
    const offset = isVertical ? clientY - rect.top : clientX - rect.left;
    const next = clamp((offset / size) * 100, 0, 100);
    setPosition(next);
    onPositionChange?.(next);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    updateFromClient(event.clientX, event.clientY);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging && event.buttons !== 1) return;
    updateFromClient(event.clientX, event.clientY);
  };

  const endDrag = () => {
    setDragging(false);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 2;
    const decreaseKey = isVertical ? 'ArrowUp' : 'ArrowLeft';
    const increaseKey = isVertical ? 'ArrowDown' : 'ArrowRight';
    if (event.key === decreaseKey || event.key === increaseKey) {
      event.preventDefault();
      const delta = event.key === decreaseKey ? -step : step;
      const next = clamp(position + delta, 0, 100);
      setPosition(next);
      onPositionChange?.(next);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      setPosition(0);
      onPositionChange?.(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      setPosition(100);
      onPositionChange?.(100);
    }
  };

  const clipPath = isVertical
    ? `inset(0 0 calc(100% - ${position.toFixed(1)}%) 0)`
    : `inset(0 calc(100% - ${position.toFixed(1)}%) 0 0)`;
  const blurMeta =
    blurMode === 'none'
      ? (afterFilter ?? 'sin filtro')
      : blurMode === 'fixed'
        ? `${fixedBlur}px fijo`
        : `${(position / 100).toFixed(2)} × ${maxBlur}px`;

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`relative aspect-[16/9] w-full touch-none overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200 select-none ${
          isVertical ? 'cursor-ns-resize' : 'cursor-ew-resize'
        }`}
      >
        <img
          src={baseSrc}
          alt=""
          aria-hidden="true"
          draggable={false}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={
            blurMode === 'none'
              ? { filter: baseFilter }
              : { filter: baseFilter, transform: 'scale(1.04)' }
          }
        />
        <img
          src={src}
          alt={alt}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath }}
        />
        <div
          aria-hidden="true"
          className={
            isVertical
              ? 'pointer-events-none absolute inset-x-0 h-px bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.15)]'
              : 'pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.15)]'
          }
          style={isVertical ? { top: `${position.toFixed(1)}%` } : { left: `${position.toFixed(1)}%` }}
        />
        <div
          id={handleId}
          role="slider"
          tabIndex={0}
          aria-label="Posición del comparador"
          aria-orientation={orientation}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)} por ciento, ${resolvedAfterLabel}`}
          onKeyDown={handleKeyDown}
          className={
            isVertical
              ? 'absolute left-1/2 flex h-7 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ns-resize items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-900/10 outline-none focus-visible:ring-2 focus-visible:ring-blue-600'
              : 'absolute top-1/2 flex h-12 w-7 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-900/10 outline-none focus-visible:ring-2 focus-visible:ring-blue-600'
          }
          style={isVertical ? { top: `${position.toFixed(1)}%` } : { left: `${position.toFixed(1)}%` }}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-slate-600">
            drag_indicator
          </span>
        </div>
        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">
          {resolvedAfterLabel}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-slate-500">
        <span>Posición {Math.round(position)}%</span>
        <span>Blur {blurMeta}</span>
      </div>
    </div>
  );
};
