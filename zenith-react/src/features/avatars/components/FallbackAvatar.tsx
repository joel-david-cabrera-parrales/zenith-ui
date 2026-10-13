import type { HTMLAttributes } from 'react';

export type FallbackKind = 'initials' | 'solid' | 'silhouette' | 'bot' | 'org' | 'skeleton';

export interface FallbackAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  kind?: FallbackKind;
  initials?: string;
  icon?: string;
  alt?: string;
}

export const FallbackAvatar = ({
  kind = 'initials',
  initials = 'JD',
  icon = 'person',
  alt = 'Avatar de reserva',
  className = '',
  ...rest
}: FallbackAvatarProps) => {
  if (kind === 'solid') {
    return (
      <span
        role="img"
        aria-label={alt}
        className={`inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white ring-1 ring-blue-600 ${className}`}
        {...rest}
      >
        {initials}
      </span>
    );
  }

  if (kind === 'silhouette') {
    return (
      <span
        role="img"
        aria-label={alt}
        className={`inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-500 ring-1 ring-slate-200 ${className}`}
        {...rest}
      >
        <span aria-hidden="true" className="material-symbols-outlined text-[28px]">
          {icon}
        </span>
      </span>
    );
  }

  if (kind === 'bot' || kind === 'org') {
    return (
      <span
        role="img"
        aria-label={alt}
        className={`inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-slate-100 ring-1 ring-blue-600/20 ${kind === 'bot' ? 'text-blue-600' : 'text-slate-500'} ${className}`}
        {...rest}
      >
        <span aria-hidden="true" className="material-symbols-outlined text-[26px]">
          {icon}
        </span>
      </span>
    );
  }

  if (kind === 'skeleton') {
    return (
      <span
        aria-label="Cargando avatar"
        role="status"
        className={`inline-flex h-14 w-14 shrink-0 cursor-pointer animate-pulse items-center justify-center overflow-hidden rounded-full bg-slate-200 ${className}`}
        {...rest}
      >
        <span aria-hidden="true" className="h-6 w-6 rounded-full bg-slate-100" />
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label={alt}
      className={`inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-blue-600/20 ${className}`}
      {...rest}
    >
      {initials}
    </span>
  );
};
