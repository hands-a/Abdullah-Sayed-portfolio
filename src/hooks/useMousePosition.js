import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useMousePosition
 * Returns the current mouse { x, y } position.
 * Only initialised on non-touch (pointer: fine) devices.
 */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const isTouch = useRef(
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );

  const onMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
    // Update spotlight CSS variables
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
  }, []);

  useEffect(() => {
    if (isTouch.current) return;
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [onMove]);

  return pos;
}
