import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdmissionEnquiryModal from './components/AdmissionEnquiryModal';
import VideoHighlightModal from './components/VideoHighlightModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import CbseDisclosure from './pages/CbseDisclosure';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Scroll to top helper with hash anchor awareness
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToElement = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const timer1 = setTimeout(scrollToElement, 150);
        const timer2 = setTimeout(scrollToElement, 400);
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
  const [activeVideoModal, setActiveVideoModal] = useState<{ url: string | null; title?: string }>({
    url: null,
    title: ''
  });

  const handleOpenVideo = (url: string, title?: string) => {
    setActiveVideoModal({ url, title });
  };

  const handleCloseVideo = () => {
    setActiveVideoModal({ url: null, title: '' });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 font-inter selection:bg-[#002b49] selection:text-white">
        {/* Global Luxury Navbar */}
        <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenEnquiry={() => setEnquiryModalOpen(true)}
                  onOpenVideo={handleOpenVideo}
                />
              }
            />
            <Route
              path="/about"
              element={<About onOpenEnquiry={() => setEnquiryModalOpen(true)} />}
            />
            <Route
              path="/admissions"
              element={<Admissions onOpenEnquiry={() => setEnquiryModalOpen(true)} />}
            />
            <Route
              path="/facilities"
              element={
                <Facilities
                  onOpenEnquiry={() => setEnquiryModalOpen(true)}
                  onOpenVideo={handleOpenVideo}
                />
              }
            />
            <Route path="/cbse-disclosure" element={<CbseDisclosure />} />
            <Route path="/academics" element={<CbseDisclosure />} />
            <Route
              path="/gallery"
              element={<Gallery onOpenVideo={handleOpenVideo} />}
            />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Direct Section / Subpage Mappings */}
            <Route path="/chairman" element={<Navigate to="/about#chairman" replace />} />
            <Route path="/managing-director" element={<Navigate to="/about#managing-director" replace />} />
            <Route path="/principal" element={<Navigate to="/about#principal" replace />} />
            <Route path="/vision-mission" element={<Navigate to="/about#vision" replace />} />
            <Route path="/houses" element={<Navigate to="/about#houses" replace />} />
            <Route path="/admission-procedure" element={<Navigate to="/admissions" replace />} />
            <Route path="/eligibility-criteria" element={<Navigate to="/admissions#criteria" replace />} />
            <Route path="/fee-guidelines" element={<Navigate to="/admissions#fees" replace />} />
            <Route path="/online-enquiry" element={<Navigate to="/admissions#enquiry" replace />} />
            <Route path="/robotics-lab" element={<Navigate to="/facilities#robotics-lab" replace />} />
            <Route path="/science-labs" element={<Navigate to="/facilities#science-labs" replace />} />
            <Route path="/computer-lab" element={<Navigate to="/facilities#computer-lab" replace />} />
            <Route path="/sports-complex" element={<Navigate to="/facilities#sports-arena" replace />} />
            <Route path="/transport" element={<Navigate to="/facilities#school-transport" replace />} />
            <Route path="/results" element={<Navigate to="/cbse-disclosure#results" replace />} />
            <Route path="/curriculum" element={<Navigate to="/cbse-disclosure" replace />} />

            {/* 404 Route */}
            <Route
              path="*"
              element={
                <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 bg-white/10 text-white flex items-center justify-center font-bold text-2xl btn-cut-sm mb-4">
                    404
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-2">Page Not Found</h1>
                  <p className="text-xs text-white/60 max-w-md mb-6">
                    The requested page could not be located. Return to our homepage to continue exploring The Oxford School.
                  </p>
                  <a
                    href="/"
                    className="px-6 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-wider btn-cut hover:bg-white/90 transition"
                  >
                    Return to Homepage
                  </a>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEnquiry={() => setEnquiryModalOpen(true)} />

        {/* Global Floating WhatsApp Quick Action */}
        <FloatingWhatsApp />

        {/* Global Admission Enquiry Modal */}
        <AdmissionEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
        />

        {/* Global 4K Video Highlight Modal */}
        <VideoHighlightModal
          videoUrl={activeVideoModal.url}
          title={activeVideoModal.title}
          onClose={handleCloseVideo}
        />
      </div>
    </Router>
  );
}
