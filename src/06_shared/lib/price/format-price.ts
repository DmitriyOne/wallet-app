import type { TCurrency } from "@/05_entities/transaction"

/**
 * Formats a number as currency using Intl.NumberFormat
 *
 * Intl.NumberFormat is a built-in JavaScript API for internationalized number formatting.
 * It formats numbers according to locale-specific rules (currency symbols, decimal separators, etc.)
 *
 * @param amount - The amount to format
 * @param currency - The currency code (USD, EUR, GBP, etc.)
 * @returns Formatted currency string (e.g., "$100.50", "€250.75") or null if formatting fails
 */
export const formatPrice = (amount: number, currency: TCurrency): string | null => {
  try {
    if (isNaN(amount) || !isFinite(amount)) {
      return null
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  } catch {
    return null
  }
}
