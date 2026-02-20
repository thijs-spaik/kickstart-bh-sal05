'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

interface NavLink {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: 'Oplossing', href: '#solution' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Resultaat', href: '#results' },
  { label: 'Team', href: '#team' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <Container size="xl">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 font-heading font-semibold text-md tracking-tight text-text">
            <span className="inline-block w-2 h-2 bg-accent rounded-none" aria-hidden="true" />
            Breaking Habits
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-body text-text-subdued hover:text-text transition-colors duration-150 tracking-wide uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Start pilot
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-200',
            mobileOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm font-body text-text-subdued hover:text-text transition-colors duration-150 tracking-wide uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="primary" size="sm" className="w-full">
                Start pilot
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}
