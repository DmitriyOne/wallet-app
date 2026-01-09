import { type PropsWithChildren } from "react"
import { cn } from "@/06_shared/lib/tailwind-classes"

type TCardProps = PropsWithChildren & {
  className?: string
}

export const Card = ({ children, className }: TCardProps) => {
  return <div className={cn("bg-white rounded-lg p-4", className)}>{children}</div>
}
