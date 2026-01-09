import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ICONS } from "@/06_shared/lib/icons"
import { cn } from "@/06_shared/lib/tailwind-classes"
import {
  iconMap,
  backgroundClasses,
  iconColorClasses,
  roundedClasses,
  iconSizeClasses,
} from "@/06_shared/constants/icon"
import { type TIconId, type TRounded, type TIconSize } from "@/06_shared/types"

type TIconProps = {
  id: TIconId
  rounded?: TRounded
  size?: TIconSize
  className?: string
}

export const Icon = ({ id, rounded = "full", size = "2xl", className }: TIconProps) => {
  const icon = ICONS[id]
  const faIcon = iconMap[icon.name]

  if (!faIcon) {
    return null
  }

  const roundedClass = roundedClasses[rounded]
  const backgroundClass = backgroundClasses[id]
  const iconColorClass = iconColorClasses[id]
  const iconSizeClass = iconSizeClasses[size]

  return (
    <div className={cn("flex items-center justify-center", roundedClass, backgroundClass, className)}>
      <FontAwesomeIcon
        icon={faIcon}
        className={cn(iconSizeClass, iconColorClass)}
      />
    </div>
  )
}
