import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Animation variants
  const headerVariants = {
    initial: { y: -100 },
    animate: { 
      y: 0,
      transition: { 
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  const navItemVariants = {
    hover: { 
      scale: 1.1,
      color: "#3498db",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.1,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.header 
      className="header"
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <nav className="navbar">
        <motion.div 
          className="logo"
          variants={logoVariants}
          whileHover="hover"
        >
          <h2 onClick={() => scrollToSection('hero')} style={{cursor: 'pointer'}}>TaskFlow</h2>
        </motion.div>
        
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.span 
            className={`bar ${isMenuOpen ? 'active' : ''}`}
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          ></motion.span>
          <motion.span 
            className={`bar ${isMenuOpen ? 'active' : ''}`}
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          ></motion.span>
          <motion.span 
            className={`bar ${isMenuOpen ? 'active' : ''}`}
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          ></motion.span>
        </div>

        <motion.ul 
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          animate={isMenuOpen ? { x: 0 } : { x: "-100%" }}
          transition={{ type: "spring", damping: 20 }}
        >
          {['Features', 'Testimonials', 'Pricing'].map((item, index) => (
            <motion.li
              key={item}
              variants={navItemVariants}
              whileHover="hover"
              custom={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.button 
          className="cta-button desktop-only"
          onClick={() => scrollToSection('pricing')}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Get Started
        </motion.button>
      </nav>
    </motion.header>
  );
}

export default Header;