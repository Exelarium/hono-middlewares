import { Context, Env } from 'hono'

export function withVariable<T extends keyof Env['Variables']>(
  context: Context<Env>,
  name: T,
): NonNullable<Env['Variables'][T]> {
  const property = context.get(name)
  if (property == null) {
    throw new Error(`Expected property "${String(name)}" to be present but it wasn't.`)
  }
  return property
}
