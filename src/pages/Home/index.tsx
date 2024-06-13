import { Link } from 'react-router-dom'

import { Button, LineBreak } from '@/components'

function Home() {
  return (
    <div className='mx-auto max-w-1440 px-4 py-32' style={{ height: 3000 }}>
      <h1 className='text-5xl font-semibold leading-snug'>
        Empower Innovation <LineBreak /> with Software Craftsmanship
      </h1>
      <p className='mt-6 text-lg'>
        Our agile team of craftsmen has worked with companies varied in size
        <LineBreak />
        from startups to corporates, to build world-class quality products and
        <LineBreak />
        lead the road to success, since 2013.
      </p>
      <Button className='mt-8' asChild>
        <Link to='/contact'>Let's talk</Link>
      </Button>
    </div>
  )
}

export default Home
