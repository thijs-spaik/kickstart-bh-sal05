import { Container } from '@/components/ui/container'

interface WorkflowStep {
  number: string
  title: string
  description: string
  status: 'proven' | 'needs-validation'
  tools: string[]
}

const steps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Intake via formulier',
    description: 'Trainer vult direct na klantgesprek een Typeform in: klantnaam, sector, doelgroep, gewenst resultaat, duur, budget en vrije notities.',
    status: 'proven',
    tools: ['Typeform', 'n8n Trigger'],
  },
  {
    number: '02',
    title: 'OCR & veldvalidatie',
    description: 'Foto\'s van Remarkable-notities worden via GPT-4o vision omgezet naar tekst. Ontbrekende verplichte velden worden gedetecteerd en teruggestuurd.',
    status: 'needs-validation',
    tools: ['OpenAI GPT-4o', 'Gmail / Slack'],
  },
  {
    number: '03',
    title: 'Google Drive zoeken',
    description: 'Automatisch zoeken naar vergelijkbare eerdere voorstellen op basis van sector en doelstellingen. Maximaal 5 resultaten, getruneerd tot 800 tokens elk.',
    status: 'proven',
    tools: ['Google Drive API', 'Keyword Search'],
  },
  {
    number: '04',
    title: 'AI concept generatie',
    description: 'GPT-4o genereert een gestructureerd voorstel met 8 secties in Breaking Habits tone-of-voice, inclusief context uit eerdere voorstellen.',
    status: 'proven',
    tools: ['OpenAI GPT-4o', 'n8n'],
  },
  {
    number: '05',
    title: 'Google Doc & governance',
    description: 'Concept wordt automatisch in een Google Doc template geplaatst. Bij voorstellen boven €10.000 krijgt Pieter een Slack-notificatie voor review.',
    status: 'proven',
    tools: ['Google Docs API', 'Slack'],
  },
  {
    number: '06',
    title: 'Oplevering aan trainer',
    description: 'Trainer ontvangt een link naar het bewerkbare Google Doc via email of Slack — klaar om te reviewen, aan te passen en te versturen.',
    status: 'proven',
    tools: ['Gmail / Slack', 'Google Docs'],
  },
]

export function WorkflowSection() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="workflow">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
              Workflow
            </span>
          </div>
          <h2 className="font-heading font-medium text-2xl md:text-3xl text-text tracking-tight leading-tight mb-4">
            Zes stappen, volledig automatisch
          </h2>
          <p className="text-md font-body text-text-subdued leading-relaxed">
            De n8n-pipeline verwerkt elk intake-formulier door een betrouwbare keten van validatie, zoeken, generatie en oplevering.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid grid-cols-1 md:grid-cols-[48px_1fr] gap-4 md:gap-8 py-8 border-b border-border last:border-b-0"
              >
                {/* Step Number */}
                <div className="flex items-start">
                  <span className="relative z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-surface border border-border font-heading font-semibold text-xs text-text-subdued tracking-widest">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading font-medium text-md text-text tracking-tight">
                        {step.title}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 text-xs font-body tracking-wide ${
                          step.status === 'proven'
                            ? 'bg-success/10 text-success'
                            : 'bg-warning/10 text-warning'
                        }`}
                      >
                        {step.status === 'proven' ? '✓ Bewezen' : '⚠ Validatie nodig'}
                      </span>
                    </div>
                    <p className="text-sm font-body text-text-subdued leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 md:min-w-[200px]">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-body text-text-subdued border border-border tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
