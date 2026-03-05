import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

function Testimonials() {
  const testimonialsData = [
  {
    name: 'Fatima Khan',
    role: 'Product Manager at Careem',
    content: 'TaskFlow has transformed how I manage my daily tasks. The analytics feature helps me track my team\'s productivity like never before.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Ali Raza',
    role: 'Senior Developer at Systems Limited',
    content: 'As a developer, staying organized is crucial. TaskFlow\'s reminders ensure I never miss a deadline. Best productivity tool I\'ve used!',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Sara Ahmed',
    role: 'Creative Director at Daraz',
    content: 'The intuitive interface and powerful features make TaskFlow stand out. My entire team loves it!',
    rating: 5,
    avatar: '🎨'
  }
];

  return (
    <motion.section 
      className="testimonials" 
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="testimonials-container">
        <motion.h2 
          className="testimonials-title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 10 }}
        >
          What Our Users Say
        </motion.h2>
        
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              className="testimonial-card"
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="testimonial-rating"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {'⭐'.repeat(testimonial.rating)}
              </motion.div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <motion.div 
                  className="testimonial-avatar"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;