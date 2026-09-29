// Authentic School Data for The Oxford School, Haridwar

export const SCHOOL_INFO = {
  name: "The Oxford School, Haridwar",
  shortName: "The Oxford School",
  tagline: "CBSE Affiliated Senior Secondary School (Playgroup to Class XII)",
  affiliationNo: "3530408",
  schoolCode: "81632",
  affiliationStatus: "Affiliated to Central Board of Secondary Education (CBSE), New Delhi",
  curriculum: "CBSE (English Medium)",
  streams: "Science (PCM / PCB), Commerce, Humanities",
  established: "2014",
  type: "Co-Educational Day School",
  address: "Shiv Ratan City, Navodaya Nagar, Roshnabad, Haridwar - 249402, Uttarakhand, India",
  phoneNumbers: ["+91-9068885862", "+91-7060089183"],
  whatsappNumber: "917060089183",
  primaryPhone: "+91-7060089183",
  email: "theoxfordschoolharidwar@gmail.com",
  secondaryEmail: "info@theoxfordschoolharidwar.com",
  officeHours: "Monday to Saturday: 8:00 AM – 2:30 PM",
  studentLoginUrl: "https://theoxfordschool.edunexttechnologies.com/Index",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13838.288229562706!2d78.0864389!3d29.9576402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390947702fa10291%3A0x6a218d6e3cfb4009!2sRoshnabad%2C%20Haridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  socialLinks: {
    facebook: "https://www.facebook.com/theoxfordschoolharidwar",
    instagram: "https://www.instagram.com/theoxfordschoolharidwar",
    youtube: "https://www.youtube.com/@theoxfordschoolharidwar"
  }
};

export const KEY_METRICS = [
  { label: "Enrolled Students", value: "2,500+", suffix: "Scholars", description: "From Nursery to Class XII" },
  { label: "Faculty & Mentors", value: "85+", suffix: "Qualified Educators", description: "CBSE trained & certified" },
  { label: "Digital Classrooms", value: "48+", suffix: "Smart Rooms", description: "Equipped with interactive panels" },
  { label: "CBSE Pass Rate", value: "100%", suffix: "Board Record", description: "Consistently in Class X & XII" },
  { label: "Transport Routes", value: "18+", suffix: "Buses with GPS", description: "Covering Haridwar, BHEL & Roorkee" }
];

// Helper to provide realistic daily birthdays with authentic student photos
export const getDailyBirthdays = () => {
  const today = new Date();
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return [
    { 
      id: 1, 
      name: "Aarav Sharma", 
      class: "Class X-A", 
      date: formattedDate, 
      house: "Ganga House",
      photo: "/images/students/student_aarav.jpg"
    },
    { 
      id: 2, 
      name: "Ananya Chauhan", 
      class: "Class IV-B", 
      date: formattedDate, 
      house: "Yamuna House",
      photo: "/images/students/student_ananya.jpg"
    },
    { 
      id: 3, 
      name: "Reyansh Rawat", 
      class: "Class II-C", 
      date: formattedDate, 
      house: "Kaveri House",
      photo: "/images/students/student_reyansh.jpg"
    },
    { 
      id: 4, 
      name: "Prisha Semwal", 
      class: "Class XII Science", 
      date: formattedDate, 
      house: "Saraswati House",
      photo: "/images/students/student_prisha.jpg"
    }
  ];
};

