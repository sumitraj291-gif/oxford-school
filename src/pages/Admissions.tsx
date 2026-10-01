import React, { useState } from 'react';
import {
  CheckCircle2, FileText, Calendar, HelpCircle,
  ArrowRight, Send, AlertCircle, ShieldCheck
} from 'lucide-react';
import { ADMISSION_STEPS, AGE_CRITERIA, SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsProps {
  onOpenEnquiry: () => void;
}

export const Admissions: React.FC<AdmissionsProps> = ({ onOpenEnquiry }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    grade: 'Class I',
    phone: '',
    email: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      alert('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    const message = `*THE OXFORD SCHOOL - ADMISSION DESK INQUIRY*
Student Name: ${formData.studentName}
Parent Name: ${formData.parentName}
Class: ${formData.grade}
Phone: ${cleanPhone}
Email: ${formData.email || 'N/A'}
Notes: ${formData.notes || 'N/A'}`;

    window.open(`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  const requiredDocuments = [
    "Original Birth Certificate issued by Municipal Corporation / Panchayat (for Nursery to Class I)",
    "Original Transfer Certificate (TC) counter-signed by competent educational authority (for Class II onwards)",
    "Self-attested copy of previous class report card / marksheet",
    "Four recent passport-size photographs of the student",
    "Two passport-size photographs of each parent / legal guardian",
    "Photocopy of Aadhaar Card of student and parents",
    "Category Certificate (SC/ST/OBC), if applicable",
    "Proof of Residence (Electricity bill / Voter ID / Ration Card / Passport)"
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
            Academic Session 2026–27
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Admission Guidelines & Procedure
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Transparent, merit-guided admissions from Playgroup to Senior Secondary (Science, Commerce & Humanities) under CBSE norms.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="px-8 py-3.5 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] cursor-pointer shadow-lg transition"
            >
              Open Instant Enquiry Wizard
            </button>
          </div>
        </div>

        {/* 4 Step Process */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Clear Roadmap
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              4-Step Admission Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {ADMISSION_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <span className="text-3xl font-mono font-extrabold text-[#002b49]/30 block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age Criteria & Fee Structure Table */}
        <div id="criteria" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 text-left">
          {/* Age Matrix */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#002b49]" /> Age Eligibility Matrix
            </h3>
            <p className="text-xs text-slate-500">
              Calculated as on 31st March of the academic entry year as per CBSE and National Education Policy guidelines:
            </p>

            <div className="divide-y divide-slate-100 text-xs">
              {AGE_CRITERIA.map((crit) => (
                <div key={crit.grade} className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{crit.grade}</span>
                  <span className="text-slate-500 font-medium">{crit.age}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Guidelines */}
          <div id="fees" className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#002b49]" /> Fee Guidelines & Policy
            </h3>
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <p>
                • <strong>Transparent Structure:</strong> The Oxford School adheres strictly to CBSE guidelines without capitation fees or hidden levies.
              </p>
              <p>
                • <strong>Quarterly Schedule:</strong> Tuition and transport fees are payable quarterly via online bank transfer, UPI, or through the Edunext ERP portal.
              </p>
              <p>
                • <strong>Merit Scholarships:</strong> Deserving academic toppers and state/national level sports champions are eligible for fee concessions on management review.
              </p>
              <p>
                • <strong>Transport Charges:</strong> Optional school bus charges vary depending on pick-up distance across BHEL and Haridwar.
              </p>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-24 text-left bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Required Documents Checklist
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Please carry both original and self-attested photocopies during document verification:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocuments.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#002b49] shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Admissions Frequently Asked Questions (FAQ) */}
        <div className="mb-24 text-left">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Clarifications & Help
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">
                1. What is the procedure for mid-session transfer admissions?
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Mid-session admissions are subject to vacancy in the respective grade. Parents must provide the previous school's Transfer Certificate (duly countersigned) and recent term progress report cards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">
                2. How are school bus routes assigned and tracked?
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Our transport wing operates 15 buses with GPS covering BHEL and Haridwar. Parents receive real-time bus tracking and delay alerts via the Edunext ERP mobile app.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">
                3. Are scholarships or sibling discounts available?
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Yes, a sibling fee concession is offered to the younger child when two or more siblings are enrolled concurrently. Merit waivers are also awarded to Class X board toppers admitted into Class XI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">
                4. What streams are offered in Senior Secondary (Classes XI & XII)?
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                We offer Science (PCM with Computer Science/Physical Ed), Science (PCB with Biotechnology/Physical Ed), Commerce (Accounts, Business Studies, Economics, Applied Maths), and Humanities (History, Political Science, Economics, Psychology).
              </p>
            </div>
          </div>
        </div>

        {/* In-page Admission Inquiry Form */}
        <div id="enquiry" className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-lg text-left">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
              Immediate Response
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Send an Admission Inquiry
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Our admission counselor will reach out to you within 2 working hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#002b49] mx-auto" />
              <h4 className="text-xl font-bold text-slate-900">Inquiry Forwarded!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you. We have received your query and sent your details to our WhatsApp admissions desk.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut cursor-pointer hover:bg-[#003e6b]"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-700 font-medium block mb-1">Student's Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Student's full name"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-700 font-medium block mb-1">Parent's Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Father's / Mother's name"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-700 font-medium block mb-1">Class Seeking Admission *</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs focus:border-[#002b49] focus:bg-white focus:outline-none"
                  >
                    {[
                      'Playgroup', 'Nursery', 'LKG', 'UKG',
                      'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
                      'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
                      'Class XI (Science)', 'Class XI (Commerce)', 'Class XI (Humanities)',
                      'Class XII'
                    ].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-700 font-medium block mb-1">Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-700 font-medium block mb-1">Specific Queries or Notes</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ask about school bus routes, fees, hostel, or subject options..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] cursor-pointer flex items-center justify-center gap-2 transition shadow-md"
              >
                <span>Submit & Inquire on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admissions;
