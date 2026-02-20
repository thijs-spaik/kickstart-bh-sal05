import { Container } from '@/components/ui/container'
import { Card } from '@/components/ui/card'

interface PainPoint {
  number: string
  title: string
  description: string
}

const painPoints: PainPoint[] = [
  {
    number: '01',
    title: 'Geen gestructureerde intake',
    description: 'Na klantgesprekken bestaan notities uit verspreide Remarkable-aantekeningen en mondelinge afstemming. Er is geen uniform startpunt voor een voorstel.',
  },
  {
    number: '02',
    title: 'Onvindbare contentbibliotheek',
    description: 'Bewezen modules en eerdere voorstellen zitten verspreid over Google Drive. Kennis is afhankelijk van individueel geheugen en de beschikbaarheid van Pieter en Thijs.',
  },
  {
    number: '03',
    title: 'Handmatig knutselproces',
    description: 'Elk voorstel wordt opgebouwd via copy-paste uit oude presentaties en kampt met Simplicate\'s opmaakproblemen. Een halve dag per voorstel is standaard.',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-subtle" id="solution">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
              Het probleem
            </span>
          </div>
          <h2 className="font-heading font-medium text-2xl md:text-3xl text-text tracking-tight leading-tight mb-4">
            Elke offerte begint bij nul
          </h2>
          <p className="text-md font-body text-text-subdued leading-relaxed">
            Breaking Habits trainers besteden gemiddeld een halve dag per voorstel — voornamelijk aan zoeken, kopiëren en formatteren. Het kernprobleem is drieledig:
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {painPoints.map((point) => (
            <Card
              key={point.number}
              variant="default"
              className="border-0 rounded-none p-8 md:p-10 bg-surface"
            >
              <span className="block font-heading font-semibold text-xs text-text-subdued tracking-widest mb-4">
                {point.number}
              </span>
              <h3 className="font-heading font-medium text-md text-text mb-3 tracking-tight">
                {point.title}
              </h3>
              <p className="text-sm font-body text-text-subdued leading-relaxed">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
