import { ICONS } from "@/06_shared/lib/icons"
import { roundedClasses, iconSizeClasses } from "@/06_shared/constants/icon"

export type TIconId = keyof typeof ICONS
export type TIconName = (typeof ICONS)[TIconId]["name"]
export type TRounded = keyof typeof roundedClasses
export type TIconSize = keyof typeof iconSizeClasses

export type TIcon = {
  name: TIconName
  provider: string
  background: string
}
