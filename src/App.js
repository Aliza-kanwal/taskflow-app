import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import MobileGestures from './components/MobileGestures';
import Cursor from './components/Cursor';
import Particles from './components/Particles';
import './App.css';

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const sectionVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

function App() {
  // Scroll progress state
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Back to top button state
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Scroll progress listener
    const updateScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
      
      // Show/hide back to top button
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', updateScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading screen
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <h2>Loading TaskFlow...</h2>
      </div>
    );
  }

  return (
    <MobileGestures>
      <Cursor />
      <Particles />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-purple-200 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-purple-700 transition-all z-50 flex items-center justify-center text-2xl group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
          <span className="absolute -top-10 right-0 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Back to Top
          </span>
        </motion.button>
      )}

      {/* Main Content */}
      <motion.div 
        className="App"
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <Header />
        
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Features />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Testimonials />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Pricing />
        </motion.div>

        <Footer />

        {/* Floating Shapes Decoration */}
        <div className="fixed bottom-20 left-10 text-purple-200/20 text-7xl pointer-events-none animate-float">
          ⚡
        </div>
        <div className="fixed top-40 right-10 text-purple-200/20 text-8xl pointer-events-none animate-float-delay">
          ✦
        </div>
      </motion.div>
    </MobileGestures>
  );
}

export default App;