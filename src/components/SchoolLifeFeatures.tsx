import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy, Clock, BookOpen, Compass, Award,
  Users, Sparkles, CheckCircle2, ArrowRight,
  Download, ExternalLink, ShieldCheck, Bus, Heart
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const SchoolLifeFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'houses' | 'schedule' | 'streams' | 'clubs'>('houses');

  // Live House Points Table
  const housePoints = [
    {
      name: "Kaveri House",
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      points: 1450,
      trophy: "Current Leader",
      breakdown: { sports: 420, academics: 380, cultural: 360, discipline: 290 }
    },
    {
      name: "Ganga House",
      color: "bg-sky-600",
      lightColor: "bg-sky-50 text-sky-800 border-sky-300",
      points: 1420,
      trophy: "Runner Up",
      breakdown: { sports: 390, academics: 410, cultural: 340, discipline: 280 }
    },
    {
      name: "Saraswati House",
      color: "bg-rose-600",
      lightColor: "bg-rose-50 text-rose-800 border-rose-300",
      points: 1390,
      trophy: "3rd Position",
      breakdown: { sports: 360, academics: 420, cultural: 330, discipline: 280 }
    },
    {
      name: "Yamuna House",
      color: "bg-amber-500",
      lightColor: "bg-amber-50 text-amber-800 border-amber-300",
      points: 1385,
      trophy: "4th Position",
      breakdown: { sports: 370, academics: 365, cultural: 380, discipline: 270 }
    }
  ];

  // Daily Bell Schedule
  const dailySchedule = [
    { time: "07:45 AM - 08:00 AM", title: "Campus Arrival & Bus Influx", desc: "Safe GPS monitored bus arrivals and assembly gate entry." },
    { time: "08:00 AM - 08:30 AM", title: "Morning Assembly & Value Talk", desc: "Prayer, national anthem, news reading, and student thought sharing." },
    { time: "08:30 AM - 11:15 AM", title: "Core Academic Periods (1 to 4)", desc: "Interactive smart board teaching in English, Science, Mathematics & Social Studies." },
    { time: "11:15 AM - 11:45 AM", title: "Nutrition & Healthy Tiffin Break", desc: "Monitored dining, hydration checks, and outdoor supervised recreation." },
    { time: "11:45 AM - 01:30 PM", title: "STEM Labs, Practicals & Languages", desc: "Robotics coding, Science laboratory experiments, and Hindi/Sanskrit/Computer sessions." },
    { time: "01:30 PM - 02:15 PM", title: "Sports, Martial Arts & Clubs", desc: "Athletics, Cricket, Basketball, Karate dojo, and Abacus mental drills." },
    { time: "02:15 PM - 02:30 PM", title: "Evening Prayer & Safe Dispersal", desc: "Attendant-escorted bus boarding with live parent transit notifications." }
  ];

  // Academic Stages
  const academicStages = [
    {
      stage: "Foundational (Pre-Primary)",
      grades: "Playgroup, Nursery, LKG, UKG",
      focus: "Play-way methodology, sensory exploration, phonics, number recognition, and social emotional grooming.",
      badge: "Ages 3 to 6"
    },
    {
      stage: "Preparatory (Primary)",
      grades: "Class I to V",
      focus: "Reading fluency, foundational arithmetic, environmental studies, bilingual vocabulary, and daily Abacus drills.",
      badge: "Ages 6 to 11"
    },
    {
      stage: "Middle School",
      grades: "Class VI to VIII",
      focus: "Conceptual sciences, algebraic thinking, basic coding and robotics, social sciences, and inter-house debates.",
      badge: "Ages 11 to 14"
    },
    {
      stage: "Secondary School",
      grades: "Class IX & X (CBSE AISSE)",
      focus: "Rigorous board preparation, NCERT mastery, internal assessment portfolios, and career aptitude counselling.",
      badge: "Board Exam Batch"
    },
    {
      stage: "Senior Secondary Streams",
      grades: "Class XI & XII (CBSE AISSCE)",
      focus: "Specialized streams in Science (PCM / PCB), Commerce & Humanities with integrated competitive testing guidance (JEE / NEET / CUET).",
      badge: "100% Board Track"
    }
  ];

  // Co-Curricular Clubs
  const clubs = [
    { name: "Robotics & AI Guild", icon: "🤖", desc: "Arduino prototypes, autonomous rovers, and sensor-based electronics projects." },
    { name: "Vedic Maths & Abacus", icon: "🧮", desc: "Speed mental arithmetic calculations, spatial memory drills, and Olympiad prep." },
    { name: "Karate & Self-Defense", icon: "🥋", desc: "Discipline, physical endurance, and belt advancement under black-belt masters." },
    { name: "Eco & Green Warriors", icon: "🌱", desc: "Campus gardening, botanical tagging, plastic-free drives, and bird feeders." },
    { name: "Literary & Debate Society", icon: "🎙️", desc: "Elocution contests, creative journalism, model assemblies, and quiz bowls." },
    { name: "Performing Arts & Music", icon: "🎭", desc: "Indian classical dance, choir rehearsals, theatre dramas, and annual fest shows." }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
            The Vibrant Student Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Inside The Oxford School
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            Beyond textbooks: An energetic ecosystem of student leadership, inter-house championships, structured routines, and creative clubs.
          </p>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('houses')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'houses'
                  ? 'bg-[#002b49] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Inter-House Leaderboard</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('schedule')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'schedule'
                  ? 'bg-[#002b49] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Daily Bell Routine</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('streams')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'streams'
                  ? 'bg-[#002b49] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academic Stages</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('clubs')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'clubs'
                  ? 'bg-[#002b49] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Co-Curricular Clubs</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Inter-House Leaderboard */}
        {activeTab === 'houses' && (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#002b49]">
                  Academic Year 2024–25 Tally
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                  Inter-House Rolling Shield Leaderboard
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Updated after Sports Preliminaries</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {housePoints.map((house) => (
                <div
                  key={house.name}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-md border ${house.lightColor}`}>
                        {house.trophy}
                      </span>
                      <Trophy className="w-4 h-4 text-amber-500" />
                    </div>

                    <h4 className="text-xl font-bold text-slate-900">{house.name}</h4>
                    <div className="text-3xl font-extrabold text-[#002b49] tracking-tight my-2">
                      {house.points} <span className="text-xs font-medium text-slate-500">pts</span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                      <div
                        className={`${house.color} h-2 rounded-full`}
                        style={{ width: `${(house.points / 1500) * 100}%` }}
                      />
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                      <div className="flex justify-between">
                        <span>Sports & Athletics:</span>
                        <strong className="text-slate-800">{house.breakdown.sports}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Academic Honors:</span>
                        <strong className="text-slate-800">{house.breakdown.academics}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Cultural & Debates:</span>
                        <strong className="text-slate-800">{house.breakdown.cultural}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Discipline & Assembly:</span>
                        <strong className="text-slate-800">{house.breakdown.discipline}</strong>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/about#houses"
                    className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#002b49] hover:underline flex items-center justify-between"
                  >
                    <span>View House History</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Daily Bell Schedule */}
        {activeTab === 'schedule' && (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#002b49]">
                Structured Campus Life
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                Daily School Routine & Bell Timings
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                A disciplined yet joyful schedule balancing academic rigor, nutritious breaks, laboratory discovery, and sports.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dailySchedule.map((slot, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2"
                >
                  <span className="px-2.5 py-0.5 bg-[#002b49] text-white text-[10px] font-bold uppercase rounded font-mono">
                    {slot.time}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {slot.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {slot.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Academic Stages & Streams */}
        {activeTab === 'streams' && (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#002b49]">
                Nursery to Class XII Continuum
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                Academic Stages & Senior Streams
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Progressive CBSE pedagogy structured according to child development psychology and modern career readiness.
              </p>
            </div>

            <div className="space-y-4">
              {academicStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1 md:max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-slate-100 text-[#002b49] text-[10px] font-bold uppercase rounded border border-slate-200">
                        {stage.badge}
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        {stage.stage}
                      </h4>
                    </div>
                    <div className="text-xs font-semibold text-[#002b49]">
                      Grades: {stage.grades}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {stage.focus}
                    </p>
                  </div>

                  <Link
                    to="/admissions"
                    className="px-4 py-2 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] text-center shrink-0"
                  >
                    Admissions
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Co-Curricular Clubs */}
        {activeTab === 'clubs' && (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#002b49]">
                Special Interest Guilds
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                Co-Curricular Clubs & Passion Studios
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Every Friday afternoon, scholars step into specialized studios to build robots, master Vedic shortcuts, perform martial arts, or paint.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((c) => (
                <div
                  key={c.name}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition"
                >
                  <div className="text-3xl shrink-0 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{c.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Student & Parent Resources Strip */}
        <div className="mt-12 bg-gradient-to-r from-[#002b49] to-[#003e6b] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-300">
              Quick Downloads & Resources
            </span>
            <h3 className="text-xl font-bold text-white">
              Student Handbook, Booklists & ERP Mobile App
            </h3>
            <p className="text-xs text-slate-200">
              Access official academic calendars, CBSE circulars, uniform guidelines, and bus routes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SCHOOL_INFO.studentLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white text-[#002b49] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-100 flex items-center gap-1.5 shadow"
            >
              <span>Edunext ERP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/cbse-disclosure"
              className="px-4 py-2.5 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-white/20 border border-white/20"
            >
              CBSE Documents
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLifeFeatures;
