import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Counter({ end, duration = 2000, label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(percentage * end));
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="counter text-center">
      <div className="counter-number text-3xl font-bold text-purple-600">
        {count.toLocaleString()}+
      </div>
      <div className="counter-label text-gray-600">
        {label}
      </div>
    </div>
  );
}

export default Counter;