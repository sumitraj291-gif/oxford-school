import React, { useState } from 'react';
import { Briefcase, CheckCircle2, Send, GraduationCap, Clock, MapPin, X } from 'lucide-react';
import { CAREER_OPENINGS, SCHOOL_INFO } from '../data/schoolData';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [applyForm, setApplyForm] = useState({
    candidateName: '',
    email: '',
    phone: '',
    experienceYears: '',
    qualification: '',
    coverNote: ''
  });
  const [applied, setApplied] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = applyForm.phone.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      alert('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    const message = `*THE OXFORD SCHOOL - JOB APPLICATION*
Position: ${selectedJob ? selectedJob.title : 'General Faculty'}
Candidate Name: ${applyForm.candidateName}
Qualification: ${applyForm.qualification}
Experience: ${applyForm.experienceYears} Years
Phone: ${cleanPhone}
Email: ${applyForm.email}
Note: ${applyForm.coverNote || 'N/A'}`;

    window.open(`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setApplied(true);
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
            Work With Us
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Careers & Faculty Openings
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Join a prestigious team of educators, innovators, and mentors shaping the future of young minds at The Oxford School, Roshnabad, Haridwar.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-slate-900">Scholastic Environment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Modern digital smart boards, air-cooled faculty workspaces, and advanced robotics/science laboratories.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-slate-900">Professional Growth</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Regular CBSE pedagogical training, leadership workshops, and competitive compensation packages.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-slate-900">Campus Transport & Safety</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Subsidized school bus transit across BHEL and Haridwar for staff members.
            </p>
          </div>
        </div>

        {/* Jobs List */}
        <div className="mb-20 text-left">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Current Vacancies</h2>
            <p className="text-xs text-slate-500">
              Applications invited for Academic Year 2025–26:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-slate-100 text-[#002b49] text-[10px] font-bold uppercase rounded">
                      {job.department}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">{job.vacancies} Openings</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-slate-500">
                    <div>
                      <strong className="text-slate-800">Qualification:</strong> {job.qualification}
                    </div>
                    <div>
                      <strong className="text-slate-800">Experience:</strong> {job.experience}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedJob(job);
                      setApplied(false);
                    }}
                    className="w-full py-2.5 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] cursor-pointer shadow-sm"
                  >
                    Apply for this Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Resume Send Box */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-xl font-bold text-slate-900">Don't see a matching vacancy?</h3>
          <p className="text-xs text-slate-600">
            Send your detailed CV and resume directly to our recruitment desk:
          </p>
          <div className="text-sm font-semibold text-[#002b49]">
            Email: <a href={`mailto:${SCHOOL_INFO.email}`} className="underline">{SCHOOL_INFO.email}</a>
          </div>
          <p className="text-[11px] text-slate-400">
            Please mention the post applied for in the email subject line.
          </p>
        </div>

        {/* Application Modal */}
        {selectedJob && (
          <div
            onClick={() => setSelectedJob(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white border border-slate-200 p-6 rounded-2xl shadow-2xl text-left"
            >
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-amber-400/40 p-1 shadow-sm flex items-center justify-center shrink-0">
                  <img src="/ox-logo.webp" alt="The Oxford School Crest" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#002b49] block">
                    Application Form
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {selectedJob.title}
                  </h3>
                  <span className="text-xs text-slate-500">{selectedJob.department}</span>
                </div>
              </div>

              {applied ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#002b49] mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Application Sent</h4>
                  <p className="text-xs text-slate-600">
                    Your details have been routed to Oxford School Recruitment via WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2 bg-[#002b49] text-white text-xs font-semibold btn-cut"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-700 font-medium block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applyForm.candidateName}
                      onChange={(e) => setApplyForm({ ...applyForm, candidateName: e.target.value })}
                      placeholder="e.g. Dr. Ramesh Joshi"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-700 font-medium block mb-1">Mobile (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                        placeholder="10-digit number"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-700 font-medium block mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-700 font-medium block mb-1">Highest Qualification *</label>
                      <input
                        type="text"
                        required
                        value={applyForm.qualification}
                        onChange={(e) => setApplyForm({ ...applyForm, qualification: e.target.value })}
                        placeholder="e.g. M.Sc, B.Ed"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-700 font-medium block mb-1">Total Experience (Years)</label>
                      <input
                        type="text"
                        value={applyForm.experienceYears}
                        onChange={(e) => setApplyForm({ ...applyForm, experienceYears: e.target.value })}
                        placeholder="e.g. 4"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 font-medium block mb-1">Brief Introduction or Pitch</label>
                    <textarea
                      rows={2}
                      value={applyForm.coverNote}
                      onChange={(e) => setApplyForm({ ...applyForm, coverNote: e.target.value })}
                      placeholder="Specialization, subject command, achievements..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2 text-slate-500 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#002b49] text-white text-xs font-semibold uppercase btn-cut flex items-center gap-1.5 hover:bg-[#003e6b]"
                    >
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
