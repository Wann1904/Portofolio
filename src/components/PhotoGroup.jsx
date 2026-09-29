import PlaceholderImage from './PlaceholderImage'

export default function PhotoGroup({ label, photos = [] }) {
  return (
    <div>
      <h3 className="mb-2 font-display text-sm font-semibold text-ink">{label}</h3>
      {photos.length === 0 ? (
        <PlaceholderImage label={`${label} — belum ada foto`} />
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`${label} ${i + 1}`}
              className="aspect-video w-full rounded-md border border-base-line object-cover"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  )
}
