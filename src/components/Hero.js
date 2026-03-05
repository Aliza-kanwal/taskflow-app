import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      className="hero" 
      id="hero"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="wave"></div>
      <div className="wave wave2"></div>
      <div className="hero-container">
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Organize Your Tasks <br />
          <motion.span 
            className="hero-highlight"
            animate={floatingAnimation}
          >
            With Ease
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          TaskFlow helps you manage your daily tasks, boost productivity, 
          and achieve your goals faster than ever.
        </motion.p>
        
        <motion.button 
          className="hero-button"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 30px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Start Free Trial
        </motion.button>
        
        <motion.p 
          className="hero-small-text"
          variants={itemVariants}
        >
          No credit card required
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Hero;