import React from 'react';
import {
  GraduationCap, Compass, Target, CheckCircle2
} from 'lucide-react';
import { SCHOOL_INFO, LEADERSHIP_MESSAGES } from '../data/schoolData';

export default function About({ onOpenEnquiry }) {
  const houses = [
    {
      name: "Ganga House",
      color: "bg-blue-600",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      motto: "Purity & Perseverance",
      significance: "Symbolizing the eternal sacred flow of wisdom and continuous perseverance."
    },
    {
      name: "Yamuna House",
      color: "bg-amber-600",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      motto: "Courage & Devotion",
      significance: "Inspiring selfless dedication, inner resilience, and radiant pursuit of truth."
    },
    {
      name: "Kaveri House",
      color: "bg-emerald-600",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      motto: "Harmony & Growth",
      significance: "Cultivating collaboration, ecological stewardship, and continuous intellectual flourishing."
    },
    {
      name: "Saraswati House",
      color: "bg-purple-600",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      motto: "Wisdom & Creativity",
      significance: "Dedicated to the fine arts, scientific inquiry, eloquent speech, and profound knowledge."
    }
  ];

  const coreValues = [
    { title: "Academic Rigor", desc: "Instilling deep conceptual understanding over rote learning through inquiry-driven CBSE pedagogy." },
    { title: "Ethical Integrity", desc: "Grounded in timeless Indian values of truth, respect, humility, and moral uprightness." },
    { title: "Innovative Thinking", desc: "Early integration of robotics, coding, and scientific experimentation to foster problem-solving." },
    { title: "Physical Well-Being", desc: "Daily physical training, yoga, and competitive sports to develop grit, stamina, and team spirit." },
    { title: "Global Perspective", desc: "Preparing scholars to communicate with eloquence and act as responsible global citizens." },
    { title: "Compassion & Service", desc: "Instilling empathy towards society, nature, and fellow human beings through community initiatives." }
  ];

  return (
    <div className="space-y-16 py-10 w-full text-left">

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#002b49] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl text-left">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-400/30">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>About The Oxford School, Haridwar</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              An Educational Legacy Built on Purpose, Discipline &amp; Values
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Established in 2014 in Roshnabad, Haridwar, <strong className="text-white font-semibold">The Oxford School</strong> is an English-medium, co-educational senior secondary institution affiliated to the Central Board of Secondary Education (CBSE), New Delhi. Under the guiding motto <em>"Strive and Soar High"</em>, we prepare youth for life.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Institutional Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
              Our Journey Since 2014
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49]">
              Committed to the Holy City of Haridwar
            </h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                Haridwar has historically been an esteemed center of learning, spirituality, and culture. Recognizing the pressing need for modern educational benchmarks in the region, <strong>The Oxford Educational Society</strong> instituted The Oxford School in 2014 at Roshnabad.
              </p>
              <p>
                Spanning a peaceful, green campus away from urban congestion, the school combines high-end science and robotics infrastructure with disciplined CBSE academic structures. From foundational classes, we have matured into a respected Senior Secondary institution offering full-fledged Science, Commerce, and Humanities streams with consistent 100% board examination pass records.
              </p>
              <p>
                Our students regularly bring laurels to the school in regional science exhibitions, inter-school athletics, Olympiad examinations, and cultural festivals.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CBSE Affiliation No: {SCHOOL_INFO.affiliationNo}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>School Code: {SCHOOL_INFO.schoolCode}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>English Medium Co-Ed (Nursery to XII)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/campus_life_1.jpg"
                alt="The Oxford School Campus Life & Building"
                className="w-full h-80 object-cover"
              />
              <div className="bg-[#002b49] text-white p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">The Oxford School Campus</span>
                <span className="text-xs text-slate-300">Shiv Ratan City, Navodaya Nagar, Roshnabad, Haridwar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="vision">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#002b49] mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be a beacon of educational excellence that nurtures intellectually curious, emotionally resilient, and morally grounded global citizens, empowered to meet the dynamic challenges of tomorrow while staying rooted in noble values.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#002b49]/10 text-[#002b49] flex items-center justify-center mb-5 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#002b49] mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To provide an inclusive, stimulating, and safe learning environment where every learner is challenged to achieve academic mastery, develop creative problem-solving faculties through STEM, cultivate sportsmanship, and lead with empathy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Motto & Core Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-100/60 px-3 py-1 rounded-full border border-amber-200 inline-block">
              Guiding Principles
            </span>
            <p className="text-sm text-slate-600 mt-2">
              Our motto is the heartbeat of every endeavor at The Oxford School—reminding every pupil that sincere dedication and high ideals know no boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow transition flex flex-col justify-between text-left"
              >
                <div>
                  <div className="text-amber-600 font-serif font-bold text-lg mb-1.5">
                    0{idx + 1}. {val.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages Detailed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="chairman">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
            Messages from Management &amp; Administration
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
            Words of Wisdom &amp; Guidance
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            The visionary leaders shaping the character, academic trajectory, and holistic growth of students at The Oxford School.
          </p>
        </div>

        {/* Quick Desk Navigation Pills */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs mb-10 flex flex-wrap gap-2 items-center justify-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
            Jump to Desk:
          </span>
          {[
            { label: "Founder Chairman", hash: "#chairman" },
            { label: "Managing Director", hash: "#managing-director" },
            { label: "Director", hash: "#director" },
            { label: "Manager", hash: "#manager" },
            { label: "Principal", hash: "#principal" },
            { label: "Executive Member", hash: "#member" }
          ].map((desk, dIdx) => (
            <a
              key={dIdx}
              href={desk.hash}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-[#002b49] hover:text-white text-slate-700 transition"
            >
              {desk.label}
            </a>
          ))}
        </div>

        <div className="space-y-10">
          {LEADERSHIP_MESSAGES.map((leader, idx) => {
            const getLeaderAnchorId = (role) => {
              const r = role.toLowerCase();
              if (r.includes('chairman')) return 'chairman';
              if (r.includes('managing director')) return 'managing-director';
              if (r.includes('director')) return 'director';
              if (r.includes('manager')) return 'manager';
              if (r.includes('principal')) return 'principal';
              if (r.includes('member')) return 'member';
              return `leader-${idx}`;
            };

            const anchorId = getLeaderAnchorId(leader.role);

            return (
              <div
                key={idx}
                id={anchorId}
                className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center text-left"
              >
                {/* Leader Portrait & Official Identity */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
                  <div className="w-48 sm:w-52 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-500/40 mb-5 bg-slate-900 shrink-0 relative group">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded shadow-xs inline-block">
                        The Oxford School
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-md">
                    {leader.role}
                  </span>
                  
                  <h3 className="text-2xl font-serif font-bold text-[#002b49] mt-2 leading-tight">
                    {leader.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-slate-500 mt-1 leading-snug">
                    {leader.qualification}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400 w-full">
                    Senior Management Council
                  </div>
                </div>

                {/* Leader Quote & Authentic Message */}
                <div className="lg:col-span-8 space-y-5 text-left">
                  <blockquote className="text-sm sm:text-base font-serif font-medium text-slate-900 italic bg-amber-50/70 p-5 sm:p-6 rounded-2xl border-l-4 border-amber-500 leading-relaxed text-left shadow-xs">
                    "{leader.quote}"
                  </blockquote>

                  <div className="space-y-4 text-sm text-slate-700 leading-relaxed text-left">
                    <p>{leader.message}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                      <span className="font-semibold text-slate-700">Official Desk Communication</span>
                    </div>
                    <span className="italic text-slate-400">Roshnabad, Haridwar</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* House System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="houses">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
            Fostering Camaraderie &amp; Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
            The Oxford Four Houses
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every student and teacher belongs to one of four historic houses, encouraging healthy inter-house competition in sports, academics, debates, and community service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {houses.map((house, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 border-2 ${house.borderColor} shadow-sm flex flex-col justify-between text-left`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${house.color} text-white flex items-center justify-center font-bold text-sm mb-4 shrink-0`}>
                  {house.name[0]}
                </div>
                <h4 className={`text-lg font-bold font-serif ${house.textColor}`}>
                  {house.name}
                </h4>
                <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider mt-1">
                  Motto: {house.motto}
                </div>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {house.significance}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Inter-House Trophy Participant
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl p-8 text-center border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold font-serif text-[#002b49]">
            Would you like to experience The Oxford School in person?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Our campus at Roshnabad is open for prospective parent interactions on all working days from 8:00 AM to 2:30 PM.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-2.5 bg-[#002b49] hover:bg-[#003b63] text-white rounded-xl text-xs font-bold transition shadow cursor-pointer"
            >
              Schedule Campus Visit / Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
