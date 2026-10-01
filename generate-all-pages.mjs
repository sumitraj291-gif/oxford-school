import fs from 'fs';
import path from 'path';
import { renderPageShell } from './generate-shell.mjs';
import {
  generateChairmanPage,
  generateManagingDirectorPage,
  generatePrincipalPage,
  generateVisionMissionPage,
  generateHousesPage,
  generateAdmissionProcedurePage,
  generateEligibilityCriteriaPage,
  generateFeeGuidelinesPage,
  generateOnlineEnquiryPage,
  generateRoboticsLabPage,
  generateScienceLabsPage,
  generateComputerLabPage,
  generateSportsComplexPage,
  generateTransportPage,
  generateResultsPage,
  generateCurriculumPage
} from './generate-subpages.mjs';
import {
  KEY_METRICS,
  getDailyBirthdays,
  LEADERSHIP_MESSAGES,
  BOARD_RESULTS,
  FACILITIES_DATA,
  ADMISSION_STEPS,
  AGE_CRITERIA,
  CAREER_OPENINGS,
  PARENT_TESTIMONIALS,
  CBSE_DISCLOSURE_DOCS
} from './src/data/schoolData.js';

// ==========================================
// 1. GENERATE INDEX.HTML (HOME PAGE)
// ==========================================
function generateHomePage() {
  const birthdays = getDailyBirthdays();

  const featuredNews = [
    {
      id: "news-1",
      title: "Admissions Open for Academic Session 2026-27 (Playgroup to Class XII)",
      date: "February 2025",
      category: "Admissions",
      badge: "Active",
      summary: "Registration prospectus and online enquiry forms are now open for Pre-Primary, Middle, and Senior Secondary classes (Science, Commerce, Humanities).",
      actionText: "Apply Online",
      isEnquiry: true
    },
    {
      id: "news-2",
      title: "CBSE Board Examination Class X & XII Admit Cards & Guidelines",
      date: "February 2025",
      category: "CBSE Notice",
      badge: "Important",
      summary: "Official admit cards and practical examination schedules for CBSE AISSE (Class X) and AISSCE (Class XII) are available at the administrative office.",
      actionText: "View Guidelines",
      isEnquiry: false
    },
    {
      id: "news-3",
      title: "Annual Sports Meet & Inter-House Athletic Championship Heats",
      date: "January 2025",
      category: "Sports",
      badge: "Event",
      summary: "Inter-House athletic track & field trials commence for Ganga, Yamuna, Kaveri, and Saraswati houses at the campus sports complex.",
      actionText: "View Schedule",
      isEnquiry: false
    },
    {
      id: "news-4",
      title: "STEM, Robotics & Science Innovation Exhibition 'Pratibha'",
      date: "January 2025",
      category: "Exhibition",
      badge: "Campus",
      summary: "Scholars showcase hands-on Arduino robotics projects, AI algorithms, chemistry experiments, and Vedic mathematics shortcuts.",
      actionText: "Read More",
      isEnquiry: false
    }
  ];

  const content = `
  <!-- 1. Cinematic Hero Banner Section (Natural Background Video with Zooming School Title & Bottom Sleek Admission Button) -->
  <section class="relative h-[500px] sm:h-[560px] lg:h-[640px] w-full flex items-center justify-center overflow-hidden bg-black text-center">
    <!-- Mobile Poster Fallback to prevent 81MB heavy data transfer on mobile -->
    <img 
      src="images/campus_hero.jpg" 
      alt="The Oxford School Haridwar Campus" 
      class="sm:hidden absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.04] saturate-[1.06]"
      loading="eager"
      decoding="async"
    />

    <!-- Natural Background Video (Throttled for desktop/tablet only, preload="none" to prevent mobile data drain) -->
    <video 
      autoplay 
      loop 
      muted 
      playsinline
      preload="none"
      poster="images/campus_hero.jpg"
      class="hidden sm:block absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] saturate-[1.08] brightness-[0.82]"
    >
      <source src="videos/hero_video.mp4" type="video/mp4" />
    </video>

    <!-- Subtle Cinematic Gradient & Vignette Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 pointer-events-none"></div>

    <!-- Center Cinematic Text Overlay: ONLY THE OXFORD SCHOOL with Slow Cinematic Zoom -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 flex items-center justify-center text-center select-none pointer-events-none">
      <div class="hero-cinematic-title">
        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white uppercase drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] leading-tight">
          THE OXFORD <span class="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent inline-block">SCHOOL</span>
        </h1>
      </div>
    </div>

    <!-- Bottom-Aligned Dynamic Color-Synchronized Admission Enquiry Button -->
    <div class="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 flex items-center justify-center pointer-events-none">
      <button
        type="button"
        onclick="openModal('enquiry-modal')"
        class="btn-sync-dynamic pointer-events-auto px-6 py-2.5 sm:px-8 sm:py-3.5 text-white rounded-xl text-xs sm:text-sm font-bold shadow-2xl flex items-center gap-2.5 cursor-pointer border border-white/60 backdrop-blur-md group"
      >
        <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
        <span>Admission Enquiry 2026–27</span>
        <i data-lucide="arrow-right" class="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform"></i>
      </button>
    </div>
  </section>

  <!-- 2. School News & Announcements Portal (Synchronized with Oxford Navy & Gold Theme) -->
  <section class="w-full bg-[#001e33] border-t-2 border-amber-500/50 border-b border-[#001524] py-8 sm:py-10 text-white shadow-inner text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Ticker Row -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 bg-amber-500 text-[#002b49] px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider shrink-0 shadow-sm">
            <i data-lucide="bell" class="w-3.5 h-3.5 fill-[#002b49]"></i>
            <span>Latest News</span>
          </div>
          <div class="text-xs sm:text-sm text-slate-200 truncate">
            <span class="text-amber-300 font-semibold">Admissions 2026–27:</span> Registration open for Playgroup to Class XII • CBSE Board Exam Guidelines Released
          </div>
        </div>

        <div class="flex items-center gap-4 shrink-0 text-xs">
          <a href="cbse.html" class="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition">
            <span>CBSE Circulars</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </a>
          <span class="text-white/20">|</span>
          <button onclick="openModal('enquiry-modal')" class="text-white hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer transition">
            <span>Admission Desk</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>

      <!-- Section Heading & Grid -->
      <div class="pt-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <i data-lucide="newspaper" class="w-3.5 h-3.5"></i>
              <span>The Oxford School Bulletin</span>
            </span>
            <h2 class="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              Official Announcements &amp; Updates
            </h2>
          </div>
          <p class="text-xs text-slate-300 max-w-md">
            Verified academic notices, admission updates, and event schedules for parents and students.
          </p>
        </div>

        <!-- 4 Oxford Themed News Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          ${featuredNews.map(news => `
            <div class="bg-[#002845] hover:bg-[#003358] rounded-xl p-4 sm:p-5 border border-white/10 hover:border-amber-400/50 shadow-md transition-all duration-200 flex flex-col justify-between text-left group">
              <div>
                <div class="flex items-center justify-between gap-2 mb-2.5">
                  <span class="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    ${news.category}
                  </span>
                  <span class="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                    <i data-lucide="calendar" class="w-3 h-3 text-amber-400/70"></i>
                    <span>${news.date}</span>
                  </span>
                </div>

                <h3 class="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                  ${news.title}
                </h3>

                <p class="text-xs text-slate-300/80 mt-2 line-clamp-2 leading-relaxed">
                  ${news.summary}
                </p>
              </div>

              <div class="pt-3 mt-3 border-t border-white/10">
                ${news.isEnquiry ? `
                  <button onclick="openModal('enquiry-modal')" class="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition cursor-pointer">
                    <span>${news.actionText}</span>
                    <i data-lucide="arrow-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                ` : `
                  <a href="cbse.html" class="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition">
                    <span>${news.actionText}</span>
                    <i data-lucide="chevron-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i>
                  </a>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  </section>

  <!-- 3. Key Metrics Cards -->
  <section class="bg-slate-100/70 py-10 border-b border-slate-200 text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        ${KEY_METRICS.map((metric) => `
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center hover:border-amber-400 transition">
            <div class="text-2xl sm:text-3xl font-extrabold text-[#002b49] font-serif">
              ${metric.value}
            </div>
            <div class="text-xs font-bold text-amber-800 uppercase tracking-wider mt-1">
              ${metric.suffix}
            </div>
            <div class="text-[11px] text-slate-500 mt-1 leading-snug">
              ${metric.description}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 4. Notice Board & Daily Birthdays Section -->
  <section class="py-12 bg-slate-50 border-b border-slate-200 text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        <!-- Daily Birthday Celebration Card (4 Columns) -->
        <div class="lg:col-span-4 bg-gradient-to-br from-[#002b49] via-[#001e33] to-[#001322] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-amber-500/25 relative overflow-hidden flex flex-col justify-between text-left">
          <div>
            <!-- Header -->
            <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner shrink-0">
                  <i data-lucide="party-popper" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-base font-bold text-white flex items-center gap-1.5 leading-tight">
                    <span>Today's Birthdays</span>
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-400"></i>
                  </h3>
                  <p class="text-[11px] text-amber-200/80">Warm Wishes from The Oxford Family</p>
                </div>
              </div>
              <button onclick="fireConfetti()" class="px-2.5 py-1 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-extrabold flex items-center gap-1 shadow-sm transition active:scale-95 cursor-pointer">
                <i data-lucide="party-popper" class="w-3.5 h-3.5"></i>
                <span>Wish!</span>
              </button>
            </div>

            <!-- List of Birthday Students with Photos, Name, and Class -->
            <div class="space-y-3">
              ${birthdays.map(s => `
                <div onclick="fireConfetti()" class="bg-white/5 hover:bg-white/10 transition-all rounded-xl p-3 border border-white/10 hover:border-amber-400/60 flex items-center justify-between gap-3 group text-left cursor-pointer">
                  <div class="flex items-center gap-3.5 min-w-0">
                    <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0 bg-slate-800 relative group-hover:scale-105 transition-transform duration-300">
                      <img src="${s.photo.replace(/^\//, '')}" alt="${s.name}" class="w-full h-full object-cover object-top" />
                    </div>
                    <div class="text-left min-w-0">
                      <h4 class="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-tight truncate">
                        ${s.name}
                      </h4>
                      <div class="text-xs sm:text-sm font-semibold text-amber-300 mt-0.5">
                        ${s.class}
                      </div>
                      <div class="text-[11px] text-slate-300 font-medium">
                        ${s.house}
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-end gap-1 shrink-0">
                    <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/50 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <i data-lucide="sparkles" class="w-3 h-3 text-amber-400 group-hover:text-slate-950"></i>
                      <span>Today</span>
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="mt-4 pt-3.5 border-t border-white/10 text-center">
            <p class="text-[11px] sm:text-xs text-amber-200/90 italic leading-relaxed">
              "May your journey of learning be filled with wisdom, radiant health, and purposeful achievements."
            </p>
            <div class="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-300">
              <i data-lucide="award" class="w-3.5 h-3.5 text-amber-400"></i>
              <span>The Oxford School Management &amp; Faculty</span>
            </div>
          </div>
        </div>

        <!-- School Gazette & Student Journalism Portal (8 Columns) -->
        <div class="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 flex flex-col justify-between text-left">
          <div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#002b49] text-amber-400 flex items-center justify-center shadow-sm shrink-0">
                  <i data-lucide="newspaper" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-lg font-serif font-bold text-[#002b49] flex items-center gap-2">
                    <span>School News &amp; Student Gazette</span>
                    <span class="text-[10px] bg-amber-100 text-amber-800 font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Live Portal
                    </span>
                  </h3>
                  <p class="text-xs text-slate-500">Student journalism, STEM breakthroughs, athletic matches &amp; official circulars</p>
                </div>
              </div>
            </div>

            <!-- News Filter Tabs -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3">
              <button data-category="All" class="news-filter-btn px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition bg-[#002b49] text-white shadow-xs">All</button>
              <button data-category="Student Articles" class="news-filter-btn px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition bg-slate-100 text-slate-600 hover:bg-slate-200">Student Articles</button>
              <button data-category="Science & STEM" class="news-filter-btn px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition bg-slate-100 text-slate-600 hover:bg-slate-200">Science &amp; STEM</button>
              <button data-category="Sports Reports" class="news-filter-btn px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition bg-slate-100 text-slate-600 hover:bg-slate-200">Sports Reports</button>
              <button data-category="CBSE Circulars" class="news-filter-btn px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition bg-slate-100 text-slate-600 hover:bg-slate-200">CBSE Circulars</button>
            </div>

            <!-- News Stories List -->
            <div class="space-y-3 custom-scrollbar max-h-[380px] overflow-y-auto pr-1">
              
              <!-- Story 1 -->
              <div data-category="Student Articles" class="news-item p-3 rounded-xl border border-slate-200/90 hover:border-[#002b49] hover:bg-slate-50 transition flex flex-col sm:flex-row gap-3.5 items-start sm:items-center justify-between group text-left">
                <div class="relative w-full sm:w-28 sm:h-20 h-36 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <img src="images/robotics_real_1.jpg" alt="Robotics rover" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span class="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white">Featured</span>
                </div>
                <div class="flex-1 min-w-0 text-left">
                  <div class="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                    <span class="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded text-[10px]">Student Articles</span>
                    <span>•</span>
                    <span>24 Feb 2025</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 group-hover:text-[#002b49] transition-colors line-clamp-1">
                    Robotics Squad Qualifies for State STEM Championship with Autonomous Rover
                  </h4>
                  <p class="text-xs text-slate-600 line-clamp-2 mt-1">
                    Under the mentorship of the STEM department, our student robotics team designed an obstacle-avoiding Arduino rover that clocked the highest precision run in the regional qualifiers.
                  </p>
                </div>
              </div>

              <!-- Story 2 -->
              <div data-category="Sports Reports" class="news-item p-3 rounded-xl border border-slate-200/90 hover:border-[#002b49] hover:bg-slate-50 transition flex flex-col sm:flex-row gap-3.5 items-start sm:items-center justify-between group text-left">
                <div class="relative w-full sm:w-28 sm:h-20 h-36 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <img src="images/sports_ground_1.jpg" alt="Athletic trials" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span class="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white">Sports</span>
                </div>
                <div class="flex-1 min-w-0 text-left">
                  <div class="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                    <span class="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded text-[10px]">Sports Reports</span>
                    <span>•</span>
                    <span>20 Feb 2025</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 group-hover:text-[#002b49] transition-colors line-clamp-1">
                    Inter-House Athletic Trials: Kaveri House Takes Early Lead in Sprint Heats
                  </h4>
                  <p class="text-xs text-slate-600 line-clamp-2 mt-1">
                    Excitement surged across the campus sports complex as track athletes from Ganga, Yamuna, Kaveri, and Saraswati houses competed in the 100m, 200m, and 4x100m preliminaries.
                  </p>
                </div>
              </div>

              <!-- Story 3 -->
              <div data-category="Science & STEM" class="news-item p-3 rounded-xl border border-slate-200/90 hover:border-[#002b49] hover:bg-slate-50 transition flex flex-col sm:flex-row gap-3.5 items-start sm:items-center justify-between group text-left">
                <div class="relative w-full sm:w-28 sm:h-20 h-36 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <img src="images/chemlab_1.jpg" alt="Chemistry lab" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span class="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white">Science</span>
                </div>
                <div class="flex-1 min-w-0 text-left">
                  <div class="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                    <span class="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded text-[10px]">Science &amp; STEM</span>
                    <span>•</span>
                    <span>16 Feb 2025</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 group-hover:text-[#002b49] transition-colors line-clamp-1">
                    Science Society Conducts Practical Workshop on Eco-Friendly Chemistry
                  </h4>
                  <p class="text-xs text-slate-600 line-clamp-2 mt-1">
                    Senior secondary scholars demonstrated zero-waste titration techniques and natural pH indicators prepared from floral extracts in the senior chemistry laboratory.
                  </p>
                </div>
              </div>

              <!-- Story 4 -->
              <div data-category="CBSE Circulars" class="news-item p-3 rounded-xl border border-slate-200/90 hover:border-[#002b49] hover:bg-slate-50 transition flex flex-col sm:flex-row gap-3.5 items-start sm:items-center justify-between group text-left">
                <div class="relative w-full sm:w-28 sm:h-20 h-36 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <img src="images/academics_real.jpg" alt="CBSE Practical exams" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span class="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white">Official</span>
                </div>
                <div class="flex-1 min-w-0 text-left">
                  <div class="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                    <span class="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded text-[10px]">CBSE Circulars</span>
                    <span>•</span>
                    <span>12 Feb 2025</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 group-hover:text-[#002b49] transition-colors line-clamp-1">
                    CBSE AISSE &amp; AISSCE Board Practical Schedule &amp; Guidelines Released
                  </h4>
                  <p class="text-xs text-slate-600 line-clamp-2 mt-1">
                    Practical examination schedules, batch timings, and official board admit cards are now available for Classes X and XII candidates at the school administrative counter.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 5. Leadership from the Heart: 3D Flip Cards -->
  <section class="py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
          School Mentors &amp; Visionaries
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
          Leadership from the Heart
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 mt-2">
          Click any portrait card to read the visionary guidance and philosophy from our school leaders.
        </p>
      </div>

      <!-- 6 Leadership Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${LEADERSHIP_MESSAGES.map((leader) => `
          <div class="card-flip perspective-1000 h-[480px] cursor-pointer group">
            <div class="card-inner relative w-full h-full transform-style-3d shadow-xl rounded-2xl">
              
              <!-- Front Side: Full Portrait Photo & Badge -->
              <div class="card-front absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                <img src="${leader.image.replace(/^\//, '')}" alt="${leader.name}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-6">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded bg-[#002b49]/90 text-[10px] font-bold text-amber-300 border border-amber-400/40">
                      ${leader.role}
                    </span>
                    <span class="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                      <i data-lucide="sparkles" class="w-3 h-3 text-amber-400"></i> Click to Read
                    </span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold font-serif text-white">${leader.name}</h3>
                    <p class="text-xs text-amber-300 font-medium">${leader.qualification}</p>
                    <p class="text-xs text-slate-300 italic line-clamp-2 mt-2">"${leader.quote}"</p>
                  </div>
                </div>
              </div>

              <!-- Back Side: Full Message & Desk Jump -->
              <div class="card-back absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-[#002b49] text-white p-6 flex flex-col justify-between border-2 border-amber-400/60 shadow-2xl">
                <div>
                  <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <span class="text-xs uppercase font-bold text-amber-400 tracking-wider">${leader.role}</span>
                    <span class="text-[10px] text-slate-300">Click to flip back</span>
                  </div>
                  <h4 class="text-base font-bold text-white">${leader.name}</h4>
                  <p class="text-xs text-amber-300 font-serif italic mb-3">"${leader.quote}"</p>
                  <p class="text-xs text-slate-200 leading-relaxed overflow-y-auto max-h-[250px] custom-scrollbar pr-1">
                    ${leader.message}
                  </p>
                </div>
                <div class="pt-3 border-t border-white/10 flex items-center justify-between">
                  <a href="about.html#${leader.role.toLowerCase().replace(/[^a-z0-9]/g, '-')}" class="text-xs font-bold text-amber-400 hover:text-white flex items-center gap-1">
                    <span>Read on About Page</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                  </a>
                  <span class="text-[10px] text-slate-400">The Oxford School</span>
                </div>
              </div>

            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 6. Core Facilities Strip -->
  <section class="py-16 bg-slate-50 border-t border-slate-200 text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            Modern Campus Infrastructure
          </span>
          <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
            World-Class Facilities for Holistic Development
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            From hands-on robotics and composite science labs to GPS-tracked transport and lush athletic grounds, every corner is crafted for safety, curiosity, and high achievement.
          </p>
        </div>
        <a href="facilities.html" class="self-start md:self-auto px-4 py-2 bg-[#002b49] text-white hover:bg-amber-600 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm">
          <span>Explore All Facilities</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${FACILITIES_DATA.slice(0, 6).map(fac => `
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition group text-left flex flex-col justify-between">
            <div class="relative h-48 overflow-hidden bg-slate-100">
              <img src="${fac.image.replace(/^\//, '')}" alt="${fac.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-base font-bold text-[#002b49] group-hover:text-amber-600 transition-colors">
                  ${fac.title}
                </h3>
                <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                  ${fac.shortDesc}
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a href="facilities.html#${fac.id}" class="text-xs font-bold text-amber-700 hover:text-[#002b49] flex items-center gap-1">
                  <span>View Details</span>
                  <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 7. Board Examination Results & Academic Pride -->
  <section class="py-16 bg-[#002b49] text-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          Academic Excellence
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white mt-3">
          100% CBSE Board Pass Record
        </h2>
        <p class="text-xs sm:text-sm text-slate-300 mt-2">
          Consistent 100% pass percentages in Class X (AISSE) and Class XII (AISSCE) board examinations with top scorers across Science and Commerce streams.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Class X Results -->
        <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <h3 class="text-base font-bold text-amber-400">Class X (AISSE) Board Performance</h3>
            <span class="text-xs font-bold bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/30">100% Pass</span>
          </div>
          <div class="space-y-2 text-xs">
            ${BOARD_RESULTS.classX.map(r => `
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div>
                  <span class="font-bold text-white block">${r.year} Session</span>
                  <span class="text-slate-400 text-[11px]">Topper: ${r.topper}</span>
                </div>
                <div class="text-right">
                  <span class="text-amber-400 font-extrabold text-sm block">${r.highest}</span>
                  <span class="text-[10px] text-slate-300">${r.above90} scored &gt;90%</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Class XII Results -->
        <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <h3 class="text-base font-bold text-amber-400">Class XII (AISSCE) Board Performance</h3>
            <span class="text-xs font-bold bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/30">100% Pass</span>
          </div>
          <div class="space-y-2 text-xs">
            ${BOARD_RESULTS.classXII.map(r => `
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div>
                  <span class="font-bold text-white block">${r.year} Session</span>
                  <span class="text-slate-400 text-[11px]">Topper: ${r.topper}</span>
                </div>
                <div class="text-right">
                  <span class="text-amber-400 font-extrabold text-sm block">${r.highest}</span>
                  <span class="text-[10px] text-slate-300">${r.above90} scored &gt;90%</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <a href="cbse.html#results" class="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition">
          <span>View Detailed Verified CBSE Tabulation Sheets</span>
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- 8. Parent Testimonials & Voices -->
  <section class="py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
          Parent Community
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
          Voices of Oxford Parents
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 mt-2">
          Read candid experiences from parents whose children thrive in our classrooms, laboratories, and sports arenas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${PARENT_TESTIMONIALS.map((t) => `
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between text-left">
            <div>
              <div class="flex items-center gap-1 text-amber-500 mb-3">
                <i data-lucide="sparkles" class="w-4 h-4 fill-current"></i>
                <i data-lucide="sparkles" class="w-4 h-4 fill-current"></i>
                <i data-lucide="sparkles" class="w-4 h-4 fill-current"></i>
                <i data-lucide="sparkles" class="w-4 h-4 fill-current"></i>
                <i data-lucide="sparkles" class="w-4 h-4 fill-current"></i>
              </div>
              <p class="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "${t.quote}"
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-200/60">
              <h4 class="text-sm font-bold text-[#002b49]">${t.parentName}</h4>
              <p class="text-[11px] text-amber-700 font-semibold">${t.childInfo}</p>
              <p class="text-[10px] text-slate-400">${t.profession}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 9. Comprehensive Online Admission & Enquiry Form Section (Bottom Section with All Fields) -->
  <section id="admission-enquiry-section" class="py-16 bg-[#001729] text-white text-left relative overflow-hidden border-t-2 border-amber-500/40">
    <!-- Background Accents -->
    <div class="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Heading -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3.5 py-1 rounded-full border border-amber-400/30 inline-block mb-3">
          Admissions Open 2026–27
        </span>
        <h2 class="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Admission Enquiry &amp; Prospectus Application
        </h2>
        <p class="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards your child's holistic educational journey. Submit the complete enquiry form below to receive syllabus information, fee structure, and schedule a personalized campus tour.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Information, Perks & Helpline Cards (5 Cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Key Admissions Perks Card -->
          <div class="bg-[#002b49] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl">
            <div class="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
              <div class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
              </div>
              <div>
                <h3 class="text-base font-bold text-white">Why Join The Oxford School?</h3>
                <p class="text-xs text-amber-300">CBSE Affiliation No. 3530408 • Haridwar</p>
              </div>
            </div>

            <ul class="space-y-3.5 text-xs text-slate-200">
              <li class="flex items-start gap-2.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <span><strong class="text-white">100% Board Pass Records:</strong> Consistent top CBSE ranks in Class X and XII Science &amp; Commerce streams.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <span><strong class="text-white">Cutting-Edge STEM &amp; AI:</strong> Dedicated Robotics Labs, smart interactive classrooms, and advanced composite labs.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <span><strong class="text-white">Individualized Mentor Focus:</strong> Optimal teacher-student ratio of 1:25 ensures personal care and character building.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <span><strong class="text-white">Safe GPS Transport &amp; Sports:</strong> Full athletic complex with cricket pitch, badminton, basketball, karate, and yoga.</span>
              </li>
            </ul>

            <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-semibold">
              <span>Counselor Response Time:</span>
              <span class="bg-amber-500/20 px-2.5 py-1 rounded-md text-amber-300 border border-amber-400/30">Within 2 Hours</span>
            </div>
          </div>

          <!-- Direct Admissions Contact Card -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-3.5 text-xs">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Direct Admission Helplines
            </h4>
            <div class="flex items-center gap-3 text-slate-300">
              <i data-lucide="phone-call" class="w-4 h-4 text-amber-400 shrink-0"></i>
              <span>+91 9068885862, +91 7060089183</span>
            </div>
            <div class="flex items-center gap-3 text-slate-300">
              <i data-lucide="mail" class="w-4 h-4 text-amber-400 shrink-0"></i>
              <span>theoxfordschoolharidwar@gmail.com</span>
            </div>
            <div class="flex items-center gap-3 text-slate-300">
              <i data-lucide="map-pin" class="w-4 h-4 text-amber-400 shrink-0"></i>
              <span>Shivratan City, Navodaya Nagar, Rajnadesh, Haridwar, Uttarakhand</span>
            </div>
            <div class="flex items-center gap-3 text-slate-300">
              <i data-lucide="clock" class="w-4 h-4 text-amber-400 shrink-0"></i>
              <span>Office Hours: 8:00 AM – 3:30 PM (Monday to Saturday)</span>
            </div>
          </div>

        </div>

        <!-- Right Column: Complete Enquiry Form with All Fields (7 Cols) -->
        <div class="lg:col-span-7">
          <div class="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-left">
            <div class="border-b border-slate-200 pb-4 mb-6">
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-white border border-amber-400/40 p-1 shadow-sm flex items-center justify-center shrink-0">
                    <img src="ox-logo.webp" alt="The Oxford School Logo" class="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 class="text-lg sm:text-xl font-serif font-bold text-[#002b49]">Student Admission Enquiry Form</h3>
                    <p class="text-xs text-slate-500 mt-0.5">Please provide complete information. All starred (*) fields are required.</p>
                  </div>
                </div>
                <span class="hidden sm:inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg border border-amber-300 shrink-0">
                  Session 2026–27
                </span>
              </div>
            </div>

            <form class="space-y-4 text-xs site-enquiry-form">
              
              <!-- Row 1: Student Full Name & Grade Applying For -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Student's Full Name *</label>
                  <input type="text" required placeholder="e.g. Master Aarav Chauhan" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Grade / Class Applying For *</label>
                  <select required class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs bg-white">
                    <option value="">Select Class</option>
                    <option>Playgroup / Nursery</option>
                    <option>LKG / UKG</option>
                    <option>Class I - V (Primary)</option>
                    <option>Class VI - VIII (Middle)</option>
                    <option>Class IX - X (Secondary)</option>
                    <option>Class XI - XII (Senior Secondary - Science)</option>
                    <option>Class XI - XII (Senior Secondary - Commerce)</option>
                  </select>
                </div>
              </div>

              <!-- Row 2: Date of Birth & Gender -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Date of Birth *</label>
                  <input type="date" required class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs bg-white" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Gender *</label>
                  <select required class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs bg-white">
                    <option value="">Select Gender</option>
                    <option>Boy / Male</option>
                    <option>Girl / Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <!-- Row 3: Parent/Guardian Name & Contact Phone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Parent / Guardian's Full Name *</label>
                  <input type="text" required placeholder="Father or Mother's Name" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Parent Contact Mobile *</label>
                  <input type="tel" name="phone" required pattern="[6-9][0-9]{9}" title="Please enter a valid 10-digit Indian mobile number" placeholder="10-digit mobile number" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs" />
                </div>
              </div>

              <!-- Row 4: Email Address & Academic Session -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Email Address</label>
                  <input type="email" placeholder="parent@example.com" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Academic Session</label>
                  <input type="text" readonly value="2026–2027 (Upcoming)" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-100 text-slate-600 text-xs font-semibold" />
                </div>
              </div>

              <!-- Row 5: Residential Address & Previous School -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Residential Address / City *</label>
                  <input type="text" required placeholder="e.g. Roshnabad / Haridwar / SIDCUL / BHEL" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1.5">Previous School Attended (If any)</label>
                  <input type="text" placeholder="Name of previous school" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs" />
                </div>
              </div>

              <!-- Row 6: Any Specific Query / Message -->
              <div>
                <label class="block font-bold text-slate-700 mb-1.5">Questions or Specific Requirements (Optional)</label>
                <textarea rows="3" placeholder="Tell us about your child's interests, transport requirements, or questions..." class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs"></textarea>
              </div>

              <!-- Submit Button -->
              <div class="pt-2">
                <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-sm shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                  <i data-lucide="send" class="w-4 h-4"></i>
                  <span>Submit Complete Admission Enquiry</span>
                </button>
                <p class="text-[11px] text-slate-500 text-center mt-2.5">
                  🔒 Your information is secure. Our admission desk will connect with you within 2 working hours.
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "The Oxford School Haridwar | CBSE Affiliated Senior Secondary School",
    description: "The Oxford School, Haridwar is a premier CBSE Affiliated Senior Secondary School (Affiliation No. 3530408, School Code 81632) in Haridwar. Admissions open 2026-27 for Nursery to Class XII.",
    keywords: "The Oxford School Haridwar, CBSE school in Haridwar, admissions 2026-27 Haridwar, best school in Haridwar, top CBSE school Uttarakhand",
    canonicalUrl: "",
    activePage: "home",
    content
  });
}

// ==========================================
// 2. GENERATE ABOUT.HTML (ABOUT PAGE)
// ==========================================

// ==========================================
// 2. GENERATE ABOUT.HTML (ABOUT PAGE)
// ==========================================
function generateAboutPage() {
  const content = `
  <!-- About Hero -->
  <section class="bg-[#002b49] text-white py-14 text-left border-b border-white/10">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          About The Oxford School
        </span>
        <h1 class="text-3xl sm:text-4xl font-serif font-extrabold text-white mt-3">
          Legacy of Knowledge, Integrity &amp; Discipline
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          Established in 2014 under the aegis of Shivratan Education Society, our institution stands as a beacon of values and academic excellence in Roshnabad, Haridwar.
        </p>

        <!-- Quick Jump Pills -->
        <div class="flex flex-wrap items-center gap-2 mt-5">
          <a href="#vision" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">Vision &amp; Motto</a>
          <a href="#chairman" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">Chairman</a>
          <a href="#managing-director" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">Managing Director</a>
          <a href="#principal" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">Principal</a>
          <a href="#houses" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">House System</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Vision, Mission & Motto -->
  <section id="vision" class="py-16 bg-white text-left scroll-mt-24">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="w-12 h-12 rounded-xl bg-[#002b49] text-amber-400 flex items-center justify-center mb-4">
            <i data-lucide="eye" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-[#002b49]">Our Vision</h3>
          <p class="text-xs text-slate-600 mt-2 leading-relaxed">
            To be a center of educational excellence that nurtures ethical thinkers, innovative minds, and responsible global citizens grounded in rich cultural heritage.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4">
            <i data-lucide="compass" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-[#002b49]">Our Mission</h3>
          <p class="text-xs text-slate-600 mt-2 leading-relaxed">
            To provide student-centric learning through digital smart classrooms, STEM robotics exposure, sportsmanship, and empathetic guidance from experienced mentors.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-[#002b49] text-white border border-amber-400/30">
          <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-400/40">
            <i data-lucide="award" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-white">Our Motto</h3>
          <p class="text-sm font-serif italic text-amber-300 mt-1">"Strive and Soar High"</p>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed">
            Inspiring every child to relentlessly pursue their personal best in academia, arts, character, and service to society.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Detailed Leadership Desks -->
  <section class="py-16 bg-slate-50 border-t border-slate-200 text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-2xl mx-auto">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
          Institutional Pillars
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
          Messages from the Leadership Desk
        </h2>
      </div>

      ${LEADERSHIP_MESSAGES.map(leader => {
        const anchorId = leader.role.toLowerCase().replace(/[^a-z0-9]/g, '-');
        return `
        <div id="${anchorId}" class="scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div class="w-full md:w-56 shrink-0 text-center">
            <div class="w-48 h-56 mx-auto rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-md bg-slate-100">
              <img src="${leader.image.replace(/^\//, '')}" alt="${leader.name}" class="w-full h-full object-cover object-top" />
            </div>
            <h3 class="text-base font-bold text-[#002b49] mt-3">${leader.name}</h3>
            <p class="text-xs text-amber-700 font-semibold">${leader.role}</p>
            <p class="text-[11px] text-slate-500">${leader.qualification}</p>
          </div>
          <div class="flex-1 text-left">
            <div class="border-l-4 border-amber-400 pl-4 py-1 mb-4 bg-amber-50/50 rounded-r-lg">
              <p class="text-xs sm:text-sm font-serif italic text-slate-800">
                "${leader.quote}"
              </p>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              ${leader.message}
            </p>
          </div>
        </div>
        `;
      }).join('')}
    </div>
  </section>

  <!-- The Four House System -->
  <section id="houses" class="py-16 bg-white border-t border-slate-200 text-left scroll-mt-24">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
          Fostering Camaraderie &amp; Sportsmanship
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
          The Four School Houses
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 mt-2">
          Every student is inducted into one of four vibrant houses named after holy rivers and symbols of knowledge, inspiring inter-house debates, cultural contests, and athletics.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 rounded-2xl bg-red-50 border border-red-200 text-left">
          <div class="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold mb-3 shadow">G</div>
          <h3 class="text-base font-bold text-red-900">Ganga House</h3>
          <p class="text-xs text-red-700 font-semibold mt-0.5">Color: Crimson Red</p>
          <p class="text-xs text-slate-700 mt-2">Symbolizing perennial energy, purity of mind, and unstoppable perseverance in academic and social pursuits.</p>
        </div>

        <div class="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-left">
          <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-3 shadow">Y</div>
          <h3 class="text-base font-bold text-blue-900">Yamuna House</h3>
          <p class="text-xs text-blue-700 font-semibold mt-0.5">Color: Royal Blue</p>
          <p class="text-xs text-slate-700 mt-2">Symbolizing depth of contemplation, tranquility, and intellectual focus in mathematics, coding, and sciences.</p>
        </div>

        <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
          <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-3 shadow">K</div>
          <h3 class="text-base font-bold text-emerald-900">Kaveri House</h3>
          <p class="text-xs text-emerald-700 font-semibold mt-0.5">Color: Emerald Green</p>
          <p class="text-xs text-slate-700 mt-2">Symbolizing vitality, eco-consciousness, athletic resilience, and harmony with nature and sportsmanship.</p>
        </div>

        <div class="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-left">
          <div class="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold mb-3 shadow">S</div>
          <h3 class="text-base font-bold text-amber-900">Saraswati House</h3>
          <p class="text-xs text-amber-800 font-semibold mt-0.5">Color: Golden Yellow</p>
          <p class="text-xs text-slate-700 mt-2">Symbolizing enlightenment, creative writing, cultural performing arts, and wisdom in leadership.</p>
        </div>
      </div>
    </div>
  </section>
  `;

  return renderPageShell({
    title: "About Us | The Oxford School, Haridwar - Leadership, Vision & Values",
    description: "Learn about The Oxford School Haridwar's leadership desks, Founder Chairman Mr. Arvind Chauhan, Principal Ms. Priya Chauhan, vision, mission, and our four houses: Ganga, Yamuna, Kaveri, Saraswati.",
    keywords: "About The Oxford School Haridwar, Arvind Chauhan Chairman, Priya Chauhan Principal, Oxford School Roshnabad leadership, school houses, vision and mission",
    canonicalUrl: "about.html",
    activePage: "about",
    content
  });
}

// ==========================================
// 3. GENERATE ADMISSIONS.HTML (ADMISSIONS)
// ==========================================
function generateAdmissionsPage() {
  const content = `
  <!-- Admissions Hero -->
  <section class="bg-[#002b49] text-white py-14 text-left border-b border-white/10">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          Academic Year 2026-27
        </span>
        <h1 class="text-3xl sm:text-4xl font-serif font-extrabold text-white mt-3">
          Admissions Procedure &amp; Guidelines
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          Join a vibrant community of scholars from Nursery to Class XII. We welcome parents seeking holistic development, academic discipline, and future-ready STEM skills for their children.
        </p>

        <!-- Quick Jump Pills -->
        <div class="flex flex-wrap items-center gap-2 mt-5">
          <a href="#process" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">Admission Steps</a>
          <a href="#criteria" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">Age Criteria</a>
          <a href="#documents" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">Required Documents</a>
          <a href="#fees" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">Fee Policy</a>
          <a href="#enquiry" class="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold transition">Apply Now</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 4-Step Admission Procedure -->
  <section id="process" class="py-16 bg-white text-left scroll-mt-24">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
          Simple &amp; Transparent
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
          Four-Step Admission Journey
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${ADMISSION_STEPS.map(step => `
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative text-left">
            <span class="text-3xl font-extrabold text-amber-500/40 block mb-2 font-mono">${step.step}</span>
            <h3 class="text-base font-bold text-[#002b49]">${step.title}</h3>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed">${step.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Grade-wise Age Criteria Matrix -->
  <section id="criteria" class="py-16 bg-slate-50 border-t border-slate-200 text-left scroll-mt-24">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-10">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            CBSE &amp; State Norms
          </span>
          <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
            Age Criteria Matrix (as on 31st March)
          </h2>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table class="w-full text-xs text-left">
            <thead class="bg-[#002b49] text-white">
              <tr>
                <th class="p-3.5 font-bold">Class / Grade</th>
                <th class="p-3.5 font-bold">Minimum Age Requirement</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${AGE_CRITERIA.map(c => `
                <tr class="hover:bg-slate-50">
                  <td class="p-3.5 font-bold text-[#002b49]">${c.grade}</td>
                  <td class="p-3.5 text-slate-700">${c.age}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Required Documents Checklist -->
  <section id="documents" class="py-16 bg-white border-t border-slate-200 text-left scroll-mt-24">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
          Checklist
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
          Documents Required at Admission
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div>
            <h4 class="text-xs font-bold text-[#002b49]">Birth Certificate</h4>
            <p class="text-[11px] text-slate-500">Self-attested copy of municipal birth certificate.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div>
            <h4 class="text-xs font-bold text-[#002b49]">Transfer Certificate (TC)</h4>
            <p class="text-[11px] text-slate-500">Original counter-signed TC from previous recognized school (Class II onwards).</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div>
            <h4 class="text-xs font-bold text-[#002b49]">Previous Report Card</h4>
            <p class="text-[11px] text-slate-500">Photocopy of mark statement / report card of qualifying class.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div>
            <h4 class="text-xs font-bold text-[#002b49]">Student &amp; Parent Photos</h4>
            <p class="text-[11px] text-slate-500">4 recent passport size photographs of the student and 2 of each parent.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div>
            <h4 class="text-xs font-bold text-[#002b49]">Aadhaar Card Copies</h4>
            <p class="text-[11px] text-slate-500">Photocopy of Aadhaar Card of student and parents.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div>
            <h4 class="text-xs font-bold text-[#002b49]">Medical Fitness Record</h4>
            <p class="text-[11px] text-slate-500">Blood group certificate and basic immunization history.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Online Enquiry Form -->
  <section id="enquiry" class="py-16 bg-slate-50 border-t border-slate-200 text-left scroll-mt-24">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <div class="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
        <div class="bg-[#002b49] text-white p-6">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Direct Desk Submission</span>
          <h2 class="text-xl sm:text-2xl font-serif font-bold mt-1">Online Admission Enquiry Form 2026-27</h2>
          <p class="text-xs text-slate-300 mt-1">Fill out the details below and our admission counselor will call you within 24 hours.</p>
        </div>
        <form class="p-6 space-y-4 text-xs site-enquiry-form">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Student's Full Name *</label>
              <input type="text" required placeholder="Master / Miss" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Grade Applying For *</label>
              <select required class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]">
                <option value="">Select Grade</option>
                <option>Nursery / Playgroup</option>
                <option>LKG / UKG</option>
                <option>Class I - V</option>
                <option>Class VI - VIII</option>
                <option>Class IX - X</option>
                <option>Class XI - XII (Science)</option>
                <option>Class XI - XII (Commerce)</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Parent's Name *</label>
              <input type="text" required placeholder="Father/Mother Name" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Mobile Phone Number *</label>
              <input type="tel" name="phone" required pattern="[6-9][0-9]{9}" title="Please enter a valid 10-digit Indian mobile number" placeholder="10-digit mobile" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Email Address</label>
              <input type="email" placeholder="name@domain.com" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Current Residential Locality</label>
              <input type="text" placeholder="e.g. Roshnabad, BHEL, Shivalik Nagar" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
            </div>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Any Specific Queries or Requirements</label>
            <textarea rows="3" placeholder="Transport requirements, previous school background, etc." class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]"></textarea>
          </div>
          <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-sm shadow transition cursor-pointer">
            Submit Admission Application
          </button>
        </form>
      </div>
    </div>
  </section>
  `;

  return renderPageShell({
    title: "Admissions 2026-27 | The Oxford School Haridwar - Procedure & Form",
    description: "Official Admission procedure for Academic Session 2026-27 at The Oxford School, Haridwar. Age criteria matrix, verification documents checklist, fee transparency, and online enquiry application.",
    keywords: "The Oxford School admissions 2026-27, Haridwar school admission form, age criteria CBSE school Haridwar, online admission enquiry Haridwar",
    canonicalUrl: "admissions.html",
    activePage: "admissions",
    content
  });
}

// ==========================================
// 4. GENERATE FACILITIES.HTML (FACILITIES)
// ==========================================
function generateFacilitiesPage() {
  const content = `
  <!-- Facilities Hero -->
  <section class="bg-[#002b49] text-white py-14 text-left border-b border-white/10">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          State-of-the-Art Infrastructure
        </span>
        <h1 class="text-3xl sm:text-4xl font-serif font-extrabold text-white mt-3">
          Campus Facilities &amp; Learning Spaces
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          From hands-on robotics and composite science labs to GPS transport fleet and expansive sports grounds, our campus is designed to foster curiosity, safety, and excellence.
        </p>

        <!-- Quick Jump Pills -->
        <div class="flex flex-wrap items-center gap-2 mt-5">
          ${FACILITIES_DATA.map(f => `
            <a href="#${f.id}" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition">
              ${f.title.split(' ')[0]}
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- Facilities Detailed Cards List -->
  <section class="py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      ${FACILITIES_DATA.map((fac, idx) => `
        <div id="${fac.id}" class="scroll-mt-28 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center">
          <div class="w-full lg:w-1/2 rounded-xl overflow-hidden border border-slate-200 shadow-md h-72 sm:h-80 bg-slate-200 shrink-0">
            <img src="${fac.image.replace(/^\//, '')}" alt="${fac.title}" class="w-full h-full object-cover" />
          </div>
          <div class="w-full lg:w-1/2 text-left space-y-4">
            <div class="inline-flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              <i data-lucide="check" class="w-3.5 h-3.5"></i>
              <span>Modern Campus Asset</span>
            </div>
            <h2 class="text-2xl font-serif font-bold text-[#002b49]">${fac.title}</h2>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${fac.fullDesc}</p>
            <div class="space-y-2 pt-2">
              ${fac.features.map(feat => `
                <div class="flex items-center gap-2 text-xs text-slate-800">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                  <span>${feat}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </section>
  `;

  return renderPageShell({
    title: "Campus Facilities & Labs | The Oxford School Haridwar",
    description: "Explore world-class facilities at The Oxford School Haridwar: Robotics & AI lab, Composite Science labs, Computer IT lab, Central Library, Sports Arena, and GPS-tracked school buses.",
    keywords: "Oxford School Haridwar facilities, robotics lab school Haridwar, science labs Haridwar, school transport GPS Roshnabad, computer lab school",
    canonicalUrl: "facilities.html",
    activePage: "facilities",
    content
  });
}

// ==========================================
// 5. GENERATE CBSE.HTML (CBSE DISCLOSURE)
// ==========================================
function generateCbsePage() {
  const content = `
  <!-- CBSE Disclosure Hero -->
  <section class="bg-[#002b49] text-white py-14 text-left border-b border-white/10">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          CBSE Regulatory Compliance
        </span>
        <h1 class="text-3xl sm:text-4xl font-serif font-extrabold text-white mt-3">
          Mandatory Public Disclosure &amp; Board Results
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          In strict compliance with Central Board of Secondary Education (CBSE) circulars, comprehensive documentation regarding affiliation, society registration, safety certificates, fee structure, and academic results are published here for public inspection.
        </p>

        <!-- Tab Switchers -->
        <div class="flex flex-wrap items-center gap-2 mt-6">
          <button data-tab="disclosure" class="disclosure-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white text-[#002b49] shadow-sm">
            Mandatory Documents &amp; Certificates
          </button>
          <button data-tab="results" class="disclosure-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition text-slate-300 hover:text-white">
            100% Board Exam Results
          </button>
          <button data-tab="curriculum" class="disclosure-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition text-slate-300 hover:text-white">
            Curriculum &amp; Streams
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Panel 1: Mandatory Disclosures Documents -->
  <section id="tab-disclosure" class="disclosure-panel py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Key School Details Table -->
      <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-10 text-left">
        <h3 class="text-base font-bold text-[#002b49] mb-4">A: General Information</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div class="p-3 bg-white rounded-lg border border-slate-200">
            <span class="text-slate-400 block text-[11px]">NAME OF THE SCHOOL</span>
            <span class="font-bold text-[#002b49] text-sm">THE OXFORD SCHOOL</span>
          </div>
          <div class="p-3 bg-white rounded-lg border border-slate-200">
            <span class="text-slate-400 block text-[11px]">CBSE AFFILIATION NUMBER</span>
            <span class="font-bold text-[#002b49] text-sm">3530408</span>
          </div>
          <div class="p-3 bg-white rounded-lg border border-slate-200">
            <span class="text-slate-400 block text-[11px]">SCHOOL CODE</span>
            <span class="font-bold text-[#002b49] text-sm">81632</span>
          </div>
          <div class="p-3 bg-white rounded-lg border border-slate-200">
            <span class="text-slate-400 block text-[11px]">COMPLETE ADDRESS</span>
            <span class="font-bold text-[#002b49]">Shivratan City, Navodaya Nagar, Rajnadesh, Haridwar, Uttarakhand – 249402</span>
          </div>
          <div class="p-3 bg-white rounded-lg border border-slate-200">
            <span class="text-slate-400 block text-[11px]">PRINCIPAL NAME &amp; QUALIFICATION</span>
            <span class="font-bold text-[#002b49]">Ms. Priya Chauhan (M.A., B.Ed.)</span>
          </div>
          <div class="p-3 bg-white rounded-lg border border-slate-200">
            <span class="text-slate-400 block text-[11px]">SCHOOL EMAIL &amp; CONTACT</span>
            <span class="font-bold text-[#002b49]">theoxfordschoolharidwar@gmail.com | +91-9068885862, +91-7060089183</span>
          </div>
        </div>
      </div>

      <!-- Official Documents List -->
      <h3 class="text-base font-bold text-[#002b49] mb-4">B: Documents &amp; Information (Mandatory Disclosures)</h3>
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table class="w-full text-xs text-left">
          <thead class="bg-[#002b49] text-white">
            <tr>
              <th class="p-3.5 font-bold w-12">S.No.</th>
              <th class="p-3.5 font-bold">Document / Information Title</th>
              <th class="p-3.5 font-bold">Status</th>
              <th class="p-3.5 font-bold text-right">Official Document</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${CBSE_DISCLOSURE_DOCS.map((doc, idx) => `
              <tr class="hover:bg-slate-50">
                <td class="p-3.5 font-mono text-slate-500 font-bold">${idx + 1}</td>
                <td class="p-3.5 font-semibold text-slate-800">${doc.title}</td>
                <td class="p-3.5 text-emerald-700 font-bold">
                  <span class="inline-flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <i data-lucide="check" class="w-3 h-3"></i> Verified
                  </span>
                </td>
                <td class="p-3.5 text-right">
                  ${doc.downloadUrl && doc.downloadUrl !== '#' ? `
                    <div class="inline-flex items-center gap-1.5 justify-end">
                      <a href="${doc.downloadUrl.replace(/^\//, '')}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-[#002b49] hover:text-white text-[#002b49] rounded-lg font-bold text-xs transition" title="View PDF">
                        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                        <span>View</span>
                      </a>
                      <a href="${doc.downloadUrl.replace(/^\//, '')}" download target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#002b49] hover:bg-amber-600 text-white rounded-lg font-bold text-xs shadow-sm transition" title="Download PDF">
                        <i data-lucide="download" class="w-3.5 h-3.5 text-amber-300"></i>
                        <span>Download</span>
                      </a>
                    </div>
                  ` : `
                    <span class="text-xs font-bold text-amber-700">Available at Desk</span>
                  `}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

    </div>
  </section>

  <!-- Panel 2: Board Exam Results -->
  <section id="tab-results" class="disclosure-panel hidden py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div>
        <h3 class="text-xl font-bold font-serif text-[#002b49] mb-2">Class X (AISSE) Board Results (Past 4 Academic Years)</h3>
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table class="w-full text-xs text-left">
            <thead class="bg-[#002b49] text-white">
              <tr>
                <th class="p-3 font-bold">Session</th>
                <th class="p-3 font-bold">Students Appeared</th>
                <th class="p-3 font-bold">Students Passed</th>
                <th class="p-3 font-bold">Pass Percentage</th>
                <th class="p-3 font-bold">Scored &gt; 90%</th>
                <th class="p-3 font-bold">School Topper</th>
                <th class="p-3 font-bold text-right">Official Gazette</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${BOARD_RESULTS.classX.map(r => `
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-bold text-[#002b49]">${r.year}</td>
                  <td class="p-3 text-slate-700">${r.appeared}</td>
                  <td class="p-3 text-slate-700 font-bold">${r.passed}</td>
                  <td class="p-3 font-bold text-emerald-600">${r.passPercent}</td>
                  <td class="p-3 text-slate-700">${r.above90}</td>
                  <td class="p-3 font-bold text-amber-700">${r.topper}</td>
                  <td class="p-3 text-right">
                    ${r.downloadUrl ? `
                      <a href="${r.downloadUrl.replace(/^\//, '')}" download target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-[#002b49] hover:text-amber-600 underline">
                        <i data-lucide="file-text" class="w-3.5 h-3.5 text-amber-600"></i>
                        <span>Gazette PDF</span>
                      </a>
                    ` : `<span class="text-slate-400">—</span>`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold font-serif text-[#002b49] mb-2">Class XII (AISSCE) Board Results (Past 4 Academic Years)</h3>
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table class="w-full text-xs text-left">
            <thead class="bg-[#002b49] text-white">
              <tr>
                <th class="p-3 font-bold">Session</th>
                <th class="p-3 font-bold">Students Appeared</th>
                <th class="p-3 font-bold">Students Passed</th>
                <th class="p-3 font-bold">Pass Percentage</th>
                <th class="p-3 font-bold">Scored &gt; 90%</th>
                <th class="p-3 font-bold">School Topper</th>
                <th class="p-3 font-bold text-right">Official Gazette</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${BOARD_RESULTS.classXII.map(r => `
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-bold text-[#002b49]">${r.year}</td>
                  <td class="p-3 text-slate-700">${r.appeared}</td>
                  <td class="p-3 text-slate-700 font-bold">${r.passed}</td>
                  <td class="p-3 font-bold text-emerald-600">${r.passPercent}</td>
                  <td class="p-3 text-slate-700">${r.above90}</td>
                  <td class="p-3 font-bold text-amber-700">${r.topper}</td>
                  <td class="p-3 text-right">
                    ${r.downloadUrl ? `
                      <a href="${r.downloadUrl.replace(/^\//, '')}" download target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-[#002b49] hover:text-amber-600 underline">
                        <i data-lucide="file-text" class="w-3.5 h-3.5 text-amber-600"></i>
                        <span>Gazette PDF</span>
                      </a>
                    ` : `<span class="text-slate-400">—</span>`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Panel 3: Senior Secondary Streams & Curriculum -->
  <section id="tab-curriculum" class="disclosure-panel hidden py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Science Stream -->
        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-[#002b49] text-amber-400 flex items-center justify-center">
              <i data-lucide="atom" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-base font-bold text-[#002b49]">Senior Secondary Science Stream</h3>
              <p class="text-xs text-slate-500">Medical &amp; Non-Medical Combinations</p>
            </div>
          </div>
          <ul class="space-y-2 text-xs text-slate-700">
            <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Physics &amp; Chemistry (Compulsory)</li>
            <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Mathematics / Biology</li>
            <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Computer Science (Python &amp; SQL) / Informatics Practices</li>
            <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> English Core &amp; Physical Education</li>
          </ul>
        </div>

        <!-- Commerce Stream -->
        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center">
              <i data-lucide="trending-up" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-base font-bold text-[#002b49]">Senior Secondary Commerce Stream</h3>
              <p class="text-xs text-slate-500">Finance, Business &amp; Analytical Studies</p>
            </div>
          </div>
          <ul class="space-y-2 text-xs text-slate-700">
            <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Accountancy (Compulsory)</li>
            <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Business Studies &amp; Economics</li>
            <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Applied Mathematics / Informatics Practices</li>
            <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> English Core &amp; Physical Education</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
  `;

  return renderPageShell({
    title: "CBSE Mandatory Public Disclosure | The Oxford School Haridwar",
    description: "CBSE Mandatory Public Disclosure for The Oxford School Haridwar (Affiliation No. 3530408, School Code 81632). Verified certificates, safety clearances, and board results.",
    keywords: "CBSE mandatory disclosure Oxford School Haridwar, school code 81632, CBSE affiliation 3530408, board results Class 10 12 Haridwar, Oxford School Haridwar disclosure",
    canonicalUrl: "cbse.html",
    activePage: "cbse",
    content
  });
}

// ==========================================
// 6. GENERATE GALLERY.HTML (GALLERY)
// ==========================================
function generateGalleryPage() {
  const galleryItems = [
    { title: "Senior Secondary Campus Front View", category: "Campus", image: "images/campus_hero.jpg" },
    { title: "Robotics Laboratory Innovation Session", category: "Labs & Robotics", image: "images/robotics_real_1.jpg" },
    { title: "Senior Chemistry Practical Experimentation", category: "Labs & Robotics", image: "images/chemlab_1.jpg" },
    { title: "Inter-House Athletic Trials & Sprint Ground", category: "Sports & Athletics", image: "images/sports_ground_1.jpg" },
    { title: "Classroom Interactive Smart Panel Session", category: "Campus", image: "images/academics_real.jpg" },
    { title: "Fleet of Safe GPS School Buses", category: "Campus", image: "images/transport_real.jpg" },
    { title: "Central Knowledge Library & Reading Stacks", category: "Campus", image: "images/library_real.jpg" },
    { title: "Taekwondo & Karate Martial Arts Training", category: "Sports & Athletics", image: "images/karate.webp" },
    { title: "Computer IT Lab Hands-On Coding Lab", category: "Labs & Robotics", image: "images/computer_lab.jpg" }
  ];

  const content = `
  <!-- Gallery Hero -->
  <section class="bg-[#002b49] text-white py-14 text-left border-b border-white/10">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          Campus Life in Frames
        </span>
        <h1 class="text-3xl sm:text-4xl font-serif font-extrabold text-white mt-3">
          Photo &amp; Activity Gallery
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          Glimpses of vibrant school life, athletic milestones, robotics breakthrough demonstrations, and campus events at The Oxford School, Haridwar.
        </p>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2 mt-6">
          <button data-cat="All" class="gallery-filter-btn px-4 py-1.5 rounded-xl text-xs font-bold transition bg-[#002b49] text-white border border-amber-400 shadow-sm">All</button>
          <button data-cat="Campus" class="gallery-filter-btn px-4 py-1.5 rounded-xl text-xs font-bold transition bg-white text-slate-600 hover:bg-slate-100">Campus</button>
          <button data-cat="Labs & Robotics" class="gallery-filter-btn px-4 py-1.5 rounded-xl text-xs font-bold transition bg-white text-slate-600 hover:bg-slate-100">Labs &amp; Robotics</button>
          <button data-cat="Sports & Athletics" class="gallery-filter-btn px-4 py-1.5 rounded-xl text-xs font-bold transition bg-white text-slate-600 hover:bg-slate-100">Sports &amp; Athletics</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Grid -->
  <section class="py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${galleryItems.map(item => `
          <div data-category="${item.category}" class="gallery-item rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition group text-left">
            <div class="relative h-64 overflow-hidden bg-slate-100">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/70 text-white backdrop-blur-xs">
                ${item.category}
              </span>
            </div>
            <div class="p-4 bg-white">
              <h3 class="text-xs sm:text-sm font-bold text-[#002b49] group-hover:text-amber-600 transition-colors">
                ${item.title}
              </h3>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  `;

  return renderPageShell({
    title: "Campus Gallery | The Oxford School Haridwar - Photos & Events",
    description: "Browse the photo gallery of The Oxford School Haridwar. Glimpses of robotics labs, athletic sports day, smart classrooms, chemistry experiments, and school transport fleet.",
    keywords: "The Oxford School photo gallery, Haridwar school pictures, campus photos Roshnabad, school events gallery Haridwar",
    canonicalUrl: "gallery.html",
    activePage: "gallery",
    content
  });
}

// ==========================================
// 7. GENERATE CAREERS.HTML (CAREERS)
// ==========================================
function generateCareersPage() {
  const content = `
  <!-- Careers Hero -->
  <section class="bg-[#002b49] text-white py-14 text-left border-b border-white/10">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          Work with The Oxford Family
        </span>
        <h1 class="text-3xl sm:text-4xl font-serif font-extrabold text-white mt-3">
          Career Opportunities for Passionate Educators
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          We invite dynamic, committed, and qualified teachers and coaches to join our academic team in Roshnabad, Haridwar. Enjoy professional growth, modern lab access, and a respectful teaching culture.
        </p>
      </div>
    </div>
  </section>

  <!-- Openings List -->
  <section class="py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left: Open Positions -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <h2 class="text-xl font-serif font-bold text-[#002b49] mb-4">Current Faculty &amp; Staff Openings</h2>
          ${CAREER_OPENINGS.map(job => `
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#002b49] transition shadow-xs text-left">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <h3 class="text-base font-bold text-[#002b49]">${job.title}</h3>
                  <span class="text-xs font-semibold text-amber-700">${job.department} • ${job.type}</span>
                </div>
                <span class="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full shrink-0">
                  ${job.vacancies} ${job.vacancies > 1 ? 'Vacancies' : 'Vacancy'}
                </span>
              </div>
              <div class="mt-3 space-y-1 text-xs text-slate-600">
                <p><strong>Experience:</strong> ${job.experience}</p>
                <p><strong>Qualification:</strong> ${job.qualification}</p>
                <p class="pt-1 text-slate-700">${job.description}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Right: Fast Apply Application Form -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-md text-left sticky top-24">
            <h3 class="text-lg font-serif font-bold text-[#002b49]">Submit Your Resume / Profile</h3>
            <p class="text-xs text-slate-500 mt-1 mb-4">Or send directly via email to: <strong class="text-[#002b49]">theoxfordschool2014@gmail.com</strong></p>
            
            <form class="space-y-3.5 text-xs text-left site-enquiry-form">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input type="text" required placeholder="Dr. / Mr. / Ms." class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Position Applied For *</label>
                <select required class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]">
                  <option value="">Select Opening</option>
                  <option>PGT Physics / Chemistry / Maths</option>
                  <option>PGT Commerce &amp; Economics</option>
                  <option>TGT English &amp; Social Science</option>
                  <option>PRT / Mother Teacher (Primary)</option>
                  <option>Robotics &amp; Coding Instructor</option>
                  <option>Physical Education Coach</option>
                  <option>Administrative / Office Staff</option>
                </select>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Contact Phone *</label>
                  <input type="tel" name="phone" required pattern="[6-9][0-9]{9}" title="Please enter a valid 10-digit Indian mobile number" placeholder="10-digit mobile" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Experience (Yrs)</label>
                  <input type="number" placeholder="e.g. 3" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
                </div>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Email Address *</label>
                <input type="email" required placeholder="you@domain.com" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Highest Educational Qualification</label>
                <input type="text" placeholder="e.g. M.Sc. Physics, B.Ed." class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
              <button type="submit" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-xs shadow transition cursor-pointer">
                Submit Career Application
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;

  return renderPageShell({
    title: "Careers & Teacher Openings | The Oxford School Haridwar",
    description: "Join The Oxford School Haridwar faculty. Vacancies for PGT, TGT, PRT educators, Robotics coding instructors, and sports coaches in Roshnabad, Haridwar.",
    keywords: "Teaching jobs in Haridwar, school teacher vacancies Haridwar, PGT TGT jobs Roshnabad, Oxford School career opportunities, CBSE teacher hiring Haridwar",
    canonicalUrl: "careers.html",
    activePage: "careers",
    content
  });
}

// ==========================================
// 8. GENERATE CONTACT.HTML (CONTACT US)
// ==========================================
function generateContactPage() {
  const content = `
  <!-- Contact Hero -->
  <section class="bg-[#002b49] text-white py-14 text-left border-b border-white/10">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          Reach Our Administrative Desk
        </span>
        <h1 class="text-3xl sm:text-4xl font-serif font-extrabold text-white mt-3">
          Contact The Oxford School, Haridwar
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          We are here to assist parents, prospective scholars, and visitors. Connect with our administrative counter, principal's office, or transport desk.
        </p>
      </div>
    </div>
  </section>

  <!-- Contact Information & Map Grid -->
  <section class="py-16 bg-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left: Contact Details & Direct Form -->
        <div class="lg:col-span-6 space-y-6 text-left">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <i data-lucide="map-pin" class="w-5 h-5 text-amber-600 mb-2"></i>
              <h4 class="font-bold text-[#002b49] text-sm">Campus Location</h4>
              <p class="text-slate-600 mt-1 leading-relaxed">Shivratan City, Navodaya Nagar, Rajnadesh, Haridwar, Uttarakhand</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <i data-lucide="phone" class="w-5 h-5 text-amber-600 mb-2"></i>
              <h4 class="font-bold text-[#002b49] text-sm">Phone Inquiries</h4>
              <p class="text-slate-600 mt-1 leading-relaxed">+91 9068885862<br/>+91 7060089183</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <i data-lucide="mail" class="w-5 h-5 text-amber-600 mb-2"></i>
              <h4 class="font-bold text-[#002b49] text-sm">Official Email</h4>
              <p class="text-slate-600 mt-1 leading-relaxed">theoxfordschoolharidwar@gmail.com</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <i data-lucide="clock" class="w-5 h-5 text-amber-600 mb-2"></i>
              <h4 class="font-bold text-[#002b49] text-sm">Visiting Hours</h4>
              <p class="text-slate-600 mt-1 leading-relaxed">8:00 AM – 3:30 PM<br/>Monday to Saturday</p>
            </div>
          </div>

          <!-- Direct Message Form -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
            <h3 class="text-base font-bold text-[#002b49] mb-3">Send a Message to the School Desk</h3>
            <form class="space-y-3 text-xs site-enquiry-form">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input type="text" required placeholder="Parent or Visitor Name" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Contact Phone *</label>
                  <input type="tel" name="phone" required pattern="[6-9][0-9]{9}" title="Please enter a valid 10-digit Indian mobile number" placeholder="10-digit mobile" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input type="email" placeholder="name@domain.com" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]" />
                </div>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Subject / Nature of Inquiry</label>
                <select class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]">
                  <option>General School Inquiry</option>
                  <option>Admissions &amp; Registration</option>
                  <option>Transport Route Inquiry</option>
                  <option>Fee Confirmation</option>
                  <option>Other Assistance</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Message</label>
                <textarea rows="3" required placeholder="How may we assist you?" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49]"></textarea>
              </div>
              <button type="submit" class="w-full py-2.5 rounded-xl bg-[#002b49] hover:bg-amber-600 text-white font-bold text-xs shadow transition cursor-pointer">
                Send Direct Message
              </button>
            </form>
          </div>
        </div>

        <!-- Right: Campus Location Map -->
        <div class="lg:col-span-6 space-y-4">
          <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-96 bg-slate-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13837.288279427386!2d78.070000!3d29.930000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909477000000001%3A0x123456789abcdef!2sRoshnabad%2C%20Haridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="The Oxford School Haridwar Map Location">
            </iframe>
          </div>
          <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <i data-lucide="info" class="w-4 h-4 text-amber-700 shrink-0 mt-0.5"></i>
            <span><strong>Campus Landmark:</strong> Situated in close proximity to the Collectorate Office and District Courts, Roshnabad, Haridwar. Dedicated visitor parking available inside the school gates.</span>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;

  return renderPageShell({
    title: "Contact Us | The Oxford School Haridwar - Location, Phone & Email",
    description: "Get in touch with The Oxford School, Haridwar. Official address Shivratan City, Navodaya Nagar, Rajnadesh, Haridwar, phone numbers +91 9068885862, +91 7060089183, email, visiting hours, and interactive map.",
    keywords: "Contact Oxford School Haridwar, Oxford School Roshnabad phone number, school address Haridwar, visit The Oxford School Uttarakhand",
    canonicalUrl: "contact.html",
    activePage: "contact",
    content
  });
}

// ==========================================
// WRITE ALL FILES TO ROOT DIRECTORY & HTML/
// ==========================================
const pages = [
  // 1. Core Overview Pages
  { file: 'index.html', html: generateHomePage() },
  { file: 'about.html', html: generateAboutPage() },
  { file: 'admissions.html', html: generateAdmissionsPage() },
  { file: 'facilities.html', html: generateFacilitiesPage() },
  { file: 'cbse.html', html: generateCbsePage() },
  { file: 'gallery.html', html: generateGalleryPage() },
  { file: 'careers.html', html: generateCareersPage() },
  { file: 'contact.html', html: generateContactPage() },

  // 2. Dedicated About Section Subpages
  { file: 'chairman.html', html: generateChairmanPage() },
  { file: 'managing-director.html', html: generateManagingDirectorPage() },
  { file: 'principal.html', html: generatePrincipalPage() },
  { file: 'vision-mission.html', html: generateVisionMissionPage() },
  { file: 'houses.html', html: generateHousesPage() },

  // 3. Dedicated Admissions Subpages
  { file: 'admission-procedure.html', html: generateAdmissionProcedurePage() },
  { file: 'eligibility-criteria.html', html: generateEligibilityCriteriaPage() },
  { file: 'fee-guidelines.html', html: generateFeeGuidelinesPage() },
  { file: 'online-enquiry.html', html: generateOnlineEnquiryPage() },

  // 4. Dedicated Facilities Subpages
  { file: 'robotics-lab.html', html: generateRoboticsLabPage() },
  { file: 'science-labs.html', html: generateScienceLabsPage() },
  { file: 'computer-lab.html', html: generateComputerLabPage() },
  { file: 'sports-complex.html', html: generateSportsComplexPage() },
  { file: 'transport.html', html: generateTransportPage() },

  // 5. Dedicated Academics & Results Subpages
  { file: 'results.html', html: generateResultsPage() },
  { file: 'curriculum.html', html: generateCurriculumPage() }
];

console.log(`Writing ${pages.length} static HTML pages...`);
for (const p of pages) {
  const targetName = p.file === 'index.html' ? 'index.static.html' : p.file;
  const filePath = path.resolve('d:/UI/Oxford School', targetName);
  fs.writeFileSync(filePath, p.html, 'utf8');
  
  const subFilePath = path.resolve('d:/UI/Oxford School/html', p.file);
  fs.writeFileSync(subFilePath, p.html, 'utf8');
  
  console.log(`✓ Generated ${p.file} (${p.html.length} bytes)`);
}

console.log(`\nAll ${pages.length} static HTML pages generated successfully!`);
