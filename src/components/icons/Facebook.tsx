import { ComponentProps } from 'react'

export function Facebook(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      aria-hidden
      {...props}
    >
      <path
        d='M16 8C16 3.58125 12.4187 0 8 0C3.58125 0 0 3.58125 0 8C0 11.75 2.58437 14.9 6.06875 15.7656V10.4438H4.41875V8H6.06875V6.94688C6.06875 4.225 7.3 2.9625 9.975 2.9625C10.4813 2.9625 11.3562 3.0625 11.7156 3.1625V5.375C11.5281 5.35625 11.2 5.34375 10.7906 5.34375C9.47812 5.34375 8.97188 5.84062 8.97188 7.13125V8H11.5844L11.1344 10.4438H8.96875V15.9406C12.9313 15.4625 16 12.0906 16 8Z'
        fill='currentColor'
      />
    </svg>
  )
}
