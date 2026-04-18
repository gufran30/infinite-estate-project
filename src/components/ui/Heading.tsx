import { cn } from "@/lib/utils"

export const Heading = ({ children, className }: {
  children: React.ReactNode, className?: string
}) => {

  return (
    <div>
      <h1 className={cn(`text-center text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 capitalize max-w-120 mx-auto font-ptSerif`, className)}>
        {children}
      </h1>
    </div>
  )
}