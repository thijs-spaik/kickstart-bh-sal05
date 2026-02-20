import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface WorkflowSectionProps { className?: string }
interface WorkflowStep { number: string; title: string; description: string; tool: string; status: 'proven' | 'validate' | 'workaround' }

export function WorkflowSection({ className }: WorkflowSectionProps) {
  const steps: WorkflowStep[] = [
    { number: '01', title: 'Intake formulier indienen', description: 'Trainer vult Typeform in na klantgesprek: klantnaam, sector, doelgroep, gewenst resultaat, duur, budgetindicatie en vrije notities.', tool: 'Typeform \u2192 n8n Trigger', status: 'proven' },
    { number: '02', title: 'OCR van handgeschreven notities', description: 'Foto van Remarkable-notities wordt automatisch omgezet naar gestructureerde tekst via GPT-4o Vision.', tool: 'OpenAI GPT-4o Vision', status: 'validate' },
    { number: '03', title: 'Velden valideren & feedback', description: 'n8n controleert of alle verplichte velden aanwezig zijn. Bij ontbrekende velden ontvangt de trainer automatisch een melding.', tool: 'n8n IF-node + Gmail/Slack', status: 'proven' },
    { number: '04', title: 'Vergelijkbare voorstellen zoeken', description: 'Google Drive doorzoeken op sector + doel-keywords. Top 3 resultaten gedownload en ingekort tot 800 tokens elk.', tool: 'Google Drive API', status: 'proven' },
    { number: '05', title: 'Concept-voorstel genereren', description: 'GPT-4o genereert een compleet voorstel met 8 secties in Breaking Habits tone-of-voice.', tool: 'OpenAI GPT-4o (temp 0.4)', status: 'proven' },
    { number: '06', title: 'Google Doc aanmaken', description: 'Master template kopi\u00ebren via Drive API, placeholders vervangen met gegenereerde content via Docs batchUpdate.', tool: 'Google Docs API', status: 'validate' },
    { number: '07', title: 'Governance check (\u20ac10k+)', description: 'Bij voorstellen boven \u20ac10.000 wordt automatisch een Slack-bericht naar Pieter gestuurd voor review.', tool: 'n8n IF-node + Slack', status: 'proven' },
    { number: '08', title: 'Trainer notificatie', description: 'Trainer ontvangt een link naar het Google Doc per e-mail of Slack. Direct klaar voor review.', tool: 'Gmail / Slack', status: 'proven' },
  ]
  const statusLabels = { proven: { label: 'Bewezen', className: 'text-success' }, validate: { label: 'Te valideren', className: 'text-warning' }, workaround: { label: 'Workaround', className: 'text-info' } }
  return (
    <section id="workflow" className={cn('py-xl md:py-[80px] bg-surface-subtle', className)}>
      <Container size="xl">
        <div className="max-w-2xl mb-xl">
          <div className="flex items-center gap-sm mb-md"><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /><Text size="xs" className="text-accent font-heading font-medium uppercase tracking-widest">De workflow</Text></div>
          <Heading level={2} className="text-[28px] md:text-[36px] font-heading font-semibold leading-tight mb-md">8 stappen, volledig geautomatiseerd via n8n</Heading>
          <Text className="text-text-subdued leading-relaxed">Van Typeform-inzending tot Google Doc in de inbox van de trainer.</Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-xl gap-y-0">
          {steps.map((step) => (
            <div key={step.number} className="relative py-md border-b border-border group">
              <div className="flex gap-md">
                <Text as="span" size="xs" className="text-accent font-heading font-semibold w-6 pt-[2px] shrink-0">{step.number}</Text>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-md mb-xs">
                    <Heading level={3} className="text-md font-heading font-semibold">{step.title}</Heading>
                    <Text as="span" size="xs" className={cn('font-heading font-medium shrink-0', statusLabels[step.status].className)}>{statusLabels[step.status].label}</Text>
                  </div>
                  <Text size="sm" className="text-text-subdued leading-relaxed mb-sm">{step.description}</Text>
                  <Text size="xs" className="text-text-subdued font-heading"><span className="text-primary-500">\u2192</span> {step.tool}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-xl pt-lg border-t border-border">
          <Text size="xs" className="text-text-subdued font-heading font-medium uppercase tracking-wider mb-md">Output secties in elk voorstel</Text>
          <div className="flex flex-wrap gap-sm">
            {['Aanleiding','Doelstelling','Doelgroep','Aanpak & Modules','Planning','Investering','Randvoorwaarden','Volgende stap'].map((s) => (
              <span key={s} className="px-md py-xs text-sm font-heading text-text border border-border bg-surface">{s}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
