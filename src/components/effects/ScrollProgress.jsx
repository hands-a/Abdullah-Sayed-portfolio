import { useEffect, useRef } from 'react';

/**
 * ScrollProgress
 * 1px fixed top bar showing read progress.
 * Uses CSS custom property for smooth width via CSS transition.
 */
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (ref.current) ref.current.style.setProperty('--progress', pct + '%');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}
