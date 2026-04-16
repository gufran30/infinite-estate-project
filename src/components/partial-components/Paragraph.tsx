import { cn } from "@/lib/utils"

export const Paragraph = ({ children, className }: {
  children: React.ReactNode, className?: string
}) => {
  return (
    <p className={cn(`text-center text-base lg:text-lg pt-2 max-w-70 md:max-w-120 mx-auto text-neutral-600 dark:text-neutral-400 `, className)}>
      {children}
    </p>
  )
}