import React, { useState, useEffect, useContext } from 'react';
import GithubProjects from "../../components/GithubProjects";
import { ThemeContext } from "../../components/ToggleButton";

// Mobile work sections data
const mobileWorkSections = [
  {
    id: 'experience-mobile',
    title: 'Experience',
    icon: '💼',
    gradient: 'linear-gradient(135deg, #008080 0%, #00BFFF 100%)',
    content: {
      role: 'Web Developer & Designer',
      company: 'Creo Elements LLP',
      duration: 'June 2023 - Present',
      description: 'Started as an intern, now the sole web developer & designer, handling everything from design to deployment, SEO, and Google integrations.',
      highlights: [
        'Full-stack development',
        'UI/UX design',
        'SEO optimization',
        'Google integrations'
      ]
    }
  },
  {
    id: 'projects-mobile',
    title: 'Projects',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #FF1493 0%, #FF9AA2 100%)',
    content: {
      projects: [
        {
          name: 'FlowTile',
          description: 'A React-based canvas tool for creating infinitely repeating patterns.',
          link: 'https://flowtile.vercel.app/',
          image: '/logos/flowtile.png',
          tech: ['React', 'Redux', 'Canvas API']
        },
        {
          name: 'AR Card',
          description: 'A marker-based AR system using MindAR.js.',
          link: 'https://petal-honeysuckle-quince.glitch.me/',
          image: '/logos/arcard.svg',
          tech: ['JavaScript', 'Three.js', 'MindAR']
        }
      ]
    }
  },
  {
    id: 'graphics-mobile',
    title: 'Graphics',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #C62828 0%, #FF9AA2 100%)',
    content: {
      description: 'Professional graphic design work including logos, branding, and visual assets.',
      projects: [
        { name: 'Creative Windows', image: '/logos/creative_windows_logo.png' },
        { name: 'CreoTAP', image: '/logos/creotap.svg' },
        { name: 'FlowTile', image: '/logos/flowtile.png' },
        { name: 'Baked with Love', image: '/logos/bakedwithlove.svg' },
        { name: 'Dvinay', image: '/logos/dvinay.svg' }
      ]
    }
  },
  {
    id: 'github-mobile',
    title: 'GitHub',
    icon: '📂',
    gradient: 'linear-gradient(135deg, #2F4F4F 0%, #708090 100%)',
    content: {
      description: 'Open source contributions and personal projects.',
      component: <GithubProjects />
    }
  }
];

export const WorkMobile = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  const handleCardClick = (cardId) => {
    if (selectedCard === cardId) {
      setSelectedCard(null);
      setIsExpanded(false);
    } else {
      setSelectedCard(cardId);
      setIsExpanded(true);
    }
  };

  const renderCardContent = (section) => {
    switch (section.id) {
      case 'experience-mobile':
        return (
          <div className="mobile-card-content">
            <div className="experience-header">
              <h3>{section.content.role}</h3>
              <div className="company-info">
                <span className="company-name">{section.content.company}</span>
                <span className="duration">{section.content.duration}</span>
              </div>
            </div>
            <p className="experience-description">{section.content.description}</p>
            <div className="highlights">
              {section.content.highlights.map((highlight, index) => (
                <span key={index} className="highlight-tag">{highlight}</span>
              ))}
            </div>
          </div>
        );

      case 'projects-mobile':
        return (
          <div className="mobile-card-content">
            <div className="projects-grid">
              {section.content.projects.map((project, index) => (
                <a 
                  key={index} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <div className="project-image">
                    {project.image ? (
                      <img src={project.image} alt={project.name} />
                    ) : (
                      <div className="project-fallback">
                        <span>{project.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="project-info">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );

      case 'graphics-mobile':
        return (
          <div className="mobile-card-content">
            <p className="graphics-description">{section.content.description}</p>
            <div className="graphics-grid">
              {section.content.projects.map((project, index) => (
                <div key={index} className="graphic-item">
                  {project.image ? (
                    <img src={project.image} alt={project.name} />
                  ) : (
                    <div className="graphic-fallback">
                      <span>{project.name.charAt(0)}</span>
                    </div>
                  )}
                  <span className="graphic-name">{project.name}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'github-mobile':
        return (
          <div className="mobile-card-content">
            <p className="github-description">{section.content.description}</p>
            <div className="github-component">
              {section.content.component}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`work-mobile-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="work-mobile-header">
        <h2 className="work-mobile-title">The Divergent Work</h2>
        <p className="work-mobile-subtitle">Explore my professional journey</p>
      </div>
      
      <div className="work-mobile-grid">
        {mobileWorkSections.map((section) => (
          <div
            key={section.id}
            className={`work-mobile-card ${selectedCard === section.id ? 'expanded' : ''}`}
            onClick={() => handleCardClick(section.id)}
          >
            <div 
              className="card-header"
              style={{ background: section.gradient }}
            >
              <div className="card-icon">{section.icon}</div>
              <h3 className="card-title">{section.title}</h3>
              <div className={`expand-indicator ${selectedCard === section.id ? 'expanded' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className={`card-content ${selectedCard === section.id ? 'visible' : ''}`}>
              {renderCardContent(section)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 