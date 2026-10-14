import type { ProgressHTMLAttributes } from 'react';

export type ProgressSize = 'small' | 'medium' | 'large';
export type ProgressTone = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type ProgressVariant = 'solid' | 'gradient' | 'animated';
export type ProgressShape = 'rounded' | 'square';

export interface ProgressProps extends ProgressHTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: ProgressSize;
  tone?: ProgressTone;
  variant?: ProgressVariant;
  shape?: ProgressShape;
  showLabel?: boolean;
  label?: string;
  striped?: boolean;
}

const SIZE_CLASSES: Record<ProgressSize, { track: string; bar: string }> = {
  small: { track: 'h-1', bar: 'h-1' },
  medium: { track: 'h-2', bar: 'h-2' },
  large: { track: 'h-3', bar: 'h-3' },
};

const TONE_CLASSES: Record<ProgressTone, { solid: string; gradient: string }> = {
  primary: {
    solid: 'bg-blue-600',
    gradient: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
  success: {
    solid: 'bg-emerald-600',
    gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-700',
  },
  warning: {
    solid: 'bg-amber-600',
    gradient: 'bg-gradient-to-r from-amber-500 to-amber-700',
  },
  danger: {
    solid: 'bg-red-600',
    gradient: 'bg-gradient-to-r from-red-500 to-red-700',
  },
  info: {
    solid: 'bg-sky-600',
    gradient: 'bg-gradient-to-r from-sky-500 to-sky-700',
  },
  neutral: {
    solid: 'bg-slate-600',
    gradient: 'bg-gradient-to-r from-slate-500 to-slate-700',
  },
};

const SHAPE_CLASSES: Record<ProgressShape, string> = {
  rounded: 'rounded-full',
  square: 'rounded-none',
};

const TRACK_BASE = 'w-full bg-slate-200 dark:bg-slate-700 overflow-hidden';
const BAR_BASE = 'transition-all duration-300 ease-out';

export const Progress = ({
  value,
  max = 100,
  size = 'medium',
  tone = 'primary',
  variant = 'solid',
  shape = 'rounded',
  showLabel = false,
  label,
  striped = false,
  className = '',
  ...rest
}: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const sizeClasses = SIZE_CLASSES[size];
  const toneClasses = TONE_CLASSES[tone];
  const shapeClass = SHAPE_CLASSES[shape];

  const variantClass = variant === 'gradient' ? toneClasses.gradient : toneClasses.solid;
  const animatedClass = variant === 'animated' ? 'animate-[progress-bar_1s_ease-in-out_infinite]' : '';
  const stripedClass = striped ? 'bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem]' : '';

  const labelContent = label ?? (showLabel ? `${Math.round(percentage)}%` : '');

  return (
    <div className={className} {...rest}>
      {labelContent && (
        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
          <span>{labelContent}</span>
        </div>
      )}
      <div
        className={`${TRACK_BASE} ${sizeClasses.track} ${shapeClass}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={`${BAR_BASE} ${sizeClasses.bar} ${variantClass} ${shapeClass} ${animatedClass} ${stripedClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export type { ProgressProps as ProgressHTMLAttributes };