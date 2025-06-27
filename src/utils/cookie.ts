interface CookieOptions {
  path?: string
  maxAge?: number
  sameSite?: 'strict' | 'lax' | 'none'
  secure?: boolean
  expires?: Date | string
}

export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return undefined
}

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = { path: '/', sameSite: 'lax' },
): void {
  if (typeof document === 'undefined') return

  let cookieString = `${name}=${value}`

  if (options.path) cookieString += `; path=${options.path}`
  if (options.maxAge) cookieString += `; max-age=${options.maxAge}`
  if (options.expires) {
    const expires =
      options.expires instanceof Date
        ? options.expires.toUTCString()
        : new Date(options.expires).toUTCString()
    cookieString += `; expires=${expires}`
  }
  if (options.sameSite) cookieString += `; samesite=${options.sameSite}`
  if (options.secure) cookieString += '; secure'

  document.cookie = cookieString
}
