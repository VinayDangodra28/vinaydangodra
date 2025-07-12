import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GithubProjects from "../../components/GithubProjects"; // Adjust path accordingly
import "./Work.css";

gsap.registerPlugin(ScrollTrigger);

// All work sections and projects in a single array of objects
const workSections = [
  {
    id: 'experience-work',
    title: 'Experience',
    circleGradient: 'radial-gradient(#3eb8a2, transparent, transparent)',
    content: (
      <div className="work-content-section">
        <div className="work-header">
          <div className="work-icon-container">
            <span className="work-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/><path d="M2 13h20"/></svg>
            </span>
          </div>
          <div className="work-header-text">
            <h2 className="work-title">Professional Experience</h2>
            <p className="work-subtitle">My journey in web development</p>
          </div>
        </div>

        <div className="work-content-main">
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="experience-role">Web Developer & Designer</h3>
              <span className="experience-company">🎯 Creo Elements LLP</span>
            </div>
            <div className="experience-duration">June 2023 - Present</div>
            <p className="experience-description">
              Started as an intern, now the sole web developer & designer, handling everything from design to deployment, SEO, and Google integrations.
            </p>
            <div className="experience-skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">SEO</span>
              <span className="skill-tag">Google Analytics</span>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <a href="https://creoelements.com" target="_blank" rel="noopener noreferrer" className="work-cta-button">
            <span>Visit Company</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'projects-work',
    title: 'Projects',
    circleGradient: 'radial-gradient(#00bcd4, transparent, transparent)',
    content: (
      <div className="work-content-section">
        <div className="work-header">
          <div className="work-icon-container">
            <span className="work-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5L3 21l4.5-1.5M15 3l6 6-7.5 7.5a5 5 0 01-7.07 0 5 5 0 010-7.07L15 3z"/><path d="M9 9h.01"/></svg>
            </span>
          </div>
          <div className="work-header-text">
            <h2 className="work-title">Featured Projects</h2>
            <p className="work-subtitle">My best work and creations</p>
          </div>
        </div>

        <div className="work-content-main">
          <div className="projects-grid">
            <a href="https://flowtile.vercel.app/" target="_blank" className="project-item" rel="noopener noreferrer">
              <div className="project-header">
                <div className="project-title">
                  <img src="/logos/flowtile.png" alt="FlowTile" className="project-logo" />
                  <h3 className="project-name">FlowTile</h3>
                </div>
                <span className="project-status">Live</span>
              </div>
              <p className="project-description">
                A React-based canvas tool for creating infinitely repeating patterns.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">Canvas API</span>
              </div>
            </a>

            <a href="https://petal-honeysuckle-quince.glitch.me/" target="_blank" className="project-item" rel="noopener noreferrer">
              <div className="project-header">
                <div className="project-title">
                  <h3 className="project-name">AR Card</h3>
                </div>
                <span className="project-status">Live</span>
              </div>
              <p className="project-description">
                A marker-based AR system using MindAR.js for interactive experiences.
              </p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Three.js</span>
                <span className="tech-tag">AR</span>
              </div>
            </a>
          </div>
        </div>

        <div className="work-cta">
          <a href="#projects" className="work-cta-button">
            <span>View All Projects</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'graphic-work',
    title: 'Graphics',
    circleGradient: 'radial-gradient(#FFD700, transparent, transparent)',
    content: (
      <div className="work-content-section">
        <div className="work-header">
          <div className="work-icon-container">
            <span className="work-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="7.5" cy="10.5" r=".5"/><circle cx="16.5" cy="10.5" r=".5"/><circle cx="12" cy="7.5" r=".5"/><circle cx="12" cy="16.5" r=".5"/><path d="M12 12a4 4 0 014 4v1a1 1 0 01-1 1h-6a1 1 0 01-1-1v-1a4 4 0 014-4z"/></svg>
            </span>
          </div>
          <div className="work-header-text">
            <h2 className="work-title">Graphic Design</h2>
            <p className="work-subtitle">Logos, branding & visual creations</p>
          </div>
        </div>

        <div className="work-content-main">
          <div className="graphics-grid">
            <div className="graphic-item">
              <img src="/logos/creative-windows.png" alt="Creative Windows" className="graphic-image" />
              <div className="graphic-overlay">
                <span className="graphic-name">Creative Windows</span>
              </div>
            </div>
            <div className="graphic-item">
              <img src="/logos/creotap.png" alt="CreoTAP" className="graphic-image" />
              <div className="graphic-overlay">
                <span className="graphic-name">CreoTAP</span>
              </div>
            </div>
            <div className="graphic-item">
              <img src="/logos/flowtile.png" alt="FlowTile" className="graphic-image" />
              <div className="graphic-overlay">
                <span className="graphic-name">FlowTile</span>
              </div>
            </div>
            <div className="graphic-item">
              <img src="/logos/bakedwithlove.png" alt="bakedwithlove" className="graphic-image" />
              <div className="graphic-overlay">
                <span className="graphic-name">Baked with Love</span>
              </div>
            </div>
            <div className="graphic-item">
              <img src="/logos/dvinay.png" alt="dvinay" className="graphic-image" />
              <div className="graphic-overlay">
                <span className="graphic-name">Dvinay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <a href="#graphics" className="work-cta-button">
            <span>View Portfolio</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'github-work',
    title: 'GitHub',
    circleGradient: 'radial-gradient(#4B0082, transparent, transparent)',
    content: <GithubProjects />
  }
];

export const Work = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(workSections[0].id);
  const [activecircle, setActivecircle] = useState(null);
  const [contentKey, setContentKey] = useState(workSections[0].id);
  const workContentRef = useRef(null);
  const cardRefs = useRef({});
  const contentRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCirclePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setCirclePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCard(entry.target.id);
            setActivecircle(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Only observe valid elements
    Object.values(cardRefs.current).forEach((card) => {
      if (card && card instanceof Element) {
        observer.observe(card);
      }
    });

    return () => {
      // Only unobserve valid elements
      Object.values(cardRefs.current).forEach((card) => {
        if (card && card instanceof Element) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (activeCard) {
      const card = cardRefs.current[activeCard];
      if (activeCard !== 'experience-work') {
        gsap.fromTo(
          card,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      }
    }
  }, [activeCard]);

  useEffect(() => {
    if (activecircle) {
      // Select all circles and set their opacity to 0
      const allCircles = document.querySelectorAll('.circle');
      allCircles.forEach(circle => {
        gsap.to(circle, { opacity: 0, duration: 0.5 });
      });

      // Select the active circle and set its opacity to 1
      const presentcard = document.getElementById(activecircle);
      const activeCircle = presentcard.querySelector('.circle');
      gsap.to(activeCircle, { opacity: 1, duration: 0.5 });

      // Kill previous ScrollTrigger if exists
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === presentcard) {
          trigger.kill();
        }
      });

      // Set up ScrollTrigger for the active circle
      gsap.to(activeCircle, {
        top: "100%",
        left: "100%",
        scrollTrigger: {
          trigger: presentcard,
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
          // markers: true
        },
      });
    }
  }, [activecircle]);

  // Animate content transition on activeCard change
  useEffect(() => {
    if (!activeCard) return;
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          setContentKey(activeCard);
          gsap.fromTo(
            contentRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.4 }
          );
        }
      });
    } else {
      setContentKey(activeCard);
    }
  }, [activeCard]);

  // Capture work-content dimensions
  useEffect(() => {
    if (contentRef.current) {
      const measureContent = () => {
        const rect = contentRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        console.log('Work Content Dimensions:', {
          width: `${width}px`,
          height: `${height}px`,
          widthNum: width,
          heightNum: height
        });
        
        // You can also store these in state if needed
        // setContentDimensions({ width, height });
      };

      // Measure immediately
      measureContent();
      
      // Measure after a short delay to ensure content is fully rendered
      const timeoutId = setTimeout(measureContent, 100);
      
      // Measure on window resize
      const handleResize = () => {
        setTimeout(measureContent, 50);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [contentKey, activeCard]); // Re-measure when content changes

  // Helper to get section by id
  const getSection = (id) => workSections.find((s) => s.id === id);

  return (
    <div className="work-section-wrapper">
      <div className="work-frame">
        <div className="work-section">
          <div className="work-title section-title">
            <span>The Divergent Work</span>
          </div>
          <div className="work-wrapper">
            <div className="work-content-wrapper">
              <div className="work-content-inner-wrapper">
                <div
                  className="work-content"
                  ref={contentRef}
                  key={contentKey}
                  style={{ opacity: 1, transition: 'opacity 0.4s' }}
                >
                  {contentKey && getSection(contentKey).content}
                </div>
              </div>
            </div>

            {/* Render all cards dynamically */}
            {workSections.map((section) => (
              <div className="work-row" key={section.id}>
                <div
                  className="work-card"
                  id={section.id}
                  ref={(el) => (cardRefs.current[section.id] = el)}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    setCirclePosition({ x, y });
                  }}
                  onMouseLeave={() => setCirclePosition({ x: 0, y: 0 })}
                >
                  <div
                    className="circle"
                    style={{
                      top: `${circlePosition.y}px`,
                      left: `${circlePosition.x}px`,
                      background: section.circleGradient
                    }}
                  />
                  <div className="work-text">{section.title}</div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};