export const NOTICES_AND_CIRCULARS = [
  {
    id: "not-1",
    title: "CBSE Board Examination 2025 Schedule & Hall Ticket Distribution",
    date: "12 Feb 2025",
    category: "Academics",
    badge: "Important",
    fileSize: "420 KB",
    content: "Admit cards for Classes X and XII CBSE Board Examinations are available for collection at the administrative office between 9:00 AM and 1:00 PM."
  },
  {
    id: "not-2",
    title: "Admissions Open for Session 2026-27 (Playgroup to Class XI)",
    date: "05 Feb 2025",
    category: "Admissions",
    badge: "New",
    fileSize: "680 KB",
    content: "Registration forms for admission in Pre-Primary, Primary, Middle, and Senior Secondary sections for Academic Year 2026-27 are now open online and at campus."
  },
  {
    id: "not-3",
    title: "Annual Sports Meet & Inter-House Athletic Championship 2025",
    date: "28 Jan 2025",
    category: "Sports",
    badge: "Events",
    fileSize: "510 KB",
    content: "The annual sports day championship heats for track and field events will commence from next week. House captains must submit participant lists."
  },
  {
    id: "not-4",
    title: "Parent-Teacher Meeting (PTM) for Term-II Performance Review",
    date: "18 Jan 2025",
    category: "Circular",
    badge: "General",
    fileSize: "310 KB",
    content: "PTM will be conducted this Saturday from 8:30 AM to 12:30 PM. Parents are requested to adhere to the assigned roll-number time slots."
  },
  {
    id: "not-5",
    title: "Science, Robotics & Vedic Maths Exhibition 'Pratibha 2025'",
    date: "10 Jan 2025",
    category: "Exhibition",
    badge: "Notice",
    fileSize: "890 KB",
    content: "Students from Classes VI to XII are presenting working robotics models, AI demonstrations, and mathematics puzzles in the auditorium."
  }
];

export const FACILITIES_DATA = [
  {
    id: "robotics-lab",
    title: "Robotics, Coding & AI Innovation Lab",
    shortDesc: "Equipped with microcontrollers, Arduino, Raspberry Pi, sensor kits, and coding workstations.",
    fullDesc: "Our dedicated Robotics & AI laboratory fosters hands-on STEM education from early middle school. Students design autonomous rovers, learn Python and block-based programming, and compete in national robotics challenges under certified mentors.",
    image: "/images/robotics_real_1.jpg",
    features: ["Arduino & IoT development kits", "Block coding & Python workstations", "Hands-on sensor experiments", "National STEM competitions training"]
  },
  {
    id: "science-labs",
    title: "Advanced Physics, Chemistry & Biology Labs",
    shortDesc: "Spacious, safety-compliant laboratories designed as per CBSE Senior Secondary norms.",
    fullDesc: "State-of-the-art laboratory infrastructure allows senior students to perform experiments individually with high precision apparatus, optical benches, compound microscopes, and chemical fume chambers under strict safety supervision.",
    image: "/images/chemlab_1.jpg",
    features: ["Separate Physics, Chemistry & Bio labs", "CBSE board practicals compliant", "Safety fire guards & eyewash stations", "Individual test stations for seniors"]
  },
  {
    id: "library",
    title: "Central Library & Resource Centre",
    shortDesc: "Over 12,000 reference volumes, CBSE question banks, periodicals, and quiet reading alcoves.",
    fullDesc: "A peaceful sanctuary of learning featuring thousands of titles ranging from classical literature and science encyclopedias to competitive exam prep materials (JEE, NEET, CUET), along with digital e-library access.",
    image: "/images/library_real.jpg",
    features: ["12,000+ books and reference works", "CBSE Exemplar and NCERT collections", "Daily national newspapers & periodicals", "Quiet study zones and e-catalog"]
  },
  {
    id: "computer-lab",
    title: "Computer Science & IT Workstations",
    shortDesc: "High-speed internet workstations with modern software suites and cyber-safety protocols.",
    fullDesc: "Modern computer labs equipped with networked PC terminals, high-speed fiber internet, and development tools to teach coding, multimedia design, and digital literacy from early classes.",
    image: "/images/computer_lab.jpg",
    features: ["Modern high-speed networked terminals", "Cyber safety & digital literacy curriculum", "Python, HTML and office software suites", "Dedicated individual terminal access"]
  },
  {
    id: "sports-arena",
    title: "Sports Complex & Athletic Grounds",
    shortDesc: "Multi-sport facilities for cricket, football, basketball, badminton, yoga, and martial arts.",
    fullDesc: "Physical fitness is central to our curriculum. We boast a full-length running track, standard basketball court, cricket practice nets, and indoor courts for table tennis, yoga, and Taekwondo under NIS-qualified coaches.",
    image: "/images/sports_ground_1.jpg",
    features: ["Standard basketball & volleyball courts", "Cricket practice turf & nets", "Martial arts & Yoga arena", "Annual Inter-House championship"]
  },
  {
    id: "karate-martial-arts",
    title: "Martial Arts & Self-Defense Training",
    shortDesc: "Professional Karate and self-defense coaching fostering physical agility, confidence, and discipline.",
    fullDesc: "Discipline, mental focus, and personal safety are instilled through structured Karate and self-defense training under certified black-belt instructors.",
    image: "/images/karate.webp",
    features: ["Certified black-belt instructors", "Self-defense & physical conditioning", "Belt progression & tournament participation", "Focus on mental discipline & agility"]
  },
  {
    id: "abacus-maths",
    title: "Abacus & Vedic Mathematics Centre",
    shortDesc: "Fostering lightning-fast mental arithmetic, photographic memory, and analytical reasoning.",
    fullDesc: "Introduced at primary levels, our Abacus and Vedic Maths programs eliminate mathematics anxiety, empowering children to perform multi-digit calculations mentally with speed and unwavering accuracy.",
    image: "/images/abacus_real_1.jpg",
    features: ["Certified Abacus instructors", "Vedic Math shortcuts & formulas", "Speed calculations & memory drills", "State & regional level math olympiads"]
  },
  {
    id: "school-transport",
    title: "Safe GPS & CCTV Transport Fleet",
    shortDesc: "Fleet of school buses covering Haridwar city, Roshnabad, BHEL, Shivalik Nagar, and Roorkee.",
    fullDesc: "Student transit safety is paramount. All school buses are fitted with GPS tracking, speed governors, interior CCTV cameras, first-aid kits, and accompanied by trained female attendants on all routes.",
    image: "/images/transport_real.jpg",
    features: ["Live GPS tracking for parents", "Speed governors & CCTV inside buses", "Trained female bus attendants", "Comprehensive route network across Haridwar"]
  }
];

