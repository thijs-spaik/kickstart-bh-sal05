import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface SolutionSectionProps { className?: string }

export function SolutionSection({ className }: SolutionSectionProps) {
  return (
    <section id="oplossing" className={cn('py-xl md:py-[80px]', className)}>
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl lg:gap-[64px]">
          <div>
            <div className="flex items-center gap-sm mb-md"><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /><Text size="xs" className="text-accent font-heading font-medium uppercase tracking-widest">De oplossing</Text></div>
            <Heading level={2} className="text-[28px] md:text-[36px] font-heading font-semibold leading-tight mb-lg">Twee n8n-workflows die het duurste deel van het voorstelproces elimineren</Heading>
            <div className="space-y-lg">
              <div className="border-l-2 border-accent pl-md">
                <Text size="xs" className="text-accent font-heading font-medium uppercase tracking-wider mb-xs">Deel 1 \u2014 Intake structureren</Text>
                <Text className="text-text-subdued leading-relaxed">Trainer vult direct na het klantgesprek een Typeform in. n8n ontvangt de inzending, verwerkt eventuele foto&apos;s van notities via OCR (GPT-4o Vision), extraheert gestructureerde data en controleert op ontbrekende velden.</Text>
              </div>
              <div className="border-l-2 border-primary pl-md">
                <Text size="xs" className="text-text-subdued font-heading font-medium uppercase tracking-wider mb-xs">Deel 2 \u2014 Concept genereren</Text>
                <Text className="text-text-subdued leading-relaxed">Bij complete intake zoekt n8n vergelijkbare voorstellen op Google Drive, genereert een gestructureerd concept via GPT-4o met alle 8 vereiste secties, schrijft dit in een Google Doc template, en stuurt het naar de trainer.</Text>
              </div>
            </div>
            <div className="mt-lg p-md bg-surface-subtle border border-border">
              <Text size="sm" className="text-text leading-relaxed"><span className="font-heading font-semibold">Slim ontkoppeld:</span> Simplicate wordt bewust omzeild in MVP. Trainers kopi\u00ebren de finale tekst vanuit Google Docs \u2014 dit elimineert technisch risico terwijl het 80% van de tijdwinst behoudt.</Text>
            </div>
          </div>
          <div>
            <div className="border border-border bg-surface p-lg">
              <Text size="xs" className="text-text-subdued font-heading font-medium uppercase tracking-wider mb-lg">Systeem architectuur</Text>
              <div className="space-y-sm">
                {[{system:'Typeform',role:'Intake formulier',type:'trigger'as const},{system:'n8n',role:'Orchestratie & logica',type:'core'as const},{system:'OpenAI GPT-4o',role:'OCR + Draft generatie',type:'ai'as const},{system:'Google Drive',role:'Content zoeken & opslaan',type:'storage'as const},{system:'Google Docs',role:'Template & output',type:'output'as const},{system:'Slack',role:'Governance & notificaties',type:'comm'as const},{system:'Gmail',role:'Trainer delivery',type:'comm'as const}].map((item) => (
                  <div key={item.system} className="flex items-center gap-md p-sm border-b border-border last:border-b-0">
                    <div className={cn('w-2 h-2 shrink-0',{'bg-accent':item.type==='trigger','bg-primary':item.type==='core','bg-info':item.type==='ai','bg-success':item.type==='storage','bg-warning':item.type==='output','bg-primary-400':item.type==='comm'})} />
                    <div className="flex-1 flex items-center justify-between"><Text size="sm" className="font-heading font-medium text-text">{item.system}</Text><Text size="xs" className="text-text-subdued">{item.role}</Text></div>
                  </div>
                ))}
              </div>
              <div className="mt-lg pt-md border-t border-border"><Text size="xs" className="text-text-subdued">Alle systemen verbonden via n8n-nodes met native API-integraties.</Text></div>
            </div>
            <div className="mt-md p-md border border-dashed border-border bg-surface">
              <div className="flex items-start gap-sm"><Text as="span" size="xs" className="text-warning font-heading font-medium uppercase tracking-wider shrink-0">Post-MVP</Text><Text size="xs" className="text-text-subdued">Simplicate API-integratie voor automatische deal pre-fill.</Text></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
