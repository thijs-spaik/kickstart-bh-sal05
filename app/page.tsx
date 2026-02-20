import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { WorkflowSection } from '@/components/workflow-section'
import { ResultsSection } from '@/components/results-section'
import { ArchitectureSection } from '@/components/architecture-section'
import { TeamSection } from '@/components/team-section'
import { RisksSection } from '@/components/risks-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WorkflowSection />
        <ResultsSection />
        <ArchitectureSection />
        <TeamSection />
        <RisksSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
