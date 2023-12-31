import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dob's Portfolio",
  description: 'Portfolio -> Dobromir Ivanov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-400 ${inter.className}`}>
        <Header/>
        {children}</body>
    </html>
  )
}
