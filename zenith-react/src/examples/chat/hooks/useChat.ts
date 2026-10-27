import { useState, useCallback, useEffect, useRef } from 'react';
import type { Conversation, Message, User } from '../types';

const CURRENT_USER: User = {
  id: 'user-me',
  name: 'Alex Rivera',
  initials: 'AR',
  status: 'online',
  color: 'blue',
};

const MOCK_USERS: User[] = [
  CURRENT_USER,
  {
    id: 'user-1',
    name: 'Maya Chen',
    initials: 'MC',
    status: 'online',
    color: 'emerald',
  },
  {
    id: 'user-2',
    name: 'Diego Morales',
    initials: 'DM',
    status: 'away',
    color: 'amber',
  },
  {
    id: 'user-3',
    name: 'Sophie Laurent',
    initials: 'SL',
    status: 'online',
    color: 'violet',
  },
  {
    id: 'user-4',
    name: 'Jamal Okoro',
    initials: 'JO',
    status: 'offline',
    color: 'rose',
  },
  {
    id: 'user-5',
    name: 'Lina Park',
    initials: 'LP',
    status: 'online',
    color: 'cyan',
  },
];

const INITIAL_TIME = new Date();

function createMessage(
  conversationId: string,
  senderId: string,
  senderName: string,
  senderAvatar: string | undefined,
  senderInitials: string,
  text: string,
  status: Message['status'] = 'read',
  repliesTo?: Message,
): Message {
  return {
    id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    conversationId,
    senderId,
    senderName,
    senderAvatar,
    senderInitials,
    text,
    createdAt: new Date(),
    status,
    repliedTo: repliesTo,
  };
}

function createConversationMessages(conversation?: Conversation): Message[] {
  if (!conversation?.lastMessage) return [];

  const otherUser =
    conversation.participants.find((participant) => participant.id !== CURRENT_USER.id) ??
    MOCK_USERS[1];

  return [
    createMessage(
      conversation.id,
      conversation.lastMessage.senderId,
      conversation.lastMessage.senderName,
      conversation.lastMessage.senderAvatar,
      conversation.lastMessage.senderInitials,
      conversation.lastMessage.text,
      conversation.lastMessage.status,
    ),
    createMessage(
      conversation.id,
      CURRENT_USER.id,
      CURRENT_USER.name,
      CURRENT_USER.avatar,
      CURRENT_USER.initials,
      "Not yet, I'm reviewing them now. Looks promising so far.",
    ),
    createMessage(
      conversation.id,
      otherUser.id,
      otherUser.name,
      otherUser.avatar,
      otherUser.initials,
      'Awesome! The new card components have some really nice hover states.',
    ),
    createMessage(
      conversation.id,
      CURRENT_USER.id,
      CURRENT_USER.name,
      CURRENT_USER.avatar,
      CURRENT_USER.initials,
      'Yeah, I especially like the toast notifications. Very clean.',
    ),
  ];
}

