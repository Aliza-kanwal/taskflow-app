import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Styles
  const styles = {
    footer: {
      backgroundColor: '#1a1a1a',
      color: '#fff',
      padding: '4rem 1rem 1rem',
      marginTop: '2rem'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr',
      gap: '2rem',
      marginBottom: '3rem'
    },
    brandColumn: {
      gridColumn: 'span 1'
    },
    logo: {
      fontSize: '2rem',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    description: {
      color: '#999',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    heading: {
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
      color: '#fff',
      position: 'relative'
    },
    headingAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '0',
      width: '40px',
      height: '2px',
      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
    },
    list: {
      listStyle: 'none',
      padding: 0
    },
    listItem: {
      marginBottom: '0.8rem'
    },
    link: {
      color: '#999',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    linkHover: {
      color: '#8B5CF6'
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem'
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      background: '#333',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.2rem',
      transition: 'transform 0.3s, background 0.3s'
    },
    bottomBar: {
      paddingTop: '2rem',
      borderTop: '1px solid #333',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    copyright: {
      color: '#666',
      fontSize: '0.9rem'
    },
    legalLinks: {
      display: 'flex',
      gap: '2rem'
    },
    legalLink: {
      color: '#666',
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'color 0.3s'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand Column */}
          <div style={styles.brandColumn}>
            <h2 
              style={styles.logo}
              onClick={scrollToTop}
            >
              TaskFlow
            </h2>
            <p style={styles.description}>
              Organize your tasks, boost your productivity, and achieve your goals with TaskFlow.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 style={styles.heading}>Product</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="#features" style={styles.link}>Features</a></li>
              <li style={styles.listItem}><a href="#pricing" style={styles.link}>Pricing</a></li>
              <li style={styles.listItem}><a href="#download" style={styles.link}>Download</a></li>
              <li style={styles.listItem}><a href="#updates" style={styles.link}>Updates</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 style={styles.heading}>Company</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="#about" style={styles.link}>About Us</a></li>
              <li style={styles.listItem}><a href="#careers" style={styles.link}>Careers</a></li>
              <li style={styles.listItem}><a href="#press" style={styles.link}>Press</a></li>
              <li style={styles.listItem}><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 style={styles.heading}>Resources</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="#blog" style={styles.link}>Blog</a></li>
              <li style={styles.listItem}><a href="#guides" style={styles.link}>Guides</a></li>
              <li style={styles.listItem}><a href="#support" style={styles.link}>Support</a></li>
              <li style={styles.listItem}><a href="#developers" style={styles.link}>Developers</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 style={styles.heading}>Follow Us</h3>
            <div style={styles.socialIcons}>
              <motion.a 
                href="#" 
                style={styles.socialIcon}
                whileHover={{ scale: 1.2, backgroundColor: '#8B5CF6' }}
                whileTap={{ scale: 0.9 }}
              >
                in
              </motion.a>
              <motion.a 
                href="#" 
                style={styles.socialIcon}
                whileHover={{ scale: 1.2, backgroundColor: '#8B5CF6' }}
                whileTap={{ scale: 0.9 }}
              >
                𝕏
              </motion.a>
              <motion.a 
                href="#" 
                style={styles.socialIcon}
                whileHover={{ scale: 1.2, backgroundColor: '#8B5CF6' }}
                whileTap={{ scale: 0.9 }}
              >
                📷
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            © 2024 TaskFlow. All rights reserved.
          </p>
          <div style={styles.legalLinks}>
            <a href="#privacy" style={styles.legalLink}>Privacy Policy</a>
            <a href="#terms" style={styles.legalLink}>Terms of Service</a>
            <a href="#cookies" style={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;