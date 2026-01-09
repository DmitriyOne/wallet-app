import { getSeasonDay } from "./get-season-day"

/**
 * Calculates daily points for a given date using the formula:
 * - Season day 1: 2 points
 * - Season day 2: 3 points
 * - Season day 3+: 100% of points from day before previous + 60% of points from previous day
 *
 * @param date - Date to calculate for (defaults to today)
 * @returns Number of points
 */
export const calculateDailyPoints = (date: Date = new Date()): number => {
  const { seasonDay } = getSeasonDay(date)

  if (seasonDay === 1) {
    return 2
  }

  if (seasonDay === 2) {
    return 3
  }

  // For day 3+, calculate points for all previous days iteratively
  const points: number[] = [2, 3] // Days 1 and 2

  for (let day = 3; day <= seasonDay; day++) {
    const dayBeforePrevious = points[day - 3] // Index day-3 corresponds to day day-2
    const previousDay = points[day - 2] // Index day-2 corresponds to day day-1

    const newPoints = dayBeforePrevious + 0.6 * previousDay
    points.push(newPoints)
  }

  return Math.round(points[seasonDay - 1])
}
