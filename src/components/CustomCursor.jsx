import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";
import './CustomCursor.css';




// useCursor Hook Usage  in the parent component:
// Returns a ref to the CustomCursor component, allowing control over its behavior.  
// Example:  
// const cursorRef = useCursor();  
// cursorRef.current?.stopAttraction(); // Disables cursor attraction  
// cursorRef.current?.startAttraction(); // Enables cursor attraction 





const CustomCursor = forwardRef((_, ref) => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const cursorRingRef = useRef(null);

  let isAttracted = true;
  let isOscillating = true;

  useImperativeHandle(ref, () => ({
    stopAttraction: () => { isAttracted = false; },
    startAttraction: () => { isAttracted = true; },
    stopOscillation: () => { isOscillating = false; },
    startOscillation: () => { isOscillating = true; }
  }));

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current || !cursorRingRef.current) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const cursorRing = cursorRingRef.current;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let previousMouse = { x: mouse.x, y: mouse.y };
    let followerPos = { x: mouse.x, y: mouse.y };
    let currentScale = 0;
    let currentAngle = 0;
    let oscillationFactor = 0;

    gsap.set([cursor, follower, cursorRing], { x: mouse.x, y: mouse.y });

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const attractElements = document.querySelectorAll(".attract, .big-attract");
    attractElements.forEach((el) => {
      el.addEventListener("mouseenter", () => { isAttracted = false; });
      el.addEventListener("mouseleave", () => { isAttracted = true; });
    });

    const getClosestAttractElement = () => {
      const attractElements = [...document.querySelectorAll(".attract, .big-attract")];
      let closestElement = null;
      let minDist = Infinity;

      attractElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        let dx = elCenter.x - followerPos.x;
        let dy = elCenter.y - followerPos.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < minDist) {
          minDist = dist;
          closestElement = el;
        }
      });

      return closestElement;
    };

    gsap.ticker.add(() => {
      gsap.set(cursor, { x: mouse.x, y: mouse.y });
      gsap.set(cursorRing, { x: mouse.x, y: mouse.y });

      let deltaX = mouse.x - previousMouse.x;
      let deltaY = mouse.y - previousMouse.y;
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      let velocity = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 8, 150);
      let scaleValue = (velocity / 150) * 0.5;
      currentScale += (scaleValue - currentScale) * 0.2;

      let angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      if (velocity > 20) {
        currentAngle = angle;
      }

      let closestElement = getClosestAttractElement();
      let attractionForce = { x: 0, y: 0 };
      let isNearAttract = false;
      let attractDirection = { x: 0, y: 0 };

      if (isAttracted && closestElement) {
        const rect = closestElement.getBoundingClientRect();
        let elCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        let dx = elCenter.x - followerPos.x;
        let dy = elCenter.y - followerPos.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        let maxAttractionDistance = closestElement.classList.contains("big-attract") ? 600 : 300;

        if (dist < maxAttractionDistance) {
          isNearAttract = true;
          attractDirection.x = dx / dist;
          attractDirection.y = dy / dist;

          let proximityFactor = 1 - dist / maxAttractionDistance;
          let force = proximityFactor * 1;
          attractionForce.x = dx * force;
          attractionForce.y = dy * force;
        }
      }

      if (isNearAttract && isOscillating) {
        oscillationFactor += 0.05;
        let oscillationStrength = Math.sin(oscillationFactor * 5) * 5;
        followerPos.x += attractDirection.x * oscillationStrength;
        followerPos.y += attractDirection.y * oscillationStrength;
      }

      followerPos.x += (mouse.x - followerPos.x) * 0.2 + attractionForce.x * 0.1;
      followerPos.y += (mouse.y - followerPos.y) * 0.2 + attractionForce.y * 0.1;

      gsap.set(follower, {
        x: followerPos.x,
        y: followerPos.y,
        scaleX: 1 + currentScale,
        scaleY: 1 - currentScale,
        rotation: currentAngle,
      });
    });
  }, []);

  return (
    <div>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="follower" />
      <div ref={cursorRingRef} className="cursor-ring" />
      <style>{`body { cursor: none; }`}</style>
    </div>
  );
});

export default CustomCursor;
