import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShieldCheck, Award, Target, Compass, Sparkles, ArrowRight } from 'lucide-react';
import OxfordCrestLogo from '../components/OxfordCrestLogo';
import { LEADERSHIP_MESSAGES, SCHOOL_INFO } from '../data/schoolData';

interface AboutProps {
  onOpenEnquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  const { section } = useParams<{ section?: string }>();

  useEffect(() => {
    if (section) {
      const targetId = section.toLowerCase();
      const scrollToTarget = () => {
        const el = document.getElementById(targetId);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToTarget()) {
        const timer1 = setTimeout(scrollToTarget, 120);
        const timer2 = setTimeout(scrollToTarget, 400);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    }
  }, [section]);

  const getLeaderId = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes('chairman')) return 'chairman';
    if (r.includes('managing director')) return 'managing-director';
    if (r.includes('director')) return 'director';
    if (r.includes('manager')) return 'manager';
    if (r.includes('principal')) return 'principal';
    if (r.includes('member')) return 'member';
    return r.replace(/[^a-z0-9]/g, '-');
  };

  const houses = [
    {
      name: "Ganga House",
      color: "Blue",
      badgeColor: "border-sky-300 text-sky-800 bg-sky-50",
      motto: "Purity of Purpose, Flow of Excellence",
      virtue: "Integrity & Tenacity",
      desc: "Inspired by the sacred river that flows through Haridwar, Ganga House embodies relentless flow towards success, calm discipline, and moral integrity."
    },
    {
      name: "Yamuna House",
      color: "Yellow / Gold",
      badgeColor: "border-amber-300 text-amber-800 bg-amber-50",
      motto: "Resilience in Action, Radiant in Character",
      virtue: "Adaptability & Radiance",
      desc: "Characterized by boundless energy, creativity, and the warmth of collective spirit, Yamuna House scholars stand out in academics and performing arts."
    },
    {
      name: "Kaveri House",
      color: "Green",
      badgeColor: "border-emerald-300 text-emerald-800 bg-emerald-50",
      motto: "Nurturing Growth, Grounded in Values",
      virtue: "Compassion & Stewardship",
      desc: "Symbolizing perpetual rejuvenation and fertile intellect, Kaveri House champions environmental consciousness, athletics, and community leadership."
    },
    {
      name: "Saraswati House",
      color: "Red / Crimson",
      badgeColor: "border-rose-300 text-rose-800 bg-rose-50",
      motto: "Seeker of Wisdom, Torchbearer of Truth",
      virtue: "Wisdom & Innovation",
      desc: "Dedicated to the deity of knowledge and fine arts, Saraswati House scholars continually excel in scientific inquiry, debates, and literature."
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-slate-200 rounded-full text-xs text-[#002b49] font-semibold shadow-sm">
            <OxfordCrestLogo className="w-4 h-4 text-[#002b49]" />
            <span>Legacy of The Oxford School</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            About Our Institution
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded with the conviction that education must enlighten the spirit and empower the mind, The Oxford School, Haridwar is a premier CBSE affiliated institution (Affiliation No. {SCHOOL_INFO.affiliationNo}) in Roshnabad.
          </p>
        </div>

        {/* Vision, Mission, Motto */}
        <div id="vision" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left scroll-mt-24">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-xl btn-cut-sm text-[#002b49]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-wide">Our Vision</h3>
            <p className="text-xs leading-relaxed text-slate-600">
              To be a premier center of holistic academic excellence that nurtures intellectually vibrant, emotionally balanced, and morally courageous global citizens.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-xl btn-cut-sm text-[#002b49]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-wide">Our Mission</h3>
            <p className="text-xs leading-relaxed text-slate-600">
              To impart comprehensive CBSE curriculum integrated with modern STEM robotics, arts, sports, and ethical values, ensuring every child discovers their highest human potential.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-xl btn-cut-sm text-[#002b49]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-wide">Our Motto</h3>
            <p className="text-xs leading-relaxed text-slate-600">
              <span className="font-bold text-[#002b49] block text-sm mb-1">"Strive and Soar High"</span>
              Encouraging students to persevere through every academic and life challenge with unwavering confidence, integrity, and self-belief.
            </p>
          </div>
        </div>

        {/* Leadership Desk Detailed */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Visionary Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              From the Desks of Leadership
            </h2>
          </div>

          <div className="space-y-12">
            {LEADERSHIP_MESSAGES.map((leader) => {
              const id = getLeaderId(leader.role);
              return (
                <div
                  key={leader.name}
                  id={id}
                  className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left scroll-mt-24"
                >
                  <div className="lg:col-span-4 aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#002b49] block">
                        {leader.role}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{leader.qualification}</p>
                    </div>

                    <blockquote className="p-4 bg-slate-50 border-l-3 border-[#002b49] text-xs italic text-slate-700 rounded-r-lg">
                      "{leader.quote}"
                    </blockquote>

                    <p className="text-xs leading-relaxed text-slate-600">
                      {leader.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 10-Year Milestones Timeline */}
        <div id="milestones" className="mb-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Decade of Academic Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Milestones of Growth (2014 – 2025)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-2xl font-mono font-bold text-[#002b49]">2014</span>
              <h4 className="text-base font-bold text-slate-900">Founding & Inception</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Established in Shiv Ratan City, Roshnabad with foundational pre-primary and primary classrooms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-2xl font-mono font-bold text-[#002b49]">2018</span>
              <h4 className="text-base font-bold text-slate-900">CBSE Affiliation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Awarded official affiliation by CBSE New Delhi (Affiliation No. {SCHOOL_INFO.affiliationNo}) for Secondary Schooling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-2xl font-mono font-bold text-[#002b49]">2021</span>
              <h4 className="text-base font-bold text-slate-900">Senior Secondary & Labs</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upgraded to Senior Secondary Class XII with dedicated Physics, Chemistry, Biology and Computer labs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-2xl font-mono font-bold text-[#002b49]">2024–25</span>
              <h4 className="text-base font-bold text-slate-900">STEM & Robotics Era</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inauguration of modern Robotics & AI Lab, Abacus Vedic Math Center, and GPS monitored bus fleet of 18+ vehicles.
              </p>
            </div>
          </div>
        </div>

        {/* The House System */}
        <div id="houses" className="mb-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Student Governance & Camaraderie
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              The Four Houses
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Fostering healthy rivalry, teamwork, and leadership through inter-house athletic meets, debates, science exhibitions, and cultural fests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {houses.map((h) => (
              <div
                key={h.name}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div className="space-y-3">
                  <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase rounded-md border ${h.badgeColor}`}>
                    {h.color}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{h.name}</h3>
                  <p className="text-[11px] font-semibold text-slate-700 italic">
                    "{h.motto}"
                  </p>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {h.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                  Core Virtue: <span className="text-[#002b49] font-semibold">{h.virtue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white border border-slate-200 p-10 rounded-2xl max-w-4xl mx-auto space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">
            Experience Our Campus in Roshnabad
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            We welcome parents and students for an interactive campus walk-through and consultation with our academic mentors.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="px-6 py-3 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] cursor-pointer shadow-md"
            >
              Apply Online
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 text-[#002b49] text-xs font-semibold uppercase tracking-wider btn-cut-border hover:bg-slate-100"
            >
              <span>Contact Desk</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
