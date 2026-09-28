import { renderPageShell } from './generate-shell.mjs';
import { BOARD_RESULTS } from './src/data/schoolData.js';

// Common Breadcrumb Component Helper
function renderBreadcrumb(items) {
  return `
  <nav aria-label="Breadcrumb" class="bg-slate-100/80 border-b border-slate-200 py-3 text-xs text-slate-600">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
      <a href="index.html" class="hover:text-[#002b49] font-medium flex items-center gap-1">
        <i data-lucide="home" class="w-3.5 h-3.5 text-slate-400"></i>
        <span>Home</span>
      </a>
      ${items.map((item, idx) => `
        <i data-lucide="chevron-right" class="w-3 h-3 text-slate-400"></i>
        ${idx === items.length - 1 
          ? `<span class="font-bold text-[#002b49]">${item.name}</span>`
          : `<a href="${item.url}" class="hover:text-[#002b49] font-medium">${item.name}</a>`
        }
      `).join('')}
    </div>
  </nav>
  `;
}

// ==========================================
// 1. FOUNDER CHAIRMAN'S DESK (chairman.html)
// ==========================================
export function generateChairmanPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'About The School', url: 'about.html' },
    { name: "Founder Chairman's Desk", url: 'chairman.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Portrait Photo Card -->
        <div class="lg:col-span-5 xl:col-span-4 sticky top-24">
          <div class="bg-white rounded-3xl p-5 border-2 border-amber-500/30 shadow-xl overflow-hidden text-center relative group">
            <div class="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 relative mb-4">
              <img 
                src="images/chairman.jpg" 
                alt="Shri Arvind Chauhan - Founder Chairman" 
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#001f35] via-transparent to-transparent opacity-80"></div>
              <div class="absolute bottom-4 left-4 right-4 text-left text-white">
                <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">Founder Chairman</span>
                <h3 class="text-xl font-bold font-serif text-white">Shri Arvind Chauhan</h3>
                <p class="text-xs text-slate-300">The Oxford Educational Society</p>
              </div>
            </div>

            <div class="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 text-left">
              <div class="flex items-center gap-2">
                <i data-lucide="award" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span>Estd. The Oxford School in 2014</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="map-pin" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span>Roshnabad Campus, Haridwar</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="book-open" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span>Motto: "Strive and Soar High"</span>
              </div>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100">
              <button data-modal-open="enquiry-modal" class="w-full py-2.5 bg-[#002b49] hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition shadow cursor-pointer">
                Connect with Chairman's Office
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Visionary Address -->
        <div class="lg:col-span-7 xl:col-span-8 space-y-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>Chairman's Official Address</span>
          </div>

          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#002b49] leading-tight">
            "Education is the sacred tool that empowers children to rise above ordinary limits and serve humanity."
          </h1>

          <div class="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              It gives me immense pride and joy to welcome you to <strong>The Oxford School, Haridwar</strong>. When we founded this institution in 2014, our primary vision was clear: to create an educational sanctuary in the sacred city of Haridwar that harmoniously blends rigorous academic excellence with timeless moral foundations.
            </p>
            <p>
              Ours is a vibrant community rooted in Indian cultural traditions, yet dedicated to equipping children with global competencies. We do not believe in rote learning or superficial examinations. Instead, we encourage each child to ask questions, explore science and robotics, appreciate the fine arts, and display unwavering sportsmanship on the athletic field.
            </p>
            <blockquote class="border-l-4 border-amber-500 pl-4 py-2 italic text-slate-800 bg-amber-50/50 rounded-r-xl my-6 text-sm sm:text-base font-serif">
              "We nurture saplings in the form of our students, helping them grow into mighty banyan trees that provide shade, wisdom, and leadership to our nation."
            </blockquote>
            <p>
              Every modern classroom, every microscope in our composite science laboratories, and every algorithm written in our robotics lab is designed with one purpose in mind—to give your child the self-confidence to <em>Strive and Soar High</em>.
            </p>
            <p>
              I extend my heartfelt gratitude to our parent community for their enduring trust in our stewardship. I invite you to walk alongside us as we shape future leaders who will serve our nation and the world with honor, intelligence, and empathy.
            </p>
          </div>

          <!-- 4 Pillars of Chairman's Educational Vision -->
          <div class="pt-6 border-t border-slate-200">
            <h3 class="text-base font-bold font-serif text-[#002b49] mb-4">Four Pillars of Our Educational Philosophy</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition">
                <div class="w-8 h-8 rounded-lg bg-[#002b49] text-amber-400 flex items-center justify-center font-bold text-xs mb-2">01</div>
                <h4 class="font-bold text-[#002b49] text-sm">Value-Based Rigor</h4>
                <p class="text-xs text-slate-600 mt-1">Moral integrity, discipline, and respect for our cultural roots are woven into daily school life.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition">
                <div class="w-8 h-8 rounded-lg bg-[#002b49] text-amber-400 flex items-center justify-center font-bold text-xs mb-2">02</div>
                <h4 class="font-bold text-[#002b49] text-sm">21st-Century Competencies</h4>
                <p class="text-xs text-slate-600 mt-1">Robotics, mental math, digital coding, and critical inquiry prepare scholars for tomorrow's world.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition">
                <div class="w-8 h-8 rounded-lg bg-[#002b49] text-amber-400 flex items-center justify-center font-bold text-xs mb-2">03</div>
                <h4 class="font-bold text-[#002b49] text-sm">Holistic Care</h4>
                <p class="text-xs text-slate-600 mt-1">Individual mentorship ensuring every child blossoms at their own pace without undue stress.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition">
                <div class="w-8 h-8 rounded-lg bg-[#002b49] text-amber-400 flex items-center justify-center font-bold text-xs mb-2">04</div>
                <h4 class="font-bold text-[#002b49] text-sm">Community & Nation Building</h4>
                <p class="text-xs text-slate-600 mt-1">Instilling patriotic commitment, civic duty, and environmental responsibility in young minds.</p>
              </div>
            </div>
          </div>

          <div class="pt-4 flex flex-wrap items-center gap-3">
            <a href="about.html" class="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition">
              ← Return to About Overview
            </a>
            <a href="managing-director.html" class="px-4 py-2 rounded-xl bg-[#002b49] text-white text-xs font-bold hover:bg-amber-600 transition flex items-center gap-1.5">
              <span>Read Managing Director's Message</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Founder Chairman's Desk | Shri Arvind Chauhan - The Oxford School Haridwar",
    description: "Read the official address and educational vision from Shri Arvind Chauhan, Founder Chairman of The Oxford School, Haridwar (CBSE Affiliated, Roshnabad).",
    keywords: "Founder Chairman Oxford School Haridwar, Arvind Chauhan Oxford School, Chairman message Haridwar CBSE, Oxford School Roshnabad leadership",
    canonicalUrl: "chairman.html",
    activePage: "chairman",
    content
  });
}

