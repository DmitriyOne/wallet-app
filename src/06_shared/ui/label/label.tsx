import { cn } from "@/06_shared/lib/tailwind-classes"

type TLabelProps = {
  text: string
  className?: string
}

export const Label = ({ text, className }: TLabelProps) => {
  return <span className={cn("rounded-xs p-0.5 bg-[#f2f2f6] text-[#9a9a9f] leading-[100%]", className)}>{text}</span>
}
