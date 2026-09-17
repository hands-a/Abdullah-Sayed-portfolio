import { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import RevealUp from '../animation/RevealUp';
import ProjectOverlay from './ProjectOverlay';
import { projects } from '../../data/projects';

/**
 * Projects Section
 * 5 CV-documented projects in cinematic list rows.
 * Click / Enter to open full case study overlay.
 */
export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section id="projects" style={{ padding: 'var(--section-gap) 0' }}>

        {/* Header */}
        <div
          style={{
            padding: '0 var(--pad-x)',
            maxWidth: 'var(--max-w)',
            margin: '0 auto clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          <SectionLabel>02 — Projects</SectionLabel>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="font-display font-extrabold tracking-[-0.02em] uppercase leading-[0.9]"
              style={{ fontSize: 'var(--text-display-l)', color: 'var(--color-primary)' }}
            >
              Selected<br />Work
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-mono)',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                paddingBottom: '0.4rem',
                flexShrink: 0,
              }}
            >
              {String(projects.length).padStart(2, '0')} Projects
            </span>
          </div>
        </div>

        {/* Project rows */}
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          {projects.map((project, i) => (
            <RevealUp key={project.id} delay={i * 0.06}>
              <article
                className="project-row group cursor-none"
                style={{ borderTop: '1px solid var(--color-border)' }}
                onClick={() => setActive(project)}
                onKeyDown={(e) => e.key === 'Enter' && setActive(project)}
                tabIndex={0}
                role="button"
                aria-label={`Open ${project.name} case study`}
              >
                <div
                  className="flex items-center gap-4 sm:gap-6 transition-colors duration-300"
                  style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem) var(--pad-x)' }}
                >
                  {/* Index */}
                  <span
                    className="flex-shrink-0"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-mono)',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      color: 'var(--color-muted)',
                      width: '2.5rem',
                    }}
                  >
                    {project.num}
                  </span>

                  {/* Title + tags */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-display font-bold uppercase leading-[1.05] tracking-[-0.01em] truncate
                                 group-hover:text-[var(--color-accent)] transition-colors duration-300"
                      style={{ fontSize: 'var(--text-display-m)', color: 'var(--color-primary)' }}
                    >
                      {project.name}
                    </h3>
                    {/* Tags — visible on hover (desktop), always on mobile */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            fontWeight: 400,
                            letterSpacing: '0.04em',
                            color: 'var(--color-muted)',
                            border: '1px solid var(--color-border)',
                            padding: '0.15rem 0.6rem',
                            borderRadius: '2px',
                            transition: 'color 0.25s, border-color 0.25s',
                          }}
                          className="group-hover:text-[var(--color-accent)]
                                     group-hover:border-[rgba(201,169,110,0.25)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover image preview (desktop only) */}
                  <div className="project-preview hidden md:block">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      width={200}
                      height={134}
                    />
                  </div>

                  {/* Arrow */}
                  <span
                    className="flex-shrink-0 text-[var(--color-muted)]
                               group-hover:text-[var(--color-accent)]
                               group-hover:translate-x-[3px] group-hover:-translate-y-[3px]
                               transition-all duration-300"
                    style={{ fontSize: '1.1rem' }}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                {/* Bottom border on last item */}
                {i === projects.length - 1 && (
                  <div style={{ borderBottom: '1px solid var(--color-border)' }} />
                )}
              </article>
            </RevealUp>
          ))}
        </div>
      </section>

      <ProjectOverlay project={active} onClose={() => setActive(null)} />
    </>
  );
}
