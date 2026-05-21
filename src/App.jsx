import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code, GraduationCap, Briefcase, PenTool, ArrowRight, ArrowLeft, FileText, Presentation, Image, ChevronRight } from 'lucide-react';
import boburImg1 from './assets/bobur.png';
import boburImg2 from './assets/bobur2.png';
import boburImg3 from './assets/bobur3.png';
import portfolioData from './data/portfolio.json';
import projectsData from './data/projects.json';
import careerData from './data/career.json';
import academicData from './data/academic.json';
import bozormediaImg from './assets/bozormedia.png';
import akfacomfortImg from './assets/akfacomfort.png';
import ishtopImg from './assets/ishtop.png';

const projectImages = {
  bozormedia: bozormediaImg,
  akfacomfort: akfacomfortImg,
  ishtop: ishtopImg
};

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

const PlayStoreIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
  </svg>
);

const AppStoreIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.1.08.2.12.3.12.87 0 1.96-.54 2.52-1.45z"/>
  </svg>
);

/* ===== Page Components ===== */
const ProjectsPage = () => (
  <div className="page-container">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h2 className="page-title">Projects</h2>
      <div className="card-grid">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <div className="card-header">
              {project.image && projectImages[project.image] ? (
                <img src={projectImages[project.image]} alt={project.name} className="project-card-image" />
              ) : (
                <Code className="card-icon" size={18} />
              )}
              <h3 className="card-title">{project.name}</h3>
            </div>
            <p className="card-desc">{project.desc}</p>
            <div className="card-tags">
              {project.tags.map((tag, j) => <span key={j} className="tag">{tag}</span>)}
            </div>
            {project.links && (
              <div className="project-links">
                {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <PlayStoreIcon size={14} />
                    <span>Play Store</span>
                  </a>
                )}
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <AppStoreIcon size={14} />
                    <span>App Store</span>
                  </a>
                )}
              </div>
            )}
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
        {careerData.map((job, i) => (
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

/* ===== Academic Data loaded from JSON ===== */

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

        {academicData.academic.map((uni, uniIdx) => (
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
  const semester = academicData.semesterDetails[semesterId];

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
        {portfolioData.blog.map((post, i) => (
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

  const { personal } = portfolioData;

  return (
    <div className="hero">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hero-name">{personal.name}</h1>
        <p className="hero-role">
          <span className="hero-role-accent">{personal.role.accent}</span> {personal.role.title}
        </p>

        <div className="hero-socials">
          <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub"><GithubIcon size={18} /></a>
          <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
          <a href={personal.socials.telegram} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Telegram"><TelegramIcon size={18} /></a>
          <a href={`mailto:${personal.socials.email}`} className="hero-social-link" aria-label="Email"><Mail size={18} /></a>
        </div>

        <p className="hero-bio">
          {personal.bio}
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
              alt={personal.name}
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
        <NavLink to="/" className="navbar-brand">{portfolioData.personal.name}</NavLink>
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
