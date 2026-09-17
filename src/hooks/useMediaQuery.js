import { useState, useEffect } from 'react';

/**
 * useMediaQuery
 * Returns true when the given media query matches.
 * SSR-safe (defaults to false on server).
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener('change', onChange);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

// Convenience exports
export const useIsTouch = () => useMediaQuery('(pointer: coarse)');
export const useIsMobile = () => useMediaQuery('(max-width: 640px)');
export const useIsTablet = () => useMediaQuery('(max-width: 900px)');
