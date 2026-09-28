import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Hello Oxford School Haridwar! I would like to inquire about Admission for Academic Session 2025-26."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Popover / Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-black/90 border border-white/20 rounded-lg backdrop-blur-md shadow-2xl text-xs text-white">
          <span>Need help? Chat with Admission Desk</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-white/90 shadow-2xl btn-cut transition-transform hover:scale-105 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
