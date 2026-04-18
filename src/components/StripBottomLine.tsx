import { cn } from "@/lib/utils"
import { motion } from "motion/react"


export const StripBottomLine = ({ className }: { className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.8 } }
      }}
      className={cn(`h-2 lg:h-3 w-full bg-brand-100 dark:bg-brand-500`, className)} />
  )
}