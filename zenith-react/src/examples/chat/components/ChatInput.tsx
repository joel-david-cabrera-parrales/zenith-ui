import type { User } from '../types';

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (text: string) => void;
  onTyping: (isTyping: boolean) => void;
  disabled?: boolean;
  currentUser: User;
}

export function ChatInput({
  value,
  onChange,
  onSend,
  onTyping,
  disabled = false,
  currentUser,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend(value.trim());
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTyping(e.target.value.trim().length > 0);
  };

  return (
    <div className="border-t border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-950 px-4 py-3 shrink-0">
      <div className="flex items-end gap-2">
        <button
          type="button"
          aria-label="Attach file"
          disabled={disabled}
          className={cx(
            'flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:pointer-events-none',
            disabled && '',
          )}
        >
          <span className="material-symbols-outlined text-base">attach_file</span>
        </button>

        <div className="flex-1 relative">
          <textarea
            value={value}
            onChange={handleTyping}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            disabled={disabled}
            rows={1}
            maxRows={4}
            className={cx(
              'w-full resize-none rounded-xl border border-slate-200 dark:border-slate-700/60 bg-transparent px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all',
              disabled && 'bg-slate-50/50 dark:bg-slate-800/30 cursor-not-allowed',
            )}
          />
        </div>

        <button
          type="button"
          onClick={() => onSend(value.trim())}
          disabled={disabled || !value.trim()}
          className={cx(
            'flex h-9 w-9 items-center justify-center rounded-xl',
            disabled || !value.trim()
              ? 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/30 transition-all active:scale-95',
          )}
          aria-label="Send message"
        >
          <span className="material-symbols-outlined text-base">send</span>
        </button>
      </div>
    </div>
  );
}
