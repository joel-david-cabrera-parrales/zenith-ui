import type { Message } from '../types';
import { UserAvatar, Badge } from './ui';
import { formatTime, formatDate, isSameDay } from '../utils/formatTime';

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

const STATUS_ICONS: Record<Message['status'], string> = {
  sending: 'hourglass_bottom',
  sent: 'check',
  delivered: 'done_all',
  read: 'done_all',
};

const STATUS_LABELS: Record<Message['status'], string> = {
  sending: 'Sending',
  sent: 'Sent',
  delivered: 'Delivered',
  read: 'Read',
};

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
  isGroup?: boolean;
  showAvatar?: boolean;
}

export function MessageBubble({
  message,
  isCurrentUser,
  isGroup = false,
  showAvatar = true,
}: MessageBubbleProps) {
  const isFirstInGroup = true; // simplified - could check previous message sender
  const showSenderLabel = isGroup && !isCurrentUser && showAvatar;

  const ownClasses = cx(
    'flex w-full max-w-[80%] md:max-w-[65%] justify-end',
    isCurrentUser ? '' : 'text-left',
  );

  const bubbleClasses = cx(
    'max-w-full rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm border',
    isCurrentUser
      ? 'bg-blue-600 text-white border-transparent'
      : 'bg-slate-100 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700/60',
  );

  const statusClasses = cx(
    'flex items-center gap-1 mt-1',
    isCurrentUser
      ? 'ml-auto text-[10px]'
      : 'text-[10px]',
  );

  const statusColor: Record<string, string> = {
    sending: 'text-slate-400 dark:text-slate-500',
    sent: 'text-blue-400 dark:text-blue-500',
    delivered: 'text-blue-400 dark:text-blue-500',
    read: 'text-blue-600 dark:text-blue-400',
  };

  return (
    <div className={ownClasses}>
      {(!isCurrentUser && showAvatar && showSenderLabel) && (
        <div className="order-first mb-1">
          <UserAvatar
            user={{
              id: message.senderId,
              name: message.senderName,
              initials: message.senderInitials,
              status: 'online',
            }}
            size="sm"
          />
        </div>
      )}

      <div className={cx('relative', bubbleClasses)}>
        {message.repliedTo && (
          <div className="absolute -top-8 left-0 right-0 flex items-start gap-2 px-4 pointer-events-none">
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-0.5" />
            <div className="flex flex-col gap-0.5 pointer-events-auto">
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Reply
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-300 truncate">
                {message.repliedTo.text}
              </span>
            </div>
          </div>
        )}

        <p className="whitespace-pre-wrap break-words">{message.text}</p>

        {message.attachments?.length && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.attachments.map((att) => (
              <div
                key={att.id}
                className={cx(
                  'flex items-center gap-2 rounded-lg border px-2.5 py-1.5',
                  att.type === 'image'
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
                )}
              >
                <span
                  className={cx(
                    'material-symbols-outlined text-xs',
                    att.type === 'image'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-500 dark:text-slate-400',
                  )}
                >
                  {att.type === 'image' ? 'image' : 'insert_drive_file'}
                </span>
                <span className="text-[10px] font-medium truncate max-w-[120px]">
                  {att.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={cx('flex items-center gap-1', statusClasses)}>
        {isCurrentUser && (
          <>
            <span
              className={cx(
                'material-symbols-outlined text-[10px]',
                statusColor[message.status],
              )}
            >
              {STATUS_ICONS[message.status]}
            </span>
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
              {STATUS_LABELS[message.status]}
            </span>
          </>
        )}
        <span className="text-[10px] font-medium">
          {isCurrentUser
            ? 'text-slate-400 dark:text-slate-500'
            : 'text-slate-500 dark:text-slate-400'}
        </span>
        {formatTime(message.createdAt)}
      </div>
    </div>
  );
}

interface DaySeparatorProps {
  date: Date;
}

export function DaySeparator({ date }: DaySeparatorProps) {
  return (
    <div className="flex w-full items-center gap-2 my-4">
      <div className="flex-1 border-t border-slate-200 dark:border-slate-700/60" />
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-950 px-2 py-0.5 shadow-sm">
        {formatDate(date)}
      </span>
      <div className="flex-1 border-t border-slate-200 dark:border-slate-700/60" />
    </div>
  );
}

interface MessageListProps {
  messages: Message[];
  currentUserId: string;
  endRef: React.RefObject<HTMLDivElement>;
}

export function MessageList({
  messages,
  currentUserId,
  endRef,
}: MessageListProps) {
  if (messages.length === 0) return null;

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6">
      {messages.map((msg, idx) => {
        const prevMsg = messages[idx - 1];
        const isSameDayAsPrev =
          prevMsg && isSameDay(msg.createdAt, prevMsg.createdAt);

        return (
          <div key={msg.id} className="mb-6 relative">
            {!isSameDayAsPrev && (
              <DaySeparator date={msg.createdAt} />
            )}
            <MessageBubble
              message={msg}
              isCurrentUser={msg.senderId === currentUserId}
              isGroup={false}
            />
          </div>
        );
      })}
      <div ref={endRef} />
    </div>
  );
}
