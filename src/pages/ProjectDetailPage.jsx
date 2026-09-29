import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import DetailField from '../components/DetailField'
import PhotoGroup from '../components/PhotoGroup'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-ink-soft">Project tidak ditemukan.</p>
        <Link to="/#projects" className="mt-4 inline-block text-sm text-software hover:underline">
          ← Kembali ke Projects
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link to="/#projects" className="text-sm text-ink-faint hover:text-software">
        ← Software Projects
      </Link>

      <div className="mb-2 mt-4">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          {project.name}
        </h1>
      </div>
      <p className="mb-6 text-ink-soft">{project.description}</p>

      <ul className="mb-10 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-base-line px-2 py-0.5 font-mono text-[11px] text-ink-faint"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mb-10 flex flex-wrap gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-software px-4 py-2 text-sm font-medium text-base"
          >
            View on GitHub
          </a>
        ) : (
          <span className="rounded-md border border-dashed border-base-line px-4 py-2 font-mono text-xs text-ink-faint">
            GitHub link belum tersedia
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-base-line px-4 py-2 text-sm font-medium text-ink hover:border-ink-faint"
          >
            Live Demo
          </a>
        )}
      </div>

      <div className="space-y-10">
        <DetailField label="Overview" value={project.overview} />

        {project.features?.length > 0 && (
          <div>
            <h3 className="mb-2 font-display text-sm font-semibold text-ink">Features</h3>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-ink-soft">
                  <span className="h-1 w-1 rounded-full bg-software" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <DetailField label="Problem" value={project.problem} />
        <DetailField label="Approach" value={project.approach} />
        <DetailField label="Implementation" value={project.implementation} />
        <DetailField label="Result" value={project.result} />

        <div className="border-t border-base-line pt-10">
          <PhotoGroup label="Gallery" photos={project.gallery} />
        </div>
      </div>
    </article>
  )
}
