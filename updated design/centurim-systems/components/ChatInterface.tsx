import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { sendMessageToArchitect } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "👋 Hi! I can help you set up your trade OS. Want to see a demo of the AI receptionist?",
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToArchitect(userMsg.text);
      const modelMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error("Chat Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-6 w-[90vw] sm:w-[380px] rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-indigo-900/10 overflow-hidden flex flex-col transition-all duration-300 ease-out h-[600px] animate-float">
          {/* Header */}
          <div className="bg-white border-b border-slate-50 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                 <span className="block text-sm font-bold text-slate-900">Support</span>
                 <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-slate-500">We reply instantly</span>
                 </span>
              </div>
            </div>
            <button onClick={toggleChat} className="text-slate-400 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-50">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-3 text-[15px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none shadow-md shadow-indigo-600/20'
                      : 'bg-slate-50 text-slate-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-50 rounded-2xl rounded-bl-none px-4 py-3">
                  <div className="flex space-x-1.5">
                    <div className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="bg-white p-4">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message..."
                className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-5 pr-12 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all shadow-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 disabled:bg-slate-200 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center mt-2">
               <span className="text-[10px] text-slate-400">Powered by Centurim AI</span>
            </div>
          </form>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={toggleChat}
          className="group flex items-center justify-center h-14 w-14 rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:scale-110 transition-all duration-300"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};