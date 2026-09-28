import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      alert('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    const text = `*THE OXFORD SCHOOL - CONTACT INQUIRY*
Sender: ${formData.name}
Phone: ${cleanPhone}
Email: ${formData.email || 'N/A'}
Subject: ${formData.subject}
Message: ${formData.message}`;

    window.open(`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#002b49]">
            Reach Out
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Contact & Campus Location
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have questions regarding admissions, curriculum, bus transit, or faculty recruitment? Our administrative team is happy to assist you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-xl btn-cut-sm text-[#002b49]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Campus Address</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {SCHOOL_INFO.address}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-xl btn-cut-sm text-[#002b49]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Phone Lines</h3>
            <p className="text-xs text-slate-600 space-y-1">
              <span className="block font-medium">{SCHOOL_INFO.primaryPhone} (Admissions)</span>
              <span className="block">{SCHOOL_INFO.phoneNumbers[0]} (Reception)</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-xl btn-cut-sm text-[#002b49]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Electronic Mail</h3>
            <p className="text-xs text-slate-600 space-y-1">
              <span className="block font-medium">{SCHOOL_INFO.email}</span>
              <span className="block">{SCHOOL_INFO.secondaryEmail}</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-xl btn-cut-sm text-[#002b49]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Visiting Hours</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {SCHOOL_INFO.officeHours}
              <br />
              (Sundays & Gazetted Holidays Closed)
            </p>
          </div>
        </div>

        {/* Contact Form & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left mb-16">
          {/* Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below to connect instantly with our office:
            </p>

            {sent ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#002b49] mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Transmitted!</h4>
                <p className="text-xs text-slate-600">
                  Your query has been routed to our front desk via WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="px-5 py-2 bg-[#002b49] text-white text-xs font-semibold uppercase btn-cut"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-700 font-medium block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-700 font-medium block mb-1">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-700 font-medium block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-medium block mb-1">Subject of Inquiry</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs focus:border-[#002b49] focus:bg-white focus:outline-none"
                  >
                    <option value="Admission Inquiry">Admission Inquiry (2025-26)</option>
                    <option value="Fee Guidelines">Fee Guidelines & Scholarship</option>
                    <option value="Transport Routes">Transport & Bus Routes</option>
                    <option value="Career & Faculty">Faculty & Career Application</option>
                    <option value="Other Query">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-700 font-medium block mb-1">Your Detailed Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your question or requirements..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#002b49] text-white text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-[#003e6b] flex items-center justify-center gap-2 cursor-pointer transition shadow-md"
                >
                  <span>Transmit Query on WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="p-6 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Campus Geographic Location</h3>
              <p className="text-xs text-slate-500">
                Situated in peaceful Shiv Ratan City, Navodaya Nagar, Roshnabad, Haridwar.
              </p>
            </div>

            <div className="relative aspect-video w-full bg-slate-100 border-t border-slate-200 flex-1">
              <iframe
                title="The Oxford School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13838.288229562706!2d78.0864389!3d29.9576402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390947702fa10291%3A0x6a218d6e3cfb4009!2sRoshnabad%2C%20Haridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="p-4 bg-slate-50 text-xs text-slate-600 border-t border-slate-200 flex items-center justify-between">
              <span>GPS: 29.9576° N, 78.0864° E</span>
              <a
                href="https://maps.google.com/?q=The+Oxford+School+Roshnabad+Haridwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002b49] hover:underline font-bold"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
