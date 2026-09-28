import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { FACILITIES_DATA } from '../data/schoolData';

interface FacilitiesProps {
  onOpenEnquiry: () => void;
  onOpenVideo: (url: string, title?: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenEnquiry, onOpenVideo }) => {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
            Campus Infrastructure
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            State-of-the-Art Facilities
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our campus at Roshnabad Haridwar provides experiential learning environments that inspire scientific curiosity, physical fitness, and digital fluency.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenVideo('/videos/hero_video.mp4', 'Campus Video Tour - Facilities')}
              className="px-6 py-3 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch Video Tour</span>
            </button>
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="px-6 py-3 text-[#002b49] text-xs font-semibold uppercase tracking-wider btn-cut-border hover:bg-slate-100 cursor-pointer"
            >
              <span>Book Campus Visit</span>
            </button>
          </div>
        </div>

        {/* Facilities List */}
        <div className="space-y-16">
          {FACILITIES_DATA.map((fac, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={fac.id}
                id={fac.id}
                className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
              >
                {/* Image */}
                <div className={`lg:col-span-6 aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 space-y-4 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#002b49] block">
                    Facility #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.fullDesc}
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {fac.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#002b49] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="px-5 py-2 text-xs uppercase tracking-wider text-[#002b49] font-semibold btn-cut-border hover:bg-slate-50 cursor-pointer"
                    >
                      <span>Inquire About Admissions</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety & Hygiene Guarantee */}
        <div className="mt-24 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm text-center max-w-4xl mx-auto space-y-4">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto text-[#002b49] btn-cut-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            100% CBSE & NBC Compliant Campus Safety
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our campus holds valid fire safety, safe drinking water, sanitary condition, and building safety certifications verified by Uttarakhand state authorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
