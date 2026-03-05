import React from 'react';
import { motion } from 'framer-motion';
import './Skeleton.css';

function SkeletonCard({ type = 'feature' }) {
  if (type === 'feature') {
    return (
      <motion.div 
        className="skeleton-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="skeleton-icon pulse"></div>
        <div className="skeleton-title pulse"></div>
        <div className="skeleton-line pulse"></div>
        <div className="skeleton-line pulse short"></div>
      </motion.div>
    );
  }

  if (type === 'testimonial') {
    return (
      <motion.div 
        className="skeleton-testimonial"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="skeleton-avatar pulse"></div>
        <div className="skeleton-name pulse"></div>
        <div className="skeleton-quote pulse"></div>
        <div className="skeleton-quote pulse short"></div>
      </motion.div>
    );
  }

  if (type === 'pricing') {
    return (
      <motion.div 
        className="skeleton-pricing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="skeleton-plan pulse"></div>
        <div className="skeleton-price pulse"></div>
        <div className="skeleton-feature pulse"></div>
        <div className="skeleton-feature pulse"></div>
        <div className="skeleton-feature pulse"></div>
        <div className="skeleton-button pulse"></div>
      </motion.div>
    );
  }

  return null;
}

export default SkeletonCard;