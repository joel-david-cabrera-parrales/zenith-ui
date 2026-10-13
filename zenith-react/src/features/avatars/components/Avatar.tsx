import type { HTMLAttributes } from 'react';

export type AvatarSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type AvatarShape = 'circle' | 'soft' | 'smooth' | 'squircle' | 'sharp';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSize;
  shape?: AvatarShape;
  src?: string;
  alt?: string;
  initials?: string;
}

const SIZE_CLASSES: Record<AvatarSize, string> = {
  '2xs': 'h-4 w-4 text-[8px]',
  xs: 'h-5 w-5 text-[9px]',
  sm: 'h-7 w-7 text-[10px]',
  md: 'h-9 w-9 text-xs',
  lg: 'h-12 w-12 text-sm',
  xl: 'h-16 w-16 text-base',
  '2xl': 'h-20 w-20 text-lg',
  '3xl': 'h-24 w-24 text-xl',
};

const SHAPE_CLASSES: Record<AvatarShape, string> = {
  circle: 'rounded-full',
  soft: 'rounded-lg',
  smooth: 'rounded-xl',
  squircle: 'rounded-2xl',
  sharp: 'rounded-none',
};

export const Avatar = ({
  size = 'md',
  shape = 'circle',
  src,
  alt = 'Avatar de usuario',
  initials = 'JD',
  className = '',
  ...rest
}: AvatarProps) => {
  const radius = SHAPE_CLASSES[shape];

  if (src !== undefined) {
    return (
      <span
        className={`inline-flex shrink-0 cursor-pointer items-center justify-center ${radius} ${SIZE_CLASSES[size]} ${className}`}
        {...rest}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ring-1 ring-slate-200 ${radius}`}
        />
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label={alt}
      className={`inline-flex shrink-0 cursor-pointer items-center justify-center bg-blue-100 font-bold text-blue-800 ring-1 ring-blue-600/20 ${radius} ${SIZE_CLASSES[size]} ${className}`}
      {...rest}
    >
      {initials}
    </span>
  );
};
