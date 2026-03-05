import React, { useState, useEffect } from 'react';
import SkeletonCard from './SkeletonCard';

function WithSkeleton({ children, type = 'feature', loading = false }) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (loading) {
      setShowSkeleton(true);
    } else {
      // Simulate minimum loading time for smooth transition
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (showSkeleton) {
    return (
      <div className="skeleton-wrapper">
        <SkeletonCard type={type} />
      </div>
    );
  }

  return children;
}

export default WithSkeleton;