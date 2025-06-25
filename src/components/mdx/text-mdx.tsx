'use client'

interface Props {
  text: string
  color?: string
}

export function TextMdx({ text, color = 'text-blue-600' }: Props) {
  return (
    <div
      className={`my-4 border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20 ${color}`}
    >
      <p className='m-0 font-medium'>{text}</p>
    </div>
  )
}
