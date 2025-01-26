import { ComponentProps } from 'react'
import { FaStar } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

import { Avatar } from '../ui'

export type FeedbackProps = ComponentProps<'div'> & {
  starCount: number
  userName: string
  userRole: string
  message: string
}

export function FeedBack({
  starCount,
  userName,
  userRole,
  message,
  ...props
}: FeedbackProps) {
  return (
    <div
      {...props}
      className={twMerge('rounded-xl bg-white px-8 py-6', props.className)}
    >
      <div className='mb-4 flex gap-1'>
        {Array.from({ length: starCount }).map((_, idx) => (
          <FaStar key={idx} className='text-yellow-400' />
        ))}
      </div>
      <div className='mb-3 flex items-center gap-4'>
        <Avatar size='lg' name={userName} className='border-gray-300' />
        <div className='flex flex-col gap-0.5'>
          <p className='text-title !text-base !font-bold'>{userName}</p>
          <p className='text-sm text-gray-600'>{userRole}</p>
        </div>
      </div>
      <p className='w-72'>{message}</p>
    </div>
  )
}
