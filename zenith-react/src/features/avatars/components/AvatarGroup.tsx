import type { HTMLAttributes } from 'react';
import { Avatar } from './Avatar';
import type { AvatarSize } from './Avatar';

export interface AvatarMember {
  initials: string;
  icon?: string;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  members?: AvatarMember[];
  max?: number;
  size?: AvatarSize;
  direction?: 'ltr' | 'rtl';
  expandOnHover?: boolean;
}

const TILE_SIZE: Record<AvatarSize, string> = {
  '2xs': 'h-4 w-4 text-[8px]',
  xs: 'h-5 w-5 text-[9px]',
  sm: 'h-7 w-7 text-[10px]',
  md: 'h-9 w-9 text-xs',
  lg: 'h-12 w-12 text-sm',
  xl: 'h-16 w-16 text-base',
  '2xl': 'h-20 w-20 text-lg',
  '3xl': 'h-24 w-24 text-xl',
};

export const AvatarGroup = ({
  members = [],
  max,
  size = 'md',
  direction = 'ltr',
  expandOnHover = false,
  className = '',
  ...rest
}: AvatarGroupProps) => {
  const visible = max === undefined ? members : members.slice(0, max);
  const overflow = max === undefined ? 0 : members.length - visible.length;
  const tight = size === '2xs' || size === 'xs' ? '-space-x-1.5' : '-space-x-2';

  return (
    <div
      className={`flex items-center ${tight} ${expandOnHover === true ? 'group/avatar-group py-1 transition-all duration-300 hover:space-x-1' : 'py-1'} ${className}`}
      role="group"
      aria-label={`Grupo de ${members.length} avatares`}
      {...rest}
    >
      {visible.map((member, index) => (
        <span
          key={`${member.initials}-${index}`}
          style={{ zIndex: direction === 'rtl' ? visible.length - index : index + 1 }}
          className={expandOnHover === true ? 'transition-all duration-200 group-hover/avatar-group:-translate-y-1' : ''}
        >
          {member.icon === undefined ? (
            <Avatar
              size={size}
              initials={member.initials}
              alt={`Avatar de ${member.initials}`}
              className="ring-2 ring-white"
            />
          ) : (
            <span
              role="img"
              aria-label={`Bot ${member.initials}`}
              className={`inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-blue-600 ring-2 ring-white ${TILE_SIZE[size]}`}
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                {member.icon}
              </span>
            </span>
          )}
        </span>
      ))}
      {overflow > 0 && (
        <span
          aria-label={`${overflow} más`}
          style={{ zIndex: visible.length + 1 }}
          className={`inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-slate-100 font-bold text-blue-700 ring-2 ring-white ${TILE_SIZE[size]}`}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
};