// ==========================================
// 2. MANAGING DIRECTOR'S DESK (managing-director.html)
// ==========================================
export function generateManagingDirectorPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'About The School', url: 'about.html' },
    { name: "Managing Director's Desk", url: 'managing-director.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Portrait Photo Card -->
        <div class="lg:col-span-5 xl:col-span-4 sticky top-24">
          <div class="bg-white rounded-3xl p-5 border-2 border-amber-500/30 shadow-xl overflow-hidden text-center relative group">
            <div class="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 relative mb-4">
              <img 
                src="images/managing_director.jpg" 
                alt="Shri Shivank Chauhan - Managing Director" 
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#001f35] via-transparent to-transparent opacity-80"></div>
              <div class="absolute bottom-4 left-4 right-4 text-left text-white">
                <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">Managing Director</span>
                <h3 class="text-xl font-bold font-serif text-white">Shri Shivank Chauhan</h3>
                <p class="text-xs text-slate-300">The Oxford School, Haridwar</p>
              </div>
            </div>

            <div class="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 text-left">
              <div class="flex items-center gap-2">
                <i data-lucide="cpu" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span>Pioneer of STEM &amp; Digital Infrastructure</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="shield-check" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span>Safety &amp; Smart Transit Architecture</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="trending-up" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span>Continuous Faculty Development</span>
              </div>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100">
              <button data-modal-open="enquiry-modal" class="w-full py-2.5 bg-[#002b49] hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition shadow cursor-pointer">
                Schedule an Administrative Meeting
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Managing Director's Message -->
        <div class="lg:col-span-7 xl:col-span-8 space-y-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="compass" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>Managing Director's Desk</span>
          </div>

          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#002b49] leading-tight">
            "To get together is the beginning, to stay together is progress, and to work together is success."
          </h1>

          <div class="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Welcome to the dynamic learning hub of <strong>The Oxford School, Haridwar</strong>. As Managing Director, my foremost mission is to bridge the gap between classical academic traditions and modern 21st-century technological tools.
            </p>
            <p>
              Today's world demands that students possess more than theoretical knowledge; they must be analytical problem-solvers, emotionally resilient individuals, and ethical team players. To achieve this, our administration has heavily invested in state-of-the-art educational infrastructure:
            </p>
            <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li><strong>Hands-on STEM Innovation:</strong> Dedicated Robotics, Arduino, and AI lab where students move from passive screen consumers to active technology creators.</li>
              <li><strong>Smart Interactive Classrooms:</strong> 48+ digital classrooms equipped with interactive flat panels and high-speed campus networks.</li>
              <li><strong>Transparent School ERP:</strong> Seamless Edunext portal integration ensuring parents have instant real-time access to student attendance, report cards, and homework.</li>
              <li><strong>GPS & CCTV Transit Security:</strong> Comprehensive fleet of 18+ school buses safeguarding students throughout their daily journey.</li>
            </ul>
            <p>
              We firmly believe that when educators, parents, and administrative leadership work in unyielding synergy, there is no benchmark that our students cannot conquer.
            </p>
          </div>

          <div class="pt-4 flex flex-wrap items-center gap-3">
            <a href="chairman.html" class="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition">
              ← Chairman's Desk
            </a>
            <a href="principal.html" class="px-4 py-2 rounded-xl bg-[#002b49] text-white text-xs font-bold hover:bg-amber-600 transition flex items-center gap-1.5">
              <span>Read Principal's Message</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Managing Director's Desk | Shri Shivank Chauhan - The Oxford School Haridwar",
    description: "Message and strategic vision from Shri Shivank Chauhan, Managing Director of The Oxford School, Haridwar. Focus on modern STEM, smart classrooms, and student empowerment.",
    keywords: "Managing Director Oxford School Haridwar, Shivank Chauhan, Oxford School administration, Haridwar modern CBSE school",
    canonicalUrl: "managing-director.html",
    activePage: "managing-director",
    content
  });
}

// ==========================================
// 3. PRINCIPAL'S DESK (principal.html)
// ==========================================
export function generatePrincipalPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'About The School', url: 'about.html' },
    { name: "Principal's Desk", url: 'principal.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Portrait Photo Card -->
        <div class="lg:col-span-5 xl:col-span-4 sticky top-24">
          <div class="bg-white rounded-3xl p-5 border-2 border-amber-500/30 shadow-xl overflow-hidden text-center relative group">
            <div class="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 relative mb-4">
              <img 
                src="images/principal.jpg" 
                alt="Ms. Priya Chauhan - Principal" 
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#001f35] via-transparent to-transparent opacity-80"></div>
              <div class="absolute bottom-4 left-4 right-4 text-left text-white">
                <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">Principal</span>
                <h3 class="text-xl font-bold font-serif text-white">Ms. Priya Chauhan</h3>
                <p class="text-xs text-slate-300">The Oxford School, Haridwar</p>
              </div>
            </div>

            <div class="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 text-left">
              <div class="flex items-center gap-2">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span>100% CBSE Board Pass Record</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="users" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span>85+ CBSE Certified Mentors</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="heart" class="w-4 h-4 text-rose-500 shrink-0"></i>
                <span>Child-Centric Empathetic Pedagogy</span>
              </div>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100">
              <button data-modal-open="enquiry-modal" class="w-full py-2.5 bg-[#002b49] hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition shadow cursor-pointer">
                Book an Academic Consultation
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Principal's Address -->
        <div class="lg:col-span-7 xl:col-span-8 space-y-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>Academic Leadership</span>
          </div>

          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#002b49] leading-tight">
            "Education is not merely preparing for examinations; it is the joyful discovery of lifelong purpose and moral courage."
          </h1>

          <div class="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Dear Parents and Esteemed Well-Wishers,
            </p>
            <p>
              At <strong>The Oxford School, Haridwar</strong>, every morning begins with an unwavering commitment: to ensure that every student who enters our campus feels safe, valued, intellectually challenged, and inspired to reach their highest potential.
            </p>
            <p>
              Our academic framework is grounded strictly in the <strong>Central Board of Secondary Education (CBSE)</strong> curriculum, enhanced by experiential learning modules in science laboratories, Vedic mathematics, robotics, and communicative English. Our educators do not act as mere lecturers; they serve as empathetic mentors who identify the unique spark within every child.
            </p>
            <blockquote class="border-l-4 border-amber-500 pl-4 py-2 italic text-slate-800 bg-amber-50/50 rounded-r-xl my-6 text-sm sm:text-base font-serif">
              "When learning is stimulating and environment is empathetic, children acquire skills effortlessly and develop authentic self-esteem."
            </blockquote>
            <p>
              Our consistent <strong>100% board examination pass record</strong> in both Class X and Class XII is a direct testament to our disciplined remedial classes, doubt-clearing sessions, and continuous evaluation systems. Yet, we take equal pride when our students win athletic trophies, recite self-composed poetry, or build solar-powered rover prototypes.
            </p>
            <p>
              I welcome prospective parents to visit our Roshnabad campus, interact with our faculty, and experience firsthand the purposeful and joyful energy that defines The Oxford School family.
            </p>
          </div>

          <div class="pt-4 flex flex-wrap items-center gap-3">
            <a href="managing-director.html" class="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition">
              ← Managing Director's Desk
            </a>
            <a href="vision-mission.html" class="px-4 py-2 rounded-xl bg-[#002b49] text-white text-xs font-bold hover:bg-amber-600 transition flex items-center gap-1.5">
              <span>Explore Vision &amp; Motto</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Principal's Desk | Ms. Priya Chauhan - The Oxford School Haridwar",
    description: "Read the official address from Ms. Priya Chauhan, Principal of The Oxford School Haridwar. Academic excellence, CBSE curriculum rigor, and child-centric holistic development.",
    keywords: "Principal Oxford School Haridwar, Priya Chauhan Principal, Oxford School Roshnabad principal desk, CBSE school Haridwar leadership",
    canonicalUrl: "principal.html",
    activePage: "principal",
    content
  });
}

