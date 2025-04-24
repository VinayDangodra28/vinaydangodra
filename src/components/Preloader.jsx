import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Preloader.css";

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
        textRef.current.innerHTML = typedText.replace(
          "portfolio@latest",
          `<span class="glitch">&nbsp;portfolio@latest</span>`
        );
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          gsap.to(textRef.current, {
            opacity: 0,
            scale: 0.95,
            filter: "blur(5px)",
            duration: 0.7,
            onComplete: () => setShowStraps(true),
          });
        }, 1000);
      }
    }, 50);

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
          duration: 1.2,
          ease: "power4.inOut",
          delay: order * 0.3,
        });

        if (order === pairs.length - 1) {
          gsap.fromTo(
            fullWidthStrapRef.current,
            { x: "-200%" },
            {
              x: "200%",
              duration: 3.5,
              ease: "power4.inOut",
              onComplete: () => setLoading(false),
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
