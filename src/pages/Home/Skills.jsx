import React, { useState } from 'react';

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState({
    title: 'Skill Title',
    description: 'Skill Description',
  });

  const [activeSubSkill, setActiveSubSkill] = useState({
    name: '',
    icon: '',
    iconType: '',
    whatIKnow: '',
    whatIWantToDo: '',
  });

  const skillsData = {
    "frontend": {
      "title": "Frontend",
      "description": "HTML, CSS, JavaScript, React.js, Solid.js, and GSAP for building smooth, responsive user interfaces.",
      "icon": "fa-solid fa-code",
      "subSkills": [
        {
          "name": "HTML",
          "icon": "fa-brands fa-html5",
          "sections": {
            "whatIKnow": "Advanced semantic and accessible HTML with custom data attributes and canvas integration. Experienced in SEO-friendly markup.",
            "whatIWantToDo": "Focus on progressive web apps, improved accessibility, and emerging tech like Web Components."
          }
        },
        {
          "name": "CSS",
          "icon": "fa-brands fa-css",
          "sections": {
            "whatIKnow": "Proficient with Flexbox, Grid, responsive layouts, and CSS animations enhanced by GSAP. Skilled in combining design with interactivity.",
            "whatIWantToDo": "Explore CSS-in-JS, Houdini, container queries, and advanced styling for large-scale projects."
          }
        },
        {
          "name": "JavaScript",
          "icon": "fa-brands fa-js",
          "sections": {
            "whatIKnow": "Strong with vanilla JS for DOM manipulation, APIs, and reusable components.",
            "whatIWantToDo": "Deepen knowledge of async patterns, modular code, and server-side JavaScript with Node.js."
          }
        },
        {
          "name": "React",
          "icon": "fa-brands fa-react",
          "sections": {
            "whatIKnow": "I Can Build projects from scratch and works with existing codebases using components, hooks, and state management.",
            "whatIWantToDo": "Improve Redux skills, optimize performance, and learn React Server Components."
          }
        },
        {
          "name": "GSAP",
          "icon": "fa-solid fa-film",
          "sections": {
            "whatIKnow": "Specializes in animations including scroll effects, SVG, and UI transitions using GSAP timelines and easing.",
            "whatIWantToDo": "Push into advanced 3D animations and integrate GSAP with WebGL while optimizing performance."
          }
        }
      ]
    },
    "backend": {
      "title": "Backend",
      "description": "Node.js, Express, RESTful APIs, and databases for building scalable backend solutions.",
      "icon": "fa-solid fa-server",
      "subSkills": [
        {
          "name": "Node.js",
          "icon": "fa-brands fa-node-js",
          "sections": {
            "whatIKnow": "Understands API structuring with Express and MVC patterns for clean, maintainable code.",
            "whatIWantToDo": "Apply Node.js in real projects, focusing on scalability and microservices."
          }
        },
        {
          "name": "Python",
          "icon": "fa-brands fa-python",
          "sections": {
            "whatIKnow": "Uses Python for scripting, REST APIs, automation, and integrating ML codebases with Flask.",
            "whatIWantToDo": "Build complex systems with Flask and Django, and optimize backend Python performance."
          }
        },
        {
          "name": "SQL",
          "icon": "fa-solid fa-database",
          "sections": {
            "whatIKnow": "Experienced writing queries and designing schemas, especially for WordPress plugins and themes.",
            "whatIWantToDo": "Master complex queries and optimize relational databases for enterprise apps."
          }
        },
        {
          "name": "MongoDB",
          "iconType": "svg",
          "icon": "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><g stroke-width='0'/><g stroke-linecap='round' stroke-linejoin='round'/><circle cx='512' cy='512' r='512' style='fill:#ffffff00'/><path d='M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a727 727 0 0 1 13-78.53l1-.65a204.5 204.5 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347 347 0 0 0-5.05-56.76M512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53'/></svg>",
          "sections": {
            "whatIKnow": "Basic knowledge of MongoDB and NoSQL for simple backend tasks.",
            "whatIWantToDo": "Use MongoDB in full-stack apps and learn advanced features like sharding and aggregation."
          }
        }
      ]
    },
    "design": {
      "title": "Design",
      "description": "Figma, Adobe XD, and Sketch for UI/UX design and prototyping.",
      "icon": "faPencilRuler",
      "subSkills": [
        {
          "name": "UI/UX Design",
          "icon": "fa-brands fa-figma",
          "sections": {
            "whatIKnow": "Creates wireframes and high-fidelity prototypes for clients and teams.",
            "whatIWantToDo": "Improve team collaboration and master advanced prototyping and user testing."
          }
        },
        {
          "name": "Logo Design",
          "icon": "fa-solid fa-palette",
          "sections": {
            "whatIKnow": "Designs logos that reflect brand identity using Figma and Illustrator with minimalistic, abstract styles.",
            "whatIWantToDo": "Enhance skills in scalable logo design and explore branding and typography."
          }
        }
      ]
    },
    "other": {
      "title": "Other Skills",
      "description": "Skills in WordPress, Shopify, AR, and SEO.",
      "icon": "faToolbox",
      "subSkills": [
        {
          "name": "WordPress",
          "icon": "fa-brands fa-wordpress",
          "sections": {
            "whatIKnow": "Can Develop custom themes and plugins, including Elementor elements and WooCommerce integrations.",
            "whatIWantToDo": "Focus on performance optimization, Gutenberg blocks and SAAS type setup."
          }
        },
        {
          "name": "Shopify",
          "icon": "fa-brands fa-shopify",
          "sections": {
            "whatIKnow": "Customizes themes and improves design, technical, and SEO aspects of stores.",
            "whatIWantToDo": "Learn Shopify Liquid templates, APIs, and app development."
          }
        },
        {
          "name": "AR",
          "icon": "fa-solid fa-vr-cardboard",
          "sections": {
            "whatIKnow": "Built simple marker-based AR projects with MindAR.js.",
            "whatIWantToDo": "Explore WebXR and advanced AR platforms like ARCore and ARKit."
          }
        },
        {
          "name": "SEO",
          "icon": "fa-solid fa-magnifying-glass",
          "sections": {
            "whatIKnow": "Focus on technical and on-page SEO including site speed and metadata.",
            "whatIWantToDo": "Advance knowledge of schema markup, server-side rendering, and SEO analytics."
          }
        }
      ]
    }
  };


  const handleSubSkillHover = (subSkill) => {
    setActiveSubSkill({
      name: subSkill.name,
      icon: subSkill.icon,
      iconType: subSkill.iconType,
      whatIKnow: subSkill.sections.whatIKnow,
      whatIWantToDo: subSkill.sections.whatIWantToDo,
    });
  };

  return (
    <div className="skills-section-wrapper">
      <div className="skills-frame">
        <div className="skills-section a_section">
          <h2 className="skills-title section-title">My Skillset</h2>
          <div className="skills-list">
            {Object.keys(skillsData).map((key) => (
              <div className="skill-wrapper" key={key}>
                <div className="skill" id={key}>
                  <div className="skill-title">
                    <i className={`${skillsData[key].icon} skill-icon`}></i> {/* Skill icon */}
                    {skillsData[key].title}
                  </div>
                  <div className="sub-skills">
                    {skillsData[key].subSkills.map((subSkill, index) => (
                      <div
                        className="sub-skill-card attract"
                        key={index}
                        onMouseEnter={() => handleSubSkillHover(subSkill)}
                      >
                        {/* Conditional rendering for SVG or class-based icons */}
                        {subSkill.iconType === "svg" ? (
                          <span
                            className="sub-skill-icon"
                            dangerouslySetInnerHTML={{ __html: subSkill.icon }}
                          />
                        ) : (
                          <i className={`${subSkill.icon} sub-skill-icon`} />
                        )}
                        {subSkill.name}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="skill-details">
            {activeSubSkill.name ? (
              <>
                <h3 className="subskill-title">
                  {activeSubSkill.iconType === "svg" ? (
                    <span
                      className="svg-icon"
                      dangerouslySetInnerHTML={{ __html: activeSubSkill.icon }}
                    />
                  ) : (
                    <i className={activeSubSkill.icon}></i>
                  )}
                  {activeSubSkill.name}
                </h3>

                <div className="subskill-description">
                  <div className="section">
                    <h4>What I Know</h4>
                    <p>{activeSubSkill.whatIKnow}</p>
                  </div>
                  <div className="section">
                    <h4>What I Want to Do</h4>
                    <p>{activeSubSkill.whatIWantToDo}</p>
                  </div>
                </div>
              </>
            ) : (
              <p>Hover over a sub-skill to see details.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};