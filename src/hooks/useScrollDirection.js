import { useState, useEffect, useRef } from 'react';

/**
 * useScrollDirection
 * Returns 'up' | 'down' | 'top' based on scroll position.
 * Used to reliably show/hide the navbar.
 *
 * Rules:
 *  - 'top'  → scrollY < threshold (always show nav)
 *  - 'down' → scrollY increased by > downThreshold px
 *  - 'up'   → scrollY decreased by > upThreshold px
 */
export function useScrollDirection({
  threshold = 80,    // below this scrollY, always show
  downThreshold = 8, // must scroll down this much to hide
  upThreshold = 4,   // must scroll up this much to show
} = {}) {
  const [direction, setDirection] = useState('top');
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < threshold) {
        setDirection('top');
      } else if (y > lastY.current + downThreshold) {
        setDirection('down');
      } else if (y < lastY.current - upThreshold) {
        setDirection('up');
      }

      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, downThreshold, upThreshold]);

  return direction;
}
