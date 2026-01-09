import { SEASONS, DAY_MS } from "./constants"

/**
 * Determines the season day for a given date
 * Seasons:
 * - Spring: Mar 1 – May 31
 * - Summer: Jun 1 – Aug 31
 * - Autumn: Sep 1 – Nov 30
 * - Winter: Dec 1 – Feb 28/29
 *
 * @param date - Date to calculate for (defaults to today)
 * @returns Object with season day (starting from 1)
 */
export const getSeasonDay = (date: Date = new Date()) => {
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const season = SEASONS.find((s) =>
    s.name === "winter" ? month === 12 || month <= 2 : month >= s.startMonth && month <= s.endMonth,
  )

  if (!season) {
    throw new Error("Season not found")
  }

  const seasonStartYear = season.name === "winter" && month <= 2 ? year - 1 : year

  const seasonStart = new Date(seasonStartYear, season.startMonth - 1, season.startDay)

  const seasonDay = Math.floor((date.getTime() - seasonStart.getTime()) / DAY_MS) + 1

  return { seasonDay }
}
