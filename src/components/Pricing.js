import React from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

function Pricing() {
  const pricingData = [
    {
      name: 'Free',
      price: '$0',
      features: ['5 projects', 'Basic boards', 'Community support'],
      popular: false
    },
    {
      name: 'Pro',
      price: '$12',
      features: ['Unlimited projects', 'Advanced boards', 'Priority support', 'Team collaboration'],
      popular: true
    },
    {
      name: 'Team',
      price: '$49',
      features: ['Everything in Pro', 'Team management', 'Admin tools', 'Dedicated support'],
      popular: false
    }
  ];

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 30px 40px rgba(102, 126, 234, 0.3)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <motion.h2 
          className="pricing-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        
        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <motion.div 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {plan.popular && (
                <motion.div 
                  className="popular-badge"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Most Popular
                </motion.div>
              )}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    custom={i}
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    ✓ {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                className={`plan-button ${plan.popular ? 'popular-button' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;