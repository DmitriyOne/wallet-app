import { DAY_NAMES } from "./constants"

/**
 * Formats a date string based on how recent it is:
 * - For dates within the last week: returns the day name (e.g., "Monday", "Tuesday")
 * - For older dates: returns the original date string (e.g., "10/1/2022")
 *
 * @param dateString - Date string in M/D/YYYY format (e.g., "10/1/2022")
 * @returns Formatted date string or null if date is invalid
 */
export const formatDate = (dateString: string): string | null => {
  try {
    const [month, day, year] = dateString.split("/").map(Number)
    const transactionDate = new Date(year, month - 1, day)
    const today = new Date()

    const diffTime = today.getTime() - transactionDate.getTime()
    const diffDays = diffTime / (1000 * 60 * 60 * 24)

    if (diffDays >= 0 && diffDays < 7) {
      return DAY_NAMES[transactionDate.getDay()]
    }

    return dateString
  } catch {
    // TODO: add error logging
    return null
  }
}