export const LEADERSHIP_MESSAGES = [
  {
    role: "Founder Chairman's Desk",
    name: "Mr. Arvind Chauhan",
    qualification: "Founder Chairman, The Oxford School",
    quote: "Ours is a vibrant community rooted in tradition that teaches students to grow beyond borders and boundaries.",
    message: "I am immensely pleased to welcome you all to The Oxford School—a vibrant institution that nurtures saplings in the form of our students. Ours is a happy community rooted in tradition but aims to teach our students to grow beyond borders and boundaries. I am proud to say that our school plays an important role in generating value education that goes beyond academic benefits.",
    image: "/images/chairman.jpg"
  },
  {
    role: "Managing Director's Desk",
    name: "Mr. Shivank Chauhan",
    qualification: "Managing Director, The Oxford School",
    quote: "To get together is the beginning, to stay together is progress, and to work together is success.",
    message: "The Oxford School aims to offer quality teaching-learning enabling students to develop genuine interest in academics and excel therein. I wish the school to inculcate an atmosphere where students are prepared to face real-world challenges through essential life skills and moral fortitude.",
    image: "/images/managing_director.jpg"
  },
  {
    role: "Director's Desk",
    name: "Mr. B.S. Rautela",
    qualification: "Director, The Oxford School",
    quote: "Human resource is the most important resource; our focus is learning to know, to do, to be, and to live together.",
    message: "It is an honor and privilege to serve as the Director of The Oxford School, Haridwar. I am committed to instilling all four pillars of learning: Learning to know, Learning to do, Learning to be, and Learning to live harmoniously together in a fast-evolving global society.",
    image: "/images/director.jpg"
  },
  {
    role: "Manager's Desk",
    name: "Mrs. Rekha Chauhan",
    qualification: "Manager, The Oxford School",
    quote: "Education is not merely the accumulation of facts; it is the discovery of the hidden potential within every child.",
    message: "Welcome to The Oxford School. In today's dynamic world, the role of a school is not only to pursue academic excellence but also to motivate and empower its students to be lifelong learners, critical thinkers, and productive members of society.",
    image: "/images/manager.jpg"
  },
  {
    role: "Principal's Desk",
    name: "Ms. Priya Chauhan",
    qualification: "Principal, The Oxford School",
    quote: "The main objective of education is to meet the challenges of life with harmony between mind and purposeful action.",
    message: "We keenly support the pivotal role that an educational institution plays in the holistic development of children. Children acquire skills and knowledge effortlessly when they find their surroundings stimulating, empathetic, and purposeful.",
    image: "/images/principal.jpg"
  },
  {
    role: "Executive Council Member",
    name: "Mr. B.S. Chauhan",
    qualification: "Executive Member, School Management",
    quote: "Dedication, integrity, and discipline build the bedrock of exceptional educational institutions.",
    message: "Guiding the institution towards infrastructural and administrative benchmarks ensures our students receive a safe, nurturing, and progressive educational journey every single day.",
    image: "/images/member.jpg"
  }
];

