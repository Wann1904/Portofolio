import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import PlaceholderImage from './PlaceholderImage'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-20"
    >
      <SectionHeading
        id="projects-heading"
        title="Software Projects"
        description="Aplikasi yang saya kembangkan, lengkap dengan proses dan konteksnya."
        accent="software"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group rounded-lg border border-base-line bg-base-panel p-5 transition-colors hover:border-software/50"
          >
            {p.gallery?.[0] ? (
              <img
                src={p.gallery[0]}
                alt={`Screenshot ${p.name}`}
                className="mb-4 aspect-video w-full rounded-md border border-base-line object-cover"
              />
            ) : (
              <PlaceholderImage label={`${p.name} — screenshot belum tersedia`} className="mb-4" />
            )}

            <h3 className="mb-1 font-display font-medium text-ink group-hover:text-software">
              {p.name}
            </h3>
            <p className="mb-3 text-sm text-ink-soft">{p.description}</p>
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-base-line px-2 py-0.5 font-mono text-[11px] text-ink-faint"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  )
}
