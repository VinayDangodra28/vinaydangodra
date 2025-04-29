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
    frontend: {
      title: "Frontend",
      description: "HTML, CSS, JavaScript, React.js, Solid.js, and GSAP for creating stunning user interfaces.",
      icon: "fa-solid fa-code",
      subSkills: [
        {
          name: "HTML",
          icon: "fa-brands fa-html5",
          sections: {
            whatIKnow: "I have advanced experience writing semantic, accessible HTML. I’ve worked extensively with meta tags, custom data attributes, and SEO optimization. I also use HTML to implement features like canvas and integrate it with JavaScript for interactive components.",
            whatIWantToDo: "Enhancing HTML for advanced use cases like progressive web apps (PWAs) and improving accessibility beyond the basics. Delve deeper into optimizing HTML for emerging technologies like Web Components."
          }
        },
        {
          name: "CSS",
          icon: "fa-brands fa-css",
          sections: {
            whatIKnow: "I am highly proficient with modern CSS techniques like Flexbox, Grid, and custom properties. I’ve designed responsive layouts and created CSS animations, which I often enhance using GSAP. My expertise lies in blending visual design with interactive functionality.",
            whatIWantToDo: "Exploring advanced CSS methodologies like CSS-in-JS for React-based projects and refining CSS for larger-scale applications. Adopting and implementing cutting-edge practices like Houdini and container queries."
          }
        },
        {
          name: "JavaScript",
          icon: "fa-brands fa-js",
          sections: {
            whatIKnow: "I am confident with vanilla JavaScript and have used it extensively for DOM manipulations, API integrations, and creating reusable components. I prefer frameworks like React and GSAP for larger, design-focused projects. I’ve also worked on headless WordPress integration with custom APIs.",
            whatIWantToDo: "Advanced JS features like Promises, async/await, and module bundling. Explore server-side JavaScript with Node.js and optimize JS for large-scale projects."
          }
        },
        {
          name: "React",
          icon: "fa-brands fa-react",
          sections: {
            whatIKnow: "I build projects from scratch for design-specific requirements and also work with existing codebases to save time. My expertise includes using components, hooks, and managing state effectively.",
            whatIWantToDo: "Deepening my understanding of Redux and large-scale state management. Optimize performance for enterprise-level React applications and implement React Server Components."
          }
        },
        {
          name: "GSAP",
          icon: "fa-solid fa-film",
          sections: {
            whatIKnow: "I specialize in creating all types of animations, including scroll-based effects, SVG animations, and interactive UI elements. I’m proficient with GSAP’s timelines and easing effects to create fluid transitions and animated logos.",
            whatIWantToDo: "Pushing GSAP boundaries with more advanced 3D animations and integrating it seamlessly with WebGL. Learn to optimize GSAP animations for performance on low-end devices."
          }
        }
      ]
    },
    backend: {
      title: "Backend",
      description: "Node.js, Express, RESTful APIs, and other backend frameworks for handling server logic.",
      icon: "fa-solid fa-server",
      subSkills: [
        {
          name: "Node.js",
          icon: "fa-brands fa-node-js",
          sections: {
            whatIKnow: "I have theoretical knowledge and understand how to structure APIs using frameworks like Express.js. I focus on maintaining code readability with MVC patterns for database and API integration.",
            whatIWantToDo: "Applying Node.js in real-world projects. Work on scalable backend solutions using Node.js and explore microservices."
          }
        },
        {
          name: "Python",
          icon: "fa-brands fa-python",
          sections: {
            whatIKnow: "I use Python for scripting, REST API development, and automation tasks like data cleaning, manipulation, and JSON creation. I have experience integrating Flask with machine learning codebases.",
            whatIWantToDo: "Building complex systems with Python frameworks and exploring advanced Flask features. Expand into Django for full-stack Python development and optimize Python for backend performance."
          }
        },
        {
          name: "SQL",
          icon: "fa-solid fa-database",
          sections: {
            whatIKnow: "I have hands-on experience writing SQL queries and designing database schemas, especially when developing WordPress plugins and themes.",
            whatIWantToDo: "Writing complex queries for advanced use cases and improving database optimization techniques. Expand my knowledge of relational database design for enterprise applications."
          }
        },
        {
          name: "MongoDB",
          iconType: "svg",
          icon: "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><g stroke-width='0'/><g stroke-linecap='round' stroke-linejoin='round'/><circle cx='512' cy='512' r='512' style='fill:#ffffff00'/><path d='M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a727 727 0 0 1 13-78.53l1-.65a204.5 204.5 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347 347 0 0 0-5.05-56.76M512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53'/></svg>",
          sections: {
            whatIKnow: "I have a basic understanding of MongoDB and NoSQL principles, primarily for simple backend tasks.",
            whatIWantToDo: "Implementing MongoDB in full-stack applications. Explore advanced MongoDB concepts like sharding and aggregation pipelines."
          }
        }
      ]
    },
    design: {
      title: "Design",
      description: "Figma, Adobe XD, and Sketch for UI/UX design and prototyping.",
      icon: "faPencilRuler",
      subSkills: [
        {
          name: "Figma",
          icon: "fa-brands fa-figma",
          sections: {
            whatIKnow: "I create website wireframes and high-fidelity prototypes to visualize website structure for clients and stakeholders. I use Figma to refine designs for personal and team projects.",
            whatIWantToDo: "Enhancing workflows for team collaboration and mastering advanced prototyping features. Explore more sophisticated user research and testing workflows to improve UX."
          }
        },
        {
          name: "Logo Design",
          icon: "fa-solid fa-palette",
          sections: {
            whatIKnow: "I design logos by understanding the brand’s identity and translating it into meaningful visuals. I use tools like Figma and Illustrator to create minimalistic, abstract, and unique designs that have been well-received by clients.",
            whatIWantToDo: "Improving my design techniques for creating scalable and responsive logos. Explore branding strategies and typography in greater depth."
          }
        }
      ]
    },
    other: {
      title: "Other Skills",
      description: "Additional skills including WordPress development, Shopify, AR, and SEO.",
      icon: "faToolbox",
      subSkills: [
        {
          name: "WordPress",
          icon: "fa-brands fa-wordpress",
          sections: {
            whatIKnow: "I develop custom WordPress themes and plugins, including reusable Elementor elements. I’ve created CRM/ERM functionalities for business websites and integrated WooCommerce into WordPress sites.",
            whatIWantToDo: "Enhancing site performance through advanced caching and optimizing database queries. Explore Gutenberg blocks and headless WordPress setups in greater detail."
          }
        },
        {
          name: "Shopify",
          icon: "fa-brands fa-shopify",
          sections: {
            whatIKnow: "I customize Shopify themes and assist with technical, design, and SEO-related improvements. My work includes creating custom sections and revamping existing Shopify stores.",
            whatIWantToDo: "Expanding my knowledge of Shopify’s Liquid templates and APIs. Learn about creating Shopify apps and integrating advanced analytics."
          }
        },
        {
          name: "AR",
          icon: "fa-solid fa-vr-cardboard",
          sections: {
            whatIKnow: "I’ve created simple web-based AR projects using MindAR.js, such as marker-based business cards.",
            whatIWantToDo: "Exploring more robust frameworks like WebXR. Build more interactive AR experiences and dive into ARCore and ARKit."
          }
        },
        {
          name: "SEO",
          icon: "fa-solid fa-magnifying-glass",
          sections: {
            whatIKnow: "I focus on technical and on-page SEO, ensuring websites are optimized for speed, proper metadata, and SEO-friendly structures.",
            whatIWantToDo: "Expanding knowledge in advanced technical SEO strategies like schema markup and server-side rendering. Explore SEO analytics tools deeply and refine content strategy for SEO-focused projects."
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