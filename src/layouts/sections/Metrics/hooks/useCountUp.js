import { useState, useEffect } from 'react';

export const useCountUp = (target, duration = 2000, startAnimate = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimate) return;

    let start = 0;
    const increment = target / (duration / 16); // 16ms aprox por frame (60fps)

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, startAnimate]);

  return count;
};