// ==========================================
// 4. VISION, MISSION & MOTTO (vision-mission.html)
// ==========================================
export function generateVisionMissionPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'About The School', url: 'about.html' },
    { name: 'Vision, Mission & Motto', url: 'vision-mission.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">Our Core North Star</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          Vision, Mission &amp; School Motto
        </h1>
        <p class="text-sm text-slate-600">
          The timeless principles and guiding commitments that steer every lesson, program, and initiative at The Oxford School, Haridwar.
        </p>
      </div>

      <!-- School Motto Banner -->
      <div class="bg-gradient-to-r from-[#002b49] via-[#001f35] to-[#001729] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border-2 border-amber-500/40 relative overflow-hidden text-center">
        <div class="max-w-2xl mx-auto space-y-3 relative z-10">
          <span class="text-xs uppercase font-extrabold tracking-widest text-amber-400">Official School Motto</span>
          <h2 class="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-wide">
            "STRIVE AND SOAR HIGH"
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
            A constant call to every Oxford scholar to never settle for mediocrity, to push past self-imposed boundaries through relentless effort (<em>Strive</em>), and to reach the pinnacle of intellectual, moral, and physical achievement (<em>Soar High</em>).
          </p>
        </div>
      </div>

      <!-- Vision & Mission Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Vision Card -->
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:border-amber-400 transition flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-700 mb-5">
              <i data-lucide="eye" class="w-6 h-6"></i>
            </div>
            <h3 class="text-2xl font-serif font-bold text-[#002b49] mb-3">Our Vision</h3>
            <p class="text-slate-700 text-sm leading-relaxed mb-4">
              To be recognized as a premier educational institution in Northern India that nurtures intellectually curious, emotionally balanced, and morally courageous citizens capable of leading global transformation while remaining proudly anchored in Indian values.
            </p>
            <ul class="space-y-2 text-xs text-slate-600">
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span>Fostering ethical and compassionate future leaders.</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span>Achieving international educational benchmarks within CBSE framework.</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span>Empowering girls and boys equally with STEM & leadership skills.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Mission Card -->
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:border-amber-400 transition flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-[#002b49]/10 border border-[#002b49]/20 flex items-center justify-center text-[#002b49] mb-5">
              <i data-lucide="target" class="w-6 h-6"></i>
            </div>
            <h3 class="text-2xl font-serif font-bold text-[#002b49] mb-3">Our Mission</h3>
            <p class="text-slate-700 text-sm leading-relaxed mb-4">
              To provide a safe, inclusive, and technologically enriched learning environment that empowers children from diverse backgrounds with scientific temperament, communicative clarity, athletic vigor, and social empathy.
            </p>
            <ul class="space-y-2 text-xs text-slate-600">
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span>Deliver high-caliber academic rigor with individualized mentorship.</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span>Integrate hands-on robotics, laboratory experiments, and Vedic math.</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <span>Instill unyielding discipline through sports, Karate, and yoga.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Five Core Values -->
      <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
        <h3 class="text-xl font-serif font-bold text-[#002b49] text-center mb-8">The Five Core Values of The Oxford School</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
            <span class="text-2xl mb-2 block">⚖️</span>
            <h4 class="font-bold text-sm text-[#002b49]">Satya (Integrity)</h4>
            <p class="text-xs text-slate-500 mt-1">Honesty in thought, word, and academic pursuit.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
            <span class="text-2xl mb-2 block">🔬</span>
            <h4 class="font-bold text-sm text-[#002b49]">Jigyasa (Curiosity)</h4>
            <p class="text-xs text-slate-500 mt-1">Questioning, testing, and continuous scientific inquiry.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
            <span class="text-2xl mb-2 block">🤝</span>
            <h4 class="font-bold text-sm text-[#002b49]">Karuna (Compassion)</h4>
            <p class="text-xs text-slate-500 mt-1">Empathy and kindness towards all peers and living beings.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
            <span class="text-2xl mb-2 block">🏆</span>
            <h4 class="font-bold text-sm text-[#002b49]">Parishram (Excellence)</h4>
            <p class="text-xs text-slate-500 mt-1">Uncompromising commitment to quality and dedication.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
            <span class="text-2xl mb-2 block">🇮🇳</span>
            <h4 class="font-bold text-sm text-[#002b49]">Rashtra Bhakti (Duty)</h4>
            <p class="text-xs text-slate-500 mt-1">Pride in India's heritage and commitment to national service.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Vision, Mission & Motto | The Oxford School Haridwar - Strive and Soar High",
    description: "Explore the Vision, Mission, and official School Motto 'Strive and Soar High' of The Oxford School, Haridwar. Dedicated to holistic excellence and character building.",
    keywords: "Vision Oxford School Haridwar, Mission Oxford School, Strive and Soar High, Oxford school motto Haridwar, core values CBSE school",
    canonicalUrl: "vision-mission.html",
    activePage: "vision",
    content
  });
}

// ==========================================
// 5. THE FOUR HOUSES (houses.html)
// ==========================================
export function generateHousesPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'About The School', url: 'about.html' },
    { name: 'The Four Houses', url: 'houses.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">House System &amp; Leadership</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          The Four Houses of The Oxford School
        </h1>
        <p class="text-sm text-slate-600">
          Named after India's sacred life-giving rivers, our House System fosters lifelong camaraderie, healthy competition, team leadership, and school spirit.
        </p>
      </div>

      <!-- 4 Houses Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Ganga House -->
        <div class="bg-white rounded-3xl p-6 border-2 border-blue-500/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md group-hover:scale-110 transition-transform">
              🌊
            </div>
            <span class="text-xs font-extrabold uppercase tracking-wider text-blue-700 block">Blue House</span>
            <h3 class="text-xl font-bold font-serif text-[#002b49] mt-1 mb-2">Ganga House</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Symbolizing purity, unceasing flow, and inner strength. Ganga House scholars represent clarity of thought, resilience in the face of obstacles, and selfless service.
            </p>
            <div class="p-3 bg-blue-50 rounded-xl text-xs space-y-1 text-blue-900 border border-blue-100">
              <div><strong>Motto:</strong> Flow with Purpose &amp; Purity</div>
              <div><strong>Element:</strong> Water (Jala)</div>
              <div><strong>Core Virtue:</strong> Resilience &amp; Honor</div>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>House Captain: <strong>Class XII</strong></span>
            <span class="font-bold text-blue-700">#GangaSquad</span>
          </div>
        </div>

        <!-- Yamuna House -->
        <div class="bg-white rounded-3xl p-6 border-2 border-amber-500/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl mb-4 shadow-md group-hover:scale-110 transition-transform">
              ☀️
            </div>
            <span class="text-xs font-extrabold uppercase tracking-wider text-amber-700 block">Gold / Yellow House</span>
            <h3 class="text-xl font-bold font-serif text-[#002b49] mt-1 mb-2">Yamuna House</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Symbolizing energy, solar brilliance, and steadfast dedication. Yamuna House scholars are known for their cheerful determination, debate acumen, and perseverance.
            </p>
            <div class="p-3 bg-amber-50 rounded-xl text-xs space-y-1 text-amber-900 border border-amber-100">
              <div><strong>Motto:</strong> Radiate Light &amp; Courage</div>
              <div><strong>Element:</strong> Light (Surya)</div>
              <div><strong>Core Virtue:</strong> Optimism &amp; Tenacity</div>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>House Captain: <strong>Class XII</strong></span>
            <span class="font-bold text-amber-700">#YamunaForce</span>
          </div>
        </div>

        <!-- Kaveri House -->
        <div class="bg-white rounded-3xl p-6 border-2 border-emerald-500/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md group-hover:scale-110 transition-transform">
              🌿
            </div>
            <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">Green House</span>
            <h3 class="text-xl font-bold font-serif text-[#002b49] mt-1 mb-2">Kaveri House</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Symbolizing life, prosperity, and harmony with nature. Kaveri House scholars lead by example in sportsmanship, environmental leadership, and peer support.
            </p>
            <div class="p-3 bg-emerald-50 rounded-xl text-xs space-y-1 text-emerald-900 border border-emerald-100">
              <div><strong>Motto:</strong> Grow in Harmony &amp; Grace</div>
              <div><strong>Element:</strong> Earth (Prithvi)</div>
              <div><strong>Core Virtue:</strong> Discipline &amp; Vitality</div>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>House Captain: <strong>Class XII</strong></span>
            <span class="font-bold text-emerald-700">#KaveriKnights</span>
          </div>
        </div>

        <!-- Saraswati House -->
        <div class="bg-white rounded-3xl p-6 border-2 border-rose-500/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md group-hover:scale-110 transition-transform">
              🔥
            </div>
            <span class="text-xs font-extrabold uppercase tracking-wider text-rose-700 block">Red House</span>
            <h3 class="text-xl font-bold font-serif text-[#002b49] mt-1 mb-2">Saraswati House</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Symbolizing supreme wisdom, artistic creativity, and intellectual passion. Saraswati House scholars excel in Olympiads, theatrical arts, and STEM innovations.
            </p>
            <div class="p-3 bg-rose-50 rounded-xl text-xs space-y-1 text-rose-900 border border-rose-100">
              <div><strong>Motto:</strong> Ignite the Flame of Wisdom</div>
              <div><strong>Element:</strong> Fire &amp; Intellect (Agni)</div>
              <div><strong>Core Virtue:</strong> Creativity &amp; Scholarship</div>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>House Captain: <strong>Class XII</strong></span>
            <span class="font-bold text-rose-700">#SaraswatiLegends</span>
          </div>
        </div>

      </div>

      <!-- House Activities & Shield -->
      <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-left">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 class="font-serif font-bold text-lg text-[#002b49] mb-2">Annual Cock House Shield</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Every academic year, points are awarded across four major domains: Academic distinctions, Athletic sports events, Co-curricular debates &amp; fests, and Campus discipline. The winning house is awarded the prestigious Cock House Rolling Trophy at Annual Day.
            </p>
          </div>
          <div>
            <h3 class="font-serif font-bold text-lg text-[#002b49] mb-2">Student Council Hierarchy</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Each house is steered democratically by elected student leaders: Head Boy, Head Girl, Sports Captain, House Captains, and Vice-Captains under the mentorship of designated Senior Faculty House Masters.
            </p>
          </div>
          <div>
            <h3 class="font-serif font-bold text-lg text-[#002b49] mb-2">Inter-House Calendar</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Year-round competitions include Inter-House Football &amp; Cricket, Rangoli &amp; Fine Arts, English &amp; Hindi Elocution, Science Quiz, and the Annual Athletic Championship.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "The Four Houses | Ganga, Yamuna, Kaveri, Saraswati - The Oxford School Haridwar",
    description: "Discover the Four Houses of The Oxford School Haridwar: Ganga, Yamuna, Kaveri, and Saraswati. Fostering team leadership, sportsmanship, and inter-house championships.",
    keywords: "Four Houses Oxford School Haridwar, Ganga House, Yamuna House, Kaveri House, Saraswati House, House system CBSE school",
    canonicalUrl: "houses.html",
    activePage: "houses",
    content
  });
}

