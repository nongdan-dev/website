import { LineBreak } from '@/components/ui'
import { Section } from '@/components/widget'

import ContactForm from './ContactForm'

export default function ContactUs() {
  return (
    <Section>
      <Section.SubTitle>Contact us</Section.SubTitle>
      <Section.Title
        children={({ titleId, titleClassName }) => (
          <h1 id={titleId} className={titleClassName}>
            Let's build an awesome project together
          </h1>
        )}
      />
      <p className='mt-4 w-full text-lg lg:w-1/2'>
        Let's discuss your ideas. The more specific you are, the faster we can
        help. <LineBreak />
        Our team will get back to you within 24hrs.
      </p>
      <Section.Content className='grid grid-cols-1 gap-y-10 lg:grid-cols-2'>
        <ContactForm />
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4143.1550046811135!2d106.84146337528799!3d10.838145089314422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752126d447fbd5%3A0xa714c8e67c35f0b0!2sAnnam%20cuisine!5e1!3m2!1svi!2s!4v1740117986089!5m2!1svi!2s'
          allowFullScreen
          loading='lazy'
          title='our HQ location'
          className='h-96 w-full rounded-md lg:h-full'
        />
      </Section.Content>
    </Section>
  )
}
