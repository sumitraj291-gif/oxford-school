import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const queryText = message.trim() 
      ? `Hello The Oxford School, Haridwar! I have an enquiry: ${message.trim()}`
      : `Hello The Oxford School, Haridwar! I would like to enquire about Admissions for Academic Session 2025-26.`;

    const url = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(queryText)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Quick Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#002b49] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center p-1.5">
                <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">The Oxford School, Haridwar</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Admission Desk Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-slate-200 max-w-[85%] text-slate-800">
              <p className="font-semibold text-[#002b49] mb-1">Namaste &amp; Welcome to The Oxford School!</p>
              <p className="text-slate-600 leading-relaxed">
                How may we help you today with Admission Enquiries, CBSE Curriculum, or Campus Visits?
              </p>
              <span className="text-[10px] text-slate-400 mt-1.5 block text-right">Roshnabad Campus Desk</span>
            </div>

            {/* Quick Prompt Chips */}
            <div className="flex flex-col gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setMessage('I want to know about Admission criteria and fee structure for Class 1.')}
                className="text-left px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-lg text-[11px] font-medium transition"
              >
                🎒 Admission criteria &amp; fee structure
              </button>
              <button
                type="button"
                onClick={() => setMessage('Is school bus transport available in our area (BHEL / Shivalik Nagar)?')}
                className="text-left px-2.5 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 rounded-lg text-[11px] font-medium transition"
              >
                🚌 Transport routes &amp; GPS bus coverage
              </button>
              <button
                type="button"
                onClick={() => setMessage('What are the streams offered in Class 11 and 12 (Science/Commerce)?')}
                className="text-left px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-lg text-[11px] font-medium transition"
              >
                🔬 Class 11 &amp; 12 CBSE Streams
              </button>
            </div>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow transition"
              aria-label="Send via WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Pill */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-1.5 bg-white text-slate-800 px-3 py-1.5 rounded-full shadow-lg border border-slate-200 text-xs font-semibold animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>WhatsApp Admission Helpline</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-200 border-2 border-white focus:outline-none"
          aria-label="Open WhatsApp Chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
