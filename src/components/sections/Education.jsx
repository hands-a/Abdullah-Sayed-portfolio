import SectionLabel from '../ui/SectionLabel';
import RevealUp from '../animation/RevealUp';

/**
 * Education Section
 * CV-accurate: Egyptian E-Learning University, BSc CS, Expected May 2028.
 * No exaggeration of degree or graduation status.
 */
export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: 'var(--section-gap) var(--pad-x)' }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionLabel>04 — Education</SectionLabel>

        <RevealUp>
          <div
            className="grid gap-8 lg:gap-16"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            }}
          >
            {/* Degree block */}
            <div>
              {/* School name */}
              <div style={{ marginBottom: '1.25rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: '0.75rem',
                  }}
                >
                  2022 — Expected May 2028
                </p>
                <h2
                  className="font-display font-extrabold tracking-[-0.02em] uppercase leading-[0.9]"
                  style={{
                    fontSize: 'var(--text-display-l)',
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  EELU
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-l)',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Bachelor of Science in Computers and Information
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-s)',
                    fontWeight: 400,
                    color: 'var(--color-secondary)',
                  }}
                >
                  Egyptian E-Learning University · Egypt
                </p>
              </div>

              {/* Status badge */}
              <span className="edu-badge">In Progress — Expected May 2028</span>
            </div>

            {/* Right: detail */}
            <div className="flex flex-col gap-6">
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Programme Focus
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-body-m)',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: 'var(--color-secondary)',
                    maxWidth: '44ch',
                  }}
                >
                  Computer Science fundamentals with a focus on programming principles,
                  data structures, OOP, and software engineering. Complementing my
                  academic studies with active frontend development work and the DEPI
                  government training programme.
                </p>
              </div>

              {/* Relevant areas */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Relevant Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Object-Oriented Programming',
                    'Data Structures',
                    'Algorithms',
                    'SQL & Databases',
                    'Software Engineering',
                    'Java Programming',
                  ].map((area) => (
                    <span key={area} className="skill-tag">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealUp>
      </div>
    </section>
  );
}
