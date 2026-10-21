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
  primary: 'bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 active:bg-blue-800 dark:active:bg-blue-600 shadow-sm',
  secondary:
    'bg-slate-900 text-white dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 active:bg-slate-950 dark:active:bg-slate-900 shadow-sm',
  outline:
    'border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-400 active:bg-slate-100 dark:active:bg-slate-700 shadow-sm',
  subtle: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 active:bg-blue-200 dark:active:bg-blue-900/40',
  ghost:
    'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-800',
  link: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline',
  success:
    'bg-emerald-600 text-white dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 active:bg-emerald-800 dark:active:bg-emerald-600 shadow-sm',
  successSubtle:
    'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700',
  warning:
    'bg-amber-500 text-white dark:bg-amber-400 hover:bg-amber-600 dark:hover:bg-amber-300 active:bg-amber-700 dark:active:bg-amber-500 shadow-sm',
  warningSubtle:
    'bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/30 border border-amber-200 dark:border-amber-700',
  danger:
    'bg-rose-600 text-white dark:bg-rose-500 hover:bg-rose-700 dark:hover:bg-rose-400 active:bg-rose-800 dark:active:bg-rose-600 shadow-sm',
  dangerOutline:
    'border border-rose-300 dark:border-rose-700 text-rose-600 dark:text-rose-400 bg-white dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-900/20 shadow-sm',
  info: 'bg-indigo-600 text-white dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 shadow-sm',
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
      ? 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-300 dark:text-slate-500 shadow-none'
      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 shadow-none'
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
        <span className="ml-1 rounded-full bg-blue-100 dark:bg-blue-900/20 px-1.5 py-0.5 text-xs font-bold text-blue-700 dark:text-blue-400">
          {badge}
        </span>
      )}
      {shortcut !== undefined && (
        <kbd className="rounded border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500 dark:text-slate-400">
          {shortcut}
        </kbd>
      )}
    </button>
  );
}
