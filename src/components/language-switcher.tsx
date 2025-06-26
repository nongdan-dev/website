'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return undefined
}

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const cookieLocale = getCookie('NEXT_LOCALE')
    if (cookieLocale && locales.includes(cookieLocale as Locale)) {
      setCurrentLocale(cookieLocale as Locale)
      return
    }

    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.split('-')[0]
      if (browserLang && locales.includes(browserLang as Locale)) {
        setCurrentLocale(browserLang as Locale)
        document.cookie = `NEXT_LOCALE=${browserLang}; path=/; max-age=31536000; samesite=lax`
      } else {
        document.cookie = `NEXT_LOCALE=${defaultLocale}; path=/; max-age=31536000; samesite=lax`
      }
    }
  }, [pathname])

  const changeLocale = (locale: Locale) => {
    if (locale === currentLocale || !isMounted) return

    try {
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`
      window.location.href = window.location.pathname
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
