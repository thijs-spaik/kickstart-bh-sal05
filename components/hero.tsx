import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

interface HeroProps { className?: string }

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn('relative py-xl md:py-[80px] lg:py-[120px] overflow-hidden', className)}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" aria-hidden="true" />
      <Container size="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl lg:gap-[64px] items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-sm mb-lg">
              <div className="w-8 h-[2px] bg-accent" aria-hidden="true" />
              <Text size="sm" className="text-accent font-heading font-medium uppercase tracking-widest">SAL05 \u2014 Proposal Automation</Text>
            </div>
            <Heading level={1} className="text-[32px] md:text-[44px] lg:text-[52px] font-display font-normal leading-[1.1] tracking-tight mb-lg">
              Van intake naar <span className="italic">concept-voorstel</span> in minder dan een uur
            </Heading>
            <Text size="lg" className="text-text-subdued leading-relaxed mb-xl max-w-lg">
              Trainers besteden een halve dag per voorstel aan zoeken, kopi\u00ebren en formatteren. Deze n8n-automatisering elimineert het handwerk en levert een gestructureerd eerste concept op basis van intake en bewezen content.
            </Text>
            <div className="flex flex-col sm:flex-row gap-md">
              <Button variant="primary" size="lg">Bekijk de workflow</Button>
              <Button variant="ghost" size="lg">Lees de business case</Button>
            </div>
            <div className="mt-xl pt-lg border-t border-border">
              <div className="flex gap-xl">
                <div>
                  <Text as="span" size="xs" className="text-text-subdued font-heading uppercase tracking-wider block mb-xs">Tijdsbesparing</Text>
                  <Text as="span" className="text-[28px] font-display font-normal text-text">4+ uur</Text>
                  <Text size="xs" className="text-text-subdued">per voorstel</Text>
                </div>
                <div className="w-[1px] bg-border" aria-hidden="true" />
                <div>
                  <Text as="span" size="xs" className="text-text-subdued font-heading uppercase tracking-wider block mb-xs">Doorlooptijd</Text>
                  <Text as="span" className="text-[28px] font-display font-normal text-text">&lt;1 uur</Text>
                  <Text size="xs" className="text-text-subdued">van intake tot concept</Text>
                </div>
                <div className="w-[1px] bg-border hidden sm:block" aria-hidden="true" />
                <div className="hidden sm:block">
                  <Text as="span" size="xs" className="text-text-subdued font-heading uppercase tracking-wider block mb-xs">Stappen</Text>
                  <Text as="span" className="text-[28px] font-display font-normal text-text">8</Text>
                  <Text size="xs" className="text-text-subdued">volledig geautomatiseerd</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="border border-border bg-surface p-lg">
                <div className="flex items-center gap-sm mb-md">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <Text size="xs" className="text-text-subdued font-heading uppercase tracking-wider">Automatische workflow</Text>
                </div>
                <div className="space-y-md">
                  {[{step:'01',label:'Typeform intake',status:'Trigger'},{step:'02',label:'OCR notities',status:'GPT-4o Vision'},{step:'03',label:'Veldvalidatie',status:'n8n IF-node'},{step:'04',label:'Drive zoeken',status:'Google Drive'},{step:'05',label:'Voorstel genereren',status:'GPT-4o'},{step:'06',label:'Google Doc maken',status:'Docs API'},{step:'07',label:'Governance check',status:'>\u20ac10k \u2192 Slack'},{step:'08',label:'Trainer notificatie',status:'Email/Slack'}].map((item) => (
                    <div key={item.step} className="flex items-center gap-md group">
                      <Text as="span" size="xs" className="text-accent font-heading font-medium w-6 shrink-0">{item.step}</Text>
                      <div className="flex-1 flex items-center justify-between border-b border-border pb-sm">
                        <Text size="sm" className="text-text font-heading font-medium">{item.label}</Text>
                        <Text size="xs" className="text-text-subdued">{item.status}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent opacity-20" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
