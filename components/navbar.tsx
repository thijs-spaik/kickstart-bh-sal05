'use client'

import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface NavbarProps { className?: string }

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navLinks = [
    { label: 'Probleem', href: '#probleem' },
    { label: 'Oplossing', href: '#oplossing' },
    { label: 'Hoe het werkt', href: '#workflow' },
    { label: 'Resultaten', href: '#resultaten' },
  ]

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm', className)}>
      <Container size="xl">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          <a href="#" className="flex items-center gap-sm group">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-text-inverse font-heading font-bold text-sm">BH</span>
            </div>
            <span className="font-heading font-semibold text-md text-text tracking-tight">Breaking Habits</span>
          </a>
          <div className="hidden md:flex items-center gap-lg">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-body text-sm text-text-subdued hover:text-text transition-colors duration-150">{link.label}</a>
            ))}
            <Button variant="primary" size="sm">Start pilot</Button>
          </div>
          <button className="md:hidden p-sm text-text" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Sluit menu' : 'Open menu'} aria-expanded={mobileOpen}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {mobileOpen ? (<><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></>) : (<><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>)}
            </svg>
          </button>
        </nav>
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-md">
            <div className="flex flex-col gap-md">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-body text-sm text-text-subdued hover:text-text transition-colors duration-150 px-sm" onClick={() => setMobileOpen(false)}>{link.label}</a>
              ))}
              <div className="px-sm pt-sm"><Button variant="primary" size="sm" className="w-full">Start pilot</Button></div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
