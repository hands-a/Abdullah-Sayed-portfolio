import SectionLabel from '../ui/SectionLabel';
import RevealUp from '../animation/RevealUp';

/**
 * Contact Section
 * Direct, professional contact CTA.
 * No fake testimonials, no fake client list.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        padding: 'var(--section-gap) 0',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Decorative bg word */}
      <p className="contact-bg-word" aria-hidden="true">
        Hello
      </p>

      <div
        className="relative z-[1]"
        style={{
          padding: '0 var(--pad-x)',
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <SectionLabel>06 — Contact</SectionLabel>

        {/* Headline */}
        <RevealUp>
          <h2
            className="font-display font-extrabold tracking-[-0.02em] uppercase leading-[0.9]"
            style={{
              fontSize: 'clamp(2.5rem, 9vw, 9rem)',
              color: 'var(--color-primary)',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            Let's Build<br />
            <span style={{ color: 'var(--color-accent)' }}>Something</span>
          </h2>
        </RevealUp>

        {/* Content grid */}
        <div
          className="grid gap-10 lg:gap-20"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          }}
        >
          {/* Email */}
          <RevealUp delay={0.1}>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginBottom: '1rem',
                }}
              >
                Get in touch
              </p>

              <a
                href="mailto:abdullahsayed.devo@gmail.com"
                className="email-link"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
                  fontWeight: 500,
                  color: 'var(--color-primary)',
                  marginBottom: '1.5rem',
                  wordBreak: 'break-all',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; }}
                aria-label="Send email to Abdullah Sayed"
              >
                abdullahsayed.devo@gmail.com
              </a>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-mono)',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  lineHeight: 1.9,
                  color: 'var(--color-muted)',
                }}
              >
                Open to freelance work,<br />
                full-time opportunities,<br />
                and technical collaborations.
              </p>
            </div>
          </RevealUp>

          {/* Social links */}
          <RevealUp delay={0.2}>
            <nav aria-label="Social and external links">
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginBottom: '0.5rem',
                }}
              >
                Elsewhere
              </p>

              {[
                { name: 'GitHub', url: 'https://github.com/hands-a', arrow: '↗', external: true },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-sayed-mahmoud-7950a431a/', arrow: '↗', external: true },
                { name: 'WhatsApp', url: 'https://wa.me/201146557073', arrow: '↗', external: true },
                { name: 'Download CV', url: '/resume.pdf', arrow: '↓', external: false, download: 'Abdullah_Sayed_CV.pdf' },
              ].map(({ name, url, arrow, external, download }) => (
                <a
                  key={name}
                  href={url}
                  target={external ? '_blank' : '_self'}
                  rel={external ? 'noopener noreferrer' : undefined}
                  download={download || undefined}
                  className="flex items-center justify-between group"
                  style={{
                    padding: '0.9rem 0',
                    borderBottom: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-s)',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--color-secondary)',
                    transition: 'color 0.3s, padding-left 0.3s',
                    minHeight: '52px',
                  }}
                  aria-label={`${name} — ${download ? 'download' : 'opens in new tab'}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                    e.currentTarget.style.paddingLeft = '0.5rem';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-secondary)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  <span>{name}</span>
                  <span style={{ fontSize: '1.1rem' }}>{arrow}</span>
                </a>
              ))}
            </nav>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
