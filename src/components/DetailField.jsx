export default function DetailField({ label, value, placeholder = 'Belum diisi.' }) {
  return (
    <div>
      <h3 className="mb-2 font-display text-sm font-semibold text-ink">{label}</h3>
      {value ? (
        <p className="max-w-prose leading-relaxed text-ink-soft">{value}</p>
      ) : (
        <p className="max-w-prose text-sm italic text-ink-faint">{placeholder}</p>
      )}
    </div>
  )
}
