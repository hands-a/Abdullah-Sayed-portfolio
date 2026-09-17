import SectionLabel from '../ui/SectionLabel';
import RevealUp from '../animation/RevealUp';
import { stack } from '../../data/stack';

/**
 * Stack Section
 * 4 CV-accurate technology categories.
 * Includes Languages (Java, SQL, TypeScript) and Backend (Strapi, PostgreSQL).
 */
export default function Stack() {
  return (
    <section
      id="stack"
      style={{
        padding: 'var(--section-gap) var(--pad-x)',
        background: 'var(--color-bg-2)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionLabel>05 — Skills</SectionLabel>

        <RevealUp>
          <h2
            className="font-display font-extrabold tracking-[-0.02em] uppercase leading-[0.9]"
            style={{
              fontSize: 'var(--text-display-l)',
              color: 'var(--color-primary)',
              marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Tech Stack
          </h2>
        </RevealUp>

        {/* 4-category grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: '1px solid var(--color-border)' }}
        >
          {stack.map((cat, i) => (
            <RevealUp key={cat.id} delay={i * 0.08}>
              <div
                style={{
                  padding: 'clamp(1.25rem, 3vw, 2rem)',
                  borderRight: i < stack.length - 1 ? '1px solid var(--color-border)' : 'none',
                  height: '100%',
                }}
              >
                {/* Category label */}
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {cat.category}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealUp>
          ))}
        </div>

        {/* Bottom note */}
        <RevealUp delay={0.35}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-mono)',
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: 'var(--color-muted)',
              marginTop: '1.75rem',
              maxWidth: '52ch',
              lineHeight: 1.7,
            }}
          >
            Technologies listed are those actively used in documented projects or formally
            studied. No technologies are listed for marketing purposes only.
          </p>
        </RevealUp>
      </div>
    </section>
  );
}
