export default function PlaceholderImage({ label = 'Foto belum tersedia', className = '' }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex aspect-video w-full items-center justify-center rounded-md border border-dashed border-base-line bg-base-panel px-4 text-center ${className}`}
    >
      <span className="font-mono text-xs text-ink-faint">{label}</span>
    </div>
  )
}
