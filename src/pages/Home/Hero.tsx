import Illustration from '@/assets/illustration.svg'
import { Avatar, Button, LineBreak, Link, Marquee } from '@/components'

const testimonials = [
  {
    id: 1,
    name: 'Anon',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  },
  {
    id: 2,
    name: 'Bnon',
    content: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    id: 3,
    name: 'Cnon',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
  {
    id: 4,
    name: 'Dnon',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    name: 'Enon',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    name: 'Fnon',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
]

const testimonials2 = [
  {
    id: 1,
    name: 'Anon',
    content: 'Lorem ipsum dolor sit',
  },
  {
    id: 2,
    name: 'Bnon',
    content: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    id: 3,
    name: 'Cnon',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
  {
    id: 4,
    name: 'Dnon',
    content: 'Lorem ipsum',
  },
  {
    id: 5,
    name: 'Enon',
    content: 'Lorem ipsum dolor',
  },
  {
    id: 6,
    name: 'Fnon',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
]

function Hero() {
  return (
    <div className='col-full-width relative overflow-hidden pb-28 pt-48'>
      <div className='col-content xl:grid xl:grid-cols-2'>
        <div>
          <h1 className='text-balance text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug'>
            Practical <LineBreak className='md:inline' /> Software Development
          </h1>
          <p className='mt-6 text-balance text-lg'>
            Through dedicated and persistent effort, we have been delivering
            production-grade software solutions to companies and startups around
            the world.
          </p>
          <Button className='mt-8' asChild>
            <Link to='/porfolio' defaultStyle>
              View our Porfolio
            </Link>
          </Button>
        </div>
        <div className='hidden xl:block xl:translate-x-32'>
          <img aria-hidden='true' src={Illustration} alt='' />
        </div>
      </div>
      <div className='col-content mt-28 flex flex-col gap-y-6 xl:mt-32'>
        <Marquee>
          {testimonials.map(({ id, name, content }) => (
            <Marquee.Item
              key={id}
              className='flex min-w-52 max-w-96 items-center gap-4 rounded-full bg-white px-6 py-3 text-sm shadow-md shadow-indigo-100'
            >
              <Avatar
                name='Anon'
                url={`https://placehold.co/40x40?text=${name}`}
                className='flex-shrink-0'
              />
              <p>
                {content} - @{name}
              </p>
            </Marquee.Item>
          ))}
        </Marquee>
        <Marquee>
          {testimonials2.map(({ id, name, content }) => (
            <Marquee.Item
              key={id}
              className='flex min-w-52 max-w-96 items-center gap-4 rounded-full bg-white px-6 py-3 text-sm shadow-md shadow-indigo-100'
            >
              <Avatar
                name='Anon'
                url={`https://placehold.co/40x40?text=${name}`}
                className='flex-shrink-0'
              />
              <p>
                {content} - @{name}
              </p>
            </Marquee.Item>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Hero
