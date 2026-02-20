import type { Metadata } from 'next'
import { displayFont, headingFont, bodyFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Breaking Habits — Automated Proposal Drafting',
  description: 'Van intake naar voorstel in minuten, niet uren. AI-gestuurde proposalgeneratie voor Breaking Habits trainers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="nl"
      className={`${displayFont.variable} ${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen font-body antialiased">
        {children}
      </body>
    </html>
  )
}
