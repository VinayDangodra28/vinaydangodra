import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home/Home';
import Preloader from "./components/Preloader";
import { CursorProvider } from './components/CursorContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple mobile width check
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  if (isMobile) {
    return (
      <div className="App mobile-unavailable">
        <h2>Sorry, this website is only available on desktop for now.</h2>
      </div>
    );
  }

  return (
    <div className="App">
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <AnimatePresence mode="wait">
          <CursorProvider>
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          </CursorProvider>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
