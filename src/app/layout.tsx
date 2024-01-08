import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/Container'
import Providers from './_store/Providers'
import MainMenu from './_components/MainMenu'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store App',
  description: 'Aplicação de exemplo',
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
        <Toaster />
      </body>
    </html>
  )
}
