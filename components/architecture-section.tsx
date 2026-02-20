import { Container } from '@/components/ui/container'

interface ArchStep {
  label: string
  detail: string
  systems: string[]
}

const archSteps: ArchStep[] = [
  {
    label: 'TRIGGER',
    detail: 'Typeform submission',
    systems: ['typeformTrigger'],
  },
  {
    label: 'STAP 1',
    detail: 'Normaliseer intake data',
    systems: ['Set node'],
  },
  {
    label: 'STAP 2',
    detail: 'Bestand geüpload? → OCR',
    systems: ['IF node', 'OpenAI GPT-4o'],
  },
  {
    label: 'STAP 3',
    detail: 'Velden compleet? → of notificatie',
    systems: ['IF node', 'Gmail / Slack'],
  },
  {
    label: 'STAP 4',
    detail: 'Zoek Google Drive',
    systems: ['Drive API', 'fileFolder.search'],
  },
  {
    label: 'STAP 5',
    detail: 'Genereer voorstel',
    systems: ['OpenAI GPT-4o'],
  },
  {
    label: 'STAP 6',
    detail: 'Maak Google Doc',
    systems: ['Drive file.copy', 'Docs batchUpdate'],
  },
  {
    label: 'STAP 7',
    detail: 'Governance check > €10k',
    systems: ['IF node', 'Slack DM'],
  },
  {
    label: 'STAP 8',
    detail: 'Notificeer trainer',
    systems: ['Gmail / Slack'],
  },
]

export function ArchitectureSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-subtle">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
              Architectuur
            </span>
          </div>
          <h2 className="font-heading font-medium text-2xl md:text-3xl text-text tracking-tight leading-tight mb-4">
            n8n Pipeline — stap voor stap
          </h2>
          <p className="text-md font-body text-text-subdued leading-relaxed">
            De volledige automatisering draait als één n8n workflow met conditionals, API-calls en AI-generatie.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="relative">
          {archSteps.map((step, index) => (
            <div key={step.label} className="relative flex gap-6 md:gap-8">
              {/* Vertical connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 border-2 ${
                    index === 0
                      ? 'border-accent bg-accent'
                      : 'border-primary-400 bg-surface'
                  }`}
                />
                {index < archSteps.length - 1 && (
                  <div className="w-px flex-1 bg-border min-h-[40px]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-6 md:pb-8 flex-1">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <span className="font-heading font-semibold text-xs text-text-subdued tracking-widest min-w-[72px]">
                    {step.label}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-body text-text mb-2">
                      {step.detail}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.systems.map((sys) => (
                        <span
                          key={sys}
                          className="inline-flex items-center px-2 py-0.5 text-xs font-body text-text-subdued bg-surface border border-border"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Systems */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs font-heading font-medium text-text-subdued tracking-widest uppercase mb-4">
            Externe systemen
          </p>
          <div className="flex flex-wrap gap-2">
            {['Typeform API', 'Google Drive API v3', 'Google Docs API', 'OpenAI API', 'Slack API', 'Gmail API'].map((system) => (
              <span
                key={system}
                className="inline-flex items-center px-3 py-1.5 text-xs font-body text-text border border-border-strong"
              >
                {system}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
