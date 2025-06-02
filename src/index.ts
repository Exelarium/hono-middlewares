import { Context } from 'hono'

export interface HttpExceptionOptions {
  capture?: (err: any, ctx: Context) => Promise<void>
  customMessage?: (err: any) => string
  defaultStatusCode?: number
}

export * from './with-authentication'
export * from "./validation"
export * from './hooks/use-http-exceptions'
export * from './hooks/use-sentry'