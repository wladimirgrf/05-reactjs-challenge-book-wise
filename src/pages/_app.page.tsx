import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import { globalStyles } from '@/styles/global'

globalStyles()

const nunito = Nunito({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunito.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
