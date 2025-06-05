import { Hono } from 'hono'
import { sentry } from '@hono/sentry'

export function useSentry(app: Hono<any>) {
  app.use('*', sentry())
}
