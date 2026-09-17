import { motion } from 'framer-motion';
import RevealUp from '../animation/RevealUp';

const nameLines = ['Abdullah', 'Sayed'];

const lineVariants = {
  hidden: { y: '105%' },
  visible: (i) => ({
    y: 0,
    transition: { duration: 1.05, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const roles = [
  'React Developer',
  'Frontend Engineer',
  '3D Web & Three.js',
  'TypeScript & JS',
];

/**
 * Hero Section
 * Communicates: who (Abdullah Sayed), what (Frontend Developer /
 * Software Engineering Student), key skills, and availability.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{
        minHeight: '100svh',
        paddingTop: 'var(--nav-h)',
        paddingBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
      }}
    >
      {/* Decorative grid lines — purely visual */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="hero-bg-line" />
        <div className="hero-bg-line" />
        <div className="hero-bg-line" />
      </div>

      {/* Rotated year label */}
      <p
        className="absolute top-1/2 z-0 pointer-events-none select-none whitespace-nowrap"
        style={{
          right: 'calc(var(--pad-x) - 0.75rem)',
          transform: 'translateY(-50%) rotate(90deg)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-mono)',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-faint)',
        }}
        aria-hidden="true"
      >
        Frontend 2026
      </p>

      {/* Main content */}
      <div className="relative z-[2]" style={{ padding: '0 var(--pad-x)' }}>

        {/* Status row */}
        <RevealUp className="flex flex-wrap items-center gap-5 mb-6">
          <span
            className="flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-mono)',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
            }}
          >
            <span className="available-dot" aria-hidden="true" />
            Available for work
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-mono)',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
            }}
          >
            Egypt
          </span>
        </RevealUp>

        {/* Name — clipped slide reveal */}
        <h1
          className="font-display font-extrabold uppercase leading-[0.88] tracking-[-0.02em]"
          style={{ fontSize: 'var(--text-hero)', color: 'var(--color-primary)' }}
          aria-label="Abdullah Sayed"
        >
          {nameLines.map((line, i) => (
            <div key={line} className="hero-name-clip">
              <motion.span
                className="block"
                initial="hidden"
                animate="visible"
                custom={i}
                variants={lineVariants}
              >
                {/* Last 2 chars of "Sayed" rendered as outline */}
                {i === 1 ? (
                  <>
                    {line.slice(0, -2)}
                    <span
                      className="text-transparent"
                      style={{ WebkitTextStroke: '2px rgba(201,169,110,0.4)' }}
                      aria-hidden="true"
                    >
                      {line.slice(-2)}
                    </span>
                  </>
                ) : line}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Bottom info row */}
        <div
          className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_auto] gap-8 items-end"
        >
          {/* Role + tagline */}
          <RevealUp delay={0.3}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-l)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'var(--color-secondary)',
                maxWidth: '42ch',
              }}
            >
              <strong style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Frontend Developer
              </strong>{' '}
              &amp; Software Engineering Student.{' '}
              Building React applications, 3D web experiences, and interactive UIs.
            </p>
          </RevealUp>

          {/* Services list */}
          <RevealUp delay={0.4} className="hidden sm:block">
            <ul
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-mono)',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                lineHeight: 2.6,
              }}
            >
              {roles.map((r) => (
                <li
                  key={r}
                  className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors duration-300 cursor-default"
                >
                  <span style={{ color: 'var(--color-accent)', opacity: 0.6 }}>—</span>
                  {r}
                </li>
              ))}
            </ul>
          </RevealUp>

          {/* Scroll hint */}
          <RevealUp delay={0.5} className="hidden lg:flex flex-col items-center gap-3">
            <div className="scroll-line" aria-hidden="true" />
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-mono)',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-faint)',
                writingMode: 'vertical-rl',
              }}
            >
              Scroll
            </p>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
