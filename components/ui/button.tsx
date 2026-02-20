import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-body font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          'rounded',
          // Size variants
          {
            'px-sm py-xs text-sm': size === 'sm',
            'px-md py-sm text-md': size === 'md',
            'px-lg py-md text-lg': size === 'lg',
          },
          // Color variants
          {
            'bg-primary text-text-inverse shadow-glow hover:shadow-glow-hover hover:bg-primary-hover active:bg-primary-700':
              variant === 'primary',
            'bg-accent text-text-inverse shadow-glow hover:shadow-glow-hover hover:bg-accent-hover active:opacity-90':
              variant === 'secondary',
            'bg-surface-subtle text-text hover:bg-surface-elevated active:opacity-90':
              variant === 'ghost',
            'bg-error text-text-inverse shadow-glow hover:shadow-glow-hover hover:opacity-90 active:opacity-80':
              variant === 'destructive',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
