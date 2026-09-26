/**
 * The Oxford School, Haridwar
 * Pure Vanilla JavaScript for Static HTML Website
 * Zero Framework Dependencies, High Performance, SEO-friendly
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Set hero video 1.5x speed
  const heroVideo = document.querySelector('video');
  if (heroVideo) {
    heroVideo.playbackRate = 1.5;
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });
  }

  if (mobileMenuClose && mobileMenuDrawer) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenuDrawer.classList.add('hidden');
    });
  }

  // 3. Modals Management (Enquiry, Video, Document)
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
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

  // Close modals on clicking background backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        const modal = backdrop.closest('.modal');
        if (modal) {
          closeModal(modal.id);
        }
      }
    });
  });

  // 4. Confetti Party Popper for Birthdays
  window.fireConfetti = function() {
    if (typeof confetti === 'function') {
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
    }
  };

  // 5. 3D Leadership Card Flip
  document.querySelectorAll('.card-flip').forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't trigger flip if clicking a link or button inside back of card
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
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
