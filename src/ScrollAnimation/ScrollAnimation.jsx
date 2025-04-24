import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollAnimation.css';

gsap.registerPlugin(ScrollTrigger);


const ScrollAnimation = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const element = animationRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom bottom",
        scrub: true, // Smooth animation throughout the scroll
        pin: false, // Set true to make it stick while scrolling
      },
    })
      .fromTo(
        element,
        { opacity: 0, scale: 0.8, y: 100 },
        { opacity: 1, scale: 1, y: 0, ease: "none" }
      )
      .to(element, { opacity: 0, scale: 0.8, y: -100, ease: "none" });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={animationRef} className="animated-container">
      <h1 className="animated-title">Scroll Animation</h1>
      <p className="animated-text">
        This text animates as you scroll. It fades in, scales up, and then fades out.
      </p>
    </div>
  );
};

export default ScrollAnimation;
