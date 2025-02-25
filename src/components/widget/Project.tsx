import React from 'react'

interface ProjectCardProps {
  image: string
  title: string
  description: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className='flex flex-col gap-20 rounded-lg border border-gray-200 bg-gray-50 pl-10 pt-16 shadow-md'>
      <div className='grid gap-1'>
        <h4 className='text-xl font-semibold'>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='col-content z-10'>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default ProjectCard
