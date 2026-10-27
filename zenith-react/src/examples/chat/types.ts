export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read';

export interface User {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  status: 'online' | 'away' | 'offline';
  color?: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  senderInitials: string;
  text: string;
  createdAt: Date;
  status: MessageStatus;
  repliedTo?: Message;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  type: 'image' | 'file' | 'audio';
  url: string;
  name: string;
  size?: number;
}

export interface Conversation {
  id: string;
  type: 'direct' | 'group';
  name: string;
  avatar?: string;
  initials: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  muted: boolean;
  updatedAt: Date;
}
