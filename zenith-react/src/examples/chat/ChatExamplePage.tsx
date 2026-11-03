import { ChatApp } from '@/examples/chat';
import { useChat } from '@/examples/chat/hooks/useChat';

export const ChatExamplePage = () => {
  const {
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
  } = useChat();

  return (
    <ChatApp
      currentUser={currentUser}
      conversations={conversations}
      activeConversation={activeConversation}
      activeConversationId={activeConversationId}
      messages={messages}
      typingUsers={typingUsers}
      inputValue={inputValue}
      isSending={isSending}
      setInputValue={setInputValue}
      selectConversation={selectConversation}
      sendMessage={sendMessage}
      setTyping={setTyping}
      messagesEndRef={messagesEndRef}
    />
  );
};
