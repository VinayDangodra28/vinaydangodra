import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { Header } from './components/Header';
import AuroraBackground from './components/background/AuroraBackground';
// import { WhiteBackground } from './components/background/WhiteBackground';
import MazeGame from './components/MazeGame/MazeGame';
import Preloader from "./components/Preloader"; // Import Preloader
import { CursorProvider }  from './components/CursorContext';







function App() {

  const [loading, setLoading] = useState(true);


  const pageVariants = {
    initial: { opacity: 0 },  // Start fully transparent
    in: { opacity: 1 },       // Fade in to fully visible
    out: { opacity: 0 },      // Fade out to transparent
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1, // Adjust this for smoothness
  };

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <AuroraBackground /> */}
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
