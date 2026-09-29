import React, { useState, useEffect, useRef } from 'react';
import { 
  PartyPopper, Sparkles, Calendar, ChevronRight, 
  ArrowRight, Award, Play, UserCheck, 
  X, Newspaper, PenTool 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getDailyBirthdays } from '../data/schoolData';

export default function NoticeBoardAndBirthday({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const birthdaySectionRef = useRef(null);
  const hasTriggeredConfetti = useRef(false);

  const birthdays = getDailyBirthdays();

  // Trigger party popper confetti celebration
  const fireBirthdayPopper = () => {
    try {
      // First burst
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { x: 0.25, y: 0.65 },
        colors: ['#f59e0b', '#002b49', '#3b82f6', '#10b981', '#fbbf24']
      });
      // Second burst
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { x: 0.75, y: 0.65 },
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
      { threshold: 0.3 }
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
      isVideo: true,
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
      isVideo: false,
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
      isVideo: false,
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
      isVideo: false,
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
    <section ref={birthdaySectionRef} className="py-12 bg-slate-50 border-y border-slate-200 text-left">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* 1. Daily Birthday Celebration Card - 4 Columns */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#002b49] via-[#001e33] to-[#001322] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-amber-500/25 relative overflow-hidden flex flex-col justify-between text-left">
            {/* Ambient gold glow */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner shrink-0">
                    <PartyPopper className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5 leading-tight">
                      <span>Today's Birthdays</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </h3>
                    <p className="text-[11px] text-amber-200/80">Warm Wishes from The Oxford Family</p>
                  </div>
                </div>

                {/* Date & Interactive Popper Button */}
                <button
                  onClick={fireBirthdayPopper}
                  className="px-2.5 py-1 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-extrabold flex items-center gap-1 shadow-sm transition-transform active:scale-95 cursor-pointer"
                  title="Click to celebrate with Party Popper!"
                >
                  <PartyPopper className="w-3.5 h-3.5" />
                  <span>Wish!</span>
                </button>
              </div>

              {/* Birthday Students List with Authentic Photos */}
              <div className="space-y-3">
                {birthdays.map((student) => (
                  <div 
                    key={student.id}
                    onClick={fireBirthdayPopper}
                    className="bg-white/5 hover:bg-white/10 transition-all rounded-xl p-3 border border-white/10 hover:border-amber-400/60 flex items-center justify-between gap-3 group text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Authentic Student Photo */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0 bg-slate-800 relative group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={student.photo} 
                          alt={student.name} 
                          className="w-full h-full object-cover object-top" 
                        />
                      </div>
                      
                      {/* Name, Class & House Details */}
                      <div className="text-left min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-tight truncate">
                          {student.name}
                        </h4>
                        <div className="text-xs sm:text-sm font-semibold text-amber-300 mt-0.5">
                          {student.class}
                        </div>
                        <div className="text-[11px] text-slate-300 font-medium">
                          {student.house}
                        </div>
                      </div>
                    </div>
                    
                    {/* Birthday Badge */}
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/50 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        <Sparkles className="w-3 h-3 text-amber-400 group-hover:text-slate-950" />
                        <span>Today</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* School Birthday Blessing */}
            <div className="mt-4 pt-3.5 border-t border-white/10 text-center">
              <p className="text-[11px] sm:text-xs text-amber-200/90 italic leading-relaxed">
                "May your journey of learning be filled with wisdom, radiant health, and purposeful achievements."
              </p>
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>The Oxford School Management &amp; Faculty</span>
              </div>
            </div>
          </div>

          {/* 2. School News & Student Journalism Portal - 8 Columns */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 flex flex-col justify-between text-left">
            <div>
              {/* Top Portal Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#002b49] text-amber-400 flex items-center justify-center shadow-sm shrink-0">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#002b49] flex items-center gap-2">
                      <span>School News &amp; Student Gazette</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Live Portal
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Student journalism, STEM breakthroughs, athletic matches &amp; official circulars
                    </p>
                  </div>
                </div>

                {/* Submit Article / Guidance CTA */}
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="self-start sm:self-auto px-3 py-1.5 bg-slate-100 hover:bg-[#002b49] hover:text-white text-[#002b49] rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-slate-200 cursor-pointer shadow-xs"
                >
                  <PenTool className="w-3.5 h-3.5 text-amber-600 group-hover:text-amber-400" />
                  <span>Submit Article</span>
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#002b49] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* News Articles List with Real Photos & Student Recognition */}
              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {filteredNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedArticle(item)}
                    className="p-3 rounded-xl border border-slate-200/90 hover:border-[#002b49] hover:bg-slate-50 transition cursor-pointer flex flex-col sm:flex-row gap-3.5 items-start sm:items-center justify-between group text-left"
                  >
                    {/* Left: Thumbnail with Video/Photo Badge */}
                    <div className="relative w-full sm:w-28 sm:h-20 h-36 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      {item.isVideo && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-md">
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </div>
                        </div>
                      )}
                      <span className="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                        {item.badge}
                      </span>
                    </div>

                    {/* Middle: Content & Prominent Student Attribution */}
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                        <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded text-[10px]">
                          {item.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {item.date}
                        </span>
                        <span>•</span>
                        <span className="text-slate-500 font-medium">{item.readTime}</span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#002b49] transition-colors line-clamp-1 leading-snug">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-600 line-clamp-1 mt-1 leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Student Reporter Credit Box (Acknowledging Student's Hard Work) */}
                      <div className="mt-2 flex items-center gap-2 text-[11px] text-[#002b49] bg-amber-50/70 border border-amber-200/60 px-2.5 py-1 rounded-md">
                        <UserCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span className="truncate">
                          <strong>Reported By:</strong> {item.studentAuthor.name} ({item.studentAuthor.class}) • <em className="text-slate-600 not-italic">{item.studentAuthor.role}</em>
                        </span>
                      </div>
                    </div>

                    {/* Right: Quick Action Button */}
                    <div className="self-end sm:self-center shrink-0">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#002b49] group-hover:text-amber-600 transition">
                        <span>Read Story</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Bar: Enquiry Desk Note */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
              <span>Have an academic or campus enquiry?</span>
              <button
                onClick={onOpenEnquiry}
                className="font-bold text-[#002b49] hover:text-amber-600 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Connect with Admission &amp; Academic Desk</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 3. Interactive Article Reading Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Image Banner */}
            <div className="relative h-64 rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded inline-block mb-1">
                  {selectedArticle.category}
                </span>
                <p className="text-xs text-slate-200 flex items-center gap-2">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </p>
              </div>
            </div>

            {/* Article Headline */}
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002b49] leading-snug">
              {selectedArticle.title}
            </h3>

            {/* Student Journalist Recognition Card */}
            <div className="my-4 bg-amber-50/90 border border-amber-200 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                <PenTool className="w-5 h-5" />
              </div>
              <div className="text-xs text-left">
                <span className="font-extrabold text-amber-900 uppercase tracking-wider text-[10px] block">
                  Student Journalism &amp; Editorial Recognition
                </span>
                <p className="text-slate-800 font-bold mt-0.5">
                  Authored by: {selectedArticle.studentAuthor.name} ({selectedArticle.studentAuthor.class})
                </p>
                <p className="text-slate-600 text-[11px]">
                  {selectedArticle.studentAuthor.role} • {selectedArticle.studentAuthor.house}
                </p>
              </div>
            </div>

            {/* Article Full Body */}
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed pt-2">
              {selectedArticle.content.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                The Oxford School Gazette • Haridwar
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-[#002b49] hover:bg-[#00385e] text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Student Article Submission Guidance Modal */}
      {showSubmitModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setShowSubmitModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold">
                <PenTool className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002b49]">Student Journalism Desk</h3>
                <p className="text-xs text-slate-500">How scholars publish stories in The Oxford Gazette</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                At <strong>The Oxford School</strong>, we encourage students to report on science discoveries, inter-house matches, creative writing, and school events.
              </p>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                  <span>Draft your news report, interview, or event summary (150–300 words).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                  <span>Attach 1–2 authentic photos or experiment results from campus.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                  <span>Submit to your House English Teacher or email to <strong>theoxfordschoolharidwar@gmail.com</strong>.</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Selected articles are published online with the student's name, class, and photograph on this portal!
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 bg-[#002b49] text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
