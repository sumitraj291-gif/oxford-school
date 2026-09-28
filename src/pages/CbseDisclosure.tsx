import React, { useState } from 'react';
import {
  FileText, ShieldCheck, Download, ExternalLink,
  Award, CheckCircle, Search, Filter
} from 'lucide-react';
import { CBSE_DISCLOSURE_DOCS, BOARD_RESULTS, SCHOOL_INFO } from '../data/schoolData';

export const CbseDisclosure: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<any | null>(null);

  const filteredDocs = CBSE_DISCLOSURE_DOCS.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.issuingAuthority.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.refNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-[#002b49] font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#002b49]" />
            <span>Statutory Compliance • CBSE Circular No. 03/2021</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Mandatory Public Disclosure
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In compliance with Central Board of Secondary Education (CBSE) regulations, complete regulatory credentials, safety certifications, and academic track records for The Oxford School (Affiliation No. 3530514, School Code: 81734) are disclosed below.
          </p>
        </div>

        {/* School Information Summary Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-16 text-left">
          <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            A. General Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block">Name of the School:</span>
              <span className="font-semibold text-slate-900">{SCHOOL_INFO.name}</span>
            </div>
            <div>
              <span className="text-slate-500 block">CBSE Affiliation Number:</span>
              <span className="font-semibold text-[#002b49] font-mono">{SCHOOL_INFO.affiliationNo}</span>
            </div>
            <div>
              <span className="text-slate-500 block">School Code:</span>
              <span className="font-semibold text-[#002b49] font-mono">{SCHOOL_INFO.schoolCode}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Complete Address:</span>
              <span className="font-semibold text-slate-900">{SCHOOL_INFO.address}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Principal Name & Qualification:</span>
              <span className="font-semibold text-slate-900">Ms. Priya Chauhan (M.A., B.Ed.)</span>
            </div>
            <div>
              <span className="text-slate-500 block">Official Contact:</span>
              <span className="font-semibold text-slate-900">{SCHOOL_INFO.primaryPhone} | {SCHOOL_INFO.email}</span>
            </div>
          </div>
        </div>

        {/* 12 Mandatory Documents Table */}
        <div className="mb-20 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                B. Documents & Information
              </h2>
              <p className="text-xs text-slate-500">
                Copies of statutory certificates uploaded for public inspection:
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search certificates..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:border-[#002b49] focus:outline-none shadow-sm"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4 font-bold w-16">Sl No</th>
                    <th className="py-3.5 px-4 font-bold">Document Title</th>
                    <th className="py-3.5 px-4 font-bold hidden md:table-cell">Issuing Authority</th>
                    <th className="py-3.5 px-4 font-bold hidden sm:table-cell">Reference Number</th>
                    <th className="py-3.5 px-4 font-bold">Validity</th>
                    <th className="py-3.5 px-4 font-bold text-right">View / Verify</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredDocs.map((doc) => (
                    <tr key={doc.slNo} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-slate-500">{doc.slNo}</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        {doc.title}
                        <div className="md:hidden text-[10px] text-slate-500 mt-0.5">
                          {doc.issuingAuthority}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 hidden md:table-cell">{doc.issuingAuthority}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-500 hidden sm:table-cell">{doc.refNumber}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] rounded font-medium">
                          {doc.validTill}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedDoc(doc)}
                          className="px-3 py-1 bg-[#002b49] text-white text-[11px] font-semibold btn-cut-sm hover:bg-[#003e6b] cursor-pointer inline-flex items-center gap-1 shadow-sm"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Board Results C. Result & Academics */}
        <div id="results" className="mb-20 text-left">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              C. Result and Academics
            </h2>
            <p className="text-xs text-slate-500">
              Three-year performance of students in the Secondary (Class X) and Senior Secondary (Class XII) CBSE Board Examinations:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Class X Table */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center justify-between">
                <span>Class X CBSE Board Results</span>
                <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded font-semibold">
                  100% Pass
                </span>
              </h3>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase font-bold">
                    <th className="py-2 text-left">Year</th>
                    <th className="py-2 text-center">Appeared</th>
                    <th className="py-2 text-center">Passed</th>
                    <th className="py-2 text-right">Topper Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {BOARD_RESULTS.classX.map((res) => (
                    <tr key={res.year}>
                      <td className="py-2.5 font-semibold text-slate-800">{res.year}</td>
                      <td className="py-2.5 text-center text-slate-600">{res.appeared}</td>
                      <td className="py-2.5 text-center text-slate-600">{res.passed} (100%)</td>
                      <td className="py-2.5 text-right font-bold text-[#002b49]">{res.highest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Class XII Table */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center justify-between">
                <span>Class XII CBSE Board Results</span>
                <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded font-semibold">
                  100% Pass
                </span>
              </h3>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase font-bold">
                    <th className="py-2 text-left">Year</th>
                    <th className="py-2 text-center">Appeared</th>
                    <th className="py-2 text-center">Passed</th>
                    <th className="py-2 text-right">Topper Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {BOARD_RESULTS.classXII.map((res) => (
                    <tr key={res.year}>
                      <td className="py-2.5 font-semibold text-slate-800">{res.year}</td>
                      <td className="py-2.5 text-center text-slate-600">{res.appeared}</td>
                      <td className="py-2.5 text-center text-slate-600">{res.passed} (100%)</td>
                      <td className="py-2.5 text-right font-bold text-[#002b49]">{res.highest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Verification Modal */}
        {selectedDoc && (
          <div
            onClick={() => setSelectedDoc(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white border border-slate-200 p-6 rounded-2xl shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="text-base font-bold text-slate-900">Document Verification</h4>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="text-slate-500 hover:text-slate-800 text-xs font-semibold cursor-pointer"
                >
                  Close [×]
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block">Certificate:</span>
                  <span className="font-bold text-slate-900 text-sm">{selectedDoc.title}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Issuing Authority:</span>
                  <span className="text-slate-700">{selectedDoc.issuingAuthority}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Reference Identifier:</span>
                  <span className="font-mono text-[#002b49] bg-slate-100 px-2 py-0.5 rounded font-semibold">{selectedDoc.refNumber}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Status & Validity:</span>
                  <span className="text-emerald-700 font-semibold">{selectedDoc.validTill} (Verified on CBSE SARAS Portal)</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
                  The original document is archived at the administrative records section, The Oxford School, Roshnabad Haridwar, and is verified under CBSE Affiliation No. 3530514.
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="px-5 py-2 bg-[#002b49] text-white text-xs font-semibold uppercase btn-cut hover:bg-[#003e6b]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CbseDisclosure;
