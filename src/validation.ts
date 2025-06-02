import { zValidator } from '@hono/zod-validator'
import { ZodType } from 'zod'

export function withBody<T extends ZodType<any>>(schema: T) {
  return zValidator('json', schema)
}

export function withQuery<T extends ZodType<any>>(schema: T) {
  return zValidator('query', schema)
}

export function withParam<T extends ZodType<any>>(schema: T) {
  return zValidator('param', schema)
}

export function withForm<T extends ZodType<any>>(schema: T) {
  return zValidator('form', schema)
}

export function withHeader<T extends ZodType<any>>(schema: T) {
  return zValidator('header', schema)
}
