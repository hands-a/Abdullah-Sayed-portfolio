import { useEffect, useRef } from 'react';

/**
 * GrainOverlay
 * Renders the film grain noise texture as a fixed overlay.
 * Uses rAF throttled to every 3 frames for performance.
 */
export default function GrainOverlay() {
  const ref = useRef(null);
  const frame = useRef(0);

  useEffect(() => {
    let raf;
    const tick = () => {
      frame.current++;
      if (frame.current % 3 === 0 && ref.current) {
        const x = (Math.random() - 0.5) * 18;
        const y = (Math.random() - 0.5) * 18;
        ref.current.style.transform = `translate(${x}%, ${y}%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <div ref={ref} className="grain-overlay" aria-hidden="true" />;
}
