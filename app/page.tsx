import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { WorkflowSection } from '@/components/workflow-section'
import { FeaturesSection } from '@/components/features-section'
import { StakeholdersSection } from '@/components/stakeholders-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WorkflowSection />
        <FeaturesSection />
        <StakeholdersSection />
        <RoadmapSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
