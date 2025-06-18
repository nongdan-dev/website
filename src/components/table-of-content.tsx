'use client'

interface Heading {
  level: string
  id: string
  text: string
}

interface TableOfContentsProps {
  headings: Heading[]
  className?: string
  maxHeight?: string
}

export function TableOfContents({
  headings,
  className = '',
  maxHeight = 'calc(100vh - 200px)',
}: TableOfContentsProps) {
  const buildHeadingTree = (headings: Heading[]) => {
    const tree = []
    const stack: { level: number; node: any }[] = []

    for (const heading of headings) {
      const level = parseInt(heading.level.substring(1))
      const node = { ...heading, children: [] }

      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop()
      }

      if (stack.length === 0) {
        tree.push(node)
      } else {
        stack[stack.length - 1].node.children.push(node)
      }

      stack.push({ level, node })
    }

    return tree
  }

  const headingTree = buildHeadingTree(headings)

  if (headingTree.length === 0) {
    return null
  }

  const scrollToHeading = (id: string) => {
    const target = document.getElementById(id)
    if (target) {
      const headerOffset = 100
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      window.history.replaceState(null, '', `#${id}`)
    }
  }

  const renderHeading = (heading: any, depth: number = 0) => {
    const level = Math.min(depth + 2, 4)
    return (
      <li
        key={`${heading.id}-${heading.text}`}
        className={`toc-item level-${level}`}
      >
        <a
          href={`#${heading.id}`}
          className={`text-sm transition-colors duration-200 ${
            depth === 0 ? 'font-medium' : 'font-normal'
          } text-gray-600 hover:!text-primary-500`}
          onClick={e => {
            e.preventDefault()
            scrollToHeading(heading.id)
          }}
          aria-label={`Jump to ${heading.level}: ${heading.text}`}
        >
          {depth > 0 && (
            <span className='mr-1 text-xs'>{depth === 1 ? '•' : '◦'}</span>
          )}{' '}
          {heading.text}
        </a>

        {heading.children.length > 0 && (
          <ul>
            {heading.children.map((child: any) =>
              renderHeading(child, depth + 1),
            )}
          </ul>
        )}
      </li>
    )
  }

  return (
    <nav
      className={`toc-container sticky top-24 overflow-hidden rounded-lg border border-gray-200 bg-white pl-4 shadow-sm ${className}`}
      aria-label={'In this article'}
    >
      <h2 className='text-base font-semibold text-gray-800'>In this article</h2>

      <div className='overflow-y-auto overscroll-contain' style={{ maxHeight }}>
        <ul className=''>
          {headingTree.map(heading => renderHeading(heading))}
        </ul>
      </div>
    </nav>
  )
}
