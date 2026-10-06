import React, { useState, useEffect, useRef } from 'react';
import {
  PartyPopper, Sparkles, Calendar, ChevronRight,
  ArrowRight, Award, Play, UserCheck,
  X, Newspaper, PenTool, BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getDailyBirthdays } from '../data/schoolData';

interface NoticeBoardAndBirthdayProps {
  onOpenEnquiry?: () => void;
}

export const NoticeBoardAndBirthday: React.FC<NoticeBoardAndBirthdayProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const birthdaySectionRef = useRef<HTMLDivElement | null>(null);
  const hasTriggeredConfetti = useRef<boolean>(false);

  const birthdays = getDailyBirthdays();

  // Trigger party popper confetti celebration
  const fireBirthdayPopper = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { x: 0.3, y: 0.65 },
        colors: ['#f59e0b', '#002b49', '#0284c7', '#10b981', '#fbbf24']
      });
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { x: 0.7, y: 0.65 },
        colors: ['#f59e0b', '#d97706', '#0284c7', '#ec4899', '#6366f1']
      });
    } catch (e) {
      console.warn("Confetti effect unavailable", e);
    }
  };

  // Trigger automatically when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredConfetti.current) {
            hasTriggeredConfetti.current = true;
            setTimeout(() => {
              fireBirthdayPopper();
            }, 300);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (birthdaySectionRef.current) {
      observer.observe(birthdaySectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Rich School News & Student Journalism Items
  const schoolNewsStories = [
    {
      id: "news-stem-1",
      title: "Robotics Squad Qualifies for State STEM Championship with Autonomous Rover",
      category: "Student Articles",
      date: "24 Feb 2025",
      readTime: "3 min read",
      image: "/images/robotics_real_1.jpg",
      badge: "Featured Story",
      studentAuthor: {
        name: "Aarav Negi",
        class: "Class XI-Science",
        role: "Chief Student Reporter & Robotics Club Lead",
        house: "Ganga House"
      },
      summary: "Under the mentorship of the STEM department, our student robotics team designed and calibrated an obstacle-avoiding Arduino rover that clocked the highest precision run in the regional qualifiers.",
      content: `Our school's robotics laboratory was abuzz with excitement this month as students from Classes IX through XI completed prototyping of 'Prahar-1', an autonomous sensor-driven rover.

Equipped with ultrasonic distance sensors, multi-channel motor drivers, and customized C++ routines, the bot demonstrated automated path-tracking without human intervention. The project was submitted to the Uttarakhand State Inter-School Science & Innovation Conclave, where judges praised the students' algorithmic logic and clean wiring standards.

Speaking about the experience, project contributor Aarav Negi said: "Having dedicated lab hours and hands-on sensor kits at The Oxford School enabled us to troubleshoot hardware bugs ourselves. We learned how teamwork and iterative testing lead to real breakthroughs."

The school administration congratulated the young tech innovators and announced special sponsorship for the upcoming state championship finals.`
    },
    {
      id: "news-sports-2",
      title: "Inter-House Athletic Trials: Kaveri House Takes Early Lead in Sprint Heats",
      category: "Sports Reports",
      date: "20 Feb 2025",
      readTime: "2 min read",
      image: "/images/sports_ground_1.jpg",
      badge: "Campus Sports",
      studentAuthor: {
        name: "Pooja Bisht",
        class: "Class X-B",
        role: "Sports Editorial Correspondent",
        house: "Kaveri House"
      },
      summary: "Excitement surged across the campus sports complex as track athletes from Ganga, Yamuna, Kaveri, and Saraswati houses competed in the 100m, 200m, and 4x100m relay preliminaries.",
      content: `The annual athletic trials kicked off on a high-energy note this Thursday under clear skies at The Oxford School sports grounds.

Kaveri House grabbed the early points lead following stellar sprint performances by senior and junior scholars. Notable highlights included a sub-12 second 100m dash by Rohan Rawat (Class XI) and a thrilling photo-finish in the girls' 200m sprint heats.

Physical Education teachers lauded the discipline, sportsmanship, and fair-play spirit displayed by all participants. The grand finals and medal distribution will take place during the Annual Sports Day meet next week.`
    },
    {
      id: "news-chem-3",
      title: "Science Society Conducts Practical Workshop on Eco-Friendly Chemistry",
      category: "Science & STEM",
      date: "16 Feb 2025",
      readTime: "3 min read",
      image: "/images/chemlab_1.jpg",
      badge: "Young Scientists",
      studentAuthor: {
        name: "Aryan Sharma",
        class: "Class XII-Science",
        role: "Senior Science Society Member",
        house: "Yamuna House"
      },
      summary: "Senior secondary scholars demonstrated zero-waste titration techniques and natural pH indicators prepared from floral extracts in the senior chemistry laboratory.",
      content: `Fostering environmental responsibility inside science labs, the Chemistry Club organized an insightful session on Green Chemistry principles.

Students prepared bio-indicators using beetroot, turmeric, and hibiscus petals to test acidity in everyday household substances. By scaling down reagent volumes, the batch successfully minimized chemical waste by over 40% while preserving standard observation accuracy.

"Seeing textbooks come alive in front of us while learning to care for nature makes chemistry infinitely more fascinating," noted student author Aryan Sharma.`
    },
    {
      id: "news-cbse-4",
      title: "CBSE AISSE & AISSCE Board Practical Schedule & Guidelines Released",
      category: "CBSE Circulars",
      date: "12 Feb 2025",
      readTime: "2 min read",
      image: "/images/academics_real.jpg",
      badge: "Official Notice",
      studentAuthor: {
        name: "Editorial Desk",
        class: "Administrative Office",
        role: "CBSE Examination Wing",
        house: "Central Office"
      },
      summary: "Practical examination schedules, batch timings, and official board admit cards are now available for Classes X and XII candidates at the school administrative counter.",
      content: `The Central Board of Secondary Education (CBSE) Class X and Class XII Board Examination 2025 guidelines have been formally communicated.

Candidates must carry their original admit cards stamped by the Principal. External board examiners will assess Physics, Chemistry, Biology, and Computer Science practicals as per the assigned roll numbers. Parents are advised to ensure punctuality and strict adherence to school uniform norms.`
    }
  ];

  const categories = ['All', 'Student Articles', 'Science & STEM', 'Sports Reports', 'CBSE Circulars'];

  const filteredNews = activeCategory === 'All'
    ? schoolNewsStories
    : schoolNewsStories.filter(story => story.category === activeCategory);

  return (
    <section ref={birthdaySectionRef} className="py-16 bg-[#f8fafc] border-y border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Campus Community & News
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
              The Oxford Chronicle & Birthdays
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
              Celebrating our students' milestones, daily achievements, and campus journalism from inside classrooms and sports grounds.
            </p>
          </div>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#002b49] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Left Birthday Card + Right Chronicle Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 1. Daily Birthday Celebration Card (4 Columns) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#001a2e] via-[#002b49] to-[#003e6b] rounded-2xl p-6 text-white shadow-xl border border-amber-400/30 relative overflow-hidden flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <PartyPopper className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <span>Today's Birthdays</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </h3>
                    <p className="text-[11px] text-amber-200/80">Warm Wishes from The Oxford Family</p>
                  </div>
                </div>

                {/* Confetti Popper Button */}
                <button
                  type="button"
                  onClick={fireBirthdayPopper}
                  className="btn-base btn-sm btn-accent"
                  title="Click to celebrate with Party Popper!"
                >
                  <PartyPopper className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Wish!</span>
                </button>
              </div>

              {/* Students List with Real Photos */}
              <div className="space-y-3">
                {birthdays.map((student) => (
                  <div
                    key={student.id}
                    onClick={fireBirthdayPopper}
                    className="bg-white/10 hover:bg-white/15 transition-all rounded-xl p-3 border border-white/15 hover:border-amber-400/60 flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0 bg-slate-800">
                        <img
                          src={student.photo}
                          alt={student.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition truncate">
                          {student.name}
                        </h4>
                        <div className="text-xs font-semibold text-amber-300 mt-0.5">
                          {student.class}
                        </div>
                        <div className="text-[11px] text-slate-300">
                          {student.house}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-1 rounded-full shrink-0 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Today</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Birthday Blessing */}
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <p className="text-xs text-amber-200/90 italic leading-relaxed">
                "May your journey of learning be filled with wisdom, radiant health, and purposeful achievements."
              </p>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>The Oxford School Family</span>
              </div>
            </div>
          </div>

          {/* 2. Oxford Chronicle Stories (8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredNews.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedArticle(story)}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#002b49] text-white text-[10px] font-bold uppercase rounded-md shadow-sm">
                        {story.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{story.date}</span>
                      <span>{story.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#002b49] transition leading-snug line-clamp-2">
                      {story.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {story.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    By <span className="font-semibold text-slate-800">{story.studentAuthor.name}</span> ({story.studentAuthor.house})
                  </div>
                  <span className="text-xs text-[#002b49] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Full View Modal */}
      {selectedArticle && (
        <div
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase font-bold tracking-wider text-[#002b49] block">
              {selectedArticle.category} • {selectedArticle.date}
            </span>

            <h2 className="text-2xl font-bold text-slate-900 mt-2 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
              <span>Reported by: <strong>{selectedArticle.studentAuthor.name}</strong> ({selectedArticle.studentAuthor.class})</span>
              <span>•</span>
              <span>{selectedArticle.studentAuthor.house}</span>
            </div>

            <div className="my-5 aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
              {selectedArticle.content}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-[#002b49] text-white text-xs font-semibold uppercase btn-cut"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NoticeBoardAndBirthday;
