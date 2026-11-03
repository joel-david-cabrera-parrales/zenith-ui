import type { Message } from '../types';
import { formatTime, formatDate, isSameDay } from '../utils/formatTime';

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

const STATUS_ICONS: Record<string, string> = {
  sending: 'hourglass_bottom',
  sent: 'check',
  delivered: 'done_all',
  read: 'done_all',
};

const STATUS_LABELS: Record<string, string> = {
  sending: 'Sending',
  sent: 'Sent',
  delivered: 'Delivered',
  read: 'Read',
};

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
}

export function MessageBubble({ message, isCurrentUser }: MessageBubbleProps) {
  const statusColor: Record<string, string> = {
    sending: 'text-slate-400',
    sent: 'text-blue-400',
    delivered: 'text-blue-400',
    read: 'text-blue-600',
  };

  const bubbleClasses = cx(
    'max-w-[80%] md:max-w-[65%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm border whitespace-pre-wrap break-words',
    isCurrentUser
      ? 'bg-blue-600 text-white border-transparent self-end'
      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white self-start',
  );

  const statusClasses = cx(
    'flex items-center gap-1 mt-1.5',
    isCurrentUser ? 'ml-auto' : 'ml-0',
  );

  return (
    <div className="flex w-full max-w-full">
      <div className={cx('relative', bubbleClasses)}>
        <p className="whitespace-pre-wrap break-words">{message.text}</p>
      </div>

      <div className={cx('flex items-center gap-1', statusClasses)}>
        {isCurrentUser ? (
          <>
            <span
              className={cx(
                'material-symbols-outlined text-[10px]',
                statusColor[message.status],
              )}
            >
              {STATUS_ICONS[message.status]}
            </span>
            <span className="text-[10px] font-medium text-slate-400">
              {STATUS_LABELS[message.status]}
            </span>
          </>
        ) : null}
        <span className="text-[10px] font-medium text-slate-400">
          {formatTime(message.createdAt)}
        </span>
      </div>
    </div>
  );
}

interface DaySeparatorProps {
  date: Date;
}

export function DaySeparator({ date }: DaySeparatorProps) {
  return (
    <div className="flex w-full items-center gap-2 my-6 relative">
      <div className="flex-1 border-t border-slate-200 dark:border-slate-800" />
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-950 px-2 py-0.5 shadow-sm z-10">
        {formatDate(date)}
      </span>
      <div className="flex-1 border-t border-slate-200 dark:border-slate-800" />
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
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50 dark:bg-slate-950">
      {messages.map((msg, idx) => {
        const prevMsg = messages[idx - 1];
        const isSameDayAsPrev =
          prevMsg && isSameDay(msg.createdAt, prevMsg.createdAt);

        return (
          <div key={msg.id} className="mb-6 relative w-full">
            {!isSameDayAsPrev && (
              <DaySeparator date={msg.createdAt} />
            )}
            <MessageBubble
              message={msg}
              isCurrentUser={msg.senderId === currentUserId}
            />
          </div>
        );
      })}
      <div ref={endRef} />
    </div>
  );
}
