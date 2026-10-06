import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Play, 
  Clock, MapPin, ChevronRight, Quote,
  Bell, Calendar, Newspaper, RotateCw, Send, PhoneCall, Mail
} from 'lucide-react';
import { 
  SCHOOL_INFO, KEY_METRICS, FACILITIES_DATA, 
  LEADERSHIP_MESSAGES, PARENT_TESTIMONIALS 
} from '../data/schoolData';
import NoticeBoardAndBirthday from '../components/NoticeBoardAndBirthday';
import VideoHighlightModal from '../components/VideoHighlightModal';

export default function Home({ onOpenEnquiry }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const videoRef = useRef(null);
  const [mobileVideoFailed, setMobileVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches
  );

  const toggleCardFlip = (idx) => {
    setFlippedCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const [enquiryStatus, setEnquiryStatus] = useState({ submitting: false, submitted: false, error: '' });
  const [bottomFormData, setBottomFormData] = useState({
    studentName: '',
    grade: '',
    dob: '',
    gender: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    query: ''
  });

  const handleBottomEnquirySubmit = (e) => {
    e.preventDefault();
    const cleanPhone = bottomFormData.phone.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setEnquiryStatus(prev => ({ ...prev, error: 'Please enter a valid 10-digit Indian mobile number.' }));
      return;
    }

    setEnquiryStatus({ submitting: true, submitted: false, error: '' });

    setTimeout(() => {
      setEnquiryStatus({ submitting: false, submitted: true, error: '' });
      setBottomFormData({
        studentName: '',
        grade: '',
        dob: '',
        gender: '',
        parentName: '',
        phone: '',
        email: '',
        address: '',
        previousSchool: '',
        query: ''
      });
      if (typeof window.showToast === 'function') {
        window.showToast('Enquiry Received!', 'The Oxford School admission desk will contact you within 2 hours.', 'success');
      }
    }, 1200);
  };

  // Screen size badalne par (rotate / resize) mobile ya desktop video choose karo
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Mobile browsers me autoplay ke liye muted DOM property me set honi chahiye
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playbackRate = isMobile ? 1 : 1.5; // desktop: 1.5x speed, mobile: normal
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }, [isMobile, mobileVideoFailed]);

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

  const heroVideoSrc = isMobile && !mobileVideoFailed
    ? '/videos/hero_video_mobile.mp4'
    : '/videos/hero_video.mp4';

  return (
    <div className="w-full text-left">
      
      {/* 1. Cinematic Hero Banner Section (Natural Background Video with Zooming School Title & Bottom Sleek Admission Button) */}
      <section className="relative h-[500px] sm:h-[560px] lg:h-[640px] w-full flex items-center justify-center overflow-hidden bg-black text-center">
        
        {/* Hero Video: mobile pe chhota video, desktop/tablet pe original HD video. Koi image overlay nahi. */}
        <video
          key={heroVideoSrc}
          ref={videoRef}
          src={heroVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload={isMobile ? 'auto' : 'none'}
          onError={() => {
            // mobile wali chhoti video na mile to original video chala do
            if (isMobile && !mobileVideoFailed) setMobileVideoFailed(true);
          }}
          onCanPlay={(e) => {
            const p = e.currentTarget.play();
            if (p && p.catch) p.catch(() => {});
          }}
          className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] saturate-[1.08] brightness-[0.82]"
        />

        {/* Subtle Cinematic Gradient & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 pointer-events-none" />

        {/* Center Cinematic Text Overlay: ONLY THE OXFORD SCHOOL with Slow Cinematic Zoom */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 flex items-center justify-center text-center select-none pointer-events-none">
          <div className="hero-cinematic-title">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white uppercase drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] leading-tight">
              THE OXFORD <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent inline-block">SCHOOL</span>
            </h1>
          </div>
        </div>

        {/* Bottom-Aligned Dynamic Color-Synchronized Admission Enquiry Button */}
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 flex items-center justify-center pointer-events-none">
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="btn-sync-dynamic pointer-events-auto px-6 py-2.5 sm:px-8 sm:py-3.5 text-white rounded-xl text-xs sm:text-sm font-bold shadow-2xl flex items-center gap-2.5 cursor-pointer border border-white/60 backdrop-blur-md group"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Admission Enquiry 2026–27</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. School News & Announcements Portal (Synchronized with Oxford Navy & Gold Theme) */}
      <section className="w-full bg-[#001e33] border-t-2 border-amber-500/50 border-b border-[#001524] py-8 sm:py-10 text-white shadow-inner">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Ticker Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-amber-500 text-[#002b49] px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider shrink-0 shadow-sm">
                <Bell className="w-3.5 h-3.5 fill-[#002b49]" />
                <span>Latest News</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 truncate">
                <span className="text-amber-300 font-semibold">Admissions 2026–27:</span> Registration open for Playgroup to Class XII • CBSE Board Exam Guidelines Released
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0 text-xs">
              <Link 
                to="/cbse-disclosure" 
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition"
              >
                <span>CBSE Circulars</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-white/20">|</span>
              <button
                onClick={onOpenEnquiry}
                className="text-white hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer transition"
              >
                <span>Admission Desk</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Section Heading & Grid */}
          <div className="pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>The Oxford School Bulletin</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  Official Announcements &amp; Updates
                </h2>
              </div>
              <p className="text-xs text-slate-300 max-w-md">
                Verified academic notices, admission updates, and event schedules for parents and students.
              </p>
            </div>

            {/* Synchronized Oxford Themed News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
              {featuredNews.map((news) => (
                <div 
                  key={news.id}
                  className="bg-[#002845] hover:bg-[#003358] rounded-xl p-4 sm:p-5 border border-white/10 hover:border-amber-400/50 shadow-md transition-all duration-200 flex flex-col justify-between text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30">
                        {news.category}
                      </span>
                      <span className="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-400/70" />
                        {news.date}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-xs text-slate-300/80 mt-2 line-clamp-2 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10">
                    {news.isEnquiry ? (
                      <button
                        type="button"
                        onClick={onOpenEnquiry}
                        className="btn-base btn-sm btn-accent"
                      >
                        <span>{news.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <Link
                        to="/cbse-disclosure"
                        className="btn-base btn-sm btn-secondary-inverted"
                      >
                        <span>{news.actionText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Key Metrics Cards */}
      <section className="bg-slate-100/70 py-10 border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {KEY_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center hover:border-amber-400 transition"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#002b49] font-serif">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mt-1">
                  {metric.suffix}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Daily Birthday Widget & Notice Board */}
      <NoticeBoardAndBirthday onOpenEnquiry={onOpenEnquiry} />

      {/* 5. Leadership & School Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
              Guiding Vision &amp; Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
              Leadership from the Heart
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Inspired by the school motto <strong className="text-slate-900">"Strive and Soar High"</strong>, our leadership guides the institution towards academic diligence, creative inquiry, and moral uprightness.
            </p>
          </div>

          {/* 6 Leaders Responsive Grid with 3D Flip Interaction */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {LEADERSHIP_MESSAGES.map((msg, idx) => {
              const isFlipped = !!flippedCards[idx];

              return (
                <div 
                  key={idx}
                  className="perspective-1000 h-[430px] sm:h-[460px] w-full select-none cursor-pointer group"
                  onClick={() => toggleCardFlip(idx)}
                  style={{ perspective: '1200px' }}
                >
                  <div 
                    className={`relative w-full h-full duration-700 transform-style-3d transition-transform rounded-2xl ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      WebkitTransformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    
                    {/* Front Face: Portrait Photo + Name & Designation Overlay */}
                    <div 
                      className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 flex flex-col justify-end text-left ${
                        isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
                      }`}
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg) translateZ(1px)',
                        zIndex: isFlipped ? 1 : 2
                      }}
                    >
                      <img 
                        src={msg.image} 
                        alt={msg.name} 
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                      />
                      
                      {/* Natural gradient overlay to ensure text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>


                      {/* Overlaid Info at Bottom */}
                      <div className="relative z-10 p-5 text-left text-white">
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-amber-300 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-amber-400/40 inline-block mb-1.5">
                          {msg.role}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight drop-shadow-md">
                          {msg.name}
                        </h3>
                        <p className="text-xs text-slate-200 font-medium mt-1 leading-snug">
                          {msg.qualification}
                        </p>

                        <div className="mt-3.5 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                          <span className="text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>Read Message &amp; Guidance</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                          <span className="btn-base btn-sm btn-ghost-dark text-white font-semibold">
                            <RotateCw className="w-3.5 h-3.5 text-amber-400" />
                            <span>Flip for Bio</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Back Face: Flip reveal with mini photo avatar + quote + message */}
                    <div 
                      className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-white p-5 sm:p-6 flex flex-col justify-between text-left ${
                        isFlipped ? 'pointer-events-auto' : 'pointer-events-none'
                      }`}
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(1px)',
                        zIndex: isFlipped ? 2 : 1
                      }}
                    >
                      
                      {/* Top Header with small side photo */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-sm shrink-0 bg-slate-100">
                            <img src={msg.image} alt={msg.name} className="w-full h-full object-cover object-top" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                              {msg.role}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-[#002b49] leading-tight">
                              {msg.name}
                            </h4>
                            <span className="text-xs text-slate-500 block">
                              The Oxford School, Haridwar
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Middle Quote & Message */}
                      <div 
                        className="my-auto py-2 space-y-2.5 overflow-y-auto max-h-[260px] pr-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <blockquote className="text-xs sm:text-[13px] font-semibold text-slate-900 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200/60 leading-relaxed text-left">
                          "{msg.quote}"
                        </blockquote>
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-left">
                          {msg.message}
                        </p>
                      </div>

                      {/* Bottom Controls */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardFlip(idx);
                          }}
                          className="btn-base btn-sm btn-ghost text-amber-800 font-semibold"
                        >
                          <RotateCw className="w-3.5 h-3.5" />
                          <span>Flip Back</span>
                        </button>
                        <Link 
                          to="/about"
                          onClick={(e) => e.stopPropagation()}
                          className="btn-base btn-sm btn-secondary"
                        >
                          <span>About School</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Facilities Showcase Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-left">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-100/60 px-3 py-1 rounded-full border border-amber-200 inline-block">
                Learning Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-2">
                Facilities Designed for Hands-On Learning
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                From hands-on robotics kits to CBSE standardized science laboratories, sports fields, and a serene library, our campus empowers students to discover their potential.
              </p>
            </div>

            <Link
              to="/facilities"
              className="btn-base btn-md btn-primary shrink-0 self-start md:self-end"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {FACILITIES_DATA.slice(0, 6).map((fac) => (
              <Link 
                key={fac.id}
                to={`/facilities#${fac.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition group flex flex-col justify-between text-left focus-visible:ring-2 focus-visible:ring-[#002b49]"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={fac.image} 
                      alt={fac.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent"></div>
                    <h3 className="absolute bottom-3 left-4 right-4 text-base font-bold text-white leading-snug drop-shadow-md text-left">
                      {fac.title}
                    </h3>
                  </div>

                  <div className="p-5 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                      {fac.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {fac.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 text-left">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-100 text-left">
                  <span className="text-xs font-bold text-[#002b49] group-hover:text-amber-600 inline-flex items-center gap-1 transition">
                    <span>View details &amp; equipment</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Video Activities Showcase Section */}
      <section className="py-16 bg-[#002b49] text-white relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Life at The Oxford School</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Watch Our Students Excel in Academics, Sports &amp; Cultural Arts
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Step inside the vibrant corridors of The Oxford School, Roshnabad, Haridwar. Watch our scholars conduct experiments in science labs, program robotic rovers, and celebrate India's heritage during our Annual Day festivities.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="bg-white/10 rounded-xl p-3 border border-white/10 text-left">
                  <div className="text-xl font-bold font-serif text-amber-400">100%</div>
                  <div className="text-xs text-slate-300 mt-0.5">CBSE Board Pass Record</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 border border-white/10 text-left">
                  <div className="text-xl font-bold font-serif text-amber-400">20+</div>
                  <div className="text-xs text-slate-300 mt-0.5">Clubs &amp; Sports Disciplines</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedVideo({
                    title: "Annual Day Cultural Festival - The Oxford School Haridwar",
                    category: "Cultural Extravaganza",
                    poster: "/images/campus_real_main.jpg",
                    description: "Witness captivating classical dances, musical performances, and theatrical acts presented by Oxford students in the school auditorium."
                  })}
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition shadow-lg cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Annual Day Video</span>
                </button>

                <button
                  onClick={() => setSelectedVideo({
                    title: "Sports Day Relay & Championship - Campus Grounds",
                    category: "Athletics & Games",
                    poster: "/images/sports.jpg",
                    description: "Relive the excitement of track and field events, relay races, and the coveted inter-house championship trophy presentation."
                  })}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs flex items-center gap-2 border border-white/20 transition cursor-pointer"
                >
                  <Play className="w-4 h-4" />
                  <span>Play Sports Day Video</span>
                </button>
              </div>
            </div>

            {/* Video Showcase Card */}
            <div className="lg:col-span-6">
              <div 
                onClick={() => setSelectedVideo({
                  title: "Campus Walkthrough - The Oxford School Haridwar",
                  category: "Campus Life",
                  poster: "/images/campus_real_gate.jpg",
                  description: "Full walkthrough of our classrooms, smart panels, robotics lab, and lush green grounds in Roshnabad, Haridwar."
                })}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group cursor-pointer aspect-video"
              >
                <img 
                  src="/images/campus_real_main.jpg" 
                  alt="Campus Activity" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-black/30"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="text-white text-sm font-bold mt-4 drop-shadow">Click to Watch School Highlights</span>
                  <span className="text-xs text-amber-300 mt-1">Campus Video Tour • Roshnabad, Haridwar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Parent Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
              Community Voices
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
              Words from Haridwar Parents
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Hear what parents and guardians from Haridwar, BHEL, and SIDCUL say about their children's learning experience at The Oxford School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PARENT_TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between text-left"
              >
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-amber-600/40" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic text-left">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200 text-left">
                  <h3 className="text-sm font-bold text-[#002b49]">
                    {t.parentName}
                  </h3>
                  <p className="text-xs text-amber-800 font-medium">
                    {t.childInfo}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {t.profession}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Comprehensive Online Admission & Enquiry Form Section (Bottom Section with All Fields) */}
      <section id="admission-enquiry-section" className="py-16 bg-[#001729] text-white text-left relative overflow-hidden border-t-2 border-amber-500/40">
        {/* Background Accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3.5 py-1 rounded-full border border-amber-400/30 inline-block mb-3">
              Admissions Open 2026–27
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Admission Enquiry &amp; Prospectus Application
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your child's holistic educational journey. Submit the complete enquiry form below to receive syllabus information, fee structure, and schedule a personalized campus tour.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Information, Perks & Helpline Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Key Admissions Perks Card */}
              <div className="bg-[#002b49] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Why Join The Oxford School?</h3>
                    <p className="text-xs text-amber-300">CBSE Affiliation No. {SCHOOL_INFO.affiliationNo} • School Code: {SCHOOL_INFO.schoolCode} • Roshnabad</p>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">100% Board Pass Records:</strong> Consistent top CBSE ranks in Class X and XII Science &amp; Commerce streams.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Cutting-Edge STEM &amp; AI:</strong> Dedicated Robotics Labs, smart interactive classrooms, and advanced composite labs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Individualized Mentor Focus:</strong> Optimal teacher-student ratio of 1:25 ensures personal care and character building.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Safe GPS Transport &amp; Sports:</strong> Full athletic complex with cricket pitch, badminton, basketball, karate, and yoga.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Admissions Contact Card */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-3.5 text-xs">
                <h4 className="text-sm font-bold text-white tracking-wide border-b border-white/10 pb-2">
                  Direct Admission Helplines
                </h4>
                <div className="flex items-center gap-3 text-slate-300">
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>+91 9068885862, +91 7060089183</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{SCHOOL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Shivratan City, Navodaya Nagar, Rajnadesh, Haridwar, Uttarakhand</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Office Hours: 8:00 AM – 3:30 PM (Monday to Saturday)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Complete Enquiry Form with All Fields (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-left">
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-amber-400/40 p-1 shadow-sm flex items-center justify-center shrink-0">
                        <img src="/ox-logo.webp" alt="The Oxford School Logo" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-[#002b49] leading-tight">Student Admission Enquiry Form</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Please provide complete information. All starred (*) fields are required.</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg border border-amber-300 shrink-0">
                      Session 2026–27
                    </span>
                  </div>
                </div>

                {enquiryStatus.submitted ? (
                  <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-emerald-900">Enquiry Submitted Successfully!</h4>
                    <p className="text-xs text-emerald-700 max-w-md mx-auto">
                      Thank you for your interest in The Oxford School, Haridwar. Our admission counselor will review your child's application and call you within 2 working days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setEnquiryStatus({ submitting: false, submitted: false, error: '' })}
                      className="mt-2 text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBottomEnquirySubmit} className="space-y-4 text-xs site-enquiry-form">
                    
                    {enquiryStatus.error && (
                      <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-semibold">
                        {enquiryStatus.error}
                      </div>
                    )}

                    {/* Row 1: Student Full Name & Grade Applying For */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Student's Full Name *</label>
                        <input
                          type="text"
                          required
                          value={bottomFormData.studentName}
                          onChange={(e) => setBottomFormData({ ...bottomFormData, studentName: e.target.value })}
                          placeholder="e.g. Master Aarav Chauhan"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Grade / Class Applying For *</label>
                        <select
                          required
                          value={bottomFormData.grade}
                          onChange={(e) => setBottomFormData({ ...bottomFormData, grade: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs bg-white"
                        >
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

                    {/* Row 2: Date of Birth & Gender */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Date of Birth *</label>
                        <input
                          type="date"
                          required
                          value={bottomFormData.dob}
                          onChange={(e) => setBottomFormData({ ...bottomFormData, dob: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Gender *</label>
                        <select
                          required
                          value={bottomFormData.gender}
                          onChange={(e) => setBottomFormData({ ...bottomFormData, gender: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs bg-white"
                        >
                          <option value="">Select Gender</option>
                          <option>Boy / Male</option>
                          <option>Girl / Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Parent/Guardian Name & Contact Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Parent / Guardian's Full Name *</label>
                        <input
                          type="text"
                          required
                          value={bottomFormData.parentName}
                          onChange={(e) => setBottomFormData({ ...bottomFormData, parentName: e.target.value })}
                          placeholder="Father or Mother's Name"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Parent Contact Mobile *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          pattern="[6-9][0-9]{9}"
                          title="Please enter a valid 10-digit Indian mobile number"
                          value={bottomFormData.phone}
                          onChange={(e) => setBottomFormData({ ...bottomFormData, phone: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs"
                        />
                      </div>
                    </div>

                    {/* Row 4: Email Address */}
                    <div>
                      <label className="block font-bold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={bottomFormData.email}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs"
                      />
                      <input type="hidden" name="academicSession" value="2026-2027" />
                    </div>

                    {/* Row 5: Residential Address & Previous School */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Residential Address / City *</label>
                        <input
                          type="text"
                          required
                          value={bottomFormData.address}
                          onChange={(e) => setBottomFormData({ ...bottomFormData, address: e.target.value })}
                          placeholder="e.g. Roshnabad / Haridwar / SIDCUL / BHEL"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Previous School Attended (If any)</label>
                        <input
                          type="text"
                          value={bottomFormData.previousSchool}
                          onChange={(e) => setBottomFormData({ ...bottomFormData, previousSchool: e.target.value })}
                          placeholder="Name of previous school"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs"
                        />
                      </div>
                    </div>

                    {/* Row 6: Any Specific Query / Message */}
                    <div>
                      <label className="block font-bold text-slate-700 mb-1.5">Questions or Specific Requirements (Optional)</label>
                      <textarea
                        rows="3"
                        value={bottomFormData.query}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, query: e.target.value })}
                        placeholder="Tell us about your child's interests, transport requirements, or questions..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#002b49] focus:ring-1 focus:ring-[#002b49] text-xs"
                      />
                    </div>

                    {/* Submit Button & Counselor Info */}
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 mb-3 gap-1">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Counselor response time: <strong>Within 2 working days</strong></span>
                        </span>
                        <span className="text-slate-400">Target Session: 2026–2027</span>
                      </div>
                      <button
                        type="submit"
                        disabled={enquiryStatus.submitting}
                        className="btn-base btn-lg btn-primary w-full justify-center shadow-xl"
                      >
                        {enquiryStatus.submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Submitting Admission Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Complete Admission Enquiry</span>
                          </>
                        )}
                      </button>
                      <p className="text-xs text-slate-500 text-center mt-2.5">
                        🔒 Your information is confidential and used solely for admission communication.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Video Modal */}
      <VideoHighlightModal
        isOpen={!!selectedVideo}
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
