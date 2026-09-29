import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import StatusBadge from './StatusBadge'
import { repairCases } from '../data/repairCases'

export default function RepairCases() {
  return (
    <section
      id="repair-cases"
      aria-labelledby="repair-cases-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-20"
    >
      <SectionHeading
        id="repair-cases-heading"
        title="Repair Cases"
        description="Dokumentasi kasus perbaikan laptop dan gadget — mulai dari gejala awal sampai hasil akhir."
        accent="hardware"
      />

      {repairCases.length === 0 ? (
        <p className="text-ink-faint">Belum ada case yang didokumentasikan.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {repairCases.map((c) => (
            <Link
              key={c.slug}
              to={`/repair/${c.slug}`}
              className="group rounded-lg border border-base-line bg-base-panel p-5 transition-colors hover:border-hardware/50"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="font-display font-medium text-ink group-hover:text-hardware">
                  {c.title}
                </h3>
                <StatusBadge status={c.status} />
              </div>
              <p className="mb-1 font-mono text-xs text-ink-faint">{c.device}</p>
              <p className="text-sm text-ink-soft line-clamp-3">{c.problem}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
