export type Locale = 'en' | 'vi'

export const COOKIE_LOCALE = 'NEXT_LOCALE'

export interface CookieOptions {
  path?: string
  maxAge?: number
  sameSite?: 'lax' | 'strict' | 'none'
  secure?: boolean
  httpOnly?: boolean
}
