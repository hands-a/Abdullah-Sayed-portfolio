import SectionLabel from '../ui/SectionLabel';
import RevealUp from '../animation/RevealUp';
import { stats, socials } from '../../data/capabilities';

/**
 * About Section
 * CV-accurate: CS student at EELU, DEPI trainee, React + 3D focus.
 * No fabricated personal stories, companies, or metrics.
 */
export default function About() {
  return (
    <section
      id="about"
      style={{ padding: 'var(--section-gap) var(--pad-x)' }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionLabel>01 — About</SectionLabel>

        <div
          className="grid gap-12 lg:gap-20"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          }}
        >

          {/* ── LEFT: Statement ── */}
          <div>
            <RevealUp>
              <h2
                className="font-display font-extrabold tracking-[-0.02em] uppercase leading-[0.9] mb-8"
                style={{ fontSize: 'var(--text-display-l)', color: 'var(--color-primary)' }}
              >
                Building for<br />
                <span style={{ color: 'var(--color-accent)' }}>the web</span>
              </h2>
            </RevealUp>

            <RevealUp delay={0.1}>
              <p
                style={{
                  fontSize: 'var(--text-lead)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: 'var(--color-secondary)',
                  maxWidth: '42ch',
                  marginBottom: '1.5rem',
                }}
              >
                I'm a{' '}
                <strong style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  Frontend Developer
                </strong>{' '}
                and Computer Science student at the Egyptian E-Learning University, with a strong focus on the React ecosystem and modern web engineering.
              </p>
            </RevealUp>

            <RevealUp delay={0.15}>
              <p
                style={{
                  fontSize: 'var(--text-body-l)',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: 'var(--color-secondary)',
                  maxWidth: '44ch',
                  marginBottom: '1.5rem',
                }}
              >
                Through the{' '}
                <strong style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
                  Digital Egypt Builders Initiative (DEPI)
                </strong>
                , I completed an intensive front-end development programme, solidifying my foundations in React, JavaScript, and professional development practices.
              </p>
            </RevealUp>

            <RevealUp delay={0.2}>
              <p
                style={{
                  fontSize: 'var(--text-body-m)',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: 'var(--color-secondary)',
                  maxWidth: '44ch',
                  marginBottom: '2.5rem',
                }}
              >
                I'm expanding into full-stack development — studying Java and SQL alongside my frontend work — with a particular interest in{' '}
                <strong style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                  3D web experiences
                </strong>{' '}
                using React Three Fiber and Three.js.
              </p>
            </RevealUp>

            {/* Soft skills */}
            <RevealUp delay={0.25}>
              <div
                style={{
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '1.5rem',
                }}
              >
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
                  Languages & Soft Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Arabic (Native)', 'English (Professional)', 'Logical Problem Solving', 'Adaptability', 'Effective Communication'].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </RevealUp>
          </div>

          {/* ── RIGHT: Bio card + stats + links ── */}
          <div
            className="lg:sticky"
            style={{ top: 'calc(var(--nav-h) + 2rem)', alignSelf: 'start' }}
          >
            {/* Bio block */}
            <RevealUp delay={0.1} className="bio-block mb-10">
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '1rem',
                }}
              >
                Frontend Developer
              </p>
              <p
                style={{
                  fontSize: 'var(--text-body-m)',
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: 'var(--color-secondary)',
                  marginBottom: '1rem',
                }}
              >
                I build React applications that are not just functional — they're
                intentional: well-structured, performant, and visually considered.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-body-s)',
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: 'var(--color-secondary)',
                }}
              >
                Whether it's a REST-connected platform, an e-commerce SPA, or a
                real-time 3D scene, I approach every project with the same focus
                on clean architecture and user experience.
              </p>
            </RevealUp>

            {/* Links */}
            <RevealUp delay={0.2} className="flex flex-col gap-1 mb-10">
              {socials.map(({ id, name, url, arrow, external, download }) => (
                <a
                  key={id}
                  href={url}
                  target={external ? '_blank' : '_self'}
                  rel={external ? 'noopener noreferrer' : undefined}
                  download={download || undefined}
                  className="flex items-center justify-between group w-full"
                  style={{
                    padding: '0.85rem 0',
                    borderBottom: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-s)',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--color-secondary)',
                    transition: 'color 0.3s',
                  }}
                  aria-label={`${name} — ${download ? 'download' : 'opens in new tab'}`}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-secondary)'; }}
                >
                  <span>{name}</span>
                  <span style={{ color: 'var(--color-accent)', fontSize: '1rem' }}>{arrow}</span>
                </a>
              ))}
            </RevealUp>

            {/* Stats — CV-verified only */}
            <RevealUp delay={0.3} className="stats-grid">
              {stats.map(({ id, value, label }) => (
                <div
                  key={id}
                  style={{ background: 'var(--color-bg-2)', padding: '1.5rem' }}
                >
                  <p
                    className="font-display font-extrabold leading-none mb-2"
                    style={{ fontSize: '2rem', color: 'var(--color-primary)' }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-mono)',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </RevealUp>
          </div>

        </div>
      </div>
    </section>
  );
}
