import type { HTMLAttributes } from 'react';

export type AvatarMask = 'hex' | 'oct' | 'shield' | 'star' | 'diamond' | 'notch';

export interface MaskedAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  mask?: AvatarMask;
  initials?: string;
  alt?: string;
}

const MASK_CLASSES: Record<AvatarMask, string> = {
  hex: 'mask-hex',
  oct: 'mask-oct',
  shield: 'mask-shield',
  star: 'mask-star',
  diamond: 'mask-diamond',
  notch: 'rounded-full',
};

const MASK_FRAME: Record<AvatarMask, string> = {
  hex: 'bg-gradient-to-tr from-blue-600 to-blue-400',
  oct: 'bg-gradient-to-tr from-slate-800 to-slate-500',
  shield: 'bg-gradient-to-tr from-emerald-600 to-emerald-300',
  star: 'bg-gradient-to-tr from-blue-600 to-slate-300',
  diamond: 'bg-gradient-to-tr from-slate-500 to-slate-300',
  notch: 'bg-transparent',
};

export const MaskedAvatar = ({
  mask = 'hex',
  initials = 'JD',
  alt = 'Avatar con máscara vectorial',
  className = '',
  ...rest
}: MaskedAvatarProps) => {
  if (mask === 'notch') {
    return (
      <span className={`relative inline-flex h-16 w-16 shrink-0 cursor-pointer ${className}`} {...rest}>
        <span
          role="img"
          aria-label={alt}
          className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200"
        >
          {initials}
        </span>
        <span
          role="status"
          aria-label="En línea"
          className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 ring-2 ring-white"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex h-16 w-16 shrink-0 cursor-pointer p-0.5 shadow-sm ${MASK_CLASSES[mask]} ${MASK_FRAME[mask]} ${className}`}
      {...rest}
    >
      <span
        role="img"
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center bg-blue-100 text-base font-bold text-blue-800 ${MASK_CLASSES[mask]}`}
      >
        {initials}
      </span>
    </span>
  );
};
