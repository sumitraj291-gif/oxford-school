import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown, Menu, X, ExternalLink, Sparkles
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Navbar({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      subItems: [
        { name: 'About The School', path: '/about' },
        { name: "Founder Chairman's Desk", path: '/about#chairman' },
        { name: "Managing Director's Desk", path: '/about#managing-director' },
        { name: "Director's Desk", path: '/about#director' },
        { name: "Manager's Desk", path: '/about#manager' },
        { name: "Principal's Desk", path: '/about#principal' },
        { name: 'Executive Council Member', path: '/about#member' },
        { name: 'Vision, Mission & Motto', path: '/about#vision' },
        { name: 'The Four Houses', path: '/about#houses' }
      ]
    },
    {
      name: 'Admissions',
      path: '/admissions',
      subItems: [
        { name: 'Admission Procedure', path: '/admissions' },
        { name: 'Eligibility & Age Criteria', path: '/admissions#criteria' },
        { name: 'Fee Guidelines', path: '/admissions#fees' },
        { name: 'Online Enquiry Wizard', path: '/admissions#enquiry' }
      ]
    },
    {
      name: 'Facilities',
      path: '/facilities',
      subItems: [
        { name: 'Robotics & AI Innovation Lab', path: '/facilities#robotics-lab' },
        { name: 'Physics, Chemistry & Bio Labs', path: '/facilities#science-labs' },
        { name: 'Modern Computer IT Lab', path: '/facilities#computer-lab' },
        { name: 'Central Knowledge Library', path: '/facilities#library' },
        { name: 'Sports Complex & Athletics', path: '/facilities#sports-arena' },
        { name: 'Karate & Self-Defense Academy', path: '/facilities#karate-martial-arts' },
        { name: 'Abacus & Vedic Mathematics', path: '/facilities#abacus-maths' },
        { name: 'Safe GPS Transport Fleet', path: '/facilities#school-transport' }
      ]
    },
    {
      name: 'Academics & CBSE',
      path: '/cbse-disclosure',
      subItems: [
        { name: 'CBSE Mandatory Public Disclosure', path: '/cbse-disclosure' },
        { name: 'Class 10th & 12th Board Results', path: '/cbse-disclosure#results' },
        { name: 'Senior Secondary Streams & Curriculum', path: '/cbse-disclosure#curriculum' }
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white transition-shadow duration-300">
      {/* Main Navigation Bar (Full width, corner-to-corner symmetrical spacing) */}
      <nav className={`w-full transition-all duration-300 ${scrolled
        ? 'shadow-md border-b border-slate-200 py-2'
        : 'border-b border-slate-200/90 py-3'
        }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-2 lg:gap-4">

          {/* Left Anchor: School Crest & Authentic Branding (Corner aligned) */}
          <Link to="/" className="flex items-center gap-2.5 xl:gap-3 shrink-0 group text-left">
            <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <img src="/ox-logo.webp" alt="The Oxford School Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <span className="text-[10px] xl:text-[10.5px] uppercase font-bold tracking-wider text-amber-700 block leading-tight">
                CBSE AFFILIATED (10+2) • ESTD. 2014
              </span>
              <span className="text-base xl:text-lg font-serif font-extrabold text-[#002b49] tracking-tight group-hover:text-amber-600 transition block leading-tight">
                THE OXFORD SCHOOL
              </span>
              <span className="text-[10px] font-medium text-slate-500 block leading-tight mt-0.5">
                Roshnabad, Haridwar
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const hasSub = item.subItems && item.subItems.length > 0;
              const isDropdownOpen = activeDropdown === item.name;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasSub && setActiveDropdown(item.name)}
                  onMouseLeave={() => hasSub && setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-[13px] xl:text-[13.5px] font-semibold transition flex items-center gap-1 whitespace-nowrap relative ${isActive
                      ? 'text-[#002b49] font-bold after:content-[\'\'] after:absolute after:bottom-[-2px] after:left-2 after:right-2 after:h-[2px] after:bg-amber-500 after:rounded-full'
                      : 'text-slate-700 hover:text-[#002b49] hover:bg-slate-50'
                      }`}
                  >
                    <span>{item.name}</span>
                    {hasSub && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'
                        }`} />
                    )}
                  </Link>

                  {/* Submenu with continuous hover bridge (no flicker) */}
                  {hasSub && isDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-56 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-[#002b49] transition text-left"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Anchor: Action Buttons (Corner aligned) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Edunext Student Login Button */}
            <a
              href={SCHOOL_INFO.studentLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-semibold text-[#002b49] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition flex items-center gap-1 shadow-sm whitespace-nowrap"
              title="Student / Parent ERP Login Portal"
            >
              <span>Student Login</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* Admission Enquiry Button */}
            <button
              onClick={onOpenEnquiry}
              className="px-3 xl:px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 transition shadow flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Admission Enquiry</span>
            </button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="px-2.5 py-1 text-xs font-bold bg-amber-500 text-slate-950 rounded-lg shadow-sm"
            >
              Enquiry
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-slate-100 pb-1">
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 text-left"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 space-y-1 mt-0.5">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#002b49] text-left"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 mt-3 space-y-2.5">
              <a
                href={SCHOOL_INFO.studentLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-[#002b49] bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center gap-2"
              >
                <span>Edunext Student Login Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-white bg-[#002b49] hover:bg-[#003e6b] flex items-center justify-center gap-2 shadow"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Submit Admission Enquiry 2025-26</span>
              </button>

              <div className="pt-2 text-center text-xs text-slate-500">
                School Helpline: <a href={`tel:${SCHOOL_INFO.primaryPhone}`} className="font-bold text-slate-800">{SCHOOL_INFO.primaryPhone}</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
