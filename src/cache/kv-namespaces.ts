import { KVNamespace } from '@cloudflare/workers-types'

export async function fetch<T>(kv: KVNamespace, key: string): Promise<T | null> {
  return await kv.get<T>(key, 'json')
}

export async function store(kv: KVNamespace, key: string, value: object, ttl: number = 3600): Promise<void> {
  await kv.put(key, JSON.stringify(value), { expirationTtl: ttl })
}
