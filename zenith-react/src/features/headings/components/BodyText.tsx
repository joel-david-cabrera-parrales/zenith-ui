import type { HTMLAttributes } from 'react';

export type BodyTextSize = 'lead' | 'base' | 'sm' | 'caption';

export interface BodyTextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: BodyTextSize;
}

const SIZE_CLASSES: Record<BodyTextSize, string> = {
  lead: 'text-lg md:text-xl text-slate-600 leading-relaxed',
  base: 'text-base text-slate-600 leading-relaxed',
  sm: 'text-sm text-slate-600 leading-normal',
  caption: 'text-xs text-slate-400 leading-normal',
};

export function BodyText({
  size = 'base',
  className = '',
  children,
  ...rest
}: BodyTextProps) {
  return (
    <p className={`${SIZE_CLASSES[size]} ${className}`} {...rest}>
      {children}
    </p>
  );
}
