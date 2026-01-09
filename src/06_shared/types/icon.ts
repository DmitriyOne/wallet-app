import { ICONS } from "@/06_shared/lib/icons"
import { roundedClasses, iconSizeClasses } from "@/06_shared/constants/icon"

export type TIcon = {
  provider: string
  name: string
  background: string
}

export type TIconId = keyof typeof ICONS
export type TRounded = keyof typeof roundedClasses
export type TIconSize = keyof typeof iconSizeClasses
