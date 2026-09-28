import React, { useState } from 'react';
import { 
  GraduationCap, CheckCircle2, FileText, 
  ShieldCheck, Phone, Send, Sparkles 
} from 'lucide-react';
import { SCHOOL_INFO, ADMISSION_STEPS, AGE_CRITERIA } from '../data/schoolData';

export default function Admissions({ _onOpenEnquiry }) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
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
*Candidate Name:* ${formData.studentName}
*Date of Birth:* ${formData.dob || 'Not specified'} (${formData.gender})
*Class Seeking Admission:* ${formData.grade} ${formData.stream ? `(${formData.stream})` : ''}

*Parent Details:*
- *Father:* ${formData.fatherName}
- *Mother:* ${formData.motherName || 'N/A'}
- *Primary Phone:* ${formData.phone}
- *Alternate Phone:* ${formData.alternatePhone || 'N/A'}
- *Email:* ${formData.email || 'N/A'}

*Logistics:*
- *Current School:* ${formData.currentSchool || 'N/A'}
- *Residential Area:* ${formData.locality}
- *Bus Transport Required:* ${formData.transportRequired}
- *Remarks:* ${formData.additionalNotes || 'N/A'}
----------------------------------------
_Dispatched via Oxford School Admissions Portal_`;

    const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const documentChecklist = [
    { title: "Birth Certificate", desc: "Attested municipal or panchayat birth certificate (Original + 2 Photocopies)." },
    { title: "Transfer Certificate (TC)", desc: "Original TC counter-signed by competent education authority for Class II onwards." },
    { title: "Previous Year Report Card", desc: "Photocopy of previous class annual progress report or marksheet." },
    { title: "Aadhar Cards", desc: "Photocopies of child's and parents' Aadhar cards for official records." },
    { title: "Passport Photographs", desc: "5 recent passport-sized color photos of student and 2 of each parent." },
    { title: "Medical Fitness Certificate", desc: "Basic health record and blood group report by registered medical practitioner." }
  ];

  return (
    <div className="space-y-16 py-10">
      
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#002b49] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-400/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Admissions Open for Session 2025-26</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Join The Oxford School Family
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              We welcome applications for admission from Playgroup to Class XII (Science, Commerce, Humanities). Discover our transparent, student-centric admission process designed to help your child thrive.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-amber-200">
              <span>Helpline: +91-7060089183</span>
              <span>•</span>
              <span>Office Hours: 8:00 AM – 2:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Procedure Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Step-by-Step Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
            Admission Procedure
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A simple, transparent 4-stage onboarding designed to ensure comfortable induction for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADMISSION_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-serif font-extrabold text-amber-600/30 block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-[#002b49] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-amber-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Stage {step.step} Complete</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Age Criteria Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="criteria">
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-100/60 px-3 py-1 rounded-full border border-amber-200">
              CBSE Age Eligibility
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#002b49] mt-3">
              Age Criteria for Session 2025-26
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              As per National Education Policy (NEP) guidelines and CBSE regulations:
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#002b49] text-white">
                  <th className="py-3.5 px-5 font-semibold">Grade / Level</th>
                  <th className="py-3.5 px-5 font-semibold">Prescribed Age Limit (as on 31st March 2025)</th>
                  <th className="py-3.5 px-5 font-semibold">Evaluation Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {AGE_CRITERIA.map((crit, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5 font-bold text-[#002b49]">{crit.grade}</td>
                    <td className="py-3.5 px-5 font-medium">{crit.age}</td>
                    <td className="py-3.5 px-5 text-slate-600">
                      {idx < 3 ? 'Friendly interaction & observation' : 'Basic foundational aptitude review'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Embedded Online Enquiry Wizard Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="enquiry">
        <div className="bg-white rounded-3xl border-2 border-[#002b49]/20 shadow-xl overflow-hidden">
          <div className="bg-[#002b49] p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Direct Application Portal</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  Online Admission Enquiry Form
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Fill in the details below to immediately dispatch your enquiry to the school admissions helpline on WhatsApp.
                </p>
              </div>
              <div className="shrink-0 bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs">
                <span className="block text-slate-400">Helpline Coordinator</span>
                <span className="font-bold text-amber-400">+91-7060089183</span>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Enquiry Forwarded Successfully!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                We have prepared and opened your WhatsApp application to our admission desk with reference ID:
              </p>
              <div className="p-3 bg-slate-100 rounded-lg inline-block font-mono font-bold text-lg text-[#002b49]">
                {refNumber}
              </div>
              <p className="text-xs text-slate-500">
                You may also visit our campus office directly at Roshnabad between 8:00 AM and 2:30 PM.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#002b49] text-white rounded-xl text-xs font-bold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              {/* Section 1: Student Information */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#002b49] mb-4 border-b pb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-600" />
                  1. Student Candidate Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      placeholder="e.g. Siddharth Rawat"
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
                      <option value="Playgroup">Playgroup</option>
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
                        Senior Secondary Stream <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="stream"
                        value={formData.stream}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49] bg-white"
                      >
                        <option value="">Choose Stream</option>
                        <option value="Science (PCM)">Science (PCM - Physics, Chemistry, Maths)</option>
                        <option value="Science (PCB)">Science (PCB - Physics, Chemistry, Biology)</option>
                        <option value="Commerce">Commerce with Mathematics / Applied Maths</option>
                        <option value="Humanities">Humanities &amp; Social Sciences</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current / Previous School
                    </label>
                    <input
                      type="text"
                      name="currentSchool"
                      value={formData.currentSchool}
                      onChange={handleChange}
                      placeholder="School name if attending"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Parents Contact */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#002b49] mb-4 border-b pb-2">
                  2. Parent / Guardian Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Father's Name <span className="text-rose-500">*</span>
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
                      placeholder="Mother's name"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp Contact Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Alternate Phone
                    </label>
                    <input
                      type="tel"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleChange}
                      placeholder="Alternate number"
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Residential Locality <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      placeholder="e.g. Roshnabad, SIDCUL, Shivalik Nagar"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Transport & Notes */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#002b49] mb-4 border-b pb-2">
                  3. Transport &amp; Remarks
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      School Bus Transport Facility Required?
                    </label>
                    <select
                      name="transportRequired"
                      value={formData.transportRequired}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49] bg-white"
                    >
                      <option value="Yes">Yes, GPS-tracked school bus transport required</option>
                      <option value="No">No, Self arranged drop and pick</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Specific Questions or Message
                    </label>
                    <input
                      type="text"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="e.g. Fee installment schedule or bus stop query"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  By submitting, your details will be forwarded to The Oxford School admission office WhatsApp helpline.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-lg flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry to WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Document Checklist & Fee Guidelines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="fees">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Checklist - 7 cols */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002b49]">Documents Required for Verification</h3>
                <p className="text-xs text-slate-500">To be submitted at the school office at the time of final admission</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {documentChecklist.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Policy - 5 cols */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#002b49]/10 text-[#002b49] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002b49]">Transparent Fee Guidelines</h3>
                <p className="text-xs text-slate-500">Regulated under CBSE norms</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <p>
                <strong>Quarterly Payment Cycle:</strong> School composite tuition fees are payable on a quarterly basis in April, July, October, and January.
              </p>
              <p>
                <strong>Digital Payment Convenience:</strong> Parents can pay securely through UPI, Net Banking, Debit/Credit cards via the Edunext Portal or at the school fee counter.
              </p>
              <p>
                <strong>No Hidden Charges:</strong> All lab consumables, library access, and co-curricular charges are transparently listed in the annual prospectus.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#002b49]">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Accounts Desk Contact: +91-9068885862</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
