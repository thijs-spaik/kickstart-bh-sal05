import { Container } from '@/components/ui/container'

export function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-border">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-accent" aria-hidden="true" />
            <span className="font-heading font-semibold text-sm text-text tracking-tight">
              Breaking Habits
            </span>
            <span className="text-text-subdued text-xs font-body ml-2">
              × SPAIK
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <a href="#solution" className="text-xs font-body text-text-subdued hover:text-text transition-colors duration-150 tracking-wide uppercase">
              Oplossing
            </a>
            <a href="#workflow" className="text-xs font-body text-text-subdued hover:text-text transition-colors duration-150 tracking-wide uppercase">
              Workflow
            </a>
            <a href="#results" className="text-xs font-body text-text-subdued hover:text-text transition-colors duration-150 tracking-wide uppercase">
              Resultaat
            </a>
          </nav>

          {/* Meta */}
          <p className="text-xs font-body text-text-subdued tracking-wide">
            SAL05 — Automated Proposal Drafting
          </p>
        </div>
      </Container>
    </footer>
  )
}
