import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef, ElementType } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const headingStyles = {
  1: 'font-display font-thin text-xl leading-tight',
  2: 'font-heading font-bold text-lg leading-tight',
  3: 'font-heading font-medium text-md',
  4: 'font-heading font-medium text-md',
  5: 'font-heading font-medium text-sm',
  6: 'font-heading font-medium text-sm',
} as const

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, as, children, ...props }, ref) => {
    const Component = (as || `h${level}`) as ElementType

    return (
      <Component
        className={cn(headingStyles[level], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

export { Heading }
