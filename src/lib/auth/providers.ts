import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

import { env } from '@/env'

export const google = GoogleProvider({
  clientId: env.GOOGLE_CLIENT_ID,
  clientSecret: env.GOOGLE_CLIENT_SECRET,
})

export const github = GitHubProvider({
  clientId: env.GITHUB_CLIENT_ID,
  clientSecret: env.GITHUB_CLIENT_SECRET,
})
