/**
 * The Oxford School, Haridwar
 * Pure Vanilla JavaScript for Static HTML Website
 * Zero Framework Dependencies, High Performance, SEO-friendly & Security-Hardened
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons safely
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    try {
      window.lucide.createIcons();
    } catch (e) {
      console.warn('Lucide icons initialization notice:', e);
    }
  }

  // Set hero background video 1.25x speed if present
  const heroVideo = document.querySelector('video.hero-bg-video');
  if (heroVideo) {
    heroVideo.playbackRate = 1.25;
  }

  // 2. Mobile Menu Toggle with Outside Click & Navigation Cleanup
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenuDrawer.classList.toggle('hidden');
    });

    // Close mobile drawer on outside click
    document.addEventListener('click', (e) => {
      if (!mobileMenuDrawer.classList.contains('hidden')) {
        if (!mobileMenuDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          mobileMenuDrawer.classList.add('hidden');
        }
      }
    });
  }

  if (mobileMenuClose && mobileMenuDrawer) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenuDrawer.classList.add('hidden');
    });
  }

  // Prevent scroll lock leaks during browser navigation / popstate
  ['popstate', 'pagehide', 'hashchange'].forEach(ev => {
    window.addEventListener(ev, () => {
      document.body.style.overflow = '';
      if (mobileMenuDrawer) mobileMenuDrawer.classList.add('hidden');
    });
  });

  // 3. Modals Management (Enquiry, Video, Document)
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      
      // Focus first input if present for accessibility
      const firstInput = modal.querySelector('input:not([type="hidden"]), select, textarea');
      if (firstInput) firstInput.focus();
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      // If modal has video, stop it
      const video = modal.querySelector('video');
      if (video) {
        video.pause();
      }
    }
  };

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.is-open, .modal:not(.hidden)').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });

  // Declarative Modal Trigger Listeners (CSP compliant, no inline onclick needed)
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModal = btn.getAttribute('data-modal-open');
      if (targetModal) openModal(targetModal);
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModal = btn.getAttribute('data-modal-close');
      if (targetModal) {
        closeModal(targetModal);
      } else {
        const parentModal = btn.closest('.modal');
        if (parentModal) closeModal(parentModal.id);
      }
    });
  });

  // Close modals on clicking background backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        const modal = backdrop.closest('.modal') || backdrop;
        if (modal && modal.id) {
          closeModal(modal.id);
        }
      }
    });
  });

  // 4. Confetti Party Popper for Birthdays / Celebrations
  window.fireConfetti = function() {
    if (typeof confetti === 'function') {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x: 0.25, y: 0.65 },
          colors: ['#f59e0b', '#002b49', '#3b82f6', '#10b981', '#fbbf24']
        });
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x: 0.75, y: 0.65 },
          colors: ['#f59e0b', '#d97706', '#0284c7', '#ec4899', '#6366f1']
        });
      } catch (err) {
        // Fallback gracefully if confetti encounters canvas error
      }
    }
  };

  // 5. 3D Leadership Card Flip
  document.querySelectorAll('.card-flip').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button') {
        return;
      }
      this.classList.toggle('is-flipped');
    });
  });

  // 6. News & Articles Category Filter
  const newsCategoryBtns = document.querySelectorAll('.news-filter-btn');
  const newsArticles = document.querySelectorAll('.news-item');

  newsCategoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      newsCategoryBtns.forEach(b => {
        b.classList.remove('bg-[#002b49]', 'text-white', 'shadow-xs');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });
      this.classList.remove('bg-slate-100', 'text-slate-600');
      this.classList.add('bg-[#002b49]', 'text-white', 'shadow-xs');

      newsArticles.forEach(item => {
        if (category === 'All' || item.getAttribute('data-category') === category) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 7. Gallery Category Filter
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const cat = this.getAttribute('data-cat');
      galleryFilterBtns.forEach(b => {
        b.classList.remove('bg-[#002b49]', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-600');
      });
      this.classList.remove('bg-white', 'text-slate-600');
      this.classList.add('bg-[#002b49]', 'text-white', 'shadow-md');

      galleryItems.forEach(item => {
        if (cat === 'All' || item.getAttribute('data-category') === cat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 8. CBSE Disclosure Tab Switcher
  const disclosureTabs = document.querySelectorAll('.disclosure-tab-btn');
  const disclosurePanels = document.querySelectorAll('.disclosure-panel');

  window.switchDisclosureTab = function(tabName) {
    disclosureTabs.forEach(tab => {
      if (tab.getAttribute('data-tab') === tabName) {
        tab.classList.remove('text-slate-600', 'hover:text-[#002b49]');
        tab.classList.add('bg-white', 'text-[#002b49]', 'shadow-sm', 'font-bold');
      } else {
        tab.classList.remove('bg-white', 'text-[#002b49]', 'shadow-sm', 'font-bold');
        tab.classList.add('text-slate-600', 'hover:text-[#002b49]');
      }
    });

    disclosurePanels.forEach(panel => {
      if (panel.id === `tab-${tabName}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
  };

  disclosureTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      switchDisclosureTab(tabName);
    });
  });

  // Check URL hash for tab or scroll
  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    if (['results', 'curriculum', 'disclosure'].includes(hash)) {
      switchDisclosureTab(hash);
    }
  }

  // 9. Quick Hash Scroll Jumps
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Helper function to sanitize text content and prevent DOM-based XSS
  function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 10. Modern Accessible & XSS-Sanitized Toast Notification System
  window.showToast = function(title, message = '', type = 'success') {
    let container = document.getElementById('site-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'site-toast-container';
      container.className = 'fixed top-5 right-5 z-[9999] flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4';
      document.body.appendChild(container);
    }

    const safeTitle = escapeHTML(title);
    const safeMessage = escapeHTML(message);

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto transform translate-y-2 opacity-0 transition-all duration-300 rounded-xl p-4 shadow-2xl flex items-start gap-3 border text-sm';
    
    if (type === 'success') {
      toast.className += ' bg-emerald-900/95 text-white border-emerald-700/60 backdrop-blur-md';
      toast.innerHTML = `
        <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <div class="flex-1">
          <p class="font-bold text-emerald-100">${safeTitle}</p>
          ${safeMessage ? `<p class="text-xs text-emerald-200/80 mt-0.5">${safeMessage}</p>` : ''}
        </div>
      `;
    } else if (type === 'error') {
      toast.className += ' bg-rose-950/95 text-white border-rose-800/60 backdrop-blur-md';
      toast.innerHTML = `
        <div class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0 mt-0.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <div class="flex-1">
          <p class="font-bold text-rose-100">${safeTitle}</p>
          ${safeMessage ? `<p class="text-xs text-rose-200/80 mt-0.5">${safeMessage}</p>` : ''}
        </div>
      `;
    } else {
      toast.className += ' bg-slate-900/95 text-white border-slate-700 backdrop-blur-md';
      toast.innerHTML = `
        <div class="flex-1">
          <p class="font-bold">${safeTitle}</p>
          ${safeMessage ? `<p class="text-xs text-slate-300 mt-0.5">${safeMessage}</p>` : ''}
        </div>
      `;
    }

    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    // Auto-remove after 4 seconds
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('-translate-y-2', 'opacity-0');
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  };

  // 11. Security & Validation-Hardened Form Submissions (Debounced with Button Locking)
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      // If form targets an external action, don't intercept unless it uses event.preventDefault()
      if (this.getAttribute('action') && this.getAttribute('action') !== '#' && !this.classList.contains('site-enquiry-form')) {
        return;
      }

      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]') || this.querySelector('button:not([type="button"])');
      if (submitBtn && submitBtn.disabled) {
        return; // Prevent duplicate submission
      }

      // Check phone input if present
      const phoneInput = this.querySelector('input[type="tel"], input[name="phone"]');
      if (phoneInput) {
        const cleanPhone = phoneInput.value.replace(/\D/g, '');
        if (cleanPhone.length > 0 && !/^[6-9]\d{9}$/.test(cleanPhone)) {
          showToast('Invalid Phone Number', 'Please enter a valid 10-digit Indian mobile number.', 'error');
          phoneInput.focus();
          return;
        }
      }

      // Lock submit button & indicate progress
      let originalBtnHTML = '';
      if (submitBtn) {
        submitBtn.disabled = true;
        originalBtnHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = `
          <span class="inline-flex items-center gap-1.5 opacity-90">
            <svg class="animate-spin -ml-1 mr-1 h-3.5 w-3.5 text-current inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        `;
      }

      // Simulate network dispatch with guaranteed safe UX
      setTimeout(() => {
        // Success Feedback
        showToast(
          'Request Received Successfully!', 
          'The Oxford School administration will contact you shortly.', 
          'success'
        );

        // If inside a modal, close modal after short delay
        const parentModal = this.closest('.modal');
        if (parentModal) {
          setTimeout(() => {
            closeModal(parentModal.id);
          }, 1200);
        }

        // Reset form
        this.reset();

        // Restore submit button
        if (submitBtn) {
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
          }, 600);
        }
      }, 500);
    });
  });
});
