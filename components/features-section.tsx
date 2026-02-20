import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Card } from '@/components/ui/card'

interface FeaturesSectionProps { className?: string }
interface Feature { id: string; title: string; description: string; criteria: string; status: 'proven' | 'validate' }

export function FeaturesSection({ className }: FeaturesSectionProps) {
  const features: Feature[] = [
    { id: 'F1', title: 'Gestructureerde intake via formulier', description: 'Vervangt verspreide notities door \u00e9\u00e9n uniform formulier dat alle benodigde voorstel-input vastlegt.', criteria: 'Inzending triggert workflow binnen 60 seconden.', status: 'proven' },
    { id: 'F2', title: 'OCR voor handgeschreven notities', description: 'Converteert foto\'s van Remarkable of handgeschreven notities naar gestructureerde tekst via GPT-4o Vision.', criteria: 'Heldere foto retourneert minimaal 80% van zichtbare tekst.', status: 'validate' },
    { id: 'F3', title: 'Ontbrekende-velden detectie', description: 'Automatische controle op verplichte velden met directe terugkoppeling naar de trainer via email of Slack.', criteria: 'Melding binnen 2 minuten bij ontbrekende velden.', status: 'proven' },
    { id: 'F4', title: 'Google Drive doorzoeken', description: 'Zoekt sector- en doel-keywords in eerdere voorstellen. Retourneert tot 5 resultaten, ingekort tot ~800 tokens.', criteria: 'Minimaal 1 resultaat voor gangbare sectoren.', status: 'proven' },
    { id: 'F5', title: 'AI-gegenereerd concept-voorstel', description: 'GPT-4o genereert een gestructureerd voorstel in Breaking Habits tone-of-voice met alle 8 vereiste secties.', criteria: 'Alle 8 secties aanwezig. Klantdetails correct.', status: 'proven' },
    { id: 'F6', title: 'Google Doc vanuit template', description: 'Kopieert master template via Drive API en vervangt placeholders via Docs batchUpdate. Direct bewerkbaar.', criteria: 'Nieuw Doc in juiste map. Trainer kan direct bewerken.', status: 'validate' },
  ]
  return (
    <section className={cn('py-xl md:py-[80px]', className)}>
      <Container size="xl">
        <div className="max-w-2xl mb-xl">
          <div className="flex items-center gap-sm mb-md"><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /><Text size="xs" className="text-accent font-heading font-medium uppercase tracking-widest">MVP Features</Text></div>
          <Heading level={2} className="text-[28px] md:text-[36px] font-heading font-semibold leading-tight mb-md">6 kernfeatures met heldere acceptatiecriteria</Heading>
          <Text className="text-text-subdued leading-relaxed">Elke feature is gevalideerd op haalbaarheid. Groen = bewezen. Geel = vereist validatie.</Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {features.map((f) => (
            <Card key={f.id} className="p-lg border border-border bg-surface flex flex-col">
              <div className="flex items-start justify-between mb-md">
                <Text as="span" size="xs" className="text-text-subdued font-heading font-medium">{f.id}</Text>
                <span className={cn('inline-flex items-center gap-xs px-sm py-[2px] text-xs font-heading font-medium', f.status === 'proven' ? 'text-success bg-surface-subtle' : 'text-warning bg-surface-subtle')}>
                  <span className={cn('w-1.5 h-1.5 rounded-full', f.status === 'proven' ? 'bg-success' : 'bg-warning')} />
                  {f.status === 'proven' ? 'Bewezen' : 'Validatie'}
                </span>
              </div>
              <Heading level={3} className="text-md font-heading font-semibold mb-sm">{f.title}</Heading>
              <Text size="sm" className="text-text-subdued leading-relaxed mb-md flex-1">{f.description}</Text>
              <div className="pt-md border-t border-border">
                <Text size="xs" className="text-text-subdued font-heading uppercase tracking-wider mb-xs">Acceptatiecriteria</Text>
                <Text size="xs" className="text-text leading-relaxed">{f.criteria}</Text>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
