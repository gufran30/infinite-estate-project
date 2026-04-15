import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({ className, children }: {
  children: React.ReactNode,
  className?: string
}) => {
  return (
    <div className={cn(
      "max-w-7xl mx-auto px-4 lg:px-0", className
    )}>
      {children}
    </div>
  )
}

export default Container