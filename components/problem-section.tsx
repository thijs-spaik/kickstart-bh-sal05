import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Card } from '@/components/ui/card'

interface ProblemSectionProps { className?: string }

export function ProblemSection({ className }: ProblemSectionProps) {
  const problems = [
    { number: '01', title: 'Geen gestructureerde intake', description: 'Informatie zit in losse Remarkable-notities, WhatsApp-berichten en herinneringen. Er is geen uniforme output om mee te werken.', impact: 'Elke trainer bouwt een ander soort voorstel' },
    { number: '02', title: 'Onvindbare content library', description: 'Bewezen modules en eerdere voorstellen zitten verspreid over Google Drive, ongetagd en onvindbaar voor het team.', impact: 'Institutionele kennis blijft ontoegankelijk' },
    { number: '03', title: 'Geen geautomatiseerde eerste versie', description: 'Elk voorstel wordt van nul opgebouwd door handmatig te zoeken, copy-pasten en formatteren \u2014 een foutgevoelig \u201cknutsel\u201d proces.', impact: 'Halve dag per voorstel, afhankelijk van Pieter/Thijs' },
  ]
  return (
    <section id="probleem" className={cn('py-xl md:py-[80px] bg-surface-subtle', className)}>
      <Container size="xl">
        <div className="max-w-2xl mb-xl">
          <div className="flex items-center gap-sm mb-md"><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /><Text size="xs" className="text-accent font-heading font-medium uppercase tracking-widest">Het probleem</Text></div>
          <Heading level={2} className="text-[28px] md:text-[36px] font-heading font-semibold leading-tight mb-md">Elk voorstel kost een halve dag \u2014 en wordt toch van nul opgebouwd</Heading>
          <Text className="text-text-subdued leading-relaxed">Breaking Habits trainers besteden gemiddeld 4+ uur per voorstel aan zoeken in Google Drive, kopi\u00ebren uit oude presentaties en worstelen met Simplicate-formatting.</Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {problems.map((p) => (
            <Card key={p.number} className="p-lg border border-border bg-surface">
              <Text as="span" size="xs" className="text-accent font-heading font-semibold block mb-md">{p.number}</Text>
              <Heading level={3} className="text-md font-heading font-semibold mb-sm">{p.title}</Heading>
              <Text size="sm" className="text-text-subdued leading-relaxed mb-md">{p.description}</Text>
              <div className="pt-md border-t border-border"><Text size="xs" className="text-text-subdued"><span className="text-accent font-medium">Impact:</span> {p.impact}</Text></div>
            </Card>
          ))}
        </div>
        <div className="mt-xl pt-lg border-t border-border flex flex-col sm:flex-row sm:items-center gap-md">
          <div className="flex items-baseline gap-sm"><Text as="span" className="text-[40px] font-display text-text">50%</Text><Text size="sm" className="text-text-subdued">van de voorsteltijd gaat naar zoeken en formatteren</Text></div>
          <div className="hidden sm:block w-[1px] h-8 bg-border mx-md" aria-hidden="true" />
          <div className="flex items-baseline gap-sm"><Text as="span" className="text-[40px] font-display text-text">0</Text><Text size="sm" className="text-text-subdued">voorstellen gebruiken een gestandaardiseerd template</Text></div>
        </div>
      </Container>
    </section>
  )
}
