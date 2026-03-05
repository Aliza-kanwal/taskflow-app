import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Features.css';
import Counter from './Counter';

function Features() {
  const [loading, setLoading] = useState(true);
  
  const featuresData = [
    {
      icon: '📋',
      title: 'Task Boards',
      description: 'Create and organize tasks easily with drag-and-drop boards.'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Track your productivity with beautiful charts and insights.'
    },
    {
      icon: '🔔',
      title: 'Smart Reminders',
      description: 'Never miss important tasks with customizable alerts.'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  if (loading) {
    return (
      <section className="features" id="features">
        <div className="features-container">
          <h2 className="features-title">Loading Amazing Features...</h2>
          <div className="features-grid">
            {[1, 2, 3].map(i => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-icon pulse"></div>
                <div className="skeleton-title pulse"></div>
                <div className="skeleton-line pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="features" id="features">
      <div className="features-container">
        <motion.h2 
          className="features-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Powerful Features
        </motion.h2>
        
        <motion.p 
          className="features-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Everything you need to stay organized and boost productivity
        </motion.p>
        
        {/* Stats Grid */}
        <div className="stats-grid">
          <Counter end={50000} label="Happy Users" />
          <Counter end={1000000} label="Tasks Completed" />
          <Counter end={98} label="Satisfaction Rate %" />
        </div>
        
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#8B5CF6"
            >
              <motion.div 
                className="feature-card"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;