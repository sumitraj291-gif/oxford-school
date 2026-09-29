import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import OxfordCrestLogo from './OxfordCrestLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
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
        { name: "Principal's Desk", path: '/about#principal' },
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
        { name: 'Apply Online', path: '/admissions#enquiry' }
      ]
    },
    {
      name: 'Facilities',
      path: '/facilities',
      subItems: [
        { name: 'Robotics & AI Lab', path: '/facilities#robotics-lab' },
        { name: 'Science Laboratories', path: '/facilities#science-labs' },
        { name: 'Computer Workstations', path: '/facilities#computer-lab' },
        { name: 'Central Knowledge Library', path: '/facilities#library' },
        { name: 'Sports & Athletic Arena', path: '/facilities#sports-arena' },
        { name: 'Karate & Self Defense', path: '/facilities#karate-martial-arts' },
        { name: 'Abacus & Vedic Maths', path: '/facilities#abacus-maths' },
        { name: 'Safe GPS Transport Fleet', path: '/facilities#school-transport' }
      ]
    },
    {
      name: 'Academics & CBSE',
      path: '/cbse-disclosure',
      subItems: [
        { name: 'Mandatory Public Disclosure', path: '/cbse-disclosure' },
        { name: '10th & 12th Board Results', path: '/cbse-disclosure#results' },
        { name: 'Curriculum & Streams', path: '/cbse-disclosure#curriculum' }
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-2.5'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Branding */}
          <Link
            to="/"
            className="flex items-center gap-3 group text-left transition-transform hover:opacity-95"
          >
            <div className="text-[#002b49] transition-transform group-hover:scale-105">
              <OxfordCrestLogo className="w-10 h-10 md:w-11 md:h-11" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#002b49] text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
                O X F O R D
              </span>
              <span className="text-slate-500 text-[9px] font-medium tracking-[0.15em] uppercase hidden sm:block">
                Haridwar • CBSE #{SCHOOL_INFO.affiliationNo}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const hasSubItems = Boolean(item.subItems);

              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => hasSubItems && setActiveDropdown(item.name)}
                  onMouseLeave={() => hasSubItems && setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-md ${
                      isActive
                        ? 'text-[#002b49] bg-slate-100'
                        : 'text-slate-600 hover:text-[#002b49] hover:bg-slate-100/70'
                    }`}
                  >
                    <span>{item.name}</span>
                    {hasSubItems && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSubItems && (
                    <div
                      className={`absolute top-full left-0 pt-2 w-64 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="p-2 rounded-xl shadow-xl bg-white border border-slate-200 flex flex-col gap-0.5">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#002b49] hover:bg-slate-50 rounded-lg transition-colors text-left flex items-center justify-between group/sub"
                          >
                            <span>{sub.name}</span>
                            <ArrowRight className="w-3 h-3 text-[#002b49] opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Nav Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/admissions"
              className="px-4 py-2 text-[#002b49] text-xs font-semibold tracking-wider uppercase hover:bg-slate-100 btn-cut-border cursor-pointer transition-colors"
            >
              <span>Admissions</span>
            </Link>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="px-4 py-2 bg-[#002b49] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#003e6b] btn-cut cursor-pointer transition-colors shadow-sm"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="md:hidden px-3 py-1.5 bg-[#002b49] text-white text-[11px] font-semibold tracking-wider uppercase btn-cut"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-6 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-slate-100 pb-2">
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#002b49] uppercase tracking-wider"
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#002b49] transition-colors"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-[#002b49] text-xs font-semibold uppercase tracking-wider btn-cut-border"
              >
                <span>Explore Admissions</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 text-center bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut cursor-pointer shadow-sm"
              >
                Apply Online Now
              </button>
            </div>

            {/* Quick Contact Line */}
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#002b49]" />
                <span>{SCHOOL_INFO.primaryPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#002b49]" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
