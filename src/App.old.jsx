import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdmissionEnquiryModal from './components/AdmissionEnquiryModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import CbseDisclosure from './pages/CbseDisclosure';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Scroll to top helper with hash awareness
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const timer1 = setTimeout(scrollToElement, 100);
        const timer2 = setTimeout(scrollToElement, 300);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
        
        {/* Navigation */}
        <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={() => setEnquiryModalOpen(true)} />} />
            <Route path="/about" element={<About onOpenEnquiry={() => setEnquiryModalOpen(true)} />} />
            <Route path="/admissions" element={<Admissions onOpenEnquiry={() => setEnquiryModalOpen(true)} />} />
            <Route path="/facilities" element={<Facilities onOpenEnquiry={() => setEnquiryModalOpen(true)} />} />
            <Route path="/cbse-disclosure" element={<CbseDisclosure />} />
            <Route path="/academics" element={<CbseDisclosure />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Direct Section / Subpage Mappings for React Router */}
            <Route path="/chairman" element={<Navigate to="/about#chairman" replace />} />
            <Route path="/managing-director" element={<Navigate to="/about#managing-director" replace />} />
            <Route path="/principal" element={<Navigate to="/about#principal" replace />} />
            <Route path="/vision-mission" element={<Navigate to="/about#vision" replace />} />
            <Route path="/houses" element={<Navigate to="/about#houses" replace />} />
            <Route path="/admission-procedure" element={<Navigate to="/admissions" replace />} />
            <Route path="/eligibility-criteria" element={<Navigate to="/admissions" replace />} />
            <Route path="/fee-guidelines" element={<Navigate to="/admissions" replace />} />
            <Route path="/online-enquiry" element={<Navigate to="/admissions" replace />} />
            <Route path="/robotics-lab" element={<Navigate to="/facilities" replace />} />
            <Route path="/science-labs" element={<Navigate to="/facilities" replace />} />
            <Route path="/computer-lab" element={<Navigate to="/facilities" replace />} />
            <Route path="/sports-complex" element={<Navigate to="/facilities" replace />} />
            <Route path="/transport" element={<Navigate to="/facilities" replace />} />
            <Route path="/results" element={<Navigate to="/cbse-disclosure" replace />} />
            <Route path="/curriculum" element={<Navigate to="/cbse-disclosure" replace />} />
            {/* 404 Fallback Route */}
            <Route path="*" element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-2xl font-serif mb-4">
                  404
                </div>
                <h1 className="text-2xl font-serif font-bold text-[#002b49] mb-2">Page Not Found</h1>
                <p className="text-sm text-slate-600 max-w-md mb-6">
                  The page you are looking for doesn't exist or may have been moved. Return to our homepage to explore The Oxford School.
                </p>
                <a href="/" className="px-5 py-2.5 bg-[#002b49] hover:bg-[#003b63] text-white rounded-xl text-xs font-bold transition shadow-md">
                  Return to Homepage
                </a>
              </div>
            } />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenEnquiry={() => setEnquiryModalOpen(true)} />

        {/* Global Floating WhatsApp Quick Action */}
        <FloatingWhatsApp />

        {/* Global Admission Enquiry Modal */}
        <AdmissionEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
        />
      </div>
    </Router>
  );
}
