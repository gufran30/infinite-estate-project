import { cn } from "@/lib/utils"
import React from "react"

export const Heading = ({
  children,
  className,
  as = "h1"
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) => {

  const Tag = as

  return (
    <div>
      <Tag className={cn(
        `text-center font-semibold text-neutral-800 dark:text-neutral-200 capitalize max-w-120 mx-auto font-ptSerif`,
        as === "h1" ? "text-3xl md:text-4xl max-w-120" : "text-xl md:text-2xl max-w-180",
        className)}>
        {children}
      </Tag>
    </div>
  )
}