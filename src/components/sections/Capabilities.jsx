import SectionLabel from '../ui/SectionLabel';
import RevealUp from '../animation/RevealUp';
import { capabilities } from '../../data/capabilities';

/**
 * Capabilities Section
 * List of capability rows with gold fill sweep on hover.
 */
export default function Capabilities() {
  return (
    <section
      id="capabilities"
      style={{ padding: 'var(--section-gap) 0' }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <div style={{ padding: '0 var(--pad-x)' }}>
          <SectionLabel>04 — Capabilities</SectionLabel>
          <RevealUp>
            <h2
              className="font-display font-extrabold leading-[0.92] tracking-[-0.02em]
                         uppercase text-[var(--color-primary)] mb-6"
              style={{ fontSize: 'var(--text-display-l)' }}
            >
              What I<br />Build
            </h2>
          </RevealUp>
        </div>

        {/* List */}
        <div className="mt-6">
          {capabilities.map((cap, i) => (
            <RevealUp key={cap.id} delay={i * 0.06}>
              <div
                className="capability-item group"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <div
                  className="capability-inner relative flex items-center justify-between
                             cursor-default"
                  style={{
                    padding: 'clamp(1rem,2vw,1.5rem) var(--pad-x)',
                    minHeight: '80px',
                  }}
                >
                  {/* Gold sweep */}
                  <div className="capability-sweep" aria-hidden="true" />

                  {/* Name */}
                  <span
                    className="font-display font-bold tracking-[-0.01em] uppercase
                               text-[var(--color-primary)] group-hover:text-[var(--color-bg)]
                               relative z-[1] transition-colors duration-350"
                    style={{ fontSize: 'var(--text-display-m)' }}
                  >
                    {cap.name}
                  </span>

                  {/* Number */}
                  <span
                    className="font-mono text-[0.75rem] font-medium tracking-[0.2em]
                               text-[var(--color-muted)] group-hover:text-[rgba(0,0,0,0.45)]
                               relative z-[1] transition-colors duration-350 flex-shrink-0"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Last border */}
                {i === capabilities.length - 1 && (
                  <div style={{ borderBottom: '1px solid var(--color-border)' }} />
                )}
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
