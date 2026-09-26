import React, { useState } from 'react';
import { 
  Briefcase, Send, CheckCircle2, User, Phone, Mail, 
  FileText, GraduationCap, MapPin, Sparkles, Clock, ArrowRight 
} from 'lucide-react';
import { SCHOOL_INFO, CAREER_OPENINGS } from '../data/schoolData';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(CAREER_OPENINGS[0].title);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    postApplied: CAREER_OPENINGS[0].title,
    qualification: '',
    experienceYears: '',
    currentOrg: '',
    city: '',
    coverNote: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData(prev => ({ ...prev, postApplied: jobTitle }));
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = 'TOS-JOB-' + Math.floor(100000 + Math.random() * 900000);
    setAppId(generatedId);

    const message = `*THE OXFORD SCHOOL, HARIDWAR - JOB APPLICATION*
----------------------------------------
*Application ID:* ${generatedId}
*Position Applied:* ${formData.postApplied}

*Candidate Profile:*
- *Full Name:* ${formData.fullName}
- *Contact Phone:* ${formData.phone}
- *Email:* ${formData.email}
- *Highest Qualification:* ${formData.qualification}
- *Total Experience:* ${formData.experienceYears} Years
- *Current / Last Institution:* ${formData.currentOrg || 'N/A'}
- *Current City:* ${formData.city || 'Haridwar'}

*Brief Summary:*
${formData.coverNote || 'Looking forward to contributing to The Oxford School.'}
----------------------------------------
_Dispatched via Oxford School Careers Portal_`;

    const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-10">
      
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#002b49] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-400/30">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Careers at Oxford</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Inspire the Future. Teach at The Oxford School.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              We are inviting passionate, qualified, and forward-thinking educators to join our dedicated academic team in Roshnabad, Haridwar. Experience a culture of professional respect, continuous CBSE workshops, and career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Open Positions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002b49] mt-3">
            Current Teaching &amp; Administrative Openings
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Candidates must possess strong subject competence, fluent English communication, and familiarity with CBSE curriculum guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_OPENINGS.map((job) => (
            <div 
              key={job.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#002b49] transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{job.type}</span>
                </div>

                <h3 className="text-lg font-bold text-[#002b49]">
                  {job.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {job.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <div>
                    <strong className="text-slate-900">Qualification:</strong> {job.qualification}
                  </div>
                  <div>
                    <strong className="text-slate-900">Experience:</strong> {job.experience}
                  </div>
                  <div>
                    <strong className="text-slate-900">Vacancies:</strong> {job.vacancies} Post(s)
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="w-full py-2 bg-[#002b49] hover:bg-[#003b63] text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Apply for this Position</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="application-form">
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-[#002b49] p-6 sm:p-8 text-white">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Recruitment Desk</span>
            <h3 className="text-2xl font-serif font-bold text-white mt-1">
              Job Application Form
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Selected profile details will be immediately forwarded to The Oxford School HR Desk via WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Application Forwarded to HR!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your application details have been dispatched to our recruitment desk with Reference ID:
              </p>
              <div className="p-3 bg-slate-100 rounded-lg inline-block font-mono font-bold text-lg text-[#002b49]">
                {appId}
              </div>
              <p className="text-xs text-slate-500">
                You may also email your detailed CV to <span className="font-semibold text-slate-800">{SCHOOL_INFO.email}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#002b49] text-white rounded-xl text-xs font-bold"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Post Applied For <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="postApplied"
                    value={formData.postApplied}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49] bg-white"
                  >
                    {CAREER_OPENINGS.map(j => (
                      <option key={j.id} value={j.title}>{j.title} ({j.department})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Candidate Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Shalini Rawat"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Phone Number <span className="text-rose-500">*</span>
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
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="teacher@example.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Highest Educational Qualification <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g. M.Sc. Physics, B.Ed. (First Division)"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Total Teaching Experience (Years) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleChange}
                    placeholder="e.g. 4"
                    min="0"
                    max="40"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current / Last Institution
                  </label>
                  <input
                    type="text"
                    name="currentOrg"
                    value={formData.currentOrg}
                    onChange={handleChange}
                    placeholder="Current school or organization"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Location / City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Haridwar, Roorkee, Dehradun"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Brief Statement of Teaching Philosophy
                  </label>
                  <textarea
                    rows={3}
                    name="coverNote"
                    value={formData.coverNote}
                    onChange={handleChange}
                    placeholder="Share how you can contribute to students at The Oxford School Haridwar..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Direct submission to school recruitment helpline (+91-7060089183).
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
