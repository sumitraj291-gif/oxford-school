import React, { useState } from 'react';
import { 
  Filter, X, ChevronLeft, ChevronRight, 
  Calendar, ZoomIn, Sparkles 
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Sports', 'Science & Innovation', 'Academics', 'Cultural Events', 'Campus Life'];

  const filteredGallery = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-12 py-10">
      
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#002b49] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-400/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Campus Visual Chronicle</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Life &amp; Achievements at The Oxford School
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Explore snapshots of scientific discovery, athletic triumphs, cultural jubilation, and daily academic life in Roshnabad, Haridwar.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat
                  ? 'bg-[#002b49] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition"></div>

                {/* Hover zoom badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/90 text-slate-950 px-2 py-0.5 rounded inline-block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  {item.date}
                </span>
                <span className="font-semibold text-[#002b49] group-hover:text-amber-600 transition">
                  View Full Image →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-4 inset-x-4 max-w-7xl mx-auto flex items-center justify-between text-white z-10">
            <div>
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                {filteredGallery[lightboxIndex].category} • {filteredGallery[lightboxIndex].date}
              </span>
              <h4 className="text-base sm:text-lg font-bold">
                {filteredGallery[lightboxIndex].title}
              </h4>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Description Container */}
          <div 
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
            />
            <p className="text-sm text-slate-300 text-center mt-4 max-w-2xl px-4">
              {filteredGallery[lightboxIndex].description}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

    </div>
  );
}
