const accentMap = {
  hardware: 'bg-hardware',
  software: 'bg-software',
  neutral: 'bg-ink-faint',
}

export default function SectionHeading({ title, description, accent = 'neutral', id }) {
  return (
    <div className="mb-10 max-w-prose">
      <div className="mb-3 flex items-center gap-3">
        <span className={`h-1.5 w-1.5 rounded-full ${accentMap[accent]}`} aria-hidden="true" />
        <h2 id={id} className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          {title}
        </h2>
      </div>
      {description && <p className="text-ink-soft">{description}</p>}
    </div>
  )
}
