import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/Container'
import Providers from './store/Providers'
import MainMenu from './_components/MainMenu'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainMenu />
          <Container>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
