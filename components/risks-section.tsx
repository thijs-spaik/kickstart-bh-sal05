import { Container } from '@/components/ui/container'

interface Risk {
  id: string
  risk: string
  mitigation: string
}

const risks: Risk[] = [
  {
    id: 'R1',
    risk: 'AI genereert feitelijk onjuiste claims of onrealistische beloftes',
    mitigation: 'Elke notificatie vermeldt "Dit is een concept — controleer alle claims." Systeem-prompt gebruikt [CONTROLEER] markers. Pieter reviewt voorstellen boven €10k.',
  },
  {
    id: 'R2',
    risk: 'Google Drive zoeken levert geen bruikbare resultaten',
    mitigation: 'Graceful fallback — concept gaat door zonder context. Notificatie meldt wanneer geen vergelijkbare voorstellen gevonden. Post-MVP: top 10 voorstellen migreren naar Google Docs.',
  },
  {
    id: 'R3',
    risk: 'Lage adoptie — trainers slaan het formulier over',
    mitigation: 'Mobiel-vriendelijk formulier van < 5 minuten. Pilot met Femke + Rick. Framing als "bespaart 3 uur" niet "nieuw proces."',
  },
]

export function RisksSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
              Risico&apos;s
            </span>
          </div>
          <h2 className="font-heading font-medium text-2xl md:text-3xl text-text tracking-tight leading-tight mb-4">
            Bekende risico&apos;s, concrete mitigaties
          </h2>
        </div>

        {/* Risks */}
        <div className="space-y-0">
          {risks.map((item) => (
            <div key={item.id} className="border-b border-border py-8 first:pt-0 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-8">
                {/* ID */}
                <span className="font-heading font-semibold text-xs text-text-subdued tracking-widest">
                  {item.id}
                </span>

                {/* Risk */}
                <div>
                  <p className="text-xs font-heading font-medium text-error tracking-widest uppercase mb-2">Risico</p>
                  <p className="text-sm font-body text-text leading-relaxed">
                    {item.risk}
                  </p>
                </div>

                {/* Mitigation */}
                <div>
                  <p className="text-xs font-heading font-medium text-success tracking-widest uppercase mb-2">Mitigatie</p>
                  <p className="text-sm font-body text-text-subdued leading-relaxed">
                    {item.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
