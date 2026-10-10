import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'subtle'
  | 'ghost'
  | 'link'
  | 'success'
  | 'successSubtle'
  | 'warning'
  | 'warningSubtle'
  | 'danger'
  | 'dangerOutline'
  | 'info';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  leadingIcon?: string;
  trailingIcon?: string;
  badge?: ReactNode;
  shortcut?: string;
  loading?: boolean;
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: 'gap-1 px-2.5 py-1 text-xs font-medium rounded-md',
  sm: 'gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg',
  md: 'gap-2 px-4 py-2 text-sm font-semibold rounded-lg',
  lg: 'gap-2 px-5 py-2.5 text-base font-semibold rounded-xl',
  xl: 'gap-2.5 px-6 py-3 text-lg font-semibold rounded-xl',
};

const ICON_SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: 'text-[16px]',
  sm: 'text-[18px]',
  md: 'text-[18px]',
  lg: 'text-[20px]',
  xl: 'text-[20px]',
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 shadow-sm',
  outline:
    'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 shadow-sm',
  subtle: 'bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200',
  ghost:
    'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 active:bg-slate-200',
  link: 'text-blue-600 hover:text-blue-700 hover:underline',
  success:
    'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-sm',
  successSubtle:
    'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200',
  warning:
    'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 shadow-sm',
  warningSubtle:
    'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200',
  danger:
    'bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 shadow-sm',
  dangerOutline:
    'border border-rose-300 text-rose-600 bg-white hover:bg-rose-50 shadow-sm',
  info: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
};

const Spinner = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      aria-hidden="true"
      className={`-ml-0.5 h-4 w-4 animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export const Button = ({
  size = 'md',
  variant = 'primary',
  type = 'button',
  leadingIcon,
  trailingIcon,
  badge,
  shortcut,
  loading = false,
  disabled,
  className = '',
  children,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled === true || loading;
  const ghostLike = variant === 'outline' || variant === 'ghost' || variant === 'link';
  const look = isDisabled
    ? ghostLike
      ? 'border border-slate-200 bg-white text-slate-300 shadow-none'
      : 'bg-slate-200 text-slate-400 shadow-none'
    : VARIANT_CLASSES[variant];
  const iconSize = ICON_SIZE_CLASSES[size];

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 disabled:cursor-not-allowed ${loading ? 'cursor-wait opacity-80' : ''} ${SIZE_CLASSES[size]} ${look} ${className}`}
      {...rest}
    >
      {loading && (
        <Spinner
          className={
            variant === 'outline' || variant === 'successSubtle' || variant === 'warningSubtle'
              ? 'text-blue-600'
              : 'text-white'
          }
        />
      )}
      {!loading && leadingIcon !== undefined && (
        <span aria-hidden="true" className={`material-symbols-outlined ${iconSize}`}>
          {leadingIcon}
        </span>
      )}
      <span>{children}</span>
      {!loading && trailingIcon !== undefined && (
        <span aria-hidden="true" className={`material-symbols-outlined ${iconSize}`}>
          {trailingIcon}
        </span>
      )}
      {badge !== undefined && (
        <span className="ml-1 rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-bold text-blue-700">
          {badge}
        </span>
      )}
      {shortcut !== undefined && (
        <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">
          {shortcut}
        </kbd>
      )}
    </button>
  );
}
