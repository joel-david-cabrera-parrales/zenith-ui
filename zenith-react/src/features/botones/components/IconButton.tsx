import type { ButtonHTMLAttributes } from 'react';

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconButtonTone = 'outline' | 'primary' | 'dark' | 'ghost';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  size?: IconButtonSize;
  shape?: 'square' | 'pill';
  tone?: IconButtonTone;
}

const BOX_CLASSES: Record<IconButtonSize, string> = {
  xs: 'w-7 h-7',
  sm: 'w-8 h-8',
  md: 'w-9 h-9',
  lg: 'w-11 h-11',
};

const SQUARE_RADIUS: Record<IconButtonSize, string> = {
  xs: 'rounded-md',
  sm: 'rounded-lg',
  md: 'rounded-lg',
  lg: 'rounded-xl',
};

const ICON_CLASSES: Record<IconButtonSize, string> = {
  xs: 'text-[16px]',
  sm: 'text-[18px]',
  md: 'text-[20px]',
  lg: 'text-[22px]',
};

const TONE_CLASSES: Record<IconButtonTone, string> = {
  outline:
    'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm',
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
  dark: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm',
  ghost: 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900',
};

export function IconButton({
  icon,
  label,
  size = 'md',
  shape = 'square',
  tone = 'outline',
  type = 'button',
  className = '',
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={`inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 disabled:cursor-not-allowed ${BOX_CLASSES[size]} ${shape === 'pill' ? 'rounded-full' : SQUARE_RADIUS[size]} ${TONE_CLASSES[tone]} ${className}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className={`material-symbols-outlined ${ICON_CLASSES[size]}`}
      >
        {icon}
      </span>
    </button>
  );
}
