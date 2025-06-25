'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { setLocaleCookie } from '@/app/actions/locale'
import { routing } from '@/i18n/routing'
import { Locale } from '@/types/cookie'

import { DropdownMenu } from './widget/dropdown-menu'

const { locales, defaultLocale } = routing
type LanguageInfo = {
  name: string
  label: string
}

const languageNames: Record<Locale, LanguageInfo> = {
  en: { name: 'EN', label: 'English' },
  vi: { name: 'VI', label: 'Tiếng Việt' },
}

export function LanguageSwitcher({
  initialLocale = defaultLocale,
}: {
  initialLocale?: Locale
}) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(initialLocale)
  const router = useRouter()

  const changeLocale = async (locale: Locale) => {
    if (locale === currentLocale) return

    try {
      await setLocaleCookie(locale)
      setCurrentLocale(locale)
      router.refresh()
    } catch (error) {
      console.error('Failed to change locale:', error)
    }
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
            <span
              className={
                locale === currentLocale ? 'font-medium text-indigo-600' : ''
              }
            >
              {languageNames[locale].name}
            </span>
            {locale === currentLocale && (
              <span className='text-xs text-indigo-600'>
                {locale === 'en' ? 'Selected' : 'Đang chọn'}
              </span>
            )}
          </button>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
