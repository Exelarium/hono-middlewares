import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { HttpExceptionOptions } from '..'

export function useHttpExceptions(app: Hono<any>, { capture }: HttpExceptionOptions = {}) {
  app.onError((err, ctx) => {
    if (err instanceof HTTPException) {
      return err.getResponse()
    }
    console.log(err)

    if (capture) {
      capture(err, ctx)
    }
    return ctx.json({ message: `An error occured: ${err}` }, 500)
  })
}
