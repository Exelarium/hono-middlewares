import { Hono } from 'hono'
import { sentry } from '@hono/sentry'

export default function useSentry(app: Hono<any>) {
  app.use('*', sentry())
}
