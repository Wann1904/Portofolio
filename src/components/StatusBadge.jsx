const statusConfig = {
  'in-progress': { label: 'In progress', color: 'text-hardware', dot: 'bg-hardware' },
  resolved: { label: 'Resolved', color: 'text-software', dot: 'bg-software' },
  unresolved: { label: 'Unresolved', color: 'text-ink-faint', dot: 'bg-ink-faint' },
}

export default function StatusBadge({ status }) {
  const config = statusConfig[status] ?? statusConfig['in-progress']
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-xs ${config.color}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} aria-hidden="true" />
      {config.label}
    </span>
  )
}
