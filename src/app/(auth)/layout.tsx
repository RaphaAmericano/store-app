import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'
import MainMenu from './_components/MainMenu'
import { Toaster } from '@/components/ui/toaster'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store App',
  description: 'Aplicação de exemplo',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options);
  // console.log("session in (auth)layout",session)
  if(!session){
    redirect("/")
  }
  return (
    <html lang="en">
      <body className={inter.className}>  
        <MainMenu {...session} />
        <main>
          {children}
        </main>
        <Toaster />    
      </body>
    </html>
  )
}
