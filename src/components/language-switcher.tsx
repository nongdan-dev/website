'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Locale, locales, defaultLocale } from '@/i18n/routing'

import { DropdownMenu } from './widget/dropdown-menu'

type LanguageInfo = {
  name: string
  label: string
}

const languageNames: Record<Locale, LanguageInfo> = {
  vi: { name: 'VN', label: 'Switch to English' },
  en: { name: 'EN', label: 'Chuyển sang Tiếng Việt' },
}

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
      setCurrentLocale(defaultLocale)
    }
  }, [])

  function changeLocale(locale: Locale) {
    if (locale === currentLocale) return

    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`

    window.location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className='inline-flex items-center gap-1 text-sm font-medium text-neutral-600 hover:bg-transparent hover:text-neutral-900 focus:outline-none'>
        {languageNames[currentLocale].name}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className='w-30 flex flex-col gap-0.5 rounded-md bg-white p-1 shadow-lg'
        align='end'
      >
        {locales.map(locale => (
          <button
            key={locale}
            onClick={() => changeLocale(locale)}
            disabled={locale === currentLocale}
            className='flex w-full items-center justify-between gap-x-1 rounded px-1 py-1 text-left text-sm hover:bg-neutral-100 disabled:opacity-50'
          >
            <span>{languageNames[locale].name}</span>
            {locale === currentLocale && (
              <span className='text-xs text-indigo-500'>✓</span>
            )}
          </button>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
