import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FileText, ShieldCheck, Search, 
  Award, Eye, BookOpen, ExternalLink, Download 
} from 'lucide-react';
import { SCHOOL_INFO, BOARD_RESULTS, CBSE_DISCLOSURE_DOCS } from '../data/schoolData';
import DocumentViewerModal from '../components/DocumentViewerModal';

export default function CbseDisclosure() {
  const location = useLocation();
  const [selectedTabOverride, setSelectedTabOverride] = useState(null);
  const activeTab = selectedTabOverride ?? (
    location.hash === '#results' ? 'results' :
    location.hash === '#curriculum' ? 'curriculum' : 'disclosure'
  );
  const setActiveTab = setSelectedTabOverride;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(null);

  const filteredDocs = CBSE_DISCLOSURE_DOCS.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.refNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.issuingAuthority.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12 py-10">
      
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#002b49] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-400/30">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>CBSE Appendix IX Compliance Portal</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Mandatory Public Disclosure &amp; Board Exam Records
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              In accordance with Central Board of Secondary Education (CBSE) circulars and statutory norms, The Oxford School, Roshnabad, Haridwar presents authenticated institutional disclosures, statutory certificates, and past board examination results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tabs Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-slate-200 overflow-x-auto space-x-2">
          <button
            onClick={() => setActiveTab('disclosure')}
            className={`py-3 px-5 text-sm font-bold border-b-2 whitespace-nowrap transition flex items-center gap-2 ${
              activeTab === 'disclosure'
                ? 'border-[#002b49] text-[#002b49]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>CBSE Mandatory Documents (Appendix IX)</span>
          </button>

          <button
            onClick={() => setActiveTab('results')}
            className={`py-3 px-5 text-sm font-bold border-b-2 whitespace-nowrap transition flex items-center gap-2 ${
              activeTab === 'results'
                ? 'border-[#002b49] text-[#002b49]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Class X &amp; XII Board Results (2021-25)</span>
          </button>

          <button
            onClick={() => setActiveTab('curriculum')}
            className={`py-3 px-5 text-sm font-bold border-b-2 whitespace-nowrap transition flex items-center gap-2 ${
              activeTab === 'curriculum'
                ? 'border-[#002b49] text-[#002b49]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Curriculum &amp; Streams</span>
          </button>
        </div>
      </section>

      {/* Tab 1: Mandatory Public Disclosure */}
      {activeTab === 'disclosure' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section A: General Information */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#002b49] uppercase tracking-wide border-b border-slate-200 pb-3 mb-5 flex items-center justify-between">
              <span>A. General School Information</span>
              <span className="text-xs font-normal text-slate-500">SARAS 5.0 Compliant</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200">
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-slate-50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/3 border-r">Name of the School</td>
                    <td className="py-2.5 px-4 font-bold text-[#002b49]">{SCHOOL_INFO.name}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 border-r">CBSE Affiliation Number</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-amber-700">{SCHOOL_INFO.affiliationNo}</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 border-r">School Code</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{SCHOOL_INFO.schoolCode}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 border-r">Complete Address with PIN Code</td>
                    <td className="py-2.5 px-4 text-slate-800">{SCHOOL_INFO.address}</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 border-r">Principal Name &amp; Qualification</td>
                    <td className="py-2.5 px-4 text-slate-900 font-medium">Ms. Priya Chauhan (M.A., B.Ed.)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 border-r">School Official Email</td>
                    <td className="py-2.5 px-4 text-slate-900">{SCHOOL_INFO.email}</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 border-r">Contact Telephone Numbers</td>
                    <td className="py-2.5 px-4 text-slate-900 font-mono">{SCHOOL_INFO.phoneNumbers.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section B: Documents and Information with Search & Modal */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#002b49] uppercase tracking-wide">
                  B. Documents &amp; Information
                </h3>
                <p className="text-xs text-slate-500">Official certificates attested and uploaded as per CBSE norms</p>
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search certificate or ref no..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#002b49]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200">
                <thead>
                  <tr className="bg-[#002b49] text-white">
                    <th className="py-3 px-3 font-semibold text-center w-12">#</th>
                    <th className="py-3 px-4 font-semibold">Document / Certificate Name</th>
                    <th className="py-3 px-4 font-semibold">Issuing Competent Authority</th>
                    <th className="py-3 px-4 font-semibold">Ref / License No.</th>
                    <th className="py-3 px-4 font-semibold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {filteredDocs.map((doc) => (
                    <tr key={doc.slNo} className="hover:bg-slate-50 transition">
                      <td className="py-3 px-3 font-bold text-center text-slate-500">{doc.slNo}</td>
                      <td className="py-3 px-4 font-semibold text-[#002b49]">
                        {doc.title}
                      </td>
                      <td className="py-3 px-4 text-slate-600">{doc.issuingAuthority}</td>
                      <td className="py-3 px-4 font-mono text-slate-500 text-xs">{doc.refNumber}</td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => setSelectedDoc(doc)}
                            className="px-2.5 py-1.5 bg-slate-100 hover:bg-[#002b49] hover:text-white text-[#002b49] rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition cursor-pointer"
                            title="Verify Record"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View</span>
                          </button>
                          {doc.downloadUrl && doc.downloadUrl !== '#' && (
                            <a
                              href={doc.downloadUrl}
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 bg-amber-500/10 hover:bg-amber-600 hover:text-white text-amber-800 rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition"
                              title="Download PDF"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Download</span>
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredDocs.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-6 text-center text-slate-500">
                        No certificates match your search query.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Official certificates are validated for the current academic session 2024-25 / 2025-26.</span>
              <a 
                href="https://cbse.gov.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#002b49] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Visit CBSE Official SARAS Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </section>
      )}

      {/* Tab 2: Board Exam Results */}
      {activeTab === 'results' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="results">
          
          {/* Class X Results */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#002b49] flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Class X (All India Secondary School Examination - AISSE)</span>
                </h3>
                <p className="text-xs text-slate-500">Consecutive 100% Pass Performance across all sessions</p>
              </div>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                100% Pass Rate Record
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="py-3 px-4 font-semibold">Academic Session</th>
                    <th className="py-3 px-4 font-semibold text-center">Registered</th>
                    <th className="py-3 px-4 font-semibold text-center">Appeared</th>
                    <th className="py-3 px-4 font-semibold text-center">Passed</th>
                    <th className="py-3 px-4 font-semibold text-center">Pass %</th>
                    <th className="py-3 px-4 font-semibold text-center">Scored &gt; 90%</th>
                    <th className="py-3 px-4 font-semibold">School Topper</th>
                    <th className="py-3 px-4 font-semibold text-center">Gazette / Marksheet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {BOARD_RESULTS.classX.map((res, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition">
                      <td className="py-3 px-4 font-bold text-[#002b49]">{res.year}</td>
                      <td className="py-3 px-4 text-center">{res.appeared}</td>
                      <td className="py-3 px-4 text-center">{res.appeared}</td>
                      <td className="py-3 px-4 text-center font-bold text-emerald-700">{res.passed}</td>
                      <td className="py-3 px-4 text-center font-bold text-emerald-600 bg-emerald-50/50">{res.passPercent}</td>
                      <td className="py-3 px-4 text-center font-semibold text-amber-800">{res.above90} Scholars</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">{res.topper}</td>
                      <td className="py-3 px-4 text-center">
                        {res.downloadUrl ? (
                          <a
                            href={res.downloadUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-600 hover:text-white text-amber-800 rounded text-xs font-semibold inline-flex items-center gap-1 transition"
                            title="Download Official Result PDF"
                          >
                            <Download className="w-3 h-3" />
                            <span>PDF</span>
                          </a>
                        ) : (
                          <span className="text-slate-400 text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Class XII Results */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#002b49] flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Class XII (All India Senior School Certificate Examination - AISSCE)</span>
                </h3>
                <p className="text-xs text-slate-500">Science, Commerce &amp; Humanities Streams</p>
              </div>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                100% Pass Rate Record
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="py-3 px-4 font-semibold">Academic Session</th>
                    <th className="py-3 px-4 font-semibold text-center">Registered</th>
                    <th className="py-3 px-4 font-semibold text-center">Appeared</th>
                    <th className="py-3 px-4 font-semibold text-center">Passed</th>
                    <th className="py-3 px-4 font-semibold text-center">Pass %</th>
                    <th className="py-3 px-4 font-semibold text-center">Scored &gt; 90%</th>
                    <th className="py-3 px-4 font-semibold">Stream Toppers</th>
                    <th className="py-3 px-4 font-semibold text-center">Gazette / Marksheet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {BOARD_RESULTS.classXII.map((res, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition">
                      <td className="py-3 px-4 font-bold text-[#002b49]">{res.year}</td>
                      <td className="py-3 px-4 text-center">{res.appeared}</td>
                      <td className="py-3 px-4 text-center">{res.appeared}</td>
                      <td className="py-3 px-4 text-center font-bold text-emerald-700">{res.passed}</td>
                      <td className="py-3 px-4 text-center font-bold text-emerald-600 bg-emerald-50/50">{res.passPercent}</td>
                      <td className="py-3 px-4 text-center font-semibold text-amber-800">{res.above90} Scholars</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">{res.topper}</td>
                      <td className="py-3 px-4 text-center">
                        {res.downloadUrl ? (
                          <a
                            href={res.downloadUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-600 hover:text-white text-amber-800 rounded text-xs font-semibold inline-flex items-center gap-1 transition"
                            title="Download Official Result PDF"
                          >
                            <Download className="w-3 h-3" />
                            <span>PDF</span>
                          </a>
                        ) : (
                          <span className="text-slate-400 text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </section>
      )}

      {/* Tab 3: Curriculum & Streams */}
      {activeTab === 'curriculum' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="curriculum">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-700">CBSE Curriculum Framework</span>
              <h3 className="text-2xl font-serif font-bold text-[#002b49] mt-1">
                Senior Secondary Subject Combinations (Classes XI &amp; XII)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Prescribed by the Central Board of Secondary Education, New Delhi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Stream 1 */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded inline-block">
                  Science Stream (Medical / Non-Medical)
                </div>
                <h4 className="text-base font-bold text-[#002b49]">PCM / PCB Combinations</h4>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>English Core (Compulsory)</li>
                  <li>Physics (Theory &amp; Practical)</li>
                  <li>Chemistry (Theory &amp; Practical)</li>
                  <li>Mathematics / Applied Mathematics</li>
                  <li>Biology / Biotechnology</li>
                  <li>Computer Science (Python) / Physical Education (Optional)</li>
                </ul>
              </div>

              {/* Stream 2 */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-1 rounded inline-block">
                  Commerce Stream
                </div>
                <h4 className="text-base font-bold text-[#002b49]">Commerce with / without Maths</h4>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>English Core (Compulsory)</li>
                  <li>Accountancy</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Applied Mathematics / Informatics Practices</li>
                  <li>Physical Education / Hindi Core (Optional)</li>
                </ul>
              </div>

              {/* Stream 3 */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded inline-block">
                  Humanities Stream
                </div>
                <h4 className="text-base font-bold text-[#002b49]">Arts &amp; Social Sciences</h4>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>English Core (Compulsory)</li>
                  <li>History</li>
                  <li>Political Science</li>
                  <li>Geography / Psychology</li>
                  <li>Economics / Hindi Core</li>
                  <li>Physical Education / Painting (Optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Document Viewer Modal */}
      <DocumentViewerModal
        isOpen={!!selectedDoc}
        doc={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />

    </div>
  );
}
