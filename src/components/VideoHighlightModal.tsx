import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoHighlightModalProps {
  videoUrl: string | null;
  title?: string;
  onClose: () => void;
}

export const VideoHighlightModal: React.FC<VideoHighlightModalProps> = ({
  videoUrl,
  title = "The Oxford School - Campus Tour & Highlights",
  onClose
}) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl">
      <div className="relative w-full max-w-5xl bg-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <h3 className="text-white text-sm font-medium tracking-wide">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoHighlightModal;
