import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home/Home';
import Preloader from "./components/Preloader";
import { CursorProvider } from './components/CursorContext';
import Lenis from '@studio-freight/lenis';
import { ThemeProvider, ToggleButton } from './components/ToggleButton';

// Move these up so they're available to all components
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 1,
};

const DesktopApp = () => (
  <CursorProvider>
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <ToggleButton />
      <Home />
    </motion.div>
  </CursorProvider>
);

const MobileApp = () => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="in"
    exit="out"
    transition={pageTransition}
  >
    <ToggleButton />
    <Home />
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  // Prevent page scrolling via arrow keys, but allow arrow keys when
  // the user is focused on an editable element (input, textarea, or contentEditable).
  useEffect(() => {
    const handleKeyDown = (e) => {
      try {
        const target = e.target;
        const tag = target && target.tagName;
        const isEditable =
          (tag === 'INPUT') ||
          (tag === 'TEXTAREA') ||
          (target && target.isContentEditable);

        if (isEditable) return; // allow normal behavior inside editable elements

        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          e.preventDefault();
        }
      } catch (err) {
        // defensive: if anything unexpected happens, don't break the app
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown, { passive: false });
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {(loading && !isMobile) ? (
          <Preloader setLoading={setLoading} />
        ) : (
          <AnimatePresence mode="wait">
            {isMobile ? <MobileApp /> : <DesktopApp />}
          </AnimatePresence>
        )}  
      </div>
    </ThemeProvider>
  );
}

export default App;