export function useChat() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'conv-1',
      type: 'direct',
      name: 'Maya Chen',
      initials: 'MC',
      avatar: undefined,
      participants: [CURRENT_USER, MOCK_USERS[1]],
      lastMessage: createMessage(
        'conv-1',
        'user-1',
        'Maya Chen',
        undefined,
        'MC',
        "Hey! Did you see the new design system docs?",
        'read',
      ),
      unreadCount: 2,
      muted: false,
      updatedAt: new Date(INITIAL_TIME.getTime() - 2 * 60 * 1000),
    },
    {
      id: 'conv-2',
      type: 'direct',
      name: 'Diego Morales',
      initials: 'DM',
      avatar: undefined,
      participants: [CURRENT_USER, MOCK_USERS[2]],
      lastMessage: createMessage(
        'conv-2',
        'user-me',
        'Alex Rivera',
        undefined,
        'AR',
        "I'll send you the Figma link in a moment.",
        'read',
      ),
      unreadCount: 0,
      muted: false,
      updatedAt: new Date(INITIAL_TIME.getTime() - 5 * 60 * 1000),
    },
    {
      id: 'conv-3',
      type: 'group',
      name: 'Product Team',
      initials: 'PT',
      avatar: undefined,
      participants: [CURRENT_USER, MOCK_USERS[3], MOCK_USERS[4], MOCK_USERS[1]],
      lastMessage: createMessage(
        'conv-3',
        'user-5',
        'Lina Park',
        undefined,
        'LP',
        'Meeting notes are up on Notion. 📝',
        'read',
      ),
      unreadCount: 5,
      muted: false,
      updatedAt: new Date(INITIAL_TIME.getTime() - 15 * 60 * 1000),
    },
    {
      id: 'conv-4',
      type: 'direct',
      name: 'Sophie Laurent',
      initials: 'SL',
      avatar: undefined,
      participants: [CURRENT_USER, MOCK_USERS[3]],
      lastMessage: createMessage(
        'conv-4',
        'user-me',
        'Alex Rivera',
        undefined,
        'AR',
        'Thanks for the review!',
        'read',
      ),
      unreadCount: 0,
      muted: false,
      updatedAt: new Date(INITIAL_TIME.getTime() - 2 * 60 * 60 * 1000),
    },
    {
      id: 'conv-5',
      type: 'direct',
      name: 'Jamal Okoro',
      initials: 'JO',
      avatar: undefined,
      participants: [CURRENT_USER, MOCK_USERS[4]],
      lastMessage: createMessage(
        'conv-5',
        'user-4',
        'Jamal Okoro',
        undefined,
        'JO',
        'Are we still on for the demo tomorrow?',
        'read',
      ),
      unreadCount: 1,
      muted: false,
      updatedAt: new Date(INITIAL_TIME.getTime() - 24 * 60 * 60 * 1000),
    },
  ]);

  const [activeConversationId, setActiveConversationId] = useState<string | null>('conv-1');
  const [messages, setMessages] = useState<Message[]>(() =>
    createConversationMessages(conversations[0]),
  );
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConversation = conversations.find((c) => c.id === activeConversationId);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const markAsRead = useCallback((id: string) => {
    setConversations((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, unreadCount: 0 } : c,
      ),
    );
  }, []);

  const selectConversation = useCallback(
    (id: string) => {
      setActiveConversationId(id);
      setMessages(
        createConversationMessages(conversations.find((conversation) => conversation.id === id)),
      );
      markAsRead(id);
    },
    [conversations, markAsRead],
  );

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || !activeConversationId) return;

      const tempMessage = createMessage(
        activeConversationId,
        CURRENT_USER.id,
        CURRENT_USER.name,
        CURRENT_USER.avatar,
        CURRENT_USER.initials,
        text,
        'sending',
      );

      setMessages((prev) => [...prev, tempMessage]);
      setInputValue('');

      const optimisticId = tempMessage.id;

      setIsSending(true);

      // Simulate network delay
      const timer = setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === optimisticId ? { ...m, status: 'sent' } : m,
          ),
        );

        // Simulate delivery/read
        const timer2 = setTimeout(() => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === optimisticId ? { ...m, status: 'read' } : m,
            ),
          );
          setIsSending(false);

          // Auto-reply simulation after a short delay
          const timer3 = setTimeout(() => {
            const autoReplies: Record<string, string[]> = {
              'conv-1': [
                'Yes, the hover states use the new design tokens.',
                'Want me to share the Figma file with you?',
                'Let me know what you think! 😊',
              ],
              'conv-2': [
                'Thanks! Looking forward to it.',
                'The Figma link is on its way.',
              ],
              'conv-3': [
                'Great, I will check them out.',
                'See you at the meeting!',
              ],
              'conv-4': [
                'Youre welcome! Let me know if you need anything else.',
              ],
              'conv-5': [
                'Yes, 11 AM sharp. See you then!',
                'Ill bring the prototype.',
              ],
            };
            const replies = autoReplies[activeConversationId] || [
              'Got it, thanks!',
            ];
            const randomReply =
              replies[Math.floor(Math.random() * replies.length)];

            const otherUser =
              activeConversation?.participants.find(
                (p) => p.id !== CURRENT_USER.id,
              ) || MOCK_USERS[1];

            const reply = createMessage(
              activeConversationId,
              otherUser.id,
              otherUser.name,
              otherUser.avatar,
              otherUser.initials,
              randomReply,
              'read',
            );

            setMessages((prev) => [...prev, reply]);

            setConversations((prev) =>
              prev.map((c) =>
                c.id === activeConversationId
                  ? {
                      ...c,
                      lastMessage: reply,
                      updatedAt: reply.createdAt,
                    }
                  : c,
              ),
            );
          }, 1800 + Math.random() * 1200);

          return () => clearTimeout(timer3);
        }, 800);

        return () => clearTimeout(timer2);
      }, 600);

      return () => clearTimeout(timer);
    },
    [activeConversationId, activeConversation],
  );

  const setTyping = useCallback((userId: string, isTyping: boolean) => {
    setTypingUsers((prev) => {
      if (isTyping) {
        return prev.includes(userId) ? prev : [...prev, userId];
      }
      return prev.filter((id) => id !== userId);
    });
  }, []);

  return {
    currentUser: CURRENT_USER,
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
  };
}
