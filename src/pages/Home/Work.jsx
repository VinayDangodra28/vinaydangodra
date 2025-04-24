import React, { useState } from 'react';

export const Work = ({ onCardClick }) => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

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

  const handleCardClick = (id) => {
    onCardClick(id);
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-frame">
        <div className="work-section">
          <div className="work-title section-title">
            <span>The Divergent Work</span>
          </div>
          <div className="work-wrapper">

            {/* Work Experience */}
            <div className="work-row">
              <div className="work-card big-attract" id="experience-work" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => handleCardClick('experience-work')}>
                <div className="circle" style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }}/>
                <div className="work-text">Experience</div>
              </div>
            </div>

            <div className="work-row">
              
            {/* Websites */}
              <div className="work-card big-attract" id="web-work" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => handleCardClick('web-work')}>
                <div className="circle" style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }} />
                <div className="work-text">Web Development</div>
              </div>
              
            {/* Projects */}
              <div className="work-card big-attract" id="projects-work" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => handleCardClick('projects-work')}>
                <div className="circle" style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }} />
                <div className="work-text">Projects</div>
              </div>
            </div>


            <div className="work-row">
            {/* Graphic Design */}
              <div className="work-card big-attract" id="graphic-work" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => handleCardClick('graphic-work')}>
                <div className="circle" style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }} />
                <div className="work-text">Graphic Design</div>
              </div>
              <div className="work-card big-attract" id="sketch-work" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => handleCardClick('sketch-work')}>
                <div className="circle" style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }} />
                <div className="work-text">Sketches</div>
              </div>
            </div>
            {/* GitHub */}
            <div className="work-row">
              <a href="https://github.com/VinayDangodra28/" className="work-card big-attract" id="github-work" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="circle" style={{ top: `${circlePosition.y}px`, left: `${circlePosition.x}px` }} />
                <div className="work-text">GitHub</div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