// ==========================================
// 6. ADMISSION PROCEDURE (admission-procedure.html)
// ==========================================
export function generateAdmissionProcedurePage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Admissions 2025-26', url: 'admissions.html' },
    { name: 'Admission Procedure', url: 'admission-procedure.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">Academic Session 2025-26</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          Step-by-Step Admission Procedure
        </h1>
        <p class="text-sm text-slate-600">
          A seamless, transparent, and parent-friendly four-step journey to enroll your ward at The Oxford School, Haridwar.
        </p>
      </div>

      <!-- 4 Visual Steps -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-amber-400 transition shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-[#002b49] text-amber-400 font-serif font-bold text-xl flex items-center justify-center mb-4">
            01
          </div>
          <h3 class="text-lg font-serif font-bold text-[#002b49] mb-2">Registration &amp; Prospectus</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">
            Submit the online admission enquiry form or visit the school administrative desk at Roshnabad to collect the official admission registration kit.
          </p>
          <span class="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">Online or On-Campus</span>
        </div>

        <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-amber-400 transition shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-[#002b49] text-amber-400 font-serif font-bold text-xl flex items-center justify-center mb-4">
            02
          </div>
          <h3 class="text-lg font-serif font-bold text-[#002b49] mb-2">Interaction / Assessment</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">
            Friendly, stress-free interaction for Pre-Primary children; diagnostic assessment in foundational English &amp; Maths for Classes I to XII to identify strengths.
          </p>
          <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">Diagnostic, Not Eliminatory</span>
        </div>

        <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-amber-400 transition shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-[#002b49] text-amber-400 font-serif font-bold text-xl flex items-center justify-center mb-4">
            03
          </div>
          <h3 class="text-lg font-serif font-bold text-[#002b49] mb-2">Document Verification</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">
            Submission of essential verification documents: Birth Certificate, previous report card, Transfer Certificate (TC), Aadhaar card, and passport-size photographs.
          </p>
          <span class="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">Desk Verification</span>
        </div>

        <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-amber-400 transition shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-[#002b49] text-amber-400 font-serif font-bold text-xl flex items-center justify-center mb-4">
            04
          </div>
          <h3 class="text-lg font-serif font-bold text-[#002b49] mb-2">Enrolment &amp; Orientation</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">
            Completion of fee formalities, issuance of official Scholar Register number, allocation of bus route, and invitation to the Parent Orientation Program.
          </p>
          <span class="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">Welcome to Oxford!</span>
        </div>

      </div>

      <!-- Mandatory Documents Checklist -->
      <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
        <h3 class="text-xl font-serif font-bold text-[#002b49] mb-4 flex items-center gap-2">
          <i data-lucide="file-check" class="w-5 h-5 text-amber-600"></i>
          <span>Checklist of Mandatory Documents</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
            <div>
              <strong>Municipal Birth Certificate:</strong> Self-attested photocopy (original required for verification) for Nursery to Class I admissions.
            </div>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
            <div>
              <strong>Original Transfer Certificate (TC):</strong> Countersigned by Education Officer / CBSE Board for Class II onwards.
            </div>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
            <div>
              <strong>Previous Report Card:</strong> Copy of the previous academic year's final progress report card.
            </div>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
            <div>
              <strong>Identity &amp; Address Proof:</strong> Photocopies of Student and Parent Aadhaar Cards and address proof.
            </div>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
            <div>
              <strong>Passport Size Photographs:</strong> 4 colored photographs of the student and 2 of each parent/guardian.
            </div>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
            <div>
              <strong>Medical Fitness &amp; Blood Group Card:</strong> Duly filled health declaration and certified blood group report.
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-xs text-slate-500">Need personal assistance with documents?</p>
            <p class="text-sm font-bold text-[#002b49]">Helpline: +91 70600 89183 / +91 72480 60000</p>
          </div>
          <div class="flex items-center gap-3">
            <a href="online-enquiry.html" class="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl text-xs font-bold transition shadow">
              Fill Online Admission Form
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Admission Procedure 2025-26 | Step-by-Step Guide - The Oxford School Haridwar",
    description: "Detailed step-by-step admission procedure for session 2025-26 at The Oxford School Haridwar. Registration, document checklist, entrance assessment, and fee schedule.",
    keywords: "Admission procedure Oxford School Haridwar, school admission steps Roshnabad, documents required admission CBSE Haridwar, Oxford School admission guidelines",
    canonicalUrl: "admission-procedure.html",
    activePage: "admission-procedure",
    content
  });
}

// ==========================================
// 7. ELIGIBILITY & AGE CRITERIA (eligibility-criteria.html)
// ==========================================
export function generateEligibilityCriteriaPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Admissions 2025-26', url: 'admissions.html' },
    { name: 'Eligibility & Age Criteria', url: 'eligibility-criteria.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">Admission Norms 2025-26</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          Eligibility Norms &amp; Age Criteria
        </h1>
        <p class="text-sm text-slate-600">
          In strict compliance with Central Board of Secondary Education (CBSE) guidelines and National Education Policy (NEP) age regulations.
        </p>
      </div>

      <!-- Age Matrix Table -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        <div class="bg-[#002b49] text-white p-6">
          <h2 class="text-lg font-serif font-bold">Standard Age Matrix (Calculated as on 31st March 2025)</h2>
          <p class="text-xs text-slate-300 mt-1">Please confirm that your child satisfies the minimum age bracket before submitting registration.</p>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px]">
              <tr>
                <th class="p-4">Grade / Class</th>
                <th class="p-4">Minimum Age Requirement</th>
                <th class="p-4">Academic Stage</th>
                <th class="p-4">Evaluation Pattern</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">Playgroup / Pre-Nursery</td>
                <td class="p-4 text-amber-800 font-semibold">2.5 to 3 Years</td>
                <td class="p-4">Foundational Early Years</td>
                <td class="p-4">Informal, playful interaction</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">Nursery</td>
                <td class="p-4 text-amber-800 font-semibold">3+ Years</td>
                <td class="p-4">Foundational Stage</td>
                <td class="p-4">Observation of gross motor &amp; communication</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">LKG (Lower Kindergarten)</td>
                <td class="p-4 text-amber-800 font-semibold">4+ Years</td>
                <td class="p-4">Foundational Stage</td>
                <td class="p-4">Basic identification of colors, shapes, alphabet</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">UKG (Upper Kindergarten)</td>
                <td class="p-4 text-amber-800 font-semibold">5+ Years</td>
                <td class="p-4">Foundational Stage</td>
                <td class="p-4">Foundational phonics &amp; number recognition</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">Class I</td>
                <td class="p-4 text-amber-800 font-semibold">6+ Years (NEP Mandate)</td>
                <td class="p-4">Primary Stage</td>
                <td class="p-4">Simple reading &amp; numeracy diagnostic</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">Class II to Class V</td>
                <td class="p-4 text-amber-800 font-semibold">7 to 10 Years</td>
                <td class="p-4">Primary School</td>
                <td class="p-4">Written test in English &amp; Mathematics</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">Class VI to Class VIII</td>
                <td class="p-4 text-amber-800 font-semibold">11 to 13 Years</td>
                <td class="p-4">Middle School</td>
                <td class="p-4">Proficiency test: English, Science &amp; Maths</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">Class IX &amp; X</td>
                <td class="p-4 text-amber-800 font-semibold">14 to 15 Years</td>
                <td class="p-4">Secondary (CBSE AISSE)</td>
                <td class="p-4">Comprehensive written assessment + TC check</td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="p-4 font-bold text-[#002b49]">Class XI &amp; XII</td>
                <td class="p-4 text-amber-800 font-semibold">16+ Years</td>
                <td class="p-4">Senior Secondary (CBSE AISSCE)</td>
                <td class="p-4">Class X Board Marks Cut-Off + Stream Counselling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Class XI Stream Cut-Off Norms -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-left">
          <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-3">
            ⚛️
          </div>
          <h3 class="font-serif font-bold text-base text-[#002b49]">Science (PCM)</h3>
          <p class="text-xs text-slate-600 mt-1 mb-3">Physics, Chemistry, Mathematics, English Core + Optional (Computer Science / Physical Education).</p>
          <div class="p-3 bg-slate-50 rounded-xl text-xs space-y-1 text-slate-700">
            <div><strong>Eligibility:</strong> Min. 70% in Class X Boards</div>
            <div><strong>Maths Requirement:</strong> Standard Mathematics</div>
            <div><strong>Career Paths:</strong> Engineering, Architecture, NDA, Data Science</div>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-left">
          <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
            🧬
          </div>
          <h3 class="font-serif font-bold text-base text-[#002b49]">Science (PCB)</h3>
          <p class="text-xs text-slate-600 mt-1 mb-3">Physics, Chemistry, Biology, English Core + Optional (Psychology / Physical Ed. / IP).</p>
          <div class="p-3 bg-slate-50 rounded-xl text-xs space-y-1 text-slate-700">
            <div><strong>Eligibility:</strong> Min. 65% in Class X Boards</div>
            <div><strong>Science Requirement:</strong> Strong biology score</div>
            <div><strong>Career Paths:</strong> MBBS, BDS, Biotechnology, Pharmacy</div>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-left">
          <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">
            📊
          </div>
          <h3 class="font-serif font-bold text-base text-[#002b49]">Commerce</h3>
          <p class="text-xs text-slate-600 mt-1 mb-3">Accountancy, Business Studies, Economics, English Core + Optional (Applied Maths / PE).</p>
          <div class="p-3 bg-slate-50 rounded-xl text-xs space-y-1 text-slate-700">
            <div><strong>Eligibility:</strong> Min. 60% in Class X Boards</div>
            <div><strong>Maths Option:</strong> Applied Maths available</div>
            <div><strong>Career Paths:</strong> CA, CS, Management, Investment Banking</div>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Eligibility & Age Criteria 2025-26 | The Oxford School Haridwar",
    description: "Official age criteria and eligibility norms for Nursery to Class XII at The Oxford School Haridwar. Class XI Science and Commerce stream cut-offs.",
    keywords: "Age criteria Oxford School Haridwar, school admission age Uttarakhand, class 11 stream cut off Haridwar, nursery admission age CBSE",
    canonicalUrl: "eligibility-criteria.html",
    activePage: "eligibility-criteria",
    content
  });
}

