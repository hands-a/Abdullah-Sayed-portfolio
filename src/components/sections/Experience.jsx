import SectionLabel from '../ui/SectionLabel';
import RevealUp from '../animation/RevealUp';
import { experience } from '../../data/experience';

/**
 * Experience Section
 * 3 CV-documented roles: iSchool, CIB, DEPI.
 * All dates, titles, and descriptions are CV-verified only.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: 'var(--section-gap) var(--pad-x)',
        background: 'var(--color-bg-2)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionLabel>03 — Experience</SectionLabel>

        <div
          className="flex items-end justify-between flex-wrap gap-4"
          style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <h2
            className="font-display font-extrabold tracking-[-0.02em] uppercase leading-[0.9]"
            style={{ fontSize: 'var(--text-display-l)', color: 'var(--color-primary)' }}
          >
            Work &<br />Training
          </h2>
        </div>

        {/* Timeline list */}
        <div className="flex flex-col">
          {experience.map((item, i) => (
            <RevealUp key={item.id} delay={i * 0.1}>
              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns: 'min(4rem, 15%) 1fr',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem) 0',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                {/* Left: index + dot */}
                <div className="flex flex-col items-center gap-2 pt-[0.15rem]">
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-mono)',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {i < experience.length - 1 && (
                    <div
                      className="flex-1"
                      style={{
                        width: '1px',
                        minHeight: '2rem',
                        background: 'var(--color-border)',
                        marginTop: '0.5rem',
                      }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div>
                  {/* Period + type badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-mono)',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {item.period}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-muted)',
                        border: '1px solid var(--color-border)',
                        padding: '0.1rem 0.55rem',
                        borderRadius: '2px',
                      }}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Role */}
                  <h3
                    className="font-display font-bold tracking-[-0.01em] leading-[1.1]"
                    style={{
                      fontSize: 'var(--text-display-m)',
                      color: 'var(--color-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.role}
                  </h3>

                  {/* Company */}
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body-s)',
                      fontWeight: 500,
                      color: 'var(--color-secondary)',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {item.company}
                    <span style={{ color: 'var(--color-muted)', marginLeft: '0.5rem' }}>
                      · {item.location}
                    </span>
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 'var(--text-body-m)',
                      fontWeight: 400,
                      lineHeight: 1.75,
                      color: 'var(--color-secondary)',
                      maxWidth: '56ch',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Skills (DEPI only) */}
                  {item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.skills.map((skill) => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom border on last item */}
              {i === experience.length - 1 && (
                <div style={{ borderBottom: '1px solid var(--color-border)' }} />
              )}
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
