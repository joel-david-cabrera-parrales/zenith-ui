const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

interface EmptyStateProps {
  onNewConversation?: () => void;
}

export function EmptyState({ onNewConversation }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 mb-4">
        <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400">
          chat
        </span>
      </div>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
        No conversation selected
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs">
        Pick a conversation from the sidebar to start messaging, or create a new one.
      </p>
      {onNewConversation && (
        <button
          type="button"
          onClick={onNewConversation}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">add_circle</span>
          New conversation
        </button>
      )}
    </div>
  );
}