// ==========================================
// 8. FEE GUIDELINES (fee-guidelines.html)
// ==========================================
export function generateFeeGuidelinesPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Admissions 2025-26', url: 'admissions.html' },
    { name: 'Fee Guidelines', url: 'fee-guidelines.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">Financial Transparency</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          Fee Structure &amp; Payment Guidelines
        </h1>
        <p class="text-sm text-slate-600">
          The Oxford School follows a transparent, regulated, and non-commercialized fee structure approved by the School Management Committee.
        </p>
      </div>

      <!-- Highlights Box -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
          <i data-lucide="credit-card" class="w-6 h-6 text-amber-600 mx-auto mb-2"></i>
          <h4 class="font-bold text-sm text-[#002b49]">Quarterly Schedule</h4>
          <p class="text-xs text-slate-500 mt-1">Paid in 4 equal installments throughout the session.</p>
        </div>
        <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
          <i data-lucide="smartphone" class="w-6 h-6 text-emerald-600 mx-auto mb-2"></i>
          <h4 class="font-bold text-sm text-[#002b49]">100% Online Payment</h4>
          <p class="text-xs text-slate-500 mt-1">Instant fee receipts via Edunext ERP portal / UPI.</p>
        </div>
        <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
          <i data-lucide="shield-alert" class="w-6 h-6 text-blue-600 mx-auto mb-2"></i>
          <h4 class="font-bold text-sm text-[#002b49]">No Hidden Charges</h4>
          <p class="text-xs text-slate-500 mt-1">Zero hidden capitation fees or spontaneous demands.</p>
        </div>
        <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
          <i data-lucide="users" class="w-6 h-6 text-rose-600 mx-auto mb-2"></i>
          <h4 class="font-bold text-sm text-[#002b49]">Sibling Concessions</h4>
          <p class="text-xs text-slate-500 mt-1">Concessions available for real siblings as per policy.</p>
        </div>
      </div>

      <!-- Payment Deadlines Schedule -->
      <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
        <h3 class="text-xl font-serif font-bold text-[#002b49] mb-4">Quarterly Payment Due Dates (Session 2025-26)</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span class="text-[10px] uppercase font-bold text-amber-700 block">Quarter 1</span>
            <h4 class="font-bold text-sm text-[#002b49] mt-0.5">April – June</h4>
            <p class="text-slate-600 mt-1">Due Date: <strong>1st to 15th April 2025</strong></p>
            <p class="text-[11px] text-slate-500 mt-2">Includes Annual composite fee + Q1 Tuition.</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span class="text-[10px] uppercase font-bold text-amber-700 block">Quarter 2</span>
            <h4 class="font-bold text-sm text-[#002b49] mt-0.5">July – September</h4>
            <p class="text-slate-600 mt-1">Due Date: <strong>1st to 15th July 2025</strong></p>
            <p class="text-[11px] text-slate-500 mt-2">Includes Q2 Tuition + Transport (if opted).</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span class="text-[10px] uppercase font-bold text-amber-700 block">Quarter 3</span>
            <h4 class="font-bold text-sm text-[#002b49] mt-0.5">October – December</h4>
            <p class="text-slate-600 mt-1">Due Date: <strong>1st to 15th October 2025</strong></p>
            <p class="text-[11px] text-slate-500 mt-2">Includes Q3 Tuition + CBSE Examination dues.</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span class="text-[10px] uppercase font-bold text-amber-700 block">Quarter 4</span>
            <h4 class="font-bold text-sm text-[#002b49] mt-0.5">January – March</h4>
            <p class="text-slate-600 mt-1">Due Date: <strong>1st to 15th January 2026</strong></p>
            <p class="text-[11px] text-slate-500 mt-2">Final settlement before annual report release.</p>
          </div>

        </div>

        <div class="mt-8 pt-6 border-t border-slate-200 space-y-3 text-xs text-slate-600">
          <p><strong>Modes of Payment:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Online Portal:</strong> Parents can log into their Edunext student portal and pay using Debit Cards, Credit Cards, Net Banking, or UPI with instant receipt generation.</li>
            <li><strong>Bank Transfer (NEFT/RTGS):</strong> Direct bank deposit into "The Oxford School" authorized school account. (Please share UTR receipt with the accounts desk).</li>
            <li><strong>On-Campus:</strong> Point-of-Sale (POS) machine or Account Payee Demand Draft at the administrative accounts window. Cash payments above statutory limits are discouraged.</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Fee Guidelines & Payment Schedule 2025-26 | The Oxford School Haridwar",
    description: "Detailed fee guidelines, quarterly payment schedule, and online payment methods for The Oxford School Haridwar. Transparent and non-commercialized CBSE fee structure.",
    keywords: "Fee structure Oxford School Haridwar, school fees Roshnabad, quarterly fee schedule, online school fee payment Edunext Oxford School",
    canonicalUrl: "fee-guidelines.html",
    activePage: "fee-guidelines",
    content
  });
}

