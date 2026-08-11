import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manthan Bhala | Machine Learning Engineer',
  description: 'GitHub Pages resume for Manthan Bhala, Machine Learning Engineer.',
  keywords: 'Manthan Bhala, machine learning engineer, resume, GitHub Pages',
  authors: [{ name: 'Manthan Bhala' }],

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },

  openGraph: {
    title: 'Manthan Bhala | Machine Learning Engineer',
    description: 'GitHub Pages resume for Manthan Bhala.',
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
