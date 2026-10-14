import type { HTMLAttributes } from 'react';

export type LoadingSize = 'small' | 'medium' | 'large';
export type LoadingTone = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type LoadingVariant = 'spinner' | 'bar' | 'dots' | 'pulse' | 'ring';
export type LoadingShape = 'circular' | 'rounded';

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  variant?: LoadingVariant;
  size?: LoadingSize;
  tone?: LoadingTone;
  shape?: LoadingShape;
  label?: string;
  showLabel?: boolean;
  overlay?: boolean;
  fullScreen?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

const SPINNER_SIZE: Record<LoadingSize, string> = {
  small: 'h-4 w-4 border-2',
  medium: 'h-6 w-6 border-2',
  large: 'h-10 w-10 border-[3px]',
};

const DOT_SIZE: Record<LoadingSize, string> = {
  small: 'h-1.5 w-1.5',
  medium: 'h-2 w-2',
  large: 'h-3 w-3',
};

const BAR_TRACK: Record<LoadingSize, string> = {
  small: 'h-1 w-32',
  medium: 'h-2 w-48',
  large: 'h-3 w-64',
};

const PULSE_SIZE: Record<LoadingSize, string> = {
  small: 'h-4 w-4',
  medium: 'h-6 w-6',
  large: 'h-10 w-10',
};

const SPINNER_TONE: Record<LoadingTone, string> = {
  primary: 'border-slate-200 border-t-blue-600 dark:border-slate-700 dark:border-t-blue-500',
  success: 'border-slate-200 border-t-emerald-600 dark:border-slate-700 dark:border-t-emerald-500',
  warning: 'border-slate-200 border-t-amber-600 dark:border-slate-700 dark:border-t-amber-500',
  danger: 'border-slate-200 border-t-red-600 dark:border-slate-700 dark:border-t-red-500',
  info: 'border-slate-200 border-t-sky-600 dark:border-slate-700 dark:border-t-sky-500',
  neutral: 'border-slate-200 border-t-slate-600 dark:border-slate-700 dark:border-t-slate-400',
};

const SOLID_TONE: Record<LoadingTone, string> = {
  primary: 'bg-blue-600',
  success: 'bg-emerald-600',
  warning: 'bg-amber-600',
  danger: 'bg-red-600',
  info: 'bg-sky-600',
  neutral: 'bg-slate-600',
};

const SPEED_CLASS: Record<NonNullable<LoadingProps['speed']>, string> = {
  slow: '[animation-duration:1.5s]',
  normal: '[animation-duration:1s]',
  fast: '[animation-duration:0.5s]',
};

const SHAPE_CLASS: Record<LoadingShape, string> = {
  circular: 'rounded-full',
  rounded: 'rounded-md',
};

const OVERLAY_BASE =
  'fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-slate-950/80';
const FULLSCREEN_BASE = 'fixed inset-0 z-[60] flex items-center justify-center bg-white dark:bg-slate-950';

export const Loading = ({
  variant = 'spinner',
  size = 'medium',
  tone = 'primary',
  shape = 'circular',
  label,
  showLabel = false,
  overlay = false,
  fullScreen = false,
  speed = 'normal',
  className = '',
  ...rest
}: LoadingProps) => {
  const shapeClass = SHAPE_CLASS[shape];
  const speedClass = SPEED_CLASS[speed];
  const labelText = label ?? 'Cargando...';

  const renderSpinner = () => (
    <div
      aria-hidden="true"
      className={`${SPINNER_SIZE[size]} ${SPINNER_TONE[tone]} ${shapeClass} animate-spin ${speedClass}`}
    />
  );

  const renderRing = () => (
    <div aria-hidden="true" className="relative flex items-center justify-center">
      <div
        className={`${SPINNER_SIZE[size]} ${SPINNER_TONE[tone]} ${shapeClass} animate-spin opacity-30 ${speedClass}`}
      />
      <div
        className={`absolute ${DOT_SIZE[size]} ${SOLID_TONE[tone]} ${shapeClass} animate-loading-pulse`}
      />
    </div>
  );

  const renderBar = () => (
    <div
      className={`${BAR_TRACK[size]} overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={labelText}
    >
      <div className={`h-full w-1/3 ${SOLID_TONE[tone]} rounded-full animate-loading-bar ${speedClass}`} />
    </div>
  );

  const renderDots = () => (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${DOT_SIZE[size]} ${SOLID_TONE[tone]} ${shapeClass} animate-loading-dot`}
          style={{ animationDelay: `${i * 160}ms` }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div
      aria-hidden="true"
      className={`${PULSE_SIZE[size]} ${SOLID_TONE[tone]} ${shapeClass} animate-loading-pulse ${speedClass}`}
    />
  );

  const renderVariant = () => {
    switch (variant) {
      case 'bar':
        return renderBar();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'ring':
        return renderRing();
      case 'spinner':
      default:
        return renderSpinner();
    }
  };

  const content = (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {renderVariant()}
      {showLabel ? (
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">{labelText}</p>
      ) : (
        <span className="sr-only">{labelText}</span>
      )}
    </div>
  );

  const shell = (children: React.ReactNode, shellClassName: string) => (
    <div className={shellClassName} role="status" aria-busy="true" aria-label={labelText} {...rest}>
      {children}
    </div>
  );

  if (fullScreen) return shell(content, FULLSCREEN_BASE);
  if (overlay) return shell(content, OVERLAY_BASE);

  return (
    <div role="status" aria-busy="true" aria-label={labelText} {...rest}>
      {content}
    </div>
  );
};
