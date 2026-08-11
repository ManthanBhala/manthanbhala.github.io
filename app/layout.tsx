import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manthan Bhala | ML Engineer & Software Developer',
  description: 'Manthan Bhala is a machine learning engineer and software developer building production systems for search, ranking, and recommendations.',
  keywords: 'Manthan Bhala, machine learning engineer, software developer, search, ranking, recommendation systems',
  authors: [{ name: 'Manthan Bhala' }],

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },

  openGraph: {
    title: 'Manthan Bhala | ML Engineer & Software Developer',
    description: 'Machine learning and software engineering for search, ranking, and recommendations.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
