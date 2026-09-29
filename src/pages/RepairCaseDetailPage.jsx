import { Link, useParams } from 'react-router-dom'
import { repairCases } from '../data/repairCases'
import StatusBadge from '../components/StatusBadge'
import DetailField from '../components/DetailField'
import PhotoGroup from '../components/PhotoGroup'

export default function RepairCaseDetailPage() {
  const { slug } = useParams()
  const item = repairCases.find((c) => c.slug === slug)

  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-ink-soft">Repair case tidak ditemukan.</p>
        <Link to="/#repair-cases" className="mt-4 inline-block text-sm text-hardware hover:underline">
          ← Kembali ke Repair Cases
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link to="/#repair-cases" className="text-sm text-ink-faint hover:text-hardware">
        ← Repair Cases
      </Link>

      <div className="mb-8 mt-4 flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{item.title}</h1>
        <StatusBadge status={item.status} />
      </div>

      <p className="mb-10 font-mono text-sm text-ink-faint">{item.device}</p>

      <div className="space-y-10">
        <DetailField label="Problem" value={item.problem} />
        <DetailField label="Initial Inspection" value={item.initialInspection} />
        <DetailField label="Diagnosis" value={item.diagnosis} />
        <DetailField label="Repair Process" value={item.repairProcess} />
        <DetailField label="Result" value={item.result} />

        <div className="space-y-8 border-t border-base-line pt-10">
          <h2 className="font-display text-lg font-semibold text-ink">Documentation</h2>
          <PhotoGroup label="Before Repair" photos={item.photos?.before} />
          <PhotoGroup label="Motherboard" photos={item.photos?.motherboard} />
          <PhotoGroup label="Measurement" photos={item.photos?.measurement} />
          <PhotoGroup label="After Repair" photos={item.photos?.after} />
        </div>
      </div>
    </article>
  )
}
