'use client'

import { useState, useEffect } from 'react'

import { routing } from '@/i18n/routing'
import { Locale } from '@/types/cookie'

import { DropdownMenu } from './widget/dropdown-menu'

const { defaultLocale, locales } = routing

const languageNames = {
  vi: { name: 'VN', label: 'vi' },
  en: { name: 'EN', label: 'en' },
} as const

export function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1] as Locale | undefined

    if (cookieLocale && locales.includes(cookieLocale)) {
      setCurrentLocale(cookieLocale)
    } else {
      document.cookie = `NEXT_LOCALE=${defaultLocale}; path=/; max-age=31536000; samesite=lax`
      setCurrentLocale(defaultLocale)
    }
  }, [])

  function changeLocale(localeLabel: string) {
    const locale =
      (Object.entries(languageNames).find(
        ([, { label }]) => label === localeLabel,
      )?.[0] as Locale) || defaultLocale

    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`
    window.location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className='inline-flex items-center gap-1 text-sm font-medium text-neutral-600 hover:bg-transparent hover:text-neutral-900 focus:outline-none'>
        {languageNames[currentLocale]?.name || 'EN'}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className='w-30 z-50 flex flex-col gap-0.5 rounded-md bg-white p-1 shadow-lg'
        align='end'
      >
        {Object.entries(languageNames).map(([localeKey, { name, label }]) => (
          <button
            key={localeKey}
            onClick={() => changeLocale(label)}
            className='flex w-full items-center justify-between gap-x-1 rounded px-1 py-1 text-left text-sm hover:bg-neutral-100'
          >
            <span>{name}</span>
            {localeKey === currentLocale && (
              <span className='text-xs text-indigo-500'>✓</span>
            )}
          </button>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