// ==========================================
// 9. ONLINE ENQUIRY FORM (online-enquiry.html)
// ==========================================
export function generateOnlineEnquiryPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Admissions 2025-26', url: 'admissions.html' },
    { name: 'Online Enquiry Form', url: 'online-enquiry.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">Admissions Open 2025-26</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          Online Admission Enquiry &amp; Registration
        </h1>
        <p class="text-sm text-slate-600">
          Fill in the details below. Our admission desk will connect with you via call/WhatsApp within 24 hours to schedule your campus visit.
        </p>
      </div>

      <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div class="bg-[#002b49] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">Official Admissions Desk</span>
            <h3 class="text-xl font-serif font-bold mt-1">Student &amp; Parent Information Form</h3>
            <p class="text-xs text-slate-300 mt-1">All fields marked with an asterisk (*) are mandatory.</p>
          </div>
          <div class="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs">
            <span class="text-amber-300 font-semibold">Admission Helpline:</span><br/>
            <strong class="text-white">+91 70600 89183</strong>
          </div>
        </div>

        <form class="p-6 sm:p-8 space-y-6 text-xs site-enquiry-form">
          
          <!-- Student Details Section -->
          <div>
            <h4 class="text-sm font-bold text-[#002b49] uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
              1. Student Information
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Student's Full Name *</label>
                <input type="text" required placeholder="Master / Miss" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Grade Applying For *</label>
                <select required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49] bg-white">
                  <option value="">Select Grade</option>
                  <option>Playgroup / Pre-Nursery</option>
                  <option>Nursery</option>
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>Class I</option>
                  <option>Class II - V (Primary)</option>
                  <option>Class VI - VIII (Middle)</option>
                  <option>Class IX - X (Secondary)</option>
                  <option>Class XI Science (PCM)</option>
                  <option>Class XI Science (PCB)</option>
                  <option>Class XI Commerce</option>
                  <option>Class XI Humanities</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Date of Birth *</label>
                <input type="date" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
            </div>
          </div>

          <!-- Parent Details Section -->
          <div>
            <h4 class="text-sm font-bold text-[#002b49] uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
              2. Parent / Guardian Contact Details
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Parent's Full Name *</label>
                <input type="text" required placeholder="Father / Mother Name" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Primary Mobile Number (WhatsApp) *</label>
                <input type="tel" name="phone" required pattern="[6-9][0-9]{9}" title="Please enter a valid 10-digit Indian mobile number" placeholder="10-digit mobile" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Email Address</label>
                <input type="email" placeholder="parent@example.com" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
            </div>
          </div>

          <!-- Address & Transit Section -->
          <div>
            <h4 class="text-sm font-bold text-[#002b49] uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
              3. Locality &amp; Transport Requirement
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Residential Address / Locality *</label>
                <input type="text" required placeholder="e.g. Roshnabad, BHEL Sector-4, Shivalik Nagar, Haridwar" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49]" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Require School Bus Transport? *</label>
                <select required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49] bg-white">
                  <option value="Yes">Yes, Require School Transport</option>
                  <option value="No">No, Self-Arranged Commute</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Query Notes -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Any Specific Academic Query or Special Consideration</label>
            <textarea rows="3" placeholder="e.g. Seeking transfer from another state, stream consultation, previous board details..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#002b49]"></textarea>
          </div>

          <div class="pt-4">
            <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-sm shadow-xl transition cursor-pointer">
              Submit Enquiry to Admission Office
            </button>
            <p class="text-[11px] text-center text-slate-500 mt-2">
              🔒 Your contact information is kept confidential and used strictly for academic correspondence.
            </p>
          </div>

        </form>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Online Admission Enquiry Form 2025-26 | The Oxford School Haridwar",
    description: "Submit online admission enquiry for Academic Session 2025-26 at The Oxford School Haridwar. Pre-Primary to Class XII (Science, Commerce, Humanities).",
    keywords: "Online admission form Oxford School Haridwar, Oxford School Roshnabad registration, school admission enquiry 2025-26 Haridwar",
    canonicalUrl: "online-enquiry.html",
    activePage: "online-enquiry",
    content
  });
}

// ==========================================
// 10. ROBOTICS & STEM LAB (robotics-lab.html)
// ==========================================
export function generateRoboticsLabPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Campus Facilities', url: 'facilities.html' },
    { name: 'STEM & Robotics Lab', url: 'robotics-lab.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-4">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="cpu" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>Future-Ready Innovation</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002b49] leading-tight">
            STEM, Robotics &amp; Artificial Intelligence Innovation Lab
          </h1>

          <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
            At The Oxford School, Haridwar, we believe that children should not merely be consumers of digital algorithms—they must be the fearless creators of tomorrow's technology.
          </p>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our state-of-the-art Robotics and Artificial Intelligence Lab introduces students to hands-on mechatronics from early middle school. Working with Arduino microcontrollers, Raspberry Pi, ultrasonic sensors, and block-based Scratch programming, scholars build working prototypes that solve real-world problems.
          </p>

          <div class="grid grid-cols-2 gap-3 pt-2">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-amber-700 font-extrabold text-base block">100+</span>
              <span class="text-xs text-slate-600">Hardware Sensor Kits</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-amber-700 font-extrabold text-base block">State Level</span>
              <span class="text-xs text-slate-600">STEM Champions 2024</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl relative">
            <img 
              src="images/robotics_real_1.jpg" 
              alt="The Oxford School Robotics Lab" 
              class="w-full h-[360px] sm:h-[420px] object-cover" 
            />
            <div class="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md text-white text-xs">
              <p class="font-bold text-amber-400">Autonomous Obstacle-Avoiding Rover Project</p>
              <p class="text-[11px] text-slate-300">Designed and programmed by Oxford middle school scholars in the STEM Lab.</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Key Lab Features -->
      <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
        <h3 class="text-xl font-serif font-bold text-[#002b49] mb-6">Core Focus Areas in our Robotics Curriculum</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <i data-lucide="code" class="w-6 h-6 text-amber-600 mb-2"></i>
            <h4 class="font-bold text-sm text-[#002b49]">Coding &amp; Logic</h4>
            <p class="text-xs text-slate-600 mt-1">Block-based visual coding for primary classes progressing to Python and C++ for senior innovators.</p>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <i data-lucide="zap" class="w-6 h-6 text-blue-600 mb-2"></i>
            <h4 class="font-bold text-sm text-[#002b49]">Sensor Interfacing</h4>
            <p class="text-xs text-slate-600 mt-1">Infrared, ultrasonic distance, temperature, and motion sensors integrated with breadboard circuitry.</p>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <i data-lucide="cpu" class="w-6 h-6 text-emerald-600 mb-2"></i>
            <h4 class="font-bold text-sm text-[#002b49]">Autonomous Bots</h4>
            <p class="text-xs text-slate-600 mt-1">Line-following robots, smart irrigation systems, and obstacle-avoidance vehicles.</p>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <i data-lucide="trophy" class="w-6 h-6 text-rose-600 mb-2"></i>
            <h4 class="font-bold text-sm text-[#002b49]">Olympiads &amp; Hackathons</h4>
            <p class="text-xs text-slate-600 mt-1">Mentorship for National Science Exhibitions, CBSE Regional Science Fairs, and robotics leagues.</p>
          </div>

        </div>
      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "STEM & Robotics Innovation Lab | The Oxford School Haridwar",
    description: "Explore the modern Robotics, Coding & AI Innovation Lab at The Oxford School Haridwar. Arduino, sensors, Python coding, and state-level STEM competitions.",
    keywords: "Robotics lab Oxford School Haridwar, STEM school Haridwar, school coding curriculum Uttarakhand, robotics competition school Haridwar",
    canonicalUrl: "robotics-lab.html",
    activePage: "robotics-lab",
    content
  });
}

