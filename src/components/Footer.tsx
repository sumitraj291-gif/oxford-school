import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock, ShieldCheck,
  ExternalLink, Award, GraduationCap, ChevronRight
} from 'lucide-react';
import OxfordCrestLogo from './OxfordCrestLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-black text-white/70 border-t border-white/10 text-left relative z-20">
      {/* Top Bar: Accreditations */}
      <div className="border-b border-white/10 py-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0 btn-cut-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold tracking-wide">
                  CBSE Affiliated Senior Secondary
                </h4>
                <p className="text-xs text-white/50">
                  Affiliation No. {SCHOOL_INFO.affiliationNo} • School Code: {SCHOOL_INFO.schoolCode}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0 btn-cut-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold tracking-wide">
                  Holistic Excellence Since 2014
                </h4>
                <p className="text-xs text-white/50">
                  Playgroup to Class XII • Science, Commerce & Humanities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0 btn-cut-sm">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold tracking-wide">
                  100% CBSE Board Pass Rate
                </h4>
                <p className="text-xs text-white/50">
                  Consistent record of academic excellence in Haridwar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <OxfordCrestLogo className="w-10 h-10" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 block">
                  Shivratan Education Society
                </span>
                <h3 className="text-base font-semibold text-white tracking-wider">
                  THE OXFORD SCHOOL
                </h3>
                <span className="text-[10px] text-white/40 block">
                  Roshnabad, Haridwar
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/60">
              The Oxford School, Haridwar is a premier CBSE affiliated institution committed to fostering academic brilliance, robotics, sportsmanship, and deep character development.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="px-3.5 py-2 bg-white text-black text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-white/90 cursor-pointer transition-colors"
              >
                Admission Enquiry
              </button>
              <a
                href={SCHOOL_INFO.studentLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-white text-xs border border-white/20 hover:border-white/40 flex items-center gap-1.5 btn-cut-sm transition-colors"
              >
                <span>Edunext Portal</span>
                <ExternalLink className="w-3 h-3 text-white/60" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/10">
              Explore Oxford
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> About The School
                </Link>
              </li>
              <li>
                <Link to="/about#chairman" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Chairman's Desk
                </Link>
              </li>
              <li>
                <Link to="/about#principal" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Principal's Desk
                </Link>
              </li>
              <li>
                <Link to="/about#houses" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> House System
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Photo & Video Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions & Compliance */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/10">
              Admissions & CBSE
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Admission Procedure 2026-27
                </Link>
              </li>
              <li>
                <Link to="/admissions#criteria" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Age & Eligibility Matrix
                </Link>
              </li>
              <li>
                <Link to="/admissions#fees" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Fee Structure Guidelines
                </Link>
              </li>
              <li>
                <Link to="/cbse-disclosure" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Mandatory Public Disclosure
                </Link>
              </li>
              <li>
                <Link to="/cbse-disclosure#results" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Class X & XII Board Results
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-white/40" /> Career & Faculty Openings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/10">
              Campus Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {SCHOOL_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/60 shrink-0" />
                <span>{SCHOOL_INFO.primaryPhone} / {SCHOOL_INFO.phoneNumbers[0]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/60 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-white/60 shrink-0" />
                <span>{SCHOOL_INFO.officeHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal */}
      <div className="border-t border-white/10 py-6 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} The Oxford School, Haridwar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/cbse-disclosure" className="hover:text-white transition-colors">
              CBSE Mandatory Disclosure
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Campus Map
            </Link>
            <Link to="/admissions" className="hover:text-white transition-colors">
              Apply Online
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
