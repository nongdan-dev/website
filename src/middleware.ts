import { NextRequest, NextResponse } from 'next/server'

import { locales, defaultLocale } from '@/i18n/routing'

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  const response = NextResponse.next()

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  const locale =
    cookieLocale && locales.includes(cookieLocale as any)
      ? cookieLocale
      : defaultLocale

  if (!cookieLocale || cookieLocale !== locale) {
    response.cookies.set({
      name: 'NEXT_LOCALE',
      value: locale as string,
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
    })
  }

  response.headers.set('x-locale', locale as string)

  const pathLocale = pathname.split('/')[1]
  if (locales.includes(pathLocale as any)) {
    const newPathname = `/${pathname.split('/').slice(2).join('/')}` || '/'
    const newUrl = new URL(newPathname, request.url)
    newUrl.search = search

    const redirectResponse = NextResponse.redirect(newUrl)
    response.headers.forEach((value, key) => {
      redirectResponse.headers.set(key, value)
    })
    return redirectResponse
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|_next/data|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|json)$).*)',
  ],
}