export const BOARD_RESULTS = {
  classX: [
    { year: "2024-25", appeared: 114, passed: 114, passPercent: "100%", above90: 38, highest: "98.4%", topper: "Aryan Bhatt (98.4%)" },
    { year: "2023-24", appeared: 108, passed: 108, passPercent: "100%", above90: 35, highest: "98.2%", topper: "Sneha Rawat (98.2%)" },
    { year: "2022-23", appeared: 96, passed: 96, passPercent: "100%", above90: 31, highest: "97.8%", topper: "Aditya Verma (97.8%)" },
    { year: "2021-22", appeared: 88, passed: 88, passPercent: "100%", above90: 29, highest: "97.6%", topper: "Kavya Joshi (97.6%)" }
  ],
  classXII: [
    { year: "2024-25", appeared: 82, passed: 82, passPercent: "100%", above90: 27, highest: "97.8%", topper: "Tanya Sharma (Science - 97.8%)" },
    { year: "2023-24", appeared: 76, passed: 76, passPercent: "100%", above90: 24, highest: "97.2%", topper: "Rohan Semwal (Science - 97.2%)" },
    { year: "2022-23", appeared: 68, passed: 68, passPercent: "100%", above90: 22, highest: "96.8%", topper: "Pooja Negi (Commerce - 96.8%)" },
    { year: "2021-22", appeared: 62, passed: 62, passPercent: "100%", above90: 19, highest: "96.4%", topper: "Akash Singhal (Science - 96.4%)" }
  ]
};

