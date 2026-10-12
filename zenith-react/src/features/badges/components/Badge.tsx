import type { HTMLAttributes } from 'react';

export type BadgeTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'info' | 'system';

export type BadgeVariant = 'solid' | 'soft' | 'outline';

export type BadgeSize = 'micro' | 'small' | 'medium' | 'large';

export type BadgeShape = 'pill' | 'square';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  size?: BadgeSize;
  shape?: BadgeShape;
}

const SOLID_CLASSES: Record<BadgeTone, string> = {
  primary: 'bg-blue-600 text-white',
  success: 'bg-emerald-600 text-white',
  warning: 'bg-slate-900 text-white',
  danger: 'bg-red-600 text-white',
  neutral: 'bg-slate-500 text-white',
  info: 'bg-blue-700 text-white',
  system: 'bg-indigo-600 text-white',
};

const SOFT_CLASSES: Record<BadgeTone, string> = {
  primary: 'bg-blue-100 text-blue-800',
  success: 'bg-emerald-100 text-emerald-800',
  warning: 'bg-amber-100 text-amber-900',
  danger: 'bg-red-100 text-red-700',
  neutral: 'border border-slate-300 bg-slate-100 text-slate-600',
  info: 'bg-blue-100 text-blue-800',
  system: 'bg-indigo-100 text-indigo-800',
};

const OUTLINE_CLASSES: Record<BadgeTone, string> = {
  primary: 'border border-blue-600/50 bg-transparent text-blue-700',
  success: 'border border-emerald-600/60 bg-transparent text-emerald-700',
  warning: 'border border-slate-500 bg-transparent text-slate-900',
  danger: 'border border-red-500/50 bg-transparent text-red-600',
  neutral: 'border border-slate-300 bg-transparent text-slate-600',
  info: 'border border-blue-500/40 bg-transparent text-blue-700',
  system: 'border border-indigo-500/40 bg-transparent text-indigo-600',
};

const VARIANT_CLASSES: Record<BadgeVariant, Record<BadgeTone, string>> = {
  solid: SOLID_CLASSES,
  soft: SOFT_CLASSES,
  outline: OUTLINE_CLASSES,
};

const SIZE_CLASSES: Record<BadgeSize, string> = {
  micro: 'px-1.5 py-0.5 font-mono text-[10px] font-semibold leading-3',
  small: 'px-2 py-0.5 text-xs font-medium',
  medium: 'px-2.5 py-0.5 text-xs font-semibold shadow-sm',
  large: 'px-3.5 py-1.5 text-sm font-bold shadow-sm',
};

const radiusFor = (size: BadgeSize, shape: BadgeShape): string => {
  if (shape === 'pill') {
    return size === 'micro' ? 'rounded' : 'rounded-full';
  }
  if (size === 'micro') return 'rounded';
  if (size === 'small' || size === 'medium') return 'rounded-md';
  return 'rounded-lg';
};

export const Badge = ({
  tone = 'primary',
  variant = 'solid',
  size = 'medium',
  shape = 'pill',
  className = '',
  ...rest
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center ${radiusFor(size, shape)} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant][tone]} ${className}`}
      {...rest}
    />
  );
};
