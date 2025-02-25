import React from 'react'

interface StepCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
  totalSteps: number
}

const StepCard: React.FC<StepCardProps> = ({
  index,
  totalSteps,
  icon,
  title,
  description,
}) => {
  const isLastStep = index === totalSteps - 1

  return (
    <div className='group relative flex flex-col items-center justify-center'>
      {index !== 0 && (
        <div
          className={`flex h-[45px] w-[2px] ${
            isLastStep ? 'bg-blue-500' : 'bg-gray-100'
          }`}
        ></div>
      )}

      <div
        className={`grid gap-2 rounded-lg border p-6 shadow-sm ${
          isLastStep ? 'border-blue-500' : 'border-gray-200'
        }`}
      >
        <div className='flex items-center gap-3'>
          <div>{icon}</div>
          <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  )
}

export default StepCard
