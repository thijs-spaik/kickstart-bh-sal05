import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-surface overflow-hidden">
      {/* Swiss grid accent line */}
      <div className="absolute top-0 left-0 w-px h-full bg-border hidden lg:block" style={{ left: '8.33%' }} aria-hidden="true" />
      <div className="absolute top-0 left-0 w-px h-full bg-border hidden lg:block" style={{ left: '91.66%' }} aria-hidden="true" />

      <Container size="xl">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
              SAL05 — Proposal Automation
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-text mb-6">
            Van intake naar voorstel
            <br />
            <span className="text-text-subdued">in minuten, niet uren</span>
          </h1>

          {/* Subheadline */}
          <p className="text-md md:text-lg font-body text-text-subdued leading-relaxed max-w-xl mb-10">
            Een geautomatiseerde n8n-pipeline die intake-notities omzet in gestructureerde conceptvoorstellen — zodat trainers hun tijd besteden aan klanten, niet aan copy-paste.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="primary" size="lg">
              Bekijk de workflow
            </Button>
            <Button variant="ghost" size="lg">
              Lees de business case →
            </Button>
          </div>

          {/* Key Metric */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <p className="font-heading font-semibold text-2xl md:text-3xl text-text tracking-tight">4u</p>
                <p className="text-xs font-body text-text-subdued mt-1 tracking-wide uppercase">Bespaard per voorstel</p>
              </div>
              <div>
                <p className="font-heading font-semibold text-2xl md:text-3xl text-text tracking-tight">8</p>
                <p className="text-xs font-body text-text-subdued mt-1 tracking-wide uppercase">Secties automatisch</p>
              </div>
              <div>
                <p className="font-heading font-semibold text-2xl md:text-3xl text-text tracking-tight">&lt;1u</p>
                <p className="text-xs font-body text-text-subdued mt-1 tracking-wide uppercase">Intake tot concept</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