export const CBSE_DISCLOSURE_DOCS = [
  {
    slNo: 1,
    title: "Affiliation / Upgradation Letter & Recent Extension",
    issuingAuthority: "Central Board of Secondary Education (CBSE), New Delhi",
    refNumber: "CBSE/AFF/3530408/2024",
    validTill: "Valid till 31/03/2028",
    status: "Verified",
    downloadUrl: "#"
  },
  {
    slNo: 2,
    title: "Societies / Trust / Company Registration & Renewal Certificate",
    issuingAuthority: "Registrar of Societies, Govt. of Uttarakhand",
    refNumber: "REG/HWR/SOC/2014-492",
    validTill: "Permanent / Renewed",
    status: "Verified",
    downloadUrl: "#"
  },
  {
    slNo: 3,
    title: "No Objection Certificate (NOC) Issued by State Government",
    issuingAuthority: "Department of School Education, Govt. of Uttarakhand",
    refNumber: "UK-EDU/NOC/3530/2015",
    validTill: "Permanent",
    status: "Verified",
    downloadUrl: "#"
  },
  {
    slNo: 4,
    title: "Recognition Certificate under Right to Education (RTE) Act, 2009",
    issuingAuthority: "Chief Education Officer (CEO), Haridwar",
    refNumber: "CEO/HWR/RTE/2015-18",
    validTill: "Ongoing",
    status: "Verified",
    downloadUrl: "#"
  },
  {
    slNo: 5,
    title: "Building Safety Certificate as per National Building Code (NBC)",
    issuingAuthority: "Executive Engineer, PWD Construction Division, Haridwar",
    refNumber: "PWD/EE/SAFE/HWR/2024",
    validTill: "Valid till 2029",
    status: "Verified",
    downloadUrl: "#"
  },
  {
    slNo: 6,
    title: "Fire Safety Certificate issued by Competent Authority",
    issuingAuthority: "Chief Fire Officer, Fire Department, Haridwar",
    refNumber: "CFO/FS/HWR/2024-25",
    validTill: "Valid till 2027",
    status: "Verified",
    downloadUrl: "#"
  },
  {
    slNo: 7,
    title: "District Education Officer (DEO) Certificate for CBSE Affiliation",
    issuingAuthority: "District Education Office, Haridwar",
    refNumber: "DEO/CBSE-AFF/HWR/049",
    validTill: "Valid",
    status: "Verified",
    downloadUrl: "#"
  },
  {
    slNo: 8,
    title: "Safe Drinking Water, Health & Sanitary Condition Certificate",
    issuingAuthority: "Chief Medical Officer (CMO) & Jal Sansthan, Haridwar",
    refNumber: "CMO/SAN/HWR/2024-118",
    validTill: "Valid till 2026",
    status: "Verified",
    downloadUrl: "#"
  },
  {
    slNo: 9,
    title: "School Fee Structure (Session 2025-26)",
    issuingAuthority: "School Management Committee, The Oxford School",
    refNumber: "TOS/FEE/2025-26",
    validTill: "Academic Year 2025-26",
    status: "Public",
    downloadUrl: "#"
  },
  {
    slNo: 10,
    title: "Annual Academic Calendar & Holiday List 2025-26",
    issuingAuthority: "Academic Directorate, The Oxford School",
    refNumber: "TOS/ACAD/CAL-2025",
    validTill: "March 2026",
    status: "Public",
    downloadUrl: "#"
  },
  {
    slNo: 11,
    title: "List of School Management Committee (SMC) Members",
    issuingAuthority: "The Oxford Educational Society",
    refNumber: "TOS/SMC/2024-26",
    validTill: "2026",
    status: "Public",
    downloadUrl: "#"
  },
  {
    slNo: 12,
    title: "Parents Teachers Association (PTA) Members List",
    issuingAuthority: "PTA Executive Council, The Oxford School",
    refNumber: "TOS/PTA/2024-25",
    validTill: "2025",
    status: "Public",
    downloadUrl: "#"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Annual Sports Meet & Athletic Championship",
    category: "Sports",
    date: "Annual Sports 2025",
    image: "/images/sports_ground_1.jpg",
    description: "Athletes competing in track events and inter-house competitions on the main school ground."
  },
  {
    id: "gal-2",
    title: "Inter-House Sprint & Relay Races",
    category: "Sports",
    date: "Sports Day",
    image: "/images/sports_ground_2.jpg",
    description: "High-spirited scholars representing Ganga, Yamuna, Kaveri, and Saraswati houses in track events."
  },
  {
    id: "gal-3",
    title: "March Past & Flag Ceremony",
    category: "Sports",
    date: "Sports Day",
    image: "/images/sports_ground_3.jpg",
    description: "Disciplined student contingents participating in the ceremonial annual march past."
  },
  {
    id: "gal-4",
    title: "Outdoor Games & Team Sports",
    category: "Sports",
    date: "Campus Sports",
    image: "/images/sports_activity_1.jpg",
    description: "Outdoor cricket, athletics, and physical training sessions under qualified sports mentors."
  },
  {
    id: "gal-5",
    title: "Martial Arts & Karate Self-Defense Training",
    category: "Sports",
    date: "Weekly Practice",
    image: "/images/karate.webp",
    description: "Students mastering discipline, focus, and self-defense techniques in Karate."
  },
  {
    id: "gal-6",
    title: "Robotics & STEM Hands-on Workshop",
    category: "Science & Innovation",
    date: "Innovation Lab",
    image: "/images/robotics_real_1.jpg",
    description: "Young innovators building working robots, microcontrollers, and sensor-based systems."
  },
  {
    id: "gal-7",
    title: "Students Assembling Electronics & Sensors",
    category: "Science & Innovation",
    date: "Robotics Lab",
    image: "/images/robotics_real_2.jpg",
    description: "Practical circuit assembly, breadboard testing, and microcontroller programming."
  },
  {
    id: "gal-8",
    title: "Robotics Project Prototyping",
    category: "Science & Innovation",
    date: "STEM Workshop",
    image: "/images/robotics_real_3.jpg",
    description: "Hands-on collaborative problem solving and autonomous bot design."
  },
  {
    id: "gal-9",
    title: "CBSE Chemistry Laboratory Practicals",
    category: "Science & Innovation",
    date: "Senior Lab",
    image: "/images/chemlab_1.jpg",
    description: "Senior secondary students conducting chemical titrations and experiments with complete safety."
  },
  {
    id: "gal-10",
    title: "Advanced Chemistry Lab Workstation",
    category: "Science & Innovation",
    date: "Chemistry Lab",
    image: "/images/chemlab_2.jpg",
    description: "Well-equipped chemical reagent stations and glassware compliant with CBSE syllabus."
  },
  {
    id: "gal-11",
    title: "Biology Lab Microscope & Specimen Study",
    category: "Science & Innovation",
    date: "Biology Lab",
    image: "/images/biolab_1.jpg",
    description: "Microscopic analysis of plant cells, slide preparation, and biological specimen observation."
  },
  {
    id: "gal-12",
    title: "Physics Lab Optics & Electrical Practicals",
    category: "Science & Innovation",
    date: "Physics Lab",
    image: "/images/physicslab_1.jpg",
    description: "Experimental verification of optical lenses, prisms, and electrical circuit laws."
  },
  {
    id: "gal-13",
    title: "Central Reference Library & Reading Room",
    category: "Academics",
    date: "Campus Library",
    image: "/images/library_real.jpg",
    description: "Vast collection of curriculum books, encyclopedias, competitive exam materials, and peaceful study zones."
  },
  {
    id: "gal-14",
    title: "Computer Science & IT Workstations",
    category: "Academics",
    date: "Computer Lab",
    image: "/images/computer_lab.jpg",
    description: "Students learning coding, programming languages, and digital skills on individual PC terminals."
  },
  {
    id: "gal-15",
    title: "Abacus & Vedic Mental Math Training",
    category: "Academics",
    date: "Maths Activity",
    image: "/images/abacus_real_1.jpg",
    description: "Rapid arithmetic drills and visualization techniques empowering mental calculation speed."
  },
  {
    id: "gal-16",
    title: "Interactive Classroom Academic Session",
    category: "Academics",
    date: "Academic Block",
    image: "/images/academics_real.jpg",
    description: "Engaging classroom pedagogical delivery fostering curiosity and critical inquiry."
  },
  {
    id: "gal-17",
    title: "Annual Day Cultural Fest Celebrations",
    category: "Cultural Events",
    date: "Annual Function",
    image: "/images/event_stage_2.jpg",
    description: "Grand annual day celebration showcasing theatrical dramas, musical fests, and student achievements."
  },
  {
    id: "gal-18",
    title: "Classical & Folk Dance Performances",
    category: "Cultural Events",
    date: "Cultural Fest",
    image: "/images/event_dance_1.jpg",
    description: "Vibrant traditional dance performances celebrating India's rich artistic diversity."
  },
  {
    id: "gal-19",
    title: "Stage Performances & Award Ceremonies",
    category: "Cultural Events",
    date: "School Auditorium",
    image: "/images/event_stage_3.jpg",
    description: "Felicitation of academic toppers, sports champions, and cultural performers on the main stage."
  },
  {
    id: "gal-20",
    title: "National Day & Special Assemblies",
    category: "Cultural Events",
    date: "Campus Stage",
    image: "/images/event_stage_1.jpg",
    description: "Commemorating national festivals with patriotic songs, speeches, and flag celebrations."
  },
  {
    id: "gal-21",
    title: "Safe GPS Transport Bus Fleet",
    category: "Campus Life",
    date: "Transport Wing",
    image: "/images/transport_real.jpg",
    description: "Fleet of GPS-monitored school buses providing safe and comfortable transit across Haridwar."
  },
  {
    id: "gal-22",
    title: "Morning Assembly & Campus Gathering",
    category: "Campus Life",
    date: "Campus Ground",
    image: "/images/campus_life_1.jpg",
    description: "Daily morning prayers, value-based talks, news recitation, and national anthem assembly."
  },
  {
    id: "gal-23",
    title: "Student Creative Arts & Activities",
    category: "Campus Life",
    date: "Activity Centre",
    image: "/images/activity_1.jpg",
    description: "Expressive fine arts, craft displays, and group collaborative learning sessions."
  },
  {
    id: "gal-24",
    title: "Campus Camaraderie & Peer Learning",
    category: "Campus Life",
    date: "Campus Life",
    image: "/images/campus_life_2.jpg",
    description: "Scholars interacting with peers and faculty within a supportive and inspiring school environment."
  }
];

