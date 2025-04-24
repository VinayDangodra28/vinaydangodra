import React, { useEffect, useRef } from 'react';
import './AuroraBackground.css'; // Assuming the CSS is in a separate file

const AuroraBackground = ({ children }) => {
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   const context = canvas.getContext('2d');
  //   let numStars = 0;
  //   const stars = [];
  //   let speed = 1;

  //   let mouseX = canvas.width / 2;
  //   let mouseY = canvas.height / 2;

  //   const createStar = () => {
  //     let x, y;
  //     do {
  //       x = Math.random() * canvas.width;
  //       y = Math.random() * canvas.height;
  //     } while (Math.hypot(x - mouseX, y - mouseY) < 3);

  //     return {
  //       x,
  //       y,
  //       z: Math.random() * canvas.width,
  //       o: Math.random(),
  //       size: Math.random() * 3 + 2, // Random size between 3 and 6
  //     };
  //   };

  //   const populateStars = () => {
  //     stars.length = 0;
  //     for (let i = 0; i < numStars; i++) {
  //       stars.push(createStar());
  //     }
  //   };

  //   const handleMouseMove = (event) => {
  //     const smoothingFactor = 0.6; // Reduce the speed of movement
  //     mouseX += (event.clientX - mouseX) * smoothingFactor;
  //     mouseY += (event.clientY - mouseY) * smoothingFactor;
  //   };

  //   const handleKeyDown = (event) => {
  //     if (event.code === 'ArrowUp' || event.code === 'KeyW') {
  //       speed += 1;
  //     } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
  //       speed = Math.max(1, speed - 1);
  //     } else if (event.code === 'NumpadAdd') {
  //       numStars += 100;
  //       populateStars();
  //     } else if (event.code === 'NumpadSubtract') {
  //       numStars = Math.max(100, numStars - 100);
  //       populateStars();
  //     }
  //   };

  //   const updateStars = () => {
  //     context.clearRect(0, 0, canvas.width, canvas.height);

  //     for (let star of stars) {
  //       star.z -= speed;

  //       if (star.z <= 0) {
  //         Object.assign(star, createStar());
  //         star.z = canvas.width;
  //       }

  //       // Adjust star position to move with the mouse in the same direction
  //       const sx = (star.x + mouseX) * (canvas.width / star.z) - mouseX * 2;
  //       const sy = (star.y + mouseY) * (canvas.width / star.z) - mouseY * 2;

  //       const size = (1 - star.z / canvas.width) * star.size;
  //       context.fillStyle = 'white';
  //       context.fillRect(sx, sy, size, size);
  //     }

  //     requestAnimationFrame(updateStars);
  //   };

  //   populateStars();
  //   updateStars();

  //   window.addEventListener('mousemove', handleMouseMove);
  //   // window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     // window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  return (
    <div className="aurora-background">
      <div className="aurora"></div>
      <div className="aurora"></div>
      <div className="aurora"></div>
      <div className="aurora"></div>
      {/* <canvas ref={canvasRef} className="fixed-background"></canvas>
      {children} */}
    </div>
  );
};

export default AuroraBackground;
