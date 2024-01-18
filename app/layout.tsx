import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import { AOSInit } from '@/components/Aos'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portafolio personal',
  description: 'portafolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black bg-gradient-radial from-red-900` }>
        <NextTopLoader color='#5700FF' showSpinner={false}/>
        <AOSInit/>
        {children}
        </body>
    </html>
  )
}
