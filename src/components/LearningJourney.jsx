import SectionHeading from './SectionHeading'
import { learningTheme, learningIntro, learningTopics } from '../data/learning'

export default function LearningJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-20"
    >
      <SectionHeading id="journey-heading" title="Learning Journey" accent="hardware" />

      <p className="mb-2 font-display text-lg font-medium text-ink">{learningTheme}</p>
      <p className="mb-8 max-w-prose leading-relaxed text-ink-soft">{learningIntro}</p>

      <ul className="grid gap-3 sm:grid-cols-2">
        {learningTopics.map((topic) => (
          <li
            key={topic.name}
            className="rounded-md border border-base-line bg-base-panel px-4 py-3 text-sm text-ink-soft"
          >
            {topic.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
