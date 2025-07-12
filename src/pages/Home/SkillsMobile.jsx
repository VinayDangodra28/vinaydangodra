import React, { useState, useContext } from 'react';
import { ThemeContext } from "../../components/ToggleButton";

export const SkillsMobile = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedSubSkill, setSelectedSubSkill] = useState(null);
  const [showSkillModal, setShowSkillModal] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  // Same skills data as desktop version
  const skillsData = {
    frontend: {
      title: "Frontend",
      description: "Modern interfaces using HTML, CSS, JavaScript, React, and GSAP.",
      icon: "fa-solid fa-code",
      gradient: "linear-gradient(135deg, #003D3D 0%, #00BFFF 100%)",
      subSkills: [
        {
          name: "HTML",
          icon: "fa-brands fa-html5",
          sections: {
            whatIKnow: "Semantic, accessible HTML with SEO considerations.",
            whatIWantToDo: "Explore Web Components and progressive web apps."
          }
        },
        {
          name: "CSS",
          icon: "fa-brands fa-css3",
          sections: {
            whatIKnow: "Responsive layouts with Flexbox, Grid, and GSAP animations.",
            whatIWantToDo: "Learn CSS-in-JS, container queries, and CSS Houdini."
          }
        },
        {
          name: "JavaScript",
          icon: "fa-brands fa-js",
          sections: {
            whatIKnow: "DOM manipulation, reusable modules, and API integration.",
            whatIWantToDo: "Advance with async handling and modular patterns."
          }
        },
        {
          name: "React",
          icon: "fa-brands fa-react",
          sections: {
            whatIKnow: "Built projects with hooks, components, and state management.",
            whatIWantToDo: "Improve performance, Redux use, and explore Server Components."
          }
        },
        {
          name: "GSAP",
          icon: "fa-solid fa-film",
          sections: {
            whatIKnow: "Scroll animations, SVG motion, and UI transitions with timelines.",
            whatIWantToDo: "Push toward WebGL integration and 3D animation."
          }
        }
      ]
    },

    backend: {
      title: "Backend",
      description: "APIs, databases, and logic with Node.js, Python, and SQL.",
      icon: "fa-solid fa-server",
      gradient: "linear-gradient(135deg, #C62828 0%, #FF9AA2 100%)",
      subSkills: [
        {
          name: "Node.js",
          icon: "fa-brands fa-node-js",
          sections: {
            whatIKnow: "REST API design using Express and MVC pattern.",
            whatIWantToDo: "Build scalable apps with microservices and queues."
          }
        },
        {
          name: "Python",
          icon: "fa-brands fa-python",
          sections: {
            whatIKnow: "Scripting, Flask APIs, and automation.",
            whatIWantToDo: "Use Django for web apps and optimize Python backends."
          }
        },
        {
          name: "SQL",
          icon: "fa-solid fa-database",
          sections: {
            whatIKnow: "Schema design and query handling for plugins and apps.",
            whatIWantToDo: "Master complex joins, indexing, and performance tuning."
          }
        },
        {
          name: "MongoDB",
          iconType: "svg",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" id="mongodb"><path fill="currentColor" d="M22.797 14.562a13.663 13.663 0 0 0-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 0 0-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372l-.13-.327c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066-1.463 1.924-2.752 3.981-3.511 6.29a14.691 14.691 0 0 0-.517 2.056c-.259 1.481-.379 2.92-.296 4.42.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 0 0-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 0 0 1.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z"></path></svg>`,
          sections: {
            whatIKnow: "Used for NoSQL tasks in small projects.",
            whatIWantToDo: "Use in full-stack apps and learn aggregation and sharding."
          }
        }
      ]
    },

    design: {
      title: "Design",
      description: "UI/UX, wireframes, and brand visuals.",
      icon: "fa-solid fa-pencil-ruler",
      gradient: "linear-gradient(135deg, #FF1493 0%, #008080 100%)",
      subSkills: [
        {
          name: "UI/UX Design",
          icon: "fa-brands fa-figma",
          sections: {
            whatIKnow: "Wireframes, prototypes, and design delivery.",
            whatIWantToDo: "Enhance prototyping and user testing."
          }
        },
        {
          name: "Logo Design",
          icon: "fa-solid fa-palette",
          sections: {
            whatIKnow: "Minimal, brand-aligned logos using Illustrator/Figma.",
            whatIWantToDo: "Explore typography and scalable design systems."
          }
        }
      ]
    },

    other: {
      title: "Other Skills",
      description: "WordPress, Shopify, AR, and SEO knowledge.",
      icon: "fa-solid fa-toolbox",
      gradient: "linear-gradient(135deg, #2F4F4F 0%, #708090 100%)",
      subSkills: [
        {
          name: "WordPress",
          icon: "fa-brands fa-wordpress",
          sections: {
            whatIKnow: "Custom plugins, themes, Elementor integration.",
            whatIWantToDo: "Gutenberg blocks and SaaS-based WordPress tools."
          }
        },
        {
          name: "Shopify",
          icon: "fa-brands fa-shopify",
          sections: {
            whatIKnow: "Theme customization and store optimizations.",
            whatIWantToDo: "Master Liquid, APIs, and app creation."
          }
        },
        {
          name: "AR",
          icon: "fa-solid fa-vr-cardboard",
          sections: {
            whatIKnow: "Built marker-based AR with MindAR.js.",
            whatIWantToDo: "Explore WebXR, ARKit, and real-time interactions."
          }
        },
        {
          name: "SEO",
          icon: "fa-solid fa-magnifying-glass",
          sections: {
            whatIKnow: "Technical/on-page SEO and site performance.",
            whatIWantToDo: "Improve schema, analytics, and SSR SEO."
          }
        },
        {
          name: "Cordova",
          icon: "fa-brands fa-android",
          sections: {
            whatIKnow: "I can create Android applications using Cordova.",
            whatIWantToDo: "Learn to create and use custom Cordova plugins."
          }
        }
      ]
    }
  };

  const handleSkillClick = (skillKey) => {
    if (selectedSkill === skillKey) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skillKey);
    }
  };

  const handleSubSkillClick = (subSkill) => {
    setSelectedSubSkill(subSkill);
    setShowSkillModal(true);
  };

  const closeSkillModal = () => {
    setShowSkillModal(false);
    setSelectedSubSkill(null);
  };

  const renderSkillModal = () => {
    if (!showSkillModal || !selectedSubSkill) return null;

    return (
      <div className="skill-modal-overlay" onClick={closeSkillModal}>
        <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
          <div className="skill-modal-header">
            <div className="skill-modal-icon">
              {selectedSubSkill.iconType === "svg" ? (
                <span
                  className="sub-skill-icon"
                  dangerouslySetInnerHTML={{ __html: selectedSubSkill.icon }}
                />
              ) : (
                <i className={`${selectedSubSkill.icon} sub-skill-icon`} />
              )}
            </div>
            <h3 className="skill-modal-title">{selectedSubSkill.name}</h3>
            <button className="skill-modal-close" onClick={closeSkillModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="skill-modal-content">
            <div className="skill-modal-section">
              <h4 className="modal-section-title">What I Know</h4>
              <div className="modal-section-divider"></div>
              <p className="modal-section-content">{selectedSubSkill.sections.whatIKnow}</p>
            </div>
            
            <div className="skill-modal-section">
              <h4 className="modal-section-title">What I Want to Do</h4>
              <div className="modal-section-divider"></div>
              <p className="modal-section-content">{selectedSubSkill.sections.whatIWantToDo}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`skills-mobile-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="skills-mobile-header">
        <h2 className="skills-mobile-title">My Skillset</h2>
        <p className="skills-mobile-subtitle">Explore my technical expertise</p>
      </div>
      
      <div className="skills-mobile-grid">
        {Object.keys(skillsData).map((skillKey) => (
          <div
            key={skillKey}
            className={`skill-mobile-card ${selectedSkill === skillKey ? 'expanded' : ''}`}
          >
            <div 
              className="skill-card-header"
              style={{ background: skillsData[skillKey].gradient }}
              onClick={() => handleSkillClick(skillKey)}
            >
              <div className="skill-card-icon">
                <i className={skillsData[skillKey].icon}></i>
              </div>
              <h3 className="skill-card-title">{skillsData[skillKey].title}</h3>
              <div className={`expand-indicator ${selectedSkill === skillKey ? 'expanded' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className={`skill-card-content ${selectedSkill === skillKey ? 'visible' : ''}`}>
              <p className="skill-description">{skillsData[skillKey].description}</p>
              
              <div className="sub-skills-grid">
                {skillsData[skillKey].subSkills.map((subSkill, index) => (
                  <div
                    key={index}
                    className="sub-skill-item"
                    onClick={() => handleSubSkillClick(subSkill)}
                  >
                    <div className="sub-skill-icon">
                      {subSkill.iconType === "svg" ? (
                        <span
                          className="sub-skill-icon"
                          dangerouslySetInnerHTML={{ __html: subSkill.icon }}
                        />
                      ) : (
                        <i className={`${subSkill.icon} sub-skill-icon`} />
                      )}
                    </div>
                    <span className="sub-skill-name">{subSkill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {renderSkillModal()}
    </div>
  );
}; 