import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code, GraduationCap, Briefcase, PenTool, ArrowRight, ArrowLeft, FileText, Presentation, Image, ChevronRight } from 'lucide-react';
import boburImg1 from './assets/bobur.png';
import boburImg2 from './assets/bobur2.png';
import boburImg3 from './assets/bobur3.png';

const heroImages = [boburImg1, boburImg2, boburImg3];

/* ===== Custom SVG Icons ===== */
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TelegramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 4.4 2.4 10.8c-.6.2-.6 1 0 1.2l4.6 1.4 2 6.2c.2.4.6.4.8.2l2.8-2.2 4.4 3.2c.4.2.8 0 1-.4L22.8 5.6c.2-.6-.4-1.2-1-.8l-.6.2"/><path d="m7 13.4 9.4-6.6"/></svg>
);

/* ===== Page Components ===== */
const ProjectsPage = () => (
  <div className="page-container">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h2 className="page-title">Projects</h2>
      <div className="card-grid">
        {[
          { name: 'Redeem', desc: 'Mobile fuel payment app with QR scanning and real-time pump selection.', tags: ['Flutter', 'Dart', 'REST API'] },
          { name: 'Market Manager', desc: 'POS management system for retail stores with cashier workflow.', tags: ['Go', 'React', 'PostgreSQL'] },
          { name: 'Redeem Driver', desc: 'Driver companion app with map clustering and fuel delivery tracking.', tags: ['Flutter', 'Google Maps', 'BLoC'] },
          { name: 'Portfolio', desc: 'This website — built from scratch with modern React and Vite.', tags: ['React', 'Vite', 'Framer Motion'] }
        ].map((project, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <div className="card-header">
              <Code className="card-icon" size={18} />
              <h3 className="card-title">{project.name}</h3>
            </div>
            <p className="card-desc">{project.desc}</p>
            <div className="card-tags">
              {project.tags.map((tag, j) => <span key={j} className="tag">{tag}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

const CareerPage = () => (
  <div className="page-container">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h2 className="page-title">Career</h2>
      <div className="timeline">
        {[
          { title: 'Software Engineer', company: 'Tech Corp', date: '2023 — Present', desc: 'Building scalable mobile and web applications.' },
          { title: 'Junior Developer', company: 'Startup Hub', date: '2021 — 2023', desc: 'Full-stack development with Flutter and Go.' }
        ].map((job, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.3 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-title">{job.title}</div>
              <div className="timeline-subtitle">{job.company}</div>
              <div className="timeline-date">{job.date}</div>
              <div className="timeline-desc">{job.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

/* ===== Academic Data ===== */
const academicData = [
  {
    id: 'kaust',
    university: 'KAUST',
    fullName: 'King Abdullah University of Science and Technology',
    degree: 'Magistr',
    years: '2026 — Present',
    semesters: [
      {
        id: 'kaust-semester-1',
        name: '1-semestr',
        year: '2026',
        items: [
          'Machine Learning kursi',
          'Research metodologiyasi'
        ]
      }
    ]
  },
  {
    id: 'millat-umidi',
    university: 'Millat Umidi',
    fullName: 'Millat Umidi Universiteti',
    degree: 'Bakalavr',
    years: '2023 — 2026',
    semesters: [
      {
        id: 'mu-semester-2',
        name: '2-semestr',
        year: '2024',
        items: [
          'Data Structures kursi loyihasi',
          'Algoritm tahlili presentatsiyasi'
        ]
      },
      {
        id: 'mu-semester-1',
        name: '1-semestr',
        year: '2023',
        items: [
          'Python asoslari loyihasi',
          'Kirish imtihon maqolasi'
        ]
      }
    ]
  }
];

const semesterDetails = {
  'kaust-semester-1': {
    name: '1-semestr — KAUST',
    works: [
      { title: 'Machine Learning kursi loyihasi', type: 'project', format: 'pdf', desc: 'Supervised learning modellari implementatsiyasi.' },
      { title: 'Research metodologiyasi taqdimoti', type: 'presentation', format: 'pptx', desc: 'Ilmiy tadqiqot metodlari bo\'yicha prezentatsiya.' }
    ]
  },
  'mu-semester-2': {
    name: '2-semestr — Millat Umidi',
    works: [
      { title: 'Data Structures kursi loyihasi', type: 'project', format: 'pdf', desc: 'Linked list, stack va queue implementatsiyasi.' },
      { title: 'Algoritm tahlili presentatsiyasi', type: 'presentation', format: 'pptx', desc: 'Sorting algoritmlarini taqqoslash.' }
    ]
  },
  'mu-semester-1': {
    name: '1-semestr — Millat Umidi',
    works: [
      { title: 'Python asoslari loyihasi', type: 'project', format: 'pdf', desc: 'Calculator va to-do app yaratish.' },
      { title: 'Kirish imtihon maqolasi', type: 'paper', format: 'pdf', desc: 'IT sohasiga kirish bo\'yicha akademik maqola.' }
    ]
  }
};

const formatIcon = (format) => {
  switch (format) {
    case 'pdf': return <FileText size={16} />;
    case 'pptx': return <Presentation size={16} />;
    case 'image': return <Image size={16} />;
    default: return <FileText size={16} />;
  }
};

const typeLabel = (type) => {
  switch (type) {
    case 'project': return 'Loyiha';
    case 'presentation': return 'Prezentatsiya';
    case 'paper': return 'Maqola';
    default: return type;
  }
};

const AcademicPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h2 className="page-title">Academic</h2>

        {academicData.map((uni, uniIdx) => (
          <div key={uni.id} className="academic-university-block">
            <div className="academic-uni-header">
              <div>
                <h3 className="academic-uni-name">{uni.university}</h3>
                <p className="academic-uni-full">{uni.fullName}</p>
              </div>
              <div className="academic-uni-meta">
                <span className="academic-degree-badge">{uni.degree}</span>
                <span className="academic-uni-years">{uni.years}</span>
              </div>
            </div>

            <div className="timeline">
              {uni.semesters.map((sem, i) => (
                <motion.div
                  key={sem.id}
                  className="timeline-item timeline-item-clickable"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (uniIdx * 0.2) + (i * 0.12), duration: 0.3 }}
                  onClick={() => navigate(`/academic/${sem.id}`)}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-title-row">
                      <div className="timeline-title">{sem.name}</div>
                      <ChevronRight className="timeline-chevron" size={18} />
                    </div>
                    <div className="timeline-date">{sem.year}</div>
                    <ul className="timeline-bullets">
                      {sem.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SemesterDetailPage = () => {
  const { semesterId } = useParams();
  const navigate = useNavigate();
  const semester = semesterDetails[semesterId];

  if (!semester) {
    return (
      <div className="page-container">
        <p>Semestr topilmadi.</p>
        <button className="btn btn-outline" onClick={() => navigate('/academic')}>Orqaga</button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <button className="back-btn" onClick={() => navigate('/academic')}>
          <ArrowLeft size={18} />
          Academic
        </button>

        <h2 className="page-title">{semester.name}</h2>

        <div className="works-list">
          {semester.works.map((work, i) => (
            <motion.div
              key={i}
              className="work-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <div className="work-card-top">
                <div className="work-card-icon">{formatIcon(work.format)}</div>
                <div className="work-card-info">
                  <div className="work-card-title">{work.title}</div>
                  <div className="work-card-desc">{work.desc}</div>
                </div>
              </div>
              <div className="work-card-bottom">
                <span className="work-type-badge">{typeLabel(work.type)}</span>
                <span className="work-format-badge">.{work.format}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const BlogPage = () => (
  <div className="page-container">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h2 className="page-title">Blog</h2>
      <div className="blog-list">
        {[
          { title: 'How to build modern web apps with Vite', date: 'May 2026' },
          { title: 'My journey into Software Engineering', date: 'Apr 2026' },
          { title: 'The importance of clean code', date: 'Mar 2026' },
          { title: 'Flutter vs React Native in 2026', date: 'Feb 2026' }
        ].map((post, i) => (
          <motion.div
            key={i}
            className="blog-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <span className="blog-item-title">{post.title}</span>
            <span className="blog-item-date">{post.date}</span>
            <ArrowRight className="blog-item-arrow" size={16} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

/* ===== Landing / Home ===== */
const HomePage = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hero-name">Bobur Otaboyev</h1>
        <p className="hero-role">
          <span className="hero-role-accent">Software</span> Engineer
        </p>

        <div className="hero-socials">
          <a href="https://github.com/Boburbro" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub"><GithubIcon size={18} /></a>
          <a href="https://www.linkedin.com/in/bobur-otaboyev-506117308/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
          <a href="https://t.me/itwithBobur" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Telegram"><TelegramIcon size={18} /></a>
          <a href="mailto:boburotaboyev0@gmail.com" className="hero-social-link" aria-label="Email"><Mail size={18} /></a>
        </div>

        <p className="hero-bio">
          I build mobile and web applications with Flutter, React, and Go. Passionate about clean architecture, 
          great user experiences, and shipping products that make a difference.
        </p>

        <div className="hero-buttons">
          <NavLink to="/projects" className="btn btn-primary">View Projects</NavLink>
          <NavLink to="/blog" className="btn btn-outline">Read Blog</NavLink>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="hero-glow" />
        <div className="hero-image-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={heroImages[currentImg]}
              alt="Bobur Otaboyev"
              className="hero-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

/* ===== Main App ===== */
function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Career', path: '/career' },
    { label: 'Academic', path: '/academic' },
    { label: 'Blog', path: '/blog' }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">Bobur Otaboyev</NavLink>
        <div className="navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Content */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/academic/:semesterId" element={<SemesterDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
