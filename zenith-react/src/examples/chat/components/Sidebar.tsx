import type { Conversation, User } from '../types';
import { UserAvatar, StatusPill, Badge } from './ui';

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export function ConversationItem({
  conversation,
  isActive,
  onSelect,
}: ConversationItemProps) {
  const otherParticipants = conversation.participants.filter(
    (p) => p.id !== 'user-me',
  );
  const primaryUser = otherParticipants[0];

  return (
    <button
      type="button"
      onClick={() => onSelect(conversation.id)}
      className={cx(
        'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200',
        isActive
          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800/40'
          : 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/40',
      )}
    >
      <div className="relative">
        <UserAvatar user={primaryUser} size="md" ring={true} />
        {conversation.type === 'group' && (
          <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white dark:ring-slate-950 bg-slate-700">
            <span className="text-[10px] font-bold">{otherParticipants.length}</span>
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <p
            className={cx(
              'text-sm font-medium leading-tight',
              isActive ? '' : 'text-slate-700 dark:text-slate-300',
            )}
            title={conversation.name}
          >
            {conversation.name}
          </p>
          {conversation.lastMessage && (
            <span className={cx(
              'ml-2 text-[10px] font-medium',
              isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500',
            )}>
              {formatRelative(conversation.lastMessage.createdAt)}
            </span>
          )}
        </div>
        <p className="line-clamp-1 mt-0.5 text-xs text-slate-500 dark:text-slate-400">
          {conversation.lastMessage?.text ?? 'Start a new conversation'}
        </p>
      </div>

      {conversation.unreadCount > 0 && (
        <Badge count={conversation.unreadCount} />
      )}
    </button>
  );
}

function formatRelative(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return 'now';
  if (diffMins < 60) return `${diffMins}m`;
  const diffHours = Math.floor(diffMs / 3600000);
  if (diffHours < 24) return `${diffHours}h`;
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

interface SidebarProps {
  conversations: Conversation[];
  activeConversationId: string | null;
  onSelect: (id: string) => void;
  currentUser: User;
}

export function Sidebar({
  conversations,
  activeConversationId,
  onSelect,
  currentUser,
}: SidebarProps) {
  return (
    <aside className="flex flex-col h-full border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-3 bg-slate-50 dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <UserAvatar user={currentUser} size="sm" ring={true} />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {currentUser.name}
            </p>
            <StatusPill status={currentUser.status} />
          </div>
        </div>
        <button
          type="button"
          aria-label="New conversation"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined text-base">add_circle</span>
        </button>
      </div>

      <div className="px-3 py-2">
        <div className="relative">
          <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
            search
          </span>
          <input
            type="text"
            placeholder="Search conversations"
            className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-9 pr-3 py-2 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        {conversations.map((conv) => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isActive={conv.id === activeConversationId}
            onSelect={onSelect}
          />
        ))}
        {conversations.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <span className="material-symbols-outlined text-3xl text-slate-400 mb-2">
              inbox
            </span>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No conversations yet
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
