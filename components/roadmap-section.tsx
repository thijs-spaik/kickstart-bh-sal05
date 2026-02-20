import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface RoadmapSectionProps { className?: string }
interface RoadmapItem { title: string; description: string; status: 'mvp' | 'validate' | 'post-mvp' }

export function RoadmapSection({ className }: RoadmapSectionProps) {
  const mvpItems: RoadmapItem[] = [
    { title: 'Intake formulier (Typeform)', description: 'Gestructureerde intake direct na klantgesprek', status: 'mvp' },
    { title: 'OCR handgeschreven notities', description: 'Remarkable/handgeschreven foto \u2192 tekst', status: 'validate' },
    { title: 'Veldvalidatie & feedback loop', description: 'Automatische check en trainer-notificatie', status: 'mvp' },
    { title: 'Google Drive content search', description: 'Keyword-based search in eerdere voorstellen', status: 'mvp' },
    { title: 'AI voorstel draft (8 secties)', description: 'GPT-4o met BH tone-of-voice en klantdata', status: 'mvp' },
    { title: 'Google Docs template output', description: 'Concept in bewerkbaar Google Doc', status: 'validate' },
    { title: '\u20ac10k governance check', description: 'Automatische Slack-escalatie naar Pieter', status: 'mvp' },
    { title: 'Trainer delivery notificatie', description: 'Doc-link via email of Slack', status: 'mvp' },
  ]
  const postMvpItems: RoadmapItem[] = [
    { title: 'Content module library met tags', description: 'Gestructureerde database van herbruikbare trainingsmodules', status: 'post-mvp' },
    { title: 'Simplicate deal pre-fill via API', description: 'Automatisch quotation record aanmaken', status: 'post-mvp' },
    { title: 'PDF export & email bijlage', description: 'Google Doc \u2192 PDF via Drive API', status: 'post-mvp' },
    { title: 'Remarkable auto-upload trigger', description: 'Google Drive Trigger voor notitie-verwerking', status: 'post-mvp' },
    { title: 'Semantische similarity scoring', description: 'OpenAI embeddings + vector database', status: 'post-mvp' },
  ]
  const statusConfig = { mvp: { label: 'MVP', bg: 'bg-success', textClass: 'text-success' }, validate: { label: 'Validatie', bg: 'bg-warning', textClass: 'text-warning' }, 'post-mvp': { label: 'Post-MVP', bg: 'bg-primary-400', textClass: 'text-primary-400' } }
  return (
    <section className={cn('py-xl md:py-[80px]', className)}>
      <Container size="xl">
        <div className="max-w-2xl mb-xl">
          <div className="flex items-center gap-sm mb-md"><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /><Text size="xs" className="text-accent font-heading font-medium uppercase tracking-widest">Roadmap</Text></div>
          <Heading level={2} className="text-[28px] md:text-[36px] font-heading font-semibold leading-tight mb-md">MVP eerst, dan doorontwikkelen op basis van gebruik</Heading>
          <Text className="text-text-subdued leading-relaxed">De MVP richt zich op het elimineren van de duurste stap: van intake naar eerste concept.</Text>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          <div>
            <div className="flex items-center gap-sm mb-lg pb-md border-b border-border"><div className="w-3 h-3 bg-success" /><Heading level={3} className="text-md font-heading font-semibold">MVP Scope</Heading><Text as="span" size="xs" className="text-text-subdued ml-auto">8 features</Text></div>
            <div className="space-y-0">{mvpItems.map((item) => (<div key={item.title} className="flex gap-md py-sm border-b border-border last:border-b-0"><div className="flex items-center gap-sm shrink-0 w-20"><div className={cn('w-1.5 h-1.5', statusConfig[item.status].bg)} /><Text as="span" size="xs" className={cn('font-heading font-medium', statusConfig[item.status].textClass)}>{statusConfig[item.status].label}</Text></div><div className="flex-1"><Text size="sm" className="font-heading font-medium text-text">{item.title}</Text><Text size="xs" className="text-text-subdued">{item.description}</Text></div></div>))}</div>
          </div>
          <div>
            <div className="flex items-center gap-sm mb-lg pb-md border-b border-border"><div className="w-3 h-3 bg-primary-400" /><Heading level={3} className="text-md font-heading font-semibold">Post-MVP</Heading><Text as="span" size="xs" className="text-text-subdued ml-auto">5 features</Text></div>
            <div className="space-y-0">{postMvpItems.map((item) => (<div key={item.title} className="flex gap-md py-sm border-b border-border last:border-b-0"><div className="flex items-center gap-sm shrink-0 w-20"><div className={cn('w-1.5 h-1.5', statusConfig[item.status].bg)} /><Text as="span" size="xs" className={cn('font-heading font-medium', statusConfig[item.status].textClass)}>{statusConfig[item.status].label}</Text></div><div className="flex-1"><Text size="sm" className="font-heading font-medium text-text">{item.title}</Text><Text size="xs" className="text-text-subdued">{item.description}</Text></div></div>))}</div>
            <div className="mt-lg p-md border border-dashed border-border bg-surface">
              <Text size="xs" className="text-text-subdued font-heading font-medium uppercase tracking-wider mb-sm">Open vragen voor kickoff</Text>
              <div className="space-y-xs">
                {['Typeform vs Google Forms \u2014 heeft BH een actief Typeform account?','Wie beheert het master Google Doc template?','Exacte definitie \u20ac10k-drempel (totaal contract of per voorstel)?','Zijn eerdere voorstellen op Drive in Google Docs formaat?'].map((q, i) => (
                  <Text key={i} size="xs" className="text-text-subdued flex gap-sm"><span className="text-accent shrink-0">{String(i + 1).padStart(2, '0')}</span>{q}</Text>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