// ==========================================
// 11. SCIENCE LABS (science-labs.html)
// ==========================================
export function generateScienceLabsPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Campus Facilities', url: 'facilities.html' },
    { name: 'Science Composite Labs', url: 'science-labs.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">Empirical Discovery</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          Composite Physics, Chemistry &amp; Biology Laboratories
        </h1>
        <p class="text-sm text-slate-600">
          Fully certified by CBSE New Delhi, adhering to National Building Code (NBC) safety and equipped with individual testing workstations.
        </p>
      </div>

      <!-- 3 Labs Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Physics Lab -->
        <div class="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
          <div>
            <div class="h-56 w-full overflow-hidden bg-slate-900">
              <img src="images/physicslab_1.jpg" alt="Physics Lab Oxford School" class="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-blue-700 block">Precision &amp; Mechanics</span>
              <h3 class="text-xl font-serif font-bold text-[#002b49] mt-1 mb-2">Physics Laboratory</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Equipped with optical benches, spectrometers, sonometers, galvanometers, and screw gauges. Students verify fundamental laws of electromagnetism, thermodynamics, and optics under experienced faculty.
              </p>
              <ul class="text-xs space-y-1.5 text-slate-600 border-t border-slate-100 pt-3">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>Optical bench darkroom setup</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>Digital multi-meters &amp; circuit boards</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>CBSE AISSE &amp; AISSCE approved</span></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Chemistry Lab -->
        <div class="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
          <div>
            <div class="h-56 w-full overflow-hidden bg-slate-900">
              <img src="images/chemlab_1.jpg" alt="Chemistry Lab Oxford School" class="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-700 block">Chemical Reactions &amp; Safety</span>
              <h3 class="text-xl font-serif font-bold text-[#002b49] mt-1 mb-2">Chemistry Laboratory</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Boasts chemical fume hoods, safety eyewash stations, acid-resistant granite counters, and high-precision electronic balances for salt analysis, volumetric titrations, and organic tests.
              </p>
              <ul class="text-xs space-y-1.5 text-slate-600 border-t border-slate-100 pt-3">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>Fume exhaust &amp; safety eyewash</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>Chemical titration stations</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>Strict lab coat &amp; safety goggles protocol</span></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Biology Lab -->
        <div class="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
          <div>
            <div class="h-56 w-full overflow-hidden bg-slate-900">
              <img src="images/biolab_1.jpg" alt="Biology Lab Oxford School" class="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-700 block">Living Systems &amp; Botany</span>
              <h3 class="text-xl font-serif font-bold text-[#002b49] mt-1 mb-2">Biology Laboratory</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Features high-magnification compound microscopes, human anatomical models, preserved specimen jars, botanical study slides, and dissection kits for senior secondary life science scholars.
              </p>
              <ul class="text-xs space-y-1.5 text-slate-600 border-t border-slate-100 pt-3">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>Compound &amp; binocular microscopes</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>Anatomical charts &amp; plant physiology charts</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i><span>NEET biology foundation mentorship</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Physics, Chemistry & Biology Science Labs | The Oxford School Haridwar",
    description: "Explore the fully-equipped, CBSE compliant Physics, Chemistry, and Biology laboratories at The Oxford School Haridwar. High precision equipment and top safety standards.",
    keywords: "Science labs Oxford School Haridwar, physics lab CBSE Haridwar, chemistry lab school Roshnabad, biology laboratory Oxford school",
    canonicalUrl: "science-labs.html",
    activePage: "science-labs",
    content
  });
}

// ==========================================
// 12. COMPUTER LAB (computer-lab.html)
// ==========================================
export function generateComputerLabPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Campus Facilities', url: 'facilities.html' },
    { name: 'Computer & IT Workstations', url: 'computer-lab.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-4">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="monitor" class="w-3.5 h-3.5 text-blue-600"></i>
            <span>Digital Literacy &amp; IT</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002b49] leading-tight">
            Advanced Computer Science &amp; IT Workstations
          </h1>

          <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
            In an era defined by artificial intelligence and digital transformation, computational fluency is a fundamental literacy alongside reading and arithmetic.
          </p>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The Oxford School houses dual modern IT laboratories equipped with networked PC workstations, high-speed dedicated fiber internet, firewall security, and genuine educational software suites.
          </p>

          <div class="grid grid-cols-2 gap-3 pt-2">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-amber-700 font-extrabold text-base block">1:1 Terminal Ratio</span>
              <span class="text-xs text-slate-600">Individual Student Terminal</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-amber-700 font-extrabold text-base block">High-Speed Fiber</span>
              <span class="text-xs text-slate-600">Cyber-Secured Network</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl relative">
            <img 
              src="images/computer_lab.jpg" 
              alt="The Oxford School Computer Lab" 
              class="w-full h-[360px] sm:h-[420px] object-cover" 
            />
          </div>
        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Computer Science & IT Workstations | The Oxford School Haridwar",
    description: "Explore the modern computer labs at The Oxford School Haridwar. 1:1 PC student ratio, high-speed fiber internet, and comprehensive coding curriculum.",
    keywords: "Computer lab Oxford School Haridwar, IT lab CBSE school, coding classes school Haridwar, digital education Roshnabad",
    canonicalUrl: "computer-lab.html",
    activePage: "computer-lab",
    content
  });
}

// ==========================================
// 13. SPORTS COMPLEX (sports-complex.html)
// ==========================================
export function generateSportsComplexPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Campus Facilities', url: 'facilities.html' },
    { name: 'Sports Arena & Athletics', url: 'sports-complex.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">Athletic Excellence</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          Sports Complex, Athletic Track &amp; Martial Arts Dojo
        </h1>
        <p class="text-sm text-slate-600">
          Cultivating stamina, character, mental focus, and unyielding team spirit under NIS-qualified athletic coaches.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <img src="images/sports_ground_1.jpg" alt="Athletic Track & Cricket Turf" class="w-full h-52 object-cover" />
          <div class="p-6">
            <h3 class="font-serif font-bold text-lg text-[#002b49] mb-2">Athletics &amp; Cricket Ground</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Full-length running track, cricket practice pitch with nets, football turf, and dedicated long-jump pit for inter-house championships.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <img src="images/karate.webp" alt="Martial Arts Karate Training" class="w-full h-52 object-cover" />
          <div class="p-6">
            <h3 class="font-serif font-bold text-lg text-[#002b49] mb-2">Karate &amp; Self-Defense</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Professional martial arts instruction under certified black-belt trainers. Instills physical discipline, confidence, and agility.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <img src="images/sports_activity_1.jpg" alt="Basketball & Indoor Arena" class="w-full h-52 object-cover" />
          <div class="p-6">
            <h3 class="font-serif font-bold text-lg text-[#002b49] mb-2">Basketball, Yoga &amp; Indoor Games</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Standard basketball and volleyball court, table tennis stations, chess club, and morning yoga sessions for mental tranquility.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Sports Complex & Athletics Arena | The Oxford School Haridwar",
    description: "Explore the expansive sports facilities at The Oxford School Haridwar. Cricket pitch, athletic track, basketball court, Karate, and NIS-certified coaching.",
    keywords: "Sports complex Oxford School Haridwar, athletics ground CBSE Haridwar, karate training school Roshnabad, best sports school Uttarakhand",
    canonicalUrl: "sports-complex.html",
    activePage: "sports-complex",
    content
  });
}

