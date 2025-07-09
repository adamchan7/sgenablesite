"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ChatMessage } from "./ChatMessage";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedPrompts = [
  "Where can I download the R&H toolkit?",
  "How do I start the self-assessment?",
  "Explain the six Enabling Mark pillars",
  "Who can apply for the AT Fund?"
];

export function ChatBox({ isOpen, onClose }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm your SG Enable AI Assistant. Ask me about toolkits, accessibility, or how to earn the Enabling Mark. Here's what I can help with:",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAssistantResponse(content),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Oops! Something went wrong. Try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getAssistantResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("toolkit") || input.includes("r&h")) {
      return "You can download the Recruitment & Hiring Toolkit from the Recruitment Practices page. Click on 'Download Toolkit' or visit /assets/Recruitment-Hiring-Toolkit.pdf directly.";
    }
    
    if (input.includes("self-assessment")) {
      return "The self-assessment tool helps you evaluate your current inclusion practices. You can start it from any pillar page by clicking the 'Take Self-Assessment' button.";
    }
    
    if (input.includes("six pillars") || input.includes("enabling mark")) {
      return "The six Enabling Mark pillars are: 1) Leadership, Culture & Climate, 2) Recruitment Practices, 3) Workplace Accessibility & Accommodations, 4) Employment Practices, 5) Community Engagement & Promotion, and 6) Extent of Inclusive Hiring. Each pillar helps build a comprehensive inclusion strategy.";
    }
    
    if (input.includes("at fund")) {
      return "The AT Fund covers up to 80% of assistive technology costs for employers. You can apply through the SG Enable website at https://www.sgenable.sg/at-fund. The fund helps make workplaces more accessible.";
    }
    
    return "I can help you with information about the SG Enabling Mark, toolkits, assessments, and accessibility resources. Try asking about specific pillars, funding options, or implementation steps!";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestedPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 w-80 md:w-96 h-[75vh] md:h-[640px] bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="bg-primaryBlue text-white p-4 rounded-t-lg flex items-center justify-between">
        <h3 className="font-semibold">SG Enable Assistant 🤖</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-white hover:bg-white/20 h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {messages.length === 1 && (
            <div className="space-y-2">
              {suggestedPrompts.map((prompt, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-blue-50 block w-full text-left p-2 h-auto whitespace-normal"
                  onClick={() => handleSuggestedPrompt(prompt)}
                >
                  {prompt}
                </Badge>
              ))}
            </div>
          )}
          
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Assistant is typing...</span>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            className="bg-primaryBlue hover:bg-primaryBlue/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}