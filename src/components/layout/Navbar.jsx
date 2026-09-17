import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useIsMobile } from '../../hooks/useMediaQuery';

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack',      label: 'Skills' },
  { href: '#contact',    label: 'Contact' },
];

/**
 * Navbar
 * Rules:
 *  - Always visible on initial load (scrollDir === 'top')
 *  - Hides only on scroll-down AND menu is closed
 *  - Never hides while mobile menu is open
 *  - Glass backdrop via rgba + blur
 *  - Scrollspy highlights active section
 *  - Mobile: full-screen overlay with stagger animation
 *  - Keyboard: ESC closes menu, focus trap on open
 */
export default function Navbar() {
  const scrollDir = useScrollDirection();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // CRITICAL: only hide when scrolling down AND menu is closed
  const isHidden = scrollDir === 'down' && !menuOpen;

  // Close menu when viewport becomes desktop
  useEffect(() => {
    if (!isMobile && menuOpen) setMenuOpen(false);
  }, [isMobile, menuOpen]);

  // ESC closes menu
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Body scroll lock when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Scrollspy
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const onScroll = () => {
      const y = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (y >= sections[i].offsetTop) {
          setActiveLink('#' + sections[i].id);
          return;
        }
      }
      setActiveLink('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* ── Nav Bar ── */}
      <motion.nav
        id="nav"
        aria-label="Main navigation"
        initial={{ y: 0 }}
        animate={{ y: isHidden ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[500]"
        style={{
          background: 'rgba(10, 10, 10, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div
          className="flex items-center justify-between mx-auto"
          style={{
            maxWidth: 'var(--max-w)',
            height: 'var(--nav-h)',
            padding: '0 var(--pad-x)',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleClick(e, '#')}
            aria-label="Back to top"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
              transition: 'color 0.3s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-secondary)'; }}
          >
            AS<span style={{ color: 'var(--color-accent)' }}>.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden sm:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = activeLink === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      position: 'relative',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--color-primary)' : 'var(--color-muted)',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-secondary)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-muted)';
                    }}
                  >
                    {label}
                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        style={{
                          position: 'absolute',
                          bottom: '-3px',
                          left: 0,
                          width: '100%',
                          height: '1px',
                          background: 'var(--color-accent)',
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            id="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`sm:hidden flex flex-col justify-center items-center gap-[6px] ${menuOpen ? 'nav-open' : ''}`}
            style={{ padding: '0.5rem', minWidth: '44px', minHeight: '44px', cursor: 'pointer' }}
          >
            <span className="nav-bar" />
            <span className="nav-bar" />
            <span className="nav-bar" />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-[498] flex flex-col"
            style={{
              background: 'var(--color-bg-2)',
              padding: 'calc(var(--nav-h) + 2rem) var(--pad-x) 3rem',
              overflowY: 'auto',
            }}
            initial={{ opacity: 0, x: '4%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '4%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col flex-1">
              {navLinks.map(({ href, label }, i) => (
                <li key={href} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <motion.a
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    className="flex items-center justify-between w-full"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                      color: 'var(--color-muted)',
                      padding: '1.25rem 0',
                      transition: 'color 0.25s',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; }}
                  >
                    <span>{label}</span>
                    <span style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}>↗</span>
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Footer info */}
            <div className="flex justify-between items-end mt-8 flex-wrap gap-4">
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  lineHeight: 1.9,
                }}
              >
                Abdullah Sayed<br />Frontend Developer
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                }}
              >
                © 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
