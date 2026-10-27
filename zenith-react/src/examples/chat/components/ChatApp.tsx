import { useEffect, useRef, useState, type RefObject } from 'react';
import { Sidebar } from './Sidebar';
import { EmptyState } from './EmptyState';
import { StatusPill, UserAvatar } from './ui';
import type { Conversation, Message, User } from '../types';

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

interface ChatAppProps {
  currentUser: User;
  conversations: Conversation[];
  activeConversation: Conversation | undefined;
  activeConversationId: string | null;
  messages: Message[];
  typingUsers: string[];
  inputValue: string;
  isSending: boolean;
  setInputValue: (v: string) => void;
  selectConversation: (id: string) => void;
  sendMessage: (text: string) => void;
  setTyping: (userId: string, isTyping: boolean) => void;
  messagesEndRef: RefObject<HTMLDivElement | null>;
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
  const [showConversations, setShowConversations] = useState(true);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const hasActive = activeConversationId !== null && !!activeConversation;

  // Detect mobile layout and keep it in sync when the viewport changes.
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateIsMobile);
    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  // On mobile, show the conversation list first and switch to chat after selection.
  const shouldShowConversationsList = isMobile && showConversations;

  // Selecting a conversation switches the mobile view to the chat.
  const handleSelectConversation = (id: string) => {
    selectConversation(id);
    setShowConversations(false);
  };

  const handleSendMessage = () => {
    const text = inputValue.trim();
    if (!text || isSending) return;

    setTyping(currentUser.id, false);
    sendMessage(text);
    if (inputRef.current) inputRef.current.style.height = 'auto';
  };

  const visibleTypingUsers = typingUsers.filter(
    (userId) => userId !== currentUser.id,
  );

  return (
    <div className="flex flex-col h-full w-full bg-slate-100 dark:bg-slate-900">
      {/* Mobile: full-screen conversation list */}
      {shouldShowConversationsList && (
        <div className="flex flex-col h-full w-full bg-slate-100 dark:bg-slate-900">
          <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 shrink-0">
            <div className="h-9 w-9" />
            <h1 className="text-sm font-semibold text-slate-900 dark:text-white">
              Conversations
            </h1>
            <div className="h-9 w-9" />
          </header>
          <Sidebar
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelect={handleSelectConversation}
            currentUser={currentUser}
          />
        </div>
      )}

      {/* Main layout */}
      <div
        className={cx(
          'flex h-full w-full flex-col md:flex-row',
          shouldShowConversationsList ? 'hidden md:flex' : '',
        )}
      >
        {/* Desktop sidebar; mobile uses the full-screen conversation list above. */}
        <aside
          className="hidden h-full w-full shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:flex md:w-80"
        >
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
              <button
                key={conv.id}
                type="button"
                onClick={() => handleSelectConversation(conv.id)}
                className={cx(
                  'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200',
                  conv.id === activeConversationId
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800/40'
                    : 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/40',
                )}
              >
                <div className="relative">
                  <div className="flex shrink-0 items-center justify-center rounded-full overflow-hidden border border-white/60 dark:border-white/10 ring-2 ring-blue-500/30 h-9 w-9 text-sm font-semibold shadow-sm dark:bg-slate-800 bg-white text-slate-700">
                    {conv.initials}
                  </div>
                  {conv.type === 'group' && (
                    <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white dark:ring-slate-950 bg-slate-700">
                      <span className="text-[10px] font-bold">{conv.participants.length}</span>
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p
                      className={cx(
                        'text-sm font-medium leading-tight',
                        conv.id === activeConversationId
                          ? ''
                          : 'text-slate-700 dark:text-slate-300',
                      )}
                      title={conv.name}
                    >
                      {conv.name}
                    </p>
                    {conv.lastMessage && (
                      <span className={cx(
                        'ml-2 text-[10px] font-medium',
                        conv.id === activeConversationId
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-400 dark:text-slate-500',
                      )}>
                        {new Date(conv.lastMessage.createdAt).toLocaleTimeString(
                          [],
                          { hour: '2-digit', minute: '2-digit' },
                        )}
                      </span>
                    )}
                  </div>
                  <p className="line-clamp-1 mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {conv.lastMessage?.text ?? 'Start a new conversation'}
                  </p>
                </div>
                {conv.unreadCount > 0 && (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white dark:border-slate-900 bg-blue-600 text-[10px] font-bold text-white shadow-sm">
                    {conv.unreadCount > 9 ? '9+' : conv.unreadCount}
                  </span>
                )}
              </button>
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

        {/* Main chat area */}
        <div className="flex-1 flex flex-col min-w-0 relative bg-slate-50 dark:bg-slate-950">
          {hasActive ? (
            <>
              {/* Header */}
              <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 shrink-0 z-10">
                {/* Mobile: back to conversations list button */}
                {isMobile ? (
                  <button
                    type="button"
                    aria-label="Back to conversations"
                    onClick={() => setShowConversations(true)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      chevron_left
                    </span>
                  </button>
                ) : null}
                <div className="flex items-center gap-2">
                  <div className="flex shrink-0 items-center justify-center rounded-full overflow-hidden border border-white/60 dark:border-white/10 ring-2 ring-blue-500/30 h-9 w-9 text-sm font-semibold shadow-sm dark:bg-slate-800 bg-white text-slate-700">
                    {activeConversation.initials}
                  </div>
                  <div className="leading-tight min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate" title={activeConversation.name}>
                      {activeConversation.name}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Available
                      </span>
                      {activeConversation.type === 'group' && (
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">
                          • {activeConversation.participants.filter(
                          (p) => p.status === 'online',
                          ).length} of {activeConversation.participants.length} online
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Search"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors md:flex"
                  >
                    <span className="material-symbols-outlined text-lg">search</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Call"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors md:flex"
                  >
                    <span className="material-symbols-outlined text-lg">call</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Video call"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors md:flex"
                  >
                    <span className="material-symbols-outlined text-lg">videocam</span>
                  </button>
                  <button
                    type="button"
                    aria-label="More"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors md:flex"
                  >
                    <span className="material-symbols-outlined text-lg">more_vert</span>
                  </button>
                </div>
              </header>

              {/* Messages */}
              <main className="flex-1 overflow-y-auto relative">
                <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950">
                  {messages.map((msg, idx) => {
                    const prevMsg = messages[idx - 1];
                    const isSameDay = prevMsg
                      ? new Date(msg.createdAt).toDateString() ===
                        new Date(prevMsg.createdAt).toDateString()
                      : false;

                    return (
                      <div key={msg.id} className="mb-6 relative w-full">
                        {!isSameDay && (
                          <div className="flex w-full items-center gap-2 mb-2">
                            <div className="flex-1 border-t border-slate-200 dark:border-slate-800" />
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-950 px-2 py-0.5 shadow-sm z-10">
                              {new Date(msg.createdAt).toLocaleDateString(
                                undefined,
                                { month: 'short', day: 'numeric' },
                              )}
                            </span>
                            <div className="flex-1 border-t border-slate-200 dark:border-slate-800" />
                          </div>
                        )}
                        <div className={cx(
                          'flex w-full max-w-full',
                          msg.senderId === currentUser.id
                            ? 'justify-end'
                            : 'justify-start',
                        )}>
                          <div className="flex w-fit max-w-[85%] flex-col md:max-w-[65%]">
                            <div
                              className={cx(
                                'w-fit max-w-full rounded-2xl border px-4 py-2.5 text-sm leading-relaxed shadow-sm',
                                msg.senderId === currentUser.id
                                  ? 'border-transparent bg-blue-600 text-white'
                                  : 'border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-white',
                              )}
                            >
                              <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                              <span
                                className={cx(
                                  'mt-1 block text-right text-[10px] leading-none',
                                  msg.senderId === currentUser.id
                                    ? 'text-blue-100/80'
                                    : 'text-slate-400 dark:text-slate-500',
                                )}
                              >
                                {new Date(msg.createdAt).toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </span>
                            </div>
                            {msg.senderId === currentUser.id && (
                              <div className="mt-1 flex self-end items-center gap-1 text-[10px] font-medium text-slate-400">
                                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">
                                  {msg.status === 'sending' ? 'hourglass_bottom' : 'done_all'}
                                </span>
                                <span>{msg.status}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>

                {visibleTypingUsers.length > 0 && (
                  <div className="absolute bottom-[80px] left-4 right-4 flex max-w-fit md:max-w-[65%] mx-auto items-center gap-2 px-4 py-1.5 pointer-events-none">
                    <div className="pointer-events-auto flex items-center gap-2 px-4 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
                      <span className="material-symbols-outlined text-xs text-slate-400">person</span>
                      <p className="text-xs italic text-slate-500 dark:text-slate-400">
                        {visibleTypingUsers.length === 1 ? 'typing...' : `${visibleTypingUsers.length} people are typing...`}
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
              <div
                className={cx(
                  'border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 shrink-0 z-10',
                  isSending ? 'opacity-60 pointer-events-none' : '',
                )}
              >
                <div className="flex items-end gap-2">
                  <button
                    type="button"
                    aria-label="Attach file"
                    disabled={isSending}
                    className={cx(
                      'flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:pointer-events-none',
                      isSending && '',
                    )}
                  >
                    <span className="material-symbols-outlined text-base">attach_file</span>
                  </button>

                  <div className="flex-1 relative">
                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        setTyping(currentUser.id, e.target.value.trim().length > 0);
                        e.currentTarget.style.height = 'auto';
                        e.currentTarget.style.height = `${Math.min(e.currentTarget.scrollHeight, 112)}px`;
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          e.currentTarget.style.height = 'auto';
                          handleSendMessage();
                        }
                      }}
                      placeholder="Type a message..."
                      rows={1}
                      style={{ maxHeight: 112, overflowY: 'auto' }}
                      className={cx(
                        'w-full resize-none rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all',
                        isSending
                          ? 'bg-slate-50/50 dark:bg-slate-800/30 cursor-not-allowed'
                          : '',
                      )}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isSending}
                    className={cx(
                      'flex h-9 w-9 items-center justify-center rounded-xl',
                      !inputValue.trim() || isSending
                        ? 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/30 transition-all active:scale-95',
                    )}
                    aria-label="Send message"
                  >
                    <span className="material-symbols-outlined text-base">send</span>
                  </button>
                </div>
                {isSending && (
                  <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                    Sending...
                  </p>
                )}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}
