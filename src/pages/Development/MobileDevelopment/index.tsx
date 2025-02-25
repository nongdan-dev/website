import { CallToAction, Section } from '@/components/widget'

import Hero from './Hero'
import ProcessSection from './ProcessSection'
import Projects from './Projects'

function MobileDevelopment() {
  return (
    <Section>
      <Hero />
      <Projects />
      <ProcessSection />
      <CallToAction />
    </Section>
  )
}

export default MobileDevelopment
