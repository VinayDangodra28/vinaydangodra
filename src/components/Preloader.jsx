import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Preloader.css";

// Configuration: adjust speeds
const TEXT_SPEED = 30; // ms per character (faster typing)
const ANIMATION_SPEED = 0.6; // seconds base animation speed (controls strap and full-width durations)
const TEXT_PAUSE = 1000; // ms pause after text animation completes before straps start

const Preloader = ({ setLoading }) => {
  const preloaderRef = useRef(null);
  const strapsRef = useRef([]);
  const textRef = useRef(null);
  const fullWidthStrapRef = useRef(null);
  const [showStraps, setShowStraps] = useState(false);

  useEffect(() => {
    const text = "npm installing portfolio@latest...";
    let typedText = "";
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        typedText += text[index];
        textRef.current.innerHTML = typedText;
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          gsap.to(textRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            onComplete: () => setShowStraps(true),
          });
        }, TEXT_PAUSE);
      }
    }, TEXT_SPEED);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (showStraps) {
      const pairs = [
        [0, 1],
        [4, 5],
        [2, 3],
        [6, 7],
      ];

      pairs.forEach((pair, order) => {
        gsap.to(pair.map((index) => strapsRef.current[index]), {
          x: "105%",
          duration: ANIMATION_SPEED,
          ease: "power4.inOut",
          delay: order * (ANIMATION_SPEED / 4),
        });

        if (order === pairs.length - 1) {
          gsap.fromTo(
            fullWidthStrapRef.current,
            { x: "-200%" },
            {
              x: "200%",
              duration: ANIMATION_SPEED * 3,
              ease: "power4.inOut",
              onComplete: () => {
                gsap.to(preloaderRef.current, {
                  opacity: 0,
                  duration: ANIMATION_SPEED,
                  ease: "power2.inOut",
                  onComplete: () => setLoading(false)
                });
              },
            }
          );
        }
      });
    }
  }, [showStraps, setLoading]);

  return (
    <div className="gsap-preloader" ref={preloaderRef}>
      {!showStraps && (
        <div className="install-text" ref={textRef}></div>
      )}

      {showStraps && (
        <>
          {[...Array(8)].map((_, index) => (
            <div className="strap-wrapper" key={index}>
              <div
                className="strap"
                ref={(el) => (strapsRef.current[index] = el)}
              ></div>
            </div>
          ))}
          <div className="full-width-strap" ref={fullWidthStrapRef}></div>
        </>
      )}
    </div>
  );
};

export default Preloader;