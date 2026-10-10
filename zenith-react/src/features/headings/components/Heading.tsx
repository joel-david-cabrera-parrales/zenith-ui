import type { HTMLAttributes } from 'react';

export type HeadingVariant =
  | 'display-2xl'
  | 'display-xl'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'overline';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariant;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const VARIANT_CLASSES: Record<HeadingVariant, string> = {
  'display-2xl':
    'text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900',
  'display-xl':
    'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900',
  h1: 'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900',
  h2: 'text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900',
  h3: 'text-lg sm:text-xl md:text-2xl font-semibold text-slate-900',
  h4: 'text-base sm:text-lg md:text-xl font-semibold text-slate-900',
  h5: 'text-base font-semibold text-slate-900',
  overline:
    'text-sm font-bold uppercase tracking-wider text-slate-500',
};

const DEFAULT_TAG: Record<HeadingVariant, HeadingProps['as']> = {
  'display-2xl': 'p',
  'display-xl': 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  overline: 'p',
};

export const Heading = ({
  variant = 'h2',
  as,
  className = '',
  children,
  ...rest
}: HeadingProps) => {
  const Tag = (as ?? DEFAULT_TAG[variant] ?? 'h2') as 'h1';
  return (
    <Tag className={`${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
