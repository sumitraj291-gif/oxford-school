import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink, Printer, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function DocumentViewerModal({ doc, isOpen, onClose }) {
  const [loadError, setLoadError] = useState(false);

  if (!isOpen || !doc) return null;

  const pdfUrl = doc.downloadUrl && doc.downloadUrl !== '#' ? doc.downloadUrl : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[92vh] max-h-[920px] bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#002b49] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 shrink-0 border-b border-amber-500/30">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                  Official CBSE Certificate • Appendix-IX
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.2 rounded font-semibold border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Verified
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white truncate" title={doc.title}>
                {doc.title}
              </h3>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition inline-flex items-center gap-1.5 text-xs font-semibold"
                title="Open PDF in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden md:inline">Open in Tab</span>
              </a>
            )}
            {pdfUrl && (
              <a
                href={pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition inline-flex items-center gap-1.5 text-xs shadow"
                title="Download this PDF file"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
              title="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Real PDF Embedded Document Area */}
        <div className="flex-1 w-full h-full bg-slate-900 relative overflow-hidden flex flex-col">
          {pdfUrl ? (
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              title={doc.title}
              className="w-full h-full border-0 bg-slate-100"
              onError={() => setLoadError(true)}
            />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-300 space-y-3">
              <FileText className="w-12 h-12 text-slate-500" />
              <p className="text-sm font-semibold">Document is archived in administrative registry.</p>
              <p className="text-xs text-slate-400 max-w-md">
                Ref: {doc.refNumber || 'N/A'} • Available upon request at the school office.
              </p>
            </div>
          )}

          {loadError && (
            <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
              <p className="text-sm">Unable to display PDF preview inside this browser frame.</p>
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl inline-flex items-center gap-2 shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open PDF in New Browser Tab</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Footer Meta & Actions Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600">
            <div>
              <span className="text-slate-400 font-medium">Issuing Authority:</span>{' '}
              <strong className="text-slate-800">{doc.issuingAuthority}</strong>
            </div>
            {doc.refNumber && (
              <div>
                <span className="text-slate-400 font-medium">Ref No:</span>{' '}
                <span className="font-mono text-[#002b49] font-bold">{doc.refNumber}</span>
              </div>
            )}
            {doc.validTill && (
              <div>
                <span className="text-slate-400 font-medium">Validity:</span>{' '}
                <span className="text-emerald-700 font-semibold">{doc.validTill}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 flex items-center gap-1.5 transition"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                <span>Full Screen</span>
              </a>
            )}
            {pdfUrl && (
              <a
                href={pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-[#002b49] hover:bg-[#003e6b] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition shadow"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Save PDF</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
