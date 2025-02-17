import { useContext as RUseContext, Context } from 'react'

export function useContext<T>(Provider: Context<T>) {
  const ctx = RUseContext(Provider)

  if (!ctx) {
    throw new Error('Invalid context call')
  }

  return ctx
}
