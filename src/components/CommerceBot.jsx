import React, { useState } from 'react';
import { FAQS } from '../data/servicesData';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageSquare, 
  HelpCircle, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function CommerceBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am CommerceBot EG, your AI virtual assistant for the Egyptian Ministry of Trade & Industry. How can I assist your business today?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (userText) => {
    const query = (userText || input).trim();
    if (!query) return;

    // Add user message
    const newMsgs = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgs);
    setInput('');

    // Formulate bot response based on keywords
    setTimeout(() => {
      let reply = "Thank you for asking. For official guidance on that service, you can use our top search bar or open the E-Services Directory.";
      const lower = query.toLowerCase();

      if (lower.includes('commercial register') || lower.includes('cr') || lower.includes('crn')) {
        reply = "To issue or renew a Commercial Register in Egypt, submit your National ID and lease proof through service EG-CR-01. Processing time is usually within 24 hours.";
      } else if (lower.includes('fee') || lower.includes('cost') || lower.includes('fawry')) {
        reply = "Ministry fees can be calculated using our interactive Fee Estimator. Payments are accepted via Fawry pay code, Meeza card, or Visa/Mastercard.";
      } else if (lower.includes('trademark') || lower.includes('brand') || lower.includes('logo')) {
        reply = "Trademarks are protected under Law No. 82/2002. You can file a new trademark under EG-TM-01 with legal protection lasting 10 renewable years.";
      } else if (lower.includes('verify') || lower.includes('authentic') || lower.includes('check')) {
        reply = "You can instantly verify any Egyptian Commercial Register or Trademark on our License Verifier tab using the 10-digit registration number.";
      } else if (lower.includes('foreign') || lower.includes('investor')) {
        reply = "Foreign investors enjoy 100% company ownership rights in Egypt under Investment Law No. 72/2017 with GAFI fast-track registration.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0F2C59] to-[#0A192F] text-amber-300 font-bold text-xs rounded-full shadow-2xl hover:scale-105 transition border border-amber-500/40 group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <span>CommerceBot EG</span>
        </button>
      )}

      {/* Floating Chat Box */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 flex flex-col h-[480px] overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-[#0A192F] text-white p-4 border-b border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/40">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white flex items-center gap-1">
                  CommerceBot EG <Sparkles className="w-3 h-3 text-amber-400" />
                </h3>
                <span className="text-[10px] text-emerald-400 font-medium">Online • AI Guide</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="p-4 flex-1 overflow-y-auto custom-scrollbar space-y-3 bg-slate-50 text-xs">
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#0F2C59] text-white rounded-tr-none'
                    : 'bg-white border border-slate-200 text-slate-800 shadow-sm rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick FAQ Prompts */}
          <div className="px-3 py-2 bg-slate-100 border-t border-slate-200 overflow-x-auto custom-scrollbar flex gap-1.5 text-[10px]">
            <button 
              onClick={() => handleSend('How long does CR issuance take?')}
              className="px-2.5 py-1 bg-white hover:bg-slate-200 text-slate-700 rounded-lg whitespace-nowrap border border-slate-200 font-medium"
            >
              CR Issuance Time?
            </button>
            <button 
              onClick={() => handleSend('What are the Fawry payment codes?')}
              className="px-2.5 py-1 bg-white hover:bg-slate-200 text-slate-700 rounded-lg whitespace-nowrap border border-slate-200 font-medium"
            >
              Fawry Pay?
            </button>
            <button 
              onClick={() => handleSend('Foreign investor ownership rights?')}
              className="px-2.5 py-1 bg-white hover:bg-slate-200 text-slate-700 rounded-lg whitespace-nowrap border border-slate-200 font-medium"
            >
              Foreign Ownership?
            </button>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask a question about Egyptian trade rules..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F2C59]"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 bg-[#0F2C59] hover:bg-[#0A192F] text-amber-300 rounded-xl transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
