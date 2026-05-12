import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that animates a number from 0 to a target value when the element enters the viewport.
 */
export function useCountUp(target: number, duration = 2400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease-in-out sine: smooth S-curve
            const eased = -(Math.cos(Math.PI * progress) - 1) / 2;
            setCount(Math.round(eased * target));
            
            if (progress < 1) {
              rafId.current = requestAnimationFrame(step);
            }
          };
          
          rafId.current = requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(el);
    
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [target, duration]);

  return { count, ref };
}
