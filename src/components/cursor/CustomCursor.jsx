import { useEffect, useRef, useState } from 'react';
import { useIsTouch } from '../../hooks/useMediaQuery';
import { useMousePosition } from '../../hooks/useMousePosition';

const lerp = (a, b, t) => a + (b - a) * t;

/**
 * CustomCursor
 * Renders the dot + trailing ring custom cursor system.
 * Fully disabled on touch devices (pointer: coarse).
 *
 * Body cursor state classes are applied here and read
 * by the CSS classes in index.css:
 *   .cursor-link    → view/open state
 *   .cursor-project → view project state (square ring)
 */
export default function CustomCursor() {
  const isTouch = useIsTouch();
  const mousePos = useMousePosition();
  const ringRef = useRef(null);
  const rafRef = useRef(null);
  const followerPos = useRef({ x: -200, y: -200 });
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  // Smooth follower via rAF lerp
  useEffect(() => {
    if (isTouch) return;

    const tick = () => {
      followerPos.current.x = lerp(followerPos.current.x, mousePos.x, 0.1);
      followerPos.current.y = lerp(followerPos.current.y, mousePos.y, 0.1);
      if (ringRef.current) {
        ringRef.current.style.left = followerPos.current.x + 'px';
        ringRef.current.style.top  = followerPos.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isTouch, mousePos]);

  // Cursor state management via event delegation
  useEffect(() => {
    if (isTouch) return;

    const onEnterLink = (e) => {
      const el = e.target.closest('a, button');
      const isProject = e.target.closest('.project-item');

      if (isProject) {
        setLabel('View');
        document.body.classList.add('cursor-project');
        document.body.classList.remove('cursor-link');
      } else if (el) {
        setLabel('Open');
        document.body.classList.add('cursor-link');
        document.body.classList.remove('cursor-project');
      }
    };

    const onLeave = (e) => {
      const el = e.target.closest('a, button, .project-item');
      const relatedEl = e.relatedTarget?.closest?.('a, button, .project-item');
      if (el && !relatedEl) {
        document.body.classList.remove('cursor-link', 'cursor-project');
        setLabel('');
      }
    };

    const onMouseEnterDoc = () => setVisible(true);
    const onMouseLeaveDoc = () => setVisible(false);

    document.addEventListener('mouseover', onEnterLink, { passive: true });
    document.addEventListener('mouseout', onLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnterDoc, { passive: true });
    document.addEventListener('mouseleave', onMouseLeaveDoc, { passive: true });

    return () => {
      document.removeEventListener('mouseover', onEnterLink);
      document.removeEventListener('mouseout', onLeave);
      document.removeEventListener('mouseenter', onMouseEnterDoc);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Dot — instant position */}
      <div
        className="cursor-dot"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Ring — smooth lerp position */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span className="cursor-ring-label">{label}</span>
      </div>
    </>
  );
}
