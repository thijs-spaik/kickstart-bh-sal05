import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'subtle'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        className={cn(
          'rounded-sm p-md font-body transition-shadow duration-200',
          {
            'bg-surface text-text border border-border': variant === 'default',
            'bg-surface-elevated text-text shadow-card hover:shadow-card-hover': variant === 'elevated',
            'bg-surface-subtle text-text': variant === 'subtle',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card }
