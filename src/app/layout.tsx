import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets : ['latin'],
  weight: ['200','400','500','600', '700']
  
})
export const metadata = {
  title: 'paisall.io',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./2.png" />
      <body className={poppins.className}>{children}</body>
    </html>
  )
}