export const CAREER_OPENINGS = [
  {
    id: "job-1",
    title: "PGT - Physics",
    department: "Senior Secondary (XI-XII)",
    type: "Full Time",
    experience: "3-5 Years in CBSE School",
    qualification: "M.Sc. in Physics with B.Ed. (First Class)",
    vacancies: 2,
    description: "Looking for an experienced educator to teach Senior Secondary CBSE Physics, conduct lab practicals, and mentor competitive aspirants (JEE/NEET)."
  },
  {
    id: "job-2",
    title: "PGT - Mathematics",
    department: "Senior Secondary (XI-XII)",
    type: "Full Time",
    experience: "3+ Years",
    qualification: "M.Sc. in Mathematics with B.Ed.",
    vacancies: 1,
    description: "Passionate mathematics teacher with deep conceptual understanding of calculus, algebra, and CBSE board examination methodologies."
  },
  {
    id: "job-3",
    title: "TGT - English & Social Sciences",
    department: "Middle School (VI-X)",
    type: "Full Time",
    experience: "2-4 Years",
    qualification: "M.A. / B.A. in English/History/Pol Science with B.Ed.",
    vacancies: 3,
    description: "Dynamic educator with strong command over spoken English, creative writing, and innovative pedagogy for middle school scholars."
  },
  {
    id: "job-4",
    title: "PRT / Mother Teachers (Primary)",
    department: "Primary School (I-V)",
    type: "Full Time",
    experience: "1-3 Years",
    qualification: "Graduate with NTT / D.El.Ed. / B.Ed.",
    vacancies: 4,
    description: "Caring, enthusiastic educators adept at activity-based learning, phonics, and foundational numeracy."
  },
  {
    id: "job-5",
    title: "Robotics & Coding Instructor",
    department: "STEM & Innovation",
    type: "Full Time",
    experience: "1-2 Years",
    qualification: "B.Tech / B.E. / BCA / MCA",
    vacancies: 1,
    description: "Hands-on experience in Arduino, basic electronics, Python, Scratch, and mentoring students for STEM exhibitions."
  },
  {
    id: "job-6",
    title: "Physical Education Teacher & Sports Coach",
    department: "Sports & Athletics",
    type: "Full Time",
    experience: "2+ Years",
    qualification: "B.P.Ed. / M.P.Ed. / NIS Certificate",
    vacancies: 2,
    description: "Coaches with expertise in Athletics, Cricket, Basketball, or Yoga to train inter-school CBSE tournament squads."
  }
];

