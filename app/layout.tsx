import type { Metadata } from 'next'
import { displayFont, headingFont, bodyFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Breaking Habits \u2014 Automated Proposal Drafting',
  description: 'Van intake naar concept-voorstel in minder dan een uur.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${displayFont.variable} ${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-surface text-text font-body antialiased">{children}</body>
    </html>
  )
}
