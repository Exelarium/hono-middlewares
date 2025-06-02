import { Context } from 'hono'

export interface OAuthOptions {
  audience?: string
  authority?: string
}

export interface HttpExceptionOptions {
  capture?: (err: any, ctx: Context) => Promise<void>
  customMessage?: (err: any) => string
  defaultStatusCode?: number
}
