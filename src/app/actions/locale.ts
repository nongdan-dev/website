'use server'

import { cookies } from 'next/headers'

import { routing } from '@/i18n/routing'
import { Locale } from '@/types/cookie'

const COOKIE_LOCALE = 'NEXT_LOCALE'
const { defaultLocale } = routing

export async function setLocaleCookie(locale: Locale) {
  const cookieStore = await cookies()
  cookieStore.set({
    name: COOKIE_LOCALE,
    value: locale,
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    secure: process.env.NODE_ENV === 'production',
  })

  return { success: true }
}

export async function getLocaleFromCookie(): Promise<Locale> {
  const cookieStore = await cookies()
  const locale = cookieStore.get(COOKIE_LOCALE)?.value as Locale | undefined
  return locale || defaultLocale
}
