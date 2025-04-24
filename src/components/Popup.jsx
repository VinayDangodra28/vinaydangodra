import React from 'react';
import "./Popup.css";

const Popup = ({ selectedWork, onClose }) => {
  if (!selectedWork) return null;

  const workContent = {
    "experience-work": (
      <div>
        <h2>🚀 Experience</h2>
        <p><strong>Web Developer & Designer</strong></p>
        <p>🎯 Creo Elements LLP (June 2023 - Present)</p>
        <p>Started as an intern, now the sole web developer & designer, handling everything from design to deployment, SEO, and Google integrations.</p>
      </div>
    ),
    "web-work": (
      <div>
        <h2>💻 Web Development</h2>
        <ul>
          <li>🌐 <a href="http://creo-elements.com" target="_blank">Creo Elements</a> - Built with <strong>React, GSAP, and Headless WordPress</strong>.</li>
          <li>🛍️ <a href="http://littlethingscute.com" target="_blank">Little Things Cute</a> - E-commerce site using <strong>WordPress & WooCommerce</strong>, with custom <strong>PHP hooks</strong>.</li>
          <li>👨‍💻 <a href="http://dvinay.com" target="_blank">Dvinay.com</a> - This portfolio site, built with <strong>React & GSAP</strong>.</li>
        </ul>
      </div>
    ),
    "projects-work": (
      <div>
        <h2>🛠️ Projects</h2>
        <ul>
          <li>🎨 <strong>FlowTile</strong> - A <strong>React-based</strong> canvas tool for creating <strong>infinitely repeating patterns</strong>.</li>
          <li>🕶️ <strong>Creative Windows AR Card</strong> - A <strong>marker-based AR</strong> system using <strong>MindAR.js</strong>.</li> 
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
      <div className="more-logos">+ More</div>
    </div>
  </div>
),


    "sketch-work": (
      <div>
        <h2>✏️ Sketches</h2>
        <p>A collection of <strong>pencil sketches</strong> showcased in a stylish gallery.</p>
      </div>
    ),
    "github-work": (
      <div>
        <h2>📂 GitHub Contributions</h2>
        <p>Explore my open-source projects on <a href="https://github.com/dvinay" target="_blank">GitHub</a>.</p>
      </div>
    )
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        {workContent[selectedWork] || <h2>❓ Unknown Work</h2>}
      </div>
    </div>
  );
};

export default Popup;