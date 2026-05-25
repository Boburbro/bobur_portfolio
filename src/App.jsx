import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code, GraduationCap, Briefcase, PenTool, ArrowRight, ArrowLeft, FileText, Presentation, Image, ChevronRight, ChevronLeft, Download, Eye, Maximize2, ChevronDown, ChevronUp } from 'lucide-react';
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
import benefitImg from './assets/benefit.png';

const projectImages = {
  bozormedia: bozormediaImg,
  akfacomfort: akfacomfortImg,
  ishtop: ishtopImg,
  benefit: benefitImg
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
    case 'web': return <Code size={16} />;
    default: return <FileText size={16} />;
  }
};

const formatLabel = (format) => {
  if (format === 'web') return 'Web App';
  return `.${format}`;
};

const typeLabel = (type) => {
  switch (type) {
    case 'project': return 'Project';
    case 'presentation': return 'Presentation';
    case 'paper': return 'Paper';
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
                    {sem.year && <div className="timeline-date">{sem.year}</div>}
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

  const [expandedWork, setExpandedWork] = useState(null);
  const [fullscreenWork, setFullscreenWork] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!semester) {
    return (
      <div className="page-container">
        <p>Semester not found.</p>
        <button className="btn btn-outline" onClick={() => navigate('/academic')}>Back</button>
      </div>
    );
  }

  const mockSlides = {};

  const mockProjectGalleries = {
    "library_system": {
      title: "Real-Time Library Book Reservation Platform",
      description: "A real-time library reservation MVP built with Python Django. Developed for the 'Human and AI in Education' final exam under instructor Ramziddin Khusanov. The entire project was generated by AI (GPT-5) within under an hour based on a simple project description prompt. It stands as a powerful demonstration of how AI acts as a true productivity multiplier in modern software development. (Django's built-in administration panel was utilized for database management).",
      images: [
        { url: "/library_preview_1.png", caption: "Library Reservation System - Real-time Book Catalog" },
        { url: "/library_preview_2.png", caption: "Kitoblar ro'yxati va band qilish holati (Active books view)" },
        { url: "/library_preview_3.png", caption: "Band qilingan kitoblarni monitoring qilish (Reservation control)" },
        { url: "/library_preview_4.png", caption: "Django default admin panelidan foydalanilgan boshqaruv paneli" }
      ]
    }
  };

  const handleToggleExpand = (idx) => {
    if (expandedWork === idx) {
      setExpandedWork(null);
    } else {
      setExpandedWork(idx);
      setCurrentSlide(0);
    }
  };

  const hasPreview = (work) => {
    return !!(mockSlides[work.file] || mockProjectGalleries[work.file]);
  };

  const getPreviewLength = (work) => {
    if (mockSlides[work.file]) return mockSlides[work.file].length;
    if (mockProjectGalleries[work.file]) return mockProjectGalleries[work.file].images.length;
    return 0;
  };

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
              className={`work-card ${expandedWork === i ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <div 
                className="work-card-top" 
                style={{ cursor: hasPreview(work) ? 'pointer' : 'default' }} 
                onClick={() => hasPreview(work) && handleToggleExpand(i)}
              >
                <div className="work-card-icon">{formatIcon(work.format)}</div>
                <div className="work-card-info">
                  <div className="work-card-title-row">
                    <div className="work-card-title">{work.title}</div>
                    {hasPreview(work) && (
                      <span className="expand-chevron-icon">
                        {expandedWork === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    )}
                  </div>
                  <div className="work-card-desc">{work.desc}</div>
                </div>
              </div>

              <div className="work-card-bottom">
                <div className="work-card-badges">
                  <span className="work-type-badge">{typeLabel(work.type)}</span>
                  <span className="work-format-badge">{formatLabel(work.format)}</span>
                </div>
                
                <div className="work-card-actions">
                  {hasPreview(work) && (
                    <button
                      className={`work-preview-btn ${expandedWork === i ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleExpand(i);
                      }}
                    >
                      <Eye size={14} />
                      <span>{expandedWork === i ? 'Close Preview' : 'Preview'}</span>
                    </button>
                  )}
                  {work.file && work.format !== 'web' && (
                    <a
                      href={`/${work.file}`}
                      download
                      className="work-download-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </a>
                  )}
                </div>
              </div>

              {expandedWork === i && mockSlides[work.file] && (
                <div className="work-preview-panel" onClick={(e) => e.stopPropagation()}>
                  <div className="slide-viewer-header">
                    <span className="slide-viewer-title">Slide {currentSlide + 1} of {mockSlides[work.file].length}</span>
                    <button 
                      className="preview-action-btn" 
                      onClick={() => {
                        setFullscreenWork(work);
                      }}
                    >
                      <Maximize2 size={12} />
                      <span>View Fullscreen</span>
                    </button>
                  </div>
                  <div className="slide-content-area">
                    <div className="slide-body">
                      <div className="slide-title">{mockSlides[work.file][currentSlide].title}</div>
                      <div className="slide-subtitle">{mockSlides[work.file][currentSlide].subtitle}</div>
                      <ul className="slide-bullets">
                        {mockSlides[work.file][currentSlide].bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="slide-controls">
                    <button 
                      disabled={currentSlide === 0} 
                      onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                      className="slide-control-btn"
                    >
                      Prev
                    </button>
                    <div className="slide-dots">
                      {mockSlides[work.file].map((_, idx) => (
                        <span 
                          key={idx} 
                          className={`slide-dot ${currentSlide === idx ? 'active' : ''}`}
                          onClick={() => setCurrentSlide(idx)}
                        />
                      ))}
                    </div>
                    <button 
                      disabled={currentSlide === mockSlides[work.file].length - 1} 
                      onClick={() => setCurrentSlide(prev => Math.min(mockSlides[work.file].length - 1, prev + 1))}
                      className="slide-control-btn"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {expandedWork === i && mockProjectGalleries[work.file] && (
                <div className="work-preview-panel" onClick={(e) => e.stopPropagation()}>
                  <div className="slide-viewer-header">
                    <span className="slide-viewer-title">Screenshot {currentSlide + 1} of {mockProjectGalleries[work.file].images.length}</span>
                    <button 
                      className="preview-action-btn" 
                      onClick={() => {
                        setFullscreenWork(work);
                      }}
                    >
                      <Maximize2 size={12} />
                      <span>View Fullscreen</span>
                    </button>
                  </div>
                  
                  <div className="project-gallery-description">
                    {mockProjectGalleries[work.file].description}
                  </div>

                  <div className="project-gallery-display">
                    {currentSlide > 0 && (
                      <button 
                        className="gallery-nav-btn prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(prev => prev - 1);
                        }}
                      >
                        <ChevronLeft size={18} />
                      </button>
                    )}
                    <img 
                      src={mockProjectGalleries[work.file].images[currentSlide].url} 
                      alt={mockProjectGalleries[work.file].images[currentSlide].caption} 
                      className="project-gallery-image"
                    />
                    {currentSlide < mockProjectGalleries[work.file].images.length - 1 && (
                      <button 
                        className="gallery-nav-btn next"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(prev => prev + 1);
                        }}
                      >
                        <ChevronRight size={18} />
                      </button>
                    )}
                    <div className="project-gallery-caption">
                      {mockProjectGalleries[work.file].images[currentSlide].caption}
                    </div>
                  </div>

                  <div className="slide-controls" style={{ justifyContent: 'center' }}>
                    <div className="slide-dots">
                      {mockProjectGalleries[work.file].images.map((_, idx) => (
                        <span 
                          key={idx} 
                          className={`slide-dot ${currentSlide === idx ? 'active' : ''}`}
                          onClick={() => setCurrentSlide(idx)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Slider Modal */}
      <AnimatePresence>
        {fullscreenWork && hasPreview(fullscreenWork) && (
          <motion.div 
            className="fullscreen-slide-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenWork(null)}
          >
            <motion.div 
              className="fullscreen-slide-modal-content"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={() => setFullscreenWork(null)}>✕</button>
              
              <div className="fullscreen-slide-body">
                {mockSlides[fullscreenWork.file] ? (
                  <div className="fs-slide-card">
                    <div className="fs-slide-title">{mockSlides[fullscreenWork.file][currentSlide].title}</div>
                    <div className="fs-slide-subtitle">{mockSlides[fullscreenWork.file][currentSlide].subtitle}</div>
                    <ul className="fs-slide-bullets">
                      {mockSlides[fullscreenWork.file][currentSlide].bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="fs-image-card">
                    {currentSlide > 0 && (
                      <button 
                        className="gallery-nav-btn fs-gallery-nav-btn prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(prev => prev - 1);
                        }}
                      >
                        <ChevronLeft size={24} />
                      </button>
                    )}
                    <img 
                      src={mockProjectGalleries[fullscreenWork.file].images[currentSlide].url} 
                      alt={mockProjectGalleries[fullscreenWork.file].images[currentSlide].caption} 
                      className="fs-gallery-image"
                    />
                    {currentSlide < getPreviewLength(fullscreenWork) - 1 && (
                      <button 
                        className="gallery-nav-btn fs-gallery-nav-btn next"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(prev => prev + 1);
                        }}
                      >
                        <ChevronRight size={24} />
                      </button>
                    )}
                    <div className="fs-image-caption">
                      {mockProjectGalleries[fullscreenWork.file].images[currentSlide].caption}
                    </div>
                  </div>
                )}
              </div>

              <div className="fullscreen-slide-controls" style={mockProjectGalleries[fullscreenWork.file] ? { justifyContent: 'center' } : {}}>
                {!mockProjectGalleries[fullscreenWork.file] && (
                  <button 
                    disabled={currentSlide === 0} 
                    onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                    className="slide-control-btn fs-btn"
                  >
                    Previous
                  </button>
                )}
                <div className="fs-slide-info">
                  {mockSlides[fullscreenWork.file] ? 'Slide' : 'Item'} {currentSlide + 1} of {getPreviewLength(fullscreenWork)}
                </div>
                {!mockProjectGalleries[fullscreenWork.file] && (
                  <button 
                    disabled={currentSlide === getPreviewLength(fullscreenWork) - 1} 
                    onClick={() => setCurrentSlide(prev => Math.min(getPreviewLength(fullscreenWork) - 1, prev + 1))}
                    className="slide-control-btn fs-btn"
                  >
                    Next
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
