import type { HTMLAttributes } from 'react';
import { Avatar } from './Avatar';

export type PresenceStatus = 'online' | 'busy' | 'away' | 'call' | 'offline';

export interface PresenceAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  status?: PresenceStatus;
  initials?: string;
  alt?: string;
}

const STATUS_LABEL: Record<PresenceStatus, string> = {
  online: 'En línea',
  busy: 'No molestar',
  away: 'Ausente',
  call: 'En llamada',
  offline: 'Desconectado',
};

export const PresenceAvatar = ({
  status = 'online',
  initials = 'JD',
  alt = 'Avatar de usuario',
  className = '',
  ...rest
}: PresenceAvatarProps) => {
  return (
    <span className={`relative inline-flex shrink-0 cursor-pointer ${className}`} {...rest}>
      <Avatar
        size="xl"
        initials={initials}
        alt={alt}
        className={status === 'offline' ? 'opacity-70 grayscale' : ''}
      />
      {status === 'online' && (
        <span role="status" aria-label={STATUS_LABEL.online} className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
          <span aria-hidden="true" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span aria-hidden="true" className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
        </span>
      )}
      {status === 'busy' && (
        <span
          role="status"
          aria-label={STATUS_LABEL.busy}
          className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 ring-2 ring-white"
        >
          <span aria-hidden="true" className="h-0.5 w-2 rounded-full bg-white" />
        </span>
      )}
      {status === 'away' && (
        <span
          role="status"
          aria-label={STATUS_LABEL.away}
          className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-200 ring-2 ring-white"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[9px] text-amber-900">
            schedule
          </span>
        </span>
      )}
      {status === 'call' && (
        <span
          role="status"
          aria-label={STATUS_LABEL.call}
          className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[10px] text-white">
            videocam
          </span>
        </span>
      )}
      {status === 'offline' && (
        <span
          role="status"
          aria-label={STATUS_LABEL.offline}
          className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-2 ring-slate-300"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        </span>
      )}
    </span>
  );
};
