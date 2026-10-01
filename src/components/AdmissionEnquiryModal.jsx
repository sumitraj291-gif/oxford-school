import React, { useState } from 'react';
import { X, Send, CheckCircle, GraduationCap, MapPin, User, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function AdmissionEnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    gender: 'Male',
    dob: '',
    grade: 'Class I',
    stream: '',
    fatherName: '',
    motherName: '',
    phone: '',
    alternatePhone: '',
    email: '',
    currentSchool: '',
    locality: '',
    transportRequired: 'Yes',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sanitize = (str, maxLen = 80) => {
    if (!str) return 'N/A';
    return String(str).trim().slice(0, maxLen).replace(/[*_~`]/g, '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Strict Indian mobile validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      alert('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.');
      return;
    }

    const generatedRef = 'TOS-ENQ-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(generatedRef);

    // Format WhatsApp Message with sanitized inputs
    const text = `*THE OXFORD SCHOOL, HARIDWAR - ADMISSION ENQUIRY*
----------------------------------------
*Reference ID:* ${generatedRef}
*Student Name:* ${sanitize(formData.studentName, 60)}
*Date of Birth:* ${sanitize(formData.dob, 20)} (${formData.gender})
*Class Seeking Admission:* ${formData.grade} ${formData.stream ? `(${sanitize(formData.stream, 40)})` : ''}

*Parent Details:*
- *Father's Name:* ${sanitize(formData.fatherName, 60)}
- *Mother's Name:* ${formData.motherName ? sanitize(formData.motherName, 60) : 'N/A'}
- *Primary Contact:* +91 ${cleanPhone}
- *Alternate Phone:* ${formData.alternatePhone ? sanitize(formData.alternatePhone, 15) : 'N/A'}
- *Email:* ${formData.email ? sanitize(formData.email, 60) : 'N/A'}

*Academic & Logistics:*
- *Current/Previous School:* ${formData.currentSchool ? sanitize(formData.currentSchool, 80) : 'N/A'}
- *Residential Locality:* ${formData.locality ? sanitize(formData.locality, 60) : 'Haridwar'}
- *School Transport Required:* ${formData.transportRequired}
- *Remarks/Query:* ${formData.additionalNotes ? sanitize(formData.additionalNotes, 200) : 'N/A'}
----------------------------------------
_Generated via Official School Website Portal_`;

    const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp securely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#002b49] text-white p-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-amber-400/40 flex items-center justify-center p-1 shadow-sm shrink-0">
                <img src="/ox-logo.webp" alt="The Oxford School Crest" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-amber-400">The Oxford School, Haridwar</h3>
                <p className="text-xs text-slate-300">Admission Enquiry • Academic Session 2026-27 (CBSE)</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition"
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Helpline: +91-7060089183 • Roshnabad Campus</span>
          </div>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900">Enquiry Forwarded Successfully!</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Your admission enquiry details have been forwarded to the Admission Office WhatsApp helpline (<span className="font-semibold text-slate-900">+91-7060089183</span>).
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Enquiry Reference Code</div>
              <div className="text-lg font-mono font-bold text-[#002b49] mt-0.5">{refNumber}</div>
              <div className="text-xs text-slate-600 mt-2">
                Candidate: <span className="font-medium text-slate-900">{formData.studentName}</span> ({formData.grade})
              </div>
              <div className="text-xs text-slate-600">
                Primary Phone: <span className="font-medium text-slate-900">{formData.phone}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Our admission counselor will contact you within 24 working hours to guide you through campus visit, assessment, and document verification.
            </p>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#002b49] hover:bg-[#003b63] text-white rounded-xl text-sm font-semibold transition shadow-md"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Student Info */}
            <div className="border-b border-slate-200 pb-4">
              <h4 className="text-sm font-bold text-[#002b49] flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                1. Student Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student's Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Aarav Rawat"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Gender <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49] bg-white"
                  >
                    <option value="Male">Boy (Male)</option>
                    <option value="Female">Girl (Female)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date of Birth <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Class Seeking Admission <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49] bg-white"
                  >
                    <option value="Playgroup">Playgroup / Pre-Nursery</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Class I">Class I</option>
                    <option value="Class II">Class II</option>
                    <option value="Class III">Class III</option>
                    <option value="Class IV">Class IV</option>
                    <option value="Class V">Class V</option>
                    <option value="Class VI">Class VI</option>
                    <option value="Class VII">Class VII</option>
                    <option value="Class VIII">Class VIII</option>
                    <option value="Class IX">Class IX</option>
                    <option value="Class X">Class X</option>
                    <option value="Class XI">Class XI</option>
                    <option value="Class XII">Class XII</option>
                  </select>
                </div>

                {(formData.grade === 'Class XI' || formData.grade === 'Class XII') && (
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Senior Secondary Stream Preference <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="stream"
                      value={formData.stream}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49] bg-white"
                    >
                      <option value="">Select Stream</option>
                      <option value="Science (PCM - Physics, Chemistry, Maths)">Science (PCM)</option>
                      <option value="Science (PCB - Physics, Chemistry, Biology)">Science (PCB)</option>
                      <option value="Commerce (Accounts, Economics, Business Studies)">Commerce</option>
                      <option value="Humanities / Arts">Humanities / Arts</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Parent Details */}
            <div className="border-b border-slate-200 pb-4">
              <h4 className="text-sm font-bold text-[#002b49] flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-amber-600" />
                2. Parents / Guardian Contact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Father's / Guardian's Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Father's full name"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    placeholder="Mother's full name"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Phone (WhatsApp) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    pattern="[0-9]{10}"
                    title="10-digit mobile number"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>
              </div>
            </div>

            {/* Academic & Transport */}
            <div className="pb-2">
              <h4 className="text-sm font-bold text-[#002b49] flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-amber-600" />
                3. Residence & School Transport
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current / Previous School (if any)
                  </label>
                  <input
                    type="text"
                    name="currentSchool"
                    value={formData.currentSchool}
                    onChange={handleChange}
                    placeholder="Previous school name"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Residential Area in Haridwar <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    placeholder="e.g. Roshnabad, SIDCUL, Shivalik Nagar, BHEL"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    School Bus Transport Required?
                  </label>
                  <select
                    name="transportRequired"
                    value={formData.transportRequired}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49] bg-white"
                  >
                    <option value="Yes">Yes, GPS Bus Transport Required</option>
                    <option value="No">No, Self-Arranged Transport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Any Specific Queries / Notes
                  </label>
                  <input
                    type="text"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="e.g. Enquiry about fee schedule or timings"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                <span>Immediate dispatch to official school WhatsApp (+91-7060089183)</span>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit &amp; Open WhatsApp</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
