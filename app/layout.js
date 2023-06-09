import './globals.css'
// import { Inter } from 'next/font/google'
import { Raleway } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Joshrine Agutaya',
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
