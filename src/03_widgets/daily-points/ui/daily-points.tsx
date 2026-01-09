import { memo, useMemo } from "react"
import { Card } from "@/06_shared/ui/card"
import { calculateDailyPoints, formatPoints } from "@/06_shared/lib/daily-points"

type TDailyPointsProps = {
  className?: string
}

export const DailyPoints = memo(({ className }: TDailyPointsProps) => {
  const points = useMemo(() => calculateDailyPoints(), [])
  const formattedPoints = formatPoints(points)

  return (
    <Card className={className}>
      <h3 className='text-base font-semibold text-[#030303]'>Daily Points</h3>
      <p className='text-sm text-[#9e9ea2]'>{formattedPoints}</p>
    </Card>
  )
})

DailyPoints.displayName = "DailyPoints"
