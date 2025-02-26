type ProjectCardProps = {
  image: string
  title: string
  description: string
}

export function ProjectCard({ image, title, description }: ProjectCardProps) {
  return (
    <div className='flex flex-col gap-16 rounded-lg border border-gray-200 bg-gray-50 pl-10 pt-10 shadow-sm shadow-black/5'>
      <div className='flex flex-col gap-1'>
        <p className='text-2xl font-medium'>{title}</p>
        <p className='text-lg'>{description}</p>
      </div>
      <div className='col-content z-10'>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}
