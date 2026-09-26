import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
