interface OAuthOptions {
  audience?: string
  authority?: string
}

interface HttpExceptionConfig {
  capture?: (err: any, ctx: Context) => Promise<void>
  customMessage?: (err: any) => string
  defaultStatusCode?: number
}
