/**
 * Formats the number of points:
 * - If points >= 1000, displays in "K" format (e.g., 28745 -> 29K)
 * - Otherwise returns string representation of the number
 *
 * @param points - Number of points
 * @returns Formatted string
 */
export const formatPoints = (points: number): string => {
  if (points >= 1000) {
    const thousands = Math.round(points / 1000)
    return `${thousands}K`
  }

  return String(points)
}
