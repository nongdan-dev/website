import { LineBreak } from '@/components/ui'
import { Section, SubTitle, Title, Content } from '@/components/widget/Section1'

import ContactForm from './ContactForm1'

export default function ContactUs() {
  return (
    <Section className='pt-[calc(theme(spacing.header)*2)]'>
      <SubTitle>Contact us</SubTitle>
      <Title asChild>
          <h1>Let's build an awesome project together</h1>
        </Title>
      <p className='mt-4 w-full text-lg lg:w-1/2'>
        Let's discuss your ideas. The more specific you are, the faster we can
        help. <LineBreak />
        Our team will get back to you within 24hrs.
      </p>
      <Content className='grid gap-14 lg:grid-cols-2'>
        <ContactForm />
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2010.4991297077313!2d106.8260736006245!3d10.815714998500919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ4JzU2LjYiTiAxMDbCsDQ5JzM3LjMiRQ!5e1!3m2!1sen!2s!4v1741695619118!5m2!1sen!2s'
          allowFullScreen
          loading='lazy'
          title='our HQ location'
          className='h-96 w-full rounded-md lg:h-full'
        />
      </Content>
    </Section>
  )
}
