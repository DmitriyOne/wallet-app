/**
 * Season definitions with start and end dates
 * Months are 1-indexed (1 = January, 12 = December)
 */
export const SEASONS = [
  {
    name: "spring",
    startMonth: 3, // March
    startDay: 1,
    endMonth: 5, // May
    endDay: 31,
  },
  {
    name: "summer",
    startMonth: 6, // June
    startDay: 1,
    endMonth: 8, // August
    endDay: 31,
  },
  {
    name: "autumn",
    startMonth: 9, // September
    startDay: 1,
    endMonth: 11, // November
    endDay: 30,
  },
  {
    name: "winter",
    startMonth: 12, // December
    startDay: 1,
    endMonth: 2, // February
    endDay: 29, // Handles leap years
  },
] as const

export const DAY_MS = 1000 * 60 * 60 * 24
