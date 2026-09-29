import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Play, Award,
  Users, BookOpen, Cpu, Bus, CheckCircle2,
  Calendar, Bell, ExternalLink, ChevronDown, Sparkles
} from 'lucide-react';
import OxfordCrestLogo from '../components/OxfordCrestLogo';
import NoticeBoardAndBirthday from '../components/NoticeBoardAndBirthday';
import SchoolLifeFeatures from '../components/SchoolLifeFeatures';
import {
  SCHOOL_INFO, KEY_METRICS, FACILITIES_DATA,
  LEADERSHIP_MESSAGES, BOARD_RESULTS, GALLERY_ITEMS,
  PARENT_TESTIMONIALS, NOTICES_AND_CIRCULARS
} from '../data/schoolData';

interface HomeProps {
  onOpenEnquiry: () => void;
  onOpenVideo: (url: string, title?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEnquiry, onOpenVideo }) => {
  const [activeVideoSrc, setActiveVideoSrc] = useState<string>(
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260717_120352_eb988725-1351-43b3-8095-16e4a1005e3d.mp4'
  );

  const [activeNoticeTab, setActiveNoticeTab] = useState<number>(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-inter">
      {/* =========================================================================
          HERO LANDING (Retains full-screen video specs)
          ========================================================================= */}
      <section className="h-screen w-full bg-slate-900 p-3 md:p-4 font-inter overflow-hidden relative">
        {/* Liquid-glass Inner Container */}
        <div className="w-full h-full rounded-2xl flex flex-col overflow-hidden relative bg-black border border-white/10 shadow-2xl">
          {/* Background Looping Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            key={activeVideoSrc}
            src={activeVideoSrc}
            className="absolute inset-0 w-full h-full object-cover anim-fade"
            style={{ animationDelay: '0.2s' }}
          />

          {/* Vignette / Dark Ambient Overlay for video legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

          {/* Hero Navbar */}
          <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
            {/* Logo block */}
            <div
              className="anim-stagger flex flex-col items-center cursor-pointer select-none text-white"
              style={{ animationDelay: '0.1s' }}
              onClick={() => scrollToSection('campus-overview')}
            >
              <OxfordCrestLogo className="w-14 h-14 md:w-16 md:h-16" />
              <span className="text-white text-[10px] md:text-xs tracking-[0.4em] mt-1 font-light">
                O X F O R D
              </span>
            </div>

            {/* Nav buttons */}
            <div
              className="anim-stagger flex items-center gap-3"
              style={{ animationDelay: '0.2s' }}
            >
              {/* Video source switch button */}
              <button
                type="button"
                onClick={() =>
                  setActiveVideoSrc(prev =>
                    prev.includes('cloudfront')
                      ? '/videos/hero_video.mp4'
                      : 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260717_120352_eb988725-1351-43b3-8095-16e4a1005e3d.mp4'
                  )
                }
                title="Switch between Cinematic Loop and Authentic Campus Video"
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-white/90 hover:text-white bg-white/15 hover:bg-white/25 rounded-full transition backdrop-blur-sm"
              >
                <Play className="w-3 h-3 text-white" />
                <span>{activeVideoSrc.includes('cloudfront') ? 'Switch to Campus Video' : 'Switch to Aerial View'}</span>
              </button>

              <Link
                to="/admissions"
                className="hidden md:block px-5 py-2.5 text-white text-sm hover:bg-white/10 btn-cut-border-white cursor-pointer transition-colors"
              >
                <span>Admissions</span>
              </Link>
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="hidden md:block px-5 py-2.5 bg-white text-slate-900 text-sm hover:bg-white/90 btn-cut cursor-pointer transition-colors font-semibold shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </nav>

          {/* Main content */}
          <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-10 pb-8 md:pb-10">
            {/* Top section */}
            <div className="flex-1 flex items-center relative">
              {/* Left column (hidden below lg) */}
              <div
                className="anim-stagger hidden lg:flex flex-col gap-6 absolute left-0 top-[18%]"
                style={{ animationDelay: '0.4s' }}
              >
                <p className="text-white/90 text-base leading-relaxed max-w-[220px]">
                  Learn with us,
                  <br />
                  grow with us,
                  <br />
                  lead the future
                </p>

                {/* Decorative group */}
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full border border-white/50" />
                    <span className="w-4 h-4 rounded-full border border-white/50" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-white/80 text-xs leading-tight font-medium">
                      Excellence
                      <br />
                      in Education
                    </span>
                    <span className="text-white/60 text-xs">01</span>
                  </div>
                </div>
              </div>

              {/* Center heading */}
              <div
                className="anim-stagger w-full text-center"
                style={{ animationDelay: '0.5s' }}
              >
                <h1
                  className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-[-0.04em]"
                  style={{ textShadow: '0 2px 14px rgba(0,0,0,0.35)' }}
                >
                  Nurturing Young Minds
                  <br />
                  Shaping Bright Futures
                  <br />
                  The Oxford School
                </h1>
              </div>
            </div>

            {/* Bottom row (3 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-8">
              {/* Col 1 */}
              <div
                className="anim-stagger flex items-center justify-center md:justify-end"
                style={{ animationDelay: '0.7s' }}
              >
                <p className="text-white/90 text-sm leading-relaxed max-w-[260px] text-center md:text-left md:ml-auto">
                  We nurture curiosity, character and confidence, preparing every
                  student for the world ahead.
                </p>
              </div>

              {/* Col 2 */}
              <div
                className="anim-stagger flex flex-col items-center gap-8 md:gap-24"
                style={{ animationDelay: '0.85s' }}
              >
                <span className="text-white text-2xl md:text-3xl font-medium tracking-tight">
                  Academic Excellence
                </span>
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="w-full max-w-[280px] py-3.5 bg-white flex items-center justify-center gap-2 text-slate-950 hover:bg-white/90 transition-colors group btn-cut cursor-pointer shadow-xl font-semibold"
                >
                  <span className="text-sm font-semibold">Explore Admissions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Col 3 */}
              <div
                className="anim-stagger flex items-center justify-center md:justify-end gap-3"
                style={{ animationDelay: '1s' }}
              >
                {/* Facebook */}
                <a
                  href={SCHOOL_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white flex items-center justify-center text-slate-900 hover:bg-white/90 transition-colors btn-cut-sm cursor-pointer shadow-lg"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={SCHOOL_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white flex items-center justify-center text-slate-900 hover:bg-white/90 transition-colors btn-cut-sm cursor-pointer shadow-lg"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={SCHOOL_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 bg-white flex items-center justify-center text-slate-900 hover:bg-white/90 transition-colors btn-cut-sm cursor-pointer shadow-lg"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div
            onClick={() => scrollToSection('campus-overview')}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[10px] text-white/70 hover:text-white uppercase tracking-[0.2em] cursor-pointer transition select-none"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-3 h-3 animate-bounce" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIVE ANNOUNCEMENTS TICKER (Light Amber Alert Bar)
          ========================================================================= */}
      <div id="campus-overview" className="border-y border-amber-200/80 bg-amber-50/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#002b49]">
              Notice Board
            </span>
          </div>

          <div className="flex-1 overflow-hidden w-full text-xs text-slate-700">
            <div className="flex items-center justify-between">
              <span className="truncate font-medium">
                {NOTICES_AND_CIRCULARS[activeNoticeTab]?.title} ({NOTICES_AND_CIRCULARS[activeNoticeTab]?.date})
              </span>
              <div className="flex items-center gap-1 ml-4 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveNoticeTab(prev => (prev > 0 ? prev - 1 : NOTICES_AND_CIRCULARS.length - 1))}
                  className="px-2 py-0.5 bg-amber-200/60 hover:bg-amber-200 text-slate-800 rounded text-[10px] font-semibold"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActiveNoticeTab(prev => (prev < NOTICES_AND_CIRCULARS.length - 1 ? prev + 1 : 0))}
                  className="px-2 py-0.5 bg-amber-200/60 hover:bg-amber-200 text-slate-800 rounded text-[10px] font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          KEY STATS & CBSE CREDENTIALS (Clean Light Theme)
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Institutional Benchmark
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Excellence in Numbers
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Affiliated with the Central Board of Secondary Education (CBSE No. {SCHOOL_INFO.affiliationNo}), delivering premier English-medium schooling in Roshnabad, Haridwar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
            {KEY_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center flex flex-col justify-center items-center hover:border-slate-300 hover:shadow-md transition duration-300"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-[#002b49] tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-2">
                  {metric.label}
                </span>
                <span className="text-[11px] text-slate-500 mt-1">
                  {metric.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          NOTICE BOARD & DAILY BIRTHDAYS CELEBRATION
          ========================================================================= */}
      <NoticeBoardAndBirthday onOpenEnquiry={onOpenEnquiry} />

      {/* =========================================================================
          AUTHENTIC CAMPUS VIDEO SPOTLIGHT (Clean Slate Light Background)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-[#002b49] font-medium shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Immersive 4K Campus Tour</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Experience Life at The Oxford School
              </h2>

              <p className="text-sm leading-relaxed text-slate-600">
                Explore our sprawling green campus in Roshnabad, state-of-the-art robotics labs, modern smart classrooms, athletic fields, and holistic learning atmosphere where young scholars blossom.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#002b49] mt-1 shrink-0" />
                  <span className="text-xs text-slate-700">
                    High-precision STEM & Robotics coding workstation labs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#002b49] mt-1 shrink-0" />
                  <span className="text-xs text-slate-700">
                    Olympic standard sports arena, running track & martial arts dojo
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#002b49] mt-1 shrink-0" />
                  <span className="text-xs text-slate-700">
                    Comprehensive bus transport fleet equipped with GPS tracking & CCTV
                  </span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenVideo('/videos/hero_video.mp4', 'The Oxford School - Official Campus Video Tour')}
                  className="px-6 py-3 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] cursor-pointer flex items-center gap-2 transition shadow-md"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Play Campus Video</span>
                </button>
                <Link
                  to="/facilities"
                  className="px-5 py-3 text-xs text-[#002b49] uppercase tracking-wider btn-cut-border hover:bg-slate-100 transition font-semibold"
                >
                  <span>All Facilities</span>
                </Link>
              </div>
            </div>

            {/* Right Video / Poster Preview */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onOpenVideo('/videos/hero_video.mp4', 'The Oxford School - Official Campus Video Tour')}
                className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl group cursor-pointer aspect-video bg-slate-900"
              >
                <img
                  src="/images/campus_real_main.jpg"
                  alt="The Oxford School Haridwar Campus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/15 transition-colors" />

                {/* Big Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white group-hover:bg-white/95 text-[#002b49] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 btn-cut">
                    <Play className="w-8 h-8 fill-[#002b49] ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-800 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="font-semibold tracking-wide text-slate-900">Oxford School Official Campus Highlights</span>
                  <span className="text-[11px] text-slate-500 font-medium">Tap to watch video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS LIFE FEATURES (House Points Leaderboard, Schedule, Streams, Clubs)
          ========================================================================= */}
      <SchoolLifeFeatures />

      {/* =========================================================================
          LEADERSHIP DESK (Clean White Cards)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Guiding Visionaries
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Messages from Leadership
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Committed educationists steering The Oxford School toward new pinnacles of moral rectitude and scholastic leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_MESSAGES.slice(0, 3).map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top filter hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 block">
                        {leader.role}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-white/70">
                        {leader.qualification}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 text-left space-y-3">
                    <blockquote className="text-xs italic text-slate-700 border-l-2 border-[#002b49] pl-3">
                      "{leader.quote}"
                    </blockquote>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                      {leader.message}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 text-left">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs text-[#002b49] hover:underline uppercase tracking-wider font-bold"
                  >
                    <span>Read Full Address</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS FACILITIES (Light Cards with Real Photos)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
                World-Class Infrastructure
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
                Designed for Discovery
              </h2>
              <p className="text-sm text-slate-600 mt-3">
                From autonomous robotics and coding workstations to CBSE-compliant science labs and multi-sport arenas.
              </p>
            </div>
            <Link
              to="/facilities"
              className="px-6 py-3 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] transition text-center shrink-0 shadow-sm"
            >
              Explore All Facilities
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.slice(0, 4).map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group flex flex-col justify-between hover:shadow-md transition duration-300 text-left"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 tracking-wide mb-2 group-hover:text-[#002b49] transition">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {fac.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/facilities#${fac.id}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#002b49] hover:underline uppercase tracking-wider font-semibold"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOARD EXAMINATION RESULTS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              CBSE Affiliated Record
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Unrivaled Academic Feats
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              100% CBSE board pass rate with scholars securing top honors in Science, Commerce, and Humanities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Class X Card */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-left shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#002b49]">
                    Secondary Examination
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">Class X Board Results</h3>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">
                  100% Pass
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Top Score (Aryan Bhatt):</span>
                  <span className="text-slate-900 font-bold text-base">98.4%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Scholars Scoring Above 90%:</span>
                  <span className="text-slate-900 font-bold text-base">38 Students</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Distinction Rate:</span>
                  <span className="text-slate-900 font-bold text-base">84%</span>
                </div>
              </div>

              <Link
                to="/cbse-disclosure#results"
                className="w-full py-2.5 text-center text-xs text-[#002b49] uppercase tracking-wider btn-cut-border block font-semibold hover:bg-slate-100 transition"
              >
                <span>View Historical Statistics</span>
              </Link>
            </div>

            {/* Class XII Card */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-left shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#002b49]">
                    Senior Secondary Examination
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">Class XII Board Results</h3>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">
                  100% Pass
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Top Score (Tanya Sharma - Science):</span>
                  <span className="text-slate-900 font-bold text-base">97.8%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Scholars Scoring Above 90%:</span>
                  <span className="text-slate-900 font-bold text-base">27 Students</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">University Placements:</span>
                  <span className="text-slate-900 font-bold text-base">Top IITs, NITs, Central Univ</span>
                </div>
              </div>

              <Link
                to="/cbse-disclosure#results"
                className="w-full py-2.5 text-center text-xs text-[#002b49] uppercase tracking-wider btn-cut-border block font-semibold hover:bg-slate-100 transition"
              >
                <span>View Topper Honor Roll</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS PHOTO GALLERY HIGHLIGHTS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
                Life & Moments
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
                Campus Gallery
              </h2>
              <p className="text-sm text-slate-600 mt-3">
                Glimpses into student life, sports championships, lab experiments, and cultural festivities.
              </p>
            </div>
            <Link
              to="/gallery"
              className="px-6 py-3 text-[#002b49] text-xs uppercase tracking-wider btn-cut-border hover:bg-slate-100 transition text-center shrink-0 font-semibold"
            >
              <span>View All 24+ Photos</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 8).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryImg(item.image)}
                className="relative aspect-square overflow-hidden rounded-xl border border-slate-200 shadow-sm group cursor-pointer bg-slate-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-left text-white">
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT TESTIMONIALS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Community Voices
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Trusted by Haridwar Families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {PARENT_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm"
              >
                <p className="text-xs leading-relaxed text-slate-700 italic mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-sm font-bold text-slate-900">{t.parentName}</h4>
                  <p className="text-[11px] text-[#002b49] font-medium">{t.childInfo}</p>
                  <p className="text-[10px] text-slate-500">{t.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL ADMISSION CTA BANNER (Oxford Navy Deep Accent)
          ========================================================================= */}
      <section className="py-24 bg-gradient-to-r from-[#001a2e] to-[#002b49] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="text-white">
            <OxfordCrestLogo className="w-16 h-16 mx-auto" />
          </div>
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-amber-400 block">
            Admissions Open 2026–27
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Empower Your Child's Future at Oxford School
          </h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            Join a vibrant scholastic community where intellectual rigor, ethical values, and holistic character development walk hand in hand.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="px-8 py-3.5 bg-white text-slate-950 text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-slate-100 cursor-pointer shadow-2xl transition"
            >
              Apply for Admission Now
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 text-white text-xs uppercase tracking-wider btn-cut-border-white hover:bg-white/10 transition font-semibold"
            >
              <span>Schedule a Campus Visit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      {selectedGalleryImg && (
        <div
          onClick={() => setSelectedGalleryImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedGalleryImg}
              alt="Oxford School Campus High-res"
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/20"
            />
            <span className="block text-center text-xs text-white/70 mt-2">
              Click anywhere to close
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
