import { ICONS } from "./index"
import type { TIconId, TIconName } from "@/06_shared/types"

export const getIconIdFromName = (iconName: TIconName): TIconId | null => {
  const entries = Object.entries(ICONS) as Array<[TIconId, (typeof ICONS)[TIconId]]>
  const found = entries.find(([, icon]) => icon.name === iconName)
  return found ? found[0] : null
}
