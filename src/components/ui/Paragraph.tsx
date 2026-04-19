import { cn } from "@/lib/utils"
import React from "react"

export const Paragraph = ({
  children,
  className,
  size = "lg"
}: {
  children: React.ReactNode,
  className?: string,
  size?: "lg" | "sm"
}) => {
  return (
    <p className={cn(
      `text-center pt-2 max-w-70 md:max-w-120 mx-auto text-neutral-600 dark:text-neutral-400 `,
      size === "lg" ? "text-base lg:text-lg" : "text-sm lg:text-base",
      className)}>
      {children}
    </p>
  )
}