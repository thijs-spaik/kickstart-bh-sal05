import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef, ElementType } from 'react'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  as?: 'p' | 'span' | 'div'
}

const sizeStyles = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size = 'md', as = 'p', children, ...props }, ref) => {
    const Component = as as ElementType

    return (
      <Component
        className={cn('font-body leading-relaxed', sizeStyles[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'

export { Text }
