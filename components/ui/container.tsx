import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', ...props }, ref) => {
    return (
      <div
        className={cn(
          'mx-auto w-full px-md',
          {
            'max-w-screen-sm': size === 'sm',
            'max-w-screen-md': size === 'md',
            'max-w-screen-lg': size === 'lg',
            'max-w-screen-xl': size === 'xl',
            'max-w-none': size === 'full',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'

export { Container }