// ==========================================
// 14. TRANSPORT (transport.html)
// ==========================================
export function generateTransportPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Campus Facilities', url: 'facilities.html' },
    { name: 'Safe GPS Transport Network', url: 'transport.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-4">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="bus" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>Fleet Safety &amp; Tracking</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002b49] leading-tight">
            GPS Monitored &amp; CCTV Secured School Bus Fleet
          </h1>

          <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
            The safety and comfort of our scholars during their daily commute is non-negotiable. The Oxford School operates a well-maintained fleet of 18+ yellow school buses spanning across Haridwar city and adjacent industrial belts.
          </p>

          <div class="grid grid-cols-2 gap-3 pt-2">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-amber-700 font-extrabold text-base block">18+ Buses</span>
              <span class="text-xs text-slate-600">GPS &amp; Speed Governed</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-amber-700 font-extrabold text-base block">Female Attendants</span>
              <span class="text-xs text-slate-600">On Every Route</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl relative">
            <img 
              src="images/transport_real.jpg" 
              alt="The Oxford School Bus Fleet" 
              class="w-full h-[360px] sm:h-[420px] object-cover" 
            />
          </div>
        </div>

      </div>

      <!-- Bus Routes Covered -->
      <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
        <h3 class="text-xl font-serif font-bold text-[#002b49] mb-4">Major Transport Routes Covered</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="text-sm font-bold text-[#002b49] block mb-1">Route 1: Roshnabad &amp; SIDCUL</strong>
            <p class="text-slate-600">Navodaya Nagar, Shiv Ratan City, Integrated Industrial Estate (IIE), Shivalik Nagar.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="text-sm font-bold text-[#002b49] block mb-1">Route 2: BHEL Township &amp; Ranipur</strong>
            <p class="text-slate-600">Sector 1, 2, 4, 5, Subhash Nagar, Gas Godown Road, Tibri, Ranipur Mod.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="text-sm font-bold text-[#002b49] block mb-1">Route 3: Jwalapur &amp; Haridwar City</strong>
            <p class="text-slate-600">Arya Nagar, Railway Station, Devpura, Chandracharya Chowk, Khanna Nagar.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="text-sm font-bold text-[#002b49] block mb-1">Route 4: Bahadrabad &amp; Salempur</strong>
            <p class="text-slate-600">Bahadrabad Main Market, Salempur Mehdood, Dhanori bypass road.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="text-sm font-bold text-[#002b49] block mb-1">Route 5: Kankhal &amp; Jagjeetpur</strong>
            <p class="text-slate-600">Kankhal Chowk, Desh Rakshak Aushadhalaya road, Jagjeetpur, Football ground.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="text-sm font-bold text-[#002b49] block mb-1">Route 6: Roorkee Link Corridor</strong>
            <p class="text-slate-600">Roorkee highway bypass, Peeran Kaliyar corridor, connecting villages.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "Safe GPS Transport & Bus Routes | The Oxford School Haridwar",
    description: "Explore the safe GPS-monitored bus transport network at The Oxford School Haridwar. Serving Roshnabad, BHEL, Haridwar, Shivalik Nagar, and Roorkee.",
    keywords: "School bus transport Oxford School Haridwar, GPS school buses Roshnabad, safe school transit Haridwar, BHEL school bus routes",
    canonicalUrl: "transport.html",
    activePage: "transport",
    content
  });
}

// ==========================================
// 15. RESULTS & TOPPERS (results.html)
// ==========================================
export function generateResultsPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Academics & CBSE', url: 'cbse.html' },
    { name: '100% Board Exam Results', url: 'results.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-700 block">Excellence in Academics</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          100% CBSE Board Examination Results
        </h1>
        <p class="text-sm text-slate-600">
          Consistent excellence in AISSE (Class X) and AISSCE (Class XII) board exams year after year.
        </p>
      </div>

      <!-- Class X Results Table -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        <div class="bg-[#002b49] text-white p-6 flex items-center justify-between">
          <div>
            <h2 class="text-lg font-serif font-bold">CBSE Class X (AISSE) Board Result Track Record</h2>
            <p class="text-xs text-slate-300 mt-0.5">Four-Year Official Performance Overview</p>
          </div>
          <span class="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs">100% Pass</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px]">
              <tr>
                <th class="p-4">Academic Session</th>
                <th class="p-4">Students Appeared</th>
                <th class="p-4">Students Passed</th>
                <th class="p-4">Pass Percentage</th>
                <th class="p-4">Scored &gt; 90%</th>
                <th class="p-4">School Topper</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              ${BOARD_RESULTS.classX.map(r => `
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-bold text-[#002b49]">${r.year}</td>
                  <td class="p-4">${r.appeared}</td>
                  <td class="p-4 font-semibold text-emerald-700">${r.passed}</td>
                  <td class="p-4 font-bold text-emerald-800">${r.passPercent}</td>
                  <td class="p-4">${r.above90} Scholars</td>
                  <td class="p-4 font-bold text-[#002b49]">${r.topper}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Class XII Results Table -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        <div class="bg-[#002b49] text-white p-6 flex items-center justify-between">
          <div>
            <h2 class="text-lg font-serif font-bold">CBSE Class XII (AISSCE) Senior Secondary Results</h2>
            <p class="text-xs text-slate-300 mt-0.5">Science, Commerce &amp; Humanities Streams</p>
          </div>
          <span class="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs">100% Pass</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px]">
              <tr>
                <th class="p-4">Academic Session</th>
                <th class="p-4">Students Appeared</th>
                <th class="p-4">Students Passed</th>
                <th class="p-4">Pass Percentage</th>
                <th class="p-4">Scored &gt; 90%</th>
                <th class="p-4">Stream Topper</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              ${BOARD_RESULTS.classXII.map(r => `
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-bold text-[#002b49]">${r.year}</td>
                  <td class="p-4">${r.appeared}</td>
                  <td class="p-4 font-semibold text-emerald-700">${r.passed}</td>
                  <td class="p-4 font-bold text-emerald-800">${r.passPercent}</td>
                  <td class="p-4">${r.above90} Scholars</td>
                  <td class="p-4 font-bold text-[#002b49]">${r.topper}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "100% CBSE Board Exam Results & Toppers | The Oxford School Haridwar",
    description: "Official 100% CBSE Board Exam results for Class X (AISSE) and Class XII (AISSCE) at The Oxford School Haridwar. Topper roll and pass percentage track record.",
    keywords: "CBSE board results Oxford School Haridwar, Class 10 toppers Haridwar, Class 12 board results Oxford School, 100% pass record CBSE school",
    canonicalUrl: "results.html",
    activePage: "results",
    content
  });
}

// ==========================================
// 16. CURRICULUM & STREAMS (curriculum.html)
// ==========================================
export function generateCurriculumPage() {
  const content = `
  ${renderBreadcrumb([
    { name: 'Academics & CBSE', url: 'cbse.html' },
    { name: 'Curriculum & Streams', url: 'curriculum.html' }
  ])}

  <section class="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white text-left">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-700 block">Academic Roadmap</span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#002b49]">
          CBSE Curriculum Framework &amp; Senior Secondary Streams
        </h1>
        <p class="text-sm text-slate-600">
          Structured pedagogical progression from early childhood foundational stages through Senior Secondary CBSE board qualifications.
        </p>
      </div>

      <!-- 4 Stages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-left">
          <span class="text-xs font-extrabold uppercase tracking-wider text-amber-700 block">Stage 1</span>
          <h3 class="font-serif font-bold text-lg text-[#002b49] mt-1 mb-2">Foundational Stage (Playgroup to Class II)</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Activity-based playway methodology focused on phonetics, communicative English, foundational numeracy, fine motor coordination, and social interaction without textbook anxiety.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-left">
          <span class="text-xs font-extrabold uppercase tracking-wider text-blue-700 block">Stage 2</span>
          <h3 class="font-serif font-bold text-lg text-[#002b49] mt-1 mb-2">Preparatory &amp; Middle Stage (Class III to VIII)</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Transition to structured subjects: Mathematics, General Science, Social Studies, English, Hindi, and Sanskrit. Integration of Abacus mental math and hands-on robotics workshops.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-left">
          <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">Stage 3</span>
          <h3 class="font-serif font-bold text-lg text-[#002b49] mt-1 mb-2">Secondary Stage (Class IX &amp; X)</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Strict adherence to CBSE AISSE syllabus with laboratory practicals, sample paper drills, remedial sessions, and preparation for board examinations.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-left">
          <span class="text-xs font-extrabold uppercase tracking-wider text-purple-700 block">Stage 4</span>
          <h3 class="font-serif font-bold text-lg text-[#002b49] mt-1 mb-2">Senior Secondary Streams (Class XI &amp; XII)</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Specialized stream choices: <strong>Science (PCM &amp; PCB)</strong>, <strong>Commerce</strong>, and <strong>Humanities</strong> with competitive exam guidance for JEE, NEET, and CUET.
          </p>
        </div>

      </div>

    </div>
  </section>
  `;

  return renderPageShell({
    title: "CBSE Academic Curriculum & Streams | The Oxford School Haridwar",
    description: "Explore the complete CBSE academic curriculum and Senior Secondary streams (Science PCM/PCB, Commerce, Humanities) at The Oxford School Haridwar.",
    keywords: "CBSE curriculum Oxford School Haridwar, school streams class 11 Haridwar, science commerce streams Roshnabad, secondary school curriculum Uttarakhand",
    canonicalUrl: "curriculum.html",
    activePage: "curriculum",
    content
  });
}
