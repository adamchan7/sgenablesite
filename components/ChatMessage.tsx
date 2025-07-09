"use client";

import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-3 py-2 text-sm",
          isUser
            ? "bg-green-500 text-white"
            : "bg-gray-100 text-gray-900"
        )}
      >
        {!isUser && <span className="text-xs text-gray-500 block mb-1">🤖</span>}
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}