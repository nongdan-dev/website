import { CallToAction, Section } from '@/components/widget'

import ProcessSection from './ProcessSection'
import Projects from './Projects'

function WebDevelopment() {
  return (
    <Section>
      <Projects />
      <ProcessSection />
      <CallToAction />
    </Section>
  )
}

export default WebDevelopment
