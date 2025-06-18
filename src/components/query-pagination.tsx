'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  className?: string
}

export function QueryPagination({
  currentPage,
  totalPages,
  className,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages = []
    const startPage = Math.max(1, currentPage - 2)
    const endPage = Math.min(totalPages, currentPage + 2)

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <nav
      className={cn(
        'mt-[3.125rem] flex items-center justify-center gap-3',
        className,
      )}
      aria-label='pagination'
    >
      <Link
        href={`/blog/page/${currentPage - 1}`}
        className={cn(
          'flex items-center gap-3 rounded-lg bg-white px-4 py-2',
          currentPage === 1
            ? 'pointer-events-none cursor-not-allowed text-gray-400'
            : 'text-[#000119] hover:bg-gray-50',
        )}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : undefined}
      >
        {/* <ArrowLeft className='h-4 w-4' /> */}
        <span>Prev</span>
      </Link>
      <div className='flex items-center gap-[0.9375rem] rounded-lg p-1'>
        {getPageNumbers().map(page => (
          <div key={page} className='relative'>
            <Link
              href={`/blog/page/${page}`}
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded border-gray-200 bg-white text-lg font-medium',
                currentPage === page
                  ? 'text-[#0C5CFF]'
                  : 'text-gray-700 hover:bg-gray-50',
                currentPage === page
                  ? 'border-b-2 border-[#0C5CFF] text-[#0C5CFF]'
                  : 'border-b-2 border-gray-300',
              )}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </Link>
          </div>
        ))}
      </div>
      <Link
        href={`/blog/page/${currentPage + 1}`}
        className={cn(
          'flex items-center gap-3 rounded-lg bg-white px-4 py-2',
          currentPage === totalPages
            ? 'pointer-events-none cursor-not-allowed text-gray-400'
            : 'text-[#000119] hover:bg-gray-50',
        )}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : undefined}
      >
        <span>Next</span>
      </Link>
    </nav>
  )
}
