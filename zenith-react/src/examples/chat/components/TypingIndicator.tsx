interface TypingIndicatorProps {
  users: string[];
  currentUserName: string;
}

export function TypingIndicator({
  users,
  currentUserName,
}: TypingIndicatorProps) {
  const displayUsers = users.filter((id) => id !== currentUserName);

  if (displayUsers.length === 0) return null;

  const text =
    displayUsers.length === 1
      ? `${displayUsers[0]} is typing...`
      : `${displayUsers.length} people are typing...`;

  return (
    <div className="flex max-w-fit md:max-w-[65%] items-center gap-2 px-4 py-1.5">
      <p className="text-xs italic text-slate-500 dark:text-slate-400">
        {text}
      </p>
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 animate-[loading-dot_1.2s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
