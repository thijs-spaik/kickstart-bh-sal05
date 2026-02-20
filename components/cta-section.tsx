import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

interface CtaSectionProps { className?: string }

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section className={cn('py-xl md:py-[80px] bg-primary', className)}>
      <Container size="lg">
        <div className="text-center">
          <div className="flex items-center justify-center gap-sm mb-md"><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /><Text size="xs" className="text-primary-400 font-heading font-medium uppercase tracking-widest">Volgende stap</Text><div className="w-8 h-[2px] bg-accent" aria-hidden="true" /></div>
          <Heading level={2} className="text-[28px] md:text-[36px] lg:text-[44px] font-display font-normal text-text-inverse leading-tight mb-md">Klaar om een halve dag per voorstel te besparen?</Heading>
          <Text className="text-primary-300 leading-relaxed max-w-2xl mx-auto mb-xl">Start met een pilot voor Femke en Rick. Binnen twee weken een werkende n8n-workflow die het voorstelproces van Breaking Habits transformeert.</Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-md">
            <Button variant="secondary" size="lg" className="bg-accent text-text-inverse hover:bg-accent-hover border-0">Plan een kickoff sessie</Button>
            <Button variant="ghost" size="lg" className="text-primary-200 hover:text-text-inverse hover:bg-primary-700 border border-primary-600">Bekijk technische details</Button>
          </div>
          <div className="mt-xl pt-lg border-t border-primary-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-lg sm:gap-xl">
              {[{week:'Week 1',task:'Setup & intake form'},{week:'Week 2',task:'n8n workflow bouwen'},{week:'Week 3',task:'Testen met pilot users'},{week:'Week 4',task:'Go-live & documentatie'}].map((phase, index) => (
                <div key={phase.week} className="flex items-center gap-sm">
                  {index > 0 && <div className="hidden sm:block w-8 h-[1px] bg-primary-600" aria-hidden="true" />}
                  <div className="text-center sm:text-left"><Text as="span" size="xs" className="text-accent font-heading font-medium block">{phase.week}</Text><Text as="span" size="xs" className="text-primary-300">{phase.task}</Text></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
