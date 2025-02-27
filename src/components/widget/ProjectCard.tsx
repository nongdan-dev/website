type ProjectCardProps = {
  image: string
  title: string
  description: string
}

export function ProjectCard({ image, title, description }: ProjectCardProps) {
  return (
    <div className='flex flex-col rounded-lg border border-gray-200 bg-gray-50 shadow-sm shadow-black/5'>
      <div className='mb-4 flex flex-col gap-1 p-10'>
        <p className='text-xl font-medium md:text-2xl'>{title}</p>
        <p className='truncate md:text-lg'>{description}</p>
      </div>
      <div className='col-content z-10 pl-10'>
        <img src={image} alt='' />
      </div>
    </div>
  )
}
