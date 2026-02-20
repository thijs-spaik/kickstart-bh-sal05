import { Container } from '@/components/ui/container'

interface TeamMember {
  name: string
  role: string
  relationship: string
}

const team: TeamMember[] = [
  {
    name: 'Femke Mostert',
    role: 'Trainer',
    relationship: 'Vult intake in, reviewt AI-concept',
  },
  {
    name: 'Irma Driessen',
    role: 'Trainer',
    relationship: 'Profiteert van structuur en checklists',
  },
  {
    name: 'Rick van Bentum',
    role: 'Commercieel lead',
    relationship: 'Valideert uniformiteit, beheert module-bibliotheek',
  },
  {
    name: 'Pieter van Beurden',
    role: 'Directeur',
    relationship: 'Review bij voorstellen > €10k',
  },
  {
    name: 'Tess van Toor',
    role: 'Operations',
    relationship: 'Onderhoudt contentbibliotheek en tagging',
  },
]

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="team">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
              Team
            </span>
          </div>
          <h2 className="font-heading font-medium text-2xl md:text-3xl text-text tracking-tight leading-tight mb-4">
            Wie werkt waarmee
          </h2>
          <p className="text-md font-body text-text-subdued leading-relaxed">
            Vijf stakeholders met duidelijke rollen in het geautomatiseerde proposalproces.
          </p>
        </div>

        {/* Team Table */}
        <div className="border border-border">
          {/* Header */}
          <div className="grid grid-cols-[1fr_120px_1fr] md:grid-cols-[200px_160px_1fr] gap-4 px-6 py-3 bg-surface-subtle border-b border-border">
            <span className="text-xs font-heading font-medium text-text-subdued tracking-widest uppercase">Naam</span>
            <span className="text-xs font-heading font-medium text-text-subdued tracking-widest uppercase">Rol</span>
            <span className="text-xs font-heading font-medium text-text-subdued tracking-widest uppercase hidden md:block">Relatie tot automatisering</span>
          </div>

          {/* Rows */}
          {team.map((member) => (
            <div
              key={member.name}
              className="grid grid-cols-[1fr_120px_1fr] md:grid-cols-[200px_160px_1fr] gap-4 px-6 py-4 border-b border-border last:border-b-0 hover:bg-surface-elevated transition-colors duration-150"
            >
              <span className="text-sm font-body font-medium text-text">{member.name}</span>
              <span className="text-sm font-body text-text-subdued">{member.role}</span>
              <span className="text-sm font-body text-text-subdued hidden md:block">{member.relationship}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
