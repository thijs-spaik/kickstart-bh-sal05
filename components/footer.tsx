import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'

interface FooterProps { className?: string }

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('py-lg border-t border-border', className)}>
      <Container size="xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-md">
          <div className="flex items-center gap-sm">
            <div className="w-6 h-6 bg-primary flex items-center justify-center"><span className="text-text-inverse font-heading font-bold text-xs">BH</span></div>
            <Text size="sm" className="text-text-subdued font-heading">Breaking Habits \u00d7 SPAIK</Text>
          </div>
          <div className="flex items-center gap-lg">
            <Text size="xs" className="text-text-subdued">SAL05 \u2014 Automated Proposal Drafting</Text>
            <Text size="xs" className="text-text-subdued">Demo prototype</Text>
          </div>
        </div>
      </Container>
    </footer>
  )
}
