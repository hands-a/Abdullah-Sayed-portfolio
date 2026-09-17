/**
 * Footer
 * Minimal footer with copyright and back-to-top button.
 */
export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="flex items-center justify-between flex-wrap gap-4 mx-auto"
      style={{
        maxWidth: 'var(--max-w)',
        padding: '2rem var(--pad-x)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <p className="font-mono text-[0.75rem] font-normal tracking-[0.15em] uppercase
                    text-[var(--color-faint)]">
        © 2026 Abdullah Sayed. All rights reserved.
      </p>

      <button
        onClick={scrollTop}
        className="font-mono text-[0.75rem] font-medium tracking-[0.15em] uppercase
                   text-[var(--color-muted)] hover:text-[var(--color-accent)]
                   transition-colors duration-300 flex items-center gap-2
                   min-h-[44px] cursor-pointer"
        aria-label="Scroll back to top"
      >
        ↑ Back to top
      </button>
    </footer>
  );
}
