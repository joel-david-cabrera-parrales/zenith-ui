import type { User } from '../types';

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

const STATUS_COLORS: Record<string, string> = {
  online: 'bg-emerald-500',
  away: 'bg-amber-500',
  offline: 'bg-slate-400',
};

const USER_COLORS: Record<string, string> = {
  blue: 'ring-blue-500/30',
  emerald: 'ring-emerald-500/30',
  amber: 'ring-amber-500/30',
  violet: 'ring-violet-500/30',
  rose: 'ring-rose-500/30',
  cyan: 'ring-cyan-500/30',
};

interface UserAvatarProps {
  user: User;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  ring?: boolean;
  className?: string;
}

export function UserAvatar({
  user,
  size = 'md',
  ring = false,
  className = '',
}: UserAvatarProps) {
  const sizes: Record<string, string> = {
    sm: 'h-7 w-7 text-xs',
    md: 'h-9 w-9 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-xl',
  };

  const ringClass = ring
    ? `ring-2 ${USER_COLORS[user.color ?? 'blue']}`
    : '';

  return (
    <div className="relative inline-block">
      <div
        className={cx(
          'flex shrink-0 items-center justify-center rounded-full overflow-hidden border border-white/60 dark:border-white/10',
          ringClass,
          sizes[size],
          className,
          'dark:bg-slate-800 bg-white text-slate-700 font-semibold shadow-sm',
        )}
      >
        {user.initials}
      </div>
      {ring && (
        <span
          className={cx(
            'absolute -right-px -bottom-px flex h-3 w-3 items-center justify-center rounded-full ring-2 ring-white dark:ring-slate-950',
            STATUS_COLORS[user.status],
          )}
        >
          <span className="h-2 w-2 rounded-full" />
        </span>
      )}
    </div>
  );
}

interface StatusPillProps {
  status: User['status'];
  className?: string;
}

export function StatusPill({ status, className = '' }: StatusPillProps) {
  const labels: Record<string, string> = {
    online: 'Available',
    away: 'Away',
    offline: 'Offline',
  };
  const colors: Record<string, string> = {
    online: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    away: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
    offline: 'bg-slate-500/10 text-slate-600 dark:bg-slate-500/20 dark:text-slate-400',
  };
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider shadow-sm',
        colors[status],
        className,
      )}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_COLORS[status]}`} />
      {labels[status]}
    </span>
  );
}

interface BadgeProps {
  count: number;
  className?: string;
}

export function Badge({ count, className = '' }: BadgeProps) {
  return (
    <span
      className={cx(
        'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white dark:border-slate-900 bg-blue-600 text-[10px] font-bold text-white shadow-sm',
        className,
      )}
    >
      {count > 9 ? '9+' : count}
    </span>
  );
}

interface SeparatorProps {
  className?: string;
}

export function Separator({ className = '' }: SeparatorProps) {
  return (
    <div
      className={cx(
        'mx-2 h-4 w-px bg-slate-200 dark:bg-slate-700/60 self-center',
        className,
      )}
    />
  );
}
