import SectionHeading from './SectionHeading'
import { hardwareSkills, softwareSkills } from '../data/skills'

function SkillList({ items, accent }) {
  const dot = accent === 'hardware' ? 'bg-hardware' : 'bg-software'
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-ink-soft">
          <span className={`h-1 w-1 rounded-full ${dot}`} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading id="skills-heading" title="Skills" accent="neutral" />

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold text-hardware">Hardware</h3>
          <SkillList items={hardwareSkills} accent="hardware" />
        </div>
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold text-software">Software</h3>
          <SkillList items={softwareSkills} accent="software" />
        </div>
      </div>
    </section>
  )
}
