import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ProjectOverlay
 * Full-screen case study. Framer Motion enter/exit.
 * ESC to close, body scroll locked while open.
 * ARIA dialog accessible.
 */
export default function ProjectOverlay({ project, onClose }) {
  const isOpen = !!project;

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} — Case Study`}
          className="fixed inset-0 z-[800] overflow-y-auto"
          style={{ background: 'var(--color-bg)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="fixed z-[810] flex items-center gap-2
                       transition-colors duration-300 cursor-none"
            style={{
              top: '1.5rem',
              right: 'var(--pad-x)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-s)',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              minHeight: '44px',
              minWidth: '44px',
              padding: '0.5rem 0',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; }}
            aria-label="Close case study"
          >
            Close &times;
          </button>

          {/* Content */}
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: 'clamp(5rem, 10vw, 7rem) var(--pad-x) var(--section-gap)',
            }}
          >
            {/* Meta */}
            <motion.p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-mono)',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1rem',
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {project.num} — Case Study
            </motion.p>

            {/* Title */}
            <motion.h2
              className="font-display font-extrabold uppercase tracking-[-0.02em] leading-[0.9]"
              style={{
                fontSize: 'clamp(2rem, 6vw, 5rem)',
                color: 'var(--color-primary)',
                marginBottom: '2.5rem',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {project.name}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              style={{
                fontSize: 'var(--text-body-l)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'var(--color-secondary)',
                marginBottom: '2.5rem',
                maxWidth: '52ch',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
            >
              {project.tagline}
            </motion.p>

            {/* Hero image */}
            <motion.div
              style={{ marginBottom: '3rem', borderRadius: '2px', overflow: 'hidden' }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.65 }}
            >
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="w-full"
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                loading="eager"
              />
            </motion.div>

            {/* Case study sections */}
            <div className="flex flex-col" style={{ gap: '2.5rem' }}>
              {[
                { label: '01 — Overview',  text: project.description },
                { label: '02 — Challenge', text: project.challenge },
                { label: '03 — Solution',  text: project.solution },
              ].map(({ label, text }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-mono)',
                      fontWeight: 500,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent)',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-body-m)',
                      fontWeight: 400,
                      lineHeight: 1.8,
                      color: 'var(--color-secondary)',
                      maxWidth: '60ch',
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}

              {/* Tech stack */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem',
                  }}
                >
                  04 — Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-mono)',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                        border: '1px solid rgba(201,169,110,0.3)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '2px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {project.url && project.url !== '#' && (
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 transition-all duration-300"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body-s)',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-primary)',
                      border: '1px solid var(--color-border-hi)',
                      padding: '0.85rem 1.75rem',
                      minHeight: '48px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-accent)';
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.color = 'var(--color-bg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '';
                      e.currentTarget.style.borderColor = 'var(--color-border-hi)';
                      e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                    aria-label={`View ${project.name} live — opens in new tab`}
                  >
                    View Live Project ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
