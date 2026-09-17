import { useRef, useCallback } from 'react';
import { useIsTouch } from '../../hooks/useMediaQuery';

const STRENGTH = 0.28;

/**
 * MagneticWrapper
 * Applies a subtle magnetic pull toward the mouse on hover.
 * Disabled on touch devices. Wraps any single child.
 */
export default function MagneticWrapper({ children, className = '' }) {
  const ref = useRef(null);
  const isTouch = useIsTouch();

  const onMouseMove = useCallback((e) => {
    if (isTouch || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const maxD = Math.max(r.width, r.height);
    if (dist < maxD) {
      const pull = (1 - dist / maxD) * STRENGTH;
      ref.current.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
    }
  }, [isTouch]);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)';
    ref.current.style.transform = '';
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = '';
    }, 650);
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block relative ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </span>
  );
}
