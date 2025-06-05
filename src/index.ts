import { Context } from 'hono'

export interface HttpExceptionOptions {
  capture?: (err: any, ctx: Context) => Promise<void>
  customMessage?: (err: any) => string
  defaultStatusCode?: number
}

export * from './cache/kv-namespaces'
export * from './validation/requests'
export * from './contexts/with-variable'
export * from './middlewares/with-authentication'
export * from './middlewares/hooks/use-http-exceptions'
export * from './middlewares/hooks/use-sentry'
