import { ProjectCard, Section } from '@/components/widget'

type Project = {
  image: string
  title: string
  description: string
}

type ListProjectProps = {
  title?: string
  projects: Project[]
}

export const ListProject: React.FC<ListProjectProps> = ({
  title,
  projects,
}) => {
  return (
    <div>
      {title && <h2 className='text-title !text-2xl sm:!text-3xl'>{title}</h2>}
      <div className='content-grid list-project-grid mt-6'>
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
