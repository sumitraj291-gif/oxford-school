import React from 'react';
import { X, Play, Film, Calendar, Volume2 } from 'lucide-react';

export default function VideoHighlightModal({ isOpen, onClose, video }) {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2.5">
            <Film className="w-5 h-5 text-amber-400" />
            <div>
              <h4 className="text-sm font-bold text-white line-clamp-1">{video.title}</h4>
              <span className="text-[11px] text-slate-400">{video.category || 'Campus Activity'} • The Oxford School, Haridwar</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img 
            src={video.poster || "/images/annual_day.jpg"} 
            alt={video.title} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>

          {/* Simulated Active Video UI */}
          <div className="absolute text-center z-10 p-6 max-w-lg">
            <div className="w-20 h-20 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-xl hover:scale-110 transition cursor-pointer">
              <Play className="w-9 h-9 fill-current ml-1" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{video.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{video.description}</p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-amber-300 border border-white/10">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Full HD Audio/Video Coverage • The Oxford School Campus</span>
            </div>
          </div>

          {/* Video bottom controls bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-4 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>HD 1080p Official Stream</span>
            </div>
            <span>Duration: 04:18</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-950 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Recorded on Campus: Roshnabad, Haridwar</span>
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
}
