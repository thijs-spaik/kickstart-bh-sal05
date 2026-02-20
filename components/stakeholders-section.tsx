import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface StakeholdersSectionProps { className?: string }
interface Stakeholder { name: string; role: string; relationship: string; type: 'primary' | 'secondary' }

export function StakeholdersSection({ className }: StakeholdersSectionProps) {
  const stakeholders: Stakeholder[] = [
    { name: 'Femke Mostert', role: 'Trainer, voorstelauteur', relationship: 'Vult intake in, reviewt AI-concept', type: 'primary' },
    { name: 'Irma Driessen', role: 'Trainer, voorstelauteur', relationship: 'Profiteert van commerci\u00eble structuur en checklists', type: 'primary' },
    { name: 'Rick van Bentum', role: 'Commercieel lead', relationship: 'Valideert uniformiteit; definieert modulebibliotheek', type: 'primary' },
    { name: 'Pieter van Beurden', role: 'Directeur / strategische review', relationship: 'Ontvangt goedkeuringsverzoek voor voorstellen >\u20ac10k', type: 'secondary' },
    { name: 'Tess van Toor', role: 'Operations support', relationship: 'Onderhoudt content library; beheert tagging', type: 'secondary' },
  ]
  return (
    <section id="resultaten" className={cn('py-xl md:py-[80px] bg-surface-subtle', className)}>
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl lg:gap-[64px]">
          <div>
            <div className="flex items-center gap-sm mb-md"><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /><Text size="xs" className="text-accent font-heading font-medium uppercase tracking-widest">Team & stakeholders</Text></div>
            <Heading level={2} className="text-[28px] md:text-[36px] font-heading font-semibold leading-tight mb-lg">Vijf mensen, \u00e9\u00e9n workflow</Heading>
            <div className="space-y-0">
              {stakeholders.map((p) => (
                <div key={p.name} className="flex gap-md py-md border-b border-border">
                  <div className={cn('w-10 h-10 shrink-0 flex items-center justify-center font-heading font-semibold text-sm', p.type === 'primary' ? 'bg-primary text-text-inverse' : 'bg-surface border border-border text-text-subdued')}>
                    {p.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-sm mb-xs"><Text as="span" size="sm" className="font-heading font-semibold text-text">{p.name}</Text>{p.type === 'primary' && <Text as="span" size="xs" className="text-accent font-heading font-medium">Primair</Text>}</div>
                    <Text size="xs" className="text-text-subdued mb-xs">{p.role}</Text>
                    <Text size="xs" className="text-text-subdued">\u2192 {p.relationship}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-sm mb-md"><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /><Text size="xs" className="text-accent font-heading font-medium uppercase tracking-widest">Verwachte resultaten</Text></div>
            <Heading level={2} className="text-[28px] md:text-[36px] font-heading font-semibold leading-tight mb-lg">Meetbare impact vanaf dag \u00e9\u00e9n</Heading>
            <div className="grid grid-cols-2 gap-md mb-xl">
              {[{metric:'4+ uur',label:'bespaard per voorstel'},{metric:'<1 uur',label:'doorlooptijd intake\u2192concept'},{metric:'100%',label:'voorstelconsistentie'},{metric:'\u20ac0',label:'Simplicate-workaround risico'}].map((r) => (
                <div key={r.label} className="p-md border border-border bg-surface"><Text as="span" className="text-[24px] font-display text-text block mb-xs">{r.metric}</Text><Text size="xs" className="text-text-subdued">{r.label}</Text></div>
              ))}
            </div>
            <Text size="xs" className="text-text-subdued font-heading font-medium uppercase tracking-wider mb-md">Belangrijkste risico&apos;s & mitigatie</Text>
            <div className="space-y-md">
              {[{risk:'AI genereert onjuiste claims',mitigation:'Elke draft bevat [CONTROLEER]-markers.'},{risk:'Drive zoekresultaten irrelevant of leeg',mitigation:'Nette fallback \u2014 concept gaat door zonder context.'},{risk:'Lage adoptie \u2014 trainers slaan formulier over',mitigation:'Mobile-friendly formulier <5 min. Framing: \"bespaart 3 uur\".'}].map((item) => (
                <div key={item.risk} className="border-l-2 border-border pl-md">
                  <Text size="sm" className="text-text font-heading font-medium mb-xs">{item.risk}</Text>
                  <Text size="xs" className="text-text-subdued">\u2192 {item.mitigation}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
