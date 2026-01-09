import { faCreditCard, faStore, faBullseye, faCheck, faChevronRight } from "@/06_shared/lib/icons"

export const iconMap = {
  "fa-credit-card": faCreditCard,
  "fa-store": faStore,
  "fa-bullseye": faBullseye,
  "fa-check": faCheck,
  "fa-chevron-right": faChevronRight,
} as const

export const backgroundClasses = {
  creditCard: "bg-[#F6B73C]",
  store: "bg-[#0051BA]",
  bullseye: "bg-[#CC0000]",
  checked: "bg-[#eeeeef]",
  arrowRight: "",
} as const

export const iconColorClasses = {
  creditCard: "text-white",
  store: "text-white",
  bullseye: "text-white",
  checked: "text-[#030303]",
  arrowRight: "text-[#cfcfd0]",
} as const

export const roundedClasses = {
  full: "rounded-full",
  md: "rounded-md",
} as const

export const iconSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
} as const
