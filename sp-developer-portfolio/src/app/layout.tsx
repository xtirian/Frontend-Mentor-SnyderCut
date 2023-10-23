import './globals.css'
import type { Metadata } from 'next'

//Colocar sobre importação de fonts no README
import  { spaceGrotesk } from './fonts'

export const metadata: Metadata = {

  //Colocar sobre os metadatas no README
  title: 'xTirian Portfolio',
  description: "Hi! 👋 I'm Matheus, and I'm passionate about web programming. I'm currently studying to become a full-stack developer 🚀, and I'm excited to share my projects with you !",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.className} text-base`}>
      <body className="bg-Black overflow-x-hidden">{children}</body>
    </html>
  )
}