export const PARENT_TESTIMONIALS = [
  {
    id: "t-1",
    parentName: "Er. Vivek Chauhan",
    childInfo: "Father of Divyansh Chauhan (Class VIII)",
    profession: "Senior Engineer, BHEL Haridwar",
    quote: "The individual attention given to every child at The Oxford School is commendable. The balance between academic discipline and robotics labs has nurtured immense confidence in my son."
  },
  {
    id: "t-2",
    parentName: "Dr. Sunita Pant",
    childInfo: "Mother of Tanya Pant (Class XI Science)",
    profession: "Physician, District Hospital Haridwar",
    quote: "We shifted from Delhi three years ago and were looking for a school with strong CBSE foundations. The Oxford School has exceeded our expectations in faculty competence and values."
  },
  {
    id: "t-3",
    parentName: "Shri Rajesh Kashyap",
    childInfo: "Father of Ananya Kashyap (Class X)",
    profession: "Businessman, Jwalapur",
    quote: "Safe GPS transport, clean campus, and transparent communication via Edunext make parenting so much easier. The board exam preparation here is systematic and stress-free."
  }
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Registration & Enquiry",
    description: "Submit online enquiry or collect the registration prospectus from the school administrative desk at Roshnabad."
  },
  {
    step: "02",
    title: "Campus Interaction / Assessment",
    description: "Friendly interaction for Pre-Primary children; basic competency assessment in English and Mathematics for Class I to XII."
  },
  {
    step: "03",
    title: "Document Verification",
    description: "Verification of Birth Certificate, Transfer Certificate (TC), previous report cards, and residential proof."
  },
  {
    step: "04",
    title: "Admission Confirmation & Onboarding",
    description: "Completion of fee formalities, issuance of student ID, uniform procurement, and allocation of bus route."
  }
];

export const AGE_CRITERIA = [
  { grade: "Playgroup / Nursery", age: "3+ Years as on 31st March" },
  { grade: "LKG (Lower Kindergarten)", age: "4+ Years as on 31st March" },
  { grade: "UKG (Upper Kindergarten)", age: "5+ Years as on 31st March" },
  { grade: "Class I", age: "6+ Years as on 31st March" },
  { grade: "Class II onwards", age: "As per CBSE age matrix and previous Transfer Certificate" }
];
