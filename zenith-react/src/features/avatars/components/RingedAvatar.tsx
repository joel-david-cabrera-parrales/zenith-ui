import type { HTMLAttributes } from 'react';
import { Avatar } from './Avatar';

export type AvatarRing = 'offset' | 'focus' | 'success' | 'critical' | 'gradient' | 'double';

export interface RingedAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  ring?: AvatarRing;
  initials?: string;
  alt?: string;
}

const RING_CLASSES: Record<Exclude<AvatarRing, 'gradient' | 'double'>, string> = {
  offset: 'ring-2 ring-blue-600 ring-offset-2 ring-offset-white',
  focus: 'ring-4 ring-blue-600/40 ring-offset-1 ring-offset-white',
  success: 'ring-2 ring-emerald-600 ring-offset-2 ring-offset-white',
  critical: 'ring-2 ring-red-600 ring-offset-2 ring-offset-white',
};

export const RingedAvatar = ({
  ring = 'offset',
  initials = 'JD',
  alt = 'Avatar con anillo de estado',
  className = '',
  ...rest
}: RingedAvatarProps) => {
  if (ring === 'gradient') {
    return (
      <span
        className={`inline-flex shrink-0 cursor-pointer rounded-full bg-gradient-to-tr from-blue-600 via-blue-400 to-emerald-300 p-[2.5px] ${className}`}
        {...rest}
      >
        <Avatar size="lg" initials={initials} alt={alt} className="ring-2 ring-white" />
      </span>
    );
  }

  if (ring === 'double') {
    return (
      <span
        className={`inline-flex shrink-0 cursor-pointer rounded-full border border-blue-600/50 p-0.5 ${className}`}
        {...rest}
      >
        <span className="inline-flex rounded-full border border-blue-600 p-0.5">
          <Avatar size="lg" initials={initials} alt={alt} />
        </span>
      </span>
    );
  }

  return (
    <Avatar size="xl" initials={initials} alt={alt} className={`${RING_CLASSES[ring]} ${className}`} {...rest} />
  );
};
