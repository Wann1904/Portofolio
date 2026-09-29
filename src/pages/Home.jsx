import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import RepairCases from '../components/RepairCases'
import Projects from '../components/Projects'
import LearningJourney from '../components/LearningJourney'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divide-y divide-base-line border-t border-base-line">
        <About />
        <Skills />
        <RepairCases />
        <Projects />
        <LearningJourney />
        <Contact />
      </div>
    </>
  )
}
