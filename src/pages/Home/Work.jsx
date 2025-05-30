import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GithubProjects from "../../components/GithubProjects"; // Adjust path accordingly



gsap.registerPlugin(ScrollTrigger);

// All work sections and projects in a single array of objects
const workSections = [
  {
    id: 'experience-work',
    title: 'Experience',
    circleGradient: 'radial-gradient(#3eb8a2, transparent, transparent)',
    content: (
      <div className="experience-work">
        <div className="ex">
          <h3>Web Developer & Designer</h3>
          <p className="company">🎯 Creo Elements LLP (June 2023 - Present)</p>
        </div>
        <p className="description">
          Started as an intern, now the sole web developer & designer, handling everything from design to deployment, SEO, and Google integrations.
        </p>
      </div>
    )
  },
  {
    id: 'project-flowtile',
    title: 'FlowTile',
    circleGradient: 'radial-gradient(#00bcd4, transparent, transparent)',
    content: (
      <div className="projects-work">
        <ul className="project-list">
          <li>
            <a href="https://flowtile.vercel.app/" target="_blank" className="experience-work" rel="noopener noreferrer">
              <div className="ex">
                <div className='project-title'>
                  <img src="/logos/flowtile.png" alt="FlowTile" />
                  <h3>FlowTile</h3>
                </div>
                <p className="company logos">
                  <span className="sub-skill-icon" key="react">
                    <svg width="800" height="800" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.313 22.211c.55.025 1.112.043 1.681.043q.863.002 1.7-.043a24 24 0 0 1-1.689 1.964l.008-.008a25 25 0 0 1-1.659-1.902zm-5.698-.8c1.083.275 2.404.509 3.752.653l.131.011a30 30 0 0 0 2.554 3.068l-.011-.012a9 9 0 0 1-5.081 2.86l-.055.008h-.012a1.5 1.5 0 0 1-.687-.169l.008.004c-.832-.475-1.193-2.292-.912-4.627.067-.575.177-1.18.312-1.797zm14.783-.013c.118.474.229 1.078.308 1.692l.009.086c.287 2.334-.067 4.149-.892 4.634a1.3 1.3 0 0 1-.638.162l-.069-.002h.003a9.08 9.08 0 0 1-5.129-2.841l-.007-.008a29 29 0 0 0 2.466-2.965l.058-.084a29 29 0 0 0 4.088-.717zM9.784 17.666c.25.49.512.978.8 1.468q.431.731.881 1.428a27 27 0 0 1-2.507-.482 27 27 0 0 1 .825-2.416zm12.428-.025c.331.821.612 1.64.845 2.434-.8.196-1.645.362-2.519.487a32 32 0 0 0 1.676-2.922zM7.619 12.292a29 29 0 0 0 1.449 3.906l-.075-.182a27 27 0 0 0-1.305 3.499l-.052.205a17 17 0 0 1-1.827-.669l.115.044c-2.164-.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c.525-.225 1.1-.428 1.694-.617zm16.739-.005q.91.282 1.718.622c2.164.925 3.564 2.134 3.564 3.094-.006.96-1.406 2.174-3.57 3.093-.525.225-1.1.427-1.693.616a29.4 29.4 0 0 0-1.451-3.912l.076.188a27 27 0 0 0 1.303-3.498l.053-.206zm-3.828-.843c.869.129 1.706.287 2.507.484-.225.79-.506 1.602-.825 2.416a32 32 0 0 0-1.681-2.899zm-9.072 0c-.3.471-.6.953-.88 1.45q-.42.731-.794 1.467a26 26 0 0 1-.845-2.433c.8-.187 1.643-.354 2.518-.482zM16 11.126c.925 0 1.846.042 2.752.116q.761 1.091 1.478 2.324.697 1.2 1.272 2.432a34 34 0 0 1-1.266 2.437c-.475.825-.966 1.61-1.475 2.337a32 32 0 0 1-5.514.006 34 34 0 0 1-1.478-2.324q-.697-1.2-1.272-2.432a32 32 0 0 1 1.266-2.442 31 31 0 0 1 1.475-2.334q1.366-.121 2.762-.122zm-.019-3.281c.58.6 1.136 1.237 1.659 1.901l.04.053a37 37 0 0 0-1.681-.042q-.863-.002-1.7.042a24 24 0 0 1 1.689-1.964l-.008.008zM9.88 4.033a9.1 9.1 0 0 1 5.129 2.841l.007.008A29 29 0 0 0 12.55 9.85l-.058.084a28.5 28.5 0 0 0-4.086.714l.196-.042a19 19 0 0 1-.317-1.774c-.287-2.334.067-4.149.892-4.632.206-.097.447-.157.701-.165h.003zm12.21-.025v.008l.044-.001c.239 0 .464.059.662.163l-.008-.004c.832.477 1.193 2.293.912 4.629a19 19 0 0 1-.312 1.799 27 27 0 0 0-3.754-.656l-.128-.011a30 30 0 0 0-2.555-3.07l.012.012a9.04 9.04 0 0 1 5.074-2.859l.056-.009zm.006-1.362a10.24 10.24 0 0 0-6.1 3.268l-.008.009a10.22 10.22 0 0 0-6.051-3.245l-.056-.007h-.045c-.491 0-.952.129-1.351.355l.014-.007c-1.718.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-.88 3.89-.487 6.983 1.235 7.973.378.217.832.344 1.315.344l.065-.001h-.003a10.24 10.24 0 0 0 6.1-3.27l.008-.009a10.22 10.22 0 0 0 6.051 3.246l.056.007h.052c.488 0 .947-.128 1.344-.351l-.014.007c1.717-.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039.88-3.886.487-6.982-1.235-7.973a2.7 2.7 0 0 0-1.328-.348h-.039.002zm-3.309 13.359a2.794 2.794 0 1 1-.818-1.976c.506.506.818 1.204.818 1.976"/></svg>
                  </span>
                  <span className="sub-skill-icon" key="redux">
                    <svg width="800" height="800" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025s.125 11.61 1.151 18.64c6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.7 4.7 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325m52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5"/></svg>
                  </span>
                  <span className="sub-skill-icon" key="css">
                    <svg width="800" height="800" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2.5c-1.026 0-1.908.277-2.6.87-.688.59-1.137 1.447-1.387 2.516a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863.294-.135.611-.162.975-.065.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156.582.359 1.305.6 2.264.6 1.026 0 1.908-.277 2.6-.87.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863-.294.135-.611.162-.975.065-.366-.098-.65-.386-1.095-.87l-.015-.016c-.336-.365-.745-.81-1.305-1.156-.582-.359-1.305-.6-2.264-.6M4 7c-1.026 0-1.908.277-2.6.87C.712 8.46.263 9.317.013 10.386a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863.294-.135.611-.162.975-.065.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156.582.359 1.305.6 2.264.6 1.026 0 1.908-.277 2.6-.87.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863-.294.135-.611.162-.975.065-.366-.098-.65-.386-1.095-.87l-.015-.016c-.335-.365-.745-.81-1.305-1.156C5.682 7.24 4.959 7 4 7" fill="#000"/></svg>
                  </span>
                </p>
              </div>
              <p className="description">
                A React-based canvas tool for creating infinitely repeating patterns.
              </p>
            </a>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'project-arcard',
    title: 'AR Card',
    circleGradient: 'radial-gradient(#ff9800, transparent, transparent)',
    content: (
      <div className="projects-work">
        <ul className="project-list">
          <li>
            <a href="https://petal-honeysuckle-quince.glitch.me/" target="_blank" className="experience-work" rel="noopener noreferrer">
              <div className="ex">
                <div className='project-title'>
                  <h3>AR Card</h3>
                </div>
                <p className="company logos">
                  <span className="sub-skill-icon" key="js">
                    <svg width="800" height="800" viewBox="-1 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.435 6H5.812l.206 2h8.212c-.12 1.752-.484 5.464-.618 7.153l-4.613 1.298v.004l-.01.005-4.615-1.624L4.058 11H6.32l.16 2.063L8.993 14H9l2.51-.9.258-3.1h-7.81c-.038-.401-.524-5.608-.608-6h11.288c-.063.66-.127 1.338-.202 2M0 0l1.638 18.148L8.99 20l7.37-1.889L18 0z" fillRule="evenodd"/></svg>
                  </span>
                  <span className="sub-skill-icon" key="threejs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 512 512" xmlSpace="preserve"><path d="m483.111.501-42.59 461.314-184.524 49.684L71.47 461.815 28.889.501zM397.29 94.302H111.866l6.885 55.708h144.78l-7.7 3.205-132.07 55.006 4.38 54.453 127.69.414 68.438.217-4.381 72.606-64.058 18.035v-.057l-.525.146-61.864-15.617-3.754-45.07h-57.789l7.511 87.007 116.423 34.429v-.062l.21.062 115.799-33.802 15.021-172.761H255.509l.323-.14 135.83-58.071z"/></svg>
                  </span>
                  <span className="sub-skill-icon" key="css2">
                    <svg width="800" height="800" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.328 18.432c-1.745 0-2.873-.832-3.423-1.92l1.53-.886c.403.658.926 1.141 1.853 1.141.778 0 1.275-.389 1.275-.926 0-.808-1.078-1.124-1.839-1.45-1.356-.577-2.256-1.302-2.256-2.833 0-1.409 1.074-2.483 2.753-2.483 1.194 0 2.054.416 2.671 1.503l-1.463.94c-.322-.577-.671-.805-1.208-.805-.551 0-.9.349-.9.805 0 .564.349.792 1.155 1.141 1.689.724 2.967 1.293 2.967 3.155 0 1.692-1.329 2.618-3.115 2.618M11 15.599c0 1.947-1.199 2.976-2.864 2.976-1.504 0-2.405-.575-2.848-1.575h-.026l1.529-1.069c.295.523.561.894 1.205.894.618 0 1.004-.313 1.004-1.252V9h2zM0 20h20V0H0z" fillRule="evenodd"/></svg>
                  </span>
                </p>
              </div>
              <p className="description">
                A marker-based AR system using MindAR.js.
              </p>
            </a>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'graphic-work',
    title: 'Graphics',
    circleGradient: 'radial-gradient(#FFD700, transparent, transparent)',
    content: (
      <div className="graphic-work">
        <div className="graphic-grid">
          <img src="/logos/creative-windows.png" alt="Creative Windows" />
          <img src="/logos/creotap.png" alt="CreoTAP" />
          <img src="/logos/flowtile.png" alt="FlowTile" />
          <img src="/logos/bakedwithlove.png" alt="bakedwithlove" />
          <img src="/logos/dvinay.png" alt="dvinay" />
        </div>
      </div>
    )
  },
  {
    id: 'sketch-work',
    title: 'Sketches',
    circleGradient: 'radial-gradient(#4d4d4d, transparent, transparent)',
    content: (
      <div className="sketch-work">
        <p>A collection of <strong>pencil sketches</strong> showcased in a stylish gallery.</p>
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
            setActivecircle(entry.target.id);
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
                <div className="work-content" ref={workContentRef}>
                  {activeCard && getSection(activeCard).content}
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
