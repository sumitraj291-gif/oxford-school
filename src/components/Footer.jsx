import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock, ShieldCheck,
  ArrowUpRight, Award, GraduationCap, ChevronRight
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#001729] text-slate-300 border-t border-slate-800 text-left">
      {/* Upper Footer: Affiliation & Highlights */}
      <div className="bg-[#001f35] py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* 1 */}
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">CBSE Affiliated Senior Secondary</h4>
                <p className="text-xs text-slate-400">Affiliation No. {SCHOOL_INFO.affiliationNo} • School Code: {SCHOOL_INFO.schoolCode}</p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Nurturing intellect, character &amp; leadership since 2014</p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">100% CBSE Board Pass Rate</h4>
                <p className="text-xs text-slate-400">Exemplary academic results in Class X &amp; XII</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand & Overview */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#002b49] p-1 shadow border border-amber-500/30 flex items-center justify-center shrink-0">
                <img src="/ox-logo.webp" alt="The Oxford School Crest" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block leading-tight">
                  The Oxford Educational Society
                </span>
                <h3 className="text-base sm:text-lg font-bold font-serif text-white tracking-tight leading-snug">
                  THE OXFORD SCHOOL
                </h3>
                <span className="text-[11px] text-slate-400 block leading-none">
                  Roshnabad, Haridwar
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              The Oxford School, Haridwar is an English medium co-educational senior secondary institution affiliated to CBSE New Delhi. We are committed to fostering academic excellence, STEM &amp; robotics skills, sportsmanship, and ethical values.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenEnquiry}
                className="px-3.5 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl text-xs font-bold transition shadow cursor-pointer"
              >
                Admission Enquiry 2026-27
              </button>
              <a
                href={SCHOOL_INFO.studentLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-medium transition flex items-center gap-1.5"
              >
                <span>Edunext Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>About Us &amp; Leadership</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Admissions &amp; Criteria</span>
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Campus &amp; Laboratories</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Photo &amp; Video Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Careers at Oxford</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CBSE & Disclosures */}
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
              CBSE &amp; Academics
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/cbse-disclosure" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Mandatory Public Disclosure</span>
                </Link>
              </li>
              <li>
                <Link to="/cbse-disclosure#results" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Class X &amp; XII Board Results</span>
                </Link>
              </li>
              <li>
                <Link to="/cbse-disclosure#curriculum" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Curriculum &amp; Streams</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://cbse.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>CBSE Official Portal</span>
                </a>
              </li>
              <li>
                <a
                  href={SCHOOL_INFO.studentLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Edunext ERP Login</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Campus Contact Details */}
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
              Campus Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`tel:${SCHOOL_INFO.phoneNumbers[0]}`} className="hover:text-white block font-medium">
                    {SCHOOL_INFO.phoneNumbers[0]}
                  </a>
                  <a href={`tel:${SCHOOL_INFO.phoneNumbers[1]}`} className="hover:text-white block font-medium">
                    {SCHOOL_INFO.phoneNumbers[1]} (Helpline)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white break-all">
                  {SCHOOL_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.officeHours}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00101d] py-5 border-t border-white/5 text-xs text-slate-500 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} The Oxford School, Haridwar. All Rights Reserved. Affiliated to CBSE, New Delhi.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/cbse-disclosure" className="hover:text-amber-400 transition">Mandatory Disclosure</Link>
            <span>•</span>
            <Link to="/admissions" className="hover:text-amber-400 transition">Admissions</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-amber-400 transition">Locate Campus</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
