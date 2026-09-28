import React from 'react';
import { 
  Bus, CheckCircle2, ShieldCheck, HeartPulse, Sparkles, ArrowRight 
} from 'lucide-react';
import { FACILITIES_DATA } from '../data/schoolData';

export default function Facilities({ onOpenEnquiry }) {
  return (
    <div className="space-y-16 py-10">
      
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#002b49] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-400/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Campus Infrastructure</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              World-Class Facilities for Holistic Scholar Development
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              At The Oxford School, Haridwar, physical and intellectual infrastructure work in harmony. Explore our advanced laboratories, digital learning spaces, sports courts, and safety-audited transit fleet.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Quick Navigation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap gap-2 items-center justify-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
            Quick Jump:
          </span>
          {FACILITIES_DATA.map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-[#002b49] hover:text-white text-slate-700 transition flex items-center gap-1.5"
            >
              <span>{f.title.split(' ')[0]}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Facilities Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {FACILITIES_DATA.map((fac, idx) => (
            <div 
              key={fac.id}
              id={fac.id}
              className={`scroll-mt-28 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-6 h-72 lg:h-96 relative overflow-hidden bg-slate-100 ${
                idx % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <img 
                  src={fac.image} 
                  alt={fac.title} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-500/90 text-slate-950 px-2.5 py-1 rounded-md inline-block mb-1">
                    The Oxford School Campus
                  </span>
                  <h3 className="text-lg font-bold text-white drop-shadow">
                    {fac.title}
                  </h3>
                </div>
              </div>

              {/* Text info side */}
              <div className={`lg:col-span-6 p-6 sm:p-10 space-y-5 ${
                idx % 2 === 1 ? 'lg:order-1' : ''
              }`}>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Facility #{idx + 1}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#002b49] mt-1">
                    {fac.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {fac.fullDesc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Key Features &amp; Equipment:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {fac.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenEnquiry}
                    className="text-xs font-bold text-[#002b49] hover:text-amber-600 inline-flex items-center gap-1.5 transition"
                  >
                    <span>Enquire about laboratory programs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Hygiene Protocol Strip */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-100/60 px-3 py-1 rounded-full border border-amber-200">
              Safety &amp; Well-Being First
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
              Campus Health, Safety &amp; Vigilance
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every area of our campus is certified by local civil and fire authorities for utmost safety of our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#002b49] mb-2">School Medical Infirmary</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trained nursing staff and full first-aid readiness with oxygen support on-site, alongside tie-ups with reputable hospitals in Haridwar for emergencies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#002b49] mb-2">24x7 CCTV &amp; Guarded Gates</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over 90 high-definition CCTV cameras monitor campus corridors, sports grounds, entry gates, and school buses to guarantee student protection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Bus className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#002b49] mb-2">Safe Transit Fleet</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Speed-governed, GPS-enabled buses with female conductors and verified drivers covering Roshnabad, BHEL, Shivalik Nagar, and Haridwar City.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
