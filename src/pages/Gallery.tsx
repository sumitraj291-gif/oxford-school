import React, { useState } from 'react';
import { Play, Eye, Filter, Sparkles, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';

interface GalleryProps {
  onOpenVideo: (url: string, title?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  const categories = [
    'All',
    'Sports',
    'Science & Innovation',
    'Academics',
    'Cultural Events',
    'Campus Life'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
            Moments in Motion
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Campus Life & Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover life at The Oxford School through vibrant photographs capturing sports day victories, science exhibitions, cultural dramas, and academic milestones.
          </p>

          {/* Video Tour Banner CTA */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenVideo('/videos/hero_video.mp4', 'The Oxford School - Campus Video Tour')}
              className="px-6 py-3 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] inline-flex items-center gap-2 cursor-pointer shadow-md transition"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch 4K Video Tour</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#002b49] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group cursor-pointer relative aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-left text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                  {item.category} • {item.date}
                </span>
                <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-200 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[10px] text-white uppercase tracking-wider font-semibold">
                  <Eye className="w-3 h-3" />
                  <span>Tap to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl text-left"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-slate-950">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-white space-y-1.5 border-t border-slate-200">
                <span className="text-xs uppercase font-bold tracking-wider text-[#002b49]">
                  {selectedPhoto.category} • {selectedPhoto.date}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
