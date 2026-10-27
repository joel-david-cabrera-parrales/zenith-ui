import { Sidebar } from './Sidebar';
import { EmptyState } from './EmptyState';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { TypingIndicator } from './TypingIndicator';
import { ChatInput } from './ChatInput';
import { UserAvatar, StatusPill, Separator } from './ui';

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

interface ChatAppProps {
  currentUser: any;
  conversations: any[];
  activeConversation: any;
  activeConversationId: string | null;
  messages: any[];
  typingUsers: string[];
  inputValue: string;
  isSending: boolean;
  setInputValue: (v: string) => void;
  selectConversation: (id: string) => void;
  sendMessage: (text: string) => void;
  setTyping: (userId: string, isTyping: boolean) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export function ChatApp({
  currentUser,
  conversations,
  activeConversation,
  activeConversationId,
  messages,
  typingUsers,
  inputValue,
  isSending,
  setInputValue,
  selectConversation,
  sendMessage,
  setTyping,
  messagesEndRef,
}: ChatAppProps) {
  const hasActive = activeConversationId !== null && !!activeConversation;

  return (
    <div className="flex flex-col h-full w-full bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-col h-full md:flex-row">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-80 flex-col border-r border-slate-200 dark:border-slate-700/60">
          <Sidebar
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelect={selectConversation}
            currentUser={currentUser}
          />
        </aside>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col min-w-0">
          {hasActive ? (
            <>
              {/* Header */}
              <ChatHeader
                conversation={activeConversation}
                onCall={() => {}}
                onVideo={() => {}}
                onMore={() => {}}
              />

              {/* Messages */}
              <main className="flex-1 overflow-y-auto relative">
                <MessageList
                  messages={messages}
                  currentUserId={currentUser.id}
                  endRef={messagesEndRef}
                />

                {typingUsers.length > 0 && (
                  <div className="absolute bottom-[80px] left-4 right-4 flex max-w-fit md:max-w-[65%] mx-auto items-center gap-2 px-4 py-1.5 pointer-events-none">
                    <div className="pointer-events-auto flex items-center gap-2 px-4 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-950 shadow-sm">
                      <span className="material-symbols-outlined text-xs text-slate-400">person</span>
                      <p className="text-xs italic text-slate-500 dark:text-slate-400">
                        {typingUsers.length === 1 ? 'typing...' : `${typingUsers.length} people are typing...`}
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
                  </div>
                )}
              </main>

              {/* Input */}
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSend={sendMessage}
                onTyping={setTyping}
                disabled={isSending}
                currentUser={currentUser}
              />
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}
