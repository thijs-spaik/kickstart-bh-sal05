import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary-900">
      <Container size="xl">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
              Volgende stap
            </span>
          </div>

          <h2 className="font-heading font-medium text-2xl md:text-3xl text-text-inverse tracking-tight leading-tight mb-4">
            Klaar om het proposalproces te transformeren?
          </h2>

          <p className="text-md font-body text-primary-300 leading-relaxed mb-8 max-w-xl">
            Start met een pilot voor Femke en Rick. Binnen twee weken van intake-formulier tot werkende automatisering — en bespaar direct uren per voorstel.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="secondary"
              size="lg"
              className="bg-accent text-text-inverse hover:bg-accent-hover"
            >
              Plan de kickoff
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-primary-300 hover:text-text-inverse hover:bg-primary-800"
            >
              Download de business case →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
