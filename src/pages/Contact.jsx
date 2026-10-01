import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  Navigation, ExternalLink, Sparkles 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length > 0 && !/^[6-9]\d{9}$/.test(cleanPhone)) {
      alert('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.');
      return;
    }

    const query = `*THE OXFORD SCHOOL, HARIDWAR - CONTACT ENQUIRY*
----------------------------------------
*From:* ${formData.name}
*Phone:* +91 ${cleanPhone || formData.phone}
*Email:* ${formData.email || 'N/A'}
*Subject:* ${formData.subject}
*Message:*
${formData.message}
----------------------------------------
_Dispatched from Oxford School Contact Page_`;

    const url = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-10">
      
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#002b49] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-400/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>We Are Here to Assist</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Contact The Oxford School, Haridwar
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Have questions regarding admissions, CBSE curriculum, bus transport routes, or campus visits? Reach out to our administrative team or visit us at Roshnabad, Haridwar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Address */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#002b49] mb-1">Campus Address</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {SCHOOL_INFO.address}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Landmark: Near Collectorate / Navodaya Nagar
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#002b49] mb-1">Telephone &amp; WhatsApp</h3>
              <div className="space-y-1 text-xs text-slate-700">
                <div>
                  <a href={`tel:${SCHOOL_INFO.phoneNumbers[0]}`} className="hover:text-amber-600 font-medium">
                    {SCHOOL_INFO.phoneNumbers[0]}
                  </a>
                </div>
                <div>
                  <a href={`tel:${SCHOOL_INFO.phoneNumbers[1]}`} className="hover:text-amber-600 font-medium">
                    {SCHOOL_INFO.phoneNumbers[1]} (Helpline)
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-medium">
              WhatsApp Active: +91-7060089183
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#002b49] mb-1">Official Emails</h3>
              <div className="space-y-1 text-xs text-slate-700">
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-amber-600 block break-all font-medium">
                  {SCHOOL_INFO.email}
                </a>
                <a href={`mailto:${SCHOOL_INFO.secondaryEmail}`} className="hover:text-amber-600 block break-all text-slate-500">
                  {SCHOOL_INFO.secondaryEmail}
                </a>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Response within 24 working hours
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#002b49] mb-1">Office Visiting Hours</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monday to Saturday <br />
                <strong>8:00 AM – 2:30 PM</strong>
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Campus remains closed on Sunday
            </div>
          </div>

        </div>
      </section>

      {/* Map & Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Form - 6 cols */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-white border border-amber-400/40 p-1 shadow-sm flex items-center justify-center shrink-0">
                <img src="/ox-logo.webp" alt="The Oxford School Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-[#002b49]">
                  Send an Online Message
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Submissions are immediately dispatched to our school helpline via WhatsApp.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Message Dispatched!</h4>
                <p className="text-xs text-slate-600">
                  Thank you for reaching out. We have opened WhatsApp to connect you directly with The Oxford School administration.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#002b49] text-white rounded-lg text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile"
                      pattern="[0-9]{10}"
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
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Query Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49] bg-white"
                  >
                    <option value="Admission Enquiry">Admission Enquiry (2026-27)</option>
                    <option value="Fee Structure Query">Fee Structure &amp; Schedule</option>
                    <option value="Bus Route & Transport">Bus Transport Routes</option>
                    <option value="Transfer Certificate / TC">Transfer Certificate (TC)</option>
                    <option value="General Query">General Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Question <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b49]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#002b49] hover:bg-[#003e6b] text-white rounded-xl text-xs font-bold shadow flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Embedded Google Map & Route Info - 6 cols */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#002b49]">Campus Location Map</h4>
                  <span className="text-[11px] text-slate-500">Roshnabad, Haridwar (Uttarakhand)</span>
                </div>
                <a
                  href="https://maps.google.com/?q=The+Oxford+School+Roshnabad+Haridwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#002b49] hover:text-amber-600 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="h-80 w-full bg-slate-100">
                <iframe
                  title="The Oxford School Haridwar Map"
                  src={SCHOOL_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Transport Coverage Areas Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#002b49] mb-2 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-amber-600" />
                <span>Bus Transport Coverage Network</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Our fleet of GPS and CCTV-fitted school buses connects learners across major sectors and neighborhoods of Haridwar:
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                {['Roshnabad', 'Navodaya Nagar', 'SIDCUL Area', 'Shivalik Nagar', 'BHEL Sectors 1-5', 'Jwalapur', 'Kankhal', 'Ranipur More', 'Bahadrabad', 'Salempur'].map((area, i) => (
                  <span key={i} className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
