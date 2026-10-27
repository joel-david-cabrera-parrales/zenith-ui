import type { Conversation } from '../types';
import { UserAvatar, StatusPill, Separator } from './ui';

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

interface ChatHeaderProps {
  conversation: Conversation | null;
  onBack?: () => void;
  onCall?: () => void;
  onVideo?: () => void;
  onMore?: () => void;
}

export function ChatHeader({
  conversation,
  onBack,
  onCall,
  onVideo,
  onMore,
}: ChatHeaderProps) {
  if (!conversation) {
    return (
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-950 px-4 py-3">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              type="button"
              aria-label="Back"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
          )}
          <div className="flex items-center gap-2">
            <UserAvatar
              user={{ id: '', name: '', initials: '?', status: 'offline' }}
              size="md"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Select a conversation
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Start messaging from the sidebar
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="More options"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">more_vert</span>
          </button>
        </div>
      </header>
    </header>
  );
}

export function ActiveChatHeader({
  conversation,
  onBack,
  onCall,
  onVideo,
  onMore,
}: ChatHeaderProps) {
  if (!conversation) return null;

  const otherParticipants = conversation.participants.filter(
    (p) => p.id !== 'user-me',
  );
  const primaryUser = otherParticipants[0];
  const isGroup = conversation.type === 'group';
  const onlineCount = conversation.participants.filter(
    (p) => p.status === 'online',
  ).length;

  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-950 px-4 py-3 shrink-0">
      <div className="flex items-center gap-3">
        {onBack && (
          <button
            type="button"
            aria-label="Back"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
        )}
        <div className="flex items-center gap-2">
          <UserAvatar user={primaryUser} size="md" ring={true} />
          <div className="leading-tight min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate" title={conversation.name}>
              {conversation.name}
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <StatusPill status={primaryUser.status} className="text-[10px] px-2 py-0.5" />
              {isGroup && (
                <span className="text-[10px] text-slate-400 dark:text-slate-500">
                  • {onlineCount} of {conversation.participants.length} online
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Search conversation"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined text-lg">search</span>
        </button>
        <Separator />
        {onCall && (
          <button
            type="button"
            aria-label="Voice call"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">call</span>
          </button>
        )}
        {onVideo && (
          <button
            type="button"
            aria-label="Video call"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">videocam</span>
          </button>
        )}
        <Separator />
        {onMore && (
          <button
            type="button"
            aria-label="More options"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">more_vert</span>
          </button>
        )}
      </div>
    </header>
  );
}
