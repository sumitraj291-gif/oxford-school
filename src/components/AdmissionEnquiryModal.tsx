import React, { useState } from 'react';
import { X, Send, CheckCircle, GraduationCap, MapPin, User, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionEnquiryModal: React.FC<AdmissionEnquiryModalProps> = ({ isOpen, onClose }) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sanitize = (str: string, maxLen = 80) => {
    if (!str) return 'N/A';
    return String(str).trim().slice(0, maxLen).replace(/[*_~`]/g, '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      alert('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.');
      return;
    }

    const generatedRef = 'TOS-ENQ-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(generatedRef);

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
_Generated via Oxford School Official Portal_`;

    const waUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
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
    onClose();
  };

  const grades = [
    'Playgroup', 'Nursery', 'LKG', 'UKG',
    'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
    'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
    'Class XI', 'Class XII'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left text-slate-800 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 transition rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#002b49] text-white flex items-center justify-center mx-auto rounded-full">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#002b49]">Enquiry Registered!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Your admission enquiry has been forwarded directly to The Oxford School Admission Desk via WhatsApp.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl inline-block">
              <span className="text-xs text-slate-500 block">Reference Number</span>
              <span className="text-lg font-mono font-bold tracking-wider text-[#002b49]">{refNumber}</span>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut cursor-pointer hover:bg-[#003e6b]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#002b49] block">
                Academic Session 2026–27
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Online Admission Enquiry
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Playgroup to Class XII • CBSE Affiliated (No. {SCHOOL_INFO.affiliationNo}) • Haridwar
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Student Information */}
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs uppercase font-bold text-[#002b49] tracking-wider mb-3 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#002b49]" /> Student Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Student's Full Name *</label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Class Seeking Admission *</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs focus:border-[#002b49] focus:bg-white focus:outline-none"
                    >
                      {grades.map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs focus:border-[#002b49] focus:bg-white focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {(formData.grade === 'Class XI' || formData.grade === 'Class XII') && (
                  <div className="mt-3">
                    <label className="text-[11px] text-slate-600 block mb-1">Select Senior Secondary Stream *</label>
                    <select
                      name="stream"
                      required
                      value={formData.stream}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs focus:border-[#002b49] focus:bg-white focus:outline-none"
                    >
                      <option value="">-- Choose Stream --</option>
                      <option value="Science (PCM - Physics, Chem, Maths)">Science (PCM - Engineering)</option>
                      <option value="Science (PCB - Physics, Chem, Bio)">Science (PCB - Medical)</option>
                      <option value="Commerce (Accounts, Economics, B.St)">Commerce</option>
                      <option value="Humanities / Arts">Humanities / Arts</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Parent & Contact Details */}
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs uppercase font-bold text-[#002b49] tracking-wider mb-3 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#002b49]" /> Parent / Guardian Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Father's / Guardian Name *</label>
                    <input
                      type="text"
                      name="fatherName"
                      required
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="e.g. Mr. Rajesh Sharma"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Mother's Name</label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      placeholder="e.g. Mrs. Sunita Sharma"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Mobile Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Logistics & Location */}
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs uppercase font-bold text-[#002b49] tracking-wider mb-3 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#002b49]" /> Residence & Transport
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">Residential Locality</label>
                    <input
                      type="text"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      placeholder="e.g. Roshnabad / BHEL / Shivalik Nagar"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 block mb-1">School Bus Transport Required?</label>
                    <select
                      name="transportRequired"
                      value={formData.transportRequired}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs focus:border-[#002b49] focus:bg-white focus:outline-none"
                    >
                      <option value="Yes">Yes, Transport Required</option>
                      <option value="No">No, Own Arrangement</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="text-[11px] text-slate-600 block mb-1">Any Specific Queries or Notes</label>
                  <textarea
                    name="additionalNotes"
                    rows={2}
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Enter any questions regarding fees, scholarship, or admission process..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs text-slate-600 hover:text-slate-900 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  <span>Submit & Connect on WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionEnquiryModal;
