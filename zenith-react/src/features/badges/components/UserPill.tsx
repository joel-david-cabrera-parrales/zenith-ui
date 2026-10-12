import type { HTMLAttributes } from 'react';

export type AvatarTone = 'primary' | 'success';

export interface UserPillProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  initials?: string;
  avatarTone?: AvatarTone;
  online?: boolean;
  icon?: string;
}

const AVATAR_CLASSES: Record<AvatarTone, string> = {
  primary: 'bg-blue-600 text-white',
  success: 'bg-emerald-600 text-white',
};

export const UserPill = ({
  name,
  initials = '',
  avatarTone = 'primary',
  online = false,
  icon,
  className = '',
  ...rest
}: UserPillProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full py-0.5 pl-1 pr-2.5 text-xs font-medium ${className}`}
      {...rest}
    >
      {icon !== undefined ? (
        <span aria-hidden="true" className="material-symbols-outlined text-[15px]">
          {icon}
        </span>
      ) : online ? (
        <span className="relative ml-0.5 flex h-2 w-2">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${AVATAR_CLASSES[avatarTone]}`}
        >
          {initials}
        </span>
      )}
      <span>{name}</span>
    </span>
  );
};
