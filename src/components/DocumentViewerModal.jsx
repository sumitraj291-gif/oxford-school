import React from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function DocumentViewerModal({ doc, isOpen, onClose }) {
  if (!isOpen || !doc) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#002b49] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-amber-400">CBSE Mandatory Public Disclosure</span>
              <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">{doc.title}</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Preview Frame */}
        <div className="p-6 sm:p-8 bg-slate-100 max-h-[70vh] overflow-y-auto">
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] rotate-[-25deg]">
              <div className="text-center">
                <img src="/logo.svg" alt="Crest" className="w-72 h-72 mx-auto" />
                <span className="text-6xl font-bold font-serif text-[#002b49]">THE OXFORD SCHOOL</span>
              </div>
            </div>

            {/* Official Header */}
            <div className="border-b-2 border-[#002b49] pb-4 mb-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <img src="/ox-logo.webp" alt="The Oxford School Logo" className="w-11 h-11 object-contain" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#002b49]">THE OXFORD SCHOOL, HARIDWAR</h2>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                (Affiliated to Central Board of Secondary Education, New Delhi • Affiliation No. {SCHOOL_INFO.affiliationNo} • School Code: {SCHOOL_INFO.schoolCode})
              </p>
              <p className="text-[11px] text-slate-500">
                {SCHOOL_INFO.address} • Contact: {SCHOOL_INFO.primaryPhone}
              </p>
            </div>

            {/* Document Title Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                Official Compliance Document / Certificate
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900">
                {doc.title}
              </span>
            </div>

            {/* Metadata Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block font-medium">Issuing Competent Authority</span>
                <span className="font-semibold text-slate-800 text-sm mt-0.5 block">{doc.issuingAuthority}</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block font-medium">Document Reference / Registration No.</span>
                <span className="font-semibold text-[#002b49] text-sm mt-0.5 block font-mono">{doc.refNumber}</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block font-medium">Validity / Status</span>
                <span className="font-semibold text-emerald-700 text-sm mt-0.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {doc.validTill}
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block font-medium">CBSE Appendix IX Category</span>
                <span className="font-semibold text-slate-800 text-sm mt-0.5 block">Document No. {doc.slNo}</span>
              </div>
            </div>

            {/* Formal Verification Text */}
            <div className="border border-slate-200 rounded-lg p-4 bg-white text-xs leading-relaxed text-slate-700 space-y-2 mb-6">
              <p>
                <strong>CERTIFICATE OF COMPLIANCE:</strong> This is to certify that The Oxford School, Roshnabad, Haridwar complies fully with the statutory guidelines, building safety, fire safety norms, and education board criteria mandated by the Department of School Education, Uttarakhand and the Central Board of Secondary Education (CBSE), New Delhi.
              </p>
              <p>
                The original record and attested verification dossier are duly cataloged in the school administrative registry and submitted via CBSE SARAS 5.0 portal.
              </p>
            </div>

            {/* Seal & Signature simulation */}
            <div className="pt-4 border-t border-slate-200 flex items-end justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">Digitally Verified Document Record</span>
              </div>

              <div className="text-right">
                <div className="w-24 border-b border-slate-400 mb-1 ml-auto"></div>
                <span className="font-bold text-slate-800 block">Authorized Signatory</span>
                <span className="text-[11px] text-slate-500">The Oxford School, Haridwar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-white border-t border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            CBSE Affiliation Code: <span className="font-mono font-semibold text-slate-800">{SCHOOL_INFO.affiliationNo}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 flex items-center gap-1.5 transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Record</span>
            </button>
            <button
              onClick={() => {
                alert(`Downloading official PDF copy of "${doc.title}" (Ref: ${doc.refNumber})`);
              }}
              className="px-4 py-1.5 bg-[#002b49] hover:bg-[#003e6b] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition shadow"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
