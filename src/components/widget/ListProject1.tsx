import Image, { StaticImageData } from 'next/image'

type Project = {
  image: StaticImageData
  title: string
  description: string
}

export const ListProject = ({ projects }: { projects: Project[] }) => {
  return (
    <div className='max-[500px]:grid-cols-1 grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3'>
      {projects.map(({ title, description, image }) => (
        <div
          key={title}
          className='flex flex-col rounded-lg border border-gray-200 bg-gray-50 shadow-sm shadow-black/5'
        >
          <div className='mb-4 flex flex-col gap-1 p-10'>
            <p className='text-xl font-medium md:text-2xl'>{title}</p>
            <p className='truncate md:text-lg'>{description}</p>
          </div>
          <div className='col-content z-10 pl-10'>
            <Image src={image} alt={title} width={300} height={200} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      ))}
    </div>
  )
}
