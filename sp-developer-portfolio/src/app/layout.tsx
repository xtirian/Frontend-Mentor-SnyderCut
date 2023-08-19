import './globals.css'
import type { Metadata } from 'next'
import  { spaceGrotesk } from './fonts'

export const metadata: Metadata = {
  title: 'xTirian Portfolio',
  description: "Hi! 👋 I'm Matheus, and I'm passionate about web programming. I'm currently studying to become a full-stack developer 🚀, and I'm excited to share my projects with you !",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
