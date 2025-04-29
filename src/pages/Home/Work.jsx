import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const workData = {
  "experience-work": (
    <div className="experience-work">
      <h3>Web Developer & Designer</h3>
      <p className="company">🎯 Creo Elements LLP (June 2023 - Present)</p>
      <p className="description">
        Started as an intern, now the sole web developer & designer, handling everything from design to deployment, SEO, and Google integrations.
      </p>
    </div>
  ),
  "projects-work": (
    <div className="projects-work">
      <ul className="project-list">
        <li>
          🎨 <strong>FlowTile</strong> — A <strong>React-based</strong> canvas tool for creating <strong>infinitely repeating patterns</strong>.
        </li>
        <li>
          🕶️ <strong>Creative Windows AR Card</strong> — A <strong>marker-based AR</strong> system using <strong>MindAR.js</strong>.
        </li>
      </ul>
    </div>
  ),
  "graphic-work": (
    <div className="graphic-work">
      <div className="graphic-grid">
        <img src="/logos/creative-windows.png" alt="Creative Windows" />
        <img src="/logos/creotap.png" alt="CreoTAP" />
        <img src="/logos/flowtile.png" alt="FlowTile" />
        <img src="/logos/bakedwithlove.png" alt="bakedwithlove" />
        <img src="/logos/dvinay.png" alt="dvinay" />
      </div>
    </div>
  ),
  "sketch-work": (
    <div className="sketch-work">
      <p>A collection of <strong>pencil sketches</strong> showcased in a stylish gallery.</p>
    </div>
  ),
  "github-work": (
    <div className="github-work">
      <p>
        Explore my open-source projects on{" "}
        <a href="https://github.com/dvinay" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>.
      </p>
    </div>
  )
};

export const Work = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const workContentRef = useRef(null);
  const cardRefs = useRef({});

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
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(cardRefs.current).forEach((card) => {
      observer.observe(card);
    });

    return () => {
      Object.values(cardRefs.current).forEach((card) => {
        observer.unobserve(card);
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
                <div className="work-content" ref={workContentRef}>
                  {activeCard && workData[activeCard]}
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="work-row">
              <div
                className="work-card"
                id="experience-work"
                ref={(el) => (cardRefs.current['experience-work'] = el)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="circle"
                  style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }}
                />
                <div className="work-text">Experience</div>
              </div>
            </div>

            {/* Projects */}
            <div className="work-row">
              <div
                className="work-card"
                id="projects-work"
                ref={(el) => (cardRefs.current['projects-work'] = el)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="circle"
                  style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }}
                />
                <div className="work-text">Projects</div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="work-row">
              <div
                className="work-card"
                id="graphic-work"
                ref={(el) => (cardRefs.current['graphic-work'] = el)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="circle"
                  style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }}
                />
                <div className="work-text">Graphics</div>
              </div>
            </div>

            {/* Sketch */}
            <div className="work-row">
              <div
                className="work-card"
                id="sketch-work"
                ref={(el) => (cardRefs.current['sketch-work'] = el)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="circle"
                  style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }}
                />
                <div className="work-text">Sketches</div>
              </div>
            </div>

            {/* GitHub */}
            <div className="work-row">
              <div
                className="work-card"
                id="github-work"
                ref={(el) => (cardRefs.current['github-work'] = el)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="circle"
                  style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }}
                />
                <div className="work-text">GitHub</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
