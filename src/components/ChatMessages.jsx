import ChatMessage from "./ChatMessage";

export default function ChatMessages({ chats }) {
  return (
    <div className="p-8 space-y-6">
      {chats.map((item, index) => (
        <ChatMessage key={index} item={item} />
      ))}
    </div>
  );
}
