import { Container } from '@/components/ui/container'
import { Card } from '@/components/ui/card'

interface ResultMetric {
  value: string
  label: string
  detail: string
}

const metrics: ResultMetric[] = [
  {
    value: '4 uur',
    label: 'Tijdsbesparing',
    detail: 'Per voorstel — van halve dag naar minder dan een uur',
  },
  {
    value: '8',
    label: 'Geautomatiseerde secties',
    detail: 'Aanleiding, Doelstelling, Doelgroep, Aanpak, Planning, Investering, Randvoorwaarden, Volgende stap',
  },
  {
    value: '€0',
    label: 'Simplicate-risico',
    detail: 'Geen integratie met Simplicate in MVP — bewust omzeild',
  },
  {
    value: '<90s',
    label: 'Generatietijd',
    detail: 'AI produceert concept-voorstel in minder dan 90 seconden',
  },
]

interface MvpFeature {
  name: string
  status: 'proven' | 'validation' | 'workaround'
}

const mvpFeatures: MvpFeature[] = [
  { name: 'Gestructureerde intake via formulier', status: 'proven' },
  { name: 'OCR / image-to-text voor notities', status: 'validation' },
  { name: 'Detectie ontbrekende velden', status: 'proven' },
  { name: 'Google Drive zoeken', status: 'proven' },
  { name: 'AI-gegenereerd conceptvoorstel', status: 'proven' },
  { name: 'Google Doc vanuit template', status: 'proven' },
  { name: '€10k governance check', status: 'proven' },
  { name: 'Trainer notificatie met link', status: 'proven' },
]

export function ResultsSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-subtle" id="results">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
              Resultaat
            </span>
          </div>
          <h2 className="font-heading font-medium text-2xl md:text-3xl text-text tracking-tight leading-tight mb-4">
            Concrete impact, meetbaar verschil
          </h2>
          <p className="text-md font-body text-text-subdued leading-relaxed">
            De MVP lost het duurste deel van het proposalproces op: van ruwe intake-notities naar een gestructureerd concept in onder een uur.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-surface p-6 md:p-8">
              <p className="font-heading font-semibold text-2xl md:text-3xl text-text tracking-tight mb-1">
                {metric.value}
              </p>
              <p className="text-xs font-body font-medium text-accent tracking-widest uppercase mb-2">
                {metric.label}
              </p>
              <p className="text-xs font-body text-text-subdued leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* MVP Feature List */}
        <div className="max-w-2xl">
          <h3 className="font-heading font-medium text-md text-text tracking-tight mb-6">
            MVP Scope — 8 features
          </h3>
          <div className="space-y-0">
            {mvpFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className="flex items-center justify-between py-3 border-b border-border"
              >
                <div className="flex items-center gap-3">
                  <span className="font-heading text-xs text-text-subdued tracking-widest w-6">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-body text-text">
                    {feature.name}
                  </span>
                </div>
                <span
                  className={`text-xs font-body tracking-wide px-2 py-0.5 ${
                    feature.status === 'proven'
                      ? 'bg-success/10 text-success'
                      : feature.status === 'validation'
                        ? 'bg-warning/10 text-warning'
                        : 'bg-info/10 text-info'
                  }`}
                >
                  {feature.status === 'proven'
                    ? '✓ Bewezen'
                    : feature.status === 'validation'
                      ? '⚠ Validatie'
                      : '↻ Workaround'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
